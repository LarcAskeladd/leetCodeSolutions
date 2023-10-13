/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let lastIndex = 0;
    nums2.forEach((element: number) => {
        let i = lastIndex;
        while(nums1[i] < element && i < m) {
            ++i;
        }
        nums1.splice(i, 0, element);
        nums1.pop();
        ++m;
        lastIndex = i;
    })
};
