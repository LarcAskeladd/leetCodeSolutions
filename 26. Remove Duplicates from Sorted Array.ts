function removeDuplicates(nums: number[]): number {
    let ind: number = 0;
    while(ind <= (nums.length - 1)) {
        if(nums.lastIndexOf(nums[ind]) !== ind){
            nums.splice(ind, (nums.lastIndexOf(nums[ind]) - nums.indexOf(nums[ind])))
        } else {
            ++ind;
        }
    } return nums.length;
};
