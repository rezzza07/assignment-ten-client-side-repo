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
        Component: ExploreArtworks,
        loader: () => fetch('http://localhost:3000/arts')
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: LogIn
      },
      {
        path: 'addArtwork',
        element: (
          <PrivateRoute>
            <AddArtwork></AddArtwork>
          </PrivateRoute>
        )
      },
      {
        path: 'myFavorites',
        element: (
          <PrivateRoute>
            <MyFavorites></MyFavorites>
          </PrivateRoute>
        )
      },
      {
        path: 'myGallery',
        element: (
          <PrivateRoute>
            <MyGallery></MyGallery>
          </PrivateRoute>
        )
      },
      {
        path: 'artDetails/:id',
        element: (<PrivateRoute>
          <ArtDetails></ArtDetails>
        </PrivateRoute>),
        
      },
      {
        path: 'updateArt/:id',
        element: (<PrivateRoute>
          <UpdateArt></UpdateArt>
        </PrivateRoute>),
        
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
