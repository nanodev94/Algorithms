# Binary Search

This algorithm consists in search an element reducing the search space in the middle each time. The requirement to use this algorithm is that the list must be ordered. At the start, we set 2 pointers: `low` at first position and `high` at the last position. We compare the middle element (`low + (high - low)/2`) with the target:

- If it is equal, return value.
- If it is lower, change `high` to `middle-1`.
- If it is higher, change `low` to `middle+1`.

![summary](/img/binary/summary.webp)

The algorithm is as follows:

1. low = 0; high = list.length - 1
2. mid = low + (high - low) / 2
3. Compare mid element with the target
4. If elements are equals, return element
5. Else if mid element is lower than target, low = mid + 1
6. Else if mid element is higher than target, high = mid - 1
7. If low <= high, go to step 2
8. In other case, return undefined

Complexity: O(log n)

This method can be used:

- When the list ordered

Example:

We have an array with the following elements:
`[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`

Target number is `23`. Let's start the algorithm with low = `0` and high = `9`:

Step 1)
Mid element is lower than target, so algorithm change low = `5`.
![example-1](/img/binary/example-1.webp)

Step 2)
Mid element is higher than target, so algorithm change high = `6`.
![example-2](/img/binary/example-2.webp)

Step 3)
Mid element is equal to target, so we return the element (`23`).
![example-3](/img/binary/example-3.webp)
