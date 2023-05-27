import React from 'react'
import {useState} from 'react'
function PersonalInfoCard() {

  const[male,setMale]=useState(false)
  const [female,setFemale]=useState(true)

  return (
    <div class="personal-info-container">
      <p class="text-[#99592A] text-2xl font-semibold">Personal Information</p>
      <p class="text-gray-400 text-sm">Edit the information if required</p>
      <div class="flex w-full justify-between mt-10">
        
          {
            male?
            <div class="flex w-1/2">
              <p class="text-gray-500">
              Male
             </p>
              <div class="personal-info-gender-select-selected" onClick={()=>{
                setMale(true)
               setFemale(false)
              }}>
                <img src={require("../../assets/checkmark-circle.png")} alt="check"/>
              </div>
            </div>
            :
               <div class="flex w-1/2">
                <p class="text-gray-500">
                  Male
                </p>
                <div class="personal-info-gender-select" onClick={()=>{
                  setMale(true)
                  setFemale(false)
                }}>
                </div>
                </div>
          }
      
        <div class="flex w-1/2">
          
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoCard