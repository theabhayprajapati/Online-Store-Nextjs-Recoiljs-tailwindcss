import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
// import { Header } from '../../components/Header'
import Header from '../../components/Header'
const ProductId = () => {
  const router = useRouter()

  const Productid = router.query.ProductId
  console.log(Productid)
  const [Productis, setProductis] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${Productid}`)
      .then((res) => res.json())
      .then((json) => setProductis(json))
      .catch((err) => console.log('notfound', err))
  }, [Productid])
  console.log([Productis])
  return (
    <div>
      <Header />
      <main>
        <div>
          <h1>{Productis.title}</h1>
          <img
            src={Productis.image}
            alt="loading..."
            className="w-56 object-contain"
          />
          <h1>{Productis.description}</h1>
          <h1>
            {'₹ '}
            {Productis.price}
          </h1>
        </div>
      </main>
    </div>
  )
}

export default ProductId
