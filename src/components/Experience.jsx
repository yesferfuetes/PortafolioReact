import React from 'react'

import html from '../assets/icon-html.png';
import css from '../assets/icon-css.png';
import js from '../assets/icon-js.png';
import bootstrap from '../assets/icon-bootstrap.png';
import csharp from '../assets/icon-csharp.png';
import dotnet from '../assets/icon-dotnet.png';
import sql from '../assets/icon-sql.png';

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: bootstrap,
      title: 'Botstrap',
      style: 'shadow-purple-600'
    },
    {
      id: 5,
      src: csharp,
      title: 'C#',
      style: 'shadow-pink-400'
    },
    {
      id: 6,
      src: dotnet,
      title: '.NET',
      style: 'shadow-blue-600'
    },
    {
      id: 7,
      src: sql,
      title: 'SQL Server',
      style: 'shadow-sky-400'
    },
  ]

  return (
    <div name="skills"
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
          <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            <p className='py-6'>Estas son las tecnologías con las que he trabajado.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            
            {
              techs.map(({id, src, title, style}) => (
                <div 
                key={id} 
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className='w-20 mx-auto'/>
                  <p className='mt-4'>{title}</p>
                </div>
              ))
            }          
          </div>
        </div>
    </div>
  )
}

export default Experience