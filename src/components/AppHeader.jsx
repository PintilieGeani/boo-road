import { NavLink } from "react-router-dom";

function AppHeader(){
    const navbarLinks= [
        {
           title: "Home",
           url: "/"
        },
        {
            title: "Viaggi",
            url: "/Viaggi"
        },
        
    ]

 return (
<header>
     <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            <img src="/immagini/logo.png" alt="boolroad-logo" width="100" height="100" className="d-inline-block align-text-top" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navbarLinks.map((curLink, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={curLink.url}
                  >
                    {curLink.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
</header>
 );
}

export default AppHeader;

