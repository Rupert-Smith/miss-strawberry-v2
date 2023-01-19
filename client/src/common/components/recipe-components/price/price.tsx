type Pricetype = {
  priceNumber: number;
};

function Price({ priceNumber }: Pricetype) {
  return (
    <div>
      <strong>{`£${priceNumber.toFixed(2)} `}</strong>
      per person
    </div>
  );
}

export { Price };
