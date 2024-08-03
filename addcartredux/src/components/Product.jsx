import React from 'react'

function Product(props) {
  return (
    <div className="card" style={{ width: "18rem;", margin: "10px" }}>
    <img className="card-img-top"   />
    <div className="card-body">
      <h5 class="card-title">
        {props.productName}
        </h5>
      <p class="card-text">Rs. 
      {props.price}
      /-</p>
      <button
        className="btn btn-primary"
      >
        Add to cart
      </button>
    </div>
  </div>
  )
}

export default Product
