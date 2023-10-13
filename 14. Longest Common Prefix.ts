function longestCommonPrefix(strs: string[]): string {
    if(strs.length == 0) return '';
    else if(strs.length == 1) return strs[0];
    let shortestString = strs[0];
    strs.forEach(str => {
        if(str.length < shortestString.length) shortestString = str
    })
    let commonStringLen = 0;
    while(commonStringLen < shortestString.length) {
        for(let ind = 0; ind < strs.length; ind++) {
            if(strs[ind][commonStringLen] !== shortestString[commonStringLen]){
                return shortestString.substring(0, commonStringLen);
            }
        }
        ++commonStringLen;
    } 
    return shortestString;
};
