/**
 * The application's definition of the default color black.
 */
const BLACK = '#111111';
const darkerBlue = '#1A3D5C'; // 1A3D5C
const darkBlue = '#2C689C'; //2C689C
const lightOrange = '#FF9924'; // status bar and button highlight DF9847
// const lighterOrange = '#DF9847'; // not used 
// lightblue accent : 4098E4
// brighter orange: FF9924

/**
 * The application's color palette.
 */
export const ColorPalette = {
    /**
     * The application's background color.
     */
    appBackground: BLACK,

    /**
     * The application's definition of the default color black. Generally,
     * expected to be kept in sync with the application's background color for
     * the sake of consistency.
     */
    black: BLACK,
    blackBlue: darkerBlue,
    blue: darkBlue,
    blueHighlight: lightOrange,
    buttonUnderlay: '#495258',
    darkGrey: '#555555',
    green: '#40b183',
    lightGrey: '#AAAAAA',
    overflowMenuItemUnderlay: '#EEEEEE',
    red: '#D00000',
    transparent: 'rgba(0, 0, 0, 0)',
    warning: 'rgb(215, 121, 118)',
    white: '#FFFFFF',
    darkerBlue,
    darkBlue,
    lightOrange,

    /**
     * These are colors from the atlaskit to be used on mobile, when needed.
     *
     * FIXME: Maybe a better solution would be good, or a native packaging of
     * the respective atlaskit components.
     */
    G400: '#00875A', // Slime
    N500: '#42526E', // McFanning
    R400: '#DE350B', // Red dirt
    Y200: '#FFC400' // Pub mix
};
