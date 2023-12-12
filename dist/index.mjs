import e from "react";
function c({ img: t, title: r, children: l }) {
  return /* @__PURE__ */ e.createElement("article", null, /* @__PURE__ */ e.createElement("img", { src: t.src, alt: t.alt }), /* @__PURE__ */ e.createElement("h2", null, r), l);
}
export {
  c as Card
};
