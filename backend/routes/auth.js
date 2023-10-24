const router = require('express').Router();
const User = require("../models/User");
// const bcrypt = require('bcrypt');

router.post("/signup", async (req, res) => {
    try {
      // const salt = await bcrypt.genSalt(10);
      // const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // password: hashedPass,
        password:req.body.password
      });
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      console.log("error" + err)
      res.status(500).json(err);
    }
  });

  router.post("/login",async(req,res)=>{
    try{
      const user = await User.findOne({email:req.body.email});

    if(!user){
     return res.status(400).json({error:"User not Found."});
    }

    // const validate = await bcrypt.compare(req.body.password,user.password);
    if(req.body.password !== user.password){
      return res.status(400).json({error:"Invalid Password."});
    }
    res.status(200).json(user);
    }catch(error){
      res.status(500).json(error);
    }
})

router.put("/forgot-password", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPass = await bcrypt.hash(password, salt);

    // const updatedUser = await User.findByIdAndUpdate(user._id, { password: hashedPass }, { new: true });
    const updatedUser = await User.findByIdAndUpdate(user._id, { password: req.body.password }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


  module.exports = router;

