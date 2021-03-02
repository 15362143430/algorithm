var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length ; i++) {
        const chazhi = target - nums[i]
        if (map.has(chazhi)) {
            return [map.get(chazhi), i]
        } else {
            map.set(nums[i], i)
        }
    }
};

console.log(twoSum([2, 7, 11, 5], 9))