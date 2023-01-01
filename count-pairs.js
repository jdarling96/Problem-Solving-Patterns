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
