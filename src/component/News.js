import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { useEffect,useState  } from 'react';
export class News extends Component {
    article=[ 
        
       
        {
        "source": {
        "id": null,
        "name": "Architectural Digest"
        },
        "author": "Tim Nelson",
        "title": "New York City May Be Sinking Under the Weight of Its Skyscrapers",
        "description": "A scientific journal suggests that the city’s 1.68 trillion pounds of buildings are causing the city to descending, with some neighborhoods faster than others",
        "url": "https://www.architecturaldigest.com/story/newyorkcitymaybesinkingunderweightskyscrapers",
        "urlToImage": "https://media.architecturaldigest.com/photos/64653c7cd5968d5d7acd4530/16:9/w_1280,c_limit/GettyImages1347979016%20(1).jpg",
        "publishedAt": "20230518T02:14:32Z",
        "content": "From the Financial Districts skyhigh centers of economic power to the pricey pads that rise above Billionaires row, the great volume of towering buildings is part of what gives New York City its ide… [+2315 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Duckdb.org"
        },
        "author": "Mark Raasveldt and Hannes Mühleisen",
        "title": "DuckDB 0.8.0",
        "description": "The DuckDB team is happy to announce the latest DuckDB release (0.8.0). This release is named “Fulvigula” after the Mottled Duck (Anas Fulvigula) native to the Gulf of Mexico. To install the new version, please visit the installation guide. The full release n…",
        "url": "https://duckdb.org/2023/05/17/announcingduckdb080.html",
        "urlToImage": "https://duckdb.org/images/sharingduckdb.jpg",
        "publishedAt": "20230518T02:23:21Z",
        "content": "The DuckDB team is happy to announce the latest DuckDB release (0.8.0). This release is named Fulvigula after the Mottled Duck (Anas Fulvigula) native to the Gulf of Mexico.\r\nTo install the new versi… [+8132 chars]"
        }
        ]
       
    constructor()
    {
      super();
      console.log("hello i am a cunstructor")
     
      this.state= {
       article :this.article,
       loading: false
      }
    }
  
  render() {
    return (
      <div className ="container my-3 border:yellow ">
 
        <div className='row'>
        {this.state.article.map((Element)=>{
        return <div className='col-md-3'  key={Element.url} >
        <Newsitem title={Element?Element.title:" "} description={Element.description?Element.description:" "} imageurl={Element.urlToImage} Newsurl={Element.url}/>
           </div>
        })}    
        </div>
      </div>
    ) 
  }
}

export default News