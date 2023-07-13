import React from 'react'

const About = () => {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Soy estudiante de la carrera de Ingenieria en Sistemas, y actualmente me desempeñó como Software Developer particularmente en tecnologias de .NET     
            </p>
            
            <p className='text-xl'>
            <br />
                Tengo fuertes habilidades de resolución de problemas y una experiencia laboral efectiva en equipo.
            </p>

            <p className='text-xl'>
            <br />
                Actualmente trabajo pero estoy abierto a nuevas oportunidades.
                Desarrollador Back-end & Front-end.
            </p>
        </div>
    </div>
  )
}

export default About