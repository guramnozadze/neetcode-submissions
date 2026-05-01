class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // 0,2,0,3,1,0,0,1,3,2,1]
    trap(height) {
        let stack = [];
        let res = 0;

        for(let i = 0; i < height.length; i++){
            while(stack.length > 0 && height[i] >= height[stack.at(-1)]){
               let bottom = height[stack.pop()];

               if(!stack.length) break;

               let w = i - stack.at(-1) - 1;

               let h = Math.min(height[stack.at(-1)], height[i]) - bottom;

                res += w * h;
            }

            stack.push(i);
        }

        return res;
    }
}
