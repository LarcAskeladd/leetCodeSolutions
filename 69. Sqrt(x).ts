function mySqrt(x: number): number {
    let sqAdditive = 1;
    let sqNumber = 1;
    while((x - sqAdditive) > 0) {
        sqAdditive = sqAdditive + (1 + (sqNumber * 2));
        ++sqNumber;
    }
    if((x - sqAdditive) < 0) return sqNumber - 1
    else return sqNumber;
};
