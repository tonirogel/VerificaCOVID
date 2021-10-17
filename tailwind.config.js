module.exports = {
    mode: 'jit',
    purge: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'gray-gene': '#919597',
                'bkg-success': 'bg-green-600',
                'bkg-warning': 'bg-yellow-300',
                'bkg-error': 'bg-red-600'
            }    
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
