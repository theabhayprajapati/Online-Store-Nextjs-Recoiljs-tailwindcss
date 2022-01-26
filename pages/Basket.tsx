import Head from 'next/head';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ProductsAtom, SelectedProductAtom } from '../components/Products';

const Basket = () => {
    const [productsItem, setProductsItem] = useRecoilState(ProductsAtom);
    const selectedItems = useRecoilValue(SelectedProductAtom)
    let keys = Object.keys(selectedItems);
    console.log('keys', ...keys);
    //@ts-ignore
    console.log(productsItem[0]?.id);
    let realkeys = [...keys]
    console.log(realkeys);
    console.log(typeof realkeys);
    function filteredItems() {

        // @ts-ignore
        Object.entries(realkeys).map(([item]) => console.log(productsItem[item - 1]));
    }
    // const ignore = productsItem.filter(  )
    return <div>
        <Head>
            <title>Basket</title>
        </Head>
        {/*  <main>

            {
                // @ts-ignore
                Object.entries(selectedItems).map(([id, quantity]) => (productsItem[id]).map((({ id, price, title }) => { return div(title) })))
            }
            <button onClick={filteredItems}>Find out</button>
        </main> */}
        <button onClick={filteredItems}>Filter them</button>
    </div>;
};

export default Basket;
