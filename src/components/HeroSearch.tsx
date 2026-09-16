import { Search, Mic, Camera, MapPin, ChevronDown } from 'lucide-react';

export default function HeroSearch() {
  return (
    <div className="bg-emerald-600 text-white pb-12 pt-8 px-4 md:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trouvez des fournisseurs de confiance en Afrique
        </h2>
        
        {/* Search Container */}
        <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-lg">
          
          {/* Location / Filter */}
          <button className="flex items-center gap-2 px-4 py-3 md:border-r border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl w-full md:w-auto shrink-0 transition-colors">
            <MapPin size={20} className="text-emerald-600" />
            <span className="font-medium whitespace-nowrap">Toute l'Afrique</span>
            <ChevronDown size={16} className="text-stone-400" />
          </button>
          
          {/* Input field */}
          <div className="flex-1 flex items-center w-full px-2 relative group">
            <Search size={20} className="text-stone-400 absolute left-4" />
            <input 
              type="text" 
              placeholder="Que recherchez-vous ? (ex: Riz 50kg, Wax Hollandais...)" 
              className="w-full py-3 pl-10 pr-4 text-stone-900 bg-transparent border-none focus:ring-0 focus:outline-none text-lg"
            />
          </div>
          
          {/* Action Icons */}
          <div className="flex items-center gap-1 px-2 border-t md:border-t-0 md:border-l border-stone-200 pt-2 md:pt-0 w-full md:w-auto justify-end">
            <button className="p-3 text-stone-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors" title="Recherche par image">
              <Camera size={24} />
            </button>
            <button className="p-3 text-stone-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors" title="Recherche vocale">
              <Mic size={24} />
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-sm w-full md:w-auto ml-2">
              Chercher
            </button>
          </div>
        </div>

        {/* Quick Tags */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <span className="text-sm font-medium text-emerald-100">Tendances :</span>
          {['Achats Groupés (Tontine)', 'Matériaux de construction', 'Cacao', 'Smartphones'].map(tag => (
            <button key={tag} className="px-3 py-1.5 bg-emerald-700/50 hover:bg-emerald-700 rounded-full text-sm font-medium backdrop-blur-sm transition-colors border border-emerald-500/30">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
