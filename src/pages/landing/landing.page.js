import React from 'react'
import {useState} from 'react'
//import { useNavigate } from 'react-router-dom'


function Landing() {

  const[customer,setCustomer]=useState(false)
  const[merchant,setMerchant]=useState(false)

 
  //const navigate=useNavigate()



  return (
    <div class="welcome_page_cover">
      <div class="flex-col justify-center">
      

        <div class="flex w-full justify-center">
          <div class="bg-[#FCE0A1] opacity-90 justify-center w-1/2 rounded-md p-3 border-gray-400 border-3 mt-10 flex flex-col">
          
            <span class="opacity-100 flex  justify-center mt-10">
                <img src={require("../../assets/logo_eatly 1.png")} alt="eatly"/>
            </span>
            <div class="opacity-100 flex justify-around p-3  ">
             { customer?
                <div class="bg-white p-5 rounded-md border-[#8D611F] border-2 flex flex-col opacity-100 pl-8 pr-8">
                <div class="flex justify-end">
                      {
                        customer?
                        <button class="rounded-xl p-2 bg-green-600" onClick={()=>{
                          setCustomer(false)
                        }}>
                        </button>
                        :
                        <button class="rounded-xl p-2 bg-white border-2 border-gray-500" onClick={()=>{
                          setCustomer(true)
                          setMerchant(false)
                        }}>
                        </button>
                      }
                    </div>
                    <img class="opacity-100" src={require("../../assets/ui_components/customer.jpg")} alt="customer"/>
                    <div class="flex flex-col mt-5">
                      <p class="text-xl text-center font-semibold mb-3">For Customer</p>
                      <p class="text-gray-400 font-semibold">Order food online now!</p>
  
                    </div>
                </div>
             :
             <div class="bg-white p-5 rounded-md flex flex-col opacity-100 pl-8 pr-8">
              <div class="flex justify-end">
                    {
                      customer?
                      <button class="rounded-xl p-2 bg-green-600" onClick={()=>{
                        setCustomer(false)
                      }}>
                      </button>
                      :
                      <button class="rounded-xl p-2 bg-white border-2 border-gray-500" onClick={()=>{
                        setCustomer(true)
                        setMerchant(false)
                      }}>
                      </button>
                    }
                  </div>
                  <img class="opacity-100" src={require("../../assets/ui_components/customer.jpg")} alt="customer"/>
                  <div class="flex flex-col mt-5">
                    <p class="text-xl text-center font-semibold mb-3">For Customer</p>
                    <p class="text-gray-400 font-semibold">Order food online now!</p>

                  </div>
              </div>
          }
          {merchant?
              <div class="bg-white p-5 rounded-md border-[#8D611F] border-2 flex flex-col pr-8 pl-8">
               <div class="flex justify-end">
                 {
                   merchant?
                   <button class="rounded-xl p-2 bg-green-600 " onClick={()=>{
                     setMerchant(false)
                   }}>
                   </button>
                   :
                   <button class="rounded-xl p-2 bg-white border-gray-500 border-2" onClick={()=>{
                     setMerchant(true)
                     setCustomer(false)
                   }}>
                   </button>
                 }
               </div>
               <img class="opacity-100"src={require("../../assets/ui_components/restaraunt.jpg")} alt="results"/>
               <div class="flex flex-col mt-5">
                 <p class="text-xl text-center font-semibold mb-3">For Merchant</p>
                 <p class="text-gray-400 font-semibold">Manage your restaraunt!</p>
               </div>
           </div>
            :
              <div class="bg-white p-5 rounded-md flex flex-col pr-8 pl-8">
                  <div class="flex justify-end">
                    {
                      merchant?
                      <button class="rounded-xl p-2 bg-green-600 " onClick={()=>{
                        setMerchant(false)
                      }}>
                      </button>
                      :
                      <button class="rounded-xl p-2 bg-white border-gray-500 border-2" onClick={()=>{
                        setMerchant(true)
                        setCustomer(false)
                      }}>
                      </button>
                    }
                  </div>
                  <img class="opacity-100"src={require("../../assets/ui_components/restaraunt.jpg")} alt="results"/>
                  <div class="flex flex-col mt-5">
                    <p class="text-xl text-center font-semibold mb-3">For Merchant</p>
                    <p class="text-gray-400 font-semibold">Manage your restaraunt!</p>
                  </div>
              </div>
              }
            </div>
              <div class="flex justify-center p-3">
                  <button class="w-1/3 flex  bg-[#8D611F] p-3 rounded-xl justify-center"onClick={()=>{
                    const prom=new Promise((resolve,reject)=>{
                      if(!customer && !merchant){
                        alert("Please select an option!")
                      }else{
                        if(merchant){
                          sessionStorage.setItem("userType",JSON.stringify("merchant"))
                          resolve()
                        }
                        if(customer){
                          sessionStorage.setItem("userType",JSON.stringify("customer"))
                          resolve()
                        }
                      }
                     
                    })

                    prom.then(()=>{
                     // navigate("/auth")
                    })
                  }}>
                    <p class="text-center text-white">Continue</p>
                  </button>
               </div>
            
          </div>
        
        </div>
        


      </div>
  </div>
  )
  
}

export default Landing