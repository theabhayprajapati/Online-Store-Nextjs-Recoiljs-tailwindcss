import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { SelectedProductAtom } from './Products';

const Header = () => {
    const basketitems = useRecoilValue(SelectedProductAtom)

    return <nav className="flex justify-between px-2 border-2">
        <div className=" flex space-x-3">

            <h1 className="cursor-pointer hover:border-2 shadow-md">Home</h1>
            <h1 className="cursor-pointer hover:border-2 shadow-md">Prime TV</h1>
            <h1 className="cursor-pointer hover:border-2 shadow-md">Fashion</h1>
            <h1 className="cursor-pointer hover:border-2 shadow-md">Jewelery</h1>
            <h1 className="cursor-pointer hover:border-2 shadow-md">Gadgets'</h1>

        </div>
        <div>
            <section className="flex space-x-2">

                <Link href={'/Basket'}>
                    <h1 className="cursor-pointer hover:border-2 shadow-md">
                        Basket
                    </h1>
                </Link>
                <h1 className="cursor-pointer hover:border-2 shadow-md">{Object.keys(basketitems).length}</h1>

            </section>
            {/* //todo: ProductPage */}


        </div>
    </nav>
};

export default Header;
