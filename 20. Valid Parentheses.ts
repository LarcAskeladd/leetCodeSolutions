function isValid(s: string): boolean {
    let bracketsMap = {
        '(' : ")",
        "{": "}",
        "[": "]"
    }
    let splitArray = s.split('');
    let stack: Array<string> = [];
    for(let x = 0; x < s.length; x++) {
        if(('([{').includes(splitArray[x])) {
            stack.push(splitArray[x])
        } else if((')]}').includes(splitArray[x])) {
            if(bracketsMap[stack[stack.length - 1]] === splitArray[x]) {
                stack.pop();
            } else return false;
        }
    }
    return stack.length === 0
};
