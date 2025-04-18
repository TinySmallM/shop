import { ComponentPropsWithRef } from "react"
import './Card.css'
import { ButtonOrder } from "../ButtonOrder/ButtonOrder"
import { type Product } from "../../App"

type Props = {
  pathProduct: string
  title: string
  description: string
  types: Product['types']
  price: number
} & ComponentPropsWithRef<'div'>

export const Card = ({pathProduct, title, description, types, price}: Props) => {
  return (
    <div className="card">
      <div className="card__photo_container">
        <img className="card__photo" src={pathProduct} width='320px' height='320px' loading="lazy" alt="Чебурек" />
      </div>
      <div className="card__bottom">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <div className="card__types">
          {types.map((type) => (
            <button className="card__type" key={type.id}>{type.text}</button>
          ))}
        </div>
        <div className="card__order">
          <span className="card__price">{price} ₽</span>
          <ButtonOrder text="Заказать" />
        </div>
      </div>
    </div>
  )
}