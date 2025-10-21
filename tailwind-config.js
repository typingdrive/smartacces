tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#e26d00ff',
                secondary: '#f59e0b',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'fade-in-left': 'fadeInLeft 0.8s ease-out',
                'fade-in-right': 'fadeInRight 0.8s ease-out',
                'zoom-in': 'zoomIn 0.8s ease-out',
                'slide-in-bottom': 'slideInBottom 0.8s ease-out',
            }
        }
    }
}
