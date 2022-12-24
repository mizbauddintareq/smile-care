import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  const reviewData = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      image: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      image: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      image: people3,
    },
  ];
  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold text-secondary">Testimonial</h4>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <figure>
          <img src={quote} className="lg:w-48 w-24 " alt="quote" />
        </figure>
      </div>
      <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {reviewData.map((review) => (
          <ReviewCard key={review._id} data={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
