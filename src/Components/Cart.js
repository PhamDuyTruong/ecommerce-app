import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action';

export default function Cart() {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const handleButton = (product, tangGiam) =>{
        if(tangGiam){
            dispatch(addCart(product));
        }
        else{
            dispatch(delCart(product));
        }
    }
  return (
    <>
      <div className='container'>
          <div className="row my-3">
             {state.map((product) =>{
                return (
                <>
                    <div className="col-md-6 my-3">
                        <img src={product.image} alt={product.title} height="200" width="180"/>
                    </div>
                    <div className="col-md-6 my-3">
                        <h3>{product.title}</h3>
                        <p className='lead fw-bold'>
                            {product.qty} x {product.price} = $ {product.qty * product.price};
                        </p>
                        <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product, false)}>
                            <i className='fa fa-minus'></i>
                        </button>
                        <button className='btn btn-outline-dark me-4' onClick={()=> handleButton(product, true)}>
                            <i className='fa fa-plus'></i>
                        </button>
                    </div>
                </>
                )
             })}
          </div>
      </div>
    </>
  )
}
