import React from 'react';
import {useState} from "react";
import ListCard from './ListCard';

function Add(){

    const [search, setSearch]=useState("");
    const [list, setList]=useState([]);
    function onSearch(event){
        event.preventDefault();
        setSearch(event.target.value);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '811ec074e8msh9a3565d455eebddp1fd6bajsnd44ab0dfd32b',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };

        fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${event.target.value}`, options)
        .then((res)=>res.json())
        .then((data)=>{
            if(!data.error){
                setList(data.d)
            } else{
                setList([]);
            }
        })
    }
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
            <div className='input-wrapper'>
                <input type="text"
                 placeholder="Search for a movie"
                 value={search}
                 onChange={onSearch}/>
            </div>
            {
                list.length > 0 && (
                    <ul className='list'>{list.map((movie)=>{
                        return (<li key={movie.l}>
                            <ListCard image={movie.i.imageUrl} title={movie.l} movie={movie}/>
                        </li>)
                    })}</ul>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default Add
