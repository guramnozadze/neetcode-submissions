class Solution {
private:
    struct Building{
        int index;
        int max_height;
    };
public:
    vector<int> findBuildings(vector<int>& heights) {
        int n = heights.size();
        stack<Building> s;
        vector<int> output;

        for (int i = n - 1; i >= 0 ; i--){
            s.push(Building{i, s.empty() ? 0 : max(s.top().max_height, heights[s.top().index])});
        }

        while(!s.empty()){
            Building curr = s.top(); s.pop(); 
            
            if(heights[curr.index] > curr.max_height){
                output.push_back(curr.index);
            }
        }

        return output;
    }
};