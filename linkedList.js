export function linkedList (Node = new node()){
    
    let headNode = Node;

    const size = function(){
        let currentNode = headNode;
        let count = 1;
        while(currentNode.next != null){
            currentNode = currentNode.next;
            count++;
        }
        return count;
    }

    const append = function(value){
        if(headNode.value == null) {return headNode = new node(value);}
        let lastNode = headNode;
        while (lastNode.next != null){
            lastNode = lastNode.next
        }
        lastNode.next = new node(value);
    }

    const prepend = function(value){
        let nextNode = headNode;
        headNode = new node(value, nextNode);
    }

    const print = function(){
        let currNode = headNode;
        console.log(currNode)
        while(currNode.next != null){
            currNode = currNode.next;
            console.log(currNode)
        }
        console.log(size())
    }

    const head = function(){
        return headNode;
    }

    const tail = function(){
        let lastNode = headNode;
        while (lastNode.next != null){
            lastNode = lastNode.next
        }
        return lastNode;
    }

    const at = function(index){
        if(index > size() - 1) return "index greater than list size";
        let currNode = headNode;
        let val = 0;
        while(val < index){
            currNode = currNode.next;
            val++
        }
        return currNode;
    }

    const pop = function(){
        let currNode = headNode;
        while(currNode.next.next != null){
            currNode = currNode.next;
        }
        currNode.next = null;
    }

    const find = function(value){
        let currNode = headNode;
        let val = 0;
        while(currNode != null){
            if(currNode.value == value) return val;
            val++;
            currNode = currNode.next;
        }
        return -1;
    }

    const toString = function(){
        let currNode = headNode;
        let output = "";
        while(currNode != null){
            output += `( ${currNode.value} )`;
            if(currNode.next != null) output += " -> ";
            currNode = currNode.next;
        }
        return output;
    }
    
    const insertAt = function(value, index){
        if(index > size() - 1) return "index greater than list size";
        let currNode = headNode;
        let val = 0;
        while(val < index){
            currNode = currNode.next;
            val++
        }
        let nextNode = currNode;
        currNode = new node(value, nextNode);
    }

    const removeAt = function(index){
        if(index > size() - 1 || index == 0) return "invalid index for this function";
        if(size() < 3) return "invalid list size for this function"
        let lastNode = null;
        let currNode = headNode;
        let val = 0;
        while(val < index){
            lastNode = currNode;
            currNode = currNode.next;
            val++
        }
        lastNode.next = currNode.next;
    }

    return{ size, append, prepend, print, head, tail, at, pop, find, toString, insertAt, removeAt}
}

export const node  = function (value = null, next = null){
    this.value = value;
    this.next = next;
}