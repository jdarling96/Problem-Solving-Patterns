// add whatever parameters you deem necessary
function sameFrequency(num1 ,num2) {
    let num1Tostring = num1.toString()
    let num2ToString = num2.toString()

    if(num1Tostring.length !== num2ToString.length) return false

    function freqCount(str) {
        let count = {}
        for(let char of str){
            count[char] = count[char] + 1 || 1

        }

        return count


    }

    let str1 = freqCount(num1Tostring)
    let str2 = freqCount(num2ToString)
    for(let key in str1){
        if(!str2[key]) return false
        if(str1[key] !== str2[key]) return false

    }
    return true

}
