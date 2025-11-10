require('dotenv').config();

const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const catsData = [
  {
    name: 'Cool Cat',
    breed: 'Russian Blue',
    description: 'This stylish cat loves to pose with its favorite shades!',
    imageUrl: 'cat_sunglasses.jpg'
  },
  {
    name: 'Morning Stretch',
    breed: 'Orange Tabby',
    description: 'Start your day like this orange furball with a good stretch!',
    imageUrl: 'cat_orange_stretch.jpg'
  },
  {
    name: 'Sleepy Cat',
    breed: 'Orange Tabby',
    description: 'Even the cutest cats need their nap time in nature.',
    imageUrl: 'cat_yawn.jpg'
  },
  {
    name: 'Curious Cat',
    breed: 'Russian Blue',
    description: 'Exploring every corner of the table, one paw at a time.',
    imageUrl: 'cat_table.jpg'
  },
  {
    name: 'Cuddle Buddy',
    breed: 'Gray Tabby',
    description: 'Because the best place to nap is in a warm hug.',
    imageUrl: 'cat_bed.jpg'
  },
  {
    name: 'Family Time',
    breed: 'Mixed Kittens',
    description: 'Four little kittens ready to explore the world together.',
    imageUrl: 'cat_kittens.jpg'
  },
  {
    name: 'Book Lover',
    breed: 'Orange Tabby',
    description: 'Reading is better with a furry friend nearby.',
    imageUrl: 'cat_book.jpg'
  }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connected');

        await Cat.deleteMany({});
        console.log('🗑️  Cleared existing cats');

        const insertedCats = await Cat.insertMany(catsData);
        console.log(`✅ Successfully inserted ${insertedCats.length} cats`);

        console.log('\n📋 Inserted cats:');
        insertedCats.forEach((cat, index) => {
          console.log(`${index + 1}. ${cat.name} (${cat.breed}) - ID: ${cat._id}`);
        });

        await mongoose.connection.close();
        console.log('\n✅ Database seeding completed and connection closed');
        process.exit(0);

    } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
    }
};

seedDatabase();



    
