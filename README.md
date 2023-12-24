# NPM_FILEUPLOAD

This project is a file uploading application built using Node.js and Express.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Moses-main/NPM_FILEUPLOAD.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NPM_FILEUPLOAD
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Dependencies

This project uses the following dependencies:

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [Express-fileupload](https://www.npmjs.com/package/express-fileupload): Simple express middleware for uploading files.

## Development Setup

To run the project in development mode:

```bash
npm run dev
```

This command uses [nodemon](https://www.npmjs.com/package/nodemon) to watch for changes and automatically restart the server.

## Running the Application

To start the application:

```bash
npm start
```

This will start the server using the entry point file `app.js`.

## Usage

The application provides an API endpoint for file uploads. To use it:

1. Make a POST request to `/upload` with a file attached.
2. The server will handle the file upload and store it in a specified directory.

## Contributing

Contributions are welcome. Feel free to fork the repository and submit pull requests with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---
