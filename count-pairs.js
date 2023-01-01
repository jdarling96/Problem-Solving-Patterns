// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let obj = {}
    let count = 0
    for (let n of arr){
        if(obj[n] !== undefined){
            count++
        }else{
            let num = target - n
            obj[num] = num

        }
    }
    return count
}



// Alternative Solution
/* function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
} */