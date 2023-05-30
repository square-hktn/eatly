import React from 'react'
import MostOrderedMealCard from './MostOrderedMealCard'
import { useState,useEffect } from 'react'
import axios from 'axios'
function MostOrderedCard() {

  const[orders,setOrders]=useState()
  const[isLoading,setIsLoading]=useState(true)

  useEffect(()=>{

    const prom=new Promise((resolve,reject)=>{
      axios.get("http://localhost:3000").then((response)=>{
        if(response.data.status=="success"){
          setOrders(response.data.orders)
          resolve()
        }
      })
    })

    prom.then(()=>{
      setIsLoading(false)

    })

  },[])

  const numMeal=5
  if(numMeal<4){
  return (
    
      <div class="most-ordered-container h-full">
      <p class="text-[#99592A] text-2xl font-semibold">Most Ordered</p>
      <p class="text-gray-400 text-sm">List of your most ordered dishes</p>
      <div class="flex flex-col mt-10">  
        <MostOrderedMealCard/>
        <MostOrderedMealCard/>
        <MostOrderedMealCard/>
      </div>
    </div>
  )
    
  }
  else{
    return (
      
        <div class="most-ordered-container ">
          <div class="flex flex-col">
            <p class="text-[#99592A] text-2xl font-semibold">Most Ordered</p>
           <p class="text-gray-400 text-sm">List of your most ordered dishes</p>
          </div>
        
        <div class="flex flex-col mt-10 overflow-y-scroll overflow-hidden h-  p-3">
          <MostOrderedMealCard/>
          <MostOrderedMealCard/>
          <MostOrderedMealCard/>
          <MostOrderedMealCard/>
          <MostOrderedMealCard/>
          <MostOrderedMealCard/>
          <MostOrderedMealCard/>
        </div>
      </div>
    )
      
    }
  
}

export default MostOrderedCard