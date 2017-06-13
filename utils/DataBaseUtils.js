import mongoose from 'mongoose';

import '../models/users';

const Users = mongoose.model('Users');

export function setUpConnection() {
  mongoose.connect('mongodb://localhost/user');
}

export function usersList() {
  return Users.find();
}

export function createUser(data) {
  const user = new User({
    name: data.name,
    password: data.password,
    avatar: data.avatar
  });

  return user.save();
}

export function deleteUser(id) {
  return User.findById(id).remove();
}
