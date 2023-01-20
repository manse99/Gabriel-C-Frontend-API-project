import {useState} from 'react';
import {createUser} from "../Services/coinConfig.js"
import { useNavigate } from 'react-router';

export default function CreateUser() {
 const [user, setUser] = useState({
    id: "xyz",	
    name: "", 
    username: "",
    profile_location: "", 
    profile_bio: "",
    profile_url: "",
    avatar_url: "",
    resource: "",
    resource_path: ""
 })

 let navigate = useNavigate()

 async function handleSubmit(e){
  e.preventDefault()
  let response = await createUser(user)
  navigate(`/users/${response._id}`, {replace: true})
 }

 function handleChange(e){
  const {name, value} = e.target

  setUser(prev => ({
   ...prev,
   [name]: value
  }))
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="name"
         placeholder="name"
         value={user.name}
         onChange={handleChange}
        />
        <input
         type="text"
         name="username"
          placeholder="username"
         value={user.username}
         onChange={handleChange}
        />
        <input
         type="text"
         name="profile_location"
          placeholder="location"
         value={user.profile_location}
         onChange={handleChange}
        />
        <input
         type="text"
         name="profile_bio"
          placeholder="bio"
         value={user.profile_bio}
         onChange={handleChange}
        />
        <input
         type="text"
         name="avatar_url"
          placeholder="image url"
         value={user.avatar_url}
         onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
