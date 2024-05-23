Library Management System
This is a Library Management System built using Node.js, Express, and MongoDB. The system allows users to manage books, borrow records, and generate reports on book borrowing activities.

Table of Contents
Features
Installation
Usage
API Endpoints
Reports
Middleware
License
Features
User authentication and authorization
CRUD operations for books
Borrow and return books
Generate reports on most borrowed books, active members, and book availability
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
Install dependencies:

sh
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy code
MONGODB_URI=mongodb://localhost:27017/library
JWT_SECRET=your_jwt_secret
Start the application:

sh
Copy code
npm start
Usage
Running the server
To run the server in development mode with hot-reloading:

sh
Copy code
npm run dev
Connecting to MongoDB
Ensure MongoDB is running on your machine or use a cloud MongoDB service like MongoDB Atlas. Update the MONGODB_URI in the .env file accordingly.

API Endpoints
Books
Create a new book

bash
Copy code
POST /api/books
Request body example:

json
Copy code
{
  "book_name": "Book Title",
  "cover_image": "cover_image_url",
  "author_name": "Author Name",
  "isbn": "1234567890",
  "genres": "Fiction",
  "publisher": "Publisher Name",
  "quantity": 10,
  "price": 200
}
Get all books

bash
Copy code
GET /api/books
Get a book by ID

bash
Copy code
GET /api/books/:id
Update a book

bash
Copy code
PUT /api/books/:id
Delete a book

bash
Copy code
DELETE /api/books/:id
Borrow Records
Create a new borrow record

bash
Copy code
POST /api/borrows
Request body example:

json
Copy code
{
  "userId": "user_id",
  "bookId": "book_id",
  "purchaseDate": "2023-05-22",
  "active": true
}
Get all borrow records

bash
Copy code
GET /api/borrows
Get a borrow record by ID

bash
Copy code
GET /api/borrows/:id
Update a borrow record

bash
Copy code
PUT /api/borrows/:id
Delete a borrow record

bash
Copy code
DELETE /api/borrows/:id
Reports
Get most borrowed books

bash
Copy code
GET /api/reports/most-borrowed-books
Get active members

bash
Copy code
GET /api/reports/active-members
Get book availability

bash
Copy code
GET /api/reports/book-availability
Middleware
Authentication and Authorization
authenticateUser

Middleware to authenticate a user using JWT.

javascript
Copy code
const authenticateUser = async (req, res, next) => {
    // Implementation
};
authorizeAdmin

Middleware to authorize admin users.

javascript
Copy code
const authorizeAdmin = async (req, res, next) => {
    // Implementation
};
