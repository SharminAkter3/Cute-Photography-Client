import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router/Router';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';
import { SpinnerCircular } from 'spinners-react';
import './App.css';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Toaster />
      <SpinnerCircular enabled={false} />
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
