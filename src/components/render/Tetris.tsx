import { Stage } from "@pixi/react";
import Playfield from "./Playfield";
import { useState } from "react";
import HoldZone from "./HoldZone";
import NextZone from "./NextZone";

const initialField = Array.from({ length: 10 }, () =>
  Array.from({ length: 20 }, () => 0x000000)
);

function Tetris() {
  const [field, setField] = useState(initialField);

  return (
    <Stage width={900} height={900}>
      <Playfield field={field} />
      <HoldZone />
      <NextZone />
    </Stage>
  );
}

export default Tetris;
