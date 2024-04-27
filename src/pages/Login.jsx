import { Card, Input, Button, Label } from "../components/ui";
import { Container } from "../components/ui/Container";
import { useForm } from "react-hook-form";
import { ChangeAuth } from "../components/ChangeAuth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit( async (data) => {
     
    const user = await login(data);

    if (user) {
      toast.success('Login Successful');
      navigate('/profile');
    }
  
  });

  return (
    <Container>
      <Card>
        {loginErrors && (
            loginErrors.map(err => (
              <p key={err} className="text-red-500 text-center">{err}</p>
            ))
          )
        }

        <h4 className="text-2xl font-bold text-center mb-4">Login</h4>

        <form onSubmit={onSubmit}>

          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            placeholder="Enter your Email"
            {...register('email', { required: true })} 
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            placeholder="Enter your Password"
            {...register('password', { required: true })} 
          />
          {errors.password && <p className="text-red-500">Password is required</p>}

          <Button>Login</Button>

          <ChangeAuth text="Don't have an account?" redirectTo="/register" textLink="Register" />

        </form>
      </Card>
    </Container>
  )
}