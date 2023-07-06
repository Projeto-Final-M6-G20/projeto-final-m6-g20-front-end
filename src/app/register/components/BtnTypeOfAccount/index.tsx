const BtnTypeOfAccount = () => {
  return (
    <div className="flex gap-3">
      <input
        id="is_advertiser"
        className="peer/is_advertiser hidden"
        type="radio"
        name="status"
        defaultChecked
      />
      <label
        htmlFor="is_advertiser"
        className="btn-form w-full cursor-pointer text-center peer-checked/is_advertiser:bg-brand-1 peer-checked/is_advertiser:text-white peer-checked/is_advertiser:border-brand-1"
      >
        Anunciante
      </label>

      <input
        id="buyer"
        className="peer/buyer hidden"
        type="radio"
        name="status"
      />
      <label
        htmlFor="buyer"
        className="btn-form w-full cursor-pointer text-center peer-checked/buyer:bg-brand-1 peer-checked/buyer:text-white peer-checked/buyer:border-brand-1"
      >
        Comprador
      </label>
    </div>
  );
};

export default BtnTypeOfAccount;
