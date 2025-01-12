import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div className="navbar-top py-3">
                <div className="cont flex justify-between items-center">
                    <div className='flex gap-10'>
                        <p> Mon - SAT: 6.00 am - 10.00 pm</p>
                        <p> Sun: Closed</p>
                    </div>
                    <div className='flex gap-7'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </div>

            </div>

            <div className="navbar-bottom cont py-10">

                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
                <div className='flex gap-1'>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/team">Team</NavLink>
                    <NavLink to="/team/add">Add</NavLink>
                </div>

            </div>

        </>
    )
}

export default Navbar
