module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      backgroundImage :{
        'background-pic' : "url('assets/milkteabg.png')",
        'background-body' : "url('assets/woodBackground.jpg')"
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif'],
        'lobster' : ['Lobster', 'cursive']
      }
    },
  },
  plugins: [],
}