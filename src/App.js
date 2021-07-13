import styled from 'styled-components'
import {HipsterButton} from './components/Buttons'

function App() {
  return (
   <div style={{padding:'2rem'}}>
     <HipsterButton as='a' href="https://perficient.udemy.com/course/styled-components-tutorial-and-project-course/learn/lecture/26538166#overview">click me</HipsterButton>
     <HipsterButton>click me</HipsterButton>
     <HipsterButton>click me</HipsterButton>
   </div>
  );
}

export default App;
