
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Formpage from './components/Formpage';
import BrowsePage from './components/BrowsePage';

const appRouter = createBrowserRouter([
  { path: "/", element: <Formpage /> },
  { path: "/second-page", element: <BrowsePage /> }
]);

function App() {
  return (
 
    <div>
    <RouterProvider router={appRouter}/>
    </div>

  );
}

export default App;

