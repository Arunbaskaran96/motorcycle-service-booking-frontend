import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AdminProtal from './Componenets/AdminProtal';
import Portal from './Componenets/Portal';
import AddEmployer from './Pages/Admin/AddEmployer';
import Adminhistory from './Pages/Admin/Adminhistory';
import AdminHome from './Pages/Admin/AdminHome';
import BookingDetails from './Pages/Admin/BookingDetails';
import CompletedDetails from './Pages/Admin/CompletedDetails';
import EditEmployer from './Pages/Admin/EditEmployer';
import Employer from './Pages/Admin/Employer';
import EmployerDetails from './Pages/Admin/EmployerDetails';
import Ifcompleted from './Pages/Admin/Ifcompleted';
import UserDetails from './Pages/Admin/UserDetails';
import Users from './Pages/Admin/Users';
import Bookin from './Pages/Bookin';
import Details from './Pages/Details';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserHistory from './Pages/UserHistory';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/portal' element={<Portal/>}>
        <Route path='home' element={<Home/>}></Route>
        <Route path='booking' element={<Bookin/>}></Route>
        <Route path='view/:id' element={<Details/>}></Route>
        <Route path='userhistory' element={<UserHistory/>}></Route>
      </Route>
      <Route path='/adminportal' element={<AdminProtal/>}>
        <Route path='adminhome' element={<AdminHome/>} ></Route>
        <Route path='bookingdetails/:id' element={<BookingDetails/>}></Route>
        <Route path='users' element={<Users/>}></Route>
        <Route path='userdetails/:id' element={<UserDetails/>}></Route>
        <Route path='employers' element={<Employer/>}></Route>
        <Route path='addemployer' element={<AddEmployer/>}></Route>
        <Route path='viewemployer/:id' element={<EmployerDetails/>}></Route>
        <Route path='editemployer/:id' element={<EditEmployer/>}></Route>
        <Route path='ifcompleted/:id' element={<Ifcompleted/>}></Route>
        <Route path='adminhistory' element={<Adminhistory/>}></Route>
        <Route path='historydetails/:id' element={<CompletedDetails/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
