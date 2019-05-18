import React from "react";

// This NoMatch component is rendered when an invalid path is specified.
// It displays a 404 error message to the user.
function NoMatch() {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face with Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
  );
}

export default NoMatch;
