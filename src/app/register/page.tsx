import RegisterForm from './components/FormRegister';
import Container from 'app/components/Container/container';

const RegisterPage = () => {
  return (
    <main className="flex min-h-screen  items-center bg-gray-100  justify-center py-10">
      <Container>
        <RegisterForm />
      </Container>
    </main>
  );
};

export default RegisterPage;
