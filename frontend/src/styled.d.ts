import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        boxSizing: string;
        position: string;

        colors: {
            main: string;
            secondary: string;
        };
    }
}