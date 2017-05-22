/*
树的遍历有两类：深度优先和宽度优先遍历。
深度优先遍历又可分为两种：先根（次序）遍历和后根（次序）遍历
先根遍历是：
	先访问树的根节点，然后依次先根遍历根的各棵子树。
	树的先根遍历的结果与对应二叉树（孩子兄弟表示法）的先序遍历的结果相同。
后根遍历是：
	先依次后根遍历树根的各棵子树，然后访问根节点。
	树的后根遍历的结果与对应二叉树的中序遍历的结果相同。

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var obj10 = new TreeNode(10)
var obj8 = new TreeNode(8)
var obj2 = new TreeNode(2)
var obj3 = new TreeNode(3)
var obj5 = new TreeNode(5)
obj10.left = obj8;
obj10.right = obj2;
obj8.left = obj3;
obj8.right = obj5;

var preorderTraversal = function(root) {
	if(!root){
		return [];
	}
    var result = [];
    var objLst = [];
    objLst.push(root);

    while(objLst.length > 0) {
    	var top = objLst.pop();
    	result.push(top.val);

    	if(top.right){
    		objLst.push(top.right);
    	}
    	if(top.left){
    		objLst.push(top.left);
    	}
    }
    return result;
};

console.log(preorderTraversal(obj10))
//http://www.geeksforgeeks.org/iterative-preorder-traversal/