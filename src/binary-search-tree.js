const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }

  root() {
    return this.mainRoot
  }

  add(data) {
    let newNode = new Node(data);

    if (!this.mainRoot) {
      this.mainRoot = newNode;
    } else {
      this.createNode(this.mainRoot, newNode);
    }
  }

  createNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.createNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.createNode(node.right, newNode);
      }
    }
  }

  searchValue(node, value) {
    if (node === null) return null;

    if (value < node.data) {
      return this.searchValue(node.left, value);
    } else if (value > node.data) {
      return this.searchValue(node.right, value);
    } else {
      return node;
    }
  }

  has(data) {
    const isHas = this.searchValue(this.mainRoot, data);
    return isHas ? true : false;
  }

  find(data) {
    return this.searchValue(this.mainRoot, data);
  }

  removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;

      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }

      const newVal = minFromRight.data;
      node.data = newVal;
      node.right = this.removeNode(node.right, newVal);
      return node;
    }
  }

  remove(data) {
    if (this.mainRoot === data) {
      this.mainRoot = null;
      this.mainRoot.left = null;
      this.mainRoot.right = null;
      return;
    } else {
      this.mainRoot = this.removeNode(this.mainRoot, data);
      return;
    }
  }

  min() {
    if (!this.mainRoot) {
      return null;
    }
    let node = this.mainRoot;
    while (node) {
      if (node.left) {
        node = node.left;
      } else {
        return node.data;
      }
    }
  }

  max() {
    if (!this.mainRoot) return null;

    let node = this.mainRoot;
    while (node) {
      if (node.right) {
        node = node.right;
      } else {
        return node.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
