import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It's been an essential oral health treatment for decades.",
      image: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure.",
      image: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!",
      image: whitening,
    },
  ];

  return (
    <section className="mt-20">
      <div className="text-center">
        <h4 className="uppercase text-xl font-bold text-secondary">
          our services
        </h4>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {serviceData.map((service) => (
          <Service key={service.id} data={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
