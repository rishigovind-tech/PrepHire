const { default: mongoose } = require("mongoose");



const companyjobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  password: { type: String, required: true },
});

const Companyjob=mongoose.model('Companyjob',companyjobSchema)

module.exports=Companyjob;