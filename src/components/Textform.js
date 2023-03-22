import React ,{ useState }from 'react'

export default function Textform(props) {
    const handleupclick =() =>{
        console.log("uppercase was clicked " + text)
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handledownclick =() =>{
      console.log("uppercase was clicked " + text)
      let newtext = text.toLowerCase();
      setText(newtext)
  }
  const  handlecleartext=() =>{
    console.log("text cleared  " )
    let newtext = (" ");
    setText(newtext)
}
const removeextraspaces=() =>{
  console.log("text cleared  " )
  let newtext= (text.replace(/\s+/g,' ').trim());
  setText(newtext)
}
    const handleonChange =(event) =>{
      // console.log(" on change ");
      setText(event.target.value);
  }
    const [text, setText] = useState('enter the value here' )
    // setText("this is it ");
  return (
    <>

    < div className="container"  style ={{color: props.mode === 'dark' ?'white': 'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange ={handleonChange} style ={{backgroundColor :props.mode === 'dark' ?'grey': 'white',color: props.mode === 'dark' ?'white': 'rgb(17 24 39)'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 " onClick={handleupclick}>convert to uppercase  </button>
<button className="btn btn-primary mx-2" onClick={handledownclick}>convert to lowercase  </button>
<button className="btn btn-primary mx-2" onClick={handlecleartext}>clear text </button>
<button className="btn btn-primary mx-2" onClick={removeextraspaces}>remove spaces  </button>
</div>
<div className="container my-3"  style ={{color: props.mode === 'dark' ?'white': 'black'}}>
  <h1>your text summary </h1>
  <p>{ text.split(" ").length}words and {text.length}character</p>
  <p>{0.008 * text.split(" ").length} </p>
  <h2>preview</h2>
  <p>{text}</p>
</div>
</>
  )
}

