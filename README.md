# Idea Influx

A simple blog/ideas platform for sharing and managing your thoughts.

## Features

- Create new blog posts/ideas
- View all posts in a chronological list
- Simple, clean interface
- Easy to set up and run

## Prerequisites

- Node.js 14 or higher
- npm

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

- `index.js` - Main application file with Express server
- `public/` - Static assets (CSS, images)
- `views/` - EJS template files
- `routes/` - Route handlers

## Technologies Used

- **Express.js** - Web framework
- **EJS** - Template engine
- **Body Parser** - Middleware for parsing request bodies
- **Nodemon** - Development server with auto-reload

## Development

For development with auto-restart on file changes, use:
```bash
npx nodemon index.js
```

## License

ISC
