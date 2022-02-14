import {useEffect, useState} from "react";

import {Repos} from './style'


 function Repositories() {
  const [repositories,setRepositories] = useState([])
   
  useEffect(() => {
    fetch('https://api.github.com/users/Rodrigoreeboucs/repos')
    .then((response) =>response.json())
    .then(data => setRepositories(data))
  },[])


  return (
   
    <Repos>
    <div>
      <ul>
        {repositories.map(repository =>{
          return (
            <li>
              <h3>{repository.name} <button>Favorite</button></h3>
              <p>{repository.stars}</p>
              <p>{repository.fork}</p>
              <p>{repository.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
    </Repos>
   
  )
  }

  export default  Repositories