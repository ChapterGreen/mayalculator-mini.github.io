(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s) if (o.type === "childList") for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(s) {
    if (s.ep) return;
    s.ep = true;
    const o = n(s);
    fetch(s.href, o);
  }
})();
const st = false, ot = (e, t) => e === t, it = Symbol("solid-track"), we = { equals: ot };
let He = Xe;
const j = 1, pe = 2, qe = { owned: null, cleanups: null, context: null, owner: null }, $e = {};
var k = null;
let Te = null, at = null, C = null, F = null, W = null, xe = 0;
function de(e, t) {
  const n = C, r = k, s = e.length === 0, o = t === void 0 ? r : t, a = s ? qe : { owned: null, cleanups: null, context: o ? o.context : null, owner: o }, i = s ? e : () => e(() => J(() => le(a)));
  k = a, C = null;
  try {
    return Q(i, true);
  } finally {
    C = n, k = r;
  }
}
function K(e, t) {
  t = t ? Object.assign({}, we, t) : we;
  const n = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 }, r = (s) => (typeof s == "function" && (s = s(n.value)), Ze(n, s));
  return [Ge.bind(n), r];
}
function lt(e, t, n) {
  const r = Ae(e, t, true, j);
  ne(r);
}
function Y(e, t, n) {
  const r = Ae(e, t, false, j);
  ne(r);
}
function ct(e, t, n) {
  He = bt;
  const r = Ae(e, t, false, j);
  r.user = true, W ? W.push(r) : ne(r);
}
function te(e, t, n) {
  n = n ? Object.assign({}, we, n) : we;
  const r = Ae(e, t, true, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, ne(r), Ge.bind(r);
}
function ut(e) {
  return e && typeof e == "object" && "then" in e;
}
function ft(e, t, n) {
  let r, s, o;
  typeof t == "function" ? (r = e, s = t, o = {}) : (r = true, s = e, o = t || {});
  let a = null, i = $e, c = false, l = "initialValue" in o, y = typeof r == "function" && te(r);
  const u = /* @__PURE__ */ new Set(), [p, _] = (o.storage || K)(o.initialValue), [T, g] = K(void 0), [v, E] = K(void 0, { equals: false }), [d, h] = K(l ? "ready" : "unresolved");
  function f(D, w, S, $) {
    return a === D && (a = null, $ !== void 0 && (l = true), (D === i || w === i) && o.onHydrated && queueMicrotask(() => o.onHydrated($, { value: w })), i = $e, b(w, S)), w;
  }
  function b(D, w) {
    Q(() => {
      w === void 0 && _(() => D), h(w !== void 0 ? "errored" : l ? "ready" : "unresolved"), g(w);
      for (const S of u.keys()) S.decrement();
      u.clear();
    }, false);
  }
  function A() {
    const D = dt, w = p(), S = T();
    if (S !== void 0 && !a) throw S;
    return C && C.user, w;
  }
  function m(D = true) {
    if (D !== false && c) return;
    c = false;
    const w = y ? y() : r;
    if (w == null || w === false) {
      f(a, J(p));
      return;
    }
    const S = i !== $e ? i : J(() => s(w, { value: p(), refetching: D }));
    return ut(S) ? (a = S, "value" in S ? (S.status === "success" ? f(a, S.value, void 0, w) : f(a, void 0, Ne(S.value), w), S) : (c = true, queueMicrotask(() => c = false), Q(() => {
      h(l ? "refreshing" : "pending"), E();
    }, false), S.then(($) => f(S, $, void 0, w), ($) => f(S, void 0, Ne($), w)))) : (f(a, S, void 0, w), S);
  }
  return Object.defineProperties(A, { state: { get: () => d() }, error: { get: () => T() }, loading: { get() {
    const D = d();
    return D === "pending" || D === "refreshing";
  } }, latest: { get() {
    if (!l) return A();
    const D = T();
    if (D && !a) throw D;
    return p();
  } } }), y ? lt(() => m(false)) : m(false), [A, { refetch: m, mutate: _ }];
}
function J(e) {
  if (C === null) return e();
  const t = C;
  C = null;
  try {
    return e();
  } finally {
    C = t;
  }
}
function ze(e) {
  return k === null || (k.cleanups === null ? k.cleanups = [e] : k.cleanups.push(e)), e;
}
const [Jt, Qt] = K(false);
let dt;
function Ge() {
  if (this.sources && this.state) if (this.state === j) ne(this);
  else {
    const e = F;
    F = null, Q(() => _e(this), false), F = e;
  }
  if (C) {
    const e = this.observers ? this.observers.length : 0;
    C.sources ? (C.sources.push(this), C.sourceSlots.push(e)) : (C.sources = [this], C.sourceSlots = [e]), this.observers ? (this.observers.push(C), this.observerSlots.push(C.sources.length - 1)) : (this.observers = [C], this.observerSlots = [C.sources.length - 1]);
  }
  return this.value;
}
function Ze(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && Q(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      const o = e.observers[s], a = Te && Te.running;
      a && Te.disposed.has(o), (a ? !o.tState : !o.state) && (o.pure ? F.push(o) : W.push(o), o.observers && Je(o)), a || (o.state = j);
    }
    if (F.length > 1e6) throw F = [], new Error();
  }, false)), t;
}
function ne(e) {
  if (!e.fn) return;
  le(e);
  const t = xe;
  ht(e, e.value, t);
}
function ht(e, t, n) {
  let r;
  const s = k, o = C;
  C = k = e;
  try {
    r = e.fn(t);
  } catch (a) {
    return e.pure && (e.state = j, e.owned && e.owned.forEach(le), e.owned = null), e.updatedAt = n + 1, Qe(a);
  } finally {
    C = o, k = s;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? Ze(e, r) : e.value = r, e.updatedAt = n);
}
function Ae(e, t, n, r = j, s) {
  const o = { fn: e, state: r, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: t, owner: k, context: k ? k.context : null, pure: n };
  return k === null || k !== qe && (k.owned ? k.owned.push(o) : k.owned = [o]), o;
}
function ve(e) {
  if (e.state === 0) return;
  if (e.state === pe) return _e(e);
  if (e.suspense && J(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < xe); ) e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--) if (e = t[n], e.state === j) ne(e);
  else if (e.state === pe) {
    const r = F;
    F = null, Q(() => _e(e, t[0]), false), F = r;
  }
}
function Q(e, t) {
  if (F) return e();
  let n = false;
  t || (F = []), W ? n = true : W = [], xe++;
  try {
    const r = e();
    return yt(n), r;
  } catch (r) {
    n || (W = null), F = null, Qe(r);
  }
}
function yt(e) {
  if (F && (Xe(F), F = null), e) return;
  const t = W;
  W = null, t.length && Q(() => He(t), false);
}
function Xe(e) {
  for (let t = 0; t < e.length; t++) ve(e[t]);
}
function bt(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : ve(r);
  }
  for (t = 0; t < n; t++) ve(e[t]);
}
function _e(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const r = e.sources[n];
    if (r.sources) {
      const s = r.state;
      s === j ? r !== t && (!r.updatedAt || r.updatedAt < xe) && ve(r) : s === pe && _e(r, t);
    }
  }
}
function Je(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = pe, n.pure ? F.push(n) : W.push(n), n.observers && Je(n));
  }
}
function le(e) {
  let t;
  if (e.sources) for (; e.sources.length; ) {
    const n = e.sources.pop(), r = e.sourceSlots.pop(), s = n.observers;
    if (s && s.length) {
      const o = s.pop(), a = n.observerSlots.pop();
      r < s.length && (o.sourceSlots[a] = r, s[r] = o, n.observerSlots[r] = a);
    }
  }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) le(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) le(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Ne(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", { cause: e });
}
function Qe(e, t = k) {
  throw Ne(e);
}
const gt = Symbol("fallback");
function Oe(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function mt(e, t, n = {}) {
  let r = [], s = [], o = [], a = 0, i = t.length > 1 ? [] : null;
  return ze(() => Oe(o)), () => {
    let c = e() || [], l = c.length, y, u;
    return c[it], J(() => {
      let _, T, g, v, E, d, h, f, b;
      if (l === 0) a !== 0 && (Oe(o), o = [], r = [], s = [], a = 0, i && (i = [])), n.fallback && (r = [gt], s[0] = de((A) => (o[0] = A, n.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(l), u = 0; u < l; u++) r[u] = c[u], s[u] = de(p);
        a = l;
      } else {
        for (g = new Array(l), v = new Array(l), i && (E = new Array(l)), d = 0, h = Math.min(a, l); d < h && r[d] === c[d]; d++) ;
        for (h = a - 1, f = l - 1; h >= d && f >= d && r[h] === c[f]; h--, f--) g[f] = s[h], v[f] = o[h], i && (E[f] = i[h]);
        for (_ = /* @__PURE__ */ new Map(), T = new Array(f + 1), u = f; u >= d; u--) b = c[u], y = _.get(b), T[u] = y === void 0 ? -1 : y, _.set(b, u);
        for (y = d; y <= h; y++) b = r[y], u = _.get(b), u !== void 0 && u !== -1 ? (g[u] = s[y], v[u] = o[y], i && (E[u] = i[y]), u = T[u], _.set(b, u)) : o[y]();
        for (u = d; u < l; u++) u in g ? (s[u] = g[u], o[u] = v[u], i && (i[u] = E[u], i[u](u))) : s[u] = de(p);
        s = s.slice(0, a = l), r = c.slice(0);
      }
      return s;
    });
    function p(_) {
      if (o[u] = _, i) {
        const [T, g] = K(u);
        return i[u] = g, t(c[u], T);
      }
      return t(c[u]);
    }
  };
}
function R(e, t) {
  return J(() => e(t || {}));
}
function he(e) {
  const t = "fallback" in e && { fallback: () => e.fallback };
  return te(mt(() => e.each, e.children, t || void 0));
}
function wt(e, t, n) {
  let r = n.length, s = t.length, o = r, a = 0, i = 0, c = t[s - 1].nextSibling, l = null;
  for (; a < s || i < o; ) {
    if (t[a] === n[i]) {
      a++, i++;
      continue;
    }
    for (; t[s - 1] === n[o - 1]; ) s--, o--;
    if (s === a) {
      const y = o < r ? i ? n[i - 1].nextSibling : n[o - i] : c;
      for (; i < o; ) e.insertBefore(n[i++], y);
    } else if (o === i) for (; a < s; ) (!l || !l.has(t[a])) && t[a].remove(), a++;
    else if (t[a] === n[o - 1] && n[i] === t[s - 1]) {
      const y = t[--s].nextSibling;
      e.insertBefore(n[i++], t[a++].nextSibling), e.insertBefore(n[--o], y), t[s] = n[o];
    } else {
      if (!l) {
        l = /* @__PURE__ */ new Map();
        let u = i;
        for (; u < o; ) l.set(n[u], u++);
      }
      const y = l.get(t[a]);
      if (y != null) if (i < y && y < o) {
        let u = a, p = 1, _;
        for (; ++u < s && u < o && !((_ = l.get(t[u])) == null || _ !== y + p); ) p++;
        if (p > y - i) {
          const T = t[a];
          for (; i < y; ) e.insertBefore(n[i++], T);
        } else e.replaceChild(n[i++], t[a++]);
      } else a++;
      else t[a++].remove();
    }
  }
}
const Ie = "_$DX_DELEGATE";
function pt(e, t, n, r = {}) {
  let s;
  return de((o) => {
    s = o, t === document ? e() : M(t, e(), t.firstChild ? null : void 0, n);
  }, r.owner), () => {
    s(), t.textContent = "";
  };
}
function q(e, t, n, r) {
  let s;
  const o = () => {
    const i = document.createElement("template");
    return i.innerHTML = e, i.content.firstChild;
  }, a = () => (s || (s = o())).cloneNode(true);
  return a.cloneNode = a, a;
}
function vt(e, t = window.document) {
  const n = t[Ie] || (t[Ie] = /* @__PURE__ */ new Set());
  for (let r = 0, s = e.length; r < s; r++) {
    const o = e[r];
    n.has(o) || (n.add(o), t.addEventListener(o, _t));
  }
}
function x(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function ye(e, t, n) {
  return J(() => e(t, n));
}
function M(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function") return De(e, t, r, n);
  Y((s) => De(e, t(), s, n), r);
}
function _t(e) {
  let t = e.target;
  const n = `$$${e.type}`, r = e.target, s = e.currentTarget, o = (c) => Object.defineProperty(e, "target", { configurable: true, value: c }), a = () => {
    const c = t[n];
    if (c && !t.disabled) {
      const l = t[`${n}Data`];
      if (l !== void 0 ? c.call(t, l, e) : c.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && o(t.host), true;
  }, i = () => {
    for (; a() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", { configurable: true, get() {
    return t || document;
  } }), e.composedPath) {
    const c = e.composedPath();
    o(c[0]);
    for (let l = 0; l < c.length - 2 && (t = c[l], !!a()); l++) {
      if (t._$host) {
        t = t._$host, i();
        break;
      }
      if (t.parentNode === s) break;
    }
  } else i();
  o(r);
}
function De(e, t, n, r, s) {
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const o = typeof t, a = r !== void 0;
  if (e = a && n[0] && n[0].parentNode || e, o === "string" || o === "number") {
    if (o === "number" && (t = t.toString(), t === n)) return n;
    if (a) {
      let i = n[0];
      i && i.nodeType === 3 ? i.data !== t && (i.data = t) : i = document.createTextNode(t), n = ee(e, n, r, i);
    } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || o === "boolean") n = ee(e, n, r);
  else {
    if (o === "function") return Y(() => {
      let i = t();
      for (; typeof i == "function"; ) i = i();
      n = De(e, i, n, r);
    }), () => n;
    if (Array.isArray(t)) {
      const i = [], c = n && Array.isArray(n);
      if (Ce(i, t, n, s)) return Y(() => n = De(e, i, n, r, true)), () => n;
      if (i.length === 0) {
        if (n = ee(e, n, r), a) return n;
      } else c ? n.length === 0 ? Ye(e, i, r) : wt(e, n, i) : (n && ee(e), Ye(e, i));
      n = i;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (a) return n = ee(e, n, r, t);
        ee(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function Ce(e, t, n, r) {
  let s = false;
  for (let o = 0, a = t.length; o < a; o++) {
    let i = t[o], c = n && n[e.length], l;
    if (!(i == null || i === true || i === false)) if ((l = typeof i) == "object" && i.nodeType) e.push(i);
    else if (Array.isArray(i)) s = Ce(e, i, c) || s;
    else if (l === "function") if (r) {
      for (; typeof i == "function"; ) i = i();
      s = Ce(e, Array.isArray(i) ? i : [i], Array.isArray(c) ? c : [c]) || s;
    } else e.push(i), s = true;
    else {
      const y = String(i);
      c && c.nodeType === 3 && c.data === y ? e.push(c) : e.push(document.createTextNode(y));
    }
  }
  return s;
}
function Ye(e, t, n = null) {
  for (let r = 0, s = t.length; r < s; r++) e.insertBefore(t[r], n);
}
function ee(e, t, n, r) {
  if (n === void 0) return e.textContent = "";
  const s = r || document.createTextNode("");
  if (t.length) {
    let o = false;
    for (let a = t.length - 1; a >= 0; a--) {
      const i = t[a];
      if (s !== i) {
        const c = i.parentNode === e;
        !o && !a ? c ? e.replaceChild(s, i) : e.insertBefore(s, n) : c && i.remove();
      } else o = true;
    }
  } else e.insertBefore(s, n);
  return [s];
}
let I;
const et = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && et.decode();
let oe = null;
function be() {
  return (oe === null || oe.byteLength === 0) && (oe = new Uint8Array(I.memory.buffer)), oe;
}
function Ee(e, t) {
  return e = e >>> 0, et.decode(be().subarray(e, e + t));
}
function Dt(e) {
  const t = I.__externref_table_alloc();
  return I.__wbindgen_export_2.set(t, e), t;
}
function Fe(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const r = Dt(n);
    I.__wbindgen_exn_store(r);
  }
}
let Le = 0;
const ge = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, St = typeof ge.encodeInto == "function" ? function(e, t) {
  return ge.encodeInto(e, t);
} : function(e, t) {
  const n = ge.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function xt(e, t, n) {
  if (n === void 0) {
    const i = ge.encode(e), c = t(i.length, 1) >>> 0;
    return be().subarray(c, c + i.length).set(i), Le = i.length, c;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const o = be();
  let a = 0;
  for (; a < r; a++) {
    const i = e.charCodeAt(a);
    if (i > 127) break;
    o[s + a] = i;
  }
  if (a !== r) {
    a !== 0 && (e = e.slice(a)), s = n(s, r, r = a + e.length * 3, 1) >>> 0;
    const i = be().subarray(s + a, s + r), c = St(e, i);
    a += c.written, s = n(s, r, a, 1) >>> 0;
  }
  return Le = a, s;
}
function At(e) {
  return e == null;
}
let Z = null;
function Re() {
  return (Z === null || Z.buffer.detached === true || Z.buffer.detached === void 0 && Z.buffer !== I.memory.buffer) && (Z = new DataView(I.memory.buffer)), Z;
}
function Pe(e) {
  const t = I.__wbindgen_export_2.get(e);
  return I.__externref_table_dealloc(e), t;
}
function $t(e) {
  const t = I.get_mayan_calendar(e);
  if (t[2]) throw Pe(t[1]);
  return Pe(t[0]);
}
async function Tt(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (r) {
      if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
  }
}
function Et() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_parse_def2e24ef1252aff = function() {
    return Fe(function(t, n) {
      return JSON.parse(Ee(t, n));
    }, arguments);
  }, e.wbg.__wbg_stringify_f7ed6987935b4a24 = function() {
    return Fe(function(t) {
      return JSON.stringify(t);
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = I.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0;
  }, e.wbg.__wbindgen_string_get = function(t, n) {
    const r = n, s = typeof r == "string" ? r : void 0;
    var o = At(s) ? 0 : xt(s, I.__wbindgen_malloc, I.__wbindgen_realloc), a = Le;
    Re().setInt32(t + 4 * 1, a, true), Re().setInt32(t + 4 * 0, o, true);
  }, e.wbg.__wbindgen_string_new = function(t, n) {
    return Ee(t, n);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(Ee(t, n));
  }, e;
}
function Nt(e, t) {
  return I = e.exports, Be.__wbindgen_wasm_module = t, Z = null, oe = null, I.__wbindgen_start(), I;
}
async function Be(e) {
  if (I !== void 0) return I;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("https://chaptergreen.github.io/mayalculator-mini.github.io/assets/mayalculator_core_logic_bg-DqmpGp3H.wasm", import.meta.url));
  const t = Et();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await Tt(await e, t);
  return Nt(n, r);
}
function tt(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = tt(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ct() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = tt(e)) && (r && (r += " "), r += t);
  return r;
}
const Ve = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, We = Ct, O = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return We(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: s, defaultVariants: o } = t, a = Object.keys(s).map((l) => {
    const y = n == null ? void 0 : n[l], u = o == null ? void 0 : o[l];
    if (y === null) return null;
    const p = Ve(y) || Ve(u);
    return s[l][p];
  }), i = n && Object.entries(n).reduce((l, y) => {
    let [u, p] = y;
    return p === void 0 || (l[u] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, y) => {
    let { class: u, className: p, ..._ } = y;
    return Object.entries(_).every((T) => {
      let [g, v] = T;
      return Array.isArray(v) ? v.includes({ ...o, ...i }[g]) : { ...o, ...i }[g] === v;
    }) ? [...l, u, p] : l;
  }, []);
  return We(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, ie = 9999, ae = 1, Se = new Date(0, 0, 0, 0, 0, 0, 0), Me = new Date(ie, 11, 31, 0, 0, 0, 0), ke = (() => {
  const e = new Date(Se);
  return e.setFullYear(ae, 0, 1), e;
})(), Lt = 260, Mt = { Imix: "\u8D64\u3044\u9F8D", Ik: "\u767D\u3044\u98A8", Akbal: "\u9752\u3044\u591C", Kan: "\u9EC4\u8272\u3044\u7A2E", Chicchan: "\u8D64\u3044\u86C7", Cimi: "\u767D\u3044\u4E16\u754C\u306E\u6A4B\u6E21\u3057", Manik: "\u9752\u3044\u624B", Lamat: "\u9EC4\u8272\u3044\u661F", Muluc: "\u8D64\u3044\u6708", Oc: "\u767D\u3044\u72AC", Chuen: "\u9752\u3044\u733F", Eb: "\u9EC4\u8272\u3044\u4EBA", Ben: "\u8D64\u3044\u7A7A\u6B69\u304F\u4EBA", Ix: "\u767D\u3044\u9B54\u6CD5\u4F7F\u3044", Men: "\u9752\u3044\u9DF2", Cib: "\u9EC4\u8272\u3044\u6226\u58EB", Caban: "\u8D64\u3044\u5730\u7403", Etznab: "\u767D\u3044\u93E1", Cauac: "\u9752\u3044\u5D50", Ahau: "\u9EC4\u8272\u3044\u592A\u967D" }, kt = { Red: "\u56DE\u8EE2\u306E\u8D64\u3044\u6771\u306E\u57CE", White: "\u4EA4\u5DEE\u306E\u767D\u3044\u5317\u306E\u57CE", Blue: "\u71C3\u3048\u308B\u9752\u3044\u897F\u306E\u57CE", Yellow: "\u4E0E\u3048\u308B\u9EC4\u8272\u3044\u5357\u306E\u57CE", Green: "\u9B45\u60D1\u306E\u7DD1\u306E\u4E2D\u592E\u306E\u57CE" }, me = (e, t, n) => Math.max(t, Math.min(e, n)), X = (e, t) => new Date(e, t, 0).getDate(), Bt = (e) => {
  const t = /\d/, n = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " ", "Tab", "Backspace", "Delete", "Shift"];
  return t.test(e) || n.includes(e);
}, H = (e) => ({ year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate() }), Ot = (e) => {
  const t = (() => {
    const a = new Date(Se);
    a.setFullYear(e.year, e.month - 1, e.day);
    const i = a.getTime();
    return i > Me.getTime() ? new Date(Me) : i < ke.getTime() ? new Date(ke) : a;
  })(), n = me(t.getFullYear(), ae, ie), r = t.getMonth() + 1, s = t.getDate();
  return { year: n, month: r, day: s };
}, It = () => {
  const e = /* @__PURE__ */ new Date();
  e.setFullYear(e.getFullYear() - 30), e.setHours(0, 0, 0, 0);
  const t = H(e), [n, r] = K(t), s = (l) => r(Ot(l));
  return [n, { birthdate: s, year: (l) => s({ ...n(), year: l }), month: (l) => s({ ...n(), month: l }), day: (l) => s({ ...n(), day: l }) }];
}, Yt = (e, t, n = 15) => {
  const { tzolkin_calendar: r, haab_calendar: s } = e, o = L(""), { modern: a, ancient: i } = r, { org: c, mirror: l, abs_rev: y, story: u, timeline: p } = a, _ = je(c.num), T = je(l.num), { north: g, south: v, west: E, east: d, center: h } = Object.fromEntries(Object.entries(i.tree_of_life).map(([P, V]) => {
    const U = V;
    return [P, { day: `${U.sun_crest.day}-${U.galactic_tone}`, color: U.sun_crest.color }];
  })), { modern: f, ancient: b } = s, A = `${f.month}-${f.day}`, m = { title: { head: "Tzolkin", body: [L("\u7D50\u679C")] }, data: [{ head: "KIN", body: [L(_)] }, { head: "SC", body: [B(c.sun_crest.org)] }, { head: "WS", body: [B(c.wave_spell.org)] }, { head: "\u9280\u6CB3\u306E\u97F3", body: [L(`\u97F3 ${c.galactic_tone}`)] }, { head: "5\u3064\u306E\u57CE", body: [{ day: kt[c.castle], color: c.castle }] }] }, D = { title: { head: "KIN", body: [L("\u7D50\u679C")] }, data: [{ head: "SC\u53CD\u5BFE", body: [B(c.sun_crest.reverse)] }, { head: "SC\u985E\u4F3C", body: [B(c.sun_crest.similar)] }, { head: "SC\u795E\u79D8", body: [B(c.sun_crest.mystery)] }, { head: "WS\u53CD\u5BFE", body: [B(c.wave_spell.reverse)] }, { head: "WS\u985E\u4F3C", body: [B(c.wave_spell.similar)] }, { head: "WS\u795E\u79D8", body: [B(c.wave_spell.mystery)] }, { head: "\u30AC\u30A4\u30C9", body: [B(c.guide)] }, { head: "\u9006\u30AC\u30A4\u30C9", body: [B(c.rev_guide)] }, { head: "\u93E1KIN", body: [L(T)] }, { head: "\u93E1SC", body: [B(l.sun_crest)] }, { head: "\u93E1WS", body: [B(l.wave_spell)] }] }, w = { title: { head: "", body: [L("\u751F\u547D\u6A39\u6CD5"), o, o] }, data: [{ head: "", body: [o, d, o] }, { head: "", body: [g, h, v] }, { head: "", body: [o, E, o] }] }, S = { title: { head: "\u4ED6\u306E\u66A6", body: [L("\u65E5\u4ED8")] }, data: [{ head: "Haab", body: [L(A)] }] }, $ = { title: { head: "\u8D77\u627F\u8EE2\u7D50", body: [L("SC")] }, data: [{ head: "\u8D77", body: [B(u.introduction)] }, { head: "\u627F", body: [B(u.development)] }, { head: "\u8EE2", body: [B(u.twist)] }, { head: "\u7D50", body: [B(u.conclusion)] }] }, z = { title: { head: `\u897F\u66A6
(\u5E74\u9F62)`, body: [L("SC"), L("WS"), L("\u9280\u6CB3\u306E\u97F3")] }, data: p.timeline.map((P, V, U) => {
    const re = U.length - 1, se = t.year + V, ce = `${se}
( ${V} )`, ue = [B(P.sun_crest), B(P.wave_spell), L(`\u97F3 ${P.galactic_tone + 1}`)], fe = se % re === (/* @__PURE__ */ new Date()).getFullYear() % re;
    return { head: ce, body: ue, emphasis: fe };
  }) }, N = { title: { head: "\u897F\u66A6", body: [L("\u5468\u671F")] }, data: [...Pt(t, n)] };
  return { tzolkin: m, compare: D, treeOfLife: w, other: S, story: $, timeline: z, periodicTable: N };
}, je = (e) => {
  const { num: t, is_abs_exp: n, is_black: r, is_polar: s } = e;
  return `${t}${n ? "(\u7D76\u5BFE\u62E1\u5F35KIN)" : ""}${r ? "(\u9ED2KIN)" : ""}${s ? "(\u6975\u6027KIN)" : ""}`;
}, L = (e) => ({ day: e }), B = (e) => ({ day: Mt[e.day], color: e.color }), nt = (e, t) => e.setDate(e.getDate() + t), rt = (e) => {
  const { year: t, month: n, day: r } = H(e);
  return X(t, 2) === 29 && (n === 2 && r === 29 || n === 3 && r === 1);
}, Ft = (e, t) => {
  const r = ke.getTime(), s = [];
  for (let o = 0; o < t; o++) {
    const { year: a, month: i, day: c } = H(e), l = new Date(1970, i - 1, c, 0, 0, 0, 0);
    nt(l, -260);
    const { year: y, month: u, day: p } = H(l), _ = a + y - 1970;
    if (e.setFullYear(_, u - 1, p), e.getTime() < r) break;
    if (rt(e)) {
      const g = e.getFullYear(), v = { head: `${g}_2_29
${g}_3_1`, body: [L(`-${o + 1} \u5468\u671F`)] };
      s.push(v);
    } else {
      const { year: g, month: v, day: E } = H(e), d = { head: `${g}_${v}_${E}`, body: [L(`-${o + 1} \u5468\u671F`)] };
      s.push(d);
    }
  }
  return s;
}, Rt = (e, t) => {
  const r = Me.getTime(), s = [];
  for (let o = 0; o < t; o++) {
    const { year: a, month: i, day: c } = H(e), l = new Date(1970, i - 1, c, 0, 0, 0, 0);
    nt(l, Lt);
    const { year: y, month: u, day: p } = H(l), _ = a + y - 1970;
    if (e.setFullYear(_, u - 1, p), e.getTime() > r) break;
    if (rt(e)) {
      const g = e.getFullYear(), v = { head: `${g}_2_29
${g}_3_1`, body: [L(`${o + 1} \u5468\u671F`)] };
      s.push(v);
    } else {
      const { year: g, month: v, day: E } = H(e), d = { head: `${g}_${v}_${E}`, body: [L(`${o + 1} \u5468\u671F`)] };
      s.push(d);
    }
  }
  return s;
}, Pt = (e, t) => {
  const { year: n, month: r, day: s } = e, o = new Date(Se);
  o.setFullYear(n, r - 1, s);
  const a = new Date(Se);
  a.setFullYear(n, r - 1, s);
  const i = [], c = Ft(o, t), l = Rt(a, t);
  return i.push(...c.reverse()), i.push({ head: `${n}_${r}_${s}`, body: [L("\u8A95\u751F\u65E5")], emphasis: true }), i.push(...l), i;
};
var Vt = q("<fieldset><legend>\u8A95\u751F\u65E5\u5165\u529B\u6B04</legend><label><input type=number name=year maxlength=4 required>\u5E74</label><label><input type=number name=month maxlength=2 required>\u6708</label><label><input type=number name=day maxlength=2 required>\u65E5");
const Wt = (e) => {
  const t = () => e.birthdate().year, n = () => e.birthdate().month, r = () => e.birthdate().day, s = (d) => e.setBirthdate.year(d), o = (d) => e.setBirthdate.month(d), a = (d) => e.setBirthdate.day(d);
  let i, c, l;
  const y = (d) => {
    const h = d.key, f = d.currentTarget, b = f.name;
    if (!Bt(h)) return d.preventDefault();
    const A = f.valueAsNumber;
    if (Number.isNaN(A) && h === "0") return d.preventDefault();
    const m = d.shiftKey, D = () => {
      if (h === "ArrowUp") {
        d.preventDefault();
        const $ = X(t() + 1, n());
        r() > $ && a($), s(t() + 1);
      } else if (h === "ArrowDown") {
        d.preventDefault();
        const $ = X(t() - 1, n());
        r() > $ && a($), s(t() - 1);
      } else !m && (h === "Enter" || h === " ") && (d.preventDefault(), c.focus());
    }, w = () => {
      if (h === "ArrowUp") {
        d.preventDefault();
        const $ = X(t(), n() + 1);
        r() > $ && a($), o(n() + 1);
      } else if (h === "ArrowDown") {
        d.preventDefault();
        const $ = X(t(), n() - 1);
        r() > $ && a($), o(n() - 1);
      } else (h === "Enter" || h === " ") && (d.preventDefault(), (m ? i : l).focus());
    }, S = () => {
      h === "ArrowUp" ? (d.preventDefault(), a(r() + 1)) : h === "ArrowDown" ? (d.preventDefault(), a(r() - 1)) : m && (h === "Enter" || h === " ") && (d.preventDefault(), c.focus());
    };
    switch (b) {
      case "year": {
        D();
        break;
      }
      case "month": {
        w();
        break;
      }
      case "day": {
        S();
        break;
      }
    }
  }, u = (d) => {
    const h = d.currentTarget.valueAsNumber;
    if (Number.isNaN(h) || h === 0) return d.preventDefault();
    const f = d.currentTarget.name, b = () => {
      s(me(h, ae, ie)), Math.floor(Math.abs(t()) / 1e3) !== 0 && c.focus();
    }, A = () => {
      o(me(h, 1, 12)), n() >= 2 && l.focus();
    }, m = () => {
      const D = X(t(), n());
      a(me(h, 1, D));
    };
    switch (f) {
      case "year":
        b();
        break;
      case "month":
        A();
        break;
      case "day":
        m();
        break;
    }
  }, p = (d) => {
    const h = d.currentTarget.valueAsNumber, f = d.currentTarget.name, b = () => {
      Number.isNaN(h) || h === 0 ? s((/* @__PURE__ */ new Date()).getFullYear() - 30) : h > ie ? s(ie) : h < ae && s(ae);
    }, A = () => {
      Number.isNaN(h) || h === 0 ? o((/* @__PURE__ */ new Date()).getMonth() + 1) : h > 12 ? o(12) : h < 1 && o(1);
    }, m = () => {
      const D = X(t(), n());
      Number.isNaN(h) || h === 0 ? a((/* @__PURE__ */ new Date()).getDate()) : h > D ? a(D) : h < 1 && a(1);
    };
    switch (f) {
      case "year":
        b();
        break;
      case "month":
        A();
        break;
      case "day":
        m();
        break;
    }
  }, _ = (d) => {
    d.currentTarget.select();
  }, T = O(["flex", "gap-2"]), g = O(["sr-only"]), v = O(["flex", "gap-2", "items-center"]), E = O(["form-input", "w-full", "rounded", "transition", "hocus:shadow-inner", "bg-neutral-800", "border-neutral-600", "hocus:border-neutral-700", "focus:ring-neutral-700", "hover:shadow-neutral-950/50", "focus:shadow-neutral-950"]);
  return (() => {
    var d = Vt(), h = d.firstChild, f = h.nextSibling, b = f.firstChild, A = f.nextSibling, m = A.firstChild, D = A.nextSibling, w = D.firstChild;
    b.addEventListener("focus", _), b.addEventListener("blur", p), b.$$input = u, b.$$keydown = y;
    var S = i;
    typeof S == "function" ? ye(S, b) : i = b, m.addEventListener("focus", _), m.addEventListener("blur", p), m.$$input = u, m.$$keydown = y;
    var $ = c;
    typeof $ == "function" ? ye($, m) : c = m, w.addEventListener("focus", _), w.addEventListener("blur", p), w.$$input = u, w.$$keydown = y;
    var z = l;
    return typeof z == "function" ? ye(z, w) : l = w, Y((N) => {
      var P = T(), V = g(), U = v(), re = E(), se = v(), ce = E(), ue = v(), fe = E();
      return P !== N.e && x(d, N.e = P), V !== N.t && x(h, N.t = V), U !== N.a && x(f, N.a = U), re !== N.o && x(b, N.o = re), se !== N.i && x(A, N.i = se), ce !== N.n && x(m, N.n = ce), ue !== N.s && x(D, N.s = ue), fe !== N.h && x(w, N.h = fe), N;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), Y(() => b.value = t()), Y(() => m.value = n()), Y(() => w.value = r()), d;
  })();
};
vt(["keydown", "input"]);
var jt = q("<table><thead><tr></tr></thead><tbody>"), Ue = q("<th>"), Ut = q("<tr>"), Ke = q("<td>");
const G = (e) => {
  const t = te(() => {
    var _a;
    return (_a = e.mayalculatorData) == null ? void 0 : _a.title.head;
  }), n = te(() => {
    var _a;
    return (_a = e.mayalculatorData) == null ? void 0 : _a.title.body;
  }), r = () => {
    var _a;
    return (_a = e.mayalculatorData) == null ? void 0 : _a.data;
  }, s = () => {
    var _a;
    return ((_a = n()) == null ? void 0 : _a.length) === 1 ? "single" : "multiple";
  }, [o, a] = K(false);
  let i;
  ct(() => {
    if (!i) return;
    const g = new IntersectionObserver((v) => {
      a(v[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    g.observe(i), ze(() => g.disconnect());
  });
  const c = O(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), l = O(["bg-neutral-700", "sticky", "top-14", "shadow-md", "shadow-neutral-950/25"]), y = O(["p-1"]), u = O([y()], { variants: { dataType: { single: ["w-1/3"], multiple: ["w-1/5"] } } }), p = O([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), _ = O([], { variants: { head: { true: ["hocus:bg-white/10", "hocus:text-white", "transition-colors"], false: [""] }, isZebla: { true: ["even:bg-white/[.03]"], false: [""] }, emphasis: { true: ["border-2", "border-neutral-200", "font-bold"], false: [""] } } }), T = O([y()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var g = jt(), v = g.firstChild, E = v.firstChild, d = v.nextSibling, h = i;
    return typeof h == "function" ? ye(h, g) : i = g, M(E, (() => {
      var f = te(() => !!t());
      return () => f() && (() => {
        var b = Ue();
        return M(b, t), Y(() => x(b, u({ dataType: s() }))), b;
      })();
    })(), null), M(E, R(he, { get each() {
      return n();
    }, children: (f) => (() => {
      var b = Ue();
      return M(b, () => f.day), Y(() => x(b, y())), b;
    })() }), null), M(d, R(he, { get each() {
      return r();
    }, children: (f) => (() => {
      var b = Ut();
      return M(b, (() => {
        var A = te(() => f.head !== "");
        return () => A() && (() => {
          var m = Ke();
          return M(m, () => f.head), Y(() => x(m, u())), m;
        })();
      })(), null), M(b, R(he, { get each() {
        return f.body;
      }, children: (A) => (() => {
        var m = Ke();
        return M(m, () => A.day), Y(() => x(m, T({ color: A.color }))), m;
      })() }), null), Y(() => x(b, _({ head: f.head !== "", isZebla: e.isZebla, emphasis: f.emphasis }))), b;
    })() })), Y((f) => {
      var b = c(), A = l(), m = p({ visible: o() });
      return b !== f.e && x(g, f.e = b), A !== f.t && x(v, f.t = A), m !== f.a && x(d, f.a = m), f;
    }, { e: void 0, t: void 0, a: void 0 }), g;
  })();
};
var Kt = q("<div><div><article><section></section><section></section><section></section><section></section><section></section><section></section><section></section><section>");
const Ht = (e) => {
  const [t, n] = It(), [r] = ft(t, async (l) => {
    console.log(l);
    try {
      const y = $t(l);
      return Yt(y, l);
    } catch (y) {
      console.error(y), await Be();
    }
  }), s = O(["relative", "after:absolute", "after:content-['']", "after:bottom-0", "after:left-0", "after:w-full", "after:h-8", "after:bg-gradient-to-t", "after:from-neutral-900", "after:via-neutral-900/70", "after:via-50%", "after:to-transparent", "after:to-[2rem]", "after:pointer-events-none"], { variants: { index: { 0: [""], 1: ["hidden", "md:block"], 2: ["hidden", "lg:block"], 3: ["hidden", "xl:block"] } } }), o = O(["pb-8", "size-full", "rounded", "overflow-y-auto", "scrollbar-none"]), a = O(["bg-neutral-800", "rounded", "divide-y", "divide-neutral-600"]), i = O(["p-2"]), c = O(["bg-neutral-800", "sticky", "top-0", "z-10", i()]);
  return (() => {
    var l = Kt(), y = l.firstChild, u = y.firstChild, p = u.firstChild, _ = p.nextSibling, T = _.nextSibling, g = T.nextSibling, v = g.nextSibling, E = v.nextSibling, d = E.nextSibling, h = d.nextSibling;
    return M(p, R(Wt, { birthdate: t, setBirthdate: n })), M(_, R(G, { get mayalculatorData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.tzolkin;
    } })), M(T, R(G, { get mayalculatorData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.compare;
    } })), M(g, R(G, { get mayalculatorData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.treeOfLife;
    } })), M(v, R(G, { get mayalculatorData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.other;
    } })), M(E, R(G, { get mayalculatorData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.story;
    } })), M(d, R(G, { get mayalculatorData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.timeline;
    } })), M(h, R(G, { get mayalculatorData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.periodicTable;
    }, isZebla: true })), Y((f) => {
      var b = s({ index: e.index }), A = o(), m = a(), D = c(), w = i(), S = i(), $ = i(), z = i(), N = i(), P = i(), V = i();
      return b !== f.e && x(l, f.e = b), A !== f.t && x(y, f.t = A), m !== f.a && x(u, f.a = m), D !== f.o && x(p, f.o = D), w !== f.i && x(_, f.i = w), S !== f.n && x(T, f.n = S), $ !== f.s && x(g, f.s = $), z !== f.h && x(v, f.h = z), N !== f.r && x(E, f.r = N), P !== f.d && x(d, f.d = P), V !== f.l && x(h, f.l = V), f;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0 }), l;
  })();
};
var qt = q("<div>");
const zt = () => {
  const e = O(["flex", "size-full", "px-8", "pt-8", "gap-4"]);
  return (() => {
    var t = qt();
    return M(t, R(he, { get each() {
      return Array(4).fill(0);
    }, children: (n, r) => R(Ht, { get index() {
      return r();
    } }) })), Y(() => x(t, e())), t;
  })();
};
var Gt = q("<main>");
const Zt = () => {
  const e = O(["fixed", "size-full", "bg-neutral-900", "text-neutral-200"]);
  return (() => {
    var t = Gt();
    return M(t, R(zt, {})), Y(() => x(t, e())), t;
  })();
}, Xt = async () => {
  try {
    await Be();
    const e = document.getElementById("root");
    if (!e) throw new Error("Root element not found");
    pt(() => R(Zt, {}), e);
  } catch (e) {
    console.error(e);
  }
};
Xt();
