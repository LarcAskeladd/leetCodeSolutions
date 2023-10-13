function isPalindrome(x: number): boolean {
    //Changed after inspiration from top solutions
    let reversedNumber: number = parseInt(x.toString().split('').reverse().join(''));
    if(x === reversedNumber) return true
    else return false;

    //Previous Solution
    // if(x < 0) return false;
    // let numericStringArray = x.toString().split('');
    // while(numericStringArray.length > 1) {
    //     if(numericStringArray[0] === numericStringArray[numericStringArray.length - 1]){
    //         numericStringArray.pop();
    //         numericStringArray.shift();
    //     } else return false;
    // }
    // return true;
};
