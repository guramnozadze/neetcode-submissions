class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let hm = new Map();

        for (let str of strs) {
            let count = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            }
            let key = count.join(',');
            if (hm.has(key)) {
                hm.get(key).push(str);
            } else {
                hm.set(key, [str]);
            }
        }

        return Array.from(hm.values());
    }
}