
import ScrollMagic from 'scrollmagic';

const scrollMagicProjects = () => {

  const controller = new ScrollMagic.Controller();
  const revealElements = document.getElementsByClassName('digit');
  console.log(revealElements);
  for (let i = 0;i < revealElements.length;i ++) { // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
      offset: 150,												 // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(revealElements[i], 'visible') // add class toggle
      .addTo(controller);
  }
};
const scrollMagicProjectsRight = () => {

  const controller = new ScrollMagic.Controller();
  const revealElements = document.getElementsByClassName('digit__right');
  console.log(revealElements);
  for (let i = 0;i < revealElements.length;i ++) { // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
      offset: 150,												 // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(revealElements[i], 'visible__right') // add class toggle
      .addTo(controller);
  }
};



const scrollMagicUnderline = () => {
  const controller = new ScrollMagic.Controller();
  const revealElements = document.getElementsByClassName('digit__underline');
  const $triggerElement = document.getElementsByClassName('scrollmagic__triggerElement');
  console.log(revealElements);
  for (let i = 0;i < revealElements.length;i ++) { // create a scene for each element
    new ScrollMagic.Scene({
      triggerElement: $triggerElement[i], // y value not modified, so we can use element as trigger as well
      offset: 200,												 // start a little later
      triggerHook: 0.9,
    })
      .setClassToggle(revealElements[i], 'visible__underline') // add class toggle
      .addTo(controller);
  }
};

const scrollMagicServicesLink = () => {
  const controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 650}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: '#sec1'})
    .setClassToggle('#high1', 'active') // add class toggle

    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: '#sec2'})
    .setClassToggle('#high2', 'active') // add class toggle

    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: '#sec3'})
    .setClassToggle('#high3', 'active') // add class toggle

    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: '#sec4'})
    .setClassToggle('#high4', 'active') // add class toggle

    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: '#sec5'})
    .setClassToggle('#high5', 'active') // add class toggle

    .addTo(controller);


};



const init = () => {
  scrollMagicProjects();
  scrollMagicUnderline();
  scrollMagicServicesLink();
  scrollMagicProjectsRight();
};

init();

