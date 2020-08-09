import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div>
        Made with <FontAwesomeIcon icon="heart" color="red" size="0.6x" />{" "}
        <FontAwesomeIcon icon={["fab", "react"]} color="skyblue" />{" "}
        <FontAwesomeIcon icon={["fab", "node"]} color="skyblue" />
      </div>
      <div className="designed-by">Designed by REET</div>
      <div className="data-sync">
        Auto data sync to <FontAwesomeIcon icon="database" color="skyblue" />
      </div>
    </footer>
  );
};

export default Footer;
