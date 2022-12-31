// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let results = {}
    for(let i = 0; i < arr1.length; i++){
        if(arr2[i] === undefined){
            results[arr1[i]] = null

        } else{
            results[arr1[i]] = arr2[i]
        }
    }
    return results
}
