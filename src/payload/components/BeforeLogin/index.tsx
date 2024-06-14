import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        <b>Bienvenido al dashboard!</b>
        {' Solo admin'}
        <a href={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/login`}>log in to the site instead</a>
        {''}
      </p>
    </div>
  )
}

export default BeforeLogin
