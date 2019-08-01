
function ObserverList() {
   this.observers = []
}

ObserverList.prototype.add = function(obj) {
   return this.observers.push(obj)
}

ObserverList.prototype.count = function() {
   return this.observers.length
}

ObserverList.prototype.get = function(index) {
   return this.observers[index]
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
   let i = startIndex
   
   for (let i = startIndex; i < this.observers.length; i++) 
      if (this.observers[i] === obj) 
         return i

   return -1
}

ObserverList.prorotype.remoteAt = function (index) {
   this.observers.splice(index, 1)
}

export default ObserverList