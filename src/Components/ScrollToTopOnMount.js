import React from "react";

function ScrollToTopOnMount() {
    React.useEffect(() => {
        //console.log('ScrollToTopOnMount');
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export default ScrollToTopOnMount;
