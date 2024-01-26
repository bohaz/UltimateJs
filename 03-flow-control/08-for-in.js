let user = {
  id: 1,
  name: 'John',
  age: 25
};

for (let prop in user) {
  console.log(prop, user[prop]);
}

let animals = ['cat', 'dog', 'bird'];
for (let index in animals) {
  console.log(index, animals[index]);
}