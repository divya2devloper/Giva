import React from 'react'
import Chevron from "../../../public/icons/chevron.svg"
const MobileCategories = () => {
  return (
    <div className='sm:hidden h-full overflow-y-scroll'>
        <details className='mb-8'>
  <summary className='flex justify-between'><span>Shop By Categories</span></summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

<details className='mb-8'>
  <summary className='flex justify-between'><span>Men's Jwellery</span></summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

<details className='mb-8'>
  <summary className='flex justify-between'><span>Gold Jwellery</span></summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

<details  className='mb-8'>
  <summary className='flex justify-between'><span>Gift Store</span></summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

    </div>
  )
}

export default MobileCategories