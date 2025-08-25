/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlatformBlueskyColorNegative = ({
  color = "white",
  className,
}) => {
  return (
    <svg
      className={`platform-bluesky-color-negative ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.8576 6.06892C16.1772 10.1191 21.8992 18.3312 24 22.7383C26.1009 18.3315 31.8225 10.119 37.1424 6.06892C40.9808 3.14646 47.2 0.885231 47.2 8.08059C47.2 9.5176 46.3876 20.1522 45.9111 21.8787C44.2548 27.8812 38.2196 29.4122 32.8511 28.4856C42.2351 30.1053 44.6223 35.4704 39.4668 40.8355C29.6756 51.0249 25.394 38.2789 24.2964 35.013C24.0953 34.4142 24.0012 34.1341 23.9998 34.3723C23.9984 34.1341 23.9043 34.4142 23.7032 35.013C22.6061 38.2789 18.3246 51.0252 8.5328 40.8355C3.37728 35.4704 5.7644 30.1049 15.1486 28.4856C9.77992 29.4122 3.74456 27.8812 2.08856 21.8787C1.61207 20.1521 0.799683 9.51744 0.799683 8.08059C0.799683 0.885231 7.01904 3.14646 10.8573 6.06892H10.8576Z"
        fill={color}
      />
    </svg>
  );
};

PlatformBlueskyColorNegative.propTypes = {
  color: PropTypes.string,
};
