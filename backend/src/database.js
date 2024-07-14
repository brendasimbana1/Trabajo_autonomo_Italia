const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/italia')

.then(db => console.log('Database is connected'))
.catch(err => console.log('err'))