import React, { useState, useEffect } from "react";

function RedirectPage(props) {  
  const [redirectTo, setRedirectTo] = useState(false);
  const title = Object.keys(props.urls);
  const url = props.urls.Kindacode; 
  
  console.log("title: ", title);
  console.log("url: ", url);

  useEffect(() => {
    if (redirectTo) {
      window.open(url, "_blank");
    }
    setRedirectTo(false);
  }, [redirectTo, url]);

  return (
    <div>
        <button onClick={() => setRedirectTo(true)}>yeet</button>
    </div>
  );
};

export default RedirectPage;
