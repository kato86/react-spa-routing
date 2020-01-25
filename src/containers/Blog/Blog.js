import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
import "./Blog.css";

const NewPost = React.lazy(() => import("./NewPost/NewPost"));
// import asyncComponent from "../../hoc/asyncComponent";
// import NewPost from "./NewPost/NewPost";

// const AsyncNewPost = asyncComponent(() => {
//   return import("./NewPost/NewPost");
// });

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <NavLink
                to="/posts"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: "#fa923f",
                  textDecoration: "underline"
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true"
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Switch>
          <Route
            path="/new-post"
            render={() => (
              <Suspense fallback="Loading...">
                <NewPost />
              </Suspense>
            )}
          />

          <Route path="/posts" component={Posts} />
          <Route
            render={() => (
              <h1 style={{ textAlign: "center", color: "orangered" }}>
                404 Page not found
              </h1>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Blog;
