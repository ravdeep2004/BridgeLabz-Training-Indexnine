//linked list in js

class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedlist{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        const newNode = new node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode;
    }

    size(){
        let count = 0;
        let current = this.head;
        while(current !== null){
            count++;
            current = current.next;
        }
        return count;
    }

    addatIndex(index,data){
        if(index < 0 || index > this.size()){
            console.error("Invalid index");
            return;
        }

        const newNode = new node(data);

        if(index === 0){
        newNode.next = this.head;
        this.head = newNode;
        return;
        }
        
        let current = this.head;
        for(let i = 0; i < index-1; i++){
            current = current.next;
        }
        
        newNode.next = current.next;
        current.next = newNode;
    }

    removeTop(){
        if(this.head === null){
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(this.head === null){
            return;
        }

        let current = this.head;
        while(current.next.next !== null){
            current = current.next;
        }

        current.next = null;
    }

    removeatIndex(index){
        if(index < 0 || index > this.size()){
            console.error("Invalid index");
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }
        
        let current = this.head;
        for(let i = 0; i < index-1; i++){
            current = current.next;
        }
        
        if(current.next !== null){
            current.next = current.next.next;
        }
    }

    print(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}

    const ll = new linkedlist();

    ll.addFirst(200);
    ll.addFirst(300);
    ll.addFirst(400);
    ll.addLast(100);
    ll.addLast(0);
    ll.addatIndex(3,400);
    ll.addatIndex(5,700);
    ll.addatIndex(3,600);
    ll.addatIndex(0,300);
    ll.removeTop();
    ll.removeTop();
    ll.addatIndex(3,500);
    ll.addatIndex(5,900);
    ll.removeLast();
    ll.removeTop();
    ll.removeatIndex(3);
    ll.print();
