import { useState } from "react";
import { ThemeContext } from "./contexts";

function ThemeContextProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>

    );
}

export default ThemeContextProvider;