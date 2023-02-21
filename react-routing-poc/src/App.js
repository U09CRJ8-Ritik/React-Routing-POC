import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import RootLayout from './pages/RootLayout'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:productId', element: <ProductDetails /> }

      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
