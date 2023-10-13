function twoSum(nums: number[], target: number): number[] {
    let tempIndexMap = new Map<number, number>();
    let ind: number = 0;
    for(let ind = 0; ind < nums.length; ind++) {
        if(tempIndexMap.has(target - nums[ind])) {
            return [tempIndexMap.get(target-nums[ind]), ind]
        }
        tempIndexMap.set(nums[ind], ind);
    }
    return [-1, -1];
};
