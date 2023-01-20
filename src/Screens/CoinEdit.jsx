import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
  const [username, setUsername] = useState({
    _id: "",
    name: "",
    username: "",
    profile_location: null,
    profile_bio: null,
    profile_url: "https://coinbase.com/user1",
    avatar_url: "https://images.coinbase.com/avatar?h=vR%2FY8igBoPwuwGren5JMwvDNGpURAY%2F0nRIOgH%2FY2Qh%2BQ6nomR3qusA%2Bh6o2%0Af9rH&s=128",
    resource: "user",
    resource_path: "",
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchUsername();
  }, []);

  async function fetchUsername() {
    let oneUsername = await getUsername(id);
    setUsername(oneUsername);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUsername(id, username);
    navigate(`/username/${getUsername._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value)

    setCharacter((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  return (
    <div>
      <h1>User-name Created Screen</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please insert your username"
          name="_id"
          value={username={}._id}
          onChange={handleChange}
        />
        <button type="submit">Edit Your Character!!!</button>
      </form>
    </div>
  );
}