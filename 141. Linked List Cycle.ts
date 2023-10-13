/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Original Solution
let previousMap = new Set<ListNode>();
function hasCycle(head: ListNode | null): boolean {
  while(head != null) {
    if(!(previousMap.has(head))){
      previousMap.add(head);
      head = head.next;
    } else {
      return true
    } 
  }
  return false
};
