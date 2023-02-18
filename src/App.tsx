import React from 'react';
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {Layout} from "./Layout/Layout";
import {Flex} from "./pages/Flex/Flex";
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
          <Route index element={<Flex/>}/>
      </Route>
  ))

  return (

    <RouterProvider router={router} />

  );
}

export default App;
