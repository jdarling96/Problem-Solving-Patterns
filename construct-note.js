// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if(!msg) return true

    function countFreq(str){
        let count = {}
        for(let char of str){
            count[char] = count[char] + 1 || 1
        }
        return count
    }

    let msgCount = countFreq(msg)
    let lettersCount = countFreq(letters)
    for(let key in msgCount){
        if(!lettersCount[key]) return false
        if(lettersCount[key] < msgCount[key]) return false

    }
    return true

}
