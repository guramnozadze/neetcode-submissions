class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res = new Array(nums.length).fill(1)

        let productWithoutZero = 1;
        let zeroCount = 0
        // loop through index and number from index: number pair
        for (let [i1ndex, num] of nums.entries()){
            if(num !== 0){
                productWithoutZero *= num
            }else{
                zeroCount+=1
            }
        }
        if (zeroCount >= 2){
            return new Array(nums.length).fill(0)
        }

        for (let [index, num] of nums.entries()){
            if(zeroCount == 1 && num == 0){
                res[index] = productWithoutZero
            }else if(zeroCount == 1 && num != 0){
                res[index] = 0
            }else{
                res[index] = productWithoutZero / num

            }
        }

        return res
    }
}
