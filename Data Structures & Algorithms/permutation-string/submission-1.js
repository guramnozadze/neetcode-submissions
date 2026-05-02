class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        for(let i = 0; i < s2.length; i++){
            let myHash = new Map();
            for(const value of s1){
                myHash.set(value, (myHash.get(value) || 0) + 1)
            }

            if(myHash.get(s2[i]) > 0){
                let l = i;
                while( l < i + s1.length && l<s2.length ){
                    myHash.set(s2[l], myHash.get(s2[l])-1)
                    l++;
                }
            }

            let empty = true;
            for(const [key,value] of myHash){
                if(value > 0){
                    empty = false;
                }
            }
            if(empty){
                return true;
            }
        }


        return false;
    }
}
