import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loader, setLoader] = useState(false);
  // let componentMounted = true;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(e=>{console.log(e)
      
    setData(e)      
            })
            .catch(e => console.error(e));
        },[]);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2">Jewellery </button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        {data?.map((product)=>{
          return(
            <>
              <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key ={product.id} >
              <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
              <div className="card-body">
              <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary">
                Go somewhere
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
