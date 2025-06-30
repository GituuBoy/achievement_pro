// src/screens/WelcomeScreen.tsx
import heroImage from '@/assets/images/welcome-hero.png';
import { Page, Block, Button } from 'konsta/react';

function WelcomeScreen() {
  return (
    <Page className="flex flex-col h-full justify-between bg-white" data-testid="welcome-screen">
      {/* Top Section: Hero Image */}
      <div
        className="w-full h-[50vh] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Middle Section: Text Content */}
      <Block className="px-6 pt-8 text-center">
        <h1 className="text-gray-900 text-[32px] font-bold leading-tight">
          Begin Your Achievement Journey
        </h1>
        <p className="text-gray-700 text-lg font-normal leading-relaxed mt-3">
          Turn your idea into a real-world, tangible project in just four weeks.
        </p>
      </Block>

      {/* Bottom Section: Action Button */}
      <Block className="px-6 pb-12 pt-4">
        <Button
          className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-lg font-semibold leading-normal transition-opacity hover:opacity-90 active:opacity-80"
        >
          <span className="truncate">Get Started</span>
        </Button>
      </Block>
    </Page>
  );
}

export default WelcomeScreen;