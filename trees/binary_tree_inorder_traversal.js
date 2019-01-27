var inorderTraversal = function(root) {
  let result=[];
  const traversal=(root)=>{
     if(!root) return;
     traversal(root.left);
     result.push(root.val);
     traversal(root.right);
 }
   traversal(root);
   return result;
};

var inorderTraversal = function(root) {
  let stack=[],result=[];
  let cur_node=root;
  while(cur_node || stack.length) {
      while(cur_node) {
          stack.push(cur_node);
          cur_node=cur_node.left;
      }
      let node=stack.pop();
      result.push(node.val);
      cur_node=node.right;
  }
  return result;
};
