

const TypeText = (string) =>{
  let letterArr = [];
  for(let i =0 ; i< string.length ; i++ ){
    letterArr.push(string.charAt(i));
  }
  return letterArr;
  
}  


export const RenderEachChar = (string) =>{
return TypeText(string).map((letter,i)=>
  letter ===' ' ? ( <span key={i} id='letter' className='hidden'>&nbsp;</span>):
  (
  <span key={i} id='letter' className='hidden'>{letter}</span>
))
}
export const RenderEachWord = (Arr,from) =>{
  
return Arr.map((word,i)=>
   ( <span key={i} id={`word${i}`} className="word" style={{display: "none" }}>{RenderEachIntroChar(word,from)}&nbsp;</span>)
)
}

 const RenderEachIntroChar = (string,from) =>{
  return TypeText(string).map((letter,i)=>
    letter ===' ' ? ( <span key={i} id={from === "intro" ? "intro-letter" : "about-letter"} className={from === "intro" ? "intro-letter" : "about-letter"}  style={{display: "none" }} >&nbsp;</span>):
    (
    <span key={i} className={from === "intro" ? "intro-letter" : "about-letter"}  id={from === "intro" ? "intro-letter" : "about-letter"} style={{display: "none" }}>{letter}</span>
  ))
  }

