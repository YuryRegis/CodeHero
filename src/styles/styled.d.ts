import 'styled-components'


declare module 'styled-components' {
    
    interface Spacing {
        s: number;
        m: number;
        l: number;
        ml: number;
        xl: number;
    }

    interface Metrics {
        body: number;
        title: number;
        avatar: number;
        text: number;
        counter: {
            size: number;
            text: number;
        };
        input: {
            height: number;
            width: number;
        };
        section: {
            titleHeight: number;
            bodyHeight: number;
        };
        line: {
            width: number;
            height: number;
        };
        playButton: {
            width: number;
            height: number;
        };
    }

    export interface DefaultTheme {
    title: string;
    spacing: Spacing;
    colors: {
            textAlternative: string;
            playButton: string;
            background: string;
            borderBox: string;
            white: string;
            text: string;
        };
    font: {
            bold: string;
            light: string;
            regular: string;
        };
    metrics: Metrics;
    }
}