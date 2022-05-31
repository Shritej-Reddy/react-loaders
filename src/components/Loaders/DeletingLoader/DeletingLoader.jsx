import React from 'react'
import './DeletingLoader.scss'

function DeletingLoader(props) {
  return (
    <div>
        <div class="cont">
            <div class="paper"></div>
            <button><div class='loader'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>Deleting</button>
            <div class="g-cont">
                <div class="garbage"></div>
                <div class="garbage"></div>
                <div class="garbage"></div>
                <div class="garbage"></div>
                <div class="garbage"></div>
                <div class="garbage"></div>
                <div class="garbage"></div>
                <div class="garbage"></div>
            </div>
        </div>
    </div>
  )
}

export default DeletingLoader