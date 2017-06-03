// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?

// 首先想到，纯模拟，从外到内一圈一圈地转，但这个方法太慢
// 沿着副对角线翻转一次，然后沿着水平中线翻转一次
// 或者沿着水平中线翻转一次，然后沿着主对角线翻转一次

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    n = matrix.length;
    if (n == 1) {
        return matrix;
    }
    for (var i = 0; i < n; i++) {
        // for row i, the counter-diagonal is (i, n-1-i)
        for (var j = 0; j < n - 1 - i; j++) {
            var distance = n - 1 - i - j;
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[i + distance][j + distance];
            matrix[i + distance][j + distance] = tmp;
        }
    }
    for (i = 0; i < n / 2; i++) {
        for (j = 0; j < n; j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - i][j];
            matrix[n - 1 - i][j] = tmp;
        }
    }
};

var matrix1 = [
    [1, 2, 3, 'a'],
    [4, 5, 6, 'b'],
    [7, 8, 9, 'c'],
    ['A', 'B', 'C', 'D']
]
var matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
var matrix3 = [[1]]
rotate(matrix3)
console.log(matrix3)
