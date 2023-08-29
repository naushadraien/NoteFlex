import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        if (word==="danger"){
        word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
        {/* //Here props.alert && just work as if else as if props.alert is null then don't execute the given div else execute the div and it is highly preffered by community */}
           {props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert