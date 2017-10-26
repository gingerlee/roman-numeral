Reject any number higher than 3,999
  Input: 4000
  Output: You can only count as high as 3999 in Roman numerals, please try again (returned error message)

Add Roman numerals
  Input: 2
  Output: II

If the resulting Roman numeral has more than 3 of the same characters in a row, change the calculation operation from addition to subtraction
  Input: 400
  Output: (instead of) CCCC
  Output: (it should be) "CD"

1s, 10s, 100s, 1000s are all evaluated separately in the calculation
  Input:  1999
  Output: MCMXCIX

5, 50, 500 have special numeral designations
  Input: 5, 50, 500
  Ouput: V, L, D
