import React from 'react'
import './subscribe-form.scss';

export const SubscribeForm = () => {
  return (
    <form action="#" className="subscribe-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <button className="button" type="submit">Submit</button>
    </form>
  )
};