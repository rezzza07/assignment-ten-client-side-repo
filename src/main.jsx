import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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
        loader:()=> fetch('http://localhost:3000/arts')
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path:'login',
        Component: LogIn
      },
      {
        path:'addArtwork',
        element: <AddArtwork></AddArtwork>
      },
      {
        path:'myFavorites',
        element: <MyFavorites></MyFavorites>
      },
      {
        path:'myGallery',
        element: <MyGallery></MyGallery>
      },
      {
        path: 'artDetails/:id',
        loader: ({params})=> fetch(`http://localhost:3000/arts/${params.id}`),
        Component: ArtDetails
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
    </AuthProvider>
    
  </StrictMode>
)
