


class Car {
    constructor(){
        this.wheels='4'
        this.type='Hatchback'
        this.year='2016'
    }
}


class Ford extends Car {
    constructor(){
        super()
        this.windows=4;
    }
}

// Creating objects

const car1=new Car();
console.log(car1.type)

const car=new Ford();
console.log(car.wheels)
console.log(car.windows)

// React - Exploring "STATE"
// Functional components dont have states. Stateless components
// How to create a state
// WHen we change the STATE react RE- RENDERS the application!!

state={
    keywords:'Hello'
}




