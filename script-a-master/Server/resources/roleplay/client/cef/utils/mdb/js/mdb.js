/*!
 * Material Design for Bootstrap 4
 *   Version: MDB FREE 4.11.0
 * 
 * 
 *   Copyright: Material Design for Bootstrap
 *   https://mdbootstrap.com/
 * 
 *   Read the license: https://mdbootstrap.com/general/license/
 * 
 * 
 *   Documentation: https://mdbootstrap.com/
 * 
 *   Getting started: https://mdbootstrap.com/docs/jquery/getting-started/download/
 * 
 *   Tutorials: https://mdbootstrap.com/education/bootstrap/
 * 
 *   Templates: https://mdbootstrap.com/templates/
 * 
 *   Support: https://mdbootstrap.com/support/
 * 
 *   Contact: office@mdbootstrap.com
 * 
 *   Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js, jquery.easing.js, velocity.min.js, chart.js, wow.js, scrolling-navbar.js, waves.js, forms-free.js, enhanced-modals.js, treeview.js
 */ !function(t) {
    var e = {
    };
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {
            }
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    n.m = t, n.c = e, n.d = function(t1, e1, r) {
        n.o(t1, e1) || Object.defineProperty(t1, e1, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(t1) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t1, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t1, "__esModule", {
            value: !0
        });
    }, n.t = function(t1, e1) {
        if (1 & e1 && (t1 = n(t1)), 8 & e1) return t1;
        if (4 & e1 && "object" == typeof t1 && t1 && t1.__esModule) return t1;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t1
        }), 2 & e1 && "string" != typeof t1) for(var i in t1)n.d(r, i, (function(e2) {
            return t1[e2];
        }).bind(null, i));
        return r;
    }, n.n = function(t1) {
        var e1 = t1 && t1.__esModule ? function() {
            return t1.default;
        } : function() {
            return t1;
        };
        return n.d(e1, "a", e1), e1;
    }, n.o = function(t1, e1) {
        return Object.prototype.hasOwnProperty.call(t1, e1);
    }, n.p = "", n(n.s = 146);
}([
    function(t, e, n) {
        (function(e1) {
            var n1 = function(t1) {
                return t1 && t1.Math == Math && t1;
            };
            t.exports = n1("object" == typeof globalThis && globalThis) || n1("object" == typeof window && window) || n1("object" == typeof self && self) || n1("object" == typeof e1 && e1) || Function("return this")();
        }).call(this, n(57));
    },
    function(t, e) {
        t.exports = function(t1) {
            try {
                return !!t1();
            } catch (t2) {
                return !0;
            }
        };
    },
    function(t, e, n) {
        var r = n(0), i = n(14), o = n(28), a = n(46), s = r.Symbol, l = i("wks");
        t.exports = function(t1) {
            return l[t1] || (l[t1] = a && s[t1] || (a ? s : o)("Symbol." + t1));
        };
    },
    function(t, e, n) {
        var r = n(0), i = n(24).f, o = n(6), a = n(15), s = n(21), l = n(43), u = n(50);
        t.exports = function(t1, e1) {
            var n1, c, d, f, h, p = t1.target, g = t1.global, v = t1.stat;
            if (n1 = g ? r : v ? r[p] || s(p, {
            }) : (r[p] || {
            }).prototype) for(c in e1){
                if (f = e1[c], d = t1.noTargetGet ? (h = i(n1, c)) && h.value : n1[c], !u(g ? c : p + (v ? "." : "#") + c, t1.forced) && void 0 !== d) {
                    if (typeof f == typeof d) continue;
                    l(f, d);
                }
                (t1.sham || d && d.sham) && o(f, "sham", !0), a(n1, c, f, t1);
            }
        };
    },
    function(t, e) {
        var n = {
        }.hasOwnProperty;
        t.exports = function(t1, e1) {
            return n.call(t1, e1);
        };
    },
    function(t, e) {
        t.exports = function(t1) {
            return "object" == typeof t1 ? null !== t1 : "function" == typeof t1;
        };
    },
    function(t, e, n) {
        var r = n(7), i = n(9), o = n(17);
        t.exports = r ? function(t1, e1, n1) {
            return i.f(t1, e1, o(1, n1));
        } : function(t1, e1, n1) {
            return t1[e1] = n1, t1;
        };
    },
    function(t, e, n) {
        var r = n(1);
        t.exports = !r(function() {
            return 7 != Object.defineProperty({
            }, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    function(t, e, n) {
        var r = n(5);
        t.exports = function(t1) {
            if (!r(t1)) throw TypeError(String(t1) + " is not an object");
            return t1;
        };
    },
    function(t, e, n) {
        var r = n(7), i = n(35), o = n(8), a = n(19), s = Object.defineProperty;
        e.f = r ? s : function(t1, e1, n1) {
            if (o(t1), e1 = a(e1, !0), o(n1), i) try {
                return s(t1, e1, n1);
            } catch (t2) {
            }
            if ("get" in n1 || "set" in n1) throw TypeError("Accessors not supported");
            return "value" in n1 && (t1[e1] = n1.value), t1;
        };
    },
    function(t, e, n) {
        var r = n(32), i = n(13);
        t.exports = function(t1) {
            return r(i(t1));
        };
    },
    function(t, e, n) {
        var r = n(12), i = Math.min;
        t.exports = function(t1) {
            return t1 > 0 ? i(r(t1), 9007199254740991) : 0;
        };
    },
    function(t, e) {
        var n = Math.ceil, r = Math.floor;
        t.exports = function(t1) {
            return isNaN(t1 = +t1) ? 0 : (t1 > 0 ? r : n)(t1);
        };
    },
    function(t, e) {
        t.exports = function(t1) {
            if (null == t1) throw TypeError("Can't call method on " + t1);
            return t1;
        };
    },
    function(t, e, n) {
        var r = n(26), i = n(59);
        (t.exports = function(t1, e1) {
            return i[t1] || (i[t1] = void 0 !== e1 ? e1 : {
            });
        })("versions", []).push({
            version: "3.3.2",
            mode: r ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    },
    function(t, e, n) {
        var r = n(0), i = n(14), o = n(6), a = n(4), s = n(21), l = n(36), u = n(22), c = u.get, d = u.enforce, f = String(l).split("toString");
        i("inspectSource", function(t1) {
            return l.call(t1);
        }), (t.exports = function(t1, e1, n1, i1) {
            var l1 = !!i1 && !!i1.unsafe, u1 = !!i1 && !!i1.enumerable, c1 = !!i1 && !!i1.noTargetGet;
            "function" == typeof n1 && ("string" != typeof e1 || a(n1, "name") || o(n1, "name", e1), d(n1).source = f.join("string" == typeof e1 ? e1 : "")), t1 !== r ? (l1 ? !c1 && t1[e1] && (u1 = !0) : delete t1[e1], u1 ? t1[e1] = n1 : o(t1, e1, n1)) : u1 ? t1[e1] = n1 : s(e1, n1);
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && c(this).source || l.call(this);
        });
    },
    function(t, e, n) {
        var r = n(13);
        t.exports = function(t1) {
            return Object(r(t1));
        };
    },
    function(t, e) {
        t.exports = function(t1, e1) {
            return {
                enumerable: !(1 & t1),
                configurable: !(2 & t1),
                writable: !(4 & t1),
                value: e1
            };
        };
    },
    function(t, e) {
        var n = {
        }.toString;
        t.exports = function(t1) {
            return n.call(t1).slice(8, -1);
        };
    },
    function(t, e, n) {
        var r = n(5);
        t.exports = function(t1, e1) {
            if (!r(t1)) return t1;
            var n1, i;
            if (e1 && "function" == typeof (n1 = t1.toString) && !r(i = n1.call(t1))) return i;
            if ("function" == typeof (n1 = t1.valueOf) && !r(i = n1.call(t1))) return i;
            if (!e1 && "function" == typeof (n1 = t1.toString) && !r(i = n1.call(t1))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function(t, e) {
        t.exports = {
        };
    },
    function(t, e, n) {
        var r = n(0), i = n(6);
        t.exports = function(t1, e1) {
            try {
                i(r, t1, e1);
            } catch (n1) {
                r[t1] = e1;
            }
            return e1;
        };
    },
    function(t, e, n) {
        var r, i, o, a = n(60), s = n(0), l = n(5), u = n(6), c = n(4), d = n(23), f = n(20), h = s.WeakMap;
        if (a) {
            var p = new h, g = p.get, v = p.has, m = p.set;
            r = function(t1, e1) {
                return m.call(p, t1, e1), e1;
            }, i = function(t1) {
                return g.call(p, t1) || {
                };
            }, o = function(t1) {
                return v.call(p, t1);
            };
        } else {
            var y = d("state");
            f[y] = !0, r = function(t1, e1) {
                return u(t1, y, e1), e1;
            }, i = function(t1) {
                return c(t1, y) ? t1[y] : {
                };
            }, o = function(t1) {
                return c(t1, y);
            };
        }
        t.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function(t1) {
                return o(t1) ? i(t1) : r(t1, {
                });
            },
            getterFor: function(t1) {
                return function(e1) {
                    var n1;
                    if (!l(e1) || (n1 = i(e1)).type !== t1) throw TypeError("Incompatible receiver, " + t1 + " required");
                    return n1;
                };
            }
        };
    },
    function(t, e, n) {
        var r = n(14), i = n(28), o = r("keys");
        t.exports = function(t1) {
            return o[t1] || (o[t1] = i(t1));
        };
    },
    function(t, e, n) {
        var r = n(7), i = n(42), o = n(17), a = n(10), s = n(19), l = n(4), u = n(35), c = Object.getOwnPropertyDescriptor;
        e.f = r ? c : function(t1, e1) {
            if (t1 = a(t1), e1 = s(e1, !0), u) try {
                return c(t1, e1);
            } catch (t2) {
            }
            if (l(t1, e1)) return o(!i.f.call(t1, e1), t1[e1]);
        };
    },
    function(t, e, n) {
        var r = n(71), i = n(32), o = n(16), a = n(11), s = n(47), l = [].push, u = function(t1) {
            var e1 = 1 == t1, n1 = 2 == t1, u1 = 3 == t1, c = 4 == t1, d = 6 == t1, f = 5 == t1 || d;
            return function(h, p, g, v) {
                for(var m, y, b = o(h), x = i(b), w = r(p, g, 3), S = a(x.length), k = 0, C = v || s, M = e1 ? C(h, S) : n1 ? C(h, 0) : void 0; S > k; k++)if ((f || k in x) && (y = w(m = x[k], k, b), t1)) {
                    if (e1) M[k] = y;
                    else if (y) switch(t1){
                        case 3:
                            return !0;
                        case 5:
                            return m;
                        case 6:
                            return k;
                        case 2:
                            l.call(M, m);
                    }
                    else if (c) return !1;
                }
                return d ? -1 : u1 || c ? c : M;
            };
        };
        t.exports = {
            forEach: u(0),
            map: u(1),
            filter: u(2),
            some: u(3),
            every: u(4),
            find: u(5),
            findIndex: u(6)
        };
    },
    function(t, e) {
        t.exports = !1;
    },
    function(t, e, n) {
        var r = n(39), i = n(29).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t1) {
            return r(t1, i);
        };
    },
    function(t, e) {
        var n = 0, r = Math.random();
        t.exports = function(t1) {
            return "Symbol(" + String(void 0 === t1 ? "" : t1) + ")_" + (++n + r).toString(36);
        };
    },
    function(t, e) {
        t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
        ];
    },
    function(t, e, n) {
        var r = n(18);
        t.exports = Array.isArray || function(t1) {
            return "Array" == r(t1);
        };
    },
    function(t, e, n) {
        var r = n(12), i = Math.max, o = Math.min;
        t.exports = function(t1, e1) {
            var n1 = r(t1);
            return n1 < 0 ? i(n1 + e1, 0) : o(n1, e1);
        };
    },
    function(t, e, n) {
        var r = n(1), i = n(18), o = "".split;
        t.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0);
        }) ? function(t1) {
            return "String" == i(t1) ? o.call(t1, "") : Object(t1);
        } : Object;
    },
    function(t, e, n) {
        var r = n(8), i = n(73), o = n(29), a = n(20), s = n(74), l = n(38), u = n(23)("IE_PROTO"), c = function() {
        }, d = function() {
            var t1, e1 = l("iframe"), n1 = o.length;
            for(e1.style.display = "none", s.appendChild(e1), e1.src = String("javascript:"), (t1 = e1.contentWindow.document).open(), t1.write("<script>document.F=Object<\/script>"), t1.close(), d = t1.F; n1--;)delete d.prototype[o[n1]];
            return d();
        };
        t.exports = Object.create || function(t1, e1) {
            var n1;
            return null !== t1 ? (c.prototype = r(t1), n1 = new c, c.prototype = null, n1[u] = t1) : n1 = d(), void 0 === e1 ? n1 : i(n1, e1);
        }, a[u] = !0;
    },
    function(t, e, n) {
        var r = n(1), i = n(2)("species");
        t.exports = function(t1) {
            return !r(function() {
                var e1 = [];
                return (e1.constructor = {
                })[i] = function() {
                    return {
                        foo: 1
                    };
                }, 1 !== e1[t1](Boolean).foo;
            });
        };
    },
    function(t, e, n) {
        var r = n(7), i = n(1), o = n(38);
        t.exports = !r && !i(function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    function(t, e, n) {
        var r = n(14);
        t.exports = r("native-function-to-string", Function.toString);
    },
    function(t, e, n) {
        var r = n(44), i = n(0), o = function(t1) {
            return "function" == typeof t1 ? t1 : void 0;
        };
        t.exports = function(t1, e1) {
            return arguments.length < 2 ? o(r[t1]) || o(i[t1]) : r[t1] && r[t1][e1] || i[t1] && i[t1][e1];
        };
    },
    function(t, e, n) {
        var r = n(0), i = n(5), o = r.document, a = i(o) && i(o.createElement);
        t.exports = function(t1) {
            return a ? o.createElement(t1) : {
            };
        };
    },
    function(t, e, n) {
        var r = n(4), i = n(10), o = n(41).indexOf, a = n(20);
        t.exports = function(t1, e1) {
            var n1, s = i(t1), l = 0, u = [];
            for(n1 in s)!r(a, n1) && r(s, n1) && u.push(n1);
            for(; e1.length > l;)r(s, n1 = e1[l++]) && (~o(u, n1) || u.push(n1));
            return u;
        };
    },
    function(t, e, n) {
        "use strict";
        var r, i = n(7), o = n(0), a = n(5), s = n(4), l = n(85), u = n(6), c = n(15), d = n(9).f, f = n(64), h = n(69), p = n(2), g = n(28), v = o.DataView, m = v && v.prototype, y = o.Int8Array, b = y && y.prototype, x = o.Uint8ClampedArray, w = x && x.prototype, S = y && f(y), k = b && f(b), C = Object.prototype, M = C.isPrototypeOf, A = p("toStringTag"), P = g("TYPED_ARRAY_TAG"), _ = !(!o.ArrayBuffer || !v), T = _ && !!h && "Opera" !== l(o.opera), I = !1, O = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, F = function(t1) {
            return a(t1) && s(O, l(t1));
        };
        for(r in O)o[r] || (T = !1);
        if ((!T || "function" != typeof S || S === Function.prototype) && (S = function() {
            throw TypeError("Incorrect invocation");
        }, T)) for(r in O)o[r] && h(o[r], S);
        if ((!T || !k || k === C) && (k = S.prototype, T)) for(r in O)o[r] && h(o[r].prototype, k);
        if (T && f(w) !== k && h(w, k), i && !s(k, A)) for(r in I = !0, d(k, A, {
            get: function() {
                return a(this) ? this[P] : void 0;
            }
        }), O)o[r] && u(o[r], P, r);
        _ && h && f(m) !== C && h(m, C), t.exports = {
            NATIVE_ARRAY_BUFFER: _,
            NATIVE_ARRAY_BUFFER_VIEWS: T,
            TYPED_ARRAY_TAG: I && P,
            aTypedArray: function(t1) {
                if (F(t1)) return t1;
                throw TypeError("Target is not a typed array");
            },
            aTypedArrayConstructor: function(t1) {
                if (h) {
                    if (M.call(S, t1)) return t1;
                } else for(var e1 in O)if (s(O, r)) {
                    var n1 = o[e1];
                    if (n1 && (t1 === n1 || M.call(n1, t1))) return t1;
                }
                throw TypeError("Target is not a typed array constructor");
            },
            exportProto: function(t1, e1, n2) {
                if (i) {
                    if (n2) for(var r1 in O){
                        var a1 = o[r1];
                        a1 && s(a1.prototype, t1) && delete a1.prototype[t1];
                    }
                    k[t1] && !n2 || c(k, t1, n2 ? e1 : T && b[t1] || e1);
                }
            },
            exportStatic: function(t1, e1, n2) {
                var r2, a2;
                if (i) {
                    if (h) {
                        if (n2) for(r2 in O)(a2 = o[r2]) && s(a2, t1) && delete a2[t1];
                        if (S[t1] && !n2) return;
                        try {
                            return c(S, t1, n2 ? e1 : T && y[t1] || e1);
                        } catch (t2) {
                        }
                    }
                    for(r2 in O)!(a2 = o[r2]) || a2[t1] && !n2 || c(a2, t1, e1);
                }
            },
            isView: function(t1) {
                var e1 = l(t1);
                return "DataView" === e1 || s(O, e1);
            },
            isTypedArray: F,
            TypedArray: S,
            TypedArrayPrototype: k
        };
    },
    function(t, e, n2) {
        var r2 = n2(10), i = n2(11), o = n2(31), a2 = function(t1) {
            return function(e1, n3, a3) {
                var s, l = r2(e1), u = i(l.length), c = o(a3, u);
                if (t1 && n3 != n3) {
                    for(; u > c;)if ((s = l[c++]) != s) return !0;
                } else for(; u > c; c++)if ((t1 || c in l) && l[c] === n3) return t1 || c || 0;
                return !t1 && -1;
            };
        };
        t.exports = {
            includes: a2(!0),
            indexOf: a2(!1)
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2 = {
        }.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r2.call({
            1: 2
        }, 1);
        e.f = o ? function(t1) {
            var e1 = i(this, t1);
            return !!e1 && e1.enumerable;
        } : r2;
    },
    function(t, e, n2) {
        var r2 = n2(4), i = n2(61), o = n2(24), a2 = n2(9);
        t.exports = function(t1, e1) {
            for(var n3 = i(e1), s = a2.f, l = o.f, u = 0; u < n3.length; u++){
                var c = n3[u];
                r2(t1, c) || s(t1, c, l(e1, c));
            }
        };
    },
    function(t, e, n2) {
        t.exports = n2(0);
    },
    function(t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function(t, e, n2) {
        var r2 = n2(1);
        t.exports = !!Object.getOwnPropertySymbols && !r2(function() {
            return !String(Symbol());
        });
    },
    function(t, e, n2) {
        var r2 = n2(5), i = n2(30), o = n2(2)("species");
        t.exports = function(t1, e1) {
            var n3;
            return i(t1) && ("function" != typeof (n3 = t1.constructor) || n3 !== Array && !i(n3.prototype) ? r2(n3) && null === (n3 = n3[o]) && (n3 = void 0) : n3 = void 0), new (void 0 === n3 ? Array : n3)(0 === e1 ? 0 : e1);
        };
    },
    function(t, e) {
        t.exports = {
        };
    },
    function(t, e, n2) {
        var r2 = n2(9).f, i = n2(4), o = n2(2)("toStringTag");
        t.exports = function(t1, e1, n3) {
            t1 && !i(t1 = n3 ? t1 : t1.prototype, o) && r2(t1, o, {
                configurable: !0,
                value: e1
            });
        };
    },
    function(t, e, n2) {
        var r2 = n2(1), i = /#|\.prototype\./, o = function(t1, e1) {
            var n3 = s[a2(t1)];
            return n3 == u || n3 != l && ("function" == typeof e1 ? r2(e1) : !!e1);
        }, a2 = o.normalize = function(t1) {
            return String(t1).replace(i, ".").toLowerCase();
        }, s = o.data = {
        }, l = o.NATIVE = "N", u = o.POLYFILL = "P";
        t.exports = o;
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(1);
        t.exports = function(t1, e1) {
            var n3 = [][t1];
            return !n3 || !r2(function() {
                n3.call(null, e1 || function() {
                    throw 1;
                }, 1);
            });
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2, i, o = n2(79), a2 = RegExp.prototype.exec, s = String.prototype.replace, l = a2, u = (r2 = /a/, i = /b*/g, a2.call(r2, "a"), a2.call(i, "a"), 0 !== r2.lastIndex || 0 !== i.lastIndex), c = void 0 !== /()??/.exec("")[1];
        (u || c) && (l = function(t1) {
            var e1, n3, r3, i1, l1 = this;
            return c && (n3 = new RegExp("^" + l1.source + "$(?!\\s)", o.call(l1))), u && (e1 = l1.lastIndex), r3 = a2.call(l1, t1), u && r3 && (l1.lastIndex = l1.global ? r3.index + r3[0].length : e1), c && r3 && r3.length > 1 && s.call(r3[0], n3, function() {
                for(i1 = 1; i1 < arguments.length - 2; i1++)void 0 === arguments[i1] && (r3[i1] = void 0);
            }), r3;
        }), t.exports = l;
    },
    function(t, e, n2) {
        var r2 = n2(39), i = n2(29);
        t.exports = Object.keys || function(t1) {
            return r2(t1, i);
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(10), i = n2(62), o = n2(48), a2 = n2(22), s = n2(67), l = a2.set, u = a2.getterFor("Array Iterator");
        t.exports = s(Array, "Array", function(t1, e1) {
            l(this, {
                type: "Array Iterator",
                target: r2(t1),
                index: 0,
                kind: e1
            });
        }, function() {
            var t1 = u(this), e1 = t1.target, n3 = t1.kind, r3 = t1.index++;
            return !e1 || r3 >= e1.length ? (t1.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n3 ? {
                value: r3,
                done: !1
            } : "values" == n3 ? {
                value: e1[r3],
                done: !1
            } : {
                value: [
                    r3,
                    e1[r3]
                ],
                done: !1
            };
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
    },
    function(t, e) {
        (function(e1) {
            t.exports = e1;
        }).call(this, {
        });
    },
    function(t, e) {
        t.exports = function(t1) {
            if ("function" != typeof t1) throw TypeError(String(t1) + " is not a function");
            return t1;
        };
    },
    function(t, e) {
        var n2;
        n2 = (function() {
            return this;
        })();
        try {
            n2 = n2 || new Function("return this")();
        } catch (t1) {
            "object" == typeof window && (n2 = window);
        }
        t.exports = n2;
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(19), i = n2(9), o = n2(17);
        t.exports = function(t1, e1, n3) {
            var a2 = r2(e1);
            a2 in t1 ? i.f(t1, a2, o(0, n3)) : t1[a2] = n3;
        };
    },
    function(t, e, n2) {
        var r2 = n2(0), i = n2(21), o = r2["__core-js_shared__"] || i("__core-js_shared__", {
        });
        t.exports = o;
    },
    function(t, e, n2) {
        var r2 = n2(0), i = n2(36), o = r2.WeakMap;
        t.exports = "function" == typeof o && /native code/.test(i.call(o));
    },
    function(t, e, n2) {
        var r2 = n2(37), i = n2(27), o = n2(45), a2 = n2(8);
        t.exports = r2("Reflect", "ownKeys") || function(t1) {
            var e1 = i.f(a2(t1)), n3 = o.f;
            return n3 ? e1.concat(n3(t1)) : e1;
        };
    },
    function(t, e, n2) {
        var r2 = n2(2), i = n2(33), o = n2(6), a2 = r2("unscopables"), s = Array.prototype;
        null == s[a2] && o(s, a2, i(null)), t.exports = function(t1) {
            s[a2][t1] = !0;
        };
    },
    function(t, e) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    function(t, e, n2) {
        var r2 = n2(4), i = n2(16), o = n2(23), a2 = n2(94), s = o("IE_PROTO"), l = Object.prototype;
        t.exports = a2 ? Object.getPrototypeOf : function(t1) {
            return t1 = i(t1), r2(t1, s) ? t1[s] : "function" == typeof t1.constructor && t1 instanceof t1.constructor ? t1.constructor.prototype : t1 instanceof Object ? l : null;
        };
    },
    function(t, e, n2) {
        e.f = n2(2);
    },
    function(t, e, n2) {
        var r2 = n2(44), i = n2(4), o = n2(65), a2 = n2(9).f;
        t.exports = function(t1) {
            var e1 = r2.Symbol || (r2.Symbol = {
            });
            i(e1, t1) || a2(e1, t1, {
                value: o.f(t1)
            });
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(3), i = n2(93), o = n2(64), a2 = n2(69), s = n2(49), l = n2(6), u = n2(15), c = n2(2), d = n2(26), f = n2(48), h = n2(68), p = h.IteratorPrototype, g = h.BUGGY_SAFARI_ITERATORS, v = c("iterator"), m = function() {
            return this;
        };
        t.exports = function(t1, e1, n3, c1, h1, y, b) {
            i(n3, e1, c1);
            var x, w, S, k = function(t2) {
                if (t2 === h1 && _) return _;
                if (!g && t2 in A) return A[t2];
                switch(t2){
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new n3(this, t2);
                        };
                }
                return function() {
                    return new n3(this);
                };
            }, C = e1 + " Iterator", M = !1, A = t1.prototype, P = A[v] || A["@@iterator"] || h1 && A[h1], _ = !g && P || k(h1), T = "Array" == e1 && A.entries || P;
            if (T && (x = o(T.call(new t1)), p !== Object.prototype && x.next && (d || o(x) === p || (a2 ? a2(x, p) : "function" != typeof x[v] && l(x, v, m)), s(x, C, !0, !0), d && (f[C] = m))), "values" == h1 && P && "values" !== P.name && (M = !0, _ = function() {
                return P.call(this);
            }), d && !b || A[v] === _ || l(A, v, _), f[e1] = _, h1) if (w = {
                values: k("values"),
                keys: y ? _ : k("keys"),
                entries: k("entries")
            }, b) for(S in w)!g && !M && S in A || u(A, S, w[S]);
            else r2({
                target: e1,
                proto: !0,
                forced: g || M
            }, w);
            return w;
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2, i, o, a2 = n2(64), s = n2(6), l = n2(4), u = n2(2), c = n2(26), d = u("iterator"), f = !1;
        [].keys && ("next" in (o = [].keys()) ? (i = a2(a2(o))) !== Object.prototype && (r2 = i) : f = !0), null == r2 && (r2 = {
        }), c || l(r2, d) || s(r2, d, function() {
            return this;
        }), t.exports = {
            IteratorPrototype: r2,
            BUGGY_SAFARI_ITERATORS: f
        };
    },
    function(t, e, n2) {
        var r2 = n2(8), i = n2(89);
        t.exports = Object.setPrototypeOf || ("__proto__" in {
        } ? (function() {
            var t1, e1 = !1, n3 = {
            };
            try {
                (t1 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n3, []), e1 = n3 instanceof Array;
            } catch (t2) {
            }
            return function(n4, o) {
                return r2(n4), i(o), e1 ? t1.call(n4, o) : n4.__proto__ = o, n4;
            };
        })() : void 0);
    },
    function(t, e, n2) {
        var r2 = n2(12), i = n2(13), o = function(t1) {
            return function(e1, n3) {
                var o1, a2, s = String(i(e1)), l = r2(n3), u = s.length;
                return l < 0 || l >= u ? t1 ? "" : void 0 : (o1 = s.charCodeAt(l)) < 55296 || o1 > 56319 || l + 1 === u || (a2 = s.charCodeAt(l + 1)) < 56320 || a2 > 57343 ? t1 ? s.charAt(l) : o1 : t1 ? s.slice(l, l + 2) : a2 - 56320 + (o1 - 55296 << 10) + 65536;
            };
        };
        t.exports = {
            codeAt: o(!1),
            charAt: o(!0)
        };
    },
    function(t, e, n2) {
        var r2 = n2(56);
        t.exports = function(t1, e1, n3) {
            if (r2(t1), void 0 === e1) return t1;
            switch(n3){
                case 0:
                    return function() {
                        return t1.call(e1);
                    };
                case 1:
                    return function(n4) {
                        return t1.call(e1, n4);
                    };
                case 2:
                    return function(n4, r3) {
                        return t1.call(e1, n4, r3);
                    };
                case 3:
                    return function(n4, r3, i) {
                        return t1.call(e1, n4, r3, i);
                    };
            }
            return function() {
                return t1.apply(e1, arguments);
            };
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(3), i = n2(0), o = n2(26), a2 = n2(7), s = n2(46), l = n2(1), u = n2(4), c = n2(30), d = n2(5), f = n2(8), h = n2(16), p = n2(10), g = n2(19), v = n2(17), m = n2(33), y = n2(53), b = n2(27), x = n2(92), w = n2(45), S = n2(24), k = n2(9), C = n2(42), M = n2(6), A = n2(15), P = n2(14), _ = n2(23), T = n2(20), I = n2(28), O = n2(2), F = n2(65), D = n2(66), L = n2(49), E = n2(22), R = n2(25).forEach, N = _("hidden"), V = O("toPrimitive"), z = E.set, B = E.getterFor("Symbol"), W = Object.prototype, j = i.Symbol, H = i.JSON, q = H && H.stringify, U = S.f, Y = k.f, $ = x.f, G = C.f, Q = P("symbols"), X = P("op-symbols"), Z = P("string-to-symbol-registry"), J = P("symbol-to-string-registry"), K = P("wks"), tt = i.QObject, et = !tt || !tt.prototype || !tt.prototype.findChild, nt = a2 && l(function() {
            return 7 != m(Y({
            }, "a", {
                get: function() {
                    return Y(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(t1, e1, n3) {
            var r3 = U(W, e1);
            r3 && delete W[e1], Y(t1, e1, n3), r3 && t1 !== W && Y(W, e1, r3);
        } : Y, rt = function(t1, e1) {
            var n3 = Q[t1] = m(j.prototype);
            return z(n3, {
                type: "Symbol",
                tag: t1,
                description: e1
            }), a2 || (n3.description = e1), n3;
        }, it = s && "symbol" == typeof j.iterator ? function(t1) {
            return "symbol" == typeof t1;
        } : function(t1) {
            return Object(t1) instanceof j;
        }, ot = function(t1, e1, n3) {
            t1 === W && ot(X, e1, n3), f(t1);
            var r3 = g(e1, !0);
            return f(n3), u(Q, r3) ? (n3.enumerable ? (u(t1, N) && t1[N][r3] && (t1[N][r3] = !1), n3 = m(n3, {
                enumerable: v(0, !1)
            })) : (u(t1, N) || Y(t1, N, v(1, {
            })), t1[N][r3] = !0), nt(t1, r3, n3)) : Y(t1, r3, n3);
        }, at = function(t1, e1) {
            f(t1);
            var n3 = p(e1), r3 = y(n3).concat(ct(n3));
            return R(r3, function(e2) {
                a2 && !st.call(n3, e2) || ot(t1, e2, n3[e2]);
            }), t1;
        }, st = function(t1) {
            var e1 = g(t1, !0), n3 = G.call(this, e1);
            return !(this === W && u(Q, e1) && !u(X, e1)) && (!(n3 || !u(this, e1) || !u(Q, e1) || u(this, N) && this[N][e1]) || n3);
        }, lt = function(t1, e1) {
            var n3 = p(t1), r3 = g(e1, !0);
            if (n3 !== W || !u(Q, r3) || u(X, r3)) {
                var i1 = U(n3, r3);
                return !i1 || !u(Q, r3) || u(n3, N) && n3[N][r3] || (i1.enumerable = !0), i1;
            }
        }, ut = function(t1) {
            var e1 = $(p(t1)), n3 = [];
            return R(e1, function(t2) {
                u(Q, t2) || u(T, t2) || n3.push(t2);
            }), n3;
        }, ct = function(t1) {
            var e1 = t1 === W, n3 = $(e1 ? X : p(t1)), r3 = [];
            return R(n3, function(t2) {
                !u(Q, t2) || e1 && !u(W, t2) || r3.push(Q[t2]);
            }), r3;
        };
        s || (A((j = function() {
            if (this instanceof j) throw TypeError("Symbol is not a constructor");
            var t1 = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, e1 = I(t1), n3 = function(t2) {
                this === W && n3.call(X, t2), u(this, N) && u(this[N], e1) && (this[N][e1] = !1), nt(this, e1, v(1, t2));
            };
            return a2 && et && nt(W, e1, {
                configurable: !0,
                set: n3
            }), rt(e1, t1);
        }).prototype, "toString", function() {
            return B(this).tag;
        }), C.f = st, k.f = ot, S.f = lt, b.f = x.f = ut, w.f = ct, a2 && (Y(j.prototype, "description", {
            configurable: !0,
            get: function() {
                return B(this).description;
            }
        }), o || A(W, "propertyIsEnumerable", st, {
            unsafe: !0
        })), F.f = function(t1) {
            return rt(O(t1), t1);
        }), r2({
            global: !0,
            wrap: !0,
            forced: !s,
            sham: !s
        }, {
            Symbol: j
        }), R(y(K), function(t1) {
            D(t1);
        }), r2({
            target: "Symbol",
            stat: !0,
            forced: !s
        }, {
            for: function(t1) {
                var e1 = String(t1);
                if (u(Z, e1)) return Z[e1];
                var n3 = j(e1);
                return Z[e1] = n3, J[n3] = e1, n3;
            },
            keyFor: function(t1) {
                if (!it(t1)) throw TypeError(t1 + " is not a symbol");
                if (u(J, t1)) return J[t1];
            },
            useSetter: function() {
                et = !0;
            },
            useSimple: function() {
                et = !1;
            }
        }), r2({
            target: "Object",
            stat: !0,
            forced: !s,
            sham: !a2
        }, {
            create: function(t1, e1) {
                return void 0 === e1 ? m(t1) : at(m(t1), e1);
            },
            defineProperty: ot,
            defineProperties: at,
            getOwnPropertyDescriptor: lt
        }), r2({
            target: "Object",
            stat: !0,
            forced: !s
        }, {
            getOwnPropertyNames: ut,
            getOwnPropertySymbols: ct
        }), r2({
            target: "Object",
            stat: !0,
            forced: l(function() {
                w.f(1);
            })
        }, {
            getOwnPropertySymbols: function(t1) {
                return w.f(h(t1));
            }
        }), H && r2({
            target: "JSON",
            stat: !0,
            forced: !s || l(function() {
                var t1 = j();
                return "[null]" != q([
                    t1
                ]) || "{}" != q({
                    a: t1
                }) || "{}" != q(Object(t1));
            })
        }, {
            stringify: function(t1) {
                for(var e1, n3, r3 = [
                    t1
                ], i2 = 1; arguments.length > i2;)r3.push(arguments[i2++]);
                if (n3 = e1 = r3[1], (d(e1) || void 0 !== t1) && !it(t1)) return c(e1) || (e1 = function(t2, e2) {
                    if ("function" == typeof n3 && (e2 = n3.call(this, t2, e2)), !it(e2)) return e2;
                }), r3[1] = e1, q.apply(H, r3);
            }
        }), j.prototype[V] || M(j.prototype, V, j.prototype.valueOf), L(j, "Symbol"), T[N] = !0;
    },
    function(t, e, n2) {
        var r2 = n2(7), i2 = n2(9), o = n2(8), a2 = n2(53);
        t.exports = r2 ? Object.defineProperties : function(t1, e1) {
            o(t1);
            for(var n3, r3 = a2(e1), s = r3.length, l = 0; s > l;)i2.f(t1, n3 = r3[l++], e1[n3]);
            return t1;
        };
    },
    function(t, e, n2) {
        var r2 = n2(37);
        t.exports = r2("document", "documentElement");
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(7), o = n2(0), a2 = n2(4), s = n2(5), l = n2(9).f, u = n2(43), c = o.Symbol;
        if (i2 && "function" == typeof c && (!("description" in c.prototype) || void 0 !== c().description)) {
            var d = {
            }, f = function() {
                var t1 = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]), e1 = this instanceof f ? new c(t1) : void 0 === t1 ? c() : c(t1);
                return "" === t1 && (d[e1] = !0), e1;
            };
            u(f, c);
            var h = f.prototype = c.prototype;
            h.constructor = f;
            var p = h.toString, g = "Symbol(test)" == String(c("test")), v = /^Symbol\((.*)\)[^)]+$/;
            l(h, "description", {
                configurable: !0,
                get: function() {
                    var t1 = s(this) ? this.valueOf() : this, e1 = p.call(t1);
                    if (a2(d, t1)) return "";
                    var n3 = g ? e1.slice(7, -1) : e1.replace(v, "$1");
                    return "" === n3 ? void 0 : n3;
                }
            }), r2({
                global: !0,
                forced: !0
            }, {
                Symbol: f
            });
        }
    },
    function(t, e, n2) {
        n2(66)("iterator");
    },
    function(t, e, n2) {
        var r2 = n2(15), i2 = n2(96), o = Object.prototype;
        i2 !== o.toString && r2(o, "toString", i2, {
            unsafe: !0
        });
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(52);
        r2({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== i2
        }, {
            exec: i2
        });
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(8);
        t.exports = function() {
            var t1 = r2(this), e1 = "";
            return t1.global && (e1 += "g"), t1.ignoreCase && (e1 += "i"), t1.multiline && (e1 += "m"), t1.dotAll && (e1 += "s"), t1.unicode && (e1 += "u"), t1.sticky && (e1 += "y"), e1;
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(70).charAt, i2 = n2(22), o = n2(67), a2 = i2.set, s = i2.getterFor("String Iterator");
        o(String, "String", function(t1) {
            a2(this, {
                type: "String Iterator",
                string: String(t1),
                index: 0
            });
        }, function() {
            var t1, e1 = s(this), n3 = e1.string, i3 = e1.index;
            return i3 >= n3.length ? {
                value: void 0,
                done: !0
            } : (t1 = r2(n3, i3), e1.index += t1.length, {
                value: t1,
                done: !1
            });
        });
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(6), i2 = n2(15), o = n2(1), a2 = n2(2), s = n2(52), l = a2("species"), u = !o(function() {
            var t1 = /./;
            return t1.exec = function() {
                var t2 = [];
                return t2.groups = {
                    a: "7"
                }, t2;
            }, "7" !== "".replace(t1, "$<a>");
        }), c = !o(function() {
            var t1 = /(?:)/, e1 = t1.exec;
            t1.exec = function() {
                return e1.apply(this, arguments);
            };
            var n3 = "ab".split(t1);
            return 2 !== n3.length || "a" !== n3[0] || "b" !== n3[1];
        });
        t.exports = function(t1, e1, n3, d) {
            var f = a2(t1), h = !o(function() {
                var e2 = {
                };
                return e2[f] = function() {
                    return 7;
                }, 7 != ""[t1](e2);
            }), p = h && !o(function() {
                var e2 = !1, n4 = /a/;
                return n4.exec = function() {
                    return e2 = !0, null;
                }, "split" === t1 && (n4.constructor = {
                }, n4.constructor[l] = function() {
                    return n4;
                }), n4[f](""), !e2;
            });
            if (!h || !p || "replace" === t1 && !u || "split" === t1 && !c) {
                var g = /./[f], v = n3(f, ""[t1], function(t2, e2, n4, r3, i3) {
                    return e2.exec === s ? h && !i3 ? {
                        done: !0,
                        value: g.call(e2, n4, r3)
                    } : {
                        done: !0,
                        value: t2.call(n4, e2, r3)
                    } : {
                        done: !1
                    };
                }), m = v[0], y = v[1];
                i2(String.prototype, t1, m), i2(RegExp.prototype, f, 2 == e1 ? function(t2, e2) {
                    return y.call(t2, this, e2);
                } : function(t2) {
                    return y.call(t2, this);
                }), d && r2(RegExp.prototype[f], "sham", !0);
            }
        };
    },
    function(t, e, n2) {
        var r2 = n2(18), i2 = n2(52);
        t.exports = function(t1, e1) {
            var n3 = t1.exec;
            if ("function" == typeof n3) {
                var o = n3.call(t1, e1);
                if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
                return o;
            }
            if ("RegExp" !== r2(t1)) throw TypeError("RegExp#exec called on incompatible receiver");
            return i2.call(t1, e1);
        };
    },
    function(t, e, n2) {
        var r2 = n2(0), i2 = n2(87), o = n2(54), a2 = n2(6), s = n2(2), l = s("iterator"), u = s("toStringTag"), c = o.values;
        for(var d in i2){
            var f = r2[d], h = f && f.prototype;
            if (h) {
                if (h[l] !== c) try {
                    a2(h, l, c);
                } catch (t1) {
                    h[l] = c;
                }
                if (h[u] || a2(h, u, d), i2[d]) {
                    for(var p in o)if (h[p] !== o[p]) try {
                        a2(h, p, o[p]);
                    } catch (t1) {
                        h[p] = o[p];
                    }
                }
            }
        }
    },
    function(t, e, n2) {
        var r2 = n2(13), i2 = "[" + n2(63) + "]", o = RegExp("^" + i2 + i2 + "*"), a2 = RegExp(i2 + i2 + "*$"), s = function(t1) {
            return function(e1) {
                var n3 = String(r2(e1));
                return 1 & t1 && (n3 = n3.replace(o, "")), 2 & t1 && (n3 = n3.replace(a2, "")), n3;
            };
        };
        t.exports = {
            start: s(1),
            end: s(2),
            trim: s(3)
        };
    },
    function(t, e, n2) {
        var r2 = n2(18), i2 = n2(2)("toStringTag"), o = "Arguments" == r2(function() {
            return arguments;
        }());
        t.exports = function(t1) {
            var e1, n3, a2;
            return void 0 === t1 ? "Undefined" : null === t1 ? "Null" : "string" == typeof (n3 = function(t2, e2) {
                try {
                    return t2[e2];
                } catch (t3) {
                }
            }(e1 = Object(t1), i2)) ? n3 : o ? r2(e1) : "Object" == (a2 = r2(e1)) && "function" == typeof e1.callee ? "Arguments" : a2;
        };
    },
    function(t, e, n2) {
        "use strict";
        var r2 = n2(70).charAt;
        t.exports = function(t1, e1, n3) {
            return e1 + (n3 ? r2(t1, e1).length : 1);
        };
    },
    function(t, e) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        };
    },
    function(t, e) {
        t.exports = function(t1) {
            if (!t1.webpackPolyfill) {
                var e1 = Object.create(t1);
                e1.children || (e1.children = []), Object.defineProperty(e1, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e1.l;
                    }
                }), Object.defineProperty(e1, "id", {
                    enumerable: !0,
                    get: function() {
                        return e1.i;
                    }
                }), Object.defineProperty(e1, "exports", {
                    enumerable: !0
                }), e1.webpackPolyfill = 1;
            }
            return e1;
        };
    },
    function(t, e2, n2) {
        var r2 = n2(5);
        t.exports = function(t1) {
            if (!r2(t1) && null !== t1) throw TypeError("Can't set " + String(t1) + " as a prototype");
            return t1;
        };
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(5), o = n2(30), a2 = n2(31), s = n2(11), l = n2(10), u = n2(58), c = n2(34), d = n2(2)("species"), f = [].slice, h = Math.max;
        r2({
            target: "Array",
            proto: !0,
            forced: !c("slice")
        }, {
            slice: function(t1, e3) {
                var n3, r3, c1, p = l(this), g = s(p.length), v = a2(t1, g), m = a2(void 0 === e3 ? g : e3, g);
                if (o(p) && ("function" != typeof (n3 = p.constructor) || n3 !== Array && !o(n3.prototype) ? i2(n3) && null === (n3 = n3[d]) && (n3 = void 0) : n3 = void 0, n3 === Array || void 0 === n3)) return f.call(p, v, m);
                for(r3 = new (void 0 === n3 ? Array : n3)(h(m - v, 0)), c1 = 0; v < m; v++, c1++)v in p && u(r3, c1, p[v]);
                return r3.length = c1, r3;
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(41).indexOf, o = n2(51), a2 = [].indexOf, s = !!a2 && 1 / [
            1
        ].indexOf(1, -0) < 0, l = o("indexOf");
        r2({
            target: "Array",
            proto: !0,
            forced: s || l
        }, {
            indexOf: function(t1) {
                return s ? a2.apply(this, arguments) || 0 : i2(this, t1, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    function(t, e2, n2) {
        var r2 = n2(10), i2 = n2(27).f, o = {
        }.toString, a2 = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t1) {
            return a2 && "[object Window]" == o.call(t1) ? (function(t2) {
                try {
                    return i2(t2);
                } catch (t3) {
                    return a2.slice();
                }
            })(t1) : i2(r2(t1));
        };
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(68).IteratorPrototype, i2 = n2(33), o = n2(17), a2 = n2(49), s = n2(48), l = function() {
            return this;
        };
        t.exports = function(t1, e3, n3) {
            var u = e3 + " Iterator";
            return t1.prototype = i2(r2, {
                next: o(1, n3)
            }), a2(t1, u, !1, !0), s[u] = l, t1;
        };
    },
    function(t, e2, n2) {
        var r2 = n2(1);
        t.exports = !r2(function() {
            function t1() {
            }
            return t1.prototype.constructor = null, Object.getPrototypeOf(new t1) !== t1.prototype;
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(25).map;
        r2({
            target: "Array",
            proto: !0,
            forced: !n2(34)("map")
        }, {
            map: function(t1) {
                return i2(this, t1, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(85), i2 = {
        };
        i2[n2(2)("toStringTag")] = "z", t.exports = "[object z]" !== String(i2) ? function() {
            return "[object " + r2(this) + "]";
        } : i2.toString;
    },
    function(t, e2, n2) {
        var r2 = n2(3), i2 = n2(102);
        r2({
            global: !0,
            forced: parseFloat != i2
        }, {
            parseFloat: i2
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(31), o = n2(12), a2 = n2(11), s = n2(16), l = n2(47), u = n2(58), c = n2(34), d = Math.max, f = Math.min;
        r2({
            target: "Array",
            proto: !0,
            forced: !c("splice")
        }, {
            splice: function(t1, e3) {
                var n3, r3, c1, h, p, g, v = s(this), m = a2(v.length), y = i2(t1, m), b = arguments.length;
                if (0 === b ? n3 = r3 = 0 : 1 === b ? (n3 = 0, r3 = m - y) : (n3 = b - 2, r3 = f(d(o(e3), 0), m - y)), m + n3 - r3 > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
                for(c1 = l(v, r3), h = 0; h < r3; h++)(p = y + h) in v && u(c1, h, v[p]);
                if (c1.length = r3, n3 < r3) {
                    for(h = y; h < m - r3; h++)g = h + n3, (p = h + r3) in v ? v[g] = v[p] : delete v[g];
                    for(h = m; h > m - r3 + n3; h--)delete v[h - 1];
                } else if (n3 > r3) for(h = m - r3; h > y; h--)g = h + n3 - 1, (p = h + r3 - 1) in v ? v[g] = v[p] : delete v[g];
                for(h = 0; h < n3; h++)v[h + y] = arguments[h + 2];
                return v.length = m - r3 + n3, c1;
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(81), i2 = n2(8), o = n2(16), a2 = n2(11), s = n2(12), l = n2(13), u = n2(86), c = n2(82), d = Math.max, f = Math.min, h = Math.floor, p = /\$([$&'`]|\d\d?|<[^>]*>)/g, g = /\$([$&'`]|\d\d?)/g;
        r2("replace", 2, function(t1, e3, n3) {
            return [
                function(n4, r3) {
                    var i3 = l(this), o1 = null == n4 ? void 0 : n4[t1];
                    return void 0 !== o1 ? o1.call(n4, i3, r3) : e3.call(String(i3), n4, r3);
                },
                function(t2, o1) {
                    var l1 = n3(e3, t2, this, o1);
                    if (l1.done) return l1.value;
                    var h1 = i2(t2), p1 = String(this), g1 = "function" == typeof o1;
                    g1 || (o1 = String(o1));
                    var v = h1.global;
                    if (v) {
                        var m = h1.unicode;
                        h1.lastIndex = 0;
                    }
                    for(var y = [];;){
                        var b = c(h1, p1);
                        if (null === b) break;
                        if (y.push(b), !v) break;
                        "" === String(b[0]) && (h1.lastIndex = u(p1, a2(h1.lastIndex), m));
                    }
                    for(var x, w = "", S = 0, k = 0; k < y.length; k++){
                        b = y[k];
                        for(var C = String(b[0]), M = d(f(s(b.index), p1.length), 0), A = [], P = 1; P < b.length; P++)A.push(void 0 === (x = b[P]) ? x : String(x));
                        var _ = b.groups;
                        if (g1) {
                            var T = [
                                C
                            ].concat(A, M, p1);
                            void 0 !== _ && T.push(_);
                            var I = String(o1.apply(void 0, T));
                        } else I = r3(C, p1, M, A, _, o1);
                        M >= S && (w += p1.slice(S, M) + I, S = M + C.length);
                    }
                    return w + p1.slice(S);
                }
            ];
            function r3(t2, n4, r4, i3, a3, s1) {
                var l1 = r4 + t2.length, u1 = i3.length, c1 = g;
                return void 0 !== a3 && (a3 = o(a3), c1 = p), e3.call(s1, c1, function(e4, o1) {
                    var s2;
                    switch(o1.charAt(0)){
                        case "$":
                            return "$";
                        case "&":
                            return t2;
                        case "`":
                            return n4.slice(0, r4);
                        case "'":
                            return n4.slice(l1);
                        case "<":
                            s2 = a3[o1.slice(1, -1)];
                            break;
                        default:
                            var c2 = +o1;
                            if (0 === c2) return e4;
                            if (c2 > u1) {
                                var d1 = h(c2 / 10);
                                return 0 === d1 ? e4 : d1 <= u1 ? void 0 === i3[d1 - 1] ? o1.charAt(1) : i3[d1 - 1] + o1.charAt(1) : e4;
                            }
                            s2 = i3[c2 - 1];
                    }
                    return void 0 === s2 ? "" : s2;
                });
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(32), o = n2(10), a2 = n2(51), s = [].join, l = i2 != Object, u = a2("join", ",");
        r2({
            target: "Array",
            proto: !0,
            forced: l || u
        }, {
            join: function(t1) {
                return s.call(o(this), void 0 === t1 ? "," : t1);
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(1), o = n2(30), a2 = n2(5), s = n2(16), l = n2(11), u = n2(58), c = n2(47), d2 = n2(34), f = n2(2)("isConcatSpreadable"), h = !i2(function() {
            var t1 = [];
            return t1[f] = !1, t1.concat()[0] !== t1;
        }), p = d2("concat"), g = function(t1) {
            if (!a2(t1)) return !1;
            var e3 = t1[f];
            return void 0 !== e3 ? !!e3 : o(t1);
        };
        r2({
            target: "Array",
            proto: !0,
            forced: !h || !p
        }, {
            concat: function(t1) {
                var e3, n3, r3, i3, o1, a3 = s(this), d3 = c(a3, 0), f1 = 0;
                for(e3 = -1, r3 = arguments.length; e3 < r3; e3++)if (o1 = -1 === e3 ? a3 : arguments[e3], g(o1)) {
                    if (f1 + (i3 = l(o1.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for(n3 = 0; n3 < i3; n3++, f1++)n3 in o1 && u(d3, f1, o1[n3]);
                } else {
                    if (f1 >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    u(d3, f1++, o1);
                }
                return d3.length = f1, d3;
            }
        });
    },
    function(t, e2, n2) {
        var r2 = n2(0), i2 = n2(84).trim, o = n2(63), a2 = r2.parseFloat, s = 1 / a2(o + "-0") != -1 / 0;
        t.exports = s ? function(t1) {
            var e3 = i2(String(t1)), n3 = a2(e3);
            return 0 === n3 && "-" == e3.charAt(0) ? -0 : n3;
        } : a2;
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(25).filter;
        r2({
            target: "Array",
            proto: !0,
            forced: !n2(34)("filter")
        }, {
            filter: function(t1) {
                return i2(this, t1, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    function(t, e2, n2) {
        var r2 = n2(8), i2 = n2(56), o = n2(2)("species");
        t.exports = function(t1, e3) {
            var n3, a2 = r2(t1).constructor;
            return void 0 === a2 || null == (n3 = r2(a2)[o]) ? e3 : i2(n3);
        };
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(25).forEach, i2 = n2(51);
        t.exports = i2("forEach") ? function(t1) {
            return r2(this, t1, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(25).find, o = n2(62), a2 = !0;
        "find" in [] && Array(1).find(function() {
            a2 = !1;
        }), r2({
            target: "Array",
            proto: !0,
            forced: a2
        }, {
            find: function(t1) {
                return i2(this, t1, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), o("find");
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(81), i2 = n2(114), o = n2(8), a2 = n2(13), s = n2(104), l = n2(86), u = n2(11), c = n2(82), d2 = n2(52), f = n2(1), h = [].push, p = Math.min, g = !f(function() {
            return !RegExp(4294967295, "y");
        });
        r2("split", 2, function(t1, e3, n3) {
            var r3;
            return r3 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t2, n4) {
                var r4 = String(a2(this)), o1 = void 0 === n4 ? 4294967295 : n4 >>> 0;
                if (0 === o1) return [];
                if (void 0 === t2) return [
                    r4
                ];
                if (!i2(t2)) return e3.call(r4, t2, o1);
                for(var s1, l1, u1, c1 = [], f1 = (t2.ignoreCase ? "i" : "") + (t2.multiline ? "m" : "") + (t2.unicode ? "u" : "") + (t2.sticky ? "y" : ""), p1 = 0, g1 = new RegExp(t2.source, f1 + "g"); (s1 = d2.call(g1, r4)) && !((l1 = g1.lastIndex) > p1 && (c1.push(r4.slice(p1, s1.index)), s1.length > 1 && s1.index < r4.length && h.apply(c1, s1.slice(1)), u1 = s1[0].length, p1 = l1, c1.length >= o1));)g1.lastIndex === s1.index && g1.lastIndex++;
                return p1 === r4.length ? !u1 && g1.test("") || c1.push("") : c1.push(r4.slice(p1)), c1.length > o1 ? c1.slice(0, o1) : c1;
            } : "0".split(void 0, 0).length ? function(t2, n4) {
                return void 0 === t2 && 0 === n4 ? [] : e3.call(this, t2, n4);
            } : e3, [
                function(e4, n4) {
                    var i3 = a2(this), o1 = null == e4 ? void 0 : e4[t1];
                    return void 0 !== o1 ? o1.call(e4, i3, n4) : r3.call(String(i3), e4, n4);
                },
                function(t2, i3) {
                    var a3 = n3(r3, t2, this, i3, r3 !== e3);
                    if (a3.done) return a3.value;
                    var d3 = o(t2), f1 = String(this), h1 = s(d3, RegExp), v = d3.unicode, m = (d3.ignoreCase ? "i" : "") + (d3.multiline ? "m" : "") + (d3.unicode ? "u" : "") + (g ? "y" : "g"), y = new h1(g ? d3 : "^(?:" + d3.source + ")", m), b = void 0 === i3 ? 4294967295 : i3 >>> 0;
                    if (0 === b) return [];
                    if (0 === f1.length) return null === c(y, f1) ? [
                        f1
                    ] : [];
                    for(var x = 0, w = 0, S = []; w < f1.length;){
                        y.lastIndex = g ? w : 0;
                        var k, C = c(y, g ? f1 : f1.slice(w));
                        if (null === C || (k = p(u(y.lastIndex + (g ? 0 : w)), f1.length)) === x) w = l(f1, w, v);
                        else {
                            if (S.push(f1.slice(x, w)), S.length === b) return S;
                            for(var M = 1; M <= C.length - 1; M++)if (S.push(C[M]), S.length === b) return S;
                            w = x = k;
                        }
                    }
                    return S.push(f1.slice(x)), S;
                }
            ];
        }, !g);
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(105);
        r2({
            target: "Array",
            proto: !0,
            forced: [].forEach != i2
        }, {
            forEach: i2
        });
    },
    function(t, e2, n2) {
        var r2 = n2(56), i2 = n2(16), o = n2(32), a2 = n2(11), s = function(t1) {
            return function(e3, n3, s1, l) {
                r2(n3);
                var u = i2(e3), c = o(u), d2 = a2(u.length), f = t1 ? d2 - 1 : 0, h = t1 ? -1 : 1;
                if (s1 < 2) for(;;){
                    if (f in c) {
                        l = c[f], f += h;
                        break;
                    }
                    if (f += h, t1 ? f < 0 : d2 <= f) throw TypeError("Reduce of empty array with no initial value");
                }
                for(; t1 ? f >= 0 : d2 > f; f += h)f in c && (l = n3(l, c[f], f, u));
                return l;
            };
        };
        t.exports = {
            left: s(!1),
            right: s(!0)
        };
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(7), i2 = n2(0), o = n2(50), a2 = n2(15), s = n2(4), l = n2(18), u = n2(111), c = n2(19), d2 = n2(1), f = n2(33), h = n2(27).f, p = n2(24).f, g = n2(9).f, v = n2(84).trim, m = i2.Number, y = m.prototype, b = "Number" == l(f(y)), x = function(t1) {
            var e3, n3, r3, i3, o1, a3, s1, l1, u1 = c(t1, !1);
            if ("string" == typeof u1 && u1.length > 2) {
                if (43 === (e3 = (u1 = v(u1)).charCodeAt(0)) || 45 === e3) {
                    if (88 === (n3 = u1.charCodeAt(2)) || 120 === n3) return NaN;
                } else if (48 === e3) {
                    switch(u1.charCodeAt(1)){
                        case 66:
                        case 98:
                            r3 = 2, i3 = 49;
                            break;
                        case 79:
                        case 111:
                            r3 = 8, i3 = 55;
                            break;
                        default:
                            return +u1;
                    }
                    for(a3 = (o1 = u1.slice(2)).length, s1 = 0; s1 < a3; s1++)if ((l1 = o1.charCodeAt(s1)) < 48 || l1 > i3) return NaN;
                    return parseInt(o1, r3);
                }
            }
            return +u1;
        };
        if (o("Number", !m(" 0o1") || !m("0b1") || m("+0x1"))) {
            for(var w, S = function(t1) {
                var e3 = arguments.length < 1 ? 0 : t1, n3 = this;
                return n3 instanceof S && (b ? d2(function() {
                    y.valueOf.call(n3);
                }) : "Number" != l(n3)) ? u(new m(x(e3)), n3, S) : x(e3);
            }, k = r2 ? h(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), C = 0; k.length > C; C++)s(m, w = k[C]) && !s(S, w) && g(S, w, p(m, w));
            S.prototype = y, y.constructor = S, a2(i2, "Number", S);
        }
    },
    function(t, e2, n2) {
        var r2 = n2(5), i2 = n2(69);
        t.exports = function(t1, e3, n3) {
            var o, a2;
            return i2 && "function" == typeof (o = e3.constructor) && o !== n3 && r2(a2 = o.prototype) && a2 !== n3.prototype && i2(t1, a2), t1;
        };
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(81), i2 = n2(8), o = n2(11), a2 = n2(13), s = n2(86), l = n2(82);
        r2("match", 1, function(t1, e3, n3) {
            return [
                function(e4) {
                    var n4 = a2(this), r3 = null == e4 ? void 0 : e4[t1];
                    return void 0 !== r3 ? r3.call(e4, n4) : new RegExp(e4)[t1](String(n4));
                },
                function(t2) {
                    var r3 = n3(e3, t2, this);
                    if (r3.done) return r3.value;
                    var a3 = i2(t2), u = String(this);
                    if (!a3.global) return l(a3, u);
                    var c = a3.unicode;
                    a3.lastIndex = 0;
                    for(var d2, f = [], h = 0; null !== (d2 = l(a3, u));){
                        var p = String(d2[0]);
                        f[h] = p, "" === p && (a3.lastIndex = s(u, o(a3.lastIndex), c)), h++;
                    }
                    return 0 === h ? null : f;
                }
            ];
        });
    },
    function(t, e2, n2) {
        var r2 = n2(0), i2 = n2(87), o = n2(105), a2 = n2(6);
        for(var s in i2){
            var l = r2[s], u = l && l.prototype;
            if (u && u.forEach !== o) try {
                a2(u, "forEach", o);
            } catch (t1) {
                u.forEach = o;
            }
        }
    },
    function(t, e2, n2) {
        var r2 = n2(5), i2 = n2(18), o = n2(2)("match");
        t.exports = function(t1) {
            var e3;
            return r2(t1) && (void 0 !== (e3 = t1[o]) ? !!e3 : "RegExp" == i2(t1));
        };
    },
    function(t, e2, n2) {
        var r2 = n2(15), i2 = Date.prototype, o = i2.toString, a2 = i2.getTime;
        new Date(NaN) + "" != "Invalid Date" && r2(i2, "toString", function() {
            var t1 = a2.call(this);
            return t1 == t1 ? o.call(this) : "Invalid Date";
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(12), o = n2(117), a2 = n2(118), s = n2(1), l = 1..toFixed, u = Math.floor, c = function(t1, e3, n3) {
            return 0 === e3 ? n3 : e3 % 2 == 1 ? c(t1, e3 - 1, n3 * t1) : c(t1 * t1, e3 / 2, n3);
        };
        r2({
            target: "Number",
            proto: !0,
            forced: l && ("0.000" !== 0.00008.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 1000000000000000100..toFixed(0)) || !s(function() {
                l.call({
                });
            })
        }, {
            toFixed: function(t1) {
                var e3, n3, r3, s1, l1 = o(this), d2 = i2(t1), f = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], h = "", p = "0", g = function(t2, e4) {
                    for(var n4 = -1, r4 = e4; ++n4 < 6;)r4 += t2 * f[n4], f[n4] = r4 % 10000000, r4 = u(r4 / 10000000);
                }, v = function(t2) {
                    for(var e4 = 6, n4 = 0; --e4 >= 0;)n4 += f[e4], f[e4] = u(n4 / t2), n4 = n4 % t2 * 10000000;
                }, m = function() {
                    for(var t2 = 6, e4 = ""; --t2 >= 0;)if ("" !== e4 || 0 === t2 || 0 !== f[t2]) {
                        var n4 = String(f[t2]);
                        e4 = "" === e4 ? n4 : e4 + a2.call("0", 7 - n4.length) + n4;
                    }
                    return e4;
                };
                if (d2 < 0 || d2 > 20) throw RangeError("Incorrect fraction digits");
                if (l1 != l1) return "NaN";
                if (l1 <= -1000000000000000000000 || l1 >= 1000000000000000000000) return String(l1);
                if (l1 < 0 && (h = "-", l1 = -l1), l1 > 0.000000000000000000001) if (n3 = (e3 = (function(t2) {
                    for(var e4 = 0, n5 = t2; n5 >= 4096;)e4 += 12, n5 /= 4096;
                    for(; n5 >= 2;)e4 += 1, n5 /= 2;
                    return e4;
                })(l1 * c(2, 69, 1)) - 69) < 0 ? l1 * c(2, -e3, 1) : l1 / c(2, e3, 1), n3 *= 4503599627370496, (e3 = 52 - e3) > 0) {
                    for(g(0, n3), r3 = d2; r3 >= 7;)g(10000000, 0), r3 -= 7;
                    for(g(c(10, r3, 1), 0), r3 = e3 - 1; r3 >= 23;)v(1 << 23), r3 -= 23;
                    v(1 << r3), g(1, 1), v(2), p = m();
                } else g(0, n3), g(1 << -e3, 0), p = m() + a2.call("0", d2);
                return p = d2 > 0 ? h + ((s1 = p.length) <= d2 ? "0." + a2.call("0", d2 - s1) + p : p.slice(0, s1 - d2) + "." + p.slice(s1 - d2)) : h + p;
            }
        });
    },
    function(t, e2, n2) {
        var r2 = n2(18);
        t.exports = function(t1) {
            if ("number" != typeof t1 && "Number" != r2(t1)) throw TypeError("Incorrect invocation");
            return +t1;
        };
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(12), i2 = n2(13);
        t.exports = "".repeat || function(t1) {
            var e3 = String(i2(this)), n3 = "", o = r2(t1);
            if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
            for(; o > 0; (o >>>= 1) && (e3 += e3))1 & o && (n3 += e3);
            return n3;
        };
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(15), i2 = n2(8), o = n2(1), a2 = n2(79), s = RegExp.prototype, l = s.toString, u = o(function() {
            return "/a/b" != l.call({
                source: "a",
                flags: "b"
            });
        }), c = "toString" != l.name;
        (u || c) && r2(RegExp.prototype, "toString", function() {
            var t1 = i2(this), e3 = String(t1.source), n3 = t1.flags;
            return "/" + e3 + "/" + String(void 0 === n3 && t1 instanceof RegExp && !("flags" in s) ? a2.call(t1) : n3);
        }, {
            unsafe: !0
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(109).left;
        r2({
            target: "Array",
            proto: !0,
            forced: n2(51)("reduce")
        }, {
            reduce: function(t1) {
                return i2(this, t1, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(30), o = [].reverse, a2 = [
            1,
            2
        ];
        r2({
            target: "Array",
            proto: !0,
            forced: String(a2) === String(a2.reverse())
        }, {
            reverse: function() {
                return i2(this) && (this.length = this.length), o.call(this);
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(3), i2 = n2(56), o = n2(16), a2 = n2(1), s = n2(51), l = [].sort, u = [
            1,
            2,
            3
        ], c = a2(function() {
            u.sort(void 0);
        }), d2 = a2(function() {
            u.sort(null);
        }), f = s("sort");
        r2({
            target: "Array",
            proto: !0,
            forced: c || !d2 || f
        }, {
            sort: function(t1) {
                return void 0 === t1 ? l.call(o(this)) : l.call(o(this), i2(t1));
            }
        });
    },
    function(t, e2, n2) {
        var r2 = n2(3), i2 = n2(129);
        r2({
            global: !0,
            forced: parseInt != i2
        }, {
            parseInt: i2
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(37), i2 = n2(9), o = n2(2), a2 = n2(7), s = o("species");
        t.exports = function(t1) {
            var e3 = r2(t1), n3 = i2.f;
            a2 && e3 && !e3[s] && n3(e3, s, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    ,
    ,
    function(t, e2, n2) {
        var r2 = n2(7), i2 = n2(9).f, o = Function.prototype, a2 = o.toString, s = /^\s*function ([^ (]*)/;
        !r2 || "name" in o || i2(o, "name", {
            configurable: !0,
            get: function() {
                try {
                    return a2.call(this).match(s)[1];
                } catch (t1) {
                    return "";
                }
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(16), i2 = n2(31), o = n2(11);
        t.exports = function(t1) {
            for(var e3 = r2(this), n3 = o(e3.length), a2 = arguments.length, s = i2(a2 > 1 ? arguments[1] : void 0, n3), l = a2 > 2 ? arguments[2] : void 0, u = void 0 === l ? n3 : i2(l, n3); u > s;)e3[s++] = t1;
            return e3;
        };
    },
    function(t, e2, n2) {
        var r2 = n2(0), i2 = n2(84).trim, o = n2(63), a2 = r2.parseInt, s = /^[+-]?0[Xx]/, l = 8 !== a2(o + "08") || 22 !== a2(o + "0x16");
        t.exports = l ? function(t1, e3) {
            var n3 = i2(String(t1));
            return a2(n3, e3 >>> 0 || (s.test(n3) ? 16 : 10));
        } : a2;
    },
    function(t, e2, n2) {
        var r2 = n2(7), i2 = n2(0), o = n2(50), a2 = n2(111), s = n2(9).f, l = n2(27).f, u = n2(114), c = n2(79), d2 = n2(15), f = n2(1), h = n2(124), p = n2(2)("match"), g = i2.RegExp, v = g.prototype, m = /a/g, y = /a/g, b = new g(m) !== m;
        if (r2 && o("RegExp", !b || f(function() {
            return y[p] = !1, g(m) != m || g(y) == y || "/a/i" != g(m, "i");
        }))) {
            for(var x = function(t1, e3) {
                var n3 = this instanceof x, r3 = u(t1), i3 = void 0 === e3;
                return !n3 && r3 && t1.constructor === x && i3 ? t1 : a2(b ? new g(r3 && !i3 ? t1.source : t1, e3) : g((r3 = t1 instanceof x) ? t1.source : t1, r3 && i3 ? c.call(t1) : e3), n3 ? this : v, x);
            }, w = function(t1) {
                (t1 in x) || s(x, t1, {
                    configurable: !0,
                    get: function() {
                        return g[t1];
                    },
                    set: function(e3) {
                        g[t1] = e3;
                    }
                });
            }, S = l(g), k = 0; S.length > k;)w(S[k++]);
            v.constructor = x, x.prototype = v, d2(i2, "RegExp", x);
        }
        h("RegExp");
    },
    function(t, e2, n2) {
        "use strict";
        var r2 = n2(10), i2 = n2(12), o = n2(11), a2 = n2(51), s = Math.min, l = [].lastIndexOf, u = !!l && 1 / [
            1
        ].lastIndexOf(1, -0) < 0, c = a2("lastIndexOf");
        t.exports = u || c ? function(t1) {
            if (u) return l.apply(this, arguments) || 0;
            var e3 = r2(this), n3 = o(e3.length), a3 = n3 - 1;
            for(arguments.length > 1 && (a3 = s(a3, i2(arguments[1]))), a3 < 0 && (a3 = n3 + a3); a3 >= 0; a3--)if (a3 in e3 && e3[a3] === t1) return a3 || 0;
            return -1;
        } : l;
    },
    function(t, e2, n2) {
        "use strict";
        n2.r(e2);
        n2(106), n2(100), n2(95), n2(110), n2(78), n2(99);
        !function(t1) {
            var e3, n3, r2 = "".concat([
                "text",
                "password",
                "email",
                "url",
                "tel",
                "number",
                "search",
                "search-md"
            ].map(function(t2) {
                return "input[type=".concat(t2, "]");
            }).join(", "), ", textarea"), i2 = function(t2) {
                var e4 = t2.siblings("label, i"), n5 = t2.val().length, r3 = t2.attr("placeholder");
                e4["".concat(n5 || r3 ? "add" : "remove", "Class")]("active");
            }, o = function(t2) {
                if (t2.hasClass("validate")) {
                    var e4 = t2.val(), n5 = !e4.length, r3 = !t2[0].validity.badInput;
                    if (n5 && r3) t2.removeClass("valid").removeClass("invalid");
                    else {
                        var i3 = t2.is(":valid"), o1 = Number(t2.attr("length")) || 0;
                        i3 && (!o1 || o1 > e4.length) ? t2.removeClass("invalid").addClass("valid") : t2.removeClass("valid").addClass("invalid");
                    }
                }
            }, a2 = function() {
                var e5 = t1(void 0);
                if (e5.val().length) {
                    var n6 = t1(".hiddendiv"), r4 = e5.css("font-family"), i4 = e5.css("font-size");
                    i4 && n6.css("font-size", i4), r4 && n6.css("font-family", r4), "off" === e5.attr("wrap") && n6.css("overflow-wrap", "normal").css("white-space", "pre"), n6.text("".concat(e5.val(), "\n"));
                    var o2 = n6.html().replace(/\n/g, "<br>");
                    n6.html(o2), n6.css("width", e5.is(":visible") ? e5.width() : t1(window).width() / 2), e5.css("height", n6.height());
                }
            };
            t1(r2).each(function(e5, n7) {
                var r5 = t1(n7), o3 = r5.siblings("label, i");
                i2(r5), n7.validity.badInput && o3.addClass("active");
            }), t1(document).on("focus", r2, function(e5) {
                t1(e5.target).siblings("label, i").addClass("active");
            }), t1(document).on("blur", r2, function(e5) {
                var n7 = t1(e5.target), r5 = !n7.val(), i5 = !e5.target.validity.badInput, a3 = void 0 === n7.attr("placeholder");
                r5 && i5 && a3 && n7.siblings("label, i").removeClass("active"), o(n7);
            }), t1(document).on("change", r2, function(e5) {
                var n7 = t1(e5.target);
                i2(n7), o(n7);
            }), t1("input[autofocus]").siblings("label, i").addClass("active"), t1(document).on("reset", function(e5) {
                var n7 = t1(e5.target);
                n7.is("form") && (n7.find(r2).removeClass("valid").removeClass("invalid").each(function(e6, n8) {
                    var r5 = t1(n8), i5 = !r5.val(), o3 = !r5.attr("placeholder");
                    i5 && o3 && r5.siblings("label, i").removeClass("active");
                }), n7.find("select.initialized").each(function(e6, n8) {
                    var r5 = t1(n8), i5 = r5.siblings("input.select-dropdown"), o3 = r5.children("[selected]").val();
                    r5.val(o3), i5.val(o3);
                }));
            }), (n3 = t1(".md-textarea-auto")).length && (e3 = window.attachEvent ? function(t2, e5, n7) {
                t2.attachEvent("on".concat(e5), n7);
            } : function(t2, e5, n7) {
                t2.addEventListener(e5, n7, !1);
            }, n3.each(function() {
                var t2 = this;
                function n7() {
                    t2.style.height = "auto", t2.style.height = "".concat(t2.scrollHeight, "px");
                }
                function r5() {
                    window.setTimeout(n7, 0);
                }
                e3(t2, "change", n7), e3(t2, "cut", r5), e3(t2, "paste", r5), e3(t2, "drop", r5), e3(t2, "keydown", r5), n7();
            }));
            var s = t1("body");
            if (!t1(".hiddendiv").first().length) {
                var l = t1('<div class="hiddendiv common"></div>');
                s.append(l);
            }
            t1(".materialize-textarea").each(a2), s.on("keyup keydown", ".materialize-textarea", a2);
            var u = t1('input[type="date"]');
            u.each(function(t2, e5) {
                e5.type = "text";
            }), u.on("focus", function(t2) {
                t2.target.type = "date";
            }), u.on("blur", function(e5) {
                e5.target.type = "text", t1("label[for=".concat(e5.target.id, "]")).removeClass("active");
            });
        }(jQuery);
    },
    function(t, e2) {
        !function(t1) {
            t1(window).on("scroll", function() {
                var e3 = t1(".navbar");
                e3.length && (e3.offset().top > 50 ? t1(".scrolling-navbar").addClass("top-nav-collapse") : t1(".scrolling-navbar").removeClass("top-nav-collapse"));
            });
        }(jQuery);
    },
    function(t, e2, n2) {
        "use strict";
        n2.r(e2);
        n2(106);
        !function(t1) {
            t1.fn.mdbTreeview = function() {
                var e3 = t1(this);
                if (e3.hasClass("treeview")) {
                    var n3 = e3.find(".rotate");
                    t1.each(n3, function(e5) {
                        t1(n3[e5]).off("click"), t1(n3[e5]).on("click", function() {
                            var e6 = t1(this);
                            e6.siblings(".nested").toggleClass("active"), e6.toggleClass("down");
                        });
                    });
                }
                if (e3.hasClass("treeview-animated")) {
                    var r2 = e3.find(".treeview-animated-element"), i2 = e3.find(".closed");
                    e3.find(".nested").hide(), i2.off("click"), i2.on("click", function() {
                        var e5 = t1(this), n7 = e5.siblings(".nested"), r5 = e5.children(".fa-angle-right");
                        return e5.toggleClass("open"), r5.toggleClass("down"), n7.hasClass("active") ? n7.removeClass("active").slideUp() : n7.addClass("active").slideDown(), !1;
                    }), r2.off("click"), r2.on("click", function() {
                        var e5 = t1(this);
                        e5.hasClass("opened") ? e5.removeClass("opened") : (r2.removeClass("opened"), e5.addClass("opened"));
                    });
                }
                if (e3.hasClass("treeview-colorful")) {
                    var o3 = e3.find(".treeview-colorful-element"), a2 = e3.find(".treeview-colorful-items-header");
                    e3.find(".nested").hide(), a2.off("click"), a2.on("click", function() {
                        var e5 = t1(this), n7 = e5.siblings(".nested"), r5 = e5.children(".fa-plus-circle"), i5 = e5.children(".fa-minus-circle");
                        e5.toggleClass("open"), r5.removeClass("fa-plus-circle"), r5.addClass("fa-minus-circle"), i5.removeClass("fa-minus-circle"), i5.addClass("fa-plus-circle"), n7.hasClass("active") ? n7.removeClass("active").slideUp() : n7.addClass("active").slideDown();
                    }), o3.off("click"), o3.on("click", function() {
                        var e5 = t1(this);
                        e5.hasClass("opened") ? o3.removeClass("opened") : (o3.removeClass("opened"), e5.addClass("opened"));
                    });
                }
            };
        }(jQuery);
    },
    function(t, e2, n2) {
        "use strict";
        n2.r(e2);
        var r5;
        n2(90), n2(97);
        !function(t1) {
            r5 = function() {
                return {
                    init: function() {
                        var e3 = [], n7 = 1;
                        function r6() {
                            var n8 = window.innerHeight, r7 = window.scrollY;
                            t1(".wow").each(function() {
                                if ("visible" != t1(this).css("visibility") && (n8 + r7 - 100 > i5(this) && r7 < i5(this) || n8 + r7 - 100 > i5(this) + t1(this).height() && r7 < i5(this) + t1(this).height() || n8 + r7 == t1(document).height() && i5(this) + 100 > t1(document).height())) {
                                    var o4 = t1(this).index(".wow"), a3 = t1(this).attr("data-wow-delay");
                                    if (a3) {
                                        a3 = t1(this).attr("data-wow-delay").slice(0, -1);
                                        var s = this;
                                        parseFloat(a3);
                                        t1(s).addClass("animated"), t1(s).css({
                                            visibility: "visible"
                                        }), t1(s).css({
                                            "animation-delay": a3
                                        }), t1(s).css({
                                            "animation-name": e3[o4]
                                        });
                                        var l = 1000 * t1(this).css("animation-duration").slice(0, -1);
                                        t1(this).attr("data-wow-delay") && (l += 1000 * t1(this).attr("data-wow-delay").slice(0, -1));
                                        s = this;
                                        setTimeout(function() {
                                            t1(s).removeClass("animated");
                                        }, l);
                                    } else {
                                        t1(this).addClass("animated"), t1(this).css({
                                            visibility: "visible"
                                        }), t1(this).css({
                                            "animation-name": e3[o4]
                                        });
                                        l = 1000 * t1(this).css("animation-duration").slice(0, -1), s = this;
                                        setTimeout(function() {
                                            t1(s).removeClass("animated");
                                        }, l);
                                    }
                                }
                            });
                        }
                        function i5(t2) {
                            var e5 = t2.getBoundingClientRect(), n8 = document.body, r7 = document.documentElement, i6 = window.pageYOffset || r7.scrollTop || n8.scrollTop, o5 = r7.clientTop || n8.clientTop || 0, a4 = e5.top + i6 - o5;
                            return Math.round(a4);
                        }
                        t1(".wow").each(function() {
                            t1(this).css({
                                visibility: "hidden"
                            }), e3[t1(this).index(".wow")] = t1(this).css("animation-name"), t1(this).css({
                                "animation-name": "none"
                            });
                        }), t1(window).scroll(function() {
                            var e5, o5;
                            n7 ? (e5 = window.innerHeight, o5 = window.scrollY, t1(".wow.animated").each(function() {
                                if (e5 + o5 - 100 > i5(this) && o5 > i5(this) + 100 || e5 + o5 - 100 < i5(this) && o5 < i5(this) + 100 || i5(this) + t1(this).height > t1(document).height() - 100) t1(this).removeClass("animated"), t1(this).css({
                                    "animation-name": "none"
                                }), t1(this).css({
                                    visibility: "hidden"
                                });
                                else {
                                    var n8 = 1000 * t1(this).css("animation-duration").slice(0, -1);
                                    t1(this).attr("data-wow-delay") && (n8 += 1000 * t1(this).attr("data-wow-delay").slice(0, -1));
                                    var r7 = this;
                                    setTimeout(function() {
                                        t1(r7).removeClass("animated");
                                    }, n8);
                                }
                            }), r6(), n7--) : r6();
                        }), t1(".wow").each(function() {
                            var n9 = t1(this).index(".wow"), r8 = t1(this).attr("data-wow-delay");
                            r8 ? (r8 = t1(this).attr("data-wow-delay").slice(0, -1), parseFloat(r8), t1(this).addClass("animated"), t1(this).css({
                                visibility: "visible"
                            }), t1(this).css({
                                "animation-delay": r8 + "s"
                            }), t1(this).css({
                                "animation-name": e3[n9]
                            })) : (t1(this).addClass("animated"), t1(this).css({
                                visibility: "visible"
                            }), t1(this).css({
                                "animation-name": e3[n9]
                            }));
                        });
                    }
                };
            };
        }(jQuery), window.WOW = r5;
    },
    ,
    ,
    function(t, e2, n2) {
        var r5 = n2(3), i5 = n2(128), o5 = n2(62);
        r5({
            target: "Array",
            proto: !0
        }, {
            fill: i5
        }), o5("fill");
    },
    function(t, e2, n2) {
        n2(3)({
            target: "Number",
            stat: !0
        }, {
            MAX_SAFE_INTEGER: 9007199254740991
        });
    },
    function(t, e2, n2) {
        n2(3)({
            target: "Number",
            stat: !0
        }, {
            MIN_SAFE_INTEGER: -9007199254740991
        });
    },
    function(t, e2, n2) {
        var r5 = n2(3), i5 = n2(16), o5 = n2(53);
        r5({
            target: "Object",
            stat: !0,
            forced: n2(1)(function() {
                o5(1);
            })
        }, {
            keys: function(t1) {
                return o5(i5(t1));
            }
        });
    },
    function(t, e2, n2) {
        "use strict";
        var r5 = n2(0), i5 = n2(7), o5 = n2(40).NATIVE_ARRAY_BUFFER, a4 = n2(6), s = n2(165), l = n2(1), u = n2(143), c = n2(12), d2 = n2(11), f = n2(144), h = n2(27).f, p = n2(9).f, g = n2(128), v = n2(49), m = n2(22), y = m.get, b = m.set, x = r5.ArrayBuffer, w = x, S = r5.DataView, k = r5.Math, C = r5.RangeError, M = k.abs, A = k.pow, P = k.floor, _ = k.log, T = k.LN2, I = function(t1, e3, n7) {
            var r6, i6, o6, a5 = new Array(n7), s1 = 8 * n7 - e3 - 1, l1 = (1 << s1) - 1, u1 = l1 >> 1, c1 = 23 === e3 ? A(2, -24) - A(2, -77) : 0, d3 = t1 < 0 || 0 === t1 && 1 / t1 < 0 ? 1 : 0, f1 = 0;
            for((t1 = M(t1)) != t1 || t1 === 1 / 0 ? (i6 = t1 != t1 ? 1 : 0, r6 = l1) : (r6 = P(_(t1) / T), t1 * (o6 = A(2, -r6)) < 1 && (r6--, o6 *= 2), (t1 += r6 + u1 >= 1 ? c1 / o6 : c1 * A(2, 1 - u1)) * o6 >= 2 && (r6++, o6 /= 2), r6 + u1 >= l1 ? (i6 = 0, r6 = l1) : r6 + u1 >= 1 ? (i6 = (t1 * o6 - 1) * A(2, e3), r6 += u1) : (i6 = t1 * A(2, u1 - 1) * A(2, e3), r6 = 0)); e3 >= 8; a5[f1++] = 255 & i6, i6 /= 256, e3 -= 8);
            for(r6 = r6 << e3 | i6, s1 += e3; s1 > 0; a5[f1++] = 255 & r6, r6 /= 256, s1 -= 8);
            return a5[--f1] |= 128 * d3, a5;
        }, O = function(t1, e3) {
            var n7, r6 = t1.length, i6 = 8 * r6 - e3 - 1, o6 = (1 << i6) - 1, a5 = o6 >> 1, s1 = i6 - 7, l1 = r6 - 1, u1 = t1[l1--], c1 = 127 & u1;
            for(u1 >>= 7; s1 > 0; c1 = 256 * c1 + t1[l1], l1--, s1 -= 8);
            for(n7 = c1 & (1 << -s1) - 1, c1 >>= -s1, s1 += e3; s1 > 0; n7 = 256 * n7 + t1[l1], l1--, s1 -= 8);
            if (0 === c1) c1 = 1 - a5;
            else {
                if (c1 === o6) return n7 ? NaN : u1 ? -1 / 0 : 1 / 0;
                n7 += A(2, e3), c1 -= a5;
            }
            return (u1 ? -1 : 1) * n7 * A(2, c1 - e3);
        }, F = function(t1) {
            return t1[3] << 24 | t1[2] << 16 | t1[1] << 8 | t1[0];
        }, D = function(t1) {
            return [
                255 & t1
            ];
        }, L = function(t1) {
            return [
                255 & t1,
                t1 >> 8 & 255
            ];
        }, E = function(t1) {
            return [
                255 & t1,
                t1 >> 8 & 255,
                t1 >> 16 & 255,
                t1 >> 24 & 255
            ];
        }, R = function(t1) {
            return I(t1, 23, 4);
        }, N = function(t1) {
            return I(t1, 52, 8);
        }, V = function(t1, e3) {
            p(t1.prototype, e3, {
                get: function() {
                    return y(this)[e3];
                }
            });
        }, z = function(t1, e3, n7, r6) {
            var i6 = f(+n7), o6 = y(t1);
            if (i6 + e3 > o6.byteLength) throw C("Wrong index");
            var a5 = y(o6.buffer).bytes, s1 = i6 + o6.byteOffset, l1 = a5.slice(s1, s1 + e3);
            return r6 ? l1 : l1.reverse();
        }, B = function(t1, e3, n7, r6, i6, o6) {
            var a5 = f(+n7), s1 = y(t1);
            if (a5 + e3 > s1.byteLength) throw C("Wrong index");
            for(var l1 = y(s1.buffer).bytes, u1 = a5 + s1.byteOffset, c1 = r6(+i6), d3 = 0; d3 < e3; d3++)l1[u1 + d3] = c1[o6 ? d3 : e3 - d3 - 1];
        };
        if (o5) {
            if (!l(function() {
                x(1);
            }) || !l(function() {
                new x(-1);
            }) || l(function() {
                return new x, new x(1.5), new x(NaN), "ArrayBuffer" != x.name;
            })) {
                for(var W, j = (w = function(t1) {
                    return u(this, w), new x(f(t1));
                }).prototype = x.prototype, H = h(x), q = 0; H.length > q;)(W = H[q++]) in w || a4(w, W, x[W]);
                j.constructor = w;
            }
            var U = new S(new w(2)), Y = S.prototype.setInt8;
            U.setInt8(0, 2147483648), U.setInt8(1, 2147483649), !U.getInt8(0) && U.getInt8(1) || s(S.prototype, {
                setInt8: function(t1, e3) {
                    Y.call(this, t1, e3 << 24 >> 24);
                },
                setUint8: function(t1, e3) {
                    Y.call(this, t1, e3 << 24 >> 24);
                }
            }, {
                unsafe: !0
            });
        } else w = function(t1) {
            u(this, w, "ArrayBuffer");
            var e3 = f(t1);
            b(this, {
                bytes: g.call(new Array(e3), 0),
                byteLength: e3
            }), i5 || (this.byteLength = e3);
        }, S = function(t1, e3, n7) {
            u(this, S, "DataView"), u(t1, w, "DataView");
            var r6 = y(t1).byteLength, o6 = c(e3);
            if (o6 < 0 || o6 > r6) throw C("Wrong offset");
            if (o6 + (n7 = void 0 === n7 ? r6 - o6 : d2(n7)) > r6) throw C("Wrong length");
            b(this, {
                buffer: t1,
                byteLength: n7,
                byteOffset: o6
            }), i5 || (this.buffer = t1, this.byteLength = n7, this.byteOffset = o6);
        }, i5 && (V(w, "byteLength"), V(S, "buffer"), V(S, "byteLength"), V(S, "byteOffset")), s(S.prototype, {
            getInt8: function(t1) {
                return z(this, 1, t1)[0] << 24 >> 24;
            },
            getUint8: function(t1) {
                return z(this, 1, t1)[0];
            },
            getInt16: function(t1) {
                var e3 = z(this, 2, t1, arguments.length > 1 ? arguments[1] : void 0);
                return (e3[1] << 8 | e3[0]) << 16 >> 16;
            },
            getUint16: function(t1) {
                var e3 = z(this, 2, t1, arguments.length > 1 ? arguments[1] : void 0);
                return e3[1] << 8 | e3[0];
            },
            getInt32: function(t1) {
                return F(z(this, 4, t1, arguments.length > 1 ? arguments[1] : void 0));
            },
            getUint32: function(t1) {
                return F(z(this, 4, t1, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
            },
            getFloat32: function(t1) {
                return O(z(this, 4, t1, arguments.length > 1 ? arguments[1] : void 0), 23);
            },
            getFloat64: function(t1) {
                return O(z(this, 8, t1, arguments.length > 1 ? arguments[1] : void 0), 52);
            },
            setInt8: function(t1, e3) {
                B(this, 1, t1, D, e3);
            },
            setUint8: function(t1, e3) {
                B(this, 1, t1, D, e3);
            },
            setInt16: function(t1, e3) {
                B(this, 2, t1, L, e3, arguments.length > 2 ? arguments[2] : void 0);
            },
            setUint16: function(t1, e3) {
                B(this, 2, t1, L, e3, arguments.length > 2 ? arguments[2] : void 0);
            },
            setInt32: function(t1, e3) {
                B(this, 4, t1, E, e3, arguments.length > 2 ? arguments[2] : void 0);
            },
            setUint32: function(t1, e3) {
                B(this, 4, t1, E, e3, arguments.length > 2 ? arguments[2] : void 0);
            },
            setFloat32: function(t1, e3) {
                B(this, 4, t1, R, e3, arguments.length > 2 ? arguments[2] : void 0);
            },
            setFloat64: function(t1, e3) {
                B(this, 8, t1, N, e3, arguments.length > 2 ? arguments[2] : void 0);
            }
        });
        v(w, "ArrayBuffer"), v(S, "DataView"), t.exports = {
            ArrayBuffer: w,
            DataView: S
        };
    },
    function(t, e2) {
        t.exports = function(t1, e3, n2) {
            if (!(t1 instanceof e3)) throw TypeError("Incorrect " + (n2 ? n2 + " " : "") + "invocation");
            return t1;
        };
    },
    function(t, e2, n2) {
        var r5 = n2(12), i5 = n2(11);
        t.exports = function(t1) {
            if (void 0 === t1) return 0;
            var e3 = r5(t1), n7 = i5(e3);
            if (e3 !== n7) throw RangeError("Wrong length or index");
            return n7;
        };
    },
    function(t, e2, n2) {
        var r5 = n2(170);
        t.exports = function(t1, e3) {
            var n7 = r5(t1);
            if (n7 % e3) throw RangeError("Wrong offset");
            return n7;
        };
    },
    function(t, e2, n2) {
        n2(147), t.exports = n2(148);
    },
    function(t, e2, n2) {
    },
    function(t, e2, n2) {
        "use strict";
        n2.r(e2);
        n2(149), n2(150), n2(156), n2(161), n2(162), n2(163), n2(198), n2(132), n2(133), n2(134), n2(135);
    },
    function(t, e2, n2) {
        "use strict";
        (function(t1) {
            var e3, r5;
            n2(72), n2(75), n2(76), n2(103), n2(91), n2(54), n2(100), n2(95), n2(90), n2(127), n2(77), n2(78), n2(80), n2(107), n2(83);
            function i5(t2) {
                return (i5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
                    return typeof t3;
                } : function(t3) {
                    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
                })(t2);
            }
            /*!
         * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
         * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
         * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
         */ e3 = void 0, r5 = function() {
                var t2 = {
                    CUSTOMFILE: '.custom-file input[type="file"]',
                    CUSTOMFILELABEL: ".custom-file-label",
                    FORM: "form",
                    INPUT: "input"
                }, e5 = function(e6) {
                    var n7 = "", r6 = e6.parentNode.querySelector(t2.CUSTOMFILELABEL);
                    return r6 && (n7 = r6.innerHTML), n7;
                }, n7 = function(t3) {
                    if (t3.childNodes.length > 0) for(var e6 = [].slice.call(t3.childNodes), n9 = 0; n9 < e6.length; n9++){
                        var r6 = e6[n9];
                        if (3 !== r6.nodeType) return r6;
                    }
                    return t3;
                }, r8 = function(e6) {
                    var r9 = e6.bsCustomFileInput.defaultText, i6 = e6.parentNode.querySelector(t2.CUSTOMFILELABEL);
                    i6 && (n7(i6).innerHTML = r9);
                }, i6 = !!window.File, o5 = function(t3) {
                    if (t3.hasAttribute("multiple") && i6) return [].slice.call(t3.files).map(function(t4) {
                        return t4.name;
                    }).join(", ");
                    if (-1 !== t3.value.indexOf("fakepath")) {
                        var e6 = t3.value.split("\\");
                        return e6[e6.length - 1];
                    }
                    return t3.value;
                };
                function a4() {
                    var e7 = this.parentNode.querySelector(t2.CUSTOMFILELABEL);
                    if (e7) {
                        var i7 = n7(e7), a5 = o5(this);
                        a5.length ? i7.innerHTML = a5 : r8(this);
                    }
                }
                function s() {
                    for(var e7 = [].slice.call(this.querySelectorAll(t2.INPUT)).filter(function(t3) {
                        return !!t3.bsCustomFileInput;
                    }), n9 = 0, i8 = e7.length; n9 < i8; n9++)r8(e7[n9]);
                }
                var l = "reset", u = "change";
                return {
                    init: function(n9, r9) {
                        void 0 === n9 && (n9 = t2.CUSTOMFILE), void 0 === r9 && (r9 = t2.FORM);
                        for(var i8 = [].slice.call(document.querySelectorAll(n9)), o6 = [].slice.call(document.querySelectorAll(r9)), c = 0, d2 = i8.length; c < d2; c++){
                            var f = i8[c];
                            Object.defineProperty(f, "bsCustomFileInput", {
                                value: {
                                    defaultText: e5(f)
                                },
                                writable: !0
                            }), a4.call(f), f.addEventListener(u, a4);
                        }
                        for(var h = 0, p = o6.length; h < p; h++)o6[h].addEventListener(l, s), Object.defineProperty(o6[h], "bsCustomFileInput", {
                            value: !0,
                            writable: !0
                        });
                    },
                    destroy: function() {
                        for(var e7 = [].slice.call(document.querySelectorAll(t2.FORM)).filter(function(t3) {
                            return !!t3.bsCustomFileInput;
                        }), n9 = [].slice.call(document.querySelectorAll(t2.INPUT)).filter(function(t3) {
                            return !!t3.bsCustomFileInput;
                        }), i8 = 0, o6 = n9.length; i8 < o6; i8++){
                            var c = n9[i8];
                            r8(c), c.bsCustomFileInput = void 0, c.removeEventListener(u, a4);
                        }
                        for(var d2 = 0, f = e7.length; d2 < f; d2++)e7[d2].removeEventListener(l, s), e7[d2].bsCustomFileInput = void 0;
                    }
                };
            }, "object" === ("undefined" == typeof exports ? "undefined" : i5(exports)) && void 0 !== t1 ? t1.exports = r5() : "function" == typeof define && n2(55) ? define(r5) : (e3 = e3 || self).bsCustomFileInput = r5(), document.addEventListener("DOMContentLoaded", function() {
                bsCustomFileInput.init();
            });
        }).call(this, n2(88)(t));
    },
    function(t, e2, n2) {
        "use strict";
        (function(t1, e3) {
            var i5;
            n2(72), n2(75), n2(76), n2(101), n2(138), n2(103), n2(151), n2(108), n2(91), n2(54), n2(100), n2(95), n2(120), n2(121), n2(90), n2(122), n2(98), n2(115), n2(152), n2(153), n2(110), n2(155), n2(139), n2(140), n2(116), n2(141), n2(77), n2(97), n2(123), n2(78), n2(119), n2(80), n2(112), n2(107), n2(113), n2(83);
            function o5(t2) {
                return (o5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
                    return typeof t3;
                } : function(t3) {
                    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
                })(t2);
            }
            /*!
         * Chart.js
         * http://chartjs.org/
         * Version: 2.7.3
         *
         * Copyright 2018 Chart.js Contributors
         * Released under the MIT license
         * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
         */ !function(r5) {
                if ("object" === ("undefined" == typeof exports ? "undefined" : o5(exports)) && void 0 !== t1) t1.exports = r5();
                else if ("function" == typeof define && n2(55)) define([], r5);
                else {
                    ("undefined" != typeof window ? window : void 0 !== e3 ? e3 : "undefined" != typeof self ? self : this).Chart = r5();
                }
            }(function() {
                return (function t2(e5, n7, r5) {
                    function o6(s, l) {
                        if (!n7[s]) {
                            if (!e5[s]) {
                                if (!l && "function" == typeof i5 && i5) return i5(s, !0);
                                if (a4) return a4(s, !0);
                                var u = new Error("Cannot find module '" + s + "'");
                                throw u.code = "MODULE_NOT_FOUND", u;
                            }
                            var c = n7[s] = {
                                exports: {
                                }
                            };
                            e5[s][0].call(c.exports, function(t3) {
                                return o6(e5[s][1][t3] || t3);
                            }, c, c.exports, t2, e5, n7, r5);
                        }
                        return n7[s].exports;
                    }
                    for(var a4 = "function" == typeof i5 && i5, s = 0; s < r5.length; s++)o6(r5[s]);
                    return o6;
                })({
                    1: [
                        function(t3, e5, n7) {
                        },
                        {
                        }
                    ],
                    2: [
                        function(t3, e5, n7) {
                            var r5 = t3(6);
                            function i6(t4) {
                                if (t4) {
                                    var e7 = [
                                        0,
                                        0,
                                        0
                                    ], n9 = 1, i8 = t4.match(/^#([a-fA-F0-9]{3})$/i);
                                    if (i8) {
                                        i8 = i8[1];
                                        for(var o6 = 0; o6 < e7.length; o6++)e7[o6] = parseInt(i8[o6] + i8[o6], 16);
                                    } else if (i8 = t4.match(/^#([a-fA-F0-9]{6})$/i)) {
                                        i8 = i8[1];
                                        for(o6 = 0; o6 < e7.length; o6++)e7[o6] = parseInt(i8.slice(2 * o6, 2 * o6 + 2), 16);
                                    } else if (i8 = t4.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                                        for(o6 = 0; o6 < e7.length; o6++)e7[o6] = parseInt(i8[o6 + 1]);
                                        n9 = parseFloat(i8[4]);
                                    } else if (i8 = t4.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                                        for(o6 = 0; o6 < e7.length; o6++)e7[o6] = Math.round(2.55 * parseFloat(i8[o6 + 1]));
                                        n9 = parseFloat(i8[4]);
                                    } else if (i8 = t4.match(/(\w+)/)) {
                                        if ("transparent" == i8[1]) return [
                                            0,
                                            0,
                                            0,
                                            0
                                        ];
                                        if (!(e7 = r5[i8[1]])) return;
                                    }
                                    for(o6 = 0; o6 < e7.length; o6++)e7[o6] = c(e7[o6], 0, 255);
                                    return n9 = n9 || 0 == n9 ? c(n9, 0, 1) : 1, e7[3] = n9, e7;
                                }
                            }
                            function o7(t4) {
                                if (t4) {
                                    var e8 = t4.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                                    if (e8) {
                                        var n10 = parseFloat(e8[4]);
                                        return [
                                            c(parseInt(e8[1]), 0, 360),
                                            c(parseFloat(e8[2]), 0, 100),
                                            c(parseFloat(e8[3]), 0, 100),
                                            c(isNaN(n10) ? 1 : n10, 0, 1)
                                        ];
                                    }
                                }
                            }
                            function a4(t4) {
                                if (t4) {
                                    var e9 = t4.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                                    if (e9) {
                                        var n11 = parseFloat(e9[4]);
                                        return [
                                            c(parseInt(e9[1]), 0, 360),
                                            c(parseFloat(e9[2]), 0, 100),
                                            c(parseFloat(e9[3]), 0, 100),
                                            c(isNaN(n11) ? 1 : n11, 0, 1)
                                        ];
                                    }
                                }
                            }
                            function s(t4, e10) {
                                return void 0 === e10 && (e10 = void 0 !== t4[3] ? t4[3] : 1), "rgba(" + t4[0] + ", " + t4[1] + ", " + t4[2] + ", " + e10 + ")";
                            }
                            function l(t4, e10) {
                                return "rgba(" + Math.round(t4[0] / 255 * 100) + "%, " + Math.round(t4[1] / 255 * 100) + "%, " + Math.round(t4[2] / 255 * 100) + "%, " + (e10 || t4[3] || 1) + ")";
                            }
                            function u(t4, e10) {
                                return void 0 === e10 && (e10 = void 0 !== t4[3] ? t4[3] : 1), "hsla(" + t4[0] + ", " + t4[1] + "%, " + t4[2] + "%, " + e10 + ")";
                            }
                            function c(t4, e10, n12) {
                                return Math.min(Math.max(e10, t4), n12);
                            }
                            function d2(t4) {
                                var e10 = t4.toString(16).toUpperCase();
                                return e10.length < 2 ? "0" + e10 : e10;
                            }
                            e5.exports = {
                                getRgba: i6,
                                getHsla: o7,
                                getRgb: function(t4) {
                                    var e10 = i6(t4);
                                    return e10 && e10.slice(0, 3);
                                },
                                getHsl: function(t4) {
                                    var e10 = o7(t4);
                                    return e10 && e10.slice(0, 3);
                                },
                                getHwb: a4,
                                getAlpha: function(t4) {
                                    var e10 = i6(t4);
                                    if (e10) return e10[3];
                                    if (e10 = o7(t4)) return e10[3];
                                    if (e10 = a4(t4)) return e10[3];
                                },
                                hexString: function(t4) {
                                    return "#" + d2(t4[0]) + d2(t4[1]) + d2(t4[2]);
                                },
                                rgbString: function(t4, e10) {
                                    if (e10 < 1 || t4[3] && t4[3] < 1) return s(t4, e10);
                                    return "rgb(" + t4[0] + ", " + t4[1] + ", " + t4[2] + ")";
                                },
                                rgbaString: s,
                                percentString: function(t4, e10) {
                                    if (e10 < 1 || t4[3] && t4[3] < 1) return l(t4, e10);
                                    var n12 = Math.round(t4[0] / 255 * 100), r8 = Math.round(t4[1] / 255 * 100), i9 = Math.round(t4[2] / 255 * 100);
                                    return "rgb(" + n12 + "%, " + r8 + "%, " + i9 + "%)";
                                },
                                percentaString: l,
                                hslString: function(t4, e10) {
                                    if (e10 < 1 || t4[3] && t4[3] < 1) return u(t4, e10);
                                    return "hsl(" + t4[0] + ", " + t4[1] + "%, " + t4[2] + "%)";
                                },
                                hslaString: u,
                                hwbString: function(t4, e10) {
                                    void 0 === e10 && (e10 = void 0 !== t4[3] ? t4[3] : 1);
                                    return "hwb(" + t4[0] + ", " + t4[1] + "%, " + t4[2] + "%" + (void 0 !== e10 && 1 !== e10 ? ", " + e10 : "") + ")";
                                },
                                keyword: function(t4) {
                                    return f[t4.slice(0, 3)];
                                }
                            };
                            var f = {
                            };
                            for(var h in r5)f[r5[h]] = h;
                        },
                        {
                            6: 6
                        }
                    ],
                    3: [
                        function(t3, e5, n7) {
                            var r5 = t3(5), i6 = t3(2), a4 = function t4(e10) {
                                return e10 instanceof t4 ? e10 : this instanceof t4 ? (this.valid = !1, this.values = {
                                    rgb: [
                                        0,
                                        0,
                                        0
                                    ],
                                    hsl: [
                                        0,
                                        0,
                                        0
                                    ],
                                    hsv: [
                                        0,
                                        0,
                                        0
                                    ],
                                    hwb: [
                                        0,
                                        0,
                                        0
                                    ],
                                    cmyk: [
                                        0,
                                        0,
                                        0,
                                        0
                                    ],
                                    alpha: 1
                                }, void ("string" == typeof e10 ? (n12 = i6.getRgba(e10)) ? this.setValues("rgb", n12) : (n12 = i6.getHsla(e10)) ? this.setValues("hsl", n12) : (n12 = i6.getHwb(e10)) && this.setValues("hwb", n12) : "object" === o5(e10) && (void 0 !== (n12 = e10).r || void 0 !== n12.red ? this.setValues("rgb", n12) : void 0 !== n12.l || void 0 !== n12.lightness ? this.setValues("hsl", n12) : void 0 !== n12.v || void 0 !== n12.value ? this.setValues("hsv", n12) : void 0 !== n12.w || void 0 !== n12.whiteness ? this.setValues("hwb", n12) : void 0 === n12.c && void 0 === n12.cyan || this.setValues("cmyk", n12)))) : new t4(e10);
                                var n12;
                            };
                            (a4.prototype = {
                                isValid: function() {
                                    return this.valid;
                                },
                                rgb: function() {
                                    return this.setSpace("rgb", arguments);
                                },
                                hsl: function() {
                                    return this.setSpace("hsl", arguments);
                                },
                                hsv: function() {
                                    return this.setSpace("hsv", arguments);
                                },
                                hwb: function() {
                                    return this.setSpace("hwb", arguments);
                                },
                                cmyk: function() {
                                    return this.setSpace("cmyk", arguments);
                                },
                                rgbArray: function() {
                                    return this.values.rgb;
                                },
                                hslArray: function() {
                                    return this.values.hsl;
                                },
                                hsvArray: function() {
                                    return this.values.hsv;
                                },
                                hwbArray: function() {
                                    var t5 = this.values;
                                    return 1 !== t5.alpha ? t5.hwb.concat([
                                        t5.alpha
                                    ]) : t5.hwb;
                                },
                                cmykArray: function() {
                                    return this.values.cmyk;
                                },
                                rgbaArray: function() {
                                    var t5 = this.values;
                                    return t5.rgb.concat([
                                        t5.alpha
                                    ]);
                                },
                                hslaArray: function() {
                                    var t5 = this.values;
                                    return t5.hsl.concat([
                                        t5.alpha
                                    ]);
                                },
                                alpha: function(t5) {
                                    return void 0 === t5 ? this.values.alpha : (this.setValues("alpha", t5), this);
                                },
                                red: function(t5) {
                                    return this.setChannel("rgb", 0, t5);
                                },
                                green: function(t5) {
                                    return this.setChannel("rgb", 1, t5);
                                },
                                blue: function(t5) {
                                    return this.setChannel("rgb", 2, t5);
                                },
                                hue: function(t5) {
                                    return t5 && (t5 = (t5 %= 360) < 0 ? 360 + t5 : t5), this.setChannel("hsl", 0, t5);
                                },
                                saturation: function(t5) {
                                    return this.setChannel("hsl", 1, t5);
                                },
                                lightness: function(t5) {
                                    return this.setChannel("hsl", 2, t5);
                                },
                                saturationv: function(t5) {
                                    return this.setChannel("hsv", 1, t5);
                                },
                                whiteness: function(t5) {
                                    return this.setChannel("hwb", 1, t5);
                                },
                                blackness: function(t5) {
                                    return this.setChannel("hwb", 2, t5);
                                },
                                value: function(t5) {
                                    return this.setChannel("hsv", 2, t5);
                                },
                                cyan: function(t5) {
                                    return this.setChannel("cmyk", 0, t5);
                                },
                                magenta: function(t5) {
                                    return this.setChannel("cmyk", 1, t5);
                                },
                                yellow: function(t5) {
                                    return this.setChannel("cmyk", 2, t5);
                                },
                                black: function(t5) {
                                    return this.setChannel("cmyk", 3, t5);
                                },
                                hexString: function() {
                                    return i6.hexString(this.values.rgb);
                                },
                                rgbString: function() {
                                    return i6.rgbString(this.values.rgb, this.values.alpha);
                                },
                                rgbaString: function() {
                                    return i6.rgbaString(this.values.rgb, this.values.alpha);
                                },
                                percentString: function() {
                                    return i6.percentString(this.values.rgb, this.values.alpha);
                                },
                                hslString: function() {
                                    return i6.hslString(this.values.hsl, this.values.alpha);
                                },
                                hslaString: function() {
                                    return i6.hslaString(this.values.hsl, this.values.alpha);
                                },
                                hwbString: function() {
                                    return i6.hwbString(this.values.hwb, this.values.alpha);
                                },
                                keyword: function() {
                                    return i6.keyword(this.values.rgb, this.values.alpha);
                                },
                                rgbNumber: function() {
                                    var t5 = this.values.rgb;
                                    return t5[0] << 16 | t5[1] << 8 | t5[2];
                                },
                                luminosity: function() {
                                    for(var t5 = this.values.rgb, e10 = [], n12 = 0; n12 < t5.length; n12++){
                                        var r8 = t5[n12] / 255;
                                        e10[n12] = r8 <= 0.03928 ? r8 / 12.92 : Math.pow((r8 + 0.055) / 1.055, 2.4);
                                    }
                                    return 0.2126 * e10[0] + 0.7152 * e10[1] + 0.0722 * e10[2];
                                },
                                contrast: function(t5) {
                                    var e10 = this.luminosity(), n12 = t5.luminosity();
                                    return e10 > n12 ? (e10 + 0.05) / (n12 + 0.05) : (n12 + 0.05) / (e10 + 0.05);
                                },
                                level: function(t5) {
                                    var e10 = this.contrast(t5);
                                    return e10 >= 7.1 ? "AAA" : e10 >= 4.5 ? "AA" : "";
                                },
                                dark: function() {
                                    var t5 = this.values.rgb;
                                    return (299 * t5[0] + 587 * t5[1] + 114 * t5[2]) / 1000 < 128;
                                },
                                light: function() {
                                    return !this.dark();
                                },
                                negate: function() {
                                    for(var t5 = [], e10 = 0; e10 < 3; e10++)t5[e10] = 255 - this.values.rgb[e10];
                                    return this.setValues("rgb", t5), this;
                                },
                                lighten: function(t5) {
                                    var e10 = this.values.hsl;
                                    return e10[2] += e10[2] * t5, this.setValues("hsl", e10), this;
                                },
                                darken: function(t5) {
                                    var e10 = this.values.hsl;
                                    return e10[2] -= e10[2] * t5, this.setValues("hsl", e10), this;
                                },
                                saturate: function(t5) {
                                    var e10 = this.values.hsl;
                                    return e10[1] += e10[1] * t5, this.setValues("hsl", e10), this;
                                },
                                desaturate: function(t5) {
                                    var e10 = this.values.hsl;
                                    return e10[1] -= e10[1] * t5, this.setValues("hsl", e10), this;
                                },
                                whiten: function(t5) {
                                    var e10 = this.values.hwb;
                                    return e10[1] += e10[1] * t5, this.setValues("hwb", e10), this;
                                },
                                blacken: function(t5) {
                                    var e10 = this.values.hwb;
                                    return e10[2] += e10[2] * t5, this.setValues("hwb", e10), this;
                                },
                                greyscale: function() {
                                    var t5 = this.values.rgb, e10 = 0.3 * t5[0] + 0.59 * t5[1] + 0.11 * t5[2];
                                    return this.setValues("rgb", [
                                        e10,
                                        e10,
                                        e10
                                    ]), this;
                                },
                                clearer: function(t5) {
                                    var e10 = this.values.alpha;
                                    return this.setValues("alpha", e10 - e10 * t5), this;
                                },
                                opaquer: function(t5) {
                                    var e10 = this.values.alpha;
                                    return this.setValues("alpha", e10 + e10 * t5), this;
                                },
                                rotate: function(t5) {
                                    var e10 = this.values.hsl, n12 = (e10[0] + t5) % 360;
                                    return e10[0] = n12 < 0 ? 360 + n12 : n12, this.setValues("hsl", e10), this;
                                },
                                mix: function(t5, e10) {
                                    var n12 = t5, r9 = void 0 === e10 ? 0.5 : e10, i9 = 2 * r9 - 1, o7 = this.alpha() - n12.alpha(), a6 = ((i9 * o7 == -1 ? i9 : (i9 + o7) / (1 + i9 * o7)) + 1) / 2, s = 1 - a6;
                                    return this.rgb(a6 * this.red() + s * n12.red(), a6 * this.green() + s * n12.green(), a6 * this.blue() + s * n12.blue()).alpha(this.alpha() * r9 + n12.alpha() * (1 - r9));
                                },
                                toJSON: function() {
                                    return this.rgb();
                                },
                                clone: function() {
                                    var t5, e10, n12 = new a4, r9 = this.values, i9 = n12.values;
                                    for(var o7 in r9)r9.hasOwnProperty(o7) && (t5 = r9[o7], "[object Array]" === (e10 = ({
                                    }).toString.call(t5)) ? i9[o7] = t5.slice(0) : "[object Number]" === e10 ? i9[o7] = t5 : console.error("unexpected color value:", t5));
                                    return n12;
                                }
                            }).spaces = {
                                rgb: [
                                    "red",
                                    "green",
                                    "blue"
                                ],
                                hsl: [
                                    "hue",
                                    "saturation",
                                    "lightness"
                                ],
                                hsv: [
                                    "hue",
                                    "saturation",
                                    "value"
                                ],
                                hwb: [
                                    "hue",
                                    "whiteness",
                                    "blackness"
                                ],
                                cmyk: [
                                    "cyan",
                                    "magenta",
                                    "yellow",
                                    "black"
                                ]
                            }, a4.prototype.maxes = {
                                rgb: [
                                    255,
                                    255,
                                    255
                                ],
                                hsl: [
                                    360,
                                    100,
                                    100
                                ],
                                hsv: [
                                    360,
                                    100,
                                    100
                                ],
                                hwb: [
                                    360,
                                    100,
                                    100
                                ],
                                cmyk: [
                                    100,
                                    100,
                                    100,
                                    100
                                ]
                            }, a4.prototype.getValues = function(t5) {
                                for(var e10 = this.values, n12 = {
                                }, r9 = 0; r9 < t5.length; r9++)n12[t5.charAt(r9)] = e10[t5][r9];
                                return 1 !== e10.alpha && (n12.a = e10.alpha), n12;
                            }, a4.prototype.setValues = function(t5, e10) {
                                var n12, i9, o7 = this.values, a6 = this.spaces, s = this.maxes, l = 1;
                                if (this.valid = !0, "alpha" === t5) l = e10;
                                else if (e10.length) o7[t5] = e10.slice(0, t5.length), l = e10[t5.length];
                                else if (void 0 !== e10[t5.charAt(0)]) {
                                    for(n12 = 0; n12 < t5.length; n12++)o7[t5][n12] = e10[t5.charAt(n12)];
                                    l = e10.a;
                                } else if (void 0 !== e10[a6[t5][0]]) {
                                    var u = a6[t5];
                                    for(n12 = 0; n12 < t5.length; n12++)o7[t5][n12] = e10[u[n12]];
                                    l = e10.alpha;
                                }
                                if (o7.alpha = Math.max(0, Math.min(1, void 0 === l ? o7.alpha : l)), "alpha" === t5) return !1;
                                for(n12 = 0; n12 < t5.length; n12++)i9 = Math.max(0, Math.min(s[t5][n12], o7[t5][n12])), o7[t5][n12] = Math.round(i9);
                                for(var c in a6)c !== t5 && (o7[c] = r5[t5][c](o7[t5]));
                                return !0;
                            }, a4.prototype.setSpace = function(t5, e10) {
                                var n12 = e10[0];
                                return void 0 === n12 ? this.getValues(t5) : ("number" == typeof n12 && (n12 = Array.prototype.slice.call(e10)), this.setValues(t5, n12), this);
                            }, a4.prototype.setChannel = function(t5, e10, n12) {
                                var r9 = this.values[t5];
                                return void 0 === n12 ? r9[e10] : n12 === r9[e10] ? this : (r9[e10] = n12, this.setValues(t5, r9), this);
                            }, "undefined" != typeof window && (window.Color = a4), e5.exports = a4;
                        },
                        {
                            2: 2,
                            5: 5
                        }
                    ],
                    4: [
                        function(t3, e5, n7) {
                            function i6(t4) {
                                var e10, n12, r5 = t4[0] / 255, i9 = t4[1] / 255, o7 = t4[2] / 255, a4 = Math.min(r5, i9, o7), s = Math.max(r5, i9, o7), l = s - a4;
                                return s == a4 ? e10 = 0 : r5 == s ? e10 = (i9 - o7) / l : i9 == s ? e10 = 2 + (o7 - r5) / l : o7 == s && (e10 = 4 + (r5 - i9) / l), (e10 = Math.min(60 * e10, 360)) < 0 && (e10 += 360), n12 = (a4 + s) / 2, [
                                    e10,
                                    100 * (s == a4 ? 0 : n12 <= 0.5 ? l / (s + a4) : l / (2 - s - a4)),
                                    100 * n12
                                ];
                            }
                            function o7(t4) {
                                var e10, n12, r5 = t4[0], i9 = t4[1], o8 = t4[2], a4 = Math.min(r5, i9, o8), s = Math.max(r5, i9, o8), l = s - a4;
                                return n12 = 0 == s ? 0 : l / s * 1000 / 10, s == a4 ? e10 = 0 : r5 == s ? e10 = (i9 - o8) / l : i9 == s ? e10 = 2 + (o8 - r5) / l : o8 == s && (e10 = 4 + (r5 - i9) / l), (e10 = Math.min(60 * e10, 360)) < 0 && (e10 += 360), [
                                    e10,
                                    n12,
                                    s / 255 * 1000 / 10
                                ];
                            }
                            function a4(t4) {
                                var e10 = t4[0], n12 = t4[1], r5 = t4[2];
                                return [
                                    i6(t4)[0],
                                    100 * (1 / 255 * Math.min(e10, Math.min(n12, r5))),
                                    100 * (r5 = 1 - 1 / 255 * Math.max(e10, Math.max(n12, r5)))
                                ];
                            }
                            function s(t4) {
                                var e10, n12 = t4[0] / 255, r5 = t4[1] / 255, i9 = t4[2] / 255;
                                return [
                                    100 * ((1 - n12 - (e10 = Math.min(1 - n12, 1 - r5, 1 - i9))) / (1 - e10) || 0),
                                    100 * ((1 - r5 - e10) / (1 - e10) || 0),
                                    100 * ((1 - i9 - e10) / (1 - e10) || 0),
                                    100 * e10
                                ];
                            }
                            function l(t4) {
                                return M[JSON.stringify(t4)];
                            }
                            function u(t4) {
                                var e10 = t4[0] / 255, n12 = t4[1] / 255, r5 = t4[2] / 255;
                                return [
                                    100 * (0.4124 * (e10 = e10 > 0.04045 ? Math.pow((e10 + 0.055) / 1.055, 2.4) : e10 / 12.92) + 0.3576 * (n12 = n12 > 0.04045 ? Math.pow((n12 + 0.055) / 1.055, 2.4) : n12 / 12.92) + 0.1805 * (r5 = r5 > 0.04045 ? Math.pow((r5 + 0.055) / 1.055, 2.4) : r5 / 12.92)),
                                    100 * (0.2126 * e10 + 0.7152 * n12 + 0.0722 * r5),
                                    100 * (0.0193 * e10 + 0.1192 * n12 + 0.9505 * r5)
                                ];
                            }
                            function c(t4) {
                                var e10 = u(t4), n12 = e10[0], r5 = e10[1], i9 = e10[2];
                                return r5 /= 100, i9 /= 108.883, n12 = (n12 /= 95.047) > 0.008856 ? Math.pow(n12, 1 / 3) : 7.787 * n12 + 16 / 116, [
                                    116 * (r5 = r5 > 0.008856 ? Math.pow(r5, 1 / 3) : 7.787 * r5 + 16 / 116) - 16,
                                    500 * (n12 - r5),
                                    200 * (r5 - (i9 = i9 > 0.008856 ? Math.pow(i9, 1 / 3) : 7.787 * i9 + 16 / 116))
                                ];
                            }
                            function d2(t4) {
                                var e10, n12, r5, i9, o8, a6 = t4[0] / 360, s1 = t4[1] / 100, l1 = t4[2] / 100;
                                if (0 == s1) return [
                                    o8 = 255 * l1,
                                    o8,
                                    o8
                                ];
                                e10 = 2 * l1 - (n12 = l1 < 0.5 ? l1 * (1 + s1) : l1 + s1 - l1 * s1), i9 = [
                                    0,
                                    0,
                                    0
                                ];
                                for(var u1 = 0; u1 < 3; u1++)(r5 = a6 + 1 / 3 * -(u1 - 1)) < 0 && r5++, r5 > 1 && r5--, o8 = 6 * r5 < 1 ? e10 + 6 * (n12 - e10) * r5 : 2 * r5 < 1 ? n12 : 3 * r5 < 2 ? e10 + (n12 - e10) * (2 / 3 - r5) * 6 : e10, i9[u1] = 255 * o8;
                                return i9;
                            }
                            function f(t4) {
                                var e10 = t4[0] / 60, n12 = t4[1] / 100, r5 = t4[2] / 100, i9 = Math.floor(e10) % 6, o8 = e10 - Math.floor(e10), a6 = 255 * r5 * (1 - n12), s1 = 255 * r5 * (1 - n12 * o8), l1 = 255 * r5 * (1 - n12 * (1 - o8));
                                r5 *= 255;
                                switch(i9){
                                    case 0:
                                        return [
                                            r5,
                                            l1,
                                            a6
                                        ];
                                    case 1:
                                        return [
                                            s1,
                                            r5,
                                            a6
                                        ];
                                    case 2:
                                        return [
                                            a6,
                                            r5,
                                            l1
                                        ];
                                    case 3:
                                        return [
                                            a6,
                                            s1,
                                            r5
                                        ];
                                    case 4:
                                        return [
                                            l1,
                                            a6,
                                            r5
                                        ];
                                    case 5:
                                        return [
                                            r5,
                                            a6,
                                            s1
                                        ];
                                }
                            }
                            function h(t4) {
                                var e10, n12, i9, o8, a6 = t4[0] / 360, s1 = t4[1] / 100, l1 = t4[2] / 100, u1 = s1 + l1;
                                switch(u1 > 1 && (s1 /= u1, l1 /= u1), i9 = 6 * a6 - (e10 = Math.floor(6 * a6)), 0 != (1 & e10) && (i9 = 1 - i9), o8 = s1 + i9 * ((n12 = 1 - l1) - s1), e10){
                                    default:
                                    case 6:
                                    case 0:
                                        r = n12, g = o8, b = s1;
                                        break;
                                    case 1:
                                        r = o8, g = n12, b = s1;
                                        break;
                                    case 2:
                                        r = s1, g = n12, b = o8;
                                        break;
                                    case 3:
                                        r = s1, g = o8, b = n12;
                                        break;
                                    case 4:
                                        r = o8, g = s1, b = n12;
                                        break;
                                    case 5:
                                        r = n12, g = s1, b = o8;
                                }
                                return [
                                    255 * r,
                                    255 * g,
                                    255 * b
                                ];
                            }
                            function p(t4) {
                                var e10 = t4[0] / 100, n12 = t4[1] / 100, r5 = t4[2] / 100, i9 = t4[3] / 100;
                                return [
                                    255 * (1 - Math.min(1, e10 * (1 - i9) + i9)),
                                    255 * (1 - Math.min(1, n12 * (1 - i9) + i9)),
                                    255 * (1 - Math.min(1, r5 * (1 - i9) + i9))
                                ];
                            }
                            function v(t4) {
                                var e10, n12, r5, i9 = t4[0] / 100, o8 = t4[1] / 100, a6 = t4[2] / 100;
                                return n12 = -0.9689 * i9 + 1.8758 * o8 + 0.0415 * a6, r5 = 0.0557 * i9 + -0.204 * o8 + 1.057 * a6, e10 = (e10 = 3.2406 * i9 + -1.5372 * o8 + -0.4986 * a6) > 0.0031308 ? 1.055 * Math.pow(e10, 1 / 2.4) - 0.055 : e10 *= 12.92, n12 = n12 > 0.0031308 ? 1.055 * Math.pow(n12, 1 / 2.4) - 0.055 : n12 *= 12.92, r5 = r5 > 0.0031308 ? 1.055 * Math.pow(r5, 1 / 2.4) - 0.055 : r5 *= 12.92, [
                                    255 * (e10 = Math.min(Math.max(0, e10), 1)),
                                    255 * (n12 = Math.min(Math.max(0, n12), 1)),
                                    255 * (r5 = Math.min(Math.max(0, r5), 1))
                                ];
                            }
                            function m(t4) {
                                var e10 = t4[0], n12 = t4[1], r5 = t4[2];
                                return n12 /= 100, r5 /= 108.883, e10 = (e10 /= 95.047) > 0.008856 ? Math.pow(e10, 1 / 3) : 7.787 * e10 + 16 / 116, [
                                    116 * (n12 = n12 > 0.008856 ? Math.pow(n12, 1 / 3) : 7.787 * n12 + 16 / 116) - 16,
                                    500 * (e10 - n12),
                                    200 * (n12 - (r5 = r5 > 0.008856 ? Math.pow(r5, 1 / 3) : 7.787 * r5 + 16 / 116))
                                ];
                            }
                            function y(t4) {
                                var e10, n12, r5, i9, o8 = t4[0], a6 = t4[1], s1 = t4[2];
                                return o8 <= 8 ? i9 = (n12 = 100 * o8 / 903.3) / 100 * 7.787 + 16 / 116 : (n12 = 100 * Math.pow((o8 + 16) / 116, 3), i9 = Math.pow(n12 / 100, 1 / 3)), [
                                    e10 = e10 / 95.047 <= 0.008856 ? e10 = 95.047 * (a6 / 500 + i9 - 16 / 116) / 7.787 : 95.047 * Math.pow(a6 / 500 + i9, 3),
                                    n12,
                                    r5 = r5 / 108.883 <= 0.008859 ? r5 = 108.883 * (i9 - s1 / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i9 - s1 / 200, 3)
                                ];
                            }
                            function x(t4) {
                                var e10, n12 = t4[0], r5 = t4[1], i9 = t4[2];
                                return (e10 = 360 * Math.atan2(i9, r5) / 2 / Math.PI) < 0 && (e10 += 360), [
                                    n12,
                                    Math.sqrt(r5 * r5 + i9 * i9),
                                    e10
                                ];
                            }
                            function w(t4) {
                                return v(y(t4));
                            }
                            function S(t4) {
                                var e10, n12 = t4[0], r5 = t4[1];
                                return e10 = t4[2] / 360 * 2 * Math.PI, [
                                    n12,
                                    r5 * Math.cos(e10),
                                    r5 * Math.sin(e10)
                                ];
                            }
                            function k(t4) {
                                return C[t4];
                            }
                            e5.exports = {
                                rgb2hsl: i6,
                                rgb2hsv: o7,
                                rgb2hwb: a4,
                                rgb2cmyk: s,
                                rgb2keyword: l,
                                rgb2xyz: u,
                                rgb2lab: c,
                                rgb2lch: function(t4) {
                                    return x(c(t4));
                                },
                                hsl2rgb: d2,
                                hsl2hsv: function(t4) {
                                    var e10 = t4[0], n12 = t4[1] / 100, r5 = t4[2] / 100;
                                    if (0 === r5) return [
                                        0,
                                        0,
                                        0
                                    ];
                                    return [
                                        e10,
                                        100 * (2 * (n12 *= (r5 *= 2) <= 1 ? r5 : 2 - r5) / (r5 + n12)),
                                        100 * ((r5 + n12) / 2)
                                    ];
                                },
                                hsl2hwb: function(t4) {
                                    return a4(d2(t4));
                                },
                                hsl2cmyk: function(t4) {
                                    return s(d2(t4));
                                },
                                hsl2keyword: function(t4) {
                                    return l(d2(t4));
                                },
                                hsv2rgb: f,
                                hsv2hsl: function(t4) {
                                    var e10, n12, r5 = t4[0], i9 = t4[1] / 100, o8 = t4[2] / 100;
                                    return e10 = i9 * o8, [
                                        r5,
                                        100 * (e10 = (e10 /= (n12 = (2 - i9) * o8) <= 1 ? n12 : 2 - n12) || 0),
                                        100 * (n12 /= 2)
                                    ];
                                },
                                hsv2hwb: function(t4) {
                                    return a4(f(t4));
                                },
                                hsv2cmyk: function(t4) {
                                    return s(f(t4));
                                },
                                hsv2keyword: function(t4) {
                                    return l(f(t4));
                                },
                                hwb2rgb: h,
                                hwb2hsl: function(t4) {
                                    return i6(h(t4));
                                },
                                hwb2hsv: function(t4) {
                                    return o7(h(t4));
                                },
                                hwb2cmyk: function(t4) {
                                    return s(h(t4));
                                },
                                hwb2keyword: function(t4) {
                                    return l(h(t4));
                                },
                                cmyk2rgb: p,
                                cmyk2hsl: function(t4) {
                                    return i6(p(t4));
                                },
                                cmyk2hsv: function(t4) {
                                    return o7(p(t4));
                                },
                                cmyk2hwb: function(t4) {
                                    return a4(p(t4));
                                },
                                cmyk2keyword: function(t4) {
                                    return l(p(t4));
                                },
                                keyword2rgb: k,
                                keyword2hsl: function(t4) {
                                    return i6(k(t4));
                                },
                                keyword2hsv: function(t4) {
                                    return o7(k(t4));
                                },
                                keyword2hwb: function(t4) {
                                    return a4(k(t4));
                                },
                                keyword2cmyk: function(t4) {
                                    return s(k(t4));
                                },
                                keyword2lab: function(t4) {
                                    return c(k(t4));
                                },
                                keyword2xyz: function(t4) {
                                    return u(k(t4));
                                },
                                xyz2rgb: v,
                                xyz2lab: m,
                                xyz2lch: function(t4) {
                                    return x(m(t4));
                                },
                                lab2xyz: y,
                                lab2rgb: w,
                                lab2lch: x,
                                lch2lab: S,
                                lch2xyz: function(t4) {
                                    return y(S(t4));
                                },
                                lch2rgb: function(t4) {
                                    return w(S(t4));
                                }
                            };
                            var C = {
                                aliceblue: [
                                    240,
                                    248,
                                    255
                                ],
                                antiquewhite: [
                                    250,
                                    235,
                                    215
                                ],
                                aqua: [
                                    0,
                                    255,
                                    255
                                ],
                                aquamarine: [
                                    127,
                                    255,
                                    212
                                ],
                                azure: [
                                    240,
                                    255,
                                    255
                                ],
                                beige: [
                                    245,
                                    245,
                                    220
                                ],
                                bisque: [
                                    255,
                                    228,
                                    196
                                ],
                                black: [
                                    0,
                                    0,
                                    0
                                ],
                                blanchedalmond: [
                                    255,
                                    235,
                                    205
                                ],
                                blue: [
                                    0,
                                    0,
                                    255
                                ],
                                blueviolet: [
                                    138,
                                    43,
                                    226
                                ],
                                brown: [
                                    165,
                                    42,
                                    42
                                ],
                                burlywood: [
                                    222,
                                    184,
                                    135
                                ],
                                cadetblue: [
                                    95,
                                    158,
                                    160
                                ],
                                chartreuse: [
                                    127,
                                    255,
                                    0
                                ],
                                chocolate: [
                                    210,
                                    105,
                                    30
                                ],
                                coral: [
                                    255,
                                    127,
                                    80
                                ],
                                cornflowerblue: [
                                    100,
                                    149,
                                    237
                                ],
                                cornsilk: [
                                    255,
                                    248,
                                    220
                                ],
                                crimson: [
                                    220,
                                    20,
                                    60
                                ],
                                cyan: [
                                    0,
                                    255,
                                    255
                                ],
                                darkblue: [
                                    0,
                                    0,
                                    139
                                ],
                                darkcyan: [
                                    0,
                                    139,
                                    139
                                ],
                                darkgoldenrod: [
                                    184,
                                    134,
                                    11
                                ],
                                darkgray: [
                                    169,
                                    169,
                                    169
                                ],
                                darkgreen: [
                                    0,
                                    100,
                                    0
                                ],
                                darkgrey: [
                                    169,
                                    169,
                                    169
                                ],
                                darkkhaki: [
                                    189,
                                    183,
                                    107
                                ],
                                darkmagenta: [
                                    139,
                                    0,
                                    139
                                ],
                                darkolivegreen: [
                                    85,
                                    107,
                                    47
                                ],
                                darkorange: [
                                    255,
                                    140,
                                    0
                                ],
                                darkorchid: [
                                    153,
                                    50,
                                    204
                                ],
                                darkred: [
                                    139,
                                    0,
                                    0
                                ],
                                darksalmon: [
                                    233,
                                    150,
                                    122
                                ],
                                darkseagreen: [
                                    143,
                                    188,
                                    143
                                ],
                                darkslateblue: [
                                    72,
                                    61,
                                    139
                                ],
                                darkslategray: [
                                    47,
                                    79,
                                    79
                                ],
                                darkslategrey: [
                                    47,
                                    79,
                                    79
                                ],
                                darkturquoise: [
                                    0,
                                    206,
                                    209
                                ],
                                darkviolet: [
                                    148,
                                    0,
                                    211
                                ],
                                deeppink: [
                                    255,
                                    20,
                                    147
                                ],
                                deepskyblue: [
                                    0,
                                    191,
                                    255
                                ],
                                dimgray: [
                                    105,
                                    105,
                                    105
                                ],
                                dimgrey: [
                                    105,
                                    105,
                                    105
                                ],
                                dodgerblue: [
                                    30,
                                    144,
                                    255
                                ],
                                firebrick: [
                                    178,
                                    34,
                                    34
                                ],
                                floralwhite: [
                                    255,
                                    250,
                                    240
                                ],
                                forestgreen: [
                                    34,
                                    139,
                                    34
                                ],
                                fuchsia: [
                                    255,
                                    0,
                                    255
                                ],
                                gainsboro: [
                                    220,
                                    220,
                                    220
                                ],
                                ghostwhite: [
                                    248,
                                    248,
                                    255
                                ],
                                gold: [
                                    255,
                                    215,
                                    0
                                ],
                                goldenrod: [
                                    218,
                                    165,
                                    32
                                ],
                                gray: [
                                    128,
                                    128,
                                    128
                                ],
                                green: [
                                    0,
                                    128,
                                    0
                                ],
                                greenyellow: [
                                    173,
                                    255,
                                    47
                                ],
                                grey: [
                                    128,
                                    128,
                                    128
                                ],
                                honeydew: [
                                    240,
                                    255,
                                    240
                                ],
                                hotpink: [
                                    255,
                                    105,
                                    180
                                ],
                                indianred: [
                                    205,
                                    92,
                                    92
                                ],
                                indigo: [
                                    75,
                                    0,
                                    130
                                ],
                                ivory: [
                                    255,
                                    255,
                                    240
                                ],
                                khaki: [
                                    240,
                                    230,
                                    140
                                ],
                                lavender: [
                                    230,
                                    230,
                                    250
                                ],
                                lavenderblush: [
                                    255,
                                    240,
                                    245
                                ],
                                lawngreen: [
                                    124,
                                    252,
                                    0
                                ],
                                lemonchiffon: [
                                    255,
                                    250,
                                    205
                                ],
                                lightblue: [
                                    173,
                                    216,
                                    230
                                ],
                                lightcoral: [
                                    240,
                                    128,
                                    128
                                ],
                                lightcyan: [
                                    224,
                                    255,
                                    255
                                ],
                                lightgoldenrodyellow: [
                                    250,
                                    250,
                                    210
                                ],
                                lightgray: [
                                    211,
                                    211,
                                    211
                                ],
                                lightgreen: [
                                    144,
                                    238,
                                    144
                                ],
                                lightgrey: [
                                    211,
                                    211,
                                    211
                                ],
                                lightpink: [
                                    255,
                                    182,
                                    193
                                ],
                                lightsalmon: [
                                    255,
                                    160,
                                    122
                                ],
                                lightseagreen: [
                                    32,
                                    178,
                                    170
                                ],
                                lightskyblue: [
                                    135,
                                    206,
                                    250
                                ],
                                lightslategray: [
                                    119,
                                    136,
                                    153
                                ],
                                lightslategrey: [
                                    119,
                                    136,
                                    153
                                ],
                                lightsteelblue: [
                                    176,
                                    196,
                                    222
                                ],
                                lightyellow: [
                                    255,
                                    255,
                                    224
                                ],
                                lime: [
                                    0,
                                    255,
                                    0
                                ],
                                limegreen: [
                                    50,
                                    205,
                                    50
                                ],
                                linen: [
                                    250,
                                    240,
                                    230
                                ],
                                magenta: [
                                    255,
                                    0,
                                    255
                                ],
                                maroon: [
                                    128,
                                    0,
                                    0
                                ],
                                mediumaquamarine: [
                                    102,
                                    205,
                                    170
                                ],
                                mediumblue: [
                                    0,
                                    0,
                                    205
                                ],
                                mediumorchid: [
                                    186,
                                    85,
                                    211
                                ],
                                mediumpurple: [
                                    147,
                                    112,
                                    219
                                ],
                                mediumseagreen: [
                                    60,
                                    179,
                                    113
                                ],
                                mediumslateblue: [
                                    123,
                                    104,
                                    238
                                ],
                                mediumspringgreen: [
                                    0,
                                    250,
                                    154
                                ],
                                mediumturquoise: [
                                    72,
                                    209,
                                    204
                                ],
                                mediumvioletred: [
                                    199,
                                    21,
                                    133
                                ],
                                midnightblue: [
                                    25,
                                    25,
                                    112
                                ],
                                mintcream: [
                                    245,
                                    255,
                                    250
                                ],
                                mistyrose: [
                                    255,
                                    228,
                                    225
                                ],
                                moccasin: [
                                    255,
                                    228,
                                    181
                                ],
                                navajowhite: [
                                    255,
                                    222,
                                    173
                                ],
                                navy: [
                                    0,
                                    0,
                                    128
                                ],
                                oldlace: [
                                    253,
                                    245,
                                    230
                                ],
                                olive: [
                                    128,
                                    128,
                                    0
                                ],
                                olivedrab: [
                                    107,
                                    142,
                                    35
                                ],
                                orange: [
                                    255,
                                    165,
                                    0
                                ],
                                orangered: [
                                    255,
                                    69,
                                    0
                                ],
                                orchid: [
                                    218,
                                    112,
                                    214
                                ],
                                palegoldenrod: [
                                    238,
                                    232,
                                    170
                                ],
                                palegreen: [
                                    152,
                                    251,
                                    152
                                ],
                                paleturquoise: [
                                    175,
                                    238,
                                    238
                                ],
                                palevioletred: [
                                    219,
                                    112,
                                    147
                                ],
                                papayawhip: [
                                    255,
                                    239,
                                    213
                                ],
                                peachpuff: [
                                    255,
                                    218,
                                    185
                                ],
                                peru: [
                                    205,
                                    133,
                                    63
                                ],
                                pink: [
                                    255,
                                    192,
                                    203
                                ],
                                plum: [
                                    221,
                                    160,
                                    221
                                ],
                                powderblue: [
                                    176,
                                    224,
                                    230
                                ],
                                purple: [
                                    128,
                                    0,
                                    128
                                ],
                                rebeccapurple: [
                                    102,
                                    51,
                                    153
                                ],
                                red: [
                                    255,
                                    0,
                                    0
                                ],
                                rosybrown: [
                                    188,
                                    143,
                                    143
                                ],
                                royalblue: [
                                    65,
                                    105,
                                    225
                                ],
                                saddlebrown: [
                                    139,
                                    69,
                                    19
                                ],
                                salmon: [
                                    250,
                                    128,
                                    114
                                ],
                                sandybrown: [
                                    244,
                                    164,
                                    96
                                ],
                                seagreen: [
                                    46,
                                    139,
                                    87
                                ],
                                seashell: [
                                    255,
                                    245,
                                    238
                                ],
                                sienna: [
                                    160,
                                    82,
                                    45
                                ],
                                silver: [
                                    192,
                                    192,
                                    192
                                ],
                                skyblue: [
                                    135,
                                    206,
                                    235
                                ],
                                slateblue: [
                                    106,
                                    90,
                                    205
                                ],
                                slategray: [
                                    112,
                                    128,
                                    144
                                ],
                                slategrey: [
                                    112,
                                    128,
                                    144
                                ],
                                snow: [
                                    255,
                                    250,
                                    250
                                ],
                                springgreen: [
                                    0,
                                    255,
                                    127
                                ],
                                steelblue: [
                                    70,
                                    130,
                                    180
                                ],
                                tan: [
                                    210,
                                    180,
                                    140
                                ],
                                teal: [
                                    0,
                                    128,
                                    128
                                ],
                                thistle: [
                                    216,
                                    191,
                                    216
                                ],
                                tomato: [
                                    255,
                                    99,
                                    71
                                ],
                                turquoise: [
                                    64,
                                    224,
                                    208
                                ],
                                violet: [
                                    238,
                                    130,
                                    238
                                ],
                                wheat: [
                                    245,
                                    222,
                                    179
                                ],
                                white: [
                                    255,
                                    255,
                                    255
                                ],
                                whitesmoke: [
                                    245,
                                    245,
                                    245
                                ],
                                yellow: [
                                    255,
                                    255,
                                    0
                                ],
                                yellowgreen: [
                                    154,
                                    205,
                                    50
                                ]
                            }, M = {
                            };
                            for(var A in C)M[JSON.stringify(C[A])] = A;
                        },
                        {
                        }
                    ],
                    5: [
                        function(t3, e5, n7) {
                            var r5 = t3(4), i6 = function() {
                                return new u;
                            };
                            for(var o7 in r5){
                                i6[o7 + "Raw"] = (function(t4) {
                                    return function(e10) {
                                        return "number" == typeof e10 && (e10 = Array.prototype.slice.call(arguments)), r5[t4](e10);
                                    };
                                })(o7);
                                var a4 = /(\w+)2(\w+)/.exec(o7), s = a4[1], l = a4[2];
                                (i6[s] = i6[s] || {
                                })[l] = i6[o7] = (function(t4) {
                                    return function(e10) {
                                        "number" == typeof e10 && (e10 = Array.prototype.slice.call(arguments));
                                        var n12 = r5[t4](e10);
                                        if ("string" == typeof n12 || void 0 === n12) return n12;
                                        for(var i9 = 0; i9 < n12.length; i9++)n12[i9] = Math.round(n12[i9]);
                                        return n12;
                                    };
                                })(o7);
                            }
                            var u = function() {
                                this.convs = {
                                };
                            };
                            u.prototype.routeSpace = function(t4, e10) {
                                var n12 = e10[0];
                                return void 0 === n12 ? this.getValues(t4) : ("number" == typeof n12 && (n12 = Array.prototype.slice.call(e10)), this.setValues(t4, n12));
                            }, u.prototype.setValues = function(t4, e10) {
                                return this.space = t4, this.convs = {
                                }, this.convs[t4] = e10, this;
                            }, u.prototype.getValues = function(t4) {
                                var e10 = this.convs[t4];
                                if (!e10) {
                                    var n12 = this.space, r9 = this.convs[n12];
                                    e10 = i6[n12][t4](r9), this.convs[t4] = e10;
                                }
                                return e10;
                            }, [
                                "rgb",
                                "hsl",
                                "hsv",
                                "cmyk",
                                "keyword"
                            ].forEach(function(t4) {
                                u.prototype[t4] = function(e10) {
                                    return this.routeSpace(t4, arguments);
                                };
                            }), e5.exports = i6;
                        },
                        {
                            4: 4
                        }
                    ],
                    6: [
                        function(t3, e5, n7) {
                            e5.exports = {
                                aliceblue: [
                                    240,
                                    248,
                                    255
                                ],
                                antiquewhite: [
                                    250,
                                    235,
                                    215
                                ],
                                aqua: [
                                    0,
                                    255,
                                    255
                                ],
                                aquamarine: [
                                    127,
                                    255,
                                    212
                                ],
                                azure: [
                                    240,
                                    255,
                                    255
                                ],
                                beige: [
                                    245,
                                    245,
                                    220
                                ],
                                bisque: [
                                    255,
                                    228,
                                    196
                                ],
                                black: [
                                    0,
                                    0,
                                    0
                                ],
                                blanchedalmond: [
                                    255,
                                    235,
                                    205
                                ],
                                blue: [
                                    0,
                                    0,
                                    255
                                ],
                                blueviolet: [
                                    138,
                                    43,
                                    226
                                ],
                                brown: [
                                    165,
                                    42,
                                    42
                                ],
                                burlywood: [
                                    222,
                                    184,
                                    135
                                ],
                                cadetblue: [
                                    95,
                                    158,
                                    160
                                ],
                                chartreuse: [
                                    127,
                                    255,
                                    0
                                ],
                                chocolate: [
                                    210,
                                    105,
                                    30
                                ],
                                coral: [
                                    255,
                                    127,
                                    80
                                ],
                                cornflowerblue: [
                                    100,
                                    149,
                                    237
                                ],
                                cornsilk: [
                                    255,
                                    248,
                                    220
                                ],
                                crimson: [
                                    220,
                                    20,
                                    60
                                ],
                                cyan: [
                                    0,
                                    255,
                                    255
                                ],
                                darkblue: [
                                    0,
                                    0,
                                    139
                                ],
                                darkcyan: [
                                    0,
                                    139,
                                    139
                                ],
                                darkgoldenrod: [
                                    184,
                                    134,
                                    11
                                ],
                                darkgray: [
                                    169,
                                    169,
                                    169
                                ],
                                darkgreen: [
                                    0,
                                    100,
                                    0
                                ],
                                darkgrey: [
                                    169,
                                    169,
                                    169
                                ],
                                darkkhaki: [
                                    189,
                                    183,
                                    107
                                ],
                                darkmagenta: [
                                    139,
                                    0,
                                    139
                                ],
                                darkolivegreen: [
                                    85,
                                    107,
                                    47
                                ],
                                darkorange: [
                                    255,
                                    140,
                                    0
                                ],
                                darkorchid: [
                                    153,
                                    50,
                                    204
                                ],
                                darkred: [
                                    139,
                                    0,
                                    0
                                ],
                                darksalmon: [
                                    233,
                                    150,
                                    122
                                ],
                                darkseagreen: [
                                    143,
                                    188,
                                    143
                                ],
                                darkslateblue: [
                                    72,
                                    61,
                                    139
                                ],
                                darkslategray: [
                                    47,
                                    79,
                                    79
                                ],
                                darkslategrey: [
                                    47,
                                    79,
                                    79
                                ],
                                darkturquoise: [
                                    0,
                                    206,
                                    209
                                ],
                                darkviolet: [
                                    148,
                                    0,
                                    211
                                ],
                                deeppink: [
                                    255,
                                    20,
                                    147
                                ],
                                deepskyblue: [
                                    0,
                                    191,
                                    255
                                ],
                                dimgray: [
                                    105,
                                    105,
                                    105
                                ],
                                dimgrey: [
                                    105,
                                    105,
                                    105
                                ],
                                dodgerblue: [
                                    30,
                                    144,
                                    255
                                ],
                                firebrick: [
                                    178,
                                    34,
                                    34
                                ],
                                floralwhite: [
                                    255,
                                    250,
                                    240
                                ],
                                forestgreen: [
                                    34,
                                    139,
                                    34
                                ],
                                fuchsia: [
                                    255,
                                    0,
                                    255
                                ],
                                gainsboro: [
                                    220,
                                    220,
                                    220
                                ],
                                ghostwhite: [
                                    248,
                                    248,
                                    255
                                ],
                                gold: [
                                    255,
                                    215,
                                    0
                                ],
                                goldenrod: [
                                    218,
                                    165,
                                    32
                                ],
                                gray: [
                                    128,
                                    128,
                                    128
                                ],
                                green: [
                                    0,
                                    128,
                                    0
                                ],
                                greenyellow: [
                                    173,
                                    255,
                                    47
                                ],
                                grey: [
                                    128,
                                    128,
                                    128
                                ],
                                honeydew: [
                                    240,
                                    255,
                                    240
                                ],
                                hotpink: [
                                    255,
                                    105,
                                    180
                                ],
                                indianred: [
                                    205,
                                    92,
                                    92
                                ],
                                indigo: [
                                    75,
                                    0,
                                    130
                                ],
                                ivory: [
                                    255,
                                    255,
                                    240
                                ],
                                khaki: [
                                    240,
                                    230,
                                    140
                                ],
                                lavender: [
                                    230,
                                    230,
                                    250
                                ],
                                lavenderblush: [
                                    255,
                                    240,
                                    245
                                ],
                                lawngreen: [
                                    124,
                                    252,
                                    0
                                ],
                                lemonchiffon: [
                                    255,
                                    250,
                                    205
                                ],
                                lightblue: [
                                    173,
                                    216,
                                    230
                                ],
                                lightcoral: [
                                    240,
                                    128,
                                    128
                                ],
                                lightcyan: [
                                    224,
                                    255,
                                    255
                                ],
                                lightgoldenrodyellow: [
                                    250,
                                    250,
                                    210
                                ],
                                lightgray: [
                                    211,
                                    211,
                                    211
                                ],
                                lightgreen: [
                                    144,
                                    238,
                                    144
                                ],
                                lightgrey: [
                                    211,
                                    211,
                                    211
                                ],
                                lightpink: [
                                    255,
                                    182,
                                    193
                                ],
                                lightsalmon: [
                                    255,
                                    160,
                                    122
                                ],
                                lightseagreen: [
                                    32,
                                    178,
                                    170
                                ],
                                lightskyblue: [
                                    135,
                                    206,
                                    250
                                ],
                                lightslategray: [
                                    119,
                                    136,
                                    153
                                ],
                                lightslategrey: [
                                    119,
                                    136,
                                    153
                                ],
                                lightsteelblue: [
                                    176,
                                    196,
                                    222
                                ],
                                lightyellow: [
                                    255,
                                    255,
                                    224
                                ],
                                lime: [
                                    0,
                                    255,
                                    0
                                ],
                                limegreen: [
                                    50,
                                    205,
                                    50
                                ],
                                linen: [
                                    250,
                                    240,
                                    230
                                ],
                                magenta: [
                                    255,
                                    0,
                                    255
                                ],
                                maroon: [
                                    128,
                                    0,
                                    0
                                ],
                                mediumaquamarine: [
                                    102,
                                    205,
                                    170
                                ],
                                mediumblue: [
                                    0,
                                    0,
                                    205
                                ],
                                mediumorchid: [
                                    186,
                                    85,
                                    211
                                ],
                                mediumpurple: [
                                    147,
                                    112,
                                    219
                                ],
                                mediumseagreen: [
                                    60,
                                    179,
                                    113
                                ],
                                mediumslateblue: [
                                    123,
                                    104,
                                    238
                                ],
                                mediumspringgreen: [
                                    0,
                                    250,
                                    154
                                ],
                                mediumturquoise: [
                                    72,
                                    209,
                                    204
                                ],
                                mediumvioletred: [
                                    199,
                                    21,
                                    133
                                ],
                                midnightblue: [
                                    25,
                                    25,
                                    112
                                ],
                                mintcream: [
                                    245,
                                    255,
                                    250
                                ],
                                mistyrose: [
                                    255,
                                    228,
                                    225
                                ],
                                moccasin: [
                                    255,
                                    228,
                                    181
                                ],
                                navajowhite: [
                                    255,
                                    222,
                                    173
                                ],
                                navy: [
                                    0,
                                    0,
                                    128
                                ],
                                oldlace: [
                                    253,
                                    245,
                                    230
                                ],
                                olive: [
                                    128,
                                    128,
                                    0
                                ],
                                olivedrab: [
                                    107,
                                    142,
                                    35
                                ],
                                orange: [
                                    255,
                                    165,
                                    0
                                ],
                                orangered: [
                                    255,
                                    69,
                                    0
                                ],
                                orchid: [
                                    218,
                                    112,
                                    214
                                ],
                                palegoldenrod: [
                                    238,
                                    232,
                                    170
                                ],
                                palegreen: [
                                    152,
                                    251,
                                    152
                                ],
                                paleturquoise: [
                                    175,
                                    238,
                                    238
                                ],
                                palevioletred: [
                                    219,
                                    112,
                                    147
                                ],
                                papayawhip: [
                                    255,
                                    239,
                                    213
                                ],
                                peachpuff: [
                                    255,
                                    218,
                                    185
                                ],
                                peru: [
                                    205,
                                    133,
                                    63
                                ],
                                pink: [
                                    255,
                                    192,
                                    203
                                ],
                                plum: [
                                    221,
                                    160,
                                    221
                                ],
                                powderblue: [
                                    176,
                                    224,
                                    230
                                ],
                                purple: [
                                    128,
                                    0,
                                    128
                                ],
                                rebeccapurple: [
                                    102,
                                    51,
                                    153
                                ],
                                red: [
                                    255,
                                    0,
                                    0
                                ],
                                rosybrown: [
                                    188,
                                    143,
                                    143
                                ],
                                royalblue: [
                                    65,
                                    105,
                                    225
                                ],
                                saddlebrown: [
                                    139,
                                    69,
                                    19
                                ],
                                salmon: [
                                    250,
                                    128,
                                    114
                                ],
                                sandybrown: [
                                    244,
                                    164,
                                    96
                                ],
                                seagreen: [
                                    46,
                                    139,
                                    87
                                ],
                                seashell: [
                                    255,
                                    245,
                                    238
                                ],
                                sienna: [
                                    160,
                                    82,
                                    45
                                ],
                                silver: [
                                    192,
                                    192,
                                    192
                                ],
                                skyblue: [
                                    135,
                                    206,
                                    235
                                ],
                                slateblue: [
                                    106,
                                    90,
                                    205
                                ],
                                slategray: [
                                    112,
                                    128,
                                    144
                                ],
                                slategrey: [
                                    112,
                                    128,
                                    144
                                ],
                                snow: [
                                    255,
                                    250,
                                    250
                                ],
                                springgreen: [
                                    0,
                                    255,
                                    127
                                ],
                                steelblue: [
                                    70,
                                    130,
                                    180
                                ],
                                tan: [
                                    210,
                                    180,
                                    140
                                ],
                                teal: [
                                    0,
                                    128,
                                    128
                                ],
                                thistle: [
                                    216,
                                    191,
                                    216
                                ],
                                tomato: [
                                    255,
                                    99,
                                    71
                                ],
                                turquoise: [
                                    64,
                                    224,
                                    208
                                ],
                                violet: [
                                    238,
                                    130,
                                    238
                                ],
                                wheat: [
                                    245,
                                    222,
                                    179
                                ],
                                white: [
                                    255,
                                    255,
                                    255
                                ],
                                whitesmoke: [
                                    245,
                                    245,
                                    245
                                ],
                                yellow: [
                                    255,
                                    255,
                                    0
                                ],
                                yellowgreen: [
                                    154,
                                    205,
                                    50
                                ]
                            };
                        },
                        {
                        }
                    ],
                    7: [
                        function(t3, e5, n7) {
                            var r5 = t3(30)();
                            r5.helpers = t3(46), t3(28)(r5), r5.Animation = t3(22), r5.animationService = t3(23), r5.defaults = t3(26), r5.Element = t3(27), r5.elements = t3(41), r5.Interaction = t3(29), r5.layouts = t3(31), r5.platform = t3(49), r5.plugins = t3(32), r5.Scale = t3(33), r5.scaleService = t3(34), r5.Ticks = t3(35), r5.Tooltip = t3(36), t3(24)(r5), t3(25)(r5), t3(56)(r5), t3(54)(r5), t3(55)(r5), t3(57)(r5), t3(58)(r5), t3(59)(r5), t3(15)(r5), t3(16)(r5), t3(17)(r5), t3(18)(r5), t3(19)(r5), t3(20)(r5), t3(21)(r5), t3(8)(r5), t3(9)(r5), t3(10)(r5), t3(11)(r5), t3(12)(r5), t3(13)(r5), t3(14)(r5);
                            var i6 = t3(50);
                            for(var o7 in i6)i6.hasOwnProperty(o7) && r5.plugins.register(i6[o7]);
                            r5.platform.initialize(), e5.exports = r5, "undefined" != typeof window && (window.Chart = r5), r5.Legend = i6.legend._element, r5.Title = i6.title._element, r5.pluginService = r5.plugins, r5.PluginBase = r5.Element.extend({
                            }), r5.canvasHelpers = r5.helpers.canvas, r5.layoutService = r5.layouts;
                        },
                        {
                            10: 10,
                            11: 11,
                            12: 12,
                            13: 13,
                            14: 14,
                            15: 15,
                            16: 16,
                            17: 17,
                            18: 18,
                            19: 19,
                            20: 20,
                            21: 21,
                            22: 22,
                            23: 23,
                            24: 24,
                            25: 25,
                            26: 26,
                            27: 27,
                            28: 28,
                            29: 29,
                            30: 30,
                            31: 31,
                            32: 32,
                            33: 33,
                            34: 34,
                            35: 35,
                            36: 36,
                            41: 41,
                            46: 46,
                            49: 49,
                            50: 50,
                            54: 54,
                            55: 55,
                            56: 56,
                            57: 57,
                            58: 58,
                            59: 59,
                            8: 8,
                            9: 9
                        }
                    ],
                    8: [
                        function(t3, e5, n7) {
                            e5.exports = function(t4) {
                                t4.Bar = function(e10, n13) {
                                    return n13.type = "bar", new t4(e10, n13);
                                };
                            };
                        },
                        {
                        }
                    ],
                    9: [
                        function(t3, e5, n7) {
                            e5.exports = function(t4) {
                                t4.Bubble = function(e10, n13) {
                                    return n13.type = "bubble", new t4(e10, n13);
                                };
                            };
                        },
                        {
                        }
                    ],
                    10: [
                        function(t3, e5, n7) {
                            e5.exports = function(t4) {
                                t4.Doughnut = function(e10, n13) {
                                    return n13.type = "doughnut", new t4(e10, n13);
                                };
                            };
                        },
                        {
                        }
                    ],
                    11: [
                        function(t3, e5, n7) {
                            e5.exports = function(t4) {
                                t4.Line = function(e10, n13) {
                                    return n13.type = "line", new t4(e10, n13);
                                };
                            };
                        },
                        {
                        }
                    ],
                    12: [
                        function(t3, e5, n7) {
                            e5.exports = function(t4) {
                                t4.PolarArea = function(e10, n13) {
                                    return n13.type = "polarArea", new t4(e10, n13);
                                };
                            };
                        },
                        {
                        }
                    ],
                    13: [
                        function(t3, e5, n7) {
                            e5.exports = function(t4) {
                                t4.Radar = function(e10, n13) {
                                    return n13.type = "radar", new t4(e10, n13);
                                };
                            };
                        },
                        {
                        }
                    ],
                    14: [
                        function(t3, e5, n7) {
                            e5.exports = function(t4) {
                                t4.Scatter = function(e10, n13) {
                                    return n13.type = "scatter", new t4(e10, n13);
                                };
                            };
                        },
                        {
                        }
                    ],
                    15: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i6 = t3(41), o7 = t3(46);
                            r5._set("bar", {
                                hover: {
                                    mode: "label"
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            type: "category",
                                            categoryPercentage: 0.8,
                                            barPercentage: 0.9,
                                            offset: !0,
                                            gridLines: {
                                                offsetGridLines: !0
                                            }
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            type: "linear"
                                        }
                                    ]
                                }
                            }), r5._set("horizontalBar", {
                                hover: {
                                    mode: "index",
                                    axis: "y"
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            type: "linear",
                                            position: "bottom"
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            position: "left",
                                            type: "category",
                                            categoryPercentage: 0.8,
                                            barPercentage: 0.9,
                                            offset: !0,
                                            gridLines: {
                                                offsetGridLines: !0
                                            }
                                        }
                                    ]
                                },
                                elements: {
                                    rectangle: {
                                        borderSkipped: "left"
                                    }
                                },
                                tooltips: {
                                    callbacks: {
                                        title: function(t4, e10) {
                                            var n13 = "";
                                            return t4.length > 0 && (t4[0].yLabel ? n13 = t4[0].yLabel : e10.labels.length > 0 && t4[0].index < e10.labels.length && (n13 = e10.labels[t4[0].index])), n13;
                                        },
                                        label: function(t4, e10) {
                                            return (e10.datasets[t4.datasetIndex].label || "") + ": " + t4.xLabel;
                                        }
                                    },
                                    mode: "index",
                                    axis: "y"
                                }
                            }), e5.exports = function(t4) {
                                t4.controllers.bar = t4.DatasetController.extend({
                                    dataElementType: i6.Rectangle,
                                    initialize: function() {
                                        var e10, n13 = this;
                                        t4.DatasetController.prototype.initialize.apply(n13, arguments), (e10 = n13.getMeta()).stack = n13.getDataset().stack, e10.bar = !0;
                                    },
                                    update: function(t5) {
                                        var e10, n13, r10 = this.getMeta().data;
                                        for(this._ruler = this.getRuler(), e10 = 0, n13 = r10.length; e10 < n13; ++e10)this.updateElement(r10[e10], e10, t5);
                                    },
                                    updateElement: function(t5, e10, n13) {
                                        var r10 = this, i9 = r10.chart, a6 = r10.getMeta(), s = r10.getDataset(), l = t5.custom || {
                                        }, u = i9.options.elements.rectangle;
                                        t5._xScale = r10.getScaleForId(a6.xAxisID), t5._yScale = r10.getScaleForId(a6.yAxisID), t5._datasetIndex = r10.index, t5._index = e10, t5._model = {
                                            datasetLabel: s.label,
                                            label: i9.data.labels[e10],
                                            borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                                            backgroundColor: l.backgroundColor ? l.backgroundColor : o7.valueAtIndexOrDefault(s.backgroundColor, e10, u.backgroundColor),
                                            borderColor: l.borderColor ? l.borderColor : o7.valueAtIndexOrDefault(s.borderColor, e10, u.borderColor),
                                            borderWidth: l.borderWidth ? l.borderWidth : o7.valueAtIndexOrDefault(s.borderWidth, e10, u.borderWidth)
                                        }, r10.updateElementGeometry(t5, e10, n13), t5.pivot();
                                    },
                                    updateElementGeometry: function(t5, e10, n13) {
                                        var r10 = this, i9 = t5._model, o8 = r10.getValueScale(), a6 = o8.getBasePixel(), s = o8.isHorizontal(), l = r10._ruler || r10.getRuler(), u = r10.calculateBarValuePixels(r10.index, e10), c = r10.calculateBarIndexPixels(r10.index, e10, l);
                                        i9.horizontal = s, i9.base = n13 ? a6 : u.base, i9.x = s ? n13 ? a6 : u.head : c.center, i9.y = s ? c.center : n13 ? a6 : u.head, i9.height = s ? c.size : void 0, i9.width = s ? void 0 : c.size;
                                    },
                                    getValueScaleId: function() {
                                        return this.getMeta().yAxisID;
                                    },
                                    getIndexScaleId: function() {
                                        return this.getMeta().xAxisID;
                                    },
                                    getValueScale: function() {
                                        return this.getScaleForId(this.getValueScaleId());
                                    },
                                    getIndexScale: function() {
                                        return this.getScaleForId(this.getIndexScaleId());
                                    },
                                    _getStacks: function(t5) {
                                        var e10, n13, r10 = this.chart, i9 = this.getIndexScale().options.stacked, o8 = void 0 === t5 ? r10.data.datasets.length : t5 + 1, a6 = [];
                                        for(e10 = 0; e10 < o8; ++e10)(n13 = r10.getDatasetMeta(e10)).bar && r10.isDatasetVisible(e10) && (!1 === i9 || !0 === i9 && -1 === a6.indexOf(n13.stack) || void 0 === i9 && (void 0 === n13.stack || -1 === a6.indexOf(n13.stack))) && a6.push(n13.stack);
                                        return a6;
                                    },
                                    getStackCount: function() {
                                        return this._getStacks().length;
                                    },
                                    getStackIndex: function(t5, e10) {
                                        var n13 = this._getStacks(t5), r10 = void 0 !== e10 ? n13.indexOf(e10) : -1;
                                        return -1 === r10 ? n13.length - 1 : r10;
                                    },
                                    getRuler: function() {
                                        var t5, e10, n13 = this.getIndexScale(), r10 = this.getStackCount(), i9 = this.index, a6 = n13.isHorizontal(), s = a6 ? n13.left : n13.top, l = s + (a6 ? n13.width : n13.height), u = [];
                                        for(t5 = 0, e10 = this.getMeta().data.length; t5 < e10; ++t5)u.push(n13.getPixelForValue(null, t5, i9));
                                        return {
                                            min: o7.isNullOrUndef(n13.options.barThickness) ? (function(t6, e11) {
                                                var n14, r11, i10, o8, a7 = t6.isHorizontal() ? t6.width : t6.height, s1 = t6.getTicks();
                                                for(i10 = 1, o8 = e11.length; i10 < o8; ++i10)a7 = Math.min(a7, e11[i10] - e11[i10 - 1]);
                                                for(i10 = 0, o8 = s1.length; i10 < o8; ++i10)r11 = t6.getPixelForTick(i10), a7 = i10 > 0 ? Math.min(a7, r11 - n14) : a7, n14 = r11;
                                                return a7;
                                            })(n13, u) : -1,
                                            pixels: u,
                                            start: s,
                                            end: l,
                                            stackCount: r10,
                                            scale: n13
                                        };
                                    },
                                    calculateBarValuePixels: function(t5, e10) {
                                        var n13, r10, i9, o8, a6, s, l = this.chart, u = this.getMeta(), c = this.getValueScale(), d2 = l.data.datasets, f = c.getRightValue(d2[t5].data[e10]), h = c.options.stacked, p = u.stack, g = 0;
                                        if (h || void 0 === h && void 0 !== p) for(n13 = 0; n13 < t5; ++n13)(r10 = l.getDatasetMeta(n13)).bar && r10.stack === p && r10.controller.getValueScaleId() === c.id && l.isDatasetVisible(n13) && (i9 = c.getRightValue(d2[n13].data[e10]), (f < 0 && i9 < 0 || f >= 0 && i9 > 0) && (g += i9));
                                        return o8 = c.getPixelForValue(g), {
                                            size: s = ((a6 = c.getPixelForValue(g + f)) - o8) / 2,
                                            base: o8,
                                            head: a6,
                                            center: a6 + s / 2
                                        };
                                    },
                                    calculateBarIndexPixels: function(t5, e10, n13) {
                                        var r10 = n13.scale.options, i9 = "flex" === r10.barThickness ? function(t6, e11, n14) {
                                            var r11, i10 = e11.pixels, o8 = i10[t6], a6 = t6 > 0 ? i10[t6 - 1] : null, s = t6 < i10.length - 1 ? i10[t6 + 1] : null, l = n14.categoryPercentage;
                                            return null === a6 && (a6 = o8 - (null === s ? e11.end - o8 : s - o8)), null === s && (s = o8 + o8 - a6), r11 = o8 - (o8 - a6) / 2 * l, {
                                                chunk: (s - a6) / 2 * l / e11.stackCount,
                                                ratio: n14.barPercentage,
                                                start: r11
                                            };
                                        }(e10, n13, r10) : function(t6, e11, n14) {
                                            var r11, i10, a6 = n14.barThickness, s = e11.stackCount, l = e11.pixels[t6];
                                            return o7.isNullOrUndef(a6) ? (r11 = e11.min * n14.categoryPercentage, i10 = n14.barPercentage) : (r11 = a6 * s, i10 = 1), {
                                                chunk: r11 / s,
                                                ratio: i10,
                                                start: l - r11 / 2
                                            };
                                        }(e10, n13, r10), a6 = this.getStackIndex(t5, this.getMeta().stack), s = i9.start + i9.chunk * a6 + i9.chunk / 2, l = Math.min(o7.valueOrDefault(r10.maxBarThickness, 1 / 0), i9.chunk * i9.ratio);
                                        return {
                                            base: s - l / 2,
                                            head: s + l / 2,
                                            center: s,
                                            size: l
                                        };
                                    },
                                    draw: function() {
                                        var t5 = this.chart, e10 = this.getValueScale(), n13 = this.getMeta().data, r10 = this.getDataset(), i9 = n13.length, a6 = 0;
                                        for(o7.canvas.clipArea(t5.ctx, t5.chartArea); a6 < i9; ++a6)isNaN(e10.getRightValue(r10.data[a6])) || n13[a6].draw();
                                        o7.canvas.unclipArea(t5.ctx);
                                    }
                                }), t4.controllers.horizontalBar = t4.controllers.bar.extend({
                                    getValueScaleId: function() {
                                        return this.getMeta().xAxisID;
                                    },
                                    getIndexScaleId: function() {
                                        return this.getMeta().yAxisID;
                                    }
                                });
                            };
                        },
                        {
                            26: 26,
                            41: 41,
                            46: 46
                        }
                    ],
                    16: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i6 = t3(41), a6 = t3(46);
                            r5._set("bubble", {
                                hover: {
                                    mode: "single"
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            type: "linear",
                                            position: "bottom",
                                            id: "x-axis-0"
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            type: "linear",
                                            position: "left",
                                            id: "y-axis-0"
                                        }
                                    ]
                                },
                                tooltips: {
                                    callbacks: {
                                        title: function() {
                                            return "";
                                        },
                                        label: function(t4, e10) {
                                            var n13 = e10.datasets[t4.datasetIndex].label || "", r10 = e10.datasets[t4.datasetIndex].data[t4.index];
                                            return n13 + ": (" + t4.xLabel + ", " + t4.yLabel + ", " + r10.r + ")";
                                        }
                                    }
                                }
                            }), e5.exports = function(t4) {
                                t4.controllers.bubble = t4.DatasetController.extend({
                                    dataElementType: i6.Point,
                                    update: function(t5) {
                                        var e10 = this, n13 = e10.getMeta().data;
                                        a6.each(n13, function(n14, r10) {
                                            e10.updateElement(n14, r10, t5);
                                        });
                                    },
                                    updateElement: function(t5, e10, n13) {
                                        var r10 = this, i9 = r10.getMeta(), a7 = t5.custom || {
                                        }, s = r10.getScaleForId(i9.xAxisID), l = r10.getScaleForId(i9.yAxisID), u = r10._resolveElementOptions(t5, e10), c = r10.getDataset().data[e10], d2 = r10.index, f = n13 ? s.getPixelForDecimal(0.5) : s.getPixelForValue("object" === o5(c) ? c : NaN, e10, d2), h = n13 ? l.getBasePixel() : l.getPixelForValue(c, e10, d2);
                                        t5._xScale = s, t5._yScale = l, t5._options = u, t5._datasetIndex = d2, t5._index = e10, t5._model = {
                                            backgroundColor: u.backgroundColor,
                                            borderColor: u.borderColor,
                                            borderWidth: u.borderWidth,
                                            hitRadius: u.hitRadius,
                                            pointStyle: u.pointStyle,
                                            rotation: u.rotation,
                                            radius: n13 ? 0 : u.radius,
                                            skip: a7.skip || isNaN(f) || isNaN(h),
                                            x: f,
                                            y: h
                                        }, t5.pivot();
                                    },
                                    setHoverStyle: function(t5) {
                                        var e10 = t5._model, n13 = t5._options;
                                        t5.$previousStyle = {
                                            backgroundColor: e10.backgroundColor,
                                            borderColor: e10.borderColor,
                                            borderWidth: e10.borderWidth,
                                            radius: e10.radius
                                        }, e10.backgroundColor = a6.valueOrDefault(n13.hoverBackgroundColor, a6.getHoverColor(n13.backgroundColor)), e10.borderColor = a6.valueOrDefault(n13.hoverBorderColor, a6.getHoverColor(n13.borderColor)), e10.borderWidth = a6.valueOrDefault(n13.hoverBorderWidth, n13.borderWidth), e10.radius = n13.radius + n13.hoverRadius;
                                    },
                                    _resolveElementOptions: function(t5, e10) {
                                        var n13, r10, i9, o7 = this.chart, s = o7.data.datasets[this.index], l = t5.custom || {
                                        }, u = o7.options.elements.point, c = a6.options.resolve, d2 = s.data[e10], f = {
                                        }, h = {
                                            chart: o7,
                                            dataIndex: e10,
                                            dataset: s,
                                            datasetIndex: this.index
                                        }, p = [
                                            "backgroundColor",
                                            "borderColor",
                                            "borderWidth",
                                            "hoverBackgroundColor",
                                            "hoverBorderColor",
                                            "hoverBorderWidth",
                                            "hoverRadius",
                                            "hitRadius",
                                            "pointStyle",
                                            "rotation"
                                        ];
                                        for(n13 = 0, r10 = p.length; n13 < r10; ++n13)f[i9 = p[n13]] = c([
                                            l[i9],
                                            s[i9],
                                            u[i9]
                                        ], h, e10);
                                        return f.radius = c([
                                            l.radius,
                                            d2 ? d2.r : void 0,
                                            s.radius,
                                            u.radius
                                        ], h, e10), f;
                                    }
                                });
                            };
                        },
                        {
                            26: 26,
                            41: 41,
                            46: 46
                        }
                    ],
                    17: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i6 = t3(41), o7 = t3(46);
                            r5._set("doughnut", {
                                animation: {
                                    animateRotate: !0,
                                    animateScale: !1
                                },
                                hover: {
                                    mode: "single"
                                },
                                legendCallback: function(t4) {
                                    var e10 = [];
                                    e10.push('<ul class="' + t4.id + '-legend">');
                                    var n13 = t4.data, r10 = n13.datasets, i9 = n13.labels;
                                    if (r10.length) for(var o8 = 0; o8 < r10[0].data.length; ++o8)e10.push('<li><span style="background-color:' + r10[0].backgroundColor[o8] + '"></span>'), i9[o8] && e10.push(i9[o8]), e10.push("</li>");
                                    return e10.push("</ul>"), e10.join("");
                                },
                                legend: {
                                    labels: {
                                        generateLabels: function(t4) {
                                            var e10 = t4.data;
                                            return e10.labels.length && e10.datasets.length ? e10.labels.map(function(n13, r10) {
                                                var i9 = t4.getDatasetMeta(0), a6 = e10.datasets[0], s = i9.data[r10], l = s && s.custom || {
                                                }, u = o7.valueAtIndexOrDefault, c = t4.options.elements.arc;
                                                return {
                                                    text: n13,
                                                    fillStyle: l.backgroundColor ? l.backgroundColor : u(a6.backgroundColor, r10, c.backgroundColor),
                                                    strokeStyle: l.borderColor ? l.borderColor : u(a6.borderColor, r10, c.borderColor),
                                                    lineWidth: l.borderWidth ? l.borderWidth : u(a6.borderWidth, r10, c.borderWidth),
                                                    hidden: isNaN(a6.data[r10]) || i9.data[r10].hidden,
                                                    index: r10
                                                };
                                            }) : [];
                                        }
                                    },
                                    onClick: function(t4, e10) {
                                        var n13, r10, i9, o8 = e10.index, a6 = this.chart;
                                        for(n13 = 0, r10 = (a6.data.datasets || []).length; n13 < r10; ++n13)(i9 = a6.getDatasetMeta(n13)).data[o8] && (i9.data[o8].hidden = !i9.data[o8].hidden);
                                        a6.update();
                                    }
                                },
                                cutoutPercentage: 50,
                                rotation: -0.5 * Math.PI,
                                circumference: 2 * Math.PI,
                                tooltips: {
                                    callbacks: {
                                        title: function() {
                                            return "";
                                        },
                                        label: function(t4, e10) {
                                            var n13 = e10.labels[t4.index], r10 = ": " + e10.datasets[t4.datasetIndex].data[t4.index];
                                            return o7.isArray(n13) ? (n13 = n13.slice())[0] += r10 : n13 += r10, n13;
                                        }
                                    }
                                }
                            }), r5._set("pie", o7.clone(r5.doughnut)), r5._set("pie", {
                                cutoutPercentage: 0
                            }), e5.exports = function(t4) {
                                t4.controllers.doughnut = t4.controllers.pie = t4.DatasetController.extend({
                                    dataElementType: i6.Arc,
                                    linkScales: o7.noop,
                                    getRingIndex: function(t5) {
                                        for(var e10 = 0, n13 = 0; n13 < t5; ++n13)this.chart.isDatasetVisible(n13) && ++e10;
                                        return e10;
                                    },
                                    update: function(t5) {
                                        var e10 = this, n13 = e10.chart, r10 = n13.chartArea, i9 = n13.options, a6 = i9.elements.arc, s = r10.right - r10.left - a6.borderWidth, l = r10.bottom - r10.top - a6.borderWidth, u = Math.min(s, l), c = {
                                            x: 0,
                                            y: 0
                                        }, d2 = e10.getMeta(), f = i9.cutoutPercentage, h = i9.circumference;
                                        if (h < 2 * Math.PI) {
                                            var p = i9.rotation % (2 * Math.PI), g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + h, v = {
                                                x: Math.cos(p),
                                                y: Math.sin(p)
                                            }, m = {
                                                x: Math.cos(g),
                                                y: Math.sin(g)
                                            }, y = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g, b = p <= 0.5 * Math.PI && 0.5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g, x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g, w = p <= 0.5 * -Math.PI && 0.5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g, S = f / 100, k = {
                                                x: x ? -1 : Math.min(v.x * (v.x < 0 ? 1 : S), m.x * (m.x < 0 ? 1 : S)),
                                                y: w ? -1 : Math.min(v.y * (v.y < 0 ? 1 : S), m.y * (m.y < 0 ? 1 : S))
                                            }, C = {
                                                x: y ? 1 : Math.max(v.x * (v.x > 0 ? 1 : S), m.x * (m.x > 0 ? 1 : S)),
                                                y: b ? 1 : Math.max(v.y * (v.y > 0 ? 1 : S), m.y * (m.y > 0 ? 1 : S))
                                            }, M = {
                                                width: 0.5 * (C.x - k.x),
                                                height: 0.5 * (C.y - k.y)
                                            };
                                            u = Math.min(s / M.width, l / M.height), c = {
                                                x: -0.5 * (C.x + k.x),
                                                y: -0.5 * (C.y + k.y)
                                            };
                                        }
                                        n13.borderWidth = e10.getMaxBorderWidth(d2.data), n13.outerRadius = Math.max((u - n13.borderWidth) / 2, 0), n13.innerRadius = Math.max(f ? n13.outerRadius / 100 * f : 0, 0), n13.radiusLength = (n13.outerRadius - n13.innerRadius) / n13.getVisibleDatasetCount(), n13.offsetX = c.x * n13.outerRadius, n13.offsetY = c.y * n13.outerRadius, d2.total = e10.calculateTotal(), e10.outerRadius = n13.outerRadius - n13.radiusLength * e10.getRingIndex(e10.index), e10.innerRadius = Math.max(e10.outerRadius - n13.radiusLength, 0), o7.each(d2.data, function(n14, r11) {
                                            e10.updateElement(n14, r11, t5);
                                        });
                                    },
                                    updateElement: function(t5, e10, n13) {
                                        var r10 = this, i9 = r10.chart, a6 = i9.chartArea, s = i9.options, l = s.animation, u = (a6.left + a6.right) / 2, c = (a6.top + a6.bottom) / 2, d2 = s.rotation, f = s.rotation, h = r10.getDataset(), p = n13 && l.animateRotate ? 0 : t5.hidden ? 0 : r10.calculateCircumference(h.data[e10]) * (s.circumference / (2 * Math.PI)), g = n13 && l.animateScale ? 0 : r10.innerRadius, v = n13 && l.animateScale ? 0 : r10.outerRadius, m = o7.valueAtIndexOrDefault;
                                        o7.extend(t5, {
                                            _datasetIndex: r10.index,
                                            _index: e10,
                                            _model: {
                                                x: u + i9.offsetX,
                                                y: c + i9.offsetY,
                                                startAngle: d2,
                                                endAngle: f,
                                                circumference: p,
                                                outerRadius: v,
                                                innerRadius: g,
                                                label: m(h.label, e10, i9.data.labels[e10])
                                            }
                                        });
                                        var y = t5._model, b = t5.custom || {
                                        }, x = o7.valueAtIndexOrDefault, w = this.chart.options.elements.arc;
                                        y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(h.backgroundColor, e10, w.backgroundColor), y.borderColor = b.borderColor ? b.borderColor : x(h.borderColor, e10, w.borderColor), y.borderWidth = b.borderWidth ? b.borderWidth : x(h.borderWidth, e10, w.borderWidth), n13 && l.animateRotate || (y.startAngle = 0 === e10 ? s.rotation : r10.getMeta().data[e10 - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t5.pivot();
                                    },
                                    calculateTotal: function() {
                                        var t5, e10 = this.getDataset(), n13 = this.getMeta(), r10 = 0;
                                        return o7.each(n13.data, function(n14, i9) {
                                            t5 = e10.data[i9], isNaN(t5) || n14.hidden || (r10 += Math.abs(t5));
                                        }), r10;
                                    },
                                    calculateCircumference: function(t5) {
                                        var e10 = this.getMeta().total;
                                        return e10 > 0 && !isNaN(t5) ? 2 * Math.PI * (Math.abs(t5) / e10) : 0;
                                    },
                                    getMaxBorderWidth: function(t5) {
                                        for(var e10, n13, r10 = 0, i9 = this.index, o8 = t5.length, a6 = 0; a6 < o8; a6++)e10 = t5[a6]._model ? t5[a6]._model.borderWidth : 0, r10 = (n13 = t5[a6]._chart ? t5[a6]._chart.config.data.datasets[i9].hoverBorderWidth : 0) > (r10 = e10 > r10 ? e10 : r10) ? n13 : r10;
                                        return r10;
                                    }
                                });
                            };
                        },
                        {
                            26: 26,
                            41: 41,
                            46: 46
                        }
                    ],
                    18: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i6 = t3(41), a6 = t3(46);
                            r5._set("line", {
                                showLines: !0,
                                spanGaps: !1,
                                hover: {
                                    mode: "label"
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            type: "category",
                                            id: "x-axis-0"
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            type: "linear",
                                            id: "y-axis-0"
                                        }
                                    ]
                                }
                            }), e5.exports = function(t4) {
                                function e10(t5, e11) {
                                    return a6.valueOrDefault(t5.showLine, e11.showLines);
                                }
                                t4.controllers.line = t4.DatasetController.extend({
                                    datasetElementType: i6.Line,
                                    dataElementType: i6.Point,
                                    update: function(t5) {
                                        var n13, r10, i9, o7 = this, s = o7.getMeta(), l = s.dataset, u = s.data || [], c = o7.chart.options, d2 = c.elements.line, f = o7.getScaleForId(s.yAxisID), h = o7.getDataset(), p = e10(h, c);
                                        for(p && (i9 = l.custom || {
                                        }, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), l._scale = f, l._datasetIndex = o7.index, l._children = u, l._model = {
                                            spanGaps: h.spanGaps ? h.spanGaps : c.spanGaps,
                                            tension: i9.tension ? i9.tension : a6.valueOrDefault(h.lineTension, d2.tension),
                                            backgroundColor: i9.backgroundColor ? i9.backgroundColor : h.backgroundColor || d2.backgroundColor,
                                            borderWidth: i9.borderWidth ? i9.borderWidth : h.borderWidth || d2.borderWidth,
                                            borderColor: i9.borderColor ? i9.borderColor : h.borderColor || d2.borderColor,
                                            borderCapStyle: i9.borderCapStyle ? i9.borderCapStyle : h.borderCapStyle || d2.borderCapStyle,
                                            borderDash: i9.borderDash ? i9.borderDash : h.borderDash || d2.borderDash,
                                            borderDashOffset: i9.borderDashOffset ? i9.borderDashOffset : h.borderDashOffset || d2.borderDashOffset,
                                            borderJoinStyle: i9.borderJoinStyle ? i9.borderJoinStyle : h.borderJoinStyle || d2.borderJoinStyle,
                                            fill: i9.fill ? i9.fill : void 0 !== h.fill ? h.fill : d2.fill,
                                            steppedLine: i9.steppedLine ? i9.steppedLine : a6.valueOrDefault(h.steppedLine, d2.stepped),
                                            cubicInterpolationMode: i9.cubicInterpolationMode ? i9.cubicInterpolationMode : a6.valueOrDefault(h.cubicInterpolationMode, d2.cubicInterpolationMode)
                                        }, l.pivot()), n13 = 0, r10 = u.length; n13 < r10; ++n13)o7.updateElement(u[n13], n13, t5);
                                        for(p && 0 !== l._model.tension && o7.updateBezierControlPoints(), n13 = 0, r10 = u.length; n13 < r10; ++n13)u[n13].pivot();
                                    },
                                    getPointBackgroundColor: function(t5, e11) {
                                        var n13 = this.chart.options.elements.point.backgroundColor, r10 = this.getDataset(), i9 = t5.custom || {
                                        };
                                        return i9.backgroundColor ? n13 = i9.backgroundColor : r10.pointBackgroundColor ? n13 = a6.valueAtIndexOrDefault(r10.pointBackgroundColor, e11, n13) : r10.backgroundColor && (n13 = r10.backgroundColor), n13;
                                    },
                                    getPointBorderColor: function(t5, e11) {
                                        var n13 = this.chart.options.elements.point.borderColor, r10 = this.getDataset(), i9 = t5.custom || {
                                        };
                                        return i9.borderColor ? n13 = i9.borderColor : r10.pointBorderColor ? n13 = a6.valueAtIndexOrDefault(r10.pointBorderColor, e11, n13) : r10.borderColor && (n13 = r10.borderColor), n13;
                                    },
                                    getPointBorderWidth: function(t5, e11) {
                                        var n13 = this.chart.options.elements.point.borderWidth, r10 = this.getDataset(), i9 = t5.custom || {
                                        };
                                        return isNaN(i9.borderWidth) ? !isNaN(r10.pointBorderWidth) || a6.isArray(r10.pointBorderWidth) ? n13 = a6.valueAtIndexOrDefault(r10.pointBorderWidth, e11, n13) : isNaN(r10.borderWidth) || (n13 = r10.borderWidth) : n13 = i9.borderWidth, n13;
                                    },
                                    getPointRotation: function(t5, e11) {
                                        var n13 = this.chart.options.elements.point.rotation, r10 = this.getDataset(), i9 = t5.custom || {
                                        };
                                        return isNaN(i9.rotation) ? isNaN(r10.pointRotation) && !a6.isArray(r10.pointRotation) || (n13 = a6.valueAtIndexOrDefault(r10.pointRotation, e11, n13)) : n13 = i9.rotation, n13;
                                    },
                                    updateElement: function(t5, e11, n13) {
                                        var r10, i9, s = this, l = s.getMeta(), u = t5.custom || {
                                        }, c = s.getDataset(), d2 = s.index, f = c.data[e11], h = s.getScaleForId(l.yAxisID), p = s.getScaleForId(l.xAxisID), g = s.chart.options.elements.point;
                                        void 0 !== c.radius && void 0 === c.pointRadius && (c.pointRadius = c.radius), void 0 !== c.hitRadius && void 0 === c.pointHitRadius && (c.pointHitRadius = c.hitRadius), r10 = p.getPixelForValue("object" === o5(f) ? f : NaN, e11, d2), i9 = n13 ? h.getBasePixel() : s.calculatePointY(f, e11, d2), t5._xScale = p, t5._yScale = h, t5._datasetIndex = d2, t5._index = e11, t5._model = {
                                            x: r10,
                                            y: i9,
                                            skip: u.skip || isNaN(r10) || isNaN(i9),
                                            radius: u.radius || a6.valueAtIndexOrDefault(c.pointRadius, e11, g.radius),
                                            pointStyle: u.pointStyle || a6.valueAtIndexOrDefault(c.pointStyle, e11, g.pointStyle),
                                            rotation: s.getPointRotation(t5, e11),
                                            backgroundColor: s.getPointBackgroundColor(t5, e11),
                                            borderColor: s.getPointBorderColor(t5, e11),
                                            borderWidth: s.getPointBorderWidth(t5, e11),
                                            tension: l.dataset._model ? l.dataset._model.tension : 0,
                                            steppedLine: !!l.dataset._model && l.dataset._model.steppedLine,
                                            hitRadius: u.hitRadius || a6.valueAtIndexOrDefault(c.pointHitRadius, e11, g.hitRadius)
                                        };
                                    },
                                    calculatePointY: function(t5, e11, n13) {
                                        var r10, i9, o7, a7 = this.chart, s = this.getMeta(), l = this.getScaleForId(s.yAxisID), u = 0, c = 0;
                                        if (l.options.stacked) {
                                            for(r10 = 0; r10 < n13; r10++)if (i9 = a7.data.datasets[r10], "line" === (o7 = a7.getDatasetMeta(r10)).type && o7.yAxisID === l.id && a7.isDatasetVisible(r10)) {
                                                var d2 = Number(l.getRightValue(i9.data[e11]));
                                                d2 < 0 ? c += d2 || 0 : u += d2 || 0;
                                            }
                                            var f = Number(l.getRightValue(t5));
                                            return f < 0 ? l.getPixelForValue(c + f) : l.getPixelForValue(u + f);
                                        }
                                        return l.getPixelForValue(t5);
                                    },
                                    updateBezierControlPoints: function() {
                                        var t5, e11, n13, r10, i9 = this.getMeta(), o7 = this.chart.chartArea, s = i9.data || [];
                                        function l(t6, e12, n14) {
                                            return Math.max(Math.min(t6, n14), e12);
                                        }
                                        if (i9.dataset._model.spanGaps && (s = s.filter(function(t6) {
                                            return !t6._model.skip;
                                        })), "monotone" === i9.dataset._model.cubicInterpolationMode) a6.splineCurveMonotone(s);
                                        else for(t5 = 0, e11 = s.length; t5 < e11; ++t5)n13 = s[t5]._model, r10 = a6.splineCurve(a6.previousItem(s, t5)._model, n13, a6.nextItem(s, t5)._model, i9.dataset._model.tension), n13.controlPointPreviousX = r10.previous.x, n13.controlPointPreviousY = r10.previous.y, n13.controlPointNextX = r10.next.x, n13.controlPointNextY = r10.next.y;
                                        if (this.chart.options.elements.line.capBezierPoints) for(t5 = 0, e11 = s.length; t5 < e11; ++t5)(n13 = s[t5]._model).controlPointPreviousX = l(n13.controlPointPreviousX, o7.left, o7.right), n13.controlPointPreviousY = l(n13.controlPointPreviousY, o7.top, o7.bottom), n13.controlPointNextX = l(n13.controlPointNextX, o7.left, o7.right), n13.controlPointNextY = l(n13.controlPointNextY, o7.top, o7.bottom);
                                    },
                                    draw: function() {
                                        var t5, n13 = this.chart, r10 = this.getMeta(), i9 = r10.data || [], o7 = n13.chartArea, s = i9.length, l = 0;
                                        for(e10(this.getDataset(), n13.options) && (t5 = (r10.dataset._model.borderWidth || 0) / 2, a6.canvas.clipArea(n13.ctx, {
                                            left: o7.left,
                                            right: o7.right,
                                            top: o7.top - t5,
                                            bottom: o7.bottom + t5
                                        }), r10.dataset.draw(), a6.canvas.unclipArea(n13.ctx)); l < s; ++l)i9[l].draw(o7);
                                    },
                                    setHoverStyle: function(t5) {
                                        var e11 = this.chart.data.datasets[t5._datasetIndex], n13 = t5._index, r10 = t5.custom || {
                                        }, i9 = t5._model;
                                        t5.$previousStyle = {
                                            backgroundColor: i9.backgroundColor,
                                            borderColor: i9.borderColor,
                                            borderWidth: i9.borderWidth,
                                            radius: i9.radius
                                        }, i9.backgroundColor = r10.hoverBackgroundColor || a6.valueAtIndexOrDefault(e11.pointHoverBackgroundColor, n13, a6.getHoverColor(i9.backgroundColor)), i9.borderColor = r10.hoverBorderColor || a6.valueAtIndexOrDefault(e11.pointHoverBorderColor, n13, a6.getHoverColor(i9.borderColor)), i9.borderWidth = r10.hoverBorderWidth || a6.valueAtIndexOrDefault(e11.pointHoverBorderWidth, n13, i9.borderWidth), i9.radius = r10.hoverRadius || a6.valueAtIndexOrDefault(e11.pointHoverRadius, n13, this.chart.options.elements.point.hoverRadius);
                                    }
                                });
                            };
                        },
                        {
                            26: 26,
                            41: 41,
                            46: 46
                        }
                    ],
                    19: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i6 = t3(41), o7 = t3(46);
                            r5._set("polarArea", {
                                scale: {
                                    type: "radialLinear",
                                    angleLines: {
                                        display: !1
                                    },
                                    gridLines: {
                                        circular: !0
                                    },
                                    pointLabels: {
                                        display: !1
                                    },
                                    ticks: {
                                        beginAtZero: !0
                                    }
                                },
                                animation: {
                                    animateRotate: !0,
                                    animateScale: !0
                                },
                                startAngle: -0.5 * Math.PI,
                                legendCallback: function(t4) {
                                    var e10 = [];
                                    e10.push('<ul class="' + t4.id + '-legend">');
                                    var n13 = t4.data, r10 = n13.datasets, i9 = n13.labels;
                                    if (r10.length) for(var o8 = 0; o8 < r10[0].data.length; ++o8)e10.push('<li><span style="background-color:' + r10[0].backgroundColor[o8] + '"></span>'), i9[o8] && e10.push(i9[o8]), e10.push("</li>");
                                    return e10.push("</ul>"), e10.join("");
                                },
                                legend: {
                                    labels: {
                                        generateLabels: function(t4) {
                                            var e10 = t4.data;
                                            return e10.labels.length && e10.datasets.length ? e10.labels.map(function(n13, r10) {
                                                var i9 = t4.getDatasetMeta(0), a6 = e10.datasets[0], s = i9.data[r10].custom || {
                                                }, l = o7.valueAtIndexOrDefault, u = t4.options.elements.arc;
                                                return {
                                                    text: n13,
                                                    fillStyle: s.backgroundColor ? s.backgroundColor : l(a6.backgroundColor, r10, u.backgroundColor),
                                                    strokeStyle: s.borderColor ? s.borderColor : l(a6.borderColor, r10, u.borderColor),
                                                    lineWidth: s.borderWidth ? s.borderWidth : l(a6.borderWidth, r10, u.borderWidth),
                                                    hidden: isNaN(a6.data[r10]) || i9.data[r10].hidden,
                                                    index: r10
                                                };
                                            }) : [];
                                        }
                                    },
                                    onClick: function(t4, e10) {
                                        var n13, r10, i9, o8 = e10.index, a6 = this.chart;
                                        for(n13 = 0, r10 = (a6.data.datasets || []).length; n13 < r10; ++n13)(i9 = a6.getDatasetMeta(n13)).data[o8].hidden = !i9.data[o8].hidden;
                                        a6.update();
                                    }
                                },
                                tooltips: {
                                    callbacks: {
                                        title: function() {
                                            return "";
                                        },
                                        label: function(t4, e10) {
                                            return e10.labels[t4.index] + ": " + t4.yLabel;
                                        }
                                    }
                                }
                            }), e5.exports = function(t4) {
                                t4.controllers.polarArea = t4.DatasetController.extend({
                                    dataElementType: i6.Arc,
                                    linkScales: o7.noop,
                                    update: function(t5) {
                                        var e10, n13, r10, i9 = this, a6 = i9.getDataset(), s = i9.getMeta(), l = i9.chart.options.startAngle || 0, u = i9._starts = [], c = i9._angles = [];
                                        for(i9._updateRadius(), s.count = i9.countVisibleElements(), e10 = 0, n13 = a6.data.length; e10 < n13; e10++)u[e10] = l, r10 = i9._computeAngle(e10), c[e10] = r10, l += r10;
                                        o7.each(s.data, function(e11, n14) {
                                            i9.updateElement(e11, n14, t5);
                                        });
                                    },
                                    _updateRadius: function() {
                                        var t5 = this, e10 = t5.chart, n13 = e10.chartArea, r10 = e10.options, i9 = r10.elements.arc, o8 = Math.min(n13.right - n13.left, n13.bottom - n13.top);
                                        e10.outerRadius = Math.max((o8 - i9.borderWidth / 2) / 2, 0), e10.innerRadius = Math.max(r10.cutoutPercentage ? e10.outerRadius / 100 * r10.cutoutPercentage : 1, 0), e10.radiusLength = (e10.outerRadius - e10.innerRadius) / e10.getVisibleDatasetCount(), t5.outerRadius = e10.outerRadius - e10.radiusLength * t5.index, t5.innerRadius = t5.outerRadius - e10.radiusLength;
                                    },
                                    updateElement: function(t5, e10, n13) {
                                        var r10 = this, i9 = r10.chart, a6 = r10.getDataset(), s = i9.options, l = s.animation, u = i9.scale, c = i9.data.labels, d3 = u.xCenter, f = u.yCenter, h = s.startAngle, p = t5.hidden ? 0 : u.getDistanceFromCenterForValue(a6.data[e10]), g = r10._starts[e10], v = g + (t5.hidden ? 0 : r10._angles[e10]), m = l.animateScale ? 0 : u.getDistanceFromCenterForValue(a6.data[e10]);
                                        o7.extend(t5, {
                                            _datasetIndex: r10.index,
                                            _index: e10,
                                            _scale: u,
                                            _model: {
                                                x: d3,
                                                y: f,
                                                innerRadius: 0,
                                                outerRadius: n13 ? m : p,
                                                startAngle: n13 && l.animateRotate ? h : g,
                                                endAngle: n13 && l.animateRotate ? h : v,
                                                label: o7.valueAtIndexOrDefault(c, e10, c[e10])
                                            }
                                        });
                                        var y = this.chart.options.elements.arc, b = t5.custom || {
                                        }, x = o7.valueAtIndexOrDefault, w = t5._model;
                                        w.backgroundColor = b.backgroundColor ? b.backgroundColor : x(a6.backgroundColor, e10, y.backgroundColor), w.borderColor = b.borderColor ? b.borderColor : x(a6.borderColor, e10, y.borderColor), w.borderWidth = b.borderWidth ? b.borderWidth : x(a6.borderWidth, e10, y.borderWidth), t5.pivot();
                                    },
                                    countVisibleElements: function() {
                                        var t5 = this.getDataset(), e10 = this.getMeta(), n13 = 0;
                                        return o7.each(e10.data, function(e11, r10) {
                                            isNaN(t5.data[r10]) || e11.hidden || n13++;
                                        }), n13;
                                    },
                                    _computeAngle: function(t5) {
                                        var e10 = this, n13 = this.getMeta().count, r10 = e10.getDataset(), i9 = e10.getMeta();
                                        if (isNaN(r10.data[t5]) || i9.data[t5].hidden) return 0;
                                        var a6 = {
                                            chart: e10.chart,
                                            dataIndex: t5,
                                            dataset: r10,
                                            datasetIndex: e10.index
                                        };
                                        return o7.options.resolve([
                                            e10.chart.options.elements.arc.angle,
                                            2 * Math.PI / n13
                                        ], a6, t5);
                                    }
                                });
                            };
                        },
                        {
                            26: 26,
                            41: 41,
                            46: 46
                        }
                    ],
                    20: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i6 = t3(41), o7 = t3(46);
                            r5._set("radar", {
                                scale: {
                                    type: "radialLinear"
                                },
                                elements: {
                                    line: {
                                        tension: 0
                                    }
                                }
                            }), e5.exports = function(t4) {
                                t4.controllers.radar = t4.DatasetController.extend({
                                    datasetElementType: i6.Line,
                                    dataElementType: i6.Point,
                                    linkScales: o7.noop,
                                    update: function(t5) {
                                        var e10 = this, n13 = e10.getMeta(), r10 = n13.dataset, i9 = n13.data, a6 = r10.custom || {
                                        }, s = e10.getDataset(), l = e10.chart.options.elements.line, u = e10.chart.scale;
                                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o7.extend(n13.dataset, {
                                            _datasetIndex: e10.index,
                                            _scale: u,
                                            _children: i9,
                                            _loop: !0,
                                            _model: {
                                                tension: a6.tension ? a6.tension : o7.valueOrDefault(s.lineTension, l.tension),
                                                backgroundColor: a6.backgroundColor ? a6.backgroundColor : s.backgroundColor || l.backgroundColor,
                                                borderWidth: a6.borderWidth ? a6.borderWidth : s.borderWidth || l.borderWidth,
                                                borderColor: a6.borderColor ? a6.borderColor : s.borderColor || l.borderColor,
                                                fill: a6.fill ? a6.fill : void 0 !== s.fill ? s.fill : l.fill,
                                                borderCapStyle: a6.borderCapStyle ? a6.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                                borderDash: a6.borderDash ? a6.borderDash : s.borderDash || l.borderDash,
                                                borderDashOffset: a6.borderDashOffset ? a6.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                                borderJoinStyle: a6.borderJoinStyle ? a6.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                                            }
                                        }), n13.dataset.pivot(), o7.each(i9, function(n14, r11) {
                                            e10.updateElement(n14, r11, t5);
                                        }, e10), e10.updateBezierControlPoints();
                                    },
                                    updateElement: function(t5, e10, n13) {
                                        var r10 = this, i9 = t5.custom || {
                                        }, a6 = r10.getDataset(), s = r10.chart.scale, l = r10.chart.options.elements.point, u = s.getPointPositionForValue(e10, a6.data[e10]);
                                        void 0 !== a6.radius && void 0 === a6.pointRadius && (a6.pointRadius = a6.radius), void 0 !== a6.hitRadius && void 0 === a6.pointHitRadius && (a6.pointHitRadius = a6.hitRadius), o7.extend(t5, {
                                            _datasetIndex: r10.index,
                                            _index: e10,
                                            _scale: s,
                                            _model: {
                                                x: n13 ? s.xCenter : u.x,
                                                y: n13 ? s.yCenter : u.y,
                                                tension: i9.tension ? i9.tension : o7.valueOrDefault(a6.lineTension, r10.chart.options.elements.line.tension),
                                                radius: i9.radius ? i9.radius : o7.valueAtIndexOrDefault(a6.pointRadius, e10, l.radius),
                                                backgroundColor: i9.backgroundColor ? i9.backgroundColor : o7.valueAtIndexOrDefault(a6.pointBackgroundColor, e10, l.backgroundColor),
                                                borderColor: i9.borderColor ? i9.borderColor : o7.valueAtIndexOrDefault(a6.pointBorderColor, e10, l.borderColor),
                                                borderWidth: i9.borderWidth ? i9.borderWidth : o7.valueAtIndexOrDefault(a6.pointBorderWidth, e10, l.borderWidth),
                                                pointStyle: i9.pointStyle ? i9.pointStyle : o7.valueAtIndexOrDefault(a6.pointStyle, e10, l.pointStyle),
                                                rotation: i9.rotation ? i9.rotation : o7.valueAtIndexOrDefault(a6.pointRotation, e10, l.rotation),
                                                hitRadius: i9.hitRadius ? i9.hitRadius : o7.valueAtIndexOrDefault(a6.pointHitRadius, e10, l.hitRadius)
                                            }
                                        }), t5._model.skip = i9.skip ? i9.skip : isNaN(t5._model.x) || isNaN(t5._model.y);
                                    },
                                    updateBezierControlPoints: function() {
                                        var t5 = this.chart.chartArea, e10 = this.getMeta();
                                        o7.each(e10.data, function(n13, r10) {
                                            var i9 = n13._model, a6 = o7.splineCurve(o7.previousItem(e10.data, r10, !0)._model, i9, o7.nextItem(e10.data, r10, !0)._model, i9.tension);
                                            i9.controlPointPreviousX = Math.max(Math.min(a6.previous.x, t5.right), t5.left), i9.controlPointPreviousY = Math.max(Math.min(a6.previous.y, t5.bottom), t5.top), i9.controlPointNextX = Math.max(Math.min(a6.next.x, t5.right), t5.left), i9.controlPointNextY = Math.max(Math.min(a6.next.y, t5.bottom), t5.top), n13.pivot();
                                        });
                                    },
                                    setHoverStyle: function(t5) {
                                        var e10 = this.chart.data.datasets[t5._datasetIndex], n13 = t5.custom || {
                                        }, r10 = t5._index, i9 = t5._model;
                                        t5.$previousStyle = {
                                            backgroundColor: i9.backgroundColor,
                                            borderColor: i9.borderColor,
                                            borderWidth: i9.borderWidth,
                                            radius: i9.radius
                                        }, i9.radius = n13.hoverRadius ? n13.hoverRadius : o7.valueAtIndexOrDefault(e10.pointHoverRadius, r10, this.chart.options.elements.point.hoverRadius), i9.backgroundColor = n13.hoverBackgroundColor ? n13.hoverBackgroundColor : o7.valueAtIndexOrDefault(e10.pointHoverBackgroundColor, r10, o7.getHoverColor(i9.backgroundColor)), i9.borderColor = n13.hoverBorderColor ? n13.hoverBorderColor : o7.valueAtIndexOrDefault(e10.pointHoverBorderColor, r10, o7.getHoverColor(i9.borderColor)), i9.borderWidth = n13.hoverBorderWidth ? n13.hoverBorderWidth : o7.valueAtIndexOrDefault(e10.pointHoverBorderWidth, r10, i9.borderWidth);
                                    }
                                });
                            };
                        },
                        {
                            26: 26,
                            41: 41,
                            46: 46
                        }
                    ],
                    21: [
                        function(t3, e5, n7) {
                            t3(26)._set("scatter", {
                                hover: {
                                    mode: "single"
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            id: "x-axis-1",
                                            type: "linear",
                                            position: "bottom"
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            id: "y-axis-1",
                                            type: "linear",
                                            position: "left"
                                        }
                                    ]
                                },
                                showLines: !1,
                                tooltips: {
                                    callbacks: {
                                        title: function() {
                                            return "";
                                        },
                                        label: function(t4) {
                                            return "(" + t4.xLabel + ", " + t4.yLabel + ")";
                                        }
                                    }
                                }
                            }), e5.exports = function(t4) {
                                t4.controllers.scatter = t4.controllers.line;
                            };
                        },
                        {
                            26: 26
                        }
                    ],
                    22: [
                        function(t3, e5, n7) {
                            var r5 = t3(27);
                            n7 = e5.exports = r5.extend({
                                chart: null,
                                currentStep: 0,
                                numSteps: 60,
                                easing: "",
                                render: null,
                                onAnimationProgress: null,
                                onAnimationComplete: null
                            });
                            Object.defineProperty(n7.prototype, "animationObject", {
                                get: function() {
                                    return this;
                                }
                            }), Object.defineProperty(n7.prototype, "chartInstance", {
                                get: function() {
                                    return this.chart;
                                },
                                set: function(t4) {
                                    this.chart = t4;
                                }
                            });
                        },
                        {
                            27: 27
                        }
                    ],
                    23: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i6 = t3(46);
                            r5._set("global", {
                                animation: {
                                    duration: 1000,
                                    easing: "easeOutQuart",
                                    onProgress: i6.noop,
                                    onComplete: i6.noop
                                }
                            }), e5.exports = {
                                frameDuration: 17,
                                animations: [],
                                dropFrames: 0,
                                request: null,
                                addAnimation: function(t4, e10, n13, r10) {
                                    var i9, o7, a6 = this.animations;
                                    for(e10.chart = t4, r10 || (t4.animating = !0), i9 = 0, o7 = a6.length; i9 < o7; ++i9)if (a6[i9].chart === t4) return void (a6[i9] = e10);
                                    a6.push(e10), 1 === a6.length && this.requestAnimationFrame();
                                },
                                cancelAnimation: function(t4) {
                                    var e10 = i6.findIndex(this.animations, function(e11) {
                                        return e11.chart === t4;
                                    });
                                    -1 !== e10 && (this.animations.splice(e10, 1), t4.animating = !1);
                                },
                                requestAnimationFrame: function() {
                                    var t4 = this;
                                    null === t4.request && (t4.request = i6.requestAnimFrame.call(window, function() {
                                        t4.request = null, t4.startDigest();
                                    }));
                                },
                                startDigest: function() {
                                    var t4 = this, e10 = Date.now(), n13 = 0;
                                    t4.dropFrames > 1 && (n13 = Math.floor(t4.dropFrames), t4.dropFrames = t4.dropFrames % 1), t4.advance(1 + n13);
                                    var r10 = Date.now();
                                    t4.dropFrames += (r10 - e10) / t4.frameDuration, t4.animations.length > 0 && t4.requestAnimationFrame();
                                },
                                advance: function(t4) {
                                    for(var e10, n13, r10 = this.animations, o7 = 0; o7 < r10.length;)n13 = (e10 = r10[o7]).chart, e10.currentStep = (e10.currentStep || 0) + t4, e10.currentStep = Math.min(e10.currentStep, e10.numSteps), i6.callback(e10.render, [
                                        n13,
                                        e10
                                    ], n13), i6.callback(e10.onAnimationProgress, [
                                        e10
                                    ], n13), e10.currentStep >= e10.numSteps ? (i6.callback(e10.onAnimationComplete, [
                                        e10
                                    ], n13), n13.animating = !1, r10.splice(o7, 1)) : ++o7;
                                }
                            };
                        },
                        {
                            26: 26,
                            46: 46
                        }
                    ],
                    24: [
                        function(t3, e5, n7) {
                            var r5 = t3(22), i6 = t3(23), a6 = t3(26), s = t3(46), l = t3(29), u = t3(31), c = t3(49), d3 = t3(32), f = t3(34), h = t3(36);
                            e5.exports = function(t4) {
                                function e10(e11) {
                                    var n13 = e11.options;
                                    s.each(e11.scales, function(t5) {
                                        u.removeBox(e11, t5);
                                    }), n13 = s.configMerge(t4.defaults.global, t4.defaults[e11.config.type], n13), e11.options = e11.config.options = n13, e11.ensureScalesHaveIDs(), e11.buildOrUpdateScales(), e11.tooltip._options = n13.tooltips, e11.tooltip.initialize();
                                }
                                function n13(t5) {
                                    return "top" === t5 || "bottom" === t5;
                                }
                                t4.types = {
                                }, t4.instances = {
                                }, t4.controllers = {
                                }, s.extend(t4.prototype, {
                                    construct: function(e11, n14) {
                                        var r10 = this;
                                        n14 = (function(t5) {
                                            var e12 = (t5 = t5 || {
                                            }).data = t5.data || {
                                            };
                                            return e12.datasets = e12.datasets || [], e12.labels = e12.labels || [], t5.options = s.configMerge(a6.global, a6[t5.type], t5.options || {
                                            }), t5;
                                        })(n14);
                                        var i9 = c.acquireContext(e11, n14), o7 = i9 && i9.canvas, l1 = o7 && o7.height, u1 = o7 && o7.width;
                                        r10.id = s.uid(), r10.ctx = i9, r10.canvas = o7, r10.config = n14, r10.width = u1, r10.height = l1, r10.aspectRatio = l1 ? u1 / l1 : null, r10.options = n14.options, r10._bufferedRender = !1, r10.chart = r10, r10.controller = r10, t4.instances[r10.id] = r10, Object.defineProperty(r10, "data", {
                                            get: function() {
                                                return r10.config.data;
                                            },
                                            set: function(t5) {
                                                r10.config.data = t5;
                                            }
                                        }), i9 && o7 ? (r10.initialize(), r10.update()) : console.error("Failed to create chart: can't acquire context from the given item");
                                    },
                                    initialize: function() {
                                        var t5 = this;
                                        return d3.notify(t5, "beforeInit"), s.retinaScale(t5, t5.options.devicePixelRatio), t5.bindEvents(), t5.options.responsive && t5.resize(!0), t5.ensureScalesHaveIDs(), t5.buildOrUpdateScales(), t5.initToolTip(), d3.notify(t5, "afterInit"), t5;
                                    },
                                    clear: function() {
                                        return s.canvas.clear(this), this;
                                    },
                                    stop: function() {
                                        return i6.cancelAnimation(this), this;
                                    },
                                    resize: function(t5) {
                                        var e11 = this, n14 = e11.options, r10 = e11.canvas, i9 = n14.maintainAspectRatio && e11.aspectRatio || null, o7 = Math.max(0, Math.floor(s.getMaximumWidth(r10))), a7 = Math.max(0, Math.floor(i9 ? o7 / i9 : s.getMaximumHeight(r10)));
                                        if ((e11.width !== o7 || e11.height !== a7) && (r10.width = e11.width = o7, r10.height = e11.height = a7, r10.style.width = o7 + "px", r10.style.height = a7 + "px", s.retinaScale(e11, n14.devicePixelRatio), !t5)) {
                                            var l1 = {
                                                width: o7,
                                                height: a7
                                            };
                                            d3.notify(e11, "resize", [
                                                l1
                                            ]), e11.options.onResize && e11.options.onResize(e11, l1), e11.stop(), e11.update({
                                                duration: e11.options.responsiveAnimationDuration
                                            });
                                        }
                                    },
                                    ensureScalesHaveIDs: function() {
                                        var t5 = this.options, e11 = t5.scales || {
                                        }, n14 = t5.scale;
                                        s.each(e11.xAxes, function(t6, e12) {
                                            t6.id = t6.id || "x-axis-" + e12;
                                        }), s.each(e11.yAxes, function(t6, e12) {
                                            t6.id = t6.id || "y-axis-" + e12;
                                        }), n14 && (n14.id = n14.id || "scale");
                                    },
                                    buildOrUpdateScales: function() {
                                        var t5 = this, e11 = t5.options, r10 = t5.scales || {
                                        }, i9 = [], o7 = Object.keys(r10).reduce(function(t6, e12) {
                                            return t6[e12] = !1, t6;
                                        }, {
                                        });
                                        e11.scales && (i9 = i9.concat((e11.scales.xAxes || []).map(function(t6) {
                                            return {
                                                options: t6,
                                                dtype: "category",
                                                dposition: "bottom"
                                            };
                                        }), (e11.scales.yAxes || []).map(function(t6) {
                                            return {
                                                options: t6,
                                                dtype: "linear",
                                                dposition: "left"
                                            };
                                        }))), e11.scale && i9.push({
                                            options: e11.scale,
                                            dtype: "radialLinear",
                                            isDefault: !0,
                                            dposition: "chartArea"
                                        }), s.each(i9, function(e12) {
                                            var i10 = e12.options, a7 = i10.id, l2 = s.valueOrDefault(i10.type, e12.dtype);
                                            n13(i10.position) !== n13(e12.dposition) && (i10.position = e12.dposition), o7[a7] = !0;
                                            var u1 = null;
                                            if (a7 in r10 && r10[a7].type === l2) (u1 = r10[a7]).options = i10, u1.ctx = t5.ctx, u1.chart = t5;
                                            else {
                                                var c1 = f.getScaleConstructor(l2);
                                                if (!c1) return;
                                                u1 = new c1({
                                                    id: a7,
                                                    type: l2,
                                                    options: i10,
                                                    ctx: t5.ctx,
                                                    chart: t5
                                                }), r10[u1.id] = u1;
                                            }
                                            u1.mergeTicksOptions(), e12.isDefault && (t5.scale = u1);
                                        }), s.each(o7, function(t6, e12) {
                                            t6 || delete r10[e12];
                                        }), t5.scales = r10, f.addScalesToLayout(this);
                                    },
                                    buildOrUpdateControllers: function() {
                                        var e11 = this, n14 = [], r10 = [];
                                        return s.each(e11.data.datasets, function(i9, o7) {
                                            var a7 = e11.getDatasetMeta(o7), s1 = i9.type || e11.config.type;
                                            if (a7.type && a7.type !== s1 && (e11.destroyDatasetMeta(o7), a7 = e11.getDatasetMeta(o7)), a7.type = s1, n14.push(a7.type), a7.controller) a7.controller.updateIndex(o7), a7.controller.linkScales();
                                            else {
                                                var l2 = t4.controllers[a7.type];
                                                if (void 0 === l2) throw new Error('"' + a7.type + '" is not a chart type.');
                                                a7.controller = new l2(e11, o7), r10.push(a7.controller);
                                            }
                                        }, e11), r10;
                                    },
                                    resetElements: function() {
                                        var t5 = this;
                                        s.each(t5.data.datasets, function(e11, n14) {
                                            t5.getDatasetMeta(n14).controller.reset();
                                        }, t5);
                                    },
                                    reset: function() {
                                        this.resetElements(), this.tooltip.initialize();
                                    },
                                    update: function(t5) {
                                        var n14 = this;
                                        if (t5 && "object" === o5(t5) || (t5 = {
                                            duration: t5,
                                            lazy: arguments[1]
                                        }), e10(n14), d3._invalidate(n14), !1 !== d3.notify(n14, "beforeUpdate")) {
                                            n14.tooltip._data = n14.data;
                                            var r10 = n14.buildOrUpdateControllers();
                                            s.each(n14.data.datasets, function(t6, e11) {
                                                n14.getDatasetMeta(e11).controller.buildOrUpdateElements();
                                            }, n14), n14.updateLayout(), n14.options.animation && n14.options.animation.duration && s.each(r10, function(t6) {
                                                t6.reset();
                                            }), n14.updateDatasets(), n14.tooltip.initialize(), n14.lastActive = [], d3.notify(n14, "afterUpdate"), n14._bufferedRender ? n14._bufferedRequest = {
                                                duration: t5.duration,
                                                easing: t5.easing,
                                                lazy: t5.lazy
                                            } : n14.render(t5);
                                        }
                                    },
                                    updateLayout: function() {
                                        !1 !== d3.notify(this, "beforeLayout") && (u.update(this, this.width, this.height), d3.notify(this, "afterScaleUpdate"), d3.notify(this, "afterLayout"));
                                    },
                                    updateDatasets: function() {
                                        if (!1 !== d3.notify(this, "beforeDatasetsUpdate")) {
                                            for(var t5 = 0, e11 = this.data.datasets.length; t5 < e11; ++t5)this.updateDataset(t5);
                                            d3.notify(this, "afterDatasetsUpdate");
                                        }
                                    },
                                    updateDataset: function(t6) {
                                        var e12 = this.getDatasetMeta(t6), n14 = {
                                            meta: e12,
                                            index: t6
                                        };
                                        !1 !== d3.notify(this, "beforeDatasetUpdate", [
                                            n14
                                        ]) && (e12.controller.update(), d3.notify(this, "afterDatasetUpdate", [
                                            n14
                                        ]));
                                    },
                                    render: function(t6) {
                                        var e12 = this;
                                        t6 && "object" === o5(t6) || (t6 = {
                                            duration: t6,
                                            lazy: arguments[1]
                                        });
                                        var n14 = t6.duration, a7 = t6.lazy;
                                        if (!1 !== d3.notify(e12, "beforeRender")) {
                                            var l3 = e12.options.animation, u1 = function(t7) {
                                                d3.notify(e12, "afterRender"), s.callback(l3 && l3.onComplete, [
                                                    t7
                                                ], e12);
                                            };
                                            if (l3 && (void 0 !== n14 && 0 !== n14 || void 0 === n14 && 0 !== l3.duration)) {
                                                var c2 = new r5({
                                                    numSteps: (n14 || l3.duration) / 16.66,
                                                    easing: t6.easing || l3.easing,
                                                    render: function(t7, e13) {
                                                        var n15 = s.easing.effects[e13.easing], r11 = e13.currentStep, i9 = r11 / e13.numSteps;
                                                        t7.draw(n15(i9), i9, r11);
                                                    },
                                                    onAnimationProgress: l3.onProgress,
                                                    onAnimationComplete: u1
                                                });
                                                i6.addAnimation(e12, c2, n14, a7);
                                            } else e12.draw(), u1(new r5({
                                                numSteps: 0,
                                                chart: e12
                                            }));
                                            return e12;
                                        }
                                    },
                                    draw: function(t6) {
                                        var e12 = this;
                                        e12.clear(), s.isNullOrUndef(t6) && (t6 = 1), e12.transition(t6), e12.width <= 0 || e12.height <= 0 || !1 !== d3.notify(e12, "beforeDraw", [
                                            t6
                                        ]) && (s.each(e12.boxes, function(t7) {
                                            t7.draw(e12.chartArea);
                                        }, e12), e12.scale && e12.scale.draw(), e12.drawDatasets(t6), e12._drawTooltip(t6), d3.notify(e12, "afterDraw", [
                                            t6
                                        ]));
                                    },
                                    transition: function(t6) {
                                        for(var e12 = 0, n14 = (this.data.datasets || []).length; e12 < n14; ++e12)this.isDatasetVisible(e12) && this.getDatasetMeta(e12).controller.transition(t6);
                                        this.tooltip.transition(t6);
                                    },
                                    drawDatasets: function(t6) {
                                        var e12 = this;
                                        if (!1 !== d3.notify(e12, "beforeDatasetsDraw", [
                                            t6
                                        ])) {
                                            for(var n14 = (e12.data.datasets || []).length - 1; n14 >= 0; --n14)e12.isDatasetVisible(n14) && e12.drawDataset(n14, t6);
                                            d3.notify(e12, "afterDatasetsDraw", [
                                                t6
                                            ]);
                                        }
                                    },
                                    drawDataset: function(t6, e12) {
                                        var n15 = this.getDatasetMeta(t6), r11 = {
                                            meta: n15,
                                            index: t6,
                                            easingValue: e12
                                        };
                                        !1 !== d3.notify(this, "beforeDatasetDraw", [
                                            r11
                                        ]) && (n15.controller.draw(e12), d3.notify(this, "afterDatasetDraw", [
                                            r11
                                        ]));
                                    },
                                    _drawTooltip: function(t6) {
                                        var e12 = this.tooltip, n15 = {
                                            tooltip: e12,
                                            easingValue: t6
                                        };
                                        !1 !== d3.notify(this, "beforeTooltipDraw", [
                                            n15
                                        ]) && (e12.draw(), d3.notify(this, "afterTooltipDraw", [
                                            n15
                                        ]));
                                    },
                                    getElementAtEvent: function(t6) {
                                        return l.modes.single(this, t6);
                                    },
                                    getElementsAtEvent: function(t6) {
                                        return l.modes.label(this, t6, {
                                            intersect: !0
                                        });
                                    },
                                    getElementsAtXAxis: function(t6) {
                                        return l.modes["x-axis"](this, t6, {
                                            intersect: !0
                                        });
                                    },
                                    getElementsAtEventForMode: function(t6, e12, n15) {
                                        var r11 = l.modes[e12];
                                        return "function" == typeof r11 ? r11(this, t6, n15) : [];
                                    },
                                    getDatasetAtEvent: function(t6) {
                                        return l.modes.dataset(this, t6, {
                                            intersect: !0
                                        });
                                    },
                                    getDatasetMeta: function(t6) {
                                        var e12 = this.data.datasets[t6];
                                        e12._meta || (e12._meta = {
                                        });
                                        var n15 = e12._meta[this.id];
                                        return n15 || (n15 = e12._meta[this.id] = {
                                            type: null,
                                            data: [],
                                            dataset: null,
                                            controller: null,
                                            hidden: null,
                                            xAxisID: null,
                                            yAxisID: null
                                        }), n15;
                                    },
                                    getVisibleDatasetCount: function() {
                                        for(var t6 = 0, e12 = 0, n15 = this.data.datasets.length; e12 < n15; ++e12)this.isDatasetVisible(e12) && t6++;
                                        return t6;
                                    },
                                    isDatasetVisible: function(t6) {
                                        var e12 = this.getDatasetMeta(t6);
                                        return "boolean" == typeof e12.hidden ? !e12.hidden : !this.data.datasets[t6].hidden;
                                    },
                                    generateLegend: function() {
                                        return this.options.legendCallback(this);
                                    },
                                    destroyDatasetMeta: function(t6) {
                                        var e12 = this.id, n15 = this.data.datasets[t6], r11 = n15._meta && n15._meta[e12];
                                        r11 && (r11.controller.destroy(), delete n15._meta[e12]);
                                    },
                                    destroy: function() {
                                        var e12, n15, r11 = this, i9 = r11.canvas;
                                        for(r11.stop(), e12 = 0, n15 = r11.data.datasets.length; e12 < n15; ++e12)r11.destroyDatasetMeta(e12);
                                        i9 && (r11.unbindEvents(), s.canvas.clear(r11), c.releaseContext(r11.ctx), r11.canvas = null, r11.ctx = null), d3.notify(r11, "destroy"), delete t4.instances[r11.id];
                                    },
                                    toBase64Image: function() {
                                        return this.canvas.toDataURL.apply(this.canvas, arguments);
                                    },
                                    initToolTip: function() {
                                        var t6 = this;
                                        t6.tooltip = new h({
                                            _chart: t6,
                                            _chartInstance: t6,
                                            _data: t6.data,
                                            _options: t6.options.tooltips
                                        }, t6);
                                    },
                                    bindEvents: function() {
                                        var t6 = this, e12 = t6._listeners = {
                                        }, n15 = function() {
                                            t6.eventHandler.apply(t6, arguments);
                                        };
                                        s.each(t6.options.events, function(r11) {
                                            c.addEventListener(t6, r11, n15), e12[r11] = n15;
                                        }), t6.options.responsive && (n15 = function() {
                                            t6.resize();
                                        }, c.addEventListener(t6, "resize", n15), e12.resize = n15);
                                    },
                                    unbindEvents: function() {
                                        var t6 = this, e12 = t6._listeners;
                                        e12 && (delete t6._listeners, s.each(e12, function(e13, n15) {
                                            c.removeEventListener(t6, n15, e13);
                                        }));
                                    },
                                    updateHoverStyle: function(t6, e12, n15) {
                                        var r11, i9, o7, a7 = n15 ? "setHoverStyle" : "removeHoverStyle";
                                        for(i9 = 0, o7 = t6.length; i9 < o7; ++i9)(r11 = t6[i9]) && this.getDatasetMeta(r11._datasetIndex).controller[a7](r11);
                                    },
                                    eventHandler: function(t6) {
                                        var e12 = this, n15 = e12.tooltip;
                                        if (!1 !== d3.notify(e12, "beforeEvent", [
                                            t6
                                        ])) {
                                            e12._bufferedRender = !0, e12._bufferedRequest = null;
                                            var r11 = e12.handleEvent(t6);
                                            n15 && (r11 = n15._start ? n15.handleEvent(t6) : r11 | n15.handleEvent(t6)), d3.notify(e12, "afterEvent", [
                                                t6
                                            ]);
                                            var i9 = e12._bufferedRequest;
                                            return i9 ? e12.render(i9) : r11 && !e12.animating && (e12.stop(), e12.render({
                                                duration: e12.options.hover.animationDuration,
                                                lazy: !0
                                            })), e12._bufferedRender = !1, e12._bufferedRequest = null, e12;
                                        }
                                    },
                                    handleEvent: function(t6) {
                                        var e12, n15 = this, r12 = n15.options || {
                                        }, i10 = r12.hover;
                                        return n15.lastActive = n15.lastActive || [], "mouseout" === t6.type ? n15.active = [] : n15.active = n15.getElementsAtEventForMode(t6, i10.mode, i10), s.callback(r12.onHover || r12.hover.onHover, [
                                            t6.native,
                                            n15.active
                                        ], n15), "mouseup" !== t6.type && "click" !== t6.type || r12.onClick && r12.onClick.call(n15, t6.native, n15.active), n15.lastActive.length && n15.updateHoverStyle(n15.lastActive, i10.mode, !1), n15.active.length && i10.mode && n15.updateHoverStyle(n15.active, i10.mode, !0), e12 = !s.arrayEquals(n15.active, n15.lastActive), n15.lastActive = n15.active, e12;
                                    }
                                }), t4.Controller = t4;
                            };
                        },
                        {
                            22: 22,
                            23: 23,
                            26: 26,
                            29: 29,
                            31: 31,
                            32: 32,
                            34: 34,
                            36: 36,
                            46: 46,
                            49: 49
                        }
                    ],
                    25: [
                        function(t3, e5, n7) {
                            var r5 = t3(46);
                            e5.exports = function(t4) {
                                var e10 = [
                                    "push",
                                    "pop",
                                    "shift",
                                    "splice",
                                    "unshift"
                                ];
                                function n13(t6, n15) {
                                    var r12 = t6._chartjs;
                                    if (r12) {
                                        var i6 = r12.listeners, o7 = i6.indexOf(n15);
                                        -1 !== o7 && i6.splice(o7, 1), i6.length > 0 || (e10.forEach(function(e12) {
                                            delete t6[e12];
                                        }), delete t6._chartjs);
                                    }
                                }
                                t4.DatasetController = function(t6, e12) {
                                    this.initialize(t6, e12);
                                }, r5.extend(t4.DatasetController.prototype, {
                                    datasetElementType: null,
                                    dataElementType: null,
                                    initialize: function(t6, e12) {
                                        this.chart = t6, this.index = e12, this.linkScales(), this.addElements();
                                    },
                                    updateIndex: function(t6) {
                                        this.index = t6;
                                    },
                                    linkScales: function() {
                                        var t6 = this, e12 = t6.getMeta(), n15 = t6.getDataset();
                                        null !== e12.xAxisID && e12.xAxisID in t6.chart.scales || (e12.xAxisID = n15.xAxisID || t6.chart.options.scales.xAxes[0].id), null !== e12.yAxisID && e12.yAxisID in t6.chart.scales || (e12.yAxisID = n15.yAxisID || t6.chart.options.scales.yAxes[0].id);
                                    },
                                    getDataset: function() {
                                        return this.chart.data.datasets[this.index];
                                    },
                                    getMeta: function() {
                                        return this.chart.getDatasetMeta(this.index);
                                    },
                                    getScaleForId: function(t6) {
                                        return this.chart.scales[t6];
                                    },
                                    reset: function() {
                                        this.update(!0);
                                    },
                                    destroy: function() {
                                        this._data && n13(this._data, this);
                                    },
                                    createMetaDataset: function() {
                                        var t6 = this.datasetElementType;
                                        return t6 && new t6({
                                            _chart: this.chart,
                                            _datasetIndex: this.index
                                        });
                                    },
                                    createMetaData: function(t6) {
                                        var e12 = this.dataElementType;
                                        return e12 && new e12({
                                            _chart: this.chart,
                                            _datasetIndex: this.index,
                                            _index: t6
                                        });
                                    },
                                    addElements: function() {
                                        var t6, e12, n15 = this.getMeta(), r12 = this.getDataset().data || [], i10 = n15.data;
                                        for(t6 = 0, e12 = r12.length; t6 < e12; ++t6)i10[t6] = i10[t6] || this.createMetaData(t6);
                                        n15.dataset = n15.dataset || this.createMetaDataset();
                                    },
                                    addElementAndReset: function(t6) {
                                        var e12 = this.createMetaData(t6);
                                        this.getMeta().data.splice(t6, 0, e12), this.updateElement(e12, t6, !0);
                                    },
                                    buildOrUpdateElements: function() {
                                        var t6, i10, o8 = this, a6 = o8.getDataset(), s = a6.data || (a6.data = []);
                                        o8._data !== s && (o8._data && n13(o8._data, o8), i10 = o8, (t6 = s)._chartjs ? t6._chartjs.listeners.push(i10) : (Object.defineProperty(t6, "_chartjs", {
                                            configurable: !0,
                                            enumerable: !1,
                                            value: {
                                                listeners: [
                                                    i10
                                                ]
                                            }
                                        }), e10.forEach(function(e12) {
                                            var n15 = "onData" + e12.charAt(0).toUpperCase() + e12.slice(1), i11 = t6[e12];
                                            Object.defineProperty(t6, e12, {
                                                configurable: !0,
                                                enumerable: !1,
                                                value: function() {
                                                    var e13 = Array.prototype.slice.call(arguments), o9 = i11.apply(this, e13);
                                                    return r5.each(t6._chartjs.listeners, function(t7) {
                                                        "function" == typeof t7[n15] && t7[n15].apply(t7, e13);
                                                    }), o9;
                                                }
                                            });
                                        })), o8._data = s), o8.resyncElements();
                                    },
                                    update: r5.noop,
                                    transition: function(t6) {
                                        for(var e12 = this.getMeta(), n15 = e12.data || [], r12 = n15.length, i10 = 0; i10 < r12; ++i10)n15[i10].transition(t6);
                                        e12.dataset && e12.dataset.transition(t6);
                                    },
                                    draw: function() {
                                        var t6 = this.getMeta(), e12 = t6.data || [], n15 = e12.length, r12 = 0;
                                        for(t6.dataset && t6.dataset.draw(); r12 < n15; ++r12)e12[r12].draw();
                                    },
                                    removeHoverStyle: function(t6) {
                                        r5.merge(t6._model, t6.$previousStyle || {
                                        }), delete t6.$previousStyle;
                                    },
                                    setHoverStyle: function(t6) {
                                        var e12 = this.chart.data.datasets[t6._datasetIndex], n15 = t6._index, i10 = t6.custom || {
                                        }, o8 = r5.valueAtIndexOrDefault, a6 = r5.getHoverColor, s = t6._model;
                                        t6.$previousStyle = {
                                            backgroundColor: s.backgroundColor,
                                            borderColor: s.borderColor,
                                            borderWidth: s.borderWidth
                                        }, s.backgroundColor = i10.hoverBackgroundColor ? i10.hoverBackgroundColor : o8(e12.hoverBackgroundColor, n15, a6(s.backgroundColor)), s.borderColor = i10.hoverBorderColor ? i10.hoverBorderColor : o8(e12.hoverBorderColor, n15, a6(s.borderColor)), s.borderWidth = i10.hoverBorderWidth ? i10.hoverBorderWidth : o8(e12.hoverBorderWidth, n15, s.borderWidth);
                                    },
                                    resyncElements: function() {
                                        var t6 = this.getMeta(), e12 = this.getDataset().data, n15 = t6.data.length, r12 = e12.length;
                                        r12 < n15 ? t6.data.splice(r12, n15 - r12) : r12 > n15 && this.insertElements(n15, r12 - n15);
                                    },
                                    insertElements: function(t6, e12) {
                                        for(var n15 = 0; n15 < e12; ++n15)this.addElementAndReset(t6 + n15);
                                    },
                                    onDataPush: function() {
                                        this.insertElements(this.getDataset().data.length - 1, arguments.length);
                                    },
                                    onDataPop: function() {
                                        this.getMeta().data.pop();
                                    },
                                    onDataShift: function() {
                                        this.getMeta().data.shift();
                                    },
                                    onDataSplice: function(t6, e12) {
                                        this.getMeta().data.splice(t6, e12), this.insertElements(t6, arguments.length - 2);
                                    },
                                    onDataUnshift: function() {
                                        this.insertElements(0, arguments.length);
                                    }
                                }), t4.DatasetController.extend = r5.inherits;
                            };
                        },
                        {
                            46: 46
                        }
                    ],
                    26: [
                        function(t3, e5, n7) {
                            var r5 = t3(46);
                            e5.exports = {
                                _set: function(t4, e10) {
                                    return r5.merge(this[t4] || (this[t4] = {
                                    }), e10);
                                }
                            };
                        },
                        {
                            46: 46
                        }
                    ],
                    27: [
                        function(t3, e5, n7) {
                            var r5 = t3(3), i10 = t3(46);
                            var a6 = function(t4) {
                                i10.extend(this, t4), this.initialize.apply(this, arguments);
                            };
                            i10.extend(a6.prototype, {
                                initialize: function() {
                                    this.hidden = !1;
                                },
                                pivot: function() {
                                    var t4 = this;
                                    return t4._view || (t4._view = i10.clone(t4._model)), t4._start = {
                                    }, t4;
                                },
                                transition: function(t4) {
                                    var e10 = this, n13 = e10._model, i11 = e10._start, a7 = e10._view;
                                    return n13 && 1 !== t4 ? (a7 || (a7 = e10._view = {
                                    }), i11 || (i11 = e10._start = {
                                    }), (function(t6, e12, n15, i12) {
                                        var a8, s, l4, u2, c3, d3, f, h, p, g = Object.keys(n15);
                                        for(a8 = 0, s = g.length; a8 < s; ++a8)if (d3 = n15[l4 = g[a8]], e12.hasOwnProperty(l4) || (e12[l4] = d3), (u2 = e12[l4]) !== d3 && "_" !== l4[0]) {
                                            if (t6.hasOwnProperty(l4) || (t6[l4] = u2), c3 = t6[l4], (f = o5(d3)) === o5(c3)) {
                                                if ("string" === f) {
                                                    if ((h = r5(c3)).valid && (p = r5(d3)).valid) {
                                                        e12[l4] = p.mix(h, i12).rgbString();
                                                        continue;
                                                    }
                                                } else if ("number" === f && isFinite(c3) && isFinite(d3)) {
                                                    e12[l4] = c3 + (d3 - c3) * i12;
                                                    continue;
                                                }
                                            }
                                            e12[l4] = d3;
                                        }
                                    })(i11, a7, n13, t4), e10) : (e10._view = n13, e10._start = null, e10);
                                },
                                tooltipPosition: function() {
                                    return {
                                        x: this._model.x,
                                        y: this._model.y
                                    };
                                },
                                hasValue: function() {
                                    return i10.isNumber(this._model.x) && i10.isNumber(this._model.y);
                                }
                            }), a6.extend = i10.inherits, e5.exports = a6;
                        },
                        {
                            3: 3,
                            46: 46
                        }
                    ],
                    28: [
                        function(t3, e5, n7) {
                            var r5 = t3(3), i10 = t3(26), o8 = t3(46), a6 = t3(34);
                            e5.exports = function() {
                                function t4(t6, e10, n13) {
                                    var r12;
                                    return "string" == typeof t6 ? (r12 = parseInt(t6, 10), -1 !== t6.indexOf("%") && (r12 = r12 / 100 * e10.parentNode[n13])) : r12 = t6, r12;
                                }
                                function e10(t6) {
                                    return null != t6 && "none" !== t6;
                                }
                                function n13(n15, r12, i11) {
                                    var a7 = document.defaultView, s = o8._getParentNode(n15), l4 = a7.getComputedStyle(n15)[r12], u2 = a7.getComputedStyle(s)[r12], c3 = e10(l4), d3 = e10(u2), f = Number.POSITIVE_INFINITY;
                                    return c3 || d3 ? Math.min(c3 ? t4(l4, n15, i11) : f, d3 ? t4(u2, s, i11) : f) : "none";
                                }
                                o8.configMerge = function() {
                                    return o8.merge(o8.clone(arguments[0]), [].slice.call(arguments, 1), {
                                        merger: function(t6, e12, n15, r12) {
                                            var i11 = e12[t6] || {
                                            }, s = n15[t6];
                                            "scales" === t6 ? e12[t6] = o8.scaleMerge(i11, s) : "scale" === t6 ? e12[t6] = o8.merge(i11, [
                                                a6.getScaleDefaults(s.type),
                                                s
                                            ]) : o8._merger(t6, e12, n15, r12);
                                        }
                                    });
                                }, o8.scaleMerge = function() {
                                    return o8.merge(o8.clone(arguments[0]), [].slice.call(arguments, 1), {
                                        merger: function(t6, e12, n15, r12) {
                                            if ("xAxes" === t6 || "yAxes" === t6) {
                                                var i11, s, l4, u2 = n15[t6].length;
                                                for(e12[t6] || (e12[t6] = []), i11 = 0; i11 < u2; ++i11)l4 = n15[t6][i11], s = o8.valueOrDefault(l4.type, "xAxes" === t6 ? "category" : "linear"), i11 >= e12[t6].length && e12[t6].push({
                                                }), !e12[t6][i11].type || l4.type && l4.type !== e12[t6][i11].type ? o8.merge(e12[t6][i11], [
                                                    a6.getScaleDefaults(s),
                                                    l4
                                                ]) : o8.merge(e12[t6][i11], l4);
                                            } else o8._merger(t6, e12, n15, r12);
                                        }
                                    });
                                }, o8.where = function(t6, e12) {
                                    if (o8.isArray(t6) && Array.prototype.filter) return t6.filter(e12);
                                    var n15 = [];
                                    return o8.each(t6, function(t7) {
                                        e12(t7) && n15.push(t7);
                                    }), n15;
                                }, o8.findIndex = Array.prototype.findIndex ? function(t6, e12, n15) {
                                    return t6.findIndex(e12, n15);
                                } : function(t6, e12, n15) {
                                    n15 = void 0 === n15 ? t6 : n15;
                                    for(var r12 = 0, i12 = t6.length; r12 < i12; ++r12)if (e12.call(n15, t6[r12], r12, t6)) return r12;
                                    return -1;
                                }, o8.findNextWhere = function(t6, e12, n15) {
                                    o8.isNullOrUndef(n15) && (n15 = -1);
                                    for(var r12 = n15 + 1; r12 < t6.length; r12++){
                                        var i12 = t6[r12];
                                        if (e12(i12)) return i12;
                                    }
                                }, o8.findPreviousWhere = function(t6, e12, n15) {
                                    o8.isNullOrUndef(n15) && (n15 = t6.length);
                                    for(var r12 = n15 - 1; r12 >= 0; r12--){
                                        var i13 = t6[r12];
                                        if (e12(i13)) return i13;
                                    }
                                }, o8.isNumber = function(t6) {
                                    return !isNaN(parseFloat(t6)) && isFinite(t6);
                                }, o8.almostEquals = function(t6, e12, n15) {
                                    return Math.abs(t6 - e12) < n15;
                                }, o8.almostWhole = function(t6, e12) {
                                    var n15 = Math.round(t6);
                                    return n15 - e12 < t6 && n15 + e12 > t6;
                                }, o8.max = function(t6) {
                                    return t6.reduce(function(t7, e12) {
                                        return isNaN(e12) ? t7 : Math.max(t7, e12);
                                    }, Number.NEGATIVE_INFINITY);
                                }, o8.min = function(t6) {
                                    return t6.reduce(function(t7, e12) {
                                        return isNaN(e12) ? t7 : Math.min(t7, e12);
                                    }, Number.POSITIVE_INFINITY);
                                }, o8.sign = Math.sign ? function(t6) {
                                    return Math.sign(t6);
                                } : function(t6) {
                                    return 0 === (t6 = +t6) || isNaN(t6) ? t6 : t6 > 0 ? 1 : -1;
                                }, o8.log10 = Math.log10 ? function(t6) {
                                    return Math.log10(t6);
                                } : function(t6) {
                                    var e12 = Math.log(t6) * Math.LOG10E, n15 = Math.round(e12);
                                    return t6 === Math.pow(10, n15) ? n15 : e12;
                                }, o8.toRadians = function(t6) {
                                    return t6 * (Math.PI / 180);
                                }, o8.toDegrees = function(t6) {
                                    return t6 * (180 / Math.PI);
                                }, o8.getAngleFromPoint = function(t6, e12) {
                                    var n15 = e12.x - t6.x, r12 = e12.y - t6.y, i14 = Math.sqrt(n15 * n15 + r12 * r12), o9 = Math.atan2(r12, n15);
                                    return o9 < -0.5 * Math.PI && (o9 += 2 * Math.PI), {
                                        angle: o9,
                                        distance: i14
                                    };
                                }, o8.distanceBetweenPoints = function(t6, e12) {
                                    return Math.sqrt(Math.pow(e12.x - t6.x, 2) + Math.pow(e12.y - t6.y, 2));
                                }, o8.aliasPixel = function(t6) {
                                    return t6 % 2 == 0 ? 0 : 0.5;
                                }, o8.splineCurve = function(t6, e12, n15, r12) {
                                    var i14 = t6.skip ? e12 : t6, o9 = e12, a7 = n15.skip ? e12 : n15, s = Math.sqrt(Math.pow(o9.x - i14.x, 2) + Math.pow(o9.y - i14.y, 2)), l5 = Math.sqrt(Math.pow(a7.x - o9.x, 2) + Math.pow(a7.y - o9.y, 2)), u3 = s / (s + l5), c3 = l5 / (s + l5), d3 = r12 * (u3 = isNaN(u3) ? 0 : u3), f = r12 * (c3 = isNaN(c3) ? 0 : c3);
                                    return {
                                        previous: {
                                            x: o9.x - d3 * (a7.x - i14.x),
                                            y: o9.y - d3 * (a7.y - i14.y)
                                        },
                                        next: {
                                            x: o9.x + f * (a7.x - i14.x),
                                            y: o9.y + f * (a7.y - i14.y)
                                        }
                                    };
                                }, o8.EPSILON = Number.EPSILON || 0.00000000000001, o8.splineCurveMonotone = function(t6) {
                                    var e12, n15, r12, i14, a7, s, l5, u3, c3, d3 = (t6 || []).map(function(t7) {
                                        return {
                                            model: t7._model,
                                            deltaK: 0,
                                            mK: 0
                                        };
                                    }), f = d3.length;
                                    for(e12 = 0; e12 < f; ++e12)if (!(r12 = d3[e12]).model.skip) {
                                        if (n15 = e12 > 0 ? d3[e12 - 1] : null, (i14 = e12 < f - 1 ? d3[e12 + 1] : null) && !i14.model.skip) {
                                            var h = i14.model.x - r12.model.x;
                                            r12.deltaK = 0 !== h ? (i14.model.y - r12.model.y) / h : 0;
                                        }
                                        !n15 || n15.model.skip ? r12.mK = r12.deltaK : !i14 || i14.model.skip ? r12.mK = n15.deltaK : this.sign(n15.deltaK) !== this.sign(r12.deltaK) ? r12.mK = 0 : r12.mK = (n15.deltaK + r12.deltaK) / 2;
                                    }
                                    for(e12 = 0; e12 < f - 1; ++e12)r12 = d3[e12], i14 = d3[e12 + 1], r12.model.skip || i14.model.skip || (o8.almostEquals(r12.deltaK, 0, this.EPSILON) ? r12.mK = i14.mK = 0 : (a7 = r12.mK / r12.deltaK, s = i14.mK / r12.deltaK, (u3 = Math.pow(a7, 2) + Math.pow(s, 2)) <= 9 || (l5 = 3 / Math.sqrt(u3), r12.mK = a7 * l5 * r12.deltaK, i14.mK = s * l5 * r12.deltaK)));
                                    for(e12 = 0; e12 < f; ++e12)(r12 = d3[e12]).model.skip || (n15 = e12 > 0 ? d3[e12 - 1] : null, i14 = e12 < f - 1 ? d3[e12 + 1] : null, n15 && !n15.model.skip && (c3 = (r12.model.x - n15.model.x) / 3, r12.model.controlPointPreviousX = r12.model.x - c3, r12.model.controlPointPreviousY = r12.model.y - c3 * r12.mK), i14 && !i14.model.skip && (c3 = (i14.model.x - r12.model.x) / 3, r12.model.controlPointNextX = r12.model.x + c3, r12.model.controlPointNextY = r12.model.y + c3 * r12.mK));
                                }, o8.nextItem = function(t6, e12, n15) {
                                    return n15 ? e12 >= t6.length - 1 ? t6[0] : t6[e12 + 1] : e12 >= t6.length - 1 ? t6[t6.length - 1] : t6[e12 + 1];
                                }, o8.previousItem = function(t6, e12, n15) {
                                    return n15 ? e12 <= 0 ? t6[t6.length - 1] : t6[e12 - 1] : e12 <= 0 ? t6[0] : t6[e12 - 1];
                                }, o8.niceNum = function(t6, e12) {
                                    var n15 = Math.floor(o8.log10(t6)), r12 = t6 / Math.pow(10, n15);
                                    return (e12 ? r12 < 1.5 ? 1 : r12 < 3 ? 2 : r12 < 7 ? 5 : 10 : r12 <= 1 ? 1 : r12 <= 2 ? 2 : r12 <= 5 ? 5 : 10) * Math.pow(10, n15);
                                }, o8.requestAnimFrame = "undefined" == typeof window ? function(t6) {
                                    t6();
                                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t6) {
                                    return window.setTimeout(t6, 1000 / 60);
                                }, o8.getRelativePosition = function(t6, e12) {
                                    var n15, r12, i14 = t6.originalEvent || t6, a7 = t6.target || t6.srcElement, s = a7.getBoundingClientRect(), l5 = i14.touches;
                                    l5 && l5.length > 0 ? (n15 = l5[0].clientX, r12 = l5[0].clientY) : (n15 = i14.clientX, r12 = i14.clientY);
                                    var u3 = parseFloat(o8.getStyle(a7, "padding-left")), c3 = parseFloat(o8.getStyle(a7, "padding-top")), d3 = parseFloat(o8.getStyle(a7, "padding-right")), f = parseFloat(o8.getStyle(a7, "padding-bottom")), h = s.right - s.left - u3 - d3, p = s.bottom - s.top - c3 - f;
                                    return {
                                        x: n15 = Math.round((n15 - s.left - u3) / h * a7.width / e12.currentDevicePixelRatio),
                                        y: r12 = Math.round((r12 - s.top - c3) / p * a7.height / e12.currentDevicePixelRatio)
                                    };
                                }, o8.getConstraintWidth = function(t6) {
                                    return n13(t6, "max-width", "clientWidth");
                                }, o8.getConstraintHeight = function(t6) {
                                    return n13(t6, "max-height", "clientHeight");
                                }, o8._calculatePadding = function(t6, e12, n15) {
                                    return (e12 = o8.getStyle(t6, e12)).indexOf("%") > -1 ? n15 / parseInt(e12, 10) : parseInt(e12, 10);
                                }, o8._getParentNode = function(t6) {
                                    var e12 = t6.parentNode;
                                    return e12 && e12.host && (e12 = e12.host), e12;
                                }, o8.getMaximumWidth = function(t6) {
                                    var e12 = o8._getParentNode(t6);
                                    if (!e12) return t6.clientWidth;
                                    var n15 = e12.clientWidth, r12 = n15 - o8._calculatePadding(e12, "padding-left", n15) - o8._calculatePadding(e12, "padding-right", n15), i14 = o8.getConstraintWidth(t6);
                                    return isNaN(i14) ? r12 : Math.min(r12, i14);
                                }, o8.getMaximumHeight = function(t6) {
                                    var e12 = o8._getParentNode(t6);
                                    if (!e12) return t6.clientHeight;
                                    var n15 = e12.clientHeight, r12 = n15 - o8._calculatePadding(e12, "padding-top", n15) - o8._calculatePadding(e12, "padding-bottom", n15), i14 = o8.getConstraintHeight(t6);
                                    return isNaN(i14) ? r12 : Math.min(r12, i14);
                                }, o8.getStyle = function(t6, e12) {
                                    return t6.currentStyle ? t6.currentStyle[e12] : document.defaultView.getComputedStyle(t6, null).getPropertyValue(e12);
                                }, o8.retinaScale = function(t6, e12) {
                                    var n15 = t6.currentDevicePixelRatio = e12 || "undefined" != typeof window && window.devicePixelRatio || 1;
                                    if (1 !== n15) {
                                        var r12 = t6.canvas, i14 = t6.height, o9 = t6.width;
                                        r12.height = i14 * n15, r12.width = o9 * n15, t6.ctx.scale(n15, n15), r12.style.height || r12.style.width || (r12.style.height = i14 + "px", r12.style.width = o9 + "px");
                                    }
                                }, o8.fontString = function(t6, e12, n15) {
                                    return e12 + " " + t6 + "px " + n15;
                                }, o8.longestText = function(t6, e12, n15, r13) {
                                    var i15 = (r13 = r13 || {
                                    }).data = r13.data || {
                                    }, a7 = r13.garbageCollect = r13.garbageCollect || [];
                                    r13.font !== e12 && (i15 = r13.data = {
                                    }, a7 = r13.garbageCollect = [], r13.font = e12), t6.font = e12;
                                    var s = 0;
                                    o8.each(n15, function(e13) {
                                        null != e13 && !0 !== o8.isArray(e13) ? s = o8.measureText(t6, i15, a7, s, e13) : o8.isArray(e13) && o8.each(e13, function(e14) {
                                            null == e14 || o8.isArray(e14) || (s = o8.measureText(t6, i15, a7, s, e14));
                                        });
                                    });
                                    var l5 = a7.length / 2;
                                    if (l5 > n15.length) {
                                        for(var u3 = 0; u3 < l5; u3++)delete i15[a7[u3]];
                                        a7.splice(0, l5);
                                    }
                                    return s;
                                }, o8.measureText = function(t6, e12, n15, r13, i15) {
                                    var o10 = e12[i15];
                                    return o10 || (o10 = e12[i15] = t6.measureText(i15).width, n15.push(i15)), o10 > r13 && (r13 = o10), r13;
                                }, o8.numberOfLabelLines = function(t6) {
                                    var e12 = 1;
                                    return o8.each(t6, function(t7) {
                                        o8.isArray(t7) && t7.length > e12 && (e12 = t7.length);
                                    }), e12;
                                }, o8.color = r5 ? function(t6) {
                                    return t6 instanceof CanvasGradient && (t6 = i10.global.defaultColor), r5(t6);
                                } : function(t6) {
                                    return console.error("Color.js not found!"), t6;
                                }, o8.getHoverColor = function(t6) {
                                    return t6 instanceof CanvasPattern ? t6 : o8.color(t6).saturate(0.5).darken(0.1).rgbString();
                                };
                            };
                        },
                        {
                            26: 26,
                            3: 3,
                            34: 34,
                            46: 46
                        }
                    ],
                    29: [
                        function(t3, e5, n7) {
                            var r5 = t3(46);
                            function i10(t4, e10) {
                                return t4.native ? {
                                    x: t4.x,
                                    y: t4.y
                                } : r5.getRelativePosition(t4, e10);
                            }
                            function o8(t4, e10) {
                                var n13, r13, i15, o10, a6;
                                for(r13 = 0, o10 = t4.data.datasets.length; r13 < o10; ++r13)if (t4.isDatasetVisible(r13)) for(i15 = 0, a6 = (n13 = t4.getDatasetMeta(r13)).data.length; i15 < a6; ++i15){
                                    var s = n13.data[i15];
                                    s._view.skip || e10(s);
                                }
                            }
                            function a6(t4, e10) {
                                var n13 = [];
                                return o8(t4, function(t6) {
                                    t6.inRange(e10.x, e10.y) && n13.push(t6);
                                }), n13;
                            }
                            function s(t4, e10, n13, r13) {
                                var i15 = Number.POSITIVE_INFINITY, a7 = [];
                                return o8(t4, function(t6) {
                                    if (!n13 || t6.inRange(e10.x, e10.y)) {
                                        var o10 = t6.getCenterPoint(), s1 = r13(e10, o10);
                                        s1 < i15 ? (a7 = [
                                            t6
                                        ], i15 = s1) : s1 === i15 && a7.push(t6);
                                    }
                                }), a7;
                            }
                            function l5(t4) {
                                var e10 = -1 !== t4.indexOf("x"), n13 = -1 !== t4.indexOf("y");
                                return function(t6, r13) {
                                    var i15 = e10 ? Math.abs(t6.x - r13.x) : 0, o11 = n13 ? Math.abs(t6.y - r13.y) : 0;
                                    return Math.sqrt(Math.pow(i15, 2) + Math.pow(o11, 2));
                                };
                            }
                            function u4(t4, e10, n13) {
                                var r13 = i10(e10, t4);
                                n13.axis = n13.axis || "x";
                                var o11 = l5(n13.axis), u5 = n13.intersect ? a6(t4, r13) : s(t4, r13, !1, o11), c3 = [];
                                return u5.length ? (t4.data.datasets.forEach(function(e12, n15) {
                                    if (t4.isDatasetVisible(n15)) {
                                        var r14 = t4.getDatasetMeta(n15).data[u5[0]._index];
                                        r14 && !r14._view.skip && c3.push(r14);
                                    }
                                }), c3) : [];
                            }
                            e5.exports = {
                                modes: {
                                    single: function(t4, e10) {
                                        var n13 = i10(e10, t4), r13 = [];
                                        return o8(t4, function(t6) {
                                            if (t6.inRange(n13.x, n13.y)) return r13.push(t6), r13;
                                        }), r13.slice(0, 1);
                                    },
                                    label: u4,
                                    index: u4,
                                    dataset: function(t4, e10, n13) {
                                        var r13 = i10(e10, t4);
                                        n13.axis = n13.axis || "xy";
                                        var o11 = l5(n13.axis), u5 = n13.intersect ? a6(t4, r13) : s(t4, r13, !1, o11);
                                        return u5.length > 0 && (u5 = t4.getDatasetMeta(u5[0]._datasetIndex).data), u5;
                                    },
                                    "x-axis": function(t4, e10) {
                                        return u4(t4, e10, {
                                            intersect: !1
                                        });
                                    },
                                    point: function(t4, e10) {
                                        return a6(t4, i10(e10, t4));
                                    },
                                    nearest: function(t4, e10, n13) {
                                        var r13 = i10(e10, t4);
                                        n13.axis = n13.axis || "xy";
                                        var o11 = l5(n13.axis), a7 = s(t4, r13, n13.intersect, o11);
                                        return a7.length > 1 && a7.sort(function(t6, e12) {
                                            var n15 = t6.getArea() - e12.getArea();
                                            return 0 === n15 && (n15 = t6._datasetIndex - e12._datasetIndex), n15;
                                        }), a7.slice(0, 1);
                                    },
                                    x: function(t4, e10, n13) {
                                        var r13 = i10(e10, t4), a7 = [], s2 = !1;
                                        return o8(t4, function(t6) {
                                            t6.inXRange(r13.x) && a7.push(t6), t6.inRange(r13.x, r13.y) && (s2 = !0);
                                        }), n13.intersect && !s2 && (a7 = []), a7;
                                    },
                                    y: function(t4, e10, n13) {
                                        var r13 = i10(e10, t4), a7 = [], s2 = !1;
                                        return o8(t4, function(t6) {
                                            t6.inYRange(r13.y) && a7.push(t6), t6.inRange(r13.x, r13.y) && (s2 = !0);
                                        }), n13.intersect && !s2 && (a7 = []), a7;
                                    }
                                }
                            };
                        },
                        {
                            46: 46
                        }
                    ],
                    30: [
                        function(t3, e5, n7) {
                            t3(26)._set("global", {
                                responsive: !0,
                                responsiveAnimationDuration: 0,
                                maintainAspectRatio: !0,
                                events: [
                                    "mousemove",
                                    "mouseout",
                                    "click",
                                    "touchstart",
                                    "touchmove"
                                ],
                                hover: {
                                    onHover: null,
                                    mode: "nearest",
                                    intersect: !0,
                                    animationDuration: 400
                                },
                                onClick: null,
                                defaultColor: "rgba(0,0,0,0.1)",
                                defaultFontColor: "#666",
                                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                                defaultFontSize: 12,
                                defaultFontStyle: "normal",
                                showLines: !0,
                                elements: {
                                },
                                layout: {
                                    padding: {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            }), e5.exports = function() {
                                var t4 = function(t6, e10) {
                                    return this.construct(t6, e10), this;
                                };
                                return t4.Chart = t4, t4;
                            };
                        },
                        {
                            26: 26
                        }
                    ],
                    31: [
                        function(t3, e5, n7) {
                            var r5 = t3(46);
                            function i10(t4, e10) {
                                return r5.where(t4, function(t6) {
                                    return t6.position === e10;
                                });
                            }
                            function o8(t4, e10) {
                                t4.forEach(function(t6, e12) {
                                    return t6._tmpIndex_ = e12, t6;
                                }), t4.sort(function(t6, n13) {
                                    var r13 = e10 ? n13 : t6, i15 = e10 ? t6 : n13;
                                    return r13.weight === i15.weight ? r13._tmpIndex_ - i15._tmpIndex_ : r13.weight - i15.weight;
                                }), t4.forEach(function(t6) {
                                    delete t6._tmpIndex_;
                                });
                            }
                            e5.exports = {
                                defaults: {
                                },
                                addBox: function(t4, e10) {
                                    t4.boxes || (t4.boxes = []), e10.fullWidth = e10.fullWidth || !1, e10.position = e10.position || "top", e10.weight = e10.weight || 0, t4.boxes.push(e10);
                                },
                                removeBox: function(t4, e10) {
                                    var n13 = t4.boxes ? t4.boxes.indexOf(e10) : -1;
                                    -1 !== n13 && t4.boxes.splice(n13, 1);
                                },
                                configure: function(t4, e10, n13) {
                                    for(var r13, i15 = [
                                        "fullWidth",
                                        "position",
                                        "weight"
                                    ], o11 = i15.length, a6 = 0; a6 < o11; ++a6)r13 = i15[a6], n13.hasOwnProperty(r13) && (e10[r13] = n13[r13]);
                                },
                                update: function(t4, e10, n13) {
                                    if (t4) {
                                        var a6 = t4.options.layout || {
                                        }, s2 = r5.options.toPadding(a6.padding), l5 = s2.left, u4 = s2.right, c3 = s2.top, d3 = s2.bottom, f = i10(t4.boxes, "left"), h = i10(t4.boxes, "right"), p = i10(t4.boxes, "top"), g = i10(t4.boxes, "bottom"), v = i10(t4.boxes, "chartArea");
                                        o8(f, !0), o8(h, !1), o8(p, !0), o8(g, !1);
                                        var m = e10 - l5 - u4, y = n13 - c3 - d3, b = y / 2, x = (e10 - m / 2) / (f.length + h.length), w = (n13 - b) / (p.length + g.length), S = m, k = y, C = [];
                                        r5.each(f.concat(h, p, g), function(t6) {
                                            var e12, n15 = t6.isHorizontal();
                                            n15 ? (e12 = t6.update(t6.fullWidth ? m : S, w), k -= e12.height) : (e12 = t6.update(x, k), S -= e12.width), C.push({
                                                horizontal: n15,
                                                minSize: e12,
                                                box: t6
                                            });
                                        });
                                        var M = 0, A = 0, P = 0, _ = 0;
                                        r5.each(p.concat(g), function(t6) {
                                            if (t6.getPadding) {
                                                var e12 = t6.getPadding();
                                                M = Math.max(M, e12.left), A = Math.max(A, e12.right);
                                            }
                                        }), r5.each(f.concat(h), function(t6) {
                                            if (t6.getPadding) {
                                                var e13 = t6.getPadding();
                                                P = Math.max(P, e13.top), _ = Math.max(_, e13.bottom);
                                            }
                                        });
                                        var T = l5, I = u4, O = c3, F = d3;
                                        r5.each(f.concat(h), z), r5.each(f, function(t6) {
                                            T += t6.width;
                                        }), r5.each(h, function(t6) {
                                            I += t6.width;
                                        }), r5.each(p.concat(g), z), r5.each(p, function(t6) {
                                            O += t6.height;
                                        }), r5.each(g, function(t6) {
                                            F += t6.height;
                                        }), r5.each(f.concat(h), function(t6) {
                                            var e14 = r5.findNextWhere(C, function(e15) {
                                                return e15.box === t6;
                                            }), n15 = {
                                                left: 0,
                                                right: 0,
                                                top: O,
                                                bottom: F
                                            };
                                            e14 && t6.update(e14.minSize.width, k, n15);
                                        }), T = l5, I = u4, O = c3, F = d3, r5.each(f, function(t6) {
                                            T += t6.width;
                                        }), r5.each(h, function(t6) {
                                            I += t6.width;
                                        }), r5.each(p, function(t6) {
                                            O += t6.height;
                                        }), r5.each(g, function(t6) {
                                            F += t6.height;
                                        });
                                        var D = Math.max(M - T, 0);
                                        T += D, I += Math.max(A - I, 0);
                                        var L = Math.max(P - O, 0);
                                        O += L, F += Math.max(_ - F, 0);
                                        var E = n13 - O - F, R = e10 - T - I;
                                        R === S && E === k || (r5.each(f, function(t6) {
                                            t6.height = E;
                                        }), r5.each(h, function(t6) {
                                            t6.height = E;
                                        }), r5.each(p, function(t6) {
                                            t6.fullWidth || (t6.width = R);
                                        }), r5.each(g, function(t6) {
                                            t6.fullWidth || (t6.width = R);
                                        }), k = E, S = R);
                                        var N = l5 + D, V = c3 + L;
                                        r5.each(f.concat(p), B), N += S, V += k, r5.each(h, B), r5.each(g, B), t4.chartArea = {
                                            left: T,
                                            top: O,
                                            right: T + S,
                                            bottom: O + k
                                        }, r5.each(v, function(e14) {
                                            e14.left = t4.chartArea.left, e14.top = t4.chartArea.top, e14.right = t4.chartArea.right, e14.bottom = t4.chartArea.bottom, e14.update(S, k);
                                        });
                                    }
                                    function z(t6) {
                                        var e14 = r5.findNextWhere(C, function(e15) {
                                            return e15.box === t6;
                                        });
                                        if (e14) if (t6.isHorizontal()) {
                                            var n15 = {
                                                left: Math.max(T, M),
                                                right: Math.max(I, A),
                                                top: 0,
                                                bottom: 0
                                            };
                                            t6.update(t6.fullWidth ? m : S, y / 2, n15);
                                        } else t6.update(e14.minSize.width, k);
                                    }
                                    function B(t6) {
                                        t6.isHorizontal() ? (t6.left = t6.fullWidth ? l5 : T, t6.right = t6.fullWidth ? e10 - u4 : T + S, t6.top = V, t6.bottom = V + t6.height, V = t6.bottom) : (t6.left = N, t6.right = N + t6.width, t6.top = O, t6.bottom = O + k, N = t6.right);
                                    }
                                }
                            };
                        },
                        {
                            46: 46
                        }
                    ],
                    32: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(46);
                            r5._set("global", {
                                plugins: {
                                }
                            }), e5.exports = {
                                _plugins: [],
                                _cacheId: 0,
                                register: function(t4) {
                                    var e10 = this._plugins;
                                    [].concat(t4).forEach(function(t6) {
                                        -1 === e10.indexOf(t6) && e10.push(t6);
                                    }), this._cacheId++;
                                },
                                unregister: function(t4) {
                                    var e10 = this._plugins;
                                    [].concat(t4).forEach(function(t6) {
                                        var n13 = e10.indexOf(t6);
                                        -1 !== n13 && e10.splice(n13, 1);
                                    }), this._cacheId++;
                                },
                                clear: function() {
                                    this._plugins = [], this._cacheId++;
                                },
                                count: function() {
                                    return this._plugins.length;
                                },
                                getAll: function() {
                                    return this._plugins;
                                },
                                notify: function(t4, e10, n13) {
                                    var r13, i15, o8, a7, s3, l6 = this.descriptors(t4), u5 = l6.length;
                                    for(r13 = 0; r13 < u5; ++r13)if ("function" == typeof (s3 = (o8 = (i15 = l6[r13]).plugin)[e10]) && ((a7 = [
                                        t4
                                    ].concat(n13 || [])).push(i15.options), !1 === s3.apply(o8, a7))) return !1;
                                    return !0;
                                },
                                descriptors: function(t4) {
                                    var e10 = t4.$plugins || (t4.$plugins = {
                                    });
                                    if (e10.id === this._cacheId) return e10.descriptors;
                                    var n13 = [], o8 = [], a7 = t4 && t4.config || {
                                    }, s3 = a7.options && a7.options.plugins || {
                                    };
                                    return this._plugins.concat(a7.plugins || []).forEach(function(t6) {
                                        if (-1 === n13.indexOf(t6)) {
                                            var e14 = t6.id, a8 = s3[e14];
                                            !1 !== a8 && (!0 === a8 && (a8 = i10.clone(r5.global.plugins[e14])), n13.push(t6), o8.push({
                                                plugin: t6,
                                                options: a8 || {
                                                }
                                            }));
                                        }
                                    }), e10.descriptors = o8, e10.id = this._cacheId, o8;
                                },
                                _invalidate: function(t4) {
                                    delete t4.$plugins;
                                }
                            };
                        },
                        {
                            26: 26,
                            46: 46
                        }
                    ],
                    33: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27), o8 = t3(46), a7 = t3(35);
                            function s3(t4) {
                                var e10, n13, r13 = [];
                                for(e10 = 0, n13 = t4.length; e10 < n13; ++e10)r13.push(t4[e10].label);
                                return r13;
                            }
                            function l6(t4, e10, n13) {
                                var r13 = t4.getPixelForTick(e10);
                                return n13 && (r13 -= 0 === e10 ? (t4.getPixelForTick(1) - r13) / 2 : (r13 - t4.getPixelForTick(e10 - 1)) / 2), r13;
                            }
                            function u5(t4, e10, n13) {
                                return o8.isArray(e10) ? o8.longestText(t4, n13, e10) : t4.measureText(e10).width;
                            }
                            function c4(t4) {
                                var e10 = o8.valueOrDefault, n13 = r5.global, i15 = e10(t4.fontSize, n13.defaultFontSize), a9 = e10(t4.fontStyle, n13.defaultFontStyle), s4 = e10(t4.fontFamily, n13.defaultFontFamily);
                                return {
                                    size: i15,
                                    style: a9,
                                    family: s4,
                                    font: o8.fontString(i15, a9, s4)
                                };
                            }
                            function d4(t4) {
                                return o8.options.toLineHeight(o8.valueOrDefault(t4.lineHeight, 1.2), o8.valueOrDefault(t4.fontSize, r5.global.defaultFontSize));
                            }
                            r5._set("scale", {
                                display: !0,
                                position: "left",
                                offset: !1,
                                gridLines: {
                                    display: !0,
                                    color: "rgba(0, 0, 0, 0.1)",
                                    lineWidth: 1,
                                    drawBorder: !0,
                                    drawOnChartArea: !0,
                                    drawTicks: !0,
                                    tickMarkLength: 10,
                                    zeroLineWidth: 1,
                                    zeroLineColor: "rgba(0,0,0,0.25)",
                                    zeroLineBorderDash: [],
                                    zeroLineBorderDashOffset: 0,
                                    offsetGridLines: !1,
                                    borderDash: [],
                                    borderDashOffset: 0
                                },
                                scaleLabel: {
                                    display: !1,
                                    labelString: "",
                                    lineHeight: 1.2,
                                    padding: {
                                        top: 4,
                                        bottom: 4
                                    }
                                },
                                ticks: {
                                    beginAtZero: !1,
                                    minRotation: 0,
                                    maxRotation: 50,
                                    mirror: !1,
                                    padding: 0,
                                    reverse: !1,
                                    display: !0,
                                    autoSkip: !0,
                                    autoSkipPadding: 0,
                                    labelOffset: 0,
                                    callback: a7.formatters.values,
                                    minor: {
                                    },
                                    major: {
                                    }
                                }
                            }), e5.exports = i10.extend({
                                getPadding: function() {
                                    return {
                                        left: this.paddingLeft || 0,
                                        top: this.paddingTop || 0,
                                        right: this.paddingRight || 0,
                                        bottom: this.paddingBottom || 0
                                    };
                                },
                                getTicks: function() {
                                    return this._ticks;
                                },
                                mergeTicksOptions: function() {
                                    var t4 = this.options.ticks;
                                    for(var e10 in !1 === t4.minor && (t4.minor = {
                                        display: !1
                                    }), !1 === t4.major && (t4.major = {
                                        display: !1
                                    }), t4)"major" !== e10 && "minor" !== e10 && (void 0 === t4.minor[e10] && (t4.minor[e10] = t4[e10]), void 0 === t4.major[e10] && (t4.major[e10] = t4[e10]));
                                },
                                beforeUpdate: function() {
                                    o8.callback(this.options.beforeUpdate, [
                                        this
                                    ]);
                                },
                                update: function(t4, e10, n13) {
                                    var r13, i15, a9, s4, l7, u6, c5 = this;
                                    for(c5.beforeUpdate(), c5.maxWidth = t4, c5.maxHeight = e10, c5.margins = o8.extend({
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0
                                    }, n13), c5.longestTextCache = c5.longestTextCache || {
                                    }, c5.beforeSetDimensions(), c5.setDimensions(), c5.afterSetDimensions(), c5.beforeDataLimits(), c5.determineDataLimits(), c5.afterDataLimits(), c5.beforeBuildTicks(), l7 = c5.buildTicks() || [], c5.afterBuildTicks(), c5.beforeTickToLabelConversion(), a9 = c5.convertTicksToLabels(l7) || c5.ticks, c5.afterTickToLabelConversion(), c5.ticks = a9, r13 = 0, i15 = a9.length; r13 < i15; ++r13)s4 = a9[r13], (u6 = l7[r13]) ? u6.label = s4 : l7.push(u6 = {
                                        label: s4,
                                        major: !1
                                    });
                                    return c5._ticks = l7, c5.beforeCalculateTickRotation(), c5.calculateTickRotation(), c5.afterCalculateTickRotation(), c5.beforeFit(), c5.fit(), c5.afterFit(), c5.afterUpdate(), c5.minSize;
                                },
                                afterUpdate: function() {
                                    o8.callback(this.options.afterUpdate, [
                                        this
                                    ]);
                                },
                                beforeSetDimensions: function() {
                                    o8.callback(this.options.beforeSetDimensions, [
                                        this
                                    ]);
                                },
                                setDimensions: function() {
                                    var t4 = this;
                                    t4.isHorizontal() ? (t4.width = t4.maxWidth, t4.left = 0, t4.right = t4.width) : (t4.height = t4.maxHeight, t4.top = 0, t4.bottom = t4.height), t4.paddingLeft = 0, t4.paddingTop = 0, t4.paddingRight = 0, t4.paddingBottom = 0;
                                },
                                afterSetDimensions: function() {
                                    o8.callback(this.options.afterSetDimensions, [
                                        this
                                    ]);
                                },
                                beforeDataLimits: function() {
                                    o8.callback(this.options.beforeDataLimits, [
                                        this
                                    ]);
                                },
                                determineDataLimits: o8.noop,
                                afterDataLimits: function() {
                                    o8.callback(this.options.afterDataLimits, [
                                        this
                                    ]);
                                },
                                beforeBuildTicks: function() {
                                    o8.callback(this.options.beforeBuildTicks, [
                                        this
                                    ]);
                                },
                                buildTicks: o8.noop,
                                afterBuildTicks: function() {
                                    o8.callback(this.options.afterBuildTicks, [
                                        this
                                    ]);
                                },
                                beforeTickToLabelConversion: function() {
                                    o8.callback(this.options.beforeTickToLabelConversion, [
                                        this
                                    ]);
                                },
                                convertTicksToLabels: function() {
                                    var t4 = this.options.ticks;
                                    this.ticks = this.ticks.map(t4.userCallback || t4.callback, this);
                                },
                                afterTickToLabelConversion: function() {
                                    o8.callback(this.options.afterTickToLabelConversion, [
                                        this
                                    ]);
                                },
                                beforeCalculateTickRotation: function() {
                                    o8.callback(this.options.beforeCalculateTickRotation, [
                                        this
                                    ]);
                                },
                                calculateTickRotation: function() {
                                    var t4 = this, e10 = t4.ctx, n13 = t4.options.ticks, r13 = s3(t4._ticks), i15 = c4(n13);
                                    e10.font = i15.font;
                                    var a9 = n13.minRotation || 0;
                                    if (r13.length && t4.options.display && t4.isHorizontal()) for(var l7, u6 = o8.longestText(e10, i15.font, r13, t4.longestTextCache), d5 = u6, f = t4.getPixelForTick(1) - t4.getPixelForTick(0) - 6; d5 > f && a9 < n13.maxRotation;){
                                        var h = o8.toRadians(a9);
                                        if (l7 = Math.cos(h), Math.sin(h) * u6 > t4.maxHeight) {
                                            a9--;
                                            break;
                                        }
                                        a9++, d5 = l7 * u6;
                                    }
                                    t4.labelRotation = a9;
                                },
                                afterCalculateTickRotation: function() {
                                    o8.callback(this.options.afterCalculateTickRotation, [
                                        this
                                    ]);
                                },
                                beforeFit: function() {
                                    o8.callback(this.options.beforeFit, [
                                        this
                                    ]);
                                },
                                fit: function() {
                                    var t4 = this, e10 = t4.minSize = {
                                        width: 0,
                                        height: 0
                                    }, n13 = s3(t4._ticks), r13 = t4.options, i15 = r13.ticks, a9 = r13.scaleLabel, l7 = r13.gridLines, f = r13.display, h = t4.isHorizontal(), p = c4(i15), g = r13.gridLines.tickMarkLength;
                                    if (e10.width = h ? t4.isFullWidth() ? t4.maxWidth - t4.margins.left - t4.margins.right : t4.maxWidth : f && l7.drawTicks ? g : 0, e10.height = h ? f && l7.drawTicks ? g : 0 : t4.maxHeight, a9.display && f) {
                                        var v = d4(a9) + o8.options.toPadding(a9.padding).height;
                                        h ? e10.height += v : e10.width += v;
                                    }
                                    if (i15.display && f) {
                                        var m = o8.longestText(t4.ctx, p.font, n13, t4.longestTextCache), y = o8.numberOfLabelLines(n13), b = 0.5 * p.size, x = t4.options.ticks.padding;
                                        if (h) {
                                            t4.longestLabelWidth = m;
                                            var w = o8.toRadians(t4.labelRotation), S = Math.cos(w), k = Math.sin(w) * m + p.size * y + b * (y - 1) + b;
                                            e10.height = Math.min(t4.maxHeight, e10.height + k + x), t4.ctx.font = p.font;
                                            var C = u5(t4.ctx, n13[0], p.font), M = u5(t4.ctx, n13[n13.length - 1], p.font);
                                            0 !== t4.labelRotation ? (t4.paddingLeft = "bottom" === r13.position ? S * C + 3 : S * b + 3, t4.paddingRight = "bottom" === r13.position ? S * b + 3 : S * M + 3) : (t4.paddingLeft = C / 2 + 3, t4.paddingRight = M / 2 + 3);
                                        } else i15.mirror ? m = 0 : m += x + b, e10.width = Math.min(t4.maxWidth, e10.width + m), t4.paddingTop = p.size / 2, t4.paddingBottom = p.size / 2;
                                    }
                                    t4.handleMargins(), t4.width = e10.width, t4.height = e10.height;
                                },
                                handleMargins: function() {
                                    var t4 = this;
                                    t4.margins && (t4.paddingLeft = Math.max(t4.paddingLeft - t4.margins.left, 0), t4.paddingTop = Math.max(t4.paddingTop - t4.margins.top, 0), t4.paddingRight = Math.max(t4.paddingRight - t4.margins.right, 0), t4.paddingBottom = Math.max(t4.paddingBottom - t4.margins.bottom, 0));
                                },
                                afterFit: function() {
                                    o8.callback(this.options.afterFit, [
                                        this
                                    ]);
                                },
                                isHorizontal: function() {
                                    return "top" === this.options.position || "bottom" === this.options.position;
                                },
                                isFullWidth: function() {
                                    return this.options.fullWidth;
                                },
                                getRightValue: function(t4) {
                                    if (o8.isNullOrUndef(t4)) return NaN;
                                    if ("number" == typeof t4 && !isFinite(t4)) return NaN;
                                    if (t4) {
                                        if (this.isHorizontal()) {
                                            if (void 0 !== t4.x) return this.getRightValue(t4.x);
                                        } else if (void 0 !== t4.y) return this.getRightValue(t4.y);
                                    }
                                    return t4;
                                },
                                getLabelForIndex: o8.noop,
                                getPixelForValue: o8.noop,
                                getValueForPixel: o8.noop,
                                getPixelForTick: function(t4) {
                                    var e10 = this, n13 = e10.options.offset;
                                    if (e10.isHorizontal()) {
                                        var r13 = (e10.width - (e10.paddingLeft + e10.paddingRight)) / Math.max(e10._ticks.length - (n13 ? 0 : 1), 1), i15 = r13 * t4 + e10.paddingLeft;
                                        n13 && (i15 += r13 / 2);
                                        var o11 = e10.left + Math.round(i15);
                                        return o11 += e10.isFullWidth() ? e10.margins.left : 0;
                                    }
                                    var a9 = e10.height - (e10.paddingTop + e10.paddingBottom);
                                    return e10.top + t4 * (a9 / (e10._ticks.length - 1));
                                },
                                getPixelForDecimal: function(t4) {
                                    var e10 = this;
                                    if (e10.isHorizontal()) {
                                        var n13 = (e10.width - (e10.paddingLeft + e10.paddingRight)) * t4 + e10.paddingLeft, r15 = e10.left + Math.round(n13);
                                        return r15 += e10.isFullWidth() ? e10.margins.left : 0;
                                    }
                                    return e10.top + t4 * e10.height;
                                },
                                getBasePixel: function() {
                                    return this.getPixelForValue(this.getBaseValue());
                                },
                                getBaseValue: function() {
                                    var t4 = this.min, e10 = this.max;
                                    return this.beginAtZero ? 0 : t4 < 0 && e10 < 0 ? e10 : t4 > 0 && e10 > 0 ? t4 : 0;
                                },
                                _autoSkip: function(t4) {
                                    var e10, n16, r16, i16, a9 = this, s4 = a9.isHorizontal(), l7 = a9.options.ticks.minor, u6 = t4.length, c5 = o8.toRadians(a9.labelRotation), d5 = Math.cos(c5), f = a9.longestLabelWidth * d5, h = [];
                                    for(l7.maxTicksLimit && (i16 = l7.maxTicksLimit), s4 && (e10 = !1, (f + l7.autoSkipPadding) * u6 > a9.width - (a9.paddingLeft + a9.paddingRight) && (e10 = 1 + Math.floor((f + l7.autoSkipPadding) * u6 / (a9.width - (a9.paddingLeft + a9.paddingRight)))), i16 && u6 > i16 && (e10 = Math.max(e10, Math.floor(u6 / i16)))), n16 = 0; n16 < u6; n16++)r16 = t4[n16], (e10 > 1 && n16 % e10 > 0 || n16 % e10 == 0 && n16 + e10 >= u6) && n16 !== u6 - 1 && delete r16.label, h.push(r16);
                                    return h;
                                },
                                draw: function(t4) {
                                    var e10 = this, n16 = e10.options;
                                    if (n16.display) {
                                        var i16 = e10.ctx, a9 = r5.global, s4 = n16.ticks.minor, u6 = n16.ticks.major || s4, f = n16.gridLines, h = n16.scaleLabel, p = 0 !== e10.labelRotation, g = e10.isHorizontal(), v = s4.autoSkip ? e10._autoSkip(e10.getTicks()) : e10.getTicks(), m = o8.valueOrDefault(s4.fontColor, a9.defaultFontColor), y = c4(s4), b = o8.valueOrDefault(u6.fontColor, a9.defaultFontColor), x = c4(u6), w = f.drawTicks ? f.tickMarkLength : 0, S = o8.valueOrDefault(h.fontColor, a9.defaultFontColor), k = c4(h), C = o8.options.toPadding(h.padding), M = o8.toRadians(e10.labelRotation), A = [], P = e10.options.gridLines.lineWidth, _ = "right" === n16.position ? e10.left : e10.right - P - w, T = "right" === n16.position ? e10.left + w : e10.right, I = "bottom" === n16.position ? e10.top + P : e10.bottom - w - P, O = "bottom" === n16.position ? e10.top + P + w : e10.bottom + P;
                                        if (o8.each(v, function(r16, i17) {
                                            if (!o8.isNullOrUndef(r16.label)) {
                                                var u7, c5, d5, h1, m1, y1, b1, x1, S1, k1, C1, F, D, L, E = r16.label;
                                                i17 === e10.zeroLineIndex && n16.offset === f.offsetGridLines ? (u7 = f.zeroLineWidth, c5 = f.zeroLineColor, d5 = f.zeroLineBorderDash, h1 = f.zeroLineBorderDashOffset) : (u7 = o8.valueAtIndexOrDefault(f.lineWidth, i17), c5 = o8.valueAtIndexOrDefault(f.color, i17), d5 = o8.valueOrDefault(f.borderDash, a9.borderDash), h1 = o8.valueOrDefault(f.borderDashOffset, a9.borderDashOffset));
                                                var R = "middle", N = "middle", V = s4.padding;
                                                if (g) {
                                                    var z = w + V;
                                                    "bottom" === n16.position ? (N = p ? "middle" : "top", R = p ? "right" : "center", L = e10.top + z) : (N = p ? "middle" : "bottom", R = p ? "left" : "center", L = e10.bottom - z);
                                                    var B = l6(e10, i17, f.offsetGridLines && v.length > 1);
                                                    B < e10.left && (c5 = "rgba(0,0,0,0)"), B += o8.aliasPixel(u7), D = e10.getPixelForTick(i17) + s4.labelOffset, m1 = b1 = S1 = C1 = B, y1 = I, x1 = O, k1 = t4.top, F = t4.bottom + P;
                                                } else {
                                                    var W, j = "left" === n16.position;
                                                    s4.mirror ? (R = j ? "left" : "right", W = V) : (R = j ? "right" : "left", W = w + V), D = j ? e10.right - W : e10.left + W;
                                                    var H = l6(e10, i17, f.offsetGridLines && v.length > 1);
                                                    H < e10.top && (c5 = "rgba(0,0,0,0)"), H += o8.aliasPixel(u7), L = e10.getPixelForTick(i17) + s4.labelOffset, m1 = _, b1 = T, S1 = t4.left, C1 = t4.right + P, y1 = x1 = k1 = F = H;
                                                }
                                                A.push({
                                                    tx1: m1,
                                                    ty1: y1,
                                                    tx2: b1,
                                                    ty2: x1,
                                                    x1: S1,
                                                    y1: k1,
                                                    x2: C1,
                                                    y2: F,
                                                    labelX: D,
                                                    labelY: L,
                                                    glWidth: u7,
                                                    glColor: c5,
                                                    glBorderDash: d5,
                                                    glBorderDashOffset: h1,
                                                    rotation: -1 * M,
                                                    label: E,
                                                    major: r16.major,
                                                    textBaseline: N,
                                                    textAlign: R
                                                });
                                            }
                                        }), o8.each(A, function(t6) {
                                            if (f.display && (i16.save(), i16.lineWidth = t6.glWidth, i16.strokeStyle = t6.glColor, i16.setLineDash && (i16.setLineDash(t6.glBorderDash), i16.lineDashOffset = t6.glBorderDashOffset), i16.beginPath(), f.drawTicks && (i16.moveTo(t6.tx1, t6.ty1), i16.lineTo(t6.tx2, t6.ty2)), f.drawOnChartArea && (i16.moveTo(t6.x1, t6.y1), i16.lineTo(t6.x2, t6.y2)), i16.stroke(), i16.restore()), s4.display) {
                                                i16.save(), i16.translate(t6.labelX, t6.labelY), i16.rotate(t6.rotation), i16.font = t6.major ? x.font : y.font, i16.fillStyle = t6.major ? b : m, i16.textBaseline = t6.textBaseline, i16.textAlign = t6.textAlign;
                                                var n17 = t6.label;
                                                if (o8.isArray(n17)) for(var r16 = n17.length, a10 = 1.5 * y.size, l7 = e10.isHorizontal() ? 0 : -a10 * (r16 - 1) / 2, u8 = 0; u8 < r16; ++u8)i16.fillText("" + n17[u8], 0, l7), l7 += a10;
                                                else i16.fillText(n17, 0, 0);
                                                i16.restore();
                                            }
                                        }), h.display) {
                                            var F, D, L = 0, E = d4(h) / 2;
                                            if (g) F = e10.left + (e10.right - e10.left) / 2, D = "bottom" === n16.position ? e10.bottom - E - C.bottom : e10.top + E + C.top;
                                            else {
                                                var R = "left" === n16.position;
                                                F = R ? e10.left + E + C.top : e10.right - E - C.top, D = e10.top + (e10.bottom - e10.top) / 2, L = R ? -0.5 * Math.PI : 0.5 * Math.PI;
                                            }
                                            i16.save(), i16.translate(F, D), i16.rotate(L), i16.textAlign = "center", i16.textBaseline = "middle", i16.fillStyle = S, i16.font = k.font, i16.fillText(h.labelString, 0, 0), i16.restore();
                                        }
                                        if (f.drawBorder) {
                                            i16.lineWidth = o8.valueAtIndexOrDefault(f.lineWidth, 0), i16.strokeStyle = o8.valueAtIndexOrDefault(f.color, 0);
                                            var N = e10.left, V = e10.right + P, z = e10.top, B = e10.bottom + P, W = o8.aliasPixel(i16.lineWidth);
                                            g ? (z = B = "top" === n16.position ? e10.bottom : e10.top, z += W, B += W) : (N = V = "left" === n16.position ? e10.right : e10.left, N += W, V += W), i16.beginPath(), i16.moveTo(N, z), i16.lineTo(V, B), i16.stroke();
                                        }
                                    }
                                }
                            });
                        },
                        {
                            26: 26,
                            27: 27,
                            35: 35,
                            46: 46
                        }
                    ],
                    34: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(46), o8 = t3(31);
                            e5.exports = {
                                constructors: {
                                },
                                defaults: {
                                },
                                registerScaleType: function(t4, e10, n16) {
                                    this.constructors[t4] = e10, this.defaults[t4] = i10.clone(n16);
                                },
                                getScaleConstructor: function(t4) {
                                    return this.constructors.hasOwnProperty(t4) ? this.constructors[t4] : void 0;
                                },
                                getScaleDefaults: function(t4) {
                                    return this.defaults.hasOwnProperty(t4) ? i10.merge({
                                    }, [
                                        r5.scale,
                                        this.defaults[t4]
                                    ]) : {
                                    };
                                },
                                updateScaleDefaults: function(t4, e10) {
                                    this.defaults.hasOwnProperty(t4) && (this.defaults[t4] = i10.extend(this.defaults[t4], e10));
                                },
                                addScalesToLayout: function(t4) {
                                    i10.each(t4.scales, function(e10) {
                                        e10.fullWidth = e10.options.fullWidth, e10.position = e10.options.position, e10.weight = e10.options.weight, o8.addBox(t4, e10);
                                    });
                                }
                            };
                        },
                        {
                            26: 26,
                            31: 31,
                            46: 46
                        }
                    ],
                    35: [
                        function(t3, e5, n7) {
                            var r5 = t3(46);
                            e5.exports = {
                                formatters: {
                                    values: function(t4) {
                                        return r5.isArray(t4) ? t4 : "" + t4;
                                    },
                                    linear: function(t4, e10, n16) {
                                        var i10 = n16.length > 3 ? n16[2] - n16[1] : n16[1] - n16[0];
                                        Math.abs(i10) > 1 && t4 !== Math.floor(t4) && (i10 = t4 - Math.floor(t4));
                                        var o8 = r5.log10(Math.abs(i10)), a7 = "";
                                        if (0 !== t4) if (Math.max(Math.abs(n16[0]), Math.abs(n16[n16.length - 1])) < 0.0001) {
                                            var s3 = r5.log10(Math.abs(t4));
                                            a7 = t4.toExponential(Math.floor(s3) - Math.floor(o8));
                                        } else {
                                            var l6 = -1 * Math.floor(o8);
                                            l6 = Math.max(Math.min(l6, 20), 0), a7 = t4.toFixed(l6);
                                        }
                                        else a7 = "0";
                                        return a7;
                                    },
                                    logarithmic: function(t4, e10, n16) {
                                        var i10 = t4 / Math.pow(10, Math.floor(r5.log10(t4)));
                                        return 0 === t4 ? "0" : 1 === i10 || 2 === i10 || 5 === i10 || 0 === e10 || e10 === n16.length - 1 ? t4.toExponential() : "";
                                    }
                                }
                            };
                        },
                        {
                            46: 46
                        }
                    ],
                    36: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27), o8 = t3(46);
                            r5._set("global", {
                                tooltips: {
                                    enabled: !0,
                                    custom: null,
                                    mode: "nearest",
                                    position: "average",
                                    intersect: !0,
                                    backgroundColor: "rgba(0,0,0,0.8)",
                                    titleFontStyle: "bold",
                                    titleSpacing: 2,
                                    titleMarginBottom: 6,
                                    titleFontColor: "#fff",
                                    titleAlign: "left",
                                    bodySpacing: 2,
                                    bodyFontColor: "#fff",
                                    bodyAlign: "left",
                                    footerFontStyle: "bold",
                                    footerSpacing: 2,
                                    footerMarginTop: 6,
                                    footerFontColor: "#fff",
                                    footerAlign: "left",
                                    yPadding: 6,
                                    xPadding: 6,
                                    caretPadding: 2,
                                    caretSize: 5,
                                    cornerRadius: 6,
                                    multiKeyBackground: "#fff",
                                    displayColors: !0,
                                    borderColor: "rgba(0,0,0,0)",
                                    borderWidth: 0,
                                    callbacks: {
                                        beforeTitle: o8.noop,
                                        title: function(t4, e10) {
                                            var n16 = "", r17 = e10.labels, i17 = r17 ? r17.length : 0;
                                            if (t4.length > 0) {
                                                var o12 = t4[0];
                                                o12.xLabel ? n16 = o12.xLabel : i17 > 0 && o12.index < i17 && (n16 = r17[o12.index]);
                                            }
                                            return n16;
                                        },
                                        afterTitle: o8.noop,
                                        beforeBody: o8.noop,
                                        beforeLabel: o8.noop,
                                        label: function(t4, e10) {
                                            var n16 = e10.datasets[t4.datasetIndex].label || "";
                                            return n16 && (n16 += ": "), n16 += t4.yLabel, n16;
                                        },
                                        labelColor: function(t4, e10) {
                                            var n16 = e10.getDatasetMeta(t4.datasetIndex).data[t4.index]._view;
                                            return {
                                                borderColor: n16.borderColor,
                                                backgroundColor: n16.backgroundColor
                                            };
                                        },
                                        labelTextColor: function() {
                                            return this._options.bodyFontColor;
                                        },
                                        afterLabel: o8.noop,
                                        afterBody: o8.noop,
                                        beforeFooter: o8.noop,
                                        footer: o8.noop,
                                        afterFooter: o8.noop
                                    }
                                }
                            });
                            var a7 = {
                                average: function(t4) {
                                    if (!t4.length) return !1;
                                    var e10, n16, r17 = 0, i17 = 0, o13 = 0;
                                    for(e10 = 0, n16 = t4.length; e10 < n16; ++e10){
                                        var a11 = t4[e10];
                                        if (a11 && a11.hasValue()) {
                                            var s5 = a11.tooltipPosition();
                                            r17 += s5.x, i17 += s5.y, ++o13;
                                        }
                                    }
                                    return {
                                        x: Math.round(r17 / o13),
                                        y: Math.round(i17 / o13)
                                    };
                                },
                                nearest: function(t4, e10) {
                                    var n16, r17, i17, a12 = e10.x, s6 = e10.y, l8 = Number.POSITIVE_INFINITY;
                                    for(n16 = 0, r17 = t4.length; n16 < r17; ++n16){
                                        var u5 = t4[n16];
                                        if (u5 && u5.hasValue()) {
                                            var c4 = u5.getCenterPoint(), d4 = o8.distanceBetweenPoints(e10, c4);
                                            d4 < l8 && (l8 = d4, i17 = u5);
                                        }
                                    }
                                    if (i17) {
                                        var f = i17.tooltipPosition();
                                        a12 = f.x, s6 = f.y;
                                    }
                                    return {
                                        x: a12,
                                        y: s6
                                    };
                                }
                            };
                            function s6(t4, e10) {
                                var n16 = o8.color(t4);
                                return n16.alpha(e10 * n16.alpha()).rgbaString();
                            }
                            function l8(t4, e10) {
                                return e10 && (o8.isArray(e10) ? Array.prototype.push.apply(t4, e10) : t4.push(e10)), t4;
                            }
                            function u9(t4) {
                                return ("string" == typeof t4 || t4 instanceof String) && t4.indexOf("\n") > -1 ? t4.split("\n") : t4;
                            }
                            function c6(t4) {
                                var e10 = r5.global, n16 = o8.valueOrDefault;
                                return {
                                    xPadding: t4.xPadding,
                                    yPadding: t4.yPadding,
                                    xAlign: t4.xAlign,
                                    yAlign: t4.yAlign,
                                    bodyFontColor: t4.bodyFontColor,
                                    _bodyFontFamily: n16(t4.bodyFontFamily, e10.defaultFontFamily),
                                    _bodyFontStyle: n16(t4.bodyFontStyle, e10.defaultFontStyle),
                                    _bodyAlign: t4.bodyAlign,
                                    bodyFontSize: n16(t4.bodyFontSize, e10.defaultFontSize),
                                    bodySpacing: t4.bodySpacing,
                                    titleFontColor: t4.titleFontColor,
                                    _titleFontFamily: n16(t4.titleFontFamily, e10.defaultFontFamily),
                                    _titleFontStyle: n16(t4.titleFontStyle, e10.defaultFontStyle),
                                    titleFontSize: n16(t4.titleFontSize, e10.defaultFontSize),
                                    _titleAlign: t4.titleAlign,
                                    titleSpacing: t4.titleSpacing,
                                    titleMarginBottom: t4.titleMarginBottom,
                                    footerFontColor: t4.footerFontColor,
                                    _footerFontFamily: n16(t4.footerFontFamily, e10.defaultFontFamily),
                                    _footerFontStyle: n16(t4.footerFontStyle, e10.defaultFontStyle),
                                    footerFontSize: n16(t4.footerFontSize, e10.defaultFontSize),
                                    _footerAlign: t4.footerAlign,
                                    footerSpacing: t4.footerSpacing,
                                    footerMarginTop: t4.footerMarginTop,
                                    caretSize: t4.caretSize,
                                    cornerRadius: t4.cornerRadius,
                                    backgroundColor: t4.backgroundColor,
                                    opacity: 0,
                                    legendColorBackground: t4.multiKeyBackground,
                                    displayColors: t4.displayColors,
                                    borderColor: t4.borderColor,
                                    borderWidth: t4.borderWidth
                                };
                            }
                            function d6(t4) {
                                return l8([], u9(t4));
                            }
                            (e5.exports = i10.extend({
                                initialize: function() {
                                    this._model = c6(this._options), this._lastActive = [];
                                },
                                getTitle: function() {
                                    var t4 = this, e10 = t4._options, n16 = e10.callbacks, r17 = n16.beforeTitle.apply(t4, arguments), i17 = n16.title.apply(t4, arguments), o13 = n16.afterTitle.apply(t4, arguments), a12 = [];
                                    return a12 = l8(a12, u9(r17)), a12 = l8(a12, u9(i17)), a12 = l8(a12, u9(o13));
                                },
                                getBeforeBody: function() {
                                    return d6(this._options.callbacks.beforeBody.apply(this, arguments));
                                },
                                getBody: function(t4, e10) {
                                    var n16 = this, r17 = n16._options.callbacks, i17 = [];
                                    return o8.each(t4, function(t6) {
                                        var o13 = {
                                            before: [],
                                            lines: [],
                                            after: []
                                        };
                                        l8(o13.before, u9(r17.beforeLabel.call(n16, t6, e10))), l8(o13.lines, r17.label.call(n16, t6, e10)), l8(o13.after, u9(r17.afterLabel.call(n16, t6, e10))), i17.push(o13);
                                    }), i17;
                                },
                                getAfterBody: function() {
                                    return d6(this._options.callbacks.afterBody.apply(this, arguments));
                                },
                                getFooter: function() {
                                    var t4 = this, e10 = t4._options.callbacks, n16 = e10.beforeFooter.apply(t4, arguments), r17 = e10.footer.apply(t4, arguments), i17 = e10.afterFooter.apply(t4, arguments), o13 = [];
                                    return o13 = l8(o13, u9(n16)), o13 = l8(o13, u9(r17)), o13 = l8(o13, u9(i17));
                                },
                                update: function(t4) {
                                    var e10, n16, r17, i17, s7, l9, u10, d7 = this, f = d7._options, h2 = d7._model, p = d7._model = c6(f), g = d7._active, v = d7._data, m2 = {
                                        xAlign: h2.xAlign,
                                        yAlign: h2.yAlign
                                    }, y2 = {
                                        x: h2.x,
                                        y: h2.y
                                    }, b2 = {
                                        width: h2.width,
                                        height: h2.height
                                    }, x2 = {
                                        x: h2.caretX,
                                        y: h2.caretY
                                    };
                                    if (g.length) {
                                        p.opacity = 1;
                                        var w = [], S2 = [];
                                        x2 = a7[f.position].call(d7, g, d7._eventPosition);
                                        var k2 = [];
                                        for(e10 = 0, n16 = g.length; e10 < n16; ++e10)k2.push((r17 = g[e10], i17 = void 0, s7 = void 0, l9 = void 0, u10 = void 0, i17 = r17._xScale, s7 = r17._yScale || r17._scale, l9 = r17._index, u10 = r17._datasetIndex, {
                                            xLabel: i17 ? i17.getLabelForIndex(l9, u10) : "",
                                            yLabel: s7 ? s7.getLabelForIndex(l9, u10) : "",
                                            index: l9,
                                            datasetIndex: u10,
                                            x: r17._model.x,
                                            y: r17._model.y
                                        }));
                                        f.filter && (k2 = k2.filter(function(t6) {
                                            return f.filter(t6, v);
                                        })), f.itemSort && (k2 = k2.sort(function(t6, e15) {
                                            return f.itemSort(t6, e15, v);
                                        })), o8.each(k2, function(t6) {
                                            w.push(f.callbacks.labelColor.call(d7, t6, d7._chart)), S2.push(f.callbacks.labelTextColor.call(d7, t6, d7._chart));
                                        }), p.title = d7.getTitle(k2, v), p.beforeBody = d7.getBeforeBody(k2, v), p.body = d7.getBody(k2, v), p.afterBody = d7.getAfterBody(k2, v), p.footer = d7.getFooter(k2, v), p.x = Math.round(x2.x), p.y = Math.round(x2.y), p.caretPadding = f.caretPadding, p.labelColors = w, p.labelTextColors = S2, p.dataPoints = k2, b2 = (function(t6, e15) {
                                            var n18 = t6._chart.ctx, r18 = 2 * e15.yPadding, i18 = 0, a12 = e15.body, s8 = a12.reduce(function(t7, e16) {
                                                return t7 + e16.before.length + e16.lines.length + e16.after.length;
                                            }, 0);
                                            s8 += e15.beforeBody.length + e15.afterBody.length;
                                            var l10 = e15.title.length, u11 = e15.footer.length, c7 = e15.titleFontSize, d8 = e15.bodyFontSize, f1 = e15.footerFontSize;
                                            r18 += l10 * c7, r18 += l10 ? (l10 - 1) * e15.titleSpacing : 0, r18 += l10 ? e15.titleMarginBottom : 0, r18 += s8 * d8, r18 += s8 ? (s8 - 1) * e15.bodySpacing : 0, r18 += u11 ? e15.footerMarginTop : 0, r18 += u11 * f1, r18 += u11 ? (u11 - 1) * e15.footerSpacing : 0;
                                            var h3 = 0, p1 = function(t7) {
                                                i18 = Math.max(i18, n18.measureText(t7).width + h3);
                                            };
                                            return n18.font = o8.fontString(c7, e15._titleFontStyle, e15._titleFontFamily), o8.each(e15.title, p1), n18.font = o8.fontString(d8, e15._bodyFontStyle, e15._bodyFontFamily), o8.each(e15.beforeBody.concat(e15.afterBody), p1), h3 = e15.displayColors ? d8 + 2 : 0, o8.each(a12, function(t7) {
                                                o8.each(t7.before, p1), o8.each(t7.lines, p1), o8.each(t7.after, p1);
                                            }), h3 = 0, n18.font = o8.fontString(f1, e15._footerFontStyle, e15._footerFontFamily), o8.each(e15.footer, p1), {
                                                width: i18 += 2 * e15.xPadding,
                                                height: r18
                                            };
                                        })(this, p), y2 = (function(t6, e15, n18, r18) {
                                            var i18 = t6.x, o13 = t6.y, a12 = t6.caretSize, s8 = t6.caretPadding, l10 = t6.cornerRadius, u11 = n18.xAlign, c7 = n18.yAlign, d8 = a12 + s8, f1 = l10 + s8;
                                            return "right" === u11 ? i18 -= e15.width : "center" === u11 && ((i18 -= e15.width / 2) + e15.width > r18.width && (i18 = r18.width - e15.width), i18 < 0 && (i18 = 0)), "top" === c7 ? o13 += d8 : o13 -= "bottom" === c7 ? e15.height + d8 : e15.height / 2, "center" === c7 ? "left" === u11 ? i18 += d8 : "right" === u11 && (i18 -= d8) : "left" === u11 ? i18 -= f1 : "right" === u11 && (i18 += f1), {
                                                x: i18,
                                                y: o13
                                            };
                                        })(p, b2, m2 = function(t6, e15) {
                                            var n18, r18, i18, o13, a12, s8 = t6._model, l10 = t6._chart, u11 = t6._chart.chartArea, c7 = "center", d8 = "center";
                                            s8.y < e15.height ? d8 = "top" : s8.y > l10.height - e15.height && (d8 = "bottom");
                                            var f1 = (u11.left + u11.right) / 2, h3 = (u11.top + u11.bottom) / 2;
                                            "center" === d8 ? (n18 = function(t7) {
                                                return t7 <= f1;
                                            }, r18 = function(t7) {
                                                return t7 > f1;
                                            }) : (n18 = function(t7) {
                                                return t7 <= e15.width / 2;
                                            }, r18 = function(t7) {
                                                return t7 >= l10.width - e15.width / 2;
                                            }), i18 = function(t7) {
                                                return t7 + e15.width + s8.caretSize + s8.caretPadding > l10.width;
                                            }, o13 = function(t7) {
                                                return t7 - e15.width - s8.caretSize - s8.caretPadding < 0;
                                            }, a12 = function(t7) {
                                                return t7 <= h3 ? "top" : "bottom";
                                            }, n18(s8.x) ? (c7 = "left", i18(s8.x) && (c7 = "center", d8 = a12(s8.y))) : r18(s8.x) && (c7 = "right", o13(s8.x) && (c7 = "center", d8 = a12(s8.y)));
                                            var p1 = t6._options;
                                            return {
                                                xAlign: p1.xAlign ? p1.xAlign : c7,
                                                yAlign: p1.yAlign ? p1.yAlign : d8
                                            };
                                        }(this, b2), d7._chart);
                                    } else p.opacity = 0;
                                    return p.xAlign = m2.xAlign, p.yAlign = m2.yAlign, p.x = y2.x, p.y = y2.y, p.width = b2.width, p.height = b2.height, p.caretX = x2.x, p.caretY = x2.y, d7._model = p, t4 && f.custom && f.custom.call(d7, p), d7;
                                },
                                drawCaret: function(t4, e10) {
                                    var n16 = this._chart.ctx, r17 = this._view, i17 = this.getCaretPosition(t4, e10, r17);
                                    n16.lineTo(i17.x1, i17.y1), n16.lineTo(i17.x2, i17.y2), n16.lineTo(i17.x3, i17.y3);
                                },
                                getCaretPosition: function(t4, e10, n16) {
                                    var r17, i17, o13, a12, s7, l9, u10 = n16.caretSize, c7 = n16.cornerRadius, d7 = n16.xAlign, f = n16.yAlign, h2 = t4.x, p = t4.y, g = e10.width, v = e10.height;
                                    if ("center" === f) s7 = p + v / 2, "left" === d7 ? (i17 = (r17 = h2) - u10, o13 = r17, a12 = s7 + u10, l9 = s7 - u10) : (i17 = (r17 = h2 + g) + u10, o13 = r17, a12 = s7 - u10, l9 = s7 + u10);
                                    else if ("left" === d7 ? (r17 = (i17 = h2 + c7 + u10) - u10, o13 = i17 + u10) : "right" === d7 ? (r17 = (i17 = h2 + g - c7 - u10) - u10, o13 = i17 + u10) : (r17 = (i17 = n16.caretX) - u10, o13 = i17 + u10), "top" === f) s7 = (a12 = p) - u10, l9 = a12;
                                    else {
                                        s7 = (a12 = p + v) + u10, l9 = a12;
                                        var m2 = o13;
                                        o13 = r17, r17 = m2;
                                    }
                                    return {
                                        x1: r17,
                                        x2: i17,
                                        x3: o13,
                                        y1: a12,
                                        y2: s7,
                                        y3: l9
                                    };
                                },
                                drawTitle: function(t4, e10, n16, r17) {
                                    var i17 = e10.title;
                                    if (i17.length) {
                                        n16.textAlign = e10._titleAlign, n16.textBaseline = "top";
                                        var a12, l9, u10 = e10.titleFontSize, c7 = e10.titleSpacing;
                                        for(n16.fillStyle = s6(e10.titleFontColor, r17), n16.font = o8.fontString(u10, e10._titleFontStyle, e10._titleFontFamily), a12 = 0, l9 = i17.length; a12 < l9; ++a12)n16.fillText(i17[a12], t4.x, t4.y), t4.y += u10 + c7, a12 + 1 === i17.length && (t4.y += e10.titleMarginBottom - c7);
                                    }
                                },
                                drawBody: function(t4, e10, n16, r17) {
                                    var i17 = e10.bodyFontSize, a13 = e10.bodySpacing, l10 = e10.body;
                                    n16.textAlign = e10._bodyAlign, n16.textBaseline = "top", n16.font = o8.fontString(i17, e10._bodyFontStyle, e10._bodyFontFamily);
                                    var u11 = 0, c8 = function(e15) {
                                        n16.fillText(e15, t4.x + u11, t4.y), t4.y += i17 + a13;
                                    };
                                    n16.fillStyle = s6(e10.bodyFontColor, r17), o8.each(e10.beforeBody, c8);
                                    var d7 = e10.displayColors;
                                    u11 = d7 ? i17 + 2 : 0, o8.each(l10, function(a14, l11) {
                                        var u12 = s6(e10.labelTextColors[l11], r17);
                                        n16.fillStyle = u12, o8.each(a14.before, c8), o8.each(a14.lines, function(o13) {
                                            d7 && (n16.fillStyle = s6(e10.legendColorBackground, r17), n16.fillRect(t4.x, t4.y, i17, i17), n16.lineWidth = 1, n16.strokeStyle = s6(e10.labelColors[l11].borderColor, r17), n16.strokeRect(t4.x, t4.y, i17, i17), n16.fillStyle = s6(e10.labelColors[l11].backgroundColor, r17), n16.fillRect(t4.x + 1, t4.y + 1, i17 - 2, i17 - 2), n16.fillStyle = u12), c8(o13);
                                        }), o8.each(a14.after, c8);
                                    }), u11 = 0, o8.each(e10.afterBody, c8), t4.y -= a13;
                                },
                                drawFooter: function(t4, e10, n16, r17) {
                                    var i17 = e10.footer;
                                    i17.length && (t4.y += e10.footerMarginTop, n16.textAlign = e10._footerAlign, n16.textBaseline = "top", n16.fillStyle = s6(e10.footerFontColor, r17), n16.font = o8.fontString(e10.footerFontSize, e10._footerFontStyle, e10._footerFontFamily), o8.each(i17, function(r18) {
                                        n16.fillText(r18, t4.x, t4.y), t4.y += e10.footerFontSize + e10.footerSpacing;
                                    }));
                                },
                                drawBackground: function(t4, e10, n16, r17, i17) {
                                    n16.fillStyle = s6(e10.backgroundColor, i17), n16.strokeStyle = s6(e10.borderColor, i17), n16.lineWidth = e10.borderWidth;
                                    var o13 = e10.xAlign, a13 = e10.yAlign, l10 = t4.x, u11 = t4.y, c8 = r17.width, d7 = r17.height, f = e10.cornerRadius;
                                    n16.beginPath(), n16.moveTo(l10 + f, u11), "top" === a13 && this.drawCaret(t4, r17), n16.lineTo(l10 + c8 - f, u11), n16.quadraticCurveTo(l10 + c8, u11, l10 + c8, u11 + f), "center" === a13 && "right" === o13 && this.drawCaret(t4, r17), n16.lineTo(l10 + c8, u11 + d7 - f), n16.quadraticCurveTo(l10 + c8, u11 + d7, l10 + c8 - f, u11 + d7), "bottom" === a13 && this.drawCaret(t4, r17), n16.lineTo(l10 + f, u11 + d7), n16.quadraticCurveTo(l10, u11 + d7, l10, u11 + d7 - f), "center" === a13 && "left" === o13 && this.drawCaret(t4, r17), n16.lineTo(l10, u11 + f), n16.quadraticCurveTo(l10, u11, l10 + f, u11), n16.closePath(), n16.fill(), e10.borderWidth > 0 && n16.stroke();
                                },
                                draw: function() {
                                    var t4 = this._chart.ctx, e10 = this._view;
                                    if (0 !== e10.opacity) {
                                        var n16 = {
                                            width: e10.width,
                                            height: e10.height
                                        }, r17 = {
                                            x: e10.x,
                                            y: e10.y
                                        }, i17 = Math.abs(e10.opacity < 0.001) ? 0 : e10.opacity, o13 = e10.title.length || e10.beforeBody.length || e10.body.length || e10.afterBody.length || e10.footer.length;
                                        this._options.enabled && o13 && (this.drawBackground(r17, e10, t4, n16, i17), r17.x += e10.xPadding, r17.y += e10.yPadding, this.drawTitle(r17, e10, t4, i17), this.drawBody(r17, e10, t4, i17), this.drawFooter(r17, e10, t4, i17));
                                    }
                                },
                                handleEvent: function(t4) {
                                    var e10, n18 = this, r18 = n18._options;
                                    return n18._lastActive = n18._lastActive || [], "mouseout" === t4.type ? n18._active = [] : n18._active = n18._chart.getElementsAtEventForMode(t4, r18.mode, r18), (e10 = !o8.arrayEquals(n18._active, n18._lastActive)) && (n18._lastActive = n18._active, (r18.enabled || r18.custom) && (n18._eventPosition = {
                                        x: t4.x,
                                        y: t4.y
                                    }, n18.update(!0), n18.pivot())), e10;
                                }
                            })).positioners = a7;
                        },
                        {
                            26: 26,
                            27: 27,
                            46: 46
                        }
                    ],
                    37: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27), o8 = t3(46);
                            r5._set("global", {
                                elements: {
                                    arc: {
                                        backgroundColor: r5.global.defaultColor,
                                        borderColor: "#fff",
                                        borderWidth: 2
                                    }
                                }
                            }), e5.exports = i10.extend({
                                inLabelRange: function(t4) {
                                    var e10 = this._view;
                                    return !!e10 && Math.pow(t4 - e10.x, 2) < Math.pow(e10.radius + e10.hoverRadius, 2);
                                },
                                inRange: function(t4, e10) {
                                    var n18 = this._view;
                                    if (n18) {
                                        for(var r18 = o8.getAngleFromPoint(n18, {
                                            x: t4,
                                            y: e10
                                        }), i18 = r18.angle, a7 = r18.distance, s6 = n18.startAngle, l8 = n18.endAngle; l8 < s6;)l8 += 2 * Math.PI;
                                        for(; i18 > l8;)i18 -= 2 * Math.PI;
                                        for(; i18 < s6;)i18 += 2 * Math.PI;
                                        var u9 = i18 >= s6 && i18 <= l8, c6 = a7 >= n18.innerRadius && a7 <= n18.outerRadius;
                                        return u9 && c6;
                                    }
                                    return !1;
                                },
                                getCenterPoint: function() {
                                    var t4 = this._view, e10 = (t4.startAngle + t4.endAngle) / 2, n18 = (t4.innerRadius + t4.outerRadius) / 2;
                                    return {
                                        x: t4.x + Math.cos(e10) * n18,
                                        y: t4.y + Math.sin(e10) * n18
                                    };
                                },
                                getArea: function() {
                                    var t4 = this._view;
                                    return Math.PI * ((t4.endAngle - t4.startAngle) / (2 * Math.PI)) * (Math.pow(t4.outerRadius, 2) - Math.pow(t4.innerRadius, 2));
                                },
                                tooltipPosition: function() {
                                    var t4 = this._view, e10 = t4.startAngle + (t4.endAngle - t4.startAngle) / 2, n18 = (t4.outerRadius - t4.innerRadius) / 2 + t4.innerRadius;
                                    return {
                                        x: t4.x + Math.cos(e10) * n18,
                                        y: t4.y + Math.sin(e10) * n18
                                    };
                                },
                                draw: function() {
                                    var t4 = this._chart.ctx, e10 = this._view, n18 = e10.startAngle, r19 = e10.endAngle;
                                    t4.beginPath(), t4.arc(e10.x, e10.y, e10.outerRadius, n18, r19), t4.arc(e10.x, e10.y, e10.innerRadius, r19, n18, !0), t4.closePath(), t4.strokeStyle = e10.borderColor, t4.lineWidth = e10.borderWidth, t4.fillStyle = e10.backgroundColor, t4.fill(), t4.lineJoin = "bevel", e10.borderWidth && t4.stroke();
                                }
                            });
                        },
                        {
                            26: 26,
                            27: 27,
                            46: 46
                        }
                    ],
                    38: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27), o8 = t3(46), a13 = r5.global;
                            r5._set("global", {
                                elements: {
                                    line: {
                                        tension: 0.4,
                                        backgroundColor: a13.defaultColor,
                                        borderWidth: 3,
                                        borderColor: a13.defaultColor,
                                        borderCapStyle: "butt",
                                        borderDash: [],
                                        borderDashOffset: 0,
                                        borderJoinStyle: "miter",
                                        capBezierPoints: !0,
                                        fill: !0
                                    }
                                }
                            }), e5.exports = i10.extend({
                                draw: function() {
                                    var t4, e10, n18, r19, i19 = this._view, s7 = this._chart.ctx, l10 = i19.spanGaps, u11 = this._children.slice(), c8 = a13.elements.line, d6 = -1;
                                    for(this._loop && u11.length && u11.push(u11[0]), s7.save(), s7.lineCap = i19.borderCapStyle || c8.borderCapStyle, s7.setLineDash && s7.setLineDash(i19.borderDash || c8.borderDash), s7.lineDashOffset = i19.borderDashOffset || c8.borderDashOffset, s7.lineJoin = i19.borderJoinStyle || c8.borderJoinStyle, s7.lineWidth = i19.borderWidth || c8.borderWidth, s7.strokeStyle = i19.borderColor || a13.defaultColor, s7.beginPath(), d6 = -1, t4 = 0; t4 < u11.length; ++t4)e10 = u11[t4], n18 = o8.previousItem(u11, t4), r19 = e10._view, 0 === t4 ? r19.skip || (s7.moveTo(r19.x, r19.y), d6 = t4) : (n18 = -1 === d6 ? n18 : u11[d6], r19.skip || (d6 !== t4 - 1 && !l10 || -1 === d6 ? s7.moveTo(r19.x, r19.y) : o8.canvas.lineTo(s7, n18._view, e10._view), d6 = t4));
                                    s7.stroke(), s7.restore();
                                }
                            });
                        },
                        {
                            26: 26,
                            27: 27,
                            46: 46
                        }
                    ],
                    39: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27), o8 = t3(46), a13 = r5.global.defaultColor;
                            function s7(t4) {
                                var e10 = this._view;
                                return !!e10 && Math.abs(t4 - e10.x) < e10.radius + e10.hitRadius;
                            }
                            r5._set("global", {
                                elements: {
                                    point: {
                                        radius: 3,
                                        pointStyle: "circle",
                                        backgroundColor: a13,
                                        borderColor: a13,
                                        borderWidth: 1,
                                        hitRadius: 1,
                                        hoverRadius: 4,
                                        hoverBorderWidth: 1
                                    }
                                }
                            }), e5.exports = i10.extend({
                                inRange: function(t4, e10) {
                                    var n18 = this._view;
                                    return !!n18 && Math.pow(t4 - n18.x, 2) + Math.pow(e10 - n18.y, 2) < Math.pow(n18.hitRadius + n18.radius, 2);
                                },
                                inLabelRange: s7,
                                inXRange: s7,
                                inYRange: function(t4) {
                                    var e10 = this._view;
                                    return !!e10 && Math.abs(t4 - e10.y) < e10.radius + e10.hitRadius;
                                },
                                getCenterPoint: function() {
                                    var t4 = this._view;
                                    return {
                                        x: t4.x,
                                        y: t4.y
                                    };
                                },
                                getArea: function() {
                                    return Math.PI * Math.pow(this._view.radius, 2);
                                },
                                tooltipPosition: function() {
                                    var t4 = this._view;
                                    return {
                                        x: t4.x,
                                        y: t4.y,
                                        padding: t4.radius + t4.borderWidth
                                    };
                                },
                                draw: function(t4) {
                                    var e10 = this._view, n18 = this._model, i19 = this._chart.ctx, s8 = e10.pointStyle, l10 = e10.rotation, u11 = e10.radius, c8 = e10.x, d6 = e10.y;
                                    e10.skip || (void 0 === t4 || n18.x >= t4.left && 1.01 * t4.right >= n18.x && n18.y >= t4.top && 1.01 * t4.bottom >= n18.y) && (i19.strokeStyle = e10.borderColor || a13, i19.lineWidth = o8.valueOrDefault(e10.borderWidth, r5.global.elements.point.borderWidth), i19.fillStyle = e10.backgroundColor || a13, o8.canvas.drawPoint(i19, s8, u11, c8, d6, l10));
                                }
                            });
                        },
                        {
                            26: 26,
                            27: 27,
                            46: 46
                        }
                    ],
                    40: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27);
                            function o8(t4) {
                                return void 0 !== t4._view.width;
                            }
                            function a13(t4) {
                                var e10, n18, r19, i19, a14 = t4._view;
                                if (o8(t4)) {
                                    var s7 = a14.width / 2;
                                    e10 = a14.x - s7, n18 = a14.x + s7, r19 = Math.min(a14.y, a14.base), i19 = Math.max(a14.y, a14.base);
                                } else {
                                    var l10 = a14.height / 2;
                                    e10 = Math.min(a14.x, a14.base), n18 = Math.max(a14.x, a14.base), r19 = a14.y - l10, i19 = a14.y + l10;
                                }
                                return {
                                    left: e10,
                                    top: r19,
                                    right: n18,
                                    bottom: i19
                                };
                            }
                            r5._set("global", {
                                elements: {
                                    rectangle: {
                                        backgroundColor: r5.global.defaultColor,
                                        borderColor: r5.global.defaultColor,
                                        borderSkipped: "bottom",
                                        borderWidth: 0
                                    }
                                }
                            }), e5.exports = i10.extend({
                                draw: function() {
                                    var t4, e10, n18, r19, i19, o14, a14, s8 = this._chart.ctx, l11 = this._view, u11 = l11.borderWidth;
                                    if (l11.horizontal ? (t4 = l11.base, e10 = l11.x, n18 = l11.y - l11.height / 2, r19 = l11.y + l11.height / 2, i19 = e10 > t4 ? 1 : -1, o14 = 1, a14 = l11.borderSkipped || "left") : (t4 = l11.x - l11.width / 2, e10 = l11.x + l11.width / 2, n18 = l11.y, i19 = 1, o14 = (r19 = l11.base) > n18 ? 1 : -1, a14 = l11.borderSkipped || "bottom"), u11) {
                                        var c8 = Math.min(Math.abs(t4 - e10), Math.abs(n18 - r19)), d6 = (u11 = u11 > c8 ? c8 : u11) / 2, f = t4 + ("left" !== a14 ? d6 * i19 : 0), h2 = e10 + ("right" !== a14 ? -d6 * i19 : 0), p = n18 + ("top" !== a14 ? d6 * o14 : 0), g = r19 + ("bottom" !== a14 ? -d6 * o14 : 0);
                                        f !== h2 && (n18 = p, r19 = g), p !== g && (t4 = f, e10 = h2);
                                    }
                                    s8.beginPath(), s8.fillStyle = l11.backgroundColor, s8.strokeStyle = l11.borderColor, s8.lineWidth = u11;
                                    var v = [
                                        [
                                            t4,
                                            r19
                                        ],
                                        [
                                            t4,
                                            n18
                                        ],
                                        [
                                            e10,
                                            n18
                                        ],
                                        [
                                            e10,
                                            r19
                                        ]
                                    ], m3 = [
                                        "bottom",
                                        "left",
                                        "top",
                                        "right"
                                    ].indexOf(a14, 0);
                                    function y2(t6) {
                                        return v[(m3 + t6) % 4];
                                    }
                                    -1 === m3 && (m3 = 0);
                                    var b2 = y2(0);
                                    s8.moveTo(b2[0], b2[1]);
                                    for(var x2 = 1; x2 < 4; x2++)b2 = y2(x2), s8.lineTo(b2[0], b2[1]);
                                    s8.fill(), u11 && s8.stroke();
                                },
                                height: function() {
                                    var t4 = this._view;
                                    return t4.base - t4.y;
                                },
                                inRange: function(t4, e10) {
                                    var n18 = !1;
                                    if (this._view) {
                                        var r19 = a13(this);
                                        n18 = t4 >= r19.left && t4 <= r19.right && e10 >= r19.top && e10 <= r19.bottom;
                                    }
                                    return n18;
                                },
                                inLabelRange: function(t4, e10) {
                                    if (!this._view) return !1;
                                    var n18 = a13(this);
                                    return o8(this) ? t4 >= n18.left && t4 <= n18.right : e10 >= n18.top && e10 <= n18.bottom;
                                },
                                inXRange: function(t4) {
                                    var e10 = a13(this);
                                    return t4 >= e10.left && t4 <= e10.right;
                                },
                                inYRange: function(t4) {
                                    var e10 = a13(this);
                                    return t4 >= e10.top && t4 <= e10.bottom;
                                },
                                getCenterPoint: function() {
                                    var t4, e10, n18 = this._view;
                                    return o8(this) ? (t4 = n18.x, e10 = (n18.y + n18.base) / 2) : (t4 = (n18.x + n18.base) / 2, e10 = n18.y), {
                                        x: t4,
                                        y: e10
                                    };
                                },
                                getArea: function() {
                                    var t4 = this._view;
                                    return t4.width * Math.abs(t4.y - t4.base);
                                },
                                tooltipPosition: function() {
                                    var t4 = this._view;
                                    return {
                                        x: t4.x,
                                        y: t4.y
                                    };
                                }
                            });
                        },
                        {
                            26: 26,
                            27: 27
                        }
                    ],
                    41: [
                        function(t3, e5, n7) {
                            e5.exports = {
                            }, e5.exports.Arc = t3(37), e5.exports.Line = t3(38), e5.exports.Point = t3(39), e5.exports.Rectangle = t3(40);
                        },
                        {
                            37: 37,
                            38: 38,
                            39: 39,
                            40: 40
                        }
                    ],
                    42: [
                        function(t3, e5, n7) {
                            var r5 = t3(43);
                            n7 = e5.exports = {
                                clear: function(t4) {
                                    t4.ctx.clearRect(0, 0, t4.width, t4.height);
                                },
                                roundedRect: function(t4, e10, n18, r20, i10, o8) {
                                    if (o8) {
                                        var a13 = Math.min(o8, i10 / 2 - 0.0000001, r20 / 2 - 0.0000001);
                                        t4.moveTo(e10 + a13, n18), t4.lineTo(e10 + r20 - a13, n18), t4.arcTo(e10 + r20, n18, e10 + r20, n18 + a13, a13), t4.lineTo(e10 + r20, n18 + i10 - a13), t4.arcTo(e10 + r20, n18 + i10, e10 + r20 - a13, n18 + i10, a13), t4.lineTo(e10 + a13, n18 + i10), t4.arcTo(e10, n18 + i10, e10, n18 + i10 - a13, a13), t4.lineTo(e10, n18 + a13), t4.arcTo(e10, n18, e10 + a13, n18, a13), t4.closePath(), t4.moveTo(e10, n18);
                                    } else t4.rect(e10, n18, r20, i10);
                                },
                                drawPoint: function(t4, e10, n18, r20, i10, a14) {
                                    var s8, l11, u11, c9, d7, f;
                                    if (a14 = a14 || 0, !e10 || "object" !== o5(e10) || "[object HTMLImageElement]" !== (s8 = e10.toString()) && "[object HTMLCanvasElement]" !== s8) {
                                        if (!(isNaN(n18) || n18 <= 0)) {
                                            switch(t4.save(), t4.translate(r20, i10), t4.rotate(a14 * Math.PI / 180), t4.beginPath(), e10){
                                                default:
                                                    t4.arc(0, 0, n18, 0, 2 * Math.PI), t4.closePath();
                                                    break;
                                                case "triangle":
                                                    d7 = (l11 = 3 * n18 / Math.sqrt(3)) * Math.sqrt(3) / 2, t4.moveTo(-l11 / 2, d7 / 3), t4.lineTo(l11 / 2, d7 / 3), t4.lineTo(0, -2 * d7 / 3), t4.closePath();
                                                    break;
                                                case "rect":
                                                    f = 1 / Math.SQRT2 * n18, t4.rect(-f, -f, 2 * f, 2 * f);
                                                    break;
                                                case "rectRounded":
                                                    var h3 = n18 / Math.SQRT2, p = -h3, g = -h3, v = Math.SQRT2 * n18;
                                                    this.roundedRect(t4, p, g, v, v, 0.425 * n18);
                                                    break;
                                                case "rectRot":
                                                    f = 1 / Math.SQRT2 * n18, t4.moveTo(-f, 0), t4.lineTo(0, f), t4.lineTo(f, 0), t4.lineTo(0, -f), t4.closePath();
                                                    break;
                                                case "cross":
                                                    t4.moveTo(0, n18), t4.lineTo(0, -n18), t4.moveTo(-n18, 0), t4.lineTo(n18, 0);
                                                    break;
                                                case "crossRot":
                                                    u11 = Math.cos(Math.PI / 4) * n18, c9 = Math.sin(Math.PI / 4) * n18, t4.moveTo(-u11, -c9), t4.lineTo(u11, c9), t4.moveTo(-u11, c9), t4.lineTo(u11, -c9);
                                                    break;
                                                case "star":
                                                    t4.moveTo(0, n18), t4.lineTo(0, -n18), t4.moveTo(-n18, 0), t4.lineTo(n18, 0), u11 = Math.cos(Math.PI / 4) * n18, c9 = Math.sin(Math.PI / 4) * n18, t4.moveTo(-u11, -c9), t4.lineTo(u11, c9), t4.moveTo(-u11, c9), t4.lineTo(u11, -c9);
                                                    break;
                                                case "line":
                                                    t4.moveTo(-n18, 0), t4.lineTo(n18, 0);
                                                    break;
                                                case "dash":
                                                    t4.moveTo(0, 0), t4.lineTo(n18, 0);
                                            }
                                            t4.fill(), t4.stroke(), t4.restore();
                                        }
                                    } else t4.drawImage(e10, r20 - e10.width / 2, i10 - e10.height / 2, e10.width, e10.height);
                                },
                                clipArea: function(t4, e10) {
                                    t4.save(), t4.beginPath(), t4.rect(e10.left, e10.top, e10.right - e10.left, e10.bottom - e10.top), t4.clip();
                                },
                                unclipArea: function(t4) {
                                    t4.restore();
                                },
                                lineTo: function(t4, e10, n18, r20) {
                                    if (n18.steppedLine) return "after" === n18.steppedLine && !r20 || "after" !== n18.steppedLine && r20 ? t4.lineTo(e10.x, n18.y) : t4.lineTo(n18.x, e10.y), void t4.lineTo(n18.x, n18.y);
                                    n18.tension ? t4.bezierCurveTo(r20 ? e10.controlPointPreviousX : e10.controlPointNextX, r20 ? e10.controlPointPreviousY : e10.controlPointNextY, r20 ? n18.controlPointNextX : n18.controlPointPreviousX, r20 ? n18.controlPointNextY : n18.controlPointPreviousY, n18.x, n18.y) : t4.lineTo(n18.x, n18.y);
                                }
                            };
                            r5.clear = n7.clear, r5.drawRoundedRectangle = function(t4) {
                                t4.beginPath(), n7.roundedRect.apply(n7, arguments);
                            };
                        },
                        {
                            43: 43
                        }
                    ],
                    43: [
                        function(t3, e5, n7) {
                            var r5, i10 = {
                                noop: function() {
                                },
                                uid: (r5 = 0, function() {
                                    return r5++;
                                }),
                                isNullOrUndef: function(t4) {
                                    return null == t4;
                                },
                                isArray: Array.isArray ? Array.isArray : function(t4) {
                                    return "[object Array]" === Object.prototype.toString.call(t4);
                                },
                                isObject: function(t4) {
                                    return null !== t4 && "[object Object]" === Object.prototype.toString.call(t4);
                                },
                                valueOrDefault: function(t4, e10) {
                                    return void 0 === t4 ? e10 : t4;
                                },
                                valueAtIndexOrDefault: function(t4, e10, n18) {
                                    return i10.valueOrDefault(i10.isArray(t4) ? t4[e10] : t4, n18);
                                },
                                callback: function(t4, e10, n18) {
                                    if (t4 && "function" == typeof t4.call) return t4.apply(n18, e10);
                                },
                                each: function(t4, e10, n18, r20) {
                                    var o8, a14, s8;
                                    if (i10.isArray(t4)) if (a14 = t4.length, r20) for(o8 = a14 - 1; o8 >= 0; o8--)e10.call(n18, t4[o8], o8);
                                    else for(o8 = 0; o8 < a14; o8++)e10.call(n18, t4[o8], o8);
                                    else if (i10.isObject(t4)) for(a14 = (s8 = Object.keys(t4)).length, o8 = 0; o8 < a14; o8++)e10.call(n18, t4[s8[o8]], s8[o8]);
                                },
                                arrayEquals: function(t4, e10) {
                                    var n18, r20, o8, a14;
                                    if (!t4 || !e10 || t4.length !== e10.length) return !1;
                                    for(n18 = 0, r20 = t4.length; n18 < r20; ++n18)if (o8 = t4[n18], a14 = e10[n18], o8 instanceof Array && a14 instanceof Array) {
                                        if (!i10.arrayEquals(o8, a14)) return !1;
                                    } else if (o8 !== a14) return !1;
                                    return !0;
                                },
                                clone: function(t4) {
                                    if (i10.isArray(t4)) return t4.map(i10.clone);
                                    if (i10.isObject(t4)) {
                                        for(var e10 = {
                                        }, n18 = Object.keys(t4), r20 = n18.length, o8 = 0; o8 < r20; ++o8)e10[n18[o8]] = i10.clone(t4[n18[o8]]);
                                        return e10;
                                    }
                                    return t4;
                                },
                                _merger: function(t4, e15, n19, r21) {
                                    var o14 = e15[t4], a14 = n19[t4];
                                    i10.isObject(o14) && i10.isObject(a14) ? i10.merge(o14, a14, r21) : e15[t4] = i10.clone(a14);
                                },
                                _mergerIf: function(t4, e15, n19) {
                                    var r21 = e15[t4], o14 = n19[t4];
                                    i10.isObject(r21) && i10.isObject(o14) ? i10.mergeIf(r21, o14) : e15.hasOwnProperty(t4) || (e15[t4] = i10.clone(o14));
                                },
                                merge: function(t4, e15, n19) {
                                    var r21, o14, a14, s8, l11, u11 = i10.isArray(e15) ? e15 : [
                                        e15
                                    ], c9 = u11.length;
                                    if (!i10.isObject(t4)) return t4;
                                    for(r21 = (n19 = n19 || {
                                    }).merger || i10._merger, o14 = 0; o14 < c9; ++o14)if (e15 = u11[o14], i10.isObject(e15)) for(l11 = 0, s8 = (a14 = Object.keys(e15)).length; l11 < s8; ++l11)r21(a14[l11], t4, e15, n19);
                                    return t4;
                                },
                                mergeIf: function(t4, e15) {
                                    return i10.merge(t4, e15, {
                                        merger: i10._mergerIf
                                    });
                                },
                                extend: function(t4) {
                                    for(var e15 = function(e16, n19) {
                                        t4[n19] = e16;
                                    }, n19 = 1, r21 = arguments.length; n19 < r21; ++n19)i10.each(arguments[n19], e15);
                                    return t4;
                                },
                                inherits: function(t4) {
                                    var e15 = this, n19 = t4 && t4.hasOwnProperty("constructor") ? t4.constructor : function() {
                                        return e15.apply(this, arguments);
                                    }, r21 = function() {
                                        this.constructor = n19;
                                    };
                                    return r21.prototype = e15.prototype, n19.prototype = new r21, n19.extend = i10.inherits, t4 && i10.extend(n19.prototype, t4), n19.__super__ = e15.prototype, n19;
                                }
                            };
                            e5.exports = i10, i10.callCallback = i10.callback, i10.indexOf = function(t4, e15, n19) {
                                return Array.prototype.indexOf.call(t4, e15, n19);
                            }, i10.getValueOrDefault = i10.valueOrDefault, i10.getValueAtIndexOrDefault = i10.valueAtIndexOrDefault;
                        },
                        {
                        }
                    ],
                    44: [
                        function(t3, e5, n7) {
                            var r5 = t3(43), i10 = {
                                linear: function(t4) {
                                    return t4;
                                },
                                easeInQuad: function(t4) {
                                    return t4 * t4;
                                },
                                easeOutQuad: function(t4) {
                                    return -t4 * (t4 - 2);
                                },
                                easeInOutQuad: function(t4) {
                                    return (t4 /= 0.5) < 1 ? 0.5 * t4 * t4 : -0.5 * (--t4 * (t4 - 2) - 1);
                                },
                                easeInCubic: function(t4) {
                                    return t4 * t4 * t4;
                                },
                                easeOutCubic: function(t4) {
                                    return (t4 -= 1) * t4 * t4 + 1;
                                },
                                easeInOutCubic: function(t4) {
                                    return (t4 /= 0.5) < 1 ? 0.5 * t4 * t4 * t4 : 0.5 * ((t4 -= 2) * t4 * t4 + 2);
                                },
                                easeInQuart: function(t4) {
                                    return t4 * t4 * t4 * t4;
                                },
                                easeOutQuart: function(t4) {
                                    return -((t4 -= 1) * t4 * t4 * t4 - 1);
                                },
                                easeInOutQuart: function(t4) {
                                    return (t4 /= 0.5) < 1 ? 0.5 * t4 * t4 * t4 * t4 : -0.5 * ((t4 -= 2) * t4 * t4 * t4 - 2);
                                },
                                easeInQuint: function(t4) {
                                    return t4 * t4 * t4 * t4 * t4;
                                },
                                easeOutQuint: function(t4) {
                                    return (t4 -= 1) * t4 * t4 * t4 * t4 + 1;
                                },
                                easeInOutQuint: function(t4) {
                                    return (t4 /= 0.5) < 1 ? 0.5 * t4 * t4 * t4 * t4 * t4 : 0.5 * ((t4 -= 2) * t4 * t4 * t4 * t4 + 2);
                                },
                                easeInSine: function(t4) {
                                    return 1 - Math.cos(t4 * (Math.PI / 2));
                                },
                                easeOutSine: function(t4) {
                                    return Math.sin(t4 * (Math.PI / 2));
                                },
                                easeInOutSine: function(t4) {
                                    return -0.5 * (Math.cos(Math.PI * t4) - 1);
                                },
                                easeInExpo: function(t4) {
                                    return 0 === t4 ? 0 : Math.pow(2, 10 * (t4 - 1));
                                },
                                easeOutExpo: function(t4) {
                                    return 1 === t4 ? 1 : 1 - Math.pow(2, -10 * t4);
                                },
                                easeInOutExpo: function(t4) {
                                    return 0 === t4 ? 0 : 1 === t4 ? 1 : (t4 /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t4 - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t4));
                                },
                                easeInCirc: function(t4) {
                                    return t4 >= 1 ? t4 : -(Math.sqrt(1 - t4 * t4) - 1);
                                },
                                easeOutCirc: function(t4) {
                                    return Math.sqrt(1 - (t4 -= 1) * t4);
                                },
                                easeInOutCirc: function(t4) {
                                    return (t4 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t4 * t4) - 1) : 0.5 * (Math.sqrt(1 - (t4 -= 2) * t4) + 1);
                                },
                                easeInElastic: function(t4) {
                                    var e15 = 1.70158, n19 = 0, r21 = 1;
                                    return 0 === t4 ? 0 : 1 === t4 ? 1 : (n19 || (n19 = 0.3), r21 < 1 ? (r21 = 1, e15 = n19 / 4) : e15 = n19 / (2 * Math.PI) * Math.asin(1 / r21), -r21 * Math.pow(2, 10 * (t4 -= 1)) * Math.sin((t4 - e15) * (2 * Math.PI) / n19));
                                },
                                easeOutElastic: function(t4) {
                                    var e15 = 1.70158, n19 = 0, r21 = 1;
                                    return 0 === t4 ? 0 : 1 === t4 ? 1 : (n19 || (n19 = 0.3), r21 < 1 ? (r21 = 1, e15 = n19 / 4) : e15 = n19 / (2 * Math.PI) * Math.asin(1 / r21), r21 * Math.pow(2, -10 * t4) * Math.sin((t4 - e15) * (2 * Math.PI) / n19) + 1);
                                },
                                easeInOutElastic: function(t4) {
                                    var e15 = 1.70158, n19 = 0, r21 = 1;
                                    return 0 === t4 ? 0 : 2 == (t4 /= 0.5) ? 1 : (n19 || (n19 = 0.45), r21 < 1 ? (r21 = 1, e15 = n19 / 4) : e15 = n19 / (2 * Math.PI) * Math.asin(1 / r21), t4 < 1 ? r21 * Math.pow(2, 10 * (t4 -= 1)) * Math.sin((t4 - e15) * (2 * Math.PI) / n19) * -0.5 : r21 * Math.pow(2, -10 * (t4 -= 1)) * Math.sin((t4 - e15) * (2 * Math.PI) / n19) * 0.5 + 1);
                                },
                                easeInBack: function(t4) {
                                    var e15 = 1.70158;
                                    return t4 * t4 * ((e15 + 1) * t4 - e15);
                                },
                                easeOutBack: function(t4) {
                                    var e15 = 1.70158;
                                    return (t4 -= 1) * t4 * ((e15 + 1) * t4 + e15) + 1;
                                },
                                easeInOutBack: function(t4) {
                                    var e15 = 1.70158;
                                    return (t4 /= 0.5) < 1 ? t4 * t4 * ((1 + (e15 *= 1.525)) * t4 - e15) * 0.5 : 0.5 * ((t4 -= 2) * t4 * ((1 + (e15 *= 1.525)) * t4 + e15) + 2);
                                },
                                easeInBounce: function(t4) {
                                    return 1 - i10.easeOutBounce(1 - t4);
                                },
                                easeOutBounce: function(t4) {
                                    return t4 < 1 / 2.75 ? 7.5625 * t4 * t4 : t4 < 2 / 2.75 ? 7.5625 * (t4 -= 1.5 / 2.75) * t4 + 0.75 : t4 < 2.5 / 2.75 ? 7.5625 * (t4 -= 2.25 / 2.75) * t4 + 0.9375 : 7.5625 * (t4 -= 2.625 / 2.75) * t4 + 0.984375;
                                },
                                easeInOutBounce: function(t4) {
                                    return t4 < 0.5 ? 0.5 * i10.easeInBounce(2 * t4) : 0.5 * i10.easeOutBounce(2 * t4 - 1) + 0.5;
                                }
                            };
                            e5.exports = {
                                effects: i10
                            }, r5.easingEffects = i10;
                        },
                        {
                            43: 43
                        }
                    ],
                    45: [
                        function(t3, e5, n7) {
                            var r5 = t3(43);
                            e5.exports = {
                                toLineHeight: function(t4, e15) {
                                    var n19 = ("" + t4).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                                    if (!n19 || "normal" === n19[1]) return 1.2 * e15;
                                    switch(t4 = +n19[2], n19[3]){
                                        case "px":
                                            return t4;
                                        case "%":
                                            t4 /= 100;
                                    }
                                    return e15 * t4;
                                },
                                toPadding: function(t4) {
                                    var e15, n19, i10, o14;
                                    return r5.isObject(t4) ? (e15 = +t4.top || 0, n19 = +t4.right || 0, i10 = +t4.bottom || 0, o14 = +t4.left || 0) : e15 = n19 = i10 = o14 = +t4 || 0, {
                                        top: e15,
                                        right: n19,
                                        bottom: i10,
                                        left: o14,
                                        height: e15 + i10,
                                        width: o14 + n19
                                    };
                                },
                                resolve: function(t4, e15, n19) {
                                    var i10, o14, a14;
                                    for(i10 = 0, o14 = t4.length; i10 < o14; ++i10)if (void 0 !== (a14 = t4[i10]) && (void 0 !== e15 && "function" == typeof a14 && (a14 = a14(e15)), void 0 !== n19 && r5.isArray(a14) && (a14 = a14[n19]), void 0 !== a14)) return a14;
                                }
                            };
                        },
                        {
                            43: 43
                        }
                    ],
                    46: [
                        function(t3, e5, n7) {
                            e5.exports = t3(43), e5.exports.easing = t3(44), e5.exports.canvas = t3(42), e5.exports.options = t3(45);
                        },
                        {
                            42: 42,
                            43: 43,
                            44: 44,
                            45: 45
                        }
                    ],
                    47: [
                        function(t3, e5, n7) {
                            e5.exports = {
                                acquireContext: function(t4) {
                                    return t4 && t4.canvas && (t4 = t4.canvas), t4 && t4.getContext("2d") || null;
                                }
                            };
                        },
                        {
                        }
                    ],
                    48: [
                        function(t3, e5, n7) {
                            var r5 = t3(46), i10 = "$chartjs", o14 = "chartjs-", a14 = o14 + "render-monitor", s8 = o14 + "render-animation", l11 = [
                                "animationstart",
                                "webkitAnimationStart"
                            ], u11 = {
                                touchstart: "mousedown",
                                touchmove: "mousemove",
                                touchend: "mouseup",
                                pointerenter: "mouseenter",
                                pointerdown: "mousedown",
                                pointermove: "mousemove",
                                pointerup: "mouseup",
                                pointerleave: "mouseout",
                                pointerout: "mouseout"
                            };
                            function c9(t4, e15) {
                                var n19 = r5.getStyle(t4, e15), i19 = n19 && n19.match(/^(\d+)(\.\d+)?px$/);
                                return i19 ? Number(i19[1]) : void 0;
                            }
                            var d7 = !!function() {
                                var t4 = !1;
                                try {
                                    var e15 = Object.defineProperty({
                                    }, "passive", {
                                        get: function() {
                                            t4 = !0;
                                        }
                                    });
                                    window.addEventListener("e", null, e15);
                                } catch (t6) {
                                }
                                return t4;
                            }() && {
                                passive: !0
                            };
                            function f(t4, e15, n19) {
                                t4.addEventListener(e15, n19, d7);
                            }
                            function h4(t4, e15, n19) {
                                t4.removeEventListener(e15, n19, d7);
                            }
                            function p(t4, e15, n19, r21, i19) {
                                return {
                                    type: t4,
                                    chart: e15,
                                    native: i19 || null,
                                    x: void 0 !== n19 ? n19 : null,
                                    y: void 0 !== r21 ? r21 : null
                                };
                            }
                            function g(t4, e15, n19) {
                                var u12, c10, d8, h5, g1 = t4[i10] || (t4[i10] = {
                                }), v = g1.resizer = function(t6) {
                                    var e16 = document.createElement("div"), n20 = o14 + "size-monitor", r21 = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                                    e16.style.cssText = r21, e16.className = n20, e16.innerHTML = '<div class="' + n20 + '-expand" style="' + r21 + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n20 + '-shrink" style="' + r21 + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                                    var i19 = e16.childNodes[0], a15 = e16.childNodes[1];
                                    e16._reset = function() {
                                        i19.scrollLeft = 1000000, i19.scrollTop = 1000000, a15.scrollLeft = 1000000, a15.scrollTop = 1000000;
                                    };
                                    var s9 = function() {
                                        e16._reset(), t6();
                                    };
                                    return f(i19, "scroll", s9.bind(i19, "expand")), f(a15, "scroll", s9.bind(a15, "shrink")), e16;
                                }((u12 = function() {
                                    if (g1.resizer) return e15(p("resize", n19));
                                }, d8 = !1, h5 = [], function() {
                                    h5 = Array.prototype.slice.call(arguments), c10 = c10 || this, d8 || (d8 = !0, r5.requestAnimFrame.call(window, function() {
                                        d8 = !1, u12.apply(c10, h5);
                                    }));
                                }));
                                !function(t6, e16) {
                                    var n20 = t6[i10] || (t6[i10] = {
                                    }), o15 = n20.renderProxy = function(t7) {
                                        t7.animationName === s8 && e16();
                                    };
                                    r5.each(l11, function(e17) {
                                        f(t6, e17, o15);
                                    }), n20.reflow = !!t6.offsetParent, t6.classList.add(a14);
                                }(t4, function() {
                                    if (g1.resizer) {
                                        var e16 = t4.parentNode;
                                        e16 && e16 !== v.parentNode && e16.insertBefore(v, e16.firstChild), v._reset();
                                    }
                                });
                            }
                            function v(t4) {
                                var e15 = t4[i10] || {
                                }, n19 = e15.resizer;
                                delete e15.resizer, (function(t6) {
                                    var e17 = t6[i10] || {
                                    }, n20 = e17.renderProxy;
                                    n20 && (r5.each(l11, function(e18) {
                                        h4(t6, e18, n20);
                                    }), delete e17.renderProxy), t6.classList.remove(a14);
                                })(t4), n19 && n19.parentNode && n19.parentNode.removeChild(n19);
                            }
                            e5.exports = {
                                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                                initialize: function() {
                                    var t4, e15, n19, r21 = "from{opacity:0.99}to{opacity:1}";
                                    e15 = "@-webkit-keyframes " + s8 + "{" + r21 + "}@keyframes " + s8 + "{" + r21 + "}." + a14 + "{-webkit-animation:" + s8 + " 0.001s;animation:" + s8 + " 0.001s;}", n19 = (t4 = this)._style || document.createElement("style"), t4._style || (t4._style = n19, e15 = "/* Chart.js */\n" + e15, n19.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n19)), n19.appendChild(document.createTextNode(e15));
                                },
                                acquireContext: function(t4, e15) {
                                    "string" == typeof t4 ? t4 = document.getElementById(t4) : t4.length && (t4 = t4[0]), t4 && t4.canvas && (t4 = t4.canvas);
                                    var n19 = t4 && t4.getContext && t4.getContext("2d");
                                    return n19 && n19.canvas === t4 ? ((function(t6, e17) {
                                        var n20 = t6.style, r21 = t6.getAttribute("height"), o15 = t6.getAttribute("width");
                                        if (t6[i10] = {
                                            initial: {
                                                height: r21,
                                                width: o15,
                                                style: {
                                                    display: n20.display,
                                                    height: n20.height,
                                                    width: n20.width
                                                }
                                            }
                                        }, n20.display = n20.display || "block", null === o15 || "" === o15) {
                                            var a15 = c9(t6, "width");
                                            void 0 !== a15 && (t6.width = a15);
                                        }
                                        if (null === r21 || "" === r21) if ("" === t6.style.height) t6.height = t6.width / (e17.options.aspectRatio || 2);
                                        else {
                                            var s9 = c9(t6, "height");
                                            void 0 !== a15 && (t6.height = s9);
                                        }
                                    })(t4, e15), n19) : null;
                                },
                                releaseContext: function(t4) {
                                    var e15 = t4.canvas;
                                    if (e15[i10]) {
                                        var n19 = e15[i10].initial;
                                        [
                                            "height",
                                            "width"
                                        ].forEach(function(t6) {
                                            var i19 = n19[t6];
                                            r5.isNullOrUndef(i19) ? e15.removeAttribute(t6) : e15.setAttribute(t6, i19);
                                        }), r5.each(n19.style || {
                                        }, function(t6, n20) {
                                            e15.style[n20] = t6;
                                        }), e15.width = e15.width, delete e15[i10];
                                    }
                                },
                                addEventListener: function(t4, e15, n20) {
                                    var o15 = t4.canvas;
                                    if ("resize" !== e15) {
                                        var a16 = n20[i10] || (n20[i10] = {
                                        });
                                        f(o15, e15, (a16.proxies || (a16.proxies = {
                                        }))[t4.id + "_" + e15] = function(e17) {
                                            n20(function(t6, e18) {
                                                var n21 = u11[t6.type] || t6.type, i19 = r5.getRelativePosition(t6, e18);
                                                return p(n21, e18, i19.x, i19.y, t6);
                                            }(e17, t4));
                                        });
                                    } else g(o15, n20, t4);
                                },
                                removeEventListener: function(t4, e15, n20) {
                                    var r21 = t4.canvas;
                                    if ("resize" !== e15) {
                                        var o15 = ((n20[i10] || {
                                        }).proxies || {
                                        })[t4.id + "_" + e15];
                                        o15 && h4(r21, e15, o15);
                                    } else v(r21);
                                }
                            }, r5.addEvent = f, r5.removeEvent = h4;
                        },
                        {
                            46: 46
                        }
                    ],
                    49: [
                        function(t3, e5, n7) {
                            var r5 = t3(46), i10 = t3(47), o14 = t3(48), a14 = o14._enabled ? o14 : i10;
                            e5.exports = r5.extend({
                                initialize: function() {
                                },
                                acquireContext: function() {
                                },
                                releaseContext: function() {
                                },
                                addEventListener: function() {
                                },
                                removeEventListener: function() {
                                }
                            }, a14);
                        },
                        {
                            46: 46,
                            47: 47,
                            48: 48
                        }
                    ],
                    50: [
                        function(t3, e5, n7) {
                            e5.exports = {
                            }, e5.exports.filler = t3(51), e5.exports.legend = t3(52), e5.exports.title = t3(53);
                        },
                        {
                            51: 51,
                            52: 52,
                            53: 53
                        }
                    ],
                    51: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(41), o14 = t3(46);
                            r5._set("global", {
                                plugins: {
                                    filler: {
                                        propagate: !0
                                    }
                                }
                            });
                            var a14 = {
                                dataset: function(t4) {
                                    var e15 = t4.fill, n20 = t4.chart, r21 = n20.getDatasetMeta(e15), i19 = r21 && n20.isDatasetVisible(e15) && r21.dataset._children || [], o16 = i19.length || 0;
                                    return o16 ? function(t6, e17) {
                                        return e17 < o16 && i19[e17]._view || null;
                                    } : null;
                                },
                                boundary: function(t4) {
                                    var e15 = t4.boundary, n20 = e15 ? e15.x : null, r21 = e15 ? e15.y : null;
                                    return function(t6) {
                                        return {
                                            x: null === n20 ? t6.x : n20,
                                            y: null === r21 ? t6.y : r21
                                        };
                                    };
                                }
                            };
                            function s8(t4, e15, n20) {
                                var r21, i19 = t4._model || {
                                }, o16 = i19.fill;
                                if (void 0 === o16 && (o16 = !!i19.backgroundColor), !1 === o16 || null === o16) return !1;
                                if (!0 === o16) return "origin";
                                if (r21 = parseFloat(o16, 10), isFinite(r21) && Math.floor(r21) === r21) return "-" !== o16[0] && "+" !== o16[0] || (r21 = e15 + r21), !(r21 === e15 || r21 < 0 || r21 >= n20) && r21;
                                switch(o16){
                                    case "bottom":
                                        return "start";
                                    case "top":
                                        return "end";
                                    case "zero":
                                        return "origin";
                                    case "origin":
                                    case "start":
                                    case "end":
                                        return o16;
                                    default:
                                        return !1;
                                }
                            }
                            function l11(t4) {
                                var e15, n20 = t4.el._model || {
                                }, r21 = t4.el._scale || {
                                }, i19 = t4.fill, o16 = null;
                                if (isFinite(i19)) return null;
                                if ("start" === i19 ? o16 = void 0 === n20.scaleBottom ? r21.bottom : n20.scaleBottom : "end" === i19 ? o16 = void 0 === n20.scaleTop ? r21.top : n20.scaleTop : void 0 !== n20.scaleZero ? o16 = n20.scaleZero : r21.getBasePosition ? o16 = r21.getBasePosition() : r21.getBasePixel && (o16 = r21.getBasePixel()), null != o16) {
                                    if (void 0 !== o16.x && void 0 !== o16.y) return o16;
                                    if ("number" == typeof o16 && isFinite(o16)) return {
                                        x: (e15 = r21.isHorizontal()) ? o16 : null,
                                        y: e15 ? null : o16
                                    };
                                }
                                return null;
                            }
                            function u11(t4, e15, n20) {
                                var r21, i19 = t4[e15].fill, o16 = [
                                    e15
                                ];
                                if (!n20) return i19;
                                for(; !1 !== i19 && -1 === o16.indexOf(i19);){
                                    if (!isFinite(i19)) return i19;
                                    if (!(r21 = t4[i19])) return !1;
                                    if (r21.visible) return i19;
                                    o16.push(i19), i19 = r21.fill;
                                }
                                return !1;
                            }
                            function c9(t4) {
                                var e15 = t4.fill, n20 = "dataset";
                                return !1 === e15 ? null : (isFinite(e15) || (n20 = "boundary"), a14[n20](t4));
                            }
                            function d7(t4) {
                                return t4 && !t4.skip;
                            }
                            function f(t4, e15, n20, r21, i19) {
                                var a17;
                                if (r21 && i19) {
                                    for(t4.moveTo(e15[0].x, e15[0].y), a17 = 1; a17 < r21; ++a17)o14.canvas.lineTo(t4, e15[a17 - 1], e15[a17]);
                                    for(t4.lineTo(n20[i19 - 1].x, n20[i19 - 1].y), a17 = i19 - 1; a17 > 0; --a17)o14.canvas.lineTo(t4, n20[a17], n20[a17 - 1], !0);
                                }
                            }
                            e5.exports = {
                                id: "filler",
                                afterDatasetsUpdate: function(t4, e15) {
                                    var n20, r21, o16, a17, d8 = (t4.data.datasets || []).length, f1 = e15.propagate, h4 = [];
                                    for(r21 = 0; r21 < d8; ++r21)a17 = null, (o16 = (n20 = t4.getDatasetMeta(r21)).dataset) && o16._model && o16 instanceof i10.Line && (a17 = {
                                        visible: t4.isDatasetVisible(r21),
                                        fill: s8(o16, r21, d8),
                                        chart: t4,
                                        el: o16
                                    }), n20.$filler = a17, h4.push(a17);
                                    for(r21 = 0; r21 < d8; ++r21)(a17 = h4[r21]) && (a17.fill = u11(h4, r21, f1), a17.boundary = l11(a17), a17.mapper = c9(a17));
                                },
                                beforeDatasetDraw: function(t4, e15) {
                                    var n20 = e15.meta.$filler;
                                    if (n20) {
                                        var i19 = t4.ctx, a17 = n20.el, s10 = a17._view, l12 = a17._children || [], u12 = n20.mapper, c10 = s10.backgroundColor || r5.global.defaultColor;
                                        u12 && c10 && l12.length && (o14.canvas.clipArea(i19, t4.chartArea), (function(t6, e17, n21, r21, i20, o16) {
                                            var a18, s11, l13, u13, c11, h4, p, g = e17.length, v = r21.spanGaps, m3 = [], y2 = [], b2 = 0, x2 = 0;
                                            for(t6.beginPath(), a18 = 0, s11 = g + !!o16; a18 < s11; ++a18)c11 = n21(u13 = e17[l13 = a18 % g]._view, l13, r21), h4 = d7(u13), p = d7(c11), h4 && p ? (b2 = m3.push(u13), x2 = y2.push(c11)) : b2 && x2 && (v ? (h4 && m3.push(u13), p && y2.push(c11)) : (f(t6, m3, y2, b2, x2), b2 = x2 = 0, m3 = [], y2 = []));
                                            f(t6, m3, y2, b2, x2), t6.closePath(), t6.fillStyle = i20, t6.fill();
                                        })(i19, l12, u12, s10, c10, a17._loop), o14.canvas.unclipArea(i19));
                                    }
                                }
                            };
                        },
                        {
                            26: 26,
                            41: 41,
                            46: 46
                        }
                    ],
                    52: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27), o14 = t3(46), a14 = t3(31), s8 = o14.noop;
                            function l11(t4, e15) {
                                return t4.usePointStyle ? e15 * Math.SQRT2 : t4.boxWidth;
                            }
                            r5._set("global", {
                                legend: {
                                    display: !0,
                                    position: "top",
                                    fullWidth: !0,
                                    reverse: !1,
                                    weight: 1000,
                                    onClick: function(t4, e15) {
                                        var n20 = e15.datasetIndex, r21 = this.chart, i20 = r21.getDatasetMeta(n20);
                                        i20.hidden = null === i20.hidden ? !r21.data.datasets[n20].hidden : null, r21.update();
                                    },
                                    onHover: null,
                                    labels: {
                                        boxWidth: 40,
                                        padding: 10,
                                        generateLabels: function(t4) {
                                            var e15 = t4.data;
                                            return o14.isArray(e15.datasets) ? e15.datasets.map(function(e17, n20) {
                                                return {
                                                    text: e17.label,
                                                    fillStyle: o14.isArray(e17.backgroundColor) ? e17.backgroundColor[0] : e17.backgroundColor,
                                                    hidden: !t4.isDatasetVisible(n20),
                                                    lineCap: e17.borderCapStyle,
                                                    lineDash: e17.borderDash,
                                                    lineDashOffset: e17.borderDashOffset,
                                                    lineJoin: e17.borderJoinStyle,
                                                    lineWidth: e17.borderWidth,
                                                    strokeStyle: e17.borderColor,
                                                    pointStyle: e17.pointStyle,
                                                    datasetIndex: n20
                                                };
                                            }, this) : [];
                                        }
                                    }
                                },
                                legendCallback: function(t4) {
                                    var e15 = [];
                                    e15.push('<ul class="' + t4.id + '-legend">');
                                    for(var n20 = 0; n20 < t4.data.datasets.length; n20++)e15.push('<li><span style="background-color:' + t4.data.datasets[n20].backgroundColor + '"></span>'), t4.data.datasets[n20].label && e15.push(t4.data.datasets[n20].label), e15.push("</li>");
                                    return e15.push("</ul>"), e15.join("");
                                }
                            });
                            var u11 = i10.extend({
                                initialize: function(t4) {
                                    o14.extend(this, t4), this.legendHitBoxes = [], this.doughnutMode = !1;
                                },
                                beforeUpdate: s8,
                                update: function(t4, e15, n20) {
                                    var r21 = this;
                                    return r21.beforeUpdate(), r21.maxWidth = t4, r21.maxHeight = e15, r21.margins = n20, r21.beforeSetDimensions(), r21.setDimensions(), r21.afterSetDimensions(), r21.beforeBuildLabels(), r21.buildLabels(), r21.afterBuildLabels(), r21.beforeFit(), r21.fit(), r21.afterFit(), r21.afterUpdate(), r21.minSize;
                                },
                                afterUpdate: s8,
                                beforeSetDimensions: s8,
                                setDimensions: function() {
                                    var t4 = this;
                                    t4.isHorizontal() ? (t4.width = t4.maxWidth, t4.left = 0, t4.right = t4.width) : (t4.height = t4.maxHeight, t4.top = 0, t4.bottom = t4.height), t4.paddingLeft = 0, t4.paddingTop = 0, t4.paddingRight = 0, t4.paddingBottom = 0, t4.minSize = {
                                        width: 0,
                                        height: 0
                                    };
                                },
                                afterSetDimensions: s8,
                                beforeBuildLabels: s8,
                                buildLabels: function() {
                                    var t4 = this, e15 = t4.options.labels || {
                                    }, n20 = o14.callback(e15.generateLabels, [
                                        t4.chart
                                    ], t4) || [];
                                    e15.filter && (n20 = n20.filter(function(n21) {
                                        return e15.filter(n21, t4.chart.data);
                                    })), t4.options.reverse && n20.reverse(), t4.legendItems = n20;
                                },
                                afterBuildLabels: s8,
                                beforeFit: s8,
                                fit: function() {
                                    var t4 = this, e15 = t4.options, n20 = e15.labels, i20 = e15.display, a18 = t4.ctx, s11 = r5.global, u13 = o14.valueOrDefault, c9 = u13(n20.fontSize, s11.defaultFontSize), d7 = u13(n20.fontStyle, s11.defaultFontStyle), f = u13(n20.fontFamily, s11.defaultFontFamily), h4 = o14.fontString(c9, d7, f), p = t4.legendHitBoxes = [], g = t4.minSize, v = t4.isHorizontal();
                                    if (v ? (g.width = t4.maxWidth, g.height = i20 ? 10 : 0) : (g.width = i20 ? 10 : 0, g.height = t4.maxHeight), i20) if (a18.font = h4, v) {
                                        var m3 = t4.lineWidths = [
                                            0
                                        ], y2 = t4.legendItems.length ? c9 + n20.padding : 0;
                                        a18.textAlign = "left", a18.textBaseline = "top", o14.each(t4.legendItems, function(e17, r21) {
                                            var i21 = l11(n20, c9) + c9 / 2 + a18.measureText(e17.text).width;
                                            m3[m3.length - 1] + i21 + n20.padding >= t4.width && (y2 += c9 + n20.padding, m3[m3.length] = t4.left), p[r21] = {
                                                left: 0,
                                                top: 0,
                                                width: i21,
                                                height: c9
                                            }, m3[m3.length - 1] += i21 + n20.padding;
                                        }), g.height += y2;
                                    } else {
                                        var b2 = n20.padding, x2 = t4.columnWidths = [], w = n20.padding, S3 = 0, k3 = 0, C2 = c9 + b2;
                                        o14.each(t4.legendItems, function(t6, e17) {
                                            var r21 = l11(n20, c9) + c9 / 2 + a18.measureText(t6.text).width;
                                            k3 + C2 > g.height && (w += S3 + n20.padding, x2.push(S3), S3 = 0, k3 = 0), S3 = Math.max(S3, r21), k3 += C2, p[e17] = {
                                                left: 0,
                                                top: 0,
                                                width: r21,
                                                height: c9
                                            };
                                        }), w += S3, x2.push(S3), g.width += w;
                                    }
                                    t4.width = g.width, t4.height = g.height;
                                },
                                afterFit: s8,
                                isHorizontal: function() {
                                    return "top" === this.options.position || "bottom" === this.options.position;
                                },
                                draw: function() {
                                    var t4 = this, e15 = t4.options, n20 = e15.labels, i20 = r5.global, a18 = i20.elements.line, s11 = t4.width, u13 = t4.lineWidths;
                                    if (e15.display) {
                                        var c9, d7 = t4.ctx, f = o14.valueOrDefault, h4 = f(n20.fontColor, i20.defaultFontColor), p = f(n20.fontSize, i20.defaultFontSize), g = f(n20.fontStyle, i20.defaultFontStyle), v = f(n20.fontFamily, i20.defaultFontFamily), m4 = o14.fontString(p, g, v);
                                        d7.textAlign = "left", d7.textBaseline = "middle", d7.lineWidth = 0.5, d7.strokeStyle = h4, d7.fillStyle = h4, d7.font = m4;
                                        var y3 = l11(n20, p), b3 = t4.legendHitBoxes, x3 = t4.isHorizontal();
                                        c9 = x3 ? {
                                            x: t4.left + (s11 - u13[0]) / 2,
                                            y: t4.top + n20.padding,
                                            line: 0
                                        } : {
                                            x: t4.left + n20.padding,
                                            y: t4.top + n20.padding,
                                            line: 0
                                        };
                                        var w = p + n20.padding;
                                        o14.each(t4.legendItems, function(r21, l13) {
                                            var h5 = d7.measureText(r21.text).width, g1 = y3 + p / 2 + h5, v1 = c9.x, m5 = c9.y;
                                            x3 ? v1 + g1 >= s11 && (m5 = c9.y += w, c9.line++, v1 = c9.x = t4.left + (s11 - u13[c9.line]) / 2) : m5 + w > t4.bottom && (v1 = c9.x = v1 + t4.columnWidths[c9.line] + n20.padding, m5 = c9.y = t4.top + n20.padding, c9.line++), (function(t6, n21, r22) {
                                                if (!(isNaN(y3) || y3 <= 0)) {
                                                    d7.save(), d7.fillStyle = f(r22.fillStyle, i20.defaultColor), d7.lineCap = f(r22.lineCap, a18.borderCapStyle), d7.lineDashOffset = f(r22.lineDashOffset, a18.borderDashOffset), d7.lineJoin = f(r22.lineJoin, a18.borderJoinStyle), d7.lineWidth = f(r22.lineWidth, a18.borderWidth), d7.strokeStyle = f(r22.strokeStyle, i20.defaultColor);
                                                    var s12 = 0 === f(r22.lineWidth, a18.borderWidth);
                                                    if (d7.setLineDash && d7.setLineDash(f(r22.lineDash, a18.borderDash)), e15.labels && e15.labels.usePointStyle) {
                                                        var l14 = p * Math.SQRT2 / 2, u14 = l14 / Math.SQRT2, c11 = t6 + u14, h6 = n21 + u14;
                                                        o14.canvas.drawPoint(d7, r22.pointStyle, l14, c11, h6);
                                                    } else s12 || d7.strokeRect(t6, n21, y3, p), d7.fillRect(t6, n21, y3, p);
                                                    d7.restore();
                                                }
                                            })(v1, m5, r21), b3[l13].left = v1, b3[l13].top = m5, (function(t6, e17, n21, r22) {
                                                var i21 = p / 2, o16 = y3 + i21 + t6, a19 = e17 + i21;
                                                d7.fillText(n21.text, o16, a19), n21.hidden && (d7.beginPath(), d7.lineWidth = 2, d7.moveTo(o16, a19), d7.lineTo(o16 + r22, a19), d7.stroke());
                                            })(v1, m5, r21, h5), x3 ? c9.x += g1 + n20.padding : c9.y += w;
                                        });
                                    }
                                },
                                handleEvent: function(t4) {
                                    var e15 = this, n20 = e15.options, r21 = "mouseup" === t4.type ? "click" : t4.type, i20 = !1;
                                    if ("mousemove" === r21) {
                                        if (!n20.onHover) return;
                                    } else {
                                        if ("click" !== r21) return;
                                        if (!n20.onClick) return;
                                    }
                                    var o16 = t4.x, a18 = t4.y;
                                    if (o16 >= e15.left && o16 <= e15.right && a18 >= e15.top && a18 <= e15.bottom) for(var s11 = e15.legendHitBoxes, l13 = 0; l13 < s11.length; ++l13){
                                        var u13 = s11[l13];
                                        if (o16 >= u13.left && o16 <= u13.left + u13.width && a18 >= u13.top && a18 <= u13.top + u13.height) {
                                            if ("click" === r21) {
                                                n20.onClick.call(e15, t4.native, e15.legendItems[l13]), i20 = !0;
                                                break;
                                            }
                                            if ("mousemove" === r21) {
                                                n20.onHover.call(e15, t4.native, e15.legendItems[l13]), i20 = !0;
                                                break;
                                            }
                                        }
                                    }
                                    return i20;
                                }
                            });
                            function c12(t4, e15) {
                                var n20 = new u11({
                                    ctx: t4.ctx,
                                    options: e15,
                                    chart: t4
                                });
                                a14.configure(t4, n20, e15), a14.addBox(t4, n20), t4.legend = n20;
                            }
                            e5.exports = {
                                id: "legend",
                                _element: u11,
                                beforeInit: function(t4) {
                                    var e15 = t4.options.legend;
                                    e15 && c12(t4, e15);
                                },
                                beforeUpdate: function(t4) {
                                    var e15 = t4.options.legend, n20 = t4.legend;
                                    e15 ? (o14.mergeIf(e15, r5.global.legend), n20 ? (a14.configure(t4, n20, e15), n20.options = e15) : c12(t4, e15)) : n20 && (a14.removeBox(t4, n20), delete t4.legend);
                                },
                                afterEvent: function(t4, e15) {
                                    var n20 = t4.legend;
                                    n20 && n20.handleEvent(e15);
                                }
                            };
                        },
                        {
                            26: 26,
                            27: 27,
                            31: 31,
                            46: 46
                        }
                    ],
                    53: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(27), o14 = t3(46), a14 = t3(31), s8 = o14.noop;
                            r5._set("global", {
                                title: {
                                    display: !1,
                                    fontStyle: "bold",
                                    fullWidth: !0,
                                    lineHeight: 1.2,
                                    padding: 10,
                                    position: "top",
                                    text: "",
                                    weight: 2000
                                }
                            });
                            var l11 = i10.extend({
                                initialize: function(t4) {
                                    o14.extend(this, t4), this.legendHitBoxes = [];
                                },
                                beforeUpdate: s8,
                                update: function(t4, e15, n20) {
                                    var r21 = this;
                                    return r21.beforeUpdate(), r21.maxWidth = t4, r21.maxHeight = e15, r21.margins = n20, r21.beforeSetDimensions(), r21.setDimensions(), r21.afterSetDimensions(), r21.beforeBuildLabels(), r21.buildLabels(), r21.afterBuildLabels(), r21.beforeFit(), r21.fit(), r21.afterFit(), r21.afterUpdate(), r21.minSize;
                                },
                                afterUpdate: s8,
                                beforeSetDimensions: s8,
                                setDimensions: function() {
                                    var t4 = this;
                                    t4.isHorizontal() ? (t4.width = t4.maxWidth, t4.left = 0, t4.right = t4.width) : (t4.height = t4.maxHeight, t4.top = 0, t4.bottom = t4.height), t4.paddingLeft = 0, t4.paddingTop = 0, t4.paddingRight = 0, t4.paddingBottom = 0, t4.minSize = {
                                        width: 0,
                                        height: 0
                                    };
                                },
                                afterSetDimensions: s8,
                                beforeBuildLabels: s8,
                                buildLabels: s8,
                                afterBuildLabels: s8,
                                beforeFit: s8,
                                fit: function() {
                                    var t4 = this, e15 = o14.valueOrDefault, n20 = t4.options, i20 = n20.display, a18 = e15(n20.fontSize, r5.global.defaultFontSize), s11 = t4.minSize, l13 = o14.isArray(n20.text) ? n20.text.length : 1, u11 = o14.options.toLineHeight(n20.lineHeight, a18), c12 = i20 ? l13 * u11 + 2 * n20.padding : 0;
                                    t4.isHorizontal() ? (s11.width = t4.maxWidth, s11.height = c12) : (s11.width = c12, s11.height = t4.maxHeight), t4.width = s11.width, t4.height = s11.height;
                                },
                                afterFit: s8,
                                isHorizontal: function() {
                                    var t4 = this.options.position;
                                    return "top" === t4 || "bottom" === t4;
                                },
                                draw: function() {
                                    var t4 = this, e15 = t4.ctx, n20 = o14.valueOrDefault, i20 = t4.options, a18 = r5.global;
                                    if (i20.display) {
                                        var s11, l13, u11, c12 = n20(i20.fontSize, a18.defaultFontSize), d8 = n20(i20.fontStyle, a18.defaultFontStyle), f = n20(i20.fontFamily, a18.defaultFontFamily), h5 = o14.fontString(c12, d8, f), p = o14.options.toLineHeight(i20.lineHeight, c12), g = p / 2 + i20.padding, v = 0, m5 = t4.top, y4 = t4.left, b4 = t4.bottom, x4 = t4.right;
                                        e15.fillStyle = n20(i20.fontColor, a18.defaultFontColor), e15.font = h5, t4.isHorizontal() ? (l13 = y4 + (x4 - y4) / 2, u11 = m5 + g, s11 = x4 - y4) : (l13 = "left" === i20.position ? y4 + g : x4 - g, u11 = m5 + (b4 - m5) / 2, s11 = b4 - m5, v = Math.PI * ("left" === i20.position ? -0.5 : 0.5)), e15.save(), e15.translate(l13, u11), e15.rotate(v), e15.textAlign = "center", e15.textBaseline = "middle";
                                        var w = i20.text;
                                        if (o14.isArray(w)) for(var S4 = 0, k4 = 0; k4 < w.length; ++k4)e15.fillText(w[k4], 0, S4, s11), S4 += p;
                                        else e15.fillText(w, 0, 0, s11);
                                        e15.restore();
                                    }
                                }
                            });
                            function u15(t4, e15) {
                                var n20 = new l11({
                                    ctx: t4.ctx,
                                    options: e15,
                                    chart: t4
                                });
                                a14.configure(t4, n20, e15), a14.addBox(t4, n20), t4.titleBlock = n20;
                            }
                            e5.exports = {
                                id: "title",
                                _element: l11,
                                beforeInit: function(t4) {
                                    var e15 = t4.options.title;
                                    e15 && u15(t4, e15);
                                },
                                beforeUpdate: function(t4) {
                                    var e15 = t4.options.title, n20 = t4.titleBlock;
                                    e15 ? (o14.mergeIf(e15, r5.global.title), n20 ? (a14.configure(t4, n20, e15), n20.options = e15) : u15(t4, e15)) : n20 && (a14.removeBox(t4, n20), delete t4.titleBlock);
                                }
                            };
                        },
                        {
                            26: 26,
                            27: 27,
                            31: 31,
                            46: 46
                        }
                    ],
                    54: [
                        function(t3, e5, n7) {
                            var r5 = t3(33), i10 = t3(34);
                            e5.exports = function() {
                                var t4 = r5.extend({
                                    getLabels: function() {
                                        var t6 = this.chart.data;
                                        return this.options.labels || (this.isHorizontal() ? t6.xLabels : t6.yLabels) || t6.labels;
                                    },
                                    determineDataLimits: function() {
                                        var t6, e15 = this, n20 = e15.getLabels();
                                        e15.minIndex = 0, e15.maxIndex = n20.length - 1, void 0 !== e15.options.ticks.min && (t6 = n20.indexOf(e15.options.ticks.min), e15.minIndex = -1 !== t6 ? t6 : e15.minIndex), void 0 !== e15.options.ticks.max && (t6 = n20.indexOf(e15.options.ticks.max), e15.maxIndex = -1 !== t6 ? t6 : e15.maxIndex), e15.min = n20[e15.minIndex], e15.max = n20[e15.maxIndex];
                                    },
                                    buildTicks: function() {
                                        var t6 = this, e15 = t6.getLabels();
                                        t6.ticks = 0 === t6.minIndex && t6.maxIndex === e15.length - 1 ? e15 : e15.slice(t6.minIndex, t6.maxIndex + 1);
                                    },
                                    getLabelForIndex: function(t6, e15) {
                                        var n20 = this, r21 = n20.chart.data, i20 = n20.isHorizontal();
                                        return r21.yLabels && !i20 ? n20.getRightValue(r21.datasets[e15].data[t6]) : n20.ticks[t6 - n20.minIndex];
                                    },
                                    getPixelForValue: function(t6, e15) {
                                        var n20, r21 = this, i20 = r21.options.offset, o14 = Math.max(r21.maxIndex + 1 - r21.minIndex - (i20 ? 0 : 1), 1);
                                        if (null != t6 && (n20 = r21.isHorizontal() ? t6.x : t6.y), void 0 !== n20 || void 0 !== t6 && isNaN(e15)) {
                                            t6 = n20 || t6;
                                            var a14 = r21.getLabels().indexOf(t6);
                                            e15 = -1 !== a14 ? a14 : e15;
                                        }
                                        if (r21.isHorizontal()) {
                                            var s8 = r21.width / o14, l11 = s8 * (e15 - r21.minIndex);
                                            return i20 && (l11 += s8 / 2), r21.left + Math.round(l11);
                                        }
                                        var u15 = r21.height / o14, c13 = u15 * (e15 - r21.minIndex);
                                        return i20 && (c13 += u15 / 2), r21.top + Math.round(c13);
                                    },
                                    getPixelForTick: function(t6) {
                                        return this.getPixelForValue(this.ticks[t6], t6 + this.minIndex, null);
                                    },
                                    getValueForPixel: function(t6) {
                                        var e15 = this, n20 = e15.options.offset, r21 = Math.max(e15._ticks.length - (n20 ? 0 : 1), 1), i20 = e15.isHorizontal(), o14 = (i20 ? e15.width : e15.height) / r21;
                                        return t6 -= i20 ? e15.left : e15.top, n20 && (t6 -= o14 / 2), (t6 <= 0 ? 0 : Math.round(t6 / o14)) + e15.minIndex;
                                    },
                                    getBasePixel: function() {
                                        return this.bottom;
                                    }
                                });
                                i10.registerScaleType("category", t4, {
                                    position: "bottom"
                                });
                            };
                        },
                        {
                            33: 33,
                            34: 34
                        }
                    ],
                    55: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(46), o14 = t3(34), a18 = t3(35);
                            e5.exports = function(t4) {
                                var e15 = {
                                    position: "left",
                                    ticks: {
                                        callback: a18.formatters.linear
                                    }
                                }, n20 = t4.LinearScaleBase.extend({
                                    determineDataLimits: function() {
                                        var t6 = this, e17 = t6.options, n21 = t6.chart, r21 = n21.data.datasets, o16 = t6.isHorizontal();
                                        function a19(e18) {
                                            return o16 ? e18.xAxisID === t6.id : e18.yAxisID === t6.id;
                                        }
                                        t6.min = null, t6.max = null;
                                        var s13 = e17.stacked;
                                        if (void 0 === s13 && i10.each(r21, function(t7, e18) {
                                            if (!s13) {
                                                var r22 = n21.getDatasetMeta(e18);
                                                n21.isDatasetVisible(e18) && a19(r22) && void 0 !== r22.stack && (s13 = !0);
                                            }
                                        }), e17.stacked || s13) {
                                            var l15 = {
                                            };
                                            i10.each(r21, function(r23, o17) {
                                                var s14 = n21.getDatasetMeta(o17), u15 = [
                                                    s14.type,
                                                    void 0 === e17.stacked && void 0 === s14.stack ? o17 : "",
                                                    s14.stack
                                                ].join(".");
                                                void 0 === l15[u15] && (l15[u15] = {
                                                    positiveValues: [],
                                                    negativeValues: []
                                                });
                                                var c13 = l15[u15].positiveValues, d9 = l15[u15].negativeValues;
                                                n21.isDatasetVisible(o17) && a19(s14) && i10.each(r23.data, function(n22, r24) {
                                                    var i20 = +t6.getRightValue(n22);
                                                    isNaN(i20) || s14.data[r24].hidden || (c13[r24] = c13[r24] || 0, d9[r24] = d9[r24] || 0, e17.relativePoints ? c13[r24] = 100 : i20 < 0 ? d9[r24] += i20 : c13[r24] += i20);
                                                });
                                            }), i10.each(l15, function(e18) {
                                                var n22 = e18.positiveValues.concat(e18.negativeValues), r23 = i10.min(n22), o17 = i10.max(n22);
                                                t6.min = null === t6.min ? r23 : Math.min(t6.min, r23), t6.max = null === t6.max ? o17 : Math.max(t6.max, o17);
                                            });
                                        } else i10.each(r21, function(e18, r23) {
                                            var o17 = n21.getDatasetMeta(r23);
                                            n21.isDatasetVisible(r23) && a19(o17) && i10.each(e18.data, function(e19, n22) {
                                                var r24 = +t6.getRightValue(e19);
                                                isNaN(r24) || o17.data[n22].hidden || (null === t6.min ? t6.min = r24 : r24 < t6.min && (t6.min = r24), null === t6.max ? t6.max = r24 : r24 > t6.max && (t6.max = r24));
                                            });
                                        });
                                        t6.min = isFinite(t6.min) && !isNaN(t6.min) ? t6.min : 0, t6.max = isFinite(t6.max) && !isNaN(t6.max) ? t6.max : 1, this.handleTickRangeOptions();
                                    },
                                    getTickLimit: function() {
                                        var t6, e17 = this.options.ticks;
                                        if (this.isHorizontal()) t6 = Math.min(e17.maxTicksLimit ? e17.maxTicksLimit : 11, Math.ceil(this.width / 50));
                                        else {
                                            var n21 = i10.valueOrDefault(e17.fontSize, r5.global.defaultFontSize);
                                            t6 = Math.min(e17.maxTicksLimit ? e17.maxTicksLimit : 11, Math.ceil(this.height / (2 * n21)));
                                        }
                                        return t6;
                                    },
                                    handleDirectionalChanges: function() {
                                        this.isHorizontal() || this.ticks.reverse();
                                    },
                                    getLabelForIndex: function(t6, e17) {
                                        return +this.getRightValue(this.chart.data.datasets[e17].data[t6]);
                                    },
                                    getPixelForValue: function(t6) {
                                        var e17 = this, n22 = e17.start, r21 = +e17.getRightValue(t6), i20 = e17.end - n22;
                                        return e17.isHorizontal() ? e17.left + e17.width / i20 * (r21 - n22) : e17.bottom - e17.height / i20 * (r21 - n22);
                                    },
                                    getValueForPixel: function(t6) {
                                        var e17 = this, n22 = e17.isHorizontal(), r21 = n22 ? e17.width : e17.height, i20 = (n22 ? t6 - e17.left : e17.bottom - t6) / r21;
                                        return e17.start + (e17.end - e17.start) * i20;
                                    },
                                    getPixelForTick: function(t6) {
                                        return this.getPixelForValue(this.ticksAsNumbers[t6]);
                                    }
                                });
                                o14.registerScaleType("linear", n20, e15);
                            };
                        },
                        {
                            26: 26,
                            34: 34,
                            35: 35,
                            46: 46
                        }
                    ],
                    56: [
                        function(t3, e5, n7) {
                            var r5 = t3(46), i10 = t3(33);
                            e5.exports = function(t4) {
                                var e15 = r5.noop;
                                t4.LinearScaleBase = i10.extend({
                                    getRightValue: function(t6) {
                                        return "string" == typeof t6 ? +t6 : i10.prototype.getRightValue.call(this, t6);
                                    },
                                    handleTickRangeOptions: function() {
                                        var t6 = this, e17 = t6.options.ticks;
                                        if (e17.beginAtZero) {
                                            var n20 = r5.sign(t6.min), i20 = r5.sign(t6.max);
                                            n20 < 0 && i20 < 0 ? t6.max = 0 : n20 > 0 && i20 > 0 && (t6.min = 0);
                                        }
                                        var o14 = void 0 !== e17.min || void 0 !== e17.suggestedMin, a18 = void 0 !== e17.max || void 0 !== e17.suggestedMax;
                                        void 0 !== e17.min ? t6.min = e17.min : void 0 !== e17.suggestedMin && (null === t6.min ? t6.min = e17.suggestedMin : t6.min = Math.min(t6.min, e17.suggestedMin)), void 0 !== e17.max ? t6.max = e17.max : void 0 !== e17.suggestedMax && (null === t6.max ? t6.max = e17.suggestedMax : t6.max = Math.max(t6.max, e17.suggestedMax)), o14 !== a18 && t6.min >= t6.max && (o14 ? t6.max = t6.min + 1 : t6.min = t6.max - 1), t6.min === t6.max && (t6.max++, e17.beginAtZero || t6.min--);
                                    },
                                    getTickLimit: e15,
                                    handleDirectionalChanges: e15,
                                    buildTicks: function() {
                                        var t6 = this, e17 = t6.options.ticks, n22 = t6.getTickLimit(), i21 = {
                                            maxTicks: n22 = Math.max(2, n22),
                                            min: e17.min,
                                            max: e17.max,
                                            precision: e17.precision,
                                            stepSize: r5.valueOrDefault(e17.fixedStepSize, e17.stepSize)
                                        }, o14 = t6.ticks = function(t7, e18) {
                                            var n23, i22, o16, a18 = [];
                                            if (t7.stepSize && t7.stepSize > 0) o16 = t7.stepSize;
                                            else {
                                                var s13 = r5.niceNum(e18.max - e18.min, !1);
                                                o16 = r5.niceNum(s13 / (t7.maxTicks - 1), !0), void 0 !== (i22 = t7.precision) && (n23 = Math.pow(10, i22), o16 = Math.ceil(o16 * n23) / n23);
                                            }
                                            var l16 = Math.floor(e18.min / o16) * o16, u15 = Math.ceil(e18.max / o16) * o16;
                                            r5.isNullOrUndef(t7.min) || r5.isNullOrUndef(t7.max) || !t7.stepSize || r5.almostWhole((t7.max - t7.min) / t7.stepSize, o16 / 1000) && (l16 = t7.min, u15 = t7.max);
                                            var c13 = (u15 - l16) / o16;
                                            c13 = r5.almostEquals(c13, Math.round(c13), o16 / 1000) ? Math.round(c13) : Math.ceil(c13), i22 = 1, o16 < 1 && (i22 = Math.pow(10, 1 - Math.floor(r5.log10(o16))), l16 = Math.round(l16 * i22) / i22, u15 = Math.round(u15 * i22) / i22), a18.push(void 0 !== t7.min ? t7.min : l16);
                                            for(var d9 = 1; d9 < c13; ++d9)a18.push(Math.round((l16 + d9 * o16) * i22) / i22);
                                            return a18.push(void 0 !== t7.max ? t7.max : u15), a18;
                                        }(i21, t6);
                                        t6.handleDirectionalChanges(), t6.max = r5.max(o14), t6.min = r5.min(o14), e17.reverse ? (o14.reverse(), t6.start = t6.max, t6.end = t6.min) : (t6.start = t6.min, t6.end = t6.max);
                                    },
                                    convertTicksToLabels: function() {
                                        var t6 = this;
                                        t6.ticksAsNumbers = t6.ticks.slice(), t6.zeroLineIndex = t6.ticks.indexOf(0), i10.prototype.convertTicksToLabels.call(t6);
                                    }
                                });
                            };
                        },
                        {
                            33: 33,
                            46: 46
                        }
                    ],
                    57: [
                        function(t3, e5, n7) {
                            var r5 = t3(46), i10 = t3(33), o14 = t3(34), a18 = t3(35);
                            e5.exports = function(t4) {
                                var e15 = {
                                    position: "left",
                                    ticks: {
                                        callback: a18.formatters.logarithmic
                                    }
                                }, n22 = i10.extend({
                                    determineDataLimits: function() {
                                        var t6 = this, e17 = t6.options, n23 = t6.chart, i21 = n23.data.datasets, o16 = t6.isHorizontal();
                                        function a19(e18) {
                                            return o16 ? e18.xAxisID === t6.id : e18.yAxisID === t6.id;
                                        }
                                        t6.min = null, t6.max = null, t6.minNotZero = null;
                                        var s14 = e17.stacked;
                                        if (void 0 === s14 && r5.each(i21, function(t7, e18) {
                                            if (!s14) {
                                                var r21 = n23.getDatasetMeta(e18);
                                                n23.isDatasetVisible(e18) && a19(r21) && void 0 !== r21.stack && (s14 = !0);
                                            }
                                        }), e17.stacked || s14) {
                                            var l16 = {
                                            };
                                            r5.each(i21, function(i22, o17) {
                                                var s15 = n23.getDatasetMeta(o17), u15 = [
                                                    s15.type,
                                                    void 0 === e17.stacked && void 0 === s15.stack ? o17 : "",
                                                    s15.stack
                                                ].join(".");
                                                n23.isDatasetVisible(o17) && a19(s15) && (void 0 === l16[u15] && (l16[u15] = []), r5.each(i22.data, function(e18, n24) {
                                                    var r23 = l16[u15], i23 = +t6.getRightValue(e18);
                                                    isNaN(i23) || s15.data[n24].hidden || i23 < 0 || (r23[n24] = r23[n24] || 0, r23[n24] += i23);
                                                }));
                                            }), r5.each(l16, function(e18) {
                                                if (e18.length > 0) {
                                                    var n24 = r5.min(e18), i22 = r5.max(e18);
                                                    t6.min = null === t6.min ? n24 : Math.min(t6.min, n24), t6.max = null === t6.max ? i22 : Math.max(t6.max, i22);
                                                }
                                            });
                                        } else r5.each(i21, function(e18, i23) {
                                            var o17 = n23.getDatasetMeta(i23);
                                            n23.isDatasetVisible(i23) && a19(o17) && r5.each(e18.data, function(e19, n25) {
                                                var r23 = +t6.getRightValue(e19);
                                                isNaN(r23) || o17.data[n25].hidden || r23 < 0 || (null === t6.min ? t6.min = r23 : r23 < t6.min && (t6.min = r23), null === t6.max ? t6.max = r23 : r23 > t6.max && (t6.max = r23), 0 !== r23 && (null === t6.minNotZero || r23 < t6.minNotZero) && (t6.minNotZero = r23));
                                            });
                                        });
                                        this.handleTickRangeOptions();
                                    },
                                    handleTickRangeOptions: function() {
                                        var t6 = this, e17 = t6.options.ticks, n23 = r5.valueOrDefault;
                                        t6.min = n23(e17.min, t6.min), t6.max = n23(e17.max, t6.max), t6.min === t6.max && (0 !== t6.min && null !== t6.min ? (t6.min = Math.pow(10, Math.floor(r5.log10(t6.min)) - 1), t6.max = Math.pow(10, Math.floor(r5.log10(t6.max)) + 1)) : (t6.min = 1, t6.max = 10)), null === t6.min && (t6.min = Math.pow(10, Math.floor(r5.log10(t6.max)) - 1)), null === t6.max && (t6.max = 0 !== t6.min ? Math.pow(10, Math.floor(r5.log10(t6.min)) + 1) : 10), null === t6.minNotZero && (t6.min > 0 ? t6.minNotZero = t6.min : t6.max < 1 ? t6.minNotZero = Math.pow(10, Math.floor(r5.log10(t6.max))) : t6.minNotZero = 1);
                                    },
                                    buildTicks: function() {
                                        var t6 = this, e17 = t6.options.ticks, n23 = !t6.isHorizontal(), i21 = {
                                            min: e17.min,
                                            max: e17.max
                                        }, o16 = t6.ticks = function(t7, e18) {
                                            var n25, i23, o17 = [], a19 = r5.valueOrDefault, s14 = a19(t7.min, Math.pow(10, Math.floor(r5.log10(e18.min)))), l17 = Math.floor(r5.log10(e18.max)), u15 = Math.ceil(e18.max / Math.pow(10, l17));
                                            0 === s14 ? (n25 = Math.floor(r5.log10(e18.minNotZero)), i23 = Math.floor(e18.minNotZero / Math.pow(10, n25)), o17.push(s14), s14 = i23 * Math.pow(10, n25)) : (n25 = Math.floor(r5.log10(s14)), i23 = Math.floor(s14 / Math.pow(10, n25)));
                                            var c13 = n25 < 0 ? Math.pow(10, Math.abs(n25)) : 1;
                                            do {
                                                o17.push(s14), 10 === ++i23 && (i23 = 1, c13 = ++n25 >= 0 ? 1 : c13), s14 = Math.round(i23 * Math.pow(10, n25) * c13) / c13;
                                            }while (n25 < l17 || n25 === l17 && i23 < u15)
                                            var d9 = a19(t7.max, s14);
                                            return o17.push(d9), o17;
                                        }(i21, t6);
                                        t6.max = r5.max(o16), t6.min = r5.min(o16), e17.reverse ? (n23 = !n23, t6.start = t6.max, t6.end = t6.min) : (t6.start = t6.min, t6.end = t6.max), n23 && o16.reverse();
                                    },
                                    convertTicksToLabels: function() {
                                        this.tickValues = this.ticks.slice(), i10.prototype.convertTicksToLabels.call(this);
                                    },
                                    getLabelForIndex: function(t6, e17) {
                                        return +this.getRightValue(this.chart.data.datasets[e17].data[t6]);
                                    },
                                    getPixelForTick: function(t6) {
                                        return this.getPixelForValue(this.tickValues[t6]);
                                    },
                                    _getFirstTickValue: function(t6) {
                                        var e17 = Math.floor(r5.log10(t6));
                                        return Math.floor(t6 / Math.pow(10, e17)) * Math.pow(10, e17);
                                    },
                                    getPixelForValue: function(e17) {
                                        var n23, i21, o16, a19, s14, l17 = this, u15 = l17.options.ticks.reverse, c13 = r5.log10, d9 = l17._getFirstTickValue(l17.minNotZero), f = 0;
                                        return e17 = +l17.getRightValue(e17), u15 ? (o16 = l17.end, a19 = l17.start, s14 = -1) : (o16 = l17.start, a19 = l17.end, s14 = 1), l17.isHorizontal() ? (n23 = l17.width, i21 = u15 ? l17.right : l17.left) : (n23 = l17.height, s14 *= -1, i21 = u15 ? l17.top : l17.bottom), e17 !== o16 && (0 === o16 && (n23 -= f = r5.getValueOrDefault(l17.options.ticks.fontSize, t4.defaults.global.defaultFontSize), o16 = d9), 0 !== e17 && (f += n23 / (c13(a19) - c13(o16)) * (c13(e17) - c13(o16))), i21 += s14 * f), i21;
                                    },
                                    getValueForPixel: function(e17) {
                                        var n23, i21, o16, a19, s14 = this, l17 = s14.options.ticks.reverse, u15 = r5.log10, c13 = s14._getFirstTickValue(s14.minNotZero);
                                        if (l17 ? (i21 = s14.end, o16 = s14.start) : (i21 = s14.start, o16 = s14.end), s14.isHorizontal() ? (n23 = s14.width, a19 = l17 ? s14.right - e17 : e17 - s14.left) : (n23 = s14.height, a19 = l17 ? e17 - s14.top : s14.bottom - e17), a19 !== i21) {
                                            if (0 === i21) {
                                                var d9 = r5.getValueOrDefault(s14.options.ticks.fontSize, t4.defaults.global.defaultFontSize);
                                                a19 -= d9, n23 -= d9, i21 = c13;
                                            }
                                            a19 *= u15(o16) - u15(i21), a19 /= n23, a19 = Math.pow(10, u15(i21) + a19);
                                        }
                                        return a19;
                                    }
                                });
                                o14.registerScaleType("logarithmic", n22, e15);
                            };
                        },
                        {
                            33: 33,
                            34: 34,
                            35: 35,
                            46: 46
                        }
                    ],
                    58: [
                        function(t3, e5, n7) {
                            var r5 = t3(26), i10 = t3(46), o14 = t3(34), a18 = t3(35);
                            e5.exports = function(t4) {
                                var e15 = r5.global, n22 = {
                                    display: !0,
                                    animate: !0,
                                    position: "chartArea",
                                    angleLines: {
                                        display: !0,
                                        color: "rgba(0, 0, 0, 0.1)",
                                        lineWidth: 1
                                    },
                                    gridLines: {
                                        circular: !1
                                    },
                                    ticks: {
                                        showLabelBackdrop: !0,
                                        backdropColor: "rgba(255,255,255,0.75)",
                                        backdropPaddingY: 2,
                                        backdropPaddingX: 2,
                                        callback: a18.formatters.linear
                                    },
                                    pointLabels: {
                                        display: !0,
                                        fontSize: 10,
                                        callback: function(t6) {
                                            return t6;
                                        }
                                    }
                                };
                                function s14(t6) {
                                    var e17 = t6.options;
                                    return e17.angleLines.display || e17.pointLabels.display ? t6.chart.data.labels.length : 0;
                                }
                                function l17(t6) {
                                    var n23 = t6.options.pointLabels, r23 = i10.valueOrDefault(n23.fontSize, e15.defaultFontSize), o16 = i10.valueOrDefault(n23.fontStyle, e15.defaultFontStyle), a19 = i10.valueOrDefault(n23.fontFamily, e15.defaultFontFamily);
                                    return {
                                        size: r23,
                                        style: o16,
                                        family: a19,
                                        font: i10.fontString(r23, o16, a19)
                                    };
                                }
                                function u15(t6, e17, n23, r23, i21) {
                                    return t6 === r23 || t6 === i21 ? {
                                        start: e17 - n23 / 2,
                                        end: e17 + n23 / 2
                                    } : t6 < r23 || t6 > i21 ? {
                                        start: e17 - n23 - 5,
                                        end: e17
                                    } : {
                                        start: e17,
                                        end: e17 + n23 + 5
                                    };
                                }
                                function c13(t6) {
                                    return 0 === t6 || 180 === t6 ? "center" : t6 < 180 ? "left" : "right";
                                }
                                function d10(t6, e17, n23, r23) {
                                    if (i10.isArray(e17)) for(var o16 = n23.y, a19 = 1.5 * r23, s15 = 0; s15 < e17.length; ++s15)t6.fillText(e17[s15], n23.x, o16), o16 += a19;
                                    else t6.fillText(e17, n23.x, n23.y);
                                }
                                function f(t6, e17, n23) {
                                    90 === t6 || 270 === t6 ? n23.y -= e17.h / 2 : (t6 > 270 || t6 < 90) && (n23.y -= e17.h);
                                }
                                function h7(t6) {
                                    return i10.isNumber(t6) ? t6 : 0;
                                }
                                var p = t4.LinearScaleBase.extend({
                                    setDimensions: function() {
                                        var t6 = this, n23 = t6.options, r23 = n23.ticks;
                                        t6.width = t6.maxWidth, t6.height = t6.maxHeight, t6.xCenter = Math.round(t6.width / 2), t6.yCenter = Math.round(t6.height / 2);
                                        var o16 = i10.min([
                                            t6.height,
                                            t6.width
                                        ]), a19 = i10.valueOrDefault(r23.fontSize, e15.defaultFontSize);
                                        t6.drawingArea = n23.display ? o16 / 2 - (a19 / 2 + r23.backdropPaddingY) : o16 / 2;
                                    },
                                    determineDataLimits: function() {
                                        var t6 = this, e17 = t6.chart, n23 = Number.POSITIVE_INFINITY, r23 = Number.NEGATIVE_INFINITY;
                                        i10.each(e17.data.datasets, function(o16, a19) {
                                            if (e17.isDatasetVisible(a19)) {
                                                var s15 = e17.getDatasetMeta(a19);
                                                i10.each(o16.data, function(e18, i21) {
                                                    var o17 = +t6.getRightValue(e18);
                                                    isNaN(o17) || s15.data[i21].hidden || (n23 = Math.min(o17, n23), r23 = Math.max(o17, r23));
                                                });
                                            }
                                        }), t6.min = n23 === Number.POSITIVE_INFINITY ? 0 : n23, t6.max = r23 === Number.NEGATIVE_INFINITY ? 0 : r23, t6.handleTickRangeOptions();
                                    },
                                    getTickLimit: function() {
                                        var t6 = this.options.ticks, n23 = i10.valueOrDefault(t6.fontSize, e15.defaultFontSize);
                                        return Math.min(t6.maxTicksLimit ? t6.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n23)));
                                    },
                                    convertTicksToLabels: function() {
                                        var e17 = this;
                                        t4.LinearScaleBase.prototype.convertTicksToLabels.call(e17), e17.pointLabels = e17.chart.data.labels.map(e17.options.pointLabels.callback, e17);
                                    },
                                    getLabelForIndex: function(t6, e17) {
                                        return +this.getRightValue(this.chart.data.datasets[e17].data[t6]);
                                    },
                                    fit: function() {
                                        var t6, e17;
                                        this.options.pointLabels.display ? (function(t7) {
                                            var e18, n23, r23, o16 = l17(t7), a19 = Math.min(t7.height / 2, t7.width / 2), c14 = {
                                                r: t7.width,
                                                l: 0,
                                                t: t7.height,
                                                b: 0
                                            }, d11 = {
                                            };
                                            t7.ctx.font = o16.font, t7._pointLabelSizes = [];
                                            var f1, h8, p1, g = s14(t7);
                                            for(e18 = 0; e18 < g; e18++){
                                                r23 = t7.getPointPosition(e18, a19), f1 = t7.ctx, h8 = o16.size, p1 = t7.pointLabels[e18] || "", n23 = i10.isArray(p1) ? {
                                                    w: i10.longestText(f1, f1.font, p1),
                                                    h: p1.length * h8 + 1.5 * (p1.length - 1) * h8
                                                } : {
                                                    w: f1.measureText(p1).width,
                                                    h: h8
                                                }, t7._pointLabelSizes[e18] = n23;
                                                var v = t7.getIndexAngle(e18), m6 = i10.toDegrees(v) % 360, y5 = u15(m6, r23.x, n23.w, 0, 180), b5 = u15(m6, r23.y, n23.h, 90, 270);
                                                y5.start < c14.l && (c14.l = y5.start, d11.l = v), y5.end > c14.r && (c14.r = y5.end, d11.r = v), b5.start < c14.t && (c14.t = b5.start, d11.t = v), b5.end > c14.b && (c14.b = b5.end, d11.b = v);
                                            }
                                            t7.setReductions(a19, c14, d11);
                                        })(this) : (t6 = this, e17 = Math.min(t6.height / 2, t6.width / 2), t6.drawingArea = Math.round(e17), t6.setCenterPoint(0, 0, 0, 0));
                                    },
                                    setReductions: function(t6, e17, n23) {
                                        var r23 = e17.l / Math.sin(n23.l), i21 = Math.max(e17.r - this.width, 0) / Math.sin(n23.r), o16 = -e17.t / Math.cos(n23.t), a19 = -Math.max(e17.b - this.height, 0) / Math.cos(n23.b);
                                        r23 = h7(r23), i21 = h7(i21), o16 = h7(o16), a19 = h7(a19), this.drawingArea = Math.min(Math.round(t6 - (r23 + i21) / 2), Math.round(t6 - (o16 + a19) / 2)), this.setCenterPoint(r23, i21, o16, a19);
                                    },
                                    setCenterPoint: function(t6, e17, n23, r23) {
                                        var i21 = this, o16 = i21.width - e17 - i21.drawingArea, a19 = t6 + i21.drawingArea, s16 = n23 + i21.drawingArea, l18 = i21.height - r23 - i21.drawingArea;
                                        i21.xCenter = Math.round((a19 + o16) / 2 + i21.left), i21.yCenter = Math.round((s16 + l18) / 2 + i21.top);
                                    },
                                    getIndexAngle: function(t6) {
                                        return t6 * (2 * Math.PI / s14(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
                                    },
                                    getDistanceFromCenterForValue: function(t6) {
                                        var e17 = this;
                                        if (null === t6) return 0;
                                        var n23 = e17.drawingArea / (e17.max - e17.min);
                                        return e17.options.ticks.reverse ? (e17.max - t6) * n23 : (t6 - e17.min) * n23;
                                    },
                                    getPointPosition: function(t6, e17) {
                                        var n23 = this.getIndexAngle(t6) - Math.PI / 2;
                                        return {
                                            x: Math.round(Math.cos(n23) * e17) + this.xCenter,
                                            y: Math.round(Math.sin(n23) * e17) + this.yCenter
                                        };
                                    },
                                    getPointPositionForValue: function(t6, e17) {
                                        return this.getPointPosition(t6, this.getDistanceFromCenterForValue(e17));
                                    },
                                    getBasePosition: function() {
                                        var t6 = this.min, e17 = this.max;
                                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t6 < 0 && e17 < 0 ? e17 : t6 > 0 && e17 > 0 ? t6 : 0);
                                    },
                                    draw: function() {
                                        var t6 = this, n23 = t6.options, r23 = n23.gridLines, o16 = n23.ticks, a19 = i10.valueOrDefault;
                                        if (n23.display) {
                                            var u16 = t6.ctx, h8 = this.getIndexAngle(0), p1 = a19(o16.fontSize, e15.defaultFontSize), g = a19(o16.fontStyle, e15.defaultFontStyle), v = a19(o16.fontFamily, e15.defaultFontFamily), m7 = i10.fontString(p1, g, v);
                                            i10.each(t6.ticks, function(n25, l18) {
                                                if (l18 > 0 || o16.reverse) {
                                                    var c14 = t6.getDistanceFromCenterForValue(t6.ticksAsNumbers[l18]);
                                                    if (r23.display && 0 !== l18 && (function(t7, e17, n26, r24) {
                                                        var o17 = t7.ctx;
                                                        if (o17.strokeStyle = i10.valueAtIndexOrDefault(e17.color, r24 - 1), o17.lineWidth = i10.valueAtIndexOrDefault(e17.lineWidth, r24 - 1), t7.options.gridLines.circular) o17.beginPath(), o17.arc(t7.xCenter, t7.yCenter, n26, 0, 2 * Math.PI), o17.closePath(), o17.stroke();
                                                        else {
                                                            var a20 = s14(t7);
                                                            if (0 === a20) return;
                                                            o17.beginPath();
                                                            var l19 = t7.getPointPosition(0, n26);
                                                            o17.moveTo(l19.x, l19.y);
                                                            for(var u17 = 1; u17 < a20; u17++)l19 = t7.getPointPosition(u17, n26), o17.lineTo(l19.x, l19.y);
                                                            o17.closePath(), o17.stroke();
                                                        }
                                                    })(t6, r23, c14, l18), o16.display) {
                                                        var d11 = a19(o16.fontColor, e15.defaultFontColor);
                                                        if (u16.font = m7, u16.save(), u16.translate(t6.xCenter, t6.yCenter), u16.rotate(h8), o16.showLabelBackdrop) {
                                                            var f1 = u16.measureText(n25).width;
                                                            u16.fillStyle = o16.backdropColor, u16.fillRect(-f1 / 2 - o16.backdropPaddingX, -c14 - p1 / 2 - o16.backdropPaddingY, f1 + 2 * o16.backdropPaddingX, p1 + 2 * o16.backdropPaddingY);
                                                        }
                                                        u16.textAlign = "center", u16.textBaseline = "middle", u16.fillStyle = d11, u16.fillText(n25, 0, -c14), u16.restore();
                                                    }
                                                }
                                            }), (n23.angleLines.display || n23.pointLabels.display) && (function(t7) {
                                                var n25 = t7.ctx, r24 = t7.options, o17 = r24.angleLines, a21 = r24.pointLabels;
                                                n25.lineWidth = o17.lineWidth, n25.strokeStyle = o17.color;
                                                var u18 = t7.getDistanceFromCenterForValue(r24.ticks.reverse ? t7.min : t7.max), h9 = l17(t7);
                                                n25.textBaseline = "top";
                                                for(var p2 = s14(t7) - 1; p2 >= 0; p2--){
                                                    if (o17.display) {
                                                        var g1 = t7.getPointPosition(p2, u18);
                                                        n25.beginPath(), n25.moveTo(t7.xCenter, t7.yCenter), n25.lineTo(g1.x, g1.y), n25.stroke(), n25.closePath();
                                                    }
                                                    if (a21.display) {
                                                        var v1 = t7.getPointPosition(p2, u18 + 5), m8 = i10.valueAtIndexOrDefault(a21.fontColor, p2, e15.defaultFontColor);
                                                        n25.font = h9.font, n25.fillStyle = m8;
                                                        var y6 = t7.getIndexAngle(p2), b6 = i10.toDegrees(y6);
                                                        n25.textAlign = c13(b6), f(b6, t7._pointLabelSizes[p2], v1), d10(n25, t7.pointLabels[p2] || "", v1, h9.size);
                                                    }
                                                }
                                            })(t6);
                                        }
                                    }
                                });
                                o14.registerScaleType("radialLinear", p, n22);
                            };
                        },
                        {
                            26: 26,
                            34: 34,
                            35: 35,
                            46: 46
                        }
                    ],
                    59: [
                        function(t3, e5, n7) {
                            var r5 = t3(1);
                            r5 = "function" == typeof r5 ? r5 : window.moment;
                            var i10 = t3(26), o14 = t3(46), a18 = t3(33), s14 = t3(34), l17 = Number.MIN_SAFE_INTEGER || -9007199254740991, u15 = Number.MAX_SAFE_INTEGER || 9007199254740991, c13 = {
                                millisecond: {
                                    common: !0,
                                    size: 1,
                                    steps: [
                                        1,
                                        2,
                                        5,
                                        10,
                                        20,
                                        50,
                                        100,
                                        250,
                                        500
                                    ]
                                },
                                second: {
                                    common: !0,
                                    size: 1000,
                                    steps: [
                                        1,
                                        2,
                                        5,
                                        10,
                                        15,
                                        30
                                    ]
                                },
                                minute: {
                                    common: !0,
                                    size: 60000,
                                    steps: [
                                        1,
                                        2,
                                        5,
                                        10,
                                        15,
                                        30
                                    ]
                                },
                                hour: {
                                    common: !0,
                                    size: 3600000,
                                    steps: [
                                        1,
                                        2,
                                        3,
                                        6,
                                        12
                                    ]
                                },
                                day: {
                                    common: !0,
                                    size: 86400000,
                                    steps: [
                                        1,
                                        2,
                                        5
                                    ]
                                },
                                week: {
                                    common: !1,
                                    size: 604800000,
                                    steps: [
                                        1,
                                        2,
                                        3,
                                        4
                                    ]
                                },
                                month: {
                                    common: !0,
                                    size: 2628000000,
                                    steps: [
                                        1,
                                        2,
                                        3
                                    ]
                                },
                                quarter: {
                                    common: !1,
                                    size: 7884000000,
                                    steps: [
                                        1,
                                        2,
                                        3,
                                        4
                                    ]
                                },
                                year: {
                                    common: !0,
                                    size: 31540000000
                                }
                            }, d10 = Object.keys(c13);
                            function f2(t4, e15) {
                                return t4 - e15;
                            }
                            function h7(t4) {
                                var e15, n22, r23, i21 = {
                                }, o16 = [];
                                for(e15 = 0, n22 = t4.length; e15 < n22; ++e15)i21[r23 = t4[e15]] || (i21[r23] = !0, o16.push(r23));
                                return o16;
                            }
                            function p2(t4, e15, n22, r23) {
                                var i21 = function(t6, e17, n23) {
                                    for(var r24, i23, o16, a19 = 0, s16 = t6.length - 1; a19 >= 0 && a19 <= s16;){
                                        if (i23 = t6[(r24 = a19 + s16 >> 1) - 1] || null, o16 = t6[r24], !i23) return {
                                            lo: null,
                                            hi: o16
                                        };
                                        if (o16[e17] < n23) a19 = r24 + 1;
                                        else {
                                            if (!(i23[e17] > n23)) return {
                                                lo: i23,
                                                hi: o16
                                            };
                                            s16 = r24 - 1;
                                        }
                                    }
                                    return {
                                        lo: o16,
                                        hi: null
                                    };
                                }(t4, e15, n22), o16 = i21.lo ? i21.hi ? i21.lo : t4[t4.length - 2] : t4[0], a19 = i21.lo ? i21.hi ? i21.hi : t4[t4.length - 1] : t4[1], s16 = a19[e15] - o16[e15], l18 = s16 ? (n22 - o16[e15]) / s16 : 0, u18 = (a19[r23] - o16[r23]) * l18;
                                return o16[r23] + u18;
                            }
                            function g2(t4, e15) {
                                var n22 = e15.parser, i21 = e15.parser || e15.format;
                                return "function" == typeof n22 ? n22(t4) : "string" == typeof t4 && "string" == typeof i21 ? r5(t4, i21) : (t4 instanceof r5 || (t4 = r5(t4)), t4.isValid() ? t4 : "function" == typeof i21 ? i21(t4) : t4);
                            }
                            function v2(t4, e15) {
                                if (o14.isNullOrUndef(t4)) return null;
                                var n22 = e15.options.time, r23 = g2(e15.getRightValue(t4), n22);
                                return r23.isValid() ? (n22.round && r23.startOf(n22.round), r23.valueOf()) : null;
                            }
                            function m9(t4) {
                                for(var e15 = d10.indexOf(t4) + 1, n22 = d10.length; e15 < n22; ++e15)if (c13[d10[e15]].common) return d10[e15];
                            }
                            function y7(t4, e15, n22, i21) {
                                var a19, s16 = i21.time, l18 = s16.unit || function(t6, e17, n23, r23) {
                                    var i23, o16, a21, s17 = d10.length;
                                    for(i23 = d10.indexOf(t6); i23 < s17 - 1; ++i23)if (a21 = (o16 = c13[d10[i23]]).steps ? o16.steps[o16.steps.length - 1] : u15, o16.common && Math.ceil((n23 - e17) / (a21 * o16.size)) <= r23) return d10[i23];
                                    return d10[s17 - 1];
                                }(s16.minUnit, t4, e15, n22), f3 = m9(l18), h9 = o14.valueOrDefault(s16.stepSize, s16.unitStepSize), p3 = "week" === l18 && s16.isoWeekday, g3 = i21.ticks.major.enabled, v3 = c13[l18], y8 = r5(t4), b7 = r5(e15), x5 = [];
                                for(h9 || (h9 = (function(t6, e17, n23, r23) {
                                    var i23, o16, a21, s17 = e17 - t6, l20 = c13[n23], u18 = l20.size, d12 = l20.steps;
                                    if (!d12) return Math.ceil(s17 / (r23 * u18));
                                    for(i23 = 0, o16 = d12.length; i23 < o16 && (a21 = d12[i23], !(Math.ceil(s17 / (u18 * a21)) <= r23)); ++i23);
                                    return a21;
                                })(t4, e15, l18, n22)), p3 && (y8 = y8.isoWeekday(p3), b7 = b7.isoWeekday(p3)), y8 = y8.startOf(p3 ? "day" : l18), (b7 = b7.startOf(p3 ? "day" : l18)) < e15 && b7.add(1, l18), a19 = r5(y8), g3 && f3 && !p3 && !s16.round && (a19.startOf(f3), a19.add(~~((y8 - a19) / (v3.size * h9)) * h9, l18)); a19 < b7; a19.add(h9, l18))x5.push(+a19);
                                return x5.push(+a19), x5;
                            }
                            e5.exports = function() {
                                var t4 = a18.extend({
                                    initialize: function() {
                                        if (!r5) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                                        this.mergeTicksOptions(), a18.prototype.initialize.call(this);
                                    },
                                    update: function() {
                                        var t6 = this, e15 = t6.options;
                                        return e15.time && e15.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), a18.prototype.update.apply(t6, arguments);
                                    },
                                    getRightValue: function(t6) {
                                        return t6 && void 0 !== t6.t && (t6 = t6.t), a18.prototype.getRightValue.call(this, t6);
                                    },
                                    determineDataLimits: function() {
                                        var t6, e15, n22, i21, a19, s16, c15 = this, d12 = c15.chart, p3 = c15.options.time, g3 = p3.unit || "day", m10 = u15, y8 = l17, b7 = [], x5 = [], w = [];
                                        for(t6 = 0, n22 = d12.data.labels.length; t6 < n22; ++t6)w.push(v2(d12.data.labels[t6], c15));
                                        for(t6 = 0, n22 = (d12.data.datasets || []).length; t6 < n22; ++t6)if (d12.isDatasetVisible(t6)) if (a19 = d12.data.datasets[t6].data, o14.isObject(a19[0])) for(x5[t6] = [], e15 = 0, i21 = a19.length; e15 < i21; ++e15)s16 = v2(a19[e15], c15), b7.push(s16), x5[t6][e15] = s16;
                                        else b7.push.apply(b7, w), x5[t6] = w.slice(0);
                                        else x5[t6] = [];
                                        w.length && (w = h7(w).sort(f2), m10 = Math.min(m10, w[0]), y8 = Math.max(y8, w[w.length - 1])), b7.length && (b7 = h7(b7).sort(f2), m10 = Math.min(m10, b7[0]), y8 = Math.max(y8, b7[b7.length - 1])), m10 = v2(p3.min, c15) || m10, y8 = v2(p3.max, c15) || y8, m10 = m10 === u15 ? +r5().startOf(g3) : m10, y8 = y8 === l17 ? +r5().endOf(g3) + 1 : y8, c15.min = Math.min(m10, y8), c15.max = Math.max(m10 + 1, y8), c15._horizontal = c15.isHorizontal(), c15._table = [], c15._timestamps = {
                                            data: b7,
                                            datasets: x5,
                                            labels: w
                                        };
                                    },
                                    buildTicks: function() {
                                        var t6, e15, n22, i21 = this, o16 = i21.min, a19 = i21.max, s16 = i21.options, l18 = s16.time, u18 = [], f3 = [];
                                        switch(s16.ticks.source){
                                            case "data":
                                                u18 = i21._timestamps.data;
                                                break;
                                            case "labels":
                                                u18 = i21._timestamps.labels;
                                                break;
                                            case "auto":
                                            default:
                                                u18 = y7(o16, a19, i21.getLabelCapacity(o16), s16);
                                        }
                                        for("ticks" === s16.bounds && u18.length && (o16 = u18[0], a19 = u18[u18.length - 1]), o16 = v2(l18.min, i21) || o16, a19 = v2(l18.max, i21) || a19, t6 = 0, e15 = u18.length; t6 < e15; ++t6)(n22 = u18[t6]) >= o16 && n22 <= a19 && f3.push(n22);
                                        return i21.min = o16, i21.max = a19, i21._unit = l18.unit || (function(t7, e17, n23, i23) {
                                            var o17, a21, s17 = r5.duration(r5(i23).diff(r5(n23)));
                                            for(o17 = d10.length - 1; o17 >= d10.indexOf(e17); o17--)if (a21 = d10[o17], c13[a21].common && s17.as(a21) >= t7.length) return a21;
                                            return d10[e17 ? d10.indexOf(e17) : 0];
                                        })(f3, l18.minUnit, i21.min, i21.max), i21._majorUnit = m9(i21._unit), i21._table = (function(t7, e17, n23, r23) {
                                            if ("linear" === r23 || !t7.length) return [
                                                {
                                                    time: e17,
                                                    pos: 0
                                                },
                                                {
                                                    time: n23,
                                                    pos: 1
                                                }
                                            ];
                                            var i23, o17, a21, s17, l20, u19 = [], c15 = [
                                                e17
                                            ];
                                            for(i23 = 0, o17 = t7.length; i23 < o17; ++i23)(s17 = t7[i23]) > e17 && s17 < n23 && c15.push(s17);
                                            for(c15.push(n23), i23 = 0, o17 = c15.length; i23 < o17; ++i23)l20 = c15[i23 + 1], a21 = c15[i23 - 1], s17 = c15[i23], void 0 !== a21 && void 0 !== l20 && Math.round((l20 + a21) / 2) === s17 || u19.push({
                                                time: s17,
                                                pos: i23 / (o17 - 1)
                                            });
                                            return u19;
                                        })(i21._timestamps.data, o16, a19, s16.distribution), i21._offsets = (function(t7, e17, n23, r23, i23) {
                                            var o17, a21, s17 = 0, l20 = 0;
                                            return i23.offset && e17.length && (i23.time.min || (o17 = e17.length > 1 ? e17[1] : r23, a21 = e17[0], s17 = (p2(t7, "time", o17, "pos") - p2(t7, "time", a21, "pos")) / 2), i23.time.max || (o17 = e17[e17.length - 1], a21 = e17.length > 1 ? e17[e17.length - 2] : n23, l20 = (p2(t7, "time", o17, "pos") - p2(t7, "time", a21, "pos")) / 2)), {
                                                left: s17,
                                                right: l20
                                            };
                                        })(i21._table, f3, o16, a19, s16), i21._labelFormat = (function(t7, e17) {
                                            var n23, r23, i23, o17 = t7.length;
                                            for(n23 = 0; n23 < o17; n23++){
                                                if (0 !== (r23 = g2(t7[n23], e17)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                                0 === r23.second() && 0 === r23.minute() && 0 === r23.hour() || (i23 = !0);
                                            }
                                            return i23 ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
                                        })(i21._timestamps.data, l18), (function(t7, e17) {
                                            var n23, i23, o17, a21, s17 = [];
                                            for(n23 = 0, i23 = t7.length; n23 < i23; ++n23)o17 = t7[n23], a21 = !!e17 && o17 === +r5(o17).startOf(e17), s17.push({
                                                value: o17,
                                                major: a21
                                            });
                                            return s17;
                                        })(f3, i21._majorUnit);
                                    },
                                    getLabelForIndex: function(t6, e15) {
                                        var n22 = this.chart.data, r23 = this.options.time, i21 = n22.labels && t6 < n22.labels.length ? n22.labels[t6] : "", a19 = n22.datasets[e15].data[t6];
                                        return o14.isObject(a19) && (i21 = this.getRightValue(a19)), r23.tooltipFormat ? g2(i21, r23).format(r23.tooltipFormat) : "string" == typeof i21 ? i21 : g2(i21, r23).format(this._labelFormat);
                                    },
                                    tickFormatFunction: function(t6, e15, n22, r23) {
                                        var i21 = this.options, a19 = t6.valueOf(), s16 = i21.time.displayFormats, l18 = s16[this._unit], u18 = this._majorUnit, c15 = s16[u18], d12 = t6.clone().startOf(u18).valueOf(), f3 = i21.ticks.major, h9 = f3.enabled && u18 && c15 && a19 === d12, p3 = t6.format(r23 || (h9 ? c15 : l18)), g3 = h9 ? f3 : i21.ticks.minor, v3 = o14.valueOrDefault(g3.callback, g3.userCallback);
                                        return v3 ? v3(p3, e15, n22) : p3;
                                    },
                                    convertTicksToLabels: function(t6) {
                                        var e15, n22, i21 = [];
                                        for(e15 = 0, n22 = t6.length; e15 < n22; ++e15)i21.push(this.tickFormatFunction(r5(t6[e15].value), e15, t6));
                                        return i21;
                                    },
                                    getPixelForOffset: function(t6) {
                                        var e15 = this, n22 = e15._horizontal ? e15.width : e15.height, r23 = e15._horizontal ? e15.left : e15.top, i21 = p2(e15._table, "time", t6, "pos");
                                        return r23 + n22 * (e15._offsets.left + i21) / (e15._offsets.left + 1 + e15._offsets.right);
                                    },
                                    getPixelForValue: function(t6, e15, n22) {
                                        var r23 = null;
                                        if (void 0 !== e15 && void 0 !== n22 && (r23 = this._timestamps.datasets[n22][e15]), null === r23 && (r23 = v2(t6, this)), null !== r23) return this.getPixelForOffset(r23);
                                    },
                                    getPixelForTick: function(t6) {
                                        var e15 = this.getTicks();
                                        return t6 >= 0 && t6 < e15.length ? this.getPixelForOffset(e15[t6].value) : null;
                                    },
                                    getValueForPixel: function(t6) {
                                        var e15 = this, n22 = e15._horizontal ? e15.width : e15.height, i21 = e15._horizontal ? e15.left : e15.top, o16 = (n22 ? (t6 - i21) / n22 : 0) * (e15._offsets.left + 1 + e15._offsets.left) - e15._offsets.right, a19 = p2(e15._table, "pos", o16, "time");
                                        return r5(a19);
                                    },
                                    getLabelWidth: function(t6) {
                                        var e15 = this.options.ticks, n22 = this.ctx.measureText(t6).width, r23 = o14.toRadians(e15.maxRotation), a19 = Math.cos(r23), s16 = Math.sin(r23);
                                        return n22 * a19 + o14.valueOrDefault(e15.fontSize, i10.global.defaultFontSize) * s16;
                                    },
                                    getLabelCapacity: function(t6) {
                                        var e15 = this, n22 = e15.options.time.displayFormats.millisecond, i21 = e15.tickFormatFunction(r5(t6), 0, [], n22), o16 = e15.getLabelWidth(i21), a19 = e15.isHorizontal() ? e15.width : e15.height, s16 = Math.floor(a19 / o16);
                                        return s16 > 0 ? s16 : 1;
                                    }
                                });
                                s14.registerScaleType("time", t4, {
                                    position: "bottom",
                                    distribution: "linear",
                                    bounds: "data",
                                    time: {
                                        parser: !1,
                                        format: !1,
                                        unit: !1,
                                        round: !1,
                                        displayFormat: !1,
                                        isoWeekday: !1,
                                        minUnit: "millisecond",
                                        displayFormats: {
                                            millisecond: "h:mm:ss.SSS a",
                                            second: "h:mm:ss a",
                                            minute: "h:mm a",
                                            hour: "hA",
                                            day: "MMM D",
                                            week: "ll",
                                            month: "MMM YYYY",
                                            quarter: "[Q]Q - YYYY",
                                            year: "YYYY"
                                        }
                                    },
                                    ticks: {
                                        autoSkip: !1,
                                        source: "auto",
                                        major: {
                                            enabled: !1
                                        }
                                    }
                                });
                            };
                        },
                        {
                            1: 1,
                            26: 26,
                            33: 33,
                            34: 34,
                            46: 46
                        }
                    ]
                }, {
                }, [
                    7
                ])(7);
            });
        }).call(this, n2(88)(t), n2(57));
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(3), i5 = n2(25).findIndex, o5 = n2(62), a18 = !0;
        "findIndex" in [] && Array(1).findIndex(function() {
            a18 = !1;
        }), r5({
            target: "Array",
            proto: !0,
            forced: a18
        }, {
            findIndex: function(t2) {
                return i5(this, t2, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), o5("findIndex");
    },
    function(t1, e2, n2) {
        var r5 = n2(3), i5 = Math.log, o5 = Math.LOG10E;
        r5({
            target: "Math",
            stat: !0
        }, {
            log10: function(t2) {
                return i5(t2) * o5;
            }
        });
    },
    function(t1, e2, n2) {
        n2(3)({
            target: "Math",
            stat: !0
        }, {
            sign: n2(154)
        });
    },
    function(t1, e2) {
        t1.exports = Math.sign || function(t2) {
            return 0 == (t2 = +t2) || t2 != t2 ? t2 : t2 < 0 ? -1 : 1;
        };
    },
    function(t1, e2, n2) {
        n2(3)({
            target: "Number",
            stat: !0
        }, {
            EPSILON: Math.pow(2, -52)
        });
    },
    function(t1, e2, n2) {
        "use strict";
        (function(t2) {
            var e3, r5;
            n2(72), n2(75), n2(76), n2(101), n2(138), n2(108), n2(91), n2(54), n2(120), n2(90), n2(122), n2(98), n2(110), n2(139), n2(140), n2(141), n2(77), n2(78), n2(80), n2(107), n2(157), n2(113), n2(83);
            function i5(t3) {
                return (i5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                    return typeof t4;
                } : function(t4) {
                    return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
                })(t3);
            }
            /*!
         * chartjs-plugin-datalabels v0.7.0
         * https://chartjs-plugin-datalabels.netlify.com
         * (c) 2019 Chart.js Contributors
         * Released under the MIT license
         */ e3 = void 0, r5 = function(t3) {
                var e5 = (t3 = t3 && t3.hasOwnProperty("default") ? t3.default : t3).helpers, n7 = function() {
                    if ("undefined" != typeof window) {
                        if (window.devicePixelRatio) return window.devicePixelRatio;
                        var t4 = window.screen;
                        if (t4) return (t4.deviceXDPI || 1) / (t4.logicalXDPI || 1);
                    }
                    return 1;
                }(), r23 = {
                    toTextLines: function(t6) {
                        var n22, r24 = [];
                        for(t6 = [].concat(t6); t6.length;)"string" == typeof (n22 = t6.pop()) ? r24.unshift.apply(r24, n22.split("\n")) : Array.isArray(n22) ? t6.push.apply(t6, n22) : e5.isNullOrUndef(t6) || r24.unshift("" + n22);
                        return r24;
                    },
                    toFontString: function(t6) {
                        return !t6 || e5.isNullOrUndef(t6.size) || e5.isNullOrUndef(t6.family) ? null : (t6.style ? t6.style + " " : "") + (t6.weight ? t6.weight + " " : "") + t6.size + "px " + t6.family;
                    },
                    textSize: function(t6, e15, n22) {
                        var r24, i10 = [].concat(e15), o5 = i10.length, a18 = t6.font, s14 = 0;
                        for(t6.font = n22.string, r24 = 0; r24 < o5; ++r24)s14 = Math.max(t6.measureText(i10[r24]).width, s14);
                        return t6.font = a18, {
                            height: o5 * n22.lineHeight,
                            width: s14
                        };
                    },
                    parseFont: function(n22) {
                        var i10 = t3.defaults.global, o5 = e5.valueOrDefault(n22.size, i10.defaultFontSize), a18 = {
                            family: e5.valueOrDefault(n22.family, i10.defaultFontFamily),
                            lineHeight: e5.options.toLineHeight(n22.lineHeight, o5),
                            size: o5,
                            style: e5.valueOrDefault(n22.style, i10.defaultFontStyle),
                            weight: e5.valueOrDefault(n22.weight, null),
                            string: ""
                        };
                        return a18.string = r23.toFontString(a18), a18;
                    },
                    bound: function(t6, e15, n22) {
                        return Math.max(t6, Math.min(e15, n22));
                    },
                    arrayDiff: function(t6, e15) {
                        var n22, r24, i10, o5, a18 = t6.slice(), s14 = [];
                        for(n22 = 0, i10 = e15.length; n22 < i10; ++n22)o5 = e15[n22], -1 === (r24 = a18.indexOf(o5)) ? s14.push([
                            o5,
                            1
                        ]) : a18.splice(r24, 1);
                        for(n22 = 0, i10 = a18.length; n22 < i10; ++n22)s14.push([
                            a18[n22],
                            -1
                        ]);
                        return s14;
                    },
                    rasterize: function(t6) {
                        return Math.round(t6 * n7) / n7;
                    }
                };
                function i10(t6, e15) {
                    var n22 = e15.x, r24 = e15.y;
                    if (null === n22) return {
                        x: 0,
                        y: -1
                    };
                    if (null === r24) return {
                        x: 1,
                        y: 0
                    };
                    var i21 = t6.x - n22, o5 = t6.y - r24, a18 = Math.sqrt(i21 * i21 + o5 * o5);
                    return {
                        x: a18 ? i21 / a18 : 0,
                        y: a18 ? o5 / a18 : -1
                    };
                }
                var o5 = 0, a18 = 1, s14 = 2, l17 = 4, u15 = 8;
                function c13(t6, e15, n22) {
                    var r24 = o5;
                    return t6 < n22.left ? r24 |= a18 : t6 > n22.right && (r24 |= s14), e15 < n22.top ? r24 |= u15 : e15 > n22.bottom && (r24 |= l17), r24;
                }
                function d10(t6, e15) {
                    var n22, r24, i21 = e15.anchor, o14 = t6;
                    return e15.clamp && (o14 = (function(t7, e17) {
                        for(var n23, r25, i23, o16 = t7.x0, d12 = t7.y0, f2 = t7.x1, h7 = t7.y1, p2 = c13(o16, d12, e17), g2 = c13(f2, h7, e17); p2 | g2 && !(p2 & g2);)(n23 = p2 || g2) & u15 ? (r25 = o16 + (f2 - o16) * (e17.top - d12) / (h7 - d12), i23 = e17.top) : n23 & l17 ? (r25 = o16 + (f2 - o16) * (e17.bottom - d12) / (h7 - d12), i23 = e17.bottom) : n23 & s14 ? (i23 = d12 + (h7 - d12) * (e17.right - o16) / (f2 - o16), r25 = e17.right) : n23 & a18 && (i23 = d12 + (h7 - d12) * (e17.left - o16) / (f2 - o16), r25 = e17.left), n23 === p2 ? p2 = c13(o16 = r25, d12 = i23, e17) : g2 = c13(f2 = r25, h7 = i23, e17);
                        return {
                            x0: o16,
                            x1: f2,
                            y0: d12,
                            y1: h7
                        };
                    })(o14, e15.area)), "start" === i21 ? (n22 = o14.x0, r24 = o14.y0) : "end" === i21 ? (n22 = o14.x1, r24 = o14.y1) : (n22 = (o14.x0 + o14.x1) / 2, r24 = (o14.y0 + o14.y1) / 2), (function(t7, e17, n23, r25, i23) {
                        switch(i23){
                            case "center":
                                n23 = r25 = 0;
                                break;
                            case "bottom":
                                n23 = 0, r25 = 1;
                                break;
                            case "right":
                                n23 = 1, r25 = 0;
                                break;
                            case "left":
                                n23 = -1, r25 = 0;
                                break;
                            case "top":
                                n23 = 0, r25 = -1;
                                break;
                            case "start":
                                n23 = -n23, r25 = -r25;
                                break;
                            case "end":
                                break;
                            default:
                                i23 *= Math.PI / 180, n23 = Math.cos(i23), r25 = Math.sin(i23);
                        }
                        return {
                            x: t7,
                            y: e17,
                            vx: n23,
                            vy: r25
                        };
                    })(n22, r24, t6.vx, t6.vy, e15.align);
                }
                var f2 = {
                    arc: function(t6, e15) {
                        var n22 = (t6.startAngle + t6.endAngle) / 2, r24 = Math.cos(n22), i21 = Math.sin(n22), o14 = t6.innerRadius, a19 = t6.outerRadius;
                        return d10({
                            x0: t6.x + r24 * o14,
                            y0: t6.y + i21 * o14,
                            x1: t6.x + r24 * a19,
                            y1: t6.y + i21 * a19,
                            vx: r24,
                            vy: i21
                        }, e15);
                    },
                    point: function(t6, e15) {
                        var n22 = i10(t6, e15.origin), r24 = n22.x * t6.radius, o14 = n22.y * t6.radius;
                        return d10({
                            x0: t6.x - r24,
                            y0: t6.y - o14,
                            x1: t6.x + r24,
                            y1: t6.y + o14,
                            vx: n22.x,
                            vy: n22.y
                        }, e15);
                    },
                    rect: function(t6, e15) {
                        var n22 = i10(t6, e15.origin), r24 = t6.x, o14 = t6.y, a19 = 0, s16 = 0;
                        return t6.horizontal ? (r24 = Math.min(t6.x, t6.base), a19 = Math.abs(t6.base - t6.x)) : (o14 = Math.min(t6.y, t6.base), s16 = Math.abs(t6.base - t6.y)), d10({
                            x0: r24,
                            y0: o14 + s16,
                            x1: r24 + a19,
                            y1: o14,
                            vx: n22.x,
                            vy: n22.y
                        }, e15);
                    },
                    fallback: function(t6, e15) {
                        var n22 = i10(t6, e15.origin);
                        return d10({
                            x0: t6.x,
                            y0: t6.y,
                            x1: t6.x,
                            y1: t6.y,
                            vx: n22.x,
                            vy: n22.y
                        }, e15);
                    }
                }, h7 = t3.helpers, p2 = r23.rasterize;
                function g2(t6) {
                    var e15 = t6._model.horizontal, n22 = t6._scale || e15 && t6._xScale || t6._yScale;
                    if (!n22) return null;
                    if (void 0 !== n22.xCenter && void 0 !== n22.yCenter) return {
                        x: n22.xCenter,
                        y: n22.yCenter
                    };
                    var r24 = n22.getBasePixel();
                    return e15 ? {
                        x: r24,
                        y: null
                    } : {
                        x: null,
                        y: r24
                    };
                }
                function v2(t6, e15, n22) {
                    var r24 = t6.shadowBlur, i21 = n22.stroked, o14 = p2(n22.x), a19 = p2(n22.y), s16 = p2(n22.w);
                    i21 && t6.strokeText(e15, o14, a19, s16), n22.filled && (r24 && i21 && (t6.shadowBlur = 0), t6.fillText(e15, o14, a19, s16), r24 && i21 && (t6.shadowBlur = r24));
                }
                var m9 = function(t6, e15, n22, r24) {
                    var i21 = this;
                    i21._config = t6, i21._index = r24, i21._model = null, i21._rects = null, i21._ctx = e15, i21._el = n22;
                };
                h7.extend(m9.prototype, {
                    _modelize: function(e15, n22, i21, o14) {
                        var a19, s16 = this._index, l18 = h7.options.resolve, u18 = r23.parseFont(l18([
                            i21.font,
                            {
                            }
                        ], o14, s16)), c15 = l18([
                            i21.color,
                            t3.defaults.global.defaultFontColor
                        ], o14, s16);
                        return {
                            align: l18([
                                i21.align,
                                "center"
                            ], o14, s16),
                            anchor: l18([
                                i21.anchor,
                                "center"
                            ], o14, s16),
                            area: o14.chart.chartArea,
                            backgroundColor: l18([
                                i21.backgroundColor,
                                null
                            ], o14, s16),
                            borderColor: l18([
                                i21.borderColor,
                                null
                            ], o14, s16),
                            borderRadius: l18([
                                i21.borderRadius,
                                0
                            ], o14, s16),
                            borderWidth: l18([
                                i21.borderWidth,
                                0
                            ], o14, s16),
                            clamp: l18([
                                i21.clamp,
                                !1
                            ], o14, s16),
                            clip: l18([
                                i21.clip,
                                !1
                            ], o14, s16),
                            color: c15,
                            display: e15,
                            font: u18,
                            lines: n22,
                            offset: l18([
                                i21.offset,
                                0
                            ], o14, s16),
                            opacity: l18([
                                i21.opacity,
                                1
                            ], o14, s16),
                            origin: g2(this._el),
                            padding: h7.options.toPadding(l18([
                                i21.padding,
                                0
                            ], o14, s16)),
                            positioner: (a19 = this._el, a19 instanceof t3.elements.Arc ? f2.arc : a19 instanceof t3.elements.Point ? f2.point : a19 instanceof t3.elements.Rectangle ? f2.rect : f2.fallback),
                            rotation: l18([
                                i21.rotation,
                                0
                            ], o14, s16) * (Math.PI / 180),
                            size: r23.textSize(this._ctx, n22, u18),
                            textAlign: l18([
                                i21.textAlign,
                                "start"
                            ], o14, s16),
                            textShadowBlur: l18([
                                i21.textShadowBlur,
                                0
                            ], o14, s16),
                            textShadowColor: l18([
                                i21.textShadowColor,
                                c15
                            ], o14, s16),
                            textStrokeColor: l18([
                                i21.textStrokeColor,
                                c15
                            ], o14, s16),
                            textStrokeWidth: l18([
                                i21.textStrokeWidth,
                                0
                            ], o14, s16)
                        };
                    },
                    update: function(t6) {
                        var e15, n22, i21, o14 = this, a19 = null, s16 = null, l18 = o14._index, u18 = o14._config, c15 = h7.options.resolve([
                            u18.display,
                            !0
                        ], t6, l18);
                        c15 && (e15 = t6.dataset.data[l18], n22 = h7.valueOrDefault(h7.callback(u18.formatter, [
                            e15,
                            t6
                        ]), e15), (i21 = h7.isNullOrUndef(n22) ? [] : r23.toTextLines(n22)).length && (s16 = (function(t7) {
                            var e17 = t7.borderWidth || 0, n23 = t7.padding, r24 = t7.size.height, i23 = t7.size.width, o16 = -i23 / 2, a21 = -r24 / 2;
                            return {
                                frame: {
                                    x: o16 - n23.left - e17,
                                    y: a21 - n23.top - e17,
                                    w: i23 + n23.width + 2 * e17,
                                    h: r24 + n23.height + 2 * e17
                                },
                                text: {
                                    x: o16,
                                    y: a21,
                                    w: i23,
                                    h: r24
                                }
                            };
                        })(a19 = o14._modelize(c15, i21, u18, t6)))), o14._model = a19, o14._rects = s16;
                    },
                    geometry: function() {
                        return this._rects ? this._rects.frame : {
                        };
                    },
                    rotation: function() {
                        return this._model ? this._model.rotation : 0;
                    },
                    visible: function() {
                        return this._model && this._model.opacity;
                    },
                    model: function() {
                        return this._model;
                    },
                    draw: function(t6, e15) {
                        var n22, i21 = t6.ctx, o14 = this._model, a19 = this._rects;
                        this.visible() && (i21.save(), o14.clip && (n22 = o14.area, i21.beginPath(), i21.rect(n22.left, n22.top, n22.right - n22.left, n22.bottom - n22.top), i21.clip()), i21.globalAlpha = r23.bound(0, o14.opacity, 1), i21.translate(p2(e15.x), p2(e15.y)), i21.rotate(o14.rotation), (function(t7, e17, n23) {
                            var r24 = n23.backgroundColor, i23 = n23.borderColor, o16 = n23.borderWidth;
                            (r24 || i23 && o16) && (t7.beginPath(), h7.canvas.roundedRect(t7, p2(e17.x) + o16 / 2, p2(e17.y) + o16 / 2, p2(e17.w) - o16, p2(e17.h) - o16, n23.borderRadius), t7.closePath(), r24 && (t7.fillStyle = r24, t7.fill()), i23 && o16 && (t7.strokeStyle = i23, t7.lineWidth = o16, t7.lineJoin = "miter", t7.stroke()));
                        })(i21, a19.frame, o14), (function(t7, e17, n23, r24) {
                            var i23, o16 = r24.textAlign, a21 = r24.color, s16 = !!a21, l18 = r24.font, u18 = e17.length, c15 = r24.textStrokeColor, d12 = r24.textStrokeWidth, f3 = c15 && d12;
                            if (u18 && (s16 || f3)) for(n23 = (function(t8, e18, n25) {
                                var r25 = n25.lineHeight, i24 = t8.w, o17 = t8.x;
                                return "center" === e18 ? o17 += i24 / 2 : "end" !== e18 && "right" !== e18 || (o17 += i24), {
                                    h: r25,
                                    w: i24,
                                    x: o17,
                                    y: t8.y + r25 / 2
                                };
                            })(n23, o16, l18), t7.font = l18.string, t7.textAlign = o16, t7.textBaseline = "middle", t7.shadowBlur = r24.textShadowBlur, t7.shadowColor = r24.textShadowColor, s16 && (t7.fillStyle = a21), f3 && (t7.lineJoin = "round", t7.lineWidth = d12, t7.strokeStyle = c15), i23 = 0, u18 = e17.length; i23 < u18; ++i23)v2(t7, e17[i23], {
                                stroked: f3,
                                filled: s16,
                                w: n23.w,
                                x: n23.x,
                                y: n23.y + n23.h * i23
                            });
                        })(i21, o14.lines, a19.text, o14), i21.restore());
                    }
                });
                var y7 = t3.helpers, b7 = Number.MIN_SAFE_INTEGER || -9007199254740991, x5 = Number.MAX_SAFE_INTEGER || 9007199254740991;
                function w(t6, e15, n22) {
                    var r24 = Math.cos(n22), i21 = Math.sin(n22), o14 = e15.x, a19 = e15.y;
                    return {
                        x: o14 + r24 * (t6.x - o14) - i21 * (t6.y - a19),
                        y: a19 + i21 * (t6.x - o14) + r24 * (t6.y - a19)
                    };
                }
                function S5(t6, e15) {
                    var n22, r24, i21, o14, a19, s16 = x5, l18 = b7, u18 = e15.origin;
                    for(n22 = 0; n22 < t6.length; ++n22)i21 = (r24 = t6[n22]).x - u18.x, o14 = r24.y - u18.y, a19 = e15.vx * i21 + e15.vy * o14, s16 = Math.min(s16, a19), l18 = Math.max(l18, a19);
                    return {
                        min: s16,
                        max: l18
                    };
                }
                function k5(t6, e15) {
                    var n22 = e15.x - t6.x, r24 = e15.y - t6.y, i21 = Math.sqrt(n22 * n22 + r24 * r24);
                    return {
                        vx: (e15.x - t6.x) / i21,
                        vy: (e15.y - t6.y) / i21,
                        origin: t6,
                        ln: i21
                    };
                }
                var C3 = function() {
                    this._rotation = 0, this._rect = {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0
                    };
                };
                function M(t6, e15, n22) {
                    var r24 = e15.positioner(t6, e15), i21 = r24.vx, o14 = r24.vy;
                    if (!i21 && !o14) return {
                        x: r24.x,
                        y: r24.y
                    };
                    var a19 = n22.w, s16 = n22.h, l18 = e15.rotation, u18 = Math.abs(a19 / 2 * Math.cos(l18)) + Math.abs(s16 / 2 * Math.sin(l18)), c15 = Math.abs(a19 / 2 * Math.sin(l18)) + Math.abs(s16 / 2 * Math.cos(l18)), d12 = 1 / Math.max(Math.abs(i21), Math.abs(o14));
                    return u18 *= i21 * d12, c15 *= o14 * d12, u18 += e15.offset * i21, c15 += e15.offset * o14, {
                        x: r24.x + u18,
                        y: r24.y + c15
                    };
                }
                y7.extend(C3.prototype, {
                    center: function() {
                        var t6 = this._rect;
                        return {
                            x: t6.x + t6.w / 2,
                            y: t6.y + t6.h / 2
                        };
                    },
                    update: function(t6, e15, n22) {
                        this._rotation = n22, this._rect = {
                            x: e15.x + t6.x,
                            y: e15.y + t6.y,
                            w: e15.w,
                            h: e15.h
                        };
                    },
                    contains: function(t6) {
                        var e15 = this._rect;
                        return !((t6 = w(t6, this.center(), -this._rotation)).x < e15.x - 1 || t6.y < e15.y - 1 || t6.x > e15.x + e15.w + 2 || t6.y > e15.y + e15.h + 2);
                    },
                    intersects: function(t6) {
                        var e15, n22, r24, i21 = this._points(), o14 = t6._points(), a19 = [
                            k5(i21[0], i21[1]),
                            k5(i21[0], i21[3])
                        ];
                        for(this._rotation !== t6._rotation && a19.push(k5(o14[0], o14[1]), k5(o14[0], o14[3])), e15 = 0; e15 < a19.length; ++e15)if (n22 = S5(i21, a19[e15]), r24 = S5(o14, a19[e15]), n22.max < r24.min || r24.max < n22.min) return !1;
                        return !0;
                    },
                    _points: function() {
                        var t6 = this._rect, e15 = this._rotation, n22 = this.center();
                        return [
                            w({
                                x: t6.x,
                                y: t6.y
                            }, n22, e15),
                            w({
                                x: t6.x + t6.w,
                                y: t6.y
                            }, n22, e15),
                            w({
                                x: t6.x + t6.w,
                                y: t6.y + t6.h
                            }, n22, e15),
                            w({
                                x: t6.x,
                                y: t6.y + t6.h
                            }, n22, e15)
                        ];
                    }
                });
                var A = {
                    prepare: function(t6) {
                        var e15, n22, r24, i21, o14, a19 = [];
                        for(e15 = 0, r24 = t6.length; e15 < r24; ++e15)for(n22 = 0, i21 = t6[e15].length; n22 < i21; ++n22)o14 = t6[e15][n22], a19.push(o14), o14.$layout = {
                            _box: new C3,
                            _hidable: !1,
                            _visible: !0,
                            _set: e15,
                            _idx: n22
                        };
                        return a19.sort(function(t7, e17) {
                            var n23 = t7.$layout, r25 = e17.$layout;
                            return n23._idx === r25._idx ? r25._set - n23._set : r25._idx - n23._idx;
                        }), this.update(a19), a19;
                    },
                    update: function(t6) {
                        var e15, n22, r24, i21, o14, a19 = !1;
                        for(e15 = 0, n22 = t6.length; e15 < n22; ++e15)i21 = (r24 = t6[e15]).model(), (o14 = r24.$layout)._hidable = i21 && "auto" === i21.display, o14._visible = r24.visible(), a19 |= o14._hidable;
                        a19 && (function(t7) {
                            var e17, n23, r25, i23, o16, a21;
                            for(e17 = 0, n23 = t7.length; e17 < n23; ++e17)(i23 = (r25 = t7[e17]).$layout)._visible && (o16 = r25.geometry(), a21 = M(r25._el._model, r25.model(), o16), i23._box.update(a21, o16, r25.rotation()));
                            !function(t8, e18) {
                                var n25, r26, i24, o17;
                                for(n25 = t8.length - 1; n25 >= 0; --n25)for(i24 = t8[n25].$layout, r26 = n25 - 1; r26 >= 0 && i24._visible; --r26)(o17 = t8[r26].$layout)._visible && i24._box.intersects(o17._box) && e18(i24, o17);
                            }(t7, function(t8, e18) {
                                var n25 = t8._hidable, r26 = e18._hidable;
                                n25 && r26 || r26 ? e18._visible = !1 : n25 && (t8._visible = !1);
                            });
                        })(t6);
                    },
                    lookup: function(t6, e15) {
                        var n22, r24;
                        for(n22 = t6.length - 1; n22 >= 0; --n22)if ((r24 = t6[n22].$layout) && r24._visible && r24._box.contains(e15)) return t6[n22];
                        return null;
                    },
                    draw: function(t6, e15) {
                        var n22, r24, i21, o14, a19, s16;
                        for(n22 = 0, r24 = e15.length; n22 < r24; ++n22)(o14 = (i21 = e15[n22]).$layout)._visible && (a19 = i21.geometry(), s16 = M(i21._el._view, i21.model(), a19), o14._box.update(s16, a19, i21.rotation()), i21.draw(t6, s16));
                    }
                }, P = t3.helpers, _ = {
                    align: "center",
                    anchor: "center",
                    backgroundColor: null,
                    borderColor: null,
                    borderRadius: 0,
                    borderWidth: 0,
                    clamp: !1,
                    clip: !1,
                    color: void 0,
                    display: !0,
                    font: {
                        family: void 0,
                        lineHeight: 1.2,
                        size: void 0,
                        style: void 0,
                        weight: null
                    },
                    formatter: function(t6) {
                        if (P.isNullOrUndef(t6)) return null;
                        var e15, n22, r24, i21 = t6;
                        if (P.isObject(t6)) if (P.isNullOrUndef(t6.label)) if (P.isNullOrUndef(t6.r)) for(i21 = "", r24 = 0, n22 = (e15 = Object.keys(t6)).length; r24 < n22; ++r24)i21 += (0 !== r24 ? ", " : "") + e15[r24] + ": " + t6[e15[r24]];
                        else i21 = t6.r;
                        else i21 = t6.label;
                        return "" + i21;
                    },
                    labels: void 0,
                    listeners: {
                    },
                    offset: 4,
                    opacity: 1,
                    padding: {
                        top: 4,
                        right: 4,
                        bottom: 4,
                        left: 4
                    },
                    rotation: 0,
                    textAlign: "start",
                    textStrokeColor: void 0,
                    textStrokeWidth: 0,
                    textShadowBlur: 0,
                    textShadowColor: void 0
                }, T = t3.helpers, I = "$datalabels", O = "$default";
                function F(t6, e15, n22) {
                    if (e15) {
                        var r24, i21 = n22.$context, o14 = n22.$groups;
                        e15[o14._set] && (r24 = e15[o14._set][o14._key]) && !0 === T.callback(r24, [
                            i21
                        ]) && (t6[I]._dirty = !0, n22.update(i21));
                    }
                }
                function D(t6, e15) {
                    var n22, r25, i23 = t6[I], o16 = i23._listeners;
                    if (o16.enter || o16.leave) {
                        if ("mousemove" === e15.type) r25 = A.lookup(i23._labels, e15);
                        else if ("mouseout" !== e15.type) return;
                        n22 = i23._hovered, i23._hovered = r25, (function(t7, e17, n23, r26) {
                            var i24, o17;
                            (n23 || r26) && (n23 ? r26 ? n23 !== r26 && (o17 = i24 = !0) : o17 = !0 : i24 = !0, o17 && F(t7, e17.leave, n23), i24 && F(t7, e17.enter, r26));
                        })(t6, o16, n22, r25);
                    }
                }
                t3.defaults.global.plugins.datalabels = _;
                var L = {
                    id: "datalabels",
                    beforeInit: function(t6) {
                        t6[I] = {
                            _actives: []
                        };
                    },
                    beforeUpdate: function(t6) {
                        var e15 = t6[I];
                        e15._listened = !1, e15._listeners = {
                        }, e15._datasets = [], e15._labels = [];
                    },
                    afterDatasetUpdate: function(t6, e15, n22) {
                        var r25, i23, o16, a19, s16, l18, u18, c15, d12 = e15.index, f3 = t6[I], h9 = f3._datasets[d12] = [], p3 = t6.isDatasetVisible(d12), g3 = t6.data.datasets[d12], v3 = function(t7, e17) {
                            var n23, r26, i24, o17 = t7.datalabels, a21 = [];
                            return !1 === o17 ? null : (!0 === o17 && (o17 = {
                            }), e17 = T.merge({
                            }, [
                                e17,
                                o17
                            ]), r26 = e17.labels || {
                            }, i24 = Object.keys(r26), delete e17.labels, i24.length ? i24.forEach(function(t8) {
                                r26[t8] && a21.push(T.merge({
                                }, [
                                    e17,
                                    r26[t8],
                                    {
                                        _key: t8
                                    }
                                ]));
                            }) : a21.push(e17), n23 = a21.reduce(function(t8, e18) {
                                return T.each(e18.listeners || {
                                }, function(n25, r27) {
                                    t8[r27] = t8[r27] || {
                                    }, t8[r27][e18._key || O] = n25;
                                }), delete e18.listeners, t8;
                            }, {
                            }), {
                                labels: a21,
                                listeners: n23
                            });
                        }(g3, n22), y8 = e15.meta.data || [], b8 = t6.ctx;
                        for(b8.save(), r25 = 0, o16 = y8.length; r25 < o16; ++r25)if ((u18 = y8[r25])[I] = [], p3 && u18 && !u18.hidden && !u18._model.skip) for(i23 = 0, a19 = v3.labels.length; i23 < a19; ++i23)l18 = (s16 = v3.labels[i23])._key, (c15 = new m9(s16, b8, u18, r25)).$groups = {
                            _set: d12,
                            _key: l18 || O
                        }, c15.$context = {
                            active: !1,
                            chart: t6,
                            dataIndex: r25,
                            dataset: g3,
                            datasetIndex: d12
                        }, c15.update(c15.$context), u18[I].push(c15), h9.push(c15);
                        b8.restore(), T.merge(f3._listeners, v3.listeners, {
                            merger: function(t7, n23, r26) {
                                n23[t7] = n23[t7] || {
                                }, n23[t7][e15.index] = r26[t7], f3._listened = !0;
                            }
                        });
                    },
                    afterUpdate: function(t6, e15) {
                        t6[I]._labels = A.prepare(t6[I]._datasets, e15);
                    },
                    afterDatasetsDraw: function(t6) {
                        A.draw(t6, t6[I]._labels);
                    },
                    beforeEvent: function(t6, e15) {
                        if (t6[I]._listened) switch(e15.type){
                            case "mousemove":
                            case "mouseout":
                                D(t6, e15);
                                break;
                            case "click":
                                !function(t7, e17) {
                                    var n22 = t7[I], r25 = n22._listeners.click, i23 = r25 && A.lookup(n22._labels, e17);
                                    i23 && F(t7, r25, i23);
                                }(t6, e15);
                        }
                    },
                    afterEvent: function(e15) {
                        var n22, i23, o16, a19, s16, l18, u18, c15 = e15[I], d12 = c15._actives, f3 = c15._actives = e15.lastActive || [], h9 = r23.arrayDiff(d12, f3);
                        for(n22 = 0, i23 = h9.length; n22 < i23; ++n22)if ((s16 = h9[n22])[1]) for(o16 = 0, a19 = (u18 = s16[0][I] || []).length; o16 < a19; ++o16)(l18 = u18[o16]).$context.active = 1 === s16[1], l18.update(l18.$context);
                        (c15._dirty || h9.length) && (A.update(c15._labels), (function(e17) {
                            if (!e17.animating) {
                                for(var n23 = t3.animationService.animations, r25 = 0, i24 = n23.length; r25 < i24; ++r25)if (n23[r25].chart === e17) return;
                                e17.render({
                                    duration: 1,
                                    lazy: !0
                                });
                            }
                        })(e15)), delete c15._dirty;
                    }
                };
                return t3.plugins.unregister(L), L;
            }, "object" === ("undefined" == typeof exports ? "undefined" : i5(exports)) && void 0 !== t2 ? t2.exports = r5(n2(160)) : "function" == typeof define && n2(55) ? define([
                "chart.js"
            ], r5) : (e3 = e3 || self).ChartDataLabels = r5(e3.Chart);
        }).call(this, n2(88)(t1));
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(3), i5 = n2(158);
        r5({
            target: "String",
            proto: !0,
            forced: n2(159)("anchor")
        }, {
            anchor: function(t2) {
                return i5(this, "a", "name", t2);
            }
        });
    },
    function(t1, e2, n2) {
        var r5 = n2(13), i5 = /"/g;
        t1.exports = function(t2, e3, n7, o5) {
            var a18 = String(r5(t2)), s14 = "<" + e3;
            return "" !== n7 && (s14 += " " + n7 + '="' + String(o5).replace(i5, "&quot;") + '"'), s14 + ">" + a18 + "</" + e3 + ">";
        };
    },
    function(t1, e2, n2) {
        var r5 = n2(1);
        t1.exports = function(t2) {
            return r5(function() {
                var e3 = ""[t2]('"');
                return e3 !== e3.toLowerCase() || e3.split('"').length > 3;
            });
        };
    },
    function(t1, e2) {
        t1.exports = chart;
    },
    function(t1, e2) {
        !function(t2) {
            t2("body").on("shown.bs.modal", ".modal", function() {
                t2(".modal-backdrop").length || ($modal_dialog = t2(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (t2(this).addClass("modal-scrolling"), t2("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (t2(this).addClass("modal-content-clickable"), t2("body").addClass("scrollable")));
            }), t2("body").on("hidden.bs.modal", ".modal", function() {
                t2("body").removeClass("scrollable");
            });
        }(jQuery);
    },
    function(t1, e2) {
        jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            swing: function(t2, e3, n2, r5, i5) {
                return jQuery.easing[jQuery.easing.def](t2, e3, n2, r5, i5);
            },
            easeInQuad: function(t2, e3, n2, r5, i5) {
                return r5 * (e3 /= i5) * e3 + n2;
            },
            easeOutQuad: function(t2, e3, n2, r5, i5) {
                return -r5 * (e3 /= i5) * (e3 - 2) + n2;
            },
            easeInOutQuad: function(t2, e3, n2, r5, i5) {
                return (e3 /= i5 / 2) < 1 ? r5 / 2 * e3 * e3 + n2 : -r5 / 2 * (--e3 * (e3 - 2) - 1) + n2;
            },
            easeInCubic: function(t2, e3, n2, r5, i5) {
                return r5 * (e3 /= i5) * e3 * e3 + n2;
            },
            easeOutCubic: function(t2, e3, n2, r5, i5) {
                return r5 * ((e3 = e3 / i5 - 1) * e3 * e3 + 1) + n2;
            },
            easeInOutCubic: function(t2, e3, n2, r5, i5) {
                return (e3 /= i5 / 2) < 1 ? r5 / 2 * e3 * e3 * e3 + n2 : r5 / 2 * ((e3 -= 2) * e3 * e3 + 2) + n2;
            },
            easeInQuart: function(t2, e3, n2, r5, i5) {
                return r5 * (e3 /= i5) * e3 * e3 * e3 + n2;
            },
            easeOutQuart: function(t2, e3, n2, r5, i5) {
                return -r5 * ((e3 = e3 / i5 - 1) * e3 * e3 * e3 - 1) + n2;
            },
            easeInOutQuart: function(t2, e3, n2, r5, i5) {
                return (e3 /= i5 / 2) < 1 ? r5 / 2 * e3 * e3 * e3 * e3 + n2 : -r5 / 2 * ((e3 -= 2) * e3 * e3 * e3 - 2) + n2;
            },
            easeInQuint: function(t2, e3, n2, r5, i5) {
                return r5 * (e3 /= i5) * e3 * e3 * e3 * e3 + n2;
            },
            easeOutQuint: function(t2, e3, n2, r5, i5) {
                return r5 * ((e3 = e3 / i5 - 1) * e3 * e3 * e3 * e3 + 1) + n2;
            },
            easeInOutQuint: function(t2, e3, n2, r5, i5) {
                return (e3 /= i5 / 2) < 1 ? r5 / 2 * e3 * e3 * e3 * e3 * e3 + n2 : r5 / 2 * ((e3 -= 2) * e3 * e3 * e3 * e3 + 2) + n2;
            },
            easeInSine: function(t2, e3, n2, r5, i5) {
                return -r5 * Math.cos(e3 / i5 * (Math.PI / 2)) + r5 + n2;
            },
            easeOutSine: function(t2, e3, n2, r5, i5) {
                return r5 * Math.sin(e3 / i5 * (Math.PI / 2)) + n2;
            },
            easeInOutSine: function(t2, e3, n2, r5, i5) {
                return -r5 / 2 * (Math.cos(Math.PI * e3 / i5) - 1) + n2;
            },
            easeInExpo: function(t2, e3, n2, r5, i5) {
                return 0 == e3 ? n2 : r5 * Math.pow(2, 10 * (e3 / i5 - 1)) + n2;
            },
            easeOutExpo: function(t2, e3, n2, r5, i5) {
                return e3 == i5 ? n2 + r5 : r5 * (1 - Math.pow(2, -10 * e3 / i5)) + n2;
            },
            easeInOutExpo: function(t2, e3, n2, r5, i5) {
                return 0 == e3 ? n2 : e3 == i5 ? n2 + r5 : (e3 /= i5 / 2) < 1 ? r5 / 2 * Math.pow(2, 10 * (e3 - 1)) + n2 : r5 / 2 * (2 - Math.pow(2, -10 * --e3)) + n2;
            },
            easeInCirc: function(t2, e3, n2, r5, i5) {
                return -r5 * (Math.sqrt(1 - (e3 /= i5) * e3) - 1) + n2;
            },
            easeOutCirc: function(t2, e3, n2, r5, i5) {
                return r5 * Math.sqrt(1 - (e3 = e3 / i5 - 1) * e3) + n2;
            },
            easeInOutCirc: function(t2, e3, n2, r5, i5) {
                return (e3 /= i5 / 2) < 1 ? -r5 / 2 * (Math.sqrt(1 - e3 * e3) - 1) + n2 : r5 / 2 * (Math.sqrt(1 - (e3 -= 2) * e3) + 1) + n2;
            },
            easeInElastic: function(t2, e3, n2, r5, i5) {
                var o5 = 1.70158, a18 = 0, s14 = r5;
                if (0 == e3) return n2;
                if (1 == (e3 /= i5)) return n2 + r5;
                if (a18 || (a18 = 0.3 * i5), s14 < Math.abs(r5)) {
                    s14 = r5;
                    o5 = a18 / 4;
                } else o5 = a18 / (2 * Math.PI) * Math.asin(r5 / s14);
                return -s14 * Math.pow(2, 10 * (e3 -= 1)) * Math.sin((e3 * i5 - o5) * (2 * Math.PI) / a18) + n2;
            },
            easeOutElastic: function(t2, e3, n2, r5, i5) {
                var o5 = 1.70158, a18 = 0, s14 = r5;
                if (0 == e3) return n2;
                if (1 == (e3 /= i5)) return n2 + r5;
                if (a18 || (a18 = 0.3 * i5), s14 < Math.abs(r5)) {
                    s14 = r5;
                    o5 = a18 / 4;
                } else o5 = a18 / (2 * Math.PI) * Math.asin(r5 / s14);
                return s14 * Math.pow(2, -10 * e3) * Math.sin((e3 * i5 - o5) * (2 * Math.PI) / a18) + r5 + n2;
            },
            easeInOutElastic: function(t2, e3, n2, r5, i5) {
                var o5 = 1.70158, a18 = 0, s14 = r5;
                if (0 == e3) return n2;
                if (2 == (e3 /= i5 / 2)) return n2 + r5;
                if (a18 || (a18 = i5 * (0.3 * 1.5)), s14 < Math.abs(r5)) {
                    s14 = r5;
                    o5 = a18 / 4;
                } else o5 = a18 / (2 * Math.PI) * Math.asin(r5 / s14);
                return e3 < 1 ? s14 * Math.pow(2, 10 * (e3 -= 1)) * Math.sin((e3 * i5 - o5) * (2 * Math.PI) / a18) * -0.5 + n2 : s14 * Math.pow(2, -10 * (e3 -= 1)) * Math.sin((e3 * i5 - o5) * (2 * Math.PI) / a18) * 0.5 + r5 + n2;
            },
            easeInBack: function(t2, e3, n2, r5, i5, o5) {
                return null == o5 && (o5 = 1.70158), r5 * (e3 /= i5) * e3 * ((o5 + 1) * e3 - o5) + n2;
            },
            easeOutBack: function(t2, e3, n2, r5, i5, o5) {
                return null == o5 && (o5 = 1.70158), r5 * ((e3 = e3 / i5 - 1) * e3 * ((o5 + 1) * e3 + o5) + 1) + n2;
            },
            easeInOutBack: function(t2, e3, n2, r5, i5, o5) {
                return null == o5 && (o5 = 1.70158), (e3 /= i5 / 2) < 1 ? r5 / 2 * (e3 * e3 * ((1 + (o5 *= 1.525)) * e3 - o5)) + n2 : r5 / 2 * ((e3 -= 2) * e3 * ((1 + (o5 *= 1.525)) * e3 + o5) + 2) + n2;
            },
            easeInBounce: function(t2, e3, n2, r5, i5) {
                return r5 - jQuery.easing.easeOutBounce(t2, i5 - e3, 0, r5, i5) + n2;
            },
            easeOutBounce: function(t2, e3, n2, r5, i5) {
                return (e3 /= i5) < 1 / 2.75 ? r5 * (7.5625 * e3 * e3) + n2 : e3 < 2 / 2.75 ? r5 * (7.5625 * (e3 -= 1.5 / 2.75) * e3 + 0.75) + n2 : e3 < 2.5 / 2.75 ? r5 * (7.5625 * (e3 -= 2.25 / 2.75) * e3 + 0.9375) + n2 : r5 * (7.5625 * (e3 -= 2.625 / 2.75) * e3 + 0.984375) + n2;
            },
            easeInOutBounce: function(t2, e3, n2, r5, i5) {
                return e3 < i5 / 2 ? 0.5 * jQuery.easing.easeInBounce(t2, 2 * e3, 0, r5, i5) + n2 : 0.5 * jQuery.easing.easeOutBounce(t2, 2 * e3 - i5, 0, r5, i5) + 0.5 * r5 + n2;
            }
        });
    },
    function(t1, e2, n2) {
        "use strict";
        (function(t2) {
            var e3;
            n2(72), n2(75), n2(76), n2(101), n2(54), n2(100), n2(121), n2(90), n2(164), n2(115), n2(77), n2(97), n2(123), n2(130), n2(78), n2(119), n2(80), n2(112), n2(99), n2(107), n2(166), n2(174), n2(176), n2(177), n2(178), n2(179), n2(180), n2(181), n2(182), n2(183), n2(184), n2(185), n2(186), n2(187), n2(188), n2(189), n2(190), n2(191), n2(192), n2(193), n2(194), n2(195), n2(196), n2(197), n2(83);
            function r5(t3) {
                return (r5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t6) {
                    return typeof t6;
                } : function(t6) {
                    return t6 && "function" == typeof Symbol && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
                })(t3);
            }
            /*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */ /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */ /*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */ jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : ((function(t3) {
                function e5(t6) {
                    var e15 = t6.length, r23 = n7.type(t6);
                    return "function" !== r23 && !n7.isWindow(t6) && (!(1 !== t6.nodeType || !e15) || "array" === r23 || 0 === e15 || "number" == typeof e15 && e15 > 0 && e15 - 1 in t6);
                }
                if (!t3.jQuery) {
                    var n7 = function t6(e15, n22) {
                        return new t6.fn.init(e15, n22);
                    };
                    n7.isWindow = function(t7) {
                        return null != t7 && t7 == t7.window;
                    }, n7.type = function(t7) {
                        return null == t7 ? t7 + "" : "object" == r5(t7) || "function" == typeof t7 ? o17[s14.call(t7)] || "object" : r5(t7);
                    }, n7.isArray = Array.isArray || function(t7) {
                        return "array" === n7.type(t7);
                    }, n7.isPlainObject = function(t7) {
                        var e15;
                        if (!t7 || "object" !== n7.type(t7) || t7.nodeType || n7.isWindow(t7)) return !1;
                        try {
                            if (t7.constructor && !a19.call(t7, "constructor") && !a19.call(t7.constructor.prototype, "isPrototypeOf")) return !1;
                        } catch (t8) {
                            return !1;
                        }
                        for(e15 in t7);
                        return void 0 === e15 || a19.call(t7, e15);
                    }, n7.each = function(t7, n22, r23) {
                        var i5 = 0, o5 = t7.length, a18 = e5(t7);
                        if (r23) {
                            if (a18) for(; o5 > i5 && !1 !== n22.apply(t7[i5], r23); i5++);
                            else for(i5 in t7)if (!1 === n22.apply(t7[i5], r23)) break;
                        } else if (a18) for(; o5 > i5 && !1 !== n22.call(t7[i5], i5, t7[i5]); i5++);
                        else for(i5 in t7)if (!1 === n22.call(t7[i5], i5, t7[i5])) break;
                        return t7;
                    }, n7.data = function(t7, e15, r23) {
                        if (void 0 === r23) {
                            var o5 = (a18 = t7[n7.expando]) && i5[a18];
                            if (void 0 === e15) return o5;
                            if (o5 && e15 in o5) return o5[e15];
                        } else if (void 0 !== e15) {
                            var a18 = t7[n7.expando] || (t7[n7.expando] = ++n7.uuid);
                            return i5[a18] = i5[a18] || {
                            }, i5[a18][e15] = r23, r23;
                        }
                    }, n7.removeData = function(t7, e15) {
                        var r23 = t7[n7.expando], o16 = r23 && i5[r23];
                        o16 && n7.each(e15, function(t8, e17) {
                            delete o16[e17];
                        });
                    }, n7.extend = function() {
                        var t7, e15, i5, o16, a19, s14, l17 = arguments[0] || {
                        }, u15 = 1, c13 = arguments.length, d10 = !1;
                        for("boolean" == typeof l17 && (d10 = l17, l17 = arguments[u15] || {
                        }, u15++), "object" != r5(l17) && "function" !== n7.type(l17) && (l17 = {
                        }), u15 === c13 && (l17 = this, u15--); c13 > u15; u15++)if (null != (a19 = arguments[u15])) for(o16 in a19)t7 = l17[o16], l17 !== (i5 = a19[o16]) && (d10 && i5 && (n7.isPlainObject(i5) || (e15 = n7.isArray(i5))) ? (e15 ? (e15 = !1, s14 = t7 && n7.isArray(t7) ? t7 : []) : s14 = t7 && n7.isPlainObject(t7) ? t7 : {
                        }, l17[o16] = n7.extend(d10, s14, i5)) : void 0 !== i5 && (l17[o16] = i5));
                        return l17;
                    }, n7.queue = function(t7, r23, i5) {
                        if (t7) {
                            r23 = (r23 || "fx") + "queue";
                            var o16 = n7.data(t7, r23);
                            return i5 ? (!o16 || n7.isArray(i5) ? o16 = n7.data(t7, r23, function(t8, n22) {
                                var r26 = n22 || [];
                                return null != t8 && (e5(Object(t8)) ? (function(t9, e15) {
                                    for(var n25 = +e15.length, r27 = 0, i10 = t9.length; n25 > r27;)t9[i10++] = e15[r27++];
                                    if (n25 != n25) for(; void 0 !== e15[r27];)t9[i10++] = e15[r27++];
                                    t9.length = i10;
                                })(r26, "string" == typeof t8 ? [
                                    t8
                                ] : t8) : [].push.call(r26, t8)), r26;
                            }(i5)) : o16.push(i5), o16) : o16 || [];
                        }
                    }, n7.dequeue = function(t7, e15) {
                        n7.each(t7.nodeType ? [
                            t7
                        ] : t7, function(t8, r23) {
                            e15 = e15 || "fx";
                            var i5 = n7.queue(r23, e15), o17 = i5.shift();
                            "inprogress" === o17 && (o17 = i5.shift()), o17 && ("fx" === e15 && i5.unshift("inprogress"), o17.call(r23, function() {
                                n7.dequeue(r23, e15);
                            }));
                        });
                    }, n7.fn = n7.prototype = {
                        init: function(t7) {
                            if (t7.nodeType) return this[0] = t7, this;
                            throw new Error("Not a DOM node.");
                        },
                        offset: function() {
                            var e15 = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                                top: 0,
                                left: 0
                            };
                            return {
                                top: e15.top + (t3.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                                left: e15.left + (t3.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                            };
                        },
                        position: function() {
                            function t7() {
                                for(var t8 = this.offsetParent || document; t8 && "html" === !t8.nodeType.toLowerCase && "static" === t8.style.position;)t8 = t8.offsetParent;
                                return t8 || document;
                            }
                            var e15 = this[0], t7 = t7.apply(e15), r23 = this.offset(), i5 = /^(?:body|html)$/i.test(t7.nodeName) ? {
                                top: 0,
                                left: 0
                            } : n7(t7).offset();
                            return r23.top -= parseFloat(e15.style.marginTop) || 0, r23.left -= parseFloat(e15.style.marginLeft) || 0, t7.style && (i5.top += parseFloat(t7.style.borderTopWidth) || 0, i5.left += parseFloat(t7.style.borderLeftWidth) || 0), {
                                top: r23.top - i5.top,
                                left: r23.left - i5.left
                            };
                        }
                    };
                    var i5 = {
                    };
                    n7.expando = "velocity" + (new Date).getTime(), n7.uuid = 0;
                    for(var o17 = {
                    }, a19 = o17.hasOwnProperty, s14 = o17.toString, l17 = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u15 = 0; u15 < l17.length; u15++)o17["[object " + l17[u15] + "]"] = l17[u15].toLowerCase();
                    n7.fn.init.prototype = n7.fn, t3.Velocity = {
                        Utilities: n7
                    };
                }
            })(window), e3 = function() {
                return (function(t3, e5, n22, i10) {
                    function o18(t6) {
                        return g2.isWrapped(t6) ? t6 = [].slice.call(t6) : g2.isNode(t6) && (t6 = [
                            t6
                        ]), t6;
                    }
                    function a21(t6) {
                        var e15 = f2.data(t6, "velocity");
                        return null === e15 ? i10 : e15;
                    }
                    function s16(t6) {
                        return function(e15) {
                            return Math.round(e15 * t6) * (1 / t6);
                        };
                    }
                    function l18(t6, n25, r23, i23) {
                        function o19(t7, e15) {
                            return 1 - 3 * e15 + 3 * t7;
                        }
                        function a22(t7, e15) {
                            return 3 * e15 - 6 * t7;
                        }
                        function s17(t7) {
                            return 3 * t7;
                        }
                        function l20(t7, e15, n26) {
                            return ((o19(e15, n26) * t7 + a22(e15, n26)) * t7 + s17(e15)) * t7;
                        }
                        function u18(t7, e15, n26) {
                            return 3 * o19(e15, n26) * t7 * t7 + 2 * a22(e15, n26) * t7 + s17(e15);
                        }
                        function c13(e15, n26) {
                            for(var i25 = 0; h7 > i25; ++i25){
                                var o20 = u18(n26, t6, r23);
                                if (0 === o20) return n26;
                                n26 -= (l20(n26, t6, r23) - e15) / o20;
                            }
                            return n26;
                        }
                        function d10(e15, n26, i25) {
                            var o21, a23, s18 = 0;
                            do {
                                (o21 = l20(a23 = n26 + (i25 - n26) / 2, t6, r23) - e15) > 0 ? i25 = a23 : n26 = a23;
                            }while (Math.abs(o21) > g2 && ++s18 < v2)
                            return a23;
                        }
                        function f2() {
                            S5 = !0, (t6 != n25 || r23 != i23) && (function() {
                                for(var e15 = 0; m9 > e15; ++e15)w[e15] = l20(e15 * y7, t6, r23);
                            })();
                        }
                        var h7 = 4, p2 = 0.001, g2 = 0.0000001, v2 = 10, m9 = 11, y7 = 1 / (m9 - 1), b7 = "Float32Array" in e5;
                        if (4 !== arguments.length) return !1;
                        for(var x5 = 0; 4 > x5; ++x5)if ("number" != typeof arguments[x5] || isNaN(arguments[x5]) || !isFinite(arguments[x5])) return !1;
                        t6 = Math.min(t6, 1), r23 = Math.min(r23, 1), t6 = Math.max(t6, 0), r23 = Math.max(r23, 0);
                        var w = b7 ? new Float32Array(m9) : new Array(m9), S5 = !1, k5 = function(e15) {
                            return S5 || f2(), t6 === n25 && r23 === i23 ? e15 : 0 === e15 ? 0 : 1 === e15 ? 1 : l20(function(e17) {
                                for(var n26 = 0, i25 = 1, o21 = m9 - 1; i25 != o21 && w[i25] <= e17; ++i25)n26 += y7;
                                var a23 = n26 + (e17 - w[--i25]) / (w[i25 + 1] - w[i25]) * y7, s18 = u18(a23, t6, r23);
                                return s18 >= p2 ? c13(e17, a23) : 0 == s18 ? a23 : d10(e17, n26, n26 + y7);
                            }(e15), n25, i23);
                        };
                        k5.getControlPoints = function() {
                            return [
                                {
                                    x: t6,
                                    y: n25
                                },
                                {
                                    x: r23,
                                    y: i23
                                }
                            ];
                        };
                        var C3 = "generateBezier(" + [
                            t6,
                            n25,
                            r23,
                            i23
                        ] + ")";
                        return k5.toString = function() {
                            return C3;
                        }, k5;
                    }
                    function u18(t6, e15) {
                        var n25 = t6;
                        return g2.isString(t6) ? b7.Easings[t6] || (n25 = !1) : n25 = g2.isArray(t6) && 1 === t6.length ? s16.apply(null, t6) : g2.isArray(t6) && 2 === t6.length ? x6.apply(null, t6.concat([
                            e15
                        ])) : !(!g2.isArray(t6) || 4 !== t6.length) && l18.apply(null, t6), !1 === n25 && (n25 = b7.Easings[b7.defaults.easing] ? b7.defaults.easing : y8), n25;
                    }
                    function c13(t6) {
                        if (t6) {
                            var e15 = (new Date).getTime(), n25 = b7.State.calls.length;
                            n25 > 10000 && (b7.State.calls = (function(t7) {
                                for(var e17 = -1, n26 = t7 ? t7.length : 0, r23 = []; ++e17 < n26;){
                                    var i23 = t7[e17];
                                    i23 && r23.push(i23);
                                }
                                return r23;
                            })(b7.State.calls));
                            for(var r23 = 0; n25 > r23; r23++)if (b7.State.calls[r23]) {
                                var o19 = b7.State.calls[r23], s17 = o19[0], l20 = o19[2], u19 = o19[3], h7 = !!u19, p2 = null;
                                u19 || (u19 = b7.State.calls[r23][3] = e15 - 16);
                                for(var v2 = Math.min((e15 - u19) / l20.duration, 1), m9 = 0, y7 = s17.length; y7 > m9; m9++){
                                    var x5 = s17[m9], S5 = x5.element;
                                    if (a21(S5)) {
                                        var C3 = !1;
                                        for(var M in l20.display !== i10 && null !== l20.display && "none" !== l20.display && ("flex" === l20.display && f2.each([
                                            "-webkit-box",
                                            "-moz-box",
                                            "-ms-flexbox",
                                            "-webkit-flex"
                                        ], function(t7, e17) {
                                            w.setPropertyValue(S5, "display", e17);
                                        }), w.setPropertyValue(S5, "display", l20.display)), l20.visibility !== i10 && "hidden" !== l20.visibility && w.setPropertyValue(S5, "visibility", l20.visibility), x5)if ("element" !== M) {
                                            var A, P = x5[M], _ = g2.isString(P.easing) ? b7.Easings[P.easing] : P.easing;
                                            if (1 === v2) A = P.endValue;
                                            else {
                                                var T = P.endValue - P.startValue;
                                                if (A = P.startValue + T * _(v2, l20, T), !h7 && A === P.currentValue) continue;
                                            }
                                            if (P.currentValue = A, "tween" === M) p2 = A;
                                            else {
                                                if (w.Hooks.registered[M]) {
                                                    var I = w.Hooks.getRoot(M), O = a21(S5).rootPropertyValueCache[I];
                                                    O && (P.rootPropertyValue = O);
                                                }
                                                var F = w.setPropertyValue(S5, M, P.currentValue + (0 === parseFloat(A) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                w.Hooks.registered[M] && (a21(S5).rootPropertyValueCache[I] = w.Normalizations.registered[I] ? w.Normalizations.registered[I]("extract", null, F[1]) : F[1]), "transform" === F[0] && (C3 = !0);
                                            }
                                        }
                                        l20.mobileHA && a21(S5).transformCache.translate3d === i10 && (a21(S5).transformCache.translate3d = "(0px, 0px, 0px)", C3 = !0), C3 && w.flushTransformCache(S5);
                                    }
                                }
                                l20.display !== i10 && "none" !== l20.display && (b7.State.calls[r23][2].display = !1), l20.visibility !== i10 && "hidden" !== l20.visibility && (b7.State.calls[r23][2].visibility = !1), l20.progress && l20.progress.call(o19[1], o19[1], v2, Math.max(0, u19 + l20.duration - e15), u19, p2), 1 === v2 && d10(r23);
                            }
                        }
                        b7.State.isTicking && k6(c13);
                    }
                    function d10(t6, e17) {
                        if (!b7.State.calls[t6]) return !1;
                        for(var n26 = b7.State.calls[t6][0], r26 = b7.State.calls[t6][1], o21 = b7.State.calls[t6][2], s18 = b7.State.calls[t6][4], l21 = !1, u20 = 0, c15 = n26.length; c15 > u20; u20++){
                            var d12 = n26[u20].element;
                            if (e17 || o21.loop || ("none" === o21.display && w.setPropertyValue(d12, "display", o21.display), "hidden" === o21.visibility && w.setPropertyValue(d12, "visibility", o21.visibility)), !0 !== o21.loop && (f2.queue(d12)[1] === i10 || !/\.velocityQueueEntryFlag/i.test(f2.queue(d12)[1])) && a21(d12)) {
                                a21(d12).isAnimating = !1, a21(d12).rootPropertyValueCache = {
                                };
                                var h9 = !1;
                                f2.each(w.Lists.transforms3D, function(t7, e18) {
                                    var n27 = /^scale/.test(e18) ? 1 : 0, r27 = a21(d12).transformCache[e18];
                                    a21(d12).transformCache[e18] !== i10 && new RegExp("^\\(" + n27 + "[^.]").test(r27) && (h9 = !0, delete a21(d12).transformCache[e18]);
                                }), o21.mobileHA && (h9 = !0, delete a21(d12).transformCache.translate3d), h9 && w.flushTransformCache(d12), w.Values.removeClass(d12, "velocity-animating");
                            }
                            if (!e17 && o21.complete && !o21.loop && u20 === c15 - 1) try {
                                o21.complete.call(r26, r26);
                            } catch (t7) {
                                setTimeout(function() {
                                    throw t7;
                                }, 1);
                            }
                            s18 && !0 !== o21.loop && s18(r26), a21(d12) && !0 === o21.loop && !e17 && (f2.each(a21(d12).tweensContainer, function(t7, e18) {
                                /^rotate/.test(t7) && 360 === parseFloat(e18.endValue) && (e18.endValue = 0, e18.startValue = 360), /^backgroundPosition/.test(t7) && 100 === parseFloat(e18.endValue) && "%" === e18.unitType && (e18.endValue = 0, e18.startValue = 100);
                            }), b7(d12, "reverse", {
                                loop: !0,
                                delay: o21.delay
                            })), !1 !== o21.queue && f2.dequeue(d12, o21.queue);
                        }
                        b7.State.calls[t6] = !1;
                        for(var p3 = 0, g2 = b7.State.calls.length; g2 > p3; p3++)if (!1 !== b7.State.calls[p3]) {
                            l21 = !0;
                            break;
                        }
                        !1 === l21 && (b7.State.isTicking = !1, delete b7.State.calls, b7.State.calls = []);
                    }
                    var f2, h10 = function() {
                        if (n22.documentMode) return n22.documentMode;
                        for(var t6 = 7; t6 > 4; t6--){
                            var e17 = n22.createElement("div");
                            if (e17.innerHTML = "\x3c!--[if IE " + t6 + "]><span></span><![endif]--\x3e", e17.getElementsByTagName("span").length) return e17 = null, t6;
                        }
                        return i10;
                    }(), p3 = function() {
                        var t6 = 0;
                        return e5.webkitRequestAnimationFrame || e5.mozRequestAnimationFrame || function(e18) {
                            var n26, r26 = (new Date).getTime();
                            return n26 = Math.max(0, 16 - (r26 - t6)), t6 = r26 + n26, setTimeout(function() {
                                e18(r26 + n26);
                            }, n26);
                        };
                    }(), g2 = {
                        isString: function(t6) {
                            return "string" == typeof t6;
                        },
                        isArray: Array.isArray || function(t6) {
                            return "[object Array]" === Object.prototype.toString.call(t6);
                        },
                        isFunction: function(t6) {
                            return "[object Function]" === Object.prototype.toString.call(t6);
                        },
                        isNode: function(t6) {
                            return t6 && t6.nodeType;
                        },
                        isNodeList: function(t6) {
                            return "object" == r5(t6) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t6)) && t6.length !== i10 && (0 === t6.length || "object" == r5(t6[0]) && t6[0].nodeType > 0);
                        },
                        isWrapped: function(t6) {
                            return t6 && (t6.jquery || e5.Zepto && e5.Zepto.zepto.isZ(t6));
                        },
                        isSVG: function(t6) {
                            return e5.SVGElement && t6 instanceof e5.SVGElement;
                        },
                        isEmptyObject: function(t6) {
                            for(var e18 in t6)return !1;
                            return !0;
                        }
                    }, v3 = !1;
                    if (t3.fn && t3.fn.jquery ? (f2 = t3, v3 = !0) : f2 = e5.Velocity.Utilities, 8 >= h10 && !v3) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                    if (!(7 >= h10)) {
                        var m10 = 400, y8 = "swing", b7 = {
                            State: {
                                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                isAndroid: /Android/i.test(navigator.userAgent),
                                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                                isChrome: e5.chrome,
                                isFirefox: /Firefox/i.test(navigator.userAgent),
                                prefixElement: n22.createElement("div"),
                                prefixMatches: {
                                },
                                scrollAnchor: null,
                                scrollPropertyLeft: null,
                                scrollPropertyTop: null,
                                isTicking: !1,
                                calls: []
                            },
                            CSS: {
                            },
                            Utilities: f2,
                            Redirects: {
                            },
                            Easings: {
                            },
                            Promise: e5.Promise,
                            defaults: {
                                queue: "",
                                duration: m10,
                                easing: y8,
                                begin: i10,
                                complete: i10,
                                progress: i10,
                                display: i10,
                                visibility: i10,
                                loop: !1,
                                delay: !1,
                                mobileHA: !0,
                                _cacheValues: !0
                            },
                            init: function(t6) {
                                f2.data(t6, "velocity", {
                                    isSVG: g2.isSVG(t6),
                                    isAnimating: !1,
                                    computedStyle: null,
                                    tweensContainer: null,
                                    rootPropertyValueCache: {
                                    },
                                    transformCache: {
                                    }
                                });
                            },
                            hook: null,
                            mock: !1,
                            version: {
                                major: 1,
                                minor: 2,
                                patch: 2
                            },
                            debug: !1
                        };
                        e5.pageYOffset !== i10 ? (b7.State.scrollAnchor = e5, b7.State.scrollPropertyLeft = "pageXOffset", b7.State.scrollPropertyTop = "pageYOffset") : (b7.State.scrollAnchor = n22.documentElement || n22.body.parentNode || n22.body, b7.State.scrollPropertyLeft = "scrollLeft", b7.State.scrollPropertyTop = "scrollTop");
                        var x6 = function() {
                            function t6(t7) {
                                return -t7.tension * t7.x - t7.friction * t7.v;
                            }
                            function e18(e19, n26, r26) {
                                var i25 = {
                                    x: e19.x + r26.dx * n26,
                                    v: e19.v + r26.dv * n26,
                                    tension: e19.tension,
                                    friction: e19.friction
                                };
                                return {
                                    dx: i25.v,
                                    dv: t6(i25)
                                };
                            }
                            function n26(n27, r26) {
                                var i25 = {
                                    dx: n27.v,
                                    dv: t6(n27)
                                }, o21 = e18(n27, 0.5 * r26, i25), a22 = e18(n27, 0.5 * r26, o21), s18 = e18(n27, r26, a22), l21 = 1 / 6 * (i25.dx + 2 * (o21.dx + a22.dx) + s18.dx), u20 = 1 / 6 * (i25.dv + 2 * (o21.dv + a22.dv) + s18.dv);
                                return n27.x = n27.x + l21 * r26, n27.v = n27.v + u20 * r26, n27;
                            }
                            return function t7(e19, r26, i25) {
                                var o21, a22, s18, l21 = {
                                    x: -1,
                                    v: 0,
                                    tension: null,
                                    friction: null
                                }, u20 = [
                                    0
                                ], c15 = 0;
                                for(e19 = parseFloat(e19) || 500, r26 = parseFloat(r26) || 20, i25 = i25 || null, l21.tension = e19, l21.friction = r26, a22 = (o21 = null !== i25) ? (c15 = t7(e19, r26)) / i25 * 0.016 : 0.016; s18 = n26(s18 || l21, a22), u20.push(1 + s18.x), c15 += 16, Math.abs(s18.x) > 0.0001 && Math.abs(s18.v) > 0.0001;);
                                return o21 ? function(t8) {
                                    return u20[t8 * (u20.length - 1) | 0];
                                } : c15;
                            };
                        }();
                        b7.Easings = {
                            linear: function(t6) {
                                return t6;
                            },
                            swing: function(t6) {
                                return 0.5 - Math.cos(t6 * Math.PI) / 2;
                            },
                            spring: function(t6) {
                                return 1 - Math.cos(4.5 * t6 * Math.PI) * Math.exp(6 * -t6);
                            }
                        }, f2.each([
                            [
                                "ease",
                                [
                                    0.25,
                                    0.1,
                                    0.25,
                                    1
                                ]
                            ],
                            [
                                "ease-in",
                                [
                                    0.42,
                                    0,
                                    1,
                                    1
                                ]
                            ],
                            [
                                "ease-out",
                                [
                                    0,
                                    0,
                                    0.58,
                                    1
                                ]
                            ],
                            [
                                "ease-in-out",
                                [
                                    0.42,
                                    0,
                                    0.58,
                                    1
                                ]
                            ],
                            [
                                "easeInSine",
                                [
                                    0.47,
                                    0,
                                    0.745,
                                    0.715
                                ]
                            ],
                            [
                                "easeOutSine",
                                [
                                    0.39,
                                    0.575,
                                    0.565,
                                    1
                                ]
                            ],
                            [
                                "easeInOutSine",
                                [
                                    0.445,
                                    0.05,
                                    0.55,
                                    0.95
                                ]
                            ],
                            [
                                "easeInQuad",
                                [
                                    0.55,
                                    0.085,
                                    0.68,
                                    0.53
                                ]
                            ],
                            [
                                "easeOutQuad",
                                [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ]
                            ],
                            [
                                "easeInOutQuad",
                                [
                                    0.455,
                                    0.03,
                                    0.515,
                                    0.955
                                ]
                            ],
                            [
                                "easeInCubic",
                                [
                                    0.55,
                                    0.055,
                                    0.675,
                                    0.19
                                ]
                            ],
                            [
                                "easeOutCubic",
                                [
                                    0.215,
                                    0.61,
                                    0.355,
                                    1
                                ]
                            ],
                            [
                                "easeInOutCubic",
                                [
                                    0.645,
                                    0.045,
                                    0.355,
                                    1
                                ]
                            ],
                            [
                                "easeInQuart",
                                [
                                    0.895,
                                    0.03,
                                    0.685,
                                    0.22
                                ]
                            ],
                            [
                                "easeOutQuart",
                                [
                                    0.165,
                                    0.84,
                                    0.44,
                                    1
                                ]
                            ],
                            [
                                "easeInOutQuart",
                                [
                                    0.77,
                                    0,
                                    0.175,
                                    1
                                ]
                            ],
                            [
                                "easeInQuint",
                                [
                                    0.755,
                                    0.05,
                                    0.855,
                                    0.06
                                ]
                            ],
                            [
                                "easeOutQuint",
                                [
                                    0.23,
                                    1,
                                    0.32,
                                    1
                                ]
                            ],
                            [
                                "easeInOutQuint",
                                [
                                    0.86,
                                    0,
                                    0.07,
                                    1
                                ]
                            ],
                            [
                                "easeInExpo",
                                [
                                    0.95,
                                    0.05,
                                    0.795,
                                    0.035
                                ]
                            ],
                            [
                                "easeOutExpo",
                                [
                                    0.19,
                                    1,
                                    0.22,
                                    1
                                ]
                            ],
                            [
                                "easeInOutExpo",
                                [
                                    1,
                                    0,
                                    0,
                                    1
                                ]
                            ],
                            [
                                "easeInCirc",
                                [
                                    0.6,
                                    0.04,
                                    0.98,
                                    0.335
                                ]
                            ],
                            [
                                "easeOutCirc",
                                [
                                    0.075,
                                    0.82,
                                    0.165,
                                    1
                                ]
                            ],
                            [
                                "easeInOutCirc",
                                [
                                    0.785,
                                    0.135,
                                    0.15,
                                    0.86
                                ]
                            ]
                        ], function(t6, e18) {
                            b7.Easings[e18[0]] = l18.apply(null, e18[1]);
                        });
                        var w = b7.CSS = {
                            RegEx: {
                                isHex: /^#([A-f\d]{3}){1,2}$/i,
                                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                            },
                            Lists: {
                                colors: [
                                    "fill",
                                    "stroke",
                                    "stopColor",
                                    "color",
                                    "backgroundColor",
                                    "borderColor",
                                    "borderTopColor",
                                    "borderRightColor",
                                    "borderBottomColor",
                                    "borderLeftColor",
                                    "outlineColor"
                                ],
                                transformsBase: [
                                    "translateX",
                                    "translateY",
                                    "scale",
                                    "scaleX",
                                    "scaleY",
                                    "skewX",
                                    "skewY",
                                    "rotateZ"
                                ],
                                transforms3D: [
                                    "transformPerspective",
                                    "translateZ",
                                    "scaleZ",
                                    "rotateX",
                                    "rotateY"
                                ]
                            },
                            Hooks: {
                                templates: {
                                    textShadow: [
                                        "Color X Y Blur",
                                        "black 0px 0px 0px"
                                    ],
                                    boxShadow: [
                                        "Color X Y Blur Spread",
                                        "black 0px 0px 0px 0px"
                                    ],
                                    clip: [
                                        "Top Right Bottom Left",
                                        "0px 0px 0px 0px"
                                    ],
                                    backgroundPosition: [
                                        "X Y",
                                        "0% 0%"
                                    ],
                                    transformOrigin: [
                                        "X Y Z",
                                        "50% 50% 0px"
                                    ],
                                    perspectiveOrigin: [
                                        "X Y",
                                        "50% 50%"
                                    ]
                                },
                                registered: {
                                },
                                register: function() {
                                    for(var t6 = 0; t6 < w.Lists.colors.length; t6++){
                                        var e18 = "color" === w.Lists.colors[t6] ? "0 0 0 1" : "255 255 255 1";
                                        w.Hooks.templates[w.Lists.colors[t6]] = [
                                            "Red Green Blue Alpha",
                                            e18
                                        ];
                                    }
                                    var n26, r26, i25;
                                    if (h10) for(n26 in w.Hooks.templates){
                                        i25 = (r26 = w.Hooks.templates[n26])[0].split(" ");
                                        var o21 = r26[1].match(w.RegEx.valueSplit);
                                        "Color" === i25[0] && (i25.push(i25.shift()), o21.push(o21.shift()), w.Hooks.templates[n26] = [
                                            i25.join(" "),
                                            o21.join(" ")
                                        ]);
                                    }
                                    for(n26 in w.Hooks.templates)for(var t6 in i25 = (r26 = w.Hooks.templates[n26])[0].split(" ")){
                                        var a22 = n26 + i25[t6], s18 = t6;
                                        w.Hooks.registered[a22] = [
                                            n26,
                                            s18
                                        ];
                                    }
                                },
                                getRoot: function(t6) {
                                    var e19 = w.Hooks.registered[t6];
                                    return e19 ? e19[0] : t6;
                                },
                                cleanRootPropertyValue: function(t6, e19) {
                                    return w.RegEx.valueUnwrap.test(e19) && (e19 = e19.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e19) && (e19 = w.Hooks.templates[t6][1]), e19;
                                },
                                extractValue: function(t6, e19) {
                                    var n26 = w.Hooks.registered[t6];
                                    if (n26) {
                                        var r26 = n26[0], i25 = n26[1];
                                        return (e19 = w.Hooks.cleanRootPropertyValue(r26, e19)).toString().match(w.RegEx.valueSplit)[i25];
                                    }
                                    return e19;
                                },
                                injectValue: function(t6, e19, n26) {
                                    var r27 = w.Hooks.registered[t6];
                                    if (r27) {
                                        var i26, o22 = r27[0], a23 = r27[1];
                                        return (i26 = (n26 = w.Hooks.cleanRootPropertyValue(o22, n26)).toString().match(w.RegEx.valueSplit))[a23] = e19, i26.join(" ");
                                    }
                                    return n26;
                                }
                            },
                            Normalizations: {
                                registered: {
                                    clip: function(t6, e19, n26) {
                                        switch(t6){
                                            case "name":
                                                return "clip";
                                            case "extract":
                                                var r27;
                                                return r27 = w.RegEx.wrappedValueAlreadyExtracted.test(n26) ? n26 : (r27 = n26.toString().match(w.RegEx.valueUnwrap)) ? r27[1].replace(/,(\s+)?/g, " ") : n26;
                                            case "inject":
                                                return "rect(" + n26 + ")";
                                        }
                                    },
                                    blur: function(t6, e19, n26) {
                                        switch(t6){
                                            case "name":
                                                return b7.State.isFirefox ? "filter" : "-webkit-filter";
                                            case "extract":
                                                var r27 = parseFloat(n26);
                                                if (!r27 && 0 !== r27) {
                                                    var i27 = n26.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                    r27 = i27 ? i27[1] : 0;
                                                }
                                                return r27;
                                            case "inject":
                                                return parseFloat(n26) ? "blur(" + n26 + ")" : "none";
                                        }
                                    },
                                    opacity: function(t6, e19, n26) {
                                        if (8 >= h10) switch(t6){
                                            case "name":
                                                return "filter";
                                            case "extract":
                                                var r27 = n26.toString().match(/alpha\(opacity=(.*)\)/i);
                                                return r27 ? r27[1] / 100 : 1;
                                            case "inject":
                                                return e19.style.zoom = 1, parseFloat(n26) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n26), 10) + ")";
                                        }
                                        else switch(t6){
                                            case "name":
                                                return "opacity";
                                            case "extract":
                                            case "inject":
                                                return n26;
                                        }
                                    }
                                },
                                register: function() {
                                    9 >= h10 || b7.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                                    for(var t6 = 0; t6 < w.Lists.transformsBase.length; t6++)!function() {
                                        var e19 = w.Lists.transformsBase[t6];
                                        w.Normalizations.registered[e19] = function(t7, n26, r27) {
                                            switch(t7){
                                                case "name":
                                                    return "transform";
                                                case "extract":
                                                    return a21(n26) === i10 || a21(n26).transformCache[e19] === i10 ? /^scale/i.test(e19) ? 1 : 0 : a21(n26).transformCache[e19].replace(/[()]/g, "");
                                                case "inject":
                                                    var o23 = !1;
                                                    switch(e19.substr(0, e19.length - 1)){
                                                        case "translate":
                                                            o23 = !/(%|px|em|rem|vw|vh|\d)$/i.test(r27);
                                                            break;
                                                        case "scal":
                                                        case "scale":
                                                            b7.State.isAndroid && a21(n26).transformCache[e19] === i10 && 1 > r27 && (r27 = 1), o23 = !/(\d)$/i.test(r27);
                                                            break;
                                                        case "skew":
                                                            o23 = !/(deg|\d)$/i.test(r27);
                                                            break;
                                                        case "rotate":
                                                            o23 = !/(deg|\d)$/i.test(r27);
                                                    }
                                                    return o23 || (a21(n26).transformCache[e19] = "(" + r27 + ")"), a21(n26).transformCache[e19];
                                            }
                                        };
                                    }();
                                    for(t6 = 0; t6 < w.Lists.colors.length; t6++)!function() {
                                        var e19 = w.Lists.colors[t6];
                                        w.Normalizations.registered[e19] = function(t7, n26, r27) {
                                            switch(t7){
                                                case "name":
                                                    return e19;
                                                case "extract":
                                                    var o23;
                                                    if (w.RegEx.wrappedValueAlreadyExtracted.test(r27)) o23 = r27;
                                                    else {
                                                        var a24, s19 = {
                                                            black: "rgb(0, 0, 0)",
                                                            blue: "rgb(0, 0, 255)",
                                                            gray: "rgb(128, 128, 128)",
                                                            green: "rgb(0, 128, 0)",
                                                            red: "rgb(255, 0, 0)",
                                                            white: "rgb(255, 255, 255)"
                                                        };
                                                        /^[A-z]+$/i.test(r27) ? a24 = s19[r27] !== i10 ? s19[r27] : s19.black : w.RegEx.isHex.test(r27) ? a24 = "rgb(" + w.Values.hexToRgb(r27).join(" ") + ")" : /^rgba?\(/i.test(r27) || (a24 = s19.black), o23 = (a24 || r27).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                                    }
                                                    return 8 >= h10 || 3 !== o23.split(" ").length || (o23 += " 1"), o23;
                                                case "inject":
                                                    return 8 >= h10 ? 4 === r27.split(" ").length && (r27 = r27.split(/\s+/).slice(0, 3).join(" ")) : 3 === r27.split(" ").length && (r27 += " 1"), (8 >= h10 ? "rgb" : "rgba") + "(" + r27.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                                            }
                                        };
                                    }();
                                }
                            },
                            Names: {
                                camelCase: function(t6) {
                                    return t6.replace(/-(\w)/g, function(t7, e19) {
                                        return e19.toUpperCase();
                                    });
                                },
                                SVGAttribute: function(t6) {
                                    var e19 = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                    return (h10 || b7.State.isAndroid && !b7.State.isChrome) && (e19 += "|transform"), new RegExp("^(" + e19 + ")$", "i").test(t6);
                                },
                                prefixCheck: function(t6) {
                                    if (b7.State.prefixMatches[t6]) return [
                                        b7.State.prefixMatches[t6],
                                        !0
                                    ];
                                    for(var e19 = [
                                        "",
                                        "Webkit",
                                        "Moz",
                                        "ms",
                                        "O"
                                    ], n26 = 0, r27 = e19.length; r27 > n26; n26++){
                                        var i28;
                                        if (i28 = 0 === n26 ? t6 : e19[n26] + t6.replace(/^\w/, function(t7) {
                                            return t7.toUpperCase();
                                        }), g2.isString(b7.State.prefixElement.style[i28])) return b7.State.prefixMatches[t6] = i28, [
                                            i28,
                                            !0
                                        ];
                                    }
                                    return [
                                        t6,
                                        !1
                                    ];
                                }
                            },
                            Values: {
                                hexToRgb: function(t6) {
                                    var e19;
                                    return t6 = t6.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t7, e20, n26, r27) {
                                        return e20 + e20 + n26 + n26 + r27 + r27;
                                    }), (e19 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t6)) ? [
                                        parseInt(e19[1], 16),
                                        parseInt(e19[2], 16),
                                        parseInt(e19[3], 16)
                                    ] : [
                                        0,
                                        0,
                                        0
                                    ];
                                },
                                isCSSNullValue: function(t6) {
                                    return 0 == t6 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t6);
                                },
                                getUnitType: function(t6) {
                                    return /^(rotate|skew)/i.test(t6) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t6) ? "" : "px";
                                },
                                getDisplayType: function(t6) {
                                    var e19 = t6 && t6.tagName.toString().toLowerCase();
                                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e19) ? "inline" : /^(li)$/i.test(e19) ? "list-item" : /^(tr)$/i.test(e19) ? "table-row" : /^(table)$/i.test(e19) ? "table" : /^(tbody)$/i.test(e19) ? "table-row-group" : "block";
                                },
                                addClass: function(t6, e19) {
                                    t6.classList ? t6.classList.add(e19) : t6.className += (t6.className.length ? " " : "") + e19;
                                },
                                removeClass: function(t6, e19) {
                                    t6.classList ? t6.classList.remove(e19) : t6.className = t6.className.toString().replace(new RegExp("(^|\\s)" + e19.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                                }
                            },
                            getPropertyValue: function(t6, n26, r27, o23) {
                                function s20(t7, n27) {
                                    function r28() {
                                        c15 && w.setPropertyValue(t7, "display", "none");
                                    }
                                    var l21 = 0;
                                    if (8 >= h10) l21 = f2.css(t7, n27);
                                    else {
                                        var u20, c15 = !1;
                                        if (/^(width|height)$/.test(n27) && 0 === w.getPropertyValue(t7, "display") && (c15 = !0, w.setPropertyValue(t7, "display", w.Values.getDisplayType(t7))), !o23) {
                                            if ("height" === n27 && "border-box" !== w.getPropertyValue(t7, "boxSizing").toString().toLowerCase()) {
                                                var d13 = t7.offsetHeight - (parseFloat(w.getPropertyValue(t7, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t7, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t7, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t7, "paddingBottom")) || 0);
                                                return r28(), d13;
                                            }
                                            if ("width" === n27 && "border-box" !== w.getPropertyValue(t7, "boxSizing").toString().toLowerCase()) {
                                                var p4 = t7.offsetWidth - (parseFloat(w.getPropertyValue(t7, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t7, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t7, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t7, "paddingRight")) || 0);
                                                return r28(), p4;
                                            }
                                        }
                                        u20 = a21(t7) === i10 ? e5.getComputedStyle(t7, null) : a21(t7).computedStyle ? a21(t7).computedStyle : a21(t7).computedStyle = e5.getComputedStyle(t7, null), "borderColor" === n27 && (n27 = "borderTopColor"), ("" === (l21 = 9 === h10 && "filter" === n27 ? u20.getPropertyValue(n27) : u20[n27]) || null === l21) && (l21 = t7.style[n27]), r28();
                                    }
                                    if ("auto" === l21 && /^(top|right|bottom|left)$/i.test(n27)) {
                                        var g3 = s20(t7, "position");
                                        ("fixed" === g3 || "absolute" === g3 && /top|left/i.test(n27)) && (l21 = f2(t7).position()[n27] + "px");
                                    }
                                    return l21;
                                }
                                var l21;
                                if (w.Hooks.registered[n26]) {
                                    var u21 = n26, c16 = w.Hooks.getRoot(u21);
                                    r27 === i10 && (r27 = w.getPropertyValue(t6, w.Names.prefixCheck(c16)[0])), w.Normalizations.registered[c16] && (r27 = w.Normalizations.registered[c16]("extract", t6, r27)), l21 = w.Hooks.extractValue(u21, r27);
                                } else if (w.Normalizations.registered[n26]) {
                                    var d14, p5;
                                    "transform" !== (d14 = w.Normalizations.registered[n26]("name", t6)) && (p5 = s20(t6, w.Names.prefixCheck(d14)[0]), w.Values.isCSSNullValue(p5) && w.Hooks.templates[n26] && (p5 = w.Hooks.templates[n26][1])), l21 = w.Normalizations.registered[n26]("extract", t6, p5);
                                }
                                if (!/^[\d-]/.test(l21)) if (a21(t6) && a21(t6).isSVG && w.Names.SVGAttribute(n26)) if (/^(height|width)$/i.test(n26)) try {
                                    l21 = t6.getBBox()[n26];
                                } catch (t7) {
                                    l21 = 0;
                                }
                                else l21 = t6.getAttribute(n26);
                                else l21 = s20(t6, w.Names.prefixCheck(n26)[0]);
                                return w.Values.isCSSNullValue(l21) && (l21 = 0), b7.debug >= 2 && console.log("Get " + n26 + ": " + l21), l21;
                            },
                            setPropertyValue: function(t6, n26, r27, i29, o23) {
                                var s20 = n26;
                                if ("scroll" === n26) o23.container ? o23.container["scroll" + o23.direction] = r27 : "Left" === o23.direction ? e5.scrollTo(r27, o23.alternateValue) : e5.scrollTo(o23.alternateValue, r27);
                                else if (w.Normalizations.registered[n26] && "transform" === w.Normalizations.registered[n26]("name", t6)) w.Normalizations.registered[n26]("inject", t6, r27), s20 = "transform", r27 = a21(t6).transformCache[n26];
                                else {
                                    if (w.Hooks.registered[n26]) {
                                        var l21 = n26, u22 = w.Hooks.getRoot(n26);
                                        i29 = i29 || w.getPropertyValue(t6, u22), r27 = w.Hooks.injectValue(l21, r27, i29), n26 = u22;
                                    }
                                    if (w.Normalizations.registered[n26] && (r27 = w.Normalizations.registered[n26]("inject", t6, r27), n26 = w.Normalizations.registered[n26]("name", t6)), s20 = w.Names.prefixCheck(n26)[0], 8 >= h10) try {
                                        t6.style[s20] = r27;
                                    } catch (t7) {
                                        b7.debug && console.log("Browser does not support [" + r27 + "] for [" + s20 + "]");
                                    }
                                    else a21(t6) && a21(t6).isSVG && w.Names.SVGAttribute(n26) ? t6.setAttribute(n26, r27) : t6.style[s20] = r27;
                                    b7.debug >= 2 && console.log("Set " + n26 + " (" + s20 + "): " + r27);
                                }
                                return [
                                    s20,
                                    r27
                                ];
                            },
                            flushTransformCache: function(t6) {
                                function e19(e20) {
                                    return parseFloat(w.getPropertyValue(t6, e20));
                                }
                                var n26 = "";
                                if ((h10 || b7.State.isAndroid && !b7.State.isChrome) && a21(t6).isSVG) {
                                    var r27 = {
                                        translate: [
                                            e19("translateX"),
                                            e19("translateY")
                                        ],
                                        skewX: [
                                            e19("skewX")
                                        ],
                                        skewY: [
                                            e19("skewY")
                                        ],
                                        scale: 1 !== e19("scale") ? [
                                            e19("scale"),
                                            e19("scale")
                                        ] : [
                                            e19("scaleX"),
                                            e19("scaleY")
                                        ],
                                        rotate: [
                                            e19("rotateZ"),
                                            0,
                                            0
                                        ]
                                    };
                                    f2.each(a21(t6).transformCache, function(t7) {
                                        /^translate/i.test(t7) ? t7 = "translate" : /^scale/i.test(t7) ? t7 = "scale" : /^rotate/i.test(t7) && (t7 = "rotate"), r27[t7] && (n26 += t7 + "(" + r27[t7].join(" ") + ") ", delete r27[t7]);
                                    });
                                } else {
                                    var i29, o23;
                                    f2.each(a21(t6).transformCache, function(e20) {
                                        return i29 = a21(t6).transformCache[e20], "transformPerspective" === e20 ? (o23 = i29, !0) : (9 === h10 && "rotateZ" === e20 && (e20 = "rotate"), void (n26 += e20 + i29 + " "));
                                    }), o23 && (n26 = "perspective" + o23 + " " + n26);
                                }
                                w.setPropertyValue(t6, "transform", n26);
                            }
                        };
                        w.Hooks.register(), w.Normalizations.register(), b7.hook = function(t6, e19, n26) {
                            var r28 = i10;
                            return t6 = o18(t6), f2.each(t6, function(t7, o24) {
                                if (a21(o24) === i10 && b7.init(o24), n26 === i10) r28 === i10 && (r28 = b7.CSS.getPropertyValue(o24, e19));
                                else {
                                    var s20 = b7.CSS.setPropertyValue(o24, e19, n26);
                                    "transform" === s20[0] && b7.CSS.flushTransformCache(o24), r28 = s20;
                                }
                            }), r28;
                        };
                        var S6 = function t6() {
                            function r28() {
                                return l23 ? _.promise || null : h11;
                            }
                            function s21() {
                                function t7(t8) {
                                    function d15(t9, e19) {
                                        var n26 = i10, r29 = i10, a25 = i10;
                                        return g2.isArray(t9) ? (n26 = t9[0], !g2.isArray(t9[1]) && /^[\d-]/.test(t9[1]) || g2.isFunction(t9[1]) || w.RegEx.isHex.test(t9[1]) ? a25 = t9[1] : (g2.isString(t9[1]) && !w.RegEx.isHex.test(t9[1]) || g2.isArray(t9[1])) && (r29 = e19 ? t9[1] : u18(t9[1], s23.duration), t9[2] !== i10 && (a25 = t9[2]))) : n26 = t9, e19 || (r29 = r29 || s23.easing), g2.isFunction(n26) && (n26 = n26.call(o25, C4, k5)), g2.isFunction(a25) && (a25 = a25.call(o25, C4, k5)), [
                                            n26 || 0,
                                            r29,
                                            a25
                                        ];
                                    }
                                    function h11(t9, e19) {
                                        var n26, r29;
                                        return r29 = (e19 || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t10) {
                                            return n26 = t10, "";
                                        }), n26 || (n26 = w.Values.getUnitType(t9)), [
                                            r29,
                                            n26
                                        ];
                                    }
                                    function p6() {
                                        var t9 = {
                                            myParent: o25.parentNode || n22.body,
                                            position: w.getPropertyValue(o25, "position"),
                                            fontSize: w.getPropertyValue(o25, "fontSize")
                                        }, r29 = t9.position === E.lastPosition && t9.myParent === E.lastParent, i30 = t9.fontSize === E.lastFontSize;
                                        E.lastParent = t9.myParent, E.lastPosition = t9.position, E.lastFontSize = t9.fontSize;
                                        var s22 = 100, l22 = {
                                        };
                                        if (i30 && r29) l22.emToPx = E.lastEmToPx, l22.percentToPxWidth = E.lastPercentToPxWidth, l22.percentToPxHeight = E.lastPercentToPxHeight;
                                        else {
                                            var u23 = a21(o25).isSVG ? n22.createElementNS("http://www.w3.org/2000/svg", "rect") : n22.createElement("div");
                                            b7.init(u23), t9.myParent.appendChild(u23), f2.each([
                                                "overflow",
                                                "overflowX",
                                                "overflowY"
                                            ], function(t10, e19) {
                                                b7.CSS.setPropertyValue(u23, e19, "hidden");
                                            }), b7.CSS.setPropertyValue(u23, "position", t9.position), b7.CSS.setPropertyValue(u23, "fontSize", t9.fontSize), b7.CSS.setPropertyValue(u23, "boxSizing", "content-box"), f2.each([
                                                "minWidth",
                                                "maxWidth",
                                                "width",
                                                "minHeight",
                                                "maxHeight",
                                                "height"
                                            ], function(t10, e19) {
                                                b7.CSS.setPropertyValue(u23, e19, s22 + "%");
                                            }), b7.CSS.setPropertyValue(u23, "paddingLeft", s22 + "em"), l22.percentToPxWidth = E.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(u23, "width", null, !0)) || 1) / s22, l22.percentToPxHeight = E.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(u23, "height", null, !0)) || 1) / s22, l22.emToPx = E.lastEmToPx = (parseFloat(w.getPropertyValue(u23, "paddingLeft")) || 1) / s22, t9.myParent.removeChild(u23);
                                        }
                                        return null === E.remToPx && (E.remToPx = parseFloat(w.getPropertyValue(n22.body, "fontSize")) || 16), null === E.vwToPx && (E.vwToPx = parseFloat(e5.innerWidth) / 100, E.vhToPx = parseFloat(e5.innerHeight) / 100), l22.remToPx = E.remToPx, l22.vwToPx = E.vwToPx, l22.vhToPx = E.vhToPx, b7.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l22), o25), l22;
                                    }
                                    if (s23.begin && 0 === C4) try {
                                        s23.begin.call(v4, v4);
                                    } catch (t9) {
                                        setTimeout(function() {
                                            throw t9;
                                        }, 1);
                                    }
                                    if ("scroll" === P) {
                                        var m11, S7, M, A = /^x$/i.test(s23.axis) ? "Left" : "Top", T = parseFloat(s23.offset) || 0;
                                        s23.container ? g2.isWrapped(s23.container) || g2.isNode(s23.container) ? (s23.container = s23.container[0] || s23.container, M = (m11 = s23.container["scroll" + A]) + f2(o25).position()[A.toLowerCase()] + T) : s23.container = null : (m11 = b7.State.scrollAnchor[b7.State["scrollProperty" + A]], S7 = b7.State.scrollAnchor[b7.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], M = f2(o25).offset()[A.toLowerCase()] + T), l23 = {
                                            scroll: {
                                                rootPropertyValue: !1,
                                                startValue: m11,
                                                currentValue: m11,
                                                endValue: M,
                                                unitType: "",
                                                easing: s23.easing,
                                                scrollData: {
                                                    container: s23.container,
                                                    direction: A,
                                                    alternateValue: S7
                                                }
                                            },
                                            element: o25
                                        }, b7.debug && console.log("tweensContainer (scroll): ", l23.scroll, o25);
                                    } else if ("reverse" === P) {
                                        if (!a21(o25).tweensContainer) return void f2.dequeue(o25, s23.queue);
                                        "none" === a21(o25).opts.display && (a21(o25).opts.display = "auto"), "hidden" === a21(o25).opts.visibility && (a21(o25).opts.visibility = "visible"), a21(o25).opts.loop = !1, a21(o25).opts.begin = null, a21(o25).opts.complete = null, x11.easing || delete s23.easing, x11.duration || delete s23.duration, s23 = f2.extend({
                                        }, a21(o25).opts, s23);
                                        var I = f2.extend(!0, {
                                        }, a21(o25).tweensContainer);
                                        for(var O in I)if ("element" !== O) {
                                            var F = I[O].startValue;
                                            I[O].startValue = I[O].currentValue = I[O].endValue, I[O].endValue = F, g2.isEmptyObject(x11) || (I[O].easing = s23.easing), b7.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(I[O]), o25);
                                        }
                                        l23 = I;
                                    } else if ("start" === P) {
                                        for(var D in a21(o25).tweensContainer && !0 === a21(o25).isAnimating && (I = a21(o25).tweensContainer), f2.each(y14, function(t9, e19) {
                                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t9)) {
                                                var n26 = d15(e19, !0), r29 = n26[0], o24 = n26[1], a25 = n26[2];
                                                if (w.RegEx.isHex.test(r29)) {
                                                    for(var s22 = [
                                                        "Red",
                                                        "Green",
                                                        "Blue"
                                                    ], l22 = w.Values.hexToRgb(r29), u24 = a25 ? w.Values.hexToRgb(a25) : i10, c17 = 0; c17 < s22.length; c17++){
                                                        var f3 = [
                                                            l22[c17]
                                                        ];
                                                        o24 && f3.push(o24), u24 !== i10 && f3.push(u24[c17]), y14[t9 + s22[c17]] = f3;
                                                    }
                                                    delete y14[t9];
                                                }
                                            }
                                        }), y14){
                                            var L = d15(y14[D]), N = L[0], V = L[1], z = L[2];
                                            D = w.Names.camelCase(D);
                                            var B = w.Hooks.getRoot(D), W = !1;
                                            if (a21(o25).isSVG || "tween" === B || !1 !== w.Names.prefixCheck(B)[1] || w.Normalizations.registered[B] !== i10) {
                                                (s23.display !== i10 && null !== s23.display && "none" !== s23.display || s23.visibility !== i10 && "hidden" !== s23.visibility) && /opacity|filter/.test(D) && !z && 0 !== N && (z = 0), s23._cacheValues && I && I[D] ? (z === i10 && (z = I[D].endValue + I[D].unitType), W = a21(o25).rootPropertyValueCache[B]) : w.Hooks.registered[D] ? z === i10 ? (W = w.getPropertyValue(o25, B), z = w.getPropertyValue(o25, D, W)) : W = w.Hooks.templates[B][1] : z === i10 && (z = w.getPropertyValue(o25, D));
                                                var j, H, q, U = !1;
                                                if (z = (j = h11(D, z))[0], q = j[1], N = (j = h11(D, N))[0].replace(/^([+-\/*])=/, function(t9, e19) {
                                                    return U = e19, "";
                                                }), H = j[1], z = parseFloat(z) || 0, N = parseFloat(N) || 0, "%" === H && (/^(fontSize|lineHeight)$/.test(D) ? (N /= 100, H = "em") : /^scale/.test(D) ? (N /= 100, H = "") : /(Red|Green|Blue)$/i.test(D) && (N = N / 100 * 255, H = "")), /[\/*]/.test(U)) H = q;
                                                else if (q !== H && 0 !== z) if (0 === N) H = q;
                                                else {
                                                    r30 = r30 || p6();
                                                    var Y = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                                    switch(q){
                                                        case "%":
                                                            z *= "x" === Y ? r30.percentToPxWidth : r30.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            z *= r30[q + "ToPx"];
                                                    }
                                                    switch(H){
                                                        case "%":
                                                            z *= 1 / ("x" === Y ? r30.percentToPxWidth : r30.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            z *= 1 / r30[H + "ToPx"];
                                                    }
                                                }
                                                switch(U){
                                                    case "+":
                                                        N = z + N;
                                                        break;
                                                    case "-":
                                                        N = z - N;
                                                        break;
                                                    case "*":
                                                        N *= z;
                                                        break;
                                                    case "/":
                                                        N = z / N;
                                                }
                                                l23[D] = {
                                                    rootPropertyValue: W,
                                                    startValue: z,
                                                    currentValue: z,
                                                    endValue: N,
                                                    unitType: H,
                                                    easing: V
                                                }, b7.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l23[D]), o25);
                                            } else b7.debug && console.log("Skipping [" + B + "] due to a lack of browser support.");
                                        }
                                        l23.element = o25;
                                    }
                                    l23.element && (w.Values.addClass(o25, "velocity-animating"), R.push(l23), "" === s23.queue && (a21(o25).tweensContainer = l23, a21(o25).opts = s23), a21(o25).isAnimating = !0, C4 === k5 - 1 ? (b7.State.calls.push([
                                        R,
                                        v4,
                                        s23,
                                        null,
                                        _.resolver
                                    ]), !1 === b7.State.isTicking && (b7.State.isTicking = !0, c13())) : C4++);
                                }
                                var r30, o25 = this, s23 = f2.extend({
                                }, b7.defaults, x11), l23 = {
                                };
                                switch(a21(o25) === i10 && b7.init(o25), parseFloat(s23.delay) && !1 !== s23.queue && f2.queue(o25, s23.queue, function(t8) {
                                    b7.velocityQueueEntryFlag = !0, a21(o25).delayTimer = {
                                        setTimeout: setTimeout(t8, parseFloat(s23.delay)),
                                        next: t8
                                    };
                                }), s23.duration.toString().toLowerCase()){
                                    case "fast":
                                        s23.duration = 200;
                                        break;
                                    case "normal":
                                        s23.duration = m10;
                                        break;
                                    case "slow":
                                        s23.duration = 600;
                                        break;
                                    default:
                                        s23.duration = parseFloat(s23.duration) || 1;
                                }
                                !1 !== b7.mock && (!0 === b7.mock ? s23.duration = s23.delay = 1 : (s23.duration *= parseFloat(b7.mock) || 1, s23.delay *= parseFloat(b7.mock) || 1)), s23.easing = u18(s23.easing, s23.duration), s23.begin && !g2.isFunction(s23.begin) && (s23.begin = null), s23.progress && !g2.isFunction(s23.progress) && (s23.progress = null), s23.complete && !g2.isFunction(s23.complete) && (s23.complete = null), s23.display !== i10 && null !== s23.display && (s23.display = s23.display.toString().toLowerCase(), "auto" === s23.display && (s23.display = b7.CSS.Values.getDisplayType(o25))), s23.visibility !== i10 && null !== s23.visibility && (s23.visibility = s23.visibility.toString().toLowerCase()), s23.mobileHA = s23.mobileHA && b7.State.isMobile && !b7.State.isGingerbread, !1 === s23.queue ? s23.delay ? setTimeout(t7, s23.delay) : t7() : f2.queue(o25, s23.queue, function(e19, n27) {
                                    return !0 === n27 ? (_.promise && _.resolver(v4), !0) : (b7.velocityQueueEntryFlag = !0, void t7());
                                }), "" !== s23.queue && "fx" !== s23.queue || "inprogress" === f2.queue(o25)[0] || f2.dequeue(o25);
                            }
                            var l23, h11, p6, v4, y14, x11, S8 = arguments[0] && (arguments[0].p || f2.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g2.isString(arguments[0].properties));
                            if (g2.isWrapped(this) ? (l23 = !1, p6 = 0, v4 = this, h11 = this) : (l23 = !0, p6 = 1, v4 = S8 ? arguments[0].elements || arguments[0].e : arguments[0]), v4 = o18(v4)) {
                                S8 ? (y14 = arguments[0].properties || arguments[0].p, x11 = arguments[0].options || arguments[0].o) : (y14 = arguments[p6], x11 = arguments[p6 + 1]);
                                var k5 = v4.length, C4 = 0;
                                if (!/^(stop|finish)$/i.test(y14) && !f2.isPlainObject(x11)) {
                                    var M = p6 + 1;
                                    x11 = {
                                    };
                                    for(var A = M; A < arguments.length; A++)g2.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? g2.isString(arguments[A]) || g2.isArray(arguments[A]) ? x11.easing = arguments[A] : g2.isFunction(arguments[A]) && (x11.complete = arguments[A]) : x11.duration = arguments[A];
                                }
                                var P, _ = {
                                    promise: null,
                                    resolver: null,
                                    rejecter: null
                                };
                                switch(l23 && b7.Promise && (_.promise = new b7.Promise(function(t7, e19) {
                                    _.resolver = t7, _.rejecter = e19;
                                })), y14){
                                    case "scroll":
                                        P = "scroll";
                                        break;
                                    case "reverse":
                                        P = "reverse";
                                        break;
                                    case "finish":
                                    case "stop":
                                        f2.each(v4, function(t7, e19) {
                                            a21(e19) && a21(e19).delayTimer && (clearTimeout(a21(e19).delayTimer.setTimeout), a21(e19).delayTimer.next && a21(e19).delayTimer.next(), delete a21(e19).delayTimer);
                                        });
                                        var T = [];
                                        return f2.each(b7.State.calls, function(t7, e19) {
                                            e19 && f2.each(e19[1], function(n27, r30) {
                                                var o25 = x11 === i10 ? "" : x11;
                                                return !0 !== o25 && e19[2].queue !== o25 && (x11 !== i10 || !1 !== e19[2].queue) || void f2.each(v4, function(n28, i30) {
                                                    i30 === r30 && ((!0 === x11 || g2.isString(x11)) && (f2.each(f2.queue(i30, g2.isString(x11) ? x11 : ""), function(t8, e20) {
                                                        g2.isFunction(e20) && e20(null, !0);
                                                    }), f2.queue(i30, g2.isString(x11) ? x11 : "", [])), "stop" === y14 ? (a21(i30) && a21(i30).tweensContainer && !1 !== o25 && f2.each(a21(i30).tweensContainer, function(t8, e20) {
                                                        e20.endValue = e20.currentValue;
                                                    }), T.push(t7)) : "finish" === y14 && (e19[2].duration = 1));
                                                });
                                            });
                                        }), "stop" === y14 && (f2.each(T, function(t7, e19) {
                                            d10(e19, !0);
                                        }), _.promise && _.resolver(v4)), r28();
                                    default:
                                        if (!f2.isPlainObject(y14) || g2.isEmptyObject(y14)) {
                                            if (g2.isString(y14) && b7.Redirects[y14]) {
                                                var I = (L = f2.extend({
                                                }, x11)).duration, O = L.delay || 0;
                                                return !0 === L.backwards && (v4 = f2.extend(!0, [], v4).reverse()), f2.each(v4, function(t7, e19) {
                                                    parseFloat(L.stagger) ? L.delay = O + parseFloat(L.stagger) * t7 : g2.isFunction(L.stagger) && (L.delay = O + L.stagger.call(e19, t7, k5)), L.drag && (L.duration = parseFloat(I) || (/^(callout|transition)/.test(y14) ? 1000 : m10), L.duration = Math.max(L.duration * (L.backwards ? 1 - t7 / k5 : (t7 + 1) / k5), 0.75 * L.duration, 200)), b7.Redirects[y14].call(e19, e19, L || {
                                                    }, t7, k5, v4, _.promise ? _ : i10);
                                                }), r28();
                                            }
                                            var F = "Velocity: First argument (" + y14 + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                            return _.promise ? _.rejecter(new Error(F)) : console.log(F), r28();
                                        }
                                        P = "start";
                                }
                                var D, L, E = {
                                    lastParent: null,
                                    lastPosition: null,
                                    lastFontSize: null,
                                    lastPercentToPxWidth: null,
                                    lastPercentToPxHeight: null,
                                    lastEmToPx: null,
                                    remToPx: null,
                                    vwToPx: null,
                                    vhToPx: null
                                }, R = [];
                                if (f2.each(v4, function(t7, e19) {
                                    g2.isNode(e19) && s21.call(e19);
                                }), (L = f2.extend({
                                }, b7.defaults, x11)).loop = parseInt(L.loop), D = 2 * L.loop - 1, L.loop) for(var N = 0; D > N; N++){
                                    var V = {
                                        delay: L.delay,
                                        progress: L.progress
                                    };
                                    N === D - 1 && (V.display = L.display, V.visibility = L.visibility, V.complete = L.complete), t6(v4, "reverse", V);
                                }
                                return r28();
                            }
                        };
                        (b7 = f2.extend(S6, b7)).animate = S6;
                        var k6 = e5.requestAnimationFrame || p3;
                        return b7.State.isMobile || n22.hidden === i10 || n22.addEventListener("visibilitychange", function() {
                            n22.hidden ? (k6 = function(t7) {
                                return setTimeout(function() {
                                    t7(!0);
                                }, 16);
                            }, c13()) : k6 = e5.requestAnimationFrame || p3;
                        }), t3.Velocity = b7, t3 !== e5 && (t3.fn.velocity = S6, t3.fn.velocity.defaults = b7.defaults), f2.each([
                            "Down",
                            "Up"
                        ], function(t7, e19) {
                            b7.Redirects["slide" + e19] = function(t8, n27, r28, o25, a26, s21) {
                                var l23 = f2.extend({
                                }, n27), u25 = l23.begin, c18 = l23.complete, d15 = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                }, h11 = {
                                };
                                l23.display === i10 && (l23.display = "Down" === e19 ? "inline" === b7.CSS.Values.getDisplayType(t8) ? "inline-block" : "block" : "none"), l23.begin = function() {
                                    for(var n28 in u25 && u25.call(a26, a26), d15){
                                        h11[n28] = t8.style[n28];
                                        var r30 = b7.CSS.getPropertyValue(t8, n28);
                                        d15[n28] = "Down" === e19 ? [
                                            r30,
                                            0
                                        ] : [
                                            0,
                                            r30
                                        ];
                                    }
                                    h11.overflow = t8.style.overflow, t8.style.overflow = "hidden";
                                }, l23.complete = function() {
                                    for(var e20 in h11)t8.style[e20] = h11[e20];
                                    c18 && c18.call(a26, a26), s21 && s21.resolver(a26);
                                }, b7(t8, d15, l23);
                            };
                        }), f2.each([
                            "In",
                            "Out"
                        ], function(t7, e19) {
                            b7.Redirects["fade" + e19] = function(t8, n27, r28, o25, a26, s21) {
                                var l23 = f2.extend({
                                }, n27), u25 = {
                                    opacity: "In" === e19 ? 1 : 0
                                }, c18 = l23.complete;
                                l23.complete = r28 !== o25 - 1 ? l23.begin = null : function() {
                                    c18 && c18.call(a26, a26), s21 && s21.resolver(a26);
                                }, l23.display === i10 && (l23.display = "In" === e19 ? "auto" : "none"), b7(this, u25, l23);
                            };
                        }), b7;
                    }
                    jQuery.fn.velocity = jQuery.fn.animate;
                })(window.jQuery || window.Zepto || window, window, document);
            }, "object" == r5(t2) && "object" == r5(t2.exports) ? t2.exports = e3() : "function" == typeof define && n2(55) ? define(e3) : e3());
        }).call(this, n2(88)(t1));
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(3), i10 = n2(1), o18 = n2(142), a21 = n2(8), s16 = n2(31), l18 = n2(11), u18 = n2(104), c13 = o18.ArrayBuffer, d10 = o18.DataView, f2 = c13.prototype.slice;
        r5({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: i10(function() {
                return !new c13(2).slice(1, void 0).byteLength;
            })
        }, {
            slice: function(t2, e3) {
                if (void 0 !== f2 && void 0 === e3) return f2.call(a21(this), t2);
                for(var n22 = a21(this).byteLength, r28 = s16(t2, n22), i30 = s16(void 0 === e3 ? n22 : e3, n22), o25 = new (u18(this, c13))(l18(i30 - r28)), h10 = new d10(this), p3 = new d10(o25), g2 = 0; r28 < i30;)p3.setUint8(g2++, h10.getUint8(r28++));
                return o25;
            }
        });
    },
    function(t1, e2, n2) {
        var r5 = n2(15);
        t1.exports = function(t2, e3, n22) {
            for(var i10 in e3)r5(t2, i10, e3[i10], n22);
            return t2;
        };
    },
    function(t1, e2, n2) {
        n2(167)("Float32", 4, function(t2) {
            return function(e3, n22, r5) {
                return t2(this, e3, n22, r5);
            };
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(3), i10 = n2(0), o18 = n2(7), a21 = n2(168), s16 = n2(40), l18 = n2(142), u18 = n2(143), c13 = n2(17), d10 = n2(6), f2 = n2(11), h10 = n2(144), p3 = n2(145), g2 = n2(19), v3 = n2(4), m12 = n2(85), y14 = n2(5), b8 = n2(33), x11 = n2(69), w = n2(27).f, S8 = n2(171), k7 = n2(25).forEach, C5 = n2(124), M = n2(9), A = n2(24), P = n2(22), _ = P.get, T = P.set, I = M.f, O = A.f, F = Math.round, D = i10.RangeError, L = l18.ArrayBuffer, E = l18.DataView, R = s16.NATIVE_ARRAY_BUFFER_VIEWS, N = s16.TYPED_ARRAY_TAG, V = s16.TypedArray, z = s16.TypedArrayPrototype, B = s16.aTypedArrayConstructor, W = s16.isTypedArray, j = function(t2, e3) {
            for(var n22 = 0, r28 = e3.length, i30 = new (B(t2))(r28); r28 > n22;)i30[n22] = e3[n22++];
            return i30;
        }, H = function(t2, e3) {
            I(t2, e3, {
                get: function() {
                    return _(this)[e3];
                }
            });
        }, q = function(t2) {
            var e3;
            return t2 instanceof L || "ArrayBuffer" == (e3 = m12(t2)) || "SharedArrayBuffer" == e3;
        }, U = function(t2, e3) {
            return W(t2) && "symbol" != typeof e3 && e3 in t2 && String(+e3) == String(e3);
        }, Y = function(t2, e3) {
            return U(t2, e3 = g2(e3, !0)) ? c13(2, t2[e3]) : O(t2, e3);
        }, $ = function(t2, e3, n22) {
            return !(U(t2, e3 = g2(e3, !0)) && y14(n22) && v3(n22, "value")) || v3(n22, "get") || v3(n22, "set") || n22.configurable || v3(n22, "writable") && !n22.writable || v3(n22, "enumerable") && !n22.enumerable ? I(t2, e3, n22) : (t2[e3] = n22.value, t2);
        };
        o18 ? (R || (A.f = Y, M.f = $, H(z, "buffer"), H(z, "byteOffset"), H(z, "byteLength"), H(z, "length")), r5({
            target: "Object",
            stat: !0,
            forced: !R
        }, {
            getOwnPropertyDescriptor: Y,
            defineProperty: $
        }), t1.exports = function(t2, e3, n22, o25) {
            var s21 = t2 + (o25 ? "Clamped" : "") + "Array", l23 = "get" + t2, c18 = "set" + t2, g4 = i10[s21], v4 = g4, m13 = v4 && v4.prototype, M1 = {
            }, A1 = function(t3, n27) {
                I(t3, n27, {
                    get: function() {
                        return (function(t6, n28) {
                            var r28 = _(t6);
                            return r28.view[l23](n28 * e3 + r28.byteOffset, !0);
                        })(this, n27);
                    },
                    set: function(t6) {
                        return (function(t7, n28, r28) {
                            var i30 = _(t7);
                            o25 && (r28 = (r28 = F(r28)) < 0 ? 0 : r28 > 255 ? 255 : 255 & r28), i30.view[c18](n28 * e3 + i30.byteOffset, r28, !0);
                        })(this, n27, t6);
                    },
                    enumerable: !0
                });
            };
            R ? a21 && (v4 = n22(function(t3, n27, r28, i30) {
                return u18(t3, v4, s21), y14(n27) ? q(n27) ? void 0 !== i30 ? new g4(n27, p3(r28, e3), i30) : void 0 !== r28 ? new g4(n27, p3(r28, e3)) : new g4(n27) : W(n27) ? j(v4, n27) : S8.call(v4, n27) : new g4(h10(n27));
            }), x11 && x11(v4, V), k7(w(g4), function(t3) {
                t3 in v4 || d10(v4, t3, g4[t3]);
            }), v4.prototype = m13) : (v4 = n22(function(t3, n27, r28, i30) {
                u18(t3, v4, s21);
                var o26, a26, l24, c19 = 0, d15 = 0;
                if (y14(n27)) {
                    if (!q(n27)) return W(n27) ? j(v4, n27) : S8.call(v4, n27);
                    o26 = n27, d15 = p3(r28, e3);
                    var g5 = n27.byteLength;
                    if (void 0 === i30) {
                        if (g5 % e3) throw D("Wrong length");
                        if ((a26 = g5 - d15) < 0) throw D("Wrong length");
                    } else if ((a26 = f2(i30) * e3) + d15 > g5) throw D("Wrong length");
                    l24 = a26 / e3;
                } else l24 = h10(n27), o26 = new L(a26 = l24 * e3);
                for(T(t3, {
                    buffer: o26,
                    byteOffset: d15,
                    byteLength: a26,
                    length: l24,
                    view: new E(o26)
                }); c19 < l24;)A1(t3, c19++);
            }), x11 && x11(v4, V), m13 = v4.prototype = b8(z)), m13.constructor !== v4 && d10(m13, "constructor", v4), N && d10(m13, N, s21), M1[s21] = v4, r5({
                global: !0,
                forced: v4 != g4,
                sham: !R
            }, M1), "BYTES_PER_ELEMENT" in v4 || d10(v4, "BYTES_PER_ELEMENT", e3), "BYTES_PER_ELEMENT" in m13 || d10(m13, "BYTES_PER_ELEMENT", e3), C5(s21);
        }) : t1.exports = function() {
        };
    },
    function(t1, e2, n2) {
        var r5 = n2(0), i10 = n2(1), o18 = n2(169), a21 = n2(40).NATIVE_ARRAY_BUFFER_VIEWS, s16 = r5.ArrayBuffer, l18 = r5.Int8Array;
        t1.exports = !a21 || !i10(function() {
            l18(1);
        }) || !i10(function() {
            new l18(-1);
        }) || !o18(function(t2) {
            new l18, new l18(null), new l18(1.5), new l18(t2);
        }, !0) || i10(function() {
            return 1 !== new l18(new s16(2), 1, void 0).length;
        });
    },
    function(t1, e2, n2) {
        var r5 = n2(2)("iterator"), i10 = !1;
        try {
            var o18 = 0, a21 = {
                next: function() {
                    return {
                        done: !!o18++
                    };
                },
                return: function() {
                    i10 = !0;
                }
            };
            a21[r5] = function() {
                return this;
            }, Array.from(a21, function() {
                throw 2;
            });
        } catch (t2) {
        }
        t1.exports = function(t2, e3) {
            if (!e3 && !i10) return !1;
            var n22 = !1;
            try {
                var o25 = {
                };
                o25[r5] = function() {
                    return {
                        next: function() {
                            return {
                                done: n22 = !0
                            };
                        }
                    };
                }, t2(o25);
            } catch (t3) {
            }
            return n22;
        };
    },
    function(t1, e2, n2) {
        var r5 = n2(12);
        t1.exports = function(t2) {
            var e3 = r5(t2);
            if (e3 < 0) throw RangeError("The argument can't be less than 0");
            return e3;
        };
    },
    function(t1, e2, n2) {
        var r5 = n2(16), i10 = n2(11), o18 = n2(172), a21 = n2(173), s16 = n2(71), l18 = n2(40).aTypedArrayConstructor;
        t1.exports = function(t2) {
            var e3, n22, u18, c13, d10, f2, h10 = r5(t2), p3 = arguments.length, g2 = p3 > 1 ? arguments[1] : void 0, v3 = void 0 !== g2, m12 = o18(h10);
            if (null != m12 && !a21(m12)) for(f2 = (d10 = m12.call(h10)).next, h10 = []; !(c13 = f2.call(d10)).done;)h10.push(c13.value);
            for(v3 && p3 > 2 && (g2 = s16(g2, arguments[2], 2)), n22 = i10(h10.length), u18 = new (l18(this))(n22), e3 = 0; n22 > e3; e3++)u18[e3] = v3 ? g2(h10[e3], e3) : h10[e3];
            return u18;
        };
    },
    function(t1, e2, n2) {
        var r5 = n2(85), i10 = n2(48), o18 = n2(2)("iterator");
        t1.exports = function(t2) {
            if (null != t2) return t2[o18] || t2["@@iterator"] || i10[r5(t2)];
        };
    },
    function(t1, e2, n2) {
        var r5 = n2(2), i10 = n2(48), o18 = r5("iterator"), a21 = Array.prototype;
        t1.exports = function(t2) {
            return void 0 !== t2 && (i10.Array === t2 || a21[o18] === t2);
        };
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(175), o18 = r5.aTypedArray;
        r5.exportProto("copyWithin", function(t2, e3) {
            return i10.call(o18(this), t2, e3, arguments.length > 2 ? arguments[2] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(16), i10 = n2(31), o18 = n2(11), a21 = Math.min;
        t1.exports = [].copyWithin || function(t2, e3) {
            var n22 = r5(this), s16 = o18(n22.length), l18 = i10(t2, s16), u18 = i10(e3, s16), c13 = arguments.length > 2 ? arguments[2] : void 0, d10 = a21((void 0 === c13 ? s16 : i10(c13, s16)) - u18, s16 - l18), f2 = 1;
            for(u18 < l18 && l18 < u18 + d10 && (f2 = -1, u18 += d10 - 1, l18 += d10 - 1); d10-- > 0;)u18 in n22 ? n22[l18] = n22[u18] : delete n22[l18], l18 += f2, u18 += f2;
            return n22;
        };
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(25).every, o18 = r5.aTypedArray;
        r5.exportProto("every", function(t2) {
            return i10(o18(this), t2, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(128), o18 = r5.aTypedArray;
        r5.exportProto("fill", function(t2) {
            return i10.apply(o18(this), arguments);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(25).filter, o18 = n2(104), a21 = r5.aTypedArray, s16 = r5.aTypedArrayConstructor;
        r5.exportProto("filter", function(t2) {
            for(var e3 = i10(a21(this), t2, arguments.length > 1 ? arguments[1] : void 0), n22 = o18(this, this.constructor), r28 = 0, l18 = e3.length, u18 = new (s16(n22))(l18); l18 > r28;)u18[r28] = e3[r28++];
            return u18;
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(25).find, o18 = r5.aTypedArray;
        r5.exportProto("find", function(t2) {
            return i10(o18(this), t2, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(25).findIndex, o18 = r5.aTypedArray;
        r5.exportProto("findIndex", function(t2) {
            return i10(o18(this), t2, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(25).forEach, o18 = r5.aTypedArray;
        r5.exportProto("forEach", function(t2) {
            i10(o18(this), t2, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(41).includes, o18 = r5.aTypedArray;
        r5.exportProto("includes", function(t2) {
            return i10(o18(this), t2, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(41).indexOf, o18 = r5.aTypedArray;
        r5.exportProto("indexOf", function(t2) {
            return i10(o18(this), t2, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(0), i10 = n2(40), o18 = n2(54), a21 = n2(2)("iterator"), s16 = r5.Uint8Array, l18 = o18.values, u18 = o18.keys, c13 = o18.entries, d10 = i10.aTypedArray, f2 = i10.exportProto, h10 = s16 && s16.prototype[a21], p3 = !!h10 && ("values" == h10.name || null == h10.name), g2 = function() {
            return l18.call(d10(this));
        };
        f2("entries", function() {
            return c13.call(d10(this));
        }), f2("keys", function() {
            return u18.call(d10(this));
        }), f2("values", g2, !p3), f2(a21, g2, !p3);
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = r5.aTypedArray, o18 = [].join;
        r5.exportProto("join", function(t2) {
            return o18.apply(i10(this), arguments);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(131), o18 = r5.aTypedArray;
        r5.exportProto("lastIndexOf", function(t2) {
            return i10.apply(o18(this), arguments);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(25).map, o18 = n2(104), a21 = r5.aTypedArray, s16 = r5.aTypedArrayConstructor;
        r5.exportProto("map", function(t2) {
            return i10(a21(this), t2, arguments.length > 1 ? arguments[1] : void 0, function(t3, e3) {
                return new (s16(o18(t3, t3.constructor)))(e3);
            });
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(109).left, o18 = r5.aTypedArray;
        r5.exportProto("reduce", function(t2) {
            return i10(o18(this), t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(109).right, o18 = r5.aTypedArray;
        r5.exportProto("reduceRight", function(t2) {
            return i10(o18(this), t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = r5.aTypedArray, o18 = Math.floor;
        r5.exportProto("reverse", function() {
            for(var t2, e3 = i10(this).length, n22 = o18(e3 / 2), r28 = 0; r28 < n22;)t2 = this[r28], this[r28++] = this[--e3], this[e3] = t2;
            return this;
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(11), o18 = n2(145), a21 = n2(16), s16 = n2(1), l18 = r5.aTypedArray, u18 = s16(function() {
            new Int8Array(1).set({
            });
        });
        r5.exportProto("set", function(t2) {
            l18(this);
            var e3 = o18(arguments.length > 1 ? arguments[1] : void 0, 1), n22 = this.length, r28 = a21(t2), s21 = i10(r28.length), u25 = 0;
            if (s21 + e3 > n22) throw RangeError("Wrong length");
            for(; u25 < s21;)this[e3 + u25] = r28[u25++];
        }, u18);
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(104), o18 = n2(1), a21 = r5.aTypedArray, s16 = r5.aTypedArrayConstructor, l18 = [].slice, u18 = o18(function() {
            new Int8Array(1).slice();
        });
        r5.exportProto("slice", function(t2, e3) {
            for(var n22 = l18.call(a21(this), t2, e3), r28 = i10(this, this.constructor), o25 = 0, u25 = n22.length, c13 = new (s16(r28))(u25); u25 > o25;)c13[o25] = n22[o25++];
            return c13;
        }, u18);
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(25).some, o18 = r5.aTypedArray;
        r5.exportProto("some", function(t2) {
            return i10(o18(this), t2, arguments.length > 1 ? arguments[1] : void 0);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = r5.aTypedArray, o18 = [].sort;
        r5.exportProto("sort", function(t2) {
            return o18.call(i10(this), t2);
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(40), i10 = n2(11), o18 = n2(31), a21 = n2(104), s16 = r5.aTypedArray;
        r5.exportProto("subarray", function(t2, e3) {
            var n22 = s16(this), r28 = n22.length, l18 = o18(t2, r28);
            return new (a21(n22, n22.constructor))(n22.buffer, n22.byteOffset + l18 * n22.BYTES_PER_ELEMENT, i10((void 0 === e3 ? r28 : o18(e3, r28)) - l18));
        });
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(0), i10 = n2(40), o18 = n2(1), a21 = r5.Int8Array, s16 = i10.aTypedArray, l18 = [].toLocaleString, u18 = [].slice, c13 = !!a21 && o18(function() {
            l18.call(new a21(1));
        }), d10 = o18(function() {
            return [
                1,
                2
            ].toLocaleString() != new a21([
                1,
                2
            ]).toLocaleString();
        }) || !o18(function() {
            a21.prototype.toLocaleString.call([
                1,
                2
            ]);
        });
        i10.exportProto("toLocaleString", function() {
            return l18.apply(c13 ? u18.call(s16(this)) : s16(this), arguments);
        }, d10);
    },
    function(t1, e2, n2) {
        "use strict";
        var r5 = n2(0), i10 = n2(40), o18 = n2(1), a21 = r5.Uint8Array, s16 = a21 && a21.prototype, l18 = [].toString, u18 = [].join;
        o18(function() {
            l18.call({
            });
        }) && (l18 = function() {
            return u18.call(this);
        }), i10.exportProto("toString", l18, (s16 || {
        }).toString != l18);
    },
    function(t1, e2, n2) {
        "use strict";
        (function(t2) {
            n2(72), n2(75), n2(76), n2(91), n2(54), n2(100), n2(115), n2(110), n2(77), n2(119), n2(80), n2(83);
            function e3(t3) {
                return (e3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t6) {
                    return typeof t6;
                } : function(t6) {
                    return t6 && "function" == typeof Symbol && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
                })(t3);
            }
            /*!
         * Waves v0.7.6
         * http://fian.my.id/Waves
         *
         * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
         * Released under the MIT license
         * https://github.com/fians/Waves/blob/master/LICENSE
         */ !function(r5, i10) {
                "function" == typeof define && n2(55) ? define([], function() {
                    return r5.Waves = i10.call(r5), r5.Waves;
                }) : "object" === ("undefined" == typeof exports ? "undefined" : e3(exports)) ? t2.exports = i10.call(r5) : r5.Waves = i10.call(r5);
            }("object" === ("undefined" == typeof window ? "undefined" : e3(window)) ? window : void 0, function() {
                var t3 = t3 || {
                }, n22 = document.querySelectorAll.bind(document), r5 = Object.prototype.toString, i10 = "ontouchstart" in window;
                function o18(t6) {
                    var n27 = e3(t6);
                    return "function" === n27 || "object" === n27 && !!t6;
                }
                function a21(t6) {
                    var e5, i30 = r5.call(t6);
                    return "[object String]" === i30 ? n22(t6) : o18(t6) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(i30) && t6.hasOwnProperty("length") ? t6 : o18(e5 = t6) && e5.nodeType > 0 ? [
                        t6
                    ] : [];
                }
                function s16(t6) {
                    var n27, r28, i30 = {
                        top: 0,
                        left: 0
                    }, o25 = t6 && t6.ownerDocument;
                    return n27 = o25.documentElement, "undefined" !== e3(t6.getBoundingClientRect) && (i30 = t6.getBoundingClientRect()), r28 = (function(t7) {
                        return null !== (e5 = t7) && e5 === e5.window ? t7 : 9 === t7.nodeType && t7.defaultView;
                        var e5;
                    })(o25), {
                        top: i30.top + r28.pageYOffset - n27.clientTop,
                        left: i30.left + r28.pageXOffset - n27.clientLeft
                    };
                }
                function l18(t6) {
                    var e5 = "";
                    for(var n27 in t6)t6.hasOwnProperty(n27) && (e5 += n27 + ":" + t6[n27] + ";");
                    return e5;
                }
                var u18 = {
                    duration: 750,
                    delay: 200,
                    show: function(t6, e5, n27) {
                        if (2 === t6.button) return !1;
                        e5 = e5 || this;
                        var r28 = document.createElement("div");
                        r28.className = "waves-ripple waves-rippling", e5.appendChild(r28);
                        var i30 = s16(e5), o25 = 0, a26 = 0;
                        "touches" in t6 && t6.touches.length ? (o25 = t6.touches[0].pageY - i30.top, a26 = t6.touches[0].pageX - i30.left) : (o25 = t6.pageY - i30.top, a26 = t6.pageX - i30.left), a26 = a26 >= 0 ? a26 : 0, o25 = o25 >= 0 ? o25 : 0;
                        var c13 = "scale(" + e5.clientWidth / 100 * 3 + ")", d10 = "translate(0,0)";
                        n27 && (d10 = "translate(" + n27.x + "px, " + n27.y + "px)"), r28.setAttribute("data-hold", Date.now()), r28.setAttribute("data-x", a26), r28.setAttribute("data-y", o25), r28.setAttribute("data-scale", c13), r28.setAttribute("data-translate", d10);
                        var f2 = {
                            top: o25 + "px",
                            left: a26 + "px"
                        };
                        r28.classList.add("waves-notransition"), r28.setAttribute("style", l18(f2)), r28.classList.remove("waves-notransition"), f2["-webkit-transform"] = c13 + " " + d10, f2["-moz-transform"] = c13 + " " + d10, f2["-ms-transform"] = c13 + " " + d10, f2["-o-transform"] = c13 + " " + d10, f2.transform = c13 + " " + d10, f2.opacity = "1";
                        var h10 = "mousemove" === t6.type ? 2500 : u18.duration;
                        f2["-webkit-transition-duration"] = h10 + "ms", f2["-moz-transition-duration"] = h10 + "ms", f2["-o-transition-duration"] = h10 + "ms", f2["transition-duration"] = h10 + "ms", r28.setAttribute("style", l18(f2));
                    },
                    hide: function(t6, e5) {
                        for(var n27 = (e5 = e5 || this).getElementsByClassName("waves-rippling"), r28 = 0, o25 = n27.length; r28 < o25; r28++)d10(t6, e5, n27[r28]);
                        i10 && (e5.removeEventListener("touchend", u18.hide), e5.removeEventListener("touchcancel", u18.hide)), e5.removeEventListener("mouseup", u18.hide), e5.removeEventListener("mouseleave", u18.hide);
                    }
                }, c13 = {
                    input: function(t6) {
                        var e5 = t6.parentNode;
                        if ("span" !== e5.tagName.toLowerCase() || !e5.classList.contains("waves-effect")) {
                            var n27 = document.createElement("span");
                            n27.className = "waves-input-wrapper", e5.replaceChild(n27, t6), n27.appendChild(t6);
                        }
                    },
                    img: function(t6) {
                        var e5 = t6.parentNode;
                        if ("i" !== e5.tagName.toLowerCase() || !e5.classList.contains("waves-effect")) {
                            var n28 = document.createElement("i");
                            e5.replaceChild(n28, t6), n28.appendChild(t6);
                        }
                    }
                };
                function d10(t6, e5, n29) {
                    if (n29) {
                        n29.classList.remove("waves-rippling");
                        var r28 = n29.getAttribute("data-x"), i30 = n29.getAttribute("data-y"), o25 = n29.getAttribute("data-scale"), a26 = n29.getAttribute("data-translate"), s21 = 350 - (Date.now() - Number(n29.getAttribute("data-hold")));
                        s21 < 0 && (s21 = 0), "mousemove" === t6.type && (s21 = 150);
                        var c18 = "mousemove" === t6.type ? 2500 : u18.duration;
                        setTimeout(function() {
                            var t7 = {
                                top: i30 + "px",
                                left: r28 + "px",
                                opacity: "0",
                                "-webkit-transition-duration": c18 + "ms",
                                "-moz-transition-duration": c18 + "ms",
                                "-o-transition-duration": c18 + "ms",
                                "transition-duration": c18 + "ms",
                                "-webkit-transform": o25 + " " + a26,
                                "-moz-transform": o25 + " " + a26,
                                "-ms-transform": o25 + " " + a26,
                                "-o-transform": o25 + " " + a26,
                                transform: o25 + " " + a26
                            };
                            n29.setAttribute("style", l18(t7)), setTimeout(function() {
                                try {
                                    e5.removeChild(n29);
                                } catch (t8) {
                                    return !1;
                                }
                            }, c18);
                        }, s21);
                    }
                }
                var f2 = {
                    touches: 0,
                    allowEvent: function(t6) {
                        var e5 = !0;
                        return /^(mousedown|mousemove)$/.test(t6.type) && f2.touches && (e5 = !1), e5;
                    },
                    registerEvent: function(t6) {
                        var e5 = t6.type;
                        "touchstart" === e5 ? f2.touches += 1 : /^(touchend|touchcancel)$/.test(e5) && setTimeout(function() {
                            f2.touches && (f2.touches -= 1);
                        }, 500);
                    }
                };
                function h10(t6) {
                    var e5 = function(t7) {
                        if (!1 === f2.allowEvent(t7)) return null;
                        for(var e19 = null, n29 = t7.target || t7.srcElement; n29.parentElement;){
                            if (!(n29 instanceof SVGElement) && n29.classList.contains("waves-effect")) {
                                e19 = n29;
                                break;
                            }
                            n29 = n29.parentElement;
                        }
                        return e19;
                    }(t6);
                    if (null !== e5) {
                        if (e5.disabled || e5.getAttribute("disabled") || e5.classList.contains("disabled")) return;
                        if (f2.registerEvent(t6), "touchstart" === t6.type && u18.delay) {
                            var n29 = !1, r31 = setTimeout(function() {
                                r31 = null, u18.show(t6, e5);
                            }, u18.delay), o26 = function(i31) {
                                r31 && (clearTimeout(r31), r31 = null, u18.show(t6, e5)), n29 || (n29 = !0, u18.hide(i31, e5)), s23();
                            }, a27 = function(t7) {
                                r31 && (clearTimeout(r31), r31 = null), o26(t7), s23();
                            };
                            e5.addEventListener("touchmove", a27, !1), e5.addEventListener("touchend", o26, !1), e5.addEventListener("touchcancel", o26, !1);
                            var s23 = function() {
                                e5.removeEventListener("touchmove", a27), e5.removeEventListener("touchend", o26), e5.removeEventListener("touchcancel", o26);
                            };
                        } else u18.show(t6, e5), i10 && (e5.addEventListener("touchend", u18.hide, !1), e5.addEventListener("touchcancel", u18.hide, !1)), e5.addEventListener("mouseup", u18.hide, !1), e5.addEventListener("mouseleave", u18.hide, !1);
                    }
                }
                return t3.init = function(t6) {
                    var e5 = document.body;
                    "duration" in (t6 = t6 || {
                    }) && (u18.duration = t6.duration), "delay" in t6 && (u18.delay = t6.delay), i10 && (e5.addEventListener("touchstart", h10, !1), e5.addEventListener("touchcancel", f2.registerEvent, !1), e5.addEventListener("touchend", f2.registerEvent, !1)), e5.addEventListener("mousedown", h10, !1);
                }, t3.attach = function(t6, e5) {
                    var n30, i31;
                    t6 = a21(t6), "[object Array]" === r5.call(e5) && (e5 = e5.join(" ")), e5 = e5 ? " " + e5 : "";
                    for(var o27 = 0, s24 = t6.length; o27 < s24; o27++)i31 = (n30 = t6[o27]).tagName.toLowerCase(), -1 !== [
                        "input",
                        "img"
                    ].indexOf(i31) && (c13[i31](n30), n30 = n30.parentElement), -1 === n30.className.indexOf("waves-effect") && (n30.className += " waves-effect" + e5);
                }, t3.ripple = function(t6, e5) {
                    var n30 = (t6 = a21(t6)).length;
                    if ((e5 = e5 || {
                    }).wait = e5.wait || 0, e5.position = e5.position || null, n30) {
                        for(var r32, i31, o27, l23 = {
                        }, c19 = 0, d15 = {
                            type: "mousedown",
                            button: 1
                        }, f4 = function(t7, e19) {
                            return function() {
                                u18.hide(t7, e19);
                            };
                        }; c19 < n30; c19++)if (r32 = t6[c19], i31 = e5.position || {
                            x: r32.clientWidth / 2,
                            y: r32.clientHeight / 2
                        }, o27 = s16(r32), l23.x = o27.left + i31.x, l23.y = o27.top + i31.y, d15.pageX = l23.x, d15.pageY = l23.y, u18.show(d15, r32), e5.wait >= 0 && null !== e5.wait) {
                            setTimeout(f4({
                                type: "mouseup",
                                button: 1
                            }, r32), e5.wait);
                        }
                    }
                }, t3.calm = function(t6) {
                    for(var e5 = {
                        type: "mouseup",
                        button: 1
                    }, n30 = 0, r32 = (t6 = a21(t6)).length; n30 < r32; n30++)u18.hide(e5, t6[n30]);
                }, t3.displayEffect = function(e5) {
                    console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t3.init(e5);
                }, t3;
            }), $(document).ready(function() {
                Waves.attach(".btn:not(.btn-flat), .btn-floating", [
                    "waves-light"
                ]), Waves.attach(".btn-flat", [
                    "waves-effect"
                ]), Waves.attach(".chip", [
                    "waves-effect"
                ]), Waves.attach(".view a .mask", [
                    "waves-light"
                ]), Waves.attach(".waves-light", [
                    "waves-light"
                ]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", [
                    "waves-light"
                ]), Waves.attach(".pager li a", [
                    "waves-light"
                ]), Waves.attach(".pagination .page-item .page-link", [
                    "waves-effect"
                ]), Waves.init();
            });
        }).call(this, n2(88)(t1));
    }
]);
