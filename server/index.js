const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ujjwal');
    console.log('db connected');
}
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const User = mongoose.model('co-home', userSchema);


app.post('/login', async(req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    const doc = await user.save();
    console.log(doc);
    res.send(doc);
});

app.listen(3030);