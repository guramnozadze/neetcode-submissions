class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;
        for (const num of nums){
            if(numSet.has(num-1)){
                continue;
            }else{
                let curr = num;
                let sum = 0;
                while(numSet.has(curr)){
                    curr++;
                    sum++;
                }
                longest = Math.max(longest, sum)
            }
        }
        return longest;
    }
}
