var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(0);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 233168;    /* try chaining range() and reduce() */

    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(undefined);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

    var y = 999;
    var largestPalindrome = 0;
    var lp_x;
    var lp_y;

    function isPalindrome(x) {
      x2 = x;
      if (x2.toString() === (((x.toString()).split("")).reverse()).join("")) {
        return true;
      }
    }

    for (x=100;x < 1000;x++) {
      for (y=100; y < 1000; y++) {

      if (isPalindrome(x*y))  {
          if ((x*y) > largestPalindrome)
           { largestPalindrome = x*y;
             lp_x = x;
             lp_y = y;
           }
        }
      }
  }
    expect(largestPalindrome).toBe(906609);
  });


  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {

    var limit = 20;
    var solution = null;
    // already given that 2520 is the smallest for 1 to 10 so solution for any
    // higher limit must be multiple of 2520
    for (i = 2520; solution === null; i=i+2520 )
      {
         for (n = 11; n <= 20; n++)
            {
              if (i%n !== 0) {
                break;
              }
              if (n==20) {
                solution = i;
              }
            }
      }

    expect(solution).toBe(232792560);

  });


  it("should find the difference between the sum of the squares and the square of the sums", function () {
    var limit = 10;  // number limit not specified, using 10
    var sumOfSquares = 0;
    var sum = 0;

    for (i = 1; i <= limit; i++) {
      sum = sum + i;
      sumOfSquares = sumOfSquares + (i*i);
    }

    solution = (sum*sum) - sumOfSquares;

    expect(solution).toBe(2640);
  });


  it("should find the 10001st prime", function () {
    function isPrime(x) {
        if (x%2 === 0){
          return false;
        }
        for (d = 3; d < x/2; d=d+2){
          if (x%d === 0) {
            return false;
          }
        }
        return true;
    }

    var target = 10001;
    var p = 1;
    var i = 2;

    while (p < target){
        i++;
        if (isPrime(i)){
          p++;
        }
    }

    lastPrime = i;

    expect(lastPrime).toBe(104743);

  });


  it("should find the largest prime factor of a composite number", function () {

    var target = 13195;
    var largestFactor = 1;

    function isPrime(x) {
      if (x%2 === 0){
        return false;
      }
      for (d = 3; d < x/2; d=d+2){
        if (x%d === 0) {
          return false;
        }
      }
      return true;
    }

    for (i = 3; i <= Math.sqrt(target); i=i+2 )
      {
        if ((isPrime(i)) && ((target % i) === 0)) {

          if (i > largestFactor) {largestFactor = i;}
          var j = (target/i);
          if (isPrime(j) && j > largestFactor) {largestFactor = j;}
          }
      }

    expect(largestFactor).toBe(29);

  });

});
