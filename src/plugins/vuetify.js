import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    options: {
        customProperties: true,
    },
    theme: {
        dark: false, // Set to true for dark theme
        themes: {
          light: {
            primary: '#301934', // Primary color
            secondary: '#4A148C', // Secondary color
            accent: '#FFFFFF', // Accent color
            appBarText: '#FFFFFF', // Set the text color for v-app-bar
            appBarIcon: '#FFFFFF',
          },
          dark: {
            primary: '#301934',
            secondary: '#4A148C',
            accent: '#FFFFFF',
            appBarText: '#FFFFFF', // Set the text color for v-app-bar
            appBarIcon: '#FFFFFF',
          },
        },
      },
});


