import { Menu, X} from 'lucide-react'
import { useState } from "react";
import Navlinks from '../Navlinks/Navlinks';
 


const  Logo = () => {
    return (
      <div className='text-2xl text-white font-bold'>
        Turab_Ali
      </div>
    )
  }

function ResponsiveNav() {
    const [isOpen, setIsOpen] = useState(false);

    const showMenu = () => {
        setIsOpen(!isOpen)
    }

    
    

  return (
    // chatgpt

    // <div>
    //   <nav className="bg-blue-500 p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="text-white font-bold text-xl">MyLogo</div>
    //     <div className="hidden md:flex space-x-4">
    //       <a href="#" className="text-white">Home</a>
    //       <a href="#" className="text-white">About</a>
    //       <a href="#" className="text-white">Services</a>
    //       <a href="#" className="text-white">Contact</a>
    //     </div>
    //     <div className="md:hidden">
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         className="text-white focus:outline-none"
    //       >
    //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className="md:hidden">
    //       <a href="#" className="block px-2 py-1 text-white">Home</a>
    //       <a href="#" className="block px-2 py-1 text-white">About</a>
    //       <a href="#" className="block px-2 py-1 text-white">Services</a>
    //       <a href="#" className="block px-2 py-1 text-white">Contact</a>
    //     </div>
    //   )}
    // </nav>
    // </div>

    // gemini
    // <>
    //     <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
    //   <div className="flex items-center">
    //     <span className="text-xl font-bold">My App</span>
    //   </div>

    //   <ul className={`md:flex md:flex-row md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
    //     <li className="hover:text-gray-400">
    //       <a href="#">Home</a>
    //     </li>
    //     <li className="hover:text-gray-400">
    //       <a href="#">About</a>
    //     </li>
    //     <li className="hover:text-gray-400">
    //       <a href="#">Contact</a>
    //     </li>
    //   </ul>

    //   <button
    //     className="md:hidden focus:outline-none"
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
    //     <svg
    //       className="h-6 w-6"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       {isOpen ? (
    //         <path
    //           d="M6 18L18 6M6 6l12 12"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       ) : (
    //         <>
    //           <path
    //             d="M4 6h16M4 12h16M4 18h16"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </>
    //       )}
    //     </svg>
    //   </button>
    // </nav>
    // </>

    //my own
    <>
    <div className=' bg-blue-950  h-[80px] flex justify-between items-center px-8 transition-transform   '>
        <Logo></Logo>
        <Navlinks></Navlinks>
            <button onClick={showMenu} className='sm:hidden focus:outline-none'>
                {isOpen? <X className='sm:hidden text-white'></X> : <Menu className='sm:hidden text-white'></Menu>}
            </button>

    </div>
           {isOpen && (
                    <div className="md:hidden flex justify-center py-8  z-50 sticky top-10 text-white bg-black items-center flex-col gap-10">
                        
                    <a href="#" className="block px-2 py-1 text-white">Home</a>
                    <a href="#" className="block px-2 py-1 text-white">About</a>
                    <a href="#" className="block px-2 py-1 text-white">Services</a>
                    <a href="#" className="block px-2 py-1 text-white">Contact</a>
                    </div>
                )} 

       
           

    </>
  )
}

export default ResponsiveNav
