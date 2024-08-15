# EverShop Online

## Overview

Evershop is a modern online retail platform designed to offer a seamless shopping experience. It allows users to browse and purchase products, manage their shopping carts, and access personalized features. The platform supports Google authentication for user login and is optimized for both desktop and mobile devices.

## Live Site

- You can visit the live site: [EverShop Online](https://evershop-online.netlify.app).
- GitHub Server Repository link: [EverShop API](https://github.com/maasajal/evershop-api).

## Main Features

- **Product Listings:** Browse products across different categories with detailed pages for each product.
- **Filters and Sorting:** Filter products by brand, category, and price range. Sort products by price or date.
- **User Authentication:** Secure login with Google accounts.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Contact Form:** Reach out to support or inquire about products through a contact form.

## Main Technologies Used

- **React:** For building the user interface.
- **Vite:** For building the user interface.
- **Daisy-UI:** For UI components and styling.
- **Axios:** For making HTTP requests.
- **React Router DOM:** For client-side routing.
- **Tanstack Query:** For data fetching and state management.
- **Deployment:** Netlify

## Dev Dependencies

- **@tanstack/react-query:** For server-state management.
- **axios:** Promise-based HTTP client.
- **react-router-dom:** DOM bindings for React Router.
- **react-hook-form:** Handle form to register, login & contact.

## Running the Project Locally

To run this project on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/maasajal/evershop-online.git
   ```

2. **Navigate to the Project Directory:**

   ```sh
   cd evershop-online
   ```

3. **Install Dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

### Firebase Configuration

- Go to the Firebase Console.
- Create a new project (if you haven’t already).
- Register your application with Firebase.
- Add the Firebase configuration to your project.

4. **Add environment variable:**
   Create a .env.local file in the root of your project, add your firebase config code to the following:

   ```sh
   VITE_LOCAL_SERVER=http://localhost:5000
   VITE_SERVER=https://evershop-api.vercel.app
   VITE_APIKEY=<your_apikey>
   VITE_AUTHDOMAIN=<your_firebase_code>
   VITE_PROJECTID=<your_firebase_code>
   VITE_STORAGEBUCKET=<your_firebase_code>
   VITE_MESSAGINGSENDERID=<your_firebase_code>
   VITE_APPID=<your_firebase_code>
   ```

5. **Start the Development Server:**

   ```sh
    npm run dev
   ```

6. **Run the Project:**

Open your browser and navigate to http://localhost:5173. You should see the project running.

### Build for Production

To build the application for production, run:

```sh
npm run build
# or
yarn build
```

The build output will be available in the build directory, ready for deployment.

### Deployment

The application is deployed on Netlify. For updates, simply push your changes to the main branch of the repository, and Netlify will automatically deploy the updated version.

### Contributing

We welcome contributions to improve Evershop. Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the existing style and includes appropriate tests.

### Note

Make sure your backend server is running and accessible at the specified VITE_LOCAL_SERVER URL. You might need to adjust the backend server configurations accordingly.

### Colors code used:

```sh
#fcfcfc
#768048
#8d9968
#a4b288
#bbcba9
```
