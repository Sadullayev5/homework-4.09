import React , {useState} from 'react'
import axios from '../../api/axios'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'

const Register = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    function UserInfo(name ,email , password , avatar){
        this.name = name,
        this.email = email
        this.password = password
        this.avatar = avatar
    }
    
    const User = new UserInfo(name ,email , password , avatar)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/users' , User)
        .then (response => {
            if(response.status === 201){
                notification.success({message : "Register success"})
                navigate('/login')
            }
        })
        
    }

  return (
    <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="url" placeholder='Link for avatar' required value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register