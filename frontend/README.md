# Contact Manager

A full-stack contact management application built with React, Node.js, Express, and MongoDB.

## Features

- **Add, Edit, Delete Contacts**: Complete CRUD operations for contact management
- **Search Functionality**: Search through contacts by name, email, or company
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface
- **Pagination**: Efficient handling of large contact lists
- **Form Validation**: Client-side and server-side validation

## Technology Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- CSS3 for styling
- Vite for build tooling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- CORS for cross-origin requests
- Environment-based configuration

## Project Structure

```
contact-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection setup
│   ├── controllers/
│   │   └── contactController.js  # Logic for contact CRUD operations
│   ├── models/
│   │   └── contactModel.js       # Mongoose schema for Contact
│   ├── routes/
│   │   └── contactRoutes.js      # Express routes for contact APIs
│   ├── middleware/
│   │   └── errorMiddleware.js    # Custom error handler
│   ├── server.js                 # Entry point of the backend
│   └── package.json              # Backend dependencies
│
├── frontend/
│   ├── public/
│   │   └── index.html            # React root file
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx   # Add/Edit contact form
│   │   │   ├── ContactList.jsx   # Displays list of contacts
│   │   │   ├── ContactCard.jsx   # Individual contact item
│   │   │   └── Navbar.jsx        # Navigation bar
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Homepage with contact list
│   │   │   └── About.jsx         # About page
│   │   ├── services/
│   │   │   └── contactService.js # Axios calls to backend APIs
│   │   ├── App.jsx               # Main React component
│   │   ├── main.jsx              # React entry file
│   │   └── styles/
│   │       ├── App.css           # App-wide styles
│   │       └── index.css         # Global styles
│   └── package.json              # Frontend dependencies
│
├── env.example                   # Environment variables template
├── README.md                     # This file
└── package.json                  # Root config for running both client/server
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contact-manager
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your MongoDB connection string and other configurations.

4. **Start MongoDB**
   - If using local MongoDB, make sure MongoDB is running on your system
   - If using MongoDB Atlas, update the `MONGODB_URI` in your `.env` file

### Running the Application

#### Development Mode (Both Frontend and Backend)
```bash
npm run dev
```

This will start both the backend server (port 5000) and frontend development server (port 3000) concurrently.

#### Running Separately

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

#### Production Mode
```bash
npm run build
npm start
```

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/contacts` - Get all contacts (with pagination and search)
- `GET /api/contacts/:id` - Get a specific contact
- `POST /api/contacts` - Create a new contact
- `PUT /api/contacts/:id` - Update a contact
- `DELETE /api/contacts/:id` - Delete a contact
- `GET /api/health` - Health check endpoint

## Usage

1. **Adding a Contact**: Click the "Add New Contact" button and fill in the contact details
2. **Searching**: Use the search bar to find contacts by name, email, or company
3. **Editing**: Click the "Edit" button on any contact card to modify the information
4. **Deleting**: Click the "Delete" button and confirm to remove a contact
5. **Navigation**: Use the navigation bar to switch between Home and About pages

## Contact Schema

Each contact includes the following fields:

- **name** (required): Contact's full name
- **email** (required, unique): Email address
- **phone** (required): Phone number
- **address** (optional): Physical address
- **company** (optional): Company name
- **notes** (optional): Additional notes
- **createdAt**: Timestamp when contact was created
- **updatedAt**: Timestamp when contact was last updated

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

If you encounter any issues or have questions, please open an issue in the repository.

