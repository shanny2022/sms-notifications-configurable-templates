const express = require('express');
const connectDB = require('./config/database');
const smsRoutes = require('./routes/smsRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use('/api/sms', smsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
