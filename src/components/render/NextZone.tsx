import { Container, Graphics, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { useCallback } from "react";

function NextZone() {
  const renderNext = (graphics: any, x: number, y: number) => {
    graphics.lineStyle(1, 0x202020, 1);
    graphics.beginFill(0x121212);
    graphics.drawRect(x, y, 150, 500);
  };

  const draw = useCallback((graphics: any) => {
    graphics.clear();
    renderNext(graphics, 650, 100);
  }, []);

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
