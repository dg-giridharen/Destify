# Destify

Destify is a modern, feature-rich frontend application for a travel booking website. This project was built using React and Vite to demonstrate key concepts in modern web development, including component-based architecture, routing, state management, and responsive design.
The repository contains two separate projects: a user-facing application and an admin dashboard.
(Optional: Add a screenshot of your beautiful homepage here!)
![Destify Homepage](./destify-homepage.png)
Features
👤 User Application (destifyuser)
 * Modern Homepage: A clean, responsive homepage featuring a main headline and an auto-scrolling carousel for "Featured Destinations".
 * Multi-Page Navigation: Seamless client-side routing between all pages (Home, Destinations, About Us, Contact Us, etc.) using react-router-dom.
 * Interactive Destination Filtering: A dedicated "Destinations" page with a dropdown menu to filter the large list of travel packages by country.
 * Dynamic Cart Page: A detailed cart page that displays information for a specific package selected by the user, including a full price breakdown.
 * Authentication Flow (UI): A reusable authentication modal that handles both Login and Sign Up views. The navbar dynamically changes to show the user's email and a logout option upon "login".
 * Component-Based Structure: The entire application is broken down into small, reusable, and organized components, each with its own dedicated stylesheet.
⚙️ Admin Panel (admin)
 * Separate Admin Dashboard: A dedicated application for managing the website's content.
 * Sidebar Navigation: A classic dashboard layout with sidebar navigation for different management pages.
 * Package Management Table: A page that displays all available travel packages in a clean, organized table.
 * Interactive Actions (Simulated): The table includes functional "Edit" and "Delete" buttons that simulate backend actions by showing alerts and updating the UI state.
 * Add Package Form: A complete form for adding new travel packages to the system (submission is simulated).
Tech Stack
 * Framework: React
 * Build Tool: Vite
 * Routing: React Router DOM
 * Carousel: React Slick
 * Styling: CSS3 (with a component-based file structure)
 * State Management: React Hooks (useState) & Context API (useContext)
How to Run Locally
This repository contains two separate projects. You will need to run them in two separate terminals.
Prerequisites
 * Node.js (v18 or higher recommended)
 * npm (or yarn/pnpm)
1. Run the User Application (destifyuser)
# Clone the repository
git clone <your-repository-url>
cd Destify

# Navigate to the user project directory
cd destifyuser

# Install dependencies
npm install

# Start the development server
npm run dev

The user application will be running on http://localhost:5173.
2. Run the Admin Application (admin)
Open a new, separate terminal window.
# Navigate to the main project directory
cd path/to/Destify

# Navigate to the admin project directory
cd admin

# Install dependencies
npm install

# Start the development server
npm run dev

The admin dashboard will likely start on a different port, such as http://localhost:5174.
