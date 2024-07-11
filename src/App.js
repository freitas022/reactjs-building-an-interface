import React, { useState } from "react";

function Checkbox() {

  const [checked, toggle] = useState((checked => !checked), false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default function App() {
  return <Checkbox />;
}