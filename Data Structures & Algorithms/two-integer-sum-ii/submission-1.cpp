class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int l = 0;
        int r = numbers.size()-1;

        int sum = 0;
        while(l<r){
            int canSum = numbers[l] + numbers[r];
            
            if(canSum > target){
                r--;
            } else if (canSum < target){
                l++;
            }else{
                return {++l,++r};
            }
        }

        return {};
    }
};
