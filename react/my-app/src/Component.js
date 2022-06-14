import './App.css'
function Component(props) {
  function onsubmit(){
    alert("Thanks we will get back to you soon")
    console.log('Clicked submit btn');
    return false;
  }
  return (
    <body>
    <h1>{props.title}</h1>
    <div className="App">
      <form onSubmit={onsubmit}>
        <label htmlFor="fname">First Name:&emsp;</label>
        <input type="text"  name="fname" id="fname"/>
        <br /><br/>
        <label htmlFor="lname">Last Name:&emsp;</label>
        <input type="text"  name="lname" id="lname"/>
        <br />
        <br />
        <input type="submit" value="Submit" id="submit"  o />
      </form><br/> 
    </div></body>
  );
}
export default Component;
