import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from "./contexts/ContextProvider.jsx";
//<App />
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContextProvider>
          <RouterProvider router={router} />
      </ContextProvider>
  </StrictMode>
)
