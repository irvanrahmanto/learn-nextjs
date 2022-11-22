import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
      <h1>Welcome Irvan!</h1>
        <ul>
          <li><Link href='/'>Home Page</Link></li>
          <li><Link href='/blog'>Blog</Link></li>
          <li><a href='/users'>Users</a></li>
        </ul>
      </header>
    </>
  )
}
