import React from 'react'

function ProfileHeader() {
  return (
    <div class="profile-header-container">
      <div class="flex p-3">
        <div class="flex w-1/2 align-center">
          <img src={require("../../assets/user.png")} alt="user"/>
        </div>
        <div class="flex flex-col w-1/2 justify-center align-start ml-5 p-5">
            <p class=" font-semibold text-3xl mb-2">Jane Doe</p>
            <p class="text-lg text-gray-500 ">Customer</p>
      </div>
      </div>  
    </div>
  )
}

export default ProfileHeader