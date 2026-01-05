import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx';
import RootLayout from './layout/RootLayout.jsx';
import ExploreArtworks from './components/ExploreArtworks/ExploreArtworks.jsx';
import Error from './pages/Error/Error.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import AddArtwork from './components/AddArtwork/AddArtwork.jsx';
import MyFavorites from './components/MyFavorites/MyFavorites.jsx';
import MyGallery from './components/MyGallery/MyGallery.jsx';
import ArtDetails from './components/ArtDetails/ArtDetails.jsx';
import UpdateArt from './components/UpdateArt/UpdateArt.jsx';
import PrivateRoute from './contexts/PrivateRoutes.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';
import DashboardOverview from './components/Dashboard/DashboardOverview.jsx';
import DashboardProfile from './components/Dashboard/DashboardProfile.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import TermsAndConditions from './components/Footer/TermsAndConditions.jsx'
import PrivacyPolicy from './components/Footer/PrivacyPolicy.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'exploreArtworks',
        Component: ExploreArtworks
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'terms-conditions',
        Component: TermsAndConditions
      },
      {
        path: 'privacy-policy',
        Component: PrivacyPolicy
      },
      {
        path: 'login',
        Component: LogIn
      },
      {
        path: 'artDetails/:id',
        Component: ArtDetails,
        
      }
    ]
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardOverview
      },
      {
        path: 'add-artwork',
        Component: AddArtwork
      },
      {
        path: 'my-gallery',
        Component: MyGallery
      },
      {
        path: 'my-favorites',
        Component: MyFavorites
      },
      {
        path: 'profile',
        Component: DashboardProfile
      },
      {
        path: 'update-art/:id',
        Component: UpdateArt
      }
    ]
  },
  {
    path: "/*",
    element: <Error></Error>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  </StrictMode>
)
