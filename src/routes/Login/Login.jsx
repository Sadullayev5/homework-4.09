import React , {useState} from 'react'
import axios from '../../api/axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import { useDispatch } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function UserInfo(email , password){
        this.email = email
        this.password = password
    }
    
    const User = new UserInfo(email , password)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/auth/login' , User)
        .then (response => {
            if(response.status === 201){
                notification.success({message : "Login success"})
                dispatch({type: "LOGIN_USER" , token : response.data.access_token})
                navigate('/profile')
            }
        })
        
    }

  return (
    <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login