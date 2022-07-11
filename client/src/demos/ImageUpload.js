import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import SingleImageUpload from "./SingleImageUpload"
import SingleImageUploadAuthed from "./SingleImageUploadAuthed"




const ImageUpload = ()=>{
   const  {user,setUser} = useContext(AuthContext)
   return (
       <div>
           <h1>Image Upload Demos</h1>
           <hr />
           <h3>Welcome {user.email}, id:{user.id})</h3>
           <img src={user.image} width={200} height={200} />
           <hr />
           <h1>DEMO of Just uploading a image... no other data</h1>
           <hr />
           <h1>not authed given by id</h1>
           <SingleImageUpload id={user.id} setUser={setUser} />
           <h1>authed</h1>
           <SingleImageUploadAuthed/>
           
           <p>{JSON.stringify(user)}</p>
       </div>
   )
}

export default ImageUpload