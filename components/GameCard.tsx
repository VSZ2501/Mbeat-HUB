'use client';

import type { Game } from '@/lib/games';

function Equalizer({ color }: { color: string }) {
  return (
    <div className="flex h-6 items-end gap-1" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="w-1.5 rounded-full motion-safe:animate-pulse"
          style={{
            backgroundColor: color,
            height: `${[60, 100, 40, 80, 55][i]}%`,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '0.9s',
          }}
        />
      ))}
    </div>
  );
}

export function GameCard({ game }: { game: Game }) {
  const available = !!game.url;

  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span className="text-4xl" aria-hidden>{game.emoji}</span>
        {available ? (
          <Equalizer color={game.accent} />
        ) : (
          <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-zinc-500">
            Bientôt
          </span>
        )}
      </div>
      <div className="mt-4">
        <h2
          className="text-xl font-bold"
          style={{ color: available ? game.accent : '#71717a' }}
        >
          {game.name}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">{game.tagline}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-zinc-500">{game.players}</span>
        {available && (
          <span
            className="font-semibold transition group-hover:translate-x-1"
            style={{ color: game.accent }}
          >
            Jouer →
          </span>
        )}
      </div>
    </>
  );

  if (!available) {
    return (
      <div className="flex flex-col rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5 opacity-70">
        {inner}
      </div>
    );
  }

  return (
    <a
      href={game.url!}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        boxShadow: `0 0 0 0 transparent`,
        outlineColor: game.accent,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 32px -8px ${game.accent}55`;
        e.currentTarget.style.borderColor = `${game.accent}80`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0 0 transparent';
        e.currentTarget.style.borderColor = '';
      }}
    >
      {inner}
    </a>
  );
}
