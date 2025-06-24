import LocalStorage from './LocalStorage'
import User from './User'
import NodeLocaleHelper from './NodeLocaleHelper'
import Calculator from "./Calculator";
import Example from "./Example";
import { collector } from './decorators/class/collector';

const storage = new LocalStorage()

storage.setItem<User>('user_123', {
  id: 123,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@hm.com'
})

const user = storage.getItem<User>('user_123', User)

console.log(user instanceof User)

console.log(1)

NodeLocaleHelper.locale = 'en-US'

const calculator1 = new Calculator()
const calculator2 = new Calculator()
console.log('Instances: ', collector.instances);

calculator1.add(1, 2)
console.log(calculator1.x)

const example = new Example();

console.log(example.expensiveValue);
console.log(example.expensiveValue);
console.log(example.expensiveValue);

const users: string[] = example.getAllUsers();

(async function() {
  await example.computeExpensiveValueAsync().then(result => {
    console.log(result);
  })
})()

example.x = 2
