import { Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";


const router = createBrowserRouter([
  {path: '/', element: <Page1/>},
  {path: '/2', element: <Page2/>},
  {path: '/3', element: <Page3/>},
  {path: '/4', element: <Page4/>},
  {path: '/5', element: <Page5/>},
  {path: '/6', element: <Page6/>}
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;