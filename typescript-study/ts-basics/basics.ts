let age: number;
age = 12;

let userName: string;
userName = "Jane";

let isInstructor: boolean;
isInstructor = false;

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

let course: string | number = "React- the Complete Guide";
course = 12341;

const add2 = (a: number, b: number): number => {
  return a + b;
};

const printOutput = (value: any) => {
  console.log(value);
};

const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

insertAtBeginning(["a", "b", "c"], "d");

updatedArray[0].split("");
