import { useState } from "react";
import { ThemeContext } from "./contexts";

function ThemeContextProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>

    );
}

export default ThemeContextProvider;