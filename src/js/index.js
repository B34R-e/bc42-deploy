import {PI, circleArea, MAX} from './utils.js'
import Student from './Student.js';
import {getProducts} from './services.js';

console.log(PI);
console.log("Diện tích hình tròn: ",circleArea(6));

const student1 = new Student('001', "Minh", "minh@gmail.com");

getProducts()
    .then((response) => console.log(response.data));