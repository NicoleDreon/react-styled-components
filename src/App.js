import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;   
`
const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: .25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

function App() {
  return (
    <div style={{padding:'2rem'}}>
      <BasicTitle>Styled Component</BasicTitle>
      <DefaultButton>Click Me</DefaultButton>
    </div>
  );
}

export default App;
