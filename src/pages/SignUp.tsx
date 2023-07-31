import { signUp } from '../auth/auth';
import { FormInfo } from '../todoTypes';
import {
  StyledButton,
  StyledInput,
  StyledInputError,
  Wrapper,
} from '../styles/auth';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const SignUp = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormInfo>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleFormSubmit: SubmitHandler<FormInfo> = async (data) => {
    //await signUp(data);
    console.log(data);
    reset();
  };

  return (
    <Wrapper>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='form'>
        <div>
          <label htmlFor='email'>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <StyledInput {...field} placeholder='email' name='email' />
              )}
            />
          </label>
          {errors.email && (
            <StyledInputError role='alert'>
              {errors.email.message}
            </StyledInputError>
          )}
        </div>
        <div>
          <label htmlFor='password'>
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Enter a password of at least 6 characters',
                minLength: 6,
              }}
              render={({ field }) => (
                <StyledInput
                  {...field}
                  placeholder='password'
                  name='password'
                />
              )}
            />
          </label>
          {errors.password && (
            <StyledInputError role='alert'>
              {errors.password.message}
            </StyledInputError>
          )}
        </div>

        <StyledButton type='submit'>Signup</StyledButton>
      </form>
    </Wrapper>
  );
};

export default SignUp;
