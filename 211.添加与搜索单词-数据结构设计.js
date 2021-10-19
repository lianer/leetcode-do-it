/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

var WordDictionary = function () {
  this.tree = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.tree;
  for (let char of word) {
    if (!node[char]) {
      node = node[char] = {};
    } else {
      node = node[char];
    }
  }
  node.val = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this._search(word, this.tree);
};

WordDictionary.prototype._search = function (word, node) {
  if (!node) {
    return false;
  }

  if (word.length === 0) {
    return !!node.val;
  }

  const first = word[0];
  const last = word.slice(1);

  if (first === '.') {
    for (let char of Object.values(node)) {
      if (this._search(last, char)) {
        return true;
      }
    }
    return false;
  } else {
    return this._search(last, node[first]);
  }
};

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad'), false); // return False
console.log(wordDictionary.search('bad'), true); // return True
console.log(wordDictionary.search('.ad'), true); // return True
console.log(wordDictionary.search('b..'), true); // return True

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
