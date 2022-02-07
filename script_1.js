class Sorter {
  constructor(array) {
    this.array = array;
    this.count = 0;
    this.sortMethod();
  }

  sortMethod() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length; j++) {
        if (this.array[i] < this.array[j + 1]) {
          this.count += 1
          let temp = this.array[i]
          this.array[i] = this.array[j + 1]
          this.array[j + 1] = temp
        }
      }
    }
  }
}


module.exports = Sorter;