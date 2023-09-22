/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let arrayOfListNodes = []
  let resultIndex = 0;

  while (head !== null){
    arrayOfListNodes.push(head);
    head = head.next;
  }

  resultIndex = arrayOfListNodes.length;

  if (resultIndex % 2 === 0){
    resultIndex /= 2;
  } else {
    resultIndex /= 2;
    resultIndex -= 0.5;
  }
  
  return arrayOfListNodes[resultIndex];
};
