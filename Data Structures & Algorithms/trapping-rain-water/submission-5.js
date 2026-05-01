class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    let stack = [];
    let water = 0;

    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let bottom = stack.pop();

            if (!stack.length) break;

            let left = stack[stack.length - 1];
            let width = i - left - 1;
            let h = Math.min(height[left], height[i]) - height[bottom];

            water += width * h;
        }

        stack.push(i);
    }

    return water;
    }
}
