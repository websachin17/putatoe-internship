

import Card from "./Card";


function Cards({data}){

  return( data.map((items)=>{
    return <Card  items={items}></Card>
}))

  

}

export default Cards;