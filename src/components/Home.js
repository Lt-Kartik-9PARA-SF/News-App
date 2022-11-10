import React, { useEffect, useState } from 'react'

import News from './News';

function Home(props) {
  const[news , setNews] =  useState([]);
 

 useEffect(()=>{
  getData();
  console.log("worked");
 },[]);
 
  const getData =  async() => {

    console.log("get data start")
    let apiData = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=1a2ccf36fccb4f4c91386bf1fd6b3ac3')
    .then(response => response.json())
    .then((response) => {return response.articles;})
    .catch(err => console.error(err));
    console.log("get data finish");
    setNews(apiData)
    
  }
  console.log(news)
 // console.log(news.map((ele)=>{return  ele.author }));

  return (
    <div>
        <div className='left'>
          <h1>Top Headlines Today</h1>
        </div>

          <div className='right'>

        {
          news.map((ele) =>{
            return(
              <News title={ele.title} description = {ele.description} content={ele.content} url = {ele.url} image = {ele.urlToImage}/>
            );
          } )
        }
        
        </div>
    </div>
  )
}

export default Home