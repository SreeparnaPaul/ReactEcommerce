import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loader, setLoader] = useState(false);
  // let componentMounted = true;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(e=>{console.log(e)
     setFilter(e) 
    setData(e)      
            })
            .catch(e => console.error(e));
        },[]);

  const Loading = () => {
    return(
      <>
        <div className="col-md-3">
        <Skeleton height ={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height ={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height ={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height ={350}/>
        </div>
      
      </>
    );
  };
  const filterProduct=(type)=>{
  const updatedList=data.filter((x)=>x.category===type)
  setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewellery </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter?.map((product)=>{
          return(
            <>
              <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key ={product.id} >
              <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
              <div className="card-body">
              <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <button className="btn btn-outline-dark">
                Buy Now
                </button>
              </div>
            </div>
              </div>
            </>
          )
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loader ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
