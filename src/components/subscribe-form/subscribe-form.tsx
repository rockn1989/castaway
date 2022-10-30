import React from 'react'
import './subscribe-form.scss';

const SubscribeForm = () => {
  return (
    <form action="#" className="subscribe-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="email" required />
      <button className="button" type="submit">Submit</button>
    </form>
  )
}

export default SubscribeForm;