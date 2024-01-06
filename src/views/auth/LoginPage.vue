<template>
  <v-app style="background-color: #301934;">
    <v-container class=" m-5 fill-height d-flex align-center justify-center">
      <!-- "ma-4" adds a margin of 20px on all sides -->
      <v-row dense>
        <v-col cols="12">
         
            <v-card>
            <v-row dense>
              <v-col cols="8" style="padding: 0px;" justify-center align-center>
                  <!-- <v-img
                    :src="require('@/assets/me.jpg')"
                    max-height="500px"
                    max-width="auto"
                  >
                  </v-img> -->
                  <v-img
                    class="white--text align-end"
                    max-height="500px"
                    max-width="auto"
                    :src="require('@/assets/me.jpg')"
                    style="text-align: center;"
                  >
                    <v-card-title >K.Jayachandra</v-card-title>
                  </v-img>

              </v-col>
              <v-col cols="4">
               
                <v-layout align-center justify-center>
                  
                  <v-flex>
                    <v-form @submit.prevent="login">
                      <v-hover>
                      <v-card class="pa-5 ma-2">
                            <v-img :src="require('@/assets/logo.png')" 
                        max-height="150px"
                        max-width="150px"
                        class="mx-auto"
                        ></v-img>
                        <v-card-title class="headline">Sign in</v-card-title>

                        <!-- Username Field -->
                        <v-text-field
                          v-model="userLogin.userName"
                          label="Username"
                          outlined
                          required
                        ></v-text-field>

                        <!-- Password Field -->
                        <v-text-field
                          v-model="userLogin.password"
                          label="Password"
                          type="password"
                          outlined
                          required
                        ></v-text-field>

                        <!-- Submit Button -->
                        <v-card-actions>
                          <v-btn type="submit" color="primary">Login</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-hover>
                    </v-form>
                  </v-flex>
                </v-layout>
              </v-col>
            </v-row>
          </v-card>
          
        </v-col>
        </v-row>
      

    </v-container>
  </v-app>
    
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'LoginPage',
  data() {
    return {
        userLogin:{
          userName:'',
          password:''
        }
    };
  },
  methods:{
    async login(){
      if(this.userLogin.userName && this.userLogin.password){
        AuthService.login(this.userLogin).then((res) =>{
          console.log(JSON.stringify(res))
          if(res!=null && res.isSuccess){
            console.log('Login success go to home');
            this.getProfile();
          }
        }).catch(err =>{
            console.log(JSON.stringify(err));
        });

      }
    },
    async getProfile(){
      let res =await AuthService.getProfile();
      console.log("res:"+JSON.stringify(res));
      if(res.status == 200){
            let profile={ username: res.data.responseObj.userName, avatarUrl: res.data.responseObj.avatarLink, role:res.data.responseObj.role };
            this.$store.commit('setProfile', profile);
            console.log("Inside getProfile:"+JSON.stringify(profile));
            this.$router.push("/");

        }

    }
  }
};
</script>

<style scoped>
</style>
