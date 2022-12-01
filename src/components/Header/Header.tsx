const Header = () => {
  return (
    <header className='flex justify-around items-center bg-[#FFF059] text-gray-500 h-[50px]'>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <input type="text" name="search" />
      </div>
      <ul className='flex gap-5'>
        <li><a href="#">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header