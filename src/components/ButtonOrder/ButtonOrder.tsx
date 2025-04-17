import { ComponentPropsWithRef } from "react"
import './ButtonOrder.css'

type Props = {
  text: 'Купить' | 'Заказать'
} & ComponentPropsWithRef<'button'>

export const ButtonOrder = ({text, ...props}: Props) => {
  return (
    <button className="ButtonOrder" {...props}>{text}</button>
  )
}