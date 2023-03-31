import React from 'react'
import NavBar from '@/components/common/Navbar';

export default function Container(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  )
}