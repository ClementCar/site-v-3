import { animate, style, transition, trigger } from "@angular/animations";

export const inOutOpac = trigger('inOutOpac', [
    transition(':enter', [
        style({ opacity: 0}),
        animate('.3s ease', style({ opacity: 1}))
    ]),
    transition(':leave', [
        style({opacity: 1}),
        animate('.3s ease', style({ opacity: 0}))
    ])
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

// export const inLeftBottom = trigger('inLeftBottom', [
//     transition(':enter', [
//         style({ opacity: 0, transform: 'translate(-25%, 25%)' }), // Position plus éloignée pour un meilleur effet
//         animate(
//             '.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Courbe plus fluide
//             style({ opacity: 1, transform: 'translate(0, 0)' })
//         )
//     ]),
//     transition(':leave', [
//         style({ opacity: 1, transform: 'translate(0, 0)' }),
//         animate(
//             '.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Même courbe en sortie
//             style({ opacity: 0, transform: 'translate(-25%, 25%)' })
//         )
//     ])
// ]);