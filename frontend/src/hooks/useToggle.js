import { useState } from "react";

const useToggle = (initialState = false) => {
    const [toggle, setToggle] = useState(initialState);
    const handleToggle = (toggleState = undefined) =>
        setToggle((prevState) =>
            typeof toggleState === "boolean" ? toggleState : !prevState
        );

    return [toggle, handleToggle];
};

export default useToggle;
