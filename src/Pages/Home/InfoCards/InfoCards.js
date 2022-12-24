import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "9.00 AM to 5.00 PM ",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Kolatoli, Cox's Bazar",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+880 1580541540",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid gap-6 dark:p-6 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((info) => (
        <InfoCard key={info.id} data={info} />
      ))}
    </div>
  );
};

export default InfoCards;
