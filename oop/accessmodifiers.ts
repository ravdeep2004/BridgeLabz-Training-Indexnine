//public
class Student {
  public name: string = "Ravi";
}

//private
class Bank {
  private balance: number = 1000;

  showBalance() {
    console.log(this.balance); // allowed
  }
}

//protected
class Animal {
  protected type: string = "Mammal";
}

class Dog extends Animal {
  showType() {
    console.log(this.type); // allowed
  }
}


