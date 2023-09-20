import Github from "../Icons/github";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";

import "./RedirectButtons.css";
const Icons = { Github, LinkedIn, Email };

function RedirectPage(props) {
  const { urls } = props;
  const genButtons = () => {
    return Object.entries(urls).map(([title, url]) => {
      const IconComponent = Icons[title];
      return (
        <div key={title}>
          <button
            className="link-button"
            key={title}
            onClick={() => window.open(url, "_blank")}
          >
            {IconComponent && <IconComponent className="link-icon"/>}
            {title}
          </button>
        </div>
      );
    });
  };

  return <div className="link-button-wrapper">{genButtons()}</div>;
}

export default RedirectPage;
