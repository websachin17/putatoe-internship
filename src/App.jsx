
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { beverages } from "./data/beverages";

import { dairy } from "./data/dairy";


function App() {
  return (
    <div class= " flex flex-col items-center " >

      {/*  navbar */}

      <Navbar></Navbar>



      {/* recharge icons  */}
      <div className=" flex  h-[93px] bg-[#0291a0] justify-around w-[100%]   items-end ">
          <div class="border rounded-[100%] bg-white h-fit w-fit p-[12px]">icon 1</div>
          <div class="border rounded-[100%] bg-white h-fit w-fit p-[12px]">icon 2</div>
          <div class="border rounded-[100%] bg-white h-fit w-fit p-[12px]">icon 3</div>
          <div class="border rounded-[100%] bg-white h-fit w-fit p-[12px]">icon 4</div>
          <div class="border rounded-[100%] bg-white h-fit w-fit p-[12px]">icon 5</div>
          <div class="border rounded-[100%] bg-white h-fit w-fit p-[12px]">icon 6 </div>
      </div>

      {/* image animation */}

      <div class="image flex justify-center mt-16 ">
          <img class="h-[18vw] w-[100%]"src="https://www.dodladairy.com/static/images/home-products.png"></img>
      </div>

      {/* cards container */}

      <div class="flex flex-col items-center ">
           <div class="heading">Top deals</div>

           <div >
            
            <div class="title px-auto  ">  Beverages</div>
              
           <div class="  flex gap-[2rem]  p-[10px]  w-[80vw] overflow-x-auto overflow-y-hidden justify-evenly">
         <Cards data={beverages}></Cards>
                 
           </div>

           <div>
            <div class="title">Dairy</div>

            <div class="flex gap-[2rem] w-[80vw] p-[10px] overflow-x-auto overflow-y-hidden justify-evenly">
         <Cards data={dairy}></Cards>
                 
           </div>

           </div>

           <div>
            <div class="title">fruits</div>

            <div class="flex gap-[2rem] w-[80vw] p-[10px]  overflow-x-auto overflow-y-hidden justify-evenly">
         <Cards data={dairy}></Cards>
                 
           </div>

           </div>

         

         
         </div>

          

      </div>
       
    </div>
   
  );
}

export default App;
