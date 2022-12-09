import React from 'react';
import MemeData from './MemeData';



export default function Meme() {
  // const [memeImg, setMemeIng] = React.useState("")
  const [meme,setMeme] = React.useState({
    topText: "",
    bottomText : "",
    randomImg : ""
  })

  const [allMemeImgs, setAllMemeImgs] = React.useState(MemeData)

  function getMemeImage() {
      const memesArr = allMemeImgs.data.memes
      const randomNum = Math.floor(Math.random()*memesArr.length)
      // setMemeIng(memesArr[randomNum].url)
      setMeme(prevMeme => {
        return {
          ...prevMeme,
          randomImg : memesArr[randomNum].url
        }
      })
  }
    return ( 
      <div>
        <main >
          <div className='meme--form'>
              <input className='meme--input' type="text" placeholder="top text"/>
              <input className='meme--input' type="text" placeholder="bottom text"/>
              <button onClick={getMemeImage} className='meme--btn'>Get a new meme image</button>
          </div>
          <img src={meme.randomImg}/>
        </main>

      </div>
    );
}