function Temperature({ name, temp }: { name?: string; temp?: number }) {
  return (
    <>
      <div className="absolute top-24 sm:top-auto m-auto sm:w-fit sm:m-0 w-1/2 inset-x-0 sm:bottom-20 sm:left-10 grid grid-rows-1 grid-flow-col gap-0">
        <p className="font-semibold text-6xl text-stone-100">
          {temp && Math.round(temp - 273)}°C
        </p>
        <div className="text-4xl">
          <p className="font-semibold text-xl text-white ms-3 leading-none tracking-wide inline-block align-middle">
            {name}
          </p>
          <p className="font-semibold text-sm text-stone-300 ms-3 leading-none tracking-tighter">
            {new Date().toJSON().slice(0, 10)}
          </p>
        </div>
        <div className="text-4xl">
          <i className="bi bi-cloud-rain font-black text-4xl text-slate-100 inline-block ms-2 align-middle" />
        </div>
      </div>
    </>
  );
}

export default Temperature;
