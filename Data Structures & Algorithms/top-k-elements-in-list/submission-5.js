class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = {}

        for (let num of nums){
            mp[num] = (mp[num] || 0) + 1;
        }
        
        let ans = [];
        while(k--){
            let most_freq = undefined;

            for(let [key,value] of Object.entries(mp)){
                if(most_freq == undefined || value > mp[most_freq]) {
                    most_freq = Number(key);
                }
            }
            delete mp[most_freq];
            ans.push(most_freq);
        }

        return ans;
    }
}
