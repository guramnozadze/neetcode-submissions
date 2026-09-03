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
            let j = i
            while(str[j] != "#"){
                j+=1;
            }
            let length = Number(str.slice(i, j))

            res.push(str.slice(j+1, j + 1 + length))
            i = j + 1 + length

        }

        return res
    }
}
