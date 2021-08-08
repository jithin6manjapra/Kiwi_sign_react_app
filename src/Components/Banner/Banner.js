  
import React from 'react'
import './Banner.css'
import {FirebaseData} from '../../Firebase/Config'
import {useEffect,useState} from 'react'




function Banner() {
   
    const [place, setPlace] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
  
    useEffect(() => {
     
        
        FirebaseData.firestore().collection('Admin').get().then(snapshot=>{

            snapshot.forEach((obj)=>{
              // console.log(obj.data().image)
              setPlace(obj.data().Name)
              setDesc(obj.data().Description)
              setImg(obj.data().Image)
             console.log(obj.data())

                })
           }
                )


    }, []) 

    return (

       

        <div  className='banner' style={{backgroundImage:`url("${img? img: ""}")`}}>
          
            <div className='content' >
            <h1 className='title'>{place}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Map</button>
                    <button className='button' >Read more...</button>
                </div>
                <h1 className='description'> {desc}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner