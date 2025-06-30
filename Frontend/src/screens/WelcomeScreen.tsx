// src/screens/WelcomeScreen.tsx
import heroImage from '@/assets/images/welcome-hero.png';
import { Page, Button, Toolbar } from 'konsta/react';

const WelcomeHeader = () => (
  <header className="relative w-full aspect-[4/3] md:aspect-video">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Welcome to Achievement"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
  </header>
);

const WelcomeMain = () => (
  <main className="flex-1 flex flex-col justify-center items-center px-6 pt-8 text-center md:text-left">
    <h1 className="text-gray-900 text-3xl font-bold leading-tight md:text-4xl">
      Begin Your Achievement Journey
    </h1>
    <p className="text-gray-700 text-base font-normal leading-relaxed mt-3 md:text-lg">
      Turn your idea into a real-world, tangible project in just four weeks.
    </p>
  </main>
);

const WelcomeFooter = () => (
  <Toolbar>
    <Button
      className="w-full"
      large
      rounded
      aria-label="Get started with Achievement"
    >
      <span className="truncate">Get Started</span>
    </Button>
  </Toolbar>
);

function WelcomeScreen() {
  return (
    <Page
      className="flex flex-col h-full justify-between"
      style={{ padding: '0.5cm' }}
      data-testid="welcome-screen"
    >
      <WelcomeHeader />
      <WelcomeMain />
      <WelcomeFooter />
    </Page>
  );
}

export default WelcomeScreen;
