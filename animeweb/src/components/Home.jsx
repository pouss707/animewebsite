import React from 'react'
import Header from './Header'
import testimg from '../assets/test.png'
function Home() {
    return (
        <div>
            <Header />
            <div className='flex justify-center items-center h-[500px] w-screen pt-[208px]' >
                <img className='h-[608px] w-[1200px]' src={testimg} alt="test" />
            </div>
        </div>
    )
}

export default Home