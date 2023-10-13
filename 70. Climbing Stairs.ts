function climbStairs(n: number): number {
    let climbedValues: { [s: number]: number } = {
        0: 1
    }
    return calculateSteps(n, climbedValues);

    function calculateSteps(n: number, climbedValues: { [s: number]: number }) {
        if(climbedValues[n] != null) return climbedValues[n]
        else if(n < 0) return 0;

        climbedValues[n] = (+calculateSteps(n-1, climbedValues)) + (+calculateSteps(n-2, climbedValues))
        return climbedValues[n];
    }
};
