import React from 'react'
// images
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* logo */}
                    <a href='#'>
                        <img src={logo} width={100} height={100} alt='logo' />
                    </a>
                    <button className='btn btn-sm'>Work with me</button>
                </div>
            </div>
        </header>
    )
}

export default Header