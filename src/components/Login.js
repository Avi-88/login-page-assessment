import React, {useState} from 'react';
import { Input , Button ,Checkbox , Alert } from 'antd';
import axios from 'axios';
import image from '/login-page-assessment/bg-discuss.png';

function Login() {

  const [credentials, setCredentials] = useState({email:'' , password:''});
  const [verdict , setVerdict] = useState({status:'' , message:''});
  const [visible , setVisible] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

      setCredentials(prevValues => {
        return {
            ...prevValues,
            [name]: value
        }
      })
  }

  const handleLogin = async (info) => {
    try {
        setVisible(false);
        const result = await axios.post('https://reqres.in/api/login', {email: credentials.email , password:credentials.password});
        console.log(result.data);
        setVerdict({
            status:'success',
            message: `Here is your token : ${result.data.token}`
        });
        setVisible(true);     
    } catch (error) {
        console.log(error.response.data.error);
        setVerdict({
            status:'error',
            message: error.response.data.error
        });
        setVisible(true); 
    }
  };

  return (
    <div className='grid grid-cols-6 h-screen w-full'>
        <div className='lg:col-span-2 w-full h-full md:col-span-3 col-span-6 flex justify-center items-center'>
            <div className='p-10 h-full flex flex-col justify-center items-center '>
                <div className='w-full py-4 flex flex-col justify-center items-center mb-4'>
                    <span className='font-bold text-4xl text-center'>Welcome Back</span>
                    <span className='text-xs text-center'>lorrem ipsum dolor</span>
                </div>
                <div className='w-full xl:px-4 px-2'>
                    <Input placeholder="Email address*" onChange={handleChange} name='email' value={credentials.email} size="large" className='my-1 rounded-md' />
                    <Input.Password placeholder="Password*" onChange={handleChange} name='password' value={credentials.password} size="large" className='my-1 rounded-md'/>
                </div>
                <div className='w-full xl:px-4 px-2 my-1'>
                    <Button size='large' className='bg-slate-800  border-none text-white hover:scale-105 rounded-md focus:bg-slate-900  focus:text-white hover:bg-slate-800  hover:text-white hover:border-none' onClick={() => handleLogin(credentials)} block>Login</Button>
                </div>
                <div className='w-full xl:px-4 px-2 my-1 grid grid-cols-2 justify-between items-center'>
                    <div className='flex justify-start items-center'>
                        <Checkbox className='text-sm'/>
                        <span className='text-xs ml-1'>Remember password</span>
                    </div>
                    <div className='flex justify-end items-center'>
                        <span className='text-xs'>Forgot password?</span>
                    </div>
                </div>
                <div className='w-full xl:px-4 px-2 my-1'>
                    {visible && <Alert message={verdict.message} type={verdict.status} showIcon closable/> }
                </div>
            </div>
        </div>
        <div className='bg-slate-800 w-full h-full lg:col-span-4 md:col-span-3 hidden  md:flex justify-center items-center'>
            <img src={image} className='object-cover' alt='bg' />
        </div>
    </div>
  )
}

export default Login
