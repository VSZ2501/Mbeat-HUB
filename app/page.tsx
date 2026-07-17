import { GAMES } from '@/lib/games';
import { GameCard } from '@/components/GameCard';

export default function Home() {
  const available = GAMES.filter((g) => g.url).length;

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-16">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">La salle de jeux</p>
        <h1 className="mt-2 text-5xl font-black tracking-tight text-white sm:text-6xl">
          Mbeat<span className="text-fuchsia-400">-HUB</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          Des petits jeux multijoueurs à lancer entre amis. Pas de compte, pas
          d'installation : un lien, un pseudo, et c'est parti.
        </p>
      </header>

      <section className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Jeux disponibles">
        {GAMES.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </section>

      <footer className="mt-auto pt-16 text-center text-xs text-zinc-600">
        {available} jeu{available > 1 ? 'x' : ''} disponible{available > 1 ? 's' : ''} · Mbeat-HUB
      </footer>
    </main>
  );
}
