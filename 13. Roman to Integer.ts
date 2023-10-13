function romanToInt(s: string): number {
    let valueMap: { [s: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    //Original Solution
    // let sum = 0;
    // for(let ind = 0; ind < s.length;) {
    //     if(valueMap[s[ind + 1]] == null || (valueMap[s[ind]] >= valueMap[s[ind + 1]])) {
    //         sum = sum + valueMap[s[ind]];
    //         ++ind
    //     } else {
    //         sum = sum + (valueMap[s[ind + 1]] - valueMap[s[ind]]);
    //         ind+=2
    //     }
    // }
    // return sum;

    //Inspired from top solution
    let parsedIntegers = s.split('').map(elem => valueMap[elem]);
    return parsedIntegers.reduce((total: number, current: number, index: number) => ((parsedIntegers[index + 1] == null || current >= parsedIntegers[index + 1]) ? (total + current) : (total - current)), 0)
}
