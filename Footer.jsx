import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Aleksi Valioghli</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/aleksi613" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/aleksivalioghli" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </div>

        <p className='text-gray-400'>@2025 Aleksi Valioghli</p>
    </div>
  )
}

export default Footer