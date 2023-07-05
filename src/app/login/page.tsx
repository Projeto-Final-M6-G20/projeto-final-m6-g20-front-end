'use client';
import LoginForm from './components/FormLogin';
import Container from 'app/components/Container/container';

const LoginPage = () => {
  return (
    <main className="flex min-h-screen bg-gray-100  items-center  justify-center">
      <Container>
        <LoginForm />
      </Container>
    </main>
  );
};

export default LoginPage;
