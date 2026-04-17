class Solution {
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            const complementId = map.get(complement);
            if (map.has(complement)) {
                return [complementId, i];
            }
            map.set(nums[i], i);
        }
    }
}
