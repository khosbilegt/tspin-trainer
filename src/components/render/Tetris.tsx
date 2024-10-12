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
import { useEffect, useRef, useState } from "react";

const initialField = Array.from({ length: 10 }, () =>
  Array.from({ length: 20 }, () => 0x000000)
);

function Tetris() {
  const lastSpawnedTetrimino = useRef<Tetrimino>();
  const [isInitialized, setInitialized] = useState(false);
  const [field, setField] = useState(initialField);
  const [nextBlocks, setNextBlocks] = useState<Tetrimino[]>([]);
  const [fieldBlocks, setFieldBlocks] = useState<Tetrimino[]>([]);

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
      const spawnedBlock = tempBlocks.shift();
      const nextBlock = generateRandomBlock();
      tempBlocks.push(nextBlock);
      if (spawnedBlock && lastSpawnedTetrimino.current !== spawnedBlock) {
        spawnedBlock.x = 4;
        spawnedBlock.y = 0;
        lastSpawnedTetrimino.current = spawnedBlock;
        setFieldBlocks((prevValue) => {
          const tempBlocks = [...prevValue];
          tempBlocks.push(spawnedBlock);
          return tempBlocks;
        });
      }
      return tempBlocks;
    });
  };

  const handleFieldChange = (spawnedBlock: Tetrimino) => {};

  const handleControls = (e: KeyboardEvent) => {
    switch (e.key) {
      case "q": {
        spawnBlock();
        break;
      }
      case "w": {
        console.log("HERE");
        const tetrimino = lastSpawnedTetrimino.current?.rotateRight();
        console.log(tetrimino);
        if (tetrimino) {
          setFieldBlocks((prevValue) => {
            const tempBlocks = [...prevValue];
            tempBlocks.pop();
            tempBlocks.push(tetrimino);
            console.log(tempBlocks);
            return tempBlocks;
          });
        }
        break;
      }
    }
  };

  useEffect(() => {
    if (fieldBlocks?.length > 0) {
      setField((prevValue) => {
        const tempField = [...prevValue];
        fieldBlocks.forEach((block) => {
          block.blocks.forEach((row, i) => {
            row.forEach((cell, j) => {
              if (cell === 1) {
                tempField[block.x + i][block.y + j] = block.color;
              }
            });
          });
        });
        return tempField;
      });
    }
  }, [fieldBlocks]);

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

  return (
    <Stage width={900} height={800}>
      <Playfield field={field} />
      <HoldZone block={new LBlock(0, 0)} />
      <NextZone blocks={nextBlocks} />
    </Stage>
  );
}

export default Tetris;
