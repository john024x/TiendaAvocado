import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [ProductList, setProductList] = useState<TProduct[]>([])
  const id_producto = query.id

  useEffect(() => {
    window
      .fetch(`/api/avo/${id_producto}`)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data)
        console.log(data)
      })
    // console.log(ProductList)
  }, [])

  return (
    <section>
      <h1>Página producto</h1>
      {/* {ProductList.map((producto) => (
        <div>{producto.sku}</div>
      ))} */}
    </section>
  )
}

export default ProductPage
