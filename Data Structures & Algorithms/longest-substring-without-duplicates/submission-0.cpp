class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> charSet;
        int n = s.size();
        int l =0;
        int res =0;

        for(int r = 0; r < n; r++){
            // if there is character in charset
            while(charSet.contains(s[r])){
                charSet.erase(s[l]);
                l++;
            }

            charSet.insert(s[r]);
            res = max(res, r - l + 1);
        }

        return res;
    }
};
