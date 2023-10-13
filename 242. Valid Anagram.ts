function isAnagram(s: string, t: string): boolean {
    //Was intending on using this but tried to find another way
    return s.split('').sort().join('') === t.split('').sort().join('')
};
