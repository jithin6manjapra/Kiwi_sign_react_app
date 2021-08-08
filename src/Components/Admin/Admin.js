
import React, { Fragment } from 'react';
//import {useState,useContext } from 'react';
import './Admin.css';
import Header from '../Header/Header';
//import { useHistory } from 'react-router-dom';
//import { FirebaseContext,AuthContext} from '../../store/FirebaseContext'

const Admin = () => {

/*
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [content, setContent] = useState("")
const [image,setImage]=useState(null)

const history = useHistory()
const {FirebaseData}=useContext(FirebaseContext)
const {user } =useContext(AuthContext)
const date =new Date()




const handleSubmit=()=>{

  
  
  FirebaseData.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
   ref.getDownloadURL().then((url)=>{
     console.log(url)
     FirebaseData.firestore().collection('Admin').add({
       title,
       description,
       content,
       url,
       userId:user.uid,
       createdAt:date.toDateString()
     }
     )
     history.push("/")
   })

})

}
*/

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Title</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
             // value={title}
             // onChange={((e)=>{setTitle(e.target.value)})}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Description</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              //value={description}
              //onChange={((e)=>{setDescription(e.target.value)})}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Content</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              //value={content}
              //onChange={((e)=>{setContent(e.target.value)})}
              name="category"
              defaultValue="John"
            />
            <br />
           
        
          <br />
          <input 
            // onChange={(e)=>{
             //  setImage(e.target.files[0])
            //  }}
            type="file" />
            <br />
            <button //onClick={handleSubmit} 
            className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Admin;