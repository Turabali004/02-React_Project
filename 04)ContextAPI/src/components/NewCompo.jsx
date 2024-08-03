import { useContext } from "react"
import UserContext from "../context/UserContext"


function NewCompo() {

    const {user, userId} = useContext(UserContext)
  return (
    <div>
      <ul>
        {/* <li>{user}</li>
        <li>{userId}</li> */}
      </ul>
    </div>
  )
}

export default NewCompo
