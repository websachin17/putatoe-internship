function Card({items}){


  const {name,brand,price,tag,availability,image,mrp} = items

  

   return(<div class="flex flex-col border h-[300px]    items-center justify-evenly">
        <div >
            <img class=" h-36 "src={image} alt="pe"></img>
        </div>

        <div class="text-[#00838f] text-[15px]  font-extrabold ">{name}</div>

        <div class="font-[600]">{brand}</div>

       

        <div class=" font-bold">{tag}</div>

        <div class="flex gap-2">
           <div>{price}</div>
           <div class="  decoration-dashed">{mrp}</div>
        </div>
          
          <div class="flex gap-3 items-center">
          <div>{availability}</div>

          <div>
            <button class="border rounded-[10px] bg-[#00838f]  h-[28px] text-[10px] p-[7px] font-[400] font-roboto">Add to cart </button>
          </div>
          </div>
        



   </div>)

     

}

export default Card;