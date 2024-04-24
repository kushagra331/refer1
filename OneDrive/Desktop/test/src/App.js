
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import Yosh from './Yosh';
function App() {
  const kush=createBrowserRouter([
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/yosh',
      element:<Yosh/>
    }
  ])
  return (
    <div>
      {/* <RouterProvider route={kush} /> */}
      <RouterProvider router={kush}/>
      {/* <Yosh/> */}
    </div>
  );
}

export default App;
