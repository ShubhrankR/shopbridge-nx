const {createGlobPatternsForDependencies} = require('@nrwl/angular/tailwind');
const {join} = require('path');

module.exports = {
    content: [
        join(__dirname, 'src/**/*.{html,ts}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                primary: 'hsla(162, 47%, 50%, 1)',
            },
        },
    },
    plugins: [require('tw-elements/dist/plugin')],
};
