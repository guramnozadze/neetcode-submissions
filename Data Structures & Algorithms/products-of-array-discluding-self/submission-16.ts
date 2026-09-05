class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        let prod = 1;
        let zeroCount = 0
        // loop through index and number from index: number pair
        for (let num of nums){
            if(num !== 0){
                prod *= num
            }else{
                zeroCount+=1
            }
        }
        if (zeroCount >= 2){
            return new Array(nums.length).fill(0)
        }

        let res = new Array(nums.length).fill(0)

        for (let [i, num] of nums.entries()){
            
            if(zeroCount > 0){
                res[i] = num === 0 ? prod : 0
            }else{
                res[i] =  prod / num

            }
        }

        return res
    }
}
