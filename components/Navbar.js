import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({active,setActive,name,route})=>{
  return(
    active !== name ? (
      <Link href={route}>
        <a>
          <span onClick={()=>setActive(name)} className="hover:text-blue-light">
            {name}
          </span>
        </a>
      </Link>
    ): null
  )    
}


const Navbar = () => {
  const [active, setActive] = useState('');

  const {pathname} = useRouter();

  useEffect(() => {
    if(pathname === "/") setActive('About')
    if(pathname === "/projects") setActive('Projects')
    if(pathname === "/skills") setActive('Skills')
  }, [])
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-blue-light text-blue-light md:text-2xl">{active}</span>
      <div className="flex space-x-5 text-lg text-blue-dark md:text-xl">
        <NavItem active={active} setActive={setActive} name='About' route="/" />
        <NavItem active={active} setActive={setActive} name='Projects' route="/projects" />
        <NavItem active={active} setActive={setActive} name='Skills' route="/skills" />
      </div>
    </div>
  )
}
export default Navbar;
