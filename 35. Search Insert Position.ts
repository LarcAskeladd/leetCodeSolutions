function searchInsert(nums: number[], target: number): number {
    let lowest = 0;
    let highest = nums.length - 1;
    let middle = 0;
    while(highest >= lowest) {
        middle = Math.floor((lowest + highest) / 2)

        if(nums[middle] === target) {
            return middle
        }

        else if(target < nums[middle]) {
            highest = middle - 1;
        }

        else {
            lowest = middle + 1;
        }
    }
    return lowest
};
