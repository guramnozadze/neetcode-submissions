class Solution {
   public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> result(n, 0);
        stack <pair<int, int>> st;

        for (int i = 0; i < n; i++) {
            int days = 0;
            while (!st.empty() && temperatures[i] > st.top().first) {
                result[st.top().second] = i - st.top().second;
                st.pop();
            }
            st.push(pair<int,int>(temperatures[i], i));
        }

        return result;

    };
};