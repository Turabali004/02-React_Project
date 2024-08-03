import { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user,userId} = useContext(UserContext)

    if(!user && userId) return <div>Please Type Some Value.</div>
     return <div>
        Your UserName is : {user}
        <br></br>
        <br></br>
        <br></br>
        Your Id is : {userId}
     </div>
}

export default Profile;
