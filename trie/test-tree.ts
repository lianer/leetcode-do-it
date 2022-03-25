// abc, abd, acd, add

import { Tree } from './Tree';

const abc = new Tree(['abc']);
const abd = new Tree(['abd']);
const acd = new Tree(['acd']);
const add = new Tree(['add']);

const ab = new Tree(['abc', 'abd'], {
  c: abc,
  d: abd,
});

const ac = new Tree(['acd'], {
  d: acd,
});

const ad = new Tree(['add'], {
  d: add,
});

const a = new Tree(['abc', 'abd', 'acd', 'add'], {
  b: ab,
  c: ac,
  d: ad,
});

console.log(a.children?.b.children?.c.words);
