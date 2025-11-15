//Stack in js

class Stack{
    constructor(){
        this.stack=[];
    }

    push(element){
        return this.stack.push(element);
    }

    pop(){
        if(this.isEmpty() === true){
            return "Stack is Empty";
        }
        return this.stack.pop();
    }

    isEmpty(){
        return this.stack.length === 0; //or this.size() === 0
    }

    peek(){
        if(this.isEmpty() === true){
            return "Stack is Empty";
        }
        return this.stack[this.size()-1];  // or this.stack[this.stack.length-1]
    }

    size(){
        return this.stack.length;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());