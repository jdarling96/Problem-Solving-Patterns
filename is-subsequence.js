// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    if(str2.length < str1.length) return false

    function freqCount(str) {
        let freqCounter = {}
        let count = 0
        for(let char of str){
            if(!freqCounter[char]){
            freqCounter[char] = count
            count++

            } 
            
        }
        return freqCounter
    }
    let str1Count = freqCount(str1)
    console.log(str1Count)
    let str1Visited = 0
    for(let i = 0; i < str2.length; i++){
        if(str1Visited === str1.length) return true
        if(str1Count[str2[i]] !== undefined){
            if(str1Count[str2[i]] <= i){
                str1Visited++
            } else{
                return false
            }

        }
        

    }
    return true
}
