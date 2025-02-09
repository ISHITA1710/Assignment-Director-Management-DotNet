Directory Management System

Overview

This project is a Directory Management System built using .NET Core for the backend and Angular/ReactJS for the frontend. The system enables users to manage business listings, perform search operations, and view paginated results with a user-friendly interface.

Features

1. Business Listing Management (CRUD Operations) - 40%

Create: Add new business listings with fields such as Name, Category, Address, City, State, Zip Code, Phone Number, Website, and Rating.

Read: Display all business listings in a table with sorting by Business Name.

Update: Edit business details through a modal form.

Delete: Remove a business listing with a confirmation prompt.

2. Search Functionality - 20%

Implemented a keyword-based search that filters results based on Business Name and City.

3. Pagination - 20%

Displays 10 records per page with Next/Previous navigation.

Displays total records and current page information.

4. Bonus Features - 10%

Customizable number of records per page.

Fully responsive UI.

Error handling with toast messages.

Sorting on Business Name and City with toggling between ascending and descending order.

5. Coding Standards - 10%

Adhered to Pascal Case for Classes & Methods, Camel Case for Parameters, and proper namespace structuring.

Technology Stack

Backend: .NET Core API

Frontend: Angular/ReactJS

Database: SQL Server (bacpac file provided for setup)

Installation & Setup

Backend Setup

Install .NET Core SDK.

Clone the repository:

git clone https://github.com/ISHITA1710/Assignment-Director-Management-DotNet.git

Navigate to the backend folder and run:

dotnet restore
dotnet build
dotnet run

Import the provided bacpac file in SQL Server Management Studio:

Open SSMS

Right-click Databases → Import Data-tier Application

Select the provided bacpac file and follow the wizard.

Frontend Setup (Angular/ReactJS)

Navigate to the frontend folder:

cd Frontend

Install dependencies:

npm install

Start the frontend:

npm start

Folder Structure

root/
│-- Backend/       # .NET Core API
│-- Frontend/      # Angular/ReactJS frontend
│-- README.md      # Project documentation
│-- .gitignore     # Excluding unnecessary files (e.g., node_modules)

Challenges & Solutions

Handling large data efficiently: Implemented server-side pagination to improve performance.

Validations: Used real-time validation in forms to enhance user experience.

Sorting & Search Optimization: Applied indexing in SQL to enhance query performance.

Contribution Guidelines

Fork the repository.

Create a feature branch:

git checkout -b feature-new

Commit changes:

git commit -m "Added new feature"

Push changes and create a Pull Request.

License

This project is open-source under the MIT License.

Contact

For any queries, contact [Your Email].

