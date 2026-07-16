import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, Github, Cpu, Sparkles, Layers, Sliders, Play, Code, 
  Database, CheckCircle2, Terminal, RefreshCw, Eye, RefreshCcw,
  ShoppingBag, ShoppingCart, Heart, Share2, Send, MessageSquare, Plus, Trash2
} from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

type ProjectCategory = 'all' | 'web' | 'unreal' | 'iot';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // --- E-Commerce Project Simulation States ---
  const ecommerceProducts = [
    { id: 'hud', name: 'Cyberpunk HUD UI Pack', price: 49.00, category: 'Visual Asset' },
    { id: 'visor', name: 'Holographic Glass Lens', price: 120.00, category: 'Wearable' },
    { id: 'engine', name: 'Quantum Core Framework', price: 250.00, category: 'Developer Tool' }
  ];
  const [cart, setCart] = useState<{ [key: string]: number }>({ hud: 1 });
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'processing' | 'success'>('cart');
  const [txnHash, setTxnHash] = useState('');

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const copy = { ...prev };
      if (copy[id] <= 1) {
        delete copy[id];
      } else {
        copy[id] -= 1;
      }
      return copy;
    });
  };

  const cartTotal = Object.entries(cart).reduce((sum: number, [id, qty]) => {
    const prod = ecommerceProducts.find(p => p.id === id);
    return sum + (prod ? prod.price * (qty as number) : 0);
  }, 0);

  const simulateCheckout = () => {
    setCheckoutStep('processing');
    setTimeout(() => {
      const randomHash = '0x' + Array.from({ length: 16 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('').toUpperCase();
      setTxnHash(randomHash);
      setCheckoutStep('success');
    }, 1800);
  };

  const resetCheckout = () => {
    setCart({ hud: 1 });
    setCheckoutStep('cart');
    setTxnHash('');
  };

  // --- Social Media Project Simulation States ---
  const [socialPosts, setSocialPosts] = useState([
    { 
      id: 1, 
      author: 'Koushik N', 
      handle: '@_koushik_25', 
      text: '🚀 Built a responsive full-stack social portal! Users can cast real-time likes, share posts instantly, and synchronize views through atomic state controls.', 
      likes: 88, 
      comments: 12, 
      shared: false, 
      timestamp: 'Just now' 
    },
    { 
      id: 2, 
      author: 'Tech Enthusiast', 
      handle: '@code_innovator', 
      text: 'The modular UI architecture on Koushik\'s Github portfolio is incredibly snappy. Clean, robust setups!', 
      likes: 24, 
      comments: 2, 
      shared: false, 
      timestamp: '2h ago' 
    }
  ]);
  const [newPostText, setNewPostText] = useState('');
  const [sharedToastId, setSharedToastId] = useState<number | null>(null);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    const newPost = {
      id: Date.now(),
      author: 'Koushik N (You)',
      handle: '@_koushik_25',
      text: newPostText,
      likes: 0,
      comments: 0,
      shared: false,
      timestamp: 'Just now'
    };
    setSocialPosts(prev => [newPost, ...prev]);
    setNewPostText('');
  };

  const handleLike = (id: number) => {
    setSocialPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleShare = (id: number) => {
    setSocialPosts(prev => prev.map(p => p.id === id ? { ...p, shared: true } : p));
    setSharedToastId(id);
    setTimeout(() => setSharedToastId(null), 2000);
  };

  // Unreal Engine 5 Real-Time Rendering Simulation States
  const [timeOfDay, setTimeOfDay] = useState<number>(19); // Hours 0-23
  const [fogDensity, setFogDensity] = useState<number>(45); // Percentage
  const [lumenBounce, setLumenBounce] = useState<number>(75); // Intensity
  const [activeCamera, setActiveCamera] = useState<'orbit' | 'panoramic' | 'detail'>('orbit');

  // Matrix Compiler State
  const [selectedSnippet, setSelectedSnippet] = useState('binary_search');
  const [terminalLogs, setTerminalLogs] = useState<string[]>(['MATRIX SHELL V2.0', 'TYPE snippet name or select to begin.']);
  const [isCompiling, setIsCompiling] = useState(false);
  const [showUeAlert, setShowUeAlert] = useState(false);

  const snippets = {
    binary_search: {
      title: 'binary_search.cpp',
      code: `int binarySearch(int arr[], int l, int r, int x) {
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}`,
      output: 'Binary search compiled. Size: 2.4KB. Heap alloc: 128 bytes.'
    },
    smart_irrigation: {
      title: 'soil_node_monitor.py',
      code: `def check_soil_node():
    moisture = sensor.read_adc(CH_0)
    if moisture < MOISTURE_THRESHOLD:
        solenoid.write(GPIO.HIGH)
        transmit_payload(status="IRRIGATION_ON")
    else:
        solenoid.write(GPIO.LOW)`,
      output: 'IoT soil node initialized. Socket connected. Latency: 42ms.'
    },
    matrix_math: {
      title: 'autopilot_tensor.c',
      code: `void tensor_product(float* A, float* B, float* C, int N) {
    #pragma omp parallel for
    for (int i=0; i<N; ++i) {
        for (int j=0; j<N; ++j) {
            C[i*N+j] = 0.0f;
            for (int k=0; k<N; ++k)
                C[i*N+j] += A[i*N+k] * B[k*N+j];
        }
    }
}`,
      output: 'Matrix multiplication optimized. SIMD instructions active.'
    }
  };

  const handleSnippetRun = () => {
    setIsCompiling(true);
    const activeCode = snippets[selectedSnippet as keyof typeof snippets];
    setTerminalLogs(prev => [...prev, `[INIT] Compiling ${activeCode.title}...`, '>> loading compiler flags... (-O3, -msse4)']);
    
    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        '>> resolving external dependencies...',
        '>> mapping address registers: 0x7FFF08A3B400',
        `[SUCCESS] ${activeCode.output}`,
        '----------------------------------------'
      ]);
      setIsCompiling(false);
    }, 1200);
  };

  return (
    <section id="projects" className="scroll-mt-28 py-10 relative">
      <SectionHeader title="Engineering Works" />

      {/* Modern Filter Tabs */}
      <div className="flex flex-wrap justify-start items-center gap-2 mt-8 mb-12">
        {([
          { id: 'all', label: 'All Operations' },
          { id: 'web', label: 'Web Applications' },
          { id: 'iot', label: 'IoT & Research' },
          { id: 'unreal', label: 'Unreal & Creative' },
        ] as { id: ProjectCategory, label: string }[]).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
              activeCategory === tab.id
                ? 'bg-accent text-black font-extrabold shadow-lg shadow-accent/15'
                : 'bg-[#111120]/50 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid Panel */}
      <div className="space-y-12">

        {/* PROJECT 1: FULL-STACK E-COMMERCE PORTAL */}
        {(activeCategory === 'all' || activeCategory === 'web') && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[35px] border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
          >
            {/* Visual Dashboard Panel */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
                    <ShoppingBag className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-black tracking-wide text-white">E-COMMERCE PORTAL</h3>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Full-Stack Application // Prodigy InfoTech Task 3</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  An immersive, full-stack responsive e-commerce web platform engineered with dynamic shopping features. Supports responsive product galleries, intuitive shopping cart operations, atomic state management, and real-time checkout telemetry for premium desktop and mobile viewports.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'State Management', 'Tailwind CSS', 'Modular UI', 'Cart Telemetry', 'Responsive Design'].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 font-mono rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button 
                  onClick={() => window.open('https://github.com/koushik-hub-25/PRODIGY_FS_03/tree/main/task%203', '_blank')}
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> View Live Repository
                </button>
                <button 
                  onClick={() => window.open('https://github.com/koushik-hub-25/PRODIGY_FS_03/tree/main/task%203', '_blank')}
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> Github Repository
                </button>
              </div>
            </div>

            {/* Simulated Interactive Shopping Interface */}
            <div className="lg:col-span-5 bg-[#07070d]/80 rounded-[28px] border border-white/5 p-5 flex flex-col justify-between font-mono text-xs text-gray-400 space-y-6 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-accent/10 rounded-full pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] text-accent font-extrabold tracking-widest">PRODUCT TERMINAL HUD</span>
                  <span className="inline-flex items-center gap-1 text-[9px] text-green-400">
                    <ShoppingCart className="w-3.5 h-3.5 animate-bounce" />
                    CART: {(Object.values(cart) as number[]).reduce((a: number, b: number) => a + b, 0)} ITEMS
                  </span>
                </div>

                {checkoutStep === 'cart' && (
                  <div className="space-y-3">
                    {/* Catalog */}
                    <div className="space-y-1.5">
                      <span className="text-[8px] text-gray-500 uppercase tracking-widest font-bold block">Available Nodes</span>
                      <div className="space-y-1">
                        {ecommerceProducts.map(p => {
                          const qty = cart[p.id] || 0;
                          return (
                            <div key={p.id} className="bg-black/40 border border-white/5 rounded-xl p-2.5 flex items-center justify-between">
                              <div>
                                <div className="text-[10px] font-bold text-white">{p.name}</div>
                                <div className="text-[8px] text-accent">${p.price.toFixed(2)} // {p.category}</div>
                              </div>
                              <div className="flex items-center gap-1.5">
                                {qty > 0 && (
                                  <button 
                                    onClick={() => removeFromCart(p.id)}
                                    className="w-5 h-5 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white font-bold"
                                  >
                                    -
                                  </button>
                                )}
                                <span className="text-white w-3 text-center">{qty}</span>
                                <button 
                                  onClick={() => addToCart(p.id)}
                                  className="w-5 h-5 rounded-md bg-accent/20 hover:bg-accent/40 text-accent flex items-center justify-center font-bold"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Subtotal & Action */}
                    <div className="border-t border-white/5 pt-3.5 flex items-center justify-between">
                      <div>
                        <span className="text-[8px] text-gray-500 block leading-none">SUBTOTAL COORDINATES</span>
                        <span className="text-white font-bold text-sm">${cartTotal.toFixed(2)}</span>
                      </div>
                      <button 
                        onClick={simulateCheckout}
                        disabled={cartTotal === 0}
                        className="px-4 py-2 bg-accent hover:bg-accent/95 disabled:opacity-30 disabled:hover:scale-100 text-black font-mono font-bold text-[10px] uppercase tracking-widest rounded-lg transition-all hover:scale-105"
                      >
                        CHECKOUT ENGINE
                      </button>
                    </div>
                  </div>
                )}

                {checkoutStep === 'processing' && (
                  <div className="h-44 flex flex-col items-center justify-center space-y-3">
                    <RefreshCw className="w-8 h-8 text-accent animate-spin" />
                    <div className="text-center">
                      <span className="text-white block font-bold text-xs uppercase tracking-wider animate-pulse">Processing Order...</span>
                      <span className="text-[8px] text-gray-500 font-mono">ENCRYPTING CART NODE PROTOCOL</span>
                    </div>
                  </div>
                )}

                {checkoutStep === 'success' && (
                  <div className="space-y-3 p-3 bg-green-950/20 border border-green-500/20 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-white font-bold text-xs block uppercase">TRANSACTION VERIFIED</span>
                        <span className="text-[8px] text-green-400 font-mono">STATUS: SUCCESSFUL</span>
                      </div>
                    </div>
                    <div className="bg-black/60 border border-white/5 rounded-xl p-2 text-[8px] space-y-1 font-mono text-gray-400">
                      <div className="flex justify-between">
                        <span>TXN_HASH:</span>
                        <span className="text-accent select-all font-bold">{txnHash}</span>
                      </div>
                      <div className="flex justify-between border-t border-white/5 pt-1 mt-1">
                        <span>SETTLED DEBIT:</span>
                        <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <button 
                      onClick={resetCheckout}
                      className="w-full py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-mono font-bold text-[9px] uppercase tracking-widest rounded-lg border border-green-500/20"
                    >
                      ORDER NEW NODE
                    </button>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        )}

        {/* PROJECT 2: SOCIAL MEDIA PLATFORM */}
        {(activeCategory === 'all' || activeCategory === 'web') && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[35px] border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
          >
            {/* Project description */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
                    <Database className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-black tracking-wide text-white">SOCIAL ENGAGEMENT PORTAL</h3>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Interactive Web Engine // Prodigy InfoTech Task 4</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  A high-fidelity social application tailored for real-time customer connection and immediate state reactions. Users can instantly post updates, cast responsive likes, share structured mock content coordinates, and browse through fluid layouts optimized for mobile devices.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Social Feed', 'Dynamic Interactions', 'State Optimization', 'React Hooks', 'UX Engineering', 'Tailwind Grid'].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 font-mono rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button 
                  onClick={() => window.open('https://github.com/koushik-hub-25/PRODIGY_FS_04/tree/main/task%204', '_blank')}
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> View Live Repository
                </button>
                <button 
                  onClick={() => window.open('https://github.com/koushik-hub-25/PRODIGY_FS_04/tree/main/task%204', '_blank')}
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> Github Repository
                </button>
              </div>
            </div>

            {/* Interactive Simulator Cockpit (Social Feed Simulator) */}
            <div className="lg:col-span-5 bg-[#07070d]/80 rounded-[28px] border border-white/5 p-5 flex flex-col justify-between font-mono text-xs text-gray-400 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] text-accent font-extrabold tracking-widest">SOCIAL ENGAGEMENT FEED</span>
                <span className="text-[9px] text-gray-500">STATE_MUTATION: ACTIVE</span>
              </div>

              {/* Form Input */}
              <form onSubmit={handleCreatePost} className="flex gap-2">
                <input 
                  type="text" 
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  placeholder="Draft a mock broadcast post..." 
                  className="w-full bg-black border border-white/5 rounded-xl px-3 py-2 text-[10px] text-white focus:outline-none focus:border-accent font-mono"
                />
                <button 
                  type="submit"
                  className="bg-accent text-black px-3 rounded-xl flex items-center justify-center font-bold hover:bg-accent/90 transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Feed Sandbox scrollable */}
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {socialPosts.map(post => (
                  <div key={post.id} className="bg-black/60 border border-white/5 rounded-xl p-3 space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold block text-[10px]">{post.author}</span>
                        <span className="text-gray-500 text-[8px]">{post.handle}</span>
                      </div>
                      <span className="text-gray-500 text-[8px]">{post.timestamp}</span>
                    </div>
                    <p className="text-gray-300 text-[9px] leading-relaxed font-light">{post.text}</p>
                    
                    {/* Interactivity tools */}
                    <div className="flex justify-between items-center border-t border-white/5 pt-2 text-[8px]">
                      <button 
                        type="button"
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Heart className="w-3.5 h-3.5 fill-red-400/0 hover:fill-red-400 transition-all hover:scale-110" />
                        {post.likes} Likes
                      </button>
                      <span className="flex items-center gap-1 text-gray-500">
                        <MessageSquare className="w-3.5 h-3.5" />
                        {post.comments} Comments
                      </span>
                      <button 
                        type="button"
                        onClick={() => handleShare(post.id)}
                        className="flex items-center gap-1 text-gray-400 hover:text-accent transition-colors"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        {post.shared ? 'Shared!' : 'Share'}
                      </button>
                    </div>

                    {/* Small shared confirmation toast */}
                    {sharedToastId === post.id && (
                      <div className="absolute inset-0 bg-accent/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-black font-bold text-[9px] uppercase tracking-wider">
                        Copied share coordinates! 🌐
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* PROJECT 3: UNREAL ENGINE 3D LEVEL DESIGN */}
        {(activeCategory === 'all' || activeCategory === 'unreal') && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[35px] border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
          >
            {/* Project description (md:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
                    <Layers className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-black tracking-wide text-white">UNREAL ENGINE 3D DESIGN</h3>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Real-Time Level Art // Unreal Engine 5 Environment Creation</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  Constructing high-fidelity virtual landscapes, real-time lighting modules, floating platforms, and atmospheric cinematic environments inside <strong>Unreal Engine 5</strong>. This setup demonstrates custom volumetric fog parameters, Lumen global illumination bounces, Nanite virtualized geometry, and customized cinematic camera track sequences (inspired by the YouTube walkthrough).
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Unreal Engine 5', 'Lumen GI', 'Nanite Mesh', 'Cinematic Sequencer', '3D Level Design', 'Volumetric Fog'].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 font-mono rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button 
                  onClick={() => setShowUeAlert(true)}
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-black" /> Watch Scene Walkthrough
                </button>
                <button 
                  onClick={() => window.open('https://github.com/koushik-hub-25', '_blank')}
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> Github Portfolio
                </button>
              </div>
            </div>

            {/* Interactive Render Compositor (md:col-span-5) */}
            <div className="lg:col-span-5 bg-[#07070d]/80 rounded-[28px] border border-white/5 p-5 flex flex-col justify-between font-mono text-xs text-gray-400 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] text-accent font-extrabold tracking-widest">UE5 REAL-TIME SIMULATOR</span>
                <span className="text-[9px] text-gray-500">LUMEN // NANITE_ON</span>
              </div>

              {/* Viewport simulation */}
              <div className={`h-32 rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 ${
                timeOfDay >= 18 || timeOfDay <= 5
                  ? 'bg-gradient-to-t from-purple-950/40 via-slate-950 to-black'
                  : 'bg-gradient-to-t from-orange-950/30 via-slate-900/80 to-[#10101f]'
              }`}>
                {/* 3D Grid floor representing landscape grids */}
                <div 
                  className="absolute inset-0 opacity-15" 
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '15px 15px',
                    transform: activeCamera === 'orbit' ? 'rotateX(60deg) rotateZ(15deg) translateY(-20px)' : activeCamera === 'panoramic' ? 'rotateX(80deg) translateY(-10px)' : 'rotateX(45deg) scale(1.3)'
                  }}
                />

                {/* Simulated Floating Platform structures (matching user's video style) */}
                <div className="relative z-10 flex flex-col items-center space-y-2 transform-style-3d">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`w-28 h-6 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 rounded-lg flex items-center justify-center relative shadow-2xl`}
                    style={{
                      transform: activeCamera === 'orbit' ? 'rotateY(10deg)' : activeCamera === 'detail' ? 'scale(1.2)' : 'none'
                    }}
                  >
                    {/* Glowing active crystal/core on the platform */}
                    <div 
                      style={{ 
                        filter: `blur(${lumenBounce / 15}px)`,
                        opacity: lumenBounce / 100 
                      }}
                      className="absolute -top-3 w-4 h-4 bg-accent rounded-full animate-pulse"
                    />
                    <span className="text-[7px] text-gray-500 tracking-widest font-mono">FLOATING_GATE</span>
                  </motion.div>

                  {/* Supporting minor floating shards */}
                  <div className="flex gap-4">
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-8 h-2 bg-gray-950 border border-white/10 rounded"
                    />
                    <motion.div 
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      className="w-8 h-2 bg-gray-950 border border-white/10 rounded"
                    />
                  </div>
                </div>

                {/* Fog Density Overlay Blur */}
                <div 
                  style={{ opacity: fogDensity / 100, filter: `blur(${fogDensity / 12}px)` }}
                  className="absolute inset-0 bg-white/[0.04] pointer-events-none mix-blend-screen"
                />

                {/* Live stats floating HUD */}
                <div className="absolute bottom-2 left-2 text-[8px] text-gray-500 font-mono flex items-center gap-2">
                  <span>FPS: 60</span>
                  <span>//</span>
                  <span>CAM: {activeCamera.toUpperCase()}</span>
                  <span>//</span>
                  <span>SUN: {timeOfDay}:00</span>
                </div>
              </div>

              {/* Engine parameter controls */}
              <div className="space-y-3 pt-1">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-400">TOD (TIME OF DAY)</span>
                    <span className="text-accent font-bold">{timeOfDay}:00 HRS</span>
                  </div>
                  <input 
                    type="range" min="0" max="23" value={timeOfDay}
                    onChange={(e) => setTimeOfDay(Number(e.target.value))}
                    className="w-full accent-accent bg-white/5 h-1 rounded-full cursor-pointer" 
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-400">VOLUMETRIC FOG DENSITY</span>
                    <span className="text-accent font-bold">{fogDensity}%</span>
                  </div>
                  <input 
                    type="range" min="10" max="95" value={fogDensity}
                    onChange={(e) => setFogDensity(Number(e.target.value))}
                    className="w-full accent-accent bg-white/5 h-1 rounded-full cursor-pointer" 
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-400">LUMEN LIGHT BOUNCE BOOT</span>
                    <span className="text-accent font-bold">{lumenBounce}%</span>
                  </div>
                  <input 
                    type="range" min="10" max="100" value={lumenBounce}
                    onChange={(e) => setLumenBounce(Number(e.target.value))}
                    className="w-full accent-accent bg-white/5 h-1 rounded-full cursor-pointer" 
                  />
                </div>

                {/* Camera rig selector */}
                <div className="pt-2 flex justify-between items-center border-t border-white/5 mt-1">
                  <span className="text-[9px] text-gray-500 uppercase">CAMERA TRACK VIEW</span>
                  <div className="flex gap-1">
                    {(['orbit', 'panoramic', 'detail'] as const).map(cam => (
                      <button
                        key={cam}
                        onClick={() => setActiveCamera(cam)}
                        className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-all ${
                          activeCamera === cam 
                            ? 'bg-accent text-black font-extrabold' 
                            : 'bg-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        {cam}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PROJECT 4: MATRIX LANGUAGES & BINARY COMPILER */}
        {(activeCategory === 'all' || activeCategory === 'iot' || activeCategory === 'web') && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[35px] border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
          >
            {/* Project description (md:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
                    <Terminal className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-black tracking-wide text-white">SYSTEM MATRIX LANGUAGE ENGINE</h3>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Code Sandbox // C/C++ Memory Allocator Mockup</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  Curating computational scripts and data structures constructed inside standard C, C++, and Python frameworks. Features local heuristic analysis, active recursion tests, smart memory mapping vectors, and customized SIMD vector optimization protocols designed for algorithmic micro-tasks.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['C', 'C++', 'Python', 'Java', 'Heuristic Logic', 'Memory Registers'].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 font-mono rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://leetcode.com/u/_koushik_25/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-accent hover:bg-accent/90 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 flex items-center gap-2">
                  <Code className="w-4 h-4" /> Open Leetcode Profile
                </a>
              </div>
            </div>

            {/* Interactive Code Shell Compiler (md:col-span-5) */}
            <div className="lg:col-span-5 bg-[#07070d]/80 rounded-[28px] border border-white/5 p-5 flex flex-col justify-between font-mono text-xs text-gray-400 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] text-accent font-extrabold tracking-widest">MATRIX CORE SHELL TERMINAL</span>
                <span className="text-[9px] text-gray-500">STD_CPP: G++20</span>
              </div>

              {/* Selector for snippet */}
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {Object.keys(snippets).map(key => (
                  <button
                    key={key}
                    onClick={() => setSelectedSnippet(key)}
                    className={`px-3 py-1 bg-black rounded-lg text-[9px] border ${
                      selectedSnippet === key ? 'border-accent text-accent font-extrabold' : 'border-white/5 text-gray-500'
                    }`}
                  >
                    {snippets[key as keyof typeof snippets].title}
                  </button>
                ))}
              </div>

              {/* Code Screen */}
              <div className="h-28 bg-[#040408] rounded-xl p-3 border border-white/5 font-code text-[8px] text-gray-400 overflow-y-auto leading-normal">
                <pre>{snippets[selectedSnippet as keyof typeof snippets].code}</pre>
              </div>

              {/* Execute bar */}
              <div className="space-y-2">
                <button
                  onClick={handleSnippetRun}
                  disabled={isCompiling}
                  className="w-full py-2 bg-accent/15 hover:bg-accent/25 border border-accent/20 text-accent font-bold uppercase text-[9px] tracking-widest rounded-lg flex items-center justify-center gap-2"
                >
                  {isCompiling ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      COMPILING SOURCE CODE SNIP...
                    </>
                  ) : (
                    <>
                      <Terminal className="w-3.5 h-3.5" />
                      RUN MATRIX COMPILE
                    </>
                  )}
                </button>

                {/* Outputs Panel */}
                <div className="h-20 bg-[#020204] rounded-lg p-2.5 border border-white/5 overflow-y-auto space-y-1 font-code text-[8px] leading-relaxed select-text">
                  {terminalLogs.slice(-4).map((log, index) => (
                    <div key={index} className={log.includes('[SUCCESS]') ? 'text-accent font-bold' : log.includes('[INIT]') ? 'text-zylo-purple' : 'text-gray-500'}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* Cinematic Walkthrough Video Pending Modal Alert */}
      <AnimatePresence>
        {showUeAlert && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-[#090915] border border-accent/20 rounded-2xl p-6 overflow-hidden shadow-[0_0_40px_rgba(212,255,63,0.15)] font-mono text-xs"
            >
              <div className="flex items-center gap-2.5 text-accent border-b border-white/10 pb-3 mb-4">
                <Terminal className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wider">WALKTHROUGH PIPELINE</span>
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                [SYSTEM] Unreal Engine 5 high-fidelity video stream link is currently being processed. Walkthrough node will be online shortly. Awaiting final URL transmission!
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowUeAlert(false)}
                  className="px-4 py-2 bg-accent text-black font-bold uppercase rounded-lg text-[10px] tracking-widest hover:bg-accent/80 transition-all"
                >
                  Acknowledge Node
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
