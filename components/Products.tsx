import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

export const ProductsAtom = atom({
    // * this atom is having everything related to products....
    key: 'productsAtom',
    default: []
})
export const SelectedProductAtom = atom({
    key: 'selectedProductAtom',
    default: {}
})
const Products = () => {
    const [storeitems, setStoreitems] = useRecoilState(ProductsAtom)
    const [selectedItems, setSelectedItems] = useRecoilState(SelectedProductAtom);
    console.log('Before:', selectedItems);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setStoreitems(json)).catch((err) => console.log('notfound', err))
    }, [])
    let listOfKeys = Object.keys(selectedItems)
    console.log('listOfKeys', listOfKeys);

    console.log('All items in the application: ', storeitems)


    return <div className="border h-screen">
        <section className="border">
            <h1>
                Products
            </h1>
        </section>
        <main className="border">
            {
                //@ts-ignore
                storeitems.map(({ title, description, price, id, image }, index) => {
                    return <div className="px-3 grid grid-cols-3">

                        <div key={index} className='hover:border-2 w-96'>
                            <Link href={`./Product/${id}`}>
                                <div>
                                    <h1>{title}</h1>
                                    <img src={image} alt='loading' className='h-44 object-contain' />
                                    <h1>
                                        ₹ {''}{price}
                                    </h1>
                                </div>

                            </Link>

                            <div className='flex'>
                                <button onClick={() => { setSelectedItems({ ...selectedItems, [id]: (selectedItems[id] || 0) + 1 }) }} className='bg-blue-300 hover:border px-3 hover:bg-blue-500'>Add to basket  {selectedItems[id]}</button>
                                <button className='bg-yellow-300 hover:border px-3 hover:bg-yellow-500'>Buy now</button>
                                {
                                    selectedItems[id] ? <div>
                                        <button className='bg-red-300 px-4 hover:hover:bg-red-500' onClick={() => {
                                            let fakestore = { ...selectedItems }
                                            if (fakestore[id] === 1) {
                                                delete fakestore[id]
                                                setSelectedItems(fakestore)
                                            } else {
                                                setSelectedItems({ ...fakestore, [id]: fakestore[id] - 1 })
                                            }
                                        }}>
                                            Remove from basket
                                        </button>
                                    </div> : null
                                }
                            </div>
                        </div>

                    </div>
                })
            }
        </main >
    </div >;
};


export default Products;
