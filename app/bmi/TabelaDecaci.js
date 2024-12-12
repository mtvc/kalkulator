function TabelaDecaci() {
  return (
    <div>
      <h3 className="pt-6 text-xl font-bold">
        BMI-za dečake i tinejdžere (ispod 20 godina)
      </h3>
      <div className="py-4 max-w-sm md:max-w-xl lg:max-w-full mx-auto overflow-x-scroll">
        <table className="min-w-max max-w-full border-separate border-spacing-1.5">
          <thead className="bg-gray-300 mx-4 ">
            <tr className="px-4">
              <th>Godine</th>
              <th>Totalna mršavost</th>
              <th>Umerena mršavost</th>
              <th>Blaga mršavost</th>
              <th>Normalna težina</th>
              <th>Prekomerna težina</th>
              <th>Gojaznost (blaga)</th>
              <th>Gojaznost (teška)</th>
              <th>Gojaznost (ekstremna)</th>
            </tr>
          </thead>
          <tbody className="text-center px-4">
            <tr>
              <td>2</td>
              <td>&lt; 14.9</td>
              <td>14.9–15.4</td>
              <td>15.5–16.0</td>
              <td>16.1–18.2</td>
              <td>18.3–20.3</td>
              <td>20.4–22.3</td>
              <td>22.4–24.3</td>
              <td>&ge; 24.4</td>
            </tr>
            <tr>
              <td>3</td>
              <td>&lt; 14.9</td>
              <td>14.9–15.5</td>
              <td>15.6–16.2</td>
              <td>16.3–18.4</td>
              <td>18.5–20.6</td>
              <td>20.7–22.7</td>
              <td>22.8–24.9</td>
              <td>&ge; 25.0</td>
            </tr>
            <tr>
              <td>4</td>
              <td>&lt; 15.0</td>
              <td>15.0–15.6</td>
              <td>15.7–16.3</td>
              <td>16.4–18.6</td>
              <td>18.7–20.9</td>
              <td>21.0–23.1</td>
              <td>23.2–25.3</td>
              <td>&ge; 25.4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>&lt; 15.2</td>
              <td>15.2–15.8</td>
              <td>15.9–16.5</td>
              <td>16.6–18.9</td>
              <td>19.0–21.2</td>
              <td>21.3–23.4</td>
              <td>23.5–25.6</td>
              <td>&ge; 25.7</td>
            </tr>
            <tr>
              <td>6</td>
              <td>&lt; 15.4</td>
              <td>15.4–16.0</td>
              <td>16.1–16.7</td>
              <td>16.8–19.2</td>
              <td>19.3–21.5</td>
              <td>21.6–23.7</td>
              <td>23.8–25.9</td>
              <td>&ge; 26.0</td>
            </tr>
            <tr>
              <td>7</td>
              <td>&lt; 15.6</td>
              <td>15.6–16.2</td>
              <td>16.3–16.9</td>
              <td>17.0–19.4</td>
              <td>19.5–21.7</td>
              <td>21.8–23.9</td>
              <td>24.0–26.1</td>
              <td>&ge; 26.2</td>
            </tr>
            <tr>
              <td>8</td>
              <td>&lt; 15.8</td>
              <td>15.8–16.4</td>
              <td>16.5–17.1</td>
              <td>17.2–19.7</td>
              <td>19.8–22.0</td>
              <td>22.1–24.2</td>
              <td>24.3–26.4</td>
              <td>&ge; 26.5</td>
            </tr>
            <tr>
              <td>9</td>
              <td>&lt; 16.0</td>
              <td>16.0–16.6</td>
              <td>16.7–17.3</td>
              <td>17.4–19.9</td>
              <td>20.0–22.3</td>
              <td>22.4–24.5</td>
              <td>24.6–26.7</td>
              <td>&ge; 26.8</td>
            </tr>
            <tr>
              <td>10</td>
              <td>&lt; 16.2</td>
              <td>16.2–16.8</td>
              <td>16.9–17.5</td>
              <td>17.6–20.1</td>
              <td>20.2–22.5</td>
              <td>22.6–24.7</td>
              <td>24.8–26.9</td>
              <td>&ge; 27.0</td>
            </tr>
            <tr>
              <td>11</td>
              <td>&lt; 16.4</td>
              <td>16.4–17.0</td>
              <td>17.1–17.7</td>
              <td>17.8–20.3</td>
              <td>20.4–22.7</td>
              <td>22.8–24.9</td>
              <td>25.0–27.1</td>
              <td>&ge; 27.2</td>
            </tr>
            <tr>
              <td>12</td>
              <td>&lt; 16.6</td>
              <td>16.6–17.2</td>
              <td>17.3–17.9</td>
              <td>18.0–20.5</td>
              <td>20.6–22.9</td>
              <td>23.0–25.1</td>
              <td>25.2–27.3</td>
              <td>&ge; 27.4</td>
            </tr>
            <tr>
              <td>13</td>
              <td>&lt; 16.8</td>
              <td>16.8–17.4</td>
              <td>17.5–18.1</td>
              <td>18.2–20.7</td>
              <td>20.8–23.1</td>
              <td>23.2–25.3</td>
              <td>25.4–27.5</td>
              <td>&ge; 27.6</td>
            </tr>
            <tr>
              <td>14</td>
              <td>&lt; 17.0</td>
              <td>17.0–17.6</td>
              <td>17.7–18.3</td>
              <td>18.4–20.9</td>
              <td>21.0–23.3</td>
              <td>23.4–25.5</td>
              <td>25.6–27.7</td>
              <td>&ge; 27.8</td>
            </tr>
            <tr>
              <td>15</td>
              <td>&lt; 17.2</td>
              <td>17.2–17.8</td>
              <td>17.9–18.5</td>
              <td>18.6–21.1</td>
              <td>21.2–23.5</td>
              <td>23.6–25.7</td>
              <td>25.8–27.9</td>
              <td>&ge; 28.0</td>
            </tr>
            <tr>
              <td>16</td>
              <td>&lt; 17.4</td>
              <td>17.4–18.0</td>
              <td>18.1–18.7</td>
              <td>18.8–21.3</td>
              <td>21.4–23.7</td>
              <td>23.8–25.9</td>
              <td>26.0–28.1</td>
              <td>&ge; 28.2</td>
            </tr>
            <tr>
              <td>17</td>
              <td>&lt; 17.6</td>
              <td>17.6–18.2</td>
              <td>18.3–18.9</td>
              <td>19.0–21.5</td>
              <td>21.6–23.9</td>
              <td>24.0–26.1</td>
              <td>26.2–28.3</td>
              <td>&ge; 28.4</td>
            </tr>
            <tr>
              <td>18</td>
              <td>&lt; 17.8</td>
              <td>17.8–18.4</td>
              <td>18.5–19.1</td>
              <td>19.2–21.7</td>
              <td>21.8–24.1</td>
              <td>24.2–26.3</td>
              <td>26.4–28.5</td>
              <td>&ge; 28.6</td>
            </tr>
            <tr>
              <td>19</td>
              <td>&lt; 18.0</td>
              <td>18.0–18.6</td>
              <td>18.7–19.3</td>
              <td>19.4–21.9</td>
              <td>22.0–24.3</td>
              <td>24.4–26.5</td>
              <td>26.6–28.7</td>
              <td>&ge; 28.8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelaDecaci;
