(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
  new MutationObserver((i) => {
    for (const l of i) if (l.type === "childList") for (const a of l.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && o(a);
  }).observe(document, { childList: true, subtree: true });
  function n(i) {
    const l = {};
    return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
  }
  function o(i) {
    if (i.ep) return;
    i.ep = true;
    const l = n(i);
    fetch(i.href, l);
  }
})();
const Ue = false, Ve = (t, e) => t === e, je = Symbol("solid-track"), ne = { equals: Ve };
let ke = Pe;
const Gt = 1, oe = 2, Ee = { owned: null, cleanups: null, context: null, owner: null }, de = {};
var gt = null;
let ue = null, We = null, ht = null, $t = null, Mt = null, se = 0;
function Zt(t, e) {
  const n = ht, o = gt, i = t.length === 0, l = e === void 0 ? o : e, a = i ? Ee : { owned: null, cleanups: null, context: l ? l.context : null, owner: l }, s = i ? t : () => t(() => Bt(() => Xt(a)));
  gt = a, ht = null;
  try {
    return Ut(s, true);
  } finally {
    ht = n, gt = o;
  }
}
function z(t, e) {
  e = e ? Object.assign({}, ne, e) : ne;
  const n = { value: t, observers: null, observerSlots: null, comparator: e.equals || void 0 }, o = (i) => (typeof i == "function" && (i = i(n.value)), Be(n, i));
  return [Ae.bind(n), o];
}
function Ke(t, e, n) {
  const o = ce(t, e, true, Gt);
  Wt(o);
}
function J(t, e, n) {
  const o = ce(t, e, false, Gt);
  Wt(o);
}
function Lt(t, e, n) {
  ke = en;
  const o = ce(t, e, false, Gt);
  o.user = true, Mt ? Mt.push(o) : Wt(o);
}
function pt(t, e, n) {
  n = n ? Object.assign({}, ne, n) : ne;
  const o = ce(t, e, true, 0);
  return o.observers = null, o.observerSlots = null, o.comparator = n.equals || void 0, Wt(o), Ae.bind(o);
}
function qe(t) {
  return t && typeof t == "object" && "then" in t;
}
function Je(t, e, n) {
  let o, i, l;
  typeof e == "function" ? (o = t, i = e, l = {}) : (o = true, i = t, l = e || {});
  let a = null, s = de, h = false, y = "initialValue" in l, f = typeof o == "function" && pt(o);
  const v = /* @__PURE__ */ new Set(), [w, D] = (l.storage || z)(l.initialValue), [O, C] = z(void 0), [N, B] = z(void 0, { equals: false }), [p, x] = z(y ? "ready" : "unresolved");
  function E(I, $, P, M) {
    return a === I && (a = null, M !== void 0 && (y = true), (I === s || $ === s) && l.onHydrated && queueMicrotask(() => l.onHydrated(M, { value: $ })), s = de, T($, P)), $;
  }
  function T(I, $) {
    Ut(() => {
      $ === void 0 && D(() => I), x($ !== void 0 ? "errored" : y ? "ready" : "unresolved"), C($);
      for (const P of v.keys()) P.decrement();
      v.clear();
    }, false);
  }
  function Y() {
    const I = Ze, $ = w(), P = O();
    if (P !== void 0 && !a) throw P;
    return ht && ht.user, $;
  }
  function S(I = true) {
    if (I !== false && h) return;
    h = false;
    const $ = f ? f() : o;
    if ($ == null || $ === false) {
      E(a, Bt(w));
      return;
    }
    const P = s !== de ? s : Bt(() => i($, { value: w(), refetching: I }));
    return qe(P) ? (a = P, "value" in P ? (P.status === "success" ? E(a, P.value, void 0, $) : E(a, void 0, he(P.value), $), P) : (h = true, queueMicrotask(() => h = false), Ut(() => {
      x(y ? "refreshing" : "pending"), B();
    }, false), P.then((M) => E(P, M, void 0, $), (M) => E(P, void 0, he(M), $)))) : (E(a, P, void 0, $), P);
  }
  return Object.defineProperties(Y, { state: { get: () => p() }, error: { get: () => O() }, loading: { get() {
    const I = p();
    return I === "pending" || I === "refreshing";
  } }, latest: { get() {
    if (!y) return Y();
    const I = O();
    if (I && !a) throw I;
    return w();
  } } }), f ? Ke(() => S(false)) : S(false), [Y, { refetch: S, mutate: D }];
}
function Bt(t) {
  if (ht === null) return t();
  const e = ht;
  ht = null;
  try {
    return t();
  } finally {
    ht = e;
  }
}
function Xe(t) {
  Lt(() => Bt(t));
}
function Rt(t) {
  return gt === null || (gt.cleanups === null ? gt.cleanups = [t] : gt.cleanups.push(t)), t;
}
const [yo, vo] = z(false);
let Ze;
function Ae() {
  if (this.sources && this.state) if (this.state === Gt) Wt(this);
  else {
    const t = $t;
    $t = null, Ut(() => le(this), false), $t = t;
  }
  if (ht) {
    const t = this.observers ? this.observers.length : 0;
    ht.sources ? (ht.sources.push(this), ht.sourceSlots.push(t)) : (ht.sources = [this], ht.sourceSlots = [t]), this.observers ? (this.observers.push(ht), this.observerSlots.push(ht.sources.length - 1)) : (this.observers = [ht], this.observerSlots = [ht.sources.length - 1]);
  }
  return this.value;
}
function Be(t, e, n) {
  let o = t.value;
  return (!t.comparator || !t.comparator(o, e)) && (t.value = e, t.observers && t.observers.length && Ut(() => {
    for (let i = 0; i < t.observers.length; i += 1) {
      const l = t.observers[i], a = ue && ue.running;
      a && ue.disposed.has(l), (a ? !l.tState : !l.state) && (l.pure ? $t.push(l) : Mt.push(l), l.observers && Me(l)), a || (l.state = Gt);
    }
    if ($t.length > 1e6) throw $t = [], new Error();
  }, false)), e;
}
function Wt(t) {
  if (!t.fn) return;
  Xt(t);
  const e = se;
  Qe(t, t.value, e);
}
function Qe(t, e, n) {
  let o;
  const i = gt, l = ht;
  ht = gt = t;
  try {
    o = t.fn(e);
  } catch (a) {
    return t.pure && (t.state = Gt, t.owned && t.owned.forEach(Xt), t.owned = null), t.updatedAt = n + 1, Ge(a);
  } finally {
    ht = l, gt = i;
  }
  (!t.updatedAt || t.updatedAt <= n) && (t.updatedAt != null && "observers" in t ? Be(t, o) : t.value = o, t.updatedAt = n);
}
function ce(t, e, n, o = Gt, i) {
  const l = { fn: t, state: o, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: e, owner: gt, context: gt ? gt.context : null, pure: n };
  return gt === null || gt !== Ee && (gt.owned ? gt.owned.push(l) : gt.owned = [l]), l;
}
function ie(t) {
  if (t.state === 0) return;
  if (t.state === oe) return le(t);
  if (t.suspense && Bt(t.suspense.inFallback)) return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < se); ) t.state && e.push(t);
  for (let n = e.length - 1; n >= 0; n--) if (t = e[n], t.state === Gt) Wt(t);
  else if (t.state === oe) {
    const o = $t;
    $t = null, Ut(() => le(t, e[0]), false), $t = o;
  }
}
function Ut(t, e) {
  if ($t) return t();
  let n = false;
  e || ($t = []), Mt ? n = true : Mt = [], se++;
  try {
    const o = t();
    return tn(n), o;
  } catch (o) {
    n || (Mt = null), $t = null, Ge(o);
  }
}
function tn(t) {
  if ($t && (Pe($t), $t = null), t) return;
  const e = Mt;
  Mt = null, e.length && Ut(() => ke(e), false);
}
function Pe(t) {
  for (let e = 0; e < t.length; e++) ie(t[e]);
}
function en(t) {
  let e, n = 0;
  for (e = 0; e < t.length; e++) {
    const o = t[e];
    o.user ? t[n++] = o : ie(o);
  }
  for (e = 0; e < n; e++) ie(t[e]);
}
function le(t, e) {
  t.state = 0;
  for (let n = 0; n < t.sources.length; n += 1) {
    const o = t.sources[n];
    if (o.sources) {
      const i = o.state;
      i === Gt ? o !== e && (!o.updatedAt || o.updatedAt < se) && ie(o) : i === oe && le(o, e);
    }
  }
}
function Me(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const n = t.observers[e];
    n.state || (n.state = oe, n.pure ? $t.push(n) : Mt.push(n), n.observers && Me(n));
  }
}
function Xt(t) {
  let e;
  if (t.sources) for (; t.sources.length; ) {
    const n = t.sources.pop(), o = t.sourceSlots.pop(), i = n.observers;
    if (i && i.length) {
      const l = i.pop(), a = n.observerSlots.pop();
      o < i.length && (l.sourceSlots[a] = o, i[o] = l, n.observerSlots[o] = a);
    }
  }
  if (t.tOwned) {
    for (e = t.tOwned.length - 1; e >= 0; e--) Xt(t.tOwned[e]);
    delete t.tOwned;
  }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--) Xt(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--) t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function he(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", { cause: t });
}
function Ge(t, e = gt) {
  throw he(t);
}
const nn = Symbol("fallback");
function Ce(t) {
  for (let e = 0; e < t.length; e++) t[e]();
}
function on(t, e, n = {}) {
  let o = [], i = [], l = [], a = 0, s = e.length > 1 ? [] : null;
  return Rt(() => Ce(l)), () => {
    let h = t() || [], y = h.length, f, v;
    return h[je], Bt(() => {
      let D, O, C, N, B, p, x, E, T;
      if (y === 0) a !== 0 && (Ce(l), l = [], o = [], i = [], a = 0, s && (s = [])), n.fallback && (o = [nn], i[0] = Zt((Y) => (l[0] = Y, n.fallback())), a = 1);
      else if (a === 0) {
        for (i = new Array(y), v = 0; v < y; v++) o[v] = h[v], i[v] = Zt(w);
        a = y;
      } else {
        for (C = new Array(y), N = new Array(y), s && (B = new Array(y)), p = 0, x = Math.min(a, y); p < x && o[p] === h[p]; p++) ;
        for (x = a - 1, E = y - 1; x >= p && E >= p && o[x] === h[E]; x--, E--) C[E] = i[x], N[E] = l[x], s && (B[E] = s[x]);
        for (D = /* @__PURE__ */ new Map(), O = new Array(E + 1), v = E; v >= p; v--) T = h[v], f = D.get(T), O[v] = f === void 0 ? -1 : f, D.set(T, v);
        for (f = p; f <= x; f++) T = o[f], v = D.get(T), v !== void 0 && v !== -1 ? (C[v] = i[f], N[v] = l[f], s && (B[v] = s[f]), v = O[v], D.set(T, v)) : l[f]();
        for (v = p; v < y; v++) v in C ? (i[v] = C[v], l[v] = N[v], s && (s[v] = B[v], s[v](v))) : i[v] = Zt(w);
        i = i.slice(0, a = y), o = h.slice(0);
      }
      return i;
    });
    function w(D) {
      if (l[v] = D, s) {
        const [O, C] = z(v);
        return s[v] = C, e(h[v], O);
      }
      return e(h[v]);
    }
  };
}
function et(t, e) {
  return Bt(() => t(e || {}));
}
const ln = (t) => `Stale read from <${t}>.`;
function At(t) {
  const e = "fallback" in t && { fallback: () => t.fallback };
  return pt(on(() => t.each, t.children, e || void 0));
}
function an(t) {
  const e = t.keyed, n = pt(() => t.when, void 0, void 0), o = e ? n : pt(n, void 0, { equals: (i, l) => !i == !l });
  return pt(() => {
    const i = o();
    if (i) {
      const l = t.children;
      return typeof l == "function" && l.length > 0 ? Bt(() => l(e ? i : () => {
        if (!Bt(o)) throw ln("Show");
        return n();
      })) : l;
    }
    return t.fallback;
  }, void 0, void 0);
}
function rn(t, e, n) {
  let o = n.length, i = e.length, l = o, a = 0, s = 0, h = e[i - 1].nextSibling, y = null;
  for (; a < i || s < l; ) {
    if (e[a] === n[s]) {
      a++, s++;
      continue;
    }
    for (; e[i - 1] === n[l - 1]; ) i--, l--;
    if (i === a) {
      const f = l < o ? s ? n[s - 1].nextSibling : n[l - s] : h;
      for (; s < l; ) t.insertBefore(n[s++], f);
    } else if (l === s) for (; a < i; ) (!y || !y.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === n[l - 1] && n[s] === e[i - 1]) {
      const f = e[--i].nextSibling;
      t.insertBefore(n[s++], e[a++].nextSibling), t.insertBefore(n[--l], f), e[i] = n[l];
    } else {
      if (!y) {
        y = /* @__PURE__ */ new Map();
        let v = s;
        for (; v < l; ) y.set(n[v], v++);
      }
      const f = y.get(e[a]);
      if (f != null) if (s < f && f < l) {
        let v = a, w = 1, D;
        for (; ++v < i && v < l && !((D = y.get(e[v])) == null || D !== f + w); ) w++;
        if (w > f - s) {
          const O = e[a];
          for (; s < f; ) t.insertBefore(n[s++], O);
        } else t.replaceChild(n[s++], e[a++]);
      } else a++;
      else e[a++].remove();
    }
  }
}
const De = "_$DX_DELEGATE";
function sn(t, e, n, o = {}) {
  let i;
  return Zt((l) => {
    i = l, e === document ? t() : _(e, t(), e.firstChild ? null : void 0, n);
  }, o.owner), () => {
    i(), e.textContent = "";
  };
}
function ut(t, e, n, o) {
  let i;
  const l = () => {
    const s = document.createElement("template");
    return s.innerHTML = t, s.content.firstChild;
  }, a = () => (i || (i = l())).cloneNode(true);
  return a.cloneNode = a, a;
}
function Pt(t, e = window.document) {
  const n = e[De] || (e[De] = /* @__PURE__ */ new Set());
  for (let o = 0, i = t.length; o < i; o++) {
    const l = t[o];
    n.has(l) || (n.add(l), e.addEventListener(l, cn));
  }
}
function Vt(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}
function r(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}
function rt(t, e, n) {
  return Bt(() => t(e, n));
}
function _(t, e, n, o) {
  if (n !== void 0 && !o && (o = []), typeof e != "function") return ae(t, e, o, n);
  J((i) => ae(t, e(), i, n), o);
}
function cn(t) {
  let e = t.target;
  const n = `$$${t.type}`, o = t.target, i = t.currentTarget, l = (h) => Object.defineProperty(t, "target", { configurable: true, value: h }), a = () => {
    const h = e[n];
    if (h && !e.disabled) {
      const y = e[`${n}Data`];
      if (y !== void 0 ? h.call(e, y, t) : h.call(e, t), t.cancelBubble) return;
    }
    return e.host && typeof e.host != "string" && !e.host._$host && e.contains(t.target) && l(e.host), true;
  }, s = () => {
    for (; a() && (e = e._$host || e.parentNode || e.host); ) ;
  };
  if (Object.defineProperty(t, "currentTarget", { configurable: true, get() {
    return e || document;
  } }), t.composedPath) {
    const h = t.composedPath();
    l(h[0]);
    for (let y = 0; y < h.length - 2 && (e = h[y], !!a()); y++) {
      if (e._$host) {
        e = e._$host, s();
        break;
      }
      if (e.parentNode === i) break;
    }
  } else s();
  l(o);
}
function ae(t, e, n, o, i) {
  for (; typeof n == "function"; ) n = n();
  if (e === n) return n;
  const l = typeof e, a = o !== void 0;
  if (t = a && n[0] && n[0].parentNode || t, l === "string" || l === "number") {
    if (l === "number" && (e = e.toString(), e === n)) return n;
    if (a) {
      let s = n[0];
      s && s.nodeType === 3 ? s.data !== e && (s.data = e) : s = document.createTextNode(e), n = jt(t, n, o, s);
    } else n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || l === "boolean") n = jt(t, n, o);
  else {
    if (l === "function") return J(() => {
      let s = e();
      for (; typeof s == "function"; ) s = s();
      n = ae(t, s, n, o);
    }), () => n;
    if (Array.isArray(e)) {
      const s = [], h = n && Array.isArray(n);
      if (ye(s, e, n, i)) return J(() => n = ae(t, s, n, o, true)), () => n;
      if (s.length === 0) {
        if (n = jt(t, n, o), a) return n;
      } else h ? n.length === 0 ? Te(t, s, o) : rn(t, n, s) : (n && jt(t), Te(t, s));
      n = s;
    } else if (e.nodeType) {
      if (Array.isArray(n)) {
        if (a) return n = jt(t, n, o, e);
        jt(t, n, null, e);
      } else n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      n = e;
    }
  }
  return n;
}
function ye(t, e, n, o) {
  let i = false;
  for (let l = 0, a = e.length; l < a; l++) {
    let s = e[l], h = n && n[t.length], y;
    if (!(s == null || s === true || s === false)) if ((y = typeof s) == "object" && s.nodeType) t.push(s);
    else if (Array.isArray(s)) i = ye(t, s, h) || i;
    else if (y === "function") if (o) {
      for (; typeof s == "function"; ) s = s();
      i = ye(t, Array.isArray(s) ? s : [s], Array.isArray(h) ? h : [h]) || i;
    } else t.push(s), i = true;
    else {
      const f = String(s);
      h && h.nodeType === 3 && h.data === f ? t.push(h) : t.push(document.createTextNode(f));
    }
  }
  return i;
}
function Te(t, e, n = null) {
  for (let o = 0, i = e.length; o < i; o++) t.insertBefore(e[o], n);
}
function jt(t, e, n, o) {
  if (n === void 0) return t.textContent = "";
  const i = o || document.createTextNode("");
  if (e.length) {
    let l = false;
    for (let a = e.length - 1; a >= 0; a--) {
      const s = e[a];
      if (i !== s) {
        const h = s.parentNode === t;
        !l && !a ? h ? t.replaceChild(i, s) : t.insertBefore(i, n) : h && s.remove();
      } else l = true;
    }
  } else t.insertBefore(i, n);
  return [i];
}
function He(t) {
  var e, n, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = He(t[e])) && (o && (o += " "), o += n);
  } else for (n in t) t[n] && (o && (o += " "), o += n);
  return o;
}
function dn() {
  for (var t, e, n = 0, o = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = He(t)) && (o && (o += " "), o += e);
  return o;
}
const _e = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Oe = dn, c = (t, e) => (n) => {
  var o;
  if ((e == null ? void 0 : e.variants) == null) return Oe(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: l } = e, a = Object.keys(i).map((y) => {
    const f = n == null ? void 0 : n[y], v = l == null ? void 0 : l[y];
    if (f === null) return null;
    const w = _e(f) || _e(v);
    return i[y][w];
  }), s = n && Object.entries(n).reduce((y, f) => {
    let [v, w] = f;
    return w === void 0 || (y[v] = w), y;
  }, {}), h = e == null || (o = e.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((y, f) => {
    let { class: v, className: w, ...D } = f;
    return Object.entries(D).every((O) => {
      let [C, N] = O;
      return Array.isArray(N) ? N.includes({ ...l, ...s }[C]) : { ...l, ...s }[C] === N;
    }) ? [...y, v, w] : y;
  }, []);
  return Oe(t, a, h, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
let _t;
const Re = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Re.decode();
let Kt = null;
function Qt() {
  return (Kt === null || Kt.byteLength === 0) && (Kt = new Uint8Array(_t.memory.buffer)), Kt;
}
function fe(t, e) {
  return t = t >>> 0, Re.decode(Qt().subarray(t, t + e));
}
function un(t) {
  const e = _t.__externref_table_alloc();
  return _t.__wbindgen_export_2.set(e, t), e;
}
function Ie(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    const o = un(n);
    _t.__wbindgen_exn_store(o);
  }
}
let ve = 0;
const te = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, fn = typeof te.encodeInto == "function" ? function(t, e) {
  return te.encodeInto(t, e);
} : function(t, e) {
  const n = te.encode(t);
  return e.set(n), { read: t.length, written: n.length };
};
function hn(t, e, n) {
  if (n === void 0) {
    const s = te.encode(t), h = e(s.length, 1) >>> 0;
    return Qt().subarray(h, h + s.length).set(s), ve = s.length, h;
  }
  let o = t.length, i = e(o, 1) >>> 0;
  const l = Qt();
  let a = 0;
  for (; a < o; a++) {
    const s = t.charCodeAt(a);
    if (s > 127) break;
    l[i + a] = s;
  }
  if (a !== o) {
    a !== 0 && (t = t.slice(a)), i = n(i, o, o = a + t.length * 3, 1) >>> 0;
    const s = Qt().subarray(i + a, i + o), h = fn(t, s);
    a += h.written, i = n(i, o, a, 1) >>> 0;
  }
  return ve = a, i;
}
function yn(t) {
  return t == null;
}
let zt = null;
function Fe() {
  return (zt === null || zt.buffer.detached === true || zt.buffer.detached === void 0 && zt.buffer !== _t.memory.buffer) && (zt = new DataView(_t.memory.buffer)), zt;
}
function $e(t) {
  const e = _t.__wbindgen_export_2.get(t);
  return _t.__externref_table_dealloc(t), e;
}
function vn(t) {
  const e = _t.get_mayan_calendar(t);
  if (e[2]) throw $e(e[1]);
  return $e(e[0]);
}
async function bn(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, e);
    } catch (o) {
      if (t.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
      else throw o;
    }
    const n = await t.arrayBuffer();
    return await WebAssembly.instantiate(n, e);
  } else {
    const n = await WebAssembly.instantiate(t, e);
    return n instanceof WebAssembly.Instance ? { instance: n, module: t } : n;
  }
}
function gn() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_parse_def2e24ef1252aff = function() {
    return Ie(function(e, n) {
      return JSON.parse(fe(e, n));
    }, arguments);
  }, t.wbg.__wbg_stringify_f7ed6987935b4a24 = function() {
    return Ie(function(e) {
      return JSON.stringify(e);
    }, arguments);
  }, t.wbg.__wbindgen_init_externref_table = function() {
    const e = _t.__wbindgen_export_2, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  }, t.wbg.__wbindgen_is_undefined = function(e) {
    return e === void 0;
  }, t.wbg.__wbindgen_string_get = function(e, n) {
    const o = n, i = typeof o == "string" ? o : void 0;
    var l = yn(i) ? 0 : hn(i, _t.__wbindgen_malloc, _t.__wbindgen_realloc), a = ve;
    Fe().setInt32(e + 4 * 1, a, true), Fe().setInt32(e + 4 * 0, l, true);
  }, t.wbg.__wbindgen_string_new = function(e, n) {
    return fe(e, n);
  }, t.wbg.__wbindgen_throw = function(e, n) {
    throw new Error(fe(e, n));
  }, t;
}
function wn(t, e) {
  return _t = t.exports, we.__wbindgen_wasm_module = e, zt = null, Kt = null, _t.__wbindgen_start(), _t;
}
async function we(t) {
  if (_t !== void 0) return _t;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("https://chaptergreen.github.io/mayalculator-mini.github.io/assets/mayalculator_core_logic_bg-CaARZF4m.wasm"));
  const e = gn();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: n, module: o } = await bn(await t, e);
  return wn(n, o);
}
const qt = 9999, Jt = 1, re = new Date(0, 0, 0, 0, 0, 0, 0), be = new Date(qt, 11, 31, 0, 0, 0, 0), ge = (() => {
  const t = new Date(re);
  return t.setFullYear(Jt, 0, 1), t;
})(), mn = 260, Sn = { Imix: "\u8D64\u3044\u9F8D", Ik: "\u767D\u3044\u98A8", Akbal: "\u9752\u3044\u591C", Kan: "\u9EC4\u8272\u3044\u7A2E", Chicchan: "\u8D64\u3044\u86C7", Cimi: "\u767D\u3044\u4E16\u754C\u306E\u6A4B\u6E21\u3057", Manik: "\u9752\u3044\u624B", Lamat: "\u9EC4\u8272\u3044\u661F", Muluc: "\u8D64\u3044\u6708", Oc: "\u767D\u3044\u72AC", Chuen: "\u9752\u3044\u733F", Eb: "\u9EC4\u8272\u3044\u4EBA", Ben: "\u8D64\u3044\u7A7A\u6B69\u304F\u4EBA", Ix: "\u767D\u3044\u9B54\u6CD5\u4F7F\u3044", Men: "\u9752\u3044\u9DF2", Cib: "\u9EC4\u8272\u3044\u6226\u58EB", Caban: "\u8D64\u3044\u5730\u7403", Etznab: "\u767D\u3044\u93E1", Cauac: "\u9752\u3044\u5D50", Ahau: "\u9EC4\u8272\u3044\u592A\u967D" }, pn = { Red: "\u56DE\u8EE2\u306E\u8D64\u3044\u6771\u306E\u57CE", White: "\u4EA4\u5DEE\u306E\u767D\u3044\u5317\u306E\u57CE", Blue: "\u71C3\u3048\u308B\u9752\u3044\u897F\u306E\u57CE", Yellow: "\u4E0E\u3048\u308B\u9EC4\u8272\u3044\u5357\u306E\u57CE", Green: "\u9B45\u60D1\u306E\u7DD1\u306E\u4E2D\u592E\u306E\u57CE" }, u = { OPEN: "tableStateOpen", HIDING: "tableStateHiding", DISPLAYING: "tableStateDisplaying", FOLDING: "tableStateFolding", UNFOLDING: "tableStateUnfolding", CLOSE: "tableStateClose" }, ee = (t, e, n) => Math.max(e, Math.min(t, n)), Yt = (t, e) => new Date(t, e, 0).getDate(), xn = (t) => {
  const e = /\d/, n = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " ", "Tab", "Backspace", "Delete", "Shift"];
  return e.test(t) || n.includes(t);
}, Ht = (t) => ({ year: t.getFullYear(), month: t.getMonth() + 1, day: t.getDate() }), Nn = (t) => {
  const e = (() => {
    const a = new Date(re);
    a.setFullYear(t.year, t.month - 1, t.day);
    const s = a.getTime();
    return s > be.getTime() ? new Date(be) : s < ge.getTime() ? new Date(ge) : a;
  })(), n = ee(e.getFullYear(), Jt, qt), o = e.getMonth() + 1, i = e.getDate();
  return { year: n, month: o, day: i };
}, Cn = () => {
  const t = /* @__PURE__ */ new Date();
  t.setFullYear(t.getFullYear() - 30), t.setHours(0, 0, 0, 0);
  const e = Ht(t), [n, o] = z(e), i = (y) => o(Nn(y));
  return [n, { birthdate: i, year: (y) => i({ ...n(), year: y }), month: (y) => i({ ...n(), month: y }), day: (y) => i({ ...n(), day: y }) }];
}, Dn = (t, e, n = 15) => {
  const { tzolkin_calendar: o, haab_calendar: i } = t, l = vt(""), { modern: a, ancient: s } = o, { org: h, mirror: y, abs_rev: f, story: v, timeline: w } = a, D = Le(h.num), O = Le(y.num), { north: C, south: N, west: B, east: p, center: x } = Object.fromEntries(Object.entries(s.tree_of_life).map(([tt, Q]) => [tt, { day: `${Q.sun_crest.day}-${Q.galactic_tone}`, color: Q.sun_crest.color }])), { modern: E, ancient: T } = i, Y = `${E.month}-${E.day}`, S = { title: { head: "Tzolkin", body: [vt("\u7D50\u679C")] }, data: [{ head: "KIN", body: [vt(D)] }, { head: "SC", body: [St(h.sun_crest.org)] }, { head: "WS", body: [St(h.wave_spell.org)] }, { head: "\u9280\u6CB3\u306E\u97F3", body: [vt(`\u97F3 ${h.galactic_tone}`)] }, { head: "5\u3064\u306E\u57CE", body: [{ day: pn[h.castle], color: h.castle }] }] }, I = { title: { head: "KIN", body: [vt("\u7D50\u679C")] }, data: [{ head: "SC\u53CD\u5BFE", body: [St(h.sun_crest.reverse)] }, { head: "SC\u985E\u4F3C", body: [St(h.sun_crest.similar)] }, { head: "SC\u795E\u79D8", body: [St(h.sun_crest.mystery)] }, { head: "WS\u53CD\u5BFE", body: [St(h.wave_spell.reverse)] }, { head: "WS\u985E\u4F3C", body: [St(h.wave_spell.similar)] }, { head: "WS\u795E\u79D8", body: [St(h.wave_spell.mystery)] }, { head: "\u30AC\u30A4\u30C9", body: [St(h.guide)] }, { head: "\u9006\u30AC\u30A4\u30C9", body: [St(h.rev_guide)] }, { head: "\u93E1KIN", body: [vt(O)] }, { head: "\u93E1SC", body: [St(y.sun_crest)] }, { head: "\u93E1WS", body: [St(y.wave_spell)] }] }, $ = { title: { head: "", body: [vt("\u751F\u547D\u6A39\u6CD5"), l, l] }, data: [{ head: "", body: [l, p, l] }, { head: "", body: [C, x, N] }, { head: "", body: [l, B, l] }] }, P = { title: { head: "\u4ED6\u306E\u66A6", body: [vt("\u65E5\u4ED8")] }, data: [{ head: "Haab", body: [vt(Y)] }] }, M = { title: { head: "\u8D77\u627F\u8EE2\u7D50", body: [vt("SC")] }, data: [{ head: "\u8D77", body: [St(v.introduction)] }, { head: "\u627F", body: [St(v.development)] }, { head: "\u8EE2", body: [St(v.twist)] }, { head: "\u7D50", body: [St(v.conclusion)] }] }, nt = { title: { head: `\u897F\u66A6
(\u5E74\u9F62)`, body: [vt("SC"), vt("WS"), vt("\u9280\u6CB3\u306E\u97F3")] }, data: w.timeline.map((tt, Q, X) => {
    const ft = X.length - 1, H = e.year + Q, Z = `${H}
( ${Q} )`, F = [St(tt.sun_crest), St(tt.wave_spell), vt(`\u97F3 ${tt.galactic_tone}`)], b = H % ft === (/* @__PURE__ */ new Date()).getFullYear() % ft;
    return { head: Z, body: F, emphasis: b };
  }) }, U = { title: { head: "\u897F\u66A6", body: [vt("\u5468\u671F")] }, data: [...On(e, n)] };
  return { tzolkin: S, compare: I, treeOfLife: $, other: P, story: M, timeline: nt, periodicTable: U };
}, Le = (t) => {
  const { num: e, is_abs_exp: n, is_black: o, is_polar: i } = t;
  return `${e}${n ? "(\u7D76\u5BFE\u62E1\u5F35KIN)" : ""}${o ? "(\u9ED2KIN)" : ""}${i ? "(\u6975\u6027KIN)" : ""}`;
}, vt = (t) => ({ day: t }), St = (t) => ({ day: Sn[t.day], color: t.color }), ze = (t, e) => t.setDate(t.getDate() + e), Ye = (t) => {
  const { year: e, month: n, day: o } = Ht(t);
  return Yt(e, 2) === 29 && (n === 2 && o === 29 || n === 3 && o === 1);
}, Tn = (t, e) => {
  const o = ge.getTime(), i = [];
  for (let l = 0; l < e; l++) {
    const { year: a, month: s, day: h } = Ht(t), y = new Date(1970, s - 1, h, 0, 0, 0, 0);
    ze(y, -260);
    const { year: f, month: v, day: w } = Ht(y), D = a + f - 1970;
    if (t.setFullYear(D, v - 1, w), t.getTime() < o) break;
    if (Ye(t)) {
      const C = t.getFullYear(), N = { head: `${C}_2_29
${C}_3_1`, body: [vt(`-${l + 1} \u5468\u671F`)] };
      i.push(N);
    } else {
      const { year: C, month: N, day: B } = Ht(t), p = { head: `${C}_${N}_${B}`, body: [vt(`-${l + 1} \u5468\u671F`)] };
      i.push(p);
    }
  }
  return i;
}, _n = (t, e) => {
  const o = be.getTime(), i = [];
  for (let l = 0; l < e; l++) {
    const { year: a, month: s, day: h } = Ht(t), y = new Date(1970, s - 1, h, 0, 0, 0, 0);
    ze(y, mn);
    const { year: f, month: v, day: w } = Ht(y), D = a + f - 1970;
    if (t.setFullYear(D, v - 1, w), t.getTime() > o) break;
    if (Ye(t)) {
      const C = t.getFullYear(), N = { head: `${C}_2_29
${C}_3_1`, body: [vt(`${l + 1} \u5468\u671F`)] };
      i.push(N);
    } else {
      const { year: C, month: N, day: B } = Ht(t), p = { head: `${C}_${N}_${B}`, body: [vt(`${l + 1} \u5468\u671F`)] };
      i.push(p);
    }
  }
  return i;
}, On = (t, e) => {
  const { year: n, month: o, day: i } = t, l = new Date(re);
  l.setFullYear(n, o - 1, i);
  const a = new Date(re);
  a.setFullYear(n, o - 1, i);
  const s = [], h = Tn(l, e), y = _n(a, e);
  return s.push(...h.reverse()), s.push({ head: `${n}_${o}_${i}`, body: [vt("\u8A95\u751F\u65E5")], emphasis: true }), s.push(...y), s;
};
var In = ut("<fieldset><legend>\u8A95\u751F\u65E5\u5165\u529B\u6B04</legend><label><input type=number name=year maxlength=4 required>\u5E74</label><label><input type=number name=month maxlength=2 required>\u6708</label><label><input type=number name=day maxlength=2 required>\u65E5");
const Fn = (t) => {
  const e = () => t.birthdate().year, n = () => t.birthdate().month, o = () => t.birthdate().day, i = (p) => t.setBirthdate.year(p), l = (p) => t.setBirthdate.month(p), a = (p) => t.setBirthdate.day(p);
  let s, h, y;
  const f = (p) => {
    const x = p.key, E = p.currentTarget, T = E.name;
    if (!xn(x)) return p.preventDefault();
    const Y = E.valueAsNumber;
    if (Number.isNaN(Y) && x === "0") return p.preventDefault();
    const S = p.shiftKey, I = () => {
      if (x === "ArrowUp") {
        p.preventDefault();
        const M = Yt(e() + 1, n());
        o() > M && a(M), i(e() + 1);
      } else if (x === "ArrowDown") {
        p.preventDefault();
        const M = Yt(e() - 1, n());
        o() > M && a(M), i(e() - 1);
      } else !S && (x === "Enter" || x === " ") && (p.preventDefault(), h.focus());
    }, $ = () => {
      if (x === "ArrowUp") {
        p.preventDefault();
        const M = Yt(e(), n() + 1);
        o() > M && a(M), l(n() + 1);
      } else if (x === "ArrowDown") {
        p.preventDefault();
        const M = Yt(e(), n() - 1);
        o() > M && a(M), l(n() - 1);
      } else (x === "Enter" || x === " ") && (p.preventDefault(), (S ? s : y).focus());
    }, P = () => {
      x === "ArrowUp" ? (p.preventDefault(), a(o() + 1)) : x === "ArrowDown" ? (p.preventDefault(), a(o() - 1)) : S && (x === "Enter" || x === " ") && (p.preventDefault(), h.focus());
    };
    switch (T) {
      case "year": {
        I();
        break;
      }
      case "month": {
        $();
        break;
      }
      case "day": {
        P();
        break;
      }
    }
  }, v = (p) => {
    const x = p.currentTarget.valueAsNumber;
    if (Number.isNaN(x) || x === 0) return p.preventDefault();
    const E = p.currentTarget.name, T = () => {
      i(ee(x, Jt, qt)), Math.floor(Math.abs(e()) / 1e3) !== 0 && h.focus();
    }, Y = () => {
      l(ee(x, 1, 12)), n() >= 2 && y.focus();
    }, S = () => {
      const I = Yt(e(), n());
      a(ee(x, 1, I));
    };
    switch (E) {
      case "year":
        T();
        break;
      case "month":
        Y();
        break;
      case "day":
        S();
        break;
    }
  }, w = (p) => {
    const x = p.currentTarget.valueAsNumber, E = p.currentTarget.name, T = () => {
      Number.isNaN(x) || x === 0 ? i((/* @__PURE__ */ new Date()).getFullYear() - 30) : x > qt ? i(qt) : x < Jt && i(Jt);
    }, Y = () => {
      Number.isNaN(x) || x === 0 ? l((/* @__PURE__ */ new Date()).getMonth() + 1) : x > 12 ? l(12) : x < 1 && l(1);
    }, S = () => {
      const I = Yt(e(), n());
      Number.isNaN(x) || x === 0 ? a((/* @__PURE__ */ new Date()).getDate()) : x > I ? a(I) : x < 1 && a(1);
    };
    switch (E) {
      case "year":
        T();
        break;
      case "month":
        Y();
        break;
      case "day":
        S();
        break;
    }
  }, D = (p) => {
    p.currentTarget.select();
  }, O = c(["flex", "gap-2"]), C = c(["sr-only"]), N = c(["flex", "gap-2", "items-center"]), B = c(["form-input", "w-full", "rounded", "transition", "hocus:shadow-inner", "bg-neutral-800", "border-neutral-600", "hocus:border-neutral-700", "focus:ring-neutral-700", "hover:shadow-neutral-950/50", "focus:shadow-neutral-950"]);
  return (() => {
    var p = In(), x = p.firstChild, E = x.nextSibling, T = E.firstChild, Y = E.nextSibling, S = Y.firstChild, I = Y.nextSibling, $ = I.firstChild;
    T.addEventListener("focus", D), T.addEventListener("blur", w), T.$$input = v, T.$$keydown = f;
    var P = s;
    typeof P == "function" ? rt(P, T) : s = T, S.addEventListener("focus", D), S.addEventListener("blur", w), S.$$input = v, S.$$keydown = f;
    var M = h;
    typeof M == "function" ? rt(M, S) : h = S, $.addEventListener("focus", D), $.addEventListener("blur", w), $.$$input = v, $.$$keydown = f;
    var nt = y;
    return typeof nt == "function" ? rt(nt, $) : y = $, J((U) => {
      var tt = O(), Q = C(), X = N(), ft = B(), H = N(), Z = B(), F = N(), b = B();
      return tt !== U.e && r(p, U.e = tt), Q !== U.t && r(x, U.t = Q), X !== U.a && r(E, U.a = X), ft !== U.o && r(T, U.o = ft), H !== U.i && r(Y, U.i = H), Z !== U.n && r(S, U.n = Z), F !== U.s && r(I, U.s = F), b !== U.h && r($, U.h = b), U;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), J(() => T.value = e()), J(() => S.value = n()), J(() => $.value = o()), p;
  })();
};
Pt(["keydown", "input"]);
var $n = ut('<div><table><caption>\u30C4\u30A9\u30EB\u30AD\u30F3</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u30C4\u30A9\u30EB\u30AD\u30F3</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), Ln = ut("<tr><th scope=row></th><td>");
const kn = (t) => {
  const e = pt(() => {
    var _a;
    return (_a = t.tzolkinData) == null ? void 0 : _a.title.head;
  }), n = pt(() => {
    var _a;
    return (_a = t.tzolkinData) == null ? void 0 : _a.title.body;
  }), o = () => {
    var _a;
    return (_a = t.tzolkinData) == null ? void 0 : _a.data;
  }, i = () => t.foldedNotify, l = t.sendFoldedNotify, [a, s] = z(true), [h, y] = z(u.OPEN), [f, v] = z(true), w = () => h() !== u.OPEN && h() !== u.CLOSE, [D, O] = z(false);
  let C, N, B;
  const p = (b) => {
    switch (b.stopPropagation(), b.target) {
      case C:
        if (b.propertyName !== "height") return;
        y((L) => L === u.UNFOLDING ? u.DISPLAYING : u.CLOSE), l();
        break;
      case B:
        if (b.propertyName !== "opacity") return;
        y((L) => L === u.HIDING ? u.FOLDING : u.OPEN);
        break;
    }
  }, x = () => {
    w() || (v((b) => !b), y((b) => b === u.OPEN ? u.HIDING : u.UNFOLDING));
  };
  Lt(() => {
    if (!N) return;
    const b = new IntersectionObserver((L) => {
      s(L[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    b.observe(N), Rt(() => b.disconnect());
  }), Lt(() => {
    w() || i() !== 0 && (O(true), requestAnimationFrame(() => {
      O(false);
    }));
  });
  const E = c(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-57"], false: ["h-9", "delay-200"] } } }), T = c(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), Y = c(["sr-only"]), S = c(["p-1"]), I = c(["bg-neutral-700", "z-10", S()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), $ = c(["shadow-md", "shadow-neutral-950/25"]), P = c(["relative", "top-15", "h-9", "z-20", I({ updateSticky: D() })]), M = c(["flex", "text-xl", "font-bold", "justify-center"]), nt = c(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-colors", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), U = c(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), tt = c(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), Q = c(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), X = c(["transition", "will-change-transform", "top-24", I({ updateSticky: D() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), ft = c(["w-1/3"]), H = c(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible"] }, tableState: { [u.OPEN]: ["opacity-100"], [u.HIDING]: ["opacity-0"], [u.DISPLAYING]: ["opacity-100", "delay-50"], [u.FOLDING]: ["opacity-0", "hidden"], [u.UNFOLDING]: ["opacity-0"], [u.CLOSE]: ["opacity-0", "hidden"] } } }), Z = c(["transition-colors", "hocus:bg-white/10", "hocus:text-white"]), F = c([S()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var b = $n(), L = b.firstChild, yt = L.firstChild, wt = yt.nextSibling, Ot = wt.firstChild, ot = wt.nextSibling, it = ot.firstChild, bt = it.firstChild, st = bt.firstChild, q = st.nextSibling, mt = q.firstChild, It = mt.firstChild, Ft = q.nextSibling, ct = it.nextSibling, dt = ct.firstChild, k = dt.nextSibling, W = ot.nextSibling;
    b.addEventListener("transitionend", p);
    var lt = C;
    typeof lt == "function" ? rt(lt, b) : C = b;
    var at = N;
    typeof at == "function" ? rt(at, L) : N = L, q.$$click = x, _(It, () => f() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), _(dt, e), _(k, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var g = B;
    return typeof g == "function" ? rt(g, W) : B = W, _(W, et(At, { get each() {
      return o();
    }, children: (d) => (() => {
      var R = Ln(), m = R.firstChild, G = m.nextSibling;
      return _(m, () => d.head), _(G, () => {
        var _a;
        return (_a = d.body) == null ? void 0 : _a[0].day;
      }), J((A) => {
        var _a;
        var V = Z(), j = S(), K = F({ color: (_a = d.body) == null ? void 0 : _a[0].color });
        return V !== A.e && r(R, A.e = V), j !== A.t && r(m, A.t = j), K !== A.a && r(G, A.a = K), A;
      }, { e: void 0, t: void 0, a: void 0 }), R;
    })() })), J((d) => {
      var R = E({ isToFold: f() }), m = T(), G = Y(), A = ft(), V = $(), j = P(), K = M(), xt = nt({ isPending: w() }), Nt = U({ isToFold: f() }), Ct = tt({ isToFold: f() }), Dt = Q({ isToFold: f() }), Tt = X({ isToFold: f() }), kt = X({ isToFold: f() }), Et = H({ isObservable: a(), tableState: h() });
      return R !== d.e && r(b, d.e = R), m !== d.t && r(L, d.t = m), G !== d.a && r(yt, d.a = G), A !== d.o && r(Ot, d.o = A), V !== d.i && r(it, d.i = V), j !== d.n && r(bt, d.n = j), K !== d.s && r(st, d.s = K), xt !== d.h && r(q, d.h = xt), Nt !== d.r && Vt(mt, "class", d.r = Nt), Ct !== d.d && r(Ft, d.d = Ct), Dt !== d.l && r(ct, d.l = Dt), Tt !== d.u && r(dt, d.u = Tt), kt !== d.c && r(k, d.c = kt), Et !== d.w && r(W, d.w = Et), d;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), b;
  })();
};
Pt(["click"]);
var En = ut('<div><table><caption>\u76F8\u6027\u6BD4\u8F03\u8868</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u76F8\u6027\u6BD4\u8F03\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), An = ut("<tr><th scope=row></th><td>");
const Bn = (t) => {
  const e = pt(() => {
    var _a;
    return (_a = t.compareData) == null ? void 0 : _a.title.head;
  }), n = pt(() => {
    var _a;
    return (_a = t.compareData) == null ? void 0 : _a.title.body;
  }), o = () => {
    var _a;
    return (_a = t.compareData) == null ? void 0 : _a.data;
  }, i = () => t.foldedNotify, l = t.sendFoldedNotify, [a, s] = z(false), [h, y] = z(u.CLOSE), [f, v] = z(false), w = () => h() !== u.OPEN && h() !== u.CLOSE, [D, O] = z(false);
  let C, N, B;
  const p = (b) => {
    switch (b.stopPropagation(), b.target) {
      case C:
        if (b.propertyName !== "height") return;
        y((L) => L === u.UNFOLDING ? u.DISPLAYING : u.CLOSE), l();
        break;
      case B:
        if (b.propertyName !== "opacity") return;
        y((L) => L === u.HIDING ? u.FOLDING : u.OPEN);
        break;
    }
  }, x = () => {
    w() || (v((b) => !b), y((b) => b === u.OPEN ? u.HIDING : u.UNFOLDING));
  };
  Lt(() => {
    if (!N) return;
    const b = new IntersectionObserver((L) => {
      s(L[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    b.observe(N), Rt(() => b.disconnect());
  }), Lt(() => {
    w() || i() !== 0 && (O(true), requestAnimationFrame(() => {
      O(false);
    }));
  });
  const E = c(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-105"], false: ["h-9", "delay-200"] } } }), T = c(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), Y = c(["sr-only"]), S = c(["p-1"]), I = c(["bg-neutral-700", "z-10", S()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), $ = c(["shadow-md", "shadow-neutral-950/25"]), P = c(["relative", "top-15", "h-9", "z-20", I({ updateSticky: D() })]), M = c(["flex", "text-xl", "font-bold", "justify-center"]), nt = c(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-colors", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), U = c(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), tt = c(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), Q = c(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), X = c(["transition", "will-change-transform", "top-24", I({ updateSticky: D() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), ft = c(["w-1/3"]), H = c(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible"] }, tableState: { [u.OPEN]: ["opacity-100"], [u.HIDING]: ["opacity-0"], [u.DISPLAYING]: ["opacity-100", "delay-50"], [u.FOLDING]: ["opacity-0", "hidden"], [u.UNFOLDING]: ["opacity-0"], [u.CLOSE]: ["opacity-0", "hidden"] } } }), Z = c(["transition-colors", "hocus:bg-white/10", "hocus:text-white"]), F = c([S()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var b = En(), L = b.firstChild, yt = L.firstChild, wt = yt.nextSibling, Ot = wt.firstChild, ot = wt.nextSibling, it = ot.firstChild, bt = it.firstChild, st = bt.firstChild, q = st.nextSibling, mt = q.firstChild, It = mt.firstChild, Ft = q.nextSibling, ct = it.nextSibling, dt = ct.firstChild, k = dt.nextSibling, W = ot.nextSibling;
    b.addEventListener("transitionend", p);
    var lt = C;
    typeof lt == "function" ? rt(lt, b) : C = b;
    var at = N;
    typeof at == "function" ? rt(at, L) : N = L, q.$$click = x, _(It, () => f() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), _(dt, e), _(k, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var g = B;
    return typeof g == "function" ? rt(g, W) : B = W, _(W, et(At, { get each() {
      return o();
    }, children: (d) => (() => {
      var R = An(), m = R.firstChild, G = m.nextSibling;
      return _(m, () => d.head), _(G, () => {
        var _a;
        return (_a = d.body) == null ? void 0 : _a[0].day;
      }), J((A) => {
        var _a;
        var V = Z(), j = S(), K = F({ color: (_a = d.body) == null ? void 0 : _a[0].color });
        return V !== A.e && r(R, A.e = V), j !== A.t && r(m, A.t = j), K !== A.a && r(G, A.a = K), A;
      }, { e: void 0, t: void 0, a: void 0 }), R;
    })() })), J((d) => {
      var R = E({ isToFold: f() }), m = T(), G = Y(), A = ft(), V = $(), j = P(), K = M(), xt = nt({ isPending: w() }), Nt = U({ isToFold: f() }), Ct = tt({ isToFold: f() }), Dt = Q({ isToFold: f() }), Tt = X({ isToFold: f() }), kt = X({ isToFold: f() }), Et = H({ isObservable: a(), tableState: h() });
      return R !== d.e && r(b, d.e = R), m !== d.t && r(L, d.t = m), G !== d.a && r(yt, d.a = G), A !== d.o && r(Ot, d.o = A), V !== d.i && r(it, d.i = V), j !== d.n && r(bt, d.n = j), K !== d.s && r(st, d.s = K), xt !== d.h && r(q, d.h = xt), Nt !== d.r && Vt(mt, "class", d.r = Nt), Ct !== d.d && r(Ft, d.d = Ct), Dt !== d.l && r(ct, d.l = Dt), Tt !== d.u && r(dt, d.u = Tt), kt !== d.c && r(k, d.c = kt), Et !== d.w && r(W, d.w = Et), d;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), b;
  })();
};
Pt(["click"]);
var Pn = ut('<div><table><caption>\u53E4\u5178\u30DE\u30E4\u66A6\u8868</caption><colgroup><col><col><col></colgroup><thead><tr><th colspan=3><span aria-hidden=true>\u53E4\u5178\u30DE\u30E4\u66A6\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col colspan=3></th></tr></thead><tbody>'), Mn = ut("<tr>"), Gn = ut("<td>");
const Hn = (t) => {
  const e = pt(() => {
    var _a;
    return (_a = t.treeOfLifeData) == null ? void 0 : _a.title.body;
  }), n = () => t.foldedNotify, o = t.sendFoldedNotify, i = () => {
    var _a;
    return (_a = t.treeOfLifeData) == null ? void 0 : _a.data;
  }, [l, a] = z(false), [s, h] = z(u.CLOSE), [y, f] = z(false), v = () => s() !== u.OPEN && s() !== u.CLOSE, [w, D] = z(false);
  let O, C, N;
  const B = (H) => {
    switch (H.stopPropagation(), H.target) {
      case O:
        if (H.propertyName !== "height") return;
        h((Z) => Z === u.UNFOLDING ? u.DISPLAYING : u.CLOSE), o();
        break;
      case N:
        if (H.propertyName !== "opacity") return;
        h((Z) => Z === u.HIDING ? u.FOLDING : u.OPEN);
        break;
    }
  }, p = () => {
    v() || (f((H) => !H), h((H) => H === u.OPEN ? u.HIDING : u.UNFOLDING));
  };
  Lt(() => {
    if (!C) return;
    const H = new IntersectionObserver((Z) => {
      a(Z[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    H.observe(C), Rt(() => H.disconnect());
  }), Lt(() => {
    v() || n() !== 0 && (D(true), requestAnimationFrame(() => {
      D(false);
    }));
  });
  const x = c(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-41"], false: ["h-9", "delay-200"] } } }), E = c(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), T = c(["sr-only"]), Y = c(["p-1"]), S = c(["bg-neutral-700", "z-10", Y()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), I = c(["shadow-md", "shadow-neutral-950/25"]), $ = c(["relative", "top-15", "h-9", "z-20", S({ updateSticky: w() })]), P = c(["flex", "text-xl", "font-bold", "justify-center"]), M = c(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-color", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), nt = c(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), U = c(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), tt = c(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), Q = c(["transition", "will-change-transform", "top-24", S({ updateSticky: w() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), X = c(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible"] }, tableState: { [u.OPEN]: ["opacity-100"], [u.HIDING]: ["opacity-0"], [u.DISPLAYING]: ["opacity-100", "delay-50"], [u.FOLDING]: ["opacity-0", "hidden"], [u.UNFOLDING]: ["opacity-0"], [u.CLOSE]: ["opacity-0", "hidden"] } } }), ft = c([Y()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var H = Pn(), Z = H.firstChild, F = Z.firstChild, b = F.nextSibling, L = b.nextSibling, yt = L.firstChild, wt = yt.firstChild, Ot = wt.firstChild, ot = Ot.nextSibling, it = ot.firstChild, bt = it.firstChild, st = ot.nextSibling, q = yt.nextSibling, mt = q.firstChild, It = L.nextSibling;
    H.addEventListener("transitionend", B);
    var Ft = O;
    typeof Ft == "function" ? rt(Ft, H) : O = H;
    var ct = C;
    typeof ct == "function" ? rt(ct, Z) : C = Z, ot.$$click = p, _(bt, () => y() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), _(mt, () => {
      var _a;
      return (_a = e()) == null ? void 0 : _a[0].day;
    });
    var dt = N;
    return typeof dt == "function" ? rt(dt, It) : N = It, _(It, et(At, { get each() {
      return i();
    }, children: (k) => (() => {
      var W = Mn();
      return _(W, et(At, { get each() {
        return k.body;
      }, children: (lt) => (() => {
        var at = Gn();
        return _(at, () => lt.day), J(() => r(at, ft({ color: lt.color }))), at;
      })() })), W;
    })() })), J((k) => {
      var W = x({ isToFold: y() }), lt = E(), at = T(), g = I(), d = $(), R = P(), m = M({ isPending: v() }), G = nt({ isToFold: y() }), A = U({ isToFold: y() }), V = tt({ isToFold: y() }), j = Q({ isToFold: y() }), K = X({ isObservable: l(), tableState: s() });
      return W !== k.e && r(H, k.e = W), lt !== k.t && r(Z, k.t = lt), at !== k.a && r(F, k.a = at), g !== k.o && r(yt, k.o = g), d !== k.i && r(wt, k.i = d), R !== k.n && r(Ot, k.n = R), m !== k.s && r(ot, k.s = m), G !== k.h && Vt(it, "class", k.h = G), A !== k.r && r(st, k.r = A), V !== k.d && r(q, k.d = V), j !== k.l && r(mt, k.l = j), K !== k.u && r(It, k.u = K), k;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0 }), H;
  })();
};
Pt(["click"]);
var Rn = ut('<div><table><caption>\u4ED6\u306E\u66A6</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u4ED6\u306E\u66A6</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody><tr><th scope=row></th><td>');
const zn = (t) => {
  const e = pt(() => {
    var _a;
    return (_a = t.otherData) == null ? void 0 : _a.title.head;
  }), n = pt(() => {
    var _a;
    return (_a = t.otherData) == null ? void 0 : _a.title.body;
  }), o = () => {
    var _a;
    return (_a = t.otherData) == null ? void 0 : _a.data;
  }, i = () => t.foldedNotify, l = t.sendFoldedNotify, [a, s] = z(false), [h, y] = z(u.CLOSE), [f, v] = z(false), w = () => h() !== u.OPEN && h() !== u.CLOSE, [D, O] = z(false);
  let C, N, B;
  const p = (F) => {
    switch (F.stopPropagation(), F.target) {
      case C:
        if (F.propertyName !== "height") return;
        y((b) => b === u.UNFOLDING ? u.DISPLAYING : u.CLOSE), l();
        break;
      case B:
        if (F.propertyName !== "opacity") return;
        y((b) => b === u.HIDING ? u.FOLDING : u.OPEN);
        break;
    }
  }, x = () => {
    w() || (v((F) => !F), y((F) => F === u.OPEN ? u.HIDING : u.UNFOLDING));
  };
  Lt(() => {
    if (!N) return;
    const F = new IntersectionObserver((b) => {
      s(b[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    F.observe(N), Rt(() => F.disconnect());
  }), Lt(() => {
    w() || i() !== 0 && (O(true), requestAnimationFrame(() => {
      O(false);
    }));
  });
  const E = c(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-25"], false: ["h-9", "delay-200"] } } }), T = c(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), Y = c(["sr-only"]), S = c(["p-1"]), I = c(["bg-neutral-700", "z-10", S()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), $ = c(["shadow-md", "shadow-neutral-950/25"]), P = c(["relative", "top-15", "h-9", "z-20", I({ updateSticky: D() })]), M = c(["flex", "text-xl", "font-bold", "justify-center"]), nt = c(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-colors", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), U = c(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), tt = c(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), Q = c(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), X = c(["transition", "will-change-transform", "top-24", I({ updateSticky: D() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), ft = c(["w-1/3"]), H = c(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible"] }, tableState: { [u.OPEN]: ["opacity-100"], [u.HIDING]: ["opacity-0"], [u.DISPLAYING]: ["opacity-100", "delay-50"], [u.FOLDING]: ["opacity-0", "hidden"], [u.UNFOLDING]: ["opacity-0"], [u.CLOSE]: ["opacity-0", "hidden"] } } }), Z = c(["transition-colors", "hocus:bg-white/10", "hocus:text-white"]);
  return (() => {
    var F = Rn(), b = F.firstChild, L = b.firstChild, yt = L.nextSibling, wt = yt.firstChild, Ot = yt.nextSibling, ot = Ot.firstChild, it = ot.firstChild, bt = it.firstChild, st = bt.nextSibling, q = st.firstChild, mt = q.firstChild, It = st.nextSibling, Ft = ot.nextSibling, ct = Ft.firstChild, dt = ct.nextSibling, k = Ot.nextSibling, W = k.firstChild, lt = W.firstChild, at = lt.nextSibling;
    F.addEventListener("transitionend", p);
    var g = C;
    typeof g == "function" ? rt(g, F) : C = F;
    var d = N;
    typeof d == "function" ? rt(d, b) : N = b, st.$$click = x, _(mt, () => f() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), _(ct, e), _(dt, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var R = B;
    return typeof R == "function" ? rt(R, k) : B = k, _(lt, () => {
      var _a;
      return (_a = o()) == null ? void 0 : _a[0].head;
    }), _(at, () => {
      var _a, _b;
      return (_b = (_a = o()) == null ? void 0 : _a[0].body) == null ? void 0 : _b[0].day;
    }), J((m) => {
      var G = E({ isToFold: f() }), A = T(), V = Y(), j = ft(), K = $(), xt = P(), Nt = M(), Ct = nt({ isPending: w() }), Dt = U({ isToFold: f() }), Tt = tt({ isToFold: f() }), kt = Q({ isToFold: f() }), Et = X({ isToFold: f() }), me = X({ isToFold: f() }), Se = H({ isObservable: a(), tableState: h() }), pe = Z(), xe = S(), Ne = S();
      return G !== m.e && r(F, m.e = G), A !== m.t && r(b, m.t = A), V !== m.a && r(L, m.a = V), j !== m.o && r(wt, m.o = j), K !== m.i && r(ot, m.i = K), xt !== m.n && r(it, m.n = xt), Nt !== m.s && r(bt, m.s = Nt), Ct !== m.h && r(st, m.h = Ct), Dt !== m.r && Vt(q, "class", m.r = Dt), Tt !== m.d && r(It, m.d = Tt), kt !== m.l && r(Ft, m.l = kt), Et !== m.u && r(ct, m.u = Et), me !== m.c && r(dt, m.c = me), Se !== m.w && r(k, m.w = Se), pe !== m.m && r(W, m.m = pe), xe !== m.f && r(lt, m.f = xe), Ne !== m.y && r(at, m.y = Ne), m;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0, m: void 0, f: void 0, y: void 0 }), F;
  })();
};
Pt(["click"]);
var Yn = ut('<div><table><caption>\u8D77\u627F\u8EE2\u7D50</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>\u8D77\u627F\u8EE2\u7D50</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), Un = ut("<tr><th scope=row></th><td>");
const Vn = (t) => {
  const e = pt(() => {
    var _a;
    return (_a = t.storyData) == null ? void 0 : _a.title.head;
  }), n = pt(() => {
    var _a;
    return (_a = t.storyData) == null ? void 0 : _a.title.body;
  }), o = () => {
    var _a;
    return (_a = t.storyData) == null ? void 0 : _a.data;
  }, i = () => t.foldedNotify, l = t.sendFoldedNotify, [a, s] = z(false), [h, y] = z(u.CLOSE), [f, v] = z(false), w = () => h() !== u.OPEN && h() !== u.CLOSE, [D, O] = z(false);
  let C, N, B;
  const p = (b) => {
    switch (b.stopPropagation(), b.target) {
      case C:
        if (b.propertyName !== "height") return;
        y((L) => L === u.UNFOLDING ? u.DISPLAYING : u.CLOSE), l();
        break;
      case B:
        if (b.propertyName !== "opacity") return;
        y((L) => L === u.HIDING ? u.FOLDING : u.OPEN);
        break;
    }
  }, x = () => {
    w() || (v((b) => !b), y((b) => b === u.OPEN ? u.HIDING : u.UNFOLDING));
  };
  Lt(() => {
    if (!N) return;
    const b = new IntersectionObserver((L) => {
      s(L[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    b.observe(N), Rt(() => b.disconnect());
  }), Lt(() => {
    w() || i() !== 0 && (O(true), requestAnimationFrame(() => {
      O(false);
    }));
  });
  const E = c(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-49"], false: ["h-9", "delay-200"] } } }), T = c(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), Y = c(["sr-only"]), S = c(["p-1"]), I = c(["bg-neutral-700", "z-10", S()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), $ = c(["shadow-md", "shadow-neutral-950/25"]), P = c(["relative", "top-15", "h-9", "z-20", I({ updateSticky: D() })]), M = c(["flex", "text-xl", "font-bold", "justify-center"]), nt = c(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-colors", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), U = c(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), tt = c(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), Q = c(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), X = c(["transition", "will-change-transform", "top-24", I({ updateSticky: D() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), ft = c(["w-1/3"]), H = c(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible"] }, tableState: { [u.OPEN]: ["opacity-100"], [u.HIDING]: ["opacity-0"], [u.DISPLAYING]: ["opacity-100", "delay-50"], [u.FOLDING]: ["opacity-0", "hidden"], [u.UNFOLDING]: ["opacity-0"], [u.CLOSE]: ["opacity-0", "hidden"] } } }), Z = c(["transition-colors", "hocus:bg-white/10", "hocus:text-white"]), F = c([S()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var b = Yn(), L = b.firstChild, yt = L.firstChild, wt = yt.nextSibling, Ot = wt.firstChild, ot = wt.nextSibling, it = ot.firstChild, bt = it.firstChild, st = bt.firstChild, q = st.nextSibling, mt = q.firstChild, It = mt.firstChild, Ft = q.nextSibling, ct = it.nextSibling, dt = ct.firstChild, k = dt.nextSibling, W = ot.nextSibling;
    b.addEventListener("transitionend", p);
    var lt = C;
    typeof lt == "function" ? rt(lt, b) : C = b;
    var at = N;
    typeof at == "function" ? rt(at, L) : N = L, q.$$click = x, _(It, () => f() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), _(dt, e), _(k, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var g = B;
    return typeof g == "function" ? rt(g, W) : B = W, _(W, et(At, { get each() {
      return o();
    }, children: (d) => (() => {
      var R = Un(), m = R.firstChild, G = m.nextSibling;
      return _(m, () => d.head), _(G, () => {
        var _a;
        return (_a = d.body) == null ? void 0 : _a[0].day;
      }), J((A) => {
        var _a;
        var V = Z(), j = S(), K = F({ color: (_a = d.body) == null ? void 0 : _a[0].color });
        return V !== A.e && r(R, A.e = V), j !== A.t && r(m, A.t = j), K !== A.a && r(G, A.a = K), A;
      }, { e: void 0, t: void 0, a: void 0 }), R;
    })() })), J((d) => {
      var R = E({ isToFold: f() }), m = T(), G = Y(), A = ft(), V = $(), j = P(), K = M(), xt = nt({ isPending: w() }), Nt = U({ isToFold: f() }), Ct = tt({ isToFold: f() }), Dt = Q({ isToFold: f() }), Tt = X({ isToFold: f() }), kt = X({ isToFold: f() }), Et = H({ isObservable: a(), tableState: h() });
      return R !== d.e && r(b, d.e = R), m !== d.t && r(L, d.t = m), G !== d.a && r(yt, d.a = G), A !== d.o && r(Ot, d.o = A), V !== d.i && r(it, d.i = V), j !== d.n && r(bt, d.n = j), K !== d.s && r(st, d.s = K), xt !== d.h && r(q, d.h = xt), Nt !== d.r && Vt(mt, "class", d.r = Nt), Ct !== d.d && r(Ft, d.d = Ct), Dt !== d.l && r(ct, d.l = Dt), Tt !== d.u && r(dt, d.u = Tt), kt !== d.c && r(k, d.c = kt), Et !== d.w && r(W, d.w = Et), d;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), b;
  })();
};
Pt(["click"]);
var jn = ut('<div><table><caption>\u500B\u4EBAKIN\u5E74\u8868</caption><colgroup><col><col><col><col></colgroup><thead><tr><th colspan=4><span aria-hidden=true>\u500B\u4EBAKIN\u5E74\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th></tr></thead><tbody>'), Wn = ut("<th scope=col>"), Kn = ut("<tr><th scope=row>"), qn = ut("<td>");
const Jn = (t) => {
  const e = pt(() => {
    var _a;
    return (_a = t.timelineData) == null ? void 0 : _a.title.head;
  }), n = pt(() => {
    var _a;
    return (_a = t.timelineData) == null ? void 0 : _a.title.body;
  }), o = () => {
    var _a;
    return (_a = t.timelineData) == null ? void 0 : _a.data;
  }, i = () => t.foldedNotify, l = t.sendFoldedNotify, [a, s] = z(false), [h, y] = z(u.CLOSE), [f, v] = z(false), w = () => h() !== u.OPEN && h() !== u.CLOSE, [D, O] = z(false);
  let C, N, B;
  const p = (b) => {
    switch (b.stopPropagation(), b.target) {
      case C:
        if (b.propertyName !== "height") return;
        y((L) => L === u.UNFOLDING ? u.DISPLAYING : u.CLOSE), l();
        break;
      case B:
        if (b.propertyName !== "opacity") return;
        y((L) => L === u.HIDING ? u.FOLDING : u.OPEN);
        break;
    }
  }, x = () => {
    w() || (v((b) => !b), y((b) => b === u.OPEN ? u.HIDING : u.UNFOLDING));
  };
  Lt(() => {
    if (!N) return;
    const b = new IntersectionObserver((L) => {
      s(L[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    b.observe(N), Rt(() => b.disconnect());
  }), Lt(() => {
    w() || i() !== 0 && (O(true), requestAnimationFrame(() => {
      O(false);
    }));
  });
  const E = c(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-1494.5"], false: ["h-9", "delay-200"] } } }), T = c(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), Y = c(["sr-only"]), S = c(["p-1"]), I = c(["bg-neutral-700", "z-10", S()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), $ = c(["shadow-md", "shadow-neutral-950/25"]), P = c(["relative", "top-15", "h-9", "z-20", I({ updateSticky: D() })]), M = c(["flex", "text-xl", "font-bold", "justify-center"]), nt = c(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-colors", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), U = c(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), tt = c(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), Q = c(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), X = c(["transition", "will-change-transform", "top-24", I({ updateSticky: D() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), ft = c(["w-1/5"]), H = c(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible", "hidden"] }, tableState: { [u.OPEN]: ["opacity-100"], [u.HIDING]: ["opacity-0"], [u.DISPLAYING]: ["opacity-100", "delay-50"], [u.FOLDING]: ["opacity-0", "hidden"], [u.UNFOLDING]: ["opacity-0"], [u.CLOSE]: ["opacity-0", "hidden"] } } }), Z = c(["transition-colors", "hocus:bg-white/10", "hocus:text-white"], { variants: { emphasis: { true: ["bg-white/5", "border-y-2", "border-neutral-200", "font-bold"], false: [] } } }), F = c([S()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var b = jn(), L = b.firstChild, yt = L.firstChild, wt = yt.nextSibling, Ot = wt.firstChild, ot = wt.nextSibling, it = ot.firstChild, bt = it.firstChild, st = bt.firstChild, q = st.nextSibling, mt = q.firstChild, It = mt.firstChild, Ft = q.nextSibling, ct = it.nextSibling, dt = ct.firstChild, k = ot.nextSibling;
    b.addEventListener("transitionend", p);
    var W = C;
    typeof W == "function" ? rt(W, b) : C = b;
    var lt = N;
    typeof lt == "function" ? rt(lt, L) : N = L, q.$$click = x, _(It, () => f() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), _(dt, e), _(ct, et(At, { get each() {
      return n();
    }, children: (g) => (() => {
      var d = Wn();
      return _(d, () => g.day), J(() => r(d, X({ isToFold: f() }))), d;
    })() }), null);
    var at = B;
    return typeof at == "function" ? rt(at, k) : B = k, _(k, et(At, { get each() {
      return o();
    }, children: (g) => (() => {
      var d = Kn(), R = d.firstChild;
      return _(R, () => g.head), _(d, et(At, { get each() {
        return g.body;
      }, children: (m) => (() => {
        var G = qn();
        return _(G, () => m.day), J(() => r(G, F({ color: m.color }))), G;
      })() }), null), J((m) => {
        var G = Z({ emphasis: g.emphasis }), A = S();
        return G !== m.e && r(d, m.e = G), A !== m.t && r(R, m.t = A), m;
      }, { e: void 0, t: void 0 }), d;
    })() })), J((g) => {
      var d = E({ isToFold: f() }), R = T(), m = Y(), G = ft(), A = $(), V = P(), j = M(), K = nt({ isPending: w() }), xt = U({ isToFold: f() }), Nt = tt({ isToFold: f() }), Ct = Q(), Dt = X({ isToFold: f() }), Tt = H({ isObservable: a(), tableState: h() });
      return d !== g.e && r(b, g.e = d), R !== g.t && r(L, g.t = R), m !== g.a && r(yt, g.a = m), G !== g.o && r(Ot, g.o = G), A !== g.i && r(it, g.i = A), V !== g.n && r(bt, g.n = V), j !== g.s && r(st, g.s = j), K !== g.h && r(q, g.h = K), xt !== g.r && Vt(mt, "class", g.r = xt), Nt !== g.d && r(Ft, g.d = Nt), Ct !== g.l && r(ct, g.l = Ct), Dt !== g.u && r(dt, g.u = Dt), Tt !== g.c && r(k, g.c = Tt), g;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0 }), b;
  })();
};
Pt(["click"]);
var Xn = ut('<div><table><caption>KIN\u5468\u671F\u8868</caption><colgroup><col><col></colgroup><thead><tr><th colspan=2><span aria-hidden=true>KIN\u5468\u671F\u8868</span><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title></title><path fill-rule=evenodd d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path></svg></button><hr></th></tr><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>'), Zn = ut("<tr><th scope=row></th><td>");
const Qn = (t) => {
  const e = pt(() => {
    var _a;
    return (_a = t.periodicTableData) == null ? void 0 : _a.title.head;
  }), n = pt(() => {
    var _a;
    return (_a = t.periodicTableData) == null ? void 0 : _a.title.body;
  }), o = () => {
    var _a;
    return (_a = t.periodicTableData) == null ? void 0 : _a.data;
  }, i = () => t.foldedNotify, l = t.sendFoldedNotify, [a, s] = z(false), [h, y] = z(u.CLOSE), [f, v] = z(false), w = () => h() !== u.OPEN && h() !== u.CLOSE, [D, O] = z(false);
  let C, N, B;
  const p = (F) => {
    switch (F.stopPropagation(), F.target) {
      case C:
        if (F.propertyName !== "height") return;
        y((b) => b === u.UNFOLDING ? u.DISPLAYING : u.CLOSE), l();
        break;
      case B:
        if (F.propertyName !== "opacity") return;
        y((b) => b === u.HIDING ? u.FOLDING : u.OPEN);
        break;
    }
  }, x = () => {
    w() || (v((F) => !F), y((F) => F === u.OPEN ? u.HIDING : u.UNFOLDING));
  };
  Lt(() => {
    if (!N) return;
    const F = new IntersectionObserver((b) => {
      s(b[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    F.observe(N), Rt(() => F.disconnect());
  }), Lt(() => {
    w() || i() !== 0 && (O(true), requestAnimationFrame(() => {
      O(false);
    }));
  });
  const E = c(["transition-[height]", "will-change-[height]"], { variants: { isToFold: { true: ["h-265.5"], false: ["h-9", "delay-200"] } } }), T = c(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), Y = c(["sr-only"]), S = c(["p-1"]), I = c(["bg-neutral-700", "z-10", S()], { variants: { updateSticky: { true: [], false: ["sticky"] } } }), $ = c(["shadow-md", "shadow-neutral-950/25"]), P = c(["relative", "top-15", "h-9", "z-20", I({ updateSticky: D() })]), M = c(["flex", "text-xl", "font-bold", "justify-center"]), nt = c(["absolute", "top-0", "right-0", "p-1", "text-neutral-400", "transition-colors", "size-9"], { variants: { isPending: { true: [""], false: ["hocus:bg-white/5", "hocus:text-current"] } } }), U = c(["transition-transform", "duration-300", "will-change-transform"], { variants: { isToFold: { true: ["-scale-y-100"], false: ["scale-y-100"] } } }), tt = c(["absolute", "transition-opacity", "bottom-0", "w-full", "border-neutral-600", "-mx-1"], { variants: { isToFold: { true: ["opacity-100"], false: ["opacity-0", "delay-200"] } } }), Q = c(["transition-shadow", "shadow-neutral-950/25"], { variants: { isToFold: { true: ["shadow-md"], false: ["shadow-none", "delay-200"] } } }), X = c(["transition", "will-change-transform", "top-24", I({ updateSticky: D() })], { variants: { isToFold: { true: ["opacity-100", "translate-y-0"], false: ["opacity-0", "-translate-y-full", "delay-200"] } } }), ft = c(["w-1/3"]), H = c(["transition-opacity"], { variants: { isObservable: { true: ["visible"], false: ["invisible", "hidden"] }, tableState: { [u.OPEN]: ["opacity-100"], [u.HIDING]: ["opacity-0"], [u.DISPLAYING]: ["opacity-100", "delay-50"], [u.FOLDING]: ["opacity-0", "hidden"], [u.UNFOLDING]: ["opacity-0"], [u.CLOSE]: ["opacity-0", "hidden"] } } }), Z = c(["transition-colors", "hocus:bg-white/10", "hocus:text-white"], { variants: { emphasis: { true: ["bg-white/8", "border-y-2", "border-neutral-200", "font-bold"], false: [], undefined: ["even:bg-white/3"] } } });
  return (() => {
    var F = Xn(), b = F.firstChild, L = b.firstChild, yt = L.nextSibling, wt = yt.firstChild, Ot = yt.nextSibling, ot = Ot.firstChild, it = ot.firstChild, bt = it.firstChild, st = bt.nextSibling, q = st.firstChild, mt = q.firstChild, It = st.nextSibling, Ft = ot.nextSibling, ct = Ft.firstChild, dt = ct.nextSibling, k = Ot.nextSibling;
    F.addEventListener("transitionend", p);
    var W = C;
    typeof W == "function" ? rt(W, F) : C = F;
    var lt = N;
    typeof lt == "function" ? rt(lt, b) : N = b, st.$$click = x, _(mt, () => f() ? "\u6298\u308A\u305F\u305F\u3080" : "\u5C55\u958B\u3059\u308B"), _(ct, e), _(dt, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    });
    var at = B;
    return typeof at == "function" ? rt(at, k) : B = k, _(k, et(At, { get each() {
      return o();
    }, children: (g) => (() => {
      var d = Zn(), R = d.firstChild, m = R.nextSibling;
      return _(R, () => g.head), _(m, () => {
        var _a;
        return (_a = g.body) == null ? void 0 : _a[0].day;
      }), J((G) => {
        var A = Z({ emphasis: g.emphasis }), V = S(), j = S();
        return A !== G.e && r(d, G.e = A), V !== G.t && r(R, G.t = V), j !== G.a && r(m, G.a = j), G;
      }, { e: void 0, t: void 0, a: void 0 }), d;
    })() })), J((g) => {
      var d = E({ isToFold: f() }), R = T(), m = Y(), G = ft(), A = $(), V = P(), j = M(), K = nt({ isPending: w() }), xt = U({ isToFold: f() }), Nt = tt({ isToFold: f() }), Ct = Q({ isToFold: f() }), Dt = X({ isToFold: f() }), Tt = X({ isToFold: f() }), kt = H({ isObservable: a(), tableState: h() });
      return d !== g.e && r(F, g.e = d), R !== g.t && r(b, g.t = R), m !== g.a && r(L, g.a = m), G !== g.o && r(wt, g.o = G), A !== g.i && r(ot, g.i = A), V !== g.n && r(it, g.n = V), j !== g.s && r(bt, g.s = j), K !== g.h && r(st, g.h = K), xt !== g.r && Vt(q, "class", g.r = xt), Nt !== g.d && r(It, g.d = Nt), Ct !== g.l && r(Ft, g.l = Ct), Dt !== g.u && r(ct, g.u = Dt), Tt !== g.c && r(dt, g.c = Tt), kt !== g.w && r(k, g.w = kt), g;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0 }), F;
  })();
};
Pt(["click"]);
var to = ut("<div><div tabindex=0><article><section></section><section></section><section></section><section></section><section></section><section></section><section></section><section>");
const eo = (t) => {
  const [e, n] = Cn(), [o, i] = z(0), [l] = Je(e, async (w) => {
    try {
      const D = vn(w);
      return Dn(D, w);
    } catch (D) {
      console.error(D), await we();
    }
  }), a = () => {
    i((w) => w + 1);
  }, s = c(["transition-opacity", "relative", "after:absolute", "after:content-['']", "after:bottom-0", "after:left-0", "after:w-full", "after:h-8", "after:bg-gradient-to-t", "after:from-neutral-900", "after:via-neutral-900/70", "after:via-50%", "after:to-transparent", "after:to-[2rem]", "after:pointer-events-none"], { variants: { index: { 0: [], 1: ["hidden", "md:block"], 2: ["hidden", "lg:block"], 3: ["hidden", "xl:block"] }, isInitDone: { true: ["visible", "opacity-100"], false: ["invisible", "opacity-0"] } } }), h = c(["pb-8", "size-full", "rounded", "overflow-y-auto", "scrollbar-none"]), y = c(["bg-neutral-800", "rounded", "divide-y", "divide-neutral-600"]), f = c(["p-2"]), v = c(["bg-neutral-800", "sticky", "top-0", "h-15", "z-20", "shadow-md", "shadow-neutral-950/25", f()]);
  return (() => {
    var w = to(), D = w.firstChild, O = D.firstChild, C = O.firstChild, N = C.nextSibling, B = N.nextSibling, p = B.nextSibling, x = p.nextSibling, E = x.nextSibling, T = E.nextSibling, Y = T.nextSibling;
    return _(C, et(Fn, { birthdate: e, setBirthdate: n })), _(N, et(kn, { get tzolkinData() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.tzolkin;
    }, get foldedNotify() {
      return o();
    }, sendFoldedNotify: a })), _(B, et(Bn, { get compareData() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.compare;
    }, get foldedNotify() {
      return o();
    }, sendFoldedNotify: a })), _(p, et(Hn, { get treeOfLifeData() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.treeOfLife;
    }, get foldedNotify() {
      return o();
    }, sendFoldedNotify: a })), _(x, et(zn, { get otherData() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.other;
    }, get foldedNotify() {
      return o();
    }, sendFoldedNotify: a })), _(E, et(Vn, { get storyData() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.story;
    }, get foldedNotify() {
      return o();
    }, sendFoldedNotify: a })), _(T, et(Jn, { get timelineData() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.timeline;
    }, get foldedNotify() {
      return o();
    }, sendFoldedNotify: a })), _(Y, et(Qn, { get periodicTableData() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.periodicTable;
    }, get foldedNotify() {
      return o();
    }, sendFoldedNotify: a })), J((S) => {
      var I = s({ index: t.index }), $ = h(), P = y(), M = v(), nt = f(), U = f(), tt = f(), Q = f(), X = f(), ft = f(), H = f();
      return I !== S.e && r(w, S.e = I), $ !== S.t && r(D, S.t = $), P !== S.a && r(O, S.a = P), M !== S.o && r(C, S.o = M), nt !== S.i && r(N, S.i = nt), U !== S.n && r(B, S.n = U), tt !== S.s && r(p, S.s = tt), Q !== S.h && r(x, S.h = Q), X !== S.r && r(E, S.r = X), ft !== S.d && r(T, S.d = ft), H !== S.l && r(Y, S.l = H), S;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0 }), w;
  })();
};
var no = ut('<div><a href="https://github.com/ChapterGreen/mayalculator-mini.github.io?tab=readme-ov-file#readme"target=_blank rel=noreferrer><svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=currentColor viewBox="0 0 16 16"><title>\u4F7F\u3044\u65B9\u8AAC\u660E\u3092\u958B\u304F</title><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"></path></svg><span>\u4F7F\u3044\u65B9\u8AAC\u660E\u3092\u958B\u304F');
const oo = () => {
  const t = c(["transition-colors", "w-full", "h-10", "rounded", "hocus:bg-white/5"]), e = c(["flex", "size-full", "gap-2", "p-2", "items-center"]);
  return (() => {
    var n = no(), o = n.firstChild;
    return J((i) => {
      var l = t(), a = e();
      return l !== i.e && r(n, i.e = l), a !== i.t && r(o, i.t = a), i;
    }, { e: void 0, t: void 0 }), n;
  })();
};
var io = ut('<div><div><svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=currentColor viewBox="0 0 16 16"><title>\u30C6\u30FC\u30D6\u30EB\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u308B</title><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"></path></svg><span>\u30C6\u30FC\u30D6\u30EB\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u308B</span></div><div><div><input type=radio id=translated name=changeResultViewButtons checked><label for=translated>placeholder</label></div><div><input type=radio id=orgJp name=changeResultViewButtons><label for=orgJp>placeholder</label></div><div><input type=radio id=icon name=changeResultViewButtons><label for=icon>placeholder');
const lo = () => {
  const t = c(["transition-colors", "w-full", "h-36", "p-2", "pt-0", "rounded", "hocus:bg-white/5"]), e = c(["flex", "w-full", "h-10", "gap-2", "items-center"]), n = c(["size-full", "pl-5"]), o = c(["flex", "items-center", "gap-2", "w-full", "h-8", "p-2", "rounded", "hocus:bg-white/5"]);
  return (() => {
    var i = io(), l = i.firstChild, a = l.nextSibling, s = a.firstChild, h = s.nextSibling, y = h.nextSibling;
    return J((f) => {
      var v = t(), w = e(), D = n(), O = o(), C = o(), N = o();
      return v !== f.e && r(i, f.e = v), w !== f.t && r(l, f.t = w), D !== f.a && r(a, f.a = D), O !== f.o && r(s, f.o = O), C !== f.i && r(h, f.i = C), N !== f.n && r(y, f.n = N), f;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), i;
  })();
};
var ao = ut('<div><div></div><div><div><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title>\u8A2D\u5B9A\u3092\u9589\u3058\u308B</title><path fill-rule=evenodd d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"></path></svg></button><span>\u8A2D\u5B9A</span></div><ul><li></li><li>');
const ro = (t) => {
  const e = () => t.isMenuOpen, [n, o] = z(false), i = () => {
    t.setIsMenuOpen(false);
  };
  Lt(() => {
    if (e()) o(true);
    else {
      const w = setTimeout(() => {
        o(false);
      }, 300);
      return () => clearTimeout(w);
    }
  });
  const l = c([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), a = c(["transition-opacity", "duration-300", "fixed", "inset-0", "bg-black/50", "z-40"], { variants: { isMenuOpen: { true: ["opacity-100"], false: ["opacity-0"] } } }), s = c(["transition-transform", "duration-300", "fixed", "top-0", "left-0", "p-1", "space-y-1", "w-xs", "h-full", "bg-neutral-800", "shadow-xl", "shadow-neutral-950", "z-50"], { variants: { isMenuOpen: { true: ["translate-x-0"], false: ["-translate-x-full"] } } }), h = c(["relative", "w-full", "h-9", "pb-1", "border-b", "border-neutral-600"]), y = c(["absolute", "size-7", "top-0.5", "opacity-50", "transition-opacity", "hocus:opacity-100", "cursor-pointer"]), f = c(["flex", "text-2xl", "justify-center"]), v = c(["w-full"]);
  return (() => {
    var w = ao(), D = w.firstChild, O = D.nextSibling, C = O.firstChild, N = C.firstChild, B = N.nextSibling, p = C.nextSibling, x = p.firstChild, E = x.nextSibling;
    return D.$$keydown = i, D.$$click = i, N.$$click = i, _(x, et(lo, {})), _(E, et(oo, {})), J((T) => {
      var Y = l({ visible: n() }), S = a({ isMenuOpen: e() }), I = s({ isMenuOpen: e() }), $ = h(), P = y(), M = f(), nt = v();
      return Y !== T.e && r(w, T.e = Y), S !== T.t && r(D, T.t = S), I !== T.a && r(O, T.a = I), $ !== T.o && r(C, T.o = $), P !== T.i && r(N, T.i = P), M !== T.n && r(B, T.n = M), nt !== T.s && r(p, T.s = nt), T;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0 }), w;
  })();
};
Pt(["click", "keydown"]);
var so = ut('<div><button type=button><svg xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 16 16"><title>\u8A2D\u5B9A\u3092\u958B\u304F</title><path fill-rule=evenodd d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path></svg></button><div>');
const co = () => {
  const [t, e] = z(false), [n, o] = z(false), i = () => {
    o(true);
  };
  Xe(async () => {
    await we(), e(true);
  });
  const l = c(["size-full", "px-8", "pt-8"]), a = c(["transition", "size-full", "flex", "gap-4"], { variants: { isInitDone: { true: ["scale-100", "opacity-100"], false: ["scale-98", "opacity-0"] } } }), s = c(["absolute", "size-7", "top-1", "left-1", "opacity-50", "transition-opacity", "hocus:opacity-100", "cursor-pointer"]);
  return (() => {
    var h = so(), y = h.firstChild, f = y.nextSibling;
    return _(h, et(ro, { get isMenuOpen() {
      return n();
    }, setIsMenuOpen: o }), y), y.$$click = i, _(f, et(an, { get when() {
      return t();
    }, get children() {
      return et(At, { get each() {
        return Array(4).fill(0);
      }, children: (v, w) => et(eo, { get index() {
        return w();
      } }) });
    } })), J((v) => {
      var w = l(), D = n(), O = s(), C = n(), N = a({ isInitDone: t() });
      return w !== v.e && r(h, v.e = w), D !== v.t && (y.inert = v.t = D), O !== v.a && r(y, v.a = O), C !== v.o && (f.inert = v.o = C), N !== v.i && r(f, v.i = N), v;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), h;
  })();
};
Pt(["click"]);
var uo = ut("<main>");
const fo = () => {
  const t = c(["fixed", "size-full", "bg-neutral-900", "text-neutral-200"]);
  return (() => {
    var e = uo();
    return _(e, et(co, {})), J(() => r(e, t())), e;
  })();
}, ho = () => {
  try {
    const t = document.getElementById("root");
    if (!t) throw new Error("Root element not found");
    sn(() => et(fo, {}), t);
  } catch (t) {
    console.error(t);
  }
};
ho();
