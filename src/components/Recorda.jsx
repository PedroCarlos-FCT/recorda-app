const Recorda = ({ titleSize, descriptionSize }) => {
  return (
    <div>
      <h1 className={`text-${titleSize} font-bold`}>Recorda</h1>
      <p style={{ fontFamily: "Brittany, serif" }} className={`text-${descriptionSize} text-zinc-300`}>
        memórias desenhadas
      </p>
    </div>
  );
};

export default Recorda;
