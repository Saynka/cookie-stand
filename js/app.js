"use strict"


// random num of customers
// Seattle cookie sale


// function Rngforall()


// console.log('Seattle')
// function numOfGuests(min, max){
//   return Math.ceil(Math.random() * (max - min) + min)
//   }
  
//   console.log(numOfGuests(23, 65));

// function sales(guestsperhour, avg) {
//   return guestsperhour * avg;
// }

// var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// for (var i = 0; i <= 13; i = i + 1){
//   var guesttest = numOfGuests(23, 65);
//  console.log(storeHoursArr[i], sales(guesttest, 6.3));
//   storeHoursArr[i], sales(guesttest, 6.3)
// }
// // tokyo cookie sales
// console.log('Tokyo')
// function numOfGuests(min, max){
//   return Math.ceil(Math.random() * (max - min) + min)
//   }
  
//   console.log(numOfGuests(3, 24));

// function sales(guestsperhour, avg) {
//   return guestsperhour * avg;
// }

// var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// for (var i = 0; i <= 13; i = i + 1){
//   var guesttest = numOfGuests(3, 24);
//  console.log(storeHoursArr[i], sales(guesttest, 61.2));
//   storeHoursArr[i], sales(guesttest, 61.2)
// }

// // Dubai cookie sales
// console.log('Dubai')
// function numOfGuests(min, max){
//   return Math.ceil(Math.random() * (max - min) + min)
//   }
  
//   console.log(numOfGuests(11, 38));

// function sales(guestsperhour, avg) {
//   return guestsperhour * avg;
// }

// var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// for (var i = 0; i <= 13; i = i + 1){
//   var guesttest = numOfGuests(11, 38);
//  console.log(storeHoursArr[i], sales(guesttest, 3.7));
//   storeHoursArr[i], sales(guesttest, 3.7)
// }

// // Paris Cookie sales
// console.log('Paris')
// function numOfGuests(min, max){
//   return Math.ceil(Math.random() * (max - min) + min)
//   }
  
//   console.log(numOfGuests(20, 38));

// function sales(guestsperhour, avg) {
//   return guestsperhour * avg;
// }

// var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// for (var i = 0; i <= 13; i = i + 1){
//   var guesttest = numOfGuests(20, 38);
//  console.log(storeHoursArr[i], sales(guesttest, 2.3));
//   storeHoursArr[i], sales(guesttest, 2.3)
// }

// // Lima Cookie sales
// console.log('Lima')
// function numOfGuests(min, max){
//   return Math.ceil(Math.random() * (max - min) + min)
//   }
  
//   console.log(numOfGuests(2, 16));

// function sales(guestsperhour, avg) {
//   return guestsperhour * avg;
// }


// for (var i = 0; i <= 13; i = i + 1){
//   var guesttest = numOfGuests(2, 16);
//   console.log(storeHoursArr[i], sales(guesttest, 4.6));
//   storeHoursArr[i], sales(guesttest, 4.6)
// }






var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

var seattle = {
  name: "Seattle",
  min: 23,
  max: 65,
  avg: 6.3,
  store: true,
  dailySales:[],
  numOfGuests: function(){
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min)
  },
  sales: function(guestsperhour) {
    return Math.ceil(guestsperhour * this.avg);
  },
  generateDailySales: function(){
    for (var i = 0; i < storeHoursArr.length; i++){
      var projectedCustomers = this.numOfGuests()
      var cookiesSales = this.sales(projectedCustomers) 
      this.dailySales.push(cookiesSales)
    }
  },

  render: function(){
    var list = document.getElementById("Sales");
    var listElement = document.createElement('li');
    listElement.textContent = this.name;
    list.appendChild(listElement);
    for (var i = 0; i < storeHoursArr.length; i++){
      var time = document.createElement('li');
      time.textContent = `${storeHoursArr[i]}: ${this.dailySales[i]} cookies`
      list.appendChild(time);
    }

    
    // var tableData = document.createElement('td');
    // tableData.textContent = this.color;
    // tableRow.appendChild(tableData);
  
     
    // line 136 grabbing list create a list element i need to give list element the content i want
    // then i need to append my list element to parent element 
    // .textContent = this.dailySales;



  }
    
    
}
seattle.generateDailySales();
seattle.render()


var tokyo = {
  min: 3,
  max: 24,
  avg: 61.2,
  store: true,
}


var dubai = {
  min: 11,
  max: 38,
  avg: 3.7,
  store: true,
}


var paris = {
  min: 20,
  max: 38,
  avg: 2.3,
  store: true,
}


var lima = {
  min: 2,
  max: 16,
  avg: 4.6,
  store: true,
}

// console.log(sales(30, 6.3), numOfGuests(23,65))

// // DO SOME WORK on a branch,
// // CONSOLE: git add (FILES)
// // CONSOLE git commit -m " (short message about what you did)"
// // CONSOLE git push origin (BRANCH YOU AR ON)
// // GITHUB make pull request and merge
// // CONSOLE git checkout master
// // CONSOLE git pull origin master
// // CONSOLE git checkout -b (NEW BRANCH NAME) 
// // GO BACK TO TOP OF STACK


