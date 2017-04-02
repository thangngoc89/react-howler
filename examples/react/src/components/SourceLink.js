import React from 'react'

const SourceLink = (props) => {
  const { fileName, ...otherProps } = props

  return (
    <a
      href={`https://github.com/thangngoc89/react-howler/blob/master/examples/react/src/players/${fileName}.js`}
      className='source-link'
      {...otherProps}
    >
      Source
    </a>
  )
}

export default SourceLink
