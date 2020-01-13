import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
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
              <a href="/new-post">New Post</a>
            </li>
          </ul>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
