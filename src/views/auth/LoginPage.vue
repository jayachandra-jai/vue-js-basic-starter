<template>
  <v-app style="background-color: #301934;">
    <v-container class=" m-5 fill-height d-flex align-center justify-center"> 
      <!-- "ma-4" adds a margin of 20px on all sides -->
      <v-row dense>
        <v-col cols="12" style="background-color: #301934;">
     
            <v-row dense>
              <v-col cols="4" style="padding: 0px;background-color: #301934;" justify-center align-center >
                <v-card
                    class="mx-auto mt-2"
                    max-width="344"
                  >
                    <v-img
                      :src="require('@/assets/me.jpg')"
                      height="220px"
                      cover
                    ></v-img>

                    <v-card-title>
                      K.Jayachandra
                    </v-card-title>

                    <v-card-subtitle>
                      Senior Software Engineer
                    </v-card-subtitle>
                    <v-card-text>
                      <v-row>
                        Experienced Full Stack Java Developer adept at designing and implementing robust software solutions. Proficient in Java, Spring framework, and front-end technologies. Committed to creating seamless user experiences and contributing to innovative projects.
                        <br>
                      </v-row>
                      <v-row>
                        <!-- GitHub Icon -->
                        <v-col>
                          <v-btn icon href="https://github.com/jayachandra-jai" target="_blank">
                            <v-icon>
                              mdi-github
                            </v-icon>
                          </v-btn>
                        </v-col>

                        <!-- LinkedIn Icon -->
                        <v-col>
                          <v-btn icon href="https://www.linkedin.com/in/jayachandra-jai" target="_blank">
                            <v-icon>
                              mdi-linkedin
                            </v-icon>
                          </v-btn>
                        </v-col>

                        <!-- WhatsApp Icon -->
                        <v-col>
                          <v-btn icon href="https://wa.me/9000204595" target="_blank">
                            <v-icon>
                              mdi-whatsapp
                            </v-icon>
                          </v-btn>
                        </v-col>

                        <!-- Facebook Icon -->
                        <v-col>
                          <v-btn icon href="https://www.facebook.com/jayachandra189" target="_blank">
                            <v-icon>
                              mdi-facebook
                            </v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                        
                    </v-card-text>
                  </v-card>

              </v-col>
              <v-col cols="4" align-self="center" align="center">
                <v-icon size="300" color="white">mdi-check-circle-outline</v-icon>
                <h3 style="color: #FFFFFF;">TODO App</h3>
              </v-col>
              <v-col cols="4" >
               
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
