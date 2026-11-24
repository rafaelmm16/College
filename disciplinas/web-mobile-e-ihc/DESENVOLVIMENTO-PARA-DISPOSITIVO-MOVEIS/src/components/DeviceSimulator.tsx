import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Battery, Cpu, Bell, Sparkles, RefreshCcw } from 'lucide-react';

interface DeviceSimulatorProps {
  onInteract: () => void;
}

const FRASES_SIMULADOR = [
  "Texto alterado com sucesso através do evento de clique! 🎉",
  "O evento onPress do TouchableOpacity foi acionado com sucesso! 📱",
  "useState atualizou o componente e re-renderizou a interface reativa! ⚡",
  "Isso simula o ciclo de vida e a renderização reativa no ambiente Mobile! 🛠️",
  "Cliques dinâmicos alteram dados em tempo real no React Native! 🚀",
  "Excelente! Você dominou o gerenciamento de estados em Apps Móveis! ⭐"
];

// Cores de fundo e texto combinadas para cada estado cíclico do TextView
const CORES_TEXTVIEW = [
  { text: 'text-blue-900', labelBg: 'bg-blue-50 border-blue-100 text-blue-600', cardBorder: 'border-blue-200' },
  { text: 'text-indigo-900', labelBg: 'bg-indigo-50 border-indigo-100 text-indigo-600', cardBorder: 'border-indigo-200' },
  { text: 'text-emerald-900', labelBg: 'bg-emerald-50 border-emerald-100 text-emerald-600', cardBorder: 'border-emerald-200' },
  { text: 'text-purple-900', labelBg: 'bg-purple-50 border-purple-100 text-purple-600', cardBorder: 'border-purple-200' },
  { text: 'text-rose-900', labelBg: 'bg-rose-50 border-rose-100 text-rose-600', cardBorder: 'border-rose-200' },
  { text: 'text-amber-900', labelBg: 'bg-amber-50 border-amber-100 text-amber-600', cardBorder: 'border-amber-200' },
];

export default function DeviceSimulator({ onInteract }: DeviceSimulatorProps) {
  // Simulator internals
  const [simulatedText, setSimulatedText] = useState('Texto Inicial da TextView');
  const [clickCount, setClickCount] = useState(0);
  const [currentTime, setCurrentTime] = useState('12:00');
  const [hasChanged, setHasChanged] = useState(false);
  
  // New actions states
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');
  const [shakeTrigger, setShakeTrigger] = useState(false);
  const [textEffect, setTextEffect] = useState(false);

  // Keep simulated clock updated
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hrs}:${mins}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulatedClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    
    // Cycle through dynamic educative phrases
    const index = clickCount % FRASES_SIMULADOR.length;
    setSimulatedText(FRASES_SIMULADOR[index]);
    setHasChanged(true);
    
    // Trigger vibration effect on the simulated screen/TV card
    setShakeTrigger(true);
    setTimeout(() => setShakeTrigger(false), 400);

    // Trigger floating sparkles element animation
    setTextEffect(true);
    setTimeout(() => setTextEffect(false), 500);

    // Show simulated Mobile Push notification sliding down from above
    setNotificationMsg(`onPress disparado! Clique #${nextCount}`);
    setShowNotification(true);
    
    // Auto collapse notification
    setTimeout(() => {
      setShowNotification(false);
    }, 2500);

    onInteract(); // trigger global checklist confirmation
  };

  const handleReset = () => {
    setSimulatedText('Texto Inicial da TextView');
    setHasChanged(false);
    setClickCount(0);
    setShowNotification(false);
  };

  // Color schemes for wallpapers and branding in the simulator device
  const getButtonBg = () => {
    return 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200';
  };

  const currentThemeStyles = hasChanged 
    ? CORES_TEXTVIEW[(clickCount - 1) % CORES_TEXTVIEW.length] 
    : { text: 'text-slate-600', labelBg: 'bg-emerald-50/70 border-emerald-100 text-emerald-600', cardBorder: 'border-slate-100' };

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
      {/* Settings / Controls inside the web app */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 mb-6 border-b border-slate-100 pb-4">
        <div>
          <h3 className="font-display font-semibold text-slate-900 text-lg">Simulador Interativo (Android)</h3>
          <p className="text-xs text-slate-500">Teste o funcionamento do aplicativo móvel em tempo real</p>
        </div>
      </div>

      {/* DEVICE FRAME */}
      <div className="relative">
        {/* Outer Shadow glow for premium appearance */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-[48px] blur-xl opacity-40 -z-10" />

        {/* Physical Mobile Frame structure */}
        <div 
          style={{ width: '310px', height: '620px' }} 
          className="relative border-[10px] border-slate-900 bg-slate-950 flex flex-col overflow-hidden transition-all duration-300 rounded-[30px]"
        >
          {/* Android Camera Punch Hole */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-slate-900 rounded-full z-40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-slate-950 rounded-full" />
          </div>

          {/* STATUS BAR */}
          <div className="h-10 bg-slate-50 text-slate-700 text-xs px-6 flex items-center justify-between font-medium select-none z-30 pt-2 border-b border-slate-100">
            <span>{currentTime}</span>
            <div className="flex items-center gap-1.5">
              <Wifi size={13} className="text-slate-600" />
              <span className="text-[10px]">LTE</span>
              <div className="flex items-center gap-0.5">
                <Battery size={15} className="text-slate-600" />
              </div>
            </div>
          </div>

          {/* PHONE SCREEN CONTENT */}
          <div className="flex-1 bg-slate-50 flex flex-col relative overflow-hidden font-sans">
            
            {/* Real-time connection feedback */}
            <div className="bg-emerald-50 text-emerald-800 text-[10px] font-semibold py-1 px-3 text-center border-b border-emerald-100 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              Compilado com Sucesso
            </div>

            {/* SIMULATED PUSH NOTIFICATION OVERLAY */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  animate={{ y: 8, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="absolute left-3 right-3 z-50 bg-slate-900/95 backdrop-blur-md rounded-xl p-2.5 border border-slate-800 shadow-xl flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/20">
                    <Bell size={13} className="animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold tracking-wider text-emerald-400 font-mono uppercase">Vibration Haptic API</span>
                      <span className="text-[8px] text-slate-500 font-medium">Agora</span>
                    </div>
                    <p className="text-[10px] font-semibold text-slate-200 truncate mt-0.5">{notificationMsg}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simulated App Viewport */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              
              {/* Header inside simulated app */}
              <div className="text-center mt-4">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  Trabalho
                </span>
                <p className="text-[11px] text-slate-400">Clique & Eventos em React Native</p>
              </div>

              {/* Core Visual Area: The TextView Simulator */}
              <div className="my-auto">
                <motion.div 
                  animate={shakeTrigger ? {
                    x: [0, -6, 6, -6, 6, -3, 3, 0],
                    scale: [1, 0.98, 1.02, 1]
                  } : {}}
                  transition={{ duration: 0.35 }}
                  className={`bg-white border rounded-xl p-5 shadow-sm min-h-[140px] flex flex-col justify-center relative transition-all duration-300 ${currentThemeStyles.cardBorder}`}
                >
                  <div className={`absolute top-3 left-3 text-[10px] font-mono font-bold border px-1.5 py-0.5 rounded uppercase tracking-wider transition-all duration-300 ${currentThemeStyles.labelBg}`}>
                    TextView
                  </div>
                  
                  <div className="absolute top-3 right-3 text-[10px] text-slate-400 font-mono">
                    Text: React Native
                  </div>

                  {/* Reactive text element styled like a text view with subtle state transition */}
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={simulatedText}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`text-sm text-center font-semibold leading-relaxed leading-snug px-2 transition-colors duration-300 word-break break-words sm:line-clamp-4 ${currentThemeStyles.text}`}
                      >
                        {simulatedText}
                      </motion.p>
                    </AnimatePresence>

                    {/* Quick sparkles overlay on change */}
                    <AnimatePresence>
                      {textEffect && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 0.8, scale: 1.2 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center pointer-events-none text-emerald-500"
                        >
                          <Sparkles size={24} className="animate-spin" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Badge showing click stats */}
                  {clickCount > 0 && (
                    <motion.div 
                      initial={{ scale: 0.8, y: 10 }} 
                      animate={{ scale: 1, y: 0 }}
                      className="absolute -bottom-2 -right-1 bg-slate-900 text-white font-mono text-[9px] font-semibold py-0.5 px-2 rounded-full border border-white flex items-center gap-1"
                    >
                      <Sparkles size={10} className="text-yellow-405" />
                      Cliques: {clickCount}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Interactive buttons */}
              <div className="space-y-2.5 mb-1 bg-transparent">
                {/* Click action Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  onClick={handleSimulatedClick}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-shadow outline-none flex items-center justify-center gap-1.5 cursor-pointer shadow-md select-none ${getButtonBg()}`}
                >
                  <Cpu size={14} />
                  Alterar Texto
                </motion.button>

                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-[11px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer select-none flex items-center justify-center gap-1"
                >
                  <RefreshCcw size={11} />
                  Resetar TextView
                </button>
              </div>

            </div>

            {/* Bottom device pill for interaction simulation */}
            <div className="h-6 w-full flex items-center justify-center bg-slate-50 border-t border-slate-100">
              <div className="w-24 h-1 bg-slate-300 rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
