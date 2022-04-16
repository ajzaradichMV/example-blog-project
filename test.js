const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser: true});

BlogPost.create({
    title: "The Mythbuster's Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills."
}, (error, blogpost) => {
    console.log(error,blogpost)
})

BlogPost.find({}, (error, blogpost) => {
    console.log(error,blogpost)
})