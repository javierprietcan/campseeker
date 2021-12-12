const mongoose = require('mongoose');
const cities = require('./cities2');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const dbUrl = process.env.DB_URL 


mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 300; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const price = Math.floor(Math.random() * 20) + 10;
//         const camp = new Campground({
//             //MY USER ID
//             author: '6159b89625cc4d47399a3c31',
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
//             price,
//             geometry: {
//                 type: "Point",
//                 coordinates: [cities[random1000].longitude,
//             cities[random1000].latitude
//         ]
//             },
//             images: [
//                 {
//                     url: 'https://res.cloudinary.com/dnbcybvgn/image/upload/v1633949821/Yelcamp/camping_jfsvra.jpg',
//                     filename: 'YelpCamp/camping_jfsvra'
//                 },
//                 {
//                     url: 'https://res.cloudinary.com/dnbcybvgn/image/upload/v1633949821/Yelcamp/camping_jfsvra.jpg',
//                     filename: 'YelpCamp/camping_jfsvra'
//                 }
//             ]
//         })
//         await camp.save();
//     }
// }


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < cities.length; i++) {
        const random1000 = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //MY USER ID
            author: '6159b89625cc4d47399a3c31',
            location: `${cities[random1000].city}, ${cities[random1000].state} `,
            title: `${cities[random1000].title}`,
            description: `${cities[random1000].description} || ${cities[random1000].Tlf}`,
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dnbcybvgn/image/upload/v1633949821/Yelcamp/5-mejores-glampings-espana_m8hm8b.jpg',
                    filename: 'YelpCamp/camping_1'
                },
                {
                    url: 'https://res.cloudinary.com/dnbcybvgn/image/upload/v1633949821/Yelcamp/5-mejores-glampings-espana_m8hm8b.jpg',
                    filename: 'YelpCamp/camping_2'
                },
                {
                    url: 'https://res.cloudinary.com/dnbcybvgn/image/upload/v1639309298/Yelcamp/rohan-makhecha-SqE0zjaYuFI-unsplash_1_ugxg4i.jpg',
                    filename: 'YelpCamp/camping_3'
                },
                {
                    url: 'https://res.cloudinary.com/dnbcybvgn/image/upload/v1639309289/Yelcamp/etienne-boulanger-C5yfbvMWxC8-unsplash_gyq4nb.jpg',
                    filename: 'YelpCamp/camping_4'
                },
                {
                    url: 'https://res.cloudinary.com/dnbcybvgn/image/upload/v1639309283/Yelcamp/javier-penas-UI1zMu-otWc-unsplash_zoebvi.jpg',
                    filename: 'YelpCamp/camping_5'
                },
                
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})