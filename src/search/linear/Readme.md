# Linear Search

This algorithm consist in search an element one by one in a list of elements, from first element until find the element or reach the last element.

![summary](/img/linear/summary.webp)

The algorithm is as follows:

1. currentPosition = 0
2. Compare current element with the target (compare func)
3. If compare func returns true, return element
4. In other case, go to next element
5. If the end of the list is not reached, go to step 2
6. In other case, return undefined

Complexity: O(n)

This method can be used:

- When the list is not ordered
- Little amount of elements
- Linked lists

Example:

We have an array with the following elements:
`[10, 50, 30, 70, 80, 60, 20, 90, 40]`

Target number is `30`. Let's start the algorithm in element 0:

Step 1)
Element is not equal to target, so algorithm goes to the next element.
![example-1](/img/linear/example-1.webp)

Step 2)
Element is not equal to target, so algorithm goes to the next element.
![example-2](/img/linear/example-2.webp)

Step 3)
Element is the same as target, so we return the element (`30`).
![example-3](/img/linear/example-3.webp)
