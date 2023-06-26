# Node API

Node API is a simple example project demonstrating how to build a RESTful API using Express.js, Typescript and Typeorm.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   git clone https://github.com/mankostas/node-api.git

2. Install the dependencies:
   cd node-api
   npm install

## Usage

3. Start the server:
   npm start
   The API will be available at http://localhost:3000

## Endpoints

4. The API provides the following endpoints:
   GET /api/V1/events: Retrieve a list of Events.
   GET /api/V1/events/:id: Retrieve a specific Event by ID.
   POST /api/V1/events/: Create a new Event.
   PUT /api/V1/events/:id: Update an existing Event by ID.
   Make sure to replace http://localhost:3000 with the appropriate URL if you're deploying the API to a different environment.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

When contributing to this project, please adhere to the following guidelines:

Fork the repository and create a new branch for your changes.
Ensure your code follows the project's coding style.
Provide clear and concise commit messages.
Test your changes thoroughly.

## License

This project is licensed under the MIT License.
