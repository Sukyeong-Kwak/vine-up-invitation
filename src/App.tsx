import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import PlayList from './components/PlayList'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <main className="card">
        <Hero />
        <EventDetails />
        <PlayList />
        <MapSection />
        <Footer />
      </main>
    </div>
  )
}
