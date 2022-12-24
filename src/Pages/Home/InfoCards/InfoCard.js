const InfoCard = ({ data }) => {
  const { name, icon, description, bgClass } = data;
  return (
    <div className={`card p-6 text-white card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="card-icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
