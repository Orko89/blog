const express = require('express');
const app = express();
const blogRoutes = require('./routes/api.js');

app.use(express.json());
app.use("/api", blogRoutes);

const PORT = process.env.PORT || 2020;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});