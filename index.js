const coffeeMenu = [
  {
    name: "cappuccino",
    price: 8,
    seasonal: false,
  },
  {
    name: "espresso",
    price: 5,
    seasonal: false,
  },
  {
    name: "latte",
    price: 5,
    seasonal: false,
  },
  {
    name: "affogato",
    price: 9,
    seasonal: true,
  },
  {
    name: "macchiato",
    price: 6,
    seasonal: false,
  },
  {
    name: "americano",
    price: 7,
    seasonal: false,
  },
  {
    name: "iced coffee",
    price: 6,
    seasonal: false,
  },
  {
    name: "frappe",
    price: 8,
    seasonal: false,
  },
  {
    name: "cuban espresso",
    price: 10,
    seasonal: true,
  },
];

/*using the map() function, iterate over each element in the coffeeMenu array,
extract the value of the names property from each object using the => function, 
it is applied to each element(item) in the coffeeMenu array */
const coffeeDrinks = coffeeMenu.map((item) => item.name);
/*using the filter() function, create a new array by filtering elements in the coffeeMenu array
based on the condition that the values are less than or equal to 5,
populate new variable with said values*/
const cheapDrinks = coffeeMenu.filter((item) => item.price <= 5);
const cheapDrinkNames = cheapDrinks.map((item) => item.name);
/*using the filter() function, create a new array by filtering elements in the coffeMenu array
based on the condition that the values  have even pricing*/
const evenDrinks = coffeeMenu.filter((item) => item.price % 2 === 0);
const evenDrinkNames = evenDrinks.map((item) => item.name);
/*using the reduce() function, reduce the coffeeMenu array to a single value
by applying this function to each element of the array: Add the price property
of the current item to the accumulator to add the total sum of coffee drinks,
store the results in the totalCost variable */
const totalCost = coffeeMenu.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);
/*use the filter() function to create a new array filtering only seasonal value elements
 in the coffeeMenu array, 
 */
const seasonalDrinks = coffeeMenu.filter((item) => item.seasonal);
const seasonalDrinksOnly = seasonalDrinks.map(
  (item) => `${item.name} With imported beans`
);

console.log(
  coffeeDrinks,
  cheapDrinkNames,
  evenDrinkNames,
  totalCost,
  seasonalDrinksOnly
);
