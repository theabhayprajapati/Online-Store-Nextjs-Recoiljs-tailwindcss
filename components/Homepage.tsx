import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import Products, { SelectedProductAtom } from './Products';

// This gets called on every request

//  @ts-ignore
const Homepage = () => {
  const basketitems = useRecoilValue(SelectedProductAtom)

  return <div >
    
    <Products />
  </div>;
};

export default Homepage;
