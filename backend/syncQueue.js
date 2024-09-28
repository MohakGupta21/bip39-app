// syncQueue.js
class SyncQueue {
    constructor() {
      this.queue = [];
    }
  
    add(syncItem) {
      this.queue.push(syncItem);
    }
  
    async process() {
      while (this.queue.length > 0) {
        const syncItem = this.queue.shift();

        setTimeout(await syncItem.execute(),200); // Implement execute method in your sync items
      }
    }
  }
  
module.exports = SyncQueue;
  