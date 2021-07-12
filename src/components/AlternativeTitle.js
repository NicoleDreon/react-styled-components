import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({title, className}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
  h1{
    text-transform: capitalize;
    text-align: center;
  }
  div{
    width: 5rem;
    height: .25rem;
    background: #645cff;
    margin: 0 auto;
  }
`

export default Wrapper
