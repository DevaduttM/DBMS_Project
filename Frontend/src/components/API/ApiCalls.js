import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8081/login', { email, password });
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export const dashboard = async (CustomerID) => {
  try{
    const response2 = await axios.post('http://localhost:8081/dashboard', CustomerID);
    console.log(response2.data);
    return response2.data;
  }
  catch (error){
    console.error("Dashboard Error:", error);
    throw error;
  }
}

export const dashboard1 = async (CustomerID) => {
  try{
    const response2 = await axios.post('http://localhost:8081/dashboard1', CustomerID);
    return response2.data;
  }
  catch (error){
    console.error("Dashboard Error:", error);
    throw error;
  }
}


export const signup = async (newUser) => {
   try {
      const response = await axios.post('http://localhost:8081/signup', newUser);
      return response.data;
   } catch (error) {
      console.error("Signup Error:", error);
      throw error;
   }
};

export const update = async (updatedata) => {
    try {
      const response = await axios.post('http://localhost:8081/update', updatedata);
      return response.data;
    } catch (error) {
      console.error("Update Error:", error);
      throw error;
    }
}

export const rentInsert = async (rentData) => {
   try {
      const response = await axios.post('http://localhost:8081/rentyourcar', rentData);
      return response.data;
   } catch (error) {
      console.error("Rent Insert Error:", error);
      throw error;
    }
}

export const rentInsert2 = async (rentData) => {
   try {
      const response = await axios.post('http://localhost:8081/rentyourcar2', rentData);
      return response.data;
   } catch (error) {
      console.error("Rent Insert Error:", error);
      throw error;
    }
}

export const searchCar = async (carData) => {
   try {
      const response = await axios.post('http://localhost:8081/searchcar', carData);
      return response.data;
   } catch (error) {
      console.error("Search Car Error:", error);
      throw error;
    }
}

export const booking = async (bookingData) => {
   try {
      const response = await axios.post('http://localhost:8081/booking', bookingData);

      return response;
   } catch (error) {
      console.error("Booking Error:", error);
      throw error;
    }
}


export const yourcar = async (OwnerID) => {
   try {
      const response = await axios.post('http://localhost:8081/yourcar', OwnerID);

      return response;
   } catch (error) {
      console.error("Booking Error:", error);
      throw error;
    }
}


export const carbookings = async (VehicleID) => {
   try {
      const response = await axios.post('http://localhost:8081/carbookings', VehicleID);

      return response;
   } catch (error) {
      console.error("Booking Error:", error);
      throw error;
    }
}




// export const booking3 = async () => {
//    try {
//       const response = await axios.post('http://localhost:8081/booking3');
//       return response;
//    } catch (error) {
//       console.error("Booking Error:", error);
//       throw error;
//     }
// }
// export const booking2 = async (booking2data) => {
//    try {
//       const response = await axios.post('http://localhost:8081/booking2', booking2data);
//       return response;
//    } catch (error) {
//       console.error("Booking Error:", error);
//       throw error;
//     }
// }





