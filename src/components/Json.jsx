import React from 'react'

function Json(props) {
    return(
        <div className="json">
            <p>JSON output:</p>
            <textarea defaultValue={props.data} readOnly></textarea>
        </div>
    )
}

export default Json