export class Tree {
  public words: string[];
  public children?: { [key: string]: Tree };

  constructor(words: string[], children?: { [key: string]: Tree }) {
    this['words'] = words;
    if (children) {
      for (const key in children) {
        if (Object.prototype.hasOwnProperty.call(children, key)) {
          const element = children[key];
          this.children = { ...this.children, [key]: element };
        }
      }
    }
  }
}
