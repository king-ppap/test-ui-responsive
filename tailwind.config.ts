import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            display: ['group-hover'],
            screens: {
                mobile: { min: '0px', max: '425px' },
                tablet: { min: '426px', max: '768px' },
                desktop: { min: '769px' },
            },
            transitionProperty: {
                width: 'width',
                height: 'height',
                margin: 'margin',
            },
            boxShadow: {
                navbar: '0 4px 10px 0px rgba(132, 132, 132, 0.1)',
                main: '0 4px 20px 0 rgba(132, 132, 132, 0.2)',
                droptable: '0px 0px 20px 4px rgba(132, 132, 132, 0.07)',
            },
            fontFamily: {
                roboto: 'Roboto',
            },
            colors: {},
        },
    },
    plugins: [],
};
