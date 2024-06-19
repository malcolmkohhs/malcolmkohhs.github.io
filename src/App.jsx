import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import MacBookAir1 from './pages/MacBookAir1';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/MacBookAir1', element: <MacBookAir1 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}