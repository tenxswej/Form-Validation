import "./App.css";
import ContactSection from "./components/ContactSection";

function App() {
   return (
      <main>
         <section className="flex gap-44 items-start justify-between">
            <div className="bg-[url(form.svg)] bg-no-repeat bg-top bg-contain mt-20 w-[15%] sticky top-44 p-44 block small:hidden" />
            <ContactSection />
         </section>
      </main>
   );
}

export default App;
