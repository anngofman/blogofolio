import React from 'react'

type Props = {
  className?:string,
  text:string
}

const Title = (props:Props) => {
  return (
    <>
    <p className={props.className}>{props.text}</p>
    </>
  )
}
export default Title