export default function Dictionay () {
  // 属性
  this.items = {}

  // 方法
  // 添加
  Dictionay.prototype.set = function ( key, value ) {
      if ( this.has(key) ) return false
      this.items[key] = value
      return true
  }

  // 移除
  Dictionay.prototype.remove = function ( key ) {
      if ( !this.has(key) ) return false
      delete this.items[key]
      return true
  }

  // 是否存在
  Dictionay.prototype.has = function ( key ) {
      return this.items.hasOwnProperty(key)
  }

  // 通过键值查找特定的数值并返回
  Dictionay.prototype.get = function ( key ) {
      if ( !this.has(key) )return null
      return this.items[key]
  }

  // 修改 如果有就更改，没有就添加
  Dictionay.prototype.update = function ( key, value ) {
      this.items[key] = value
      return this.items[key]
  }

  // 清除所有
  Dictionay.prototype.clear = function ( key, value ) {
      this.items = {}
      return true
  }

  // 返回包含元素数量
  Dictionay.prototype.size = function ( key, value ) {
      return Object.keys(this.items).length
  }

  // 返回字典所有键名
  Dictionay.prototype.keys = function ( key, value ) {
      return Object.keys(this.items)
  }

  // 返回字典所有数值（键值）
  Dictionay.prototype.values = function ( key, value ) {
      return Object.values(this.items)
  }
}