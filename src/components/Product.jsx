import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
export default function Product() {
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(e=>{console.log(e)
         setProduct(e) 
        setLoading(false)     
                })
                .catch(e => console.error(e));
    },[]);

    const Loading=()=>{
        return(
        <div>Loading...</div>    
        )
    }
    const ShowProduct=()=>{
        return(
            <div>
            
            </div>
        )
    }
  return (
    <div>
      <div className='container'>
      <div className='row'>
      {loading?<Loading/>:<ShowProduct/>}
      </div>
      </div>
    </div>
  )
}
