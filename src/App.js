import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router/Router';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Toaster />
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
