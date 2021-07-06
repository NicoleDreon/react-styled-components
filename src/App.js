import styled from 'styled-components'
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons'

function App() {
  return (
    <div style={{padding:'2rem'}}>
      <BasicTitle special>Styled Component</BasicTitle>
      <DefaultButton>Click Me</DefaultButton>
      <HipsterButton>Click Me</HipsterButton>
    </div>
  );
}

export default App;
