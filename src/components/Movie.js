import React from 'react'
import '../styles/Movie.css'

function Movie({ propsid, propsimage, propstitle, propsyear, propsgenres, propssummary}) {
   return (
   <div className = 'movie' id={propsid} >
      <img src={propsimage} alt={propstitle} title={propstitle} />
      <div className = 'movie_data'>
         <h3 className='movie_title'>{propstitle} </h3>
         <h4 className='movie_year'>{propsyear}</h4>
         <ul className='movie_genres'>
            {propsgenres.map( (propsgenre, index) => (
               <li className='movie_genre' key={index}>{propsgenre}</li>
            ))
            }
         </ul>
         <p className='movie_summary'>{propssummary.slice(0, 180)}...</p>
      </div>
   </div>
   )
}

export default Movie