export const skills: Skill[] = [
    { name: 'Angular', icon: ['logo-angular'], ionic: true, color: '#DD0031'},
    { name: 'Ionic', icon: ['logo-ionic'], ionic: true, color: '#3880FF'},
    { name: 'HTML5', icon: ['logo-html5'], ionic: true, color: '#E34F26'},
    { name: 'CSS3', icon: ['logo-css3'], ionic: true, color: '#1572B6'},
    { name: 'Javascript, Typescript', icon: ['logo-javascript'], ionic: true, color: '#F7DF1E'},
    { name: 'Bootstrap', icon: ['fa-brands fa-bootstrap'], ionic: false, color: '#7952B3' },
    { name: 'Git', icon: ['fa-brands fa-git-alt'], ionic: false, color: '#F05032' },
    { name: 'NodeJS', icon: ['logo-nodejs'], ionic: true, color: '#339933' },
]


export interface Skill{
    name: string,
    icon: string[],
    ionic: boolean, 
    color: string
}