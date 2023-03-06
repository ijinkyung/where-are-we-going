import Head from 'next/head';
import Image from 'next/image';
import Main from './components/Main';
import MainRes from './components/MainRes';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div>
      <Nav />
      {isSideBarOpen ? <MainRes /> : <Main />}
    </div>
  );
}
