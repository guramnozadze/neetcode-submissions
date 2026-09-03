class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length == 0) return ""
        let dstring = ""
        strs.forEach(str => dstring += `${str.length}#${str}`)
        return dstring
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "") return []
        let res = []
        let i = 0;
        while(i < str.length){
            let n = 0
            while(str[i] != "#"){
                n = n * 10 + Number(str[i++])
            }
            i++;

            let word = ""
            while(n--){
                word += str[i++];
            }
            res.push(word)

        }

        return res
    }
}
