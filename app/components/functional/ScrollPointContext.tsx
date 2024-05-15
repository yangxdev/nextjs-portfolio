import React from "react";

export const ScrollPointContext = React.createContext({
    scrollPoint: "",
    setScrollPoint: (scrollPoint: string) => {},
});
