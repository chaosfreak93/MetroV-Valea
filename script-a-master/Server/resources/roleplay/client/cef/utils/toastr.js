/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */ !function(e) {
    e([
        "jquery"
    ], function(e1) {
        return (function() {
            function t(e2, t1, n) {
                return g1({
                    type: O.error,
                    iconClass: m().iconClasses.error,
                    message: e2,
                    optionsOverride: n,
                    title: t1
                });
            }
            function n(t1, n1) {
                return t1 || (t1 = m()), v = e1("#" + t1.containerId), v.length ? v : (n1 && (v = d1(t1)), v);
            }
            function o(e2, t1, n1) {
                return g1({
                    type: O.info,
                    iconClass: m().iconClasses.info,
                    message: e2,
                    optionsOverride: n1,
                    title: t1
                });
            }
            function s(e2) {
                C = e2;
            }
            function i1(e2, t1, n1) {
                return g1({
                    type: O.success,
                    iconClass: m().iconClasses.success,
                    message: e2,
                    optionsOverride: n1,
                    title: t1
                });
            }
            function a(e2, t1, n1) {
                return g1({
                    type: O.warning,
                    iconClass: m().iconClasses.warning,
                    message: e2,
                    optionsOverride: n1,
                    title: t1
                });
            }
            function r(e2, t1) {
                var o1 = m();
                v || n(o1), u1(e2, o1, t1) || l1(o1);
            }
            function c1(t1) {
                var o1 = m();
                return v || n(o1), t1 && 0 === e1(":focus", t1).length ? void h(t1) : void (v.children().length && v.remove());
            }
            function l1(t1) {
                for(var n1 = v.children(), o1 = n1.length - 1; o1 >= 0; o1--)u1(e1(n1[o1]), t1);
            }
            function u1(t1, n1, o1) {
                var s1 = !(!o1 || !o1.force) && o1.force;
                return !(!t1 || !s1 && 0 !== e1(":focus", t1).length) && (t1[n1.hideMethod]({
                    duration: n1.hideDuration,
                    easing: n1.hideEasing,
                    complete: function() {
                        h(t1);
                    }
                }), !0);
            }
            function d1(t1) {
                return v = e1("<div/>").attr("id", t1.containerId).addClass(t1.positionClass), v.appendTo(e1(t1.target)), v;
            }
            function p1() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1000,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-left",
                    timeOut: 5000,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                };
            }
            function f(e2) {
                C && C(e2);
            }
            function g1(t1) {
                function o1(e2) {
                    return null == e2 && (e2 = ""), e2.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                }
                function s1() {
                    c2(), u2(), d2(), p2(), g2(), C(), l2(), i2();
                }
                function i2() {
                    var e2 = "";
                    switch(t1.iconClass){
                        case "toast-success":
                        case "toast-info":
                            e2 = "polite";
                            break;
                        default:
                            e2 = "assertive";
                    }
                    I.attr("aria-live", e2);
                }
                function a1() {
                    E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function(e2) {
                        e2.stopPropagation ? e2.stopPropagation() : void 0 !== e2.cancelBubble && e2.cancelBubble !== !0 && (e2.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e2), b(!0);
                    }), E.onclick && I.click(function(e2) {
                        E.onclick(e2), b();
                    });
                }
                function r1() {
                    I.hide(), I[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing,
                        complete: E.onShown
                    }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
                }
                function c2() {
                    t1.iconClass && I.addClass(E.toastClass).addClass(y);
                }
                function l2() {
                    E.newestOnTop ? v.prepend(I) : v.append(I);
                }
                function u2() {
                    if (t1.title) {
                        var e2 = t1.title;
                        E.escapeHtml && (e2 = o1(t1.title)), M.append(e2).addClass(E.titleClass), I.append(M);
                    }
                }
                function d2() {
                    if (t1.message) {
                        var e3 = t1.message;
                        E.escapeHtml && (e3 = o1(t1.message)), B.append(e3).addClass(E.messageClass), I.append(B);
                    }
                }
                function p2() {
                    E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
                }
                function g2() {
                    E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
                }
                function C() {
                    E.rtl && I.addClass("rtl");
                }
                function O(e4, t2) {
                    if (e4.preventDuplicates) {
                        if (t2.message === w) return !0;
                        w = t2.message;
                    }
                    return !1;
                }
                function b(t2) {
                    var n1 = t2 && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod, o2 = t2 && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration, s2 = t2 && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
                    if (!e1(":focus", I).length || t2) return clearTimeout(F.intervalId), I[n1]({
                        duration: o2,
                        easing: s2,
                        complete: function() {
                            h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P);
                        }
                    });
                }
                function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime);
                }
                function H() {
                    clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing
                    });
                }
                function x() {
                    var e4 = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
                    q.width(e4 + "%");
                }
                var E = m(), y = t1.iconClass || E.iconClass;
                if ("undefined" != typeof t1.optionsOverride && (E = e1.extend(E, t1.optionsOverride), y = t1.optionsOverride.iconClass || y), !O(E, t1)) {
                    T++, v = n(E, !0);
                    var k = null, I = e1("<div/>"), M = e1("<div/>"), B = e1("<div/>"), q = e1("<div/>"), j = e1(E.closeHtml), F = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                    }, P = {
                        toastId: T,
                        state: "visible",
                        startTime: new Date,
                        options: E,
                        map: t1
                    };
                    return s1(), r1(), a1(), f(P), E.debug && console && console.log(P), I;
                }
            }
            function m() {
                return e1.extend({
                }, p1(), b.options);
            }
            function h(e4) {
                v || (v = n()), e4.is(":visible") || (e4.remove(), e4 = null, 0 === v.children().length && (v.remove(), w = void 0));
            }
            var v, C, w, T = 0, O = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, b = {
                clear: r,
                remove: c1,
                error: t,
                getContainer: n,
                info: o,
                options: {
                },
                subscribe: s,
                success: i1,
                version: "2.1.3",
                warning: a
            };
            return b;
        })();
    });
}("function" == typeof define && define.amd ? define : function(e1, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery);
}); //# sourceMappingURL=toastr.js.map
