const PrimaryButton = ({ name }) => {
  return (
    <button
      type="submit"
      className="btn text-white font-bold btn-primary bg-gradient-to-r from-primary to-secondary"
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
