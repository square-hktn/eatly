import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
function PersonalInfoCard() {

  const[male,setMale]=useState(false)
  const [female,setFemale]=useState(false)
  const[firstname,setFirstname]=useState()
  const[lastname,setLastname]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const [location,setLocation]=useState()
  const[isLoading,setIsLoading]=useState(false)

  useEffect(()=>{

    const prom=new Promise((resolve,reject)=>{
        axios.get("http://localhost:3022/problems").then((response)=>{
          if(response.data.status=="success"){
            const user=response.data.user
            setFirstname(user.name.split(" ")[0])
            setLastname(user.name.split(" ")[1])
            setEmail(user.email)
            setPhone(user.phone)
            setLocation(user.location)
            if(user.gender!=null){
              if(user.gender=="female"){
                setFemale(true)
              }else{
                setMale(true)
              }
            }
          }
        })
        resolve()
    })

    prom.then(()=>{
      setIsLoading(false)
    })

  },[])
  return (
    <div class="personal-info-container mb-15">
      <p class="text-[#99592A] text-2xl font-semibold">Personal Information</p>
      <p class="text-gray-400 text-sm">Edit the information if required</p>
      <div class="flex w-full justify-between mt-10 mb-5">
  

      </div>
      <div class="flex w-full  justify-between pt-5  ">
        <div class="flex flex-col w-1/2 mr-2">
          <p class="mb-2 text-gray-500">First Name</p>
          <input  class="address-modal-input-small " required="" placeholder={firstname} onChange={(e)=>{
           }}/>
        </div>
        <div class="flex flex-col w-1/2 ">
          <p class="pb-2 text-gray-500">Last Name</p>
          <input  class="address-modal-input-small " placeholder={lastname} required="" onChange={(e)=>{
          }}/>
        </div>
    </div> 
    <div class="flex flex-col w-full mt-3">
        <p class="mb-3 text-gray-500">Email</p>
        <input   class="personal-info-input " required="" placeholder={email} onChange={(e)=>{
           setEmail(e.target.value)}}/>
     </div>
     <div class="flex flex-col w-full mt-3">
        <p class="mb-3 text-gray-500">Phone Number</p>
        <input   class="personal-info-input " required=""type="tel"placeholder={phone} onChange={(e)=>{
           setPhone(e.target.value)}}/>
     </div>
     <div class="flex flex-col w-full mt-3">
        <p class="mb-3 text-gray-500">Location</p>
        <input   class="personal-info-input " required="" placeholder={location} onChange={(e)=>{
           setLocation(e.target.value)}}/>
     </div>
     <div class="flex  w-full mt-12 justify-center pb-5">
        <button class="bg-gray-400 w-1/2 p-2 very-round " onClick={()=>{
          const prom=new Promise((resolve,reject)=>{
              if( firstname==null || lastname==null || phone==null || email==null || location==null ||(male==false && female==false)){
                alert("PLease fill out all fields!")
              }else{
                axios.post("http://localhost:3000",{user:{firstname:firstname,lastname:lastname,email:email,phone:phone,location:location,gender:(female==true? "female":"male")}}).then((response)=>{
                  if(response.data.status=="success"){
                    alert("Thank you for updating your details")
                    resolve()
                  }else{
                    alert("There was an issue updating your details")
                  }
                  
                })
              }
          })

          prom.then(()=>{

          })
        }}  >
          <p class="text-white font-semibold">
            Save Changes
          </p>
        </button>
     </div>
   </div>
  )
}

export default PersonalInfoCard