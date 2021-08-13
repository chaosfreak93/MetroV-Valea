/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */ /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */ /*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */ jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function(e) {
    function t(e1) {
        var t1 = e1.length, a = r.type(e1);
        return "function" === a || r.isWindow(e1) ? !1 : 1 === e1.nodeType && t1 ? !0 : "array" === a || 0 === t1 || "number" == typeof t1 && t1 > 0 && t1 - 1 in e1;
    }
    if (!e.jQuery) {
        var r = function(e1, t1) {
            return new r.fn.init(e1, t1);
        };
        r.isWindow = function(e1) {
            return null != e1 && e1 == e1.window;
        }, r.type = function(e1) {
            return null == e1 ? e1 + "" : "object" == typeof e1 || "function" == typeof e1 ? n[i.call(e1)] || "object" : typeof e1;
        }, r.isArray = Array.isArray || function(e1) {
            return "array" === r.type(e1);
        }, r.isPlainObject = function(e1) {
            var t1;
            if (!e1 || "object" !== r.type(e1) || e1.nodeType || r.isWindow(e1)) return !1;
            try {
                if (e1.constructor && !o.call(e1, "constructor") && !o.call(e1.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (a) {
                return !1;
            }
            for(t1 in e1);
            return void 0 === t1 || o.call(e1, t1);
        }, r.each = function(e1, r1, a) {
            var n, o = 0, i = e1.length, s = t(e1);
            if (a) {
                if (s) for(; i > o && (n = r1.apply(e1[o], a), n !== !1); o++);
                else for(o in e1)if (n = r1.apply(e1[o], a), n === !1) break;
            } else if (s) for(; i > o && (n = r1.call(e1[o], o, e1[o]), n !== !1); o++);
            else for(o in e1)if (n = r1.call(e1[o], o, e1[o]), n === !1) break;
            return e1;
        }, r.data = function(e1, t1, n) {
            if (void 0 === n) {
                var o = e1[r.expando], i = o && a[o];
                if (void 0 === t1) return i;
                if (i && t1 in i) return i[t1];
            } else if (void 0 !== t1) {
                var o = e1[r.expando] || (e1[r.expando] = ++r.uuid);
                return a[o] = a[o] || {
                }, a[o][t1] = n, n;
            }
        }, r.removeData = function(e1, t1) {
            var n = e1[r.expando], o = n && a[n];
            o && r.each(t1, function(e2, t2) {
                delete o[t2];
            });
        }, r.extend = function() {
            var e1, t1, a, n, o, i, s = arguments[0] || {
            }, l = 1, u = arguments.length, c = !1;
            for("boolean" == typeof s && (c = s, s = arguments[l] || {
            }, l++), "object" != typeof s && "function" !== r.type(s) && (s = {
            }), l === u && (s = this, l--); u > l; l++)if (null != (o = arguments[l])) for(n in o)e1 = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t1 = r.isArray(a))) ? (t1 ? (t1 = !1, i = e1 && r.isArray(e1) ? e1 : []) : i = e1 && r.isPlainObject(e1) ? e1 : {
            }, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
            return s;
        }, r.queue = function(e1, a, n) {
            function o(e2, r1) {
                var a1 = r1 || [];
                return null != e2 && (t(Object(e2)) ? !function(e3, t1) {
                    for(var r2 = +t1.length, a2 = 0, n1 = e3.length; r2 > a2;)e3[n1++] = t1[a2++];
                    if (r2 !== r2) for(; void 0 !== t1[a2];)e3[n1++] = t1[a2++];
                    return e3.length = n1, e3;
                }(a1, "string" == typeof e2 ? [
                    e2
                ] : e2) : [].push.call(a1, e2)), a1;
            }
            if (e1) {
                a = (a || "fx") + "queue";
                var i = r.data(e1, a);
                return n ? (!i || r.isArray(n) ? i = r.data(e1, a, o(n)) : i.push(n), i) : i || [];
            }
        }, r.dequeue = function(e1, t1) {
            r.each(e1.nodeType ? [
                e1
            ] : e1, function(e2, a) {
                t1 = t1 || "fx";
                var n = r.queue(a, t1), o = n.shift();
                "inprogress" === o && (o = n.shift()), o && ("fx" === t1 && n.unshift("inprogress"), o.call(a, function() {
                    r.dequeue(a, t1);
                }));
            });
        }, r.fn = r.prototype = {
            init: function(e1) {
                if (e1.nodeType) return this[0] = e1, this;
                throw new Error("Not a DOM node.");
            },
            offset: function() {
                var t1 = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t1.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t1.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                };
            },
            position: function() {
                function e1() {
                    for(var e2 = this.offsetParent || document; e2 && "html" === !e2.nodeType.toLowerCase && "static" === e2.style.position;)e2 = e2.offsetParent;
                    return e2 || document;
                }
                var t1 = this[0], e1 = e1.apply(t1), a = this.offset(), n = /^(?:body|html)$/i.test(e1.nodeName) ? {
                    top: 0,
                    left: 0
                } : r(e1).offset();
                return a.top -= parseFloat(t1.style.marginTop) || 0, a.left -= parseFloat(t1.style.marginLeft) || 0, e1.style && (n.top += parseFloat(e1.style.borderTopWidth) || 0, n.left += parseFloat(e1.style.borderLeftWidth) || 0), {
                    top: a.top - n.top,
                    left: a.left - n.left
                };
            }
        };
        var a = {
        };
        r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
        for(var n = {
        }, o = n.hasOwnProperty, i = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)n["[object " + s[l] + "]"] = s[l].toLowerCase();
        r.fn.init.prototype = r.fn, e.Velocity = {
            Utilities: r
        };
    }
}(window), (function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
})(function() {
    return (function(e, t, r, a) {
        function n9(e1) {
            for(var t1 = -1, r1 = e1 ? e1.length : 0, a1 = []; ++t1 < r1;){
                var n1 = e1[t1];
                n1 && a1.push(n1);
            }
            return a1;
        }
        function o6(e1) {
            return m.isWrapped(e1) ? e1 = [].slice.call(e1) : m.isNode(e1) && (e1 = [
                e1
            ]), e1;
        }
        function i(e1) {
            var t1 = f.data(e1, "velocity");
            return null === t1 ? a : t1;
        }
        function s6(e1) {
            return function(t1) {
                return Math.round(t1 * e1) * (1 / e1);
            };
        }
        function l3(e1, r1, a1, n2) {
            function o1(e2, t1) {
                return 1 - 3 * t1 + 3 * e2;
            }
            function i1(e2, t1) {
                return 3 * t1 - 6 * e2;
            }
            function s1(e2) {
                return 3 * e2;
            }
            function l1(e2, t1, r2) {
                return ((o1(t1, r2) * e2 + i1(t1, r2)) * e2 + s1(t1)) * e2;
            }
            function u(e2, t1, r2) {
                return 3 * o1(t1, r2) * e2 * e2 + 2 * i1(t1, r2) * e2 + s1(t1);
            }
            function c(t1, r2) {
                for(var n3 = 0; m > n3; ++n3){
                    var o2 = u(r2, e1, a1);
                    if (0 === o2) return r2;
                    var i2 = l1(r2, e1, a1) - t1;
                    r2 -= i2 / o2;
                }
                return r2;
            }
            function p() {
                for(var t1 = 0; b > t1; ++t1)w[t1] = l1(t1 * x, e1, a1);
            }
            function f(t1, r2, n3) {
                var o3, i3, s2 = 0;
                do i3 = r2 + (n3 - r2) / 2, o3 = l1(i3, e1, a1) - t1, o3 > 0 ? n3 = i3 : r2 = i3;
                while (Math.abs(o3) > h && ++s2 < v)
                return i3;
            }
            function d(t1) {
                for(var r2 = 0, n3 = 1, o3 = b - 1; n3 != o3 && w[n3] <= t1; ++n3)r2 += x;
                --n3;
                var i3 = (t1 - w[n3]) / (w[n3 + 1] - w[n3]), s2 = r2 + i3 * x, l2 = u(s2, e1, a1);
                return l2 >= y ? c(t1, s2) : 0 == l2 ? s2 : f(t1, r2, r2 + x);
            }
            function g() {
                V = !0, (e1 != r1 || a1 != n2) && p();
            }
            var m = 4, y = 0.001, h = 0.0000001, v = 10, b = 11, x = 1 / (b - 1), S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for(var P = 0; 4 > P; ++P)if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e1 = Math.min(e1, 1), a1 = Math.min(a1, 1), e1 = Math.max(e1, 0), a1 = Math.max(a1, 0);
            var w = S ? new Float32Array(b) : new Array(b), V = !1, C = function(t1) {
                return V || g(), e1 === r1 && a1 === n2 ? t1 : 0 === t1 ? 0 : 1 === t1 ? 1 : l1(d(t1), r1, n2);
            };
            C.getControlPoints = function() {
                return [
                    {
                        x: e1,
                        y: r1
                    },
                    {
                        x: a1,
                        y: n2
                    }
                ];
            };
            var T = "generateBezier(" + [
                e1,
                r1,
                a1,
                n2
            ] + ")";
            return C.toString = function() {
                return T;
            }, C;
        }
        function u2(e1, t1) {
            var r1 = e1;
            return m.isString(e1) ? b.Easings[e1] || (r1 = !1) : r1 = m.isArray(e1) && 1 === e1.length ? s6.apply(null, e1) : m.isArray(e1) && 2 === e1.length ? x.apply(null, e1.concat([
                t1
            ])) : m.isArray(e1) && 4 === e1.length ? l3.apply(null, e1) : !1, r1 === !1 && (r1 = b.Easings[b.defaults.easing] ? b.defaults.easing : v1), r1;
        }
        function c(e1) {
            if (e1) {
                var t1 = (new Date).getTime(), r1 = b.State.calls.length;
                r1 > 10000 && (b.State.calls = n9(b.State.calls));
                for(var o1 = 0; r1 > o1; o1++)if (b.State.calls[o1]) {
                    var s1 = b.State.calls[o1], l1 = s1[0], u1 = s1[2], d = s1[3], g = !!d, y = null;
                    d || (d = b.State.calls[o1][3] = t1 - 16);
                    for(var h = Math.min((t1 - d) / u1.duration, 1), v = 0, x = l1.length; x > v; v++){
                        var P = l1[v], V = P.element;
                        if (i(V)) {
                            var C = !1;
                            if (u1.display !== a && null !== u1.display && "none" !== u1.display) {
                                if ("flex" === u1.display) {
                                    var T = [
                                        "-webkit-box",
                                        "-moz-box",
                                        "-ms-flexbox",
                                        "-webkit-flex"
                                    ];
                                    f.each(T, function(e2, t2) {
                                        S.setPropertyValue(V, "display", t2);
                                    });
                                }
                                S.setPropertyValue(V, "display", u1.display);
                            }
                            u1.visibility !== a && "hidden" !== u1.visibility && S.setPropertyValue(V, "visibility", u1.visibility);
                            for(var k in P)if ("element" !== k) {
                                var A, F = P[k], j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;
                                if (1 === h) A = F.endValue;
                                else {
                                    var E = F.endValue - F.startValue;
                                    if (A = F.startValue + E * j(h, u1, E), !g && A === F.currentValue) continue;
                                }
                                if (F.currentValue = A, "tween" === k) y = A;
                                else {
                                    if (S.Hooks.registered[k]) {
                                        var H = S.Hooks.getRoot(k), N = i(V).rootPropertyValueCache[H];
                                        N && (F.rootPropertyValue = N);
                                    }
                                    var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);
                                    S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0);
                                }
                            }
                            u1.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V);
                        }
                    }
                    u1.display !== a && "none" !== u1.display && (b.State.calls[o1][2].display = !1), u1.visibility !== a && "hidden" !== u1.visibility && (b.State.calls[o1][2].visibility = !1), u1.progress && u1.progress.call(s1[1], s1[1], h, Math.max(0, d + u1.duration - t1), d, y), 1 === h && p(o1);
                }
            }
            b.State.isTicking && w(c);
        }
        function p(e1, t2) {
            if (!b.State.calls[e1]) return !1;
            for(var r2 = b.State.calls[e1][0], n2 = b.State.calls[e1][1], o3 = b.State.calls[e1][2], s2 = b.State.calls[e1][4], l2 = !1, u2 = 0, c1 = r2.length; c1 > u2; u2++){
                var p1 = r2[u2].element;
                if (t2 || o3.loop || ("none" === o3.display && S.setPropertyValue(p1, "display", o3.display), "hidden" === o3.visibility && S.setPropertyValue(p1, "visibility", o3.visibility)), o3.loop !== !0 && (f.queue(p1)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p1)[1])) && i(p1)) {
                    i(p1).isAnimating = !1, i(p1).rootPropertyValueCache = {
                    };
                    var d = !1;
                    f.each(S.Lists.transforms3D, function(e2, t3) {
                        var r3 = /^scale/.test(t3) ? 1 : 0, n3 = i(p1).transformCache[t3];
                        i(p1).transformCache[t3] !== a && new RegExp("^\\(" + r3 + "[^.]").test(n3) && (d = !0, delete i(p1).transformCache[t3]);
                    }), o3.mobileHA && (d = !0, delete i(p1).transformCache.translate3d), d && S.flushTransformCache(p1), S.Values.removeClass(p1, "velocity-animating");
                }
                if (!t2 && o3.complete && !o3.loop && u2 === c1 - 1) try {
                    o3.complete.call(n2, n2);
                } catch (g) {
                    setTimeout(function() {
                        throw g;
                    }, 1);
                }
                s2 && o3.loop !== !0 && s2(n2), i(p1) && o3.loop === !0 && !t2 && (f.each(i(p1).tweensContainer, function(e2, t3) {
                    /^rotate/.test(e2) && 360 === parseFloat(t3.endValue) && (t3.endValue = 0, t3.startValue = 360), /^backgroundPosition/.test(e2) && 100 === parseFloat(t3.endValue) && "%" === t3.unitType && (t3.endValue = 0, t3.startValue = 100);
                }), b(p1, "reverse", {
                    loop: !0,
                    delay: o3.delay
                })), o3.queue !== !1 && f.dequeue(p1, o3.queue);
            }
            b.State.calls[e1] = !1;
            for(var m = 0, y = b.State.calls.length; y > m; m++)if (b.State.calls[m] !== !1) {
                l2 = !0;
                break;
            }
            l2 === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
        }
        var f, d = function() {
            if (r.documentMode) return r.documentMode;
            for(var e1 = 7; e1 > 4; e1--){
                var t2 = r.createElement("div");
                if (t2.innerHTML = "<!--[if IE " + e1 + "]><span></span><![endif]-->", t2.getElementsByTagName("span").length) return t2 = null, e1;
            }
            return a;
        }(), g3 = function() {
            var e1 = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t3) {
                var r2, a1 = (new Date).getTime();
                return r2 = Math.max(0, 16 - (a1 - e1)), e1 = a1 + r2, setTimeout(function() {
                    t3(a1 + r2);
                }, r2);
            };
        }(), m = {
            isString: function(e1) {
                return "string" == typeof e1;
            },
            isArray: Array.isArray || function(e1) {
                return "[object Array]" === Object.prototype.toString.call(e1);
            },
            isFunction: function(e1) {
                return "[object Function]" === Object.prototype.toString.call(e1);
            },
            isNode: function(e1) {
                return e1 && e1.nodeType;
            },
            isNodeList: function(e1) {
                return "object" == typeof e1 && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e1)) && e1.length !== a && (0 === e1.length || "object" == typeof e1[0] && e1[0].nodeType > 0);
            },
            isWrapped: function(e1) {
                return e1 && (e1.jquery || t.Zepto && t.Zepto.zepto.isZ(e1));
            },
            isSVG: function(e1) {
                return t.SVGElement && e1 instanceof t.SVGElement;
            },
            isEmptyObject: function(e1) {
                for(var t3 in e1)return !1;
                return !0;
            }
        }, y1 = !1;
        if (e.fn && e.fn.jquery ? (f = e, y1 = !0) : f = t.Velocity.Utilities, 8 >= d && !y1) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= d) return void (jQuery.fn.velocity = jQuery.fn.animate);
        var h = 400, v1 = "swing", b = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: r.createElement("div"),
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
            Utilities: f,
            Redirects: {
            },
            Easings: {
            },
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: h,
                easing: v1,
                begin: a,
                complete: a,
                progress: a,
                display: a,
                visibility: a,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e1) {
                f.data(e1, "velocity", {
                    isSVG: m.isSVG(e1),
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
        t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var x = function() {
            function e1(e2) {
                return -e2.tension * e2.x - e2.friction * e2.v;
            }
            function t3(t4, r2, a1) {
                var n2 = {
                    x: t4.x + a1.dx * r2,
                    v: t4.v + a1.dv * r2,
                    tension: t4.tension,
                    friction: t4.friction
                };
                return {
                    dx: n2.v,
                    dv: e1(n2)
                };
            }
            function r2(r3, a1) {
                var n2 = {
                    dx: r3.v,
                    dv: e1(r3)
                }, o3 = t3(r3, 0.5 * a1, n2), i1 = t3(r3, 0.5 * a1, o3), s2 = t3(r3, a1, i1), l2 = 1 / 6 * (n2.dx + 2 * (o3.dx + i1.dx) + s2.dx), u2 = 1 / 6 * (n2.dv + 2 * (o3.dv + i1.dv) + s2.dv);
                return r3.x = r3.x + l2 * a1, r3.v = r3.v + u2 * a1, r3;
            }
            return function a1(e2, t4, n2) {
                var o3, i1, s2, l2 = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, u2 = [
                    0
                ], c1 = 0, p2 = 0.0001, f1 = 0.016;
                for(e2 = parseFloat(e2) || 500, t4 = parseFloat(t4) || 20, n2 = n2 || null, l2.tension = e2, l2.friction = t4, o3 = null !== n2, o3 ? (c1 = a1(e2, t4), i1 = c1 / n2 * f1) : i1 = f1; s2 = r2(s2 || l2, i1), u2.push(1 + s2.x), c1 += 16, Math.abs(s2.x) > p2 && Math.abs(s2.v) > p2;);
                return o3 ? function(e3) {
                    return u2[e3 * (u2.length - 1) | 0];
                } : c1;
            };
        }();
        b.Easings = {
            linear: function(e1) {
                return e1;
            },
            swing: function(e1) {
                return 0.5 - Math.cos(e1 * Math.PI) / 2;
            },
            spring: function(e1) {
                return 1 - Math.cos(4.5 * e1 * Math.PI) * Math.exp(6 * -e1);
            }
        }, f.each([
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
        ], function(e1, t3) {
            b.Easings[t3[0]] = l3.apply(null, t3[1]);
        });
        var S = b.CSS = {
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
                    for(var e1 = 0; e1 < S.Lists.colors.length; e1++){
                        var t3 = "color" === S.Lists.colors[e1] ? "0 0 0 1" : "255 255 255 1";
                        S.Hooks.templates[S.Lists.colors[e1]] = [
                            "Red Green Blue Alpha",
                            t3
                        ];
                    }
                    var r2, a1, n2;
                    if (d) for(r2 in S.Hooks.templates){
                        a1 = S.Hooks.templates[r2], n2 = a1[0].split(" ");
                        var o3 = a1[1].match(S.RegEx.valueSplit);
                        "Color" === n2[0] && (n2.push(n2.shift()), o3.push(o3.shift()), S.Hooks.templates[r2] = [
                            n2.join(" "),
                            o3.join(" ")
                        ]);
                    }
                    for(r2 in S.Hooks.templates){
                        a1 = S.Hooks.templates[r2], n2 = a1[0].split(" ");
                        for(var e1 in n2){
                            var i1 = r2 + n2[e1], s2 = e1;
                            S.Hooks.registered[i1] = [
                                r2,
                                s2
                            ];
                        }
                    }
                },
                getRoot: function(e1) {
                    var t4 = S.Hooks.registered[e1];
                    return t4 ? t4[0] : e1;
                },
                cleanRootPropertyValue: function(e1, t4) {
                    return S.RegEx.valueUnwrap.test(t4) && (t4 = t4.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t4) && (t4 = S.Hooks.templates[e1][1]), t4;
                },
                extractValue: function(e1, t4) {
                    var r2 = S.Hooks.registered[e1];
                    if (r2) {
                        var a1 = r2[0], n2 = r2[1];
                        return t4 = S.Hooks.cleanRootPropertyValue(a1, t4), t4.toString().match(S.RegEx.valueSplit)[n2];
                    }
                    return t4;
                },
                injectValue: function(e1, t4, r2) {
                    var a2 = S.Hooks.registered[e1];
                    if (a2) {
                        var n3, o4, i3 = a2[0], s3 = a2[1];
                        return r2 = S.Hooks.cleanRootPropertyValue(i3, r2), n3 = r2.toString().match(S.RegEx.valueSplit), n3[s3] = t4, o4 = n3.join(" ");
                    }
                    return r2;
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e1, t4, r2) {
                        switch(e1){
                            case "name":
                                return "clip";
                            case "extract":
                                var a2;
                                return S.RegEx.wrappedValueAlreadyExtracted.test(r2) ? a2 = r2 : (a2 = r2.toString().match(S.RegEx.valueUnwrap), a2 = a2 ? a2[1].replace(/,(\s+)?/g, " ") : r2), a2;
                            case "inject":
                                return "rect(" + r2 + ")";
                        }
                    },
                    blur: function(e1, t4, r2) {
                        switch(e1){
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var a2 = parseFloat(r2);
                                if (!a2 && 0 !== a2) {
                                    var n4 = r2.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a2 = n4 ? n4[1] : 0;
                                }
                                return a2;
                            case "inject":
                                return parseFloat(r2) ? "blur(" + r2 + ")" : "none";
                        }
                    },
                    opacity: function(e1, t4, r2) {
                        if (8 >= d) switch(e1){
                            case "name":
                                return "filter";
                            case "extract":
                                var a2 = r2.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r2 = a2 ? a2[1] / 100 : 1;
                            case "inject":
                                return t4.style.zoom = 1, parseFloat(r2) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r2), 10) + ")";
                        }
                        else switch(e1){
                            case "name":
                                return "opacity";
                            case "extract":
                                return r2;
                            case "inject":
                                return r2;
                        }
                    }
                },
                register: function() {
                    9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
                    for(var e1 = 0; e1 < S.Lists.transformsBase.length; e1++)!function() {
                        var t4 = S.Lists.transformsBase[e1];
                        S.Normalizations.registered[t4] = function(e2, r2, n5) {
                            switch(e2){
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r2) === a || i(r2).transformCache[t4] === a ? /^scale/i.test(t4) ? 1 : 0 : i(r2).transformCache[t4].replace(/[()]/g, "");
                                case "inject":
                                    var o5 = !1;
                                    switch(t4.substr(0, t4.length - 1)){
                                        case "translate":
                                            o5 = !/(%|px|em|rem|vw|vh|\d)$/i.test(n5);
                                            break;
                                        case "scal":
                                        case "scale":
                                            b.State.isAndroid && i(r2).transformCache[t4] === a && 1 > n5 && (n5 = 1), o5 = !/(\d)$/i.test(n5);
                                            break;
                                        case "skew":
                                            o5 = !/(deg|\d)$/i.test(n5);
                                            break;
                                        case "rotate":
                                            o5 = !/(deg|\d)$/i.test(n5);
                                    }
                                    return o5 || (i(r2).transformCache[t4] = "(" + n5 + ")"), i(r2).transformCache[t4];
                            }
                        };
                    }();
                    for(var e1 = 0; e1 < S.Lists.colors.length; e1++)!function() {
                        var t4 = S.Lists.colors[e1];
                        S.Normalizations.registered[t4] = function(e2, r2, n5) {
                            switch(e2){
                                case "name":
                                    return t4;
                                case "extract":
                                    var o5;
                                    if (S.RegEx.wrappedValueAlreadyExtracted.test(n5)) o5 = n5;
                                    else {
                                        var i4, s4 = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n5) ? i4 = s4[n5] !== a ? s4[n5] : s4.black : S.RegEx.isHex.test(n5) ? i4 = "rgb(" + S.Values.hexToRgb(n5).join(" ") + ")" : /^rgba?\(/i.test(n5) || (i4 = s4.black), o5 = (i4 || n5).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                    }
                                    return 8 >= d || 3 !== o5.split(" ").length || (o5 += " 1"), o5;
                                case "inject":
                                    return 8 >= d ? 4 === n5.split(" ").length && (n5 = n5.split(/\s+/).slice(0, 3).join(" ")) : 3 === n5.split(" ").length && (n5 += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n5.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }
                        };
                    }();
                }
            },
            Names: {
                camelCase: function(e1) {
                    return e1.replace(/-(\w)/g, function(e2, t4) {
                        return t4.toUpperCase();
                    });
                },
                SVGAttribute: function(e1) {
                    var t4 = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (d || b.State.isAndroid && !b.State.isChrome) && (t4 += "|transform"), new RegExp("^(" + t4 + ")$", "i").test(e1);
                },
                prefixCheck: function(e1) {
                    if (b.State.prefixMatches[e1]) return [
                        b.State.prefixMatches[e1],
                        !0
                    ];
                    for(var t4 = [
                        "",
                        "Webkit",
                        "Moz",
                        "ms",
                        "O"
                    ], r2 = 0, a2 = t4.length; a2 > r2; r2++){
                        var n5;
                        if (n5 = 0 === r2 ? e1 : t4[r2] + e1.replace(/^\w/, function(e2) {
                            return e2.toUpperCase();
                        }), m.isString(b.State.prefixElement.style[n5])) return b.State.prefixMatches[e1] = n5, [
                            n5,
                            !0
                        ];
                    }
                    return [
                        e1,
                        !1
                    ];
                }
            },
            Values: {
                hexToRgb: function(e1) {
                    var t4, r2 = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, a2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e1 = e1.replace(r2, function(e2, t5, r3, a3) {
                        return t5 + t5 + r3 + r3 + a3 + a3;
                    }), t4 = a2.exec(e1), t4 ? [
                        parseInt(t4[1], 16),
                        parseInt(t4[2], 16),
                        parseInt(t4[3], 16)
                    ] : [
                        0,
                        0,
                        0
                    ];
                },
                isCSSNullValue: function(e1) {
                    return 0 == e1 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e1);
                },
                getUnitType: function(e1) {
                    return /^(rotate|skew)/i.test(e1) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e1) ? "" : "px";
                },
                getDisplayType: function(e1) {
                    var t4 = e1 && e1.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t4) ? "inline" : /^(li)$/i.test(t4) ? "list-item" : /^(tr)$/i.test(t4) ? "table-row" : /^(table)$/i.test(t4) ? "table" : /^(tbody)$/i.test(t4) ? "table-row-group" : "block";
                },
                addClass: function(e1, t4) {
                    e1.classList ? e1.classList.add(t4) : e1.className += (e1.className.length ? " " : "") + t4;
                },
                removeClass: function(e1, t4) {
                    e1.classList ? e1.classList.remove(t4) : e1.className = e1.className.toString().replace(new RegExp("(^|\\s)" + t4.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                }
            },
            getPropertyValue: function(e1, r2, n6, o5) {
                function s5(e2, r3) {
                    function n7() {
                        u3 && S.setPropertyValue(e2, "display", "none");
                    }
                    var l2 = 0;
                    if (8 >= d) l2 = f.css(e2, r3);
                    else {
                        var u3 = !1;
                        if (/^(width|height)$/.test(r3) && 0 === S.getPropertyValue(e2, "display") && (u3 = !0, S.setPropertyValue(e2, "display", S.Values.getDisplayType(e2))), !o5) {
                            if ("height" === r3 && "border-box" !== S.getPropertyValue(e2, "boxSizing").toString().toLowerCase()) {
                                var c1 = e2.offsetHeight - (parseFloat(S.getPropertyValue(e2, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e2, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e2, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e2, "paddingBottom")) || 0);
                                return n7(), c1;
                            }
                            if ("width" === r3 && "border-box" !== S.getPropertyValue(e2, "boxSizing").toString().toLowerCase()) {
                                var p2 = e2.offsetWidth - (parseFloat(S.getPropertyValue(e2, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e2, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e2, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e2, "paddingRight")) || 0);
                                return n7(), p2;
                            }
                        }
                        var g1;
                        g1 = i(e2) === a ? t.getComputedStyle(e2, null) : i(e2).computedStyle ? i(e2).computedStyle : i(e2).computedStyle = t.getComputedStyle(e2, null), "borderColor" === r3 && (r3 = "borderTopColor"), l2 = 9 === d && "filter" === r3 ? g1.getPropertyValue(r3) : g1[r3], ("" === l2 || null === l2) && (l2 = e2.style[r3]), n7();
                    }
                    if ("auto" === l2 && /^(top|right|bottom|left)$/i.test(r3)) {
                        var m1 = s5(e2, "position");
                        ("fixed" === m1 || "absolute" === m1 && /top|left/i.test(r3)) && (l2 = f(e2).position()[r3] + "px");
                    }
                    return l2;
                }
                var l2;
                if (S.Hooks.registered[r2]) {
                    var u4 = r2, c2 = S.Hooks.getRoot(u4);
                    n6 === a && (n6 = S.getPropertyValue(e1, S.Names.prefixCheck(c2)[0])), S.Normalizations.registered[c2] && (n6 = S.Normalizations.registered[c2]("extract", e1, n6)), l2 = S.Hooks.extractValue(u4, n6);
                } else if (S.Normalizations.registered[r2]) {
                    var p3, g2;
                    p3 = S.Normalizations.registered[r2]("name", e1), "transform" !== p3 && (g2 = s5(e1, S.Names.prefixCheck(p3)[0]), S.Values.isCSSNullValue(g2) && S.Hooks.templates[r2] && (g2 = S.Hooks.templates[r2][1])), l2 = S.Normalizations.registered[r2]("extract", e1, g2);
                }
                if (!/^[\d-]/.test(l2)) if (i(e1) && i(e1).isSVG && S.Names.SVGAttribute(r2)) if (/^(height|width)$/i.test(r2)) try {
                    l2 = e1.getBBox()[r2];
                } catch (m2) {
                    l2 = 0;
                }
                else l2 = e1.getAttribute(r2);
                else l2 = s5(e1, S.Names.prefixCheck(r2)[0]);
                return S.Values.isCSSNullValue(l2) && (l2 = 0), b.debug >= 2 && console.log("Get " + r2 + ": " + l2), l2;
            },
            setPropertyValue: function(e1, r2, a2, n6, o5) {
                var s5 = r2;
                if ("scroll" === r2) o5.container ? o5.container["scroll" + o5.direction] = a2 : "Left" === o5.direction ? t.scrollTo(a2, o5.alternateValue) : t.scrollTo(o5.alternateValue, a2);
                else if (S.Normalizations.registered[r2] && "transform" === S.Normalizations.registered[r2]("name", e1)) S.Normalizations.registered[r2]("inject", e1, a2), s5 = "transform", a2 = i(e1).transformCache[r2];
                else {
                    if (S.Hooks.registered[r2]) {
                        var l2 = r2, u5 = S.Hooks.getRoot(r2);
                        n6 = n6 || S.getPropertyValue(e1, u5), a2 = S.Hooks.injectValue(l2, a2, n6), r2 = u5;
                    }
                    if (S.Normalizations.registered[r2] && (a2 = S.Normalizations.registered[r2]("inject", e1, a2), r2 = S.Normalizations.registered[r2]("name", e1)), s5 = S.Names.prefixCheck(r2)[0], 8 >= d) try {
                        e1.style[s5] = a2;
                    } catch (c3) {
                        b.debug && console.log("Browser does not support [" + a2 + "] for [" + s5 + "]");
                    }
                    else i(e1) && i(e1).isSVG && S.Names.SVGAttribute(r2) ? e1.setAttribute(r2, a2) : e1.style[s5] = a2;
                    b.debug >= 2 && console.log("Set " + r2 + " (" + s5 + "): " + a2);
                }
                return [
                    s5,
                    a2
                ];
            },
            flushTransformCache: function(e1) {
                function t4(t5) {
                    return parseFloat(S.getPropertyValue(e1, t5));
                }
                var r2 = "";
                if ((d || b.State.isAndroid && !b.State.isChrome) && i(e1).isSVG) {
                    var a2 = {
                        translate: [
                            t4("translateX"),
                            t4("translateY")
                        ],
                        skewX: [
                            t4("skewX")
                        ],
                        skewY: [
                            t4("skewY")
                        ],
                        scale: 1 !== t4("scale") ? [
                            t4("scale"),
                            t4("scale")
                        ] : [
                            t4("scaleX"),
                            t4("scaleY")
                        ],
                        rotate: [
                            t4("rotateZ"),
                            0,
                            0
                        ]
                    };
                    f.each(i(e1).transformCache, function(e2) {
                        /^translate/i.test(e2) ? e2 = "translate" : /^scale/i.test(e2) ? e2 = "scale" : /^rotate/i.test(e2) && (e2 = "rotate"), a2[e2] && (r2 += e2 + "(" + a2[e2].join(" ") + ") ", delete a2[e2]);
                    });
                } else {
                    var n6, o5;
                    f.each(i(e1).transformCache, function(t5) {
                        return n6 = i(e1).transformCache[t5], "transformPerspective" === t5 ? (o5 = n6, !0) : (9 === d && "rotateZ" === t5 && (t5 = "rotate"), void (r2 += t5 + n6 + " "));
                    }), o5 && (r2 = "perspective" + o5 + " " + r2);
                }
                S.setPropertyValue(e1, "transform", r2);
            }
        };
        S.Hooks.register(), S.Normalizations.register(), b.hook = function(e1, t4, r2) {
            var n7 = a;
            return e1 = o6(e1), f.each(e1, function(e2, o6) {
                if (i(o6) === a && b.init(o6), r2 === a) n7 === a && (n7 = b.CSS.getPropertyValue(o6, t4));
                else {
                    var s5 = b.CSS.setPropertyValue(o6, t4, r2);
                    "transform" === s5[0] && b.CSS.flushTransformCache(o6), n7 = s5;
                }
            }), n7;
        };
        var P = function() {
            function e1() {
                return s8 ? k.promise || null : l5;
            }
            function n7() {
                function e2(e3) {
                    function p4(e4, t4) {
                        var r2 = a, n8 = a, i5 = a;
                        return m.isArray(e4) ? (r2 = e4[0], !m.isArray(e4[1]) && /^[\d-]/.test(e4[1]) || m.isFunction(e4[1]) || S.RegEx.isHex.test(e4[1]) ? i5 = e4[1] : (m.isString(e4[1]) && !S.RegEx.isHex.test(e4[1]) || m.isArray(e4[1])) && (n8 = t4 ? e4[1] : u2(e4[1], s8.duration), e4[2] !== a && (i5 = e4[2]))) : r2 = e4, t4 || (n8 = n8 || s8.easing), m.isFunction(r2) && (r2 = r2.call(o8, V, w)), m.isFunction(i5) && (i5 = i5.call(o8, V, w)), [
                            r2 || 0,
                            n8,
                            i5
                        ];
                    }
                    function d1(e4, t4) {
                        var r2, a3;
                        return a3 = (t4 || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e5) {
                            return r2 = e5, "";
                        }), r2 || (r2 = S.Values.getUnitType(e4)), [
                            a3,
                            r2
                        ];
                    }
                    function h1() {
                        var e4 = {
                            myParent: o8.parentNode || r.body,
                            position: S.getPropertyValue(o8, "position"),
                            fontSize: S.getPropertyValue(o8, "fontSize")
                        }, a3 = e4.position === L.lastPosition && e4.myParent === L.lastParent, n8 = e4.fontSize === L.lastFontSize;
                        L.lastParent = e4.myParent, L.lastPosition = e4.position, L.lastFontSize = e4.fontSize;
                        var s7 = 100, l4 = {
                        };
                        if (n8 && a3) l4.emToPx = L.lastEmToPx, l4.percentToPxWidth = L.lastPercentToPxWidth, l4.percentToPxHeight = L.lastPercentToPxHeight;
                        else {
                            var u6 = i(o8).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            b.init(u6), e4.myParent.appendChild(u6), f.each([
                                "overflow",
                                "overflowX",
                                "overflowY"
                            ], function(e5, t4) {
                                b.CSS.setPropertyValue(u6, t4, "hidden");
                            }), b.CSS.setPropertyValue(u6, "position", e4.position), b.CSS.setPropertyValue(u6, "fontSize", e4.fontSize), b.CSS.setPropertyValue(u6, "boxSizing", "content-box"), f.each([
                                "minWidth",
                                "maxWidth",
                                "width",
                                "minHeight",
                                "maxHeight",
                                "height"
                            ], function(e5, t4) {
                                b.CSS.setPropertyValue(u6, t4, s7 + "%");
                            }), b.CSS.setPropertyValue(u6, "paddingLeft", s7 + "em"), l4.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u6, "width", null, !0)) || 1) / s7, l4.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u6, "height", null, !0)) || 1) / s7, l4.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u6, "paddingLeft")) || 1) / s7, e4.myParent.removeChild(u6);
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l4.remToPx = L.remToPx, l4.vwToPx = L.vwToPx, l4.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l4), o8), l4;
                    }
                    if (s8.begin && 0 === V) try {
                        s8.begin.call(g4, g4);
                    } catch (x1) {
                        setTimeout(function() {
                            throw x1;
                        }, 1);
                    }
                    if ("scroll" === A) {
                        var P1, C, T, F = /^x$/i.test(s8.axis) ? "Left" : "Top", j = parseFloat(s8.offset) || 0;
                        s8.container ? m.isWrapped(s8.container) || m.isNode(s8.container) ? (s8.container = s8.container[0] || s8.container, P1 = s8.container["scroll" + F], T = P1 + f(o8).position()[F.toLowerCase()] + j) : s8.container = null : (P1 = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o8).offset()[F.toLowerCase()] + j), l5 = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: P1,
                                currentValue: P1,
                                endValue: T,
                                unitType: "",
                                easing: s8.easing,
                                scrollData: {
                                    container: s8.container,
                                    direction: F,
                                    alternateValue: C
                                }
                            },
                            element: o8
                        }, b.debug && console.log("tweensContainer (scroll): ", l5.scroll, o8);
                    } else if ("reverse" === A) {
                        if (!i(o8).tweensContainer) return void f.dequeue(o8, s8.queue);
                        "none" === i(o8).opts.display && (i(o8).opts.display = "auto"), "hidden" === i(o8).opts.visibility && (i(o8).opts.visibility = "visible"), i(o8).opts.loop = !1, i(o8).opts.begin = null, i(o8).opts.complete = null, v2.easing || delete s8.easing, v2.duration || delete s8.duration, s8 = f.extend({
                        }, i(o8).opts, s8);
                        var E = f.extend(!0, {
                        }, i(o8).tweensContainer);
                        for(var H in E)if ("element" !== H) {
                            var N = E[H].startValue;
                            E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v2) || (E[H].easing = s8.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o8);
                        }
                        l5 = E;
                    } else if ("start" === A) {
                        var E;
                        i(o8).tweensContainer && i(o8).isAnimating === !0 && (E = i(o8).tweensContainer), f.each(y2, function(e4, t4) {
                            if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e4)) {
                                var r2 = p4(t4, !0), n8 = r2[0], o7 = r2[1], i5 = r2[2];
                                if (S.RegEx.isHex.test(n8)) {
                                    for(var s7 = [
                                        "Red",
                                        "Green",
                                        "Blue"
                                    ], l4 = S.Values.hexToRgb(n8), u7 = i5 ? S.Values.hexToRgb(i5) : a, c3 = 0; c3 < s7.length; c3++){
                                        var f1 = [
                                            l4[c3]
                                        ];
                                        o7 && f1.push(o7), u7 !== a && f1.push(u7[c3]), y2[e4 + s7[c3]] = f1;
                                    }
                                    delete y2[e4];
                                }
                            }
                        });
                        for(var z in y2){
                            var O = p4(y2[z]), q = O[0], $ = O[1], M = O[2];
                            z = S.Names.camelCase(z);
                            var I = S.Hooks.getRoot(z), B = !1;
                            if (i(o8).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
                                (s8.display !== a && null !== s8.display && "none" !== s8.display || s8.visibility !== a && "hidden" !== s8.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s8._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o8).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o8, I), M = S.getPropertyValue(o8, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o8, z));
                                var W, G, Y, D = !1;
                                if (W = d1(z, M), M = W[0], Y = W[1], W = d1(z, q), q = W[0].replace(/^([+-\/*])=/, function(e4, t4) {
                                    return D = t4, "";
                                }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D)) G = Y;
                                else if (Y !== G && 0 !== M) if (0 === q) G = Y;
                                else {
                                    n10 = n10 || h1();
                                    var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                                    switch(Y){
                                        case "%":
                                            M *= "x" === Q ? n10.percentToPxWidth : n10.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            M *= n10[Y + "ToPx"];
                                    }
                                    switch(G){
                                        case "%":
                                            M *= 1 / ("x" === Q ? n10.percentToPxWidth : n10.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            M *= 1 / n10[G + "ToPx"];
                                    }
                                }
                                switch(D){
                                    case "+":
                                        q = M + q;
                                        break;
                                    case "-":
                                        q = M - q;
                                        break;
                                    case "*":
                                        q = M * q;
                                        break;
                                    case "/":
                                        q = M / q;
                                }
                                l5[z] = {
                                    rootPropertyValue: B,
                                    startValue: M,
                                    currentValue: M,
                                    endValue: q,
                                    unitType: G,
                                    easing: $
                                }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l5[z]), o8);
                            } else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
                        }
                        l5.element = o8;
                    }
                    l5.element && (S.Values.addClass(o8, "velocity-animating"), R.push(l5), "" === s8.queue && (i(o8).tweensContainer = l5, i(o8).opts = s8), i(o8).isAnimating = !0, V === w - 1 ? (b.State.calls.push([
                        R,
                        g4,
                        s8,
                        null,
                        k.resolver
                    ]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++);
                }
                var n10, o8 = this, s8 = f.extend({
                }, b.defaults, v2), l5 = {
                };
                switch(i(o8) === a && b.init(o8), parseFloat(s8.delay) && s8.queue !== !1 && f.queue(o8, s8.queue, function(e3) {
                    b.velocityQueueEntryFlag = !0, i(o8).delayTimer = {
                        setTimeout: setTimeout(e3, parseFloat(s8.delay)),
                        next: e3
                    };
                }), s8.duration.toString().toLowerCase()){
                    case "fast":
                        s8.duration = 200;
                        break;
                    case "normal":
                        s8.duration = h;
                        break;
                    case "slow":
                        s8.duration = 600;
                        break;
                    default:
                        s8.duration = parseFloat(s8.duration) || 1;
                }
                b.mock !== !1 && (b.mock === !0 ? s8.duration = s8.delay = 1 : (s8.duration *= parseFloat(b.mock) || 1, s8.delay *= parseFloat(b.mock) || 1)), s8.easing = u2(s8.easing, s8.duration), s8.begin && !m.isFunction(s8.begin) && (s8.begin = null), s8.progress && !m.isFunction(s8.progress) && (s8.progress = null), s8.complete && !m.isFunction(s8.complete) && (s8.complete = null), s8.display !== a && null !== s8.display && (s8.display = s8.display.toString().toLowerCase(), "auto" === s8.display && (s8.display = b.CSS.Values.getDisplayType(o8))), s8.visibility !== a && null !== s8.visibility && (s8.visibility = s8.visibility.toString().toLowerCase()), s8.mobileHA = s8.mobileHA && b.State.isMobile && !b.State.isGingerbread, s8.queue === !1 ? s8.delay ? setTimeout(e2, s8.delay) : e2() : f.queue(o8, s8.queue, function(t4, r3) {
                    return r3 === !0 ? (k.promise && k.resolver(g4), !0) : (b.velocityQueueEntryFlag = !0, void e2(t4));
                }), "" !== s8.queue && "fx" !== s8.queue || "inprogress" === f.queue(o8)[0] || f.dequeue(o8);
            }
            var s8, l5, d1, g4, y2, v2, x1 = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
            if (m.isWrapped(this) ? (s8 = !1, d1 = 0, g4 = this, l5 = this) : (s8 = !0, d1 = 1, g4 = x1 ? arguments[0].elements || arguments[0].e : arguments[0]), g4 = o6(g4)) {
                x1 ? (y2 = arguments[0].properties || arguments[0].p, v2 = arguments[0].options || arguments[0].o) : (y2 = arguments[d1], v2 = arguments[d1 + 1]);
                var w = g4.length, V = 0;
                if (!/^(stop|finish)$/i.test(y2) && !f.isPlainObject(v2)) {
                    var C = d1 + 1;
                    v2 = {
                    };
                    for(var T = C; T < arguments.length; T++)m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v2.easing = arguments[T] : m.isFunction(arguments[T]) && (v2.complete = arguments[T]) : v2.duration = arguments[T];
                }
                var k = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                s8 && b.Promise && (k.promise = new b.Promise(function(e2, t4) {
                    k.resolver = e2, k.rejecter = t4;
                }));
                var A;
                switch(y2){
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        f.each(g4, function(e2, t4) {
                            i(t4) && i(t4).delayTimer && (clearTimeout(i(t4).delayTimer.setTimeout), i(t4).delayTimer.next && i(t4).delayTimer.next(), delete i(t4).delayTimer);
                        });
                        var F = [];
                        return f.each(b.State.calls, function(e2, t4) {
                            t4 && f.each(t4[1], function(r3, n10) {
                                var o8 = v2 === a ? "" : v2;
                                return o8 === !0 || t4[2].queue === o8 || v2 === a && t4[2].queue === !1 ? void f.each(g4, function(r4, a3) {
                                    a3 === n10 && ((v2 === !0 || m.isString(v2)) && (f.each(f.queue(a3, m.isString(v2) ? v2 : ""), function(e3, t5) {
                                        m.isFunction(t5) && t5(null, !0);
                                    }), f.queue(a3, m.isString(v2) ? v2 : "", [])), "stop" === y2 ? (i(a3) && i(a3).tweensContainer && o8 !== !1 && f.each(i(a3).tweensContainer, function(e3, t5) {
                                        t5.endValue = t5.currentValue;
                                    }), F.push(e2)) : "finish" === y2 && (t4[2].duration = 1));
                                }) : !0;
                            });
                        }), "stop" === y2 && (f.each(F, function(e2, t4) {
                            p(t4, !0);
                        }), k.promise && k.resolver(g4)), e1();
                    default:
                        if (!f.isPlainObject(y2) || m.isEmptyObject(y2)) {
                            if (m.isString(y2) && b.Redirects[y2]) {
                                var j = f.extend({
                                }, v2), E = j.duration, H = j.delay || 0;
                                return j.backwards === !0 && (g4 = f.extend(!0, [], g4).reverse()), f.each(g4, function(e2, t4) {
                                    parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e2 : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t4, e2, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y2) ? 1000 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e2 / w : (e2 + 1) / w), 0.75 * j.duration, 200)), b.Redirects[y2].call(t4, t4, j || {
                                    }, e2, w, g4, k.promise ? k : a);
                                }), e1();
                            }
                            var N = "Velocity: First argument (" + y2 + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return k.promise ? k.rejecter(new Error(N)) : console.log(N), e1();
                        }
                        A = "start";
                }
                var L = {
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
                f.each(g4, function(e2, t4) {
                    m.isNode(t4) && n7.call(t4);
                });
                var z, j = f.extend({
                }, b.defaults, v2);
                if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop) for(var O = 0; z > O; O++){
                    var q = {
                        delay: j.delay,
                        progress: j.progress
                    };
                    O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g4, "reverse", q);
                }
                return e1();
            }
        };
        b = f.extend(P, b), b.animate = P;
        var w = t.requestAnimationFrame || g3;
        return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (w = function(e1) {
                return setTimeout(function() {
                    e1(!0);
                }, 16);
            }, c()) : w = t.requestAnimationFrame || g3;
        }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each([
            "Down",
            "Up"
        ], function(e1, t4) {
            b.Redirects["slide" + t4] = function(e2, r3, n7, o8, i6, s8) {
                var l5 = f.extend({
                }, r3), u8 = l5.begin, c4 = l5.complete, p4 = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, d1 = {
                };
                l5.display === a && (l5.display = "Down" === t4 ? "inline" === b.CSS.Values.getDisplayType(e2) ? "inline-block" : "block" : "none"), l5.begin = function() {
                    u8 && u8.call(i6, i6);
                    for(var r4 in p4){
                        d1[r4] = e2.style[r4];
                        var a3 = b.CSS.getPropertyValue(e2, r4);
                        p4[r4] = "Down" === t4 ? [
                            a3,
                            0
                        ] : [
                            0,
                            a3
                        ];
                    }
                    d1.overflow = e2.style.overflow, e2.style.overflow = "hidden";
                }, l5.complete = function() {
                    for(var t5 in d1)e2.style[t5] = d1[t5];
                    c4 && c4.call(i6, i6), s8 && s8.resolver(i6);
                }, b(e2, p4, l5);
            };
        }), f.each([
            "In",
            "Out"
        ], function(e1, t4) {
            b.Redirects["fade" + t4] = function(e2, r3, n7, o8, i6, s8) {
                var l5 = f.extend({
                }, r3), u8 = {
                    opacity: "In" === t4 ? 1 : 0
                }, c4 = l5.complete;
                l5.complete = n7 !== o8 - 1 ? l5.begin = null : function() {
                    c4 && c4.call(i6, i6), s8 && s8.resolver(i6);
                }, l5.display === a && (l5.display = "In" === t4 ? "auto" : "none"), b(this, u8, l5);
            };
        }), b;
    })(window.jQuery || window.Zepto || window, window, document);
}));
