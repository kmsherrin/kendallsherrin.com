module.exports = {
    purge: 
    {
      enabled: process.env.NODE_ENV === 'production',
      content: ["./src/**/*.svelte"],
    },
    theme: {
      extend: {
        colors: {
          orange: {
            500: "#ff3e00",
          },
        },
      },
    },
    variants: {},
    plugins: [],
  };
  