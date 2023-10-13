function isPalindrome(s: string): boolean {
    if(s.length < 2) return true
    let cleanStringArray = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('');
    while(cleanStringArray.length > 1) {
        if(cleanStringArray[0] == cleanStringArray[cleanStringArray.length - 1]) {
            cleanStringArray.pop();
            cleanStringArray.shift();
        } else return false
    }
    return cleanStringArray.length < 2
};
