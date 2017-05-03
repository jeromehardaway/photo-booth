import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "\"Open Sans\", Helvetica, Arial, sans-serif",
        "background": "url('../img/bg.jpeg') no-repeat center center fixed",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover"
    },
    "h1": {
        "fontFamily": "\"Josefin Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontSize": 4
    },
    "h2": {
        "fontFamily": "\"Josefin Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "h3": {
        "fontFamily": "\"Josefin Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "h4": {
        "fontFamily": "\"Josefin Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "h5": {
        "fontFamily": "\"Josefin Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "h6": {
        "fontFamily": "\"Josefin Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "text-heading": {
        "fontFamily": "\"Josefin Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "tagline-upper": {
        "fontSize": 5,
        "fontWeight": "700",
        "lineHeight": 1
    },
    "tagline-lower": {
        "fontSize": 1.2,
        "lineHeight": 1
    },
    "text-expanded": {
        "letterSpacing": 2
    },
    "text-shadow": {
        "textShadow": "1px 1px 2px rgba(0, 0, 0, 0.5)"
    },
    "text-lg": {
        "fontSize": 1.25
    },
    "bg-faded": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)"
    },
    "bg-overlay": {
        "backgroundColor": "rgba(0, 0, 0, 0.7)"
    },
    "hrdivider": {
        "borderColor": "#292b2c",
        "maxWidth": 250
    },
    "map-container iframe": {
        "pointerEvents": "none"
    },
    "map-container iframeclicked": {
        "pointerEvents": "auto"
    }
});