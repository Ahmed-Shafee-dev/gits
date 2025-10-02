import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routes/routes'
import { Toaster } from 'react-hot-toast';
import { CounterProvider } from './hooks/CounterContext';

export default function App() {
  return (
      <>
          <CounterProvider>
              <Toaster />
              <RouterProvider router={routing} />
          </CounterProvider>
      </>
  );
}