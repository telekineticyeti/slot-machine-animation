document.addEventListener('DOMContentLoaded', () => {
  const tl_grabbyHand = gsap
    .timeline()
    .to('.paw', { y: '-88px', x: '40px', duration: 1, delay: 0 })
    .set('.paw', { backgroundImage: "url('/images/paw-closed.png')" })
    .to('.paw', { y: '-48px', x: '40px', duration: 1, delay: 0.5 })
    .set('.paw', { backgroundImage: "url('/images/paw-open.png')" })
    .to('.paw', { y: '5px', x: '0px', duration: 1, delay: 0 });

  const tl_lever = gsap
    .timeline()
    .to('.knob', { y: '40px', duration: 1 }, 1.5)
    .to('.shaft', { height: '4px', duration: 1 }, '<')
    .to(
      '.machine',
      {
        scaleY: '.95',
        scaleX: '1.05',
        duration: 0.5,
        transformOrigin: 'bottom',
      },
      '-=0.8'
    )
    .to('.lights', { y: '5px', duration: 0.5 }, '<')
    .to('.knob', { y: '0', duration: 0.5 }, 2.5)
    .to('.shaft', { height: '43px', duration: 0.5 }, '<')
    .to(
      '.machine',
      {
        scaleY: '1',
        scaleX: '1',
        duration: 0.8,
        transformOrigin: 'bottom',
        ease: 'bounce.out(2, 0.5)',
      },
      '-=0.5'
    )
    .to('.lights', { y: '0', duration: 0.5 }, '<')
    .to('.pom-pom', { y: '-11px', duration: 0.75, ease: 'power3.out' }, '-=0.5')
    .to(
      '.pom-pom',
      { y: '0', duration: 0.5, ease: 'bounce.out(2, 0.5)' },
      '-=0.15'
    );

  const tl_glyphs1 = gsap
    .timeline({ delay: 3 })
    .to('.column1', {
      backgroundPositionY: '+=898px',
      duration: 2,
      ease: 'none',
    })
    .to('.column1', {
      backgroundPositionY: '+=12px',
      duration: 0.5,
      ease: 'bounce.out(1, .5)',
    });

  const tl_glyphs2 = gsap
    .timeline({ delay: 3 })
    .to('.column2', {
      backgroundPositionY: '+=1900px',
      duration: 3,
      ease: 'none',
    })
    .to('.column2', {
      backgroundPositionY: '+=12px',
      duration: 0.5,
      ease: 'bounce.out(1, .5)',
    });

  const tl_glyphs3 = gsap
    .timeline({ delay: 3 })
    .to('.column3', {
      backgroundPositionY: '+=2500px',
      duration: 4.5,
      ease: 'none',
    })
    .to('.column3', {
      backgroundPositionY: '+=12px',
      duration: 0.5,
      ease: 'bounce.out(1, .5)',
    });

  const tl_chickenDinner = gsap
    .timeline({ repeat: -1, delay: 8, yoyo: true })
    .to('.column-backdrop', {
      background:
        'linear-gradient(0deg,rgba(131, 118, 108, 1) 0%,rgba(237, 197, 0, ) 50%,rgba(196, 243, 255, 1) 100%',
      duration: 0.5,
    })
    .set(
      '.pom-pom',
      {
        backgroundImage: "url('images/dragon-on.png')",
      },
      '-=1'
    );

  const tl_winLights = gsap
    .timeline({ repeat: -1, delay: 8 })
    .to('.lights', {
      filter: 'brightness(2)',
      duration: 0.3,
    })
    .to(
      '.glyphs',
      {
        filter: 'brightness(2)',
        duration: 0.3,
      },
      '<'
    );

  const tl_pomLights = gsap
    .timeline({ repeat: -1, delay: 8 })
    .set('.pom-pom-lights', { opacity: 1 })
    .set('.pom-pom-lights', {
      backgroundImage: "url('images/lights3.png')",
      delay: 0.5,
    })
    .set('.pom-pom-lights', {
      backgroundImage: "url('images/lights2.png')",
      delay: 0.5,
    });

  const masterTimeline = gsap.timeline({ repeat: -1, duration: 12, delay: 1 });
  masterTimeline
    .add(tl_grabbyHand, 0)
    .add(tl_lever, 0)
    .add(tl_glyphs1, 0)
    .add(tl_glyphs2, 0)
    .add(tl_glyphs3, 0)
    .add(tl_chickenDinner, 0)
    .add(tl_winLights, 0)
    .add(tl_pomLights, 0);
});
