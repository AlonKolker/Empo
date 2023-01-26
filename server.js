
const express = require('express')
var cors = require('cors')
const organizationRoutes = require('./app/organizationRoutes');

const app = express()
app.use(express.json());
app.use(cors())
// app.use(express.static('public'));
app.use(express.static('dist'));

app.use('/api/organization', organizationRoutes);

const port = process.env.PORT || 3030;
app.listen(port,()=>console.log(`Listening to port ${port}`))