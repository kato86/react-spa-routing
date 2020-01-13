import React, { Component } from "react";
import axios from "axios";

import Posts from "./Posts/Posts";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">New Post</a>
            </li>
          </ul>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
