import React from 'react'
import Button from '../button/Button'

export default function Product({title, description, isNew, img: {desktop, tablet, mobile}}) {
  return (
    <div>
      <picture>
        <source media='(max-width: 375px)' srcSet={mobile}/>
        <source media='(max-width: 768px)' srcSet={tablet}/>
      <img src={desktop} alt={title}/>
      </picture>

      <div>
        {isNew && <span>New Product</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <Button text="See Product" variant="primary"/>
      </div>
      
    </div>
  )
}
