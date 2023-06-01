import React from 'react'
import Sidebar from '../../component/sidebar'
import Product from '../../component/product-list/Product'
import PageSearch from '../../component/PageSearch' 
import styles from '../../component/product-list/product.module.scss';
import AddNewProduct from '../../component/product-list/AddNewProduct';
import { useState } from 'react'
import AddNewDishModal from '../../component/product-list/AddNewDishModal';
import EditMealModal from '../../component/product-list/EditMealModal';

function MerchantProductList() {

  const[chinaHut,setChinaHut]=useState(false)
  const[seafoodHouse,setSeafoodHouse]=useState(false)
  const[italianPlace,setItalianPlace]=useState(false)
  const[healthFood,setHealthFood]=useState(false)
  const[sweetPalace,setSweetPalace]=useState(false)
  const[showNewProduct,setShowNewProduct]=useState(false)
  const[showEditModal,setShowEditModal]=useState(false)
 
  function handleAddNewMealModal(){
    setShowNewProduct(false)
  }
  function handleEditMealModal(){
    setShowEditModal(true)
  }
  function closeEditMealModal(){
    setShowEditModal(false)
  }
  return (
<div class="flex  w-full ">
    {
      showNewProduct?
      <AddNewDishModal show={handleAddNewMealModal}/>
      : 
      <div></div>
    }
     {
      showEditModal?
      <EditMealModal show={closeEditMealModal}/>
      :
      <div></div>
    }
  <Sidebar class="mt-0"/>
    <div class="flex w-1/12">
    </div>
    <div class="flex-col w-11/12 h-screen pt-5 ml-5 p-5 mb-10 mr-5">
    <div class=" flex-col w-full p-5">
      <div class="flex w-full">
        <div class="flex w-1/2">
            <div class="flex-col ml-3">
               <p class="text-2xl font-bold ml-5">
                Product List
              </p>
              <p class="text-md font-semibold ml-5">Thursday, 20 May 2023</p>
            </div>
          </div>
          <div class="flex w-1/2 justify-end ">
            <div class="flex w-1/2"></div>
             <PageSearch/>
          </div>
      </div>
    </div>
    <div class="flex w-full justify-start mt-10 ml-10">
        <div class="flex w-[60%]  border-b-2 border-gray-600 mt-5  ml-2 justify-between">
           {
              chinaHut?
              <button class="p-0 border-b-4 border-[#99592a]">
                <p class="font-bold text-[#99592a]"> 
                  China Hut
                </p>
              </button>:
               <button class="p-0" onClick={()=>{
                setChinaHut(true)
                setItalianPlace(false)
                setSeafoodHouse(false)
                setHealthFood(false)
                setSweetPalace(false)
               }}>
               <p class="font-semibold ">
                 China Hut
               </p>
             </button>
             
           }
            {
              seafoodHouse?
              <button class="p-0 border-b-4 border-[#99592a]">
                <p class="font-bold text-[#99592a]"> 
                  Seafood House
                </p>
              </button>:
               <button class="p-0" onClick={()=>{
                setChinaHut(false)
                setItalianPlace(false)
                setSeafoodHouse(true)
                setHealthFood(false)
                setSweetPalace(false)
               }}>
               <p class="font-semibold ">
                 Seafood House
               </p>
             </button>
             
           }
              {
              italianPlace?
              <button class="p-0 border-b-4 border-[#99592a]">
                <p class="font-bold text-[#99592a]"> 
                  Italian Place
                </p>
              </button>:
               <button class="p-0" onClick={()=>{
                setChinaHut(false)
                setItalianPlace(true)
                setSeafoodHouse(false)
                setHealthFood(false)
                setSweetPalace(false)
               }}>
               <p class="font-semibold ">
                 Italian Place
               </p>
             </button>
           }
              {
              healthFood?
              <button class="p-0 border-b-4 border-[#99592a]">
                <p class="font-bold text-[#99592a]"> 
                  Seafood House
                </p>
              </button>:
               <button class="p-0" onClick={()=>{
                setChinaHut(false)
                setItalianPlace(false)
                setSeafoodHouse(false)
                setHealthFood(true)
                setSweetPalace(false)
               }}>
               <p class="font-semibold ">
                 Health Food
               </p>
             </button>
             
           }
            {
              sweetPalace?
              <button class="p-0 border-b-4 border-[#99592a]">
                <p class="font-bold text-[#99592a]"> 
                  Sweet Palace
                </p>
              </button>:
               <button class="p-0" onClick={()=>{
                setChinaHut(false)
                setItalianPlace(false)
                setSeafoodHouse(false)
                setHealthFood(false)
                setSweetPalace(true)
               }}>
               <p class="font-semibold ">
                 Sweet Palace
               </p>
             </button>
             
           }
        </div>
        <div class="flex w-1/4">

        </div>
    </div>
    <div class="flex w-full align-top justify-between mt-5 h-4/5 overflow-y-scroll overflow-hidden">
      <div className={styles.productContainer}>
          <button onClick={()=>{
            setShowNewProduct(true)
          }}>
            <AddNewProduct/>
          </button>
           <Product show={handleEditMealModal}/>
           <Product show={handleEditMealModal}/>
           <Product show={handleEditMealModal}/>
           <Product show={handleEditMealModal}/>
           <Product show={handleEditMealModal}/>
           <Product show={handleEditMealModal}/>

            
      </div>
    </div>
  </div>
</div>
  )
}

export default MerchantProductList