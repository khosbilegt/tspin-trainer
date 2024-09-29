import { Stage } from "@pixi/react";
import Playfield from "./Playfield";
import { useState } from "react";

function Tetris() {
  const [field, setField] = useState([]);

  return (
    <Stage width={800} height={900}>
      <Playfield />
    </Stage>
  );
}

export default Tetris;
