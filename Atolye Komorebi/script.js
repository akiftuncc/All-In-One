// FIXING FLEXBOX GAP PROPERTY MISSING IN SOME SAFARI VERSIONS
//******************************************************
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

////////////////////////

const sectionHeroEl = document.querySelector(".nav-background-image-div");
const navbarSticky = document.querySelector(".nav-navbar");
const linkColor = document.querySelectorAll(".color-for-nav-links");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      navbarSticky.classList.add("sticky");
      linkColor.forEach((element) => {
        element.style.color = "#444";
      });
    }

    if (ent.isIntersecting) {
      navbarSticky.classList.remove("sticky");
      linkColor.forEach((element) => {
        element.style.color = "#fff";
      });
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
