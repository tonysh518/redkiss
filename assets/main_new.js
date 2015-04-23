!function(e, t) {
	function n(e) {
		var t = ft[e] = {};
		return J.each(e.split(tt), function(e, n) {
			t[n] = !0
		}), t
	}
	function i(e, n, i) {
		if (i === t && 1 === e.nodeType) {
			var r = "data-" + n.replace(gt, "-$1").toLowerCase();
			if (i = e.getAttribute(r), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : mt.test(i) ? J.parseJSON(i) : i
				} catch (o) {
				}
				J.data(e, n, i)
			} else
				i = t
		}
		return i
	}
	function r(e) {
		var t;
		for (t in e)
			if (("data" !== t || !J.isEmptyObject(e[t])) && "toJSON" !== t)
				return !1;
		return !0
	}
	function o() {
		return !1
	}
	function a() {
		return !0
	}
	function s(e) {
		return !e || !e.parentNode || 11 === e.parentNode.nodeType
	}
	function l(e, t) {
		do
			e = e[t];
		while (e && 1 !== e.nodeType);
		return e
	}
	function c(e, t, n) {
		if (t = t || 0, J.isFunction(t))
			return J.grep(e, function(e, i) {
				var r = !!t.call(e, i, e);
				return r === n
			});
		if (t.nodeType)
			return J.grep(e, function(e) {
				return e === t === n
			});
		if ("string" == typeof t) {
			var i = J.grep(e, function(e) {
				return 1 === e.nodeType
			});
			if (Pt.test(t))
				return J.filter(t, i, !n);
			t = J.filter(t, i)
		}
		return J.grep(e, function(e) {
			return J.inArray(e, t) >= 0 === n
		})
	}
	function u(e) {
		var t = Ht.split("|"), n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length; )
				n.createElement(t.pop());
		return n
	}
	function d(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}
	function p(e, t) {
		if (1 === t.nodeType && J.hasData(e)) {
			var n, i, r, o = J._data(e), a = J._data(t, o), s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (i = 0, r = s[n].length; r > i; i++)
						J.event.add(t, n, s[n][i])
			}
			a.data && (a.data = J.extend({}, a.data))
		}
	}
	function h(e, t) {
		var n;
		1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), J.support.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Kt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(J.expando))
	}
	function f(e) {
		return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
	}
	function m(e) {
		Kt.test(e.type) && (e.defaultChecked = e.checked)
	}
	function g(e, t) {
		if (t in e)
			return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = yn.length; r--; )
			if (t = yn[r] + n, t in e)
				return t;
		return i
	}
	function v(e, t) {
		return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
	}
	function y(e, t) {
		for (var n, i, r = [], o = 0, a = e.length; a > o; o++)
			n = e[o], n.style && (r[o] = J._data(n, "olddisplay"), t ? (r[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (r[o] = J._data(n, "olddisplay", k(n.nodeName)))) : (i = nn(n, "display"), r[o] || "none" === i || J._data(n, "olddisplay", i)));
		for (o = 0; a > o; o++)
			n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
		return e
	}
	function b(e, t, n) {
		var i = dn.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}
	function w(e, t, n, i) {
		for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2)
			"margin" === n && (o += J.css(e, n + vn[r], !0)), i ? ("content" === n && (o -= parseFloat(nn(e, "padding" + vn[r])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + vn[r] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + vn[r])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + vn[r] + "Width")) || 0));
		return o
	}
	function x(e, t, n) {
		var i = "width" === t ? e.offsetWidth : e.offsetHeight, r = !0, o = J.support.boxSizing && "border-box" === J.css(e, "boxSizing");
		if (0 >= i || null == i) {
			if (i = nn(e, t), (0 > i || null == i) && (i = e.style[t]), pn.test(i))
				return i;
			r = o && (J.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + w(e, t, n || (o ? "border" : "content"), r) + "px"
	}
	function k(e) {
		if (fn[e])
			return fn[e];
		var t = J("<" + e + ">").appendTo(R.body), n = t.css("display");
		return t.remove(), ("none" === n || "" === n) && (rn = R.body.appendChild(rn || J.extend(R.createElement("iframe"), {frameBorder: 0,width: 0,height: 0})), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), R.body.removeChild(rn)), fn[e] = n, n
	}
	function T(e, t, n, i) {
		var r;
		if (J.isArray(t))
			J.each(t, function(t, r) {
				n || xn.test(e) ? i(e, r) : T(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
			});
		else if (n || "object" !== J.type(t))
			i(e, t);
		else
			for (r in t)
				T(e + "[" + r + "]", t[r], n, i)
	}
	function S(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r, o, a = t.toLowerCase().split(tt), s = 0, l = a.length;
			if (J.isFunction(n))
				for (; l > s; s++)
					i = a[s], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[o ? "unshift" : "push"](n)
		}
	}
	function C(e, n, i, r, o, a) {
		o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
		for (var s, l = e[o], c = 0, u = l ? l.length : 0, d = e === Bn; u > c && (d || !s); c++)
			s = l[c](n, i, r), "string" == typeof s && (!d || a[s] ? s = t : (n.dataTypes.unshift(s), s = C(e, n, i, r, s, a)));
		return !d && s || a["*"] || (s = C(e, n, i, r, "*", a)), s
	}
	function _(e, n) {
		var i, r, o = J.ajaxSettings.flatOptions || {};
		for (i in n)
			n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		r && J.extend(!0, e, r)
	}
	function D(e, n, i) {
		var r, o, a, s, l = e.contents, c = e.dataTypes, u = e.responseFields;
		for (o in u)
			o in i && (n[u[o]] = i[o]);
		for (; "*" === c[0]; )
			c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
		if (r)
			for (o in l)
				if (l[o] && l[o].test(r)) {
					c.unshift(o);
					break
				}
		if (c[0] in i)
			a = c[0];
		else {
			for (o in i) {
				if (!c[0] || e.converters[o + " " + c[0]]) {
					a = o;
					break
				}
				s || (s = o)
			}
			a = a || s
		}
		return a ? (a !== c[0] && c.unshift(a), i[a]) : void 0
	}
	function F(e, t) {
		var n, i, r, o, a = e.dataTypes.slice(), s = a[0], l = {}, c = 0;
		if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
			for (n in e.converters)
				l[n.toLowerCase()] = e.converters[n];
		for (; r = a[++c]; )
			if ("*" !== r) {
				if ("*" !== s && s !== r) {
					if (n = l[s + " " + r] || l["* " + r], !n)
						for (i in l)
							if (o = i.split(" "), o[1] === r && (n = l[s + " " + o[0]] || l["* " + o[0]])) {
								n === !0 ? n = l[i] : l[i] !== !0 && (r = o[0], a.splice(c--, 0, r));
								break
							}
					if (n !== !0)
						if (n && e["throws"])
							t = n(t);
						else
							try {
								t = n(t)
							} catch (u) {
								return {state: "parsererror",error: n ? u : "No conversion from " + s + " to " + r}
							}
				}
				s = r
			}
		return {state: "success",data: t}
	}
	function E() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {
		}
	}
	function A() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {
		}
	}
	function I() {
		return setTimeout(function() {
			Un = t
		}, 0), Un = J.now()
	}
	function O(e, t) {
		J.each(t, function(t, n) {
			for (var i = (ei[t] || []).concat(ei["*"]), r = 0, o = i.length; o > r; r++)
				if (i[r].call(e, t, n))
					return
		})
	}
	function N(e, t, n) {
		var i, r = 0, o = Zn.length, a = J.Deferred().always(function() {
			delete s.elem
		}), s = function() {
			for (var t = Un || I(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, o = 0, s = l.tweens.length; s > o; o++)
				l.tweens[o].run(r);
			return a.notifyWith(e, [l, r, n]), 1 > r && s ? n : (a.resolveWith(e, [l]), !1)
		}, l = a.promise({elem: e,props: J.extend({}, t),opts: J.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Un || I(),duration: n.duration,tweens: [],createTween: function(t, n) {
				var i = J.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
				return l.tweens.push(i), i
			},stop: function(t) {
				for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++)
					l.tweens[n].run(1);
				return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
			}}), c = l.props;
		for ($(c, l.opts.specialEasing); o > r; r++)
			if (i = Zn[r].call(l, e, c, l.opts))
				return i;
		return O(l, c), J.isFunction(l.opts.start) && l.opts.start.call(e, l), J.fx.timer(J.extend(s, {anim: l,queue: l.opts.queue,elem: e})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function $(e, t) {
		var n, i, r, o, a;
		for (n in e)
			if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = J.cssHooks[i], a && "expand" in a) {
				o = a.expand(o), delete e[i];
				for (n in o)
					n in e || (e[n] = o[n], t[n] = r)
			} else
				t[i] = r
	}
	function M(e, t, n) {
		var i, r, o, a, s, l, c, u, d, p = this, h = e.style, f = {}, m = [], g = e.nodeType && v(e);
		n.queue || (u = J._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
			u.unqueued || d()
		}), u.unqueued++, p.always(function() {
			p.always(function() {
				u.unqueued--, J.queue(e, "fx").length || u.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === J.css(e, "display") && "none" === J.css(e, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", J.support.shrinkWrapBlocks || p.done(function() {
			h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (o = t[i], Gn.exec(o)) {
				if (delete t[i], l = l || "toggle" === o, o === (g ? "hide" : "show"))
					continue;
				m.push(i)
			}
		if (a = m.length) {
			s = J._data(e, "fxshow") || J._data(e, "fxshow", {}), "hidden" in s && (g = s.hidden), l && (s.hidden = !g), g ? J(e).show() : p.done(function() {
				J(e).hide()
			}), p.done(function() {
				var t;
				J.removeData(e, "fxshow", !0);
				for (t in f)
					J.style(e, t, f[t])
			});
			for (i = 0; a > i; i++)
				r = m[i], c = p.createTween(r, g ? s[r] : 0), f[r] = s[r] || J.style(e, r), r in s || (s[r] = c.start, g && (c.end = c.start, c.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function P(e, t, n, i, r) {
		return new P.prototype.init(e, t, n, i, r)
	}
	function B(e, t) {
		var n, i = {height: e}, r = 0;
		for (t = t ? 1 : 0; 4 > r; r += 2 - t)
			n = vn[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}
	function j(e) {
		return J.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var H, L, R = e.document, q = e.location, W = e.navigator, z = e.jQuery, V = e.$, Y = Array.prototype.push, X = Array.prototype.slice, U = Array.prototype.indexOf, K = Object.prototype.toString, G = Object.prototype.hasOwnProperty, Q = String.prototype.trim, J = function(e, t) {
		return new J.fn.init(e, t, H)
	}, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/, nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ot = /^[\],:{}\s]*$/, at = /(?:^|:|,)(?:\s*\[)+/g, st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ct = /^-ms-/, ut = /-([\da-z])/gi, dt = function(e, t) {
		return (t + "").toUpperCase()
	}, pt = function() {
		R.addEventListener ? (R.removeEventListener("DOMContentLoaded", pt, !1), J.ready()) : "complete" === R.readyState && (R.detachEvent("onreadystatechange", pt), J.ready())
	}, ht = {};
	J.fn = J.prototype = {constructor: J,init: function(e, n, i) {
			var r, o, a;
			if (!e)
				return this;
			if (e.nodeType)
				return this.context = this[0] = e, this.length = 1, this;
			if ("string" == typeof e) {
				if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : it.exec(e), !r || !r[1] && n)
					return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
				if (r[1])
					return n = n instanceof J ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : R, e = J.parseHTML(r[1], a, !0), rt.test(r[1]) && J.isPlainObject(n) && this.attr.call(e, n, !0), J.merge(this, e);
				if (o = R.getElementById(r[2]), o && o.parentNode) {
					if (o.id !== r[2])
						return i.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = R, this.selector = e, this
			}
			return J.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
		},selector: "",jquery: "2.1.3",length: 0,size: function() {
			return this.length
		},toArray: function() {
			return X.call(this)
		},get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},pushStack: function(e, t, n) {
			var i = J.merge(this.constructor(), e);
			return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
		},each: function(e, t) {
			return J.each(this, e, t)
		},ready: function(e) {
			return J.ready.promise().done(e), this
		},eq: function(e) {
			return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
		},first: function() {
			return this.eq(0)
		},last: function() {
			return this.eq(-1)
		},slice: function() {
			return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
		},map: function(e) {
			return this.pushStack(J.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},end: function() {
			return this.prevObject || this.constructor(null)
		},push: Y,sort: [].sort,splice: [].splice}, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function() {
		var e, n, i, r, o, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || J.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
			if (null != (e = arguments[l]))
				for (n in e)
					i = s[n], r = e[n], s !== r && (u && r && (J.isPlainObject(r) || (o = J.isArray(r))) ? (o ? (o = !1, a = i && J.isArray(i) ? i : []) : a = i && J.isPlainObject(i) ? i : {}, s[n] = J.extend(u, a, r)) : r !== t && (s[n] = r));
		return s
	}, J.extend({noConflict: function(t) {
			return e.$ === J && (e.$ = V), t && e.jQuery === J && (e.jQuery = z), J
		},isReady: !1,readyWait: 1,holdReady: function(e) {
			e ? J.readyWait++ : J.ready(!0)
		},ready: function(e) {
			if (e === !0 ? !--J.readyWait : !J.isReady) {
				if (!R.body)
					return setTimeout(J.ready, 1);
				J.isReady = !0, e !== !0 && --J.readyWait > 0 || (L.resolveWith(R, [J]), J.fn.trigger && J(R).trigger("ready").off("ready"))
			}
		},isFunction: function(e) {
			return "function" === J.type(e)
		},isArray: Array.isArray || function(e) {
			return "array" === J.type(e)
		},isWindow: function(e) {
			return null != e && e == e.window
		},isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},type: function(e) {
			return null == e ? String(e) : ht[K.call(e)] || "object"
		},isPlainObject: function(e) {
			if (!e || "object" !== J.type(e) || e.nodeType || J.isWindow(e))
				return !1;
			try {
				if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf"))
					return !1
			} catch (n) {
				return !1
			}
			var i;
			for (i in e)
				;
			return i === t || G.call(e, i)
		},isEmptyObject: function(e) {
			var t;
			for (t in e)
				return !1;
			return !0
		},error: function(e) {
			throw new Error(e)
		},parseHTML: function(e, t, n) {
			var i;
			return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || R, (i = rt.exec(e)) ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, n ? null : []), J.merge([], (i.cacheable ? J.clone(i.fragment) : i.fragment).childNodes))) : null
		},parseJSON: function(t) {
			return t && "string" == typeof t ? (t = J.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + t)() : void J.error("Invalid JSON: " + t)) : null
		},parseXML: function(n) {
			var i, r;
			if (!n || "string" != typeof n)
				return null;
			try {
				e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
			} catch (o) {
				i = t
			}
			return i && i.documentElement && !i.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + n), i
		},noop: function() {
		},globalEval: function(t) {
			t && et.test(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},camelCase: function(e) {
			return e.replace(ct, "ms-").replace(ut, dt)
		},nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},each: function(e, n, i) {
			var r, o = 0, a = e.length, s = a === t || J.isFunction(e);
			if (i)
				if (s) {
					for (r in e)
						if (n.apply(e[r], i) === !1)
							break
				} else
					for (; a > o && n.apply(e[o++], i) !== !1; )
						;
			else if (s) {
				for (r in e)
					if (n.call(e[r], r, e[r]) === !1)
						break
			} else
				for (; a > o && n.call(e[o], o, e[o++]) !== !1; )
					;
			return e
		},trim: Q && !Q.call(" ") ? function(e) {
			return null == e ? "" : Q.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(nt, "")
		},makeArray: function(e, t) {
			var n, i = t || [];
			return null != e && (n = J.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || J.isWindow(e) ? Y.call(i, e) : J.merge(i, e)), i
		},inArray: function(e, t, n) {
			var i;
			if (t) {
				if (U)
					return U.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e)
						return n
			}
			return -1
		},merge: function(e, n) {
			var i = n.length, r = e.length, o = 0;
			if ("number" == typeof i)
				for (; i > o; o++)
					e[r++] = n[o];
			else
				for (; n[o] !== t; )
					e[r++] = n[o++];
			return e.length = r, e
		},grep: function(e, t, n) {
			var i, r = [], o = 0, a = e.length;
			for (n = !!n; a > o; o++)
				i = !!t(e[o], o), n !== i && r.push(e[o]);
			return r
		},map: function(e, n, i) {
			var r, o, a = [], s = 0, l = e.length, c = e instanceof J || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || J.isArray(e));
			if (c)
				for (; l > s; s++)
					r = n(e[s], s, i), null != r && (a[a.length] = r);
			else
				for (o in e)
					r = n(e[o], o, i), null != r && (a[a.length] = r);
			return a.concat.apply([], a)
		},guid: 1,proxy: function(e, n) {
			var i, r, o;
			return "string" == typeof n && (i = e[n], n = e, e = i), J.isFunction(e) ? (r = X.call(arguments, 2), o = function() {
				return e.apply(n, r.concat(X.call(arguments)))
			}, o.guid = e.guid = e.guid || J.guid++, o) : t
		},access: function(e, n, i, r, o, a, s) {
			var l, c = null == i, u = 0, d = e.length;
			if (i && "object" == typeof i) {
				for (u in i)
					J.access(e, n, u, i[u], 1, a, r);
				o = 1
			} else if (r !== t) {
				if (l = s === t && J.isFunction(r), c && (l ? (l = n, n = function(e, t, n) {
					return l.call(J(e), n)
				}) : (n.call(e, r), n = null)), n)
					for (; d > u; u++)
						n(e[u], i, l ? r.call(e[u], u, n(e[u], i)) : r, s);
				o = 1
			}
			return o ? e : c ? n.call(e) : d ? n(e[0], i) : a
		},now: function() {
			return (new Date).getTime()
		}}), J.ready.promise = function(t) {
		if (!L)
			if (L = J.Deferred(), "complete" === R.readyState)
				setTimeout(J.ready, 1);
			else if (R.addEventListener)
				R.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", J.ready, !1);
			else {
				R.attachEvent("onreadystatechange", pt), e.attachEvent("onload", J.ready);
				var n = !1;
				try {
					n = null == e.frameElement && R.documentElement
				} catch (i) {
				}
				n && n.doScroll && !function r() {
					if (!J.isReady) {
						try {
							n.doScroll("left")
						} catch (e) {
							return setTimeout(r, 50)
						}
						J.ready()
					}
				}()
			}
		return L.promise(t)
	}, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
		ht["[object " + t + "]"] = t.toLowerCase()
	}), H = J(R);
	var ft = {};
	J.Callbacks = function(e) {
		e = "string" == typeof e ? ft[e] || n(e) : J.extend({}, e);
		var i, r, o, a, s, l, c = [], u = !e.once && [], d = function(t) {
			for (i = e.memory && t, r = !0, l = a || 0, a = 0, s = c.length, o = !0; c && s > l; l++)
				if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					i = !1;
					break
				}
			o = !1, c && (u ? u.length && d(u.shift()) : i ? c = [] : p.disable())
		}, p = {add: function() {
				if (c) {
					var t = c.length;
					!function n(t) {
						J.each(t, function(t, i) {
							var r = J.type(i);
							"function" === r ? e.unique && p.has(i) || c.push(i) : i && i.length && "string" !== r && n(i)
						})
					}(arguments), o ? s = c.length : i && (a = t, d(i))
				}
				return this
			},remove: function() {
				return c && J.each(arguments, function(e, t) {
					for (var n; (n = J.inArray(t, c, n)) > -1; )
						c.splice(n, 1), o && (s >= n && s--, l >= n && l--)
				}), this
			},has: function(e) {
				return J.inArray(e, c) > -1
			},empty: function() {
				return c = [], this
			},disable: function() {
				return c = u = i = t, this
			},disabled: function() {
				return !c
			},lock: function() {
				return u = t, i || p.disable(), this
			},locked: function() {
				return !u
			},fireWith: function(e, t) {
				return t = t || [], t = [e, t.slice ? t.slice() : t], !c || r && !u || (o ? u.push(t) : d(t)), this
			},fire: function() {
				return p.fireWith(this, arguments), this
			},fired: function() {
				return !!r
			}};
		return p
	}, J.extend({Deferred: function(e) {
			var t = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]], n = "pending", i = {state: function() {
					return n
				},always: function() {
					return r.done(arguments).fail(arguments), this
				},then: function() {
					var e = arguments;
					return J.Deferred(function(n) {
						J.each(t, function(t, i) {
							var o = i[0], a = e[t];
							r[i[1]](J.isFunction(a) ? function() {
								var e = a.apply(this, arguments);
								e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [e])
							} : n[o])
						}), e = null
					}).promise()
				},promise: function(e) {
					return null != e ? J.extend(e, i) : i
				}}, r = {};
			return i.pipe = i.then, J.each(t, function(e, o) {
				var a = o[2], s = o[3];
				i[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = a.fire, r[o[0] + "With"] = a.fireWith
			}), i.promise(r), e && e.call(r, r), r
		},when: function(e) {
			var t, n, i, r = 0, o = X.call(arguments), a = o.length, s = 1 !== a || e && J.isFunction(e.promise) ? a : 0, l = 1 === s ? e : J.Deferred(), c = function(e, n, i) {
				return function(r) {
					n[e] = this, i[e] = arguments.length > 1 ? X.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
				}
			};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++)
					o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
			return s || l.resolveWith(i, o), l.promise()
		}}), J.support = function() {
		var t, n, i, r, o, a, s, l, c, u, d, p = R.createElement("div");
		if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], !n || !i || !n.length)
			return {};
		r = R.createElement("select"), o = r.appendChild(R.createElement("option")), a = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = {leadingWhitespace: 3 === p.firstChild.nodeType,tbody: !p.getElementsByTagName("tbody").length,htmlSerialize: !!p.getElementsByTagName("link").length,style: /top/.test(i.getAttribute("style")),hrefNormalized: "/a" === i.getAttribute("href"),opacity: /^0.5/.test(i.style.opacity),cssFloat: !!i.style.cssFloat,checkOn: "on" === a.value,optSelected: o.selected,getSetAttribute: "t" !== p.className,enctype: !!R.createElement("form").enctype,html5Clone: "<:nav></:nav>" !== R.createElement("nav").cloneNode(!0).outerHTML,boxModel: "CSS1Compat" === R.compatMode,submitBubbles: !0,changeBubbles: !0,focusinBubbles: !1,deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0,boxSizingReliable: !0,pixelPosition: !1}, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled;
		try {
			delete p.test
		} catch (h) {
			t.deleteExpando = !1
		}
		if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", d = function() {
			t.noCloneEvent = !1
		}), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", d)), a = R.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), p.appendChild(a), s = R.createDocumentFragment(), s.appendChild(p.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(p), p.attachEvent)
			for (c in {submit: !0,change: !0,focusin: !0})
				l = "on" + c, u = l in p, u || (p.setAttribute(l, "return;"), u = "function" == typeof p[l]), t[c + "Bubbles"] = u;
		return J(function() {
			var n, i, r, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;", s = R.getElementsByTagName("body")[0];
			s && (n = R.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), i = R.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {width: "4px"}).width, o = R.createElement("div"), o.style.cssText = i.style.cssText = a, o.style.marginRight = o.style.width = "0", i.style.width = "1px", i.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = i = r = o = null)
		}), s.removeChild(p), n = i = r = o = a = s = p = null, t
	}();
	var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, gt = /([A-Z])/g;
	J.extend({cache: {},deletedIds: [],uuid: 0,expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(e) {
			return e = e.nodeType ? J.cache[e[J.expando]] : e[J.expando], !!e && !r(e)
		},data: function(e, n, i, r) {
			if (J.acceptData(e)) {
				var o, a, s = J.expando, l = "string" == typeof n, c = e.nodeType, u = c ? J.cache : e, d = c ? e[s] : e[s] && s;
				if (d && u[d] && (r || u[d].data) || !l || i !== t)
					return d || (c ? e[s] = d = J.deletedIds.pop() || J.guid++ : d = s), u[d] || (u[d] = {}, c || (u[d].toJSON = J.noop)), ("object" == typeof n || "function" == typeof n) && (r ? u[d] = J.extend(u[d], n) : u[d].data = J.extend(u[d].data, n)), o = u[d], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[J.camelCase(n)] = i), l ? (a = o[n], null == a && (a = o[J.camelCase(n)])) : a = o, a
			}
		},removeData: function(e, t, n) {
			if (J.acceptData(e)) {
				var i, o, a, s = e.nodeType, l = s ? J.cache : e, c = s ? e[J.expando] : J.expando;
				if (l[c]) {
					if (t && (i = n ? l[c] : l[c].data)) {
						J.isArray(t) || (t in i ? t = [t] : (t = J.camelCase(t), t = t in i ? [t] : t.split(" ")));
						for (o = 0, a = t.length; a > o; o++)
							delete i[t[o]];
						if (!(n ? r : J.isEmptyObject)(i))
							return
					}
					(n || (delete l[c].data, r(l[c]))) && (s ? J.cleanData([e], !0) : J.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
				}
			}
		},_data: function(e, t, n) {
			return J.data(e, t, n, !0)
		},acceptData: function(e) {
			var t = e.nodeName && J.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}}), J.fn.extend({data: function(e, n) {
			var r, o, a, s, l, c = this[0], u = 0, d = null;
			if (e === t) {
				if (this.length && (d = J.data(c), 1 === c.nodeType && !J._data(c, "parsedAttrs"))) {
					for (a = c.attributes, l = a.length; l > u; u++)
						s = a[u].name, s.indexOf("data-") || (s = J.camelCase(s.substring(5)), i(c, s, d[s]));
					J._data(c, "parsedAttrs", !0)
				}
				return d
			}
			return "object" == typeof e ? this.each(function() {
				J.data(this, e)
			}) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", o = r[1] + "!", J.access(this, function(n) {
				return n === t ? (d = this.triggerHandler("getData" + o, [r[0]]), d === t && c && (d = J.data(c, e), d = i(c, e, d)), d === t && r[1] ? this.data(r[0]) : d) : (r[1] = n, void this.each(function() {
					var t = J(this);
					t.triggerHandler("setData" + o, r), J.data(this, e, n), t.triggerHandler("changeData" + o, r)
				}))
			}, null, n, arguments.length > 1, null, !1))
		},removeData: function(e) {
			return this.each(function() {
				J.removeData(this, e)
			})
		}}), J.extend({queue: function(e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = J._data(e, t), n && (!i || J.isArray(n) ? i = J._data(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
		},dequeue: function(e, t) {
			t = t || "fx";
			var n = J.queue(e, t), i = n.length, r = n.shift(), o = J._queueHooks(e, t), a = function() {
				J.dequeue(e, t)
			};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
		},_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return J._data(e, n) || J._data(e, n, {empty: J.Callbacks("once memory").add(function() {
					J.removeData(e, t + "queue", !0), J.removeData(e, n, !0)
				})})
		}}), J.fn.extend({queue: function(e, n) {
			var i = 2;
			return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? J.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = J.queue(this, e, n);
				J._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && J.dequeue(this, e)
			})
		},dequeue: function(e) {
			return this.each(function() {
				J.dequeue(this, e)
			})
		},delay: function(e, t) {
			return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},promise: function(e, n) {
			var i, r = 1, o = J.Deferred(), a = this, s = this.length, l = function() {
				--r || o.resolveWith(a, [a])
			};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; )
				i = J._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
			return l(), o.promise(n)
		}});
	var vt, yt, bt, wt = /[\t\r\n]/g, xt = /\r/g, kt = /^(?:button|input)$/i, Tt = /^(?:button|input|object|select|textarea)$/i, St = /^a(?:rea|)$/i, Ct = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, _t = J.support.getSetAttribute;
	J.fn.extend({attr: function(e, t) {
			return J.access(this, J.attr, e, t, arguments.length > 1)
		},removeAttr: function(e) {
			return this.each(function() {
				J.removeAttr(this, e)
			})
		},prop: function(e, t) {
			return J.access(this, J.prop, e, t, arguments.length > 1)
		},removeProp: function(e) {
			return e = J.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {
				}
			})
		},addClass: function(e) {
			var t, n, i, r, o, a, s;
			if (J.isFunction(e))
				return this.each(function(t) {
					J(this).addClass(e.call(this, t, this.className))
				});
			if (e && "string" == typeof e)
				for (t = e.split(tt), n = 0, i = this.length; i > n; n++)
					if (r = this[n], 1 === r.nodeType)
						if (r.className || 1 !== t.length) {
							for (o = " " + r.className + " ", a = 0, s = t.length; s > a; a++)
								o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
							r.className = J.trim(o)
						} else
							r.className = e;
			return this
		},removeClass: function(e) {
			var n, i, r, o, a, s, l;
			if (J.isFunction(e))
				return this.each(function(t) {
					J(this).removeClass(e.call(this, t, this.className))
				});
			if (e && "string" == typeof e || e === t)
				for (n = (e || "").split(tt), s = 0, l = this.length; l > s; s++)
					if (r = this[s], 1 === r.nodeType && r.className) {
						for (i = (" " + r.className + " ").replace(wt, " "), o = 0, a = n.length; a > o; o++)
							for (; i.indexOf(" " + n[o] + " ") >= 0; )
								i = i.replace(" " + n[o] + " ", " ");
						r.className = e ? J.trim(i) : ""
					}
			return this
		},toggleClass: function(e, t) {
			var n = typeof e, i = "boolean" == typeof t;
			return this.each(J.isFunction(e) ? function(n) {
				J(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var r, o = 0, a = J(this), s = t, l = e.split(tt); r = l[o++]; )
						s = i ? s : !a.hasClass(r), a[s ? "addClass" : "removeClass"](r);
				else
					("undefined" === n || "boolean" === n) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : J._data(this, "__className__") || "")
			})
		},hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0)
					return !0;
			return !1
		},val: function(e) {
			var n, i, r, o = this[0];
			return arguments.length ? (r = J.isFunction(e), this.each(function(i) {
				var o, a = J(this);
				1 === this.nodeType && (o = r ? e.call(this, i, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(e) {
					return null == e ? "" : e + ""
				})), n = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
			})) : o ? (n = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(xt, "") : null == i ? "" : i)) : void 0
		}}), J.extend({valHooks: {option: {get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}},select: {get: function(e) {
					for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
						if (n = i[l], !(!n.selected && l !== r || (J.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
							if (t = J(n).val(), o)
								return t;
							a.push(t)
						}
					return a
				},set: function(e, t) {
					var n = J.makeArray(t);
					return J(e).find("option").each(function() {
						this.selected = J.inArray(J(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1), n
				}}},attrFn: {},attr: function(e, n, i, r) {
			var o, a, s, l = e.nodeType;
			return e && 3 !== l && 8 !== l && 2 !== l ? r && J.isFunction(J.fn[n]) ? J(e)[n](i) : "undefined" == typeof e.getAttribute ? J.prop(e, n, i) : (s = 1 !== l || !J.isXMLDoc(e), s && (n = n.toLowerCase(), a = J.attrHooks[n] || (Ct.test(n) ? yt : vt)), i !== t ? null === i ? void J.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o)) : void 0
		},removeAttr: function(e, t) {
			var n, i, r, o, a = 0;
			if (t && 1 === e.nodeType)
				for (i = t.split(tt); a < i.length; a++)
					r = i[a], r && (n = J.propFix[r] || r, o = Ct.test(r), o || J.attr(e, r, ""), e.removeAttribute(_t ? r : n), o && n in e && (e[n] = !1))
		},attrHooks: {type: {set: function(e, t) {
					if (kt.test(e.nodeName) && e.parentNode)
						J.error("type property can't be changed");
					else if (!J.support.radioValue && "radio" === t && J.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}},value: {get: function(e, t) {
					return vt && J.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
				},set: function(e, t, n) {
					return vt && J.nodeName(e, "button") ? vt.set(e, t, n) : void (e.value = t)
				}}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(e, n, i) {
			var r, o, a, s = e.nodeType;
			return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !J.isXMLDoc(e), a && (n = J.propFix[n] || n, o = J.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
		},propHooks: {tabIndex: {get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : Tt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : t
				}}}}), yt = {get: function(e, n) {
			var i, r = J.prop(e, n);
			return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
		},set: function(e, t, n) {
			var i;
			return t === !1 ? J.removeAttr(e, n) : (i = J.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
		}}, _t || (bt = {name: !0,id: !0,coords: !0}, vt = J.valHooks.button = {get: function(e, n) {
			var i;
			return i = e.getAttributeNode(n), i && (bt[n] ? "" !== i.value : i.specified) ? i.value : t
		},set: function(e, t, n) {
			var i = e.getAttributeNode(n);
			return i || (i = R.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
		}}, J.each(["width", "height"], function(e, t) {
		J.attrHooks[t] = J.extend(J.attrHooks[t], {set: function(e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}})
	}), J.attrHooks.contenteditable = {get: vt.get,set: function(e, t, n) {
			"" === t && (t = "false"), vt.set(e, t, n)
		}}), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(e, n) {
		J.attrHooks[n] = J.extend(J.attrHooks[n], {get: function(e) {
				var i = e.getAttribute(n, 2);
				return null === i ? t : i
			}})
	}), J.support.style || (J.attrHooks.style = {get: function(e) {
			return e.style.cssText.toLowerCase() || t
		},set: function(e, t) {
			return e.style.cssText = t + ""
		}}), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}})), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
		J.valHooks[this] = {get: function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			}}
	}), J.each(["radio", "checkbox"], function() {
		J.valHooks[this] = J.extend(J.valHooks[this], {set: function(e, t) {
				return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
			}})
	});
	var Dt = /^(?:textarea|input|select)$/i, Ft = /^([^\.]*|)(?:\.(.+)|)$/, Et = /(?:^|\s)hover(\.\S+|)\b/, At = /^key/, It = /^(?:mouse|contextmenu)|click/, Ot = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e) {
		return J.event.special.hover ? e : e.replace(Et, "mouseenter$1 mouseleave$1")
	};
	J.event = {add: function(e, n, i, r, o) {
			var a, s, l, c, u, d, p, h, f, m, g;
			if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (a = J._data(e))) {
				for (i.handler && (f = i, i = f.handler, o = f.selector), i.guid || (i.guid = J.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function(e) {
					return "undefined" == typeof J || e && J.event.triggered === e.type ? t : J.event.dispatch.apply(s.elem, arguments)
				}, s.elem = e), n = J.trim(Nt(n)).split(" "), c = 0; c < n.length; c++)
					u = Ft.exec(n[c]) || [], d = u[1], p = (u[2] || "").split(".").sort(), g = J.event.special[d] || {}, d = (o ? g.delegateType : g.bindType) || d, g = J.event.special[d] || {}, h = J.extend({type: d,origType: u[1],data: r,handler: i,guid: i.guid,selector: o,needsContext: o && J.expr.match.needsContext.test(o),namespace: p.join(".")}, f), m = l[d], m || (m = l[d] = [], m.delegateCount = 0, g.setup && g.setup.call(e, r, p, s) !== !1 || (e.addEventListener ? e.addEventListener(d, s, !1) : e.attachEvent && e.attachEvent("on" + d, s))), g.add && (g.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), o ? m.splice(m.delegateCount++, 0, h) : m.push(h), J.event.global[d] = !0;
				e = null
			}
		},global: {},remove: function(e, t, n, i, r) {
			var o, a, s, l, c, u, d, p, h, f, m, g = J.hasData(e) && J._data(e);
			if (g && (p = g.events)) {
				for (t = J.trim(Nt(t || "")).split(" "), o = 0; o < t.length; o++)
					if (a = Ft.exec(t[o]) || [], s = l = a[1], c = a[2], s) {
						for (h = J.event.special[s] || {}, s = (i ? h.delegateType : h.bindType) || s, f = p[s] || [], u = f.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; d < f.length; d++)
							m = f[d], !r && l !== m.origType || n && n.guid !== m.guid || c && !c.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (f.splice(d--, 1), m.selector && f.delegateCount--, h.remove && h.remove.call(e, m));
						0 === f.length && u !== f.length && (h.teardown && h.teardown.call(e, c, g.handle) !== !1 || J.removeEvent(e, s, g.handle), delete p[s])
					} else
						for (s in p)
							J.event.remove(e, s + t[o], n, i, !0);
				J.isEmptyObject(p) && (delete g.handle, J.removeData(e, "events", !0))
			}
		},customEvent: {getData: !0,setData: !0,changeData: !0},trigger: function(n, i, r, o) {
			if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
				var a, s, l, c, u, d, p, h, f, m, g = n.type || n, v = [];
				if (!Ot.test(g + J.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), r && !J.event.customEvent[g] || J.event.global[g]))
					if (n = "object" == typeof n ? n[J.expando] ? n : new J.Event(g, n) : new J.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = g.indexOf(":") < 0 ? "on" + g : "", r) {
						if (n.result = t, n.target || (n.target = r), i = null != i ? J.makeArray(i) : [], i.unshift(n), p = J.event.special[g] || {}, !p.trigger || p.trigger.apply(r, i) !== !1) {
							if (f = [[r, p.bindType || g]], !o && !p.noBubble && !J.isWindow(r)) {
								for (m = p.delegateType || g, c = Ot.test(m + g) ? r : r.parentNode, u = r; c; c = c.parentNode)
									f.push([c, m]), u = c;
								u === (r.ownerDocument || R) && f.push([u.defaultView || u.parentWindow || e, m])
							}
							for (l = 0; l < f.length && !n.isPropagationStopped(); l++)
								c = f[l][0], n.type = f[l][1], h = (J._data(c, "events") || {})[n.type] && J._data(c, "handle"), h && h.apply(c, i), h = d && c[d], h && J.acceptData(c) && h.apply && h.apply(c, i) === !1 && n.preventDefault();
							return n.type = g, o || n.isDefaultPrevented() || p._default && p._default.apply(r.ownerDocument, i) !== !1 || "click" === g && J.nodeName(r, "a") || !J.acceptData(r) || d && r[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !J.isWindow(r) && (u = r[d], u && (r[d] = null), J.event.triggered = g, r[g](), J.event.triggered = t, u && (r[d] = u)), n.result
						}
					} else {
						a = J.cache;
						for (l in a)
							a[l].events && a[l].events[g] && J.event.trigger(n, i, a[l].handle.elem, !0)
					}
			}
		},dispatch: function(n) {
			n = J.event.fix(n || e.event);
			var i, r, o, a, s, l, c, u, d, p = (J._data(this, "events") || {})[n.type] || [], h = p.delegateCount, f = X.call(arguments), m = !n.exclusive && !n.namespace, g = J.event.special[n.type] || {}, v = [];
			if (f[0] = n, n.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, n) !== !1) {
				if (h && (!n.button || "click" !== n.type))
					for (o = n.target; o != this; o = o.parentNode || this)
						if (o.disabled !== !0 || "click" !== n.type) {
							for (s = {}, c = [], i = 0; h > i; i++)
								u = p[i], d = u.selector, s[d] === t && (s[d] = u.needsContext ? J(d, this).index(o) >= 0 : J.find(d, this, null, [o]).length), s[d] && c.push(u);
							c.length && v.push({elem: o,matches: c})
						}
				for (p.length > h && v.push({elem: this,matches: p.slice(h)}), i = 0; i < v.length && !n.isPropagationStopped(); i++)
					for (l = v[i], n.currentTarget = l.elem, r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++)
						u = l.matches[r], (m || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data, n.handleObj = u, a = ((J.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, f), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
				return g.postDispatch && g.postDispatch.call(this, n), n.result
			}
		},props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
				var i, r, o, a = n.button, s = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || R, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}},fix: function(e) {
			if (e[J.expando])
				return e;
			var t, n, i = e, r = J.event.fixHooks[e.type] || {}, o = r.props ? this.props.concat(r.props) : this.props;
			for (e = J.Event(i), t = o.length; t; )
				n = o[--t], e[n] = i[n];
			return e.target || (e.target = i.srcElement || R), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, i) : e
		},special: {load: {noBubble: !0},focus: {delegateType: "focusin"},blur: {delegateType: "focusout"},beforeunload: {setup: function(e, t, n) {
					J.isWindow(this) && (this.onbeforeunload = n)
				},teardown: function(e, t) {
					this.onbeforeunload === t && (this.onbeforeunload = null)
				}}},simulate: function(e, t, n, i) {
			var r = J.extend(new J.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
			i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
		}}, J.event.handle = J.event.dispatch, J.removeEvent = R.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var i = "on" + t;
		e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
	}, J.Event = function(e, t) {
		return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void (this[J.expando] = !0)) : new J.Event(e, t)
	}, J.Event.prototype = {preventDefault: function() {
			this.isDefaultPrevented = a;
			var e = this.originalEvent;
			e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},stopPropagation: function() {
			this.isPropagationStopped = a;
			var e = this.originalEvent;
			e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = a, this.stopPropagation()
		},isDefaultPrevented: o,isPropagationStopped: o,isImmediatePropagationStopped: o}, J.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(e, t) {
		J.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
				var n, i = this, r = e.relatedTarget, o = e.handleObj;
				return o.selector, (!r || r !== i && !J.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}}
	}), J.support.submitBubbles || (J.event.special.submit = {setup: function() {
			return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target, i = J.nodeName(n, "input") || J.nodeName(n, "button") ? n.form : t;
				i && !J._data(i, "_submit_attached") && (J.event.add(i, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), J._data(i, "_submit_attached", !0))
			})
		},postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && J.event.simulate("submit", this.parentNode, e, !0))
		},teardown: function() {
			return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
		}}), J.support.changeBubbles || (J.event.special.change = {setup: function() {
			return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), J.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0)
			})), !1) : void J.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Dt.test(t.nodeName) && !J._data(t, "_change_attached") && (J.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || J.event.simulate("change", this.parentNode, e, !0)
				}), J._data(t, "_change_attached", !0))
			})
		},handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},teardown: function() {
			return J.event.remove(this, "._change"), !Dt.test(this.nodeName)
		}}), J.support.focusinBubbles || J.each({focus: "focusin",blur: "focusout"}, function(e, t) {
		var n = 0, i = function(e) {
			J.event.simulate(t, e.target, J.event.fix(e), !0)
		};
		J.event.special[t] = {setup: function() {
				0 === n++ && R.addEventListener(e, i, !0)
			},teardown: function() {
				0 === --n && R.removeEventListener(e, i, !0)
			}}
	}), J.fn.extend({on: function(e, n, i, r, a) {
			var s, l;
			if ("object" == typeof e) {
				"string" != typeof n && (i = i || n, n = t);
				for (l in e)
					this.on(l, n, i, e[l], a);
				return this
			}
			if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1)
				r = o;
			else if (!r)
				return this;
			return 1 === a && (s = r, r = function(e) {
				return J().off(e), s.apply(this, arguments)
			}, r.guid = s.guid || (s.guid = J.guid++)), this.each(function() {
				J.event.add(this, e, r, i, n)
			})
		},one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},off: function(e, n, i) {
			var r, a;
			if (e && e.preventDefault && e.handleObj)
				return r = e.handleObj, J(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (a in e)
					this.off(a, n, e[a]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = o), this.each(function() {
				J.event.remove(this, e, i, n)
			})
		},bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},unbind: function(e, t) {
			return this.off(e, null, t)
		},live: function(e, t, n) {
			return J(this.context).on(e, this.selector, t, n), this
		},die: function(e, t) {
			return J(this.context).off(e, this.selector || "**", t), this
		},delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},trigger: function(e, t) {
			return this.each(function() {
				J.event.trigger(e, t, this)
			})
		},triggerHandler: function(e, t) {
			return this[0] ? J.event.trigger(e, t, this[0], !0) : void 0
		},toggle: function(e) {
			var t = arguments, n = e.guid || J.guid++, i = 0, r = function(n) {
				var r = (J._data(this, "lastToggle" + e.guid) || 0) % i;
				return J._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
			};
			for (r.guid = n; i < t.length; )
				t[i++].guid = n;
			return this.click(r)
		},hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}}), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		J.fn[t] = function(e, n) {
			return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}, At.test(t) && (J.event.fixHooks[t] = J.event.keyHooks), It.test(t) && (J.event.fixHooks[t] = J.event.mouseHooks)
	}), function(e, t) {
		function n(e, t, n, i) {
			n = n || [], t = t || I;
			var r, o, a, s, l = t.nodeType;
			if (!e || "string" != typeof e)
				return n;
			if (1 !== l && 9 !== l)
				return [];
			if (a = x(t), !a && !i && (r = nt.exec(e)))
				if (s = r[1]) {
					if (9 === l) {
						if (o = t.getElementById(s), !o || !o.parentNode)
							return n;
						if (o.id === s)
							return n.push(o), n
					} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && k(t, o) && o.id === s)
						return n.push(o), n
				} else {
					if (r[2])
						return P.apply(n, B.call(t.getElementsByTagName(e), 0)), n;
					if ((s = r[3]) && pt && t.getElementsByClassName)
						return P.apply(n, B.call(t.getElementsByClassName(s), 0)), n
				}
			return m(e.replace(Q, "$1"), t, n, i, a)
		}
		function i(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function r(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function o(e) {
			return H(function(t) {
				return t = +t, H(function(n, i) {
					for (var r, o = e([], n.length, t), a = o.length; a--; )
						n[r = o[a]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}
		function a(e, t, n) {
			if (e === t)
				return n;
			for (var i = e.nextSibling; i; ) {
				if (i === t)
					return -1;
				i = i.nextSibling
			}
			return 1
		}
		function s(e, t) {
			var i, r, o, a, s, l, c, u = q[E][e + " "];
			if (u)
				return t ? 0 : u.slice(0);
			for (s = e, l = [], c = b.preFilter; s; ) {
				(!i || (r = Z.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = et.exec(s)) && (o.push(i = new A(r.shift())), s = s.slice(i.length), i.type = r[0].replace(Q, " "));
				for (a in b.filter)
					!(r = st[a].exec(s)) || c[a] && !(r = c[a](r)) || (o.push(i = new A(r.shift())), s = s.slice(i.length), i.type = a, i.matches = r);
				if (!i)
					break
			}
			return t ? s.length : s ? n.error(e) : q(e, l).slice(0)
		}
		function l(e, t, n) {
			var i = t.dir, r = n && "parentNode" === t.dir, o = $++;
			return t.first ? function(t, n, o) {
				for (; t = t[i]; )
					if (r || 1 === t.nodeType)
						return e(t, n, o)
			} : function(t, n, a) {
				if (a) {
					for (; t = t[i]; )
						if ((r || 1 === t.nodeType) && e(t, n, a))
							return t
				} else
					for (var s, l = N + " " + o + " ", c = l + v; t = t[i]; )
						if (r || 1 === t.nodeType) {
							if ((s = t[E]) === c)
								return t.sizset;
							if ("string" == typeof s && 0 === s.indexOf(l)) {
								if (t.sizset)
									return t
							} else {
								if (t[E] = c, e(t, n, a))
									return t.sizset = !0, t;
								t.sizset = !1
							}
						}
			}
		}
		function c(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var r = e.length; r--; )
					if (!e[r](t, n, i))
						return !1;
				return !0
			} : e[0]
		}
		function u(e, t, n, i, r) {
			for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
				(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
			return a
		}
		function d(e, t, n, i, r, o) {
			return i && !i[E] && (i = d(i)), r && !r[E] && (r = d(r, o)), H(function(o, a, s, l) {
				var c, d, p, h = [], m = [], g = a.length, v = o || f(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? v : u(v, h, e, s, l), b = n ? r || (o ? e : g || i) ? [] : a : y;
				if (n && n(y, b, s, l), i)
					for (c = u(b, m), i(c, [], s, l), d = c.length; d--; )
						(p = c[d]) && (b[m[d]] = !(y[m[d]] = p));
				if (o) {
					if (r || e) {
						if (r) {
							for (c = [], d = b.length; d--; )
								(p = b[d]) && c.push(y[d] = p);
							r(null, b = [], c, l)
						}
						for (d = b.length; d--; )
							(p = b[d]) && (c = r ? j.call(o, p) : h[d]) > -1 && (o[c] = !(a[c] = p))
					}
				} else
					b = u(b === a ? b.splice(g, b.length) : b), r ? r(null, a, b, l) : P.apply(a, b)
			})
		}
		function p(e) {
			for (var t, n, i, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = l(function(e) {
				return e === t
			}, a, !0), h = l(function(e) {
				return j.call(t, e) > -1
			}, a, !0), f = [function(e, n, i) {
					return !o && (i || n !== _) || ((t = n).nodeType ? u(e, n, i) : h(e, n, i))
				}]; r > s; s++)
				if (n = b.relative[e[s].type])
					f = [l(c(f), n)];
				else {
					if (n = b.filter[e[s].type].apply(null, e[s].matches), n[E]) {
						for (i = ++s; r > i && !b.relative[e[i].type]; i++)
							;
						return d(s > 1 && c(f), s > 1 && e.slice(0, s - 1).join("").replace(Q, "$1"), n, i > s && p(e.slice(s, i)), r > i && p(e = e.slice(i)), r > i && e.join(""))
					}
					f.push(n)
				}
			return c(f)
		}
		function h(e, t) {
			var i = t.length > 0, r = e.length > 0, o = function(a, s, l, c, d) {
				var p, h, f, m = [], g = 0, y = "0", w = a && [], x = null != d, k = _, T = a || r && b.find.TAG("*", d && s.parentNode || s), S = N += null == k ? 1 : Math.E;
				for (x && (_ = s !== I && s, v = o.el); null != (p = T[y]); y++) {
					if (r && p) {
						for (h = 0; f = e[h]; h++)
							if (f(p, s, l)) {
								c.push(p);
								break
							}
						x && (N = S, v = ++o.el)
					}
					i && ((p = !f && p) && g--, a && w.push(p))
				}
				if (g += y, i && y !== g) {
					for (h = 0; f = t[h]; h++)
						f(w, m, s, l);
					if (a) {
						if (g > 0)
							for (; y--; )
								w[y] || m[y] || (m[y] = M.call(c));
						m = u(m)
					}
					P.apply(c, m), x && !a && m.length > 0 && g + t.length > 1 && n.uniqueSort(c)
				}
				return x && (N = S, _ = k), w
			};
			return o.el = 0, i ? H(o) : o
		}
		function f(e, t, i) {
			for (var r = 0, o = t.length; o > r; r++)
				n(e, t[r], i);
			return i
		}
		function m(e, t, n, i, r) {
			var o, a, l, c, u, d = s(e);
			if (d.length, !i && 1 === d.length) {
				if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !r && b.relative[a[1].type]) {
					if (t = b.find.ID(l.matches[0].replace(at, ""), t, r)[0], !t)
						return n;
					e = e.slice(a.shift().length)
				}
				for (o = st.POS.test(e) ? -1 : a.length - 1; o >= 0 && (l = a[o], !b.relative[c = l.type]); o--)
					if ((u = b.find[c]) && (i = u(l.matches[0].replace(at, ""), it.test(a[0].type) && t.parentNode || t, r))) {
						if (a.splice(o, 1), e = i.length && a.join(""), !e)
							return P.apply(n, B.call(i, 0)), n;
						break
					}
			}
			return T(e, d)(i, t, r, n, it.test(e)), n
		}
		function g() {
		}
		var v, y, b, w, x, k, T, S, C, _, D = !0, F = "undefined", E = ("sizcache" + Math.random()).replace(".", ""), A = String, I = e.document, O = I.documentElement, N = 0, $ = 0, M = [].pop, P = [].push, B = [].slice, j = [].indexOf || function(e) {
			for (var t = 0, n = this.length; n > t; t++)
				if (this[t] === e)
					return t;
			return -1
		}, H = function(e, t) {
			return e[E] = null == t || t, e
		}, L = function() {
			var e = {}, t = [];
			return H(function(n, i) {
				return t.push(n) > b.cacheLength && delete e[t.shift()], e[n + " "] = i
			}, e)
		}, R = L(), q = L(), W = L(), z = "[\\x20\\t\\r\\n\\f]", V = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", Y = V.replace("w", "w#"), X = "([*^$|!~]?=)", U = "\\[" + z + "*(" + V + ")" + z + "*(?:" + X + z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Y + ")|)|)" + z + "*\\]", K = ":(" + V + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + U + ")|[^:]|\\\\.)*|.*))\\)|)", G = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", Q = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"), Z = new RegExp("^" + z + "*," + z + "*"), et = new RegExp("^" + z + "*([\\x20\\t\\r\\n\\f>+~])" + z + "*"), tt = new RegExp(K), nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, it = /[\x20\t\r\n\f]*[+~]/, rt = /h\d/i, ot = /input|select|textarea|button/i, at = /\\(?!\\)/g, st = {ID: new RegExp("^#(" + V + ")"),CLASS: new RegExp("^\\.(" + V + ")"),NAME: new RegExp("^\\[name=['\"]?(" + V + ")['\"]?\\]"),TAG: new RegExp("^(" + V.replace("w", "w*") + ")"),ATTR: new RegExp("^" + U),PSEUDO: new RegExp("^" + K),POS: new RegExp(G, "i"),CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),needsContext: new RegExp("^" + z + "*[>+~]|" + G, "i")}, lt = function(e) {
			var t = I.createElement("div");
			try {
				return e(t)
			} catch (n) {
				return !1
			}finally {
				t = null
			}
		}, ct = lt(function(e) {
			return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
		}), ut = lt(function(e) {
			return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== F && "#" === e.firstChild.getAttribute("href")
		}), dt = lt(function(e) {
			e.innerHTML = "<select></select>";
			var t = typeof e.lastChild.getAttribute("multiple");
			return "boolean" !== t && "string" !== t
		}), pt = lt(function(e) {
			return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
		}), ht = lt(function(e) {
			e.id = E + 0, e.innerHTML = "<a name='" + E + "'></a><div name='" + E + "'></div>", O.insertBefore(e, O.firstChild);
			var t = I.getElementsByName && I.getElementsByName(E).length === 2 + I.getElementsByName(E + 0).length;
			return y = !I.getElementById(E), O.removeChild(e), t
		});
		try {
			B.call(O.childNodes, 0)[0].nodeType
		} catch (ft) {
			B = function(e) {
				for (var t, n = []; t = this[e]; e++)
					n.push(t);
				return n
			}
		}
		n.matches = function(e, t) {
			return n(e, null, null, t)
		}, n.matchesSelector = function(e, t) {
			return n(t, null, null, [e]).length > 0
		}, w = n.getText = function(e) {
			var t, n = "", i = 0, r = e.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof e.textContent)
						return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling)
						n += w(e)
				} else if (3 === r || 4 === r)
					return e.nodeValue
			} else
				for (; t = e[i]; i++)
					n += w(t);
			return n
		}, x = n.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, k = n.contains = O.contains ? function(e, t) {
			var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
			return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
		} : O.compareDocumentPosition ? function(e, t) {
			return t && !!(16 & e.compareDocumentPosition(t))
		} : function(e, t) {
			for (; t = t.parentNode; )
				if (t === e)
					return !0;
			return !1
		}, n.attr = function(e, t) {
			var n, i = x(e);
			return i || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : i || dt ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
		}, b = n.selectors = {cacheLength: 50,createPseudo: H,match: st,attrHandle: ut ? {} : {href: function(e) {
					return e.getAttribute("href", 2)
				},type: function(e) {
					return e.getAttribute("type")
				}},find: {ID: y ? function(e, t, n) {
					if (typeof t.getElementById !== F && !n) {
						var i = t.getElementById(e);
						return i && i.parentNode ? [i] : []
					}
				} : function(e, n, i) {
					if (typeof n.getElementById !== F && !i) {
						var r = n.getElementById(e);
						return r ? r.id === e || typeof r.getAttributeNode !== F && r.getAttributeNode("id").value === e ? [r] : t : []
					}
				},TAG: ct ? function(e, t) {
					return typeof t.getElementsByTagName !== F ? t.getElementsByTagName(e) : void 0
				} : function(e, t) {
					var n = t.getElementsByTagName(e);
					if ("*" === e) {
						for (var i, r = [], o = 0; i = n[o]; o++)
							1 === i.nodeType && r.push(i);
						return r
					}
					return n
				},NAME: ht && function(e, t) {
					return typeof t.getElementsByName !== F ? t.getElementsByName(name) : void 0
				},CLASS: pt && function(e, t, n) {
					return typeof t.getElementsByClassName === F || n ? void 0 : t.getElementsByClassName(e)
				}},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
					return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
				},PSEUDO: function(e) {
					var t, n;
					return st.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
				}},filter: {ID: y ? function(e) {
					return e = e.replace(at, ""), function(t) {
						return t.getAttribute("id") === e
					}
				} : function(e) {
					return e = e.replace(at, ""), function(t) {
						var n = typeof t.getAttributeNode !== F && t.getAttributeNode("id");
						return n && n.value === e
					}
				},TAG: function(e) {
					return "*" === e ? function() {
						return !0
					} : (e = e.replace(at, "").toLowerCase(), function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					})
				},CLASS: function(e) {
					var t = R[E][e + " "];
					return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && R(e, function(e) {
						return t.test(e.className || typeof e.getAttribute !== F && e.getAttribute("class") || "")
					})
				},ATTR: function(e, t, i) {
					return function(r) {
						var o = n.attr(r, e);
						return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.substr(o.length - i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0
					}
				},CHILD: function(e, t, n, i) {
					return "nth" === e ? function(e) {
						var t, r, o = e.parentNode;
						if (1 === n && 0 === i)
							return !0;
						if (o)
							for (r = 0, t = o.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling)
								;
						return r -= i, r === n || r % n === 0 && r / n >= 0
					} : function(t) {
						var n = t;
						switch (e) {
							case "only":
							case "first":
								for (; n = n.previousSibling; )
									if (1 === n.nodeType)
										return !1;
								if ("first" === e)
									return !0;
								n = t;
							case "last":
								for (; n = n.nextSibling; )
									if (1 === n.nodeType)
										return !1;
								return !0
						}
					}
				},PSEUDO: function(e, t) {
					var i, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
					return r[E] ? r(t) : r.length > 1 ? (i = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? H(function(e, n) {
						for (var i, o = r(e, t), a = o.length; a--; )
							i = j.call(e, o[a]), e[i] = !(n[i] = o[a])
					}) : function(e) {
						return r(e, 0, i)
					}) : r
				}},pseudos: {not: H(function(e) {
					var t = [], n = [], i = T(e.replace(Q, "$1"));
					return i[E] ? H(function(e, t, n, r) {
						for (var o, a = i(e, null, r, []), s = e.length; s--; )
							(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, r, o) {
						return t[0] = e, i(t, null, o, n), !n.pop()
					}
				}),has: H(function(e) {
					return function(t) {
						return n(e, t).length > 0
					}
				}),contains: H(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
					}
				}),enabled: function(e) {
					return e.disabled === !1
				},disabled: function(e) {
					return e.disabled === !0
				},checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},parent: function(e) {
					return !b.pseudos.empty(e)
				},empty: function(e) {
					var t;
					for (e = e.firstChild; e; ) {
						if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t)
							return !1;
						e = e.nextSibling
					}
					return !0
				},header: function(e) {
					return rt.test(e.nodeName)
				},text: function(e) {
					var t, n;
					return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
				},radio: i("radio"),checkbox: i("checkbox"),file: i("file"),password: i("password"),image: i("image"),submit: r("submit"),reset: r("reset"),button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},input: function(e) {
					return ot.test(e.nodeName)
				},focus: function(e) {
					var t = e.ownerDocument;
					return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},active: function(e) {
					return e === e.ownerDocument.activeElement
				},first: o(function() {
					return [0]
				}),last: o(function(e, t) {
					return [t - 1]
				}),eq: o(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),even: o(function(e, t) {
					for (var n = 0; t > n; n += 2)
						e.push(n);
					return e
				}),odd: o(function(e, t) {
					for (var n = 1; t > n; n += 2)
						e.push(n);
					return e
				}),lt: o(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0; )
						e.push(i);
					return e
				}),gt: o(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t; )
						e.push(i);
					return e
				})}}, S = O.compareDocumentPosition ? function(e, t) {
			return e === t ? (C = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
		} : function(e, t) {
			if (e === t)
				return C = !0, 0;
			if (e.sourceIndex && t.sourceIndex)
				return e.sourceIndex - t.sourceIndex;
			var n, i, r = [], o = [], s = e.parentNode, l = t.parentNode, c = s;
			if (s === l)
				return a(e, t);
			if (!s)
				return -1;
			if (!l)
				return 1;
			for (; c; )
				r.unshift(c), c = c.parentNode;
			for (c = l; c; )
				o.unshift(c), c = c.parentNode;
			n = r.length, i = o.length;
			for (var u = 0; n > u && i > u; u++)
				if (r[u] !== o[u])
					return a(r[u], o[u]);
			return u === n ? a(e, o[u], -1) : a(r[u], t, 1)
		}, [0, 0].sort(S), D = !C, n.uniqueSort = function(e) {
			var t, n = [], i = 1, r = 0;
			if (C = D, e.sort(S), C) {
				for (; t = e[i]; i++)
					t === e[i - 1] && (r = n.push(i));
				for (; r--; )
					e.splice(n[r], 1)
			}
			return e
		}, n.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, T = n.compile = function(e, t) {
			var n, i = [], r = [], o = W[E][e + " "];
			if (!o) {
				for (t || (t = s(e)), n = t.length; n--; )
					o = p(t[n]), o[E] ? i.push(o) : r.push(o);
				o = W(e, h(r, i))
			}
			return o
		}, I.querySelectorAll && !function() {
			var e, t = m, i = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, o = [":focus"], a = [":active"], l = O.matchesSelector || O.mozMatchesSelector || O.webkitMatchesSelector || O.oMatchesSelector || O.msMatchesSelector;
			lt(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
			}), lt(function(e) {
				e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + z + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
			}), o = new RegExp(o.join("|")), m = function(e, n, r, a, l) {
				if (!a && !l && !o.test(e)) {
					var c, u, d = !0, p = E, h = n, f = 9 === n.nodeType && e;
					if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
						for (c = s(e), (d = n.getAttribute("id")) ? p = d.replace(i, "\\$&") : n.setAttribute("id", p), p = "[id='" + p + "'] ", u = c.length; u--; )
							c[u] = p + c[u].join("");
						h = it.test(e) && n.parentNode || n, f = c.join(",")
					}
					if (f)
						try {
							return P.apply(r, B.call(h.querySelectorAll(f), 0)), r
						} catch (m) {
						}finally {
							d || n.removeAttribute("id")
						}
				}
				return t(e, n, r, a, l)
			}, l && (lt(function(t) {
				e = l.call(t, "div");
				try {
					l.call(t, "[test!='']:sizzle"), a.push("!=", K)
				} catch (n) {
				}
			}), a = new RegExp(a.join("|")), n.matchesSelector = function(t, i) {
				if (i = i.replace(r, "='$1']"), !x(t) && !a.test(i) && !o.test(i))
					try {
						var s = l.call(t, i);
						if (s || e || t.document && 11 !== t.document.nodeType)
							return s
					} catch (c) {
					}
				return n(i, null, null, [t]).length > 0
			})
		}(), b.pseudos.nth = b.pseudos.eq, b.filters = g.prototype = b.pseudos, b.setFilters = new g, n.attr = J.attr, J.find = n, J.expr = n.selectors, J.expr[":"] = J.expr.pseudos, J.unique = n.uniqueSort, J.text = n.getText, J.isXMLDoc = n.isXML, J.contains = n.contains
	}(e);
	var $t = /Until$/, Mt = /^(?:parents|prev(?:Until|All))/, Pt = /^.[^:#\[\.,]*$/, Bt = J.expr.match.needsContext, jt = {children: !0,contents: !0,next: !0,prev: !0};
	J.fn.extend({find: function(e) {
			var t, n, i, r, o, a, s = this;
			if ("string" != typeof e)
				return J(e).filter(function() {
					for (t = 0, n = s.length; n > t; t++)
						if (J.contains(s[t], this))
							return !0
				});
			for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
				if (i = a.length, J.find(e, this[t], a), t > 0)
					for (r = i; r < a.length; r++)
						for (o = 0; i > o; o++)
							if (a[o] === a[r]) {
								a.splice(r--, 1);
								break
							}
			return a
		},has: function(e) {
			var t, n = J(e, this), i = n.length;
			return this.filter(function() {
				for (t = 0; i > t; t++)
					if (J.contains(this, n[t]))
						return !0
			})
		},not: function(e) {
			return this.pushStack(c(this, e, !1), "not", e)
		},filter: function(e) {
			return this.pushStack(c(this, e, !0), "filter", e)
		},is: function(e) {
			return !!e && ("string" == typeof e ? Bt.test(e) ? J(e, this.context).index(this[0]) >= 0 : J.filter(e, this).length > 0 : this.filter(e).length > 0)
		},closest: function(e, t) {
			for (var n, i = 0, r = this.length, o = [], a = Bt.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++)
				for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
					if (a ? a.index(n) > -1 : J.find.matchesSelector(n, e)) {
						o.push(n);
						break
					}
					n = n.parentNode
				}
			return o = o.length > 1 ? J.unique(o) : o, this.pushStack(o, "closest", e)
		},index: function(e) {
			return e ? "string" == typeof e ? J.inArray(this[0], J(e)) : J.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},add: function(e, t) {
			var n = "string" == typeof e ? J(e, t) : J.makeArray(e && e.nodeType ? [e] : e), i = J.merge(this.get(), n);
			return this.pushStack(s(n[0]) || s(i[0]) ? i : J.unique(i))
		},addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}}), J.fn.andSelf = J.fn.addBack, J.each({parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},parents: function(e) {
			return J.dir(e, "parentNode")
		},parentsUntil: function(e, t, n) {
			return J.dir(e, "parentNode", n)
		},next: function(e) {
			return l(e, "nextSibling")
		},prev: function(e) {
			return l(e, "previousSibling")
		},nextAll: function(e) {
			return J.dir(e, "nextSibling")
		},prevAll: function(e) {
			return J.dir(e, "previousSibling")
		},nextUntil: function(e, t, n) {
			return J.dir(e, "nextSibling", n)
		},prevUntil: function(e, t, n) {
			return J.dir(e, "previousSibling", n)
		},siblings: function(e) {
			return J.sibling((e.parentNode || {}).firstChild, e)
		},children: function(e) {
			return J.sibling(e.firstChild)
		},contents: function(e) {
			return J.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : J.merge([], e.childNodes)
		}}, function(e, t) {
		J.fn[e] = function(n, i) {
			var r = J.map(this, t, n);
			return $t.test(e) || (i = n), i && "string" == typeof i && (r = J.filter(i, r)), r = this.length > 1 && !jt[e] ? J.unique(r) : r, this.length > 1 && Mt.test(e) && (r = r.reverse()), this.pushStack(r, e, X.call(arguments).join(","))
		}
	}), J.extend({filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"), 1 === t.length ? J.find.matchesSelector(t[0], e) ? [t[0]] : [] : J.find.matches(e, t)
		},dir: function(e, n, i) {
			for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !J(o).is(i)); )
				1 === o.nodeType && r.push(o), o = o[n];
			return r
		},sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			return n
		}});
	var Ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Lt = / jQuery\d+="(?:null|\d+)"/g, Rt = /^\s+/, qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Wt = /<([\w:]+)/, zt = /<tbody/i, Vt = /<|&#?\w+;/, Yt = /<(?:script|style|link)/i, Xt = /<(?:script|object|embed|option|style)/i, Ut = new RegExp("<(?:" + Ht + ")[\\s/>]", "i"), Kt = /^(?:checkbox|radio)$/, Gt = /checked\s*(?:[^=]|=\s*.checked.)/i, Qt = /\/(java|ecma)script/i, Jt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Zt = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],area: [1, "<map>", "</map>"],_default: [0, "", ""]}, en = u(R), tn = en.appendChild(R.createElement("div"));
	Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, J.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), J.fn.extend({text: function(e) {
			return J.access(this, function(e) {
				return e === t ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(e))
			}, null, e, arguments.length)
		},wrapAll: function(e) {
			if (J.isFunction(e))
				return this.each(function(t) {
					J(this).wrapAll(e.call(this, t))
				});
			if (this[0]) {
				var t = J(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
						e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},wrapInner: function(e) {
			return this.each(J.isFunction(e) ? function(t) {
				J(this).wrapInner(e.call(this, t))
			} : function() {
				var t = J(this), n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},wrap: function(e) {
			var t = J.isFunction(e);
			return this.each(function(n) {
				J(this).wrapAll(t ? e.call(this, n) : e)
			})
		},unwrap: function() {
			return this.parent().each(function() {
				J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
			}).end()
		},append: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
			})
		},prepend: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},before: function() {
			if (!s(this[0]))
				return this.domManip(arguments, !1, function(e) {
					this.parentNode.insertBefore(e, this)
				});
			if (arguments.length) {
				var e = J.clean(arguments);
				return this.pushStack(J.merge(e, this), "before", this.selector)
			}
		},after: function() {
			if (!s(this[0]))
				return this.domManip(arguments, !1, function(e) {
					this.parentNode.insertBefore(e, this.nextSibling)
				});
			if (arguments.length) {
				var e = J.clean(arguments);
				return this.pushStack(J.merge(this, e), "after", this.selector)
			}
		},remove: function(e, t) {
			for (var n, i = 0; null != (n = this[i]); i++)
				(!e || J.filter(e, [n]).length) && (t || 1 !== n.nodeType || (J.cleanData(n.getElementsByTagName("*")), J.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
			return this
		},empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++)
				for (1 === e.nodeType && J.cleanData(e.getElementsByTagName("*")); e.firstChild; )
					e.removeChild(e.firstChild);
			return this
		},clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return J.clone(this, e, t)
			})
		},html: function(e) {
			return J.access(this, function(e) {
				var n = this[0] || {}, i = 0, r = this.length;
				if (e === t)
					return 1 === n.nodeType ? n.innerHTML.replace(Lt, "") : t;
				if (!("string" != typeof e || Yt.test(e) || !J.support.htmlSerialize && Ut.test(e) || !J.support.leadingWhitespace && Rt.test(e) || Zt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(qt, "<$1></$2>");
					try {
						for (; r > i; i++)
							n = this[i] || {}, 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
						n = 0
					} catch (o) {
					}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},replaceWith: function(e) {
			return s(this[0]) ? this.length ? this.pushStack(J(J.isFunction(e) ? e() : e), "replaceWith", e) : this : J.isFunction(e) ? this.each(function(t) {
				var n = J(this), i = n.html();
				n.replaceWith(e.call(this, t, i))
			}) : ("string" != typeof e && (e = J(e).detach()), this.each(function() {
				var t = this.nextSibling, n = this.parentNode;
				J(this).remove(), t ? J(t).before(e) : J(n).append(e)
			}))
		},detach: function(e) {
			return this.remove(e, !0)
		},domManip: function(e, n, i) {
			e = [].concat.apply([], e);
			var r, o, a, s, l = 0, c = e[0], u = [], p = this.length;
			if (!J.support.checkClone && p > 1 && "string" == typeof c && Gt.test(c))
				return this.each(function() {
					J(this).domManip(e, n, i)
				});
			if (J.isFunction(c))
				return this.each(function(r) {
					var o = J(this);
					e[0] = c.call(this, r, n ? o.html() : t), o.domManip(e, n, i)
				});
			if (this[0]) {
				if (r = J.buildFragment(e, this, u), a = r.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
					for (n = n && J.nodeName(o, "tr"), s = r.cacheable || p - 1; p > l; l++)
						i.call(n && J.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === s ? a : J.clone(a, !0, !0));
				a = o = null, u.length && J.each(u, function(e, t) {
					t.src ? J.ajax ? J.ajax({url: t.src,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0}) : J.error("no ajax") : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Jt, "")), t.parentNode && t.parentNode.removeChild(t)
				})
			}
			return this
		}}), J.buildFragment = function(e, n, i) {
		var r, o, a, s = e[0];
		return n = n || R, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof s && s.length < 512 && n === R && "<" === s.charAt(0)) || Xt.test(s) || !J.support.checkClone && Gt.test(s) || !J.support.html5Clone && Ut.test(s) || (o = !0, r = J.fragments[s], a = r !== t), r || (r = n.createDocumentFragment(), J.clean(e, n, r, i), o && (J.fragments[s] = a && r)), {fragment: r,cacheable: o}
	}, J.fragments = {}, J.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
		J.fn[e] = function(n) {
			var i, r = 0, o = [], a = J(n), s = a.length, l = 1 === this.length && this[0].parentNode;
			if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s)
				return a[t](this[0]), this;
			for (; s > r; r++)
				i = (r > 0 ? this.clone(!0) : this).get(), J(a[r])[t](i), o = o.concat(i);
			return this.pushStack(o, e, a.selector)
		}
	}), J.extend({clone: function(e, t, n) {
			var i, r, o, a;
			if (J.support.html5Clone || J.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
				for (h(e, a), i = f(e), r = f(a), o = 0; i[o]; ++o)
					r[o] && h(i[o], r[o]);
			if (t && (p(e, a), n))
				for (i = f(e), r = f(a), o = 0; i[o]; ++o)
					p(i[o], r[o]);
			return i = r = null, a
		},clean: function(e, t, n, i) {
			var r, o, a, s, l, c, d, p, h, f, g, v = t === R && en, y = [];
			for (t && "undefined" != typeof t.createDocumentFragment || (t = R), r = 0; null != (a = e[r]); r++)
				if ("number" == typeof a && (a += ""), a) {
					if ("string" == typeof a)
						if (Vt.test(a)) {
							for (v = v || u(t), d = t.createElement("div"), v.appendChild(d), a = a.replace(qt, "<$1></$2>"), s = (Wt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[s] || Zt._default, c = l[0], d.innerHTML = l[1] + a + l[2]; c--; )
								d = d.lastChild;
							if (!J.support.tbody)
								for (p = zt.test(a), h = "table" !== s || p ? "<table>" !== l[1] || p ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, o = h.length - 1; o >= 0; --o)
									J.nodeName(h[o], "tbody") && !h[o].childNodes.length && h[o].parentNode.removeChild(h[o]);
							!J.support.leadingWhitespace && Rt.test(a) && d.insertBefore(t.createTextNode(Rt.exec(a)[0]), d.firstChild), a = d.childNodes, d.parentNode.removeChild(d)
						} else
							a = t.createTextNode(a);
					a.nodeType ? y.push(a) : J.merge(y, a)
				}
			if (d && (a = d = v = null), !J.support.appendChecked)
				for (r = 0; null != (a = y[r]); r++)
					J.nodeName(a, "input") ? m(a) : "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), m);
			if (n)
				for (f = function(e) {
					return !e.type || Qt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
				}, r = 0; null != (a = y[r]); r++)
					J.nodeName(a, "script") && f(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (g = J.grep(J.merge([], a.getElementsByTagName("script")), f), y.splice.apply(y, [r + 1, 0].concat(g)), r += g.length));
			return y
		},cleanData: function(e, t) {
			for (var n, i, r, o, a = 0, s = J.expando, l = J.cache, c = J.support.deleteExpando, u = J.event.special; null != (r = e[a]); a++)
				if ((t || J.acceptData(r)) && (i = r[s], n = i && l[i])) {
					if (n.events)
						for (o in n.events)
							u[o] ? J.event.remove(r, o) : J.removeEvent(r, o, n.handle);
					l[i] && (delete l[i], c ? delete r[s] : r.removeAttribute ? r.removeAttribute(s) : r[s] = null, J.deletedIds.push(i))
				}
		}}), function() {
		var e, t;
		J.uaMatch = function(e) {
			e = e.toLowerCase();
			var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
			return {browser: t[1] || "",version: t[2] || "0"}
		}, e = J.uaMatch(W.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), J.browser = t, J.sub = function() {
			function e(t, n) {
				return new e.fn.init(t, n)
			}
			J.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
				return i && i instanceof J && !(i instanceof e) && (i = e(i)), J.fn.init.call(this, n, i, t)
			}, e.fn.init.prototype = e.fn;
			var t = e(R);
			return e
		}
	}();
	var nn, rn, on, an = /alpha\([^)]*\)/i, sn = /opacity=([^)]*)/, ln = /^(top|right|bottom|left)$/, cn = /^(none|table(?!-c[ea]).+)/, un = /^margin/, dn = new RegExp("^(" + Z + ")(.*)$", "i"), pn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"), hn = new RegExp("^([-+])=(" + Z + ")", "i"), fn = {BODY: "block"}, mn = {position: "absolute",visibility: "hidden",display: "block"}, gn = {letterSpacing: 0,fontWeight: 400}, vn = ["Top", "Right", "Bottom", "Left"], yn = ["Webkit", "O", "Moz", "ms"], bn = J.fn.toggle;
	J.fn.extend({css: function(e, n) {
			return J.access(this, function(e, n, i) {
				return i !== t ? J.style(e, n, i) : J.css(e, n)
			}, e, n, arguments.length > 1)
		},show: function() {
			return y(this, !0)
		},hide: function() {
			return y(this)
		},toggle: function(e, t) {
			var n = "boolean" == typeof e;
			return J.isFunction(e) && J.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
				(n ? e : v(this)) ? J(this).show() : J(this).hide()
			})
		}}), J.extend({cssHooks: {opacity: {get: function(e, t) {
					if (t) {
						var n = nn(e, "opacity");
						return "" === n ? "1" : n
					}
				}}},cssNumber: {fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": J.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, i, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = J.camelCase(n), c = e.style;
				if (n = J.cssProps[l] || (J.cssProps[l] = g(c, l)), s = J.cssHooks[n] || J.cssHooks[l], i === t)
					return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : c[n];
				if (a = typeof i, "string" === a && (o = hn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(J.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || J.cssNumber[l] || (i += "px"), s && "set" in s && (i = s.set(e, i, r)) === t)))
					try {
						c[n] = i
					} catch (u) {
					}
			}
		},css: function(e, n, i, r) {
			var o, a, s, l = J.camelCase(n);
			return n = J.cssProps[l] || (J.cssProps[l] = g(e.style, l)), s = J.cssHooks[n] || J.cssHooks[l], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = nn(e, n)), "normal" === o && n in gn && (o = gn[n]), i || r !== t ? (a = parseFloat(o), i || J.isNumeric(a) ? a || 0 : o) : o
		},swap: function(e, t, n) {
			var i, r, o = {};
			for (r in t)
				o[r] = e.style[r], e.style[r] = t[r];
			i = n.call(e);
			for (r in t)
				e.style[r] = o[r];
			return i
		}}), e.getComputedStyle ? nn = function(t, n) {
		var i, r, o, a, s = e.getComputedStyle(t, null), l = t.style;
		return s && (i = s.getPropertyValue(n) || s[n], "" !== i || J.contains(t.ownerDocument, t) || (i = J.style(t, n)), pn.test(i) && un.test(n) && (r = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = s.width, l.width = r, l.minWidth = o, l.maxWidth = a)), i
	} : R.documentElement.currentStyle && (nn = function(e, t) {
		var n, i, r = e.currentStyle && e.currentStyle[t], o = e.style;
		return null == r && o && o[t] && (r = o[t]), pn.test(r) && !ln.test(t) && (n = o.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
	}), J.each(["height", "width"], function(e, t) {
		J.cssHooks[t] = {get: function(e, n, i) {
				return n ? 0 === e.offsetWidth && cn.test(nn(e, "display")) ? J.swap(e, mn, function() {
					return x(e, t, i)
				}) : x(e, t, i) : void 0
			},set: function(e, n, i) {
				return b(e, n, i ? w(e, t, i, J.support.boxSizing && "border-box" === J.css(e, "boxSizing")) : 0)
			}}
	}), J.support.opacity || (J.cssHooks.opacity = {get: function(e, t) {
			return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},set: function(e, t) {
			var n = e.style, i = e.currentStyle, r = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = i && i.filter || n.filter || "";
			n.zoom = 1, t >= 1 && "" === J.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
		}}), J(function() {
		J.support.reliableMarginRight || (J.cssHooks.marginRight = {get: function(e, t) {
				return J.swap(e, {display: "inline-block"}, function() {
					return t ? nn(e, "marginRight") : void 0
				})
			}}), !J.support.pixelPosition && J.fn.position && J.each(["top", "left"], function(e, t) {
			J.cssHooks[t] = {get: function(e, n) {
					if (n) {
						var i = nn(e, t);
						return pn.test(i) ? J(e).position()[t] + "px" : i
					}
				}}
		})
	}), J.expr && J.expr.filters && (J.expr.filters.hidden = function(e) {
		return 0 === e.offsetWidth && 0 === e.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
	}, J.expr.filters.visible = function(e) {
		return !J.expr.filters.hidden(e)
	}), J.each({margin: "",padding: "",border: "Width"}, function(e, t) {
		J.cssHooks[e + t] = {expand: function(n) {
				var i, r = "string" == typeof n ? n.split(" ") : [n], o = {};
				for (i = 0; 4 > i; i++)
					o[e + vn[i] + t] = r[i] || r[i - 2] || r[0];
				return o
			}}, un.test(e) || (J.cssHooks[e + t].set = b)
	});
	var wn = /%20/g, xn = /\[\]$/, kn = /\r?\n/g, Tn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Sn = /^(?:select|textarea)/i;
	J.fn.extend({serialize: function() {
			return J.param(this.serializeArray())
		},serializeArray: function() {
			return this.map(function() {
				return this.elements ? J.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Sn.test(this.nodeName) || Tn.test(this.type))
			}).map(function(e, t) {
				var n = J(this).val();
				return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
					return {name: t.name,value: e.replace(kn, "\r\n")}
				}) : {name: t.name,value: n.replace(kn, "\r\n")}
			}).get()
		}}), J.param = function(e, n) {
		var i, r = [], o = function(e, t) {
			t = J.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		if (n === t && (n = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e))
			J.each(e, function() {
				o(this.name, this.value)
			});
		else
			for (i in e)
				T(i, e[i], n, o);
		return r.join("&").replace(wn, "+")
	};
	var Cn, _n, Dn = /#.*$/, Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, En = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, An = /^(?:GET|HEAD)$/, In = /^\/\//, On = /\?/, Nn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, $n = /([?&])_=[^&]*/, Mn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Pn = J.fn.load, Bn = {}, jn = {}, Hn = ["*/"] + ["*"];
	try {
		_n = q.href
	} catch (Ln) {
		_n = R.createElement("a"), _n.href = "", _n = _n.href
	}
	Cn = Mn.exec(_n.toLowerCase()) || [], J.fn.load = function(e, n, i) {
		if ("string" != typeof e && Pn)
			return Pn.apply(this, arguments);
		if (!this.length)
			return this;
		var r, o, a, s = this, l = e.indexOf(" ");
		return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), J.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), J.ajax({url: e,type: o,dataType: "html",data: n,complete: function(e, t) {
				i && s.each(i, a || [e.responseText, t, e])
			}}).done(function(e) {
			a = arguments, s.html(r ? J("<div>").append(e.replace(Nn, "")).find(r) : e)
		}), this
	}, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
		J.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), J.each(["get", "post"], function(e, n) {
		J[n] = function(e, i, r, o) {
			return J.isFunction(i) && (o = o || r, r = i, i = t), J.ajax({type: n,url: e,data: i,success: r,dataType: o})
		}
	}), J.extend({getScript: function(e, n) {
			return J.get(e, t, n, "script")
		},getJSON: function(e, t, n) {
			return J.get(e, t, n, "json")
		},ajaxSetup: function(e, t) {
			return t ? _(e, J.ajaxSettings) : (t = e, e = J.ajaxSettings), _(e, t), e
		},ajaxSettings: {url: _n,isLocal: En.test(Cn[1]),global: !0,type: "GET",contentType: "application/x-www-form-urlencoded; charset=UTF-8",processData: !0,async: !0,accepts: {xml: "application/xml, text/xml",html: "text/html",text: "text/plain",json: "application/json, text/javascript","*": Hn},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": e.String,"text html": !0,"text json": J.parseJSON,"text xml": J.parseXML},flatOptions: {context: !0,url: !0}},ajaxPrefilter: S(Bn),ajaxTransport: S(jn),ajax: function(e, n) {
			function i(e, n, i, a) {
				var c, d, y, b, x, T = n;
				2 !== w && (w = 2, l && clearTimeout(l), s = t, o = a || "", k.readyState = e > 0 ? 4 : 0, i && (b = D(p, k, i)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (J.lastModified[r] = x), x = k.getResponseHeader("Etag"), x && (J.etag[r] = x)), 304 === e ? (T = "notmodified", c = !0) : (c = F(p, b), T = c.state, d = c.data, y = c.error, c = !y)) : (y = T, (!T || e) && (T = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || T) + "", c ? m.resolveWith(h, [d, T, k]) : m.rejectWith(h, [k, T, y]), k.statusCode(v), v = t, u && f.trigger("ajax" + (c ? "Success" : "Error"), [k, p, c ? d : y]), g.fireWith(h, [k, T]), u && (f.trigger("ajaxComplete", [k, p]), --J.active || J.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, o, a, s, l, c, u, d, p = J.ajaxSetup({}, n), h = p.context || p, f = h !== p && (h.nodeType || h instanceof J) ? J(h) : J.event, m = J.Deferred(), g = J.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", k = {readyState: 0,setRequestHeader: function(e, t) {
					if (!w) {
						var n = e.toLowerCase();
						e = b[n] = b[n] || e, y[e] = t
					}
					return this
				},getAllResponseHeaders: function() {
					return 2 === w ? o : null
				},getResponseHeader: function(e) {
					var n;
					if (2 === w) {
						if (!a)
							for (a = {}; n = Fn.exec(o); )
								a[n[1].toLowerCase()] = n[2];
						n = a[e.toLowerCase()]
					}
					return n === t ? null : n
				},overrideMimeType: function(e) {
					return w || (p.mimeType = e), this
				},abort: function(e) {
					return e = e || x, s && s.abort(e), i(0, e), this
				}};
			if (m.promise(k), k.success = k.done, k.error = k.fail, k.complete = g.add, k.statusCode = function(e) {
				if (e) {
					var t;
					if (2 > w)
						for (t in e)
							v[t] = [v[t], e[t]];
					else
						t = e[k.status], k.always(t)
				}
				return this
			}, p.url = ((e || p.url) + "").replace(Dn, "").replace(In, Cn[1] + "//"), p.dataTypes = J.trim(p.dataType || "*").toLowerCase().split(tt), null == p.crossDomain && (c = Mn.exec(p.url.toLowerCase()), p.crossDomain = !(!c || c[1] === Cn[1] && c[2] === Cn[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Cn[3] || ("http:" === Cn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), C(Bn, p, n, k), 2 === w)
				return k;
			if (u = p.global, p.type = p.type.toUpperCase(), p.hasContent = !An.test(p.type), u && 0 === J.active++ && J.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (On.test(p.url) ? "&" : "?") + p.data, delete p.data), r = p.url, p.cache === !1)) {
				var T = J.now(), S = p.url.replace($n, "$1_=" + T);
				p.url = S + (S === p.url ? (On.test(p.url) ? "&" : "?") + "_=" + T : "")
			}
			(p.data && p.hasContent && p.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), p.ifModified && (r = r || p.url, J.lastModified[r] && k.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && k.setRequestHeader("If-None-Match", J.etag[r])), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Hn + "; q=0.01" : "") : p.accepts["*"]);
			for (d in p.headers)
				k.setRequestHeader(d, p.headers[d]);
			if (p.beforeSend && (p.beforeSend.call(h, k, p) === !1 || 2 === w))
				return k.abort();
			x = "abort";
			for (d in {success: 1,error: 1,complete: 1})
				k[d](p[d]);
			if (s = C(jn, p, n, k)) {
				k.readyState = 1, u && f.trigger("ajaxSend", [k, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
					k.abort("timeout")
				}, p.timeout));
				try {
					w = 1, s.send(y, i)
				} catch (_) {
					if (!(2 > w))
						throw _;
					i(-1, _)
				}
			} else
				i(-1, "No Transport");
			return k
		},active: 0,lastModified: {},etag: {}});
	var Rn = [], qn = /\?/, Wn = /(=)\?(?=&|$)|\?\?/, zn = J.now();
	J.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
			var e = Rn.pop() || J.expando + "_" + zn++;
			return this[e] = !0, e
		}}), J.ajaxPrefilter("json jsonp", function(n, i, r) {
		var o, a, s, l = n.data, c = n.url, u = n.jsonp !== !1, d = u && Wn.test(c), p = u && !d && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l);
		return "jsonp" === n.dataTypes[0] || d || p ? (o = n.jsonpCallback = J.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], d ? n.url = c.replace(Wn, "$1" + o) : p ? n.data = l.replace(Wn, "$1" + o) : u && (n.url += (qn.test(c) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || J.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", e[o] = function() {
			s = arguments
		}, r.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Rn.push(o)), s && J.isFunction(a) && a(s[0]), s = a = t
		}), "script") : void 0
	}), J.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /javascript|ecmascript/},converters: {"text script": function(e) {
				return J.globalEval(e), e
			}}}), J.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), J.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, i = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
			return {send: function(r, o) {
					n = R.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
						(r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"))
					}, i.insertBefore(n, i.firstChild)
				},abort: function() {
					n && n.onload(0, 1)
				}}
		}
	});
	var Vn, Yn = e.ActiveXObject ? function() {
		for (var e in Vn)
			Vn[e](0, 1)
	} : !1, Xn = 0;
	J.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && E() || A()
	} : E, function(e) {
		J.extend(J.support, {ajax: !!e,cors: !!e && "withCredentials" in e})
	}(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(n) {
		if (!n.crossDomain || J.support.cors) {
			var i;
			return {send: function(r, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
						for (s in n.xhrFields)
							l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in r)
							l.setRequestHeader(s, r[s])
					} catch (c) {
					}
					l.send(n.hasContent && n.data || null), i = function(e, r) {
						var s, c, u, d, p;
						try {
							if (i && (r || 4 === l.readyState))
								if (i = t, a && (l.onreadystatechange = J.noop, Yn && delete Vn[a]), r)
									4 !== l.readyState && l.abort();
								else {
									s = l.status, u = l.getAllResponseHeaders(), d = {}, p = l.responseXML, p && p.documentElement && (d.xml = p);
									try {
										d.text = l.responseText
									} catch (h) {
									}
									try {
										c = l.statusText
									} catch (h) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
								}
						} catch (f) {
							r || o(-1, f)
						}
						d && o(s, c, d, u)
					}, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (a = ++Xn, Yn && (Vn || (Vn = {}, J(e).unload(Yn)), Vn[a] = i), l.onreadystatechange = i) : i()
				},abort: function() {
					i && i(0, 1)
				}}
		}
	});
	var Un, Kn, Gn = /^(?:toggle|show|hide)$/, Qn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Zn = [M], ei = {"*": [function(e, t) {
				var n, i, r = this.createTween(e, t), o = Qn.exec(t), a = r.cur(), s = +a || 0, l = 1, c = 20;
				if (o) {
					if (n = +o[2], i = o[3] || (J.cssNumber[e] ? "" : "px"), "px" !== i && s) {
						s = J.css(r.elem, e, !0) || n || 1;
						do
							l = l || ".5", s /= l, J.style(r.elem, e, s + i);
						while (l !== (l = r.cur() / a) && 1 !== l && --c)
					}
					r.unit = i, r.start = s, r.end = o[1] ? s + (o[1] + 1) * n : n
				}
				return r
			}]};
	J.Animation = J.extend(N, {tweener: function(e, t) {
			J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, i = 0, r = e.length; r > i; i++)
				n = e[i], ei[n] = ei[n] || [], ei[n].unshift(t)
		},prefilter: function(e, t) {
			t ? Zn.unshift(e) : Zn.push(e)
		}}), J.Tween = P, P.prototype = {constructor: P,init: function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
		},cur: function() {
			var e = P.propHooks[this.prop];
			return e && e.get ? e.get(this) : P.propHooks._default.get(this)
		},run: function(e) {
			var t, n = P.propHooks[this.prop];
			return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
		}}, P.prototype.init.prototype = P.prototype, P.propHooks = {_default: {get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},set: function(e) {
				J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}}}, P.propHooks.scrollTop = P.propHooks.scrollLeft = {set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}}, J.each(["toggle", "show", "hide"], function(e, t) {
		var n = J.fn[t];
		J.fn[t] = function(i, r, o) {
			return null == i || "boolean" == typeof i || !e && J.isFunction(i) && J.isFunction(r) ? n.apply(this, arguments) : this.animate(B(t, !0), i, r, o)
		}
	}), J.fn.extend({fadeTo: function(e, t, n, i) {
			return this.filter(v).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
		},animate: function(e, t, n, i) {
			var r = J.isEmptyObject(e), o = J.speed(t, n, i), a = function() {
				var t = N(this, J.extend({}, e), o);
				r && t.stop(!0)
			};
			return r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},stop: function(e, n, i) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(i)
			};
			return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0, n = null != e && e + "queueHooks", o = J.timers, a = J._data(this);
				if (n)
					a[n] && a[n].stop && r(a[n]);
				else
					for (n in a)
						a[n] && a[n].stop && Jn.test(n) && r(a[n]);
				for (n = o.length; n--; )
					o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
				(t || !i) && J.dequeue(this, e)
			})
		}}), J.each({slideDown: B("show"),slideUp: B("hide"),slideToggle: B("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
		J.fn[e] = function(e, n, i) {
			return this.animate(t, e, n, i)
		}
	}), J.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? J.extend({}, e) : {complete: n || !n && t || J.isFunction(e) && e,duration: e,easing: n && t || t && !J.isFunction(t) && t};
		return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
		}, i
	}, J.easing = {linear: function(e) {
			return e
		},swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}}, J.timers = [], J.fx = P.prototype.init, J.fx.tick = function() {
		var e, n = J.timers, i = 0;
		for (Un = J.now(); i < n.length; i++)
			e = n[i], e() || n[i] !== e || n.splice(i--, 1);
		n.length || J.fx.stop(), Un = t
	}, J.fx.timer = function(e) {
		e() && J.timers.push(e) && !Kn && (Kn = setInterval(J.fx.tick, J.fx.interval))
	}, J.fx.interval = 13, J.fx.stop = function() {
		clearInterval(Kn), Kn = null
	}, J.fx.speeds = {slow: 600,fast: 200,_default: 400}, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function(e) {
		return J.grep(J.timers, function(t) {
			return e === t.elem
		}).length
	});
	var ti = /^(?:body|html)$/i;
	J.fn.offset = function(e) {
		if (arguments.length)
			return e === t ? this : this.each(function(t) {
				J.offset.setOffset(this, e, t)
			});
		var n, i, r, o, a, s, l, c = {top: 0,left: 0}, u = this[0], d = u && u.ownerDocument;
		return d ? (i = d.body) === u ? J.offset.bodyOffset(u) : (n = d.documentElement, J.contains(n, u) ? ("undefined" != typeof u.getBoundingClientRect && (c = u.getBoundingClientRect()), r = j(d), o = n.clientTop || i.clientTop || 0, a = n.clientLeft || i.clientLeft || 0, s = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {top: c.top + s - o,left: c.left + l - a}) : c) : void 0
	}, J.offset = {bodyOffset: function(e) {
			var t = e.offsetTop, n = e.offsetLeft;
			return J.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(J.css(e, "marginTop")) || 0, n += parseFloat(J.css(e, "marginLeft")) || 0), {top: t,left: n}
		},setOffset: function(e, t, n) {
			var i = J.css(e, "position");
			"static" === i && (e.style.position = "relative");
			var r, o, a = J(e), s = a.offset(), l = J.css(e, "top"), c = J.css(e, "left"), u = ("absolute" === i || "fixed" === i) && J.inArray("auto", [l, c]) > -1, d = {}, p = {};
			u ? (p = a.position(), r = p.top, o = p.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0), J.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
		}}, J.fn.extend({position: function() {
			if (this[0]) {
				var e = this[0], t = this.offsetParent(), n = this.offset(), i = ti.test(t[0].nodeName) ? {top: 0,left: 0} : t.offset();
				return n.top -= parseFloat(J.css(e, "marginTop")) || 0, n.left -= parseFloat(J.css(e, "marginLeft")) || 0, i.top += parseFloat(J.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(J.css(t[0], "borderLeftWidth")) || 0, {top: n.top - i.top,left: n.left - i.left}
			}
		},offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || R.body; e && !ti.test(e.nodeName) && "static" === J.css(e, "position"); )
					e = e.offsetParent;
				return e || R.body
			})
		}}), J.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(e, n) {
		var i = /Y/.test(n);
		J.fn[e] = function(r) {
			return J.access(this, function(e, r, o) {
				var a = j(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : void (a ? a.scrollTo(i ? J(a).scrollLeft() : o, i ? o : J(a).scrollTop()) : e[r] = o)
			}, e, r, arguments.length, null)
		}
	}), J.each({Height: "height",Width: "width"}, function(e, n) {
		J.each({padding: "inner" + e,content: n,"": "outer" + e}, function(i, r) {
			J.fn[r] = function(r, o) {
				var a = arguments.length && (i || "boolean" != typeof r), s = i || (r === !0 || o === !0 ? "margin" : "border");
				return J.access(this, function(n, i, r) {
					var o;
					return J.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? J.css(n, i, r, s) : J.style(n, i, r, s)
				}, n, a ? r : t, a, null)
			}
		})
	}), e.jQuery = e.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return J
	})
}(window), function() {
	var e = this, t = e._, n = {}, i = Array.prototype, r = Object.prototype, o = Function.prototype, a = i.push, s = i.slice, l = i.concat, c = r.toString, u = r.hasOwnProperty, d = i.forEach, p = i.map, h = i.reduce, f = i.reduceRight, m = i.filter, g = i.every, v = i.some, y = i.indexOf, b = i.lastIndexOf, w = Array.isArray, x = Object.keys, k = o.bind, T = function(e) {
		return e instanceof T ? e : this instanceof T ? void (this._wrapped = e) : new T(e)
	};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : e._ = T, T.VERSION = "1.5.2";
	var S = T.each = T.forEach = function(e, t, i) {
		if (null != e)
			if (d && e.forEach === d)
				e.forEach(t, i);
			else if (e.length === +e.length) {
				for (var r = 0, o = e.length; o > r; r++)
					if (t.call(i, e[r], r, e) === n)
						return
			} else
				for (var a = T.keys(e), r = 0, o = a.length; o > r; r++)
					if (t.call(i, e[a[r]], a[r], e) === n)
						return
	};
	T.map = T.collect = function(e, t, n) {
		var i = [];
		return null == e ? i : p && e.map === p ? e.map(t, n) : (S(e, function(e, r, o) {
			i.push(t.call(n, e, r, o))
		}), i)
	};
	var C = "Reduce of empty array with no initial value";
	T.reduce = T.foldl = T.inject = function(e, t, n, i) {
		var r = arguments.length > 2;
		if (null == e && (e = []), h && e.reduce === h)
			return i && (t = T.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
		if (S(e, function(e, o, a) {
			r ? n = t.call(i, n, e, o, a) : (n = e, r = !0)
		}), !r)
			throw new TypeError(C);
		return n
	}, T.reduceRight = T.foldr = function(e, t, n, i) {
		var r = arguments.length > 2;
		if (null == e && (e = []), f && e.reduceRight === f)
			return i && (t = T.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
		var o = e.length;
		if (o !== +o) {
			var a = T.keys(e);
			o = a.length
		}
		if (S(e, function(s, l, c) {
			l = a ? a[--o] : --o, r ? n = t.call(i, n, e[l], l, c) : (n = e[l], r = !0)
		}), !r)
			throw new TypeError(C);
		return n
	}, T.find = T.detect = function(e, t, n) {
		var i;
		return _(e, function(e, r, o) {
			return t.call(n, e, r, o) ? (i = e, !0) : void 0
		}), i
	}, T.filter = T.select = function(e, t, n) {
		var i = [];
		return null == e ? i : m && e.filter === m ? e.filter(t, n) : (S(e, function(e, r, o) {
			t.call(n, e, r, o) && i.push(e)
		}), i)
	}, T.reject = function(e, t, n) {
		return T.filter(e, function(e, i, r) {
			return !t.call(n, e, i, r)
		}, n)
	}, T.every = T.all = function(e, t, i) {
		t || (t = T.identity);
		var r = !0;
		return null == e ? r : g && e.every === g ? e.every(t, i) : (S(e, function(e, o, a) {
			return (r = r && t.call(i, e, o, a)) ? void 0 : n
		}), !!r)
	};
	var _ = T.some = T.any = function(e, t, i) {
		t || (t = T.identity);
		var r = !1;
		return null == e ? r : v && e.some === v ? e.some(t, i) : (S(e, function(e, o, a) {
			return r || (r = t.call(i, e, o, a)) ? n : void 0
		}), !!r)
	};
	T.contains = T.include = function(e, t) {
		return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : _(e, function(e) {
			return e === t
		})
	}, T.invoke = function(e, t) {
		var n = s.call(arguments, 2), i = T.isFunction(t);
		return T.map(e, function(e) {
			return (i ? t : e[t]).apply(e, n)
		})
	}, T.pluck = function(e, t) {
		return T.map(e, function(e) {
			return e[t]
		})
	}, T.where = function(e, t, n) {
		return T.isEmpty(t) ? n ? void 0 : [] : T[n ? "find" : "filter"](e, function(e) {
			for (var n in t)
				if (t[n] !== e[n])
					return !1;
			return !0
		})
	}, T.findWhere = function(e, t) {
		return T.where(e, t, !0)
	}, T.max = function(e, t, n) {
		if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535)
			return Math.max.apply(Math, e);
		if (!t && T.isEmpty(e))
			return -1 / 0;
		var i = {computed: -1 / 0,value: -1 / 0};
		return S(e, function(e, r, o) {
			var a = t ? t.call(n, e, r, o) : e;
			a > i.computed && (i = {value: e,computed: a})
		}), i.value
	}, T.min = function(e, t, n) {
		if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535)
			return Math.min.apply(Math, e);
		if (!t && T.isEmpty(e))
			return 1 / 0;
		var i = {computed: 1 / 0,value: 1 / 0};
		return S(e, function(e, r, o) {
			var a = t ? t.call(n, e, r, o) : e;
			a < i.computed && (i = {value: e,computed: a})
		}), i.value
	}, T.shuffle = function(e) {
		var t, n = 0, i = [];
		return S(e, function(e) {
			t = T.random(n++), i[n - 1] = i[t], i[t] = e
		}), i
	}, T.sample = function(e, t, n) {
		return arguments.length < 2 || n ? e[T.random(e.length - 1)] : T.shuffle(e).slice(0, Math.max(0, t))
	};
	var D = function(e) {
		return T.isFunction(e) ? e : function(t) {
			return t[e]
		}
	};
	T.sortBy = function(e, t, n) {
		var i = D(t);
		return T.pluck(T.map(e, function(e, t, r) {
			return {value: e,index: t,criteria: i.call(n, e, t, r)}
		}).sort(function(e, t) {
			var n = e.criteria, i = t.criteria;
			if (n !== i) {
				if (n > i || void 0 === n)
					return 1;
				if (i > n || void 0 === i)
					return -1
			}
			return e.index - t.index
		}), "value")
	};
	var F = function(e) {
		return function(t, n, i) {
			var r = {}, o = null == n ? T.identity : D(n);
			return S(t, function(n, a) {
				var s = o.call(i, n, a, t);
				e(r, s, n)
			}), r
		}
	};
	T.groupBy = F(function(e, t, n) {
		(T.has(e, t) ? e[t] : e[t] = []).push(n)
	}), T.indexBy = F(function(e, t, n) {
		e[t] = n
	}), T.countBy = F(function(e, t) {
		T.has(e, t) ? e[t]++ : e[t] = 1
	}), T.sortedIndex = function(e, t, n, i) {
		n = null == n ? T.identity : D(n);
		for (var r = n.call(i, t), o = 0, a = e.length; a > o; ) {
			var s = o + a >>> 1;
			n.call(i, e[s]) < r ? o = s + 1 : a = s
		}
		return o
	}, T.toArray = function(e) {
		return e ? T.isArray(e) ? s.call(e) : e.length === +e.length ? T.map(e, T.identity) : T.values(e) : []
	}, T.size = function(e) {
		return null == e ? 0 : e.length === +e.length ? e.length : T.keys(e).length
	}, T.first = T.head = T.take = function(e, t, n) {
		return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
	}, T.initial = function(e, t, n) {
		return s.call(e, 0, e.length - (null == t || n ? 1 : t))
	}, T.last = function(e, t, n) {
		return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
	}, T.rest = T.tail = T.drop = function(e, t, n) {
		return s.call(e, null == t || n ? 1 : t)
	}, T.compact = function(e) {
		return T.filter(e, T.identity)
	};
	var E = function(e, t, n) {
		return t && T.every(e, T.isArray) ? l.apply(n, e) : (S(e, function(e) {
			T.isArray(e) || T.isArguments(e) ? t ? a.apply(n, e) : E(e, t, n) : n.push(e)
		}), n)
	};
	T.flatten = function(e, t) {
		return E(e, t, [])
	}, T.without = function(e) {
		return T.difference(e, s.call(arguments, 1))
	}, T.uniq = T.unique = function(e, t, n, i) {
		T.isFunction(t) && (i = n, n = t, t = !1);
		var r = n ? T.map(e, n, i) : e, o = [], a = [];
		return S(r, function(n, i) {
			(t ? i && a[a.length - 1] === n : T.contains(a, n)) || (a.push(n), o.push(e[i]))
		}), o
	}, T.union = function() {
		return T.uniq(T.flatten(arguments, !0))
	}, T.intersection = function(e) {
		var t = s.call(arguments, 1);
		return T.filter(T.uniq(e), function(e) {
			return T.every(t, function(t) {
				return T.indexOf(t, e) >= 0
			})
		})
	}, T.difference = function(e) {
		var t = l.apply(i, s.call(arguments, 1));
		return T.filter(e, function(e) {
			return !T.contains(t, e)
		})
	}, T.zip = function() {
		for (var e = T.max(T.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++)
			t[n] = T.pluck(arguments, "" + n);
		return t
	}, T.object = function(e, t) {
		if (null == e)
			return {};
		for (var n = {}, i = 0, r = e.length; r > i; i++)
			t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
		return n
	}, T.indexOf = function(e, t, n) {
		if (null == e)
			return -1;
		var i = 0, r = e.length;
		if (n) {
			if ("number" != typeof n)
				return i = T.sortedIndex(e, t), e[i] === t ? i : -1;
			i = 0 > n ? Math.max(0, r + n) : n
		}
		if (y && e.indexOf === y)
			return e.indexOf(t, n);
		for (; r > i; i++)
			if (e[i] === t)
				return i;
		return -1
	}, T.lastIndexOf = function(e, t, n) {
		if (null == e)
			return -1;
		var i = null != n;
		if (b && e.lastIndexOf === b)
			return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
		for (var r = i ? n : e.length; r--; )
			if (e[r] === t)
				return r;
		return -1
	}, T.range = function(e, t, n) {
		arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
		for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r; )
			o[r++] = e, e += n;
		return o
	};
	var A = function() {
	};
	T.bind = function(e, t) {
		var n, i;
		if (k && e.bind === k)
			return k.apply(e, s.call(arguments, 1));
		if (!T.isFunction(e))
			throw new TypeError;
		return n = s.call(arguments, 2), i = function() {
			if (!(this instanceof i))
				return e.apply(t, n.concat(s.call(arguments)));
			A.prototype = e.prototype;
			var r = new A;
			A.prototype = null;
			var o = e.apply(r, n.concat(s.call(arguments)));
			return Object(o) === o ? o : r
		}
	}, T.partial = function(e) {
		var t = s.call(arguments, 1);
		return function() {
			return e.apply(this, t.concat(s.call(arguments)))
		}
	}, T.bindAll = function(e) {
		var t = s.call(arguments, 1);
		if (0 === t.length)
			throw new Error("bindAll must be passed function names");
		return S(t, function(t) {
			e[t] = T.bind(e[t], e)
		}), e
	}, T.memoize = function(e, t) {
		var n = {};
		return t || (t = T.identity), function() {
			var i = t.apply(this, arguments);
			return T.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
		}
	}, T.delay = function(e, t) {
		var n = s.call(arguments, 2);
		return setTimeout(function() {
			return e.apply(null, n)
		}, t)
	}, T.defer = function(e) {
		return T.delay.apply(T, [e, 1].concat(s.call(arguments, 1)))
	}, T.throttle = function(e, t, n) {
		var i, r, o, a = null, s = 0;
		n || (n = {});
		var l = function() {
			s = n.leading === !1 ? 0 : new Date, a = null, o = e.apply(i, r)
		};
		return function() {
			var c = new Date;
			s || n.leading !== !1 || (s = c);
			var u = t - (c - s);
			return i = this, r = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, o = e.apply(i, r)) : a || n.trailing === !1 || (a = setTimeout(l, u)), o
		}
	}, T.debounce = function(e, t, n) {
		var i, r, o, a, s;
		return function() {
			o = this, r = arguments, a = new Date;
			var l = function() {
				var c = new Date - a;
				t > c ? i = setTimeout(l, t - c) : (i = null, n || (s = e.apply(o, r)))
			}, c = n && !i;
			return i || (i = setTimeout(l, t)), c && (s = e.apply(o, r)), s
		}
	}, T.once = function(e) {
		var t, n = !1;
		return function() {
			return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
		}
	}, T.wrap = function(e, t) {
		return function() {
			var n = [e];
			return a.apply(n, arguments), t.apply(this, n)
		}
	}, T.compose = function() {
		var e = arguments;
		return function() {
			for (var t = arguments, n = e.length - 1; n >= 0; n--)
				t = [e[n].apply(this, t)];
			return t[0]
		}
	}, T.after = function(e, t) {
		return function() {
			return --e < 1 ? t.apply(this, arguments) : void 0
		}
	}, T.keys = x || function(e) {
		if (e !== Object(e))
			throw new TypeError("Invalid object");
		var t = [];
		for (var n in e)
			T.has(e, n) && t.push(n);
		return t
	}, T.values = function(e) {
		for (var t = T.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++)
			i[r] = e[t[r]];
		return i
	}, T.pairs = function(e) {
		for (var t = T.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++)
			i[r] = [t[r], e[t[r]]];
		return i
	}, T.invert = function(e) {
		for (var t = {}, n = T.keys(e), i = 0, r = n.length; r > i; i++)
			t[e[n[i]]] = n[i];
		return t
	}, T.functions = T.methods = function(e) {
		var t = [];
		for (var n in e)
			T.isFunction(e[n]) && t.push(n);
		return t.sort()
	}, T.extend = function(e) {
		return S(s.call(arguments, 1), function(t) {
			if (t)
				for (var n in t)
					e[n] = t[n]
		}), e
	}, T.pick = function(e) {
		var t = {}, n = l.apply(i, s.call(arguments, 1));
		return S(n, function(n) {
			n in e && (t[n] = e[n])
		}), t
	}, T.omit = function(e) {
		var t = {}, n = l.apply(i, s.call(arguments, 1));
		for (var r in e)
			T.contains(n, r) || (t[r] = e[r]);
		return t
	}, T.defaults = function(e) {
		return S(s.call(arguments, 1), function(t) {
			if (t)
				for (var n in t)
					void 0 === e[n] && (e[n] = t[n])
		}), e
	}, T.clone = function(e) {
		return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
	}, T.tap = function(e, t) {
		return t(e), e
	};
	var I = function(e, t, n, i) {
		if (e === t)
			return 0 !== e || 1 / e == 1 / t;
		if (null == e || null == t)
			return e === t;
		e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
		var r = c.call(e);
		if (r != c.call(t))
			return !1;
		switch (r) {
			case "[object String]":
				return e == String(t);
			case "[object Number]":
				return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
			case "[object Date]":
			case "[object Boolean]":
				return +e == +t;
			case "[object RegExp]":
				return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
		}
		if ("object" != typeof e || "object" != typeof t)
			return !1;
		for (var o = n.length; o--; )
			if (n[o] == e)
				return i[o] == t;
		var a = e.constructor, s = t.constructor;
		if (a !== s && !(T.isFunction(a) && a instanceof a && T.isFunction(s) && s instanceof s))
			return !1;
		n.push(e), i.push(t);
		var l = 0, u = !0;
		if ("[object Array]" == r) {
			if (l = e.length, u = l == t.length)
				for (; l-- && (u = I(e[l], t[l], n, i)); )
					;
		} else {
			for (var d in e)
				if (T.has(e, d) && (l++, !(u = T.has(t, d) && I(e[d], t[d], n, i))))
					break;
			if (u) {
				for (d in t)
					if (T.has(t, d) && !l--)
						break;
				u = !l
			}
		}
		return n.pop(), i.pop(), u
	};
	T.isEqual = function(e, t) {
		return I(e, t, [], [])
	}, T.isEmpty = function(e) {
		if (null == e)
			return !0;
		if (T.isArray(e) || T.isString(e))
			return 0 === e.length;
		for (var t in e)
			if (T.has(e, t))
				return !1;
		return !0
	}, T.isElement = function(e) {
		return !(!e || 1 !== e.nodeType)
	}, T.isArray = w || function(e) {
		return "[object Array]" == c.call(e)
	}, T.isObject = function(e) {
		return e === Object(e)
	}, S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
		T["is" + e] = function(t) {
			return c.call(t) == "[object " + e + "]"
		}
	}), T.isArguments(arguments) || (T.isArguments = function(e) {
		return !(!e || !T.has(e, "callee"))
	}), "function" != typeof / . / && (T.isFunction = function(e) {
		return "function" == typeof e
	}), T.isFinite = function(e) {
		return isFinite(e) && !isNaN(parseFloat(e))
	}, T.isNaN = function(e) {
		return T.isNumber(e) && e != +e
	}, T.isBoolean = function(e) {
		return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
	}, T.isNull = function(e) {
		return null === e
	}, T.isUndefined = function(e) {
		return void 0 === e
	}, T.has = function(e, t) {
		return u.call(e, t)
	}, T.noConflict = function() {
		return e._ = t, this
	}, T.identity = function(e) {
		return e
	}, T.times = function(e, t, n) {
		for (var i = Array(Math.max(0, e)), r = 0; e > r; r++)
			i[r] = t.call(n, r);
		return i
	}, T.random = function(e, t) {
		return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
	};
	var O = {escape: {"&": "&","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#x27;"}};
	O.unescape = T.invert(O.escape);
	var N = {escape: new RegExp("[" + T.keys(O.escape).join("") + "]", "g"),unescape: new RegExp("(" + T.keys(O.unescape).join("|") + ")", "g")};
	T.each(["escape", "unescape"], function(e) {
		T[e] = function(t) {
			return null == t ? "" : ("" + t).replace(N[e], function(t) {
				return O[e][t]
			})
		}
	}), T.result = function(e, t) {
		if (null == e)
			return void 0;
		var n = e[t];
		return T.isFunction(n) ? n.call(e) : n
	}, T.mixin = function(e) {
		S(T.functions(e), function(t) {
			var n = T[t] = e[t];
			T.prototype[t] = function() {
				var e = [this._wrapped];
				return a.apply(e, arguments), j.call(this, n.apply(T, e))
			}
		})
	};
	var $ = 0;
	T.uniqueId = function(e) {
		var t = ++$ + "";
		return e ? e + t : t
	}, T.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g};
	var M = /(.)^/, P = {"'": "'","\\": "\\","\r": "r","\n": "n","   ": "t","\u2028": "u2028","\u2029": "u2029"}, B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	T.template = function(e, t, n) {
		var i;
		n = T.defaults({}, n, T.templateSettings);
		var r = new RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"), o = 0, a = "__p+='";
		e.replace(r, function(t, n, i, r, s) {
			return a += e.slice(o, s).replace(B, function(e) {
				return "\\" + P[e]
			}), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), o = s + t.length, t
		}), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
		try {
			i = new Function(n.variable || "obj", "_", a)
		} catch (s) {
			throw s.source = a, s
		}
		if (t)
			return i(t, T);
		var l = function(e) {
			return i.call(this, e, T)
		};
		return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
	}, T.chain = function(e) {
		return T(e).chain()
	};
	var j = function(e) {
		return this._chain ? T(e).chain() : e
	};
	T.mixin(T), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
		var t = i[e];
		T.prototype[e] = function() {
			var n = this._wrapped;
			return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], j.call(this, n)
		}
	}), S(["concat", "join", "slice"], function(e) {
		var t = i[e];
		T.prototype[e] = function() {
			return j.call(this, t.apply(this._wrapped, arguments))
		}
	}), T.extend(T.prototype, {chain: function() {
			return this._chain = !0, this
		},value: function() {
			return this._wrapped
		}})
}.call(this), function() {
	for (var e = 0, t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n)
		window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
		var n = (new Date).getTime(), i = Math.max(0, 16 - (n - e)), r = window.setTimeout(function() {
			t(n + i)
		}, i);
		return e = n + i, r
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
		clearTimeout(e)
	})
}(), function(e) {
	function t(e) {
		if (e in d.style)
			return e;
		var t = ["Moz", "Webkit", "O", "ms"], n = e.charAt(0).toUpperCase() + e.substr(1);
		if (e in d.style)
			return e;
		for (var i = 0; i < t.length; ++i) {
			var r = t[i] + n;
			if (r in d.style)
				return r
		}
	}
	function n() {
		return d.style[p.transform] = "", d.style[p.transform] = "rotateY(90deg)", "" !== d.style[p.transform]
	}
	function i(e) {
		return "string" == typeof e && this.parse(e), this
	}
	function r(e, t, n) {
		t === !0 ? e.queue(n) : t ? e.queue(t, n) : n()
	}
	function o(t) {
		var n = [];
		return e.each(t, function(t) {
			t = e.camelCase(t), t = e.transit.propertyMap[t] || e.cssProps[t] || t, t = l(t), -1 === e.inArray(t, n) && n.push(t)
		}), n
	}
	function a(t, n, i, r) {
		var a = o(t);
		e.cssEase[i] && (i = e.cssEase[i]);
		var s = "" + u(n) + " " + i;
		parseInt(r, 10) > 0 && (s += " " + u(r));
		var l = [];
		return e.each(a, function(e, t) {
			l.push(t + " " + s)
		}), l.join(", ")
	}
	function s(t, n) {
		n || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = p.transform, e.cssHooks[t] = {get: function(n) {
				var i = e(n).css("transit:transform");
				return i.get(t)
			},set: function(n, i) {
				var r = e(n).css("transit:transform");
				r.setFromString(t, i), e(n).css({"transit:transform": r})
			}}
	}
	function l(e) {
		return e.replace(/([A-Z])/g, function(e) {
			return "-" + e.toLowerCase()
		})
	}
	function c(e, t) {
		return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
	}
	function u(t) {
		var n = t;
		return e.fx.speeds[n] && (n = e.fx.speeds[n]), c(n, "ms")
	}
	e.transit = {version: "0.9.9",propertyMap: {marginLeft: "margin",marginRight: "margin",marginBottom: "margin",marginTop: "margin",paddingLeft: "padding",paddingRight: "padding",paddingBottom: "padding",paddingTop: "padding"},enabled: !0,useTransitionEnd: !1};
	var d = document.createElement("div"), p = {}, h = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
	p.transition = t("transition"), p.transitionDelay = t("transitionDelay"), p.transform = t("transform"), p.transformOrigin = t("transformOrigin"), p.transform3d = n();
	var f = {transition: "transitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd",WebkitTransition: "webkitTransitionEnd",msTransition: "MSTransitionEnd"}, m = p.transitionEnd = f[p.transition] || null;
	for (var g in p)
		p.hasOwnProperty(g) && "undefined" == typeof e.support[g] && (e.support[g] = p[g]);
	d = null, e.cssEase = {_default: "ease","in": "ease-in",out: "ease-out","in-out": "ease-in-out",snap: "cubic-bezier(0,1,.5,1)",easeOutCubic: "cubic-bezier(.215,.61,.355,1)",easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",easeInCirc: "cubic-bezier(.6,.04,.98,.335)",easeOutCirc: "cubic-bezier(.075,.82,.165,1)",easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",easeInExpo: "cubic-bezier(.95,.05,.795,.035)",easeOutExpo: "cubic-bezier(.19,1,.22,1)",easeInOutExpo: "cubic-bezier(1,0,0,1)",easeInQuad: "cubic-bezier(.55,.085,.68,.53)",easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",easeInQuart: "cubic-bezier(.895,.03,.685,.22)",easeOutQuart: "cubic-bezier(.165,.84,.44,1)",easeInOutQuart: "cubic-bezier(.77,0,.175,1)",easeInQuint: "cubic-bezier(.755,.05,.855,.06)",easeOutQuint: "cubic-bezier(.23,1,.32,1)",easeInOutQuint: "cubic-bezier(.86,0,.07,1)",easeInSine: "cubic-bezier(.47,0,.745,.715)",easeOutSine: "cubic-bezier(.39,.575,.565,1)",easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",easeInBack: "cubic-bezier(.6,-.28,.735,.045)",easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"}, e.cssHooks["transit:transform"] = {get: function(t) {
			return e(t).data("transform") || new i
		},set: function(t, n) {
			var r = n;
			r instanceof i || (r = new i(r)), t.style[p.transform] = "WebkitTransform" !== p.transform || h ? r.toString() : r.toString(!0), e(t).data("transform", r)
		}}, e.cssHooks.transform = {set: e.cssHooks["transit:transform"].set}, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {get: function(e) {
			return e.style[p.transformOrigin]
		},set: function(e, t) {
			e.style[p.transformOrigin] = t
		}}, e.cssHooks.transition = {get: function(e) {
			return e.style[p.transition]
		},set: function(e, t) {
			e.style[p.transition] = t
		}}), s("scale"), s("translate"), s("rotate"), s("rotateX"), s("rotateY"), s("rotate3d"), s("perspective"), s("skewX"), s("skewY"), s("x", !0), s("y", !0), i.prototype = {setFromString: function(e, t) {
			var n = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
			n.unshift(e), i.prototype.set.apply(this, n)
		},set: function(e) {
			var t = Array.prototype.slice.apply(arguments, [1]);
			this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
		},get: function(e) {
			return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
		},setter: {rotate: function(e) {
				this.rotate = c(e, "deg")
			},rotateX: function(e) {
				this.rotateX = c(e, "deg")
			},rotateY: function(e) {
				this.rotateY = c(e, "deg")
			},scale: function(e, t) {
				void 0 === t && (t = e), this.scale = e + "," + t
			},skewX: function(e) {
				this.skewX = c(e, "deg")
			},skewY: function(e) {
				this.skewY = c(e, "deg")
			},perspective: function(e) {
				this.perspective = c(e, "px")
			},x: function(e) {
				this.set("translate", e, null)
			},y: function(e) {
				this.set("translate", null, e)
			},translate: function(e, t) {
				void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== e && void 0 !== e && (this._translateX = c(e, "px")), null !== t && void 0 !== t && (this._translateY = c(t, "px")), this.translate = this._translateX + "," + this._translateY
			}},getter: {x: function() {
				return this._translateX || 0
			},y: function() {
				return this._translateY || 0
			},scale: function() {
				var e = (this.scale || "1,1").split(",");
				return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
			},rotate3d: function() {
				for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; 3 >= t; ++t)
					e[t] && (e[t] = parseFloat(e[t]));
				return e[3] && (e[3] = c(e[3], "deg")), e
			}},parse: function(e) {
			var t = this;
			e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, i) {
				t.setFromString(n, i)
			})
		},toString: function(e) {
			var t = [];
			for (var n in this)
				if (this.hasOwnProperty(n)) {
					if (!p.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n))
						continue;
					"_" !== n[0] && t.push(e && "scale" === n ? n + "3d(" + this[n] + ",1)" : e && "translate" === n ? n + "3d(" + this[n] + ",0)" : n + "(" + this[n] + ")")
				}
			return t.join(" ")
		}}, e.fn.transition = e.fn.transit = function(t, n, i, o) {
		var s = this, l = 0, c = !0;
		"function" == typeof n && (o = n, n = void 0), "function" == typeof i && (o = i, i = void 0), "undefined" != typeof t.easing && (i = t.easing, delete t.easing), "undefined" != typeof t.duration && (n = t.duration, delete t.duration), "undefined" != typeof t.complete && (o = t.complete, delete t.complete), "undefined" != typeof t.queue && (c = t.queue, delete t.queue), "undefined" != typeof t.delay && (l = t.delay, delete t.delay), "undefined" == typeof n && (n = e.fx.speeds._default), "undefined" == typeof i && (i = e.cssEase._default), n = u(n);
		var d = a(t, n, i, l), h = e.transit.enabled && p.transition, f = h ? parseInt(n, 10) + parseInt(l, 10) : 0;
		if (0 === f) {
			var g = function(e) {
				s.css(t), o && o.apply(s), e && e()
			};
			return r(s, c, g), s
		}
		var v = {}, y = function(n) {
			var i = !1, r = function() {
				i && s.unbind(m, r), f > 0 && s.each(function() {
					this.style[p.transition] = v[this] || null
				}), "function" == typeof o && o.apply(s), "function" == typeof n && n()
			};
			f > 0 && m && e.transit.useTransitionEnd ? (i = !0, s.bind(m, r)) : window.setTimeout(r, f), s.each(function() {
				f > 0 && (this.style[p.transition] = d), e(this).css(t)
			})
		}, b = function(e) {
			this.offsetWidth, y(e)
		};
		return r(s, c, b), this
	}, e.transit.getTransitionValue = a
}(jQuery), function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
	function t(t) {
		var n = t || window.event, i = [].slice.call(arguments, 1), s = 0, l = 0, c = 0, u = 0, d = 0;
		return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (s = n.wheelDelta), n.detail && (s = -1 * n.detail), c = s, void 0 !== n.axis && n.axis === n.HORIZONTAL_AXIS && (c = 0, l = -1 * s), n.deltaY && (c = -1 * n.deltaY, s = c), n.deltaX && (l = n.deltaX, s = -1 * l), void 0 !== n.wheelDeltaY && (c = n.wheelDeltaY), void 0 !== n.wheelDeltaX && (l = -1 * n.wheelDeltaX), u = Math.abs(s), d = Math.max(Math.abs(c), Math.abs(l)), r = (u + r * a) / (a + 1), o = (d + o * a) / (a + 1), r || (r = 1), o || (o = 1), a += 1, s /= r, c /= o, l /= o, i.unshift(t, s, l, c), (e.event.dispatch || e.event.handle).apply(this, i)
	}
	var n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], r = 0, o = 0, a = 0;
	if (e.event.fixHooks)
		for (var s = n.length; s; )
			e.event.fixHooks[n[--s]] = e.event.mouseHooks;
	e.event.special.mousewheel = {setup: function() {
			if (this.addEventListener)
				for (var e = i.length; e; )
					this.addEventListener(i[--e], t, !1);
			else
				this.onmousewheel = t
		},teardown: function() {
			if (this.removeEventListener)
				for (var e = i.length; e; )
					this.removeEventListener(i[--e], t, !1);
			else
				this.onmousewheel = null
		}}, e.fn.extend({mousewheel: function(e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},unmousewheel: function(e) {
			return this.unbind("mousewheel", e)
		}})
});
var MobileEsp = {initCompleted: !1,isWebkit: !1,isMobilePhone: !1,isIphone: !1,isAndroid: !1,isAndroidPhone: !1,isTierTablet: !1,isTierIphone: !1,isTierRichCss: !1,isTierGenericMobile: !1,engineWebKit: "webkit",deviceIphone: "iphone",deviceIpod: "ipod",deviceIpad: "ipad",deviceMacPpc: "macintosh",deviceAndroid: "android",deviceGoogleTV: "googletv",deviceHtcFlyer: "htc_flyer",deviceWinPhone7: "windows phone os 7",deviceWinPhone8: "windows phone 8",deviceWinMob: "windows ce",deviceWindows: "windows",deviceIeMob: "iemobile",devicePpc: "ppc",enginePie: "wm5 pie",deviceBB: "blackberry",deviceBB10: "bb10",vndRIM: "vnd.rim",deviceBBStorm: "blackberry95",deviceBBBold: "blackberry97",deviceBBBoldTouch: "blackberry 99",deviceBBTour: "blackberry96",deviceBBCurve: "blackberry89",deviceBBCurveTouch: "blackberry 938",deviceBBTorch: "blackberry 98",deviceBBPlaybook: "playbook",deviceSymbian: "symbian",deviceSymbos: "symbos",deviceS60: "series60",deviceS70: "series70",deviceS80: "series80",deviceS90: "series90",devicePalm: "palm",deviceWebOS: "webos",deviceWebOShp: "hpwos",engineBlazer: "blazer",engineXiino: "xiino",deviceNuvifone: "nuvifone",deviceBada: "bada",deviceTizen: "tizen",deviceMeego: "meego",deviceKindle: "kindle",engineSilk: "silk-accelerated",vndwap: "vnd.wap",wml: "wml",deviceTablet: "tablet",deviceBrew: "brew",deviceDanger: "danger",deviceHiptop: "hiptop",devicePlaystation: "playstation",devicePlaystationVita: "vita",deviceNintendoDs: "nitro",deviceNintendo: "nintendo",deviceWii: "wii",deviceXbox: "xbox",deviceArchos: "archos",engineOpera: "opera",engineNetfront: "netfront",engineUpBrowser: "up.browser",engineOpenWeb: "openweb",deviceMidp: "midp",uplink: "up.link",engineTelecaQ: "teleca q",engineObigo: "obigo",devicePda: "pda",mini: "mini",mobile: "mobile",mobi: "mobi",maemo: "maemo",linux: "linux",mylocom2: "",manuSonyEricsson: "sonyericsson",manuericsson: "ericsson",manuSamsung1: "sec-sgh",manuSony: "",manuHtc: "htc",svcDocomo: "docomo",svcKddi: "kddi",svcVodafone: "vodafone",disUpdate: "update",uagent: "",InitDeviceScan: function() {
		this.initCompleted = !1, navigator && navigator.userAgent && (this.uagent = navigator.userAgent.toLowerCase()), this.isWebkit = this.DetectWebkit(), this.isIphone = this.DetectIphone(), this.isAndroid = this.DetectAndroid(), this.isAndroidPhone = this.DetectAndroidPhone(), this.isTierIphone = this.DetectTierIphone(), this.isTierTablet = this.DetectTierTablet(), this.isMobilePhone = this.DetectMobileQuick(), this.isTierRichCss = this.DetectTierRichCss(), this.isTierGenericMobile = this.DetectTierOtherPhones(), this.initCompleted = !0
	},DetectIphone: function() {
		return this.initCompleted || this.isIphone ? this.isIphone : this.uagent.search(this.deviceIphone) > -1 ? this.DetectIpad() || this.DetectIpod() ? !1 : !0 : !1
	},DetectIpod: function() {
		return this.uagent.search(this.deviceIpod) > -1 ? !0 : !1
	},DetectIphoneOrIpod: function() {
		return this.DetectIphone() || this.DetectIpod() ? !0 : !1
	},DetectIpad: function() {
		return this.uagent.search(this.deviceIpad) > -1 && this.DetectWebkit() ? !0 : !1
	},DetectIos: function() {
		return this.DetectIphoneOrIpod() || this.DetectIpad() ? !0 : !1
	},DetectAndroid: function() {
		return this.initCompleted || this.isAndroid ? this.isAndroid : this.uagent.search(this.deviceAndroid) > -1 || this.DetectGoogleTV() ? !0 : this.uagent.search(this.deviceHtcFlyer) > -1 ? !0 : !1
	},DetectAndroidPhone: function() {
		return this.initCompleted || this.isAndroidPhone ? this.isAndroidPhone : this.DetectAndroid() && this.uagent.search(this.mobile) > -1 ? !0 : this.DetectOperaAndroidPhone() ? !0 : this.uagent.search(this.deviceHtcFlyer) > -1 ? !0 : !1
	},DetectAndroidTablet: function() {
		return this.DetectAndroid() ? this.DetectOperaMobile() ? !1 : this.uagent.search(this.deviceHtcFlyer) > -1 ? !1 : this.uagent.search(this.mobile) > -1 ? !1 : !0 : !1
	},DetectAndroidWebKit: function() {
		return this.DetectAndroid() && this.DetectWebkit() ? !0 : !1
	},DetectGoogleTV: function() {
		return this.uagent.search(this.deviceGoogleTV) > -1 ? !0 : !1
	},DetectWebkit: function() {
		return this.initCompleted || this.isWebkit ? this.isWebkit : this.uagent.search(this.engineWebKit) > -1 ? !0 : !1
	},DetectWindowsPhone: function() {
		return this.DetectWindowsPhone7() || this.DetectWindowsPhone8() ? !0 : !1
	},DetectWindowsPhone7: function() {
		return this.uagent.search(this.deviceWinPhone7) > -1 ? !0 : !1
	},DetectWindowsPhone8: function() {
		return this.uagent.search(this.deviceWinPhone8) > -1 ? !0 : !1
	},DetectWindowsMobile: function() {
		return this.DetectWindowsPhone() ? !1 : this.uagent.search(this.deviceWinMob) > -1 || this.uagent.search(this.deviceIeMob) > -1 || this.uagent.search(this.enginePie) > -1 ? !0 : this.uagent.search(this.devicePpc) > -1 && !(this.uagent.search(this.deviceMacPpc) > -1) ? !0 : this.uagent.search(this.manuHtc) > -1 && this.uagent.search(this.deviceWindows) > -1 ? !0 : !1
	},DetectBlackBerry: function() {
		return this.uagent.search(this.deviceBB) > -1 || this.uagent.search(this.vndRIM) > -1 ? !0 : this.DetectBlackBerry10Phone() ? !0 : !1
	},DetectBlackBerry10Phone: function() {
		return this.uagent.search(this.deviceBB10) > -1 && this.uagent.search(this.mobile) > -1 ? !0 : !1
	},DetectBlackBerryTablet: function() {
		return this.uagent.search(this.deviceBBPlaybook) > -1 ? !0 : !1
	},DetectBlackBerryWebKit: function() {
		return this.DetectBlackBerry() && this.uagent.search(this.engineWebKit) > -1 ? !0 : !1
	},DetectBlackBerryTouch: function() {
		return this.DetectBlackBerry() && (this.uagent.search(this.deviceBBStorm) > -1 || this.uagent.search(this.deviceBBTorch) > -1 || this.uagent.search(this.deviceBBBoldTouch) > -1 || this.uagent.search(this.deviceBBCurveTouch) > -1) ? !0 : !1
	},DetectBlackBerryHigh: function() {
		return this.DetectBlackBerryWebKit() ? !1 : this.DetectBlackBerry() && (this.DetectBlackBerryTouch() || this.uagent.search(this.deviceBBBold) > -1 || this.uagent.search(this.deviceBBTour) > -1 || this.uagent.search(this.deviceBBCurve) > -1) ? !0 : !1
	},DetectBlackBerryLow: function() {
		return this.DetectBlackBerry() ? this.DetectBlackBerryHigh() || this.DetectBlackBerryWebKit() ? !1 : !0 : !1
	},DetectS60OssBrowser: function() {
		return this.DetectWebkit() && (this.uagent.search(this.deviceS60) > -1 || this.uagent.search(this.deviceSymbian) > -1) ? !0 : !1
	},DetectSymbianOS: function() {
		return this.uagent.search(this.deviceSymbian) > -1 || this.uagent.search(this.deviceS60) > -1 || this.uagent.search(this.deviceSymbos) > -1 && this.DetectOperaMobile || this.uagent.search(this.deviceS70) > -1 || this.uagent.search(this.deviceS80) > -1 || this.uagent.search(this.deviceS90) > -1 ? !0 : !1
	},DetectPalmOS: function() {
		return this.DetectPalmWebOS() ? !1 : this.uagent.search(this.devicePalm) > -1 || this.uagent.search(this.engineBlazer) > -1 || this.uagent.search(this.engineXiino) > -1 ? !0 : !1
	},DetectPalmWebOS: function() {
		return this.uagent.search(this.deviceWebOS) > -1 ? !0 : !1
	},DetectWebOSTablet: function() {
		return this.uagent.search(this.deviceWebOShp) > -1 && this.uagent.search(this.deviceTablet) > -1 ? !0 : !1
	},DetectOperaMobile: function() {
		return this.uagent.search(this.engineOpera) > -1 && (this.uagent.search(this.mini) > -1 || this.uagent.search(this.mobi) > -1) ? !0 : !1
	},DetectOperaAndroidPhone: function() {
		return this.uagent.search(this.engineOpera) > -1 && this.uagent.search(this.deviceAndroid) > -1 && this.uagent.search(this.mobi) > -1 ? !0 : !1
	},DetectOperaAndroidTablet: function() {
		return this.uagent.search(this.engineOpera) > -1 && this.uagent.search(this.deviceAndroid) > -1 && this.uagent.search(this.deviceTablet) > -1 ? !0 : !1
	},DetectKindle: function() {
		return this.uagent.search(this.deviceKindle) > -1 && !this.DetectAndroid() ? !0 : !1
	},DetectAmazonSilk: function() {
		return this.uagent.search(this.engineSilk) > -1 ? !0 : !1
	},DetectGarminNuvifone: function() {
		return this.uagent.search(this.deviceNuvifone) > -1 ? !0 : !1
	},DetectBada: function() {
		return this.uagent.search(this.deviceBada) > -1 ? !0 : !1
	},DetectTizen: function() {
		return this.uagent.search(this.deviceTizen) > -1 ? !0 : !1
	},DetectMeego: function() {
		return this.uagent.search(this.deviceMeego) > -1 ? !0 : !1
	},DetectDangerHiptop: function() {
		return this.uagent.search(this.deviceDanger) > -1 || this.uagent.search(this.deviceHiptop) > -1 ? !0 : !1
	},DetectSonyMylo: function() {
		return this.uagent.search(this.manuSony) > -1 && (this.uagent.search(this.qtembedded) > -1 || this.uagent.search(this.mylocom2) > -1) ? !0 : !1
	},DetectMaemoTablet: function() {
		return this.uagent.search(this.maemo) > -1 ? !0 : this.uagent.search(this.linux) > -1 && this.uagent.search(this.deviceTablet) > -1 && !this.DetectWebOSTablet() && !this.DetectAndroid() ? !0 : !1
	},DetectArchos: function() {
		return this.uagent.search(this.deviceArchos) > -1 ? !0 : !1
	},DetectGameConsole: function() {
		return this.DetectSonyPlaystation() || this.DetectNintendo() || this.DetectXbox() ? !0 : !1
	},DetectSonyPlaystation: function() {
		return this.uagent.search(this.devicePlaystation) > -1 ? !0 : !1
	},DetectGamingHandheld: function() {
		return this.uagent.search(this.devicePlaystation) > -1 && this.uagent.search(this.devicePlaystationVita) > -1 ? !0 : !1
	},DetectNintendo: function() {
		return this.uagent.search(this.deviceNintendo) > -1 || this.uagent.search(this.deviceWii) > -1 || this.uagent.search(this.deviceNintendoDs) > -1 ? !0 : !1
	},DetectXbox: function() {
		return this.uagent.search(this.deviceXbox) > -1 ? !0 : !1
	},DetectBrewDevice: function() {
		return this.uagent.search(this.deviceBrew) > -1 ? !0 : !1
	},DetectSmartphone: function() {
		return this.DetectTierIphone() || this.DetectS60OssBrowser() || this.DetectSymbianOS() || this.DetectWindowsMobile() || this.DetectBlackBerry() || this.DetectPalmOS() ? !0 : !1
	},DetectMobileQuick: function() {
		return this.DetectTierTablet() ? !1 : this.initCompleted || this.isMobilePhone ? this.isMobilePhone : this.DetectSmartphone() ? !0 : this.uagent.search(this.mobile) > -1 ? !0 : this.DetectKindle() || this.DetectAmazonSilk() ? !0 : this.uagent.search(this.deviceMidp) > -1 || this.DetectBrewDevice() ? !0 : this.DetectOperaMobile() || this.DetectArchos() ? !0 : this.uagent.search(this.engineObigo) > -1 || this.uagent.search(this.engineNetfront) > -1 || this.uagent.search(this.engineUpBrowser) > -1 || this.uagent.search(this.engineOpenWeb) > -1 ? !0 : !1
	},DetectMobileLong: function() {
		return this.DetectMobileQuick() ? !0 : this.DetectGameConsole() ? !0 : this.DetectDangerHiptop() || this.DetectMaemoTablet() || this.DetectSonyMylo() || this.DetectGarminNuvifone() ? !0 : this.uagent.search(this.devicePda) > -1 && !(this.uagent.search(this.disUpdate) > -1) ? !0 : this.uagent.search(this.manuSamsung1) > -1 || this.uagent.search(this.manuSonyEricsson) > -1 || this.uagent.search(this.manuericsson) > -1 ? !0 : this.uagent.search(this.svcDocomo) > -1 || this.uagent.search(this.svcKddi) > -1 || this.uagent.search(this.svcVodafone) > -1 ? !0 : !1
	},DetectTierTablet: function() {
		return this.initCompleted || this.isTierTablet ? this.isTierTablet : this.DetectIpad() || this.DetectAndroidTablet() || this.DetectBlackBerryTablet() || this.DetectWebOSTablet() ? !0 : !1
	},DetectTierIphone: function() {
		return this.initCompleted || this.isTierIphone ? this.isTierIphone : this.DetectIphoneOrIpod() || this.DetectAndroidPhone() || this.DetectWindowsPhone() || this.DetectBlackBerry10Phone() || this.DetectPalmWebOS() || this.DetectBada() || this.DetectTizen() || this.DetectGamingHandheld() ? !0 : this.DetectBlackBerryWebKit() && this.DetectBlackBerryTouch() ? !0 : !1
	},DetectTierRichCss: function() {
		return this.initCompleted || this.isTierRichCss ? this.isTierRichCss : this.DetectTierIphone() || this.DetectKindle() || this.DetectTierTablet() ? !1 : this.DetectMobileQuick() ? this.DetectWebkit() ? !0 : this.DetectS60OssBrowser() || this.DetectBlackBerryHigh() || this.DetectWindowsMobile() || this.uagent.search(this.engineTelecaQ) > -1 ? !0 : !1 : !1
	},DetectTierOtherPhones: function() {
		return this.initCompleted || this.isTierGenericMobile ? this.isTierGenericMobile : this.DetectTierIphone() || this.DetectTierRichCss() || this.DetectTierTablet() ? !1 : this.DetectMobileLong() ? !0 : !1
	}};
MobileEsp.InitDeviceScan(), !function(e) {
	function t(t, n) {
		var i = "obj" + ("" + Math.random()).slice(2, 15), r = '<object class="fp-engine" id="' + i + '" name="' + i + '" ';
		r += e.browser.msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + t + '" type="application/x-shockwave-flash">';
		var o = {width: "100%",height: "100%",allowscriptaccess: "always",wmode: "transparent",quality: "high",flashvars: "",movie: t + (e.browser.msie ? "?" + i : ""),name: i};
		return e.each(n, function(e, t) {
			o.flashvars += e + "=" + t + "&"
		}), e.each(o, function(e, t) {
			r += '<param name="' + e + '" value="' + t + '"/>'
		}), r += "</object>", e(r)
	}
	function n(e, t) {
		return t = t || 100, Math.round(e * t) / t
	}
	function i(e) {
		return /mpegurl/i.test(e) ? "application/x-mpegurl" : "video/" + e
	}
	function r(e) {
		return /^(video|application)/.test(e) || (e = i(e)), !!v.canPlayType(e).replace("no", "")
	}
	function o(t, n) {
		var i = e.grep(t, function(e) {
			return e.type === n
		});
		return i.length ? i[0] : null
	}
	function a(e) {
		var t = e.attr("src"), n = e.attr("type") || "", i = t.split(w)[1];
		return n = /mpegurl/.test(n) ? "mpegurl" : n.replace("video/", ""), {src: t,suffix: i || n,type: n || i}
	}
	function s(t) {
		var n = this, i = [];
		e("source", t).each(function() {
			i.push(a(e(this)))
		}), i.length || i.push(a(t)), n.initialSources = i, n.resolve = function(t) {
			return t ? (e.isArray(t) ? t = {sources: e.map(t, function(t) {
					var n, i = e.extend({}, t);
					return e.each(t, function(e) {
						n = e
					}), i.type = n, i.src = t[n], delete i[n], i
				})} : "string" == typeof t && (t = {src: t,sources: []}, e.each(i, function(e, n) {
				"flash" != n.type && t.sources.push({type: n.type,src: t.src.replace(w, "." + n.suffix + "$2")})
			})), t) : {sources: i}
		}
	}
	function l(e) {
		return e = parseInt(e, 10), e >= 10 ? e : "0" + e
	}
	function c(e) {
		e = e || 0;
		var t = Math.floor(e / 3600), n = Math.floor(e / 60);
		return e -= 60 * n, t >= 1 ? (n -= 60 * t, t + ":" + l(n) + ":" + l(e)) : l(n) + ":" + l(e)
	}
	!function(e) {
		if (!e.browser) {
			var t = e.browser = {}, n = navigator.userAgent.toLowerCase(), i = /(chrome)[ \/]([\w.]+)/.exec(n) || /(safari)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
			i[1] && (t[i[1]] = !0, t.version = i[2] || "0")
		}
	}(jQuery), e(function() {
		"function" == typeof e.fn.flowplayer && e("video").parent(".flowplayer").flowplayer()
	});
	var u = [], d = [], p = window.navigator.userAgent;
	window.flowplayer = function(t) {
		return e.isFunction(t) ? d.push(t) : "number" == typeof t || void 0 === t ? u[t || 0] : e(t).data("flowplayer")
	}, e(window).on("beforeunload", function() {
		e.each(u, function(t, n) {
			n.conf.splash ? n.unload() : n.bind("error", function() {
				e(".flowplayer.is-error .fp-message").remove()
			})
		})
	});
	var h = !1;
	try {
		"object" == typeof window.localStorage && (window.localStorage.flowplayerTestStorage = "test", h = !0)
	} catch (f) {
	}
	e.extend(flowplayer, {version: "5.4.6",engine: {},conf: {},support: {},defaults: {debug: !1,disabled: !1,engine: "html5",fullscreen: window == window.top,keyboard: !0,ratio: 9 / 16,adaptiveRatio: !1,flashfit: !1,rtmp: 0,splash: !1,live: !1,swf: "//releases.flowplayer.org/5.4.6/commercial/flowplayer.swf",speeds: [.25, .5, 1, 1.5, 2],tooltip: !0,volume: h ? "true" == localStorage.muted ? 0 : isNaN(localStorage.volume) ? 1 : localStorage.volume || 1 : 1,errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."],errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"],playlist: []}});
	var m = 1;
	e.fn.flowplayer = function(t, n) {
		return "string" == typeof t && (t = {swf: t}), e.isFunction(t) && (n = t, t = {}), !t && this.data("flowplayer") || this.each(function() {
			var i, r, o = e(this).addClass("is-loading"), a = e.extend({}, flowplayer.defaults, flowplayer.conf, t, o.data()), l = e("video", o).addClass("fp-engine").removeAttr("controls"), c = l.length ? new s(l) : null, p = {};
			if (a.playlist.length) {
				var h, f = l.attr("preload");
				l.length && l.replaceWith(h = e("<p />")), l = e("<video />").addClass("fp-engine"), h ? h.replaceWith(l) : o.prepend(l), flowplayer.support.video && l.attr("preload", f), "string" == typeof a.playlist[0] ? l.attr("src", a.playlist[0]) : e.each(a.playlist[0], function(t, n) {
					for (var i in n)
						n.hasOwnProperty(i) && l.append(e("<source />").attr({type: "video/" + i,src: n[i]}))
				}), c = new s(l)
			}
			var g = o.data("flowplayer");
			g && g.unload(), o.data("fp-player_id", o.data("fp-player_id") || m++);
			try {
				p = window.localStorage || p
			} catch (v) {
			}
			var y = this.currentStyle && "rtl" === this.currentStyle.direction || window.getComputedStyle && "rtl" === window.getComputedStyle(this, null).getPropertyValue("direction");
			y && o.addClass("is-rtl");
			var b = g || {conf: a,currentSpeed: 1,volumeLevel: "undefined" == typeof a.volume ? 1 * p.volume : a.volume,video: {},disabled: !1,finished: !1,loading: !1,muted: "true" == p.muted || a.muted,paused: !1,playing: !1,ready: !1,splash: !1,rtl: y,load: function(t, n) {
					if (!(b.error || b.loading || b.disabled)) {
						if (t = c.resolve(t), e.extend(t, r.pick(t.sources)), t.src) {
							var i = e.Event("load");
							o.trigger(i, [b, t, r]), i.isDefaultPrevented() ? b.loading = !1 : (r.load(t), e.isFunction(t) && (n = t), n && o.one("ready", n))
						}
						return b
					}
				},pause: function(e) {
					return !b.ready || b.seeking || b.disabled || b.loading || (r.pause(), b.one("pause", e)), b
				},resume: function() {
					return b.ready && b.paused && !b.disabled && (r.resume(), b.finished && (b.trigger("resume", [b]), b.finished = !1)), b
				},toggle: function() {
					return b.ready ? b.paused ? b.resume() : b.pause() : b.load()
				},seek: function(t, n) {
					if (b.ready) {
						if ("boolean" == typeof t) {
							var a = .1 * b.video.duration;
							t = b.video.time + (t ? a : -a)
						}
						t = i = Math.min(Math.max(t, 0), b.video.duration).toFixed(1);
						var s = e.Event("beforeseek");
						o.trigger(s, [b, t]), s.isDefaultPrevented() ? (b.seeking = !1, o.toggleClass("is-seeking", b.seeking)) : (r.seek(t), e.isFunction(n) && o.one("seek", n))
					}
					return b
				},seekTo: function(e, t) {
					var n = void 0 === e ? i : .1 * b.video.duration * e;
					return b.seek(n, t)
				},mute: function(e) {
					return void 0 === e && (e = !b.muted), p.muted = b.muted = e, p.volume = isNaN(p.volume) ? a.volume : p.volume, b.volume(e ? 0 : p.volume, !0), b.trigger("mute", e), b
				},volume: function(e, t) {
					return b.ready && (e = Math.min(Math.max(e, 0), 1), t || (p.volume = e), r.volume(e)), b
				},speed: function(t, n) {
					return b.ready && ("boolean" == typeof t && (t = a.speeds[e.inArray(b.currentSpeed, a.speeds) + (t ? 1 : -1)] || b.currentSpeed), r.speed(t), n && o.one("speed", n)), b
				},stop: function() {
					return b.ready && (b.pause(), b.seek(0, function() {
						o.trigger("stop")
					})), b
				},unload: function() {
					return o.hasClass("is-embedding") || (a.splash ? (b.trigger("unload"), r.unload()) : b.stop()), b
				},disable: function(e) {
					return void 0 === e && (e = !b.disabled), e != b.disabled && (b.disabled = e, b.trigger("disable", e)), b
				}};
			b.conf = e.extend(b.conf, a), e.each(["bind", "one", "unbind"], function(e, t) {
				b[t] = function(e, n) {
					return o[t](e, n), b
				}
			}), b.trigger = function(e, t) {
				return o.trigger(e, [b, t]), b
			}, o.data("flowplayer") || o.bind("boot", function() {
				return e.each(["autoplay", "loop", "preload", "poster"], function(e, t) {
					var n = l.attr(t);
					void 0 !== n && (a[t] = n ? n : !0)
				}), (a.splash || o.hasClass("is-splash") || !flowplayer.support.firstframe) && (b.forcedSplash = !a.splash && !o.hasClass("is-splash"), b.splash = a.splash = a.autoplay = !0, o.addClass("is-splash"), flowplayer.support.video && l.attr("preload", "none")), (a.live || o.hasClass("is-live")) && (b.live = a.live = !0, o.addClass("is-live")), e.each(d, function() {
					this(b, o)
				}), r = flowplayer.engine[a.engine], r && (r = r(b, o)), r.pick(c.initialSources) ? b.engine = a.engine : e.each(flowplayer.engine, function(e) {
					return e != a.engine ? (r = this(b, o), r.pick(c.initialSources) && (b.engine = e), !1) : void 0
				}), u.push(b), b.engine ? (a.splash ? b.unload() : b.load(), a.disabled && b.disable(), r.volume(b.volumeLevel), void o.one("ready", n)) : b.trigger("error", {code: flowplayer.support.flashVideo ? 5 : 10})
			}).bind("load", function(t, n) {
				a.splash && e(".flowplayer").filter(".is-ready, .is-loading").not(o).each(function() {
					var t = e(this).data("flowplayer");
					t.conf.splash && t.unload()
				}), o.addClass("is-loading"), n.loading = !0
			}).bind("ready", function(e, t, n) {
				function i() {
					o.removeClass("is-loading"), t.loading = !1
				}
				n.time = 0, t.video = n, a.splash ? o.one("progress", i) : i(), t.muted ? t.mute(!0) : t.volume(t.volumeLevel)
			}).bind("unload", function() {
				a.splash && l.remove(), o.removeClass("is-loading"), b.loading = !1
			}).bind("ready unload", function(e) {
				var t = "ready" == e.type;
				o.toggleClass("is-splash", !t).toggleClass("is-ready", t), b.ready = t, b.splash = !t
			}).bind("progress", function(e, t, n) {
				t.video.time = n
			}).bind("speed", function(e, t, n) {
				t.currentSpeed = n
			}).bind("volume", function(e, t, n) {
				t.volumeLevel = Math.round(100 * n) / 100, t.muted ? n && t.mute(!1) : p.volume = n
			}).bind("beforeseek seek", function(e) {
				b.seeking = "beforeseek" == e.type, o.toggleClass("is-seeking", b.seeking)
			}).bind("ready pause resume unload finish stop", function(e, t, n) {
				b.paused = /pause|finish|unload|stop/.test(e.type), "ready" == e.type && (b.paused = "none" == a.preload, n && (b.paused = !n.duration || !a.autoplay && "none" != a.preload)), b.playing = !b.paused, o.toggleClass("is-paused", b.paused).toggleClass("is-playing", b.playing), b.load.ed || b.pause()
			}).bind("finish", function() {
				b.finished = !0
			}).bind("error", function() {
				l.remove()
			}), o.trigger("boot", [b, o]).data("flowplayer", b)
		})
	}, !function() {
		var t = function(e) {
			var t = /Version\/(\d\.\d)/.exec(e);
			return t && t.length > 1 ? parseFloat(t[1], 10) : 0
		}, n = flowplayer.support, i = e.browser, r = e("<video loop autoplay preload/>")[0], o = i.msie, a = navigator.userAgent, s = /iPad|MeeGo/.test(a) && !/CriOS/.test(a), l = /iPad/.test(a) && /CriOS/.test(a), c = /iP(hone|od)/i.test(a) && !/iPad/.test(a), u = /Android/.test(a) && !/Firefox/.test(a), d = /Android/.test(a) && /Firefox/.test(a), p = /Silk/.test(a), h = /IEMobile/.test(a), f = (s ? t(a) : 0, u ? parseFloat(/Android\ (\d\.\d)/.exec(a)[1], 10) : 0);
		e.extend(n, {subtitles: !!r.addTextTrack,fullscreen: !u && ("function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(a) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen),inlineBlock: !(o && i.version < 8),touch: "ontouchstart" in window,dataload: !s && !c && !h,zeropreload: !o && !u,volume: !(s || u || c || p || l),cachedVideoTag: !(s || c || l || h),firstframe: !(c || s || u || p || l || h || d),inlineVideo: !c && !h && (!u || f >= 3),hlsDuration: !i.safari || s || c || l,seekable: !s && !l});
		try {
			var m = navigator.plugins["Shockwave Flash"], g = o ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : m.description;
			o || m[0].enabledPlugin ? (g = g.split(/\D+/), g.length && !g[0] && (g = g.slice(1)), n.flashVideo = g[0] > 9 || 9 == g[0] && g[3] >= 115) : n.flashVideo = !1
		} catch (v) {
		}
		try {
			n.video = !!r.canPlayType, n.video && r.canPlayType("video/mp4")
		} catch (y) {
			n.video = !1
		}
		n.animation = function() {
			for (var t = ["", "Webkit", "Moz", "O", "ms", "Khtml"], n = e("<p/>")[0], i = 0; i < t.length; i++)
				if ("undefined" !== n.style[t[i] + "AnimationName"])
					return !0
		}()
	}(), window.attachEvent && window.attachEvent("onbeforeunload", function() {
		__flash_savedUnloadHandler = __flash_unloadHandler = function() {
		}
	}), flowplayer.engine.flash = function(n, i) {
		var r, o, a, s = n.conf;
		n.video;
		var l = {pick: function(t) {
				if (flowplayer.support.flashVideo) {
					var n = e.grep(t, function(e) {
						return "flash" == e.type
					})[0];
					if (n)
						return n;
					for (var i, r = 0; r < t.length; r++)
						if (i = t[r], /mp4|flv/.test(i.type))
							return i
				}
			},load: function(l) {
				function c(e) {
					return e.replace(/&/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
				}
				var u = e("video", i), d = c(l.src);
				is_absolute = /^https?:/.test(d);
				try {
					u.length > 0 && flowplayer.support.video && u[0].pause()
				} catch (p) {
				}
				var h = function() {
					u.remove()
				}, f = function(t) {
					return e.grep(t, function(e) {
						return !!u[0].canPlayType("video/" + e.type)
					}).length > 0
				};
				if (flowplayer.support.video && u.prop("autoplay") && f(l.sources) ? u.one("timeupdate", h) : h(), is_absolute || s.rtmp || (d = e("<img/>").attr("src", d)[0].src), a)
					a.__play(d);
				else {
					r = "fp" + ("" + Math.random()).slice(3, 15);
					var m = {hostname: s.embedded ? s.hostname : location.hostname,url: d,callback: "jQuery." + r};
					i.data("origin") && (m.origin = i.data("origin")), is_absolute && delete s.rtmp, e.each(["key", "autoplay", "preload", "rtmp", "loop", "debug", "preload", "splash", "bufferTime"], function(e, t) {
						s[t] && (m[t] = s[t])
					}), m.rtmp && (m.rtmp = c(m.rtmp)), o = t(s.swf, m), o.prependTo(i), a = o[0], setTimeout(function() {
						try {
							if (!a.PercentLoaded())
								return i.trigger("error", [n, {code: 7,url: s.swf}])
						} catch (e) {
						}
					}, 5e3), setTimeout(function() {
						"undefined" == typeof a.PercentLoaded && i.trigger("flashdisabled", [n])
					}, 1e3), e[r] = function(t, i) {
						s.debug && "status" != t && console.log("--", t, i);
						var r = e.Event(t);
						switch (t) {
							case "ready":
								i = e.extend(l, i);
								break;
							case "click":
								r.flash = !0;
								break;
							case "keydown":
								r.which = i;
								break;
							case "seek":
								l.time = i;
								break;
							case "status":
								n.trigger("progress", i.time), i.buffer < l.bytes && !l.buffered ? (l.buffer = i.buffer / l.bytes * l.duration, n.trigger("buffer", l.buffer)) : l.buffered || (l.buffered = !0, n.trigger("buffered"))
						}
						"buffered" != t && setTimeout(function() {
							n.trigger(r, i)
						}, 1)
					}
				}
			},speed: e.noop,unload: function() {
				a && a.__unload && a.__unload(), delete e[r], e("object", i).remove(), a = 0
			}};
		e.each("pause,resume,seek,volume".split(","), function(e, t) {
			l[t] = function(e) {
				try {
					n.ready && ("seek" == t && n.video.time && !n.paused && n.trigger("beforeseek"), void 0 === e ? a["__" + t]() : a["__" + t](e))
				} catch (r) {
					if ("undefined" == typeof a["__" + t])
						return i.trigger("flashdisabled", [n]);
					throw r
				}
			}
		});
		var c = e(window);
		return n.bind("ready fullscreen fullscreen-exit", function(t) {
			var r = i.height(), o = i.width();
			if (n.conf.flashfit || /full/.test(t.type)) {
				var a, s, l = n.isFullscreen, u = l && F, d = !flowplayer.support.inlineBlock, p = l ? u ? screen.width : c.width() : o, h = l ? u ? screen.height : c.height() : r, f = 0, m = 0, g = d ? o : "", v = d ? r : "";
				(n.conf.flashfit || "fullscreen" === t.type) && (a = n.video.width / n.video.height, s = n.video.height / n.video.width, v = Math.max(s * p), g = Math.max(a * h), v = v > h ? g * s : v, v = Math.min(Math.round(v), h), g = g > p ? v * a : g, g = Math.min(Math.round(g), p), m = Math.max(Math.round((h + m - v) / 2), 0), f = Math.max(Math.round((p + f - g) / 2), 0)), e("object", i).css({width: g,height: v,marginTop: m,marginLeft: f})
			}
		}), l
	};
	var g, v = e("<video/>")[0], y = {ended: "finish",pause: "pause",play: "resume",progress: "buffer",timeupdate: "progress",volumechange: "volume",ratechange: "speed",seeked: "seek",loadeddata: "ready",error: "error",dataunavailable: "error"}, b = function(t) {
		return g ? g.attr({type: i(t.type),src: t.src}) : g = e("<video/>", {src: t.src,type: i(t.type),"class": "fp-engine",autoplay: "autoplay",preload: "none","x-webkit-airplay": "allow"})
	};
	flowplayer.engine.html5 = function(t, i) {
		function a(o, a, s) {
			o.listeners && o.listeners.hasOwnProperty(i.data("fp-player_id")) || ((o.listeners || (o.listeners = {}))[i.data("fp-player_id")] = !0, a.bind("error", function(n) {
				try {
					if (n.originalEvent && e(n.originalEvent.originalTarget).is("img"))
						return n.preventDefault();
					r(e(n.target).attr("type")) && t.trigger("error", {code: 4})
				} catch (i) {
				}
			}), e.each(y, function(r, a) {
				o.addEventListener(r, function(c) {
					if ("progress" == a && c.srcElement && 0 === c.srcElement.readyState && setTimeout(function() {
						t.video.duration || (a = "error", t.trigger(a, {code: 4}))
					}, 1e4), h.debug && !/progress/.test(a) && console.log(r, "->", a, c), (t.ready || /ready|error/.test(a)) && a && e("video", i).length) {
						var u, p = e.Event(a);
						switch (a) {
							case "ready":
								u = e.extend(s, {duration: o.duration,width: o.videoWidth,height: o.videoHeight,url: o.currentSrc,src: o.currentSrc});
								try {
									u.seekable = o.seekable && o.seekable.end(null)
								} catch (f) {
								}
								if (l = l || setInterval(function() {
									try {
										u.buffer = o.buffered.end(null)
									} catch (e) {
									}
									u.buffer && (n(u.buffer, 1e3) < n(u.duration, 1e3) && !u.buffered ? t.trigger("buffer", c) : u.buffered || (u.buffered = !0, t.trigger("buffer", c).trigger("buffered", c), clearInterval(l), l = 0))
								}, 250), !h.live && !u.duration && !d.hlsDuration && "loadeddata" === r) {
									var m = function() {
										u.duration = o.duration;
										try {
											u.seekable = o.seekable && o.seekable.end(null)
										} catch (e) {
										}
										t.trigger(p, u), o.removeEventListener("durationchange", m)
									};
									return void o.addEventListener("durationchange", m)
								}
								break;
							case "progress":
							case "seek":
								if (t.video.duration, o.currentTime > 0) {
									u = Math.max(o.currentTime, 0);
									break
								}
								if ("progress" == a)
									return;
							case "speed":
								u = n(o.playbackRate);
								break;
							case "volume":
								u = n(o.volume);
								break;
							case "error":
								try {
									u = (c.srcElement || c.originalTarget).error
								} catch (g) {
									return
								}
						}
						t.trigger(p, u)
					}
				}, !1)
			}))
		}
		var s, l, c, u = e("video", i), d = flowplayer.support, p = e("track", u), h = t.conf;
		return s = {pick: function(e) {
				if (d.video) {
					if (h.videoTypePreference) {
						var t = o(e, h.videoTypePreference);
						if (t)
							return t
					}
					for (var n = 0; n < e.length; n++)
						if (r(e[n].type))
							return e[n]
				}
			},load: function(n) {
				if (h.splash && !c)
					u = b(n).prependTo(i), d.inlineVideo || u.css({position: "absolute",top: "-9999em"}), p.length && u.append(p.attr("default", "")), h.loop && u.attr("loop", "loop"), c = u[0];
				else {
					c = u[0];
					var r = u.find("source");
					!c.src && r.length && (c.src = n.src, r.remove()), t.video.src && n.src != t.video.src ? (u.attr("autoplay", "autoplay"), c.src = n.src) : "none" != h.preload && d.dataload || (d.zeropreload ? t.trigger("ready", n).trigger("pause").one("ready", function() {
						i.trigger("resume", [t])
					}) : t.one("ready", function() {
						i.trigger("pause", [t])
					}))
				}
				a(c, e("source", u).add(u), n), "none" == h.preload && d.zeropreload && d.dataload || c.load(), h.splash && c.load()
			},pause: function() {
				c.pause()
			},resume: function() {
				c.play()
			},speed: function(e) {
				c.playbackRate = e
			},seek: function(e) {
				try {
					var n = t.paused;
					c.currentTime = e, n && c.pause()
				} catch (i) {
				}
			},volume: function(e) {
				c.volume = e
			},unload: function() {
				e("video.fp-engine", i).remove(), d.cachedVideoTag || (g = null), l = clearInterval(l), c = 0
			}}
	};
	var w = /\.(\w{3,4})(\?.*)?$/i;
	e.throttle = function(e, t) {
		var n;
		return function() {
			n || (e.apply(this, arguments), n = 1, setTimeout(function() {
				n = 0
			}, t))
		}
	}, e.fn.slider2 = function(t) {
		var n = /iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);
		return this.each(function() {
			var i, r, o, a, s, l, c, u, d = e(this), p = e(document), h = d.children(":last"), f = !1, m = function() {
				r = d.offset(), o = d.width(), a = d.height(), l = s ? a : o, u = b(c)
			}, g = function(e) {
				i || e == w.value || c && !(c > e) || (d.trigger("slide", [e]), w.value = e)
			}, v = function(e) {
				var n = e.pageX;
				!n && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length && (n = e.originalEvent.touches[0].pageX);
				var i = s ? e.pageY - r.top : n - r.left;
				i = Math.max(0, Math.min(u || l, i));
				var o = i / l;
				return s && (o = 1 - o), t && (o = 1 - o), y(o, 0, !0)
			}, y = function(e, t) {
				void 0 === t && (t = 0), e > 1 && (e = 1);
				var i = Math.round(1e3 * e) / 10 + "%";
				return (!c || c >= e) && (n || h.stop(), f ? h.css("width", i) : h.animate(s ? {height: i} : {width: i}, t, "linear")), e
			}, b = function(e) {
				return Math.max(0, Math.min(l, s ? (1 - e) * a : e * o))
			}, w = {max: function(e) {
					c = e
				},disable: function(e) {
					i = e
				},slide: function(e, t, n) {
					m(), n && g(e), y(e, t)
				},disableAnimation: function(e) {
					f = e !== !1
				}};
			m(), d.data("api", w).bind("mousedown.sld touchstart", function(t) {
				if (t.preventDefault(), !i) {
					var n = e.throttle(g, 100);
					m(), w.dragging = !0, d.addClass("is-dragging"), g(v(t)), p.bind("mousemove.sld touchmove", function(e) {
						e.preventDefault(), n(v(e))
					}).one("mouseup touchend", function() {
						w.dragging = !1, d.removeClass("is-dragging"), p.unbind("mousemove.sld touchmove")
					})
				}
			})
		})
	}, flowplayer(function(t, n) {
		function i(t) {
			return e(".fp-" + t, n)
		}
		function r(t) {
			("0px" === n.css("width") || "0px" === n.css("height") || t !== flowplayer.defaults.ratio) && (parseInt(y, 10) || m.css("paddingTop", 100 * t + "%")), l.inlineBlock || e("object", n).height(n.height())
		}
		function o(e) {
			n.toggleClass("is-mouseover", e).toggleClass("is-mouseout", !e)
		}
		var a, s = t.conf, l = flowplayer.support;
		n.find(".fp-ratio,.fp-ui").remove(), n.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/></div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            </div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"/>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"/>            <em class="duration">00:00</em>         </div>         <div class="message"><h2/><p/></div>      </div>'.replace(/class="/g, 'class="fp-'));
		var u = i("progress"), d = i("buffer"), p = i("elapsed"), h = i("remaining"), f = i("waiting"), m = i("ratio"), g = i("speed"), v = i("duration"), y = m.css("paddingTop"), b = i("timeline").slider2(t.rtl), w = b.data("api"), x = (i("volume"), i("fullscreen")), k = i("volumeslider").slider2(t.rtl), T = k.data("api"), S = n.is(".fixed-controls, .no-toggle");
		w.disableAnimation(n.hasClass("is-touch")), l.animation || f.html("<p>loading &hellip;</p>"), r(s.ratio);
		try {
			s.fullscreen || x.remove()
		} catch (C) {
			x.remove()
		}
		t.bind("ready", function() {
			var e = t.video.duration;
			w.disable(t.disabled || !e), s.adaptiveRatio && r(t.video.height / t.video.width), v.add(h).html(c(e)), e >= 3600 && n.addClass("is-long") || n.removeClass("is-long"), T.slide(t.volumeLevel)
		}).bind("unload", function() {
			y || m.css("paddingTop", "")
		}).bind("buffer", function() {
			var e = t.video, n = e.buffer / e.duration;
			!e.seekable && l.seekable && w.max(n), 1 > n ? d.css("width", 100 * n + "%") : d.css({width: "100%"})
		}).bind("speed", function(e, t, n) {
			g.text(n + "x").addClass("fp-hilite"), setTimeout(function() {
				g.removeClass("fp-hilite")
			}, 1e3)
		}).bind("buffered", function() {
			d.css({width: "100%"}), w.max(1)
		}).bind("progress", function() {
			var e = t.video.time, n = t.video.duration;
			w.dragging || w.slide(e / n, t.seeking ? 0 : 250), p.html(c(e)), h.html("-" + c(n - e))
		}).bind("finish resume seek", function(e) {
			n.toggleClass("is-finished", "finish" == e.type)
		}).bind("stop", function() {
			p.html(c(0)), w.slide(0, 100)
		}).bind("finish", function() {
			p.html(c(t.video.duration)), w.slide(1, 100), n.removeClass("is-seeking")
		}).bind("beforeseek", function() {
			u.stop()
		}).bind("volume", function() {
			T.slide(t.volumeLevel)
		}).bind("disable", function() {
			var e = t.disabled;
			w.disable(e), T.disable(e), n.toggleClass("is-disabled", t.disabled)
		}).bind("mute", function(e, t, i) {
			n.toggleClass("is-muted", i)
		}).bind("error", function(t, i, r) {
			if (n.removeClass("is-loading").addClass("is-error"), r) {
				r.message = s.errors[r.code], i.error = !0;
				var o = e(".fp-message", n);
				e("h2", o).text((i.engine || "html5") + ": " + r.message), e("p", o).text(r.url || i.video.url || i.video.src || s.errorUrls[r.code]), n.unbind("mouseenter click").removeClass("is-mouseover")
			}
		}).bind("mouseenter mouseleave", function(e) {
			if (!S) {
				var t, i = "mouseenter" == e.type;
				o(i), i ? (n.bind("pause.x mousemove.x volume.x", function() {
					o(!0), t = new Date
				}), a = setInterval(function() {
					new Date - t > 5e3 && (o(!1), t = new Date)
				}, 100)) : (n.unbind(".x"), clearInterval(a))
			}
		}).bind("mouseleave", function() {
			(w.dragging || T.dragging) && n.addClass("is-mouseover").removeClass("is-mouseout")
		}).bind("click.player", function(n) {
			return e(n.target).is(".fp-ui, .fp-engine") || n.flash ? (n.preventDefault(), t.toggle()) : void 0
		}).bind("contextmenu", function(t) {
			t.preventDefault();
			var i = n.offset(), r = e(window), o = t.clientX - i.left, a = t.clientY - i.top + r.scrollTop(), s = n.find(".fp-context-menu").css({left: o + "px",top: a + "px",display: "block"}).on("click", function(e) {
				e.stopPropagation()
			});
			e("html").on("click.outsidemenu", function() {
				s.hide(), e("html").off("click.outsidemenu")
			})
		}).bind("flashdisabled", function() {
			n.addClass("is-flash-disabled").one("ready", function() {
				n.removeClass("is-flash-disabled").find(".fp-flash-disabled").remove()
			}).append('<div class="fp-flash-disabled">Adobe Flash is disabled for this page, click player area to enable.</div>')
		}), s.poster && n.css("backgroundImage", "url(" + s.poster + ")");
		var _ = n.css("backgroundColor"), D = "none" != n.css("backgroundImage") || _ && "rgba(0, 0, 0, 0)" != _ && "transparent" != _;
		!D || s.splash || s.autoplay || t.bind("ready stop", function() {
			n.addClass("is-poster").one("progress", function() {
				n.removeClass("is-poster")
			})
		}), !D && t.forcedSplash && n.css("backgroundColor", "#555"), e(".fp-toggle, .fp-play", n).click(t.toggle), e.each(["mute", "fullscreen", "unload"], function(e, n) {
			i(n).click(function() {
				t[n]()
			})
		}), b.bind("slide", function(e, n) {
			t.seeking = !0, t.seek(n * t.video.duration)
		}), k.bind("slide", function(e, n) {
			t.volume(n)
		}), i("time").click(function() {
			e(this).toggleClass("is-inverted")
		}), o(S)
	});
	var x, k, T = "is-help";
	e(document).bind("keydown.fp", function(t) {
		var n = x, i = t.ctrlKey || t.metaKey || t.altKey, r = t.which, o = n && n.conf;
		if (n && o.keyboard && !n.disabled) {
			if (-1 != e.inArray(r, [63, 187, 191]))
				return k.toggleClass(T), !1;
			if (27 == r && k.hasClass(T))
				return k.toggleClass(T), !1;
			if (!i && n.ready) {
				if (t.preventDefault(), t.shiftKey)
					return void (39 == r ? n.speed(!0) : 37 == r && n.speed(!1));
				if (58 > r && r > 47)
					return n.seekTo(r - 48);
				switch (r) {
					case 38:
					case 75:
						n.volume(n.volumeLevel + .15);
						break;
					case 40:
					case 74:
						n.volume(n.volumeLevel - .15);
						break;
					case 39:
					case 76:
						n.seeking = !0, n.seek(!0);
						break;
					case 37:
					case 72:
						n.seeking = !0, n.seek(!1);
						break;
					case 190:
						n.seekTo();
						break;
					case 32:
						n.toggle();
						break;
					case 70:
						o.fullscreen && n.fullscreen();
						break;
					case 77:
						n.mute();
						break;
					case 81:
						n.unload()
				}
			}
		}
	}), flowplayer(function(t, n) {
		t.conf.keyboard && (n.bind("mouseenter mouseleave", function(e) {
			x = t.disabled || "mouseenter" != e.type ? 0 : t, x && (k = n)
		}), n.append('      <div class="fp-help">         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>         </div>      </div>   '), t.conf.tooltip && e(".fp-ui", n).attr("title", "Hit ? for help").on("mouseout.tip", function() {
			e(this).removeAttr("title").off("mouseout.tip")
		}), e(".fp-close", n).click(function() {
			n.toggleClass(T)
		}))
	});
	var S, C = e.browser.mozilla ? "moz" : "webkit", _ = "fullscreen", D = "fullscreen-exit", F = flowplayer.support.fullscreen, E = "function" == typeof document.exitFullscreen, A = navigator.userAgent.toLowerCase(), I = /(safari)[ \/]([\w.]+)/.exec(A) && !/(chrome)[ \/]([\w.]+)/.exec(A);
	e(document).bind(E ? "fullscreenchange" : C + "fullscreenchange", function(t) {
		var n = e(document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || t.target);
		n.length && !S ? S = n.trigger(_, [n]) : (S.trigger(D, [S]), S = null)
	}), flowplayer(function(t, n) {
		if (t.conf.fullscreen) {
			var i, r = e(window), o = {index: 0,pos: 0,play: !1};
			t.isFullscreen = !1, t.fullscreen = function(a) {
				return t.disabled ? void 0 : (void 0 === a && (a = !t.isFullscreen), a && (i = r.scrollTop()), "webkit" != C && !I || "flash" != t.engine || (o.index = t.video.index, t.conf.rtmp && e.extend(o, {pos: t.video.time,play: t.playing})), F ? a ? E ? n[0].requestFullscreen() : (n[0][C + "RequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT), !I || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || n[0][C + "RequestFullScreen"]()) : E ? document.exitFullscreen() : document[C + "CancelFullScreen"]() : t.trigger(a ? _ : D, [t]), t)
			};
			var a;
			n.bind("mousedown.fs", function() {
				+new Date - a < 150 && t.ready && t.fullscreen(), a = +new Date
			}), t.bind(_, function() {
				n.addClass("is-fullscreen"), t.isFullscreen = !0
			}).bind(D, function() {
				var e;
				F || "html5" !== t.engine || (e = n.css("opacity") || "", n.css("opacity", 0)), n.removeClass("is-fullscreen"), F || "html5" !== t.engine || setTimeout(function() {
					n.css("opacity", e)
				}), t.isFullscreen = !1, r.scrollTop(i)
			}).bind("ready", function() {
				if (o.index > 0)
					t.play(o.index), o.index = 0;
				else if (o.pos && !isNaN(o.pos)) {
					var n = function() {
						o.play || t.pause(), e.extend(o, {pos: 0,play: !1})
					};
					t.conf.live ? (t.resume(), n()) : t.resume().seek(o.pos, n)
				}
			})
		}
	}), flowplayer(function(t, n) {
		function i() {
			return e(o.query, n)
		}
		function r() {
			return e(o.query + "." + a, n)
		}
		var o = e.extend({active: "is-active",advance: !0,query: ".fp-playlist a"}, t.conf), a = o.active;
		t.play = function(n) {
			return void 0 === n ? t.resume() : "number" != typeof n || t.conf.playlist[n] ? ("number" != typeof n && t.load.apply(null, arguments), t.unbind("resume.fromfirst"), t.video.index = n, t.load("string" == typeof t.conf.playlist[n] ? t.conf.playlist[n].toString() : e.map(t.conf.playlist[n], function(t) {
				return e.extend({}, t)
			})), t) : t
		}, t.next = function(e) {
			e && e.preventDefault();
			var n = t.video.index;
			return -1 != n && (n = n === t.conf.playlist.length - 1 ? 0 : n + 1, t.play(n)), t
		}, t.prev = function(e) {
			e && e.preventDefault();
			var n = t.video.index;
			return -1 != n && (n = 0 === n ? t.conf.playlist.length - 1 : n - 1, t.play(n)), t
		}, e(".fp-next", n).click(t.next), e(".fp-prev", n).click(t.prev), o.advance && n.unbind("finish.pl").bind("finish.pl", function(e, t) {
			var i = t.video.index + 1;
			i < t.conf.playlist.length || o.loop ? (i = i === t.conf.playlist.length ? 0 : i, n.removeClass("is-finished"), setTimeout(function() {
				t.play(i)
			})) : (n.addClass("is-playing"), t.conf.playlist.length > 1 && t.one("resume.fromfirst", function() {
				return t.play(0), !1
			}))
		});
		var s = !1;
		if (t.conf.playlist.length) {
			s = !0;
			var l = n.find(".fp-playlist");
			if (!l.length) {
				l = e('<div class="fp-playlist"></div>');
				var c = e(".fp-next,.fp-prev", n);
				c.length ? c.eq(0).before(l) : e("video", n).after(l)
			}
			l.empty(), e.each(t.conf.playlist, function(t, n) {
				var i;
				if ("string" == typeof n)
					i = n;
				else
					for (var r in n[0])
						if (n[0].hasOwnProperty(r)) {
							i = n[0][r];
							break
						}
				l.append(e("<a />").attr({href: i,"data-index": t}))
			})
		}
		if (i().length) {
			s || (t.conf.playlist = [], i().each(function() {
				var n = e(this).attr("href");
				e(this).attr("data-index", t.conf.playlist.length), t.conf.playlist.push(n)
			})), n.on("click", o.query, function(n) {
				n.preventDefault();
				var i = e(n.target).closest(o.query), r = Number(i.attr("data-index"));
				-1 != r && t.play(r)
			});
			var u = i().filter("[data-cuepoints]").length;
			t.bind("load", function(i, o, s) {
				var l = r().removeClass(a), c = l.attr("data-index"), d = s.index = t.video.index || 0, p = e('a[data-index="' + d + '"]', n).addClass(a), h = d == t.conf.playlist.length - 1;
				n.removeClass("video" + c).addClass("video" + d).toggleClass("last-video", h), s.index = o.video.index = d, s.is_last = o.video.is_last = h, u && (t.cuepoints = p.data("cuepoints"))
			}).bind("unload.pl", function() {
				r().toggleClass(a)
			})
		}
		t.conf.playlist.length && (t.conf.loop = !1)
	});
	var O = / ?cue\d+ ?/;
	flowplayer(function(t, n) {
		function i(e) {
			n[0].className = n[0].className.replace(O, " "), e >= 0 && n.addClass("cue" + e)
		}
		var r = 0;
		t.cuepoints = t.conf.cuepoints || [], t.bind("progress", function(e, o, a) {
			if (r && .015 > a - r)
				return r = a;
			r = a;
			for (var s, l = t.cuepoints || [], c = 0; c < l.length; c++)
				s = l[c], isNaN(s) || (s = {time: s}), s.time < 0 && (s.time = t.video.duration + s.time), s.index = c, Math.abs(s.time - a) < .125 * t.currentSpeed && (i(c), n.trigger("cuepoint", [t, s]))
		}).bind("unload seek", i), t.conf.generate_cuepoints && t.bind("load", function() {
			e(".fp-cuepoint", n).remove()
		}).bind("ready", function() {
			var i = t.cuepoints || [], r = t.video.duration, o = e(".fp-timeline", n).css("overflow", "visible");
			e.each(i, function(n, i) {
				var a = i.time || i;
				0 > a && (a = r + i);
				var s = e("<a/>").addClass("fp-cuepoint fp-cuepoint" + n).css("left", 100 * (a / r) + "%");
				s.appendTo(o).mousedown(function() {
					return t.seek(a), !1
				})
			})
		})
	}), flowplayer(function(t, n) {
		function i(e) {
			var t = e.split(":");
			return 2 == t.length && t.unshift(0), 3600 * t[0] + 60 * t[1] + parseFloat(t[2].replace(",", "."))
		}
		var r = e("track", n), o = t.conf;
		if (!flowplayer.support.subtitles || (t.subtitles = r.length && r[0].track, !o.nativesubtitles || "html5" != o.engine)) {
			r.remove();
			var a = /^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;
			t.subtitles = [];
			var s = r.attr("src");
			if (s) {
				setTimeout(function() {
					e.get(s, function(n) {
						for (var r, o, s, l, c = 0, u = n.split("\n"), d = u.length, p = {}; d > c; c++)
							if (o = a.exec(u[c])) {
								for (r = u[c - 1], s = "<p>" + u[++c] + "</p><br/>"; e.trim(u[++c]) && c < u.length; )
									s += "<p>" + u[c] + "</p><br/>";
								p = {title: r,startTime: i(o[1]),endTime: i(o[2] || o[3]),text: s}, l = {time: p.startTime,subtitle: p}, t.subtitles.push(p), t.cuepoints.push(l), t.cuepoints.push({time: p.endTime,subtitleEnd: r}), 0 === p.startTime && t.trigger("cuepoint", l)
							}
					}).fail(function() {
						return t.trigger("error", {code: 8,url: s}), !1
					})
				});
				var l, c = e("<div class='fp-subtitle'/>").appendTo(n);
				t.bind("cuepoint", function(e, t, n) {
					n.subtitle ? (l = n.index, c.html(n.subtitle.text).addClass("fp-active")) : n.subtitleEnd && (c.removeClass("fp-active"), l = n.index)
				}).bind("seek", function(n, i, r) {
					l && t.cuepoints[l] && t.cuepoints[l].time > r && (c.removeClass("fp-active"), l = null), e.each(t.cuepoints || [], function(e, n) {
						var i = n.subtitle;
						i && l != n.index ? r >= n.time && (!i.endTime || r <= i.endTime) && t.trigger("cuepoint", n) : n.subtitleEnd && r >= n.time && n.index == l + 1 && t.trigger("cuepoint", n)
					})
				})
			}
		}
	}), flowplayer(function(t, n) {
		function i() {
			if (o && "undefined" != typeof _gat) {
				var e = _gat._getTracker(r), i = t.video;
				e._setAllowLinker(!0), e._trackEvent("Video / Seconds played", t.engine + "/" + i.type, n.attr("title") || i.src.split("/").slice(-1)[0].replace(w, ""), Math.round(o / 1e3)), o = 0
			}
		}
		var r = t.conf.analytics, o = 0, a = 0;
		r && ("undefined" == typeof _gat && e.getScript("//google-analytics.com/ga.js"), t.bind("load unload", i).bind("progress", function() {
			t.seeking || (o += a ? +new Date - a : 0, a = +new Date)
		}).bind("pause", function() {
			a = 0
		}), e(window).unload(i))
	});
	var N = /IEMobile/.test(p);
	(flowplayer.support.touch || N) && flowplayer(function(t, n) {
		var i = /Android/.test(p) && !/Firefox/.test(p) && !/Opera/.test(p), r = /Silk/.test(p), o = i ? parseFloat(/Android\ (\d\.\d)/.exec(p)[1], 10) : 0;
		if (i && (t.conf.videoTypePreference = "mp4", !/Chrome/.test(p) && 4 > o)) {
			var a = t.load;
			t.load = function() {
				var e = a.apply(t, arguments);
				return t.trigger("ready", [t, t.video]), e
			}
		}
		flowplayer.support.volume || n.addClass("no-volume no-mute"), n.addClass("is-touch"), n.find(".fp-timeline").data("api").disableAnimation();
		var s = !1;
		n.bind("touchmove", function() {
			s = !0
		}).bind("touchend click", function() {
			return s ? void (s = !1) : t.playing && !n.hasClass("is-mouseover") ? (n.addClass("is-mouseover").removeClass("is-mouseout"), !1) : (t.paused && n.hasClass("is-mouseout") && !t.splash && t.toggle(), void (t.paused && N && e("video.fp-engine", n)[0].play()))
		}), t.conf.native_fullscreen && "function" == typeof e("<video />")[0].webkitEnterFullScreen && (t.fullscreen = function() {
			var t = e("video.fp-engine", n);
			t[0].webkitEnterFullScreen(), t.one("webkitendfullscreen", function() {
				t.prop("controls", !0).prop("controls", !1)
			})
		}), (i || r) && t.bind("ready", function() {
			var i = e("video.fp-engine", n);
			i.one("canplay", function() {
				i[0].play()
			}), i[0].play(), t.bind("progress.dur", function() {
				var r = i[0].duration;
				1 !== r && (t.video.duration = r, e(".fp-duration", n).html(c(r)), t.unbind("progress.dur"))
			})
		})
	}), flowplayer(function(t, n) {
		if (t.conf.embed !== !1) {
			var i = t.conf, r = e(".fp-ui", n), o = e("<a/>", {"class": "fp-embed",title: "Copy to your site"}).appendTo(r), a = e("<div/>", {"class": "fp-embed-code"}).append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(r), s = e("textarea", a);
			t.embedCode = function() {
				var r = t.video, o = r.width || n.width(), a = r.height || n.height(), s = e("<div/>", {"class": "flowplayer",css: {width: o,height: a}}), l = e("<video/>").appendTo(s);
				e.each(["origin", "analytics", "key", "rtmp"], function(e, t) {
					i[t] && s.attr("data-" + t, i[t])
				}), i.logo && s.attr("data-logo", e("<img />").attr("src", i.logo)[0].src), e.each(r.sources, function(t, n) {
					var r = n.src;
					(!/^https?:/.test(n.src) && "flash" !== n.type || !i.rtmp) && (r = e("<img/>").attr("src", n.src)[0].src), l.append(e("<source/>", {type: "video/" + n.type,src: r}))
				});
				var c = {src: "//embed.flowplayer.org/5.4.6/embed.min.js"};
				e.isPlainObject(i.embed) && (c["data-swf"] = i.embed.swf, c["data-library"] = i.embed.library, c.src = i.embed.script || c.src, i.embed.skin && (c["data-skin"] = i.embed.skin));
				var u = e("<foo/>", c).append(s);
				return e("<p/>").append(u).html().replace(/<(\/?)foo/g, "<$1script")
			}, n.fptip(".fp-embed", "is-embedding"), s.click(function() {
				this.select()
			}), o.click(function() {
				s.text(t.embedCode()), s[0].focus(), s[0].select()
			})
		}
	}), e.fn.fptip = function(t, n) {
		return this.each(function() {
			function i() {
				r.removeClass(n), e(document).unbind(".st")
			}
			var r = e(this);
			e(t || "a", this).click(function(t) {
				t.preventDefault(), r.toggleClass(n), r.hasClass(n) && e(document).bind("keydown.st", function(e) {
					27 == e.which && i()
				}).bind("click.st", function(t) {
					e(t.target).parents("." + n).length || i()
				})
			})
		})
	}
}(jQuery), flowplayer(function(e, t) {
	function n(e) {
		var t = o("<a/>")[0];
		return t.href = e, t.hostname
	}
	function i(e) {
		var t = "ab.ca,ac.ac,ac.at,ac.be,ac.cn,ac.il,ac.in,ac.jp,ac.kr,ac.th,ac.uk,adm.br,adv.br,ah.cn,am.br,arq.br,art.br,arts.ro,asn.au,asso.fr,asso.mc,bc.ca,bio.br,biz.pl,biz.tr,bj.cn,br.com,cn.com,cng.br,cnt.br,co.ac,co.at,co.gl,co.id,co.il,co.in,co.jp,co.kr,com.ag,com.ai,com.ar,com.au,com.br,com.cn,com.cy,com.de,com.do,com.ec,com.es,com.fj,com.fr,co.mg,com.gl,com.gt,com.hk,com.hr,com.hu,com.kg,com.ki,com.lc,com.mg,com.mm,com.ms,com.mt,com.mu,com.mx,com.my,com.nf,com.ng,com.ni,com.pa,com.ph,com.pl,com.pt,com.qa,com.ro,com.ru,co.ms,com.sb,com.sc,com.sg,com.sv,com.tr,com.tw,com.ua,com.uy,com.ve,com.vn,co.nz,co.th,co.uk,co.ve,co.vi,co.za,cq.cn,de.com,de.org,ecn.br,edu.au,edu.cn,edu.hk,edu.mm,edu.my,edu.pt,edu.qa,edu.tr,eng.br,ernet.in,esp.br,etc.br,eti.br,eu.com,eu.int,eu.lv,firm.in,firm.ro,fm.br,fot.br,fst.br,g12.br,gb.com,gb.net,gd.cn,gen.in,go.jp,go.kr,go.th,gov.au,gov.az,gov.br,gov.cn,gov.il,gov.in,gov.mm,gov.my,gov.qa,gov.sg,gov.tr,gov.tw,gs.cn,gv.ac,gv.at,gx.cn,gz.cn,he.cn,hi.cn,hk.cn,hl.cn,hu.com,id.au,idv.tw,ind.br,ind.in,inf.br,info.pl,info.ro,info.tr,info.ve,in.ua,iwi.nz,jl.cn,jor.br,js.cn,k12.il,k12.tr,kr.com,lel.br,ln.cn,ltd.uk,maori.nz,mb.ca,med.br,me.uk,mil.br,mi.th,mo.cn,muni.il,nb.ca,ne.jp,ne.kr,net.ag,net.ai,net.au,net.br,net.cn,net.do,net.gl,net.hk,net.il,net.in,net.kg,net.ki,net.lc,net.mg,net.mm,net.mu,net.ni,net.nz,net.pl,net.ru,net.sb,net.sc,net.sg,net.th,net.tr,net.tw,net.uk,net.ve,nf.ca,nm.cn,nm.kr,no.com,nom.br,nom.ni,nom.ro,ns.ca,nt.ca,ntr.br,nt.ro,nx.cn,odo.br,off.ai,on.ca,or.ac,or.at,org.ag,org.ai,org.au,org.br,org.cn,org.do,org.es,org.gl,org.hk,org.in,org.kg,org.ki,org.lc,org.mg,org.mm,org.ms,org.nf,org.ni,org.nz,org.pl,org.ro,org.ru,org.sb,org.sc,org.sg,org.tr,org.tw,org.uk,org.ve,or.jp,or.kr,or.th,pe.ca,plc.uk,ppg.br,presse.fr,pro.br,psc.br,psi.br,qc.ca,qc.com,qh.cn,rec.br,rec.ro,res.in,sa.com,sc.cn,sch.ul,se.com,se.net,sh.cn,sk.ca,slg.br,sn.cn,store.ro,tj.cn,tm.fr,tm.mc,tmp.br,tm.ro,tur.br,tv.br,tv.tr,tw.cn,uk.com,uk.net,us.com,uy.com,vet.br,waw.pl,web.ve,www.ro,xj.cn,xz.cn,yk.ca,yn.cn,zj.cn,zlg.br".split(",");
		e = e.toLowerCase();
		var n = e.split("."), i = n.length;
		if (2 > i)
			return e;
		var r = n.slice(-2).join(".");
		return i >= 3 && o.inArray(r, t) >= 0 ? n.slice(-3).join(".") : r
	}
	function r(e, t) {
		"localhost" == t || parseInt(t.split(".").slice(-1)) || (t = i(t));
		for (var n = 0, r = t.length - 1; r >= 0; r--)
			n += 2983723987 * t.charCodeAt(r);
		for (n = ("" + n).substring(0, 7), r = 0; r < e.length; r++)
			if (n === e[r].substring(1, 8))
				return 1
	}
	var o = jQuery, a = e.conf, s = a.swf.indexOf("flowplayer.org") && a.e && t.data("origin"), l = s ? n(s) : location.hostname, c = a.key;
	if ("file:" == location.protocol && (l = "localhost"), e.load.ed = 1, a.hostname = l, a.origin = s || location.href, s && t.addClass("is-embedded"), "string" == typeof c && (c = c.split(/,\s*/)), c && "function" == typeof r && r(c, l))
		a.logo && t.append(o("<a>", {"class": "fp-logo",href: s}).append(o("<img/>", {src: a.logo})));
	else {
		var u = o("<a/>").attr("href", "http://flowplayer.org").appendTo(t);
		o(".fp-controls", t);
		var d = o('<div class="fp-context-menu"><ul><li class="copyright">&copy; 2013</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul></div>').appendTo(t);
		e.bind("pause resume finish unload", function(e, n) {
			var i = -1;
			n.video.src && o.each([["org", "flowplayer", "drive"], ["org", "flowplayer", "my"]], function(e, t) {
				return i = n.video.src.indexOf("://" + t.reverse().join(".")), -1 === i
			}), /pause|resume/.test(e.type) && "flash" != n.engine && 4 != i && 5 != i ? (u.show().css({position: "absolute",left: 16,bottom: 36,zIndex: 99999,width: 100,height: 20,backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")"}), n.load.ed = u.is(":visible") && o.contains(t[0], d[0]), n.load.ed || n.pause()) : u.hide()
		})
	}
});
var isNavClicked = !1, SH;
!function(e) {
	!function(e) {
		function t(e) {
			return $.when.apply($, e)
		}
		function n(e, t) {
			return t.replace(new RegExp(".{" + ("" + e.toString()).length + "}$"), e.toString())
		}
		function i(e, t, n) {
			return Math.max(e, Math.min(t, n))
		}
		e.whenAll = t, e.zeroPad = n, e.clamp = i
	}(e.Util || (e.Util = {})), e.Util
}(SH || (SH = {})), function() {
	window.console || (window.console = {});
	for (var e = ["log", "info", "warn", "error", "debug", "trace", "dir", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd", "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"], t = 0; t < e.length; t++)
		window.console[e[t]] || (window.console[e[t]] = function() {
		})
}();
var SH;
!function(e) {
	!function(e) {
		var t = function() {
			function e(e) {
				this.el = e, this.target = 0, this.current = 0, this.events = $({})
			}
			$(".preloader .inner");
			return e.prototype.start = function() {
				$(this.el).show(), this.target = 0, this.current = 0
			}, e.prototype.stop = function() {
				$(this.el).hide()
			}, e.prototype.incrTarget = function(e) {
				"undefined" == typeof e && (e = 1), this.target += e, this.update()
			}, e.prototype.incrLoads = function(e) {
				"undefined" == typeof e && (e = 1), this.current += e, this.update(), this.events.triggerHandler("loadProgress", this.current / this.target)
			}, e.prototype.update = function() {
				$(this.el).show();
				var e;
				this.target ? (e = Math.round(100 * (this.current / this.target)), e = String(e) + "%") : e = "Loading…", $(this.el).text(e), $("#preloader .inner").width((1 - this.current / this.target) * $(window).width())
			}, e
		}();
		e.Loader = t
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(e) {
		var t = function() {
			function e(e, t) {
				return this.el = e, void (this.length = t)
			}
			return e.prototype.setLoading = function() {
			}, e.prototype.setLoaded = function() {
			}, e
		}();
		e.FrameLoadGauge = t
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		function n(e, t) {
			setTimeout(e, 5 * t)
		}
		var i = function() {
			function t(t) {
				function n(e) {
					var t = e.constructor === Array ? [] : {};
					for (var i in e)
						e.hasOwnProperty(i) && (t[i] = "object" == typeof e[i] ? n(e[i]) : e[i]);
					return t
				}
				this.frames = {}, this.customFrames = [], this.groupFrames = [], this.reSection = [], this.largeFrames = {}, this.startFrame = 0, this.currentPos = 0, this.currentFrameNumber = null, this.length = t.frameCount, this.group = t.group, this.initGroup = {}, this.frameLoads = new Array(this.length), this.customSequence = [], this.FLAG_customSequenceLast = 0, this.downScrolling = 0;
				for (var i = 0; this.length > i; i++)
					this.customSequence[i] = i;
				for (var i = 0, r = this.group.length; r > i; i++) {
					if (this.groupFrames[i] = [], this.group[i][0] instanceof Array)
						for (var o = 0, a = this.group[i].length; a > o; o++) {
							var s = this.group[i][o][0], l = this.group[i][o][1];
							this.groupFrames[i][o] = [];
							for (var c = 0; l - s >= c; c++)
								this.groupFrames[i][o].push(s + c)
						}
					else
						for (var u = this.group[i][0], d = this.group[i][1], o = 0; d - u >= o; o++)
							this.groupFrames[i].push(u + o);
					this.reSection[i] = [];
					for (var p = 0; 4 > p; p++)
						this.reSection[i].push(p)
				}
				this.customFrames = _.flatten(this.groupFrames), this.initGroup = n(this.group), console.log(this.customFrames), this.urlFunc = function(n) {
					var i = "PIC/pc/small/";
					return e.Config.isMobile ? i = "/small_256/" : e.Config.isTablet && (i = "/small_512/"), t.path + "/pc/small/" + t.prefix + e.Util.zeroPad(n, t.frameNumberTemplate || "" + n) + "." + t.extension
				}, this.largeUrlFunc = function(n) {
					var i = "PICS/pc/big/";
					return e.Config.isMobile ? i = "/large_960/" : e.Config.isTablet && (i = "/large_960/"), t.path + "/pc/big/" + t.prefix + e.Util.zeroPad(n, t.frameNumberTemplate || "" + n) + "." + t.extension
				}, this.el = document.createElement("div"), this.currentFrame = null, this.loadGauge = new e.Interface.FrameLoadGauge($("#frameLoads"), this.length)
			}
			return t.prototype.loadFrame = function(t, i) {
				var r = this;
				"undefined" == typeof i && (i = !1);
				var o = i ? function(e) {
					return e()
				} : n;
				if (e.Config.AFramesOnly && (t = t >> 1 << 1), this.frameLoads[t])
					return this.frameLoads[t];
				var a = new Image;
				this.frameLoads[t] = $.Deferred(), this.loadGauge.setLoading(t), a.onload = function() {
					r.frames[t] = a, r.frameLoads[t].resolve(a), r.loadGauge.setLoaded(t)
				};
				var s = Math.abs(t - this.startFrame);
				return 0 == t || t == this.length - 1 ? o(function() {
					a.src = r.largeUrlFunc(t)
				}, s) : o(function() {
					a.src = r.urlFunc(t)
				}, s), this.frameLoads[t]
			}, t.prototype.allFramesLoading = function() {
				for (var t = 0, n = this.frameLoads.length; n > t; t++) {
					if (!this.frameLoads[t])
						return !1;
					e.Config.AFramesOnly && t++
				}
				return !0
			}, t.prototype.appendToCustomSequence = function(e, t) {
				console.log("appendToCustomSequence(", e, ", ", t, ")");
				var n = t - e;
				console.log("len: ", n), console.log("this.FLAG_customSequenceLast: ", this.FLAG_customSequenceLast + 1);
				for (var i = 1; n > i; i++)
					this.customSequence[this.FLAG_customSequenceLast + i] = e + i;
				return this.FLAG_customSequenceLast += n, redkiss.stream.acceptingInput = !0, !0
			}, t.prototype.load = function(t, n) {
				var i = this;
				console.log("this.length: ", this.length), "undefined" == typeof t && (t = null), "undefined" == typeof n && (n = 0);
				var r = function(e) {
					return e >= 0 && e < i.length
				};
				this.startFrame = n, i.preloadFramesAhead = 260;
				var o = 260, a = 2;
				e.Config.isMobile && (o = 260, a = 1);
				for (var s = [], l = 0, c = 0, u = this.length, d = 0, p = 0; u > l; c++, l++) {
					d = Math.max(0, 2 * Math.floor(l / o) - 1), p = Math.max(0, 2 * Math.floor(c / o) - 1), l += d, c += (p + 1) * a - 1;
					var h = n + l, f = n - 1 - c, m = !1;
					if (_.each([h, f], function(e) {
						if (r(e)) {
							m = !0;
							var n = i.loadFrame(e, !0);
							s.push(n), t && (t.incrTarget(), n.then(function() {
								t.incrLoads()
							}))
						}
					}), !m) {
						console.log("firstPhasePreloads: ", s);
						break
					}
				}
				var g = function() {
					var t = [];
					if (!i.allFramesLoading()) {
						for (var o = n, a = i.length, s = !1; a > o; o += 2) {
							if (e.Config.AFramesOnly && (o = o >> 1 << 1), !s) {
								for (; i.frameLoads[o] && a > o; )
									o++, e.Config.AFramesOnly && o++;
								s = !0
							}
							if (!r(o))
								break;
							t.push(i.loadFrame(o))
						}
						if (n > 0)
							for (var o = n, s = !1; o >= 0; o -= 2) {
								if (!s) {
									for (; i.frameLoads[o] && o >= 0; )
										o--;
									s = !0
								}
								if (!r(o))
									break;
								t.push(i.loadFrame(o))
							}
						if (!t.length) {
							var l = $.Deferred();
							return l.resolve(), l
						}
						return e.Util.whenAll(t).then(g)
					}
				};
				return e.Util.whenAll(s).then(function() {
					console.log("whenAll(firstPhasePreloads): ", s.length), i.appendToCustomSequence(0, 65), g(), $(".rotate-prompt-close").on("click", function(e) {
						e.preventDefault(), $(".static .rotation-prompt").remove()
					})
				}), e.Util.whenAll(s)
			}, t.prototype.getFrame = function(e) {
				var t = e, n = this.customFrames[t];
				this.currentFrame = this.frames[n], this.currentFrame || (this.currentFrame = this.frames[n - 1]), this.currentFrameNumber = t;
				var i = {endFrame: 1707,initFrameStart: 38,initFrameEnd: 53,navFrameStart: this.customFrames.indexOf(420),navFrameEnd: this.customFrames.indexOf(530),navFrameStart2: this.customFrames.indexOf(680),navFrameEnd2: this.customFrames.indexOf(830)};
				if (t >= i.endFrame && !$(".end_frame").is(":visible") ? $(".end_frame").stop().hide().fadeIn() : t <= i.endFrame && $(".end_frame").is(":visible") && $(".end_frame").stop().show().fadeOut(), t >= 0 && 52 >= t) {
					var r = t;
					r >= 42 && (r = 52), $("#welcome_page").css("opacity", 1 / 52 * r), $("#welcome_page_bottom").css("opacity", 1 / 52 * r)
				}
				// else if (t >= 52 && 60 >= t) {
				// 	var r = t;
				// 	$("#welcome_page").css("opacity", 1 / 8 * (60 - r)), $("#welcome_page_bottom").css("opacity", 1 / 8 * (60 - r))
				// }
				else if (60 >= t) {
					var r = t;
					//$("#welcome_page").css("opacity", 1 / 8 * (60 - r)), $("#welcome_page_bottom").css("opacity", 1 / 8 * (60 - r))
					$("#welcome_page").css("opacity", 1 / 8 * (60 - r));
					$("#welcome_page_bottom").css("opacity", 0);
				}
				_.contains([10, 87, 90, 250, 310, 438, 441, 525, 703, 720, 728, 830, 915, 1193, 1208, 1226, 1233, 1301, 1320, 1519, 1597, 1607], t) && !isNavClicked && $("#playlist").jPlayer("setMedia", {mp3: "/audio/" + t + ".mp3"}).jPlayer("play"), t >= i.initFrameStart && t <= i.initFrameEnd && !$(".btn_scrolldown").is(":visible") ? $(".btn_scrolldown").show() : (t < i.initFrameStart && $(".btn_scrolldown").is(":visible") || t > i.initFrameEnd && $(".btn_scrolldown").is(":visible")) && $(".btn_scrolldown").hide(), t >= i.navFrameStart && t <= i.navFrameEnd && $(".nav-bar").is(":visible") || t >= i.navFrameStart2 && t <= i.navFrameEnd2 && $(".nav-bar").is(":visible") ? $(".nav-bar").hide() : (t < i.navFrameStart || t > i.navFrameEnd2 || t > i.navFrameEnd && t < i.navFrameStart2) && !$(".nav-bar").is(":visible") && $(".nav-bar").show(), this.downScrolling || $(".btn_scrolldown2").hide();
				for (var o, a, s = 1; s < this.length && !this.currentFrame; )
					o = this.frames[t - s], a = this.frames[t + s], this.currentFrame = o || a, s++;
				return this.currentFrame
			}, t.prototype.reGroup = function(e, t) {
				t--;
				var n = 0, i = 20;
				console.log(this.initGroup);
				for (var r = 0; 3 > r; r++) {
					var o = this.currentFrameNumber;
					if (console.log(o, this.initGroup[e][r]), o >= this.initGroup[e][r][0] + i && o <= this.initGroup[e][r][1] + i) {
						n = r + 1;
						break
					}
				}
				if (console.log("currentPos", n), t = this.reSection[e].indexOf(t), t == n) {
					var a = this.groupFrames[e][t][0];
					return this.customFrames.indexOf(a)
				}
				var s = this.groupFrames[e].splice(t, 1);
				this.groupFrames[e].splice(n, 0, s[0]);
				var l = this.group[e].splice(t, 1);
				this.group[e].splice(n, 0, l[0]);
				var c = this.reSection[e].splice(t, 1);
				this.reSection[e].splice(n, 0, c[0]), console.log(n, t, this.reSection), this.customFrames = _.flatten(this.groupFrames);
				var a = s[0][0];
				return this.customFrames.indexOf(a)
			}, t.prototype.getLargeFrame = function(e) {
				var t = $.Deferred(), n = new Image;
				return n.onload = function() {
					return t.resolve(n)
				}, n.src = this.largeUrlFunc(e), t
			}, t
		}();
		t.ImageFrameSource = i
	}(e.Video || (e.Video = {})), e.Video
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(e) {
		!function(e) {
			var t = function() {
				function e(e) {
					this.element = e, this.previousFrame = null
				}
				return e.prototype.render = function(e) {
					this.previousFrame && this.element.removeChild(this.previousFrame), this.element.appendChild(e)
				}, e
			}();
			e.ImageToElement = t;
			var n = function() {
				function e(e) {
					this.element = e, this.prevImage = null, this.drawBox = null, this.aspect = null, this.resizeQueued = !1, this.canvas = document.createElement("canvas"), this.canvas.height = $(e).height(), this.canvas.width = $(e).width(), this.drawBox = [0, 0, this.canvas.width, this.canvas.height], this.aspect = this.canvas.width / this.canvas.height, e.appendChild(this.canvas), this.context = this.canvas.getContext("2d"), $(window).on("viewportResize", $.proxy(this, "handleResize")), $(window).trigger("resize")
				}
				return e.prototype.handleResize = function(e, t, n, i, r) {
					var o = this;
					this.canvas.width = i, this.canvas.height = r;
					var a = (t - i) / 2, s = (n - r) / 2;
					this.resizeQueued || requestAnimationFrame(function() {
						o.canvas.style.marginLeft = "" + a + "px", o.drawBox = [-a, -s, t, n], o.aspect = i / r, o.prevImage && o.render(o.prevImage), o.resizeQueued = !1
					})
				}, e.prototype.render = function(e) {
					if (e) {
						var t, n, i, r, o = (this.drawBox, e.width), a = e.height, s = o / a;
						s < this.aspect ? (t = 0, i = o, r = i / this.aspect, n = (a - r) / 2) : (n = 0, r = a, i = r * this.aspect, t = (o - i) / 2), this.context.drawImage(e, t, 0, i, r, 0, 0, this.canvas.width, this.canvas.height), this.prevImage = e
					}
				}, e
			}();
			e.ImageToCanvas = n;
			var i = function() {
				function e(e) {
					this.element = e, this.prevImage = null, this.canvas = document.createElement("canvas"), this.canvas.height = $(e).height(), this.canvas.width = $(e).width(), e.appendChild(this.canvas), this.context = this.canvas.getContext("2d"), $(window).on("viewportResize", $.proxy(this, "handleResize"))
				}
				return e.prototype.handleResize = function() {
				}, e.prototype.render = function() {
				}, e
			}();
			e.CompositeToCanvas = i
		}(e.Renderer || (e.Renderer = {})), e.Renderer
	}(e.Video || (e.Video = {})), e.Video
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		var n = function() {
			function t(t, n, i) {
				this.currentProgress = 0, this.lastFrameNumber = -1, this.playTimer = null, this.canJumpNow = !0, this.offset = 0, this.frameQueued = null, this.progressCallback = null, this.scrubTimer = null, this.currentVelocity = 0, this.source = t, this.length = this.source.length, this.el = n, this.renderer = i.rendererClass ? new e.Video.Renderer[i.rendererClass](n) : new e.Video.Renderer.ImageToCanvas(n), this.keyFrames = _.map(i.sections, function(e) {
					return e[2]
				}), this.keyFrames.unshift(0), this.chapters = _.map(i.chapters, function(e) {
					return e
				}), this.hiResDelay = i.hiResDelay || e.Config.hiResDelay, this.currentProgress = (i.startFrame || 0) / (this.length - 1)
			}
			return t.prototype.setProgressCallback = function(e) {
				this.progressCallback = e
			}, t.prototype.calculateCurrentFrame = function() {
				var t = Math.round((this.length - 1) * this.currentProgress);
				return e.Config.AFramesOnly && (t = t >> 1 << 1), t
			}, t.prototype.setCurrentFrame = function(t) {
				this.currentProgress = e.Util.clamp(0, t / (this.length - 1), 1)
			}, t.prototype.renderCurrentFrame = function(e) {
				var t = this;
				"undefined" == typeof e && (e = !1);
				var n = this.calculateCurrentFrame(), i = Math.round((this.length - 1) * this.currentProgress);
				i || t.renderer.render(t.source.getFrame(1)), i != this.lastFrameNumber && (this.resetScrubTimer(), !e && this.progressCallback && this.progressCallback(this.currentProgress, i, this.length), this.lastFrameNumber = i, requestAnimationFrame(function() {
					t.renderer.render(t.source.getFrame(n))
				}), this.frameQueued = null)
			}, t.prototype.seekTo = function(e, t) {
				"undefined" == typeof t && (t = !1), this.setCurrentFrame(e), this.renderCurrentFrame(t)
			}, t.prototype.resetScrubTimer = function() {
				clearTimeout(this.scrubTimer), this.scrubTimer = Math.abs(this.currentVelocity) > 1 ? setTimeout($.proxy(this, "resetScrubTimer"), 100) : setTimeout($.proxy(this, "upscale"), this.hiResDelay)
			}, t.prototype.upscale = function(t) {
				var n = this;
				if ("undefined" == typeof t && (t = null), e.Config.hiResOnPause) {
					{
						var i = t || this.lastFrameNumber, r = this.source.getLargeFrame(i);
						redkiss.playhead.videoController.source.currentFrameNumber
					}
					r.then(function(e) {
						i !== n.lastFrameNumber || n.frameQueued && i !== n.frameQueued || n.renderer.render(e)
					})
				}
			}, t.prototype.nextKeyFrame = function() {
				var e = Math.round((this.length - 1) * this.currentProgress), t = _.find(this.keyFrames, function(t) {
					return +t > e
				});
				return +t || 0
			}, t.prototype.prevKeyFrame = function() {
				var e = this.calculateCurrentFrame(), t = Array.prototype.slice.call(this.keyFrames);
				t.reverse();
				var n = _.find(t, function(t) {
					return e > +t
				});
				return n || 0 === +n ? +n : null
			}, t.prototype.show = function() {
				$(this.el).transition({opacity: 1})
			}, t.prototype.hide = function() {
				this.el.style.opacity = "0"
			}, t
		}();
		t.Controller = n
	}(e.Video || (e.Video = {})), e.Video
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(e) {
		!function(e) {
			e[e.Scrub = 0] = "Scrub", e[e.JumpForward = 1] = "JumpForward", e[e.JumpBack = 2] = "JumpBack", e[e.SingleFrame = 3] = "SingleFrame"
		}(e.EventTypes || (e.EventTypes = {}));
		var t = e.EventTypes, n = $(window).add("html,body");
		e.COOLDOWN_TIME = 100, e.WAIT_TIME = 150;
		var i, r = function() {
			function t(e) {
				this.waitTimer = null, this.cooldownTimer = null, this.scrubbing = !1, this.queuedDelta = null, this.stream = e, n.bind("mousewheel", $.proxy(this, "handleWheel"))
			}
			return t.prototype.handleWheel = function(e, t, n, i) {
				e.preventDefault(), e.stopPropagation(), this.waitTimer ? (this.cancelWait(), this.stream.pump(0, this.queuedDelta), this.stream.pump(0, i), this.resetCooldownTimer()) : this.waitForSecondEvent(i)
			}, t.prototype.cancelWait = function() {
				clearTimeout(this.waitTimer), this.waitTimer = null
			}, t.prototype.waitForSecondEvent = function(t) {
				var n = this;
				this.queuedDelta = t, this.waitTimer = setTimeout(function() {
					n.stream.pump(3, t), n.waitTimer = null
				}, e.WAIT_TIME)
			}, t.prototype.resetCooldownTimer = function() {
				var t = this;
				clearTimeout(this.cooldownTimer), this.cooldownTimer = setTimeout(function() {
					t.scrubbing = !1
				}, e.COOLDOWN_TIME)
			}, t
		}();
		!function(e) {
			e[e.Space = 32] = "Space", e[e.ArrowUp = 38] = "ArrowUp", e[e.ArrowDown = 40] = "ArrowDown"
		}(i || (i = {}));
		var o = function() {
			function e(e) {
				this.keysDown = {}, this.stream = e, $(window).on("keydown", $.proxy(this, "handleKeyDown")), $(window).on("keyup", $.proxy(this, "handleKeyUp"))
			}
			return e.prototype.handleKeyDown = function(e) {
				var t = !1, n = -1.1, i = !1;
				this.keysDown[e.which] && (t = !0), (40 == e.which || 32 == e.which) && (i = !0), 38 == e.which && (i = !0, n = -1 * n), i && (e.preventDefault(), t ? this.stream.pump(0, n) : this.stream.pump(3, n), this.keysDown[e.which] = !0)
			}, e.prototype.handleKeyUp = function(e) {
				this.keysDown[e.which] = !1
			}, e
		}(), a = $("#full-content").add(window).add("html,body"), s = function() {
			function e(e) {
				this.lastY = 0, this.lastDeltaY = 0, this.staticIsVisible = !1, this.touchInProgress = !1, this.eventCount = 0, this.averageDelta = 1, this.stream = e, a.on("touchstart", $.proxy(this, "handleTouchStart")), a.on("touchend", $.proxy(this, "handleTouchEnd"))
			}
			return e.prototype.handleTouchStart = function(e) {
				var t = this;
				this.touchInProgress || (this.lastY = e.originalEvent.touches[0].clientY, this.staticIsVisible = !!$(".static:visible").length, a.on("touchmove", function(e) {
					return t.handleTouchMove(e)
				}), this.touchInProgress = !0)
			}, e.prototype.handleTouchMove = function(e) {
				if (!this.staticIsVisible) {
					e.preventDefault();
					var t = e.originalEvent.touches[0].clientY, n = t - this.lastY;
					this.lastY = t, this.lastDeltaY = n;
					var i = Math.abs(n);
					this.averageDelta = (i + this.averageDelta * this.eventCount) / (this.eventCount + 1), this.eventCount += 1, n /= this.averageDelta, Math.abs(n) > 0 && this.stream.pump(0, n)
				}
			}, e.prototype.handleTouchEnd = function() {
				a.off("touchmove"), this.touchInProgress = !1
			}, e
		}(), l = function() {
			function e() {
				this.acceptingInput = !1, this.handlers = [new o(this)], this.handlers.push(Modernizr.hasEvent("touchstart") ? new s(this) : new r(this))
			}
			return e.prototype.pump = function(e) {
				for (var n = [], i = 0; i < arguments.length - 1; i++)
					n[i] = arguments[i + 1];
				return this.acceptingInput ? void $(this).triggerHandler(t[e], n) : (n.unshift(t[e]), void $(this).triggerHandler("muted", n))
			}, e
		}();
		e.EventStream = l
	}(e.Input || (e.Input = {})), e.Input
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(e) {
		var t = function() {
			function e(e, t) {
				this.aspect = e, this.el = t, $(window).on("resize", $.proxy(function() {
					$(window).width() / $(window).height() > 19 / 9 ? $(".badwidth").fadeIn() : $(".badwidth").fadeOut(), requestAnimationFrame($.proxy(this, "update"))
				}, this)), requestAnimationFrame($.proxy(this, "update"))
			}
			return e.prototype.update = function() {
				var e = $(window), t = e.width(), n = e.height(), i = t / n, r = n, o = t, a = 1;
				i > this.aspect ? (r = t / this.aspect, $(this.el).css({width: "100%",height: r,left: 0,top: 0})) : (o = n * this.aspect, $(this.el).css({height: "100%",width: o,left: (t - o) / 2,top: 0})), a = Math.min(o / 1280, r / 720), $(window).trigger("viewportResize", [o, r, t, n]), $("#viewport-override").text(".viewport-inner article {-webkit-transform: scale(" + a + ");-ms-transform: scale(" + a + ");-moz-transform: scale(" + a + ");-o-transform: scale(" + a + ");transform: scale(" + a + ");}")
			}, e
		}();
		e.Viewport = t
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		var n = function() {
			function t(e, t) {
				this.offsetInThumb = null, this.trackHeight = null, this.el = $(e), this.thumb = this.el.find(".thumb")[0], this.playhead = t, this.bind()
			}
			return t.prototype.bind = function() {
				var t = this;
				this.el.on("click touchstart", function(n) {
					t.playhead.playTo(e.Util.clamp(0, (n.clientY - 15) / ($(window).height() - 30), .99999), !1), t.playhead.start()
				}), $(this.thumb).on("mousedown", $.proxy(this, "beginDrag"))
			}, t.prototype.setProgress = function(e) {
				var t = this;
				requestAnimationFrame(function() {
					t.thumb.style.top = "" + 100 * e + "%"
				})
			}, t.prototype.beginDrag = function(e) {
				e.preventDefault(), this.offsetInThumb = e.clientY - $(this.thumb).offset().top, this.trackHeight = this.el.find(".track").height(), $(window).on("mousemove.dragging", $.proxy(this, "continueDrag")), $("body").add(window).on("mouseup.dragging blur.dragging", $.proxy(this, "endDrag")), this.playhead.targetFrame = null
			}, t.prototype.continueDrag = function(t) {
				var n = t.clientY - this.offsetInThumb, i = n / this.trackHeight;
				this.playhead.seekTo(e.Util.clamp(0, i * (this.playhead.length - 1), this.playhead.length - 1))
			}, t.prototype.endDrag = function() {
				$(window).add("body").off(".dragging"), this.offsetInThumb = null
			}, t
		}();
		t.Scrollbar = n
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		var n = new Image;
		n.src = "assets/img/play-button.gif";
		var i = (e.Video.ImageFrameSource, {S01_STORY_1: {title: "S03_STORY_1_title",copy: "<p>S03_STORY_1_paragraph_candle</p>",section: "candle",jump_to_destination: 368,className: "STORY_1_1",chapters: 3},S01_STORY_2: {title: "S03_STORY_2_title",copy: "<p>S03_STORY_2_paragraph_eye</p>",section: "eye",jump_to_destination: 368,className: "STORY_1_2",chapters: 1},S01_STORY_3: {title: "S03_STORY_3_title",copy: "<p>S03_STORY_3_paragraph_rose</p>",section: "rose",jump_to_destination: 368,className: "STORY_1_3",chapters: 2},S02_STORY_1: {title: "S03_STORY_1_title",copy: "<p>S03_STORY_1_paragraph_candle</p>",section: "candle",jump_to_destination: 705,className: "STORY_2_1",chapters: 3},S02_STORY_2: {title: "S03_STORY_2_title",copy: "<p>S03_STORY_2_paragraph_eye</p>",section: "eye",jump_to_destination: 781,className: "STORY_2_2",chapters: 1},S02_STORY_3: {title: "S03_STORY_3_title",copy: "<p>S03_STORY_3_paragraph_rose</p>",section: "rose",jump_to_destination: 849,className: "STORY_2_3",chapters: 2},S03_STORY_1: {title: "S03_STORY_1_title",copy: "<p>S03_STORY_1_paragraph_candle</p>",section: "candle",jump_to_destination: 1398,className: "STORY_3_1",chapters: 3},S03_STORY_2: {title: "S03_STORY_2_title",copy: "<p>S03_STORY_2_paragraph_eye</p>",section: "eye",jump_to_destination: 1237,className: "STORY_3_2",chapters: 1},S03_STORY_3: {title: "S03_STORY_3_title",copy: "<p>S03_STORY_3_paragraph_rose</p>",section: "rose",jump_to_destination: 1237,className: "STORY_3_3",chapters: 2}}), r = {}, o = null, a = function() {
			function e(e, t) {
				var n = this;
				this.visible = !1, this.expanded = !1, this.inProgress = !1, this.lastState = -1, this.id = e, this.el = t, this.$el = $(this.el), this.$el.find(".hotspot").on("click", function(e) {
					e.preventDefault(), n.visible ? n.hide() : n.show()
				}).css({})
			}
			return e.getStory = function(t) {
				if ("undefined" == typeof r[t]) {
					var n, o = i[t];
					if (o) {
						var a = document.getElementById("story-template");
						n = $(a).clone().attr({id: t})[0];
						var s = $(n);
						s.find("header h1").html(o.title), s.find(".content").html(o.copy), s.data("jump_to_destination", o.jump_to_destination), s.data("section", o.section), s.data("chapters", o.chapters), s.addClass(o.className), a.parentNode.appendChild(n), r[t] = new e(t, n), o.delta && s.data("delta", o.delta)
					} else
						n = document.getElementById(t), r[t] = n && $(n).hasClass("story") ? new e(t, n) : null
				}
				return r[t]
			}, e.prototype.setState = function(e) {
				if (this.el) {
					var t = "";
					t = e > this.lastState ? "state_entry" : "state_exit";
					var n = this.el.className.replace(/state_[\w\d]+/g, " ") + " " + t + " ";
					this.el.className = (n + "state_" + e).replace(/\s+/g, " "), this.lastState = e
				}
			}, e.prototype.show = function() {
				redkiss.stream.acceptingInput = !1;
				if (o && o.hide(), o = this, !this.visible) {
					var e = this.$el, t = (e.data("section"), e.data("chapters")), n = redkiss.playhead.videoController.chapters[t - 1];
					console.log("chapter_obj: ", n), redkiss.playhead.videoController.source.appendToCustomSequence(n.begin, n.end);
					var i = 0;
					e.data("delta") && (i = parseInt(e.data("delta")));
					for (var r = e.prop("class").split(" "), a = "", s = 0; s < r.length; s++)
						"STORY_" == r[s].substring(0, 6) && (a = "." + r[s]);
					var l = e.prop("id").split("_"), c = [parseInt(l[0].substr(1)), parseInt(l[2])];
					console.log(c);
					var u = redkiss.playhead.videoController.source.reGroup(c[0], c[1]);
					console.log(u), redkiss.playhead.videoController.source.currentPos++, $(".btn_scrolldown2").delay(200).fadeIn(), redkiss.playhead.videoController.source.downScrolling = 1, setTimeout(function() {
						redkiss.playhead.videoController.source.downScrolling = 0
					}, 5e3);
					var d = u + 30 + i;
					redkiss.playhead.seekTo(u), redkiss.playhead.start(), redkiss.playhead.playTo(d), redkiss.stream.acceptingInput = !0, console.log("acceptingInput", redkiss.stream.acceptingInput);
					var p = a + " {display: none !important;}";
					$("#my-override").text($("#my-override").text() + p), this.visible = !0, e.addClass("open")
				}
			}, e.prototype.hide = function() {
				var e = this;
				if (this.visible) {
					var t = this.$el, n = t.find("header");
					requestAnimationFrame(function() {
						n.height(n.show().find("h1").height()), n.find("h1").stop(!0).transition({top: "-100%"}, 200, function() {
							e.visible || n.hide()
						}), t.find("hr.head").stop(!0).transition({width: "0%"}, 200, function() {
							e.visible || t.find("hr.head").transition({display: "none"}, 0)
						}), t.find(".content,.more").stop(!0, !0).transition({opacity: 0}, 200, function() {
							e.visible || t.find("hr.head").transition({display: "none"}, 0)
						})
					}), this.visible = !1, t.removeClass("open")
				}
			}, e.prototype.expand = function() {
				this.expanded = !0
			}, e.prototype.unexpand = function() {
				this.expanded = !1
			}, e.prototype.toggleExpanded = function() {
				this.expanded ? this.unexpand() : this.expand()
			}, e
		}();
		t.Story = a
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(e) {
		var t = function() {
			function e(e) {
				this.templateElement = $(e)
			}
			return e.prototype.showContent = function(e) {
				var t = this;
				return this.currentOverlay ? void this.dismiss().then(function() {
					t.showContent(e)
				}) : (this.currentOverlay = this.templateElement.clone().appendTo("body"), this.currentOverlay.find(".content").html(e.clone().show()), this.currentOverlay.css({opacity: 0}).show().transition({opacity: 1}), void this.bindCurrentOverlay())
			}, e.prototype.bindCurrentOverlay = function() {
				var e = this;
				this.currentOverlay.on("click", function(t) {
					t.preventDefault(), t.stopPropagation(), e.dismiss()
				})
			}, e.prototype.dismiss = function() {
				var e = this, t = $.Deferred();
				return this.currentOverlay ? this.currentOverlay.transition({opacity: 0}, function() {
					e.currentOverlay.remove(), e.currentOverlay = null, t.resolve()
				}) : t.resolve(), t
			}, e
		}();
		e.MobilePopup = t
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		function n(t) {
			var n = a[t];
			if (n)
				return n;
			var r = i;
			e.Config.isMobile && (r = o);
			var s = document.getElementById(t);
			return s.className.match(/poster( |$)/) ? (a[t] = new r(s), a[t]) : null
		}
		var i = function() {
			function e(e) {
				this.el = $(e)
			}
			return e
		}();
		t.Poster = i;
		var r = new e.Interface.MobilePopup($(".text-overlay")), o = function() {
			function e(e) {
				this.el = $(e), this.init()
			}
			return e.prototype.init1131 = function() {
				this.popupContent = this.el.find(".popup").hide(), this.popupLink = $("<a href='#' class='popup-link'>Read the Story</a>"), this.popupContent.after($("<p></p>").append(this.popupLink)), this.bind()
			}, e.prototype.bind = function() {
				var e = this;
				this.popupLink.on("click", function(t) {
					t.preventDefault(), t.stopPropagation(), e.showPopup()
				})
			}, e.prototype.showPopup = function() {
				var e = this.popupContent.clone();
				r.showContent(e)
			}, e
		}();
		t.MobilePoster = o;
		var a = {};
		t.getPoster = n
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		function n(e, t, n) {
			e[t] ? e[t].push(n) : e[t] = [n]
		}
		function i(e, t, n) {
			return t >= e && n >= t
		}
		var r = 0, o = function() {
			function t(t, i, r) {
				"undefined" == typeof r && (r = 0);
				var o = this;
				this.objectBounds = {}, this.visibleObjects = {}, this.appStoreEnabled = !1, this.appStorePosterID = "S02_POSTER", this.areAppStoreIconsActive = !1;
				var a = this.frameIndex = {};
				_.each(t, function(e, t) {
					var r = 1 / 0, s = -1 / 0;
					_.each(e, function(e, i) {
						r = Math.min(+i, r), s = Math.max(+i, s), n(a, i, t)
					});
					var l;
					_.each(i, function(e) {
						e[2] >= r && e[2] <= s && (l = e[2])
					}), o.objectBounds[t] = {start: r,end: s,posterFrame: l,startToPoster: l - r}
				}), this.overlayData = t, this.offset = r, e.Config.isTablet && $(".roll_over_txt").css("display", "none")
			}
			return t.setCoords = function(e, t) {
				var n = t[0], i = t[1];
				e.style.display = "block";
				var r = $(e);
				r.hasClass("poster") || (r.hasClass("headline") ? i -= .25 : r.hasClass("product-name") && (i -= .5));
				var o = r.hasClass("left") ? "right" : "left", a = "right" == o ? "left" : "right";
				e.style[o] = "" + 100 * n + "%", e.style[a] = "auto", e.style.top = "" + 100 * i + "%"
			}, t.prototype.setProgress = function(n) {
				r = n;
				var o = this;
				n -= this.offset;
				var a = this.frameIndex["" + n] || [], s = {};
				_.each(a, function(r) {
					var a = o.overlayData[r][n], l = o.objectBounds[r], c = e.Interface.Story.getStory(r);
					if (!c && r.match(/POSTER$/i))
						var u = e.Interface.getPoster(r);
					var d, p = n - l.start, h = l.end - n;
					if (d = c && c.el || u && u.el[0] || document.getElementById(r)) {
						if (c) {
							if (e.Config.isMobile && !e.Config.showMobileStories)
								return;
							c.setState(i(0, p, 13) ? p : i(0, h, 13) ? h : 999), (0 >= p || 0 >= h) && c.hide()
						} else if (d.className.match("headline")) {
							var f = 3 * (Math.max(0, l.posterFrame - n) / l.startToPoster) + 1.2;
							d.style.lineHeight = f
						}
						o.visibleObjects[r] = !0, s[r] = !0, o.appStoreEnabled ? r == o.appStorePosterID && (n == o.objectBounds[o.appStorePosterID].posterFrame ? o.areAppStoreIconsActive || ($(".appstore_video_link").on("mouseenter", $.proxy(o, "onAppStoreIconMouseOver")), $(".appstore_video_link").on("mouseleave", $.proxy(o, "onAppStoreIconMouseOut")), $("#S02_IMAGE_OVERLAY").css("display", "block"), $(".appstore_icons").css("opacity", 1), o.updateSelectedIcon(""), o.areAppStoreIconsActive = !0) : o.areAppStoreIconsActive && ($(".appstore_video_link").off("mouseenter", $.proxy(o, "onAppStoreIconMouseOver")), $(".appstore_video_link").off("mouseleave", $.proxy(o, "onAppStoreIconMouseOut")), $(".appstore_icon").removeClass("mouse_over"), $(".appstore_icons").css("opacity", .5), $("#S02_IMAGE_OVERLAY").css("display", "none"), $(".appstore_title").empty(), $(".appstore_desc").empty(), o.areAppStoreIconsActive = !1)) : $(".appstore_block").hide(), requestAnimationFrame(function() {
							var e = document.getElementById(r);
							e && t.setCoords(e, a)
						})
					}
				}), _.each(_.keys(this.visibleObjects), function(e) {
					s[e] || (delete o.visibleObjects[e], requestAnimationFrame(function() {
						var t = document.getElementById(e);
						t && (t.style.display = "none")
					}))
				})
			}, t.prototype.onAppStoreIconClick = function(e) {
				return this.areAppStoreIconsActive ? void 0 : (e.preventDefault(), !1)
			}, t.prototype.updateSelectedIcon = function(e) {
				"" == e && (e = "appstore_goldie"), $(".appstore_icon").removeClass("mouse_over"), $(".appstore_title").empty(), $(".appstore_desc").empty(), $("#appstore_image").hide(), $("#appstore_image").removeClass();
				var t = "", n = "";
				switch (e) {
					case "appstore_goldie":
						t = "GOLDIE", n = "Save a fishy friend by dunking him in water.";
						break;
					case "appstore_umbrella":
						t = "TINY UMBRELLA", n = "Stay dry in the rain or do your best to try.";
						break;
					case "appstore_sub":
						t = "SINK SUNK", n = "Pilot your very own submarine in your sink.";
						break;
					case "appstore_photo":
						t = "PHOTO LAB", n = "Process your photos the old-school way.";
						break;
					case "appstore_plantimal":
						t = "PLANTIMAL", n = "Grow a mutant creature by watering it every day.";
						break;
					case "appstore_showeroke":
						t = "RAINY-OKE", n = "Sing in the rain without forgetting the lyrics."
				}
				$("#" + e).addClass("mouse_over"), "" != t && (n = " &mdash; " + n), $(".appstore_title").html(t), $(".appstore_desc").html(n), $("#appstore_image").addClass(e), $("#appstore_image").show()
			}, t.prototype.onAppStoreIconMouseOver = function(e) {
				var t = $(e.currentTarget).find(".appstore_icon"), n = t[0].id;
				this.updateSelectedIcon(n)
			}, t.prototype.onAppStoreIconMouseOut = function(e) {
				$(e.currentTarget).find(".appstore_icon"), this.updateSelectedIcon("")
			}, t
		}();
		t.Overlays = o
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		var n = function() {
			function t(e, t, n, i, r) {
				"undefined" == typeof i && (i = 0), "undefined" == typeof r && (r = null);
				var o = this;
				this.queued = !1, this.lastProgress = null, this.downButtonTimer = null, this.displayed = !1, this.displayAt = 0, this.el = $(e), this.downButton = this.el.find(".scroll-down"), this.playhead = t, this.offset = i, this.sections = n, this.navColors = r, this.navColorsOverride = document.getElementById("nav-override"), this.scrollThumb = $(".scrollbar .thumb")[0], this.redrawFuncMemo = function() {
					o.redraw()
				}, this.displayAt = n[0][2] + i, this.createItems()
			}
			return t.createNavItem = function(e, t, n) {
				"undefined" == typeof n && (n = null);
				var i = $("<li><a href='#" + e + "'>" + (n ? "<span>" + n + "</span>" : "") + "</a></li>");
				return i.find("a").attr("data-index", t), i
			}, t.prototype.createItems = function() {
				var e = this.el.find("ul");
				_.each(this.sections, function(n, i) {
					if (n[0] || !i) {
						var r = t.createNavItem(n[0], i, n[4]);
						e.append(r)
					}
				}), this.items = this.el.find("ul li"), this.bind()
			}, t.prototype.bind = function() {
				var e = this;
				this.items.on("click touchend", "a", function(t) {
					t.preventDefault(), t.stopPropagation();
					var n = +$(t.currentTarget).attr("data-index");
					e.playhead.playTo(e.sections[n][2] + e.offset, !1), e.playhead.start()
				}), Modernizr.hasEvent("touchend") && this.items.find("span").remove()
			}, t.prototype.setProgress = function(e) {
				this.lastProgress = e - this.offset, this.queued || (this.queued = !0, requestAnimationFrame(this.redrawFuncMemo))
			}, t.prototype.showDownButton = function() {
			}, t.prototype.resetDownButtonTimer = function() {
				this.stopDownButtonTimer(), this.downButtonTimer = setTimeout($.proxy(this, "showDownButton"), 200)
			}, t.prototype.stopDownButtonTimer = function() {
				var t = this;
				clearTimeout(this.downButtonTimer), this.downButtonTimer = null, requestAnimationFrame(function() {
					t.downButton.stop(!0), e.Config.isMobile ? t.downButton.css({opacity: 0}) : t.downButton.transition({opacity: 0})
				})
			}, t.prototype.hide = function() {
				var e = this;
				requestAnimationFrame(function() {
					e.el[0].style.marginRight = "-100px", e.el[0].style.opacity = "0"
				})
			}, t.prototype.show = function() {
			}, t.prototype.redraw = function() {
				this.queued = !1;
				var e = this.lastProgress;
				0 > e && (e = 0), !this.displayed && e + this.offset >= this.displayAt && (this.show(), this.displayed = !0);
				var t, n = this.sections[0], i = this.sections[0], r = 0, o = this.sections.length;
				for (t = 1; o > t && (i = this.sections[t], !(e <= n[2])); t++)
					n = i, r = t;
				for (var a = this.navColors[e] || "#FFF", s = 0, l = this.items.length; l > s; s++) {
					var c = s == r, u = this.items[s], d = u.firstChild;
					d.style.borderColor = a, d.style.color = a, d.style.background = c ? a : "rgba(255,255,255,0.01)", u.className = c ? "current" : ""
				}
				this.scrollThumb.style.backgroundColor = a || "#333", e == n[2] && e < this.playhead.length - 1 - this.offset ? (e > 10 && 40 > e && (a = "black"), this.downButton[0].style.color = a || "white", this.downButton[0].style.borderColor = a || "white", this.resetDownButtonTimer()) : this.stopDownButtonTimer()
			}, t
		}();
		t.LocalNav = n
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(e) {
		var t = function() {
			function e(e) {
				"undefined" == typeof e && (e = 0), this.progressCallback = null, this.position = -1, this.kfIdx = 0, this.buttonVisible = !0, this.length = 40, this.offset = e, this.preloadPoster = $("#preloader")[0], this.keyFrames = [0]
			}
			return e.prototype.setProgressCallback = function(e) {
				this.progressCallback = e
			}, e.prototype.calculateCurrentFrame = function() {
				return 0
			}, e.prototype.renderCurrentFrame = function(e) {
				var t = this;
				return "undefined" == typeof e && (e = !1), !e && this.progressCallback && this.position < this.offset && this.progressCallback(this.position / this.length, this.position, this.length), requestAnimationFrame(function() {
					t.buttonVisible && t.position > t.offset && ($(t.preloadPoster).find(".scroll-down").transition({opacity: 0}, 400, function() {
						$(t.preloadPoster).find(".scroll-down").hide()
					}), t.buttonVisible = !1), t.preloadPoster.style.top = -5 * (t.position - t.offset) + "%"
				}), null
			}, e.prototype.seekTo = function(e, t) {
				"undefined" == typeof t && (t = !1), this.kfIdx = _.indexOf(this.keyFrames, e) + 1, this.position = Math.round(Math.max(0, e)), this.renderCurrentFrame(t)
			}, e.prototype.nextKeyFrame = function() {
				return void 0
			}, e.prototype.prevKeyFrame = function() {
				return 0
			}, e.prototype.upscale = function() {
			}, e.prototype.load = function() {
				return $.Deferred()
			}, e
		}();
		e.Intro = t
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		var n = {opacity: 1}, i = {top: 0,left: 0}, r = function() {
			for (var e = [], t = 0; t < arguments.length - 0; t++)
				e[t] = arguments[t + 0];
			return e.unshift({}), _.extend.apply(_, e)
		}, o = r(n, i), a = function() {
			function t(e, t) {
				this.el = e, this.hash = t, this.queue = $.Deferred(), this.keyFrames = [[0, ".artists-engineers", n], [.2, "#intro-text-3", o], [.4, "#intro-text-4", o], [.6, "#intro-text-5", o], [.8, "#intro-p-6-7", o], [.9, ".be-moved", o], [.95, ".redkiss", n], [1, "#intro-scroll-button button", r(n, {bottom: 0})]], this.keyFramesRun = {}, this.animationComplete = $.Deferred(), this.transitionTime = 10, this.delayTime = 10, location.search.match(/SPEEDY/) && (this.transitionTime = 0, this.delayTime = 0), e.addClass("pre-animation-state"), e.show(), this.queue.resolve()
			}
			return t.prototype.queueAnimation = function(e) {
				this.queue = this.queue.then(function() {
					var t = $.Deferred();
					return e(t), t
				})
			}, t.prototype.advanceTo = function(t) {
				var n = this;
				_.each(this.keyFrames, function(i) {
					n.keyFramesRun[i[0]] || t >= i[0] && (n.queueAnimation(function(t) {
						n.el.find(i[1]).transition(i[2], n.transitionTime, e.Config.transitionEasing, function() {
							setTimeout(function() {
								t.resolve(), i[0] >= 1 && n.animationComplete.resolve()
							}, i[0] >= 1 ? 0 : n.delayTime)
						})
					}), n.keyFramesRun[i[0]] = !0)
				})
			}, t.prototype.loadElements = function() {
				return e.Util.whenAll(_.map(["assets/img/trans-grad.png", "assets/img/trans-grad-black.png", "assets/img/trans-grad-blue.png", "assets/img/trans-grad-pink.png", "assets/img/trans-grad-purple.png", "assets/img/hotspot.png", "assets/img/hotspot-anim.png", "assets/img/read-story.png", "assets/img/read-story-dark.png", "assets/img/appstore/goldie.png", "assets/img/appstore/umbrella.png", "assets/img/appstore/sub.png", "assets/img/appstore/photo.png", "assets/img/appstore/plantimal.png", "assets/img/appstore/showeroke.png", "assets/img/appstore/goldie_over.png", "assets/img/appstore/umbrella_over.png", "assets/img/appstore/sub_over.png", "assets/img/appstore/photo_over.png", "assets/img/appstore/plantimal_over.png", "assets/img/appstore/showeroke_over.png"], function(e) {
					var t = new Image, n = $.Deferred();
					return t.onload = function() {
						n.resolve(t)
					}, t.src = e, n
				}))
			}, t.prototype.addClassString = function(e) {
				this.el.addClass(e)
			}, t
		}();
		t.PreloadAnimation = a
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		function n(e) {
			return e >= 0
		}
		t.TIME_SCALE = 1;
		var i = function() {
			function i(e, n, i) {
				this.velocity = 0, this.position = 0, this.acceleration = 30, this.deceleration = 60.85, this.braking = .3, this.inertia = 1, this.frameInterval = function() {
					return 1e3 / 30 * t.TIME_SCALE
				}, this.lastDecay = null, this.lastPosition = null, this.lastInput = null, this.keyframeCounter = 0, this.keyframeRepeat = 20, this.approachingKeyFrame = !1, this.targetFrame = null, this.targetFromFrame = null, this.targetDistance = 0, this.targetStartTime = 0, this.speedLimited = !0, this.isRunning = !1, this.events = $({}), this.introController = e, this.videoController = n, this.length = e.offset + n.length, this.stream = i, this.bind()
			}
			return i.now = function() {
				return (new Date).getTime()
			}, i.prototype.positionInMain = function() {
				return Math.max(0, this.position - this.introController.offset)
			}, i.prototype.bind = function() {
				console.log("init");
				var e = this, t = $(this.stream);
				t.on("Scrub", $.proxy(this, "handleScrub")), t.on("JumpForward", $.proxy(this, "jumpForward")), t.on("JumpBack", $.proxy(this, "jumpBack")), t.on("SingleFrame", $.proxy(this, "singleFrame")), this.introController.setProgressCallback(function(t, n) {
					e.events.triggerHandler("progress", [n / e.length, n, e.length])
				}), this.videoController.setProgressCallback(function(t, n) {
					var i = n + e.introController.offset;
					e.events.triggerHandler("progress", [i / e.length, i, e.length])
				})
			}, i.prototype.handleScrub = function(t, n) {
				if (n = -n, !(this.position <= 0 && 0 >= n)) {
					this.targetFrame = null;
					var r = i.maxVelocity - i.minVelocity, o = .8 * n * r;
					Math.abs(o) < Math.abs(this.velocity) || (0 > o ? o -= i.minVelocity : o += i.minVelocity, this.velocity = e.Util.clamp(-i.maxVelocity, o, i.maxVelocity), this.lastDecay = null, this.lastInput = i.now(), requestAnimationFrame($.proxy(this, "start")))
				}
			}, i.prototype.decayVelocity = function(e) {
				if ("undefined" == typeof e && (e = i.now()), !this.lastDecay)
					return void (this.lastDecay = e);
				var r = (e - this.lastDecay) / (this.frameInterval() / t.TIME_SCALE);
				this.lastDecay = e, this.velocity = this.velocity * Math.pow(this.inertia, r), this.approachingKeyFrame && (this.velocity = n(this.velocity) ? (20 + this.velocity) / 2 : (-20 + this.velocity) / 2), this.keyframeCounter && e - this.lastInput > 400 && (this.velocity = 0, this.keyframeCounter = this.keyframeRepeat - 2)
			}, i.prototype.updatePosition = function(e) {
				var t = this;
				if ("undefined" == typeof e && (e = i.now()), !this.lastPosition)
					return void (this.lastPosition = e);
				var r = (e - this.lastPosition) / this.frameInterval();
				this.lastPosition = e;
				var o = Math.abs(this.velocity), a = 1 / 0, s = null, l = this.introController.offset;
				_.each(this.videoController.keyFrames, function(e) {
					var n = Math.abs(e + l - t.position);
					a = Math.min(a, n), a == n && (s = e)
				}), this.approachingKeyFrame = n(this.velocity) == n(s - this.positionInMain()) && 15 > a, o *= Math.min(a / 30 + .333333, 1), o = Math.max(o, i.minVelocity), this.velocity < 0 && (o = -o);
				var c = o / 30 * r;
				0 == Math.round(a) && this.keyframeCounter < this.keyframeRepeat && s > this.introController.offset ? (this.position = Math.round(this.position), this.keyframeCounter++) : this.keyframeCounter ? (this.position += this.velocity >= 0 ? 1 : -1, this.keyframeCounter = 0) : this.position = this.position + c, this.position <= 0 && this.velocity < 0 && (this.velocity = -1e-9, this.position = 0), $("#TEST_show_current_frame").text("FRAME " + redkiss.playhead.videoController.calculateCurrentFrame())
			}, i.prototype.updateVelocity = function(t) {
				this.velocity = e.Util.clamp(-i.maxVelocity, this.velocity + t, i.maxVelocity)
			}, i.prototype.playTo = function(e, t) {
				"undefined" == typeof t && (t = !0), 1 > e && (e = Math.round(e * (this.length - 1))), this.speedLimited = t, this.targetFrame = e, this.targetFromFrame = this.position, this.targetDistance = this.targetFrame - this.targetFromFrame, this.targetStartTime = i.now(), this.keyframeCounter = this.keyframeRepeat - 1
			}, i.prototype.start = function() {
				this.isRunning || (this.lastDecay = null, this.lastPosition = null, this.velocity || (this.velocity = i.minVelocity), this.step())
			}, i.prototype.stop = function() {
				return this.events.triggerHandler("stop", this.position)
			}, i.prototype.step = function() {
				var t = this;
				this.isRunning = !0;
				var r = i.now(), o = 0;
				if (null === this.targetFrame)
					this.decayVelocity(r);
				else {
					var a = this.position - this.targetFromFrame;
					o = a / this.targetDistance;
					var s = !0, l = Math.sqrt((Math.abs(this.velocity) - 12) / .6), c = Math.abs(this.position - this.targetFrame);
					1.7 * l >= c && (s = !1), this.velocity *= n(this.velocity) == n(this.targetFrame - this.position) ? s ? this.acceleration : this.deceleration : Math.abs(this.velocity) <= i.minVelocity ? -1 : this.braking, this.velocity = (n(this.velocity) ? 1 : -1) * e.Util.clamp(i.minVelocity, Math.abs(this.velocity), this.speedLimited ? 40 : 240)
				}
				this.position <= 0 && this.velocity < 0 && (this.velocity = 0), this.updatePosition(r), this.position = e.Util.clamp(0, this.position, this.length - 1), (this.velocity < 0 && this.position - this.targetFrame < 0 || this.velocity > 0 && this.position - this.targetFrame > 0) && null !== this.targetFrame && Math.abs(this.position - this.targetFrame) < 8 && (this.position = this.targetFrame, this.velocity = 0), this.seekTo(this.position), null === this.targetFrame && Math.abs(this.velocity) >= i.minVelocity && this.position >= 0 && this.position <= this.length - 1 ? requestAnimationFrame(function() {
					return t.step()
				}) : null !== this.targetFrame && Math.round(this.position) != this.targetFrame && 1 > o ? requestAnimationFrame(function() {
					return t.step()
				}) : (null !== this.targetFrame && (this.position = this.targetFrame, this.seekTo(this.position)), this.targetFrame = null, this.isRunning = !1, this.velocity = 0, this.events.triggerHandler("stop", this.position)), this.videoController.currentVelocity = this.velocity
			}, i.prototype.singleFrame = function(t, n) {
				this.isRunning || (0 > n ? this.position += 1 : this.position -= 1, this.position = e.Util.clamp(0, this.position, this.length - 1), this.seekTo(this.position))
			}, i.prototype.seekTo = function(e, t) {
				"undefined" == typeof t && (t = !1), this.position = e, this.position < this.introController.offset, this.position >= this.introController.offset ? (this.introController.seekTo(Math.min(this.position, this.introController.length - 1), !0), this.videoController.seekTo(this.positionInMain())) : (this.introController.seekTo(this.position), this.videoController.seekTo(this.positionInMain(), !0))
			}, i.prototype.getNextKeyFrame = function() {
				var e, t, n = 0;
				return this.positionInMain() >= 0 ? (t = this.videoController, n = this.introController.offset) : t = this.introController, e = this.videoController.nextKeyFrame() + this.introController.offset, e == this.introController.offset && (e = 0), [e, n, t]
			}, i.prototype.jumpForward = function() {
				var e = this.getNextKeyFrame();
				this.playTo(e[0]), e[2].upscale(Math.max(0, e[0] - e[1])), this.start()
			}, i.prototype.getPrevKeyFrame = function() {
				var e, t = 0;
				this.positionInMain() > 0 ? (e = this.videoController, t = this.introController.offset) : e = this.introController;
				var n = e.prevKeyFrame();
				return null === n ? null : (n += t, n == this.introController.offset && (n = 0), [n, t, e])
			}, i.prototype.jumpBack = function() {
				var e = this.getPrevKeyFrame();
				e && (this.playTo(e[0]), e[2].upscale(Math.max(0, e[0] - e[1])), this.start())
			}, i.maxVelocity = 40, i.minVelocity = 10, i
		}();
		t.Playhead = i
	}(e.Core || (e.Core = {})), e.Core
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		var n = function() {
			function t(e) {
				this.assetVersion = e
			}
			return t.prototype.loadConfig = function() {
				var t = this, n = $.Deferred(), i = this.loadMember("config_new.json"), r = this.loadMember("overlays_welcome.json"), o = this.loadMember("nav_colors.json");
				return e.Util.whenAll([i, r, o]).then(function(e, i, r) {
					e.overlays = i, e.navColors = r, e.path || (e.path = "assets/" + t.assetVersion), n.resolve(e)
				}), n
			}, t.prototype.loadMember = function(e) {
				var t = $.Deferred();
				return $.getJSON("assets/JSONs/" + e, function(e) {
					t.resolve(e)
				}), t
			}, t
		}();
		t.ConfigLoader = n
	}(e.Core || (e.Core = {})), e.Core
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		var n = function() {
			function t(e, t) {
				"undefined" == typeof t && (t = null), this.hash = null, this.startFrame = 0, this.isTinyScreen = !1, this.tinyScreenOffset = 6, this.windowInnerHeight = window.innerHeight, this.assetName = e, this.hash = t
			}
			return t.prototype.stateLoadConfig = function() {
				var t = this, n = new e.Core.ConfigLoader(this.assetName), i = $.Deferred();
				$(function() {
					i.resolve()
				}), e.Util.whenAll([n.loadConfig(), i]).then(function(e) {
					t.config = e, t.stateInit()
				})
			}, t.prototype.stateInit = function() {
				var t = this;
				this.viewport = new e.Interface.Viewport(16 / 9, document.getElementById("content")), this.isTinyScreen = e.Config.isMobile, this.stream = new e.Input.EventStream;
				var n = e.Video.ImageFrameSource;
				this.config.sourceClass && (n = e.Video[this.config.sourceClass]);
				var i = new n(this.config), r = new e.Video.Controller(i, this.viewport.el, this.config);
				r.hide();
				var o = new e.Interface.Intro(this.isTinyScreen ? this.tinyScreenOffset : 0);
				this.playhead = new e.Core.Playhead(o, r, this.stream), this.loader = new e.Interface.Loader($("#loader")[0]), this.overlays = new e.Interface.Overlays(this.config.overlays, this.config.sections, o.offset), this.scrollbar = new e.Interface.Scrollbar($(".scrollbar"), this.playhead), this.nav = new e.Interface.LocalNav($("#section-nav"), this.playhead, this.config.sections, o.offset, this.config.navColors);
				var a = "";
				if (this.hash) {
					var s = _.find(this.config.sections, function(e) {
						for (var n = !1, i = e[0].split(","), r = 0; r < i.length; r++)
							if (i[r].toLowerCase() == t.hash.toLowerCase()) {
								n = !0;
								break
							}
						return n
					});
					s && (this.startFrame = s[1] + this.playhead.introController.offset, a = s[3])
				}
				this.preloadAnimation = new e.Interface.PreloadAnimation($("#preloader"), this.hash), this.preloadAnimation.addClassString(a);
				var l = Math.max(0, this.startFrame - this.playhead.introController.offset), c = this.preloadLoaderElements(), u = i.loadFrame(l, !0);
				e.Util.whenAll([u, c]).then(function() {
					$("#loader").hide(), t.stateStartPreloading(), t.playhead.videoController.seekTo(l, !0), $(".viewport-inner").transition({opacity: 1,duration: 600})
				}), $(this).triggerHandler("init"), e.Config.isMobile && setInterval($.proxy(this, "testForIos7Resize"), 500)
			}, t.prototype.testForIos7Resize = function() {
				(90 == window.orientation || -90 == window.orientation) && this.windowInnerHeight != window.innerHeight && (this.windowInnerHeight = window.innerHeight, $(window).trigger("resize"), window.scrollTo(0, 0))
			}, t.prototype.preloadLoaderElements = function() {
				return this.preloadAnimation.loadElements()
			}, t.prototype.stateStartPreloading = function() {
				var e = this;
				this.playhead.introController.seekTo(this.isTinyScreen ? this.tinyScreenOffset : 0, !0), this.loader.events.on("loadProgress", $.proxy(this, "handleLoadProgress")), this.preloadAnimation.animationComplete.then(function() {
					e.stateAcceptingInput(), $("#section-nav").show()
				}), this.statePreloadWait()
			}, t.prototype.handleLoadProgress = function(e, t) {
				return this.preloadAnimation.advanceTo(t), 1 == t ? this.statePreloadFinal() : void 0
			}, t.prototype.statePreloadWait = function() {
				this.playhead.videoController.source.load(this.loader, this.startFrame)
			}, t.prototype.statePreloadFinal = function() {
			}, t.prototype.stateAcceptingInput = function() {
				var e = this;
				this.playhead.videoController.show(), this.playhead.events.on("progress", function(t, n, i, r) {
					e.nav.setProgress(i), e.overlays.setProgress(i), e.scrollbar.setProgress(i / r)
				}), this.hash ? ($(this.stream).one("muted", function() {
					$("#preloader").transition({top: "-1000px"}, 1e3, function() {
						$("#preloader").attr("class", "preloader")
					}), e.stream.acceptingInput = !0
				}), this.playhead.seekTo(this.startFrame), this.playhead.introController.seekTo(this.isTinyScreen ? this.tinyScreenOffset : 0, !0), this.scrollbar.setProgress(this.startFrame / this.playhead.length), this.nav.setProgress(this.startFrame)) : (this.stream.acceptingInput = !0, this.playhead.seekTo(this.isTinyScreen ? this.tinyScreenOffset : 0), this.scrollbar.setProgress(0), this.nav.setProgress(0)), $("body").on("click", "button.scroll-down", function(t) {
					t.preventDefault(), $(t.currentTarget).parents("nav").length || $(t.currentTarget).transition({opacity: 0}), e.playhead.jumpForward()
				}), $(".scrollbar").show().transition({opacity: 1,marginRight: 0}), $("#loader").remove(), $("#preloader").remove(), $("#jplayer_background").jPlayer("play"), redkiss.playhead.seekTo(0), redkiss.playhead.start(), redkiss.playhead.playTo(52), $(".btn_scrolldown").on("click", function() {
					redkiss.playhead.seekTo(52), redkiss.playhead.start(), redkiss.playhead.playTo(185)
				})
			}, t
		}();
		t.App = n
	}(e.Core || (e.Core = {})), e.Core
}(SH || (SH = {}));
var SH;
!function(e) {
	!function(t) {
		function n(e) {
			var t = e.match(/\?v=([-_\d\w]+)$/);
			return t && t[1] ? t[1] : null
		}
		var i = '<iframe src="//www.youtube.com/embed/__ID__?autoplay=1&controls=2&fs=1&modestbranding=1&rel=0&showinfo=1&color=white&enablejsapi=1" frameborder="0" allowfullscreen id="youtube_player"></iframe>', r = function() {
			function t(e) {
				this.currentOverlay = null, this.currentFlowplayerAPI = null, this.currentVideoAspectRatio = 0, this.isVideoPlaying = !1, this.overlayTemplate = $(e)
			}
			return t.prototype.openVideo = function(e) {
				window.location.href = e
			}, t.prototype.showVideo = function(t, r, o, a, s) {
				this.currentVideoAspectRatio = o / a, this.currentOverlay = $(".video-overlay").clone(!0).appendTo($("body"));
				var l = r;
				if (l) {
					var c = n(t), u = $(i.replace("__ID__", c));
					this.currentOverlay.find(".frame").append(u), new YT.Player("youtube_player", {events: {onReady: $.proxy(this, "onYouTubeVideoReady"),onStateChange: $.proxy(this, "onYouTubeVideoStateChange")}}), this.currentOverlay.find(".video_complete_menu").remove()
				} else {
					var d = t, p = this.currentOverlay.find(".video_complete_menu");
					$("#" + s + " .social").clone(!0).appendTo(p.find(".video_complete_share_buttons")), p.hide(), $(p).on("click", ".video_replay_link", $.proxy(this, "onVideoReplayClicked"));
					var h = !0;
					e.Config.isTablet && (h = !1);
					var f = "?url=" + d + "&aspect=" + this.currentVideoAspectRatio + "&autoplay=" + h, m = '<iframe id="videoplayer_iframe" src="video_player_iframe.html' + encodeURI(f) + '"';
					m += "mozallowfullscreen ", m += "webkitallowfullscreen ", m += "allowfullscreen ", m += 'scrolling="no" ', m += 'frameborder="0" ', m += "></iframe>", this.currentOverlay.find(".frame").append(m), this.isVideoPlaying = !0, this.checkVideoStatus()
				}
				return this.layoutVideoElements(), $(window).bind("resize", $.proxy(this, "onResize")), this.currentOverlay.css({display: "block"}).transition({opacity: 1}), this.currentOverlay
			}, t.prototype.onResize = function() {
				this.layoutVideoElements()
			}, t.prototype.onYouTubeVideoReady = function() {
			}, t.prototype.onYouTubeVideoStateChange = function(e) {
				var t = e.data;
				0 == t && this.hideVideo()
			}, t.prototype.checkVideoStatus = function() {
				var e = !0, t = document.getElementById("videoplayer_iframe");
				if (t) {
					var n = t.contentDocument || t.contentWindow.document, i = n.getElementById("video_status"), r = $(i).attr("data-current-status");
					"FINISHED" == r && (this.isVideoPlaying = !1, this.showVideoEndOverlay())
				}
				null == this.currentOverlay && (e = !1), this.isVideoPlaying || (e = !1), e && setTimeout($.proxy(this, "checkVideoStatus"), 200)
			}, t.prototype.layoutVideoElements = function() {
				var t, n, i = $(window);
				i.width() / i.height() < this.currentVideoAspectRatio ? (n = i.width() - 100, t = n / this.currentVideoAspectRatio) : (t = i.height() - 80, n = t * this.currentVideoAspectRatio), $(".video-overlay .frame").css({width: n,height: t}), $("#videoplayer_iframe").attr({width: n,height: t});
				var r = 121, o = 1050, a = n / o;
				e.Config.isMobile && (a *= 2), this.currentOverlay.find(".video_complete_menu_buttons").css({"-webkit-transform": "scale(" + a + ")","-ms-transform": "scale(" + a + ")","-moz-transform": "scale(" + a + ")","-o-transform": "scale(" + a + ")",transform: "scale(" + a + ")","margin-left": -r * a / 2,"margin-top": 70 * a})
			}, t.prototype.onVideoFinished = function() {
				this.isVideoPlaying = !1, this.currentOverlay.find(".fp-ui").hide(), this.currentOverlay.find(".video_complete_menu").fadeIn()
			}, t.prototype.onVideoReplayClicked = function(e) {
				e.preventDefault();
				var t = document.getElementById("videoplayer_iframe");
				t.contentWindow.replayVideo(), this.hideVideoEndOverlay(), this.isVideoPlaying = !0, this.checkVideoStatus()
			}, t.prototype.showVideoEndOverlay = function() {
				this.currentOverlay.find(".video_complete_menu").fadeIn()
			}, t.prototype.hideVideoEndOverlay = function() {
				this.currentOverlay.find(".video_complete_menu").hide()
			}, t.prototype.hideVideo = function() {
				var e = this, t = $.Deferred();
				return $(".video_replay_link").off("click", $.proxy(this, "onVideoReplayClicked")), $(window).unbind("resize", $.proxy(this, "onResize")), this.currentOverlay.transition({opacity: 0}, function() {
					$("#videoplayer_iframe-player").attr("src", "about:blank"), $("#videoplayer_iframe").remove(), e.currentOverlay.remove(), e.currentOverlay = null, t.resolve()
				}), t
			}, t
		}();
		t.VideoViewer = r
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));
var SH;
if (function(e) {
	!function(e) {
		var t = function() {
			function e() {
				$(".static *[id]").each(function() {
					$(this).clone().appendTo("#content").hide(), $(this).attr({id: ""})
				}), Modernizr.hasEvent("touchstart") || $(".static").hide()
			}
			return e
		}();
		e.StaticFallback = t
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {})), MobileEsp.DetectTierIphone() ? $("html").addClass("mobile") : MobileEsp.DetectTierTablet() && $("html").addClass("tablet"), $("html").hasClass("oldie") || $(".browser-prompt").remove(), $("html").hasClass("oldie"))
	throw $(".viewport").hide(), $(".rotation-prompt").remove(), $(".static").show(), $(".video-link").each(function(e, t) {
		$(t).attr("href"), parseInt($(t).attr("data-video-width")), parseInt($(t).attr("data-video-height")), $(t).attr("target", "_blank")
	}), "old browser";
var isMobileEnabled = !0;
if ($("html").hasClass("mobile") && !isMobileEnabled)
	throw $(".viewport").hide(), $(".rotation-prompt").remove(), $(".static").show(), "mobile disabled";
var SH;
!function(e) {
	!function(e) {
		e.hiResOnPause = !0, e.hiResDelay = 200, e.AFramesOnly = !1, e.isFirefox = !!navigator.userAgent.match(/Firefox/i), e.transitionEasing = "ease", e.hasTransitions = !0, e.isMobile = $("html").hasClass("mobile"), e.isTablet = $("html").hasClass("tablet"), e.isIE = -1 != navigator.userAgent.indexOf("MSIE") || -1 != navigator.userAgent.toLowerCase().indexOf("trident"), e.showMobileStories = !1
	}(e.Config || (e.Config = {})), e.Config
}(SH || (SH = {})), Modernizr.hasEvent("touchstart") && (SH.Config.AFramesOnly = !0), $.support.transition || ($.fn.transition = $.fn.animate, SH.Config.transitionEasing = "swing", SH.Config.hasTransitions = !1);
var SH;
!function(e) {
	!function(t) {
		t.loader, t.controller, t.playhead, t.overlays, t.scrollbar, t.nav;
		var n = "FINAL_W_MOBILE", i = (location.search.match(/a(?:sset_version)?=([^&]+)/) || [])[1] || n, r = null, o = (location.search.match(/p?=([^&]+)/) || [])[1] || r, a = location.hash.replace("#", "") || o;
		new e.Interface.StaticFallback, t.app = new e.Core.App(i, a), t.app.stateLoadConfig();
		var s = new e.Interface.VideoViewer($(".video-overlay"));
		$(".viewport-inner").on("click", ".video-link", function(t) {
			t.preventDefault();
			var n = e.Config.isMobile, i = (-1 != navigator.userAgent.toLowerCase().indexOf("android"), !1);
			if (n && i)
				s.openVideo($(t.currentTarget).attr("href"));
			else {
				var r;
				s.currentOverlay ? r = s.hideVideo() : (r = $.Deferred(), r.resolve()), r.then(function() {
					var e = $(t.currentTarget);
					s.showVideo(e.attr("href"), "true" == e.attr("data-is-youtube"), parseInt(e.attr("data-video-width")), parseInt(e.attr("data-video-height")), e.attr("data-video-share-parent"))
				})
			}
		}), $(".video-overlay .mask, .video-overlay .close-button").on("click", function(e) {
			e.preventDefault(), s.hideVideo()
		}), $(t.app).on("init", function() {
		})
	}(e.Main || (e.Main = {})), e.Main
}(SH || (SH = {})), window.redkiss = SH.Main.app;
var SH;
!function(e) {
	!function(e) {
		!function(e) {
			function t(e) {
				return i.ready ? void FB.ui({method: "feed",name: e.title,link: e.link || "",description: e.description,picture: e.picture || "",caption: e.caption || ""}) : void $(i).on("fb_ready", function() {
					return t(e)
				})
			}
			var n = "189125344611876";
			-1 != window.location.host.indexOf("assemblyltd") && (n = "499118600204357");
			var i = {SDK: null,ready: !1,onFBinit: function() {
					window.FB.init({appId: n,status: !1,cookie: !0,xfbml: !1}), window.FB.Event.subscribe("edge.create", _.bind(this.onFBLike, this)), window.FB.Event.subscribe("comment.create", _.bind(this.onFBComment, this)), this.SDK = window.FB, this.ready = !0, $(this).triggerHandler("fb_ready")
				},onFBComment: function(e) {
					this.trigger("fb_comment", e)
				},onFBLike: function(e) {
					this.trigger("fb_like", e)
				}};
			window.fbAsyncInit = _.bind(i.onFBinit, i), function(e) {
				var t, n = "facebook-jssdk";
				e.getElementById(n) || (t = e.createElement("script"), t.id = n, t.async = !0, t.src = "https://connect.facebook.net/en_US/all.js", e.getElementsByTagName("head")[0].appendChild(t))
			}(document), e.share = t, $(function() {
				$("body").on("click", "a.facebook-share", function(e) {
					e.preventDefault();
					var n = $(e.currentTarget), i = {title: n.attr("data-share-title"),description: n.attr("data-share-description"),link: n.attr("href"),picture: n.attr("data-share-picture"),caption: n.attr("data-share-caption")};
					t(i)
				})
			})
		}(e.Facebook || (e.Facebook = {})), e.Facebook
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {})), function() {
	function e(e) {
		e = e || window.event;
		for (var s, l, c, u = e.target || e.srcElement; u && "a" !== u.nodeName.toLowerCase(); )
			u = u.parentNode;
		u && "a" === u.nodeName.toLowerCase() && u.href && (s = u.href.match(t), s && (l = Math.round(a / 2 - i / 2), c = 0, o > r && (c = Math.round(o / 2 - r / 2)), window.open(u.href, "intent", n + ",width=" + i + ",height=" + r + ",left=" + l + ",top=" + c), e.returnValue = !1, e.preventDefault && e.preventDefault()))
	}
	if (!window.__twitterIntentHandler) {
		var t = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/, n = "scrollbars=yes,resizable=yes,toolbar=no,location=yes", i = 550, r = 420, o = screen.height, a = screen.width;
		document.addEventListener ? document.addEventListener("click", e, !1) : document.attachEvent && document.attachEvent("onclick", e), window.__twitterIntentHandler = !0
	}
}();
var SH;
!function(e) {
	!function(e) {
		!function(e) {
			function t() {
				var t = $("#social-template");
				_.each(n, function(n, i) {
					var r = t.clone().attr({id: ""}), o = n.title || $(i + "_TITLE h1").text(), a = n.description || $(i + " p").first().text(), s = n.caption || $(i.replace(/_POSTER/, "_PRODUCT")).text(), l = n.twitter || encodeURIComponent(o.replace(/[\r\n\s\t]+/g, " ")), c = "https://twitter.com/intent/tweet?url=" + e.SITE_ROOT + encodeURIComponent(n.link) + "&text=" + l;
					r.find(".f").attr({"data-share-title": o,"data-share-picture": e.MEDIA_ROOT + n.picture,"data-share-caption": s,"data-share-description": a,href: e.SITE_ROOT + n.link}), r.find(".t").attr({href: c}), $(i).find(".poster-content").append(r.show())
				})
			}
			e.SITE_ROOT = "", e.MEDIA_ROOT = "./";
			var n = {};
			$(t)
		}(e.Social || (e.Social = {})), e.Social
	}(e.Interface || (e.Interface = {})), e.Interface
}(SH || (SH = {}));

