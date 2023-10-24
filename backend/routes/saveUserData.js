const router = require('express').Router();
const User = require('../models/User');

router.post('/save', async (req, res) => {
  try {
    const userEmail = req.body.email;
    const updatedUserData = req.body.updatedData; // This should contain the updated data for the user
    console.log("User Data : "+updatedUserData);
    // Find the user by email and update their data
    const user = await User.findOneAndUpdate(
      { email: userEmail },
      updatedUserData,
      { new: true }
    );

    if (!user) {
      // If the user with the provided email does not exist, you can handle it accordingly.
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User data updated successfully', user });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
