import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';
import Home from './Components/Home';
import Category from './Components/Category';
import Profile from './Components/Profile';
import AddCategory from './Components/AddCategory';
import AddEmployee from './Components/AddEmployee';

function App() {

return ( <BrowserRouter> 
<Routes>


<Route path='/adminlogin' element={<Login />} ></Route>
<Route path='/dashboard' element={<Dashboard />}></Route>
<Route path='' element={<Home/>}></Route>
<Route path='/dashboard/employee' element={<Employee />}></Route>
<Route path='/dashboard/category' element={<Category />} ></Route>
<Route path='/dashboard/profile' element={<Profile />} />
<Route path='/dashboard/add-category' element={<AddCategory/>}></Route>
<Route path='/dashboard/add-employee' element={<AddEmployee/>}></Route>
<Route path='/dashboard/create' element={<AddEmployee />}></Route>

</Routes> 
</BrowserRouter>

)
}

export default App       