import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex justify-around items-center bg-slate-600 text-white h-[50px]'>
      <div>
        <h1>Logo</h1>
      </div>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Header