class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        if(this.isempty()){
            return "underflow"
        }
       return this.queue.shift();
    }

    isempty(){
        return this.queue.length === 0;
    }

    front(){
        if(this.isempty()){
            return "empty queue"
        }
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    printqueue(){
        let string = ""
        for(let i =0;i<this.queue.length;i++){
            string += this.queue[i]+","
        }
        console.log(string);

    }
}