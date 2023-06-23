const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center  max-sm:w-screen max-[1024px]:w-full max-[1560px]:w-full max-[2560px]:w-3/5 max-[1560px]:w-1/2">
      {children}
    </div>
  );
};

export default Container;
