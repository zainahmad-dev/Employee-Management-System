import React,{ useState} from "react"
import './style.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password:'',
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  axios.defaults.withCredentials=true;

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:3000/admin/adminlogin', values)
  
    .then(result => {
      if(result.data.loginStatus){
       navigate('/dashboard')
      }else{
       setError(result.data.Error)
      }
    
    })
    .catch(err => console.log(err))
  }
  return (
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      < div className='p-3 rounded w-25 border LoginForm'>
      <div className='text-warning'>
        {error && error}
      </div>
        <h2>Login Page</h2>
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" id="email" className="form-control rounded-0" placeholder="Enter Email" 
    onChange={(e)=> setValues({...values,email : e.target.value})}/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password:</label>
    <input type="password" id="password" className="form-control rounded-0" placeholder="Enter Password"
     onChange={(e)=> setValues({...values,password : e.target.value})} />
  </div>

  <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">Submit</button>
   
  <div className="mb-3">
    <input type="checkbox" name="tick" id="tick" className='me-2' />
    <label htmlFor="password" >You are Agree with terms & Conditions  </label>
    
  </div>

</form>

        
      </div>
    </div>
  )
}

export default Login