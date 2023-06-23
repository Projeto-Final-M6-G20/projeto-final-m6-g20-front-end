'use client';
import Container from 'app/components/Container/container';
import LoginForm from './components/FormLogin';

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
