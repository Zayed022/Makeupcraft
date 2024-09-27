import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const handleLogout= async()=>{
    try{
    await axios.post("/api/v1/users/logout",{},{
      withCredentials:true,
    });
    navigate("/login");
  }
  catch(error){
    console.log("Error: ",error)
  }

  };

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
