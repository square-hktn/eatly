import React from 'react'
import {useState} from 'react'
function PersonalInfoCard() {

  const[male,setMale]=useState(false)
  const [female,setFemale]=useState(true)
  const[firstname,setFirstname]=useState()
  const[lastname,setLastname]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const [location,setLocation]=useState()
  return (
    <div class="personal-info-container ">
      <p class="text-[#99592A] text-2xl font-semibold">Personal Information</p>
      <p class="text-gray-400 text-sm">Edit the information if required</p>
      <div class="flex w-full justify-between mt-10 mb-5">
    
          {
            male?
            <div class="flex w-1/2">
              <p class="text-gray-500">
              Male
             </p>
             <div class="flex w-1/4 ml-5">
                <div class="personal-info-gender-select-selected">
                  <img  src={require("../../assets/checkmark-circle.png")} alt="check" onClick={()=>{
                  setMale(true)
                  setFemale(false)
                }}/>
                </div>
                </div>
            </div>
            :
               <div class="flex w-1/2">
                <p class="text-gray-500">
                  Male
                </p>
                <div class=" flex w-1/5  ml-5">
                  <div class="personal-info-gender-select" onClick={()=>{
                  setFemale(false)
                  setMale(true)
                   }}>
                    </div>
                </div>
                
                </div>
          }
             {
            female?
            <div class="flex w-1/2">
              <p class="text-gray-500">
              Female
             </p>
             <div class="flex w-1/5 ml-5">
              <div class="personal-info-gender-select-selected">
                <div class="z-10">
                  <img  src={require("../../assets/checkmark-circle.png")} alt="check"  onClick={()=>{
                  setFemale(true)
                  setMale(false)
                }} class="z-1"/>
                  </div>
                  </div>
                </div>
            </div>
            :
               <div class="flex w-1/2">
                <p class="text-gray-500">
                  Female
                </p>
                <div class="flex w-1/5 ml-5">
                  <div class="personal-info-gender-select" onClick={()=>{
                  setFemale(true)
                  setMale(false)
                 }}>
                  </div>
                </div>
                </div>
          }
      </div>
      <div class="flex w-full  justify-between pt-5  ">
        <div class="flex flex-col w-1/2 mr-2">
          <p class="mb-2 text-gray-500">First Name</p>
          <input  class="address-modal-input-small " required="" onChange={(e)=>{
           }}/>
        </div>
        <div class="flex flex-col w-1/2 ">
          <p class="pb-2 text-gray-500">Last Name</p>
          <input  class="address-modal-input-small " required="" onChange={(e)=>{
          }}/>
        </div>
    </div> 
    <div class="flex flex-col w-full mt-3">
        <p class="mb-3 text-gray-500">Email</p>
        <input   class="personal-info-input " required="" onChange={(e)=>{
           setEmail(e.target.value)}}/>
     </div>
     <div class="flex flex-col w-full mt-3">
        <p class="mb-3 text-gray-500">Phone Number</p>
        <input   class="personal-info-input " required=""type="tel" onChange={(e)=>{
           setPhone(e.target.value)}}/>
     </div>
     <div class="flex flex-col w-full mt-3">
        <p class="mb-3 text-gray-500">Location</p>
        <input   class="personal-info-input " required="" onChange={(e)=>{
           setLocation(e.target.value)}}/>
     </div>
     <div class="flex  w-full mt-12 justify-center">
        <button class="bg-gray-400 w-1/3 p-3">
          <p class="text-white font-semibold">
            Save Changes
          </p>
        </button>
     </div>
   </div>
  )
}

export default PersonalInfoCard