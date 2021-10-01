import React from "react";
import Base from "./Base.svg";
import Bottom1 from "./Bottom1.svg";
import Bottom2 from "./Bottom2.svg";
import Top1 from "./Top1.svg";
import Top2 from "./Top2.svg";
import Blop1 from "./Blop.svg";
import Blop2 from "./Blop2.svg";
import XGroup from "./x-group.svg";
import X from "./x.svg";
import Corner from "./corner.svg";
import PropTypes from "prop-types";

const svg = {
  Base,
  Bottom1,
  Bottom2,
  Top1,
  Top2,
  Blop1,
  Blop2,
  XGroup,
  X,
  Corner,
};

export default svg;

export function XSvg({ classes }) {
  return (
    <svg
      className={classes}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.11 1L1 23.12"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M23.11 23.12L1 1"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  );
}

XSvg.defaultProps = {
  classes: "",
};

XSvg.propTypes = {
  classes: PropTypes.string,
};
