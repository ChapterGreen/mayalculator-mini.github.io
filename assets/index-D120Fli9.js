(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: true, subtree: true });
  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(o) {
    if (o.ep) return;
    o.ep = true;
    const i = n(o);
    fetch(o.href, i);
  }
})();
const nt = false, rt = (e, t) => e === t, ot = Symbol("solid-track"), me = { equals: rt };
let Ue = Ge;
const J = 1, pe = 2, Ke = { owned: null, cleanups: null, context: null, owner: null }, Ae = {};
var V = null;
let Te = null, it = null, I = null, W = null, G = null, $e = 0;
function ye(e, t) {
  const n = I, r = V, o = e.length === 0, i = t === void 0 ? r : t, s = o ? Ke : { owned: null, cleanups: null, context: i ? i.context : null, owner: i }, l = o ? e : () => e(() => re(() => ue(s)));
  V = s, I = null;
  try {
    return oe(l, true);
  } finally {
    I = n, V = r;
  }
}
function j(e, t) {
  t = t ? Object.assign({}, me, t) : me;
  const n = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 }, r = (o) => (typeof o == "function" && (o = o(n.value)), qe(n, o));
  return [ze.bind(n), r];
}
function st(e, t, n) {
  const r = Ce(e, t, true, J);
  le(r);
}
function L(e, t, n) {
  const r = Ce(e, t, false, J);
  le(r);
}
function ie(e, t, n) {
  Ue = ft;
  const r = Ce(e, t, false, J);
  r.user = true, G ? G.push(r) : le(r);
}
function F(e, t, n) {
  n = n ? Object.assign({}, me, n) : me;
  const r = Ce(e, t, true, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, le(r), ze.bind(r);
}
function lt(e) {
  return e && typeof e == "object" && "then" in e;
}
function at(e, t, n) {
  let r, o, i;
  typeof t == "function" ? (r = e, o = t, i = {}) : (r = true, o = e, i = t || {});
  let s = null, l = Ae, f = false, c = "initialValue" in i, y = typeof r == "function" && F(r);
  const u = /* @__PURE__ */ new Set(), [$, T] = (i.storage || j)(i.initialValue), [C, v] = j(void 0), [D, N] = j(void 0, { equals: false }), [w, h] = j(c ? "ready" : "unresolved");
  function g(S, d, _, p) {
    return s === S && (s = null, p !== void 0 && (c = true), (S === l || d === l) && i.onHydrated && queueMicrotask(() => i.onHydrated(p, { value: d })), l = Ae, A(d, _)), d;
  }
  function A(S, d) {
    oe(() => {
      d === void 0 && T(() => S), h(d !== void 0 ? "errored" : c ? "ready" : "unresolved"), v(d);
      for (const _ of u.keys()) _.decrement();
      u.clear();
    }, false);
  }
  function m() {
    const S = ct, d = $(), _ = C();
    if (_ !== void 0 && !s) throw _;
    return I && I.user, d;
  }
  function a(S = true) {
    if (S !== false && f) return;
    f = false;
    const d = y ? y() : r;
    if (d == null || d === false) {
      g(s, re($));
      return;
    }
    const _ = l !== Ae ? l : re(() => o(d, { value: $(), refetching: S }));
    return lt(_) ? (s = _, "value" in _ ? (_.status === "success" ? g(s, _.value, void 0, d) : g(s, void 0, Ee(_.value), d), _) : (f = true, queueMicrotask(() => f = false), oe(() => {
      h(c ? "refreshing" : "pending"), N();
    }, false), _.then((p) => g(_, p, void 0, d), (p) => g(_, void 0, Ee(p), d)))) : (g(s, _, void 0, d), _);
  }
  return Object.defineProperties(m, { state: { get: () => w() }, error: { get: () => C() }, loading: { get() {
    const S = w();
    return S === "pending" || S === "refreshing";
  } }, latest: { get() {
    if (!c) return m();
    const S = C();
    if (S && !s) throw S;
    return $();
  } } }), y ? st(() => a(false)) : a(false), [m, { refetch: a, mutate: T }];
}
function re(e) {
  if (I === null) return e();
  const t = I;
  I = null;
  try {
    return e();
  } finally {
    I = t;
  }
}
function ee(e) {
  return V === null || (V.cleanups === null ? V.cleanups = [e] : V.cleanups.push(e)), e;
}
const [gn, wn] = j(false);
let ct;
function ze() {
  if (this.sources && this.state) if (this.state === J) le(this);
  else {
    const e = W;
    W = null, oe(() => Se(this), false), W = e;
  }
  if (I) {
    const e = this.observers ? this.observers.length : 0;
    I.sources ? (I.sources.push(this), I.sourceSlots.push(e)) : (I.sources = [this], I.sourceSlots = [e]), this.observers ? (this.observers.push(I), this.observerSlots.push(I.sources.length - 1)) : (this.observers = [I], this.observerSlots = [I.sources.length - 1]);
  }
  return this.value;
}
function qe(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && oe(() => {
    for (let o = 0; o < e.observers.length; o += 1) {
      const i = e.observers[o], s = Te && Te.running;
      s && Te.disposed.has(i), (s ? !i.tState : !i.state) && (i.pure ? W.push(i) : G.push(i), i.observers && Je(i)), s || (i.state = J);
    }
    if (W.length > 1e6) throw W = [], new Error();
  }, false)), t;
}
function le(e) {
  if (!e.fn) return;
  ue(e);
  const t = $e;
  dt(e, e.value, t);
}
function dt(e, t, n) {
  let r;
  const o = V, i = I;
  I = V = e;
  try {
    r = e.fn(t);
  } catch (s) {
    return e.pure && (e.state = J, e.owned && e.owned.forEach(ue), e.owned = null), e.updatedAt = n + 1, Xe(s);
  } finally {
    I = i, V = o;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? qe(e, r) : e.value = r, e.updatedAt = n);
}
function Ce(e, t, n, r = J, o) {
  const i = { fn: e, state: r, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: t, owner: V, context: V ? V.context : null, pure: n };
  return V === null || V !== Ke && (V.owned ? V.owned.push(i) : V.owned = [i]), i;
}
function _e(e) {
  if (e.state === 0) return;
  if (e.state === pe) return Se(e);
  if (e.suspense && re(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < $e); ) e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--) if (e = t[n], e.state === J) le(e);
  else if (e.state === pe) {
    const r = W;
    W = null, oe(() => Se(e, t[0]), false), W = r;
  }
}
function oe(e, t) {
  if (W) return e();
  let n = false;
  t || (W = []), G ? n = true : G = [], $e++;
  try {
    const r = e();
    return ut(n), r;
  } catch (r) {
    n || (G = null), W = null, Xe(r);
  }
}
function ut(e) {
  if (W && (Ge(W), W = null), e) return;
  const t = G;
  G = null, t.length && oe(() => Ue(t), false);
}
function Ge(e) {
  for (let t = 0; t < e.length; t++) _e(e[t]);
}
function ft(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : _e(r);
  }
  for (t = 0; t < n; t++) _e(e[t]);
}
function Se(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const r = e.sources[n];
    if (r.sources) {
      const o = r.state;
      o === J ? r !== t && (!r.updatedAt || r.updatedAt < $e) && _e(r) : o === pe && Se(r, t);
    }
  }
}
function Je(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = pe, n.pure ? W.push(n) : G.push(n), n.observers && Je(n));
  }
}
function ue(e) {
  let t;
  if (e.sources) for (; e.sources.length; ) {
    const n = e.sources.pop(), r = e.sourceSlots.pop(), o = n.observers;
    if (o && o.length) {
      const i = o.pop(), s = n.observerSlots.pop();
      r < o.length && (i.sourceSlots[s] = r, o[r] = i, n.observerSlots[r] = s);
    }
  }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) ue(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) ue(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Ee(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", { cause: e });
}
function Xe(e, t = V) {
  throw Ee(e);
}
const ht = Symbol("fallback");
function Oe(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function bt(e, t, n = {}) {
  let r = [], o = [], i = [], s = 0, l = t.length > 1 ? [] : null;
  return ee(() => Oe(i)), () => {
    let f = e() || [], c = f.length, y, u;
    return f[ot], re(() => {
      let T, C, v, D, N, w, h, g, A;
      if (c === 0) s !== 0 && (Oe(i), i = [], r = [], o = [], s = 0, l && (l = [])), n.fallback && (r = [ht], o[0] = ye((m) => (i[0] = m, n.fallback())), s = 1);
      else if (s === 0) {
        for (o = new Array(c), u = 0; u < c; u++) r[u] = f[u], o[u] = ye($);
        s = c;
      } else {
        for (v = new Array(c), D = new Array(c), l && (N = new Array(c)), w = 0, h = Math.min(s, c); w < h && r[w] === f[w]; w++) ;
        for (h = s - 1, g = c - 1; h >= w && g >= w && r[h] === f[g]; h--, g--) v[g] = o[h], D[g] = i[h], l && (N[g] = l[h]);
        for (T = /* @__PURE__ */ new Map(), C = new Array(g + 1), u = g; u >= w; u--) A = f[u], y = T.get(A), C[u] = y === void 0 ? -1 : y, T.set(A, u);
        for (y = w; y <= h; y++) A = r[y], u = T.get(A), u !== void 0 && u !== -1 ? (v[u] = o[y], D[u] = i[y], l && (N[u] = l[y]), u = C[u], T.set(A, u)) : i[y]();
        for (u = w; u < c; u++) u in v ? (o[u] = v[u], i[u] = D[u], l && (l[u] = N[u], l[u](u))) : o[u] = ye($);
        o = o.slice(0, s = c), r = f.slice(0);
      }
      return o;
    });
    function $(T) {
      if (i[u] = T, l) {
        const [C, v] = j(u);
        return l[u] = v, t(f[u], C);
      }
      return t(f[u]);
    }
  };
}
function O(e, t) {
  return re(() => e(t || {}));
}
function z(e) {
  const t = "fallback" in e && { fallback: () => e.fallback };
  return F(bt(() => e.each, e.children, t || void 0));
}
function yt(e, t, n) {
  let r = n.length, o = t.length, i = r, s = 0, l = 0, f = t[o - 1].nextSibling, c = null;
  for (; s < o || l < i; ) {
    if (t[s] === n[l]) {
      s++, l++;
      continue;
    }
    for (; t[o - 1] === n[i - 1]; ) o--, i--;
    if (o === s) {
      const y = i < r ? l ? n[l - 1].nextSibling : n[i - l] : f;
      for (; l < i; ) e.insertBefore(n[l++], y);
    } else if (i === l) for (; s < o; ) (!c || !c.has(t[s])) && t[s].remove(), s++;
    else if (t[s] === n[i - 1] && n[l] === t[o - 1]) {
      const y = t[--o].nextSibling;
      e.insertBefore(n[l++], t[s++].nextSibling), e.insertBefore(n[--i], y), t[o] = n[i];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let u = l;
        for (; u < i; ) c.set(n[u], u++);
      }
      const y = c.get(t[s]);
      if (y != null) if (l < y && y < i) {
        let u = s, $ = 1, T;
        for (; ++u < o && u < i && !((T = c.get(t[u])) == null || T !== y + $); ) $++;
        if ($ > y - l) {
          const C = t[s];
          for (; l < y; ) e.insertBefore(n[l++], C);
        } else e.replaceChild(n[l++], t[s++]);
      } else s++;
      else t[s++].remove();
    }
  }
}
const Ye = "_$DX_DELEGATE";
function vt(e, t, n, r = {}) {
  let o;
  return ye((i) => {
    o = i, t === document ? e() : E(t, e(), t.firstChild ? null : void 0, n);
  }, r.owner), () => {
    o(), t.textContent = "";
  };
}
function R(e, t, n, r) {
  let o;
  const i = () => {
    const l = document.createElement("template");
    return l.innerHTML = e, l.content.firstChild;
  }, s = () => (o || (o = i())).cloneNode(true);
  return s.cloneNode = s, s;
}
function gt(e, t = window.document) {
  const n = t[Ye] || (t[Ye] = /* @__PURE__ */ new Set());
  for (let r = 0, o = e.length; r < o; r++) {
    const i = e[r];
    n.has(i) || (n.add(i), t.addEventListener(i, wt));
  }
}
function b(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function q(e, t, n) {
  return re(() => e(t, n));
}
function E(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function") return xe(e, t, r, n);
  L((o) => xe(e, t(), o, n), r);
}
function wt(e) {
  let t = e.target;
  const n = `$$${e.type}`, r = e.target, o = e.currentTarget, i = (f) => Object.defineProperty(e, "target", { configurable: true, value: f }), s = () => {
    const f = t[n];
    if (f && !t.disabled) {
      const c = t[`${n}Data`];
      if (c !== void 0 ? f.call(t, c, e) : f.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && i(t.host), true;
  }, l = () => {
    for (; s() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", { configurable: true, get() {
    return t || document;
  } }), e.composedPath) {
    const f = e.composedPath();
    i(f[0]);
    for (let c = 0; c < f.length - 2 && (t = f[c], !!s()); c++) {
      if (t._$host) {
        t = t._$host, l();
        break;
      }
      if (t.parentNode === o) break;
    }
  } else l();
  i(r);
}
function xe(e, t, n, r, o) {
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const i = typeof t, s = r !== void 0;
  if (e = s && n[0] && n[0].parentNode || e, i === "string" || i === "number") {
    if (i === "number" && (t = t.toString(), t === n)) return n;
    if (s) {
      let l = n[0];
      l && l.nodeType === 3 ? l.data !== t && (l.data = t) : l = document.createTextNode(t), n = se(e, n, r, l);
    } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || i === "boolean") n = se(e, n, r);
  else {
    if (i === "function") return L(() => {
      let l = t();
      for (; typeof l == "function"; ) l = l();
      n = xe(e, l, n, r);
    }), () => n;
    if (Array.isArray(t)) {
      const l = [], f = n && Array.isArray(n);
      if (Ne(l, t, n, o)) return L(() => n = xe(e, l, n, r, true)), () => n;
      if (l.length === 0) {
        if (n = se(e, n, r), s) return n;
      } else f ? n.length === 0 ? Re(e, l, r) : yt(e, n, l) : (n && se(e), Re(e, l));
      n = l;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (s) return n = se(e, n, r, t);
        se(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function Ne(e, t, n, r) {
  let o = false;
  for (let i = 0, s = t.length; i < s; i++) {
    let l = t[i], f = n && n[e.length], c;
    if (!(l == null || l === true || l === false)) if ((c = typeof l) == "object" && l.nodeType) e.push(l);
    else if (Array.isArray(l)) o = Ne(e, l, f) || o;
    else if (c === "function") if (r) {
      for (; typeof l == "function"; ) l = l();
      o = Ne(e, Array.isArray(l) ? l : [l], Array.isArray(f) ? f : [f]) || o;
    } else e.push(l), o = true;
    else {
      const y = String(l);
      f && f.nodeType === 3 && f.data === y ? e.push(f) : e.push(document.createTextNode(y));
    }
  }
  return o;
}
function Re(e, t, n = null) {
  for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n);
}
function se(e, t, n, r) {
  if (n === void 0) return e.textContent = "";
  const o = r || document.createTextNode("");
  if (t.length) {
    let i = false;
    for (let s = t.length - 1; s >= 0; s--) {
      const l = t[s];
      if (o !== l) {
        const f = l.parentNode === e;
        !i && !s ? f ? e.replaceChild(o, l) : e.insertBefore(o, n) : f && l.remove();
      } else i = true;
    }
  } else e.insertBefore(o, n);
  return [o];
}
let P;
const Ze = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Ze.decode();
let ae = null;
function ve() {
  return (ae === null || ae.byteLength === 0) && (ae = new Uint8Array(P.memory.buffer)), ae;
}
function ke(e, t) {
  return e = e >>> 0, Ze.decode(ve().subarray(e, e + t));
}
function mt(e) {
  const t = P.__externref_table_alloc();
  return P.__wbindgen_export_2.set(t, e), t;
}
function Ve(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const r = mt(n);
    P.__wbindgen_exn_store(r);
  }
}
let Be = 0;
const ge = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, pt = typeof ge.encodeInto == "function" ? function(e, t) {
  return ge.encodeInto(e, t);
} : function(e, t) {
  const n = ge.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function _t(e, t, n) {
  if (n === void 0) {
    const l = ge.encode(e), f = t(l.length, 1) >>> 0;
    return ve().subarray(f, f + l.length).set(l), Be = l.length, f;
  }
  let r = e.length, o = t(r, 1) >>> 0;
  const i = ve();
  let s = 0;
  for (; s < r; s++) {
    const l = e.charCodeAt(s);
    if (l > 127) break;
    i[o + s] = l;
  }
  if (s !== r) {
    s !== 0 && (e = e.slice(s)), o = n(o, r, r = s + e.length * 3, 1) >>> 0;
    const l = ve().subarray(o + s, o + r), f = pt(e, l);
    s += f.written, o = n(o, r, s, 1) >>> 0;
  }
  return Be = s, o;
}
function St(e) {
  return e == null;
}
let te = null;
function He() {
  return (te === null || te.buffer.detached === true || te.buffer.detached === void 0 && te.buffer !== P.memory.buffer) && (te = new DataView(P.memory.buffer)), te;
}
function Pe(e) {
  const t = P.__wbindgen_export_2.get(e);
  return P.__externref_table_dealloc(e), t;
}
function xt(e) {
  const t = P.get_mayan_calendar(e);
  if (t[2]) throw Pe(t[1]);
  return Pe(t[0]);
}
async function Dt(e, t) {
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
function $t() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_parse_def2e24ef1252aff = function() {
    return Ve(function(t, n) {
      return JSON.parse(ke(t, n));
    }, arguments);
  }, e.wbg.__wbg_stringify_f7ed6987935b4a24 = function() {
    return Ve(function(t) {
      return JSON.stringify(t);
    }, arguments);
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = P.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0;
  }, e.wbg.__wbindgen_string_get = function(t, n) {
    const r = n, o = typeof r == "string" ? r : void 0;
    var i = St(o) ? 0 : _t(o, P.__wbindgen_malloc, P.__wbindgen_realloc), s = Be;
    He().setInt32(t + 4 * 1, s, true), He().setInt32(t + 4 * 0, i, true);
  }, e.wbg.__wbindgen_string_new = function(t, n) {
    return ke(t, n);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(ke(t, n));
  }, e;
}
function Ct(e, t) {
  return P = e.exports, Ie.__wbindgen_wasm_module = t, te = null, ae = null, P.__wbindgen_start(), P;
}
async function Ie(e) {
  if (P !== void 0) return P;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("/assets/mayalculator_core_logic_bg-BJ8AuPPp.wasm", import.meta.url));
  const t = $t();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await Dt(await e, t);
  return Ct(n, r);
}
function Qe(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Qe(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function At() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Qe(e)) && (r && (r += " "), r += t);
  return r;
}
const We = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Fe = At, x = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Fe(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const y = n == null ? void 0 : n[c], u = i == null ? void 0 : i[c];
    if (y === null) return null;
    const $ = We(y) || We(u);
    return o[c][$];
  }), l = n && Object.entries(n).reduce((c, y) => {
    let [u, $] = y;
    return $ === void 0 || (c[u] = $), c;
  }, {}), f = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, y) => {
    let { class: u, className: $, ...T } = y;
    return Object.entries(T).every((C) => {
      let [v, D] = C;
      return Array.isArray(D) ? D.includes({ ...i, ...l }[v]) : { ...i, ...l }[v] === D;
    }) ? [...c, u, $] : c;
  }, []);
  return Fe(e, s, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, ce = 9999, de = 1, De = new Date(0, 0, 0, 0, 0, 0, 0), Le = new Date(ce, 11, 31, 0, 0, 0, 0), Me = (() => {
  const e = new Date(De);
  return e.setFullYear(de, 0, 1), e;
})(), Tt = 260, kt = { Imix: "\u8D64\u3044\u9F8D", Ik: "\u767D\u3044\u98A8", Akbal: "\u9752\u3044\u591C", Kan: "\u9EC4\u8272\u3044\u7A2E", Chicchan: "\u8D64\u3044\u86C7", Cimi: "\u767D\u3044\u4E16\u754C\u306E\u6A4B\u6E21\u3057", Manik: "\u9752\u3044\u624B", Lamat: "\u9EC4\u8272\u3044\u661F", Muluc: "\u8D64\u3044\u6708", Oc: "\u767D\u3044\u72AC", Chuen: "\u9752\u3044\u733F", Eb: "\u9EC4\u8272\u3044\u4EBA", Ben: "\u8D64\u3044\u7A7A\u6B69\u304F\u4EBA", Ix: "\u767D\u3044\u9B54\u6CD5\u4F7F\u3044", Men: "\u9752\u3044\u9DF2", Cib: "\u9EC4\u8272\u3044\u6226\u58EB", Caban: "\u8D64\u3044\u5730\u7403", Etznab: "\u767D\u3044\u93E1", Cauac: "\u9752\u3044\u5D50", Ahau: "\u9EC4\u8272\u3044\u592A\u967D" }, Et = { Red: "\u56DE\u8EE2\u306E\u8D64\u3044\u6771\u306E\u57CE", White: "\u4EA4\u5DEE\u306E\u767D\u3044\u5317\u306E\u57CE", Blue: "\u71C3\u3048\u308B\u9752\u3044\u897F\u306E\u57CE", Yellow: "\u4E0E\u3048\u308B\u9EC4\u8272\u3044\u5357\u306E\u57CE", Green: "\u9B45\u60D1\u306E\u7DD1\u306E\u4E2D\u592E\u306E\u57CE" }, we = (e, t, n) => Math.max(t, Math.min(e, n)), ne = (e, t) => new Date(e, t, 0).getDate(), Nt = (e) => {
  const t = /\d/, n = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " ", "Tab", "Backspace", "Delete", "Shift"];
  return t.test(e) || n.includes(e);
}, Q = (e) => ({ year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate() }), Bt = (e) => {
  const t = (() => {
    const s = new Date(De);
    s.setFullYear(e.year, e.month - 1, e.day);
    const l = s.getTime();
    return l > Le.getTime() ? new Date(Le) : l < Me.getTime() ? new Date(Me) : s;
  })(), n = we(t.getFullYear(), de, ce), r = t.getMonth() + 1, o = t.getDate();
  return { year: n, month: r, day: o };
}, Lt = () => {
  const e = /* @__PURE__ */ new Date();
  e.setFullYear(e.getFullYear() - 30), e.setHours(0, 0, 0, 0);
  const t = Q(e), [n, r] = j(t), o = (c) => r(Bt(c));
  return [n, { birthdate: o, year: (c) => o({ ...n(), year: c }), month: (c) => o({ ...n(), month: c }), day: (c) => o({ ...n(), day: c }) }];
}, Mt = (e, t, n = 15) => {
  const { tzolkin_calendar: r, haab_calendar: o } = e, i = Y(""), { modern: s, ancient: l } = r, { org: f, mirror: c, abs_rev: y, story: u, timeline: $ } = s, T = je(f.num), C = je(c.num), { north: v, south: D, west: N, east: w, center: h } = Object.fromEntries(Object.entries(l.tree_of_life).map(([M, U]) => {
    const K = U;
    return [M, { day: `${K.sun_crest.day}-${K.galactic_tone}`, color: K.sun_crest.color }];
  })), { modern: g, ancient: A } = o, m = `${g.month}-${g.day}`, a = { title: { head: "Tzolkin", body: [Y("\u7D50\u679C")] }, data: [{ head: "KIN", body: [Y(T)] }, { head: "SC", body: [H(f.sun_crest.org)] }, { head: "WS", body: [H(f.wave_spell.org)] }, { head: "\u9280\u6CB3\u306E\u97F3", body: [Y(`\u97F3 ${f.galactic_tone}`)] }, { head: "5\u3064\u306E\u57CE", body: [{ day: Et[f.castle], color: f.castle }] }] }, S = { title: { head: "KIN", body: [Y("\u7D50\u679C")] }, data: [{ head: "SC\u53CD\u5BFE", body: [H(f.sun_crest.reverse)] }, { head: "SC\u985E\u4F3C", body: [H(f.sun_crest.similar)] }, { head: "SC\u795E\u79D8", body: [H(f.sun_crest.mystery)] }, { head: "WS\u53CD\u5BFE", body: [H(f.wave_spell.reverse)] }, { head: "WS\u985E\u4F3C", body: [H(f.wave_spell.similar)] }, { head: "WS\u795E\u79D8", body: [H(f.wave_spell.mystery)] }, { head: "\u30AC\u30A4\u30C9", body: [H(f.guide)] }, { head: "\u9006\u30AC\u30A4\u30C9", body: [H(f.rev_guide)] }, { head: "\u93E1KIN", body: [Y(C)] }, { head: "\u93E1SC", body: [H(c.sun_crest)] }, { head: "\u93E1WS", body: [H(c.wave_spell)] }] }, d = { title: { head: "", body: [Y("\u751F\u547D\u6A39\u6CD5"), i, i] }, data: [{ head: "", body: [i, w, i] }, { head: "", body: [v, h, D] }, { head: "", body: [i, N, i] }] }, _ = { title: { head: "\u4ED6\u306E\u66A6", body: [Y("\u65E5\u4ED8")] }, data: [{ head: "Haab", body: [Y(m)] }] }, p = { title: { head: "\u8D77\u627F\u8EE2\u7D50", body: [Y("SC")] }, data: [{ head: "\u8D77", body: [H(u.introduction)] }, { head: "\u627F", body: [H(u.development)] }, { head: "\u8EE2", body: [H(u.twist)] }, { head: "\u7D50", body: [H(u.conclusion)] }] }, B = { title: { head: `\u897F\u66A6
(\u5E74\u9F62)`, body: [Y("SC"), Y("WS"), Y("\u9280\u6CB3\u306E\u97F3")] }, data: $.timeline.map((M, U, K) => {
    const X = K.length - 1, Z = t.year + U, fe = `${Z}
( ${U} )`, he = [H(M.sun_crest), H(M.wave_spell), Y(`\u97F3 ${M.galactic_tone + 1}`)], be = Z % X === (/* @__PURE__ */ new Date()).getFullYear() % X;
    return { head: fe, body: he, emphasis: be };
  }) }, k = { title: { head: "\u897F\u66A6", body: [Y("\u5468\u671F")] }, data: [...Yt(t, n)] };
  return { tzolkin: a, compare: S, treeOfLife: d, other: _, story: p, timeline: B, periodicTable: k };
}, je = (e) => {
  const { num: t, is_abs_exp: n, is_black: r, is_polar: o } = e;
  return `${t}${n ? "(\u7D76\u5BFE\u62E1\u5F35KIN)" : ""}${r ? "(\u9ED2KIN)" : ""}${o ? "(\u6975\u6027KIN)" : ""}`;
}, Y = (e) => ({ day: e }), H = (e) => ({ day: kt[e.day], color: e.color }), et = (e, t) => e.setDate(e.getDate() + t), tt = (e) => {
  const { year: t, month: n, day: r } = Q(e);
  return ne(t, 2) === 29 && (n === 2 && r === 29 || n === 3 && r === 1);
}, It = (e, t) => {
  const r = Me.getTime(), o = [];
  for (let i = 0; i < t; i++) {
    const { year: s, month: l, day: f } = Q(e), c = new Date(1970, l - 1, f, 0, 0, 0, 0);
    et(c, -260);
    const { year: y, month: u, day: $ } = Q(c), T = s + y - 1970;
    if (e.setFullYear(T, u - 1, $), e.getTime() < r) break;
    if (tt(e)) {
      const v = e.getFullYear(), D = { head: `${v}_2_29
${v}_3_1`, body: [Y(`-${i + 1} \u5468\u671F`)] };
      o.push(D);
    } else {
      const { year: v, month: D, day: N } = Q(e), w = { head: `${v}_${D}_${N}`, body: [Y(`-${i + 1} \u5468\u671F`)] };
      o.push(w);
    }
  }
  return o;
}, Ot = (e, t) => {
  const r = Le.getTime(), o = [];
  for (let i = 0; i < t; i++) {
    const { year: s, month: l, day: f } = Q(e), c = new Date(1970, l - 1, f, 0, 0, 0, 0);
    et(c, Tt);
    const { year: y, month: u, day: $ } = Q(c), T = s + y - 1970;
    if (e.setFullYear(T, u - 1, $), e.getTime() > r) break;
    if (tt(e)) {
      const v = e.getFullYear(), D = { head: `${v}_2_29
${v}_3_1`, body: [Y(`${i + 1} \u5468\u671F`)] };
      o.push(D);
    } else {
      const { year: v, month: D, day: N } = Q(e), w = { head: `${v}_${D}_${N}`, body: [Y(`${i + 1} \u5468\u671F`)] };
      o.push(w);
    }
  }
  return o;
}, Yt = (e, t) => {
  const { year: n, month: r, day: o } = e, i = new Date(De);
  i.setFullYear(n, r - 1, o);
  const s = new Date(De);
  s.setFullYear(n, r - 1, o);
  const l = [], f = It(i, t), c = Ot(s, t);
  return l.push(...f.reverse()), l.push({ head: `${n}_${r}_${o}`, body: [Y("\u8A95\u751F\u65E5")], emphasis: true }), l.push(...c), l;
};
var Rt = R("<fieldset><legend>\u8A95\u751F\u65E5\u5165\u529B\u6B04</legend><label><input type=number name=year maxlength=4 required>\u5E74</label><label><input type=number name=month maxlength=2 required>\u6708</label><label><input type=number name=day maxlength=2 required>\u65E5");
const Vt = (e) => {
  const t = () => e.birthdate().year, n = () => e.birthdate().month, r = () => e.birthdate().day, o = (w) => e.setBirthdate.year(w), i = (w) => e.setBirthdate.month(w), s = (w) => e.setBirthdate.day(w);
  let l, f, c;
  const y = (w) => {
    const h = w.key, g = w.currentTarget, A = g.name;
    if (!Nt(h)) return w.preventDefault();
    const m = g.valueAsNumber;
    if (Number.isNaN(m) && h === "0") return w.preventDefault();
    const a = w.shiftKey, S = () => {
      if (h === "ArrowUp") {
        w.preventDefault();
        const p = ne(t() + 1, n());
        r() > p && s(p), o(t() + 1);
      } else if (h === "ArrowDown") {
        w.preventDefault();
        const p = ne(t() - 1, n());
        r() > p && s(p), o(t() - 1);
      } else !a && (h === "Enter" || h === " ") && (w.preventDefault(), f.focus());
    }, d = () => {
      if (h === "ArrowUp") {
        w.preventDefault();
        const p = ne(t(), n() + 1);
        r() > p && s(p), i(n() + 1);
      } else if (h === "ArrowDown") {
        w.preventDefault();
        const p = ne(t(), n() - 1);
        r() > p && s(p), i(n() - 1);
      } else (h === "Enter" || h === " ") && (w.preventDefault(), (a ? l : c).focus());
    }, _ = () => {
      h === "ArrowUp" ? (w.preventDefault(), s(r() + 1)) : h === "ArrowDown" ? (w.preventDefault(), s(r() - 1)) : a && (h === "Enter" || h === " ") && (w.preventDefault(), f.focus());
    };
    switch (A) {
      case "year": {
        S();
        break;
      }
      case "month": {
        d();
        break;
      }
      case "day": {
        _();
        break;
      }
    }
  }, u = (w) => {
    const h = w.currentTarget.valueAsNumber;
    if (Number.isNaN(h) || h === 0) return w.preventDefault();
    const g = w.currentTarget.name, A = () => {
      o(we(h, de, ce)), Math.floor(Math.abs(t()) / 1e3) !== 0 && f.focus();
    }, m = () => {
      i(we(h, 1, 12)), n() >= 2 && c.focus();
    }, a = () => {
      const S = ne(t(), n());
      s(we(h, 1, S));
    };
    switch (g) {
      case "year":
        A();
        break;
      case "month":
        m();
        break;
      case "day":
        a();
        break;
    }
  }, $ = (w) => {
    const h = w.currentTarget.valueAsNumber, g = w.currentTarget.name, A = () => {
      Number.isNaN(h) || h === 0 ? o((/* @__PURE__ */ new Date()).getFullYear() - 30) : h > ce ? o(ce) : h < de && o(de);
    }, m = () => {
      Number.isNaN(h) || h === 0 ? i((/* @__PURE__ */ new Date()).getMonth() + 1) : h > 12 ? i(12) : h < 1 && i(1);
    }, a = () => {
      const S = ne(t(), n());
      Number.isNaN(h) || h === 0 ? s((/* @__PURE__ */ new Date()).getDate()) : h > S ? s(S) : h < 1 && s(1);
    };
    switch (g) {
      case "year":
        A();
        break;
      case "month":
        m();
        break;
      case "day":
        a();
        break;
    }
  }, T = (w) => {
    w.currentTarget.select();
  }, C = x(["flex", "gap-2"]), v = x(["sr-only"]), D = x(["flex", "gap-2", "items-center"]), N = x(["form-input", "w-full", "rounded", "transition", "hocus:shadow-inner", "bg-neutral-800", "border-neutral-600", "hocus:border-neutral-700", "focus:ring-neutral-700", "hover:shadow-neutral-950/50", "focus:shadow-neutral-950"]);
  return (() => {
    var w = Rt(), h = w.firstChild, g = h.nextSibling, A = g.firstChild, m = g.nextSibling, a = m.firstChild, S = m.nextSibling, d = S.firstChild;
    A.addEventListener("focus", T), A.addEventListener("blur", $), A.$$input = u, A.$$keydown = y;
    var _ = l;
    typeof _ == "function" ? q(_, A) : l = A, a.addEventListener("focus", T), a.addEventListener("blur", $), a.$$input = u, a.$$keydown = y;
    var p = f;
    typeof p == "function" ? q(p, a) : f = a, d.addEventListener("focus", T), d.addEventListener("blur", $), d.$$input = u, d.$$keydown = y;
    var B = c;
    return typeof B == "function" ? q(B, d) : c = d, L((k) => {
      var M = C(), U = v(), K = D(), X = N(), Z = D(), fe = N(), he = D(), be = N();
      return M !== k.e && b(w, k.e = M), U !== k.t && b(h, k.t = U), K !== k.a && b(g, k.a = K), X !== k.o && b(A, k.o = X), Z !== k.i && b(m, k.i = Z), fe !== k.n && b(a, k.n = fe), he !== k.s && b(S, k.s = he), be !== k.h && b(d, k.h = be), k;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), L(() => A.value = t()), L(() => a.value = n()), L(() => d.value = r()), w;
  })();
};
gt(["keydown", "input"]);
var Ht = R("<table><caption>\u30C4\u30A9\u30EB\u30AD\u30F3</caption><thead><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>"), Pt = R("<tr><th scope=row></th><td>");
const Wt = (e) => {
  const t = F(() => {
    var _a;
    return (_a = e.tzolkinData) == null ? void 0 : _a.title.head;
  }), n = F(() => {
    var _a;
    return (_a = e.tzolkinData) == null ? void 0 : _a.title.body;
  }), r = () => {
    var _a;
    return (_a = e.tzolkinData) == null ? void 0 : _a.data;
  }, [o, i] = j(false);
  let s;
  ie(() => {
    if (!s) return;
    const v = new IntersectionObserver((D) => {
      i(D[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    v.observe(s), ee(() => v.disconnect());
  });
  const l = x(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), f = x(["p-1", "bg-neutral-700", "sticky", "top-14", "text-xl", "font-bold", "shadow-md", "shadow-neutral-950/25", "border-b", "border-neutral-600"]), c = x(["bg-neutral-700", "sticky", "top-[93px]", "shadow-md", "shadow-neutral-950/25"]), y = x(["p-1"]), u = x(["w-1/3", y()]), $ = x([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), T = x(["hocus:bg-white/10", "hocus:text-white", "transition-colors"]), C = x([y()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var v = Ht(), D = v.firstChild, N = D.nextSibling, w = N.firstChild, h = w.firstChild, g = h.nextSibling, A = N.nextSibling, m = s;
    return typeof m == "function" ? q(m, v) : s = v, E(h, t), E(g, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    }), E(A, O(z, { get each() {
      return r();
    }, children: (a) => (() => {
      var S = Pt(), d = S.firstChild, _ = d.nextSibling;
      return E(d, () => a.head), E(_, () => {
        var _a;
        return (_a = a.body) == null ? void 0 : _a[0].day;
      }), L((p) => {
        var _a;
        var B = T(), k = u(), M = C({ color: (_a = a.body) == null ? void 0 : _a[0].color });
        return B !== p.e && b(S, p.e = B), k !== p.t && b(d, p.t = k), M !== p.a && b(_, p.a = M), p;
      }, { e: void 0, t: void 0, a: void 0 }), S;
    })() })), L((a) => {
      var S = l(), d = f(), _ = c(), p = u(), B = y(), k = $({ visible: o() });
      return S !== a.e && b(v, a.e = S), d !== a.t && b(D, a.t = d), _ !== a.a && b(N, a.a = _), p !== a.o && b(h, a.o = p), B !== a.i && b(g, a.i = B), k !== a.n && b(A, a.n = k), a;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), v;
  })();
};
var Ft = R("<table><caption>\u76F8\u6027\u6BD4\u8F03\u8868</caption><thead><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>"), jt = R("<tr><th scope=row></th><td>");
const Ut = (e) => {
  const t = F(() => {
    var _a;
    return (_a = e.compareData) == null ? void 0 : _a.title.head;
  }), n = F(() => {
    var _a;
    return (_a = e.compareData) == null ? void 0 : _a.title.body;
  }), r = () => {
    var _a;
    return (_a = e.compareData) == null ? void 0 : _a.data;
  }, [o, i] = j(false);
  let s;
  ie(() => {
    if (!s) return;
    const v = new IntersectionObserver((D) => {
      i(D[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    v.observe(s), ee(() => v.disconnect());
  });
  const l = x(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), f = x(["p-1", "bg-neutral-700", "sticky", "top-14", "text-xl", "font-bold", "shadow-md", "shadow-neutral-950/25", "border-b", "border-neutral-600"]), c = x(["bg-neutral-700", "sticky", "top-[93px]", "shadow-md", "shadow-neutral-950/25"]), y = x(["p-1"]), u = x(["w-1/3", y()]), $ = x([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), T = x(["hocus:bg-white/10", "hocus:text-white", "transition-colors"]), C = x([y()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var v = Ft(), D = v.firstChild, N = D.nextSibling, w = N.firstChild, h = w.firstChild, g = h.nextSibling, A = N.nextSibling, m = s;
    return typeof m == "function" ? q(m, v) : s = v, E(h, t), E(g, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    }), E(A, O(z, { get each() {
      return r();
    }, children: (a) => (() => {
      var S = jt(), d = S.firstChild, _ = d.nextSibling;
      return E(d, () => a.head), E(_, () => {
        var _a;
        return (_a = a.body) == null ? void 0 : _a[0].day;
      }), L((p) => {
        var _a;
        var B = T(), k = u(), M = C({ color: (_a = a.body) == null ? void 0 : _a[0].color });
        return B !== p.e && b(S, p.e = B), k !== p.t && b(d, p.t = k), M !== p.a && b(_, p.a = M), p;
      }, { e: void 0, t: void 0, a: void 0 }), S;
    })() })), L((a) => {
      var S = l(), d = f(), _ = c(), p = u(), B = y(), k = $({ visible: o() });
      return S !== a.e && b(v, a.e = S), d !== a.t && b(D, a.t = d), _ !== a.a && b(N, a.a = _), p !== a.o && b(h, a.o = p), B !== a.i && b(g, a.i = B), k !== a.n && b(A, a.n = k), a;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), v;
  })();
};
var Kt = R("<table><caption>\u751F\u547D\u6A39\u6CD5</caption><thead><tr><th scope=col colspan=3></th></tr></thead><tbody>"), zt = R("<tr>"), qt = R("<td>");
const Gt = (e) => {
  const t = F(() => {
    var _a;
    return (_a = e.treeOfLifeData) == null ? void 0 : _a.title.body;
  }), n = () => {
    var _a;
    return (_a = e.treeOfLifeData) == null ? void 0 : _a.data;
  }, [r, o] = j(false);
  let i;
  ie(() => {
    if (!i) return;
    const $ = new IntersectionObserver((T) => {
      o(T[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    $.observe(i), ee(() => $.disconnect());
  });
  const s = x(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), l = x(["p-1", "bg-neutral-700", "sticky", "top-14", "text-xl", "font-bold", "shadow-md", "shadow-neutral-950/25", "border-b", "border-neutral-600"]), f = x(["bg-neutral-700", "sticky", "top-[93px]", "shadow-md", "shadow-neutral-950/25"]), c = x(["p-1"]), y = x([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), u = x([c()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var $ = Kt(), T = $.firstChild, C = T.nextSibling, v = C.firstChild, D = v.firstChild, N = C.nextSibling, w = i;
    return typeof w == "function" ? q(w, $) : i = $, E(D, () => {
      var _a;
      return (_a = t()) == null ? void 0 : _a[0].day;
    }), E(N, O(z, { get each() {
      return n();
    }, children: (h) => (() => {
      var g = zt();
      return E(g, O(z, { get each() {
        return h.body;
      }, children: (A) => (() => {
        var m = qt();
        return E(m, () => A.day), L(() => b(m, u({ color: A.color }))), m;
      })() })), g;
    })() })), L((h) => {
      var g = s(), A = l(), m = f(), a = c(), S = y({ visible: r() });
      return g !== h.e && b($, h.e = g), A !== h.t && b(T, h.t = A), m !== h.a && b(C, h.a = m), a !== h.o && b(D, h.o = a), S !== h.i && b(N, h.i = S), h;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), $;
  })();
};
var Jt = R("<table><caption>\u4ED6\u306E\u66A6</caption><thead><tr><th scope=col></th><th scope=col></th></tr></thead><tbody><tr><th scope=row></th><td>");
const Xt = (e) => {
  const t = F(() => {
    var _a;
    return (_a = e.otherData) == null ? void 0 : _a.title.head;
  }), n = F(() => {
    var _a;
    return (_a = e.otherData) == null ? void 0 : _a.title.body;
  }), r = () => {
    var _a;
    return (_a = e.otherData) == null ? void 0 : _a.data;
  }, [o, i] = j(false);
  let s;
  ie(() => {
    if (!s) return;
    const C = new IntersectionObserver((v) => {
      i(v[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    C.observe(s), ee(() => C.disconnect());
  });
  const l = x(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), f = x(["p-1", "bg-neutral-700", "sticky", "top-14", "text-xl", "font-bold", "shadow-md", "shadow-neutral-950/25", "border-b", "border-neutral-600"]), c = x(["bg-neutral-700", "sticky", "top-[93px]", "shadow-md", "shadow-neutral-950/25"]), y = x(["p-1"]), u = x(["w-1/3", y()]), $ = x([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), T = x(["hocus:bg-white/10", "hocus:text-white", "transition-colors"]);
  return (() => {
    var C = Jt(), v = C.firstChild, D = v.nextSibling, N = D.firstChild, w = N.firstChild, h = w.nextSibling, g = D.nextSibling, A = g.firstChild, m = A.firstChild, a = m.nextSibling, S = s;
    return typeof S == "function" ? q(S, C) : s = C, E(w, t), E(h, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    }), E(m, () => {
      var _a;
      return (_a = r()) == null ? void 0 : _a[0].head;
    }), E(a, () => {
      var _a, _b;
      return (_b = (_a = r()) == null ? void 0 : _a[0].body) == null ? void 0 : _b[0].day;
    }), L((d) => {
      var _ = l(), p = f(), B = c(), k = u(), M = y(), U = $({ visible: o() }), K = T(), X = u(), Z = y();
      return _ !== d.e && b(C, d.e = _), p !== d.t && b(v, d.t = p), B !== d.a && b(D, d.a = B), k !== d.o && b(w, d.o = k), M !== d.i && b(h, d.i = M), U !== d.n && b(g, d.n = U), K !== d.s && b(A, d.s = K), X !== d.h && b(m, d.h = X), Z !== d.r && b(a, d.r = Z), d;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0 }), C;
  })();
};
var Zt = R("<table><caption>\u8D77\u627F\u8EE2\u7D50</caption><thead><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>"), Qt = R("<tr><th scope=row></th><td>");
const en = (e) => {
  const t = F(() => {
    var _a;
    return (_a = e.storyData) == null ? void 0 : _a.title.head;
  }), n = F(() => {
    var _a;
    return (_a = e.storyData) == null ? void 0 : _a.title.body;
  }), r = () => {
    var _a;
    return (_a = e.storyData) == null ? void 0 : _a.data;
  }, [o, i] = j(false);
  let s;
  ie(() => {
    if (!s) return;
    const v = new IntersectionObserver((D) => {
      i(D[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    v.observe(s), ee(() => v.disconnect());
  });
  const l = x(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), f = x(["p-1", "bg-neutral-700", "sticky", "top-14", "text-xl", "font-bold", "shadow-md", "shadow-neutral-950/25", "border-b", "border-neutral-600"]), c = x(["bg-neutral-700", "sticky", "top-[93px]", "shadow-md", "shadow-neutral-950/25"]), y = x(["p-1"]), u = x(["w-1/3", y()]), $ = x([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), T = x(["hocus:bg-white/10", "hocus:text-white", "transition-colors"]), C = x([y()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var v = Zt(), D = v.firstChild, N = D.nextSibling, w = N.firstChild, h = w.firstChild, g = h.nextSibling, A = N.nextSibling, m = s;
    return typeof m == "function" ? q(m, v) : s = v, E(h, t), E(g, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    }), E(A, O(z, { get each() {
      return r();
    }, children: (a) => (() => {
      var S = Qt(), d = S.firstChild, _ = d.nextSibling;
      return E(d, () => a.head), E(_, () => {
        var _a;
        return (_a = a.body) == null ? void 0 : _a[0].day;
      }), L((p) => {
        var _a;
        var B = T(), k = u(), M = C({ color: (_a = a.body) == null ? void 0 : _a[0].color });
        return B !== p.e && b(S, p.e = B), k !== p.t && b(d, p.t = k), M !== p.a && b(_, p.a = M), p;
      }, { e: void 0, t: void 0, a: void 0 }), S;
    })() })), L((a) => {
      var S = l(), d = f(), _ = c(), p = u(), B = y(), k = $({ visible: o() });
      return S !== a.e && b(v, a.e = S), d !== a.t && b(D, a.t = d), _ !== a.a && b(N, a.a = _), p !== a.o && b(h, a.o = p), B !== a.i && b(g, a.i = B), k !== a.n && b(A, a.n = k), a;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), v;
  })();
};
var tn = R("<table><caption>\u500B\u4EBAKIN\u5E74\u8868</caption><thead><tr><th scope=col></th></tr></thead><tbody>"), nn = R("<th scope=col>"), rn = R("<tr><th scope=row>"), on = R("<td>");
const sn = (e) => {
  const t = F(() => {
    var _a;
    return (_a = e.timelineData) == null ? void 0 : _a.title.head;
  }), n = F(() => {
    var _a;
    return (_a = e.timelineData) == null ? void 0 : _a.title.body;
  }), r = () => {
    var _a;
    return (_a = e.timelineData) == null ? void 0 : _a.data;
  }, [o, i] = j(false);
  let s;
  ie(() => {
    if (!s) return;
    const v = new IntersectionObserver((D) => {
      i(D[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    v.observe(s), ee(() => v.disconnect());
  });
  const l = x(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), f = x(["p-1", "bg-neutral-700", "sticky", "top-14", "text-xl", "font-bold", "shadow-md", "shadow-neutral-950/25", "border-b", "border-neutral-600"]), c = x(["bg-neutral-700", "sticky", "top-[93px]", "shadow-md", "shadow-neutral-950/25"]), y = x(["p-1"]), u = x(["w-1/5", y()]), $ = x([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), T = x(["hocus:bg-white/10", "hocus:text-white", "transition-colors"], { variants: { emphasis: { true: ["bg-white/5", "border-y-2", "border-neutral-200", "font-bold"], false: [] } } }), C = x([y()], { variants: { color: { Red: ["bg-red-full/15"], White: ["bg-white/10"], Blue: ["bg-blue-full/15"], Yellow: ["bg-yellow-full/15"], Green: ["bg-green-full/10"] } } });
  return (() => {
    var v = tn(), D = v.firstChild, N = D.nextSibling, w = N.firstChild, h = w.firstChild, g = N.nextSibling, A = s;
    return typeof A == "function" ? q(A, v) : s = v, E(h, t), E(w, O(z, { get each() {
      return n();
    }, children: (m) => (() => {
      var a = nn();
      return E(a, () => m.day), L(() => b(a, y())), a;
    })() }), null), E(g, O(z, { get each() {
      return r();
    }, children: (m) => (() => {
      var a = rn(), S = a.firstChild;
      return E(S, () => m.head), E(a, O(z, { get each() {
        return m.body;
      }, children: (d) => (() => {
        var _ = on();
        return E(_, () => d.day), L(() => b(_, C({ color: d.color }))), _;
      })() }), null), L((d) => {
        var _ = T({ emphasis: m.emphasis }), p = u();
        return _ !== d.e && b(a, d.e = _), p !== d.t && b(S, d.t = p), d;
      }, { e: void 0, t: void 0 }), a;
    })() })), L((m) => {
      var a = l(), S = f(), d = c(), _ = u(), p = $({ visible: o() });
      return a !== m.e && b(v, m.e = a), S !== m.t && b(D, m.t = S), d !== m.a && b(N, m.a = d), _ !== m.o && b(h, m.o = _), p !== m.i && b(g, m.i = p), m;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), v;
  })();
};
var ln = R("<table><caption>KIN\u5468\u671F\u8868</caption><thead><tr><th scope=col></th><th scope=col></th></tr></thead><tbody>"), an = R("<tr><th scope=row></th><td>");
const cn = (e) => {
  const t = F(() => {
    var _a;
    return (_a = e.periodicTableData) == null ? void 0 : _a.title.head;
  }), n = F(() => {
    var _a;
    return (_a = e.periodicTableData) == null ? void 0 : _a.title.body;
  }), r = () => {
    var _a;
    return (_a = e.periodicTableData) == null ? void 0 : _a.data;
  }, [o, i] = j(false);
  let s;
  ie(() => {
    if (!s) return;
    const C = new IntersectionObserver((v) => {
      i(v[0].isIntersecting);
    }, { rootMargin: "160px", threshold: 0 });
    C.observe(s), ee(() => C.disconnect());
  });
  const l = x(["table-fixed", "w-full", "text-left", "whitespace-pre-wrap"]), f = x(["p-1", "bg-neutral-700", "sticky", "top-14", "text-xl", "font-bold", "shadow-md", "shadow-neutral-950/25", "border-b", "border-neutral-600"]), c = x(["bg-neutral-700", "sticky", "top-[93px]", "shadow-md", "shadow-neutral-950/25"]), y = x(["p-1"]), u = x(["w-1/3", y()]), $ = x([], { variants: { visible: { true: ["visible"], false: ["invisible"] } } }), T = x(["hocus:bg-white/10", "hocus:text-white", "transition-colors"], { variants: { emphasis: { true: ["bg-white/8", "border-y-2", "border-neutral-200", "font-bold"], false: [], undefined: ["even:bg-white/3"] } } });
  return (() => {
    var C = ln(), v = C.firstChild, D = v.nextSibling, N = D.firstChild, w = N.firstChild, h = w.nextSibling, g = D.nextSibling, A = s;
    return typeof A == "function" ? q(A, C) : s = C, E(w, t), E(h, () => {
      var _a;
      return (_a = n()) == null ? void 0 : _a[0].day;
    }), E(g, O(z, { get each() {
      return r();
    }, children: (m) => (() => {
      var a = an(), S = a.firstChild, d = S.nextSibling;
      return E(S, () => m.head), E(d, () => {
        var _a;
        return (_a = m.body) == null ? void 0 : _a[0].day;
      }), L((_) => {
        var p = T({ emphasis: m.emphasis }), B = u(), k = y();
        return p !== _.e && b(a, _.e = p), B !== _.t && b(S, _.t = B), k !== _.a && b(d, _.a = k), _;
      }, { e: void 0, t: void 0, a: void 0 }), a;
    })() })), L((m) => {
      var a = l(), S = f(), d = c(), _ = u(), p = y(), B = $({ visible: o() });
      return a !== m.e && b(C, m.e = a), S !== m.t && b(v, m.t = S), d !== m.a && b(D, m.a = d), _ !== m.o && b(w, m.o = _), p !== m.i && b(h, m.i = p), B !== m.n && b(g, m.n = B), m;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), C;
  })();
};
var dn = R("<div><div><article><section></section><section></section><section></section><section></section><section></section><section></section><section></section><section>");
const un = (e) => {
  const [t, n] = Lt(), [r] = at(t, async (c) => {
    console.log(c);
    try {
      const y = xt(c);
      return Mt(y, c);
    } catch (y) {
      console.error(y), await Ie();
    }
  }), o = x(["relative", "after:absolute", "after:content-['']", "after:bottom-0", "after:left-0", "after:w-full", "after:h-8", "after:bg-gradient-to-t", "after:from-neutral-900", "after:via-neutral-900/70", "after:via-50%", "after:to-transparent", "after:to-[2rem]", "after:pointer-events-none"], { variants: { index: { 0: [""], 1: ["hidden", "md:block"], 2: ["hidden", "lg:block"], 3: ["hidden", "xl:block"] } } }), i = x(["pb-8", "size-full", "rounded", "overflow-y-auto", "scrollbar-none"]), s = x(["bg-neutral-800", "rounded", "divide-y", "divide-neutral-600"]), l = x(["p-2"]), f = x(["bg-neutral-800", "sticky", "top-0", "z-10", l()]);
  return (() => {
    var c = dn(), y = c.firstChild, u = y.firstChild, $ = u.firstChild, T = $.nextSibling, C = T.nextSibling, v = C.nextSibling, D = v.nextSibling, N = D.nextSibling, w = N.nextSibling, h = w.nextSibling;
    return E($, O(Vt, { birthdate: t, setBirthdate: n })), E(T, O(Wt, { get tzolkinData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.tzolkin;
    } })), E(C, O(Ut, { get compareData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.compare;
    } })), E(v, O(Gt, { get treeOfLifeData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.treeOfLife;
    } })), E(D, O(Xt, { get otherData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.other;
    } })), E(N, O(en, { get storyData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.story;
    } })), E(w, O(sn, { get timelineData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.timeline;
    } })), E(h, O(cn, { get periodicTableData() {
      var _a;
      return (_a = r()) == null ? void 0 : _a.periodicTable;
    } })), L((g) => {
      var A = o({ index: e.index }), m = i(), a = s(), S = f(), d = l(), _ = l(), p = l(), B = l(), k = l(), M = l(), U = l();
      return A !== g.e && b(c, g.e = A), m !== g.t && b(y, g.t = m), a !== g.a && b(u, g.a = a), S !== g.o && b($, g.o = S), d !== g.i && b(T, g.i = d), _ !== g.n && b(C, g.n = _), p !== g.s && b(v, g.s = p), B !== g.h && b(D, g.h = B), k !== g.r && b(N, g.r = k), M !== g.d && b(w, g.d = M), U !== g.l && b(h, g.l = U), g;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0 }), c;
  })();
};
var fn = R("<div>");
const hn = () => {
  const e = x(["flex", "size-full", "px-8", "pt-8", "gap-4"]);
  return (() => {
    var t = fn();
    return E(t, O(z, { get each() {
      return Array(4).fill(0);
    }, children: (n, r) => O(un, { get index() {
      return r();
    } }) })), L(() => b(t, e())), t;
  })();
};
var bn = R("<main>");
const yn = () => {
  const e = x(["fixed", "size-full", "bg-neutral-900", "text-neutral-200"]);
  return (() => {
    var t = bn();
    return E(t, O(hn, {})), L(() => b(t, e())), t;
  })();
}, vn = async () => {
  try {
    await Ie();
    const e = document.getElementById("root");
    if (!e) throw new Error("Root element not found");
    vt(() => O(yn, {}), e);
  } catch (e) {
    console.error(e);
  }
};
vn();
