import React from 'react'
import { Link } from 'react-router-dom'
export default function Body() {
  return (
    <div>
    <Link to='/'><li>home</li></Link>
      <Link to='/yosh'><li>yosh</li></Link>
      body
    </div>
  )
}
