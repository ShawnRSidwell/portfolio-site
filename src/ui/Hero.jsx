function Hero({ headline, image, children }) {
  return (
    <div className="flex">
      <div>
        <h2 className="text-xl py-5">{headline}</h2>
        <p>{children}</p>
      </div>
      {image && (
        <img className="p-5" src={image} alt="icon" height="256" width="256" />
      )}
    </div>
  );
}

export default Hero;
