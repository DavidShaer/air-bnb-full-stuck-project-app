import React from 'react'

export const Card = (props) => {
  return (
    <div className={`card-container ${props.classes}`}>{props.children}</div>
  )
}
