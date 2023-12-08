# AnimalHub

This repository contains a simple API for managing information about animals. It includes functionality for viewing a homepage, displaying a list of animals, adding a new animal, viewing details of a specific animal, modifying an animal's information, and deleting an animal.

## Technologies Used

- **Express.js:** A web application framework for Node.js, used for building the API.
- **MySQL:** A relational database used to store information about animals.
- **React:** A JavaScript library for building user interfaces, used for the front-end of the application.
- **Styled-components:** A library for styling React components with tagged template literals.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    https://github.com/akorovai/AnimalHub.git
    ```

2. Install dependencies:

    ```bash
    cd server
    npm install
    ```

3. Set up the database:

    - Create a MySQL database named `animalDB`.
    - Import the database schema from `data/animalDB.sql`.

4. Configure the connection:

    - Open `data/animalDB.js` and update the connection details (host, user, password) if needed.

5. Start the server:

    ```bash
    npm start
    ```

6. Run the React app:

    ```bash
    cd client
    npm install
    npm start
    ```

The API will be accessible at `http://localhost:3000`, and the React app will be available at `http://localhost:3001`.

## API Endpoints

### `GET /`

- Displays the homepage with information about the availability of data.

### `GET /animals`

- Retrieves a list of all animals.

### `GET /animals/:animalId`

- Retrieves details about a specific animal identified by `animalId`.

### `GET /add`

- Displays a form for adding a new animal.

### `POST /animals/post`

- Adds a new animal to the database.

### `DELETE /animals/:animalId`

- Deletes the animal with the specified `animalId`.

### `PUT /animals/modify/:animalId`

- Modifies the information of the animal with the specified `animalId`.

## Front-end Structure

The front-end is built using React and styled with styled-components. The application structure includes the following pages:

- **HomePage:** Displays actions available to the user.
- **AnimalsListPage:** Lists all animals in a table.
- **AnimalDetailPage:** Displays details of a specific animal and provides options to update or delete.
- **AddAnimalPage:** Allows users to add a new animal.
- **ModifyAnimalPage:** Provides a form to modify the details of a specific animal.
- **NotFoundPage:** Shown when a requested page is not found.

## Styling

Global styling is defined in `GlobalStyles.js`. Each component/page has its own styled-components file for specific styling.

## Dependencies

- **Server:**
    - `express`: Web application framework.
    - `cors`: Middleware for handling Cross-Origin Resource Sharing.
    - `mysql2`: MySQL database connection.

- **Client:**
    - `react`: JavaScript library for building user interfaces.
    - `react-router-dom`: React router for navigation.
    - `styled-components`: Styling library for React.

## Contact

For any questions or issues, please feel free to contact [andrii.korovai@gmail.com].

Happy coding! 🚀