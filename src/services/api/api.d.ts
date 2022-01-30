

declare module 'api' {

    interface Thumbnail {
        path: string;
        extension: string;
    }

    export interface ComicProps {

    }

    export interface SeriesProps {

    }

    export interface StoriesProps {

    }

    export interface EventsProps {

    }

    export interface HeroProps {
        id: number;
		name: string;
		description: string;
		modified: string;
        thumbnail: Thumbnail;
        resourceURI: string;
        comics: ComicProps;
        series: SeriesProps;
        stories: StoriesProps;
        events: EventsProps;
        urls: [any];
    }

    export interface ResponseProps {    
       offset: number;
       limit: number;
       total: number;
       count: number;
       results: [HeroProps];
    }
    
}