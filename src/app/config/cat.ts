import { Project } from "./projects";

export const cats: Cat[] = [
    {
        name: 'Projets Angular',
        description: '',
        image: '',
        projects: [
            {
                name: 'test',
                description: '',
                images: ['']
            }
        ]
    },
    {
        name: 'Projets Wordpress',
        description: '',
        image: '',
        projects: [
            {
                name: 'test',
                description: '',
                images: ['']
            }
        ]
    },
    {
        name: 'Projets Wix',
        description: '',
        image: '',
        projects: [
            {
                name: 'test',
                description: '',
                images: ['']
            }
        ]
    },
    {
        name: 'Projets Others',
        description: '',
        image: '',
        projects: [
            {
                name: 'test',
                description: '',
                images: ['']
            }
        ]
    }
]

export interface Cat {
    name: string,
    description: string,
    image: string,
    projects: Project[]
}