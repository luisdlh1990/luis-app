import React from 'react'
import Item from './Item'

const ItemList = ({listaProductos}) => {
  return (

   <div>
        {
        listaProductos.map((producto)=>
                                      <Item key={producto.id} producto={producto}/>)
        }
    </div>

  
  )
}

export default ItemList;