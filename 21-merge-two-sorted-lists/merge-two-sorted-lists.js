
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  const listOfValues = [];
  let result = new ListNode();
  let list1Copy = list1;
  let list2Copy = list2;

  while(list1Copy !== null) {
    listOfValues.push(list1Copy.val);
    list1Copy = list1Copy.next;
  }

  while(list2Copy !== null) {
    listOfValues.push(list2Copy.val);
    list2Copy = list2Copy.next;
  }

  let listOfValuesLength = listOfValues.length;

  listOfValues.sort((a, b) => a - b);

  for(let i = 0; i < listOfValuesLength; i++) {
    result.next = new ListNode(listOfValues.at(- 1 - i), result.next);
  }

  result = result.next;

  return result;
};
