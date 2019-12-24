const { NavLink } = ReactRouterDOM;
export default function NavBar(props) {
  return (
    <div className="flex nav">
      <div className="flex">
        <img 
          className="navLogo"
          src="https://upload.wikimedia.org/wikipedia/he/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        />
        <h4 className="navText">The Book Store</h4>
      </div>
      <div className="flex">
        <NavLink className="navLink" activeClassName="active" to="../" exact>
          Main Page
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active"
          to="..‹/books"
          exact
        >
          Book List
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active"
          to="../about"
          exact
        >
          About
        </NavLink>
      </div>
    </div>
  );
}
