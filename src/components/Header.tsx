import { Globe, Menu, User, ShoppingCart, Search } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 flex justify-between items-center hidden md:flex">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Vendre sur AfriBaba</a>
          <a href="#" className="hover:text-white transition-colors">Aide & Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-transparent border-none focus:ring-0 cursor-pointer hover:text-white">
            <option className="text-stone-900">Français</option>
            <option className="text-stone-900">English</option>
            <option className="text-stone-900">العربية</option>
          </select>
          <select className="bg-transparent border-none focus:ring-0 cursor-pointer hover:text-white">
            <option className="text-stone-900">FCFA (XAF/XOF)</option>
            <option className="text-stone-900">NGN (₦)</option>
            <option className="text-stone-900">KSh</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-4 flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-stone-600">
            <Menu size={24} />
          </button>
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-sm">
              <Globe size={24} />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-2xl leading-none text-stone-900 tracking-tight">AfriBaba</h1>
              <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">Le gros de l'Afrique</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200">
          <button 
            onClick={() => setActiveTab('home')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'home' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-900'}`}
          >
            Accueil Prototype
          </button>
          <button 
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'specs' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-900'}`}
          >
            Spécifications Techniques
          </button>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-3 md:gap-5 text-stone-600">
          <button className="md:hidden p-2 hover:bg-stone-50 rounded-full">
            <Search size={22} />
          </button>
          <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <User size={22} />
            <div className="hidden lg:block text-left">
              <p className="text-[10px] uppercase font-bold text-stone-400 leading-none">Connexion</p>
              <p className="text-sm font-bold text-stone-900 leading-none mt-1">Mon Compte</p>
            </div>
          </button>
          <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors relative">
            <div className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">0</span>
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-[10px] uppercase font-bold text-stone-400 leading-none">Panier</p>
              <p className="text-sm font-bold text-stone-900 leading-none mt-1">0 FCFA</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
