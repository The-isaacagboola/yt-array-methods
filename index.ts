type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    price: 85000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 45000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 30000,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "27-inch Monitor",
    price: 320000,
    category: "Displays",
    inStock: true,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 55000,
    category: "Accessories",
    inStock: true,
  },
];

type CartItem = {
  product: string;
  price: number;
  quantity: number;
};

const cart: CartItem[] = [
  {
    product: "Mechanical Keyboard",
    price: 85000,
    quantity: 1,
  },
  {
    product: "Wireless Mouse",
    price: 45000,
    quantity: 2,
  },
  {
    product: "Laptop Stand",
    price: 55000,
    quantity: 1,
  },
];

/* 
map
filter
find
some
reduce
 */

/* 
                ARRAY
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
     CHANGE      KEEP      FIND
        │         │         │
       map      filter     find

              CHECK
                │
               some

             COMBINE
                │
              reduce*/

// MAP
// const productNames: string[] = []

// for (const product of products) {
//   productNames.push(product.name)
// }

const productNames = products.map((product) => product.name);
// console.log(productNames);

/*
products
   ↓
map
   ↓
take each product
   ↓
run this function
   ↓
product.name
   ↓
put the result into a new array
*/

/* 
5 products
    ↓
   map
    ↓
5 names*/

//
type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  role: "user" | "admin" | "editor";
};

const users: User[] = [
  {
    id: 1,
    firstName: "Ada",
    lastName: "Obi",
    age: 24,
    role: "user",
  },
  {
    id: 2,
    firstName: "David",
    lastName: "Okafor",
    age: 31,
    role: "admin",
  },
  {
    id: 3,
    firstName: "Sarah",
    lastName: "Bello",
    age: 27,
    role: "editor",
  },
];

const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
// console.log(fullNames);

// FILTER
const productInStock: Product[] = [];

for (const product of products) {
  if (product.inStock) {
    productInStock.push(product);
  }
}

// console.log(productInStock);

const filteredProducts = products.filter((product) => product.inStock);
// console.log(filteredProducts);

/* 

INPUT                    OUTPUT

A ─────────────────────→ A'
B ─────────────────────→ B'
C ─────────────────────→ C'
D ─────────────────────→ D'
*/

/* 
INPUT                    OUTPUT

A ─────────────────────→ A
B ───────────────X
C ─────────────────────→ C
D ───────────────X

*/

type Student = {
  name: string;
  score: number;
};

const students: Student[] = [
  { name: "Amaka", score: 82 },
  { name: "Tunde", score: 45 },
  { name: "Chinedu", score: 71 },
  { name: "Fatima", score: 38 },
  { name: "Daniel", score: 91 },
];

const passedStudents = students.filter((student) => student.score >= 50);

// FIND
const product4 = products.find((product) => product.id === 4);
// console.log(product4);

/* 
filter → give me ALL matching items
find   → give me the FIRST matching item
*/

// SOME
const isProduct4 = products.some((product) => product.id === 4);
// console.log(isProduct4);

/* 
find → "Give me the item."

some → "Just tell me whether one exists."
*/

const hasAdmin = users.some((user) => user.role === "admin");
console.log(hasAdmin);

// REDUCE

/* 
85,000
+
90,000
+
55,000
=
230,000
*/

const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0,
);

console.log(totalPrice);

/* 
Start
  ↓
0

Keyboard
  ↓
0 + 85,000
  ↓
85,000

Mouse
  ↓
85,000 + 90,000
  ↓
175,000

Laptop Stand
  ↓
175,000 + 55,000
  ↓
230,000
*/

/* 
┌───────────────────────────────────────┐
│        WHICH METHOD DO I NEED?        │
├───────────────────────────────────────┤
│                                       │
│ map     → Transform every item        │
│                                       │
│ filter  → Keep items that match       │
│                                       │
│ find    → Find the first matching one │
│                                       │
│ some    → Does at least one match?    │
│                                       │
│ reduce  → Build one result from many  │
│                                       │
└───────────────────────────────────────┘
*/

const names: string[] = [];

for (const product of products) {
  names.push(product.name);
}

const names2 = products.map((product) => product.name);

// CHALLENGE
type Order = {
  id: number;
  customer: string;
  amount: number;
  status: "paid" | "pending" | "cancelled";
};

const orders: Order[] = [
  {
    id: 101,
    customer: "Ada",
    amount: 120000,
    status: "paid",
  },
  {
    id: 102,
    customer: "Tunde",
    amount: 85000,
    status: "pending",
  },
  {
    id: 103,
    customer: "Sarah",
    amount: 210000,
    status: "paid",
  },
  {
    id: 104,
    customer: "Daniel",
    amount: 50000,
    status: "cancelled",
  },
  {
    id: 105,
    customer: "Amaka",
    amount: 175000,
    status: "paid",
  },
];
/* 
1. Get all customer names.
// Which method?
2. Get all paid orders.
// Which method?
3. Find order 103.
// Which method?
4. Check whether there is a cancelled order.
// Which method?
5. Calculate the total amount of paid orders.

*/

/* ANSWER */
// 1
const customerNames = orders.map((order) => order.customer);

// 2
const paidOrders = orders.filter((order) => order.status === "paid");

// 3
const order = orders.find((order) => order.id === 103);

// 4
const hasCancelledOrder = orders.some((order) => order.status === "cancelled");

// 5
const paidTotal = paidOrders.reduce((total, order) => total + order.amount, 0);

/* 
Do I want to...

TRANSFORM everything?
→ map

KEEP some items?
→ filter

FIND one item?
→ find

CHECK whether one exists?
→ some

TURN many items into one result?
→ reduce

*/
