import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    navbarHeight: "70px",
    mobileNavbarHeight: "55px",
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                fontSize: "16px",
            },
            text: {
                letterSpacing: "2px",
                borderRadius: 0,
                "&:hover": {
                    color: "rgb(230,230,230)",
                    backgroundColor: "inherit",
                },
            },
        },
    },
};

const darkTheme = createTheme({
    palette: {
        background: {
            default: "#1A1A1A ",
        },
        primary: {
            main: "#FF4C29",
            contrastText: "#fff",
        },
        secondary: {
            main: "#2C394B",
            contrastText: "#fff",
        },
        text: {
            primary: "#FFF",
            secondary: "rgb(200,200,200)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    backgroundSecondary: "rgb(43,43,43)",
    ...baseTheme
});

const lightTheme = createTheme({
    palette: {
        background: {
            default: "#DEBA9D ",
        },
        primary: {
            main: "#9E7777",
            contrastText: "#000",
        },
        secondary: {
            main: "#6F4C5B",
            contrastText: "#000",
        },
        text: {
            primary: "#000",
            secondary: "rgb(30,30,30)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    backgroundSecondary: {
        bg : "#6F4C5B",
        text: "#fff"
    },
    ...baseTheme
});

export { darkTheme, lightTheme };