function majorityElement(nums: number[]): number {
    //Boyer Moore practice solution
    let candidate: number = nums[0];
    let votes = 1;

    for(let ind = 1; ind < nums.length; ind++) {
        if(votes === 0) {
            candidate = nums[ind];
            votes = 0;
        }

        votes = votes + ((nums[ind] === candidate) ? 1 : -1);
    }

    return candidate;
};
