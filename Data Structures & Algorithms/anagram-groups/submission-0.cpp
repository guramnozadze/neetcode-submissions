class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> mp;
        vector<vector<string>> output;

        for(string str: strs){
            int count[26] = {0};
            string hash = "";
            for(char c: str) count[c-'a']++;
            for(int i=0;i<26;i++) hash = hash + (char)i + '='+(char)count[i]+'&';

            mp[hash].push_back(str); 
        }

        for(auto& [key, value]: mp){
            output.push_back(value);
        }

        return output;
    }
};
