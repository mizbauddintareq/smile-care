const Service = ({ data }) => {
  const { name, description, image } = data;
  return (
    <div className="card dark:bg-accent shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="service-img" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
