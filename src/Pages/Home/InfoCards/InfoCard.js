const InfoCard = ({ data }) => {
  const { name, icon, description, bgClass } = data;
  return (
    <section
      className={`card p-6 text-white md:card-side shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="card-icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default InfoCard;
