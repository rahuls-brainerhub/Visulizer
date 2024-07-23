import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { store } from '../../redux/store'
import { clearAuth } from '../../redux/slice/authSlice'
import { setIsAuthenticated } from '../../redux/slice/globalSlice'
import { toast } from 'react-toastify'

const Navbar = ({onClose,onCloseLogin}) => {
    const [activeLink, setActiveLink] = useState(0)
    const links = ["Home", "Services", "About us", "Contact us", "FAQ"]
    const  isAuthenticated=useSelector((store)=>store.global?.is_authenticated)
    const logout=()=>{
        store.dispatch(clearAuth())
        store.dispatch(setIsAuthenticated(false))
        toast.success("Logout Sucessfull")
    }
    return (
        <div className=' shadow-lg'>
            <div className='max-w-[90rem] px-[1.25rem] mx-auto flex justify-between items-center'>
                <div className='my-[0.5rem]'>
                    <img className='h-[4rem]' src={"/logo_new.png"} />
                </div>
                <div className='flex  items-center gap-[3rem]'>
                    {
                        links.map((item, i) => (
                            <Link onClick={() => { setActiveLink(i) }} className={`navbar-link ${activeLink === i ? "active" : ""}`}>
                                {item}
                            </Link>
                        ))
                    }
                </div>
                {isAuthenticated ?(<>
                    <div className='flex gap-[0.9rem]'>
                    <button className='btn-outline bg-primary text-[white]' onClick={logout}>
                        Log Out
                    </button>
                </div>
                </>):(<>
                    <div className='flex gap-[0.9rem]'>
                    <button className='btn-outline' onClick={onCloseLogin}>
                        Login
                    </button>
                    <button className='btn-primary' onClick={onClose}>
                        Sign up
                    </button>
                </div></>)}
             
              
            </div>
        </div>
    )
}

export default Navbar