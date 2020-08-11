import React from "react";


import NavLinks from "./navLink";

class UserList extends React.Component {
  render() {
    let style = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      padding: "1rem",
      gridGap: "1rem 1rem"
    };

    return (
      <div>
        <NavLinks />
        <ul style={style}>
          {this.props.list.map(user => {
            return (
              <li key={user.id}>
                <div>
                  <img className="thumb" alt="" src={user._links.avatar.href} />
                </div>

                <div className="userInfo">
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                </div>
                <button onClick={() => this.props.addFavorite(user)}>
                  Add to Favorites
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default UserList;
