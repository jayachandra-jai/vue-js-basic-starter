<template>
  <v-container>
    <v-row>
      <v-col>
        <v-heading>Contact Us:</v-heading>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="require('@/assets/me.jpg')" alt="Developer Image" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>K.Jayachandra</v-list-item-title>
                <v-list-item-subtitle>Fullstack Developer</v-list-item-subtitle>
                <v-list-item-subtitle>9000204595</v-list-item-subtitle>
                <v-list-item-subtitle>jayachandra.jai18@gmail.com </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
          </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
v-heading {
  font-weight: bold;
  display: block;
}
</style>
