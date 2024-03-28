import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import HikeCalculator from './pages/HikeCalculator';
import Context from './pages/ContextAPI/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './CartProject/Components/Product';
import Cart from './CartProject/Components/Cart';
import Dashboard from './CartProject/Components/Dashboard';
import RootLayout from './CartProject/Components/RootLayout';
import Todos from './Todos';
import UsersDashboard from './useContext Hook/UsersDashboard';
import FlexBox from './CSSStudy/FlexBox';
import WaterMarkRemoval from './pages/RapidAPI/WaterMarkRemoval';
import LoginAuth from './pages/LoginAuth';
import Posts from './pages/Posts';
import MERN from './MERN';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import LoginM from './components/LoginM';
import Prime from './MiniProjects/Prime';
import AddProduct from './components/AddProduct';
import DemoScript from './ReactUdemy/02-JS-REVIEW/DemoScript';
import Filter from './MiniProjects/Filter';
import Second from './MiniProjects/FrontEnd Mentor/Second';
import ProductList from './components/ProductList';
import Arr from './JScript/Arr';
import UpdateProduct from './components/UpdateProduct';
import AppTable from './MiniProjects/Table/AppTable';
import Pizza from './ReactUdemy/pizza-menu/indexP';
import FirstReactApp from './ReactUdemy/Steps/FirstReactApp';
import TimeCounter from './ReactUdemy/Steps/TimeCounter';
import ListApp from './ReactUdemy/Travel/ComponentsT/ListApp';
import FlashCards from './ReactUdemy/FCards/FlashCards';
import Acc from './ReactUdemy/Accordian/Acc';
import Fundamentals1 from './JScript/Fundamentals1';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    // <Route path='/' element={<Navbar />} >
    <Route path='/' element={<RootLayout />} >
      <Route element={<PrivateComponent />}>
        <Route index path='/frstApp' element={<FirstReactApp />} />
        <Route index path='/timeCntr' element={<TimeCounter />} />
        <Route index path='/fd1' element={<Fundamentals1 />}></Route>
        <Route index path='/listApp' element={<ListApp />} />
        <Route index path='/flCards' element={<FlashCards />} />
        <Route index path='/acc' element={<Acc />} />
        <Route index path='/about' element={<About />} />
        <Route path='/cntxt' element={<Context />} />
        <Route path='/mern' element={<MERN />} />
        <Route path='/hikeCalc' element={<HikeCalculator />} />
        <Route path='product' element={<Product />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/update/:id' element={<UpdateProduct />} />
        <Route path='cart' element={<Cart />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='posts' element={<Posts />} />
        <Route path='todos' element={<Todos />} />
        <Route path='tablePagination' element={<AppTable />} />

        <Route path='rudemy' element={<DemoScript />} />
        <Route path='usedash' element={<UsersDashboard />} />
        <Route path='cssstudy' element={<FlexBox />} />
        <Route path='watermarkremoval' element={<WaterMarkRemoval />} />
        <Route path='pizzaProject' element={<Pizza />} />
        <Route path='login' element={<Login />} />
        <Route path='loginauth' element={<LoginAuth />} />
        <Route path='prime' element={<Prime />} />
        <Route path='fil' element={<Filter />} />

        <Route path='second' element={<Second />} />
        <Route path='productList' element={<ProductList />} />
        <Route path='jscript' element={<Arr />} />

      </Route>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/loginm' element={<LoginM />} />
    </Route >
  ))
  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App; 