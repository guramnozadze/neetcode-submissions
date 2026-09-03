class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let mp = new Map()

        for (let num of nums){
            mp.set(num, (mp.get(num) || 0) +1)
        }

        let ans = []
        while(k--){
            let largestKey = undefined;

            for (let [key,value] of mp.entries()){
                if(largestKey === undefined || value > mp.get(largestKey)){
                    largestKey = key
                }
            }

            ans.push(largestKey)
            mp.delete(largestKey)

        }

        return ans
    }
}
