import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../Store/productSlice'

const Products = () => {

    const dispatch = useDispatch()
    const [products,setProducts] = useState([])

    useEffect(()=>{
        dispatch(fetchProducts())
        // const fetchProducts = async () =>{
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json()
        //     setProducts(data)
        // }
        // fetchProducts()
    },[])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

  return (
    <div className='productsWrapper'>
        {
            products.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price} $</h5>
                    <button onClick={()=>handleAdd(product)} className='btn'>add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products