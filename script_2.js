class Sorter {
  constructor(array) {
    this.array = array;
    this.count = 0;
    this.sortMethod();
  }

  sortMethod() {

    for (let i = 0; i < this.array.length; i++) {
      let current = this.array[i];

      let j = i - 1
      while ((j > -1) && (current < this.array[j])) {
        this.count += 1
        this.array[j + 1] = this.array[j];
        j--;
      }
      this.array[j+1] = current;
    }
  }
}


module.exports = Sorter;