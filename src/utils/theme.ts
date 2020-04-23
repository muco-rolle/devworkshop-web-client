import { DefaultTheme } from "styled-components";
import { colors } from "theme/colors";
import { fonts } from "theme/fonts";

interface ITheme {
    theme: DefaultTheme;
}

// colors
export const color = (colorName: keyof typeof colors) => (props: ITheme) =>
    props.theme.light.colors[colorName];

// // fonts
export const font = (fontName: keyof typeof fonts) => (props: ITheme) =>
    props.theme.light.fonts[fontName];
