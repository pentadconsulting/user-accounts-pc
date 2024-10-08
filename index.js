import axios from 'axios';



 async function signup (url, username, password){
    debugger;
    console.log("signUp page")
    try{
        const response = await axios.post(url, {
        userName: username,
        password: password,
      }, {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
      }
    );

    
      console.log(response.data);
      debugger;
      if (!response.status) {
        throw new Error('Network response was not ok');
      }
      return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

 async function login (url,username, password){
    console.log("in login")
    debugger;

    try {
        console.log("i am in login");
        const response = await axios.post(url, {
            userName: username,
            password: password,
            
        });
        
        console.log(response.data);
        debugger;

        if (!response.status) {
            throw new Error('Network response was not ok');
        }
       
        return response.data;

    } catch (error) {
        console.log(error);   
    }
};

export {signup , login};

