import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;   
`

function App() {
  return (
    <div style={{padding:'2rem'}}>
      <BasicTitle>Styled Component</BasicTitle>
      <button className='btn'>click me</button>
    </div>
  );
}

export default App;
