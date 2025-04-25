import "./Main.css"
import Product from "../product/Product"

export default function Main() {
  const  {title, description, isNew, img} = {
    title: "XX99 Mark II Headphones",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    img: "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"
  }
  return (
    <main className="main">
        <Product title={title} description={description} isNew={isNew} img={img}/>
      
    </main>
  )
}
