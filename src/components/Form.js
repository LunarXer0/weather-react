import React, { Component } from "react";

const Form = ({ getWeather }) => (
  <div>
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country.." />
      <button>Get Weather</button>
    </form>
  </div>
);

export default Form;
