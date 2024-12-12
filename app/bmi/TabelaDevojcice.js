function TabelaDevojcice() {
  return (
    <div>
      <h3 className="pt-6 text-xl font-bold">
        BMI-za devojčice i tinejdžerke (ispod 20 godina)
      </h3>
      <div className="py-4 max-w-sm md:max-w-xl lg:max-w-full mx-auto overflow-x-scroll">
        <table className="min-w-max max-w-full border-separate border-spacing-1.5">
          <thead className="bg-gray-300 mx-4 ">
            <tr className="px-4">
              <th>Godine</th>
              <th>Totalna mršavost (&lt; 3%)</th>
              <th>Umerena mršavost (3%–5%)</th>
              <th>Normalna težina (5%–85%)</th>
              <th>Prekomerna težina (85%–95%)</th>
              <th>Gojaznost (&gt; 95%)</th>
            </tr>
          </thead>
          <tbody className="text-center px-4">
            <tr>
              <td>2</td>
              <td>&lt; 14.1</td>
              <td>14.1–14.5</td>
              <td>14.6–18.1</td>
              <td>18.2–19.7</td>
              <td>&gt; 19.7</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&lt; 14.0</td>
              <td>14.0–14.4</td>
              <td>14.5–18.0</td>
              <td>18.1–19.6</td>
              <td>&gt; 19.6</td>
            </tr>
            <tr>
              <td>4</td>
              <td>&lt; 13.9</td>
              <td>13.9–14.3</td>
              <td>14.4–17.9</td>
              <td>18.0–19.5</td>
              <td>&gt; 19.5</td>
            </tr>
            <tr>
              <td>5</td>
              <td>&lt; 13.8</td>
              <td>13.8–14.2</td>
              <td>14.3–17.8</td>
              <td>17.9–19.4</td>
              <td>&gt; 19.4</td>
            </tr>
            <tr>
              <td>6</td>
              <td>&lt; 13.9</td>
              <td>13.9–14.4</td>
              <td>14.5–18.3</td>
              <td>18.4–20.0</td>
              <td>&gt; 20.0</td>
            </tr>
            <tr>
              <td>7</td>
              <td>&lt; 14.1</td>
              <td>14.1–14.6</td>
              <td>14.7–18.8</td>
              <td>18.9–20.6</td>
              <td>&gt; 20.6</td>
            </tr>
            <tr>
              <td>8</td>
              <td>&lt; 14.3</td>
              <td>14.3–14.8</td>
              <td>14.9–19.3</td>
              <td>19.4–21.2</td>
              <td>&gt; 21.2</td>
            </tr>
            <tr>
              <td>9</td>
              <td>&lt; 14.5</td>
              <td>14.5–15.0</td>
              <td>15.1–19.8</td>
              <td>19.9–21.8</td>
              <td>&gt; 21.8</td>
            </tr>
            <tr>
              <td>10</td>
              <td>&lt; 14.8</td>
              <td>14.8–15.3</td>
              <td>15.4–20.3</td>
              <td>20.4–22.4</td>
              <td>&gt; 22.4</td>
            </tr>
            <tr>
              <td>11</td>
              <td>&lt; 15.0</td>
              <td>15.0–15.5</td>
              <td>15.6–20.8</td>
              <td>20.9–23.0</td>
              <td>&gt; 23.0</td>
            </tr>
            <tr>
              <td>12</td>
              <td>&lt; 15.3</td>
              <td>15.3–15.8</td>
              <td>15.9–21.3</td>
              <td>21.4–23.6</td>
              <td>&gt; 23.6</td>
            </tr>
            <tr>
              <td>13</td>
              <td>&lt; 15.6</td>
              <td>15.6–16.1</td>
              <td>16.2–21.8</td>
              <td>21.9–24.2</td>
              <td>&gt; 24.2</td>
            </tr>
            <tr>
              <td>14</td>
              <td>&lt; 15.8</td>
              <td>15.8–16.3</td>
              <td>16.4–22.3</td>
              <td>22.4–24.8</td>
              <td>&gt; 24.8</td>
            </tr>
            <tr>
              <td>15</td>
              <td>&lt; 16.0</td>
              <td>16.0–16.5</td>
              <td>16.6–22.8</td>
              <td>22.9–25.4</td>
              <td>&gt; 25.4</td>
            </tr>
            <tr>
              <td>16</td>
              <td>&lt; 16.2</td>
              <td>16.2–16.7</td>
              <td>16.8–23.3</td>
              <td>23.4–26.0</td>
              <td>&gt; 26.0</td>
            </tr>
            <tr>
              <td>17</td>
              <td>&lt; 16.4</td>
              <td>16.4–16.9</td>
              <td>17.0–23.8</td>
              <td>23.9–26.6</td>
              <td>&gt; 26.6</td>
            </tr>
            <tr>
              <td>18</td>
              <td>&lt; 16.6</td>
              <td>16.6–17.1</td>
              <td>17.2–24.3</td>
              <td>24.4–27.2</td>
              <td>&gt; 27.2</td>
            </tr>
            <tr>
              <td>19</td>
              <td>&lt; 16.8</td>
              <td>16.8–17.3</td>
              <td>17.4–24.8</td>
              <td>24.9–27.8</td>
              <td>&gt; 27.8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelaDevojcice;
