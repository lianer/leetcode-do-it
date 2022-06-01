/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (52.60%)
 * Likes:    2195
 * Dislikes: 0
 * Total Accepted:    355.2K
 * Total Submissions: 672.1K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 *
 * 实现 LRUCache 类：
 *
 *
 *
 *
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
 * key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 *
 *
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 *
 *
 *
 *
 *
 * 示例：
 *
 *
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 *
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 10^5
 * 最多调用 2 * 10^5 次 get 和 put
 *
 *
 */

class LinkNode {
  constructor(
    public key: number,
    public value: number,
    public prev: LinkNode | null = null,
    public next: LinkNode | null = null,
  ) {}
}

// @lc code=start
class LRUCache {
  private capacity: number;
  private cache: Map<number, LinkNode> = new Map();
  private head: LinkNode;
  private tail: LinkNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = new LinkNode(-1, -1);
    this.tail = new LinkNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    // 查找节点，调整链表位置
    // 1. 如果不存在，直接返回，不做任何处理
    // 2. 如果在头部，则直接返回，不做任何处理
    // 3. 如果不在头部，则剥离出来
    //   3.1 将前后两个节点相联
    //   3.2 将当前节点插入到 head 和 head.next 之间

    const node = this.cache.get(key);
    if (!node) return -1;

    // 如果不在头部，则移动到头部，如果已经在头部，不做任何调整
    if (this.head.next !== node) {
      // 先剥离出来
      this.delNode(node);

      // 然后移动到头部
      this.addToHead(node);
    }

    return node.value;
  }

  put(key: number, value: number): void {
    // 插入节点，插入到头部，并删除尾部
    // 1. 如果插入的节点已存在，则直接修改其值，并做一遍 get 使其顺序调整过来
    // 2. 如果插入的节点不存在，则创建新节点
    //   2.1 将新节点插入到头部，并添加到 cache 中
    //   2.2 如果节点数量超过限制，则删除尾部节点，并从 cache 中移除
    let node = this.cache.get(key);
    if (node) {
      node.value = value;
      this.delNode(node);
      this.addToHead(node);
      return;
    }

    // 将新节点插入到头部
    node = new LinkNode(key, value);
    this.addToHead(node);
    this.cache.set(key, node);

    // 删除尾部节点
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.tail.prev!.key);
      this.delNode(this.tail.prev!);
    }
  }

  // 添加到头部
  // 便于理解，假设有链表 a(head) -> b(新节点) -> c
  addToHead(node: LinkNode) {
    const a = this.head;
    const b = node;
    const c = a.next!;

    a.next = b;
    c.prev = b;

    b.prev = a;
    b.next = c;
  }

  // 删除节点
  // 便于理解，假设有链表 a  ->   b  ->  c(tail)
  delNode(node: LinkNode) {
    const c = node.next!;
    const b = node;
    const a = b.prev!;

    a.next = c;
    c.prev = a;

    b.prev = b.next = null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

export {};

const lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2);
lru.get(1);
lru.put(3, 3);
console.log(lru.get(2), -1);
