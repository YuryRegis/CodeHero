interface Locale {
        ptBR: ILocale;
        enUS: ILocale;
};
interface ILocale {
    home: {
        header: {
            title: string;
            description: string;
        };
        input: {
            placeholder: string;
            label: string;
        };
        section: {
            title: string;
        }
    }
}


export const locale: Locale = {
    ptBR:
    {
        home: {
            header: {
                title: 'BUSCA MARVEL ',
                description: 'TESTE FRONT-END',
            },
            input: {
                label: 'Nome do Personagem',
                placeholder: '',
            },
            section: {
                title: 'Nome'
            }
        },
    },
    enUS: {
        home: {
            header: {
                title: 'SEARCH MARVEL ',
                description: 'FRONT-END TEST',
            },
            input: {
                label: 'Character Name',
                placeholder: '',
            },
            section: {
                title: 'Name'
            }
        },
    }
}

export default locale