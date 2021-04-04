import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'

const Main = () => {
    return (
        <div className="main">
            <div className= "upperNav">dummy test</div>
            <div className= "mainContent">
            <div className= "cardsWrap">
            <h1> Uniquely Yours</h1>
                 <div className= "card">
                     <div className= "cardImage">
                    <img 
                    src= "https://images.unsplash.com/photo-1562571046-d34f606e7693?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" 
                    alt="Pic 1"
                    />
                          
                     </div>
                     <div className="cardContent"> 
                     <h3>Liked Songs</h3>
                     </div>
                     <span className= "playIcon">
                         <PlayIcon />
                    </span>
                 </div>
            </div>
            <div className= "cardsWrap">
            <h2> Focus</h2>
            <span className = "seeAll">SEE ALL</span>
            <p className = "subText" > Music to help you concentrate. </p>
            <div className="cardsWrapInner" >
                 <div className= "card">
                     <div className= "cardImage">
                    <img 
                    src= "https://images.unsplash.com/photo-1562571046-d34f606e7693?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" 
                    alt="Pic 1"
                    />
                          
                     </div>
                     <div className="cardContent"> 
                     <h3>Music for concentration</h3>
                     <span  > Music to help you concentrate. </span>
                    
                     </div>
                     <span className= "playIcon">
                         <PlayIcon />
                    </span>
                 </div>
                 <div className= "card">
                     <div className= "cardImage">
                    <img 
                    src= "https://images.unsplash.com/photo-1562571046-d34f606e7693?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" 
                    alt="Pic 1"
                    />
                          
                     </div>
                     <div className="cardContent"> 
                     <h3>Music for concentration</h3>
                     <span  > Music to help you concentrate. </span>
                     </div>
                     <span className= "playIcon">
                         <PlayIcon />
                    </span>
                 </div>
                 </div>
                 </div>
            </div>
        </div>
    )
}

export default Main