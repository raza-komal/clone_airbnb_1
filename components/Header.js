import Image from 'next/image'
import logo from "../public/airbnb.png"
import {SearchIcon,
        GlobeAltIcon, MenuIcon,UserIcon,UserCircleIcon, MenuAlt1Icon
} from '@heroicons/react/solid'
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* Left */}
        <div className="relative flex items-center h-10 my-auto cursor-pointer ">
            <Image src={logo} alt="logo" width={100} height={150}/>
        </div>
        {/* Middle */}
        <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
          <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search' />
          <SearchIcon className='hidden lg:inline-flex h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
</div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4 text-sm text-gray-500">
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6' />
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
              <MenuIcon className='h-6' />
              <UserCircleIcon className='h-6'/>
            </div>
        </div>
    </header>
  )
}

export default Header