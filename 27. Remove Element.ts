function removeElement(nums: number[], val: number): number {
    if(nums.indexOf(val) === -1) return nums.length;
    
    let sortedArray = nums.sort();
    sortedArray.splice(sortedArray.indexOf(val), (sortedArray.lastIndexOf(val) - sortedArray.indexOf(val) + 1))
    return sortedArray.length;
};
