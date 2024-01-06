import backendInstance from "./BackendInstance"
const AuthService = {
    login(credentials){
        return new Promise((resolve,reject) =>{
            backendInstance.post("/auth/getToken",credentials).then(res=> {
                console.log(JSON.stringify(res));
                let loginResponse={};
                try{
                    if(res.status === 200){
                        loginResponse.isSuccess=true;
                        loginResponse.message="Login successful";
                        loginResponse.role= res.data.role;
                        console.log(JSON.stringify(loginResponse));
                        localStorage.setItem('access_token', res.data.accessToken);
                        localStorage.setItem('refresh_token', res.data.refreshToken);
                        console.log("Login success");
                    }else if(res.status == 401){
                        loginResponse.isSuccess=false;
                        loginResponse.message="Invalid credentials";
                    }else{
                        loginResponse.isSuccess=false;
                        loginResponse.message="Login Failed";
                    }
                    console.log(JSON.stringify(loginResponse));
                }catch(err){
                    console.log(JSON.stringify(err));
                }
                
                resolve(loginResponse);
            }).catch( err =>{
                console.log(JSON.stringify(err))
                reject(err);
            });
        })
        
    },
    logout(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    },
    isAuthenticated(){
        if(localStorage.getItem('access_token')){
            return true;
        }
        return false;
    },
    getProfile(){
        return backendInstance.get("/user/getUser");
    },

}
export default AuthService