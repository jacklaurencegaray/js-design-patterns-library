
function ObserverList() {
   this.observerList = []
}

ObserverList.prototype.add = function(obj) {
   return this.observerList.push(obj)
}

ObserverList.prototype.count = function() {
   return this.observerList.length
}

ObserverList.prototype.get = function(index) {
   return this.observerList[index]
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
   let i = startIndex
   
   for (let i = startIndex; i < this.observerList.length; i++) 
      if (this.observerList[i] === obj) 
         return i

   return -1
}

ObserverList.prototype.removeAt = function (index) {
   this.observerList.splice(index, 1)
}

export default ObserverList