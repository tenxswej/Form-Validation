import "./App.css";
import ContactSection from "./components/ContactSection";

function App() {
   return (
      <main className="flex gap-44 items-start justify-between">
         <div className="bg-[url(form.svg)] bg-no-repeat bg-top bg-contain mt-20 w-[25%] sticky top-40 p-60 block small:hidden" />
         <ContactSection />
      </main>
   );
}

export default App;
