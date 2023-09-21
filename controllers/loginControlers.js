const Admin = require('../models/loginModel');
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; // Change this to a secure secret key

module.exports.retriveLoginDetails = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if there's an admin record with the provided username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ result: 'error', message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (passwordMatch) {
      // Passwords match, generate a JWT token
      const token = jwt.sign({ username: admin.username }, secretKey, { expiresIn: '1h' });

      // Return the token to the client
      return res.json({ result: 'success', token });
    } else {
      // Passwords don't match
      return res.status(401).json({ result: 'error', message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ result: 'error', message: 'Internal server error' });
  }
};
