import { useRouter } from 'next/router'
import React from 'react'

function ProductId() {
  const router = useRouter()
  const Productid = router.query.ProductId
  return <div>this si proucadi d {Productid}</div>
}

export default ProductId
