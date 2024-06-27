import React from "react";
import Badge from "react-bootstrap/Badge";

function Tag({ text }) {
  return <Badge pill variant="info" style={{ marginRight: "5px" }}>{text}</Badge>;
}

export default Tag;