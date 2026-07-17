import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mbeat-HUB — La salle de jeux',
  description: "Des petits jeux multijoueurs à lancer entre amis, sans compte ni installation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#0d0b16] antialiased selection:bg-fuchsia-500/30">
        {children}
      </body>
    </html>
  );
}
