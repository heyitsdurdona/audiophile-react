import React from 'react'
import Button from '../button/Button'

export default function Product({title, description, isNew, img: {desktop, mobile, tablet}}) {
  return (
    <div>
      <picture>
        <source media='(max-width: 768px)' srcSet={tablet}/>
        <source media='(max-width: 375px)' srcSet={mobile}/>
      <img src={desktop} alt={title} width={540} height={560}/>
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
