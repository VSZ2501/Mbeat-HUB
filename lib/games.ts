export interface Game {
  id: string;
  name: string;
  tagline: string;
  url: string | null; // null = bientôt disponible
  accent: string;
  emoji: string;
  players: string;
}

export const GAMES: Game[] = [
  {
    id: 'musique-mbeat',
    name: 'Musique-Mbeat',
    tagline: 'Blind test entre amis. Trouve qui a mis la musique… sans te faire démasquer.',
    url: 'https://musique-mbeat.vercel.app',
    accent: '#e879f9',
    emoji: '🎵',
    players: '3 joueurs et +',
  },
  {
  id: 'blindtest-mbeat',
  name: 'BlindTest-Mbeat',
  tagline: 'Une playlist, un chrono. Qui reconnaît le plus vite ?',
  url: 'https://blindtest-mbeat.vercel.app',
  accent: '#22d3ee',
  emoji: '🎧',
  players: '2 joueurs et +',
  },
  {
    id: 'a-venir',
    name: 'Prochain jeu',
    tagline: 'Une idée en tête ? Le hub est prêt à l’accueillir.',
    url: null,
    accent: '#64748b',
    emoji: '🎲',
    players: '',
  },
];
