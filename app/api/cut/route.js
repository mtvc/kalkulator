export const runtime = "edge";

export async function POST(req) {
  try {
    const { board, cuttingWidth, rectangles } = await req.json();

    const boardWidth = Number(board.width);
    const boardHeight = Number(board.height);
    const toolWidth = Number(cuttingWidth);

    // Process pieces once, including quantity and sorting
    let pieces = rectangles.flatMap((r, i) => {
      const quantity = Number(r.quantity) || 1;
      const width = Number(r.width);
      const height = Number(r.height);

      return Array.from({ length: quantity }, (_, idx) => ({
        id: `${i}-${idx}`,
        name: r.name || `Piece ${i + 1}`,
        width,
        height,
      }));
    });

    // Sort pieces by area, descending
    pieces.sort((a, b) => b.width * b.height - a.width * a.height);

    // Initialize available spaces with the entire board
    let availableSpaces = [
      { x: 0, y: 0, width: boardWidth, height: boardHeight },
    ];
    let placedPieces = [];

    // Function to check if a piece overlaps with any already placed piece
    function checkOverlap(newPiece) {
      for (let placedPiece of placedPieces) {
        if (
          newPiece.x < placedPiece.x + placedPiece.width &&
          newPiece.x + newPiece.width > placedPiece.x &&
          newPiece.y < placedPiece.y + placedPiece.height &&
          newPiece.y + newPiece.height > placedPiece.y
        ) {
          return true; // There's an overlap
        }
      }
      return false; // No overlap
    }

    // Function to place a piece using the Maximal Rectangles Algorithm
    function placePiece(piece) {
      for (let i = 0; i < availableSpaces.length; i++) {
        let space = availableSpaces[i];

        // Try placing the piece in the current space
        if (piece.width <= space.width && piece.height <= space.height) {
          // Create a new piece object with its coordinates
          const newPiece = {
            ...piece,
            x: space.x,
            y: space.y,
          };

          // Check for overlap before placing
          if (checkOverlap(newPiece)) {
            continue; // Skip this placement if there's an overlap
          }

          // Place the piece
          placedPieces.push(newPiece);

          // Split the space into new smaller spaces
          let newSpaces = [];

          // Right of the placed piece
          if (space.width - piece.width > toolWidth) {
            newSpaces.push({
              x: space.x + piece.width + toolWidth,
              y: space.y,
              width: space.width - piece.width - toolWidth,
              height: space.height,
            });
          }

          // Below the placed piece
          if (space.height - piece.height > toolWidth) {
            newSpaces.push({
              x: space.x,
              y: space.y + piece.height + toolWidth,
              width: space.width,
              height: space.height - piece.height - toolWidth,
            });
          }

          // Remove the used space and add the new ones
          availableSpaces.splice(i, 1);
          availableSpaces.push(...newSpaces);

          // Break as we've placed the piece
          return true;
        }
      }
      return false;
    }

    // Place all pieces
    for (let piece of pieces) {
      if (!placePiece(piece)) {
        return new Response(
          JSON.stringify({
            error: "Nije pronađeno dovoljno prostora za sve delove.",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    return new Response(
      JSON.stringify({
        message: "krojna lista je kreirana.",
        layout: placedPieces,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
