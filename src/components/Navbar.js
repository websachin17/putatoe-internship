import { FaFontAwesome } from "react-icons/fa"





function Navbar(){
   
  return(<div class="bg-[#00838f] h-[85px] flex justify-between w-[100vw] items-center ">

    <div>
       <p>PUTATOE</p>
       <p>one solution</p>
    </div>

    <div>
       <select>
         <option value="gorakhpur">Gorakhpur,uttar pradesh</option>
       </select>
    </div>

    <div>
      <div>
      <input type="text" placeholder="Search for products and brands"></input>
      </div>

    
    </div>


     <div>
     <FaFontAwesome icon="fa-regular fa-message" />

   
          
     </div>

       
 


       

         
  </div>)

}


export default Navbar