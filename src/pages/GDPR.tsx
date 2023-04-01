import "./GDPR.css";

function GDPR() {
  return (
    <div className="gdpr">
      <div className="container__gdpr-content">
        <div className="gdpr-content">
          <img src="src/assets/gdpr.jpg" alt="" />
          <h2>GDPR</h2>
          <p>
            För att kunna avhjälpa din felanmälan har vi ett
            ärendehanteringssystem för arbetsordrar, där vi lägger in och sparar
            de uppgifter du skriver in i formulär på vår hemsida, via mail eller
            när du ringer till oss.
          </p>
          <p>
            Vi sparar uppgifter om namn, adress, lägenhetsnummer och
            telefonnummer/mailadress i vårt system för att underlätta
            hanteringen vid felanmälningar/beställningar, men också för att
            snabbt kunna ta kontakt med boende om t ex en vattenläcka, eller
            annan skada som drabbar flera personer samtidigt, skulle uppstå. De
            flesta uppgifter har vi fått genom medlemsförteckningar, utskickad
            av styrelser eller ekonomisk förvaltare, alternativt genom
            överlåtelser eller direktkontakt med oss.
          </p>
          <p>
            Utöver att uppgifterna sparas i vår databas kan vi komma att behöva
            lämna ut adressuppgifter och telefonnummer till underentreprenörer,
            t ex elektriker, rörmokare och plåtslagare, när de skall besöka
            fastigheten/anmälaren för åtgärd av felanmälan.
          </p>
          <p>
            Vi kan inte sätta en tidsgräns för när uppgifterna tas bort, men vid
            kännedom om flytt/överlåtelse ändras givetvis kundkortet till den
            nya ägaren, men för historiken kommer man att kunna gå tillbaka till
            den specifika lägenheten (och se vem som gjorde anmälan då) för att
            se vad som gjorts i de fall problem skulle uppstå igen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GDPR;
