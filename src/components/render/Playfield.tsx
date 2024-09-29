import { Container, Graphics, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { useCallback, useState } from "react";

const initialField = Array.from({ length: 10 }, () =>
  Array.from({ length: 20 }, () => 0x000000)
);

function Playfield() {
  const [field, setField] = useState(initialField);

  const renderGrid = (
    graphics: any,
    x: number,
    y: number,
    height: number,
    width: number
  ) => {
    graphics.lineStyle(1, 0x202020, 1);
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 20; j++) {
        graphics.beginFill(field[i][j]);
        graphics.drawRect(x + i * width, y + j * height, width, height);
      }
    }
  };

  const renderHold = (graphics: any, x: number, y: number) => {
    graphics.lineStyle(1, 0x202020, 1);
    graphics.beginFill(0x121212);
    graphics.drawRect(x, y, 100, 100);
  };

  const draw = useCallback((graphics: any) => {
    graphics.clear();
    renderGrid(graphics, 200, 50, 40, 40);
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

export default Playfield;
