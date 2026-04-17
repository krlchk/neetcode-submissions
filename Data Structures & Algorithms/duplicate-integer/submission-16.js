class Solution {
    hasDuplicate(nums) {
        const set = new Set(nums);
        if (set.size < nums.length) {
            return true;
        }
        return false;
    }
}
