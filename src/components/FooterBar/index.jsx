import { Link } from 'react-router-dom'
import React from 'react'
import './style.css'

export default class FooterBar extends React.Component {
  render() {
    return (
      <div className="foot-bar-main" >
        <Link className="foot-bar-link home" to="/" > </Link>
        <Link className="foot-bar-link classification" to="/classification" ></Link>
        <Link className="foot-bar-link ticket" to="/ticket" ></Link>
        <Link className="foot-bar-link cinema" to="/cinema" ></Link>
        <Link className="foot-bar-link mine" to="/mine" ></Link>
      </div>
    )
  }
}