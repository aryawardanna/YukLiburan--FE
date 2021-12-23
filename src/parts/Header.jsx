import BrandIcon from 'parts/IconText';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default function Header(props) {
  //   const getNavLinkClass = (path) => {
  //     return props.location.pathname === path ? 'active' : '';
  //   };<
  if (props.isCentered)
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="brand-text-icon mx-auto" to="" type="link">
              Liburan<span className="text-gray-900">Yuk!</span>
            </Link>
          </nav>
        </div>
      </header>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item `}>
                  <Link className="nav-link" type="link" to="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link className="nav-link" type="link" to="/browse-by">
                    Browse By
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link className="nav-link" type="link" to="/stories">
                    Stories
                  </Link>
                </li>
                <li className={`nav-item `}>
                  <Link className="nav-link" type="link" to="/agents">
                    Agents
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
