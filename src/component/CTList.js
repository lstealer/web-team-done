import React from "react";
const style=[{listStyleType:"circle"}]
function CTList(props) {
    return(
        <ul>
            {props.job.map((job)=>{
                return job.value?
                    <li key={job.id} style={style[0]}>
                        {job.name}
                    </li>:null
            })}
        </ul>
    )
}
export default CTList