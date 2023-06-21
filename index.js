// 29

let ladder = {
  step: 0,
  up: function() {
      this.step++;
      return this; 
  },
  down: function() {
      this.step--;
      return this; 
  },
  showStep: function() {
      alert(this.step);
      return this; 
  }
};

ladder.up().up().down().showStep(); 

// 30

function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(undefined);

  this.getAge = function() {
      var currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
  };

  this.getAverageGrade = function() {
      if (this.grades.length === 0) {
          return 0;
      }
      var sum = this.grades.reduce(function(a, b) {
          return a + b;
      });
      return sum / this.grades.length;
  };

  this.present = function() {
      if (this.attendance.includes(undefined)) {
          var emptyIndex = this.attendance.indexOf(undefined);
          this.attendance[emptyIndex] = true;
      }
  };

  this.absent = function() {
      if (this.attendance.includes(undefined)) {
          var emptyIndex = this.attendance.indexOf(undefined);
          this.attendance[emptyIndex] = false;
      }
  };

  this.summary = function() {
      var averageGrade = this.getAverageGrade();
      var attendancePercentage = this.attendance.filter(function(a) {
          return a === true;
      }).length / this.attendance.length;
    
      if (averageGrade > 90 && attendancePercentage > 0.9) {
          return "Молодець!";
      } else if (averageGrade > 90 || attendancePercentage > 0.9) {
          return "Добре, але можна краще";
      } else {
          return "Редиска!";
      }
  };
}

var student1 = new Student("Іван", "Петров", 2000);
var student2 = new Student("Олена", "Сидорова", 1999);
var student3 = new Student("Микола", "Іванов", 2001);

student1.present();
student1.present();
student1.absent();
console.log(student1.summary()); // "Добре, але можна краще"

student2.present();
student2.present();
student2.present();
console.log(student2.summary()); // "Редиска!"

student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.present();
console.log(student3.summary()); // "Молодець!"

// 31

class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SPICE = { price: 15, calories: 0 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
      price += topping.price;
    });
    return price;
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach((topping) => {
      calories += topping.calories;
    });
    return calories;
  }
}


var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Price with sauce: " + hamburger.calculatePrice());

// 32

class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;
    if (this.isValidOperator(znak)) {
      const result = this.calculate(X, Y, znak);
      console.log(result);
    } else {
      this.input();
    }
  }

  isValidOperator(operator) {
    const validOperators = ["+", "-", "/", "*", "%"];
    return validOperators.includes(operator);
  }

  calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
      default:
        return "Invalid operator";
    }
  }

  input() {
    const X = parseInt(prompt("Enter X:"));
    const Y = parseInt(prompt("Enter Y:"));
    const znak = prompt("Enter znak:");
    const obj = { X, Y, znak };
    this.check(obj);
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);

// 33

class Людина {
  constructor(імʼя, стать) {
    this.імʼя = імʼя;
    this.стать = стать;
  }
}

class Квартира {
  constructor() {
    this.жителі = [];
  }

  додатиЖителя(людина) {
    this.жителі.push(людина);
  }
}

class Будинок {
  constructor(максимальнаКількістьКвартир) {
    this.квартири = [];
    this.максимальнаКількістьКвартир = максимальнаКількістьКвартир;
  }

  додатиКвартиру(квартира) {
    if (this.квартири.length < this.максимальнаКількістьКвартир) {
      this.квартири.push(квартира);
    } else {
      console.log("Досягнуто максимальну кількість квартир у будинку.");
    }
  }
}
