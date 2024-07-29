import React, { createContext } from "react";

const LoadingContext = createContext({
    loadingComplete: false,
    setLoadingComplete: (value: boolean) => {},
});

export default LoadingContext;
