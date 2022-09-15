const Membership = () => {
  return (
    <>
      <div className="hero min-h-[50%] pt-12 bg-base-200">
        <div className="hero-content max-w-[80%] flex-col lg:flex-row">
          <img
            src="https://live.staticflickr.com/65535/52359665167_a8b8e80bb9_h.jpg"
            className="max-w-sm rounded-sm shadow-2xl"
          />
          <div className="pl-7">
            <h1 className="text-5xl font-extralight pb-20">
              A taste of the Temecula Valley
            </h1>

            <h3 className="text-2xl font-semibold max-w-[65%]">
              Choose the number of bottles to fit your party
            </h3>
            <p className="pt-1 pb-8 max-w-[75%]">
              Dos Fernandos Vineyard makes it easy to choose how much wine to
              order online.
            </p>
            <h3 className="text-2xl font-semibold max-w-[65%]">
              Unlimited Tastings
            </h3>
            <p className="pt-1 pb-8 max-w-[75%]">
              We have a unique tasting experience for you to enjoy! Sample a
              variety of wines from the Temecula Valley.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-[50%] pt-12 bg-base-300">
        <div className="hero-content max-w-[80%] flex-col lg:flex-row-reverse">
          <img
            src="https://live.staticflickr.com/65535/52359670522_550fcd057d_h.jpg"
            className="max-w-sm rounded-sm shadow-2xl"
          />

          <div className="pr-7 mr-0 flex flex-col">
            <h3 className="text-2xl font-semibold w-[100%] text-right">
              Airbnb
            </h3>
            <p className="pt-1 pb-8 w-full text-right">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <h3 className="text-2xl font-semibold text-right">Free delivery</h3>
            <p className="pt-1 pb-8 w-[100%] text-right">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex w-full justify-end">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
