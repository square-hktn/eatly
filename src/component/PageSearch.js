import React from 'react'

function PageSearch() {
  return (
    <div class="search-input">
     
        <img src={require("../assets/Search.png")} alt="search"/>
        <input type="text" class="w-full ml-2"/>
      
    </div>
  )
}

export default PageSearch