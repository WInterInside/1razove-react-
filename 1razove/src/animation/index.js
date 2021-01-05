import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, 0.1, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, 0.1, { autoAlpha: 0, ease: Power1.easeInOut })
    .from(contentInner, 0.1, { autoAlpha: 0, delay: 0.1, ease: Power1.easeIn });

  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.2;
  let timeline;

  timeline = getDefaultTimeline(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.1, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}