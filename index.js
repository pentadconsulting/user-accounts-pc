import axios from 'axios';



 async function signup (url, username, password){

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

    try {
       
        const response = await axios.post(url, {
            userName: username,
            password: password,
            
        });

        if (!response.status) {
            throw new Error('Network response was not ok');
        }
       
        return response.data;

    } catch (error) {
        console.log(error);   
    }
};

export {signup , login};

