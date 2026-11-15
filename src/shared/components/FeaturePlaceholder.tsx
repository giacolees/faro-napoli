export function FeaturePlaceholder({title, description, nextSteps}: {
  title: string;
  description: string;
  nextSteps: readonly string[];
}) {
  return (
    <section className="workspace-page">
      <p className="workspace-eyebrow">MODULO IN PREPARAZIONE</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="workspace-card">
        <h2>Prossimi sviluppi</h2>
        <ul>{nextSteps.map(step => <li key={step}>{step}</li>)}</ul>
      </div>
    </section>
  );
}
