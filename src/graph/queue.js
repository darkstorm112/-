export default function Queue () {
  this.items = []

  // 入队列
  Queue.prototype.enterQueue = function (element) {
      this.items.push(element)
  }

  // 出队列
  Queue.prototype.leaveQueue = function () {
      return this.items.shift()
  }

  // 返回队列第一个元素
  Queue.prototype.front = function () {
      return this.items[0]
  }

  // 查看队列是否为空
  Queue.prototype.isEmpty = function () {
      return !this.items.length
  }

  // 查看队列长度
  Queue.prototype.size = function () {
      return this.items.length
  }

  // 队列转字符串
  Queue.prototype.toString = function () {
      return this.items.join(' ')
  }
}