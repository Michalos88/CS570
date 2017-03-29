/**
 * Created by Michalos on 3/26/2017.
 */
"use strict";
// Reference: Learning JavaScript Data Structures and Algorithms, by Loiane Groner
var fs = require('fs');
var path = require('path');
var readline = require('readline');
fs.readFile(path.join(__dirname, "infile" + ".dat"), "utf-8", function (err, file) {
    if (err)
        console.error("An error occurred while opening the file!", err);
    else {
        var temp = file.split(",");
        var Set_1 = new SortedSet();
        for (var i = 0; i < temp.length; i++) {
            Set_1.add(temp[i]);
        }
        var rl_1 = readline.createInterface(process.stdin, process.stdout);
        rl_1.question("Search for: ", function (value) {
            if (Set_1.contains(value)) {
                rl_1.close();
                return console.log("Yes");
            }
            else {
                rl_1.close();
                return console.log("No");
            }
        });
    }
});
function SortedSet() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                insertNode(node.right, newNode);
            }
        }
    };
    this.add = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        }
        else {
            insertNode(root, newNode);
        }
    };
    this.isEmpty = function () {
        if (root != null) {
            return false;
        }
        else {
            return true;
        }
    };
    this.contains = function (key) {
        return searchNode(root, key);
    };
    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key);
        }
        else {
            return true;
        }
    };
    var findMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    };
    this.remove = function (key) {
        root = removeNode(root, key);
    };
    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };
}
