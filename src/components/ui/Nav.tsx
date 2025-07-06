import { Button } from "./button"

const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Planters", link: "/" },
    { name: "Contact", link: "/" },
]

const Nav = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 px-12 w-screen h-16 flex items-center justify-between">
        <div className="h-16 flex-1 items-center flex relative">
            <span className="text-white text-3xl font-leckerli cursor-pointer">Lush</span>
            <img className="w-12 absolute left-10 top-0" src="https://i.ibb.co/fYwhQgcp/image.png" alt="img" />
        </div>
        <div className="h-16 flex-1 flex justify-around items-center text-white">
            {navItems.map((item)=> <span className="hover:opacity-80 cursor-pointer" key={item.name}>{item.name}</span>)}
            <Button className="w-36 h-10 bg-transparent border-white hover:bg-white hover:text-green-800 rounded-[3px]" variant="outline">Call Us</Button>
        </div>
    </div>
  )
}

export default Nav
