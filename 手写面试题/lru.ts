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
