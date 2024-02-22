# React Redux To-Do List

Welcome to the React Redux To-Do List application! This project is built using the React framework for the frontend and Redux for state management, offering a seamless user experience for managing to-do items. With the power of React's virtual DOM and Redux's centralized state management, users can perform CRUD (Create, Read, Update, Delete) operations without any page reloading.



## Features

- **Effortless CRUD Operations**: Enjoy smooth and intuitive creation, reading, updating, and deletion of to-do items without experiencing any interruptions or page reloads.
- **API Integration**: Utilizing the `jsonplaceholder` API, the application fetches initial to-do data, allowing for seamless integration and testing.
- **React Framework**: Leveraging React's component-based architecture, the UI is designed to be modular, reusable, and easy to maintain.
- **Redux State Management**: With Redux, the application ensures a predictable state flow, centralizing data and logic for efficient management and manipulation of to-do items.

## Steps for Working Todo List

1. **Render the Todo List UI**:
   - Create a component to represent the Todo List.
   - Render an input box in the middle of the Todo List along with an "Add" button.
   - Render each todo item with a checkbox to mark as completed, an "Update" button to edit the todo item, and a "Delete" button to remove the todo item.

2. **Add Todo Functionality**:
   - Implement a function to handle adding new todo items.
   - When the user enters a todo item in the input box and clicks the "Add" button, add the todo item to the list of todos.
   - Update the UI to display the newly added todo item.

3. **Update Todo Functionality**:
   - Implement a function to handle updating todo items.
   - When the user clicks the "Update" button next to a todo item, change the "Add" button to "Update".
   - Populate the input box with the text of the todo item being updated.
   - Allow the user to edit the todo item text in the input box.
   - When the user clicks the "Update" button again, update the todo item with the new text and reset the input box and button state.

4. **Delete Todo Functionality**:
   - Implement a function to handle deleting todo items.
   - When the user clicks the "Delete" button next to a todo item, remove that todo item from the list of todos.
   - Update the UI to reflect the removal of the todo item.

5. **Toggle Completed State**:
   - Implement a function to handle toggling the completed state of todo items.
   - When the user clicks the checkbox next to a todo item, toggle the completed state of that item between true and false.
   - Update the UI to reflect the changes in the completed state.

6. **Display Todo List**:
   - Render the list of todo items dynamically based on the data stored in the application state.
   - Each todo item should display its text, a checkbox to mark as completed, and "Update" and "Delete" buttons to edit and remove the item.

7. **Manage Todo State**:
   - Use Redux to manage the state of the todo list application.
   - Store the list of todo items in the Redux store.
   - Implement Redux actions and reducers to add, update, delete, and toggle the completed state of todo items.

## Getting Started

To get started with the React Redux To-Do List, simply follow the steps below:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the development server with `npm start`.
4. Explore the application and enjoy managing your to-do items seamlessly!

## API Integration

The React Redux To-Do List application utilizes the `jsonplaceholder` API for fetching initial to-do data. You can find more information about this API [here](https://jsonplaceholder.typicode.com/todos).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

# Note 

While reloading you get page refreshed because of API unedit feature (see below the dummy feature)

## Dummy API Features

1. **Fetch and Show Todo Items**:
   - Fetch todo items from the provided API endpoint: [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos).
   - Display the fetched todo items in the application UI.

2. **Add a Todo Item**:
   - Implement functionality to add a new todo item.
   - Upon adding a new todo item, make a POST request to the API endpoint mentioned above.
   - Save the added todo item in the React application state.
   - Note: The POST request is a dummy request and won't actually add the item to the server. However, it will simulate a valid request and return dummy data.

3. **Update a Todo Item**:
   - Implement functionality to update an existing todo item.
   - When updating a todo item, make a PUT request to the API endpoint mentioned above.
   - Note: Similar to adding a todo item, the PUT request is a dummy call and won't update the item on the server. It will return dummy data.

4. **Delete a Todo Item**:
   - Implement functionality to delete a todo item.
   - When deleting a todo item, make a DELETE request to the API endpoint mentioned above.
   - Note: Like the other operations, the DELETE request is a dummy call and won't actually delete the item from the server. It will return dummy data.

These features allow for simulating CRUD operations (Create, Read, Update, Delete) with the provided API endpoint, enabling users to interact with the todo list application as if it were connected to a real backend.

