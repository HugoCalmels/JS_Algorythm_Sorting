const list1 = [10, 15, 3, 7];
const k1 = 17
const list2 = [1, 8, 10, 21];
const k2 = 19

function countToMatch(data, number) {
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if ((data[i] + data[j]) === number) {
      console.log(data[i])
      console.log(data[j])
      return console.log('true')
    }
  }
}
return console.log('false')
}

countToMatch(list1, k1)
countToMatch(list2, k2)

console.log("--------------------------------")



function countToMatchWithoutNest(data, number) {

    let i = 0;
    let j = data.length - 1;

  while (j > i) {
    if ((data[i] + data[j]) === number) {
        return console.log("true")
      } else if (data[i] + data[j] > k) {
        j--;
    } else if (data[i] + data[j] < k) {
        i++;
    }
    }
    return console.log("false")

}
  


countToMatchWithoutNest(list1, k1)