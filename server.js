const express = require('express');
const bodyParser = require('body-parser');
const routes_ = require('./routes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', routes_

);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
