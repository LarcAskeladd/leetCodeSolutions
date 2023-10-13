function containsDuplicate(nums: number[]): boolean {
    // for(let ind = 0; ind < nums.length; ind++) {
    //     if(nums.lastIndexOf(nums[ind]) !== ind) return true
    // }
    // return false
    let setOfNums = new Set<number>(nums);
    return setOfNums.size < nums.length;
};
