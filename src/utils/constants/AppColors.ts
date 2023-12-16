
export interface MaterialColor {
    shade50: string
    shade100: string
    shade200: string
    shade300: string
    shade400: string
    shade500: string
    shade600: string
    shade700: string
    shade800: string
    shade900: string
}

export interface colorValue {
    WHITE: string
    ON_SURFACE: string
    ON_SURFACE_38:string
    PRIMARY: MaterialColor
}

export const Colors: colorValue = {
    WHITE: "#fbfbfc",
    ON_SURFACE: "#334155",
    ON_SURFACE_38:'rgba(51, 65, 85, 0.38)',
    PRIMARY: {
        shade50: '#eef4fe',
        shade100: '#c9dcfb',
        shade200: '#afcbf9',
        shade300: '#8ab3f7',
        shade400: '#73a5f5',
        shade500: '#508ef3',
        shade600: '#4981dd',
        shade700: '#3965ad',
        shade800: '#2c4e86',
        shade900: '#223c66',
    }
}
