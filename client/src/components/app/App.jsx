import '../../App.css';
import InfoCompte from '../InfoCompte';
import Login from '../Login';
import Root from '../Root';
import Signup from '../Signup';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route index element={<Signup />}/>
    <Route path="login" element={<Login />} />
    <Route path="login/:id" element={<Login />} />
    <Route path="profile" element={<Root />}>
      <Route path="compte" element={<InfoCompte />} />
    </Route>
  </>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
