var person = {
    name: 'Isuru Kularathna',
    email: 'isurujr.online@gmail.com'
};
console.log(person);
var pet = "dog";
function setPet() {
    var pet = "cat";
    console.log("Domastic pet is ".concat(pet));
}
setPet();
console.log("Outside pet is ".concat(pet));
var MAX_VALUE = 1001;
console.log(MAX_VALUE);
var obj = {
    value: 'for'
};
obj.value = 'bar';
console.log(obj);
var authorized;
authorized = true;
authorized = false;
authorized = null;
authorized = undefined;
authorized = (function () { return true; })();
authorized = (function () { return false; })();
var numValue;
numValue = 12;
numValue = -12;
numValue = 12.05;
numValue = -12.05;
numValue = 13;
numValue = 0x126;
numValue = 83;
numValue = null;
numValue = undefined;
numValue = (function () { return 123; })();
var str;
str = 'IsuruK';
str = "I'm Isuru";
str = "Isuru Kula";
str = null;
str = undefined;
str = "Isuru".toLocaleUpperCase();
str = (function () { return "IBK"; })();
