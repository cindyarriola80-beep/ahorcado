import React, { useState, useEffect } from 'react';
import { Home, Settings, X, Volume2, VolumeX, Pause, Trophy, Star } from 'lucide-react';

const JuegoAhorcado = () => {
  const datos = {
    batman: { 
      nombre: 'Batman', icono: '🦇', 
      color: '#581c87',
      palabras: {
        facil: [
          { palabra: 'ROBIN', pista: 'Ayudante joven', puntos: 30 },
          { palabra: 'ALFRED', pista: 'Mayordomo', puntos: 30 },
          { palabra: 'GOTHAM', pista: 'Ciudad de Batman', puntos: 30 },
          { palabra: 'BRUCE WAYNE', pista: 'Quien es batman?', puntos: 30 },
          { palabra: 'Murcielago', pista: 'Simbolo de batman', puntos: 30 },
          { palabra: 'BATIMOVIL', pista: 'Vehiculo de batman', puntos: 30 },
          { palabra: 'JOKER', pista: 'Villano que rie', puntos: 30 },

        ],
        medio: [
          { palabra: 'BATARANG', pista: 'Objeto para lanzar y atrapar ', puntos: 50 },
          { palabra: 'PINGUINO', pista: 'Tiene una sombrilla', puntos: 50 },
          { palabra: 'BARBARA GORDON', pista: 'Quien fue la primera batichica?', puntos: 30 },
          { palabra: 'WAYNE ENTERPRISES', pista: 'En que empresa trabaja bruce wayne?', puntos: 30 },
          { palabra: 'EL ACERTIJO', pista: 'Villano que usa acertijos', puntos: 30 },
          { palabra: 'CATWOMAN', pista: 'Ladrona felina', puntos: 30 },
        ],
        dificil: [
          { palabra: 'BANE', pista: '¿Qué villano rompió la espalda de Batman?', puntos: 70 },
          { palabra: 'THE DARK KNIGHT RETURNS', pista: '¿En qué cómic Batman se enfrenta a Superman?', puntos: 70 },
          { palabra: 'DOS CARAS', pista: '¿Qué villano usa una moneda para decidir?', puntos: 70 },
          { palabra: 'BARBARA GORDON', pista: '¿Quién fue la primera Batichica?', puntos: 70 },
          { palabra: 'JASON TODD', pista: '¿Quién fue el segundo Robin?', puntos: 70 },
          { palabra: 'HARVERY DENT', pista: '¿Cuál es el nombre real de Dos Caras?', puntos: 70 },
          
        ]
      }
    },
    marvel: { 
      nombre: 'Marvel', icono: '⚡', 
      color: '#DC2626',
      palabras: {
        facil: [
          { palabra: 'HULK', pista: 'Gigante verde', puntos: 30 },
          { palabra: 'THOR', pista: 'Dios del trueno', puntos: 30 },
          { palabra: 'SPIDER MAN', pista: 'Araña', puntos: 30 },
          { palabra: 'CAPITAN AMERICA', pista: 'Hombre de hierro', puntos: 30 },
          { palabra: 'BLACK WIDOW', pista: 'Traje negro', puntos: 30 },
          { palabra: 'BLACK PANTHER', pista: 'Rey de Tchalla', puntos: 30 },
          { palabra: 'DOCTOR STRANGE', pista: 'Hechicero', puntos: 30 },
        ],
        medio: [
          { palabra: 'WAKANDA', pista: 'Donde es rey black panter', puntos: 50 },
          { palabra: 'PIEDRA DEL TIEMPO', pista: '¿Qué piedra del infinito controla el tiempo?', puntos: 50 },
          { palabra: 'MAGNETO', pista: '¿Qué mutante puede controlar el metal?', puntos: 50 },
          { palabra: 'STAR LORD', pista: '¿Quién es el líder de los Guardianes de la Galaxia?', puntos: 50 },
          { palabra: 'PIEDRA DE LA MENTE', pista: '¿Qué piedra tiene visión en la frente?', puntos: 50 },
          { palabra: 'NUEVA YORK', pista: '¿Qué ciudad protege Spider-Man?', puntos: 50 },
        ],
        dificil: [
          { palabra: 'IRON MAN DOS MIL OCHO', pista: '¿Cuál fue la primera película del Universo Cinematográfico de Marvel?', puntos: 70 },
          { palabra: 'TONY STARK', pista: '¿Qué villano creó Ultron?', puntos: 70 },
          { palabra: 'TOM HIDDLESTON', pista: '¿Qué actor interpreta a Loki?', puntos: 70 },
          { palabra: 'DR ERSKINE', pista: '¿Qué científico creó al Capitán América?', puntos: 70 },
          { palabra: 'KILLMONGER', pista: '¿Qué villano controla Wakanda en los cómics?', puntos: 70 },
          { palabra: 'GROOT', pista: '¿Qué personaje dice “Yo soy ...”?', puntos: 70 },
        ]
      }
    },
    deportes: { 
      nombre: 'Deportes', icono: '⚽', 
      color: '#F97316',
      palabras: {
        facil: [
          { palabra: 'FUTBOL', pista: 'Deporte con balón', puntos: 30 },
          { palabra: 'TENIS', pista: 'Con raqueta', puntos: 30 },
          { palabra: 'NATACION', pista: 'En el agua', puntos: 30 },
          { palabra: 'ONCE', pista: '¿Cuántos jugadores hay en un equipo de fútbol?', puntos: 30 },
          { palabra: 'BALONCESTO', pista: '¿En qué deporte se encestan pelotas?', puntos: 30 },
          { palabra: 'ARGENTINA', pista: '¿Qué país ganó el Mundial 2022?', puntos: 30 },
          { palabra: 'MESSI', pista: '¿Qué deportista es conocido como “La Pulga”?', puntos: 30 },
        ],
        medio: [
          { palabra: 'MICHAEL JORDAN', pista: '¿Qué jugador de baloncesto es apodado “Air”?', puntos: 50 },
          { palabra: 'VOLEIBOL', pista: 'Con red alta', puntos: 50 },
          { palabra: 'BASKETBALL', pista: 'Con canasta', puntos: 50 },
          { palabra: 'TRES', pista: '¿Cuántos puntos vale un triple en baloncesto?', puntos: 50 },
          { palabra: 'GOLF', pista: '¿En qué deporte se usa un palo y una bola blanca?', puntos: 50 },
          { palabra: 'URUGUAY', pista: '¿Qué país ganó el primer Mundial de fútbol?', puntos: 50 },
        ],
        dificil: [
          { palabra: 'ATLETISMO', pista: 'Carreras y saltos', puntos: 70 },
          { palabra: 'HALTEROFILIA', pista: 'Levantamiento de pesas', puntos: 70 },
          { palabra: 'USAIN BOLT', pista: '¿Qué atleta rompió el récord de 100 metros planos?', puntos: 70 },
          { palabra: 'MESSI', pista: '¿Qué futbolista jugó en Barcelona y PSG?', puntos: 70 },
          { palabra: 'ESPAÑA', pista: '¿Qué país ganó el Mundial 2010?', puntos: 70 },
          { palabra: 'INGLATERRA', pista: '¿Qué país inventó el tenis de mesa?', puntos: 70 },
        ]
      }
    },
    animales: { 
      nombre: 'Animales', icono: '🦁', 
      color: '#10B981',
      palabras: {
        facil: [
          { palabra: 'PERRO', pista: 'Mejor amigo del hombre', puntos: 30 },
          { palabra: 'GATO', pista: 'Maúlla y ronronea', puntos: 30 },
          { palabra: 'LEON', pista: 'Rey de la selva', puntos: 30 },
          { palabra: 'BALLENA AZUL', pista: '¿Cuál es el animal más grande del mundo?', puntos: 30 },
          { palabra: 'PEZ', pista: '¿Qué animal vive en el agua y tiene aletas?', puntos: 30 },
          { palabra: 'ABEJA', pista: '¿Qué insecto produce miel?', puntos: 30 },
          { palabra: 'ELEFANTE', pista: '¿Qué animal tiene una trompa larga?', puntos: 30 },
        ],
        medio: [
          { palabra: 'MURCIELAGO', pista: '¿Qué mamífero puede volar?', puntos: 50 },
          { palabra: 'JIRAFA', pista: 'Cuello muy largo', puntos: 50 },
          { palabra: 'CAMALEON', pista: '¿Qué animal cambia de color?', puntos: 30 },
          { palabra: 'PINGUINO', pista: '¿Qué animal vive en los polos?', puntos: 30 },
          { palabra: 'CAMELLO', pista: '¿Qué animal tiene joroba?', puntos: 30 }
         
        ],
        dificil: [
          { palabra: 'ESTRELLA DE MAR', pista: '¿Qué animal puede regenerar partes de su cuerpo?', puntos: 70 },
          { palabra: 'HIPOPOTAMO', pista: 'Grande y vive en ríos', puntos: 70 },
          { palabra: 'ORNITORRINCO', pista: 'Mamífero con pico de pato', puntos: 70 },
          { palabra: 'TRES', pista: '¿Cuántos corazones tiene un pulpo?', puntos: 30 },
          { palabra: 'CABALLO', pista: '¿Qué animal puede dormir de pie', puntos: 30 },
          { palabra: 'CARACOL', pista: '¿Qué animal tiene más dientes?', puntos: 30 },
        ]
      }
    },
    cultura: { 
      nombre: 'Cultura General', icono: '🌍', 
      color: '#3B82F6',
      palabras: {
        facil: [
          { palabra: 'PARIS', pista: 'Capital de Francia', puntos: 30 },
          { palabra: 'EINSTEIN', pista: 'Científico famoso', puntos: 30 },
          { palabra: 'MERCURIO', pista: '¿Qué planeta está más cerca del Sol?', puntos: 30 },
          { palabra: 'FRANCIA', pista: '¿En qué país se encuentra la Torre Eiffel?', puntos: 30 },
          { palabra: 'PORTUGUES', pista: '¿Qué idioma se habla en Brasil?', puntos: 30 },
          { palabra: 'DOLAR', pista: '¿Qué moneda se usa en Estados Unidos?', puntos: 30 },
          { palabra: 'ITALIA', pista: '¿Qué país tiene forma de bota?', puntos: 30 },
        ],
        medio: [
          { palabra: 'EVEREST', pista: 'Montaña más alta', puntos: 50 },
          { palabra: 'SHAKESPEARE', pista: 'Escritor de Romeo y Julieta', puntos: 50 },
          { palabra: 'LEONARDO DA VINCI', pista: '¿Quién pintó la Mona Lisa?', puntos: 30 },
          { palabra: 'GABRIEL GARCIA MARQUEZ', pista: '¿Quién escribió “Cien años de soledad”?', puntos: 30 },
          { palabra: 'TERMOMETRO', pista: '¿Qué instrumento mide la temperatura', puntos: 30 },
          { palabra: 'AMAZONAS', pista: '¿Cuál es el río más largo del mundo?', puntos: 30 },

        ],
        dificil: [
          { palabra: 'CONSTANTINOPLA', pista: 'Antiguo nombre de Estambul', puntos: 70 },
          { palabra: 'PITAGORAS', pista: 'Teorema matemático', puntos: 70 },
          { palabra: 'MESOPOTAMIA', pista: 'Cuna de la civilización', puntos: 70 },
          { palabra: 'CHINA', pista: '¿Cuál es el país más poblado del mundo?', puntos: 30 },
          { palabra: 'ORO', pista: '¿Qué elemento tiene el símbolo Au?', puntos: 30 },
          { palabra: 'ALBERT EINSTEIN', pista: '¿Qué científico propuso la teoría de la relatividad?', puntos: 30 },
        ]
      }
    }
  };

  const [pantalla, setPantalla] = useState('inicio');
  const [cat, setCat] = useState(null);
  const [juego, setJuego] = useState(null);
  const [letras, setLetras] = useState([]);
  const [errores, setErrores] = useState(0);
  const [fin, setFin] = useState(false);
  const [pausado, setPausado] = useState(false);
  
  const [puntos, setPuntos] = useState(0);
  const [nivel, setNivel] = useState(1);
  const [palabrasOk, setPalabrasOk] = useState(0);
  const [racha, setRacha] = useState(0);
  const [mejorScore, setMejorScore] = useState(0);
  
  const [powerUps, setPowerUps] = useState({ bomba: 3, escudo: 2, vision: 1 });
  const [tiempo, setTiempo] = useState(null);
  const [dif, setDif] = useState('medio');
  
  const [cfg, setCfg] = useState({ sonido: true, voz: true });
  const [verCfg, setVerCfg] = useState(false);
  const [confeti, setConfeti] = useState(false);

  const [palabrasUsadas, setPalabrasUsadas] = useState([]);

  const maxErr = { facil: 8, medio: 6, dificil: 4 };
  const limite = maxErr[dif];

  useEffect(() => {
    if (pantalla === 'juego' && !pausado && !fin && nivel >= 3 && tiempo > 0) {
      const timer = setInterval(() => {
        setTiempo(prev => {
          if (prev <= 1) {
            setFin(true);
            setPantalla('gameover');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [pantalla, pausado, fin, nivel, tiempo]);

  const sonido = (tipo) => {
  if (!cfg.sonido) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    
    if (tipo === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 400;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      osc.start(ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.stop(ctx.currentTime + 0.1);
    } else if (tipo === 'bien') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 600;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      osc.start(ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.stop(ctx.currentTime + 0.15);
    } else if (tipo === 'mal') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 200;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      osc.start(ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.stop(ctx.currentTime + 0.2);
    } else if (tipo === 'gana') {
      // 🎉 SONIDO DE CELEBRACIÓN ÉPICO
      const melodia = [
        { freq: 523.25, time: 0 },      // Do
        { freq: 659.25, time: 0.15 },   // Mi
        { freq: 783.99, time: 0.3 },    // Sol
        { freq: 1046.50, time: 0.45 },  // Do alto
        { freq: 1318.51, time: 0.6 },   // Mi alto
        { freq: 1568, time: 0.75 },     // Sol alto
        { freq: 2093, time: 0.9 }       // Do muy alto
      ];
      
      melodia.forEach(nota => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = nota.freq;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.3, ctx.currentTime + nota.time);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + nota.time + 0.2);
        osc.start(ctx.currentTime + nota.time);
        osc.stop(ctx.currentTime + nota.time + 0.2);
      });
      
      // Efecto de brillo adicional
      setTimeout(() => {
        [1046.50, 1318.51, 1568].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = freq;
          osc.type = 'triangle';
          gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.08 + 0.15);
          osc.start(ctx.currentTime + i * 0.08);
          osc.stop(ctx.currentTime + i * 0.08 + 0.15);
        });
      }, 100);
      
    } else if (tipo === 'pierde') {
      // 💀 SONIDO DE GAME OVER DRAMÁTICO
      const gameOver = [
        { freq: 392, time: 0 },      // Sol
        { freq: 349.23, time: 0.2 }, // Fa
        { freq: 293.66, time: 0.4 }, // Re
        { freq: 246.94, time: 0.6 }, // Si
        { freq: 196, time: 0.8 },    // Sol grave
        { freq: 130.81, time: 1 }    // Do muy grave
      ];
      
      gameOver.forEach(nota => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = nota.freq;
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.25, ctx.currentTime + nota.time);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + nota.time + 0.3);
        osc.start(ctx.currentTime + nota.time);
        osc.stop(ctx.currentTime + nota.time + 0.3);
      });
      
      // Efecto de eco grave
      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 65.41; // Do muy muy grave
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.8);
      }, 200);
    }
  } catch(e) {
    console.error('Error al reproducir sonido:', e);
  }
};

  const iniciar = () => {
    setPuntos(0);
    setNivel(1);
    setPalabrasOk(0);
    setRacha(0);
    setPowerUps({ bomba: 3, escudo: 2, vision: 2 });
     setPalabrasUsadas([]);
    setPantalla('menu');
  };

  const elegir = (c) => {
    sonido('click');
    setCat(c);
    setPalabrasUsadas([]);
    nuevaPalabra(c);
    setPantalla('juego');
  };

 const nuevaPalabra = (c) => {
    const categoria = c || cat;
    const palabrasPorDificultad = datos[categoria].palabras[dif];
    
    // NUEVO: Filtrar palabras que no han sido usadas
    const palabrasDisponibles = palabrasPorDificultad.filter(
      p => !palabrasUsadas.includes(p.palabra)
    );
    
    // NUEVO: Si ya se usaron todas, reiniciar la lista
    if (palabrasDisponibles.length === 0) {
      setPalabrasUsadas([]);
      const palabra = palabrasPorDificultad[Math.floor(Math.random() * palabrasPorDificultad.length)];
      setJuego(palabra);
      setPalabrasUsadas([palabra.palabra]); // Agregar la nueva palabra a usadas
    } else {
      // NUEVO: Seleccionar de las palabras disponibles
      const palabra = palabrasDisponibles[Math.floor(Math.random() * palabrasDisponibles.length)];
      setJuego(palabra);
      setPalabrasUsadas([...palabrasUsadas, palabra.palabra]); // Agregar a usadas
    }
    
    setLetras([]);
    setErrores(0);
    setFin(false);
    setConfeti(false);
    setPausado(false);
    
    if (nivel >= 3) {
      setTiempo(60 - (nivel * 5));
    } else {
      setTiempo(null);
    }
  };

  const usarPowerUp = (tipo) => {
    if (powerUps[tipo] <= 0 || fin) return;
    
    sonido('bien');
    setPowerUps({...powerUps, [tipo]: powerUps[tipo] - 1});
    
    if (tipo === 'bomba') {
      const teclado = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
      const incorrectas = teclado.filter(l => !juego.palabra.includes(l) && !letras.includes(l));
      setLetras([...letras, ...incorrectas.slice(0, 5)]);
    } else if (tipo === 'escudo') {
      if (errores > 0) setErrores(errores - 1);
    } else if (tipo === 'vision') {
       const vocales = juego.palabra.split('').filter(l => 'AEIOUÁÉÍÓÚ'.includes(l.toUpperCase()) && !letras.includes(l));
      setLetras([...letras, ...vocales]);
    }
  };

  const clickLetra = (l) => {
    if (fin || letras.includes(l) || pausado) return;
    
    sonido('click');
    const nuevas = [...letras, l];
    setLetras(nuevas);

    if (!juego.palabra.includes(l)) {
      sonido('mal');
      const err = errores + 1;
      setErrores(err);
      setPuntos(Math.max(0, puntos - 10));
      setRacha(0);
      
      if (err >= limite) {
        setFin(true);
        sonido('pierde');
        setTimeout(() => setPantalla('gameover'), 1000);
      }
    } else {
      sonido('bien');
      const bonusRacha = racha * 2;
      const bonusNivel = nivel * 5;
      setPuntos(puntos + 10 + bonusRacha + bonusNivel);
      setRacha(racha + 1);
      
      const ok = juego.palabra.split('').every(x => nuevas.includes(x) || x === ' ');
      if (ok) {
        setFin(true);
        setConfeti(true);
        
        const bonus = juego.puntos + (tiempo ? tiempo * 2 : 0) + (errores === 0 ? 100 : 0);
        const nuevosPuntos = puntos + bonus;
        setPuntos(nuevosPuntos);
        setPalabrasOk(palabrasOk + 1);
        
        if (nuevosPuntos > mejorScore) setMejorScore(nuevosPuntos);
        
        if ((palabrasOk + 1) % 3 === 0) {
          setNivel(nivel + 1);
          setPowerUps(prev => ({ bomba: prev.bomba + 1, escudo: prev.escudo + 1, vision: prev.vision + 1 }));
        }
        
        sonido('gana');
      }
    }
  };

  const dibujar = () => {
    const p = [];
    if (errores >= 1) p.push(<circle key="1" cx="100" cy="80" r="20" fill="#ffd4a3"/>);
    if (errores >= 2) p.push(<rect key="2" x="85" y="100" width="30" height="40" fill="#4169E1" rx="5"/>);
    if (errores >= 3) p.push(<rect key="3" x="68" y="105" width="12" height="30" fill="#FF6347" rx="4" transform="rotate(-20 74 120)"/>);
    if (errores >= 4) p.push(<rect key="4" x="120" y="105" width="12" height="30" fill="#FF6347" rx="4" transform="rotate(20 126 120)"/>);
    if (errores >= 5) p.push(<rect key="5" x="88" y="140" width="10" height="30" fill="#32CD32" rx="4"/>);
    if (errores >= 6) p.push(<rect key="6" x="102" y="140" width="10" height="30" fill="#32CD32" rx="4"/>);
    return p;
  };

  const teclado = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  const gano = juego && juego.palabra.split('').every(l => letras.includes(l) || l === ' ');
  if (pantalla === 'inicio') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '2rem', backdropFilter: 'blur(10px)' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            🎮 AHORCADO EXTREMO 🎮
          </h1>
          
          <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '1rem', marginBottom: '2rem' }}>
            <h2 style={{ color: '#ffd700', marginBottom: '1rem', fontSize: '1.3rem' }}>BIENVENIDO</h2>
            <p style={{ color: 'white', textAlign: 'center', fontSize: '1rem', lineHeight: '1.8' }}>
              Prepárate para desafiar tu mente, tu memoria y tus reflejos. Supera niveles cada vez más difíciles, consigue power-ups, y demuestra que eres el mejor evitando el temido "Game Over".
            </p>
          </div>

          {mejorScore > 0 && (
            <div style={{ backgroundColor: '#059669', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>
                🏆 Mejor Puntuación: {mejorScore}
              </p>
            </div>
          )}
          
          <button onClick={iniciar} style={{ backgroundColor: '#ffd700', color: '#000', padding: '1rem 3rem', fontSize: '1.5rem', fontWeight: 'bold', borderRadius: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(255,215,0,0.4)' }}>
            COMENZAR
          </button>
        </div>
      </div>
    );
  }

  if (pantalla === 'gameover') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px', backgroundColor: 'rgba(0,0,0,0.7)', padding: '3rem', borderRadius: '2rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ff6b6b', marginBottom: '2rem' }}>
            {gano ? '🎉 VICTORIA 🎉' : '💀 GAME OVER 💀'}
          </h1>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Puntuación: <span style={{ color: '#ffd700', fontWeight: 'bold' }}>{puntos}</span>
            </p>
            <p style={{ color: 'white', fontSize: '1.1rem' }}>Nivel: {nivel}</p>
            <p style={{ color: 'white', fontSize: '1.1rem' }}>Palabras: {palabrasOk}</p>
            <p style={{ color: 'white', fontSize: '1.1rem' }}>Racha: {racha}</p>
            <p style={{ color: 'white', fontSize: '1.1rem' }}>Dificultad: <span style={{ textTransform: 'capitalize' }}>{dif}</span></p>
          </div>

          {puntos === mejorScore && puntos > 0 && (
            <div style={{ backgroundColor: '#059669', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
              <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>🎉 ¡NUEVO RÉCORD!</p>
            </div>
          )}
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={iniciar} style={{ backgroundColor: '#ffd700', color: '#000', padding: '0.75rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
              Jugar de Nuevo
            </button>
            <button onClick={() => setPantalla('inicio')} style={{ backgroundColor: '#666', color: 'white', padding: '0.75rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
              Menú Principal
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (pantalla === 'menu') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <button onClick={() => setVerCfg(true)} style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.75rem', borderRadius: '50%', border: 'none', cursor: 'pointer' }}>
          <Settings style={{ color: 'white' }} size={24} />
        </button>

        <button onClick={() => setPantalla('inicio')} style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.75rem', borderRadius: '50%', border: 'none', cursor: 'pointer' }}>
          <Home style={{ color: 'white' }} size={24} />
        </button>

        {verCfg && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }} onClick={() => setVerCfg(false)}>
            <div style={{ backgroundColor: '#1F2937', borderRadius: '1rem', padding: '2rem', maxWidth: '28rem', width: '90%' }} onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Configuración</h2>
                <button onClick={() => setVerCfg(false)} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ color: 'white', fontWeight: 'bold', display: 'block', marginBottom: '0.75rem' }}>Dificultad</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {['facil', 'medio', 'dificil'].map(d => (
                    <button key={d} onClick={() => setDif(d)} style={{ padding: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold', textTransform: 'capitalize', backgroundColor: dif === d ? '#ffd700' : '#374151', color: dif === d ? '#000' : 'white', border: 'none', cursor: 'pointer' }}>
                      {d}
                    </button>
                  ))}
                </div>
                <p style={{ color: '#ffd700', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
                  {dif === 'facil' && '3 palabras fáciles, 8 intentos'}
                  {dif === 'medio' && '2 palabras medianas, 6 intentos'}
                  {dif === 'dificil' && '3 palabras difíciles, 4 intentos'}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>Sonido</span>
                <button onClick={() => setCfg({...cfg, sonido: !cfg.sonido})} style={{ backgroundColor: '#374151', padding: '0.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
                  {cfg.sonido ? <Volume2 style={{ color: 'white' }} size={24} /> : <VolumeX style={{ color: 'white' }} size={24} />}
                </button>
              </div>
            </div>
          </div>
        )}

        <div style={{ maxWidth: '72rem', width: '100%' }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', textAlign: 'center' }}>
              <div>
                <Trophy style={{ color: '#ffd700', margin: '0 auto' }} size={28} />
                <p style={{ color: 'white', fontSize: '0.8rem' }}>Puntos</p>
                <p style={{ color: '#ffd700', fontSize: '1.3rem', fontWeight: 'bold' }}>{puntos}</p>
              </div>
              <div>
                <Star style={{ color: '#ffd700', margin: '0 auto' }} size={28} />
                <p style={{ color: 'white', fontSize: '0.8rem' }}>Nivel</p>
                <p style={{ color: '#ffd700', fontSize: '1.3rem', fontWeight: 'bold' }}>{nivel}</p>
              </div>
              <div>
                <p style={{ fontSize: '1.8rem' }}>🔥</p>
                <p style={{ color: 'white', fontSize: '0.8rem' }}>Racha</p>
                <p style={{ color: '#ffd700', fontSize: '1.3rem', fontWeight: 'bold' }}>{racha}</p>
              </div>
              <div>
                <p style={{ fontSize: '1.8rem' }}>📝</p>
                <p style={{ color: 'white', fontSize: '0.8rem' }}>Palabras</p>
                <p style={{ color: '#ffd700', fontSize: '1.3rem', fontWeight: 'bold' }}>{palabrasOk}</p>
              </div>
            </div>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
            Elige Categoría
          </h1>
          <p style={{ color: 'white', textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Dificultad: <span style={{ color: '#ffd700', fontWeight: 'bold', textTransform: 'capitalize' }}>{dif}</span>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {Object.keys(datos).map(k => {
              const c = datos[k];
              return (
                <div key={k} onClick={() => elegir(k)} style={{ background: `linear-gradient(135deg, ${c.color} 0%, #000 100%)`, borderRadius: '1rem', padding: '2rem', border: '3px solid #ffd700', cursor: 'pointer', transition: 'transform 0.3s', textAlign: 'center' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{c.icono}</div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>{c.nombre.toUpperCase()}</h2>
                  <div style={{ backgroundColor: '#ffd700', color: '#000', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', display: 'inline-block' }}>
                    JUGAR
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const catActual = datos[cat];
  if (!juego) return null;

  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(135deg, ${catActual.color} 0%, #000 100%)`, padding: '1rem', position: 'relative' }}>
      {pausado && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: '#1F2937', padding: '3rem', borderRadius: '1rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>⏸️ PAUSA</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button onClick={() => setPausado(false)} style={{ backgroundColor: '#059669', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Continuar
              </button>
              <button onClick={() => { setPausado(false); setPantalla('menu'); }} style={{ backgroundColor: '#666', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Menú Principal
              </button>
            </div>
          </div>
        </div>
      )}

      {confeti && [...Array(30)].map((_, i) => (
        <div key={i} style={{ position: 'fixed', left: `${Math.random() * 100}%`, top: '-10px', width: '10px', height: '10px', backgroundColor: ['#ffd700', '#ff69b4', '#00ced1'][i % 3], animation: 'confetti 3s linear forwards', animationDelay: `${Math.random() * 0.5}s` }} />
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <button onClick={() => setPausado(true)} style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.75rem', borderRadius: '0.5rem',
          border: 'none', cursor: 'pointer' }}>
            <Pause style={{ color: 'white' }} size={24} />
          </button>
          
          {tiempo !== null && (
            <div style={{ backgroundColor: tiempo < 10 ? '#DC2626' : 'rgba(0,0,0,0.5)', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              ⏱️ {tiempo}s
            </div>
          )}
          
          <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '0.75rem 1.5rem', borderRadius: '0.5rem' }}>
            <span style={{ color: '#ffd700', fontSize: '1.2rem', fontWeight: 'bold' }}>🏆 {puntos}</span>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '1rem', padding: '2rem' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2rem', color: 'white', marginBottom: '2rem' }}>
            {catActual.icono} {catActual.nombre} - Nivel {nivel}
          </h1>

          {/* Power-ups */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => usarPowerUp('bomba')} disabled={powerUps.bomba === 0} style={{ backgroundColor: '#DC2626', color: 'white', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', opacity: powerUps.bomba === 0 ? 0.5 : 1 }}>
              💣 Bomba x{powerUps.bomba}
            </button>
            <button onClick={() => usarPowerUp('escudo')} disabled={powerUps.escudo === 0} style={{ backgroundColor: '#2563EB', color: 'white', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', opacity: powerUps.escudo === 0 ? 0.5 : 1 }}>
              🛡️ Escudo x{powerUps.escudo}
            </button>
            <button onClick={() => usarPowerUp('vision')} disabled={powerUps.vision === 0} style={{ backgroundColor: '#7C3AED', color: 'white', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', opacity: powerUps.vision === 0 ? 0.5 : 1 }}>
              👁️ Visión x{powerUps.vision}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Errores: {errores}/{limite}</p>
              <svg width="200" height="220" viewBox="0 0 200 220" style={{ margin: '0 auto' }}>
                <line x1="20" y1="180" x2="180" y2="180" stroke="#8B4513" strokeWidth="4"/>
                <line x1="50" y1="180" x2="50" y2="20" stroke="#8B4513" strokeWidth="4"/>
                <line x1="50" y1="20" x2="100" y2="20" stroke="#8B4513" strokeWidth="4"/>
                <line x1="100" y1="20" x2="100" y2="50" stroke="#8B4513" strokeWidth="4"/>
                {dibujar()}
              </svg>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {juego.palabra.split('').map((l, i) => (
                  <div key={i} style={{ width: '3rem', height: '4rem', backgroundColor: '#ffd700', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#000' }}>
                    {letras.includes(l) || l === ' ' ? l : ''}
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                <p style={{ color: 'white', fontWeight: 'bold' }}>💡 Pista: {juego.pista}</p>
              </div>

              {fin && (
                <div style={{ textAlign: 'center', padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: gano ? '#059669' : '#DC2626', marginBottom: '1rem' }}>
                  <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    {gano ? '¡GANASTE! 🎉' : '¡PERDISTE! 💀'}
                  </p>
                  {!gano && <p style={{ color: 'white', marginTop: '0.5rem' }}>La palabra era: {juego.palabra}</p>}
                  {gano && (
                    <button onClick={() => nuevaPalabra()} style={{ marginTop: '1rem', backgroundColor: '#ffd700', color: '#000', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                      Siguiente Palabra
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {teclado.map(l => {
              const usado = letras.includes(l);
              const correcto = usado && juego.palabra.includes(l);
              const incorrecto = usado && !juego.palabra.includes(l);
              
              return (
                <button 
                  key={l} 
                  onClick={() => clickLetra(l)} 
                  disabled={usado || fin || pausado}
                  style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    borderRadius: '0.5rem', 
                    fontWeight: 'bold', 
                    border: 'none', 
                    cursor: (usado || fin || pausado) ? 'not-allowed' : 'pointer',
                    opacity: (usado || fin) ? 0.5 : 1,
                    backgroundColor: correcto ? '#059669' : incorrecto ? '#DC2626' : '#ffd700',
                    color: correcto || incorrecto ? 'white' : '#000',
                    fontSize: '1.1rem'
                  }}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default JuegoAhorcado;
