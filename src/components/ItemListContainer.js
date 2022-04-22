import ItemCount from "./ItemCount"
const ItemListContainer = () => {
  const onAdd = () => {
  }

    return ( 
    <>
      <div>Bienvenido</div>
      <ItemCount stock={10} init={0} onAdd={onAdd}/>
    </>
    )
  }
  
  export default ItemListContainer



