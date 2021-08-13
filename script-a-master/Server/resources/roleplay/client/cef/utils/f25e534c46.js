window.FontAwesomeKitConfig = {
    "asyncLoading": {
        "enabled": false
    },
    "autoA11y": {
        "enabled": true
    },
    "baseUrl": "https://ka-f.fontawesome.com",
    "baseUrlKit": "https://kit.fontawesome.com",
    "detectConflictsUntil": null,
    "iconUploads": {
    },
    "id": 48090306,
    "license": "free",
    "method": "css",
    "minify": {
        "enabled": true
    },
    "token": "f25e534c46",
    "v4FontFaceShim": {
        "enabled": true
    },
    "v4shim": {
        "enabled": true
    },
    "version": "5.15.3"
};
!function(t) {
    "function" == typeof define && define.amd ? define("kit-loader", t) : t();
}(function() {
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t1) {
            return typeof t1;
        } : function(t1) {
            return t1 && "function" == typeof Symbol && t1.constructor === Symbol && t1 !== Symbol.prototype ? "symbol" : typeof t1;
        })(e);
    }
    function e(t1, e1, n) {
        return e1 in t1 ? Object.defineProperty(t1, e1, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t1[e1] = n, t1;
    }
    function n(t1, e1) {
        var n1 = Object.keys(t1);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t1);
            e1 && (r = r.filter(function(e2) {
                return Object.getOwnPropertyDescriptor(t1, e2).enumerable;
            })), n1.push.apply(n1, r);
        }
        return n1;
    }
    function r(t1) {
        for(var r1 = 1; r1 < arguments.length; r1++){
            var o = null != arguments[r1] ? arguments[r1] : {
            };
            r1 % 2 ? n(Object(o), !0).forEach(function(n1) {
                e(t1, n1, o[n1]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t1, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function(e1) {
                Object.defineProperty(t1, e1, Object.getOwnPropertyDescriptor(o, e1));
            });
        }
        return t1;
    }
    function o(t1, e1) {
        return (function(t2) {
            if (Array.isArray(t2)) return t2;
        })(t1) || (function(t2, e2) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t2))) return;
            var n1 = [], r1 = !0, o1 = !1, i = void 0;
            try {
                for(var c, a = t2[Symbol.iterator](); !(r1 = (c = a.next()).done) && (n1.push(c.value), !e2 || n1.length !== e2); r1 = !0);
            } catch (t3) {
                o1 = !0, i = t3;
            } finally{
                try {
                    r1 || null == a.return || a.return();
                } finally{
                    if (o1) throw i;
                }
            }
            return n1;
        })(t1, e1) || (function(t2, e2) {
            if (!t2) return;
            if ("string" == typeof t2) return i(t2, e2);
            var n1 = Object.prototype.toString.call(t2).slice(8, -1);
            "Object" === n1 && t2.constructor && (n1 = t2.constructor.name);
            if ("Map" === n1 || "Set" === n1) return Array.from(t2);
            if ("Arguments" === n1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n1)) return i(t2, e2);
        })(t1, e1) || (function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
    }
    function i(t1, e1) {
        (null == e1 || e1 > t1.length) && (e1 = t1.length);
        for(var n1 = 0, r1 = new Array(e1); n1 < e1; n1++)r1[n1] = t1[n1];
        return r1;
    }
    function c(t1, e1) {
        var n1 = e1 && e1.addOn || "", r1 = e1 && e1.baseFilename || t1.license + n1, o1 = e1 && e1.minify ? ".min" : "", i1 = e1 && e1.fileSuffix || t1.method, c1 = e1 && e1.subdir || t1.method;
        return t1.baseUrl + "/releases/" + ("latest" === t1.version ? "latest" : "v".concat(t1.version)) + "/" + c1 + "/" + r1 + o1 + "." + i1;
    }
    function a(t1) {
        return t1.baseUrlKit + "/" + t1.token + "/" + t1.id + "/kit-upload.css";
    }
    function u(t1, e1) {
        var n1 = e1 || [
            "fa"
        ], r1 = "." + Array.prototype.join.call(n1, ",."), o1 = t1.querySelectorAll(r1);
        Array.prototype.forEach.call(o1, function(e2) {
            var n2 = e2.getAttribute("title");
            e2.setAttribute("aria-hidden", "true");
            var r2 = !e2.nextElementSibling || !e2.nextElementSibling.classList.contains("sr-only");
            if (n2 && r2) {
                var o2 = t1.createElement("span");
                o2.innerHTML = n2, o2.classList.add("sr-only"), e2.parentNode.insertBefore(o2, e2.nextSibling);
            }
        });
    }
    var f, s = function() {
    }, d = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit, l = "undefined" == typeof setImmediate ? setTimeout : setImmediate, h = [];
    function m() {
        for(var t1 = 0; t1 < h.length; t1++)h[t1][0](h[t1][1]);
        h = [], f = !1;
    }
    function p(t1, e1) {
        h.push([
            t1,
            e1
        ]), f || (f = !0, l(m, 0));
    }
    function y(t1) {
        var e1 = t1.owner, n1 = e1._state, r1 = e1._data, o1 = t1[n1], i1 = t1.then;
        if ("function" == typeof o1) {
            n1 = "fulfilled";
            try {
                r1 = o1(r1);
            } catch (t2) {
                w(i1, t2);
            }
        }
        b(i1, r1) || ("fulfilled" === n1 && v(i1, r1), "rejected" === n1 && w(i1, r1));
    }
    function b(e1, n1) {
        var r1;
        try {
            if (e1 === n1) throw new TypeError("A promises callback cannot return that same promise.");
            if (n1 && ("function" == typeof n1 || "object" === t(n1))) {
                var o1 = n1.then;
                if ("function" == typeof o1) return o1.call(n1, function(t1) {
                    r1 || (r1 = !0, n1 === t1 ? g(e1, t1) : v(e1, t1));
                }, function(t1) {
                    r1 || (r1 = !0, w(e1, t1));
                }), !0;
            }
        } catch (t1) {
            return r1 || w(e1, t1), !0;
        }
        return !1;
    }
    function v(t1, e1) {
        t1 !== e1 && b(t1, e1) || g(t1, e1);
    }
    function g(t1, e1) {
        "pending" === t1._state && (t1._state = "settled", t1._data = e1, p(S, t1));
    }
    function w(t1, e1) {
        "pending" === t1._state && (t1._state = "settled", t1._data = e1, p(O, t1));
    }
    function A(t1) {
        t1._then = t1._then.forEach(y);
    }
    function S(t1) {
        t1._state = "fulfilled", A(t1);
    }
    function O(t1) {
        t1._state = "rejected", A(t1), !t1._handled && d && global.process.emit("unhandledRejection", t1._data, t1);
    }
    function j(t1) {
        global.process.emit("rejectionHandled", t1);
    }
    function E(t1) {
        if ("function" != typeof t1) throw new TypeError("Promise resolver " + t1 + " is not a function");
        if (this instanceof E == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [], (function(t2, e1) {
            function n1(t3) {
                w(e1, t3);
            }
            try {
                t2(function(t3) {
                    v(e1, t3);
                }, n1);
            } catch (t3) {
                n1(t3);
            }
        })(t1, this);
    }
    E.prototype = {
        constructor: E,
        _state: "pending",
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function(t1, e1) {
            var n1 = {
                owner: this,
                then: new this.constructor(s),
                fulfilled: t1,
                rejected: e1
            };
            return !e1 && !t1 || this._handled || (this._handled = !0, "rejected" === this._state && d && p(j, this)), "fulfilled" === this._state || "rejected" === this._state ? p(y, n1) : this._then.push(n1), n1.then;
        },
        catch: function(t1) {
            return this.then(null, t1);
        }
    }, E.all = function(t1) {
        if (!Array.isArray(t1)) throw new TypeError("You must pass an array to Promise.all().");
        return new E(function(e1, n1) {
            var r1 = [], o3 = 0;
            function i1(t2) {
                return o3++, function(n2) {
                    r1[t2] = n2, --o3 || e1(r1);
                };
            }
            for(var c1, a1 = 0; a1 < t1.length; a1++)(c1 = t1[a1]) && "function" == typeof c1.then ? c1.then(i1(a1), n1) : r1[a1] = c1;
            o3 || e1(r1);
        });
    }, E.race = function(t1) {
        if (!Array.isArray(t1)) throw new TypeError("You must pass an array to Promise.race().");
        return new E(function(e1, n1) {
            for(var r1, o3 = 0; o3 < t1.length; o3++)(r1 = t1[o3]) && "function" == typeof r1.then ? r1.then(e1, n1) : e1(r1);
        });
    }, E.resolve = function(e1) {
        return e1 && "object" === t(e1) && e1.constructor === E ? e1 : new E(function(t1) {
            t1(e1);
        });
    }, E.reject = function(t1) {
        return new E(function(e1, n1) {
            n1(t1);
        });
    };
    var _ = "function" == typeof Promise ? Promise : E;
    function P(t1, e1) {
        var n1 = e1.fetch, r1 = e1.XMLHttpRequest, o3 = e1.token, i1 = t1;
        return "URLSearchParams" in window ? (i1 = new URL(t1)).searchParams.set("token", o3) : i1 = i1 + "?token=" + encodeURIComponent(o3), i1 = i1.toString(), new _(function(t2, e2) {
            if ("function" == typeof n1) n1(i1, {
                mode: "cors",
                cache: "default"
            }).then(function(t3) {
                if (t3.ok) return t3.text();
                throw new Error("");
            }).then(function(e3) {
                t2(e3);
            }).catch(e2);
            else if ("function" == typeof r1) {
                var o4 = new r1;
                o4.addEventListener("loadend", function() {
                    this.responseText ? t2(this.responseText) : e2(new Error(""));
                });
                [
                    "abort",
                    "error",
                    "timeout"
                ].map(function(t3) {
                    o4.addEventListener(t3, function() {
                        e2(new Error(""));
                    });
                }), o4.open("GET", i1), o4.send();
            } else {
                e2(new Error(""));
            }
        });
    }
    function C(t1, e1, n1) {
        var r1 = t1;
        return [
            [
                /(url\("?)\.\.\/\.\.\/\.\./g,
                function(t2, n2) {
                    return "".concat(n2).concat(e1);
                }
            ],
            [
                /(url\("?)\.\.\/webfonts/g,
                function(t2, r2) {
                    return "".concat(r2).concat(e1, "/releases/v").concat(n1, "/webfonts");
                }
            ],
            [
                /(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,
                function(t2, n2) {
                    return "".concat(n2).concat(e1);
                }
            ]
        ].forEach(function(t2) {
            var e2 = o(t2, 2), n2 = e2[0], i1 = e2[1];
            r1 = r1.replace(n2, i1);
        }), r1;
    }
    function F(t1, e1) {
        var n1 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
        }, o3 = e1.document || o3, i1 = u.bind(u, o3, [
            "fa",
            "fab",
            "fas",
            "far",
            "fal",
            "fad",
            "fak"
        ]), f1 = Object.keys(t1.iconUploads || {
        }).length > 0;
        t1.autoA11y.enabled && n1(i1);
        var s1 = [
            {
                id: "fa-main",
                addOn: void 0
            }
        ];
        t1.v4shim.enabled && s1.push({
            id: "fa-v4-shims",
            addOn: "-v4-shims"
        }), t1.v4FontFaceShim.enabled && s1.push({
            id: "fa-v4-font-face",
            addOn: "-v4-font-face"
        }), f1 && s1.push({
            id: "fa-kit-upload",
            customCss: !0
        });
        var d1 = s1.map(function(n2) {
            return new _(function(o5, i2) {
                P(n2.customCss ? a(t1) : c(t1, {
                    addOn: n2.addOn,
                    minify: t1.minify.enabled
                }), e1).then(function(i3) {
                    o5(U(i3, r(r({
                    }, e1), {
                    }, {
                        baseUrl: t1.baseUrl,
                        version: t1.version,
                        id: n2.id,
                        contentFilter: function(t2, e2) {
                            return C(t2, e2.baseUrl, e2.version);
                        }
                    })));
                }).catch(i2);
            });
        });
        return _.all(d1);
    }
    function U(t1, e1) {
        var n1 = e1.contentFilter || function(t2, e2) {
            return t2;
        }, r1 = document.createElement("style"), o3 = document.createTextNode(n1(t1, e1));
        return r1.appendChild(o3), r1.media = "all", e1.id && r1.setAttribute("id", e1.id), e1 && e1.detectingConflicts && e1.detectionIgnoreAttr && r1.setAttributeNode(document.createAttribute(e1.detectionIgnoreAttr)), r1;
    }
    function k(t1, e1) {
        e1.autoA11y = t1.autoA11y.enabled, "pro" === t1.license && (e1.autoFetchSvg = !0, e1.fetchSvgFrom = t1.baseUrl + "/releases/" + ("latest" === t1.version ? "latest" : "v".concat(t1.version)) + "/svgs", e1.fetchUploadedSvgFrom = t1.uploadsUrl);
        var n1 = [];
        return t1.v4shim.enabled && n1.push(new _(function(n2, o3) {
            P(c(t1, {
                addOn: "-v4-shims",
                minify: t1.minify.enabled
            }), e1).then(function(t2) {
                n2(I(t2, r(r({
                }, e1), {
                }, {
                    id: "fa-v4-shims"
                })));
            }).catch(o3);
        })), n1.push(new _(function(n2, o3) {
            P(c(t1, {
                minify: t1.minify.enabled
            }), e1).then(function(t2) {
                var o5 = I(t2, r(r({
                }, e1), {
                }, {
                    id: "fa-main"
                }));
                n2(function(t3, e2) {
                    var n3 = e2 && void 0 !== e2.autoFetchSvg ? e2.autoFetchSvg : void 0, r1 = e2 && void 0 !== e2.autoA11y ? e2.autoA11y : void 0;
                    void 0 !== r1 && t3.setAttribute("data-auto-a11y", r1 ? "true" : "false");
                    n3 && (t3.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), t3.setAttribute("data-fetch-svg-from", e2.fetchSvgFrom), t3.setAttribute("data-fetch-uploaded-svg-from", e2.fetchUploadedSvgFrom));
                    return t3;
                }(o5, e1));
            }).catch(o3);
        })), _.all(n1);
    }
    function I(t1, e1) {
        var n1 = document.createElement("SCRIPT"), r1 = document.createTextNode(t1);
        return n1.appendChild(r1), n1.referrerPolicy = "strict-origin", e1.id && n1.setAttribute("id", e1.id), e1 && e1.detectingConflicts && e1.detectionIgnoreAttr && n1.setAttributeNode(document.createAttribute(e1.detectionIgnoreAttr)), n1;
    }
    function L(t1) {
        var e1, n1 = [], r1 = document, o3 = r1.documentElement.doScroll, i1 = (o3 ? /^loaded|^c/ : /^loaded|^i|^c/).test(r1.readyState);
        i1 || r1.addEventListener("DOMContentLoaded", e1 = function() {
            for(r1.removeEventListener("DOMContentLoaded", e1), i1 = 1; e1 = n1.shift();)e1();
        }), i1 ? setTimeout(t1, 0) : n1.push(t1);
    }
    function T(t1) {
        "undefined" != typeof MutationObserver && new MutationObserver(t1).observe(document, {
            childList: !0,
            subtree: !0
        });
    }
    try {
        if (window.FontAwesomeKitConfig) {
            var x = window.FontAwesomeKitConfig, M = {
                detectingConflicts: x.detectConflictsUntil && new Date <= new Date(x.detectConflictsUntil),
                detectionIgnoreAttr: "data-fa-detection-ignore",
                fetch: window.fetch,
                token: x.token,
                XMLHttpRequest: window.XMLHttpRequest,
                document: document
            }, D = document.currentScript, N = D ? D.parentElement : document.head;
            (function() {
                var t1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                }, e1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                };
                return "js" === t1.method ? k(t1, e1) : "css" === t1.method ? F(t1, e1, function(t2) {
                    L(t2), T(t2);
                }) : void 0;
            })(x, M).then(function(t1) {
                t1.map(function(t2) {
                    try {
                        N.insertBefore(t2, D ? D.nextSibling : null);
                    } catch (e1) {
                        N.appendChild(t2);
                    }
                }), M.detectingConflicts && D && L(function() {
                    D.setAttributeNode(document.createAttribute(M.detectionIgnoreAttr));
                    var t2 = function(t3, e1) {
                        var n1 = document.createElement("script");
                        return e1 && e1.detectionIgnoreAttr && n1.setAttributeNode(document.createAttribute(e1.detectionIgnoreAttr)), n1.src = c(t3, {
                            baseFilename: "conflict-detection",
                            fileSuffix: "js",
                            subdir: "js",
                            minify: t3.minify.enabled
                        }), n1;
                    }(x, M);
                    document.body.appendChild(t2);
                });
            }).catch(function(t1) {
                console.error("".concat("Font Awesome Kit:", " ").concat(t1));
            });
        }
    } catch (t1) {
        console.error("".concat("Font Awesome Kit:", " ").concat(t1));
    }
});
