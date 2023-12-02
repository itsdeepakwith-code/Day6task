//MOVIE - Class
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }

  isPG() {
    return this.rating === "PG";
  }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


if (casinoRoyale.isPG()) {
  console.log(`Title: ${casinoRoyale.title}, Studio: ${casinoRoyale.studio}, Rating: ${casinoRoyale.rating}`);
}


const moviesArray = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "PG-13"),
  new Movie("Movie3", "Studio3", "R"),
  new Movie("Movie4", "Studio4")  
];


const pgMovies = moviesArray.filter(movie => movie.isPG());


pgMovies.forEach(movie => {
  console.log(`Title: ${movie.title}, Studio: ${movie.studio}, Rating: ${movie.rating}`);
});
//--------------------------------------------------------------------------------------------------------//

//CLASS circle

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return 3.1415 * this.radius * this.radius; 
  }

  circumference() {
    return 2 * 3.1415 * this.radius; 
  }
}

const myCircle = new Circle(5);

console.log(`Radius: ${myCircle.radius}`);
console.log(`Area: ${myCircle.area().toFixed(2)}`);
console.log(`Circumference: ${myCircle.circumference().toFixed(2)}`);




//person class to get details 
class Person {
    constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
  
    get details() {
      return `Name: ${this.name}\nAge: ${this.age}\nHeight: ${this.height}`;
    }
  }
  
  var person = new Person("Deepak", 23, "6ft");
  
  
  var personDetails = person.details;
  
console.log(personDetails);
  
//Uber price 
class Uber {
    constructor(basePrice, driverFare, distanceTravelled) {
      this.basePrice = basePrice;
      this.driverFare = driverFare;
      this.distanceTravelled = distanceTravelled;
    }
  
    set KMTravelled(kms) {
      this.distanceTravelled = kms;
    }
  
    get chargedPrice() {
      var totalFare = this.basePrice + this.driverFare + this.distanceTravelled * 5;
      return `The total fare is Rs ${totalFare}`;
    }
  }

  var charges = new Uber(20, 30, 10);
  
  charges.KMTravelled = 10

  console.log(charges.chargedPrice);
  
  