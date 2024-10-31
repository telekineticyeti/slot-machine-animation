document.addEventListener('DOMContentLoaded', () => {
  // const timeline = gsap.timeline({ repeat: -1 });
  // timeline
  //   .to('.knob', { opacity: 1, duration: 0.5, delay: 1.5 }) // 1.5s delay, 0.5s active play
  //   .to('.knob', { opacity: 0, duration: 0, delay: 6 }); // 6s idle before repeat

  const tl_grabbyHand = gsap.timeline({ repeatin: -1 });

  tl_grabbyHand
    .to('.paw', { y: '-88px', x: '40px', duration: 1, delay: 0 })
    .set('.paw', { backgroundImage: "url('/images/paw-closed.png')" })
    .to('.paw', { y: '-48px', x: '40px', duration: 1, delay: 0.5 })
    .set('.paw', { backgroundImage: "url('/images/paw-open.png')" })
    .to('.paw', { y: '5px', x: '0px', duration: 1, delay: 0 });

  const masterTimeline = gsap.timeline({ repeat: -1, duration: 8 });
  masterTimeline.add(tl_grabbyHand, 0);
});
