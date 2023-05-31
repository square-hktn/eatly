import React from 'react'
import PageSearch from '../../component/PageSearch'
import MostOrderedCard from '../../component/customer-profile/MostOrderedCard'
import PersonalInfoCard from '../../component/customer-profile/PersonalInfoCard'
import ProfileHeader from '../../component/customer-profile/ProfileHeader'
import Sidebar from '../../component/sidebar'
const CustomerProfile=()=> {


  return (
    <div class="flex w-full mt-0">
      <Sidebar class="ml-0"/>
     <div class="flex">
     
      <div class="flex  w-11/12 pt-5 ">
      
      <div class="flex flex-col w-full">
        <div class="flex w-full mb-15 p-5 justify-between">
          <div class="flex w-1/2">
            <div class="flex flex-col ml-3">
               <p class="text-2xl font-bold ">
                Profile
              </p>
              <p class="text-md font-semibold ">Thursday, 20 May 2023</p>
            </div>
          </div>
          <div class="flex w-1/2 justify-end ">
            <div class="flex w-1/2"></div>
             <PageSearch/>
          </div>
        </div>
        <div class="flex  h-4/5 ml-0 p-5">
          <div class="flex w-1/2 m-3 align-start h-full">
            <PersonalInfoCard/>
          </div>
           <div class="flex-col w-1/2 ml-3 gap-x-3 mt-2 h-full">
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
    </div>
  )
}

export default CustomerProfile