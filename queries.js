// queries.js – MongoDB CRUD Operations

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // All queries will go here 👇

  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await client.close();
    console.log('🔒 Connection closed');
  }
}

runQueries();

// TASK 1
// 1. Find all books in a specific genre (e.g., Fiction)
const fictionBooks = await collection.find({ genre: "Fiction" }).toArray();
console.log("📚 Fiction Books:");
console.log(fictionBooks);

const FictionBooks = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ad'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b1'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }
]

// 2. Find books published after a certain year (e.g., 1950)
const recentBooks = await collection.find({ published_year: { $gt: 1950 } }).toArray();
console.log("📘 Books published after 1950:");
console.log(recentBooks);

const RecentBooks = [
 {
    _id: ObjectId('6905e172f65e177fc58a59a8'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ad'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59af'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b1'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }
]

// 3. Find books by a specific author (e.g., George Orwell)
const orwellBooks = await collection.find({ author: "George Orwell" }).toArray();
console.log("📖 Books by George Orwell:");
console.log(orwellBooks);

const OrwellBooks =
[
  {
    _id: ObjectId('6905e172f65e177fc58a59a9'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b0'),
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  }
]

// 4. Update the price of a specific book (e.g., '1984')
// Remove or comment out the first updateResult
const updateResult = await collection.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
);
console.log(`💲 Updated ${updateResult.modifiedCount} book(s)`);

// Example of what the updateResult object should look like
const exampleResult = {
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
};

// 5. Delete a book by its title (e.g., 'Animal Farm')
const deleteResult = await collection.deleteOne({ title: "Animal Farm" });
console.log(`🗑️ Deleted ${deleteResult.deletedCount} book(s)`);

// Example of the deleteResult object structure
const exampleDeleteResult = {
    acknowledged: true,
    deletedCount: 1
};

//TASK 2
// 6. Find books that are both in stock and published after 2010
const availableRecentBooks = await collection
  .find({ in_stock: true, published_year: { $gt: 1940 } })
  .toArray();

console.log("📗 In-stock books published after 1940:");
console.log(availableRecentBooks);
const AvailableRecentBooks = [
  {
    _id: ObjectId('6905e172f65e177fc58a59a8'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59a9'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 13.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ad'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59af'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b1'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }
]

// 7. Projection: only return title, author, and price
const projectedBooks = await collection
  .find({}, { projection: { _id: 0, title: 1, author: 1, price: 1 } })
  .toArray();

console.log("🪶 Books (only title, author, price):");
console.log(projectedBooks);
const ProjectedBooks =     [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99
  },
  { title: '1984', author: 'George Orwell', price: 13.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99
  },
  { title: 'Brave New World', author: 'Aldous Huxley', price: 11.5 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 14.99 },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 8.99
  },
  { title: 'Pride and Prejudice', author: 'Jane Austen', price: 7.99 },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 19.99
  },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 10.99 },
  { title: 'Moby Dick', author: 'Herman Melville', price: 10.99 },
  { title: 'Wuthering Heights', author: 'Emily Brontë', price: 9.99 }
]

// 8. Sort by price (ascending)
const sortedAsc = await collection.find().sort({ price: 1 }).toArray();
console.log("💵 Books sorted by price (Low → High):");
console.log(sortedAsc);

[
  {
    _id: ObjectId('6905e172f65e177fc58a59ae'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ad'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59aa'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b3'),
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b1'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b2'),
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 10.99,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ab'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59a8'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59a9'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 13.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ac'),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59af'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  }
]

// 9. Sort by price (descending)
const sortedDesc = await collection.find().sort({ price: -1 }).toArray();
console.log("💰 Books sorted by price (High → Low):");
console.log(sortedDesc);

[
  {
    _id: ObjectId('6905e172f65e177fc58a59af'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ac'),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59a9'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 13.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59a8'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ab'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b1'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b2'),
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 10.99,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59aa'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b3'),
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ad'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ae'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  }
]

// 10. Pagination – Page 1 (first 5 books)
const page1 = await collection.find().limit(5).toArray();
console.log("📄 Page 1 (Books 1–5):");
console.log(page1);

[
  {
    _id: ObjectId('6905e172f65e177fc58a59a8'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59a9'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 13.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59aa'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ab'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ac'),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  }
]

// 11. Pagination – Page 2 (next 5 books)
const page2 = await collection.find().skip(5).limit(5).toArray();
console.log("📄 Page 2 (Books 6–10):");
console.log(page2);

[
  {
    _id: ObjectId('6905e172f65e177fc58a59ad'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59ae'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59af'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b1'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    _id: ObjectId('6905e172f65e177fc58a59b2'),
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 10.99,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  }
]

//TASK 3
// 12. Aggregation: Average price per genre
const avgPriceByGenre = await collection.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { averagePrice: -1 } }
]).toArray();

console.log("📊 Average Book Price by Genre:");
console.log(avgPriceByGenre);

[
  { _id: 'Fantasy', averagePrice: 17.49, totalBooks: 2 },
  { _id: 'Dystopian', averagePrice: 12.745000000000001, totalBooks: 2 },
  { _id: 'Adventure', averagePrice: 10.99, totalBooks: 1 },
  { _id: 'Fiction', averagePrice: 10.74, totalBooks: 4 },
  { _id: 'Gothic Fiction', averagePrice: 9.99, totalBooks: 1 },
  { _id: 'Romance', averagePrice: 7.99, totalBooks: 1 }
]

// 13. Aggregation: Most prolific author
const mostProlificAuthor = await collection.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]).toArray();

console.log("✍️ Most Prolific Author:");
console.log(mostProlificAuthor);

[ { _id: 'J.R.R. Tolkien', totalBooks: 2 } ]

// 14. Aggregation: Group books by decade
const booksByDecade = await collection.aggregate([
  {
    $addFields: {
      decade: {
        $concat: [
          { $toString: { $subtract: [ { $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] }, 0 ] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      totalBooks: { $sum: 1 },
      averagePrice: { $avg: "$price" }
    }
  },
  { $sort: { _id: 1 } }
]).toArray();

console.log("📚 Books Grouped by Decade:");
console.log(booksByDecade);

[
  { _id: '1810s', totalBooks: 1, averagePrice: 7.99 },
  { _id: '1840s', totalBooks: 1, averagePrice: 9.99 },
  { _id: '1850s', totalBooks: 1, averagePrice: 10.99 },
  { _id: '1920s', totalBooks: 1, averagePrice: 9.99 },
  { _id: '1930s', totalBooks: 2, averagePrice: 13.245000000000001 },
  { _id: '1940s', totalBooks: 1, averagePrice: 13.99 },
  { _id: '1950s', totalBooks: 2, averagePrice: 14.489999999999998 },
  { _id: '1960s', totalBooks: 1, averagePrice: 12.99 },
  { _id: '1980s', totalBooks: 1, averagePrice: 10.99 }
]

//TASK 4
// ===== Task 5: Indexing =====
console.log("⚙️ Creating index on 'author'...");

const authorIndex = await collection.createIndex({ author: 1 });
console.log("✅ Index created:", authorIndex);

db.books.createIndex({ title: 1 })

db.books.createIndex({ author: 1, published_year: -1 })

db.books.find({ title: "1984" }).explain("executionStats")

