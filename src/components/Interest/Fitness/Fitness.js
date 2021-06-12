import React from 'react'
import "./Fitness.css"

function Fitness() {
    return (
        <div className="fitness">
           <div className="fitness__items">
               <p>Active Recovery</p>
               <p>Aerobic Exercise</p>
               <p>Anaerobic Exercise</p>
               <p>Boot Camp</p>
               <p>Circuit</p>
           </div>
           <div className="fitness__items">
               <p>Compound Exercise</p>
               <p>Cool-Down</p>
               <p>Cross-Training</p>
               <p>DOMS</p>
               <p>Dynamic Warm-up</p>
           </div>
           <div className="fitness__items">
               <p>Foam Rolling</p>
               <p>Functional Moves</p>
               <p>Heart Rate Zones</p>
               <p>HIIT</p>
               <p>Interval Training</p>
           </div>
            <div className="fitness__items">
               <p>Isometrics</p>
               <p>Plyometrics</p>
               <p>Reps</p>
               <p>Resistance</p>
               <p>RPE</p>
           </div>
           <div className="fitness__items">
               <p>Sets</p>
               <p>Steady State Cardio</p>
               <p>Strength Training</p>
               <p>Super Set</p>
               <p>Tabata</p>
           </div>
        </div>
    )
}

export default Fitness
