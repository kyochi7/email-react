import { Contact } from "./Components/Contact";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <div>
      <ToastContainer autoClose={2000}/>
      <Contact />
    </div>
  )
}

