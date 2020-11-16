import React, { Component } from "react";
import axios from "axios";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitForm(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Thank you, your movie added under id: ${res.id} `);
      })
      .catch((e) => {
        console.error(e);
        alert(`Error while adding the movie ${e.message}`);
      });
  }
  render() {
    return (
      <div className='form'>
        <h1>Add your Favorite Movie !</h1>
        <form onSubmit={this.submitForm} className='form-data'>
          <label htmlFor='title'>Title :</label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Movie title'
            value={this.state.title}
            onChange={this.onChange}
          />
          <label htmlFor='poster'>Poster : </label>
          <input
            id='poster'
            type='url'
            name='poster'
            placeholder='http://example.com'
            value={this.state.poster}
            onChange={this.onChange}
          />
          <label htmlFor='comment'>Comment :</label>
          <textarea
            id='comment'
            name='comment'
            onChange={this.onChange}
          ></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}
