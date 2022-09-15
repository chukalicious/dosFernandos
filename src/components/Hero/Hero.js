const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://live.staticflickr.com/65535/52360492156_0ee9260f51_h.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Dos Fernandos Vineyard</h1>
          <p className="mb-5"></p>
          <p className="mb-5">
            We have a unique tasting experience for you to enjoy
          </p>
          <button className="btn btn-primary">Join our wine club</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
