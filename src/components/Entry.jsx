import React from 'react';


function Entry(props) { //App will send props named emoji, name, and meaning, and we are going to use them to display information in our Entry component
  return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
  )
}



export default Entry;