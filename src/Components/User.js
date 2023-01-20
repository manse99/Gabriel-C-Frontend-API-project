import {Link} from 'react-router-dom';

export default function User({ user }) {
  return (
    <Link to={`/users/${user._id}`}>
     <div>
       <h2>{user.name}</h2> 
       <img src={user.avatar_url} alt={user.name} />
       <button name='Delete'>Delete</button>
     </div>
    </Link>
  );
}
