class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const ans = [];
        if(!nums) return [];

         for(let l = 0; l <= nums.length - k; l++){
            let max = -Infinity;
            for(let i = 0;  i < k; i++){
                if(nums[l+i] > max){
                    max = nums[l+i];
                }
            }
            ans.push(max)
        }

        return ans;
    }
}
