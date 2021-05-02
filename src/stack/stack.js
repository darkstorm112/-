function Stack(){
  this.items = []

  //1、入栈 push
  Stack.prototype.push = function (element){
      this.items.unshift(element)
  }

  //2、出栈 pop
  Stack.prototype.pop = function (){
      return this.items.shift()||null
  }

  //3、获取栈顶数据 peek
  Stack.prototype.peek = function (){
      return this.items[0]||null
  }

  //4、是否为空 isEmpty
  Stack.prototype.isEmpty = function (){
      return !this.items.length
  }

  //5、长度 size
  Stack.prototype.size = function (){
      return this.items.length
  }

  Stack.prototype.toString = function (){
      return this.items.join(',')
  }

}

module.exports = Stack