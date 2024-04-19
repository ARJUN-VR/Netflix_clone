import { useEffect, useState } from 'react' 
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'

function Banner() {
    const [movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            let a =[]
            for(let i=0;i<=20;i++){
                let b=Math.floor(Math.random() * (20-0))
                a.push(b)
            }  
            setMovie(response.data.results[a[0]])
        })
      

    },[])
  return (

    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} className="banner">
        <div className="content">
        <h1 className="title">{movie ? (movie.title || movie.name ) : "Title not available"}</h1>


            <div className="buttons">
                <button className="button" >Play</button>
                <button className="button" >My list</button>

            </div>
            <h1 className="description">{movie ? movie.overview:""}</h1>
        </div>
        <div className="fade"></div>
        


    </div>
  )
}

export default Banner