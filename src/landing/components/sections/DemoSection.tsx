export function DemoSection() {
  return (
    <section id="demo" className="demo"><div className="section-head"><div><div className="eyebrow">02 / IL PROGETTO IN AZIONE</div><h2>Dai bisogni alle possibilità.</h2></div><span className="pill">CONCEPT · DATI SIMULATI</span></div><video controls preload="metadata" poster={`${import.meta.env.BASE_URL}media/demo.jpg`}><source src={`${import.meta.env.BASE_URL}media/demo.mp4`} type="video/mp4" />Il browser non supporta il video. <a href={`${import.meta.env.BASE_URL}media/demo.mp4`}>Scarica la demo</a>.</video><p className="caption">Una dimostrazione della visione FARO. Alloggi, prezzi, tempi e scenari sono illustrativi e non costituiscono un servizio operativo.</p></section>
  );
}
