import React from 'react'
import './LoadingStyle3.scss'

function LoadingStyle3() {
  return (
    <div>
        <div class="loader">
            <div class="bubble">
                <div class="bubble__shine bubble__shine--lg"></div>
                <div class="bubble__shine bubble__shine--sm"></div>
            </div>
            <p class="text"> Lo<span class="text__highlight">a</span>din<span class="text__highlight">g</span></p>
        </div>
    </div>
  )
}

export default LoadingStyle3