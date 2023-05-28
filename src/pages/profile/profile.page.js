import React from 'react'
import PageSearch from '../../component/PageSearch'
import MostOrderedCard from '../../component/profile/MostOrderedCard'
import PersonalInfoCard from '../../component/profile/PersonalInfoCard'
import ProfileHeader from '../../component/profile/ProfileHeader'
import Sidebar from '../../component/sidebar'
const Profile=()=> {

  /*
      <p class="text-4xl font-bold ">
        Profile
      </p>
      <p class="text-md font-semibold ">Thursday, 20 May 2023</p>
      <div class="flex justify-between">
        <div class="flex w-1/2">
            <PersonalInfoCard/>
        </div>
        <div class="flex flex-col w-1/2 ">
          <div class="flex h-1/3">
            <ProfileHeader/>
          </div>
          <div class="flex h-2/3">
            <MostOrderedCard/>
          </div>
          
        </div>
      </div>

  */
  return (
    <div class="flex  w-full">
      <div class="flex w-1/12">
        <Sidebar/>
      </div>
      <div class="flex  w-11/12 h-screen pt-5 ml-5">
      <div class="flex flex-col w-full">
        <div class="flex w-full mb-15 p-5">
          <div class="flex w-1/2">
            <div class="flex flex-col ml-3">
               <p class="text-2xl font-bold ">
                Profile
              </p>
              <p class="text-md font-semibold ">Thursday, 20 May 2023</p>
            </div>
          </div>
          <div class="flex w-1/2 justify-end ">
             <PageSearch/>
          </div>
        </div>
        <div class="flex  h-4/5 ml-0 p-5">
          <div class="flex w-1/2 m-3 align-start h-full">
            <PersonalInfoCard/>
          </div>
           <div class="flex flex-col w-1/2 ml-3 gap-x-3">
              <div class="flex h-1/3 mb-3">
                <ProfileHeader/>
               </div>
            <div class="flex h-2/3  ">
              <MostOrderedCard/>
            </div>
        </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Profile