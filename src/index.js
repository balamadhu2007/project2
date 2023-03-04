import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart,Bar,XAxis,YAxis,Tooltip} from 'recharts'
import 'bootstrap/dist/css/bootstrap.css'
import book from './book.txt';
fetch(book).then(result=>result.text()).then(text =>{

   const characters={};
   for(const char  of  text){
     const charLowerCase = char.toLowerCase();
    characters[charLowerCase] =(characters[charLowerCase]||0)+1;


   }

   const data=Object.keys(characters).map(key =>{
     return {
       key,
       value:characters[key]

     };
   })
   .filter(entry=>{
       return (
            entry.key.charCodeAt(0)>='a'.charCodeAt(0) &&
            entry.key.charCodeAt(0)<='z'.charCodeAt(0) 
       )
   })




   

    data.sort((a,b)=>a.key.localeCompare(b.key))

    console.log('data', data);
   




  const App=()=>{

    return( 
       <div>
      <h1>"Moby Dick" Character Counts</h1>
      <BarChart width={600} height={400} data={data}>
      <XAxis dataKey="key"/>
      <YAxis />
      <Tooltip/>
      <Bar dataKey="value" />
      </BarChart>

    </div>
    );
  };



ReactDOM.render(<App/>, document.getElementById("root"))

})

