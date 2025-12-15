export default function QuotesPage() {
  return (
    <div>
      <h2>Quotes page</h2>
      <p>
        Her kommer quotes til at ligge i lifted state. så kan child komponenter
        få dem som props. 
        
        Child komponenter kunne være: 
        
        QuoteTable - Viser alle
        quotes, med en category vælger - kan måske være sit eget komponent
        
        QuoteSummary - Kunne bare beregne antal af quotes fx
      </p>
    </div>
  );
}
