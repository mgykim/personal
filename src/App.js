import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DesignPage from './pages/DesignPage'
import WebDevPage from './pages/WebDevPage'
import IllustrationPage from './pages/IllustrationPage'
import ModelingPage from './pages/ModelingPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "/about",
    element: (
      <AboutPage/>
    ),
  },
  {
    path: "/design",
    element: (
      <DesignPage/>
    ),
  },
  {
    path: "/web-dev",
    element: (
      <WebDevPage/>
    ),
  },
  {
    path: "/illustration",
    element: (
      <IllustrationPage/>
    ),
  },
  {
    path: "/modeling",
    element: (
      <ModelingPage/>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
