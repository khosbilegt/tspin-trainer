import { Container, Graphics, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { useCallback } from "react";
import { Tetrimino } from "./models";

function NextZone({ blocks }: { blocks: Tetrimino[] }) {
  const renderNext = (graphics: any, x: number, y: number) => {
    graphics.lineStyle(1, 0x202020, 1);
    graphics.beginFill(0x121212);
    graphics.drawRect(x, y, 150, 500);
    for (var i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const blockSize = 30;
      const blockX = x + 75 - (block.blocks[0].length * blockSize) / 2;
      const blockY = y + 25 + i * 100;
      graphics.beginFill(block.color);
      for (var j = 0; j < block.blocks.length; j++) {
        for (var k = 0; k < block.blocks[j].length; k++) {
          if (block.blocks[j][k] === 1) {
            graphics.drawRect(
              blockX + k * blockSize,
              blockY + j * blockSize,
              blockSize,
              blockSize
            );
          }
        }
      }
    }
  };

  const draw = useCallback(
    (graphics: any) => {
      graphics.clear();
      renderNext(graphics, 650, 100);
    },
    [blocks]
  );

  return (
    <Container>
      <Text
        text="Next"
        anchor={0.5}
        x={725}
        y={70}
        style={
          new TextStyle({
            fontSize: 30,
            fill: 0xffffff,
          })
        }
      />
      <Graphics draw={draw} />
    </Container>
  );
}

export default NextZone;
