import Header from "./components/Header"
import { differences } from './data'
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <TeachingSection />
        <DifferencesSection />
      </main>
    </div>
  )
}