import { useState } from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import ProductGrid from './components/ProductGrid';
import SpecsView from './components/SpecsView';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'home' ? (
          <div className="animate-in fade-in duration-500">
            <HeroSearch />
            <ProductGrid />
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <SpecsView />
          </div>
        )}
      </main>
      
      {/* Mobile Tab Switcher (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-2 flex gap-2 z-50">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'home' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600'}`}
        >
          Accueil
        </button>
        <button 
          onClick={() => setActiveTab('specs')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'specs' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600'}`}
        >
          Specs Techniques
        </button>
      </div>
    </div>
  );
}
