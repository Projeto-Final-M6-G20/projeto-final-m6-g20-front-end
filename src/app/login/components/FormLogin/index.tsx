import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="max-w-md w-1/2  rounded-md  p-8 bg-cover bg-center max-lg:w-3/4 max-sm:w-3/4">
      <div className="flex w-2/2 justify-between items-center ">
        <h2 className="text-2xl font-bold  mb-6">Login</h2>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digitar Email"
            className="input-style"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="email">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Sua senha"
            className="input-style"
          />
        </div>

        <div className="w-full flex justify-end items-end">
          <span className="text-gray-500">Esqueci minha senha</span>
        </div>

        <div className="flex flex-col gap-4 items-center justify-between">
          <button
            type="submit"
            className="btn-primary relative top-0 left-0 w-3/4"
          >
            Enviar
          </button>
          <Link href={'/register'} className="text-gray-500">
            Ainda não possui uma conta?
          </Link>
          <button className="btn-form w-3/4">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
