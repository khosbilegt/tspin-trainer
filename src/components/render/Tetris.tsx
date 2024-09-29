import { Stage } from "@pixi/react";
import Playfield from "./Playfield";
import HoldZone from "./HoldZone";
import NextZone from "./NextZone";
import {
  IBlock,
  JBlock,
  LBlock,
  OBlock,
  SBlock,
  TBlock,
  Tetrimino,
  ZBlock,
} from "./models";
import { useEffect, useState } from "react";

const initialField = Array.from({ length: 10 }, () =>
  Array.from({ length: 20 }, () => 0x000000)
);

function Tetris() {
  const [isInitialized, setInitialized] = useState(false);
  const [field, setField] = useState(initialField);
  const [nextBlocks, setNextBlocks] = useState<Tetrimino[]>([]);

  const generateRandomBlock = () => {
    const shape = Math.floor(Math.random() * 7);
    let nextBlock = new LBlock(0, 0);
    switch (shape) {
      case 0:
        nextBlock = new LBlock(0, 0);
        break;
      case 1:
        nextBlock = new SBlock(0, 0);
        break;
      case 2:
        nextBlock = new JBlock(0, 0);
        break;
      case 3:
        nextBlock = new OBlock(0, 0);
        break;
      case 4:
        nextBlock = new ZBlock(0, 0);
        break;
      case 5:
        nextBlock = new TBlock(0, 0);
        break;
      case 6:
        nextBlock = new IBlock(0, 0);
        break;
    }
    return nextBlock;
  };

  const generateNextBlocks = () => {
    const tempBlocks: Tetrimino[] = [];
    for (var i = 0; i < 5; i++) {
      let nextBlock = generateRandomBlock();
      tempBlocks.push(nextBlock);
    }
    setNextBlocks(tempBlocks);
  };

  const spawnBlock = () => {
    setNextBlocks((prevValue) => {
      const tempBlocks = [...prevValue];
      tempBlocks.shift();
      return tempBlocks;
    });
    const nextBlock = generateRandomBlock();
    setNextBlocks((prevValue) => {
      const tempBlocks = [...prevValue];
      tempBlocks.push(nextBlock);
      return tempBlocks;
    });
  };

  const handleControls = (e: KeyboardEvent) => {
    switch (e.key) {
      case "q": {
        spawnBlock();
        break;
      }
    }
  };

  useEffect(() => {
    if (!isInitialized) {
      setInitialized((prevValue) => {
        if (!prevValue) {
          document.addEventListener("keydown", (e) => handleControls(e));
        }
        return true;
      });
    }
    setInitialized(true);
    generateNextBlocks();
  }, []);

  useEffect(() => {
    console.log(nextBlocks);
  }, [nextBlocks]);

  return (
    <Stage width={900} height={900}>
      <Playfield field={field} />
      <HoldZone block={new LBlock(0, 0)} />
      <NextZone blocks={nextBlocks} />
    </Stage>
  );
}

export default Tetris;
