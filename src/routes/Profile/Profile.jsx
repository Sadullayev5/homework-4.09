import React , {useEffect , useState} from 'react'
import axios from '../../api/axios'

import './Profile.css'

const Profile = () => {

    const [User , setUser] = useState({})

    useEffect(() => {
        async function LoadProfile(){
            try{
                const response = await axios('/auth/profile', {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("token")}`
                    }
                })

                setUser(response.data)
                
            }
            catch(error){
                alert(error)
            }
        }

        LoadProfile() 
    } , [])

    console.log(User)

    const LoggingOut = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

  return (
    <div className="profile-page">
        <h2>Profile</h2>
        {
            <div className="profile">
                <div className="img">
                    <img src={User.avatar} alt="" />
                </div>
                <div className="content">
                    <h3>Welcome {User.name} !</h3>
                    <p>Email : {User.email}</p>
                </div>
            </div>
        }
        <button className='logout-btn' onClick={LoggingOut}>Logout</button>
    </div>
  )
}

export default Profile