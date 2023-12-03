import React, { useState, useEffect } from 'react';
import './App.css';

function drawer(){
  try{
    console.log("Hi")
    const canvas = document.querySelector('canvas');
    console.log(canvas)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c = canvas.getContext('2d');
    for(let x = 0; x < canvas.width; x+=10){
      for(let y = 0; y < canvas.height; y+=10){
        c.beginPath();
        c.arc(x, y, 2, 0, Math.PI * 2, false);
        c.fill();
        c.closePath();
      }
    }
  } catch(error){
    console.log("canvas is null")
  }
}

function App() {
  useEffect(() =>{
    drawer();
  });
  return (
    <>
      <div>
        <canvas width={1280} height={760}></canvas>
      </div>
    </>
  );
};


export default App;
