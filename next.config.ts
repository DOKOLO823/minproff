import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Active l'exportation statique pour générer le dossier /out
  output: 'export',

  // 2. Désactive l'optimisation d'image par défaut (car elle nécessite un serveur Node.js)
  // Indispensable si tu utilises la balise <Image /> de Next.js avec "output: export"
  images: {
    unoptimized: true,
  },

  // 3. Optionnel : Si tu déploies sur GitHub Pages (sous-répertoire), décommente les lignes ci-dessous :
  // basePath: '/nom-de-ton-repo',
  // assetPrefix: '/nom-de-ton-repo',
};

export default nextConfig;