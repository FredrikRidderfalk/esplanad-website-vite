import "./IssueReport.css";

function IssueReport() {
  return (
    <div className="issue-report">
      <div className="container__issue-report-content">
        <div className="issue-report-content">
          <h2>Felanmälan</h2>
          <p>
            Om ni har har en felanmälan under dagtid (07:00 – 16:00) skall ni
            ringa till 031-788 28 00
          </p>
          <p>
            För infomation om hur vi hanterar era personuppgifter, vänligen se
            fliken GDPR här på hemsidan
          </p>
          <p>
            Vid akuta ärenden under övrig tid (17:00-07:00) skall dessa göras
            till den jourtjänst din förening har avtal med.
          </p>
          <p>
            Telefonnumret till jourtjänsten i din fastighet står angivet på
            anslagstavlan i entrén.
          </p>
          <p>
            Är er felanmälan inte akut går det bra att göra denna genom att ni
            fyller i webbformuläret: (Obs! det är viktigt att ni fyller i rätt
            uppgifter i felanmälan, annars kan vi inte avhjälpa er felanmälan)
          </p>
        </div>
      </div>
    </div>
  );
}

export default IssueReport;
