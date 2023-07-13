import React from 'react'

import html from '../assets/icon-html.png';
import css from '../assets/icon-css.png';
import js from '../assets/icon-js.png';
import bootstrap from '../assets/icon-bootstrap.png';
import csharp from '../assets/icon-c#.png';
import sql from '../assets/icon-sql.png';

const Experience = () => {
  return (
    <div>
        <div>
          <div>
            <p>Skills</p>
            <p>Estas son las tecnologías con las que he trabajado.</p>
          </div>

          <div>
            <div>
              <img src={html} alt="" />
              <p>HTML</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience