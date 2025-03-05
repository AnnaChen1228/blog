---
title: "Find & Index about List & String"
date: "2025.03.05"

layout: ../../layouts/PostLayout.astro
---

## String

### Find
- The `find` method checks if an element exists in the string and returns the lowest index of the substring if found. If not found, it returns -1.

```python
text = "Hello, world!"
result = text.find("world")
print(result)  # Output: 7
```

### Index
- The `index` method retrieves the index of an element in the string. If the element is not found, it raises an error. Therefore, it is recommended to use `find` or `in` beforehand.

```python
text = "Hello, world!"
result = text.index("world")
print(result)  # Output: 7

# Uncommenting the following line will raise a ValueError
# result = text.index("Python")  # Raises ValueError
```

## List

### Find
- In a list, you cannot use `find` to check if an element exists. You can use `in` to perform the check.

```python
list1 = ['a', 'b', 'test']

if 'test' in list1:
    print(True)  # Output: True
```

### Index
- The index method returns the index of an element in the list, but if the element is not present, it raises an error.

```python
list1 = ['a', 'b', 'test']

result = list1.index('test')
print(result)  # Output: 2

# Uncommenting the following line will raise a ValueError
# result = list1.index('Python')  # Raises ValueError
```

## Example

### [Leetcode 219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150)

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
```
Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```
```python
class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        temp_site = {}
        for site in range(len(nums)):
            if nums[site] in temp_site:
                if abs(site - temp_site[nums[site]]) <= k:
                    return True
                else:
                    temp_site[nums[site]] = site
            else:
                temp_site[nums[site]] = site
        return False
```