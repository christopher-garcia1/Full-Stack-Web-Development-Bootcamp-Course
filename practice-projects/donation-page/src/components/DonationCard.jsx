const DonationCards = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
      }}
    >
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Education</h3>
        <p>Support school programs and supplies</p>
        <button>Donate now</button>
      </div>
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Health Care</h3>
        <p>Provide medicines and care for families</p>
        <button>Donate now</button>
      </div>
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Food AID</h3>
        <p>Deliver meals to those in need</p>
        <button>Donate now</button>
      </div>
    </section>
  );
};

export default DonationCards;
