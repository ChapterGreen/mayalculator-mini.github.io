(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const o of l) if (o.type === "childList") for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: true, subtree: true });
  function n(l) {
    const o = {};
    return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function i(l) {
    if (l.ep) return;
    l.ep = true;
    const o = n(l);
    fetch(l.href, o);
  }
})();
const zt = false, Vt = (e, t) => e === t, Ut = Symbol("solid-track"), Qe = { equals: Vt };
let Ot = Mt;
const Le = 1, et = 2, At = { owned: null, cleanups: null, context: null, owner: null }, st = {};
var ie = null;
let dt = null, Wt = null, ee = null, pe = null, Fe = null, rt = 0;
function Ke(e, t) {
  const n = ee, i = ie, l = e.length === 0, o = t === void 0 ? i : t, r = l ? At : { owned: null, cleanups: null, context: o ? o.context : null, owner: o }, s = l ? e : () => e(() => Oe(() => Ge(r)));
  ie = r, ee = null;
  try {
    return Me(s, true);
  } finally {
    ee = n, ie = i;
  }
}
function Te(e, t) {
  t = t ? Object.assign({}, Qe, t) : Qe;
  const n = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 }, i = (l) => (typeof l == "function" && (l = l(n.value)), Et(n, l));
  return [Lt.bind(n), i];
}
function jt(e, t, n) {
  const i = at(e, t, true, Le);
  Ve(i);
}
function q(e, t, n) {
  const i = at(e, t, false, Le);
  Ve(i);
}
function tt(e, t, n) {
  Ot = en;
  const i = at(e, t, false, Le);
  i.user = true, Fe ? Fe.push(i) : Ve(i);
}
function be(e, t, n) {
  n = n ? Object.assign({}, Qe, n) : Qe;
  const i = at(e, t, true, 0);
  return i.observers = null, i.observerSlots = null, i.comparator = n.equals || void 0, Ve(i), Lt.bind(i);
}
function Gt(e) {
  return e && typeof e == "object" && "then" in e;
}
function Kt(e, t, n) {
  let i, l, o;
  typeof t == "function" ? (i = e, l = t, o = {}) : (i = true, l = e, o = t || {});
  let r = null, s = st, u = false, f = "initialValue" in o, h = typeof i == "function" && be(i);
  const d = /* @__PURE__ */ new Set(), [m, g] = (o.storage || Te)(o.initialValue), [N, C] = Te(void 0), [$, k] = Te(void 0, { equals: false }), [y, w] = Te(f ? "ready" : "unresolved");
  function p(B, D, A, E) {
    return r === B && (r = null, E !== void 0 && (f = true), (B === s || D === s) && o.onHydrated && queueMicrotask(() => o.onHydrated(E, { value: D })), s = st, _(D, A)), D;
  }
  function _(B, D) {
    Me(() => {
      D === void 0 && g(() => B), w(D !== void 0 ? "errored" : f ? "ready" : "unresolved"), C(D);
      for (const A of d.keys()) A.decrement();
      d.clear();
    }, false);
  }
  function P() {
    const B = Zt, D = m(), A = N();
    if (A !== void 0 && !r) throw A;
    return ee && ee.user, D;
  }
  function S(B = true) {
    if (B !== false && u) return;
    u = false;
    const D = h ? h() : i;
    if (D == null || D === false) {
      p(r, Oe(m));
      return;
    }
    let A;
    const E = s !== st ? s : Oe(() => {
      try {
        return l(D, { value: m(), refetching: B });
      } catch (M) {
        A = M;
      }
    });
    if (A !== void 0) {
      p(r, void 0, qe(A), D);
      return;
    } else if (!Gt(E)) return p(r, E, void 0, D), E;
    return r = E, "v" in E ? (E.s === 1 ? p(r, E.v, void 0, D) : p(r, void 0, qe(E.v), D), E) : (u = true, queueMicrotask(() => u = false), Me(() => {
      w(f ? "refreshing" : "pending"), k();
    }, false), E.then((M) => p(E, M, void 0, D), (M) => p(E, void 0, qe(M), D)));
  }
  Object.defineProperties(P, { state: { get: () => y() }, error: { get: () => N() }, loading: { get() {
    const B = y();
    return B === "pending" || B === "refreshing";
  } }, latest: { get() {
    if (!f) return P();
    const B = N();
    if (B && !r) throw B;
    return m();
  } } });
  let z = ie;
  return h ? jt(() => (z = ie, S(false))) : S(false), [P, { refetch: (B) => Xt(z, () => S(B)), mutate: g }];
}
function Oe(e) {
  if (ee === null) return e();
  const t = ee;
  ee = null;
  try {
    return e();
  } finally {
    ee = t;
  }
}
function qt(e) {
  tt(() => Oe(e));
}
function Ft(e) {
  return ie === null || (ie.cleanups === null ? ie.cleanups = [e] : ie.cleanups.push(e)), e;
}
function Xt(e, t) {
  const n = ie, i = ee;
  ie = e, ee = null;
  try {
    return Me(t, true);
  } catch (l) {
    vt(l);
  } finally {
    ie = n, ee = i;
  }
}
const [fi, hi] = Te(false);
let Zt;
function Lt() {
  if (this.sources && this.state) if (this.state === Le) Ve(this);
  else {
    const e = pe;
    pe = null, Me(() => it(this), false), pe = e;
  }
  if (ee) {
    const e = this.observers ? this.observers.length : 0;
    ee.sources ? (ee.sources.push(this), ee.sourceSlots.push(e)) : (ee.sources = [this], ee.sourceSlots = [e]), this.observers ? (this.observers.push(ee), this.observerSlots.push(ee.sources.length - 1)) : (this.observers = [ee], this.observerSlots = [ee.sources.length - 1]);
  }
  return this.value;
}
function Et(e, t, n) {
  let i = e.value;
  return (!e.comparator || !e.comparator(i, t)) && (e.value = t, e.observers && e.observers.length && Me(() => {
    for (let l = 0; l < e.observers.length; l += 1) {
      const o = e.observers[l], r = dt && dt.running;
      r && dt.disposed.has(o), (r ? !o.tState : !o.state) && (o.pure ? pe.push(o) : Fe.push(o), o.observers && It(o)), r || (o.state = Le);
    }
    if (pe.length > 1e6) throw pe = [], new Error();
  }, false)), t;
}
function Ve(e) {
  if (!e.fn) return;
  Ge(e);
  const t = rt;
  Jt(e, e.value, t);
}
function Jt(e, t, n) {
  let i;
  const l = ie, o = ee;
  ee = ie = e;
  try {
    i = e.fn(t);
  } catch (r) {
    return e.pure && (e.state = Le, e.owned && e.owned.forEach(Ge), e.owned = null), e.updatedAt = n + 1, vt(r);
  } finally {
    ee = o, ie = l;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? Et(e, i) : e.value = i, e.updatedAt = n);
}
function at(e, t, n, i = Le, l) {
  const o = { fn: e, state: i, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: t, owner: ie, context: ie ? ie.context : null, pure: n };
  return ie === null || ie !== At && (ie.owned ? ie.owned.push(o) : ie.owned = [o]), o;
}
function nt(e) {
  if (e.state === 0) return;
  if (e.state === et) return it(e);
  if (e.suspense && Oe(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < rt); ) e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--) if (e = t[n], e.state === Le) Ve(e);
  else if (e.state === et) {
    const i = pe;
    pe = null, Me(() => it(e, t[0]), false), pe = i;
  }
}
function Me(e, t) {
  if (pe) return e();
  let n = false;
  t || (pe = []), Fe ? n = true : Fe = [], rt++;
  try {
    const i = e();
    return Qt(n), i;
  } catch (i) {
    n || (Fe = null), pe = null, vt(i);
  }
}
function Qt(e) {
  if (pe && (Mt(pe), pe = null), e) return;
  const t = Fe;
  Fe = null, t.length && Me(() => Ot(t), false);
}
function Mt(e) {
  for (let t = 0; t < e.length; t++) nt(e[t]);
}
function en(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const i = e[t];
    i.user ? e[n++] = i : nt(i);
  }
  for (t = 0; t < n; t++) nt(e[t]);
}
function it(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const i = e.sources[n];
    if (i.sources) {
      const l = i.state;
      l === Le ? i !== t && (!i.updatedAt || i.updatedAt < rt) && nt(i) : l === et && it(i, t);
    }
  }
}
function It(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = et, n.pure ? pe.push(n) : Fe.push(n), n.observers && It(n));
  }
}
function Ge(e) {
  let t;
  if (e.sources) for (; e.sources.length; ) {
    const n = e.sources.pop(), i = e.sourceSlots.pop(), l = n.observers;
    if (l && l.length) {
      const o = l.pop(), r = n.observerSlots.pop();
      i < l.length && (o.sourceSlots[r] = i, l[i] = o, n.observerSlots[i] = r);
    }
  }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) Ge(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) Ge(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function qe(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", { cause: e });
}
function vt(e, t = ie) {
  throw qe(e);
}
const tn = Symbol("fallback");
function Ct(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function nn(e, t, n = {}) {
  let i = [], l = [], o = [], r = 0, s = t.length > 1 ? [] : null;
  return Ft(() => Ct(o)), () => {
    let u = e() || [], f = u.length, h, d;
    return u[Ut], Oe(() => {
      let g, N, C, $, k, y, w, p, _;
      if (f === 0) r !== 0 && (Ct(o), o = [], i = [], l = [], r = 0, s && (s = [])), n.fallback && (i = [tn], l[0] = Ke((P) => (o[0] = P, n.fallback())), r = 1);
      else if (r === 0) {
        for (l = new Array(f), d = 0; d < f; d++) i[d] = u[d], l[d] = Ke(m);
        r = f;
      } else {
        for (C = new Array(f), $ = new Array(f), s && (k = new Array(f)), y = 0, w = Math.min(r, f); y < w && i[y] === u[y]; y++) ;
        for (w = r - 1, p = f - 1; w >= y && p >= y && i[w] === u[p]; w--, p--) C[p] = l[w], $[p] = o[w], s && (k[p] = s[w]);
        for (g = /* @__PURE__ */ new Map(), N = new Array(p + 1), d = p; d >= y; d--) _ = u[d], h = g.get(_), N[d] = h === void 0 ? -1 : h, g.set(_, d);
        for (h = y; h <= w; h++) _ = i[h], d = g.get(_), d !== void 0 && d !== -1 ? (C[d] = l[h], $[d] = o[h], s && (k[d] = s[h]), d = N[d], g.set(_, d)) : o[h]();
        for (d = y; d < f; d++) d in C ? (l[d] = C[d], o[d] = $[d], s && (s[d] = k[d], s[d](d))) : l[d] = Ke(m);
        l = l.slice(0, r = f), i = u.slice(0);
      }
      return l;
    });
    function m(g) {
      if (o[d] = g, s) {
        const [N, C] = Te(d);
        return s[d] = C, t(u[d], N);
      }
      return t(u[d]);
    }
  };
}
function te(e, t) {
  return Oe(() => e(t || {}));
}
const ln = (e) => `Stale read from <${e}>.`;
function Be(e) {
  const t = "fallback" in e && { fallback: () => e.fallback };
  return be(nn(() => e.each, e.children, t || void 0));
}
function on(e) {
  const t = e.keyed, n = be(() => e.when, void 0, void 0), i = t ? n : be(n, void 0, { equals: (l, o) => !l == !o });
  return be(() => {
    const l = i();
    if (l) {
      const o = e.children;
      return typeof o == "function" && o.length > 0 ? Oe(() => o(t ? l : () => {
        if (!Oe(i)) throw ln("Show");
        return n();
      })) : o;
    }
    return e.fallback;
  }, void 0, void 0);
}
function rn(e, t, n) {
  let i = n.length, l = t.length, o = i, r = 0, s = 0, u = t[l - 1].nextSibling, f = null;
  for (; r < l || s < o; ) {
    if (t[r] === n[s]) {
      r++, s++;
      continue;
    }
    for (; t[l - 1] === n[o - 1]; ) l--, o--;
    if (l === r) {
      const h = o < i ? s ? n[s - 1].nextSibling : n[o - s] : u;
      for (; s < o; ) e.insertBefore(n[s++], h);
    } else if (o === s) for (; r < l; ) (!f || !f.has(t[r])) && t[r].remove(), r++;
    else if (t[r] === n[o - 1] && n[s] === t[l - 1]) {
      const h = t[--l].nextSibling;
      e.insertBefore(n[s++], t[r++].nextSibling), e.insertBefore(n[--o], h), t[l] = n[o];
    } else {
      if (!f) {
        f = /* @__PURE__ */ new Map();
        let d = s;
        for (; d < o; ) f.set(n[d], d++);
      }
      const h = f.get(t[r]);
      if (h != null) if (s < h && h < o) {
        let d = r, m = 1, g;
        for (; ++d < l && d < o && !((g = f.get(t[d])) == null || g !== h + m); ) m++;
        if (m > h - s) {
          const N = t[r];
          for (; s < h; ) e.insertBefore(n[s++], N);
        } else e.replaceChild(n[s++], t[r++]);
      } else r++;
      else t[r++].remove();
    }
  }
}
const xt = "_$DX_DELEGATE";
function an(e, t, n, i = {}) {
  let l;
  return Ke((o) => {
    l = o, t === document ? e() : x(t, e(), t.firstChild ? null : void 0, n);
  }, i.owner), () => {
    l(), t.textContent = "";
  };
}
function de(e, t, n, i) {
  let l;
  const o = () => {
    const s = document.createElement("template");
    return s.innerHTML = e, s.content.firstChild;
  }, r = () => (l || (l = o())).cloneNode(true);
  return r.cloneNode = r, r;
}
function Ae(e, t = window.document) {
  const n = t[xt] || (t[xt] = /* @__PURE__ */ new Set());
  for (let i = 0, l = e.length; i < l; i++) {
    const o = e[i];
    n.has(o) || (n.add(o), t.addEventListener(o, sn));
  }
}
function Re(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function a(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function Ne(e, t, n, i) {
  if (i) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const l = n[0];
    e.addEventListener(t, n[0] = (o) => l.call(e, n[1], o));
  } else e.addEventListener(t, n, typeof n != "function" && n);
}
function le(e, t, n) {
  return Oe(() => e(t, n));
}
function x(e, t, n, i) {
  if (n !== void 0 && !i && (i = []), typeof t != "function") return lt(e, t, i, n);
  q((l) => lt(e, t(), l, n), i);
}
function sn(e) {
  let t = e.target;
  const n = `$$${e.type}`, i = e.target, l = e.currentTarget, o = (u) => Object.defineProperty(e, "target", { configurable: true, value: u }), r = () => {
    const u = t[n];
    if (u && !t.disabled) {
      const f = t[`${n}Data`];
      if (f !== void 0 ? u.call(t, f, e) : u.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && o(t.host), true;
  }, s = () => {
    for (; r() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", { configurable: true, get() {
    return t || document;
  } }), e.composedPath) {
    const u = e.composedPath();
    o(u[0]);
    for (let f = 0; f < u.length - 2 && (t = u[f], !!r()); f++) {
      if (t._$host) {
        t = t._$host, s();
        break;
      }
      if (t.parentNode === l) break;
    }
  } else s();
  o(i);
}
function lt(e, t, n, i, l) {
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const o = typeof t, r = i !== void 0;
  if (e = r && n[0] && n[0].parentNode || e, o === "string" || o === "number") {
    if (o === "number" && (t = t.toString(), t === n)) return n;
    if (r) {
      let s = n[0];
      s && s.nodeType === 3 ? s.data !== t && (s.data = t) : s = document.createTextNode(t), n = ze(e, n, i, s);
    } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || o === "boolean") n = ze(e, n, i);
  else {
    if (o === "function") return q(() => {
      let s = t();
      for (; typeof s == "function"; ) s = s();
      n = lt(e, s, n, i);
    }), () => n;
    if (Array.isArray(t)) {
      const s = [], u = n && Array.isArray(n);
      if (ut(s, t, n, l)) return q(() => n = lt(e, s, n, i, true)), () => n;
      if (s.length === 0) {
        if (n = ze(e, n, i), r) return n;
      } else u ? n.length === 0 ? pt(e, s, i) : rn(e, n, s) : (n && ze(e), pt(e, s));
      n = s;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (r) return n = ze(e, n, i, t);
        ze(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function ut(e, t, n, i) {
  let l = false;
  for (let o = 0, r = t.length; o < r; o++) {
    let s = t[o], u = n && n[e.length], f;
    if (!(s == null || s === true || s === false)) if ((f = typeof s) == "object" && s.nodeType) e.push(s);
    else if (Array.isArray(s)) l = ut(e, s, u) || l;
    else if (f === "function") if (i) {
      for (; typeof s == "function"; ) s = s();
      l = ut(e, Array.isArray(s) ? s : [s], Array.isArray(u) ? u : [u]) || l;
    } else e.push(s), l = true;
    else {
      const h = String(s);
      u && u.nodeType === 3 && u.data === h ? e.push(u) : e.push(document.createTextNode(h));
    }
  }
  return l;
}
function pt(e, t, n = null) {
  for (let i = 0, l = t.length; i < l; i++) e.insertBefore(t[i], n);
}
function ze(e, t, n, i) {
  if (n === void 0) return e.textContent = "";
  const l = i || document.createTextNode("");
  if (t.length) {
    let o = false;
    for (let r = t.length - 1; r >= 0; r--) {
      const s = t[r];
      if (l !== s) {
        const u = s.parentNode === e;
        !o && !r ? u ? e.replaceChild(l, s) : e.insertBefore(l, n) : u && s.remove();
      } else o = true;
    }
  } else e.insertBefore(l, n);
  return [l];
}
function Ht(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (t = 0; t < l; t++) e[t] && (n = Ht(e[t])) && (i && (i += " "), i += n);
  } else for (n in e) e[n] && (i && (i += " "), i += n);
  return i;
}
function dn() {
  for (var e, t, n = 0, i = "", l = arguments.length; n < l; n++) (e = arguments[n]) && (t = Ht(e)) && (i && (i += " "), i += t);
  return i;
}
const Tt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $t = dn, T = (e, t) => (n) => {
  var i;
  if ((t == null ? void 0 : t.variants) == null) return $t(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: l, defaultVariants: o } = t, r = Object.keys(l).map((f) => {
    const h = n == null ? void 0 : n[f], d = o == null ? void 0 : o[f];
    if (h === null) return null;
    const m = Tt(h) || Tt(d);
    return l[f][m];
  }), s = n && Object.entries(n).reduce((f, h) => {
    let [d, m] = h;
    return m === void 0 || (f[d] = m), f;
  }, {}), u = t == null || (i = t.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((f, h) => {
    let { class: d, className: m, ...g } = h;
    return Object.entries(g).every((N) => {
      let [C, $] = N;
      return Array.isArray($) ? $.includes({ ...o, ...s }[C]) : { ...o, ...s }[C] === $;
    }) ? [...f, d, m] : f;
  }, []);
  return $t(e, r, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
let Ce;
const Rt = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Rt.decode();
let Ue = null;
function Xe() {
  return (Ue === null || Ue.byteLength === 0) && (Ue = new Uint8Array(Ce.memory.buffer)), Ue;
}
function ct(e, t) {
  return e = e >>> 0, Rt.decode(Xe().subarray(e, e + t));
}
function cn(e) {
  const t = Ce.__externref_table_alloc();
  return Ce.__wbindgen_export_2.set(t, e), t;
}
function Dt(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const i = cn(n);
    Ce.__wbindgen_exn_store(i);
  }
}
let ft = 0;
const Ze = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, un = typeof Ze.encodeInto == "function" ? function(e, t) {
  return Ze.encodeInto(e, t);
} : function(e, t) {
  const n = Ze.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function fn(e, t, n) {
  if (n === void 0) {
    const s = Ze.encode(e), u = t(s.length, 1) >>> 0;
    return Xe().subarray(u, u + s.length).set(s), ft = s.length, u;
  }
  let i = e.length, l = t(i, 1) >>> 0;
  const o = Xe();
  let r = 0;
  for (; r < i; r++) {
    const s = e.charCodeAt(r);
    if (s > 127) break;
    o[l + r] = s;
  }
  if (r !== i) {
    r !== 0 && (e = e.slice(r)), l = n(l, i, i = r + e.length * 3, 1) >>> 0;
    const s = Xe().subarray(l + r, l + i), u = un(e, s);
    r += u.written, l = n(l, i, r, 1) >>> 0;
  }
  return ft = r, l;
}
function hn(e) {
  return e == null;
}
let Ie = null;
function Nt() {
  return (Ie === null || Ie.buffer.detached === true || Ie.buffer.detached === void 0 && Ie.buffer !== Ce.memory.buffer) && (Ie = new DataView(Ce.memory.buffer)), Ie;
}
function kt(e) {
  const t = Ce.__wbindgen_export_2.get(e);
  return Ce.__externref_table_dealloc(e), t;
}
function yn(e) {
  const t = Ce.get_mayan_calendar(e);
  if (t[2]) throw kt(t[1]);
  return kt(t[0]);
}
async function vn(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (i) {
      if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
      else throw i;
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
  }
}
function bn() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_parse_def2e24ef1252aff = function() {
    return Dt(function(t, n) {
      return JSON.parse(ct(t, n));
    }, arguments);
  }, e.wbg.__wbg_stringify_f7ed6987935b4a24 = function() {
    return Dt(function(t) {
      return JSON.stringify(t);
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = Ce.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0;
  }, e.wbg.__wbindgen_string_get = function(t, n) {
    const i = n, l = typeof i == "string" ? i : void 0;
    var o = hn(l) ? 0 : fn(l, Ce.__wbindgen_malloc, Ce.__wbindgen_realloc), r = ft;
    Nt().setInt32(t + 4 * 1, r, true), Nt().setInt32(t + 4 * 0, o, true);
  }, e.wbg.__wbindgen_string_new = function(t, n) {
    return ct(t, n);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(ct(t, n));
  }, e;
}
function gn(e, t) {
  return Ce = e.exports, bt.__wbindgen_wasm_module = t, Ie = null, Ue = null, Ce.__wbindgen_start(), Ce;
}
async function bt(e) {
  if (Ce !== void 0) return Ce;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("https://chaptergreen.github.io/mayalculator-mini.github.io/assets/mayalculator_core_logic_bg-CaARZF4m.wasm"));
  const t = bn();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: i } = await vn(await e, t);
  return gn(n, i);
}
const We = 9999, je = 1, ot = new Date(0, 0, 0, 0, 0, 0, 0), ht = new Date(We, 11, 31, 0, 0, 0, 0), yt = (() => {
  const e = new Date(ot);
  return e.setFullYear(je, 0, 1), e;
})(), wn = 260, mn = { Imix: "\u8D64\u3044\u9F8D", Ik: "\u767D\u3044\u98A8", Akbal: "\u9752\u3044\u591C", Kan: "\u9EC4\u8272\u3044\u7A2E", Chicchan: "\u8D64\u3044\u86C7", Cimi: "\u767D\u3044\u4E16\u754C\u306E\u6A4B\u6E21\u3057", Manik: "\u9752\u3044\u624B", Lamat: "\u9EC4\u8272\u3044\u661F", Muluc: "\u8D64\u3044\u6708", Oc: "\u767D\u3044\u72AC", Chuen: "\u9752\u3044\u733F", Eb: "\u9EC4\u8272\u3044\u4EBA", Ben: "\u8D64\u3044\u7A7A\u6B69\u304F\u4EBA", Ix: "\u767D\u3044\u9B54\u6CD5\u4F7F\u3044", Men: "\u9752\u3044\u9DF2", Cib: "\u9EC4\u8272\u3044\u6226\u58EB", Caban: "\u8D64\u3044\u5730\u7403", Etznab: "\u767D\u3044\u93E1", Cauac: "\u9752\u3044\u5D50", Ahau: "\u9EC4\u8272\u3044\u592A\u967D" }, Sn = { Red: "\u56DE\u8EE2\u306E\u8D64\u3044\u6771\u306E\u57CE", White: "\u4EA4\u5DEE\u306E\u767D\u3044\u5317\u306E\u57CE", Blue: "\u71C3\u3048\u308B\u9752\u3044\u897F\u306E\u57CE", Yellow: "\u4E0E\u3048\u308B\u9EC4\u8272\u3044\u5357\u306E\u57CE", Green: "\u9B45\u60D1\u306E\u7DD1\u306E\u4E2D\u592E\u306E\u57CE" }, ye = { OPEN: "tableStateOpen", HIDING: "tableStateHiding", DISPLAYING: "tableStateDisplaying", FOLDING: "tableStateFolding", UNFOLDING: "tableStateUnfolding", CLOSE: "tableStateClose" }, Je = (e, t, n) => Math.max(t, Math.min(e, n)), He = (e, t) => new Date(e, t, 0).getDate(), _n = (e) => {
  const t = /\d/, n = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " ", "Tab", "Backspace", "Delete", "Shift"];
  return t.test(e) || n.includes(e);
}, Ee = (e) => ({ year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate() }), Cn = (e) => {
  const t = (() => {
    const r = new Date(ot);
    r.setFullYear(e.year, e.month - 1, e.day);
    const s = r.getTime();
    return s > ht.getTime() ? new Date(ht) : s < yt.getTime() ? new Date(yt) : r;
  })(), n = Je(t.getFullYear(), je, We), i = t.getMonth() + 1, l = t.getDate();
  return { year: n, month: i, day: l };
}, xn = () => {
  const e = /* @__PURE__ */ new Date();
  e.setFullYear(e.getFullYear() - 30), e.setHours(0, 0, 0, 0);
  const t = Ee(e), [n, i] = Te(t), l = (f) => i(Cn(f));
  return [n, { birthdate: l, year: (f) => l({ ...n(), year: f }), month: (f) => l({ ...n(), month: f }), day: (f) => l({ ...n(), day: f }) }];
}, pn = (e, t, n = 15) => {
  const { tzolkin_calendar: i, haab_calendar: l } = e, o = fe(""), { modern: r, ancient: s } = i, { org: u, mirror: f, abs_rev: h, story: d, timeline: m } = r, g = Bt(u.num), N = Bt(f.num), { north: C, south: $, west: k, east: y, center: w } = Object.fromEntries(Object.entries(s.tree_of_life).map(([Z, Y]) => [Z, { day: `${Y.sun_crest.day}-${Y.galactic_tone}`, color: Y.sun_crest.color }])), { modern: p, ancient: _ } = l, P = `${p.month}-${p.day}`, S = { title: { head: "Tzolkin", body: [fe("\u7D50\u679C")] }, data: [{ head: "KIN", body: [fe(g)] }, { head: "SC", body: [ve(u.sun_crest.org)] }, { head: "WS", body: [ve(u.wave_spell.org)] }, { head: "\u9280\u6CB3\u306E\u97F3", body: [fe(`\u97F3 ${u.galactic_tone}`)] }, { head: "5\u3064\u306E\u57CE", body: [{ day: Sn[u.castle], color: u.castle }] }] }, z = { title: { head: "KIN", body: [fe("\u7D50\u679C")] }, data: [{ head: "SC\u53CD\u5BFE", body: [ve(u.sun_crest.reverse)] }, { head: "SC\u985E\u4F3C", body: [ve(u.sun_crest.similar)] }, { head: "SC\u795E\u79D8", body: [ve(u.sun_crest.mystery)] }, { head: "WS\u53CD\u5BFE", body: [ve(u.wave_spell.reverse)] }, { head: "WS\u985E\u4F3C", body: [ve(u.wave_spell.similar)] }, { head: "WS\u795E\u79D8", body: [ve(u.wave_spell.mystery)] }, { head: "\u30AC\u30A4\u30C9", body: [ve(u.guide)] }, { head: "\u9006\u30AC\u30A4\u30C9", body: [ve(u.rev_guide)] }, { head: "\u93E1KIN", body: [fe(N)] }, { head: "\u93E1SC", body: [ve(f.sun_crest)] }, { head: "\u93E1WS", body: [ve(f.wave_spell)] }] }, B = { title: { head: "", body: [fe("\u751F\u547D\u6A39\u6CD5"), o, o] }, data: [{ head: "", body: [o, y, o] }, { head: "", body: [C, w, $] }, { head: "", body: [o, k, o] }] }, D = { title: { head: "\u4ED6\u306E\u66A6", body: [fe("\u65E5\u4ED8")] }, data: [{ head: "Haab", body: [fe(P)] }] }, A = { title: { head: "\u8D77\u627F\u8EE2\u7D50", body: [fe("SC")] }, data: [{ head: "\u8D77", body: [ve(d.introduction)] }, { head: "\u627F", body: [ve(d.development)] }, { head: "\u8EE2", body: [ve(d.twist)] }, { head: "\u7D50", body: [ve(d.conclusion)] }] }, E = { title: { head: `\u897F\u66A6
(\u5E74\u9F62)`, body: [fe("SC"), fe("WS"), fe("\u9280\u6CB3\u306E\u97F3")] }, data: m.timeline.map((Z, Y, F) => {
    const R = F.length - 1, W = t.year + Y, oe = `${W}
( ${Y} )`, re = [ve(Z.sun_crest), ve(Z.wave_spell), fe(`\u97F3 ${Z.galactic_tone}`)], X = W % R === (/* @__PURE__ */ new Date()).getFullYear() % R;
    return { head: oe, body: re, emphasis: X };
  }) }, M = { title: { head: "\u897F\u66A6", body: [fe("\u5468\u671F")] }, data: [...Dn(t, n)] };
  return { tzolkin: S, compare: z, treeOfLife: B, other: D, story: A, timeline: E, periodicTable: M };
}, Bt = (e) => {
  const { num: t, is_abs_exp: n, is_black: i, is_polar: l } = e;
  return `${t}${n ? "(\u7D76\u5BFE\u62E1\u5F35KIN)" : ""}${i ? "(\u9ED2KIN)" : ""}${l ? "(\u6975\u6027KIN)" : ""}`;
}, fe = (e) => ({ day: e }), ve = (e) => ({ day: mn[e.day], color: e.color }), Pt = (e, t) => e.setDate(e.getDate() + t), Yt = (e) => {
  const { year: t, month: n, day: i } = Ee(e);
  return He(t, 2) === 29 && (n === 2 && i === 29 || n === 3 && i === 1);
}, Tn = (e, t) => {
  const i = yt.getTime(), l = [];
  for (let o = 0; o < t; o++) {
    const { year: r, month: s, day: u } = Ee(e), f = new Date(1970, s - 1, u, 0, 0, 0, 0);
    Pt(f, -260);
    const { year: h, month: d, day: m } = Ee(f), g = r + h - 1970;
    if (e.setFullYear(g, d - 1, m), e.getTime() < i) break;
    if (Yt(e)) {
      const C = e.getFullYear(), $ = { head: `${C}_2_29
${C}_3_1`, body: [fe(`-${o + 1} \u5468\u671F`)] };
      l.push($);
    } else {
      const { year: C, month: $, day: k } = Ee(e), y = { head: `${C}_${$}_${k}`, body: [fe(`-${o + 1} \u5468\u671F`)] };
      l.push(y);
    }
  }
  return l;
}, $n = (e, t) => {
  const i = ht.getTime(), l = [];
  for (let o = 0; o < t; o++) {
    const { year: r, month: s, day: u } = Ee(e), f = new Date(1970, s - 1, u, 0, 0, 0, 0);
    Pt(f, wn);
    const { year: h, month: d, day: m } = Ee(f), g = r + h - 1970;
    if (e.setFullYear(g, d - 1, m), e.getTime() > i) break;
    if (Yt(e)) {
      const C = e.getFullYear(), $ = { head: `${C}_2_29
${C}_3_1`, body: [fe(`${o + 1} \u5468\u671F`)] };
      l.push($);
    } else {
      const { year: C, month: $, day: k } = Ee(e), y = { head: `${C}_${$}_${k}`, body: [fe(`${o + 1} \u5468\u671F`)] };
      l.push(y);
    }
  }
  return l;
}, Dn = (e, t) => {
  const { year: n, month: i, day: l } = e, o = new Date(ot);
  o.setFullYear(n, i - 1, l);
  const r = new Date(ot);
  r.setFullYear(n, i - 1, l);
  const s = [], u = Tn(o, t), f = $n(r, t);
  return s.push(...u.reverse()), s.push({ head: `${n}_${i}_${l}`, body: [fe("\u8A95\u751F\u65E5")], emphasis: true }), s.push(...f), s;
};
var Nn = de("<fieldset><legend>\u8A95\u751F\u65E5\u5165\u529B\u6B04</legend><label><input type=number name=year maxlength=4 required>\u5E74</label><label><input type=number name=month maxlength=2 required>\u6708</label><label><input type=number name=day maxlength=2 required>\u65E5");
const kn = (e) => {
  const t = () => e.birthdate().year, n = () => e.birthdate().month, i = () => e.birthdate().day, l = (y) => e.setBirthdate.year(y), o = (y) => e.setBirthdate.month(y), r = (y) => e.setBirthdate.day(y);
  let s, u, f;
  const h = (y) => {
    const w = y.key, p = y.currentTarget, _ = p.name;
    if (!_n(w)) return y.preventDefault();
    const P = p.valueAsNumber;
    if (Number.isNaN(P) && w === "0") return y.preventDefault();
    const S = y.shiftKey, z = () => {
      if (w === "ArrowUp") {
        y.preventDefault();
        const A = He(t() + 1, n());
        i() > A && r(A), l(t() + 1);
      } else if (w === "ArrowDown") {
        y.preventDefault();
        const A = He(t() - 1, n());
        i() > A && r(A), l(t() - 1);
      } else !S && (w === "Enter" || w === " ") && (y.preventDefault(), u.focus());
    }, B = () => {
      if (w === "ArrowUp") {
        y.preventDefault();
        const A = He(t(), n() + 1);
        i() > A && r(A), o(n() + 1);
      } else if (w === "ArrowDown") {
        y.preventDefault();
        const A = He(t(), n() - 1);
        i() > A && r(A), o(n() - 1);
      } else (w === "Enter" || w === " ") && (y.preventDefault(), (S ? s : f).focus());
    }, D = () => {
      w === "ArrowUp" ? (y.preventDefault(), r(i() + 1)) : w === "ArrowDown" ? (y.preventDefault(), r(i() - 1)) : S && (w === "Enter" || w === " ") && (y.preventDefault(), u.focus());
    };
    switch (_) {
      case "year": {
        z();
        break;
      }
      case "month": {
        B();
        break;
      }
      case "day": {
        D();
        break;
      }
    }
  }, d = (y) => {
    const w = y.currentTarget.valueAsNumber;
    if (Number.isNaN(w) || w === 0) return y.preventDefault();
    const p = y.currentTarget.name, _ = () => {
      l(Je(w, je, We)), Math.floor(Math.abs(t()) / 1e3) !== 0 && u.focus();
    }, P = () => {
      o(Je(w, 1, 12)), n() >= 2 && f.focus();
    }, S = () => {
      const z = He(t(), n());
      r(Je(w, 1, z));
    };
    switch (p) {
      case "year":
        _();
        break;
      case "month":
        P();
        break;
      case "day":
        S();
        break;
    }
  }, m = (y) => {
    const w = y.currentTarget.valueAsNumber, p = y.currentTarget.name, _ = () => {
      Number.isNaN(w) || w === 0 ? l((/* @__PURE__ */ new Date()).getFullYear() - 30) : w > We ? l(We) : w < je && l(je);
    }, P = () => {
      Number.isNaN(w) || w === 0 ? o((/* @__PURE__ */ new Date()).getMonth() + 1) : w > 12 ? o(12) : w < 1 && o(1);
    }, S = () => {
      const z = He(t(), n());
      Number.isNaN(w) || w === 0 ? r((/* @__PURE__ */ new Date()).getDate()) : w > z ? r(z) : w < 1 && r(1);
    };
    switch (p) {
      case "year":
        _();
        break;
      case "month":
        P();
        break;
      case "day":
        S();
        break;
    }
  }, g = (y) => {
    y.currentTarget.select();
  }, N = T(["flex", "gap-2"]), C = T(["sr-only"]), $ = T(["flex", "gap-2", "items-center"]), k = T(["form-input", "w-full", "rounded", "transition", "hocus:shadow-inner", "bg-neutral-800", "border-neutral-600", "hocus:border-neutral-700", "focus:ring-neutral-700", "hover:shadow-neutral-950/50", "focus:shadow-neutral-950"]);
  return (() => {
    var y = Nn(), w = y.firstChild, p = w.nextSibling, _ = p.firstChild, P = p.nextSibling, S = P.firstChild, z = P.nextSibling, B = z.firstChild;
    _.addEventListener("focus", g), _.addEventListener("blur", m), _.$$input = d, _.$$keydown = h;
    var D = s;
    typeof D == "function" ? le(D, _) : s = _, S.addEventListener("focus", g), S.addEventListener("blur", m), S.$$input = d, S.$$keydown = h;
    var A = u;
    typeof A == "function" ? le(A, S) : u = S, B.addEventListener("focus", g), B.addEventListener("blur", m), B.$$input = d, B.$$keydown = h;
    var E = f;
    return typeof E == "function" ? le(E, B) : f = B, q((M) => {
      var Z = N(), Y = C(), F = $(), R = k(), W = $(), oe = k(), re = $(), X = k();
      return Z !== M.e && a(y, M.e = Z), Y !== M.t && a(w, M.t = Y), F !== M.a && a(p, M.a = F), R !== M.o && a(_, M.o = R), W !== M.i && a(P, M.i = W), oe !== M.n && a(S, M.n = oe), re !== M.s && a(z, M.s = re), X !== M.h && a(B, M.h = X), M;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), q(() => _.value = t()), q(() => S.value = n()), q(() => B.value = i()), y;
  })();
};
Ae(["keydown", "input"]);
const Pe = (e, t, n, i, l, o = false) => {
  const [r, s] = Te(o), [u, f] = Te(o ? ye.OPEN : ye.CLOSE), [h, d] = Te(o), m = () => u() !== ye.OPEN && u() !== ye.CLOSE, [g, N] = Te(false), C = (k) => {
    switch (k.stopPropagation(), k.target) {
      case e():
        if (k.propertyName !== "height") return;
        f((y) => y === ye.UNFOLDING ? ye.DISPLAYING : ye.CLOSE), l();
        break;
      case n():
        if (k.propertyName !== "opacity") return;
        f((y) => y === ye.HIDING ? ye.FOLDING : ye.OPEN);
        break;
    }
  }, $ = () => {
    m() || (d((k) => !k), f((k) => k === ye.OPEN ? ye.HIDING : ye.UNFOLDING));
  };
  return tt(() => {
    if (!t()) return;
    const k = new IntersectionObserver((y) => {
      s(y[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    k.observe(t()), Ft(() => k.disconnect());
  }), tt(() => {
    m() || i() !== 0 && (N(true), requestAnimationFrame(() => {
      N(false);
    }));
  }), { variables: { isObservable: r, tableState: u, isToFold: h, isPending: m, updateSticky: g }, handlers: { handleTransitionEnd: C, handleOnClick: $ } };
}, Ye = (e) => {
  const t = T(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), n = T(["sr-only"]), i = T(["p-1"]), l = T(["bg-neutral-700", i()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), o = T(["shadow-md", "shadow-neutral-950/25"]), r = T(["relative", "top-15", "h-9", "z-20", l({ updateSticky: e() })]), s = T(["flex", "text-xl", "font-bold", "justify-center"]), u = T(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-colors", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), f = T(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), h = T(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), d = T(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), m = T(["transition", "will-change-transform", "top-24", "z-10", l({ updateSticky: e() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), g = T(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible", "hidden"] }, tableState: { [ye.OPEN]: ["opacity-100"], [ye.HIDING]: ["opacity-0"], [ye.DISPLAYING]: ["opacity-100", "delay-50"], [ye.FOLDING]: ["opacity-0", "hidden"], [ye.UNFOLDING]: ["opacity-0"], [ye.CLOSE]: ["opacity-0", "hidden"] } } }), N = T(["transition-colors", "hocus:bg-white/10", "hocus:text-white"], { variants: { emphasis: { true: ["bg-white/8", "inset-ring", "inset-ring-neutral-200", "font-bold"], false: [], undefined: ["even:bg-white/3"] } } }), C = T([i()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return { tableStyle: t, captionStyle: n, tableDatumStyle: i, replaceCaptionContainerStyle: o, replaceCaptionStyle: r, captionTextStyle: s, foldButtonStyle: u, foldIconStyle: f, tableHeadBorderStyle: h, tableHeadTitleStyle: d, tableHeadColStyle: m, tableBodyStyle: g, tableBodyRowStyle: N, tableBodyDatumStyle: C };
};
var Bn = de('<div><table><caption>\u30C4\u30A9\u30EB\u30AD\u30F3</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u30C4\u30A9\u30EB\u30AD\u30F3</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), On = de("<tr><th scope=row></th><td>");
const An = (e) => {
  const t = be(() => {
    var _a;
    return (_a = e.tzolkinData) == null ? void 0 : _a.title.head;
  }), n = be(() => {
    var _a;
    return (_a = e.tzolkinData) == null ? void 0 : _a.title.body;
  }), i = () => {
    var _a;
    return (_a = e.tzolkinData) == null ? void 0 : _a.data;
  };
  let l, o, r;
  const { variables: s, handlers: u } = Pe(() => l, () => o, () => r, () => e.foldedNotify, e.sendFoldedNotify, true), { isObservable: f, tableState: h, isToFold: d, isPending: m, updateSticky: g } = s, { handleTransitionEnd: N, handleOnClick: C } = u, { tableStyle: $, captionStyle: k, tableDatumStyle: y, replaceCaptionContainerStyle: w, replaceCaptionStyle: p, captionTextStyle: _, foldButtonStyle: P, foldIconStyle: S, tableHeadBorderStyle: z, tableHeadTitleStyle: B, tableHeadColStyle: D, tableBodyStyle: A, tableBodyRowStyle: E, tableBodyDatumStyle: M } = Ye(g), Z = T(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-57"], false: ["h-9", "delay-200"] } } }), Y = T(["w-1/3"]);
  return (() => {
    var F = Bn(), R = F.firstChild, W = R.firstChild, oe = W.nextSibling, re = oe.firstChild, X = oe.nextSibling, ae = X.firstChild, he = ae.firstChild, ne = he.firstChild, K = ne.nextSibling, ce = K.firstChild, $e = ce.firstChild, xe = K.nextSibling, se = ae.nextSibling, L = se.firstChild, j = L.nextSibling, G = X.nextSibling;
    Ne(F, "transitionend", N);
    var Q = l;
    typeof Q == "function" ? le(Q, F) : l = F;
    var ue = o;
    typeof ue == "function" ? le(ue, R) : o = R, Ne(K, "click", C, true), x($e, () => d() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), x(L, t), x(j, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var v = r;
    return typeof v == "function" ? le(v, G) : r = G, x(G, te(Be, { get each() {
      return i();
    }, children: (c) => (() => {
      var H = On(), b = H.firstChild, I = b.nextSibling;
      return x(b, () => c.head), x(I, () => {
        var _a;
        return (_a = c.body) == null ? void 0 : _a[0].day;
      }), q((O) => {
        var _a;
        var V = E({ emphasis: false }), U = y(), J = M({ color: (_a = c.body) == null ? void 0 : _a[0].color });
        return V !== O.e && a(H, O.e = V), U !== O.t && a(b, O.t = U), J !== O.a && a(I, O.a = J), O;
      }, { e: void 0, t: void 0, a: void 0 }), H;
    })() })), q((c) => {
      var H = Z({ isToFold: d() }), b = $(), I = k(), O = Y(), V = w(), U = p(), J = _(), ge = P({ isPending: m() }), we = S({ isToFold: d() }), me = z({ isToFold: d() }), Se = B({ isToFold: d() }), _e = D({ isToFold: d() }), De = D({ isToFold: d() }), ke = A({ isObservable: f(), tableState: h() });
      return H !== c.e && a(F, c.e = H), b !== c.t && a(R, c.t = b), I !== c.a && a(W, c.a = I), O !== c.o && a(re, c.o = O), V !== c.i && a(ae, c.i = V), U !== c.n && a(he, c.n = U), J !== c.s && a(ne, c.s = J), ge !== c.h && a(K, c.h = ge), we !== c.r && Re(ce, "class", c.r = we), me !== c.d && a(xe, c.d = me), Se !== c.l && a(se, c.l = Se), _e !== c.u && a(L, c.u = _e), De !== c.c && a(j, c.c = De), ke !== c.w && a(G, c.w = ke), c;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), F;
  })();
};
Ae(["click"]);
var Fn = de('<div><table><caption>\u76F8\u6027\u6BD4\u8F03\u8868</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u76F8\u6027\u6BD4\u8F03\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), Ln = de("<tr><th scope=row></th><td>");
const En = (e) => {
  const t = be(() => {
    var _a;
    return (_a = e.compareData) == null ? void 0 : _a.title.head;
  }), n = be(() => {
    var _a;
    return (_a = e.compareData) == null ? void 0 : _a.title.body;
  }), i = () => {
    var _a;
    return (_a = e.compareData) == null ? void 0 : _a.data;
  };
  let l, o, r;
  const { variables: s, handlers: u } = Pe(() => l, () => o, () => r, () => e.foldedNotify, e.sendFoldedNotify), { isObservable: f, tableState: h, isToFold: d, isPending: m, updateSticky: g } = s, { handleTransitionEnd: N, handleOnClick: C } = u, { tableStyle: $, captionStyle: k, tableDatumStyle: y, replaceCaptionContainerStyle: w, replaceCaptionStyle: p, captionTextStyle: _, foldButtonStyle: P, foldIconStyle: S, tableHeadBorderStyle: z, tableHeadTitleStyle: B, tableHeadColStyle: D, tableBodyStyle: A, tableBodyRowStyle: E, tableBodyDatumStyle: M } = Ye(g), Z = T(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-105"], false: ["h-9", "delay-200"] } } }), Y = T(["w-1/3"]);
  return (() => {
    var F = Fn(), R = F.firstChild, W = R.firstChild, oe = W.nextSibling, re = oe.firstChild, X = oe.nextSibling, ae = X.firstChild, he = ae.firstChild, ne = he.firstChild, K = ne.nextSibling, ce = K.firstChild, $e = ce.firstChild, xe = K.nextSibling, se = ae.nextSibling, L = se.firstChild, j = L.nextSibling, G = X.nextSibling;
    Ne(F, "transitionend", N);
    var Q = l;
    typeof Q == "function" ? le(Q, F) : l = F;
    var ue = o;
    typeof ue == "function" ? le(ue, R) : o = R, Ne(K, "click", C, true), x($e, () => d() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), x(L, t), x(j, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var v = r;
    return typeof v == "function" ? le(v, G) : r = G, x(G, te(Be, { get each() {
      return i();
    }, children: (c) => (() => {
      var H = Ln(), b = H.firstChild, I = b.nextSibling;
      return x(b, () => c.head), x(I, () => {
        var _a;
        return (_a = c.body) == null ? void 0 : _a[0].day;
      }), q((O) => {
        var _a;
        var V = E({ emphasis: false }), U = y(), J = M({ color: (_a = c.body) == null ? void 0 : _a[0].color });
        return V !== O.e && a(H, O.e = V), U !== O.t && a(b, O.t = U), J !== O.a && a(I, O.a = J), O;
      }, { e: void 0, t: void 0, a: void 0 }), H;
    })() })), q((c) => {
      var H = Z({ isToFold: d() }), b = $(), I = k(), O = Y(), V = w(), U = p(), J = _(), ge = P({ isPending: m() }), we = S({ isToFold: d() }), me = z({ isToFold: d() }), Se = B({ isToFold: d() }), _e = D({ isToFold: d() }), De = D({ isToFold: d() }), ke = A({ isObservable: f(), tableState: h() });
      return H !== c.e && a(F, c.e = H), b !== c.t && a(R, c.t = b), I !== c.a && a(W, c.a = I), O !== c.o && a(re, c.o = O), V !== c.i && a(ae, c.i = V), U !== c.n && a(he, c.n = U), J !== c.s && a(ne, c.s = J), ge !== c.h && a(K, c.h = ge), we !== c.r && Re(ce, "class", c.r = we), me !== c.d && a(xe, c.d = me), Se !== c.l && a(se, c.l = Se), _e !== c.u && a(L, c.u = _e), De !== c.c && a(j, c.c = De), ke !== c.w && a(G, c.w = ke), c;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), F;
  })();
};
Ae(["click"]);
var Mn = de('<div><table><caption>\u53E4\u5178\u30DE\u30E4\u66A6\u8868</caption><colgroup><col><col><col></colgroup><thead><tr><th colspan=3><span aria-hidden=true>\u53E4\u5178\u30DE\u30E4\u66A6\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col colspan=3></th></tr></thead><tbody>'), In = de("<tr>"), Hn = de("<td>");
const Rn = (e) => {
  const t = be(() => {
    var _a;
    return (_a = e.treeOfLifeData) == null ? void 0 : _a.title.body;
  }), n = () => {
    var _a;
    return (_a = e.treeOfLifeData) == null ? void 0 : _a.data;
  };
  let i, l, o;
  const { variables: r, handlers: s } = Pe(() => i, () => l, () => o, () => e.foldedNotify, e.sendFoldedNotify), { isObservable: u, tableState: f, isToFold: h, isPending: d, updateSticky: m } = r, { handleTransitionEnd: g, handleOnClick: N } = s, { tableStyle: C, captionStyle: $, replaceCaptionContainerStyle: k, replaceCaptionStyle: y, captionTextStyle: w, foldButtonStyle: p, foldIconStyle: _, tableHeadBorderStyle: P, tableHeadTitleStyle: S, tableHeadColStyle: z, tableBodyStyle: B, tableBodyDatumStyle: D } = Ye(m), A = T(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-41"], false: ["h-9", "delay-200"] } } });
  return (() => {
    var E = Mn(), M = E.firstChild, Z = M.firstChild, Y = Z.nextSibling, F = Y.nextSibling, R = F.firstChild, W = R.firstChild, oe = W.firstChild, re = oe.nextSibling, X = re.firstChild, ae = X.firstChild, he = re.nextSibling, ne = R.nextSibling, K = ne.firstChild, ce = F.nextSibling;
    Ne(E, "transitionend", g);
    var $e = i;
    typeof $e == "function" ? le($e, E) : i = E;
    var xe = l;
    typeof xe == "function" ? le(xe, M) : l = M, Ne(re, "click", N, true), x(ae, () => h() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), x(K, () => {
      var _a;
      return (_a = t()) == null ? void 0 : _a[0].day;
    });
    var se = o;
    return typeof se == "function" ? le(se, ce) : o = ce, x(ce, te(Be, { get each() {
      return n();
    }, children: (L) => (() => {
      var j = In();
      return x(j, te(Be, { get each() {
        return L.body;
      }, children: (G) => (() => {
        var Q = Hn();
        return x(Q, () => G.day), q(() => a(Q, D({ color: G.color }))), Q;
      })() })), j;
    })() })), q((L) => {
      var j = A({ isToFold: h() }), G = C(), Q = $(), ue = k(), v = y(), c = w(), H = p({ isPending: d() }), b = _({ isToFold: h() }), I = P({ isToFold: h() }), O = S({ isToFold: h() }), V = z({ isToFold: h() }), U = B({ isObservable: u(), tableState: f() });
      return j !== L.e && a(E, L.e = j), G !== L.t && a(M, L.t = G), Q !== L.a && a(Z, L.a = Q), ue !== L.o && a(R, L.o = ue), v !== L.i && a(W, L.i = v), c !== L.n && a(oe, L.n = c), H !== L.s && a(re, L.s = H), b !== L.h && Re(X, "class", L.h = b), I !== L.r && a(he, L.r = I), O !== L.d && a(ne, L.d = O), V !== L.l && a(K, L.l = V), U !== L.u && a(ce, L.u = U), L;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0 }), E;
  })();
};
Ae(["click"]);
var Pn = de('<div><table><caption>\u4ED6\u306E\u66A6</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u4ED6\u306E\u66A6</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody><tr><th scope=row></th><td>');
const Yn = (e) => {
  const t = be(() => {
    var _a;
    return (_a = e.otherData) == null ? void 0 : _a.title.head;
  }), n = be(() => {
    var _a;
    return (_a = e.otherData) == null ? void 0 : _a.title.body;
  }), i = () => {
    var _a;
    return (_a = e.otherData) == null ? void 0 : _a.data;
  };
  let l, o, r;
  const { variables: s, handlers: u } = Pe(() => l, () => o, () => r, () => e.foldedNotify, e.sendFoldedNotify), { isObservable: f, tableState: h, isToFold: d, isPending: m, updateSticky: g } = s, { handleTransitionEnd: N, handleOnClick: C } = u, { tableStyle: $, captionStyle: k, tableDatumStyle: y, replaceCaptionContainerStyle: w, replaceCaptionStyle: p, captionTextStyle: _, foldButtonStyle: P, foldIconStyle: S, tableHeadBorderStyle: z, tableHeadTitleStyle: B, tableHeadColStyle: D, tableBodyStyle: A, tableBodyRowStyle: E } = Ye(g), M = T(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-25"], false: ["h-9", "delay-200"] } } }), Z = T(["w-1/3"]);
  return (() => {
    var Y = Pn(), F = Y.firstChild, R = F.firstChild, W = R.nextSibling, oe = W.firstChild, re = W.nextSibling, X = re.firstChild, ae = X.firstChild, he = ae.firstChild, ne = he.nextSibling, K = ne.firstChild, ce = K.firstChild, $e = ne.nextSibling, xe = X.nextSibling, se = xe.firstChild, L = se.nextSibling, j = re.nextSibling, G = j.firstChild, Q = G.firstChild, ue = Q.nextSibling;
    Ne(Y, "transitionend", N);
    var v = l;
    typeof v == "function" ? le(v, Y) : l = Y;
    var c = o;
    typeof c == "function" ? le(c, F) : o = F, Ne(ne, "click", C, true), x(ce, () => d() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), x(se, t), x(L, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var H = r;
    return typeof H == "function" ? le(H, j) : r = j, x(Q, () => {
      var _a;
      return (_a = i()) == null ? void 0 : _a[0].head;
    }), x(ue, () => {
      var _a, _b;
      return (_b = (_a = i()) == null ? void 0 : _a[0].body) == null ? void 0 : _b[0].day;
    }), q((b) => {
      var I = M({ isToFold: d() }), O = $(), V = k(), U = Z(), J = w(), ge = p(), we = _(), me = P({ isPending: m() }), Se = S({ isToFold: d() }), _e = z({ isToFold: d() }), De = B({ isToFold: d() }), ke = D({ isToFold: d() }), gt = D({ isToFold: d() }), wt = A({ isObservable: f(), tableState: h() }), mt = E({ emphasis: false }), St = y(), _t = y();
      return I !== b.e && a(Y, b.e = I), O !== b.t && a(F, b.t = O), V !== b.a && a(R, b.a = V), U !== b.o && a(oe, b.o = U), J !== b.i && a(X, b.i = J), ge !== b.n && a(ae, b.n = ge), we !== b.s && a(he, b.s = we), me !== b.h && a(ne, b.h = me), Se !== b.r && Re(K, "class", b.r = Se), _e !== b.d && a($e, b.d = _e), De !== b.l && a(xe, b.l = De), ke !== b.u && a(se, b.u = ke), gt !== b.c && a(L, b.c = gt), wt !== b.w && a(j, b.w = wt), mt !== b.m && a(G, b.m = mt), St !== b.f && a(Q, b.f = St), _t !== b.y && a(ue, b.y = _t), b;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0, m: void 0, f: void 0, y: void 0 }), Y;
  })();
};
Ae(["click"]);
var zn = de('<div><table><caption>\u8D77\u627F\u8EE2\u7D50</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u8D77\u627F\u8EE2\u7D50</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), Vn = de("<tr><th scope=row></th><td>");
const Un = (e) => {
  const t = be(() => {
    var _a;
    return (_a = e.storyData) == null ? void 0 : _a.title.head;
  }), n = be(() => {
    var _a;
    return (_a = e.storyData) == null ? void 0 : _a.title.body;
  }), i = () => {
    var _a;
    return (_a = e.storyData) == null ? void 0 : _a.data;
  };
  let l, o, r;
  const { variables: s, handlers: u } = Pe(() => l, () => o, () => r, () => e.foldedNotify, e.sendFoldedNotify), { isObservable: f, tableState: h, isToFold: d, isPending: m, updateSticky: g } = s, { handleTransitionEnd: N, handleOnClick: C } = u, { tableStyle: $, captionStyle: k, tableDatumStyle: y, replaceCaptionContainerStyle: w, replaceCaptionStyle: p, captionTextStyle: _, foldButtonStyle: P, foldIconStyle: S, tableHeadBorderStyle: z, tableHeadTitleStyle: B, tableHeadColStyle: D, tableBodyStyle: A, tableBodyRowStyle: E, tableBodyDatumStyle: M } = Ye(g), Z = T(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-49"], false: ["h-9", "delay-200"] } } }), Y = T(["w-1/3"]);
  return (() => {
    var F = zn(), R = F.firstChild, W = R.firstChild, oe = W.nextSibling, re = oe.firstChild, X = oe.nextSibling, ae = X.firstChild, he = ae.firstChild, ne = he.firstChild, K = ne.nextSibling, ce = K.firstChild, $e = ce.firstChild, xe = K.nextSibling, se = ae.nextSibling, L = se.firstChild, j = L.nextSibling, G = X.nextSibling;
    Ne(F, "transitionend", N);
    var Q = l;
    typeof Q == "function" ? le(Q, F) : l = F;
    var ue = o;
    typeof ue == "function" ? le(ue, R) : o = R, Ne(K, "click", C, true), x($e, () => d() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), x(L, t), x(j, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var v = r;
    return typeof v == "function" ? le(v, G) : r = G, x(G, te(Be, { get each() {
      return i();
    }, children: (c) => (() => {
      var H = Vn(), b = H.firstChild, I = b.nextSibling;
      return x(b, () => c.head), x(I, () => {
        var _a;
        return (_a = c.body) == null ? void 0 : _a[0].day;
      }), q((O) => {
        var _a;
        var V = E({ emphasis: false }), U = y(), J = M({ color: (_a = c.body) == null ? void 0 : _a[0].color });
        return V !== O.e && a(H, O.e = V), U !== O.t && a(b, O.t = U), J !== O.a && a(I, O.a = J), O;
      }, { e: void 0, t: void 0, a: void 0 }), H;
    })() })), q((c) => {
      var H = Z({ isToFold: d() }), b = $(), I = k(), O = Y(), V = w(), U = p(), J = _(), ge = P({ isPending: m() }), we = S({ isToFold: d() }), me = z({ isToFold: d() }), Se = B({ isToFold: d() }), _e = D({ isToFold: d() }), De = D({ isToFold: d() }), ke = A({ isObservable: f(), tableState: h() });
      return H !== c.e && a(F, c.e = H), b !== c.t && a(R, c.t = b), I !== c.a && a(W, c.a = I), O !== c.o && a(re, c.o = O), V !== c.i && a(ae, c.i = V), U !== c.n && a(he, c.n = U), J !== c.s && a(ne, c.s = J), ge !== c.h && a(K, c.h = ge), we !== c.r && Re(ce, "class", c.r = we), me !== c.d && a(xe, c.d = me), Se !== c.l && a(se, c.l = Se), _e !== c.u && a(L, c.u = _e), De !== c.c && a(j, c.c = De), ke !== c.w && a(G, c.w = ke), c;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), F;
  })();
};
Ae(["click"]);
var Wn = de('<div><table><caption>\u500B\u4EBAKIN\u5E74\u8868</caption><colgroup><col><col><col><col></colgroup><thead><tr><th colspan=4><span aria-hidden=true>\u500B\u4EBAKIN\u5E74\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th></tr></thead><tbody>'), jn = de("<th scope=col>"), Gn = de("<tr><th scope=row>"), Kn = de("<td>");
const qn = (e) => {
  const t = be(() => {
    var _a;
    return (_a = e.timelineData) == null ? void 0 : _a.title.head;
  }), n = be(() => {
    var _a;
    return (_a = e.timelineData) == null ? void 0 : _a.title.body;
  }), i = () => {
    var _a;
    return (_a = e.timelineData) == null ? void 0 : _a.data;
  };
  let l, o, r;
  const { variables: s, handlers: u } = Pe(() => l, () => o, () => r, () => e.foldedNotify, e.sendFoldedNotify), { isObservable: f, tableState: h, isToFold: d, isPending: m, updateSticky: g } = s, { handleTransitionEnd: N, handleOnClick: C } = u, { tableStyle: $, captionStyle: k, tableDatumStyle: y, replaceCaptionContainerStyle: w, replaceCaptionStyle: p, captionTextStyle: _, foldButtonStyle: P, foldIconStyle: S, tableHeadBorderStyle: z, tableHeadTitleStyle: B, tableHeadColStyle: D, tableBodyStyle: A, tableBodyRowStyle: E, tableBodyDatumStyle: M } = Ye(g), Z = T(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-1494"], false: ["h-9", "delay-200"] } } }), Y = T(["w-1/5"]);
  return (() => {
    var F = Wn(), R = F.firstChild, W = R.firstChild, oe = W.nextSibling, re = oe.firstChild, X = oe.nextSibling, ae = X.firstChild, he = ae.firstChild, ne = he.firstChild, K = ne.nextSibling, ce = K.firstChild, $e = ce.firstChild, xe = K.nextSibling, se = ae.nextSibling, L = se.firstChild, j = X.nextSibling;
    Ne(F, "transitionend", N);
    var G = l;
    typeof G == "function" ? le(G, F) : l = F;
    var Q = o;
    typeof Q == "function" ? le(Q, R) : o = R, Ne(K, "click", C, true), x($e, () => d() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), x(L, t), x(se, te(Be, { get each() {
      return n();
    }, children: (v) => (() => {
      var c = jn();
      return x(c, () => v.day), q(() => a(c, D({ isToFold: d() }))), c;
    })() }), null);
    var ue = r;
    return typeof ue == "function" ? le(ue, j) : r = j, x(j, te(Be, { get each() {
      return i();
    }, children: (v) => (() => {
      var c = Gn(), H = c.firstChild;
      return x(H, () => v.head), x(c, te(Be, { get each() {
        return v.body;
      }, children: (b) => (() => {
        var I = Kn();
        return x(I, () => b.day), q(() => a(I, M({ color: b.color }))), I;
      })() }), null), q((b) => {
        var I = E({ emphasis: v.emphasis }), O = y();
        return I !== b.e && a(c, b.e = I), O !== b.t && a(H, b.t = O), b;
      }, { e: void 0, t: void 0 }), c;
    })() })), q((v) => {
      var c = Z({ isToFold: d() }), H = $(), b = k(), I = Y(), O = w(), V = p(), U = _(), J = P({ isPending: m() }), ge = S({ isToFold: d() }), we = z({ isToFold: d() }), me = B(), Se = D({ isToFold: d() }), _e = A({ isObservable: f(), tableState: h() });
      return c !== v.e && a(F, v.e = c), H !== v.t && a(R, v.t = H), b !== v.a && a(W, v.a = b), I !== v.o && a(re, v.o = I), O !== v.i && a(ae, v.i = O), V !== v.n && a(he, v.n = V), U !== v.s && a(ne, v.s = U), J !== v.h && a(K, v.h = J), ge !== v.r && Re(ce, "class", v.r = ge), we !== v.d && a(xe, v.d = we), me !== v.l && a(se, v.l = me), Se !== v.u && a(L, v.u = Se), _e !== v.c && a(j, v.c = _e), v;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0 }), F;
  })();
};
Ae(["click"]);
var Xn = de('<div><table><caption>KIN\u5468\u671F\u8868</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>KIN\u5468\u671F\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), Zn = de("<tr><th scope=row></th><td>");
const Jn = (e) => {
  const t = be(() => {
    var _a;
    return (_a = e.periodicTableData) == null ? void 0 : _a.title.head;
  }), n = be(() => {
    var _a;
    return (_a = e.periodicTableData) == null ? void 0 : _a.title.body;
  }), i = () => {
    var _a;
    return (_a = e.periodicTableData) == null ? void 0 : _a.data;
  };
  let l, o, r;
  const { variables: s, handlers: u } = Pe(() => l, () => o, () => r, () => e.foldedNotify, e.sendFoldedNotify), { isObservable: f, tableState: h, isToFold: d, isPending: m, updateSticky: g } = s, { handleTransitionEnd: N, handleOnClick: C } = u, { tableStyle: $, captionStyle: k, tableDatumStyle: y, replaceCaptionContainerStyle: w, replaceCaptionStyle: p, captionTextStyle: _, foldButtonStyle: P, foldIconStyle: S, tableHeadBorderStyle: z, tableHeadTitleStyle: B, tableHeadColStyle: D, tableBodyStyle: A, tableBodyRowStyle: E } = Ye(g), M = T(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-265"], false: ["h-9", "delay-200"] } } }), Z = T(["w-1/3"]);
  return (() => {
    var Y = Xn(), F = Y.firstChild, R = F.firstChild, W = R.nextSibling, oe = W.firstChild, re = W.nextSibling, X = re.firstChild, ae = X.firstChild, he = ae.firstChild, ne = he.nextSibling, K = ne.firstChild, ce = K.firstChild, $e = ne.nextSibling, xe = X.nextSibling, se = xe.firstChild, L = se.nextSibling, j = re.nextSibling;
    Ne(Y, "transitionend", N);
    var G = l;
    typeof G == "function" ? le(G, Y) : l = Y;
    var Q = o;
    typeof Q == "function" ? le(Q, F) : o = F, Ne(ne, "click", C, true), x(ce, () => d() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), x(se, t), x(L, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var ue = r;
    return typeof ue == "function" ? le(ue, j) : r = j, x(j, te(Be, { get each() {
      return i();
    }, children: (v) => (() => {
      var c = Zn(), H = c.firstChild, b = H.nextSibling;
      return x(H, () => v.head), x(b, () => {
        var _a;
        return (_a = v.body) == null ? void 0 : _a[0].day;
      }), q((I) => {
        var O = E({ emphasis: v.emphasis }), V = y(), U = y();
        return O !== I.e && a(c, I.e = O), V !== I.t && a(H, I.t = V), U !== I.a && a(b, I.a = U), I;
      }, { e: void 0, t: void 0, a: void 0 }), c;
    })() })), q((v) => {
      var c = M({ isToFold: d() }), H = $(), b = k(), I = Z(), O = w(), V = p(), U = _(), J = P({ isPending: m() }), ge = S({ isToFold: d() }), we = z({ isToFold: d() }), me = B({ isToFold: d() }), Se = D({ isToFold: d() }), _e = D({ isToFold: d() }), De = A({ isObservable: f(), tableState: h() });
      return c !== v.e && a(Y, v.e = c), H !== v.t && a(F, v.t = H), b !== v.a && a(R, v.a = b), I !== v.o && a(oe, v.o = I), O !== v.i && a(X, v.i = O), V !== v.n && a(ae, v.n = V), U !== v.s && a(he, v.s = U), J !== v.h && a(ne, v.h = J), ge !== v.r && Re(K, "class", v.r = ge), we !== v.d && a($e, v.d = we), me !== v.l && a(xe, v.l = me), Se !== v.u && a(se, v.u = Se), _e !== v.c && a(L, v.c = _e), De !== v.w && a(j, v.w = De), v;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), Y;
  })();
};
Ae(["click"]);
var Qn = de("<div><div tabindex=0><article><section></section><section></section><section></section><section></section><section></section><section></section><section></section><section>");
const ei = (e) => {
  const [t, n] = xn(), [i, l] = Te(0), [o] = Kt(t, async (m) => {
    try {
      const g = yn(m);
      return pn(g, m);
    } catch (g) {
      console.error(g), await bt();
    }
  }), r = () => {
    l((m) => m + 1);
  }, s = T(["transition-opacity", "relative", "after:absolute", "after:content-['']", "after:bottom-0", "after:left-0", "after:w-full", "after:h-8", "after:bg-gradient-to-t", "after:from-neutral-900", "after:via-neutral-900/70", "after:via-50%", "after:to-transparent", "after:to-[2rem]", "after:pointer-events-none"], { variants: { index: { 0: [], 1: ["hidden", "md:block"], 2: ["hidden", "lg:block"], 3: ["hidden", "xl:block"] }, isInitDone: { true: ["visible", "opacity-100"], false: ["invisible", "opacity-0"] } } }), u = T(["pb-8", "size-full", "rounded", "overflow-y-auto", "scrollbar-none"]), f = T(["bg-neutral-800", "rounded", "divide-y", "divide-neutral-600"]), h = T(["p-2"]), d = T(["bg-neutral-800", "sticky", "top-0", "h-15", "z-30", "shadow-md", "shadow-neutral-950/25", h()]);
  return (() => {
    var m = Qn(), g = m.firstChild, N = g.firstChild, C = N.firstChild, $ = C.nextSibling, k = $.nextSibling, y = k.nextSibling, w = y.nextSibling, p = w.nextSibling, _ = p.nextSibling, P = _.nextSibling;
    return x(C, te(kn, { birthdate: t, setBirthdate: n })), x($, te(An, { get tzolkinData() {
      var _a;
      return (_a = o()) == null ? void 0 : _a.tzolkin;
    }, get foldedNotify() {
      return i();
    }, sendFoldedNotify: r })), x(k, te(En, { get compareData() {
      var _a;
      return (_a = o()) == null ? void 0 : _a.compare;
    }, get foldedNotify() {
      return i();
    }, sendFoldedNotify: r })), x(y, te(Rn, { get treeOfLifeData() {
      var _a;
      return (_a = o()) == null ? void 0 : _a.treeOfLife;
    }, get foldedNotify() {
      return i();
    }, sendFoldedNotify: r })), x(w, te(Yn, { get otherData() {
      var _a;
      return (_a = o()) == null ? void 0 : _a.other;
    }, get foldedNotify() {
      return i();
    }, sendFoldedNotify: r })), x(p, te(Un, { get storyData() {
      var _a;
      return (_a = o()) == null ? void 0 : _a.story;
    }, get foldedNotify() {
      return i();
    }, sendFoldedNotify: r })), x(_, te(qn, { get timelineData() {
      var _a;
      return (_a = o()) == null ? void 0 : _a.timeline;
    }, get foldedNotify() {
      return i();
    }, sendFoldedNotify: r })), x(P, te(Jn, { get periodicTableData() {
      var _a;
      return (_a = o()) == null ? void 0 : _a.periodicTable;
    }, get foldedNotify() {
      return i();
    }, sendFoldedNotify: r })), q((S) => {
      var z = s({ index: e.index }), B = u(), D = f(), A = d(), E = h(), M = h(), Z = h(), Y = h(), F = h(), R = h(), W = h();
      return z !== S.e && a(m, S.e = z), B !== S.t && a(g, S.t = B), D !== S.a && a(N, S.a = D), A !== S.o && a(C, S.o = A), E !== S.i && a($, S.i = E), M !== S.n && a(k, S.n = M), Z !== S.s && a(y, S.s = Z), Y !== S.h && a(w, S.h = Y), F !== S.r && a(p, S.r = F), R !== S.d && a(_, S.d = R), W !== S.l && a(P, S.l = W), S;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0 }), m;
  })();
};
var ti = de('<div><a href="https://github.com/ChapterGreen/mayalculator-mini.github.io?tab=readme-ov-file#readme"target=_blank rel=noreferrer><svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=currentColor viewBox="0 0 16 16"><title>\u4F7F\u3044\u65B9\u8AAC\u660E\u3092\u958B\u304F</title><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"></path></svg><span>\u4F7F\u3044\u65B9\u8AAC\u660E\u3092\u958B\u304F');
const ni = () => {
  const e = T(["transition-colors", "w-full", "h-10", "rounded", "hocus:bg-white/5"]), t = T(["flex", "size-full", "gap-2", "p-2", "items-center"]);
  return (() => {
    var n = ti(), i = n.firstChild;
    return q((l) => {
      var o = e(), r = t();
      return o !== l.e && a(n, l.e = o), r !== l.t && a(i, l.t = r), l;
    }, { e: void 0, t: void 0 }), n;
  })();
};
var ii = de('<div><fieldset><legend><svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=currentColor viewBox="0 0 16 16"><title>\u30C6\u30FC\u30D6\u30EB\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u308B</title><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"></path></svg><span>\u30C6\u30FC\u30D6\u30EB\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u308B</span></legend><label><input type=radio name=changeResultViewButtons checked><span>placeholder</span></label><label><input type=radio name=changeResultViewButtons><span>placeholder</span></label><label><input type=radio name=changeResultViewButtons><span>placeholder');
const li = () => {
  const e = T(["transition-colors", "w-full", "h-36", "p-2", "pt-0", "rounded", "hocus:bg-white/5"]), t = T(["flex", "w-full", "h-10", "gap-2", "items-center"]), n = T(["transition-colors", "flex", "items-center", "gap-2", "w-full", "h-8", "p-2", "rounded", "cursor-pointer", "hocus:bg-white/5"]), i = T(["accent-neutral-600"]);
  return (() => {
    var l = ii(), o = l.firstChild, r = o.firstChild, s = r.nextSibling, u = s.firstChild, f = s.nextSibling, h = f.firstChild, d = f.nextSibling, m = d.firstChild;
    return q((g) => {
      var N = e(), C = t(), $ = n(), k = i(), y = n(), w = i(), p = n(), _ = i();
      return N !== g.e && a(l, g.e = N), C !== g.t && a(r, g.t = C), $ !== g.a && a(s, g.a = $), k !== g.o && a(u, g.o = k), y !== g.i && a(f, g.i = y), w !== g.n && a(h, g.n = w), p !== g.s && a(d, g.s = p), _ !== g.h && a(m, g.h = _), g;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), l;
  })();
};
var oi = de('<div><div></div><div><div><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title>\u8A2D\u5B9A\u3092\u9589\u3058\u308B</title><path fill-rule=evenodd d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"></path></svg></button><span>\u8A2D\u5B9A</span></div><ul><li></li><li>');
const ri = (e) => {
  const t = () => e.isMenuOpen, [n, i] = Te(false), l = () => {
    e.setIsMenuOpen(false);
  };
  tt(() => {
    if (t()) i(true);
    else {
      const m = setTimeout(() => {
        i(false);
      }, 300);
      return () => clearTimeout(m);
    }
  });
  const o = T([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), r = T(["transition-opacity", "duration-300", "fixed", "inset-0", "bg-black/50", "z-40"], { variants: { isMenuOpen: { true: ["opacity-100"], false: ["opacity-0"] } } }), s = T(["transition-transform", "duration-300", "fixed", "top-0", "left-0", "p-1", "space-y-1", "w-xs", "h-full", "bg-neutral-800", "shadow-xl", "shadow-neutral-950", "z-50"], { variants: { isMenuOpen: { true: ["translate-x-0"], false: ["-translate-x-full"] } } }), u = T(["relative", "w-full", "h-9", "pb-1", "border-b", "border-neutral-600"]), f = T(["absolute", "size-7", "top-0.5", "opacity-50", "transition-opacity", "hocus:opacity-100", "cursor-pointer"]), h = T(["flex", "text-2xl", "justify-center"]), d = T(["w-full"]);
  return (() => {
    var m = oi(), g = m.firstChild, N = g.nextSibling, C = N.firstChild, $ = C.firstChild, k = $.nextSibling, y = C.nextSibling, w = y.firstChild, p = w.nextSibling;
    return g.$$keydown = l, g.$$click = l, $.$$click = l, x(w, te(li, {})), x(p, te(ni, {})), q((_) => {
      var P = o({ visible: n() }), S = r({ isMenuOpen: t() }), z = s({ isMenuOpen: t() }), B = u(), D = f(), A = h(), E = d();
      return P !== _.e && a(m, _.e = P), S !== _.t && a(g, _.t = S), z !== _.a && a(N, _.a = z), B !== _.o && a(C, _.o = B), D !== _.i && a($, _.i = D), A !== _.n && a(k, _.n = A), E !== _.s && a(y, _.s = E), _;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0 }), m;
  })();
};
Ae(["click", "keydown"]);
var ai = de('<div><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title>\u8A2D\u5B9A\u3092\u958B\u304F</title><path fill-rule=evenodd d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path></svg></button><div>');
const si = () => {
  const [e, t] = Te(false), [n, i] = Te(false), l = () => {
    i(true);
  };
  qt(async () => {
    await bt(), t(true);
  });
  const o = T(["size-full", "px-8", "pt-8"]), r = T(["transition", "size-full", "flex", "gap-4"], { variants: { isInitDone: { true: ["scale-100", "opacity-100"], false: ["scale-98", "opacity-0"] } } }), s = T(["absolute", "size-7", "top-1", "left-1", "opacity-50", "transition-opacity", "hocus:opacity-100", "cursor-pointer"]);
  return (() => {
    var u = ai(), f = u.firstChild, h = f.nextSibling;
    return x(u, te(ri, { get isMenuOpen() {
      return n();
    }, setIsMenuOpen: i }), f), f.$$click = l, x(h, te(on, { get when() {
      return e();
    }, get children() {
      return te(Be, { get each() {
        return Array(4).fill(0);
      }, children: (d, m) => te(ei, { get index() {
        return m();
      } }) });
    } })), q((d) => {
      var m = o(), g = n(), N = s(), C = n(), $ = r({ isInitDone: e() });
      return m !== d.e && a(u, d.e = m), g !== d.t && (f.inert = d.t = g), N !== d.a && a(f, d.a = N), C !== d.o && (h.inert = d.o = C), $ !== d.i && a(h, d.i = $), d;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), u;
  })();
};
Ae(["click"]);
var di = de("<main>");
const ci = () => {
  const e = T(["fixed", "size-full", "bg-neutral-900", "text-neutral-200"]);
  return (() => {
    var t = di();
    return x(t, te(si, {})), q(() => a(t, e())), t;
  })();
}, ui = () => {
  try {
    const e = document.getElementById("root");
    if (!e) throw new Error("Root element not found");
    an(() => te(ci, {}), e);
  } catch (e) {
    console.error(e);
  }
};
ui();
