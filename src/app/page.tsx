import Image from "next/image";
import Header from "./header/page";
import Hero from "./hero/page";
import { LanguageProvider } from "./LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Header />
        <Hero />
      </main>
    </LanguageProvider>
  )
}