
const Test = () => {
  const tg = () => {
    let curr = localStorage.getItem('testSet');
    console.log(curr, "currLS")
    if(curr) {
      curr = JSON.parse(curr);
    } else {
      curr = [];
    }
    
    console.log(curr, "currcurr")
    let s = [...curr];
    s.push(1);
    localStorage.setItem('testSet', JSON.stringify(s));
    console.log('Clicked!', s)
  }
  console.log(localStorage.getItem('testSet'), "testSet")
  return (
    <div>
      Test
      <button onClick={() => tg()}>Click!</button>
    </div>
  )
}
export default Test;