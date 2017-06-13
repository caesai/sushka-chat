import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  avatar: {type: String}
});

const Users = mongoose.model('Users', UsersSchema);
