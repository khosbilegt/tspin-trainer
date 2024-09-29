interface Tetrimino {
  color: number;
  x: number;
  y: number;
  blocks: number[][];
}

class JBlock implements Tetrimino {
  color = 0x0341ae;
  blocks = [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
}

class LBlock implements Tetrimino {
  color = 0xff971c;
  blocks = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
}

class OBlock implements Tetrimino {
  color = 0xffd500;
  blocks = [
    [1, 1],
    [1, 1],
  ];

  constructor(public x: number, public y: number) {}
}

class SBlock implements Tetrimino {
  color = 0x72cb3b;
  blocks = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
}

class TBlock implements Tetrimino {
  color = 0x800080;
  blocks = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
}

class ZBlock implements Tetrimino {
  color = 0xff3213;
  blocks = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
}

class IBlock implements Tetrimino {
  color = 0x00ffff;
  blocks = [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
}

export type { Tetrimino };

export { JBlock, LBlock, OBlock, SBlock, TBlock, ZBlock, IBlock };
