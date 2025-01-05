import React from 'react';
import Logo from "../assets/Logo.png";
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div className='bg-[#1E1B4B] h-screen w-full flex flex-col items-center justify-center'>
      <img src={Logo} alt="Logo" className="mb-8" />
      <div className="flex space-x-4">
        <PrimaryButton
          label="Login"
          bgcolor="#A5B4FC"
          textcolor="#1E1B4B"
          type="submit"
          eventname={() => navigate('/login')}
        />
        <PrimaryButton
          label="Sign up"
          bgcolor="#A5B4FC"
          textcolor="#1E1B4B"
          type="submit"
          eventname={() => navigate('/signup')}
        />
      </div>
    </div>
  );
}

export default Home;
