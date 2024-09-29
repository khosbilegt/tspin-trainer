import { Container, Graphics, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { useCallback } from "react";
import { Tetrimino } from "./models";

function HoldZone({ block }: { block: Tetrimino }) {
  const renderHold = (graphics: any, x: number, y: number) => {
    graphics.lineStyle(1, 0x202020, 1);
    graphics.beginFill(0x121212);
    graphics.drawRect(x, y, 100, 100);
    const blockSize = 25;
    const blockX = x + 50 - (block.blocks[0].length * blockSize) / 2;
    const blockY = y + 60 - (block.blocks.length * blockSize) / 2;
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
  };

  const draw = useCallback((graphics: any) => {
    graphics.clear();
    renderHold(graphics, 50, 100);
  }, []);

  return (
    <Container>
      <Text
        text="Hold"
        anchor={0.5}
        x={100}
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

export default HoldZone;
