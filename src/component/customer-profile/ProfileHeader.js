import React from "react";
import { useEffect, useState } from "react";
//import axios from 'axios'
function ProfileHeader() {
  const [isLoading, setIsLoading] = useState(true);
  const [initials, setInitials] = useState("JD");

  // useEffect(()=>{
  //  const prom=new Promise((resolve,reject)=>{
  // axios.get("http://localhost:3000").then((response)=>{
  //   if(response.data.status=="success"){
  //   const user=response.data.user
  //  const first=user.name.split(" ")[0].toUpperCase()
  //  const last=user.name.split(" ")[1].toUpperCase()
  // setInitials(first.substring(0,1)+""+last.substring(0,1))
  //  resolve()
  // }
  // })
  //})

  // prom.then(()=>{
  //setIsLoading(false)
  // })

  // },[])

  return (
    <div class="profile-header-container w-full">
      <div class="flex p-3 ">
        <div class=" w-1/2 align-center overflow-hidden ">
          <div class="profile-header-user-container ">
            <p class="mt-10 text-white text-6xl font-bold text-center">
              {initials}
            </p>
          </div>
        </div>
        <div class=" w-4/10 justify-center align-start ml-2 p-6 overflow-hidden ">
          <p class=" font-semibold text-2xl mb-2">Jane Doe</p>
          <p class="text-lg text-gray-500 ">Customer</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
