import { 
  Server, Smartphone, Database, WifiOff, FileJson, GitPullRequest, LayoutTemplate, ShieldCheck 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function SpecsView() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Spécifications Techniques : AfriBaba</h2>
        <p className="text-lg text-stone-600">
          Architecture, Modèle de Données et Workflow conçus pour les réalités du e-commerce en Afrique subsaharienne.
        </p>
      </div>

      {/* SECTION 1: Architecture Technique */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 text-blue-700 rounded-xl"><LayoutTemplate size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900">1. Architecture Technique (Low-Bandwidth)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 border border-stone-200 rounded-2xl shadow-sm">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-3 text-stone-900">
              <Smartphone size={20} className="text-blue-600" /> Frontend Mobile & Web
            </h4>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li><strong className="text-stone-900">Stack:</strong> React Native ou Flutter pour le mobile (APK &lt; 15MB). React.js (Vite) + Tailwind pour le web.</li>
              <li><strong className="text-stone-900">Offline-First:</strong> Utilisation de WatermelonDB (ou SQLite local) pour cacher le catalogue. PWA Service Workers pour la version web.</li>
              <li><strong className="text-stone-900">Médias:</strong> Images converties à la volée en WebP via CDN, lazy-loading agressif.</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-2xl shadow-sm">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-3 text-stone-900">
              <Server size={20} className="text-emerald-600" /> Backend Microservices
            </h4>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li><strong className="text-stone-900">Stack:</strong> Node.js (NestJS) ou Golang pour une haute concurrence.</li>
              <li><strong className="text-stone-900">File d'attente (Events):</strong> RabbitMQ ou Kafka. Crucial pour gérer les Callbacks Mobile Money asynchrones et l'envoi de SMS (USSD).</li>
              <li><strong className="text-stone-900">Hébergement:</strong> Déploiement conteneurisé (Docker/K8s) sur des régions cloud proches (ex: AWS af-south-1).</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: Modèle de base de données */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-100 text-purple-700 rounded-xl"><Database size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900">2. Schéma Base de Données (PostgreSQL)</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg overflow-x-auto border border-slate-700">
            <div className="flex justify-between items-center mb-3">
              <span className="text-slate-300 font-mono text-sm flex items-center gap-2"><FileJson size={16}/> Users & Products</span>
            </div>
            <pre className="text-emerald-400 font-mono text-xs leading-relaxed">
{`Table Users {
  id uuid [pk]
  phone_number varchar [unique] // Clé principale (MoMo)
  role enum('buyer', 'seller', 'driver')
  language varchar(5) // fr, en, ar, sw...
  is_verified boolean
}

Table Products {
  id uuid [pk]
  seller_id uuid [ref: > Users.id]
  title varchar
  tiered_pricing jsonb // [{min_qty: 1, price: 5000}, ...]
  location varchar // Ville/Marché d'origine
  media_urls text[]
}`}
            </pre>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg overflow-x-auto border border-slate-700">
            <div className="flex justify-between items-center mb-3">
              <span className="text-slate-300 font-mono text-sm flex items-center gap-2"><FileJson size={16}/> Orders & Escrow</span>
            </div>
            <pre className="text-blue-400 font-mono text-xs leading-relaxed">
{`Table Orders {
  id uuid [pk]
  buyer_id uuid [ref: > Users.id]
  total_amount decimal
  status enum('pending', 'shipped', 'delivered')
  escrow_status enum('held', 'released', 'refunded')
  relay_point_id uuid // Point de retrait local
}

Table MoMo_Transactions {
  id uuid [pk]
  order_id uuid [ref: - Orders.id]
  provider enum('mtn', 'orange', 'wave', 'mpesa')
  tx_ref varchar [unique]
  amount decimal
  status enum('pending', 'success', 'failed')
}`}
            </pre>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: Workflow Mobile Money & Escrow */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-100 text-orange-700 rounded-xl"><ShieldCheck size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900">3. Workflow Paiement Mobile Money & Séquestre (Escrow)</h3>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-10 relative">
          <div className="absolute top-0 left-6 md:left-12 w-0.5 h-full bg-stone-200 z-0 hidden md:block"></div>
          
          <ul className="space-y-8 relative z-10 text-stone-700 md:pl-16">
            <li className="relative">
              <div className="md:absolute -left-16 top-1 w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold shadow-md mb-2 md:mb-0 hidden md:flex">1</div>
              <div>
                <strong className="text-stone-900 block text-lg mb-1">Initiation (Client)</strong>
                <p>L'acheteur valide le panier. Le frontend envoie une requête \`POST /api/payments/momo\` avec le numéro de téléphone et le montant.</p>
              </div>
            </li>
            <li className="relative">
              <div className="md:absolute -left-16 top-1 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md mb-2 md:mb-0 hidden md:flex">2</div>
              <div>
                <strong className="text-stone-900 block text-lg mb-1">Push USSD (Telco)</strong>
                <p>Le backend contacte l'API de l'agrégateur (ex: Flutterwave/Paystack). L'opérateur télécom affiche un <strong>Push USSD</strong> sur le téléphone de l'acheteur pour saisir son code PIN (PIN secret).</p>
              </div>
            </li>
            <li className="relative">
              <div className="md:absolute -left-16 top-1 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-md mb-2 md:mb-0 hidden md:flex">3</div>
              <div>
                <strong className="text-stone-900 block text-lg mb-1">Webhook & Verrouillage (Escrow)</strong>
                <p>Une fois le PIN validé, l'opérateur envoie un <strong>Webhook asynchrone</strong> à AfriBaba. Les fonds sont reçus et marqués comme <code>escrow_status: 'held'</code> dans la DB. L'argent n'est PAS transféré au vendeur.</p>
              </div>
            </li>
            <li className="relative">
              <div className="md:absolute -left-16 top-1 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md mb-2 md:mb-0 hidden md:flex">4</div>
              <div>
                <strong className="text-stone-900 block text-lg mb-1">Validation & Déblocage</strong>
                <p>Le vendeur expédie via un livreur partenaire. L'acheteur reçoit le colis au point relais (ou à moto) et communique un <strong>Code OTP (SMS)</strong> au livreur. La saisie de ce code déclenche <code>escrow_status: 'released'</code> et transfère les fonds sur le compte MoMo du vendeur.</p>
              </div>
            </li>
          </ul>
        </div>
      </motion.section>
      
    </div>
  );
}
