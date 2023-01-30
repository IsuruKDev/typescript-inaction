let person = {
  name: 'Isuru Kularathna',
  email: 'isurujr.online@gmail.com',
};

console.log(person);

let pet = "dog";

function setPet(){
  let pet = "cat";
  console.log(`Domastic pet is ${pet}`);
}

setPet();
console.log(`Outside pet is ${pet}`);

const MAX_VALUE = 1001;

console.log(MAX_VALUE);

const obj = {
  value:'for'
};

obj.value = 'bar';

console.log(obj);

let authorized:boolean;

authorized = true;
authorized = false;
authorized = null;
authorized = undefined;
authorized = (()=> true)();
authorized = (()=> false)();

let numValue:number;

numValue = 12;
numValue = -12;
numValue = 12.05;
numValue = -12.05;
numValue = 0b1101;
numValue = 0x126;
numValue = 0o123;
numValue = null;
numValue = undefined;
numValue = (()=>123)();

let str:string;

str = 'IsuruK';
str = "I'm Isuru";
str = `Isuru Kula`;
str = null;
str = undefined;
str = "Isuru".toLocaleUpperCase();
str = (()=> `IBK`)();