const ReviewCard = ({ data }) => {
  const { name, location, review, image } = data;
  return (
    <div className="card dark:bg-accent shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="card-actions justify-start items-center mt-6">
          <div className="avatar mr-2">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="user" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
