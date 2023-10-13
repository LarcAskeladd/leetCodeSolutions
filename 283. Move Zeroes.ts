function moveZeroes(nums: number[]): void {
    // This was old solution
    // for(let ind = nums.length - 1; ind >= 0; ind--) {
    //     if(nums[ind] === 0) {
    //         let zeroInd = ind;
    //         while(nums[zeroInd + 1] != null && nums[zeroInd + 1] !== 0) {
    //             nums[zeroInd] = nums[zeroInd + 1];
    //             ++zeroInd
    //         }
    //         nums[zeroInd] = 0;
    //     }
    // }
    let writeableIndex = 0;
    for(let readIndex = 0; readIndex < nums.length; readIndex++) {
        let originalValue = nums[readIndex];
        nums[readIndex] = 0;
        if(originalValue !== 0) {
            nums[writeableIndex] = originalValue;
            ++writeableIndex;
        }
    }
};
