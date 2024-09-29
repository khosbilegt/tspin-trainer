import { Container, Graphics, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { useCallback } from "react";

function Playfield({ field }: { field: any }) {
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

  const draw = useCallback((graphics: any) => {
    graphics.clear();
    renderGrid(graphics, 200, 50, 40, 40);
  }, []);

  return (
    <Container>
      <Graphics draw={draw} />
    </Container>
  );
}

export default Playfield;
