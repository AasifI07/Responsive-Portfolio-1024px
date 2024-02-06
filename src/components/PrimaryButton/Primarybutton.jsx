import React from 'react'

import '../PrimaryButton/primarybutton.css';

function Primarybutton({btnimage,title,alt,imgg}) {
  return (
    <div>
       <div> 
        <button  className='button' placeholder={title}>
            <img src={imgg} alt='title' className='btn_img'/> 
       <p className='btn_title'>{title}</p>
        </button>
        </div>
    </div>
  )
}

export default Primarybutton;