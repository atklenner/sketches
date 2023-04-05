import type p5 from "p5";

export default function createButton(p: p5, text: string, cb) {
  const button = p.createButton(text);
  button.parent("buttons");
  button.mousePressed(cb);
  return button;
}
