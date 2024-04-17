function getSizeInKB(object) {
    // Get the size of the object in bytes
    const sizeInBytes = JSON.stringify(object).length;
    // Convert the size from bytes to KB
    const sizeInKB = sizeInBytes / 1024;
    return sizeInKB;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('akshay1', 20);
const person2 = new Person('akshay2', 30);

console.log(person2);
console.log(person1);

Person.prototype.city = 'surat';
Person.prototype.state = 'Gujarat';

console.log(person2.city);
console.log(person1.state);

console.log(getSizeInKB(person1), "person1");
console.log(getSizeInKB(person2), "person2");



