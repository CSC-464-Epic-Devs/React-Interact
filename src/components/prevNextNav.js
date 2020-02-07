import React from "react";
import HighLightLink from "components/highLightLink";

function PrevNextNav(props) {
  const checkFor = ["prev", "home", "next"];
  const displayAs = { prev: "previous", home: "home", next: "next" };

  return (
    <div {...props} style={{ display: "flex" }}>
      {checkFor.map(p =>
        p in props ? (
          <HighLightLink
            style={{ flexGrow: 1, textAlign: "center" }}
            href={props[p]}
          >
            {displayAs[p]}
          </HighLightLink>
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default PrevNextNav;
