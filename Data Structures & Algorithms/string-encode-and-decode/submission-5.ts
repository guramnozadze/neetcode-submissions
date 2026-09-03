class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length == 0) return "-1"

        return strs.join("XYZ")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "-1") return []
        return str ? str.split("XYZ"): [""]
    }
}
