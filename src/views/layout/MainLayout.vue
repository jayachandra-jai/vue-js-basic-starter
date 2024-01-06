<template>
  <v-app>
    <v-app-bar app 
      color="primary" 
      elevate-on-scroll
      style="color: #FFFFFF;">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>

      <v-app-bar-title>Jai' APP</v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon @click="openSearch" style="color: #FFFFFF;">
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn icon style="color: #FFFFFF; margin-right: 2px;">
        <v-avatar v-if="profile.avtarLink">
          <img
            :src="profile.avtarLink"
            alt="John"
          >
        </v-avatar>
        <v-avatar color="secondary" style="color: white;" v-else-if="profile.avtarLetter">
          <span class="text-h5">{{ profile.avtarLetter }}</span>
        </v-avatar>
        <v-avatar color="secondary" v-else>
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
        
      </v-btn>

      <!-- <v-btn icon style="color: #FFFFFF;">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>



    <v-main>
      <v-container fluid>
        <transition name="fade" mode="out-in">
              <router-view></router-view>
        </transition>
      </v-container>    
    </v-main>
    <v-navigation-drawer 
        v-model="drawer" 
        color="primary" 
        app 
        location="bottom" 
        temporary>
        <v-list active-class="deep-purple--text text--accent-4">
          <v-list-item style="color: #FFFFFF;text-transform: capitalize;">
            <v-avatar v-if="profile.avtarLink">
              <img
                :src="profile.avtarLink"
                alt="John"
              >
            </v-avatar>
            <v-avatar color="secondary" v-else>
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
            &nbsp;&nbsp;&nbsp;{{ profile.customerName }}
          </v-list-item>
          <v-divider></v-divider>
        <v-list-item
          v-for="item in sideNavItems"
          :key="item.title"
          link
          @click="navigate(item.value)"
        >
          <v-list-item-icon >
            <v-icon style="color: white;">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content style="color: white;">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout()">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-footer app>
      <v-bottom-navigation 
        v-model="activeItem"
        active
        color="primary"
        grow
      >
          <v-btn 
            v-for="item in bottomNavItems"
            @click="navigate(item.value)"
            :key="item.title">
              <v-icon>{{ item.icon }}</v-icon> {{item.title}}
          </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>
  
<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'MainLayout',
  data() {
    return {
      activeItem: 'home',
      drawer: false,
      profile:{
        customerName:null,
        avtarLink:null,
        role:null,
        // avtarLetter:"JC"
      },
      sideNavItems: [
        { icon:"mdi-home",
          title: 'Home',
          value: 'home',
        },
        {
          icon:"mdi-information",
          title: 'About',
          value: 'about',
        },
        {
          icon:"mdi-email",
          title: 'Contact',
          value: 'contact',
        },
      ],
      bottomNavItems: [
        { icon:"mdi-home",
          title: 'Home',
          value: 'home',
        },
        {
          icon:"mdi-information",
          title: 'About',
          value: 'about',
        },
        {
          icon:"mdi-email",
          title: 'Contact',
          value: 'contact',
        },
      ],
    };
  },
  created(){
    console.log("Inside main layout created");
    this.getProfile();
  },
  methods: {
    navigate(route) {
      if(this.$route.name !== route)
        this.$router.push({ name: route });
    },
    logout(){
      this.$store.commit('setProfile', { username: null, avatarUrl: null, role:null });
      AuthService.logout();
      this.$router.push("/login");
    },
    async getProfile(){
      let profile=this.$store.getters.getProfile;
      console.log("Inside getProfile:"+JSON.stringify(profile));
      this.profile.customerName=profile.username;
      this.profile.avtarLink=profile.avatarUrl;
      this.profile.role=profile.role;

    }
  },
  watch: {
  },
};
</script>
  
<style>
.v-app-bar {
  height: 48px; /* Adjust the height as needed */
  color: white;
}
.v-btn {
  color: white;
}

</style>