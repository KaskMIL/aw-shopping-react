function Header() {
  return (
    <header className="flex justify-around items-center bg-[#FFF059] text-gray-500 h-[50px]">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <input type="text" name="search" />
      </div>
      <ul className="flex gap-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
