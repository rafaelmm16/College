import React, { useState } from 'react';
import DeviceSimulator from './components/DeviceSimulator';
import { BookOpen, MousePointerClick } from 'lucide-react';

export default function App() {
  const [interactionCompleted, setInteractionCompleted] = useState<boolean>(false);

  // Triggered when user clicks the button inside simulated mobile screen
  const handleInteraction = () => {
    setInteractionCompleted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans select-none pb-12">
    
      {/* DETAILED PROJECT INTRODUCTION */}
      <section className="bg-slate-900 text-slate-100 py-12 px-6 sm:px-8 shadow-inner border-b border-slate-955 relative overflow-hidden">
        {/* Ambient green backdrop glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 relative z-10">
          <div className="inline-flex items-center justify-center flex-wrap gap-2 text-[10px] sm:text-xs text-emerald-400 font-mono font-bold uppercase tracking-widest bg-emerald-950/60 px-4 py-2 rounded-xl border border-emerald-900/40 text-center max-w-full shadow-inner">
            <BookOpen size={12} className="shrink-0 text-emerald-400" />
            <span>Desenvolvimento para Dispositivos Móveis</span>
          </div>
          
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight leading-tight max-w-2xl">
            Clique & Eventos <span className="text-emerald-400 font-medium font-mono text-xl sm:text-3xl block sm:inline-block mt-1 sm:mt-0">onPress</span>
          </h2>

          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
            Atividade avaliativa focada no ciclo de vida de componentes através do gerenciamento de estados reativos (<code className="bg-slate-950 text-emerald-400 px-1.5 py-0.5 rounded font-mono border border-slate-800 text-[11px]">useState</code>).
          </p>
        </div>
      </section>
 
      {/* CORE WORKSPACE CONTENT */}
      <main className="max-w-lg mx-auto px-4 mt-8 flex-1 w-full flex flex-col gap-6">
        
        {/* Action Notice card if not clicked yet */}
        {!interactionCompleted && (
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-4 flex gap-3.5 items-start shadow-sm">
            <MousePointerClick className="text-amber-600 shrink-0 mt-0.5 animate-bounce" size={20} />
            <div>
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">Ação Necessária (Simulador)</h4>
              <p className="text-[11px] text-amber-700 leading-relaxed mt-0.5">
                Clique no botão verde do simulador móvel para atualizar o texto do TextView e verificar as novas ações e efeitos em tempo real.
              </p>
            </div>
          </div>
        )}

        {interactionCompleted && (
          <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-2xl p-4 flex gap-3.5 items-start shadow-sm animate-fade-in">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mt-1.5 shrink-0 block animate-pulse" />
            <div>
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Interação Registrada!</h4>
              <p className="text-[11px] text-emerald-700 leading-relaxed mt-0.5">
                Excelente! Os eventos onPress foram escutados com sucesso. Textos, transições, notificações e paletas de cores foram alternadas.
              </p>
            </div>
          </div>
        )}

        {/* Interactive simulator device container */}
        <section id="simulador" className="w-full flex flex-col justify-center">
          <DeviceSimulator onInteract={handleInteraction} />
        </section>

      </main>

    </div>
  );
}

