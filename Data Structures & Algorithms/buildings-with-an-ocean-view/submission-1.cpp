class Solution {
private:
    struct Building{
        int index;
        int max_height;
    };
public:
    vector<int> findBuildings(vector<int>& heights) {
        int n = heights.size();
        vector<int> output;
        
        int curr_max = 0;

        for (int i = n - 1; i >= 0 ; i--){
            if(heights[i] > curr_max){
                output.push_back(i);
            }
            curr_max = max(curr_max, heights[i]);
        }

        reverse(output.begin(), output.end());

        return output;
    }
};