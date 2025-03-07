---
title: "Memory Address"
date: "2025.03.07"

layout: ../../layouts/PostLayout.astro
---
# Memory Address

In programming, understanding how data is manipulated at different memory addresses is crucial, especially in languages like C++ and Python. Here, we will explore how to modify Python lists and draw parallels with C++ pointers and references.

## Modifying Python Lists

### Example: Using Slice Assignment and Direct Assignment

Suppose we have a list `nums`, and we can modify it using different methods.

#### 1. Using Slice Assignment

```python
nums = [1, 2, 3, 4, 5]
nums[:] = reversed(nums)  # Directly modifies the memory content pointed to
```

**Explanation:**
- This operation changes the contents of the original list because `nums[:]` represents a slice of the entire list. This assignment modifies the memory content that `nums` points to, similar to using a pointer in C++ to change the value of an object without changing the pointer itself.

#### 2. Direct Assignment

```python
nums = reversed(nums)  # Reassigns to a new object
```

**Explanation:**
- This operation causes `nums` to point to a new iterator, leaving the original list unchanged. This is akin to changing the value of a pointer in C++ so that it points to another object without affecting the original object.

### C++ Pointer and Reference Analogy

In C++, the use of pointers and references can be likened to Python's slice assignment and direct assignment:

- **Pointer Modifying Content:** 
  ```cpp
  void modifyArray(int* arr) {
      arr[0] = 100; // Directly modifies the memory content pointed to
  }
  ```

- **Pointer Reassigning:**
  ```cpp
  void changePointer(int*& arr) {
      int newArr[] = {10, 20, 30};
      arr = newArr; // Reassigns to a new object
  }
  ```

### Summary

In Python, for mutable objects (like lists), using slice assignment can change the contents of the original object, while direct assignment changes the variable's reference. This is similar to the concept of pointers and references in C++. Understanding these distinctions helps in better memory and data management.

## Example

### [Leetcode 189. Rotate Array](https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150)

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
```
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```
```python
class Solution(object):
    def rotate(self, nums, k):
        k = k%len(nums)
        nums[:] = nums[len(nums)-k:]+nums[:len(nums)-k]
```

```python
class Solution(object):
    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        k = k % n
        nums[:] = list(reversed(nums))        # reverse all list
        nums[:k] = list(reversed(nums[:k]))   # reverse some item before k
        nums[k:] = list(reversed(nums[k:]))   # reverse other
```

``` cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        k = k%nums.size();
        vector<int> temp(nums.end()-k,nums.end());
        nums.erase(nums.end()-k,nums.end());
        nums.insert(nums.begin(),temp.begin(),temp.end());
    }
};
```