import { animate, style, transition, trigger } from "@angular/animations";

export const inOutOpac = trigger('inOutOpac', [
    transition(':enter', [
        style({ opacity: 0}),
        animate('.9s {{delay}}ms ease', style({ opacity: 1}))
    ], { params: { delay: 0}}),
    transition(':leave', [
        style({opacity: 1}),
        animate('.9s {{delay}}ms ease', style({ opacity: 0}))
    ], { params: { delay: 0}})
])

export const inBottom = trigger('inBottom', [
    transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('.4s ease', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
        style({transform: 'translateY(0%)'}),
        animate('.4s ease', style({transform: 'translateY(100%)'}))
    ])
])

export const inLeft = trigger('inLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('.4s ease', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave' , [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('.4s ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ])
])

export const inLeftBottom = trigger('inLeftBottom', [
    transition(':enter', [
        style({opacity: 0, transform: 'translate(-20%,20%)'}),
        animate('.4s ease-in-out', style({opacity: 1, transform: 'translate(0,0)'}))
    ]),
    transition(':leave', [
        style({opacity: 1, transform: 'translate(0,0)'}),
        animate('.4s ease-in-out', style({opacity: 0, transform: 'translate(-20%, 20%'}))
    ])
])

export const inHeight = trigger('inHeight', [
    transition(':enter', [
        style({ height: 0}),
        animate('2s ease', style({height: 'calc(100% - 10px)'}))
    ]),
    transition(':leave', [
        style({height: 'calc(100% - 10px)'}),
        animate('2s ease', style({height: 0}))
    ])
])

export const inWidth = trigger('inWidth', [
    transition(':enter', [
        style({ width: 0}),
        animate('2.8s ease', style({width: 'calc(100% - 10px)'}))
    ]),
    transition(':leave', [
        style({width: 'calc(100% - 10px)'}),
        animate('2.8s ease', style({width: 0}))
    ])
])

export const inFull = trigger('inFull', [
    transition(':enter', [
        style({ width: 0, height: 0}),
        animate('.6s ease', style({width: '100%', height: '100%'}))
    ]),
    transition(':leave', [
        style({width: '100%', height: '100%'}),
        animate('.6s ease', style({width: 0, height: 0}))
    ])
])