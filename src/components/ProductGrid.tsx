import { MessageCircle, ShieldCheck, Truck } from 'lucide-react';

export type Product = {
  id: string;
  title: string;
  image: string;
  supplier: string;
  country: string;
  verified: boolean;
  pricing: { qty: string; price: string }[];
  moq: number;
};

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Sac de Riz Parfumé 50kg (Gros & Détail)',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400',
    supplier: 'Douala Négoce S.A',
    country: 'Cameroun 🇨🇲',
    verified: true,
    moq: 5,
    pricing: [
      { qty: '1-4', price: '21 500 FCFA' },
      { qty: '5-49', price: '20 000 FCFA' },
      { qty: '50+', price: '18 500 FCFA' }
    ]
  },
  {
    id: '2',
    title: 'Tissu Wax Hollandais (Qualité Premium) - Rouleau 6 yards',
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=400',
    supplier: 'Dakar Textiles VIP',
    country: 'Sénégal 🇸🇳',
    verified: true,
    moq: 1,
    pricing: [
      { qty: '1-9', price: '15 000 FCFA' },
      { qty: '10+', price: '12 500 FCFA' }
    ]
  },
  {
    id: '3',
    title: 'Ciment Portland 42.5R - Palette',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400',
    supplier: 'Bâtir Ivoire',
    country: 'Côte d\'Ivoire 🇨🇮',
    verified: false,
    moq: 50,
    pricing: [
      { qty: '50-199', price: '4 800 FCFA' },
      { qty: '200+', price: '4 500 FCFA' }
    ]
  },
  {
    id: '4',
    title: 'Beurre de Karité Brut 100% Naturel (Seau 20L)',
    image: 'https://images.unsplash.com/photo-1608248593842-8d76d4db1262?auto=format&fit=crop&q=80&w=400',
    supplier: 'Coopérative des Femmes de Bobo',
    country: 'Burkina Faso 🇧🇫',
    verified: true,
    moq: 2,
    pricing: [
      { qty: '2-9', price: '30 000 FCFA' },
      { qty: '10+', price: '25 000 FCFA' }
    ]
  }
];

export default function ProductGrid() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-stone-900">Populaires près de chez vous</h3>
        <button className="text-emerald-600 font-medium hover:underline">Voir tout</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map(product => (
          <div key={product.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all group flex flex-col">
            {/* Image */}
            <div className="h-48 overflow-hidden relative bg-stone-100">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.verified && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm backdrop-blur-md bg-opacity-90">
                    <ShieldCheck size={14} /> Vérifié
                  </span>
                )}
                <span className="bg-white/90 text-stone-800 text-xs font-bold px-2 py-1 rounded-md shadow-sm backdrop-blur-md">
                  Min. {product.moq}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-semibold text-stone-900 text-sm mb-2 line-clamp-2" title={product.title}>
                {product.title}
              </h4>
              
              <p className="text-xs text-stone-500 mb-4 flex items-center gap-1">
                {product.country} • {product.supplier}
              </p>

              {/* Pricing Tier */}
              <div className="bg-stone-50 rounded-lg p-2 mb-4 mt-auto border border-stone-100">
                <div className="flex justify-between text-xs text-stone-500 mb-1 font-medium">
                  <span>Qté</span>
                  <span>Prix unitaire</span>
                </div>
                {product.pricing.map((tier, idx) => (
                  <div key={idx} className="flex justify-between text-sm font-bold text-stone-900">
                    <span>{tier.qty}</span>
                    <span className={idx === product.pricing.length - 1 ? 'text-emerald-600' : ''}>{tier.price}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-auto">
                <button className="flex-1 bg-green-50 hover:bg-green-100 text-green-700 font-semibold text-sm py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors">
                  <MessageCircle size={16} />
                  Négocier
                </button>
                <button className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-colors" title="Options de livraison">
                  <Truck size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
