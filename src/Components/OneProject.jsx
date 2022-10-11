import React from 'react'

const OneProject = ({itens}) => {
  const {id, title,author, price, img} = itens;

  return (
    <div>
      <h1>Em Breve(cansei_por_hj)</h1>
      <p>{title}</p>
    </div>
  )
}

export default OneProject