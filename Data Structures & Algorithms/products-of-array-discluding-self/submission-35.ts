class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let n = nums.length
        let res = new Array(n).fill(1)

        for(let i = n-2; i >= 0 ; i--){
            res[i] = res[i+1] * nums[i+1]
        }

        let prefix = 1;
        for(let i = 0; i < n; i++){
            res[i] *= prefix
            prefix *= nums[i]
        }

        return res
    }
}

/*
nums=[1,2,4,6]

suff =[48,24,6,1]
pref =[1,1,2,8]
*/
