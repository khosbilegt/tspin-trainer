interface Tetrimino {
  color: number;
  x: number;
  y: number;
  blocks: number[][];
  rotateLeft: () => void;
  rotateRight: () => void;
}

class JBlock implements Tetrimino {
  color = 0x0341ae;
  blocks = [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
  rotateLeft() {
    const newBlocks = this.blocks.map((_, i) =>
      this.blocks.map((row) => row[i]).reverse()
    );
    this.blocks = newBlocks;
  }
  rotateRight() {
    const newBlocks = this.blocks
      .map((_, i) => this.blocks.map((row) => row[i]))
      .reverse();
    this.blocks = newBlocks;
  }
}

class LBlock implements Tetrimino {
  color = 0xff971c;
  blocks = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
  rotateLeft() {
    const newBlocks = this.blocks
      .map((_, i) => this.blocks.map((row) => row[i]))
      .reverse();
    this.blocks = newBlocks;
  }
  rotateRight() {
    const newBlocks = this.blocks.map((_, i) =>
      this.blocks.map((row) => row[i]).reverse()
    );
    this.blocks = newBlocks;
  }
}

class OBlock implements Tetrimino {
  color = 0xffd500;
  blocks = [
    [1, 1],
    [1, 1],
  ];

  constructor(public x: number, public y: number) {}
  rotateLeft = () => {};
  rotateRight = () => {};
}

class SBlock implements Tetrimino {
  color = 0x72cb3b;
  blocks = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
  rotateLeft() {
    const newBlocks = this.blocks
      .map((_, i) => this.blocks.map((row) => row[i]))
      .reverse();
    this.blocks = newBlocks;
  }
  rotateRight() {
    const newBlocks = this.blocks.map((_, i) =>
      this.blocks.map((row) => row[i]).reverse()
    );
    this.blocks = newBlocks;
  }
}

class TBlock implements Tetrimino {
  color = 0x800080;
  blocks = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
  rotateLeft() {
    const newBlocks = this.blocks
      .map((_, i) => this.blocks.map((row) => row[i]))
      .reverse();
    this.blocks = newBlocks;
  }
  rotateRight() {
    const newBlocks = this.blocks.map((_, i) =>
      this.blocks.map((row) => row[i]).reverse()
    );
    this.blocks = newBlocks;
  }
}

class ZBlock implements Tetrimino {
  color = 0xff3213;
  blocks = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ];

  constructor(public x: number, public y: number) {}
  rotateLeft() {
    const newBlocks = this.blocks
      .map((_, i) => this.blocks.map((row) => row[i]))
      .reverse();
    this.blocks = newBlocks;
  }
  rotateRight() {
    const newBlocks = this.blocks.map((_, i) =>
      this.blocks.map((row) => row[i]).reverse()
    );
    this.blocks = newBlocks;
  }
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
  rotateLeft() {
    const newBlocks = this.blocks
      .map((_, i) => this.blocks.map((row) => row[i]))
      .reverse();
    this.blocks = newBlocks;
  }
  rotateRight() {
    const newBlocks = this.blocks.map((_, i) =>
      this.blocks.map((row) => row[i]).reverse()
    );
    this.blocks = newBlocks;
  }
}

export type { Tetrimino };

export { JBlock, LBlock, OBlock, SBlock, TBlock, ZBlock, IBlock };
