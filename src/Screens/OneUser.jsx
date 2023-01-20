import {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {getUser, deleteUser} from "../Services/coinConfig.js"

export default function OneUser() {
  const [user, setUser] = useState({})

  const { user_id } = useParams()
  let navigate = useNavigate()

  useEffect(()=>{
    fetchUser()
  }, [])

  async function fetchUser(){
    let response = await getUser(user_id)
    setUser(response)
  }

  async function handleDelete(){
    await deleteUser(user_id)
    navigate("/users", {replace: true})
  }

  return (
     <div>
       <h2>{user?.name}</h2> 
       <img src={user?.avatar_url} alt={user?.name} />
       <p>{user?.username}</p>
       <p>{user?.profile_location}</p>
       <p>{user?.profile_bio}</p>
       <button onClick={handleDelete}>Delete</button>
     </div>
  )
}
