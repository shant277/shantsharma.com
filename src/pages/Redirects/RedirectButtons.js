import "./RedirectButtons.css";


function RedirectPage(props) {
  
  const  { urls } = props; 
  const genButtons = () => {
    return Object.entries(urls).map(([title, url]) => (
        <button className="link-button" key={title} onClick={() => window.open(url, "_blank")}>{title}</button>
    )); 
  };

  return (
    <div className="link-wrapper">
       {genButtons()}
    </div>
  );
}

export default RedirectPage;
