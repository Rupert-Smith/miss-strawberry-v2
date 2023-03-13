type Pricetype = {
  priceNumber: number | null;
};

function Price({ priceNumber }: Pricetype) {
  return (
    <div>
      {priceNumber ? (
        <>
          <strong>{`£${priceNumber.toFixed(2)} `}</strong>
          per person
        </>
      ) : (
        "no price specified"
      )}
    </div>
  );
}

export { Price };
