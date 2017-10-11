const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var UserId = '59d2d38ea1d9da7e1d676a8f'

// var id = '59d7093c7a8dd3942f38d57811';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('Id not found');
  }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(UserId).then((user) => {
  if (!user){
    return console.log('User by ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
