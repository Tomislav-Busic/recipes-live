import React from 'react';


const Health = ({healthLabels}) => {
    return(
          <div>
              <ul>
                  {healthLabels.map(health =>
                    <li>{health}</li>)}
              </ul>
          </div>
    );
}

export default Health;