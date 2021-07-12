import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
      <img src="https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52" alt='product'></img>
      <footer>
        <h4>product name</h4>
        <p>$555</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`
width: 90vw;
max-width: 300px;
background-color: var(--white);
border-radius: 0.25rem;
img {
  width: 100%;
  border-radius: 0.25rem .25rem 0 0;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  h4{
  text-transform: capitalize;
  }
  p{
    color: var(--primary);
    font-weight: 700;
  }
}
@media (min-width:768px){
  max-width: 600px;
}
`

export default Card