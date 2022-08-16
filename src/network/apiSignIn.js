import baseApi from "../api/baseApi";

export const processSignIn = async (payload) => {
    // const payload = {
    //     email:email,
    //     password:password
    // }
    try {
        const response = await baseApi.post(`/app/login`,payload,{
            headers:{"Content-type":"application/json"}
        });
      
        if (response){
            return response
        }else {
            return `"danger","Something Went Wrong","Session"`;
        }
    }catch (e) {
        return (e.response);
    }
}
