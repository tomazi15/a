export const LOAD_SCREEN = 'LOAD_SCREEN';

export function loadScreen (screen) {
        return {
            type: LOAD_SCREEN,
            screen
        }; 
}