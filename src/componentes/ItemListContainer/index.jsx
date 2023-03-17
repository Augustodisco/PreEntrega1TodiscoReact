import React from "react";
import Titulo from "../Titulo/titulo";
import ContItem from "../Contitem";


export const ItemListContainer = () => {
    
  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} articulos`);
  
  }
  
  return(
    <>
      <Titulo/>
      <ContItem initial={1} stock={5} onAdd={onAdd} />
        
      </>
    );


} 

export default ItemListContainer;