import React, { useEffect } from 'react'
import Loading from '../../utils/loading/Loading'
import { getProductByCategory } from '../../redax/products/productSlise'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../product/Product'


function Products() {

    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProductByCategory('beauty'))
    }, [dispatch])

    if (loading) return <Loading />
    if (error) return <div>error:{error}</div>

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }} className='products'>
                {
                    products.map((item) => (
                        <Product key={item.id} product={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products
