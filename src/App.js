import styled from 'styled-components/macro'
import {HipsterButton} from './components/Buttons'

function App() {
  return (
   <div style={{padding:'2rem'}}>
     <HipsterButton css={`color:green;`} as='a' href="https://perficient.udemy.com/course/styled-components-tutorial-and-project-course/learn/lecture/26538166#overview">click me</HipsterButton>
     <HipsterButton>click me</HipsterButton>
     <HipsterButton>click me</HipsterButton>
     <div css={`color:green`}>
       <h2>hello world</h2>
     </div>
   </div>
  );
}

export default App;
