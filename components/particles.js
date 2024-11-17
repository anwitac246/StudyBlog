'use client'
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // Initialize the tsparticles instance
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="relative h-screen w-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#ff0000', '#00ff00', '#0000ff'],
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
        <h1 className="text-slate-900 dark:text-white text-6xl font-bold">Fancy Particles</h1>
      </div>
    </div>
  );
};

export default ParticlesBackground;
