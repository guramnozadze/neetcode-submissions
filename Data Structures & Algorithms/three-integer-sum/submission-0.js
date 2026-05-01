class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
         const res = [];
        nums.sort((a,b) => a-b)

        for (const [index, value] of nums.entries()) {
            if (index > 0 && value === nums[index-1]) {
                continue;
            }

            let l = index+1;
            let r = nums.length - 1;
            while (l < r){
                const threeSum = value + nums[l] + nums[r];

                if(threeSum > 0){
                    r--;
                }else if(threeSum < 0){
                    l++;
                }else{
                    res.push([value,nums[l], nums[r]]);
                    l++;
                    while(nums[l] == nums[l-1] && l < r){
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
