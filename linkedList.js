/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;
    return {
        getHead: function(){
            return head;
        },
        getTail: function(){
            return tail;
        },
        add: function(value){
            let newNode = new Object;
            newNode.value = value;
            newNode.next = null;
            if (!head){
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = newNode;
            }
            return newNode;
        },
        get: function(index){
            let current = head;

            let i = 0;
            while (current !== null) {
                if (i === index) {
                    return current;
                } else { 
                    current = current.next;
                    i++;
                }
            }
            return false;
         
        },
        remove: function(index){
            let current = this.get(index);
            let before = this.get(index - 1);
            if (current === false){
                return false;
            }
            if (index === 0){
                head = current.next;
            } else if (!this.get(index + 1)) {
                tail = before;
                before.next = null;
            } else {
                before.next = current.next;
            }
        },
        insert: function(value, index){
            if (!this.get(index)){
                return false;
            }
            
            let current = this.get(index);
            let before, temp;
            let newNode = {};
            newNode.value = value;
            if (index === 0){
                head = newNode;
                newNode.next = current;
                before = false;
            } else {
                temp = current;
                before = this.get(index - 1);
                before.next = newNode;
                newNode.next = temp;
            }
        },
    };
}