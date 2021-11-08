import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      // .then(console.log)
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <div>Hola bro, estoy hecho con NextJS!</div>
      {productList.map((producto) => (
        <div>{producto.image}</div>
      ))}
    </div>
  )
}

export default HomePage
