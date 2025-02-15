const jsonString = '{"name": "Jervin", "age": 20, "hobby": "gym"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.hobbies);

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);
