/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  /**
   * build trie --> traverse board --> DFS
   */
  const res = [],
    h = board.length,
    w = board[0].length;
  // 构建 tire
  const getTrie = (words) => {
    let root = Object.create(null);
    for (const word of words) {
      let node = root;
      for (let c of word) {
        if (!node[c]) {
          node[c] = Object.create(null);
        }
        node = node[c];
      }
      node.word = word;
    }
    return root;
  };

  // DFS 深度优先搜素
  const search = (trie, i, j) => {
    // 到结尾
    if (trie.word) {
      res.push(trie.word);
      trie.word = null;
    }

    // 边界条件
    if (i < 0 || j < 0 || i >= h || j >= w) return;

    // 不在字典树中，返回
    if (!trie[board[i][j]]) return;

    let prefixChar = board[i][j];
    board[i][j] = '#'; // mark visited
    search(trie[prefixChar], i, j - 1);
    search(trie[prefixChar], i, j + 1);
    search(trie[prefixChar], i - 1, j);
    search(trie[prefixChar], i + 1, j);
    board[i][j] = prefixChar; // restore
  };

  // traverse board
  const trie = getTrie(words);

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      search(trie, i, j);
    }
  }

  return res;
};

const board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
  ],
  words = ['oath', 'pea', 'eat', 'rain'];

console.log(findWords(board, words), ['eat', 'oath']);

// @lc code=end
