import React from 'react';
import './MovieRow.css';

function MovieRow({title,items})
{
    return(<div className='movieRow mb-5'>
        <h2 className='text-white mb-3'>{title}</h2>
        <div className='movieRow--listarena position-relative'>
            <div className='movieRow--list d-flex overflow-auto'>
                {items.results.length > 0 && items.results.map((item,key)=>(
                    <div key={key} className='movieRow--item me-2 flex-shrink-0'>
                        <img  style={{height:200}} className='img-fluid rounded shadow' src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        alt={item.original_title}
                        />
                    </div>
                    ))}
              </div>
        </div>
    </div>
  )
}

export default MovieRow;