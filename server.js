require('dotenv').config();
const app = require('./src/app');
const { connectDB, sequelize } = require('./src/config/db');
const Profile = require('./src/models/Profile');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await connectDB();
    await sequelize.sync(); // <-- creates table if not exists
    console.log(`Server running on port ${PORT}`);
});
