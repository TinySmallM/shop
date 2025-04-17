import { ComponentPropsWithRef, ReactNode } from "react"
import './Button.css'

type Props = {
  children: ReactNode
  color: string
} & ComponentPropsWithRef<'button'>

export const Button = ({children, color, ...props}: Props) => {
  return (
    <button className="button" style={{backgroundColor: color}} {...props}>{children}</button>
  )
}