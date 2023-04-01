import "./Offer.css";

function Offer() {
  return (
    <div className="offer">
      <div className="container__offer-content">
        <div className="offer-content">
          <h2>Offert</h2>
          <p>
            Om ni önskar en offert på våra tjänster är ni välkomna att kontakta
            oss genom att ringa 031-7882800, skicka ett mail till{" "}
            <a className="email-link" href="roger@esplanad.nu">
              info@esplanad.nu
            </a>{" "}
            eller använda formuläret nedan så återkommer vi med ett svar inom
            kort.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
