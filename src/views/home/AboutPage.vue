<template>
  <v-container>
    <!-- Header -->
    <v-row>
      <v-col>
        <v-img src="require('@/assets/logo.png')" alt="App Logo" max-width="100" />
      </v-col>
    </v-row>

    <!-- Introduction -->
    <v-row>
      <v-col>
        <v-heading style="font-weight: bold;">About Our Todo App</v-heading>
        <v-paragraph>
          Welcome to our simple and effective todo app. Manage your tasks with ease and stay organized.
        </v-paragraph>
      </v-col>
    </v-row>

    <!-- Creators/Developers -->
    <v-row>
      <v-col>
        <v-heading>Developers</v-heading>
        <v-list>
          <v-list-item v-for="developer in developers" :key="developer.id">
            <v-list-item-avatar>
              <v-img :src="require('@/assets/me.jpg')" alt="Developer Image" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ developer.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ developer.role }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- Development Stack -->
    <v-row>
      <v-col>
        <v-heading>Development Stack</v-heading>
        <v-paragraph>
          Our todo app is built with Vue.js and Vuetify for the frontend. The backend is powered by Java Spark, and data is stored in cache.
        </v-paragraph>
      </v-col>
    </v-row>

    <!-- Version Information -->
    <v-row>
      <v-col>
        <v-heading>Version Information</v-heading>
        <v-paragraph>
          Version 1.0.0
        </v-paragraph>
      </v-col>
    </v-row>

    <!-- Acknowledgments -->
    <v-row>
      <v-col>
        <v-heading>Acknowledgments</v-heading>
        <v-paragraph>
          We would like to acknowledge the creators of Vue.js and Vuetify for providing excellent tools for web development.
        </v-paragraph>
      </v-col>
    </v-row>

    <!-- Contact Information -->
    <v-row>
      <v-col>
        <v-heading>Contact Us</v-heading>
        <v-paragraph>
          For support or feedback, please contact us at chandu180180@gmail.com
        </v-paragraph>
      </v-col>
    </v-row>

    <!-- Footer -->
    <v-row>
      <v-col>
        <v-footer>
          <v-col>
            <v-footer-title>&copy; 2024 Todo App</v-footer-title>
          </v-col>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      developers: [
        { id: 1, name: 'K.Jayachandra', role: 'Fullstack Developer', image: 'john-doe.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
v-heading {
  font-weight: bold;
  display: block;
}
</style>
