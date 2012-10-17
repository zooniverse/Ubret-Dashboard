(function() {
    var e = {
        version: "0.7.4.0",
        isUndefined: function(a) {
            return a === undefined
        },
        isNull: function(a) {
            return a === null
        },
        isNullOrUndefined: function(a) {
            return a === null || a === undefined
        },
        isValue: function(a) {
            return a !== null && a !== undefined
        }
    },
    g = false,
    a = [];
    function d(b) {
        a ? a.push(b) : setTimeout(b, 0)
        }
    function b() {
        if (a) {
            var c = a;
            a = null;
            for (var b = 0, d = c.length; b = 0 || a.indexOf("e") >= 0 || a.endsWith("f") || a.endsWith("F") ? parseFloat(a) : parseInt(a, 10)
            };
        Number.prototype.format = function(a) {
            return ss.isNullOrUndefined(a) || a.length == 0 || a == "i" ? this.toString() : this._netFormat(a, false)
            };
        Number.prototype.localeFormat = function(a) {
            return ss.isNullOrUndefined(a) || a.length == 0 || a == "i" ? this.toLocaleString() : this._netFormat(a, true)
            };
        Number._commaFormat = function(a, i, n, o) {
            var c = null,
            h = a.indexOf(n);
            if (h > 0) {
                c = a.substr(h);
                a = a.substr(0, h)
                }
            var j = a.startsWith("-");
            if (j)
                a = a.substr(1);
            var f = 0,
            g = i[f];
            if (a.length1)
                c = parseInt(f.substr(1));
            var e = f.charAt(0);
            switch (e) {
            case "d":
            case "D":
                a = parseInt(Math.abs(this)).toString();
                if (c != -1)
                    a = a.padLeft(c, "0");
                if (this < 0)
                    a = "-" + a;
                break;
            case "x":
            case "X":
                a = parseInt(Math.abs(this)).toString(16);
                if (e == "X")
                    a = a.toUpperCase();
                if (c != -1)
                    a = a.padLeft(c, "0");
                break;
            case "e":
            case "E":
                if (c == -1)
                    a = this.toExponential();
                else
                    a = this.toExponential(c);
                if (e == "E")
                    a = a.toUpperCase();
                break;
            case "f":
            case "F":
            case "n":
            case "N":
                if (c == -1)
                    c = b.numberDecimalDigits;
                a = this.toFixed(c).toString();
                if (c && b.numberDecimalSeparator != ".") {
                    var d = a.indexOf(".");
                    a = a.substr(0, d) + b.numberDecimalSeparator + a.substr(d + 1)
                    }
                if (e == "n" || e == "N")
                    a = Number._commaFormat(a, b.numberGroupSizes, b.numberDecimalSeparator, b.numberGroupSeparator);
                break;
            case "c":
            case "C":
                if (c == -1)
                    c = b.currencyDecimalDigits;
                a = Math.abs(this).toFixed(c).toString();
                if (c && b.currencyDecimalSeparator != ".") {
                    var d = a.indexOf(".");
                    a = a.substr(0, d) + b.currencyDecimalSeparator + a.substr(d + 1)
                    }
                a = Number._commaFormat(a, b.currencyGroupSizes, b.currencyDecimalSeparator, b.currencyGroupSeparator);
                if (this < 0)
                    a = String.format(b.currencyNegativePattern, a);
                else
                    a = String.format(b.currencyPositivePattern, a);
                break;
            case "p":
            case "P":
                if (c == -1)
                    c = b.percentDecimalDigits;
                a = (Math.abs(this) * 100).toFixed(c).toString();
                if (c && b.percentDecimalSeparator != ".") {
                    var d = a.indexOf(".");
                    a = a.substr(0, d) + b.percentDecimalSeparator + a.substr(d + 1)
                    }
                a = Number._commaFormat(a, b.percentGroupSizes, b.percentDecimalSeparator, b.percentGroupSeparator);
                if (this < 0)
                    a = String.format(b.percentNegativePattern, a);
                else
                    a = String.format(b.percentPositivePattern, a)
                }
            return a
        };
        String.__typeName = "String";
        String.Empty = "";
        String.compare = function(a, b, c) {
            if (c) {
                if (a)
                    a = a.toUpperCase();
                if (b)
                    b = b.toUpperCase()
                }
            a = a || "";
            b = b || "";
            return a == b ? 0: athis.length ? false: this.substr(this.length - a.length) == a
        };
        String.equals = function(b, c, a) {
            return String.compare(b, c, a) == 0
        };
        String._format = function(b, c, a) {
            if (!String._formatRE)
                String._formatRE = /(\{[^\}^\{]+\})/g;
            return b.replace(String._formatRE, function(h, d) {
                var g = parseInt(d.substr(1)),
                b = c[g + 1];
                if (ss.isNullOrUndefined(b))
                    return "";
                if (b.format) {
                    var e = null,
                    f = d.indexOf(":");
                    if (f > 0)
                        e = d.substring(f + 1, d.length - 1);
                    return a ? b.localeFormat(e) : b.format(e)
                    } else
                    return a ? b.toLocaleString() : b.toString()
                })
            };
        String.format = function(a) {
            return String._format(a, arguments, false)
            };
        String.fromChar = function(a, d) {
            for (var c = a, b = 1; b = b)
                d = b - 1;
            for (var c = a; c <= d; c++)
                if (f.indexOf(this.charAt(c)) >= 0)
                return c;
            return - 1
        };
        String.prototype.insert = function(a, b) {
            if (!b)
                return this;
            if (!a)
                return b + this;
            var c = this.substr(0, a),
            d = this.substr(a);
            return c + b + d
        };
        String.isNullOrEmpty = function(a) {
            return ! a || !a.length
        };
        String.prototype.lastIndexOfAny = function(f, a, e) {
            var d = this.length;
            if (!d)
                return - 1;
            a = a || d - 1;
            e = e || d;
            var c = a - e + 1;
            if (c < 0)
                c = 0;
            for (var b = a; b >= c; b--)
                if (f.indexOf(this.charAt(b)) >= 0)
                return b;
            return - 1
        };
        String.localeFormat = function(a) {
            return String._format(a, arguments, true)
            };
        String.prototype.padLeft = function(b, a) {
            if (this.lengththis.length ? this.substr(0, a) : this.substr(0, a) + this.substr(a + b)
            };
        String.prototype.replaceAll = function(b, a) {
            a = a || "";
            return this.split(b).join(a)
            };
        String.prototype.startsWith = function(a) {
            return ! a.length ? true: a.length > this.length ? false: this.substr(0, a.length) == a
        };
        if (!String.prototype.trim)
            String.prototype.trim = function() {
            return this.trimEnd().trimStart()
            };
        String.prototype.trimEnd = function() {
            return this.replace(/\s*$/, "")
            };
        String.prototype.trimStart = function() {
            return this.replace(/^\s*/, "")
            };
        Array.__typeName = "Array";
        Array.__interfaces = [ss.IEnumerable];
        Array.prototype.add = function(a) {
            this[this.length] = a
        };
        Array.prototype.addRange = function(a) {
            this.push.apply(this, a)
            };
        Array.prototype.aggregate = function(b, c, d) {
            for (var e = this.length, a = 0; a = 0
        };
        Array.prototype.dequeue = function() {
            return this.shift()
            };
        Array.prototype.enqueue = function(a) {
            this._queue = true;
            this.push(a)
            };
        Array.prototype.peek = function() {
            if (this.length) {
                var a = this._queue ? 0: this.length - 1;
                return this[a]
                }
            return null
        };
        if (!Array.prototype.every)
            Array.prototype.every = function(b, c) {
            for (var d = this.length, a = 0; a = 0) {
                this.splice(a, 1);
                return true
            }
            return false
        };
        Array.prototype.removeAt = function(a) {
            this.splice(a, 1)
            };
        Array.prototype.removeRange = function(b, a) {
            return this.splice(b, a)
            };
        if (!Array.prototype.some)
            Array.prototype.some = function(b, c) {
            for (var d = this.length, a = 0; a1) {
                var c = a.substring(1, b),
                d = a.substr(b + 1);
                return new RegExp(c, d)
                }
        }
        return null
    };
    Date.__typeName = "Date";
    Date.empty = null;
    Date.get_now = function() {
        return new Date
    };
    Date.get_today = function() {
        var a = new Date;
        return new Date(a.getFullYear(), a.getMonth(), a.getDate())
        };
    Date.isEmpty = function(a) {
        return a === null || a.valueOf() === 0
    };
    Date.prototype.format = function(a) {
        return ss.isNullOrUndefined(a) || a.length == 0 || a == "i" ? this.toString() : a == "id" ? this.toDateString() : a == "it" ? this.toTimeString() : this._netFormat(a, false)
        };
    Date.prototype.localeFormat = function(a) {
        return ss.isNullOrUndefined(a) || a.length == 0 || a == "i" ? this.toLocaleString() : a == "id" ? this.toLocaleDateString() : a == "it" ? this.toLocaleTimeString() : this._netFormat(a, true)
        };
    Date.prototype._netFormat = function(d, i) {
        var b = this,
        c = i ? ss.CultureInfo.CurrentCulture.dateFormat: ss.CultureInfo.InvariantCulture.dateFormat;
        if (d.length == 1)
            switch (d) {
        case "f":
            d = c.longDatePattern + " " + c.shortTimePattern;
            break;
        case "F":
            d = c.dateTimePattern;
            break;
        case "d":
            d = c.shortDatePattern;
            break;
        case "D":
            d = c.longDatePattern;
            break;
        case "t":
            d = c.shortTimePattern;
            break;
        case "T":
            d = c.longTimePattern;
            break;
        case "g":
            d = c.shortDatePattern + " " + c.shortTimePattern;
            break;
        case "G":
            d = c.shortDatePattern + " " + c.longTimePattern;
            break;
        case "R":
        case "r":
            c = ss.CultureInfo.InvariantCulture.dateFormat;
            d = c.gmtDateTimePattern;
            break;
        case "u":
            d = c.universalDateTimePattern;
            break;
        case "U":
            d = c.dateTimePattern;
            b = new Date(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes(), b.getUTCSeconds(), b.getUTCMilliseconds());
            break;
        case "s":
            d = c.sortableDateTimePattern
        }
        if (d.charAt(0) == "%")
            d = d.substr(1);
        if (!Date._formatRE)
            Date._formatRE = /'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g;
        var g = Date._formatRE,
        h = new ss.StringBuilder;
        g.lastIndex = 0;
        while (true) {
            var j = g.lastIndex,
            f = g.exec(d);
            h.append(d.slice(j, f ? f.index: d.length));
            if (!f)
                break;
            var e = f[0],
            a = e;
            switch (e) {
            case "dddd":
                a = c.dayNames[b.getDay()];
                break;
            case "ddd":
                a = c.shortDayNames[b.getDay()];
                break;
            case "dd":
                a = b.getDate().toString().padLeft(2, "0");
                break;
            case "d":
                a = b.getDate();
                break;
            case "MMMM":
                a = c.monthNames[b.getMonth()];
                break;
            case "MMM":
                a = c.shortMonthNames[b.getMonth()];
                break;
            case "MM":
                a = (b.getMonth() + 1).toString().padLeft(2, "0");
                break;
            case "M":
                a = b.getMonth() + 1;
                break;
            case "yyyy":
                a = b.getFullYear();
                break;
            case "yy":
                a = (b.getFullYear() % 100).toString().padLeft(2, "0");
                break;
            case "y":
                a = b.getFullYear() % 100;
                break;
            case "h":
            case "hh":
                a = b.getHours() % 12;
                if (!a)
                    a = "12";
                else if (e == "hh")
                    a = a.toString().padLeft(2, "0");
                break;
            case "HH":
                a = b.getHours().toString().padLeft(2, "0");
                break;
            case "H":
                a = b.getHours();
                break;
            case "mm":
                a = b.getMinutes().toString().padLeft(2, "0");
                break;
            case "m":
                a = b.getMinutes();
                break;
            case "ss":
                a = b.getSeconds().toString().padLeft(2, "0");
                break;
            case "s":
                a = b.getSeconds();
                break;
            case "t":
            case "tt":
                a = b.getHours() < 12 ? c.amDesignator: c.pmDesignator;
                if (e == "t")
                    a = a.charAt(0);
                break;
            case "fff":
                a = b.getMilliseconds().toString().padLeft(3, "0");
                break;
            case "ff":
                a = b.getMilliseconds().toString().padLeft(3).substr(0, 2);
                break;
            case "f":
                a = b.getMilliseconds().toString().padLeft(3).charAt(0);
                break;
            case "z":
                a = b.getTimezoneOffset() / 60;
                a = (a >= 0 ? "-": "+") + Math.floor(Math.abs(a));
                break;
            case "zz":
            case "zzz":
                a = b.getTimezoneOffset() / 60;
                a = (a >= 0 ? "-": "+") + Math.floor(Math.abs(a)).toString().padLeft(2, "0");
                if (e == "zzz")
                    a += c.timeSeparator + Math.abs(b.getTimezoneOffset() % 60).toString().padLeft(2, "0");
                break;
            default:
                if (a.charAt(0) == "'")
                    a = a.substr(1, a.length - 2).replace(/\\'/g, "'")
                }
            h.append(a)
            }
        return h.toString()
        };
    Date.parseDate = function(a) {
        return new Date(Date.parse(a))
        };
    Error.__typeName = "Error";
    Error.prototype.popStackFrame = function() {
        if (ss.isNullOrUndefined(this.stack) || ss.isNullOrUndefined(this.fileName) || ss.isNullOrUndefined(this.lineNumber))
            return;
        var a = this.stack.split("\n"),
        c = a[0],
        e = this.fileName + ":" + this.lineNumber;
        while (!ss.isNullOrUndefined(c) && c.indexOf(e) === -1) {
            a.shift();
            c = a[0]
            }
        var d = a[1];
        if (isNullOrUndefined(d))
            return;
        var b = d.match(/@(.*):(\d+)$/);
        if (ss.isNullOrUndefined(b))
            return;
        a.shift();
        this.stack = a.join("\n");
        this.fileName = b[1];
        this.lineNumber = parseInt(b[2])
        };
    Error.createError = function(e, b, c) {
        var a = new Error(e);
        if (b)
            for (var d in b)
            a[d] = b[d];
        if (c)
            a.innerException = c;
        a.popStackFrame();
        return a
    };
    ss.Debug = window.Debug || function() {};
    ss.Debug.__typeName = "Debug";
    if (!ss.Debug.writeln)
        ss.Debug.writeln = function(a) {
        if (window.console) {
            if (window.console.debug) {
                window.console.debug(a);
                return
            } else if (window.console.log) {
                window.console.log(a);
                return
            }
        } else if (window.opera && window.opera.postError) {
            window.opera.postError(a);
            return
        }
    };
    ss.Debug._fail = function(a) {
        ss.Debug.writeln(a);
        eval("debugger;")
        };
    ss.Debug.assert = function(b, a) {
        if (!b) {
            a = "Assert failed: " + a;
            confirm(a + "\r\n\r\nBreak into debugger?") && ss.Debug._fail(a)
            }
    };
    ss.Debug.fail = function(a) {
        ss.Debug._fail(a)
        };
    window.Type = Function;
    Type.__typeName = "Type";
    window.__Namespace = function(a) {
        this.__typeName = a
    };
    __Namespace.prototype = {
        __namespace: true,
        getName: function() {
            return this.__typeName
        }
    };
    Type.registerNamespace = function(e) {
        if (!window.__namespaces)
            window.__namespaces = {};
        if (!window.__rootNamespaces)
            window.__rootNamespaces = [];
        if (window.__namespaces[e])
            return;
        for (var c = window, d = e.split("."), a = 0; a0 ? a.substr(b + 1) : a
    };
    Type.prototype.getInterfaces = function() {
        return this.__interfaces
    };
    Type.prototype.isInstanceOfType = function(a) {
        if (ss.isNullOrUndefined(a))
            return false;
        if (this == Object || a instanceof this)
            return true;
        var b = Type.getInstanceType(a);
        return this.isAssignableFrom(b)
        };
    Type.prototype.isAssignableFrom = function(c) {
        if (this == Object || this == c)
            return true;
        if (this.__class) {
            var a = c.__baseType;
            while (a) {
                if (this == a)
                    return true;
                a = a.__baseType
            }
        } else if (this.__interface) {
            var b = c.__interfaces;
            if (b && b.contains(this))
                return true;
            var a = c.__baseType;
            while (a) {
                b = a.__interfaces;
                if (b && b.contains(this))
                    return true;
                a = a.__baseType
            }
        }
        return false
    };
    Type.isClass = function(a) {
        return a.__class == true
    };
    Type.isEnum = function(a) {
        return a.__enum == true
    };
    Type.isFlags = function(a) {
        return a.__enum == true && a.__flags == true
    };
    Type.isInterface = function(a) {
        return a.__interface == true
    };
    Type.isNamespace = function(a) {
        return a.__namespace == true
    };
    Type.canCast = function(a, b) {
        return b.isInstanceOfType(a)
        };
    Type.safeCast = function(a, b) {
        return b.isInstanceOfType(a) ? a: null
    };
    Type.getInstanceType = function(b) {
        var a = null;
        try {
            a = b.constructor
        } catch(c) {}
        if (!a || !a.__typeName)
            a = Object;
        return a
    };
    Type.getType = function(a) {
        if (!a)
            return null;
        if (!Type.__typeCache)
            Type.__typeCache = {};
        var b = Type.__typeCache[a];
        if (!b) {
            b = eval(a);
            Type.__typeCache[a] = b
        }
        return b
    };
    Type.parse = function(a) {
        return Type.getType(a)
        };
    ss.Delegate = function() {};
    ss.Delegate.registerClass("Delegate");
    ss.Delegate.empty = function() {};
    ss.Delegate._contains = function(b, d, c) {
        for (var a = 0; athis.$3) {
            this.$0 = this.$1;
        }
        return true;
    }
    return this.$0;
},
set_state: function(value) {
    this.$2 = new Date(1990, 0, 0, 0, 0, 0, 0);
    this.$0 = value;
    this.$1 = this.$0;
    return value;
},
$1: false,
get_targetState: function() {
    return this.$1;
},
set_targetState: function(value) {
    if (this.$1 !== value) {
        this.$2 = Date.get_now();
        this.$1 = value;
    }
    return value;
},
get_opacity: function() {
    if (this.$1 !== this.$0) {
        var $0 = Date.get_now() - this.$2;
        if ($0 > this.$3) {
            this.$0 = this.$1;
        } else {
            var $1 = ($0 / this.$3);
            return (this.$1) ? $1: 1 - $1;
        }
    }
    return (this.$0) ? 1: 0;
},
$2: null,
$3: 0,
get_delayTime: function() {
    return this.$3;
},
set_delayTime: function(value) {
    this.$3 = value;
    return value;
}
}
wwtlib.CameraParameters = function() {
    this.zoom = 360;
    this.viewTarget = new wwtlib.Vector3d();
}
wwtlib.CameraParameters.create = function(lat, lng, zoom, rotation, angle, opactity) {
    var $0 = new wwtlib.CameraParameters();
    $0.lat = lat;
    $0.lng = lng;
    $0.zoom = zoom;
    $0.rotation = rotation;
    $0.angle = angle;
    $0.raDec = false;
    $0.opacity = opactity;
    $0.viewTarget = wwtlib.Vector3d.create(0, 0, 0);
    $0.target = 20;
    return $0;
}
wwtlib.CameraParameters.logN = function(num, b) {
    return Math.log(num) / Math.log(b);
}
wwtlib.CameraParameters.sinh = function(v) {
    return (Math.exp(v) - Math.exp( - v)) / 2;
}
wwtlib.CameraParameters.interpolate = function(from, to, alphaIn, easeIn, fastDirectionMove) {
    var $0 = new wwtlib.CameraParameters();
    var $1 = (easeIn) ? wwtlib.CameraParameters.easeCurve(alphaIn) : alphaIn;
    var $2 = Math.min(1, alphaIn * 2);
    var $3 = (easeIn) ? wwtlib.CameraParameters.easeCurve($2) : $2;
    $0.angle = to.angle * $1 + from.angle * (1 - $1);
    $0.rotation = to.rotation * $1 + from.rotation * (1 - $1);
    if (fastDirectionMove) {
        $0.lat = to.lat * $3 + from.lat * (1 - $3);
        $0.lng = to.lng * $3 + from.lng * (1 - $3);
    } else {
        $0.lat = to.lat * $1 + from.lat * (1 - $1);
        $0.lng = to.lng * $1 + from.lng * (1 - $1);
    }
    $0.zoom = Math.pow(2, wwtlib.CameraParameters.logN(to.zoom, 2) * $1 + wwtlib.CameraParameters.logN(from.zoom, 2) * (1 - $1));
    $0.opacity = (to.opacity * $1 + from.opacity * (1 - $1));
    $0.viewTarget = wwtlib.Vector3d.lerp(from.viewTarget, to.viewTarget, $1);
    if (to.target === from.target) {
        $0.target = to.target;
    } else {
        $0.target = 20;
    }
    return $0;
}
wwtlib.CameraParameters.easeCurve = function(alpha) {
    if (alpha < 0.5) {
        return wwtlib.CameraParameters.sinh(alpha / 0.1085712344) / 100;
    } else {
        return 1 - (wwtlib.CameraParameters.sinh((1 - alpha) / 0.1085712344) / 100);
    }
}
wwtlib.CameraParameters.prototype = {
    lat: 0,
    lng: 0,
    zoom: 0,
    rotation: 0,
    angle: 0,
    raDec: false,
    opacity: 0,
    viewTarget: null,
    target: 0,
    copy: function() {
        var $0 = new wwtlib.CameraParameters();
        $0.lat = this.lat;
        $0.lng = this.lng;
        $0.zoom = this.zoom;
        $0.rotation = this.rotation;
        $0.angle = this.angle;
        $0.raDec = this.raDec;
        $0.opacity = this.opacity;
        $0.viewTarget = this.viewTarget.copy();
        $0.target = this.target;
        return $0;
    },
    get_RA: function() {
        return ((((180 - (this.lng - 180)) / 360) * 24) % 24);
    },
    set_RA: function(value) {
        this.lng = 180 - (value / 24 * 360) - 180;
        this.raDec = true;
        return value;
    },
    get_dec: function() {
        return this.lat;
    },
    set_dec: function(value) {
        this.lat = value;
        return value;
    },
    equals: function(obj) {
        if (Type.canCast(obj, wwtlib.CameraParameters)) {
            var $0 = obj;
            if (Math.abs($0.angle - this.angle) > 0.01 || Math.abs($0.lat - this.lat) > ($0.zoom / 10000) || Math.abs($0.get_RA() - this.get_RA()) > ($0.zoom / 1000) || Math.abs($0.rotation - this.rotation) > 0.1 || Math.abs($0.zoom - this.zoom) > (Math.abs($0.zoom) / 1000)) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }
}
wwtlib.Color = function() {}
wwtlib.Color.fromArgb = function(a, r, g, b) {
    var $0 = new wwtlib.Color();
    $0.a = a;
    $0.r = r;
    $0.g = g;
    $0.b = b;
    return $0;
}
wwtlib.Color.fromName = function(name) {
    var $0 = new wwtlib.Color();
    $0.a = 255;
    $0.r = 255;
    $0.g = 255;
    $0.b = 255;
    $0.name = name;
    return $0;
}
wwtlib.Color.load = function(color) {
    var $0 = 255,
    $1 = 255,
    $2 = 255,
    $3 = 255;
    var $4 = color.split(':');
    if ($4.length === 5) {
        $0 = parseInt($4[1]);
        $1 = parseInt($4[2]);
        $2 = parseInt($4[3]);
        $3 = parseInt($4[4]);
    } else if ($4.length === 2) {
        return wwtlib.Color.fromName($4[1].toLowerCase());
    }
    return wwtlib.Color.fromArgb($0, $1, $2, $3);
}
wwtlib.Color.prototype = {
    a: 255,
    b: 255,
    g: 255,
    r: 255,
    name: '',
    toString: function() {
        if (String.isNullOrEmpty(this.name)) {
            return String.format('#{0}{1}{2}', wwtlib._Util.$9(this.r), wwtlib._Util.$9(this.g), wwtlib._Util.$9(this.b));
        } else {
            return this.name;
        }
    }
}
wwtlib.Colors = function() {}
wwtlib.Colors.get_black = function() {
    return wwtlib.Color.fromArgb(255, 0, 0, 0);
}
wwtlib.Colors.get_blue = function() {
    return wwtlib.Color.fromArgb(255, 0, 0, 255);
}
wwtlib.Colors.get_brown = function() {
    return wwtlib.Color.fromArgb(255, 165, 42, 42);
}
wwtlib.Colors.get_cyan = function() {
    return wwtlib.Color.fromArgb(255, 0, 255, 255);
}
wwtlib.Colors.get_darkGray = function() {
    return wwtlib.Color.fromArgb(255, 169, 169, 169);
}
wwtlib.Colors.get_gray = function() {
    return wwtlib.Color.fromArgb(255, 128, 128, 128);
}
wwtlib.Colors.get_green = function() {
    return wwtlib.Color.fromArgb(255, 0, 255, 0);
}
wwtlib.Colors.get_lightGray = function() {
    return wwtlib.Color.fromArgb(255, 211, 211, 211);
}
wwtlib.Colors.get_magenta = function() {
    return wwtlib.Color.fromArgb(255, 255, 0, 255);
}
wwtlib.Colors.get_orange = function() {
    return wwtlib.Color.fromArgb(255, 255, 165, 0);
}
wwtlib.Colors.get_purple = function() {
    return wwtlib.Color.fromArgb(255, 128, 0, 128);
}
wwtlib.Colors.get_red = function() {
    return wwtlib.Color.fromArgb(255, 255, 0, 0);
}
wwtlib.Colors.get_transparent = function() {
    return wwtlib.Color.fromArgb(0, 255, 255, 255);
}
wwtlib.Colors.get_white = function() {
    return wwtlib.Color.fromArgb(255, 255, 255, 255);
}
wwtlib.Colors.get_yellow = function() {
    return wwtlib.Color.fromArgb(255, 255, 255, 0);
}
wwtlib.Constellations = function() {}
wwtlib.Constellations.createBasic = function(name) {
    var $0 = new wwtlib.Constellations();
    $0.$0 = name;
    $0.$3 = null;
    $0.lines = [];
    var $enum1 = ss.IEnumerator.getEnumerator(Object.keys(wwtlib.Constellations.fullNames));
    while ($enum1.moveNext()) {
        var $1 = $enum1.current;
        $0.lines.add(new wwtlib.Lineset($1));
    }
    return $0;
}
wwtlib.Constellations.create = function(name, url, boundry, noInterpollation, resource) {
    var $0 = new wwtlib.Constellations();
    $0.$6 = noInterpollation;
    $0.$5 = boundry;
    $0.$0 = name;
    $0.$3 = url;
    $0.getFile();
    return $0;
}
wwtlib.Constellations.$C = function() {
    if (wwtlib.Constellations.$1.get_state() === 2) {
        alert(wwtlib.Constellations.$1.get_message());
    } else if (wwtlib.Constellations.$1.get_state() === 1) {
        wwtlib.Constellations.$D(wwtlib.Constellations.$1.getText());
    }
}
wwtlib.Constellations.$D = function($p0) {
    wwtlib.Constellations.constellationCentroids = {};
    wwtlib.Constellations.fullNames = {};
    wwtlib.Constellations.abbreviations = {};
    var $0 = $p0.split('\r\n');
    var $1;
    var $enum1 = ss.IEnumerator.getEnumerator($0);
    while ($enum1.moveNext()) {
        var $2 = $enum1.current;
        $1 = $2;
        var $3 = $1.split(',');
        wwtlib.Constellations.fullNames[$3[1]] = $3[0];
        wwtlib.Constellations.abbreviations[$3[0]] = $3[1];
        wwtlib.Constellations.constellationCentroids[$3[1]] = wwtlib.Place.create($3[0], parseFloat($3[3]), parseFloat($3[2]), 128, $3[1], 2, 360);
    }
    wwtlib.WWTControl.set_renderNeeded(true);
}
wwtlib.Constellations.fullName = function(name) {
    if (Object.keyExists(wwtlib.Constellations.fullNames, name)) {
        return wwtlib.Constellations.fullNames[name];
    }
    return name;
}
wwtlib.Constellations.abbreviation = function(name) {
    if (wwtlib.Constellations.abbreviations != null && !String.isNullOrEmpty(name) && Object.keyExists(wwtlib.Constellations.abbreviations, name)) {
        return wwtlib.Constellations.abbreviations[name];
    }
    return name;
}
wwtlib.Constellations.prototype = {
    $0: null,
    $2: null,
    get_name: function() {
        return this.$0;
    },
    set_name: function(value) {
        this.$0 = value;
        return value;
    },
    $3: null,
    lines: null,
    $4: 0,
    $5: false,
    $6: false,
    readOnly: false,
    getFile: function() {
        this.$2 = new wwtlib.WebFile(this.$3);
        this.$2.onStateChange = ss.Delegate.create(this, this.fileStateChange);
        this.$2.send();
    },
    fileStateChange: function() {
        if (this.$2.get_state() === 2) {
            alert(this.$2.get_message());
        } else if (this.$2.get_state() === 1) {
            this.$7(this.$2.getText());
        }
    },
    $7: function($p0) {
        if (this.$5 && !this.$6) {
            wwtlib.Constellations.boundries = {};
        }
        this.lines = [];
        var $0 = null;
        try {
            var $1 = $p0.split('\r\n');
            var $2;
            var $3 = '';
            var $4;
            var $5;
            var $6 = 0;
            var $7 = 0;
            var $enum1 = ss.IEnumerator.getEnumerator($1);
            while ($enum1.moveNext()) {
                var $8 = $enum1.current;
                var $9 = $8;
                if ($9.substr(11, 2) === '- ') {
                    $9 = $9.substr(0, 11) + ' -' + $9.substr(13, ($9.length - 13));
                }
                if ($9.substr(11, 2) === '+ ') {
                    $9 = $9.substr(0, 11) + ' +' + $9.substr(13, ($9.length - 13));
                }
                $5 = parseFloat($9.substr(11, 10));
                if (this.$6) {
                    $4 = parseFloat($9.substr(0, 10));
                } else {
                    $4 = parseFloat($9.substr(0, 10));
                }
                $2 = $9.substr(23, 4).trim();
                if (!this.$5) {
                    if ( !! $9.substr(28, 1).trim()) {
                        $7 = parseInt($9.substr(28, 1));
                    }
                } else {
                    if (this.$6 && $9.substr(28, 1) !== 'O') {
                        continue;
                    }
                }
                if ($2 !== $3) {
                    $7 = 3;
                    $0 = new wwtlib.Lineset($2);
                    this.lines.add($0);
                    if (this.$5 && !this.$6) {
                        wwtlib.Constellations.boundries[$2] = $0;
                    }
                    $3 = $2;
                    $6 = 0;
                }
                if (this.$6) {
                    if (Math.abs($4 - $6) > 12) {
                        $4 = $4 - (24 * ((($4 - $6) < 0) ? -1: 1));
                    }
                    $6 = $4;
                }
                var $A = null;
                if ($9.length > 30) {
                    $A = $9.substr(30).trim();
                }
                if ($A == null || $A !== 'Empty') {
                    $0.add($4, $5, $7, $A);
                }
                this.$4++;
                $7 = 1;
            }
        } catch($B) {
            var $C = 0;
        }
        wwtlib.WWTControl.set_renderNeeded(true);
    },
    radius: 1,
    draw: function(renderContext, showOnlySelected, focusConsteallation, clearExisting) {
        this.$9 = Math.max(0.6, Math.cos((renderContext.get_fovAngle() * 2) / 180 * Math.PI));
        this.$8 = 0;
        var $0 = null;
        if (this.lines == null || wwtlib.Constellations.constellationCentroids == null) {
            return;
        }
        wwtlib.Constellations.$B = focusConsteallation;
        var $enum1 = ss.IEnumerator.getEnumerator(this.lines);
        while ($enum1.moveNext()) {
            var $1 = $enum1.current;
            if (wwtlib.Constellations.$B === $1.get_name() && this.$5) {
                $0 = $1;
            } else if (!showOnlySelected || this.$5) {
                this.$A(renderContext, $1);
            }
        }
        if ($0 != null) {
            this.$A(renderContext, $0);
        }
    },
    $8: 0,
    $9: 0.745,
    $A: function($p0, $p1) {
        var $0 = false;
        var $1 = wwtlib.Constellations.constellationCentroids[$p1.get_name()];
        if ($1 != null) {
            var $7 = wwtlib.Coordinates.raDecTo3d(($0) ? -$1.get_RA() - 6: $1.get_RA(), ($0) ? $1.get_dec() : $1.get_dec());
            if (wwtlib.Vector3d.dot($p0.get_viewPoint(), $7)
                88.402 || this.lines == null) {
                return 'UMI';
            }
            var $enum1 = ss.IEnumerator.getEnumerator(this.lines);
            while ($enum1.moveNext()) {
                var $0 = $enum1.current;
                var $1 = $0.points.length;
                var $2;
                var $3;
                var $4 = false;
                for ($2 = 0, $3 = $1 - 1; $2 < $1; $3 = $2++) {
                    if (((($0.points[$2].dec <= dec) && (dec < $0.points[$3].dec)) || (($0.points[$3].dec <= dec) && (dec < $0.points[$2].dec))) && (ra < ($0.points[$3].RA - $0.points[$2].RA) * (dec - $0.points[$2].dec) / ($0.points[$3].dec - $0.points[$2].dec) + $0.points[$2].RA)) {
                        $4 = !$4;
                    }
                }
                if ($4) {
                    return $0.get_name();
                }
            }
            if (ra > 0) {
                return this.findConstellationForPoint(ra - 24, dec);
            }
            if (dec > 65.5) {
                return 'UMI';
            }
            if (dec < -65.5) {
                return 'OCT';
            }
            return 'Error';
        }
    }
    wwtlib.Lineset = function(name) {
        this.$0 = name;
        this.points = [];
    }
    wwtlib.Lineset.prototype = {
        $0: null,
        get_name: function() {
            return this.$0;
        },
        set_name: function(value) {
            this.$0 = value;
            return value;
        },
        points: null,
        add: function(ra, dec, pointType, name) {
            this.points.add(new wwtlib.Linepoint(ra, dec, pointType, name));
        }
    }
    wwtlib.Linepoint = function(ra, dec, type, name) {
        this.RA = ra;
        this.dec = dec;
        this.pointType = type;
        this.name = name;
    }
    wwtlib.Linepoint.prototype = {
        RA: 0,
        dec: 0,
        pointType: 0,
        name: null,
        toString: function() {
            if (String.isNullOrEmpty(this.name)) {
                return wwtlib.Coordinates.formatDMS((((this.RA / 360) * 24 + 12) % 24)) + ', ' + wwtlib.Coordinates.formatDMS(this.dec) + ', ' + this.pointType.toString();
            } else {
                return this.name + ', ' + this.pointType.toString();
            }
        }
    }
    wwtlib.EquirectangularTile = function() {
        wwtlib.EquirectangularTile.initializeBase(this);
    }
    wwtlib.EquirectangularTile.create = function(level, x, y, dataset, parent) {
        var $0 = new wwtlib.EquirectangularTile();
        $0.parent = parent;
        $0.level = level;
        $0.x = x;
        $0.y = y;
        $0.dataset = dataset;
        $0.$B = !dataset.get_bottomsUp();
        $0.computeBoundingSphere();
        return $0;
    }
    wwtlib.EquirectangularTile.prototype = {
        $A: 0,
        $B: true,
        computeBoundingSphere: function() {
            if (!this.$B) {
                this.computeBoundingSphereBottomsUp();
                return;
            }
            this.$A = this.dataset.get_baseTileDegrees() / Math.pow(2, this.level);
            var $0 = (90 - ((this.y) * this.$A));
            var $1 = (90 - (((this.y + 1)) * this.$A));
            var $2 = ((this.x * this.$A) - 180);
            var $3 = ((((this.x + 1)) * this.$A) - 180);
            var $4 = ($0 + $1) / 2;
            var $5 = ($2 + $3) / 2;
            this.sphereCenter = this.geoTo3d($4, $5, false);
            this.topLeft = this.geoTo3d($0, $2, false);
            this.bottomRight = this.geoTo3d($1, $3, false);
            this.topRight = this.geoTo3d($0, $3, false);
            this.bottomLeft = this.geoTo3d($1, $2, false);
            var $6 = this.geoTo3d($0, $2, false);
            $6.subtract(this.sphereCenter);
            this.sphereRadius = $6.length();
            this.$A = $3 - $2;
        },
        isTileBigEnough: function(renderContext) {
            var $0 = this.$A / 256 * 900;
            return (renderContext.get_fovScale() < $0);
        },
        computeBoundingSphereBottomsUp: function() {
            var $0 = this.dataset.get_baseTileDegrees() / (Math.pow(2, this.level));
            var $1 = ( - 90 + (((this.y + 1)) * $0));
            var $2 = ( - 90 + ((this.y) * $0));
            var $3 = ((this.x * $0) - 180);
            var $4 = ((((this.x + 1)) * $0) - 180);
            var $5 = ($1 + $2) / 2;
            var $6 = ($3 + $4) / 2;
            this.sphereCenter = this.geoTo3d($5, $6, false);
            this.topLeft = this.geoTo3d($1, $3, false);
            this.bottomRight = this.geoTo3d($2, $4, false);
            this.topRight = this.geoTo3d($1, $4, false);
            this.bottomLeft = this.geoTo3d($2, $3, false);
            var $7 = this.topLeft;
            $7.subtract(this.sphereCenter);
            this.sphereRadius = $7.length();
            $0 = $4 - $3;
        },
        $C: 1,
        createGeometry: function(renderContext) {
            wwtlib.EquirectangularTile.callBaseMethod(this, 'createGeometry', [renderContext]);
            if (!this.dataset.get_dataSetType() || this.dataset.get_dataSetType() === 1) {
                this.$C = Math.max(2, (4 - this.level) * 2);
            }
            try {
                for (var $10 = 0; $10 < 4; $10++) {
                    this.$0[$10] = [];
                }
                if (!this.$B) {
                    return this.$D(renderContext);
                }
                var $0,
                $1;
                var $2 = 0;
                var $3 = this.dataset.get_baseTileDegrees() / Math.pow(2, this.level);
                var $4 = (90 - ((this.y) * $3));
                var $5 = (90 - (((this.y + 1)) * $3));
                var $6 = ((this.x * $3) - 180);
                var $7 = ((((this.x + 1)) * $3) - 180);
                var $8 = $7 - $6;
                var $9 = $5 - $4;
                this.topLeft = this.geoTo3d($4, $6, false);
                this.bottomRight = this.geoTo3d($5, $7, false);
                this.topRight = this.geoTo3d($4, $7, false);
                this.bottomLeft = this.geoTo3d($5, $6, false);
                var $A = new Array((this.$C + 1) * (this.$C + 1));
                var $B,
                $C;
                var $D = 1 / this.$C;
                for ($C = 0; $C <= this.$C; $C++) {
                    if ($C !== this.$C) {
                        $0 = $4 + ($D * $9 * $C);
                    } else {
                        $0 = $5;
                    }
                    for ($B = 0; $B <= this.$C; $B++) {
                        if ($B !== this.$C) {
                            $1 = $6 + ($D * $8 * $B);
                        } else {
                            $1 = $7;
                        }
                        $2 = $C * (this.$C + 1) + $B;
                        $A[$2] = wwtlib.PositionTexture.createPos(this.geoTo3d($0, $1, false), $B * $D, $C * $D);
                    }
                }
                this.triangleCount = this.$C * this.$C * 2;
                var $E = this.$C / 2;
                var $F = 0;
                for (var $11 = 0; $11 < 2; $11++) {
                    for (var $12 = 0; $12 < 2; $12++) {
                        $2 = 0;
                        for (var $13 = ($E * $11); $13 < ($E * ($11 + 1)); $13++) {
                            for (var $14 = ($E * $12); $14 < ($E * ($12 + 1)); $14++) {
                                var $15;
                                var $16;
                                var $17;
                                $15 = $A[($13 * (this.$C + 1) + $14)];
                                $16 = $A[(($13 + 1) * (this.$C + 1) + $14)];
                                $17 = $A[($13 * (this.$C + 1) + ($14 + 1))];
                                this.$0[$F].add(wwtlib.RenderTriangle.create($15, $17, $16, this.texture, this.level));
                                $15 = $A[($13 * (this.$C + 1) + ($14 + 1))];
                                $16 = $A[(($13 + 1) * (this.$C + 1) + $14)];
                                $17 = $A[(($13 + 1) * (this.$C + 1) + ($14 + 1))];
                                this.$0[$F].add(wwtlib.RenderTriangle.create($15, $17, $16, this.texture, this.level));
                            }
                        }
                        $F++;
                    }
                }
            } catch($18) {}
            return true;
        },
        $D: function($p0) {
            var $0,
            $1;
            var $2 = 0;
            var $3 = this.dataset.get_baseTileDegrees() / Math.pow(2, this.level);
            var $4 = ( - 90 + (((this.y + 1)) * $3));
            var $5 = ( - 90 + ((this.y) * $3));
            var $6 = ((this.x * $3) - 180);
            var $7 = ((((this.x + 1)) * $3) - 180);
            var $8 = $7 - $6;
            var $9 = $5 - $4;
            var $A = new Array((this.$C + 1) * (this.$C + 1));
            var $B,
            $C;
            var $D = 1 / this.$C;
            for ($C = 0; $C <= this.$C; $C++) {
                if ($C !== this.$C) {
                    $0 = $4 + ($D * $9 * $C);
                } else {
                    $0 = $5;
                }
                for ($B = 0; $B <= this.$C; $B++) {
                    if ($B !== this.$C) {
                        $1 = $6 + ($D * $8 * $B);
                    } else {
                        $1 = $7;
                    }
                    $2 = $C * (this.$C + 1) + $B;
                    $A[$2] = wwtlib.PositionTexture.createPos(this.geoTo3d($0, $1, false), $B * $D, $C * $D);
                }
            }
            this.triangleCount = this.$C * this.$C * 2;
            var $E = this.$C / 2;
            var $F = 0;
            for (var $10 = 0; $10 < 2; $10++) {
                for (var $11 = 0; $11 < 2; $11++) {
                    $2 = 0;
                    for (var $12 = ($E * $10); $12 < ($E * ($10 + 1)); $12++) {
                        for (var $13 = ($E * $11); $13 < ($E * ($11 + 1)); $13++) {
                            var $14;
                            var $15;
                            var $16;
                            $14 = $A[($12 * (this.$C + 1) + $13)];
                            $15 = $A[(($12 + 1) * (this.$C + 1) + $13)];
                            $16 = $A[($12 * (this.$C + 1) + ($13 + 1))];
                            this.$0[$F].add(wwtlib.RenderTriangle.create($14, $16, $15, this.texture, this.level));
                            $14 = $A[($12 * (this.$C + 1) + ($13 + 1))];
                            $15 = $A[(($12 + 1) * (this.$C + 1) + $13)];
                            $16 = $A[(($12 + 1) * (this.$C + 1) + ($13 + 1))];
                            this.$0[$F].add(wwtlib.RenderTriangle.create($14, $16, $15, this.texture, this.level));
                        }
                    }
                    $F++;
                }
            }
            return true;
        }
    }
    wwtlib.Folder = function() {
        this.$B = new Date();
        this.$D = [];
        this.$E = [];
        this.$F = [];
        this.$10 = [];
        this.$11 = [];
        this.$12 = [];
    }
    wwtlib.Folder.prototype = {
        toString: function() {
            return this.$13;
        },
        parent: null,
        isProxy: false,
        $0: false,
        get_versionDependent: function() {
            return this.$0;
        },
        set_versionDependent: function(value) {
            this.$0 = value;
            var $enum1 = ss.IEnumerator.getEnumerator(this.$11);
            while ($enum1.moveNext()) {
                var $0 = $enum1.current;
                $0.set_versionDependent(this.$0);
            }
            return value;
        },
        $1: true,
        get_readOnly: function() {
            return this.$1;
        },
        set_readOnly: function(value) {
            this.$1 = value;
            return value;
        },
        $2: false,
        get_dirty: function() {
            return this.$2;
        },
        set_dirty: function(value) {
            this.$2 = value;
            return value;
        },
        $3: null,
        $4: null,
        loadFromUrl: function(url, complete) {
            this.$4 = complete;
            this.$3 = new wwtlib.WebFile(wwtlib._Util.$3(url));
            this.$3.onStateChange = ss.Delegate.create(this, this.$5);
            this.$3.send();
        },
        $5: function() {
            if (this.$3.get_state() === 2) {
                alert(this.$3.get_message());
            } else if (this.$3.get_state() === 1) {
                var $0 = wwtlib._Util.$6(this.$3.getXml(), 'Folder');
                if ($0 == null) {
                    var $1 = this.$3.getXml();
                    if ($1 != null) {
                        $0 = wwtlib._Util.$6($1, 'Folder');
                    }
                }
                if ($0 != null) {
                    this.$6();
                    this.$7($0);
                }
                if (this.$4 != null) {
                    this.$4();
                }
            }
        },
        $6: function() {
            this.$11.clear();
            this.$10.clear();
            this.$12.clear();
            this.get_imagesets().clear();
        },
        $7: function($p0) {
            if ($p0.attributes.getNamedItem('Name') != null) {
                this.$13 = $p0.attributes.getNamedItem('Name').nodeValue;
            } else {
                this.$13 = '';
            }
            if ($p0.attributes.getNamedItem('Url') != null) {
                this.$15 = $p0.attributes.getNamedItem('Url').nodeValue;
            }
            if ($p0.attributes.getNamedItem('Thumbnail') != null) {
                this.$16 = $p0.attributes.getNamedItem('Thumbnail').nodeValue;
            }
            var $enum1 = ss.IEnumerator.getEnumerator($p0.childNodes);
            while ($enum1.moveNext()) {
                var $0 = $enum1.current;
                switch ($0.nodeName) {
                case 'Folder':
                    var $1 = new wwtlib.Folder();
                    $1.parent = this;
                    $1.$7($0);
                    this.$11.add($1);
                    break;
                case 'Place':
                    this.$12.add(wwtlib.Place.$11($0));
                    break;
                case 'ImageSet':
                    this.get_imagesets().add(wwtlib.Imageset.fromXMLNode($0));
                    break;
                case 'Tour':
                    this.get_tours().add(wwtlib.Tour.$0($0));
                    break;
                }
            }
        },
        addChildFolder: function(child) {
            this.$11.add(child);
            this.$2 = true;
        },
        removeChildFolder: function(child) {
            this.$11.remove(child);
            this.$2 = true;
        },
        addChildPlace: function(child) {
            this.$12.add(child);
            this.$2 = true;
        },
        removeChildPlace: function(child) {
            this.$12.remove(child);
            this.$2 = true;
        },
        $8: null,
        get_thumbnail: function() {
            return this.$8;
        },
        set_thumbnail: function(value) {
            this.$8 = value;
            return value;
        },
        $9: null,
        get_bounds: function() {
            return this.$9;
        },
        set_bounds: function(value) {
            this.$9 = value;
            return value;
        },
        get_isImage: function() {
            return false;
        },
        get_isTour: function() {
            return false;
        },
        get_isFolder: function() {
            return true;
        },
        get_isCloudCommunityItem: function() {
            return !! this.$1F || this.$21 > 0;
        },
        $A: null,
        refresh: function() {
            if (this.$A == null) {
                this.$A = new wwtlib.Folder();
                this.$A.isProxy = true;
                this.$A.parent = this.parent;
            }
            this.$A.loadFromUrl(this.$15, this.$C);
            this.$C = null;
        },
        $C: null,
        childLoadCallback: function(callback) {
            this.$C = callback;
            var $0 = this.get_children();
            if (this.$A == null) {
                callback();
            }
        },
        get_children: function() {
            if (String.isNullOrEmpty(this.$15)) {
                this.$D.clear();
                if (this.parent != null) {
                    var $0 = new wwtlib.wwtlib$5();
                    $0.$0 = this.parent;
                    this.$D.add($0);
                }
                if (this.get_folders() != null) {
                    var $enum1 = ss.IEnumerator.getEnumerator(this.get_folders());
                    while ($enum1.moveNext()) {
                        var $1 = $enum1.current;
                        this.$D.add($1);
                    }
                }
                if (this.get_imagesets() != null) {
                    var $enum2 = ss.IEnumerator.getEnumerator(this.get_imagesets());
                    while ($enum2.moveNext()) {
                        var $2 = $enum2.current;
                        this.$D.add($2);
                    }
                }
                if (this.get_places() != null) {
                    var $enum3 = ss.IEnumerator.getEnumerator(this.get_places());
                    while ($enum3.moveNext()) {
                        var $3 = $enum3.current;
                        this.$D.add($3);
                    }
                }
                if (this.get_tours() != null) {
                    var $enum4 = ss.IEnumerator.getEnumerator(this.get_tours());
                    while ($enum4.moveNext()) {
                        var $4 = $enum4.current;
                        this.$D.add($4);
                    }
                }
                return this.$D;
            } else {
                var $5 = (this.$B - Date.get_now()) / 1000;
                if (true || this.get_refreshType() === 1 || this.$A == null || (!this.get_refreshType() && (parseInt(this.$19) < $5))) {
                    this.refresh();
                }
                if (this.$A != null) {
                    return this.$A.get_children();
                } else {
                    return null;
                }
            }
        },
        $13: null,
        $14: 0,
        $15: null,
        $16: null,
        $17: 0,
        $18: false,
        $19: null,
        $1A: true,
        $1B: false,
        $1C: false,
        $1D: 0,
        $1E: null,
        $1F: 0,
        get_msrCommunityId: function() {
            return this.$1F;
        },
        set_msrCommunityId: function(value) {
            this.$1F = value;
            return value;
        },
        $20: 0,
        get_msrComponentId: function() {
            return this.$20;
        },
        set_msrComponentId: function(value) {
            this.$20 = value;
            return value;
        },
        $21: 0,
        get_permission: function() {
            return this.$21;
        },
        set_permission: function(value) {
            this.$21 = value;
            return value;
        },
        get_folders: function() {
            return this.$11;
        },
        set_folders: function(value) {
            this.$11 = value;
            return value;
        },
        get_places: function() {
            return this.$12;
        },
        set_places: function(value) {
            this.$12 = value;
            return value;
        },
        get_imagesets: function() {
            return this.$F;
        },
        set_imagesets: function(value) {
            this.$F = value;
            return value;
        },
        get_tours: function() {
            return this.$10;
        },
        set_tours: function(value) {
            this.$10 = value;
            return value;
        },
        get_name: function() {
            if (this.$13 == null) {
                return '';
            } else {
                return this.$13;
            }
        },
        set_name: function(value) {
            this.$13 = value;
            return value;
        },
        get_group: function() {
            return this.$14;
        },
        set_group: function(value) {
            this.$14 = value;
            return value;
        },
        get_url: function() {
            return this.$15;
        },
        set_url: function(value) {
            this.$15 = value;
            return value;
        },
        get_thumbnailUrl: function() {
            if (String.isNullOrEmpty(this.$16)) {
                return 'http://cdn.worldwidetelescope.org/wwtweb/thumbnail.aspx?name=folder';
            }
            return this.$16;
        },
        set_thumbnailUrl: function(value) {
            this.$16 = value;
            return value;
        },
        get_refreshType: function() {
            return this.$17;
        },
        set_refreshType: function(value) {
            this.$17 = value;
            this.set_refreshTypeSpecified(true);
            return value;
        },
        get_refreshTypeSpecified: function() {
            return this.$18;
        },
        set_refreshTypeSpecified: function(value) {
            this.$18 = value;
            return value;
        },
        get_refreshInterval: function() {
            return this.$19;
        },
        set_refreshInterval: function(value) {
            this.$19 = value;
            return value;
        },
        get_browseable: function() {
            return this.$1A;
        },
        set_browseable: function(value) {
            this.$1A = value;
            this.$1B = true;
            return value;
        },
        get_browseableSpecified: function() {
            return this.$1B;
        },
        set_browseableSpecified: function(value) {
            this.$1B = value;
            return value;
        },
        get_searchable: function() {
            return this.$1C;
        },
        set_searchable: function(value) {
            this.$1C = value;
            return value;
        },
        get_type: function() {
            return this.$1D;
        },
        set_type: function(value) {
            this.$1D = value;
            return value;
        },
        get_subType: function() {
            return this.$1E;
        },
        set_subType: function(value) {
            this.$1E = value;
            return value;
        }
    }
    wwtlib.FolderBrowser = function() {
        this.$0 = [];
        this.$1 = -1;
        this.$F = 0;
        this.$1B = -1;
        this.$1C = -1;
    }
    wwtlib.FolderBrowser.create = function() {
        var $0 = new wwtlib.FolderBrowser();
        $0.height = 85;
        $0.width = 1920;
        $0.canvas = document.createElement('canvas');
        $0.canvas.width = $0.width;
        $0.canvas.height = $0.height;
        $0.setup();
        $0.loadImages();
        return $0;
    }
    wwtlib.FolderBrowser.prototype = {
        canvas: null,
        top: 10,
        left: 10,
        setup: function() {
            this.canvas.addEventListener('click', ss.Delegate.create(this, this.onClick), false);
            this.canvas.addEventListener('dblclick', ss.Delegate.create(this, this.onDoubleClick), false);
            this.canvas.addEventListener('mousemove', ss.Delegate.create(this, this.onMouseMove), false);
            this.canvas.addEventListener('mouseup', ss.Delegate.create(this, this.onMouseUp), false);
            this.canvas.addEventListener('mousedown', ss.Delegate.create(this, this.onMouseDown), false);
            this.canvas.addEventListener('mousewheel', ss.Delegate.create(this, this.onMouseWheel), false);
            this.canvas.addEventListener('touchstart', ss.Delegate.create(this, this.onTouchStart), false);
            this.canvas.addEventListener('touchmove', ss.Delegate.create(this, this.onTouchMove), false);
            this.canvas.addEventListener('touchend', ss.Delegate.create(this, this.onTouchEnd), false);
            this.canvas.addEventListener('mouseout', ss.Delegate.create(this, this.onMouseUp), false);
        },
        onTouchStart: function(e) {
            var $0 = e;
            $0.preventDefault();
            this.$3 = true;
            this.$4 = $0.targetTouches[0].pageX;
            this.$5 = $0.targetTouches[0].pageY;
            this.$1 = this.$1F(wwtlib.Vector2d.create($0.targetTouches[0].pageX, $0.targetTouches[0].pageY));
        },
        onTouchMove: function(e) {
            var $0 = e;
            $0.preventDefault();
            if (this.$3) {
                var $1 = $0.targetTouches[0].pageX - this.$4;
                var $2 = $0.targetTouches[0].pageY - this.$5;
                if (this.$3) {
                    this.$18 = true;
                }
                if (!this.$18) {
                    var $3 = this.$1F(wwtlib.Vector2d.create($0.targetTouches[0].pageX, $0.targetTouches[0].pageY));
                    if (this.$1C !== $3) {
                        this.$1C = $3;
                    }
                } else {
                    var $4 = Math.round((($0.targetTouches[0].pageX - this.$4) + this.$1A) / this.$10);
                    var $5 = Math.round((($0.targetTouches[0].pageX - this.$4) + this.$1A) - ($4 * this.$10));
                    this.$1A = $5;
                    this.$19 -= $4;
                    if (this.$19 < 0) {
                        this.$1A -= (this.$10 * this.$19);
                        this.$19 = 0;
                    }
                    this.$4 = $0.targetTouches[0].pageX;
                    this.$5 = $0.targetTouches[0].pageY;
                }
                this.refresh();
            }
        },
        onTouchEnd: function(e) {
            var $0 = e;
            $0.preventDefault();
            if (this.$18) {
                this.$18 = false;
                this.$6 = true;
            } else if (this.$1 > -1 && this.$3) {
                this.$2(this.$1);
            }
            this.$1A = 0;
            this.$3 = false;
            this.refresh();
        },
        onClick: function(e) {
            if (!this.$6) {
                var $0 = this.$1F(wwtlib.Vector2d.create(e.offsetX, e.offsetY));
                this.$2($0);
            } else {
                this.$6 = false;
            }
        },
        $2: function($p0) {
            if ($p0 > -1) {
                if (Type.canCast(this.$0[$p0], wwtlib.Place)) {
                    var $0 = this.$0[$p0];
                    wwtlib.WWTControl.singleton.gotoTarget($0, false, false, true);
                    return;
                }
                if (Type.canCast(this.$0[$p0], wwtlib.Imageset)) {
                    var $1 = this.$0[$p0];
                    wwtlib.WWTControl.singleton.renderContext.set_backgroundImageset($1);
                    return;
                }
                if (Type.canCast(this.$0[$p0], wwtlib.Tour)) {
                    var $2 = this.$0[$p0];
                    wwtlib.WWTControl.singleton.playTour($2.get_tourUrl());
                    return;
                }
                if (Type.canCast(this.$0[$p0], wwtlib.Folder)) {
                    var $3 = this.$0[$p0];
                    this.$19 = 0;
                    $3.childLoadCallback(ss.Delegate.create(this, function() {
                        this.$0 = $3.get_children();
                        this.refresh();
                    }));
                    return;
                }
                if (Type.canCast(this.$0[$p0], wwtlib.wwtlib$5)) {
                    var $4 = this.$0[$p0];
                    if ($4.$0 != null) {
                        this.$19 = 0;
                        $4.$0.childLoadCallback(ss.Delegate.create(this, function() {
                            this.$0 = $4.$0.get_children();
                            this.refresh();
                        }));
                    }
                    return;
                }
            }
            return;
        },
        onDoubleClick: function(e) {
            wwtlib.RenderTriangle.renderingOn = !wwtlib.RenderTriangle.renderingOn;
        },
        onGestureChange: function(e) {
            var $0 = e;
            this.$3 = false;
            var $1 = $0.scale;
        },
        $3: false,
        $4: 0,
        $5: 0,
        onMouseDown: function(e) {
            this.$3 = true;
            this.$4 = wwtlib.Mouse.offsetX(this.canvas, e);
            this.$5 = wwtlib.Mouse.offsetY(this.canvas, e);
        },
        onMouseMove: function(e) {
            if (this.$3) {
                this.$18 = true;
            }
            if (!this.$18) {
                var $0 = this.$1F(wwtlib.Vector2d.create(wwtlib.Mouse.offsetX(this.canvas, e), wwtlib.Mouse.offsetY(this.canvas, e)));
                if (this.$1C !== $0) {
                    this.$1C = $0;
                }
            } else {
                var $1 = Math.round(((wwtlib.Mouse.offsetX(this.canvas, e) - this.$4) + this.$1A) / this.$10);
                var $2 = Math.round(((wwtlib.Mouse.offsetX(this.canvas, e) - this.$4) + this.$1A) - ($1 * this.$10));
                this.$1A = $2;
                this.$19 -= $1;
                if (this.$19 < 0) {
                    this.$1A -= (this.$10 * this.$19);
                    this.$19 = 0;
                }
                this.$4 = wwtlib.Mouse.offsetX(this.canvas, e);
                this.$5 = wwtlib.Mouse.offsetY(this.canvas, e);
            }
            this.refresh();
        },
        $6: false,
        onMouseUp: function(e) {
            if (this.$18) {
                this.$1A = 0;
                this.$18 = false;
                this.$6 = true;
            }
            this.$3 = false;
            this.refresh();
        },
        onMouseWheel: function(e) {
            var $0 = e;
            var $1 = $0.wheelDelta;
        },
        loadImages: function() {
            if (!wwtlib.FolderBrowser.$8 && !wwtlib.FolderBrowser.$7) {
                wwtlib.FolderBrowser.$9 = 0;
                wwtlib.FolderBrowser.$8 = false;
                wwtlib.FolderBrowser.$7 = true;
                wwtlib.FolderBrowser.$A = document.createElement('img');
                wwtlib.FolderBrowser.$A.src = 'images/thumbBackground.png';
                wwtlib.FolderBrowser.$A.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
                    wwtlib.FolderBrowser.$9++;
                    if (wwtlib.FolderBrowser.$9 === 5) {
                        wwtlib.FolderBrowser.$7 = false;
                        wwtlib.FolderBrowser.$8 = true;
                        this.refresh();
                    }
                }), false);
                wwtlib.FolderBrowser.$B = document.createElement('img');
                wwtlib.FolderBrowser.$B.src = 'images/thumbBackgroundHover.png';
                wwtlib.FolderBrowser.$B.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
                    wwtlib.FolderBrowser.$9++;
                    if (wwtlib.FolderBrowser.$9 === 5) {
                        wwtlib.FolderBrowser.$7 = false;
                        wwtlib.FolderBrowser.$8 = true;
                        this.refresh();
                    }
                }), false);
                wwtlib.FolderBrowser.$C = document.createElement('img');
                wwtlib.FolderBrowser.$C.src = 'images/thumbBackgroundWide.png';
                wwtlib.FolderBrowser.$C.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
                    wwtlib.FolderBrowser.$9++;
                    if (wwtlib.FolderBrowser.$9 === 5) {
                        wwtlib.FolderBrowser.$7 = false;
                        wwtlib.FolderBrowser.$8 = true;
                        this.refresh();
                    }
                }), false);
                wwtlib.FolderBrowser.$D = document.createElement('img');
                wwtlib.FolderBrowser.$D.src = 'images/thumbBackgroundWideHover.png';
                wwtlib.FolderBrowser.$D.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
                    wwtlib.FolderBrowser.$9++;
                    if (wwtlib.FolderBrowser.$9 === 5) {
                        wwtlib.FolderBrowser.$7 = false;
                        wwtlib.FolderBrowser.$8 = true;
                        this.refresh();
                    }
                }), false);
                wwtlib.FolderBrowser.$E = document.createElement('img');
                wwtlib.FolderBrowser.$E.src = 'images/dragInsertMarker.png';
                wwtlib.FolderBrowser.$E.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
                    wwtlib.FolderBrowser.$9++;
                    if (wwtlib.FolderBrowser.$9 === 5) {
                        wwtlib.FolderBrowser.$7 = false;
                        wwtlib.FolderBrowser.$8 = true;
                        this.refresh();
                    }
                }), false);
            }
        },
        get_thumbnailSize: function() {
            return this.$F;
        },
        set_thumbnailSize: function(value) {
            this.$F = value;
            switch (value) {
            case 1:
                this.$10 = 180;
                this.$11 = 75;
                this.$12 = 65;
                this.$13 = 180;
                break;
            case 0:
                this.$10 = 110;
                this.$11 = 75;
                this.$12 = 65;
                this.$13 = 110;
                break;
            }
            this.$16();
            this.refresh();
            return value;
        },
        refresh: function() {
            if (this.width !== window.innerWidth) {
                this.width = window.innerWidth;
                this.canvas.width = this.canvas.width;
            }
            this.paint();
        },
        $10: 110,
        $11: 75,
        $12: 65,
        $13: 110,
        $14: 110,
        $15: 1,
        get_rowCount: function() {
            return this.$15;
        },
        set_rowCount: function(value) {
            if (this.$15 !== value) {
                this.$15 = value;
                this.$16();
            }
            return value;
        },
        $16: function() {},
        $17: 6,
        get_colCount: function() {
            return this.$17;
        },
        set_colCount: function(value) {
            if (this.$17 !== value) {
                this.$17 = value;
                this.$16();
            }
            return value;
        },
        $18: false,
        $19: 0,
        $1A: 0,
        get_itemsPerPage: function() {
            return this.$15 * this.$17;
        },
        get_currentPage: function() {
            return this.$19 / this.get_itemsPerPage();
        },
        showAddButton: false,
        get_pageCount: function() {
            return Math.max(1, ((this.$0.length + this.get_itemsPerPage() - 1) + ((this.showAddButton) ? 1: 0)) / this.get_itemsPerPage());
        },
        width: 0,
        height: 0,
        paint: function() {
            var $0 = this.canvas.getContext('2d');
            $0.fillStyle = 'rgb(20, 22, 31)';
            $0.fillRect(0, 0, this.width, this.height);
            if (!wwtlib.FolderBrowser.$8) {
                return;
            }
            var $1 = (this.height - 10 * 2);
            var $2 = (this.width - 10 * 2);
            this.set_rowCount(Math.round(Math.max($1 / this.$12, 1)));
            this.set_colCount(Math.round(Math.max($2 / this.$10, 1)));
            this.$14 = ($2 + 13) / this.get_colCount();
            this.$19 = Math.round((this.$19 / this.get_itemsPerPage()) * this.get_itemsPerPage());
            var $3;
            var $4 = this.$19;
            for (var $5 = 0; $5 = this.$0.length) {
                if (!this.$0.length || this.showAddButton) {
                    $3 = wwtlib.Rectangle.create(this.left + $6 * this.$14 + 3 + this.$1A, this.top + $5 * this.$11, this.$13 - 10, 60);
                    $0.drawImage((this.$F === 1) ? wwtlib.FolderBrowser.$C: wwtlib.FolderBrowser.$A, parseInt(($6 * this.$14)) + this.$1A, $5 * this.$11);
                }
                break;
            }
            $3 = wwtlib.Rectangle.create(this.left + $6 * this.$14 + 3 + this.$1A, this.top + $5 * this.$11, this.$13 - 14, 60);
            var $7 = 'white';
            if ($4 === this.$1C || ($4 === this.$1B && this.$1C === -1)) {
                $0.drawImage((this.$F === 1) ? wwtlib.FolderBrowser.$D: wwtlib.FolderBrowser.$B, this.left + parseInt(($6 * this.$14)) + this.$1A, this.top + $5 * this.$11);
                $7 = 'yellow';
            } else {
                $0.drawImage((this.$F === 1) ? wwtlib.FolderBrowser.$C: wwtlib.FolderBrowser.$A, this.left + parseInt(($6 * this.$14)) + this.$1A, this.top + $5 * this.$11);
            }
            this.$0[$4].set_bounds(wwtlib.Rectangle.create((this.left + $6 * this.$14) + this.$1A, this.top + ($5 * this.$11), parseInt(this.$14), this.$11));
            try {
                var $8 = this.$0[$4].get_thumbnail();
                if ($8 != null) {
                    $0.drawImage($8, this.left + ($6 * this.$14) + 2 + this.$1A, this.top + $5 * this.$11 + 3);
                    $0.strokeStyle = 'rgb(0,0,0)';
                    $0.rect(this.left + parseInt(($6 * this.$14)) + 2 + this.$1A, this.top + $5 * this.$11 + 3, this.$0[$4].get_thumbnail().width, this.$0[$4].get_thumbnail().height);
                } else {
                    this.$0[$4].set_thumbnail(document.createElement('img'));
                    this.$0[$4].get_thumbnail().src = this.$0[$4].get_thumbnailUrl();
                    this.$0[$4].get_thumbnail().addEventListener('load', ss.Delegate.create(this, function($p1_0) {
                        this.refresh();
                    }), false);
                }
            } catch($9) {}
            $0.fillStyle = $7;
            $0.strokeStyle = $7;
            $0.lineWidth = 1;
            $0.font = 'normal 8pt Arial';
            $0.fillText(this.$0[$4].get_name(), $3.x, $3.y + $3.height, $3.width);
            $4++;
        }
        if ($4 >= this.$0.length) {
            break;
        }
    }
},
$1E: false,
imageClicked: false,
$1F: function($p0) {
    var $0 = wwtlib.Vector2d.create($p0.x + this.left, $p0.y + this.top);
    this.imageClicked = false;
    var $1 = -1;
    var $2 = parseInt(($0.x / this.$14));
    var $3 = parseInt(($0.x % this.$14));
    if ($2 >= this.$17) {
        return - 1;
    }
    if ($2 < 0) {
        return - 1;
    }
    var $4 = parseInt(($0.y / this.$11));
    var $5 = parseInt(($0.y % this.$11));
    if ($4 >= this.$15) {
        return - 1;
    }
    if ($4 < 0) {
        return - 1;
    }
    $1 = this.$19 + $4 * this.$17 + $2;
    if ($1 === this.$0.length) {
        this.$1E = true;
    } else {
        this.$1E = false;
    }
    if ($1 > this.$0.length - 1) {
        return - 1;
    }
    if ((this.$0[$1]).get_isImage() && $5 < 16 && $3 > 78) {
        this.imageClicked = true;
    }
    return $1;
},
$20: function($p0) {
    this.$0 = $p0;
}
}
wwtlib.wwtlib$5 = function() {
    this.$2 = new wwtlib.Rectangle();
}
wwtlib.wwtlib$5.prototype = {
    get_name: function() {
        return 'Up Level';
    },
    $0: null,
    $1: null,
    get_thumbnail: function() {
        return this.$1;
    },
    set_thumbnail: function($p0) {
        this.$1 = $p0;
        return $p0;
    },
    get_thumbnailUrl: function() {
        return 'http://www.worldwidetelescope.org/wwtweb/thumbnail.aspx?Name=folderup';
    },
    set_thumbnailUrl: function($p0) {
        return;
        return $p0;
    },
    get_bounds: function() {
        return this.$2;
    },
    set_bounds: function($p0) {
        this.$2 = $p0;
        return $p0;
    },
    get_isImage: function() {
        return false;
    },
    get_isTour: function() {
        return false;
    },
    get_isFolder: function() {
        return false;
    },
    get_isCloudCommunityItem: function() {
        return false;
    },
    get_readOnly: function() {
        return false;
    },
    get_children: function() {
        if (this.$0 == null) {
            return [];
        } else {
            return this.$0.get_children();
        }
    }
}
wwtlib.Imageset = function() {
    this.$F = 0;
    this.$10 = 3;
}
wwtlib.Imageset.getTileKey = function(imageset, level, x, y) {
    return imageset.get_imageSetID().toString() + '\\' + level.toString() + '\\' + y.toString() + '_' + x.toString();
}
wwtlib.Imageset.getNewTile = function(imageset, level, x, y, parent) {
    switch (imageset.get_projection()) {
    case 0:
        var $0 = wwtlib.MercatorTile.create(level, x, y, imageset, parent);
        return $0;
    case 1:
        return wwtlib.EquirectangularTile.create(level, x, y, imageset, parent);
    case 3:
    default:
        return wwtlib.ToastTile.create(level, x, y, imageset, parent);
    case 2:
        var $1 = wwtlib.TangentTile.create(level, x, y, imageset, parent);
        return $1;
    }
}
wwtlib.Imageset.fromXMLNode = function(node) {
    try {
        var $0 = 2;
        var $1 = 2;
        if (node.attributes.getNamedItem('DataSetType') != null) {
            switch (node.attributes.getNamedItem('DataSetType').nodeValue.toLowerCase()) {
            case 'earth':
                $0 = 0;
                break;
            case 'planet':
                $0 = 1;
                break;
            case 'sky':
                $0 = 2;
                break;
            case 'panorama':
                $0 = 3;
                break;
            case 'solarsystem':
                $0 = 4;
                break;
            }
        }
        var $2 = 3;
        switch (node.attributes.getNamedItem('BandPass').nodeValue) {
        case 'Gamma':
            $2 = 0;
            break;
        case 'XRay':
            $2 = 1;
            break;
        case 'Ultraviolet':
            $2 = 2;
            break;
        case 'Visible':
            $2 = 3;
            break;
        case 'HydrogenAlpha':
            $2 = 4;
            break;
        case 'IR':
            $2 = 4;
            break;
        case 'Microwave':
            $2 = 5;
            break;
        case 'Radio':
            $2 = 6;
            break;
        case 'VisibleNight':
            $2 = 6;
            break;
        default:
            break;
        }
        var $3 = 1;
        if (node.attributes.getNamedItem('WidthFactor') != null) {
            $3 = parseInt(node.attributes.getNamedItem('WidthFactor').nodeValue);
        }
        if (node.attributes.getNamedItem('Generic') == null || !Boolean.parse(node.attributes.getNamedItem('Generic').nodeValue)) {
            switch (node.attributes.getNamedItem('Projection').nodeValue.toLowerCase()) {
            case 'tan':
            case 'tangent':
                $1 = 2;
                break;
            case 'mercator':
                $1 = 0;
                break;
            case 'equirectangular':
                $1 = 1;
                break;
            case 'toast':
                $1 = 3;
                break;
            case 'spherical':
                $1 = 4;
                break;
            case 'plotted':
                $1 = 6;
                break;
            case 'skyimage':
                $1 = 5;
                break;
            }
            var $4 = node.attributes.getNamedItem('FileType').nodeValue;
            if (!$4.startsWith('.')) {
                $4 = '.' + $4;
            }
            var $5;
            var $6 = wwtlib._Util.$6(node, 'ThumbnailUrl');
            if (String.isNullOrEmpty($6.text)) {
                var $12 = $6;
                $5 = $12.textContent;
            } else {
                $5 = $6.text;
            }
            var $7 = false;
            var $8 = false;
            if (node.attributes.getNamedItem('StockSet') != null) {
                $7 = Boolean.parse(node.attributes.getNamedItem('StockSet').nodeValue);
            }
            if (node.attributes.getNamedItem('ElevationModel') != null) {
                $8 = Boolean.parse(node.attributes.getNamedItem('ElevationModel').nodeValue);
            }
            var $9 = '';
            if (node.attributes.getNamedItem('DemUrl') != null) {
                $9 = node.attributes.getNamedItem('DemUrl').nodeValue;
            }
            var $A = '';
            if (node.attributes.getNamedItem('AltUrl') != null) {
                $A = node.attributes.getNamedItem('AltUrl').nodeValue;
            }
            var $B = 0;
            if (node.attributes.getNamedItem('OffsetX') != null) {
                $B = parseFloat(node.attributes.getNamedItem('OffsetX').nodeValue);
            }
            var $C = 0;
            if (node.attributes.getNamedItem('OffsetY') != null) {
                $C = parseFloat(node.attributes.getNamedItem('OffsetY').nodeValue);
            }
            var $D = '';
            var $E = wwtlib._Util.$6(node, 'Credits');
            if ($E != null) {
                $D = $E.text;
            }
            var $F = '';
            $E = wwtlib._Util.$6(node, 'CreditsUrl');
            if ($E != null) {
                $F = $E.text;
            }
            var $10 = 0;
            if (node.attributes.getNamedItem('MeanRadius') != null) {
                $10 = parseFloat(node.attributes.getNamedItem('MeanRadius').nodeValue);
            }
            var $11 = null;
            if (node.attributes.getNamedItem('ReferenceFrame') != null) {
                $11 = node.attributes.getNamedItem('ReferenceFrame').nodeValue;
            }
            return wwtlib.Imageset.create(node.attributes.getNamedItem('Name').nodeValue, node.attributes.getNamedItem('Url').nodeValue, $0, $2, $1, Math.abs(wwtlib._Util.$0(node.attributes.getNamedItem('Url').nodeValue)), parseInt(node.attributes.getNamedItem('BaseTileLevel').nodeValue), parseInt(node.attributes.getNamedItem('TileLevels').nodeValue), 256, parseFloat(node.attributes.getNamedItem('BaseDegreesPerTile').nodeValue), $4, Boolean.parse(node.attributes.getNamedItem('BottomsUp').nodeValue), node.attributes.getNamedItem('QuadTreeMap').nodeValue, parseFloat(node.attributes.getNamedItem('CenterX').nodeValue), parseFloat(node.attributes.getNamedItem('CenterY').nodeValue), parseFloat(node.attributes.getNamedItem('Rotation').nodeValue), Boolean.parse(node.attributes.getNamedItem('Sparse').nodeValue), $5, $7, $8, $3, $B, $C, $D, $F, $9, $A, $10, $11);
        } else {
            return wwtlib.Imageset.createGeneric($0, $2);
        }
    } catch($13) {
        return null;
    }
}
wwtlib.Imageset.createGeneric = function(dataSetType, bandPass) {
    var $0 = new wwtlib.Imageset();
    $0.$19 = true;
    $0.$16 = 'Generic';
    $0.$17 = false;
    $0.$F = dataSetType;
    $0.$10 = bandPass;
    $0.$A = '';
    $0.url = '';
    $0.$6 = 0;
    $0.$3 = 0;
    $0.$2 = 0;
    $0.$5 = '';
    $0.$0 = 1;
    $0.$8 = false;
    $0.$9 = 0;
    $0.$7 = (!$0.$0);
    $0.$B = 0;
    $0.$C = 0;
    $0.$D = 0;
    $0.$18 = '';
    $0.$13 = wwtlib.Matrix3d.get_identity();
    $0.$13.$22(wwtlib.Matrix3d.$1E(($0.get_rotation() / 180 * Math.PI)));
    $0.$13.$22(wwtlib.Matrix3d.$1F(($0.get_centerY() / 180 * Math.PI)));
    $0.$13.$22(wwtlib.Matrix3d.$1D((((360 - $0.get_centerX()) + 180) / 180 * Math.PI)));
    return $0;
}
wwtlib.Imageset.create = function(name, url, dataSetType, bandPass, projection, imageSetID, baseLevel, levels, tileSize, baseTileDegrees, extension, bottomsUp, quadTreeMap, centerX, centerY, rotation, sparse, thumbnailUrl, defaultSet, elevationModel, wf, offsetX, offsetY, credits, creditsUrl, demUrlIn, alturl, meanRadius, referenceFrame) {
    var $0 = new wwtlib.Imageset();
    $0.set_referenceFrame(referenceFrame);
    $0.set_meanRadius(meanRadius);
    $0.$11 = alturl;
    $0.demUrl = demUrlIn;
    $0.$1E = credits;
    $0.$1F = creditsUrl;
    $0.$1D = offsetY;
    $0.$1C = offsetX;
    $0.$4 = wf;
    $0.$1B = elevationModel;
    $0.$1A = defaultSet;
    $0.$16 = name;
    $0.$17 = sparse;
    $0.$F = dataSetType;
    $0.$10 = bandPass;
    $0.$A = quadTreeMap;
    $0.url = url;
    $0.$6 = levels;
    $0.$3 = baseTileDegrees;
    $0.$2 = imageSetID;
    $0.$5 = extension;
    $0.$0 = projection;
    $0.$8 = bottomsUp;
    $0.$9 = baseLevel;
    $0.$7 = (!projection);
    $0.$B = centerX;
    $0.$C = centerY;
    $0.$D = rotation;
    $0.$18 = thumbnailUrl;
    $0.$15();
    return $0;
}
wwtlib.Imageset.prototype = {
    $0: 0,
    get_projection: function() {
        return this.$0;
    },
    set_projection: function(value) {
        this.$0 = value;
        return value;
    },
    $1: null,
    get_referenceFrame: function() {
        return this.$1;
    },
    set_referenceFrame: function(value) {
        this.$1 = value;
        return value;
    },
    $2: 0,
    get_imageSetID: function() {
        return this.$2;
    },
    set_imageSetID: function(value) {
        this.$2 = value;
        return value;
    },
    $3: 0,
    get_baseTileDegrees: function() {
        return this.$3;
    },
    set_baseTileDegrees: function(value) {
        this.$3 = value;
        return value;
    },
    $4: 1,
    get_widthFactor: function() {
        return this.$4;
    },
    set_widthFactor: function(value) {
        this.$4 = value;
        return value;
    },
    getHashCode: function() {
        return wwtlib._Util.$0(this.get_url());
    },
    url: null,
    get_url: function() {
        return this.url;
    },
    set_url: function(value) {
        this.url = value;
        return value;
    },
    demUrl: '',
    get_demUrl: function() {
        if (String.isNullOrEmpty(this.demUrl) && !this.$0) {
            return 'http://ecn.t{S}.tiles.virtualearth.net/tiles/d{Q}.elv?g=1&n=z';
        }
        return this.demUrl;
    },
    set_demUrl: function(value) {
        this.demUrl = value;
        return value;
    },
    $5: null,
    get_extension: function() {
        return this.$5;
    },
    set_extension: function(value) {
        this.$5 = value;
        return value;
    },
    $6: 0,
    get_levels: function() {
        return this.$6;
    },
    set_levels: function(value) {
        this.$6 = value;
        return value;
    },
    $7: false,
    $8: false,
    get_bottomsUp: function() {
        return this.$8;
    },
    set_bottomsUp: function(value) {
        this.$8 = value;
        return value;
    },
    get_mercator: function() {
        return this.$7;
    },
    set_mercator: function(value) {
        this.$7 = value;
        return value;
    },
    $9: 1,
    get_baseLevel: function() {
        return this.$9;
    },
    set_baseLevel: function(value) {
        this.$9 = value;
        return value;
    },
    $A: '0123',
    get_quadTreeTileMap: function() {
        return this.$A;
    },
    set_quadTreeTileMap: function(value) {
        this.$A = value;
        return value;
    },
    $B: 0,
    get_centerX: function() {
        return this.$B;
    },
    set_centerX: function(value) {
        if (this.$B !== value) {
            this.$B = value;
            this.$15();
        }
        return value;
    },
    $C: 0,
    get_centerY: function() {
        return this.$C;
    },
    set_centerY: function(value) {
        if (this.$C !== value) {
            this.$C = value;
            this.$15();
        }
        return value;
    },
    $D: 0,
    get_rotation: function() {
        return this.$D;
    },
    set_rotation: function(value) {
        if (this.$D !== value) {
            this.$D = value;
            this.$15();
        }
        return value;
    },
    $E: 0,
    get_meanRadius: function() {
        return this.$E;
    },
    set_meanRadius: function(value) {
        this.$E = value;
        return value;
    },
    get_bandPass: function() {
        return this.$10;
    },
    set_bandPass: function(value) {
        this.$10 = value;
        return value;
    },
    get_dataSetType: function() {
        return this.$F;
    },
    set_dataSetType: function(value) {
        this.$F = value;
        return value;
    },
    $11: '',
    get_altUrl: function() {
        return this.$11;
    },
    set_altUrl: function(value) {
        this.$11 = value;
        return value;
    },
    $12: false,
    get_singleImage: function() {
        return this.$12;
    },
    set_singleImage: function(value) {
        this.$12 = value;
        return value;
    },
    toString: function() {
        if (this.get_defaultSet()) {
            return this.$16 + ' *';
        } else {
            return this.$16;
        }
    },
    get_stockImageSet: function() {
        if (this.$19 || !this.$1A) {
            return this;
        } else {
            return wwtlib.Imageset.createGeneric(this.get_dataSetType(), this.get_bandPass());
        }
    },
    equals: function(obj) {
        if (obj == null) {
            return false;
        }
        if (! (Type.canCast(obj, wwtlib.Imageset))) {
            return false;
        }
        var $0 = obj;
        return (wwtlib._Util.$0($0.get_url()) === wwtlib._Util.$0(this.get_url()) && $0.get_dataSetType() === this.get_dataSetType() && $0.get_bandPass() === this.get_bandPass() && $0.get_generic() === this.get_generic());
    },
    $13: null,
    get_matrix: function() {
        if (!this.$14) {
            this.$15();
        }
        return this.$13;
    },
    set_matrix: function(value) {
        this.$13 = value;
        return value;
    },
    $14: false,
    $15: function() {
        this.$14 = true;
        this.$13 = wwtlib.Matrix3d.get_identity();
        this.$13.$22(wwtlib.Matrix3d.$1E((this.get_rotation() / 180 * Math.PI)));
        this.$13.$22(wwtlib.Matrix3d.$1F((this.get_centerY() / 180 * Math.PI)));
        this.$13.$22(wwtlib.Matrix3d.$1D(((360 - this.get_centerX()) / 180 * Math.PI)));
    },
    $16: '',
    get_name: function() {
        return this.$16;
    },
    set_name: function(value) {
        this.$16 = value;
        return value;
    },
    $17: false,
    get_sparse: function() {
        return this.$17;
    },
    set_sparse: function(value) {
        this.$17 = value;
        return value;
    },
    $18: '',
    get_thumbnailUrl: function() {
        return this.$18;
    },
    set_thumbnailUrl: function(value) {
        this.$18 = value;
        return value;
    },
    $19: false,
    get_generic: function() {
        return this.$19;
    },
    set_generic: function(value) {
        this.$19 = value;
        return value;
    },
    $1A: false,
    $1B: false,
    get_elevationModel: function() {
        return this.$1B;
    },
    set_elevationModel: function(value) {
        this.$1B = value;
        return value;
    },
    get_defaultSet: function() {
        return this.$1A;
    },
    set_defaultSet: function(value) {
        this.$1A = value;
        return value;
    },
    $1C: 0,
    get_offsetX: function() {
        return this.$1C;
    },
    set_offsetX: function(value) {
        this.$1C = value;
        return value;
    },
    $1D: 0,
    get_offsetY: function() {
        return this.$1D;
    },
    set_offsetY: function(value) {
        this.$1D = value;
        return value;
    },
    $1E: null,
    get_creditsText: function() {
        return this.$1E;
    },
    set_creditsText: function(value) {
        this.$1E = value;
        return value;
    },
    $1F: null,
    get_creditsUrl: function() {
        return this.$1F;
    },
    set_creditsUrl: function(value) {
        this.$1F = value;
        return value;
    },
    get_isMandelbrot: function() {
        return false;
    },
    $20: null,
    get_thumbnail: function() {
        return this.$20;
    },
    set_thumbnail: function(value) {
        this.$20 = value;
        return value;
    },
    $21: null,
    get_bounds: function() {
        return this.$21;
    },
    set_bounds: function(value) {
        this.$21 = value;
        return value;
    },
    get_isImage: function() {
        return true;
    },
    get_isTour: function() {
        return false;
    },
    get_isFolder: function() {
        return false;
    },
    get_isCloudCommunityItem: function() {
        return false;
    },
    get_readOnly: function() {
        return false;
    },
    get_children: function() {
        return [];
    }
}
wwtlib.ViewMoverKenBurnsStyle = function(from, to, time, fromDateTime, toDateTime) {
    if (Math.abs(from.lng - to.lng) > 180) {
        if (from.lng > to.lng) {
            from.lng -= 360;
        } else {
            from.lng += 360;
        }
    }
    this.$1 = fromDateTime;
    this.$2 = toDateTime;
    this.$5 = toDateTime - fromDateTime;
    this.$0 = from.copy();
    this.to = to.copy();
    this.$3 = Date.get_now();
    this.$4 = time;
}
wwtlib.ViewMoverKenBurnsStyle.prototype = {
    dampened: false,
    fastDirectionMove: false,
    $0: null,
    to: null,
    $1: null,
    $2: null,
    $3: null,
    $4: 0,
    $5: 0,
    $6: false,
    $7: false,
    get_complete: function() {
        return this.$6;
    },
    get_currentPosition: function() {
        var $0 = Date.get_now() - this.$3;
        var $1 = ($0) / 1000;
        var $2 = $1 / this.$4;
        if (!this.$7 && $2 >= 0.5) {
            this.$7 = true;
            if (this.$8 != null) {
                this.$8();
            }
        }
        if ($2 > 1) {
            $2 = 1;
            this.$6 = true;
            return this.to;
        }
        return wwtlib.CameraParameters.interpolate(this.$0, this.to, $2, this.dampened, this.fastDirectionMove);
    },
    get_currentDateTime: function() {
        var $0 = Date.get_now() - this.$3;
        var $1 = ($0) / 1000;
        var $2 = $1 / this.$4;
        var $3 = this.$5 * $2;
        var $4 = new Date(this.$1.getDate() + parseInt($3));
        return $4;
    },
    $8: null,
    get_midpoint: function() {
        return this.$8;
    },
    set_midpoint: function(value) {
        this.$8 = value;
        return value;
    },
    get_moveTime: function() {
        return this.$4;
    }
}
wwtlib.wwtlib$7 = function() {}
wwtlib.wwtlib$7.$A = function($p0, $p1) {
    var $0 = new wwtlib.wwtlib$7();
    $0.$C($p0, $p1);
    return $0;
}
wwtlib.wwtlib$7.$B = function($p0, $p1, $p2) {
    var $0 = new wwtlib.wwtlib$7();
    $0.$7 = $0.$8 = $p2;
    $0.$C($p0.copy(), $p1.copy());
    return $0;
}
wwtlib.wwtlib$7.prototype = {
    $0: null,
    $1: null,
    to: null,
    $2: null,
    $3: null,
    $4: 0,
    $5: 0,
    $6: 0,
    $7: 0.6,
    $8: 0.6,
    $9: 7,
    $C: function($p0, $p1) {
        if (Math.abs($p0.lng - $p1.lng) > 180) {
            if ($p0.lng > $p1.lng) {
                $p0.lng -= 360;
            } else {
                $p0.lng += 360;
            }
        }
        if ($p1.zoom <= 0) {
            $p1.zoom = 360;
        }
        if ($p0.zoom <= 0) {
            $p0.zoom = 360;
        }
        this.$0 = $p0;
        this.to = $p1;
        this.$3 = Date.get_now();
        var $0 = 360;
        var $1;
        var $2 = Math.abs($p0.lng - $p1.lng);
        var $3 = Math.abs($p0.lat - $p1.lat);
        var $4 = Math.sqrt($3 * $3 + $2 * $2);
        $0 = ($4 / 3) * 20;
        if ($0 > 360) {
            $0 = 360;
        }
        if ($0 < $p0.zoom) {
            $0 = $p0.zoom;
        }
        $1 = ($4 / 180) * (360 / $0) * this.$9;
        var $5 = Math.max(Math.abs($p0.angle - $p1.angle), Math.abs($p0.rotation - $p1.rotation));
        var $6 = Math.max(Math.abs(wwtlib._Util.$1($0, 2) - wwtlib._Util.$1($p0.zoom, 2)), $5);
        this.$4 = this.$7 * $6;
        this.$5 = this.$4 + $1;
        var $7 = Math.abs(wwtlib._Util.$1($0, 2) - wwtlib._Util.$1($p1.zoom, 2));
        this.$6 = this.$5 + Math.max((this.$8 * $7), $5);
        this.$1 = $p0.copy();
        this.$1.zoom = $0;
        this.$1.angle = ($p0.angle + $p1.angle) / 2;
        this.$1.rotation = ($p0.rotation + $p1.rotation) / 2;
        this.$2 = $p1.copy();
        this.$2.zoom = this.$1.zoom;
        this.$2.angle = this.$1.angle;
        this.$2.rotation = this.$1.rotation;
    },
    $D: false,
    $E: false,
    get_complete: function() {
        return this.$E;
    },
    get_currentPosition: function() {
        var $0 = Date.get_now() - this.$3;
        var $1 = ($0) / 1000;
        if ($11) {
            $2 = 1;
            this.$E = true;
            return this.to;
        }
        return wwtlib.CameraParameters.interpolate(this.$2, this.to, $2, true, false);
    }
},
get_currentDateTime: function() {
    wwtlib.SpaceTimeController.updateClock();
    return wwtlib.SpaceTimeController.get_now();
},
$F: null,
get_midpoint: function() {
    return this.$F;
},
set_midpoint: function($p0) {
    this.$F = $p0;
    return $p0;
},
get_moveTime: function() {
    return this.$6;
}
}
window.$0 = function() {
    var $0 = document.getElementById('canvas');
    var $1 = $0.getContext('2d');
    $1.fillStyle = 'rgb(80,0,0)';
    $1.fillRect(120, 120, 165, 160);
    $1.fillStyle = 'rgba(0, 0, 160, 0.5)';
    $1.fillRect(140, 140, 165, 160);
}
wwtlib.MercatorTile = function() {
    wwtlib.MercatorTile.initializeBase(this);
}
wwtlib.MercatorTile.create = function(level, X, Y, dataset, parent) {
    var $0 = new wwtlib.MercatorTile();
    $0.parent = parent;
    $0.level = level;
    $0.x = X;
    $0.y = Y;
    $0.dataset = dataset;
    $0.computeBoundingSphere();
    return $0;
}
wwtlib.MercatorTile.getCentrePointOffsetAsTileRatio = function(lat, lon, zoom) {
    var $0 = wwtlib.MercatorTile.absoluteLonToMetersAtZoom(lon, zoom);
    var $1 = ($0 / 256) - Math.floor($0 / 256);
    var $2 = wwtlib.MercatorTile.absoluteLatToMetersAtZoom(lat, zoom);
    var $3 = ($2 / 256) - Math.floor($2 / 256);
    return wwtlib.Vector2d.create($1, $3);
}
wwtlib.MercatorTile.relativeMetersToLatAtZoom = function(Y, zoom) {
    var $0 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    var $1 = Y * $0;
    return wwtlib.MercatorTile.$D(Math.PI / 2 - 2 * Math.atan(Math.exp(0 - $1 / 6378137)));
}
wwtlib.MercatorTile.relativeMetersToLonAtZoom = function(X, zoom) {
    var $0 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    var $1 = X * $0;
    return wwtlib.MercatorTile.$D($1 / 6378137);
}
wwtlib.MercatorTile.absoluteLatToMetersAtZoom = function(latitude, zoom) {
    var $0 = Math.sin(wwtlib.MercatorTile.$C(latitude));
    var $1 = 6378137 / 2 * Math.log((1 + $0) / (1 - $0));
    var $2 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    return parseInt((Math.round(20037508 - $1) / $2));
}
wwtlib.MercatorTile.absoluteMetersToLatAtZoom = function(Y, zoom) {
    var $0 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    var $1 = 20037508 - Y * $0;
    return wwtlib.MercatorTile.$D(Math.PI / 2 - 2 * Math.atan(Math.exp(0 - $1 / 6378137)));
}
wwtlib.MercatorTile.absoluteLonToMetersAtZoom = function(longitude, zoom) {
    var $0 = 6378137 * wwtlib.MercatorTile.$C(longitude);
    var $1 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    return parseInt((($0 + 20037508) / $1));
}
wwtlib.MercatorTile.absoluteMetersToLonAtZoom = function(X, zoom) {
    var $0 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    var $1 = X * $0 - 20037508;
    return wwtlib.MercatorTile.$D($1 / 6378137);
}
wwtlib.MercatorTile.absoluteLonToMetersAtZoomTile = function(longitude, zoom, tileX) {
    var $0 = 6378137 * wwtlib.MercatorTile.$C(longitude);
    var $1 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    return parseInt((($0 + 20037508) / $1));
}
wwtlib.MercatorTile.absoluteLatToMetersAtZoomTile = function(latitude, zoom, tileX) {
    var $0 = Math.sin(wwtlib.MercatorTile.$C(latitude));
    var $1 = 6378137 / 2 * Math.log((1 + $0) / (1 - $0));
    var $2 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    return parseInt((Math.round(20037508 - $1) / $2));
}
wwtlib.MercatorTile.absoluteMetersToLonAtZoomByTileY = function(X, zoom, tileY) {
    var $0 = wwtlib.MercatorTile.metersPerPixel2(zoom);
    var $1 = X * $0 - 20037508;
    return wwtlib.MercatorTile.$D($1 / 6378137);
}
wwtlib.MercatorTile.$C = function($p0) {
    return ($p0 * Math.PI / 180);
}
wwtlib.MercatorTile.metersPerPixel2 = function(zoom) {
    return (156543 / (1 < 1) ? $2.substr(1).toLowerCase() : '') + ' ';
}
return $1.trim();
}
wwtlib.Place.prototype = {
    $0: null,
    get_tag: function() {
        return this.$0;
    },
    set_tag: function(value) {
        this.$0 = value;
        return value;
    },
    $1: null,
    get_url: function() {
        return this.$1;
    },
    set_url: function(value) {
        this.$1 = value;
        return value;
    },
    $2: null,
    get_thumbnail: function() {
        return this.$2;
    },
    set_thumbnail: function(value) {
        this.$2 = value;
        return value;
    },
    $3: null,
    get_name: function() {
        return this.get_names()[0];
    },
    get_names: function() {
        if (String.isNullOrEmpty(this.$3)) {
            return ''.split(';');
        }
        return this.$3.split(';');
    },
    set_names: function(value) {
        this.$3 = wwtlib.wwtlib$2.$0(value);
        return value;
    },
    get_camParams: function() {
        if (this.get_classification() === 536870912 && this.$4.target === 20) {}
        return this.$4;
    },
    set_camParams: function(value) {
        this.$4 = value;
        return value;
    },
    updatePlanetLocation: function(jNow) {
        if (this.get_target() !== 65536 && this.get_target() !== 20) {}
    },
    get_location3d: function() {
        if (this.get_classification() === 536870912 || (!this.$5.x && !this.$5.y && !this.$5.z)) {
            this.$5 = wwtlib.Coordinates.raDecTo3d(this.get_RA(), this.get_dec());
        }
        return this.$5;
    },
    get_lat: function() {
        return this.get_camParams().lat;
    },
    set_lat: function(value) {
        this.$4.lat = value;
        return value;
    },
    get_lng: function() {
        return this.get_camParams().lng;
    },
    set_lng: function(value) {
        this.$4.lng = value;
        return value;
    },
    get_opacity: function() {
        return this.get_camParams().opacity;
    },
    set_opacity: function(value) {
        this.$4.opacity = value;
        return value;
    },
    htmlDescription: '',
    $6: '',
    get_constellation: function() {
        return this.$6;
    },
    set_constellation: function(value) {
        this.$6 = value;
        return value;
    },
    get_classification: function() {
        return this.$7;
    },
    set_classification: function(value) {
        this.$7 = value;
        return value;
    },
    get_type: function() {
        return this.$8;
    },
    set_type: function(value) {
        this.$8 = value;
        return value;
    },
    $9: 0,
    get_magnitude: function() {
        return this.$9;
    },
    set_magnitude: function(value) {
        this.$9 = value;
        return value;
    },
    $A: 0,
    get_distance: function() {
        return this.$A;
    },
    set_distance: function(value) {
        this.$A = value;
        return value;
    },
    angularSize: 60,
    get_zoomLevel: function() {
        return this.get_camParams().zoom;
    },
    set_zoomLevel: function(value) {
        this.$4.zoom = value;
        return value;
    },
    $B: null,
    $C: null,
    get_studyImageset: function() {
        return this.$C;
    },
    set_studyImageset: function(value) {
        this.$C = value;
        return value;
    },
    $D: null,
    get_backgroundImageset: function() {
        return this.$D;
    },
    set_backgroundImageset: function(value) {
        if (value != null) {
            this.set_type(value.get_dataSetType());
        }
        this.$D = value;
        return value;
    },
    $E: 0,
    get_searchDistance: function() {
        return this.$E;
    },
    set_searchDistance: function(value) {
        this.$E = value;
        return value;
    },
    $F: 50,
    get_elevation: function() {
        return this.$F;
    },
    set_elevation: function(value) {
        this.$F = value;
        return value;
    },
    $10: null,
    get_thumbnailUrl: function() {
        if (String.isNullOrEmpty(this.$10)) {
            if (this.$C != null && !String.isNullOrEmpty(this.$C.get_thumbnailUrl())) {
                return this.$C.get_thumbnailUrl();
            }
            if (this.$D != null && !String.isNullOrEmpty(this.$D.get_thumbnailUrl())) {
                return this.$D.get_thumbnailUrl();
            }
            var $0 = this.get_name();
            if ($0.indexOf(';') > -1) {
                $0 = $0.substr(0, $0.indexOf(';'));
            }
            if (this.get_classification() === 1) {
                return 'http://cdn.worldwidetelescope.org/wwtweb/thumbnail.aspx?name=star';
            }
            return 'http://cdn.worldwidetelescope.org/wwtweb/thumbnail.aspx?name=' + $0.toLowerCase();
        }
        return this.$10;
    },
    set_thumbnailUrl: function(value) {
        this.$10 = value;
        return value;
    },
    get_RA: function() {
        return this.get_camParams().get_RA();
    },
    set_RA: function(value) {
        this.$4.set_RA(value);
        return value;
    },
    get_dec: function() {
        return this.get_camParams().get_dec();
    },
    set_dec: function(value) {
        this.$4.set_dec(value);
        return value;
    },
    toString: function() {
        return this.$3;
    },
    $13: null,
    get_bounds: function() {
        return this.$13;
    },
    set_bounds: function(value) {
        this.$13 = value;
        return value;
    },
    get_isImage: function() {
        return this.$C != null || this.$D != null;
    },
    get_isTour: function() {
        return false;
    },
    get_isFolder: function() {
        return false;
    },
    get_children: function() {
        return [];
    },
    get_readOnly: function() {
        return true;
    },
    get_target: function() {
        return this.$4.target;
    },
    set_target: function(value) {
        this.$4.target = value;
        return value;
    },
    get_isCloudCommunityItem: function() {
        return false;
    }
}
wwtlib.ScriptInterface = function() {}
wwtlib.ScriptInterface.prototype = {
    add_ready: function(value) {
        this.$0 = ss.Delegate.combine(this.$0, value);
    },
    remove_ready: function(value) {
        this.$0 = ss.Delegate.remove(this.$0, value);
    },
    $0: null,
    $1: function() {
        if (this.$0 != null) {
            this.$0(this, new ss.EventArgs());
        }
    },
    add_collectionLoaded: function(value) {
        this.$2 = ss.Delegate.combine(this.$2, value);
    },
    remove_collectionLoaded: function(value) {
        this.$2 = ss.Delegate.remove(this.$2, value);
    },
    $2: null,
    $3: function($p0) {
        if (this.$2 != null) {
            this.$2(this, new wwtlib.CollectionLoadedEventArgs($p0));
        }
    },
    add_arrived: function(value) {
        this.$4 = ss.Delegate.combine(this.$4, value);
    },
    remove_arrived: function(value) {
        this.$4 = ss.Delegate.remove(this.$4, value);
    },
    $4: null,
    add_clicked: function(value) {
        this.$5 = ss.Delegate.combine(this.$5, value);
    },
    remove_clicked: function(value) {
        this.$5 = ss.Delegate.remove(this.$5, value);
    },
    $5: null,
    add_annotationClicked: function(value) {
        this.$6 = ss.Delegate.combine(this.$6, value);
    },
    remove_annotationClicked: function(value) {
        this.$6 = ss.Delegate.remove(this.$6, value);
    },
    $6: null,
    add_imageryLoaded: function(value) {
        this.$7 = ss.Delegate.combine(this.$7, value);
    },
    remove_imageryLoaded: function(value) {
        this.$7 = ss.Delegate.remove(this.$7, value);
    },
    $7: null,
    add_tourReady: function(value) {
        this.$8 = ss.Delegate.combine(this.$8, value);
    },
    remove_tourReady: function(value) {
        this.$8 = ss.Delegate.remove(this.$8, value);
    },
    $8: null,
    $9: function() {
        if (this.$7 != null) {
            this.$7(this, new ss.EventArgs());
        }
    },
    $A: function($p0, $p1) {
        if (this.$5 != null) {
            this.$5(this, new wwtlib.ArrivedEventArgs($p0, $p1, wwtlib.WWTControl.singleton.renderContext.viewCamera.zoom));
        }
    },
    onArrived: function(ra, dec, zoom) {
        if (this.$4 != null) {
            this.$4(this, new wwtlib.ArrivedEventArgs(ra, dec, zoom));
        }
    },
    $B: function($p0, $p1, $p2) {
        try {
            if (this.$6 != null) {
                this.$6(this, new wwtlib.AnnotationClickEventArgs($p0, $p1, $p2));
            }
        } catch($0) {}
    },
    gotoRaDecZoom: function(ra, dec, zoom, instant) {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.gotoRADecZoom(ra / 15, dec, zoom * 6, instant);
        }
    },
    setBackgroundImageByName: function(name) {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.setBackgroundImageByName(name);
        }
    },
    setForegroundImageByName: function(name) {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.setForegroundImageByName(name);
            wwtlib.WWTControl.singleton.renderContext.viewCamera.opacity = 100;
        }
    },
    setForegroundOpacity: function(opacity) {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.renderContext.viewCamera.opacity = opacity;
        }
    },
    hideUI: function(hide) {},
    loadTour: function(url) {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.playTour(url);
        }
    },
    hideTourFeedback: false,
    get_hideTourFeedback: function() {
        return this.hideTourFeedback;
    },
    set_hideTourFeedback: function(value) {
        this.hideTourFeedback = value;
        return value;
    },
    playTour: function() {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.playCurrentTour();
        }
    },
    stopTour: function() {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.stopCurrentTour();
        }
    },
    $C: null,
    $D: null,
    loadImageCollection: function(url) {
        this.$D = url;
        this.$C = new wwtlib.Folder();
        this.$C.loadFromUrl(url, ss.Delegate.create(this, function() {
            wwtlib._Wtml.$1(this.$C);
            this.$E();
        }));
    },
    $E: function() {
        this.$3(this.$D);
    },
    getRA: function() {
        if (wwtlib.WWTControl.singleton != null) {
            return wwtlib.WWTControl.singleton.renderContext.get_RA();
        }
        return 0;
    },
    getDec: function() {
        if (wwtlib.WWTControl.singleton != null) {
            return wwtlib.WWTControl.singleton.renderContext.get_dec();
        }
        return 0;
    },
    createPolygon: function(fill) {
        var $0 = new wwtlib.Poly();
        $0.set_fill(fill);
        return $0;
    },
    createPolyLine: function(fill) {
        return new wwtlib.PolyLine();
    },
    createCircle: function(fill) {
        var $0 = new wwtlib.Circle();
        $0.set_fill(fill);
        return $0;
    },
    addAnnotation: function(annotation) {
        if (annotation != null && Type.canCast(annotation, wwtlib.Annotation)) {
            if (wwtlib.WWTControl.singleton != null) {
                wwtlib.WWTControl.singleton.$1(annotation);
            }
        }
    },
    removeAnnotation: function(annotation) {
        if (annotation != null) {
            if (wwtlib.WWTControl.singleton != null) {
                wwtlib.WWTControl.singleton.$2(annotation);
            }
        }
    },
    clearAnnotations: function() {
        if (wwtlib.WWTControl.singleton != null) {
            wwtlib.WWTControl.singleton.$3();
        }
    },
    $F: false,
    get_smoothAnimation: function() {
        return this.$F;
    },
    set_smoothAnimation: function(value) {
        this.$F = value;
        return value;
    },
    loadVOTable: function(url, useCurrentView) {},
    get_fov: function() {
        if (wwtlib.WWTControl.singleton != null) {
            return wwtlib.WWTControl.singleton.renderContext.viewCamera.zoom / 6;
        }
        return 60;
    },
    settings: null
}
wwtlib.ArrivedEventArgs = function(ra, dec, zoom) {
    wwtlib.ArrivedEventArgs.initializeBase(this);
    this.set_RA(ra * 15);
    this.set_dec(dec);
    this.set_zoom(zoom / 6);
}
wwtlib.ArrivedEventArgs.prototype = {
    ra: 0,
    get_RA: function() {
        return this.ra;
    },
    set_RA: function(value) {
        this.ra = value;
        return value;
    },
    $1_0: 0,
    get_dec: function() {
        return this.$1_0;
    },
    set_dec: function(value) {
        this.$1_0 = value;
        return value;
    },
    $1_1: 0,
    get_zoom: function() {
        return this.$1_1;
    },
    set_zoom: function(value) {
        this.$1_1 = value;
        return value;
    }
}
wwtlib.AnnotationClickEventArgs = function(ra, dec, id) {
    wwtlib.AnnotationClickEventArgs.initializeBase(this);
    this.set_RA(ra * 15);
    this.set_dec(dec);
    this.set_id(id);
}
wwtlib.AnnotationClickEventArgs.prototype = {
    ra: 0,
    get_RA: function() {
        return this.ra;
    },
    set_RA: function(value) {
        this.ra = value;
        return value;
    },
    $1_0: 0,
    get_dec: function() {
        return this.$1_0;
    },
    set_dec: function(value) {
        this.$1_0 = value;
        return value;
    },
    id: null,
    get_id: function() {
        return this.id;
    },
    set_id: function(value) {
        this.id = value;
        return value;
    }
}
wwtlib.CollectionLoadedEventArgs = function(url) {
    wwtlib.CollectionLoadedEventArgs.initializeBase(this);
    this.$1_0 = url;
}
wwtlib.CollectionLoadedEventArgs.prototype = {
    $1_0: null,
    get_url: function() {
        return this.$1_0;
    },
    set_url: function(value) {
        this.$1_0 = value;
        return value;
    }
}
wwtlib.SpaceTimeController = function() {}
wwtlib.SpaceTimeController.updateClock = function() {
    if (wwtlib.SpaceTimeController.$3) {
        var $0 = Date.get_now();
        if (wwtlib.SpaceTimeController.$4 !== 1) {
            var $1 = $0 - wwtlib.SpaceTimeController.$0;
            var $2 = ($1 * wwtlib.SpaceTimeController.$4);
            wwtlib.SpaceTimeController.$1 += $2;
        }
        wwtlib.SpaceTimeController.$0 = $0;
        try {
            wwtlib.SpaceTimeController.$2 = new Date($0.getDate() + wwtlib.SpaceTimeController.$1);
        } catch($3) {
            wwtlib.SpaceTimeController.$2 = new Date(1, 12, 25, 23, 59, 59);
            wwtlib.SpaceTimeController.$1 = wwtlib.SpaceTimeController.$2 - Date.get_now();
        }
        if (wwtlib.SpaceTimeController.$2.getFullYear() > 4000) {
            wwtlib.SpaceTimeController.$2 = new Date(4000, 12, 31, 23, 59, 59);
            wwtlib.SpaceTimeController.$1 = wwtlib.SpaceTimeController.$2 - Date.get_now();
        }
        if (wwtlib.SpaceTimeController.$2.getFullYear() < 1) {
            wwtlib.SpaceTimeController.$2 = new Date(0, 12, 25, 23, 59, 59);
            wwtlib.SpaceTimeController.$1 = wwtlib.SpaceTimeController.$2 - Date.get_now();
        }
    }
}
wwtlib.SpaceTimeController.getTimeForFutureTime = function(delta) {
    try {
        if (wwtlib.SpaceTimeController.$3) {
            var $0 = new Date((wwtlib.SpaceTimeController.get_now().getDate() + (delta * 1000) * wwtlib.SpaceTimeController.$4));
            return $0;
        } else {
            return wwtlib.SpaceTimeController.get_now();
        }
    } catch($1) {
        return wwtlib.SpaceTimeController.get_now();
    }
}
wwtlib.SpaceTimeController.getJNowForFutureTime = function(delta) {
    try {
        if (wwtlib.SpaceTimeController.$3) {
            var $0 = new Date(wwtlib.SpaceTimeController.get_now().getDate() + parseInt((delta * 1000 * wwtlib.SpaceTimeController.$4)));
            return wwtlib.SpaceTimeController.utcToJulian($0);
        } else {
            return wwtlib.SpaceTimeController.utcToJulian(wwtlib.SpaceTimeController.get_now());
        }
    } catch($1) {
        return wwtlib.SpaceTimeController.utcToJulian(wwtlib.SpaceTimeController.get_now());
    }
}
wwtlib.SpaceTimeController.get_now = function() {
    return new Date(wwtlib.SpaceTimeController.$2.getUTCDate());
}
wwtlib.SpaceTimeController.set_now = function(value) {
    wwtlib.SpaceTimeController.$2.setUTCDate(value.getDate());
    wwtlib.SpaceTimeController.$1 = wwtlib.SpaceTimeController.$2 - Date.get_now();
    wwtlib.SpaceTimeController.$0 = Date.get_now();
    return value;
}
wwtlib.SpaceTimeController.syncTime = function() {
    wwtlib.SpaceTimeController.$1 = 0;
    wwtlib.SpaceTimeController.$2 = Date.get_now();
    wwtlib.SpaceTimeController.$3 = true;
}
wwtlib.SpaceTimeController.get_jNow = function() {
    return wwtlib.SpaceTimeController.utcToJulian(wwtlib.SpaceTimeController.get_now());
}
wwtlib.SpaceTimeController.get_syncToClock = function() {
    return wwtlib.SpaceTimeController.$3;
}
wwtlib.SpaceTimeController.set_syncToClock = function(value) {
    if (wwtlib.SpaceTimeController.$3 !== value) {
        wwtlib.SpaceTimeController.$3 = value;
        if (value) {
            wwtlib.SpaceTimeController.$0 = Date.get_now();
            wwtlib.SpaceTimeController.$1 = wwtlib.SpaceTimeController.$2 - Date.get_now();
        } else {
            wwtlib.SpaceTimeController.$2 = new Date(Date.get_now().getDate() + wwtlib.SpaceTimeController.$1);
        }
    }
    return value;
}
wwtlib.SpaceTimeController.get_timeRate = function() {
    return wwtlib.SpaceTimeController.$4;
}
wwtlib.SpaceTimeController.set_timeRate = function(value) {
    wwtlib.SpaceTimeController.$4 = value;
    return value;
}
wwtlib.SpaceTimeController.get_altitude = function() {
    return wwtlib.SpaceTimeController.$6;
}
wwtlib.SpaceTimeController.set_altitude = function(value) {
    wwtlib.SpaceTimeController.$6 = value;
    return value;
}
wwtlib.SpaceTimeController.get_location = function() {
    wwtlib.SpaceTimeController.$5 = wwtlib.Coordinates.fromLatLng(wwtlib.Settings.get_active().get_locationLat(), wwtlib.Settings.get_active().get_locationLng());
    wwtlib.SpaceTimeController.$6 = wwtlib.Settings.get_active().get_locationAltitude();
    return wwtlib.SpaceTimeController.$5;
}
wwtlib.SpaceTimeController.set_location = function(value) {
    if (wwtlib.Settings.get_global().get_locationLat() !== value.get_lat()) {
        wwtlib.Settings.get_global().set_locationLat(value.get_lat());
    }
    if (wwtlib.Settings.get_global().get_locationLng() !== value.get_lng()) {
        wwtlib.Settings.get_global().set_locationLng(value.get_lng());
    }
    wwtlib.SpaceTimeController.$5 = value;
    return value;
}
wwtlib.SpaceTimeController.utcToJulian = function(utc) {
    var $0 = utc.getFullYear();
    var $1 = utc.getMonth();
    var $2 = utc.getDay();
    var $3 = utc.getHours();
    var $4 = utc.getMinutes();
    var $5 = utc.getSeconds() + utc.getMilliseconds() / 1000;
    var $6 = $2 + ($3 / 24) + ($4 / 1440) + ($5 / 86400);
    return wwtlib.SpaceTimeController.dateToJD($0, $1, $6, true);
}
wwtlib.SpaceTimeController.dateToJD = function(Year, Month, Day, bGregorianCalendar) {
    var $0 = Year;
    var $1 = Month;
    if ($1 < 3) {
        $0 = $0 - 1;
        $1 = $1 + 12;
    }
    var $2 = 0;
    var $3 = 0;
    if (bGregorianCalendar) {
        $2 = parseInt(($0 / 100));
        $3 = 2 - $2 + parseInt(($2 / 4));
    }
    return parseInt((365.25 * ($0 + 4716))) + parseInt((30.6001 * ($1 + 1))) + Day + $3 - 1524.5;
}
wwtlib.TangentTile = function() {
    wwtlib.TangentTile.initializeBase(this);
}
wwtlib.TangentTile.create = function(level, x, y, dataset, parent) {
    var $0 = new wwtlib.TangentTile();
    $0.parent = parent;
    $0.level = level;
    $0.x = x;
    $0.y = y;
    $0.dataset = dataset;
    $0.$A = !dataset.get_bottomsUp();
    $0.computeBoundingSphere();
    return $0;
}
wwtlib.TangentTile.prototype = {
    $A: true,
    computeBoundingSphere: function() {
        if (!this.$A) {
            this.computeBoundingSphereBottomsUp();
            return;
        }
        var $0 = this.dataset.get_baseTileDegrees() / Math.pow(2, this.level);
        var $1 = ((this.dataset.get_baseTileDegrees() / 2 - ((this.y) * $0)) + this.dataset.get_offsetY());
        var $2 = ((this.dataset.get_baseTileDegrees() / 2 - (((this.y + 1)) * $0)) + this.dataset.get_offsetY());
        var $3 = (((this.x * $0) - this.dataset.get_baseTileDegrees() / this.dataset.get_widthFactor()) + this.dataset.get_offsetX());
        var $4 = (((((this.x + 1)) * $0) - this.dataset.get_baseTileDegrees() / this.dataset.get_widthFactor()) + this.dataset.get_offsetX());
        var $5 = ($1 + $2) / 2;
        var $6 = ($3 + $4) / 2;
        this.sphereCenter = this.geoTo3dTan($5, $6);
        this.topLeft = this.geoTo3dTan($1, $3);
        this.bottomRight = this.geoTo3dTan($2, $4);
        this.topRight = this.geoTo3dTan($1, $4);
        this.bottomLeft = this.geoTo3dTan($2, $3);
        var $7 = this.geoTo3dTan($1, $3);
        $0 = $4 - $3;
        $7.subtract(this.sphereCenter);
        this.sphereRadius = $7.length();
    },
    geoTo3dTan: function(lat, lng) {
        lng = -lng;
        var $0 = this.dataset.get_baseTileDegrees() / 2;
        var $1 = Math.tan($0 * wwtlib.Tile.RC);
        return this.dataset.get_matrix().transform(wwtlib.Vector3d.create(1, (lat / $0 * $1), (lng / $0 * $1)));
    },
    computeBoundingSphereBottomsUp: function() {
        var $0 = this.dataset.get_baseTileDegrees() / (Math.pow(2, this.level));
        var $1 = (this.dataset.get_baseTileDegrees() / 2 + (((this.y + 1)) * $0)) + this.dataset.get_offsetY();
        var $2 = (this.dataset.get_baseTileDegrees() / 2 + ((this.y) * $0)) + this.dataset.get_offsetY();
        var $3 = ((this.x * $0) - this.dataset.get_baseTileDegrees() / this.dataset.get_widthFactor()) + this.dataset.get_offsetX();
        var $4 = ((((this.x + 1)) * $0) - this.dataset.get_baseTileDegrees() / this.dataset.get_widthFactor()) + this.dataset.get_offsetX();
        var $5 = ($1 + $2) / 2;
        var $6 = ($3 + $4) / 2;
        this.topLeft = this.geoTo3dTan($1, $3);
        this.bottomRight = this.geoTo3dTan($2, $4);
        this.topRight = this.geoTo3dTan($1, $4);
        this.bottomLeft = this.geoTo3dTan($2, $3);
        var $7 = this.topLeft;
        $0 = $4 - $3;
    },
    createGeometry: function(renderContext) {
        wwtlib.TangentTile.callBaseMethod(this, 'createGeometry', [renderContext]);
        if (this.geometryCreated) {
            return true;
        }
        this.geometryCreated = true;
        for (var $E = 0; $E < 4; $E++) {
            this.$0[$E] = [];
        }
        var $0 = this.dataset.get_baseTileDegrees() / Math.pow(2, this.level);
        var $1 = ((this.dataset.get_baseTileDegrees() / 2 - ((this.y) * $0)) + this.dataset.get_offsetY());
        var $2 = ((this.dataset.get_baseTileDegrees() / 2 - (((this.y + 1)) * $0)) + this.dataset.get_offsetY());
        var $3 = (((this.x * $0) - this.dataset.get_baseTileDegrees() / this.dataset.get_widthFactor()) + this.dataset.get_offsetX());
        var $4 = (((((this.x + 1)) * $0) - this.dataset.get_baseTileDegrees() / this.dataset.get_widthFactor()) + this.dataset.get_offsetX());
        var $5 = $4 - $3;
        var $6 = $2 - $1;
        this.topLeft = this.geoTo3dTan($1, $3);
        this.bottomRight = this.geoTo3dTan($2, $4);
        this.topRight = this.geoTo3dTan($1, $4);
        this.bottomLeft = this.geoTo3dTan($2, $3);
        var $7 = ($1 + $2) / 2;
        var $8 = ($3 + $4) / 2;
        var $9 = wwtlib.Vector3d.midPoint(this.topLeft, this.bottomRight);
        var $A = wwtlib.Vector3d.midPoint(this.topLeft, this.bottomLeft);
        var $B = wwtlib.Vector3d.midPoint(this.topRight, this.bottomRight);
        var $C = wwtlib.Vector3d.midPoint(this.topLeft, this.topRight);
        var $D = wwtlib.Vector3d.midPoint(this.bottomLeft, this.bottomRight);
        this.$0[0].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos(this.topLeft, 0, 0), wwtlib.PositionTexture.createPos($A, 0, 0.5), wwtlib.PositionTexture.createPos($C, 0.5, 0), this.texture, this.level));
        this.$0[0].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos($A, 0, 0.5), wwtlib.PositionTexture.createPos($9, 0.5, 0.5), wwtlib.PositionTexture.createPos($C, 0.5, 0), this.texture, this.level));
        this.$0[1].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos($C, 0.5, 0), wwtlib.PositionTexture.createPos($B, 1, 0.5), wwtlib.PositionTexture.createPos(this.topRight, 1, 0), this.texture, this.level));
        this.$0[1].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos($C, 0.5, 0), wwtlib.PositionTexture.createPos($9, 0.5, 0.5), wwtlib.PositionTexture.createPos($B, 1, 0.5), this.texture, this.level));
        this.$0[2].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos($A, 0, 0.5), wwtlib.PositionTexture.createPos($D, 0.5, 1), wwtlib.PositionTexture.createPos($9, 0.5, 0.5), this.texture, this.level));
        this.$0[2].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos($A, 0, 0.5), wwtlib.PositionTexture.createPos(this.bottomLeft, 0, 1), wwtlib.PositionTexture.createPos($D, 0.5, 1), this.texture, this.level));
        this.$0[3].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos($9, 0.5, 0.5), wwtlib.PositionTexture.createPos(this.bottomRight, 1, 1), wwtlib.PositionTexture.createPos($B, 1, 0.5), this.texture, this.level));
        this.$0[3].add(wwtlib.RenderTriangle.create(wwtlib.PositionTexture.createPos($9, 0.5, 0.5), wwtlib.PositionTexture.createPos($D, 0.5, 1), wwtlib.PositionTexture.createPos(this.bottomRight, 1, 1), this.texture, this.level));
        return true;
    },
    isTileBigEnough: function(renderContext) {
        var $0 = ((this.dataset.get_baseTileDegrees() / 256) / Math.pow(2, this.level)) * 3600;
        return (renderContext.get_fovScale() < $0);
    }
}
wwtlib.Tour = function() {}
wwtlib.Tour.$0 = function($p0) {
    var $0 = new wwtlib.Tour();
    if ($p0.attributes.getNamedItem('ID') != null) {
        $0.id = $p0.attributes.getNamedItem('ID').nodeValue;
    }
    if ($p0.attributes.getNamedItem('TourUrl') != null) {
        $0.$14 = $p0.attributes.getNamedItem('TourUrl').nodeValue;
    }
    if ($p0.attributes.getNamedItem('Title') != null) {
        $0.$2 = $p0.attributes.getNamedItem('Title').nodeValue;
    }
    if ($p0.attributes.getNamedItem('Description') != null) {
        $0.$6 = $p0.attributes.getNamedItem('Description').nodeValue;
    }
    if ($p0.attributes.getNamedItem('Classification') != null) {
        switch ($p0.attributes.getNamedItem('Classification').nodeValue) {
        case 'Star':
            $0.$7 = 1;
            break;
        case 'Supernova':
            $0.$7 = 2;
            break;
        case 'BlackHole':
            $0.$7 = 4;
            break;
        case 'NeutronStar':
            $0.$7 = 8;
            break;
        case 'DoubleStar':
            $0.$7 = 16;
            break;
        case 'MultipleStars':
            $0.$7 = 32;
            break;
        case 'Asterism':
            $0.$7 = 64;
            break;
        case 'Constellation':
            $0.$7 = 128;
            break;
        case 'OpenCluster':
            $0.$7 = 256;
            break;
        case 'GlobularCluster':
            $0.$7 = 512;
            break;
        case 'NebulousCluster':
            $0.$7 = 1024;
            break;
        case 'Nebula':
            $0.$7 = 2048;
            break;
        case 'EmissionNebula':
            $0.$7 = 4096;
            break;
        case 'PlanetaryNebula':
            $0.$7 = 8192;
            break;
        case 'ReflectionNebula':
            $0.$7 = 16384;
            break;
        case 'DarkNebula':
            $0.$7 = 32768;
            break;
        case 'GiantMolecularCloud':
            $0.$7 = 65536;
            break;
        case 'SupernovaRemnant':
            $0.$7 = 131072;
            break;
        case 'InterstellarDust':
            $0.$7 = 262144;
            break;
        case 'Quasar':
            $0.$7 = 524288;
            break;
        case 'Galaxy':
            $0.$7 = 1048576;
            break;
        case 'SpiralGalaxy':
            $0.$7 = 2097152;
            break;
        case 'IrregularGalaxy':
            $0.$7 = 4194304;
            break;
        case 'EllipticalGalaxy':
            $0.$7 = 8388608;
            break;
        case 'Knot':
            $0.$7 = 16777216;
            break;
        case 'PlateDefect':
            $0.$7 = 33554432;
            break;
        case 'ClusterOfGalaxies':
            $0.$7 = 67108864;
            break;
        case 'OtherNGC':
            $0.$7 = 134217728;
            break;
        case 'Unidentified':
            $0.$7 = 268435456;
            break;
        case 'SolarSystem':
            $0.$7 = 536870912;
            break;
        case 'Unfiltered':
            $0.$7 = 1073741823;
            break;
        case 'Stellar':
            $0.$7 = 63;
            break;
        case 'StellarGroupings':
            $0.$7 = 2032;
            break;
        case 'Nebulae':
            $0.$7 = 523264;
            break;
        case 'Galactic':
            $0.$7 = 133693440;
            break;
        case 'Other':
            $0.$7 = 436207616;
            break;
        default:
            break;
        }
    }
    if ($p0.attributes.getNamedItem('AuthorEmail') != null) {
        $0.$8 = $p0.attributes.getNamedItem('AuthorEmail').nodeValue;
    }
    if ($p0.attributes.getNamedItem('Author') != null) {
        $0.$9 = $p0.attributes.getNamedItem('Author').nodeValue;
    }
    if ($p0.attributes.getNamedItem('AuthorURL') != null) {
        $0.$B = $p0.attributes.getNamedItem('AuthorURL').nodeValue;
    }
    if ($p0.attributes.getNamedItem('AverageRating') != null) {
        $0.$C = parseFloat($p0.attributes.getNamedItem('AverageRating').nodeValue);
    }
    if ($p0.attributes.getNamedItem('LengthInSecs') != null) {
        $0.$D = parseFloat($p0.attributes.getNamedItem('LengthInSecs').nodeValue);
    }
    if ($p0.attributes.getNamedItem('OrganizationUrl') != null) {
        $0.$5 = $p0.attributes.getNamedItem('OrganizationUrl').nodeValue;
    }
    if ($p0.attributes.getNamedItem('OrganizationName') != null) {
        $0.$4 = $p0.attributes.getNamedItem('OrganizationName').nodeValue;
    }
    if ($p0.attributes.getNamedItem('RelatedTours') != null) {
        $0.$11 = $p0.attributes.getNamedItem('RelatedTours').nodeValue;
    }
    if ($p0.attributes.getNamedItem('Keywords') != null) {
        $0.$10 = $p0.attributes.getNamedItem('Keywords').nodeValue;
    }
    return $0;
}
wwtlib.Tour.prototype = {
    $1: 0,
    $2: null,
    $3: null,
    $4: null,
    $5: null,
    id: null,
    $6: null,
    $7: 0,
    $8: null,
    $9: null,
    $A: null,
    $B: null,
    $C: 0,
    $D: 0,
    $E: null,
    $F: null,
    $10: null,
    $11: null,
    get_name: function() {
        return this.$2;
    },
    $12: null,
    get_thumbnail: function() {
        return this.$12;
    },
    set_thumbnail: function(value) {
        this.$12 = value;
        return value;
    },
    $13: '',
    get_thumbnailUrl: function() {
        if (!String.isNullOrEmpty(this.$13)) {
            return this.$13;
        } else {
            return String.format('http://cdn.worldwidetelescope.org/wwtweb/GetTourThumbnail.aspx?GUID={0}', this.id);
        }
    },
    set_thumbnailUrl: function(value) {
        this.$13 = value;
        return value;
    },
    $14: null,
    get_tourUrl: function() {
        if (String.isNullOrEmpty(this.$14)) {
            return String.format('http://cdn.worldwidetelescope.org/wwtweb/GetTour.aspx?GUID={0}', this.id);
        } else {
            return this.$14;
        }
    },
    set_tourUrl: function(value) {
        this.$14 = value;
        return value;
    },
    $15: null,
    get_bounds: function() {
        return this.$15;
    },
    set_bounds: function(value) {
        this.$15 = value;
        return value;
    },
    get_isImage: function() {
        return false;
    },
    get_isTour: function() {
        return true;
    },
    get_isFolder: function() {
        return false;
    },
    get_isCloudCommunityItem: function() {
        return false;
    },
    get_readOnly: function() {
        return false;
    },
    get_children: function() {
        return [];
    }
}
wwtlib.Overlay = function() {
    this.id = (wwtlib.Overlay.nextId++).toString();
    this.$9 = new wwtlib.Color();
    this.$10 = wwtlib.Colors.get_white();
}
wwtlib.Overlay.$14 = function($p0, $p1) {
    if ($p1.attributes == null) {
        return null;
    }
    if ($p1.attributes.getNamedItem('Type') == null) {
        return null;
    }
    var $0 = $p1.attributes.getNamedItem('Type').nodeValue;
    var $1 = $0.replaceAll('TerraViewer.', '');
    var $2 = null;
    switch ($1) {
    case 'AudioOverlay':
        $2 = new wwtlib.AudioOverlay();
        break;
    case 'BitmapOverlay':
        $2 = new wwtlib.BitmapOverlay();
        break;
    case 'FlipBookOverlay':
        $2 = new wwtlib.FlipbookOverlay();
        break;
    case 'ShapeOverlay':
        $2 = new wwtlib.ShapeOverlay();
        break;
    case 'TextOverlay':
        $2 = new wwtlib.TextOverlay();
        break;
    default:
        return null;
    }
    $2.$1 = $p0;
    $2.$15($p1);
    return $2;
}
wwtlib.Overlay.prototype = {
    isDesignTimeOnly: false,
    $0: null,
    get_name: function() {
        return this.$0;
    },
    set_name: function(value) {
        this.$0 = value;
        return value;
    },
    $1: null,
    get_owner: function() {
        return this.$1;
    },
    set_owner: function(value) {
        this.$1 = value;
        return value;
    },
    $2: '',
    get_url: function() {
        return this.$2;
    },
    set_url: function(value) {
        this.$2 = value;
        return value;
    },
    $3: '',
    get_linkID: function() {
        return this.$3;
    },
    set_linkID: function(value) {
        this.$3 = value;
        return value;
    },
    play: function() {},
    pause: function() {},
    stop: function() {},
    seek: function(time) {},
    draw3D: function(renderContext, designTime) {},
    cleanUp: function() {
        if (this.texture != null) {
            this.texture = null;
        }
    },
    initializeTexture: function() {},
    cleanUpGeometry: function() {
        this.currentRotation = 0;
    },
    initiaizeGeometry: function() {},
    updateRotation: function() {},
    $4: false,
    get_animate: function() {
        return this.$4;
    },
    set_animate: function(value) {
        if (this.$4 !== value) {
            this.$4 = value;
            if (this.$4) {
                this.$6 = this.x;
                this.$7 = this.y;
                this.$C = this.$12;
                this.$9 = this.$10;
                this.$A = this.$E;
                this.$B = this.$F;
                this.cleanUpGeometry();
            } else {
                this.$6 = this.x = this.get_x();
                this.$7 = this.y = this.get_y();
                this.$C = this.$12 = this.get_rotationAngle();
                this.$9 = this.$10 = this.get_color();
                this.$A = this.$E = this.get_width();
                this.$B = this.$F = this.get_height();
                this.cleanUpGeometry();
                this.$5 = 0;
            }
        }
        return value;
    },
    $5: 0,
    get_tweenFactor: function() {
        return this.$5;
    },
    set_tweenFactor: function(value) {
        if (!this.$4) {
            this.$5 = 0;
        } else {
            if (this.$5 !== value) {
                this.$5 = value;
                this.cleanUpGeometry();
            }
        }
        return value;
    },
    $6: 0,
    $7: 0,
    $8: 0,
    $A: 0,
    $B: 0,
    $C: 0,
    $D: 0,
    get_anchor: function() {
        return this.$D;
    },
    set_anchor: function(value) {
        this.$D = value;
        return value;
    },
    get_position: function() {
        return wwtlib.Vector2d.create(this.get_x(), this.get_y());
    },
    set_position: function(value) {
        this.set_x(value.x);
        this.set_y(value.y);
        return value;
    },
    x: 0,
    get_x: function() {
        return (this.x * (1 - this.$5)) + (this.$6 * this.$5);
    },
    set_x: function(value) {
        if (this.$5 < 0.5) {
            if (this.x !== value) {
                this.x = value;
                this.cleanUpGeometry();
            }
        } else {
            if (this.$6 !== value) {
                this.$6 = value;
                this.cleanUpGeometry();
            }
        }
        return value;
    },
    y: 0,
    get_y: function() {
        return (this.y * (1 - this.$5)) + (this.$7 * this.$5);
    },
    set_y: function(value) {
        if (this.$5 < 0.5) {
            if (this.y !== value) {
                this.y = value;
                this.cleanUpGeometry();
            }
        } else {
            if (this.$7 !== value) {
                this.$7 = value;
                this.cleanUpGeometry();
            }
        }
        return value;
    },
    $E: 0,
    get_width: function() {
        return (this.$E * (1 - this.$5)) + (this.$A * this.$5);
    },
    set_width: function(value) {
        if (value < 5 && !!value) {
            value = 5;
        }
        if (this.$5 < 0.5) {
            if (this.$E !== value) {
                this.$E = value;
                this.cleanUpGeometry();
            }
        } else {
            if (this.$A !== value) {
                this.$A = value;
                this.cleanUpGeometry();
            }
        }
        return value;
    },
    $F: 0,
    get_height: function() {
        return (this.$F * (1 - this.$5)) + (this.$B * this.$5);
    },
    set_height: function(value) {
        if (value < 5 && !!value) {
            value = 5;
        }
        if (this.$5 < 0.5) {
            if (this.$F !== value) {
                this.$F = value;
                this.cleanUpGeometry();
            }
        } else {
            if (this.$B !== value) {
                this.$B = value;
                this.cleanUpGeometry();
            }
        }
        return value;
    },
    get_color: function() {
        var $0 = parseInt(((this.$10.r * (1 - this.$5)) + (this.$9.r * this.$5)));
        var $1 = parseInt(((this.$10.g * (1 - this.$5)) + (this.$9.g * this.$5)));
        var $2 = parseInt(((this.$10.b * (1 - this.$5)) + (this.$9.b * this.$5)));
        var $3 = parseInt(((this.$10.a * (1 - this.$5)) + (this.$9.a * this.$5)));
        return wwtlib.Color.fromArgb(Math.max(0, Math.min(255, $3)), Math.max(0, Math.min(255, $0)), Math.max(0, Math.min(255, $1)), Math.max(0, Math.min(255, $2)));
    },
    set_color: function(value) {
        if (this.$5 < 0.5) {
            if (this.$10 !== value) {
                this.$10 = value;
                this.cleanUpGeometry();
            }
        } else {
            if (this.$9 !== value) {
                this.$9 = value;
                this.cleanUpGeometry();
            }
        }
        return value;
    },
    $11: 0.5,
    get_opacity: function() {
        return this.get_color().a / 255;
    },
    set_opacity: function(value) {
        var $0 = this.get_color();
        this.set_color(wwtlib.Color.fromArgb(Math.min(255, parseInt((value * 255))), $0.r, $0.g, $0.b));
        this.$11 = value;
        return value;
    },
    $12: 0,
    currentRotation: 0,
    get_rotationAngle: function() {
        return (this.$12 * (1 - this.$5)) + (this.$C * this.$5);
    },
    set_rotationAngle: function(value) {
        if (this.$5 < 0.5) {
            if (this.$12 !== value) {
                this.$12 = value;
                this.cleanUpGeometry();
            }
        } else {
            if (this.$C !== value) {
                this.$C = value;
                this.cleanUpGeometry();
            }
        }
        return value;
    },
    texture: null,
    hitTest: function(pntTest) {
        return false;
    },
    $13: null,
    get_bounds: function() {
        return this.$13;
    },
    set_bounds: function(value) {
        this.$13 = value;
        return value;
    },
    $15: function($p0) {
        this.id = $p0.attributes.getNamedItem('Id').nodeValue;
        this.set_name($p0.attributes.getNamedItem('Name').nodeValue);
        this.x = parseFloat($p0.attributes.getNamedItem('X').nodeValue);
        this.y = parseFloat($p0.attributes.getNamedItem('Y').nodeValue);
        this.$E = parseFloat($p0.attributes.getNamedItem('Width').nodeValue);
        this.$F = parseFloat($p0.attributes.getNamedItem('Height').nodeValue);
        this.$12 = parseFloat($p0.attributes.getNamedItem('Rotation').nodeValue);
        this.$10 = wwtlib.Color.load($p0.attributes.getNamedItem('Color').nodeValue);
        if ($p0.attributes.getNamedItem('Url') != null) {
            this.set_url($p0.attributes.getNamedItem('Url').nodeValue);
        }
        if ($p0.attributes.getNamedItem('LinkID') != null) {
            this.set_linkID($p0.attributes.getNamedItem('LinkID').nodeValue);
        }
        if ($p0.attributes.getNamedItem('Animate') != null) {
            this.$4 = Boolean.parse($p0.attributes.getNamedItem('Animate').nodeValue);
            if (this.$4) {
                this.$6 = parseFloat($p0.attributes.getNamedItem('EndX').nodeValue);
                this.$7 = parseFloat($p0.attributes.getNamedItem('EndY').nodeValue);
                this.$9 = wwtlib.Color.load($p0.attributes.getNamedItem('EndColor').nodeValue);
                this.$A = parseFloat($p0.attributes.getNamedItem('EndWidth').nodeValue);
                this.$B = parseFloat($p0.attributes.getNamedItem('EndHeight').nodeValue);
                this.$C = parseFloat($p0.attributes.getNamedItem('EndRotation').nodeValue);
            }
        }
        this.initializeFromXml($p0);
    },
    initializeFromXml: function(node) {},
    toString: function() {
        return this.get_name();
    }
}
wwtlib.BitmapOverlay = function() {
    wwtlib.BitmapOverlay.initializeBase(this);
}
wwtlib.BitmapOverlay.create = function(renderContext, owner, image) {
    var $0 = new wwtlib.BitmapOverlay();
    $0.set_owner(owner);
    $0.$16 = (wwtlib.Overlay.nextId++).toString() + '.png';
    $0.set_name(owner.getNextDefaultName('Image'));
    $0.set_x(0);
    $0.set_y(0);
    return $0;
}
wwtlib.BitmapOverlay.prototype = {
    $16: null,
    copy: function(owner) {
        var $0 = new wwtlib.BitmapOverlay();
        $0.set_owner(owner);
        $0.$16 = this.$16;
        $0.set_x(this.get_x());
        $0.set_y(this.get_y());
        $0.set_width(this.get_width());
        $0.set_height(this.get_height());
        $0.set_color(this.get_color());
        $0.set_opacity(this.get_opacity());
        $0.set_rotationAngle(this.get_rotationAngle());
        $0.set_name(this.get_name() + ' - Copy');
        return $0;
    },
    cleanUp: function() {
        this.texture = null;
    },
    $17: false,
    initializeTexture: function() {
        try {
            this.texture = this.get_owner().get_owner().getCachedTexture(this.$16, ss.Delegate.create(this, function() {
                this.$17 = true;
            }));
            if (!this.get_width() && !this.get_height()) {}
        } catch($0) {}
    },
    $18: null,
    draw3D: function(renderContext, designTime) {
        if (this.texture == null) {
            this.initializeTexture();
        }
        if (!this.$17) {
            return;
        }
        var $0 = renderContext.device;
        $0.save();
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.globalAlpha = this.get_opacity();
        $0.drawImage(this.texture, -this.get_width() / 2, -this.get_height() / 2, this.get_width(), this.get_height());
        $0.restore();
    },
    initializeFromXml: function(node) {
        var $0 = wwtlib._Util.$6(node, 'Bitmap');
        this.$16 = $0.attributes.getNamedItem('Filename').nodeValue;
    }
}
wwtlib.TextOverlay = function() {
    wwtlib.TextOverlay.initializeBase(this);
}
wwtlib.TextOverlay.prototype = {
    textObject: null,
    get_color: function() {
        return wwtlib.TextOverlay.callBaseMethod(this, 'get_color');
    },
    set_color: function(value) {
        if (this.textObject.forgroundColor !== value) {
            this.textObject.forgroundColor = value;
            wwtlib.TextOverlay.callBaseMethod(this, 'set_color', [value]);
            this.cleanUp();
        }
        return value;
    },
    draw3D: function(renderContext, designTime) {
        var $0 = renderContext.device;
        $0.save();
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.globalAlpha = this.get_opacity();
        $0.fillStyle = this.textObject.forgroundColor.toString();
        $0.font = ((this.textObject.italic) ? 'italic': 'normal') + ' ' + ((this.textObject.bold) ? 'bold': 'normal') + ' ' + Math.round(this.textObject.fontSize * 1.2).toString() + 'px ' + this.textObject.fontName;
        $0.textBaseline = 'top';
        var $1 = this.textObject.text.split('\n');
        var $2 = -(this.get_height() / 2);
        var $3 = this.textObject.fontSize * 1.7;
        var $enum1 = ss.IEnumerator.getEnumerator($1);
        while ($enum1.moveNext()) {
            var $4 = $enum1.current;
            var $5 = wwtlib._Util.$8($0, $4, this.get_width());
            var $enum2 = ss.IEnumerator.getEnumerator($5);
            while ($enum2.moveNext()) {
                var $6 = $enum2.current;
                $0.fillText($6, -this.get_width() / 2, $2);
                $2 += $3;
            }
        }
        $0.restore();
    },
    initializeTexture: function() {},
    initializeFromXml: function(node) {
        var $0 = wwtlib._Util.$6(node, 'Text');
        this.textObject = wwtlib.TextObject.$0(wwtlib._Util.$6($0, 'TextObject'));
    },
    initiaizeGeometry: function() {}
}
wwtlib.ShapeOverlay = function() {
    this.$16 = 1;
    wwtlib.ShapeOverlay.initializeBase(this);
}
wwtlib.ShapeOverlay.prototype = {
    get_shapeType: function() {
        return this.$16;
    },
    set_shapeType: function(value) {
        this.$16 = value;
        this.cleanUpGeometry();
        return value;
    },
    draw3D: function(renderContext, designTime) {
        switch (this.$16) {
        case 0:
            this.$1D(renderContext);
            break;
        case 1:
            this.$19(renderContext);
            break;
        case 6:
            this.$18(renderContext);
            break;
        case 2:
            this.$1A(renderContext);
            break;
        case 3:
            this.$1C(renderContext);
            break;
        case 4:
            this.$1B(renderContext);
            break;
        case 5:
            this.$17(renderContext);
            break;
        default:
            break;
        }
    },
    initiaizeGeometry: function() {},
    $17: function($p0) {
        var $0 = $p0.device;
        $0.save();
        var $1 = this.get_width() / 2;
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.moveTo( - $1, 0);
        $0.lineTo($1, 0);
        $0.lineWidth = 9;
        $0.strokeStyle = this.get_color().toString();
        $0.globalAlpha = this.get_opacity();
        $0.stroke();
        $0.restore();
    },
    $18: function($p0) {
        var $0 = $p0.device;
        $0.save();
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.beginPath();
        $0.moveTo( - this.get_width() / 2, -this.get_height() / 2);
        $0.lineTo(this.get_width() / 2, -this.get_height() / 2);
        $0.lineTo(this.get_width() / 2, this.get_height() / 2);
        $0.lineTo( - this.get_width() / 2, this.get_height() / 2);
        $0.closePath();
        $0.lineWidth = 9;
        $0.strokeStyle = this.get_color().toString();
        $0.globalAlpha = this.get_opacity();
        $0.stroke();
        $0.restore();
    },
    $19: function($p0) {
        var $0 = $p0.device;
        $0.save();
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.beginPath();
        $0.moveTo( - this.get_width() / 2, -this.get_height() / 2);
        $0.lineTo(this.get_width() / 2, -this.get_height() / 2);
        $0.lineTo(this.get_width() / 2, this.get_height() / 2);
        $0.lineTo( - this.get_width() / 2, this.get_height() / 2);
        $0.closePath();
        $0.lineWidth = 0;
        $0.fillStyle = this.get_color().toString();
        $0.globalAlpha = this.get_opacity();
        $0.fill();
        $0.restore();
    },
    $1A: function($p0) {
        var $0 = $p0.device;
        $0.save();
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.beginPath();
        var $1 = 0;
        var $2 = 0;
        var $3 = this.get_width() / 2;
        var $4 = (Math.PI * 2) / 5;
        var $5 = true;
        for (var $6 = 0; $6 < 5; $6++) {
            var $7 = $6 * $4 - (Math.PI / 2);
            if ($5) {
                $5 = false;
                $0.moveTo($1 + Math.cos($7) * (this.get_width() / 2), $2 + Math.sin($7) * (this.get_height() / 2));
            } else {
                $0.lineTo($1 + Math.cos($7) * (this.get_width() / 2), $2 + Math.sin($7) * (this.get_height() / 2));
            }
            var $8 = $6 * $4 + ($4 / 2) - (Math.PI / 2);
            $0.lineTo($1 + Math.cos($8) * (this.get_width() / 5.3), $2 + Math.sin($8) * (this.get_height() / 5.3));
        }
        $0.closePath();
        $0.lineWidth = 0;
        $0.fillStyle = this.get_color().toString();
        $0.globalAlpha = this.get_opacity();
        $0.fill();
        $0.restore();
    },
    $1B: function($p0) {
        var $0 = $p0.device;
        $0.save();
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.beginPath();
        $0.moveTo(( - (this.get_width() / 2)), ( - (this.get_height() / 4)));
        $0.lineTo((this.get_width() / 4), ( - (this.get_height() / 4)));
        $0.lineTo((this.get_width() / 4), ( - (this.get_height() / 2)));
        $0.lineTo((this.get_width() / 2), 0);
        $0.lineTo((this.get_width() / 4), (this.get_height() / 2));
        $0.lineTo((this.get_width() / 4), (this.get_height() / 4));
        $0.lineTo(( - (this.get_width() / 2)), (this.get_height() / 4));
        $0.closePath();
        $0.lineWidth = 0;
        $0.fillStyle = this.get_color().toString();
        $0.globalAlpha = this.get_opacity();
        $0.fill();
        $0.restore();
    },
    $1C: function($p0) {
        var $0 = $p0.device;
        $0.save();
        $0.translate(this.get_x(), this.get_y());
        $0.scale(1, this.get_height() / this.get_width());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.beginPath();
        $0.arc(0, 0, this.get_width() / 2, 0, Math.PI * 2, false);
        $0.closePath();
        $0.lineWidth = 9;
        $0.strokeStyle = this.get_color().toString();
        $0.globalAlpha = this.get_opacity();
        $0.stroke();
        $0.restore();
    },
    $1D: function($p0) {
        var $0 = $p0.device;
        $0.save();
        $0.scale(1, this.get_width() / this.get_height());
        $0.translate(this.get_x(), this.get_y());
        $0.rotate(this.get_rotationAngle() * wwtlib.Overlay.RC);
        $0.beginPath();
        $0.arc(0, 0, this.get_width(), 0, Math.PI * 2, false);
        $0.closePath();
        $0.lineWidth = 0;
        $0.fillStyle = this.get_color().toString();
        $0.globalAlpha = this.get_opacity();
        $0.fill();
        $0.restore();
    },
    initializeTexture: function() {},
    cleanUpGeometry: function() {
        wwtlib.ShapeOverlay.callBaseMethod(this, 'cleanUpGeometry');
        this.cleanUp();
    },
    initializeFromXml: function(node) {
        var $0 = wwtlib._Util.$6(node, 'Shape');
        switch ($0.attributes.getNamedItem('ShapeType').nodeValue) {
        case 'Circle':
            this.$16 = 0;
            break;
        case 'Rectagle':
            this.$16 = 1;
            break;
        case 'Star':
            this.$16 = 2;
            break;
        case 'Donut':
            this.$16 = 3;
            break;
        case 'Arrow':
            this.$16 = 4;
            break;
        case 'Line':
            this.$16 = 5;
            break;
        case 'OpenRectagle':
        default:
            this.$16 = 6;
            break;
        }
    }
}
wwtlib.AudioOverlay = function() {
    this.$1D = 0;
    wwtlib.AudioOverlay.initializeBase(this);
    this.isDesignTimeOnly = true;
}
wwtlib.AudioOverlay.prototype = {
    $16: null,
    $17: null,
    $18: 100,
    $19: false,
    get_mute: function() {
        return this.$19;
    },
    set_mute: function(value) {
        this.$19 = value;
        this.set_volume(this.get_volume());
        return value;
    },
    get_volume: function() {
        return this.$18;
    },
    set_volume: function(value) {
        this.$18 = value;
        if (this.$17 != null) {
            this.$17.volume = (this.$19) ? 0: (this.$18 / 100);
        }
        return value;
    },
    play: function() {
        if (this.$17 == null) {
            this.initializeTexture();
        }
        if (this.$17 != null && this.$1B) {
            this.$17.play();
            this.set_volume(this.get_volume());
        }
    },
    pause: function() {
        if (this.$17 == null) {
            this.initializeTexture();
        }
        if (this.$17 != null && this.$1B) {
            this.$17.pause();
        }
    },
    stop: function() {
        if (this.$17 == null) {
            this.initializeTexture();
        }
        if (this.$17 != null && this.$1B) {
            this.$17.pause();
        }
    },
    $1A: 0,
    seek: function(time) {
        this.$1A = time;
        if (this.$17 == null) {
            this.initializeTexture();
        }
        if (this.$1B) {
            if (this.$17.duration$0 - 1) {
                var $3 = 0;
            }
            break;
        case 2:
            this.$1F = Math.max(0, $0 - parseInt((($1 / 1000 * 24) % $0))) + this.$18;
            break;
        case 3:
            var $2 = Math.min($1 / 1000 * 24, $0 * 2 + 1) + $0;
            this.$1F = Math.abs(($2 % ($0 * 2 - 1)) - ($0 - 1)) + this.$18;
            break;
        case 4:
            this.$1F = Math.min($0 - 1, parseInt(($1 / 1000 * 24)));
            break;
        case 5:
            this.$1F = this.$18;
            break;
        case 6:
            this.$1F = ($0 - 1) + this.$18;
            break;
        default:
            this.$1F = this.$18;
            break;
        }
    }
    if (!String.isNullOrEmpty(this.$1A)) {
        if (this.$1F - 1) {
            this.$1F = this.$19[this.$1F];
        } else {
            this.$1F = 0;
        }
    }
    this.currentRotation = 0;
}
}
wwtlib.TextObject = function() {}
wwtlib.TextObject.create = function(text, bold, italic, underline, fontSize, fontName, forgroundColor, backgroundColor, borderStyle) {
    var $0 = new wwtlib.TextObject();
    $0.text = text;
    $0.bold = bold;
    $0.italic = italic;
    $0.underline = underline;
    $0.fontSize = fontSize;
    $0.fontName = fontName;
    $0.forgroundColor = forgroundColor;
    $0.backgroundColor = backgroundColor;
    $0.borderStyle = borderStyle;
    return $0;
}
wwtlib.TextObject.$0 = function($p0) {
    var $0 = new wwtlib.TextObject();
    $0.text = wwtlib._Util.$7($p0);
    $0.borderStyle = 0;
    $0.bold = Boolean.parse($p0.attributes.getNamedItem('Bold').nodeValue);
    $0.italic = Boolean.parse($p0.attributes.getNamedItem('Italic').nodeValue);
    $0.underline = Boolean.parse($p0.attributes.getNamedItem('Underline').nodeValue);
    $0.fontSize = parseFloat($p0.attributes.getNamedItem('FontSize').nodeValue);
    $0.fontName = $p0.attributes.getNamedItem('FontName').nodeValue;
    $0.forgroundColor = wwtlib.Color.load($p0.attributes.getNamedItem('ForgroundColor').nodeValue);
    $0.backgroundColor = wwtlib.Color.load($p0.attributes.getNamedItem('BackgroundColor').nodeValue);
    if ($p0.attributes.getNamedItem('BorderStyle') != null) {
        switch ($p0.attributes.getNamedItem('BorderStyle').nodeValue) {
        case 'None':
            $0.borderStyle = 0;
            break;
        case 'Tight':
            $0.borderStyle = 1;
            break;
        case 'Small':
            $0.borderStyle = 2;
            break;
        case 'Medium':
            $0.borderStyle = 3;
            break;
        case 'Large':
            $0.borderStyle = 4;
            break;
        default:
            break;
        }
    }
    return $0;
}
wwtlib.TextObject.prototype = {
    text: null,
    bold: false,
    italic: false,
    underline: false,
    fontSize: 0,
    fontName: null,
    forgroundColor: null,
    backgroundColor: null,
    borderStyle: 0,
    toString: function() {
        return this.text;
    }
}
wwtlib.TourDocument = function() {
    this.explicitTourLinks = [];
    this.implicitTourLinks = [];
    this.$1E = [];
    this.$1F = -1;
    this.id = wwtlib.Guid.newGuid().toString();
}
wwtlib.TourDocument.get_baseWorkingDirectory = function() {
    return '';
}
wwtlib.TourDocument.fromUrl = function(url, callMe) {
    var $0 = new wwtlib.TourDocument();
    $0.url = url;
    $0.$3 = callMe;
    $0.$2 = new wwtlib.WebFile(wwtlib._Util.$5(url, 'master'));
    $0.$2.onStateChange = ss.Delegate.create($0, $0.$4);
    $0.$2.send();
    return $0;
}
wwtlib.TourDocument.prototype = {
    $0: 0,
    get_tourDirty: function() {
        return this.$0 > 0;
    },
    set_tourDirty: function(value) {
        if (value) {
            this.$0++;
        } else {
            this.$0 = 0;
        }
        return value;
    },
    $1: '',
    get_workingDirectory: function() {
        if (String.isNullOrEmpty(this.$1)) {
            this.$1 = wwtlib.TourDocument.get_baseWorkingDirectory() + this.id + '\\';
        }
        return this.$1;
    },
    set_workingDirectory: function(value) {
        this.$1 = value;
        return value;
    },
    url: '',
    $2: null,
    $3: null,
    $4: function() {
        if (this.$2.get_state() === 2) {
            alert(this.$2.get_message());
        } else if (this.$2.get_state() === 1) {
            this.fromXml(this.$2.getXml());
            this.$3();
        }
    },
    fromXml: function(doc) {
        var $0 = wwtlib._Util.$6(doc, 'Tour');
        this.id = $0.attributes.getNamedItem('ID').nodeValue;
        this.set_title($0.attributes.getNamedItem('Title').nodeValue);
        this.set_author($0.attributes.getNamedItem('Author').nodeValue);
        if ($0.attributes.getNamedItem('Descirption') != null) {
            this.set_description($0.attributes.getNamedItem('Descirption').nodeValue);
        }
        if ($0.attributes.getNamedItem('AuthorEmail') != null) {
            this.$D = $0.attributes.getNamedItem('AuthorEmail').nodeValue;
        }
        if ($0.attributes.getNamedItem('Keywords') != null) {
            this.set_keywords($0.attributes.getNamedItem('Keywords').nodeValue);
        }
        if ($0.attributes.getNamedItem('OrganizationName') != null) {
            this.set_orgName($0.attributes.getNamedItem('OrganizationName').nodeValue);
        }
        this.$16 = $0.attributes.getNamedItem('OrganizationUrl').nodeValue;
        switch ($0.attributes.getNamedItem('UserLevel').nodeValue) {
        case 'Beginner':
            this.$18 = 0;
            break;
        case 'Intermediate':
            this.$18 = 1;
            break;
        case 'Advanced':
            this.$18 = 2;
            break;
        case 'Educator':
            this.$18 = 3;
            break;
        case 'Professional':
            this.$18 = 4;
            break;
        default:
            break;
        }
        switch ($0.attributes.getNamedItem('Classification').nodeValue) {
        case 'Star':
            this.$19 = 1;
            break;
        case 'Supernova':
            this.$19 = 2;
            break;
        case 'BlackHole':
            this.$19 = 4;
            break;
        case 'NeutronStar':
            this.$19 = 8;
            break;
        case 'DoubleStar':
            this.$19 = 16;
            break;
        case 'MultipleStars':
            this.$19 = 32;
            break;
        case 'Asterism':
            this.$19 = 64;
            break;
        case 'Constellation':
            this.$19 = 128;
            break;
        case 'OpenCluster':
            this.$19 = 256;
            break;
        case 'GlobularCluster':
            this.$19 = 512;
            break;
        case 'NebulousCluster':
            this.$19 = 1024;
            break;
        case 'Nebula':
            this.$19 = 2048;
            break;
        case 'EmissionNebula':
            this.$19 = 4096;
            break;
        case 'PlanetaryNebula':
            this.$19 = 8192;
            break;
        case 'ReflectionNebula':
            this.$19 = 16384;
            break;
        case 'DarkNebula':
            this.$19 = 32768;
            break;
        case 'GiantMolecularCloud':
            this.$19 = 65536;
            break;
        case 'SupernovaRemnant':
            this.$19 = 131072;
            break;
        case 'InterstellarDust':
            this.$19 = 262144;
            break;
        case 'Quasar':
            this.$19 = 524288;
            break;
        case 'Galaxy':
            this.$19 = 1048576;
            break;
        case 'SpiralGalaxy':
            this.$19 = 2097152;
            break;
        case 'IrregularGalaxy':
            this.$19 = 4194304;
            break;
        case 'EllipticalGalaxy':
            this.$19 = 8388608;
            break;
        case 'Knot':
            this.$19 = 16777216;
            break;
        case 'PlateDefect':
            this.$19 = 33554432;
            break;
        case 'ClusterOfGalaxies':
            this.$19 = 67108864;
            break;
        case 'OtherNGC':
            this.$19 = 134217728;
            break;
        case 'Unidentified':
            this.$19 = 268435456;
            break;
        case 'SolarSystem':
            this.$19 = 536870912;
            break;
        case 'Unfiltered':
            this.$19 = 1073741823;
            break;
        case 'Stellar':
            this.$19 = 63;
            break;
        case 'StellarGroupings':
            this.$19 = 2032;
            break;
        case 'Nebulae':
            this.$19 = 523264;
            break;
        case 'Galactic':
            this.$19 = 133693440;
            break;
        case 'Other':
            this.$19 = 436207616;
            break;
        default:
            break;
        }
        this.$1A = $0.attributes.getNamedItem('Taxonomy').nodeValue;
        var $1 = wwtlib._Util.$6($0, 'TourStops');
        var $enum1 = ss.IEnumerator.getEnumerator($1.childNodes);
        while ($enum1.moveNext()) {
            var $2 = $enum1.current;
            if ($2.nodeName === 'TourStop') {
                this.addTourStop(wwtlib.TourStop.$32(this, $2));
            }
        }
        this.$0 = 0;
    },
    $5: null,
    get_tagId: function() {
        return this.$5;
    },
    set_tagId: function(value) {
        this.$5 = value;
        return value;
    },
    get_authorThumbnailFilename: function() {
        return 'Author.Png';
    },
    $6: 0,
    get_tourThumbnailFilename: function() {
        if (this.$6 - 1) {
            this.get_tourStops().insert(this.$1F, ts);
        } else {
            this.get_tourStops().add(ts);
            this.$1F = this.$1E.length - 1;
        }
        this.set_tourDirty(true);
    },
    insertAfterTourStop: function(ts) {
        ts.set_owner(this);
        if (this.$1F > -1 || this.$1Fthis.$1E.length - 1) {
            this.$1F--;
        }
        this.set_tourDirty(true);
    },
    $20: function() {
        var $0 = 0;
        for (var $1 = 0; $10) {
            switch (this.$1E[$1].get_$4()) {
            case 0:
                if (this.$1E[$1].get_target().get_backgroundImageset() == null || (this.$1E[$1 - 1].get_target().get_backgroundImageset().get_dataSetType() === this.$1E[$1].get_target().get_backgroundImageset().get_dataSetType() && ((this.$1E[$1 - 1].get_target().get_backgroundImageset().get_dataSetType() !== 4) || (this.$1E[$1 - 1].get_target().get_target() === this.$1E[$1].get_target().get_target())))) {
                    var $2 = (this.$1E[$1 - 1].get_endTarget() == null) ? this.$1E[$1 - 1].get_target().get_camParams() : this.$1E[$1 - 1].get_endTarget().get_camParams();
                    var $3 = wwtlib.wwtlib$7.$A($2, this.$1E[$1].get_target().get_camParams());
                    $0 += $3.get_moveTime() * 1000;
                }
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                break;
            }
        }
    }
    return parseInt($0);
},
elapsedTimeTillTourstop: function(index) {
    if (!index && index >= this.$1E.length) {
        return 0;
    }
    var $0 = 0;
    for (var $1 = 0; $10) {
        switch (this.$1E[$1].get_$4()) {
        case 0:
            var $2 = (this.$1E[$1 - 1].get_endTarget() == null) ? this.$1E[$1 - 1].get_target().get_camParams() : this.$1E[$1 - 1].get_endTarget().get_camParams();
            if (this.$1E[$1 - 1].get_target().get_backgroundImageset().get_dataSetType() === this.$1E[$1].get_target().get_backgroundImageset().get_dataSetType() && ((this.$1E[$1 - 1].get_target().get_backgroundImageset().get_dataSetType() !== 4) || (this.$1E[$1 - 1].get_target().get_target() === this.$1E[$1].get_target().get_target()))) {
                var $3 = wwtlib.wwtlib$7.$A($2, this.$1E[$1].get_target().get_camParams());
                $0 += $3.get_moveTime() * 1000;
            }
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            break;
        }
    }
}
return $0 / 1000;
},
elapsedTimeSinceLastMaster: function(index) {
    var $0 = null;
    if (!index && index >= this.$1E.length) {
        return null;
    }
    var $1 = 0;
    for (var $2 = 0; $20) {
        switch (this.$1E[$2].get_$4()) {
        case 0:
            var $3 = (this.$1E[$2 - 1].get_endTarget() == null) ? this.$1E[$2 - 1].get_target().get_camParams() : this.$1E[$2 - 1].get_endTarget().get_camParams();
            if (this.$1E[$2 - 1].get_target().get_backgroundImageset().get_dataSetType() === this.$1E[$2].get_target().get_backgroundImageset().get_dataSetType() && ((this.$1E[$2 - 1].get_target().get_backgroundImageset().get_dataSetType() !== 4) || (this.$1E[$2 - 1].get_target().get_target() === this.$1E[$2].get_target().get_target()))) {
                var $4 = wwtlib.wwtlib$7.$A($3, this.$1E[$2].get_target().get_camParams());
                $1 += $4.get_moveTime() * 1000;
            }
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            break;
        }
    }
}
return new wwtlib.MasterTime($0, $1 / 1000);
},
getMasterSlideForIndex: function(index) {
    var $0 = -1;
    for (var $1 = 0; $1 - 1) {
        return this.get_tourStops()[this.$1F];
    } else {
        return null;
    }
},
set_currentTourStop: function(value) {
    var $0 = 0;
    var $enum1 = ss.IEnumerator.getEnumerator(this.get_tourStops());
    while ($enum1.moveNext()) {
        var $1 = $enum1.current;
        if ($1 === value) {
            if (this.$1F > -1) {
                this.get_tourStops()[this.$1F].cleanUp();
            }
            this.$1F = $0;
            break;
        }
        $0++;
    }
    return value;
},
dontCleanUpTempFiles: false,
clearTempFiles: function() {}
}
wwtlib.TourPlayer = function() {
    this.$0 = wwtlib.BlendState.create(false, 1000);
    this.$1 = wwtlib.BlendState.create(false, 2000);
    this.$B = Date.get_now();
    this.$2B = [];
}
wwtlib.TourPlayer.get_playing = function() {
    return wwtlib.TourPlayer.$24;
}
wwtlib.TourPlayer.set_playing = function(value) {
    wwtlib.TourPlayer.$24 = value;
    return value;
}
wwtlib.TourPlayer.add_tourEnded = function(value) {
    wwtlib.TourPlayer.$29 = ss.Delegate.combine(wwtlib.TourPlayer.$29, value);
}
wwtlib.TourPlayer.remove_tourEnded = function(value) {
    wwtlib.TourPlayer.$29 = ss.Delegate.remove(wwtlib.TourPlayer.$29, value);
}
wwtlib.TourPlayer.prototype = {
    render: function(renderContext) {
        if (this.$23 == null || this.$23.get_currentTourStop() == null) {
            return;
        }
        renderContext.device.save();
        this.updateSlideStates();
        if (!this.$25) {
            this.$26 = Date.get_now();
            if (renderContext.onTarget(this.get_tour().get_currentTourStop().get_target())) {
                this.$25 = true;
                this.$0.set_state(!this.get_tour().get_currentTourStop().get_fadeInOverlays());
                this.$0.set_targetState(true);
                if (this.$23.get_currentTourStop().get_musicTrack() != null) {
                    this.$23.get_currentTourStop().get_musicTrack().play();
                }
                if (this.$23.get_currentTourStop().get_voiceTrack() != null) {
                    this.$23.get_currentTourStop().get_voiceTrack().play();
                }
                var $enum1 = ss.IEnumerator.getEnumerator(this.$23.get_currentTourStop().get_overlays());
                while ($enum1.moveNext()) {
                    var $2 = $enum1.current;
                    $2.play();
                }
                if (this.$23.get_currentTourStop().get_endTarget() != null && this.$23.get_currentTourStop().get_endTarget().get_zoomLevel() !== -1) {
                    if (this.$23.get_currentTourStop().get_target().get_type() === 4) {}
                    renderContext.viewMover = new wwtlib.ViewMoverKenBurnsStyle(this.$23.get_currentTourStop().get_target().get_camParams(), this.$23.get_currentTourStop().get_endTarget().get_camParams(), this.$23.get_currentTourStop().get_duration() / 1000, this.$23.get_currentTourStop().get_startTime(), this.$23.get_currentTourStop().get_endTime());
                }
                wwtlib.Settings.tourSettings = this.$23.get_currentTourStop();
                wwtlib.SpaceTimeController.set_now(this.$23.get_currentTourStop().get_startTime());
                wwtlib.SpaceTimeController.set_syncToClock(false);
            }
        }
        renderContext.device.scale(renderContext.height / 1116, renderContext.height / 1116);
        var $0 = 1920 / 1116;
        var $1 = renderContext.width / renderContext.height;
        renderContext.device.translate( - ((1920 - ($1 * 1116)) / 2), 0);
        if (this.$27 != null) {
            var $enum2 = ss.IEnumerator.getEnumerator(this.$27.get_overlays());
            while ($enum2.moveNext()) {
                var $3 = $enum2.current;
                $3.set_tweenFactor(1);
                $3.draw3D(renderContext, false);
            }
        }
        if (this.$25) {
            var $enum3 = ss.IEnumerator.getEnumerator(this.$23.get_currentTourStop().get_overlays());
            while ($enum3.moveNext()) {
                var $4 = $enum3.current;
                $4.set_tweenFactor(this.$23.get_currentTourStop().get_tweenPosition());
                $4.draw3D(renderContext, false);
            }
        } else {
            var $5 = 0;
        }
        renderContext.device.restore();
        this.$A(renderContext);
    },
    $2: false,
    $3: false,
    $4: false,
    $5: false,
    $6: false,
    $7: false,
    $8: 1,
    $9: 1,
    $A: function($p0) {
        this.$1D();
        if (!this.$20) {
            return;
        }
        if (this.$1.get_state()) {
            var $0 = Date.get_now() - this.$B;
            if ($0 > 7000) {
                this.$1.set_targetState(false);
            }
            var $1 = $p0.device;
            $1.save();
            $1.globalAlpha = this.$1.get_opacity();
            this.$8 = $p0.height - 60;
            this.$9 = $p0.width / 2;
            var $2 = (this.$6) ? this.$1C: ((this.$3) ? this.$1A: this.$1B);
            var $3 = (wwtlib.TourPlayer.get_playing()) ? ((this.$5) ? this.$14: ((this.$2) ? this.$12: this.$13)) : ((this.$5) ? this.$18: ((this.$2) ? this.$16: this.$17));
            var $4 = (this.$7) ? this.$10: ((this.$4) ? this.$E: this.$F);
            $1.drawImage($2, this.$9 - 110, this.$8);
            $1.drawImage($4, this.$9, this.$8);
            $1.drawImage($3, this.$9 - 32, this.$8 - 4);
            $1.restore();
        }
    },
    $C: function($p0, $p1, $p2) {
        if ($p1) {
            this.$6 = false;
            this.$7 = false;
            this.$5 = false;
        } else {
            this.$3 = false;
            this.$4 = false;
            this.$2 = false;
        }
        if ($p0.y < (this.$8 - 2)) {
            return false;
        }
        if ($p0.x < (this.$9 - 32) && $p0.x > (this.$9 - 105)) {
            if ($p1) {
                this.$6 = true;
            } else {
                this.$3 = true;
            }
            if ($p2) {
                this.$2E();
                this.$B = Date.get_now();
            }
            return true;
        }
        if ($p0.x < (this.$9 + 105) && $p0.x > (this.$9 + 32)) {
            if ($p1) {
                this.$7 = true;
            } else {
                this.$4 = true;
            }
            if ($p2) {
                this.$2D();
                this.$B = Date.get_now();
            }
            return true;
        }
        if ($p0.x < (this.$9 + 32) && $p0.x > (this.$9 - 32)) {
            if ($p1) {
                this.$5 = true;
            } else {
                this.$2 = true;
            }
            if ($p2) {
                this.pauseTour();
                this.$B = Date.get_now();
            }
            return true;
        }
        return false;
    },
    $D: null,
    $E: null,
    $F: null,
    $10: null,
    $11: null,
    $12: null,
    $13: null,
    $14: null,
    $15: null,
    $16: null,
    $17: null,
    $18: null,
    $19: null,
    $1A: null,
    $1B: null,
    $1C: null,
    $1D: function() {
        if (!this.$20 && !this.$21) {
            this.$D = this.$22('images/button_next_disabled.png');
            this.$E = this.$22('images/button_next_hover.png');
            this.$F = this.$22('images/button_next_normal.png');
            this.$10 = this.$22('images/button_next_pressed.png');
            this.$11 = this.$22('images/button_pause_disabled.png');
            this.$12 = this.$22('images/button_pause_hover.png');
            this.$13 = this.$22('images/button_pause_normal.png');
            this.$14 = this.$22('images/button_pause_pressed.png');
            this.$15 = this.$22('images/button_play_disabled.png');
            this.$16 = this.$22('images/button_play_hover.png');
            this.$17 = this.$22('images/button_play_normal.png');
            this.$18 = this.$22('images/button_play_pressed.png');
            this.$19 = this.$22('images/button_previous_disabled.png');
            this.$1A = this.$22('images/button_previous_hover.png');
            this.$1B = this.$22('images/button_previous_normal.png');
            this.$1C = this.$22('images/button_previous_pressed.png');
        }
    },
    $1E: 0,
    $1F: 0,
    $20: false,
    $21: false,
    $22: function($p0) {
        this.$1E++;
        this.$20 = false;
        this.$21 = true;
        var $0 = document.createElement('img');
        $0.src = $p0;
        $0.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
            this.$1F++;
            if (this.$1F === this.$1E) {
                this.$21 = false;
                this.$20 = true;
            }
        }), false);
        return $0;
    },
    $23: null,
    get_tour: function() {
        return this.$23;
    },
    set_tour: function(value) {
        this.$23 = value;
        return value;
    },
    $25: false,
    $26: null,
    $27: null,
    nextSlide: function() {
        if (this.$23.get_currentTourStop() != null) {
            if (!this.$23.get_currentTourStop().get_masterSlide()) {
                if (this.$23.get_currentTourStop().get_musicTrack() != null) {
                    this.$23.get_currentTourStop().get_musicTrack().stop();
                }
                if (this.$23.get_currentTourStop().get_voiceTrack() != null) {
                    this.$23.get_currentTourStop().get_voiceTrack().stop();
                }
                var $enum1 = ss.IEnumerator.getEnumerator(this.$23.get_currentTourStop().get_overlays());
                while ($enum1.moveNext()) {
                    var $0 = $enum1.current;
                    $0.stop();
                }
            } else {
                this.$27 = this.$23.get_currentTourStop();
            }
        }
        if (this.$23.get_currentTourstopIndex() < (this.$23.get_tourStops().length - 1)) {
            if (this.$23.get_currentTourStop().get_endTarget() != null) {
                wwtlib.WWTControl.singleton.gotoTargetFull(false, true, this.$23.get_currentTourStop().get_endTarget().get_camParams(), this.$23.get_currentTourStop().get_target().get_studyImageset(), this.$23.get_currentTourStop().get_target().get_backgroundImageset());
                wwtlib.WWTControl.singleton.set_$21(null);
            }
            this.$25 = false;
            if (this.$23.get_currentTourStop().get_isLinked()) {
                switch (this.$23.get_currentTourStop().get_nextSlide()) {
                case 'Return':
                    if (this.$2B.length > 0) {
                        this.$2F(this.$23.get_tourStops()[this.$2B.pop()]);
                    } else {
                        this.$23.set_currentTourstopIndex(this.$23.get_tourStops().length - 1);
                    }
                    break;
                default:
                    this.$2F(this.$23.get_tourStops()[this.$23.getTourStopIndexByID(this.$23.get_currentTourStop().get_nextSlide())]);
                    break;
                }
            } else {
                this.$23.set_currentTourstopIndex(this.$23.get_currentTourstopIndex() + 1) - 1;
            }
            if (this.$27 != null && this.$23.get_currentTourStop().get_masterSlide()) {
                if (this.$27.get_musicTrack() != null) {
                    this.$27.get_musicTrack().stop();
                }
                if (this.$27.get_voiceTrack() != null) {
                    this.$27.get_voiceTrack().stop();
                }
                var $enum2 = ss.IEnumerator.getEnumerator(this.$27.get_overlays());
                while ($enum2.moveNext()) {
                    var $1 = $enum2.current;
                    $1.stop();
                }
                this.$27 = null;
            }
            wwtlib.WWTControl.singleton.gotoTarget(this.$23.get_currentTourStop().get_target(), false, false, false);
            this.$26 = Date.get_now();
            wwtlib.Settings.tourSettings = this.$23.get_currentTourStop();
            wwtlib.SpaceTimeController.set_now(this.$23.get_currentTourStop().get_startTime());
            wwtlib.SpaceTimeController.set_syncToClock(false);
        } else {
            this.$28();
            wwtlib.TourPlayer.$24 = false;
            if (wwtlib.Settings.get_current().autoRepeatTour) {
                this.$23.set_currentTourstopIndex( - 1);
                this.play();
            } else {
                wwtlib.WWTControl.singleton.$20();
                if (wwtlib.TourPlayer.$29 != null) {
                    wwtlib.TourPlayer.$29(this, new ss.EventArgs());
                }
                this.showEndTourPopup();
                wwtlib.WWTControl.singleton.$27(false);
            }
        }
    },
    $28: function() {
        if (this.$27 != null) {
            if (this.$27.get_musicTrack() != null) {
                this.$27.get_musicTrack().stop();
            }
            if (this.$27.get_voiceTrack() != null) {
                this.$27.get_voiceTrack().stop();
            }
            var $enum1 = ss.IEnumerator.getEnumerator(this.$27.get_overlays());
            while ($enum1.moveNext()) {
                var $0 = $enum1.current;
                $0.stop();
            }
            this.$27 = null;
        }
    },
    showEndTourPopup: function() {},
    play: function() {
        if (this.$23 == null) {
            return;
        }
        if (wwtlib.TourPlayer.$24) {
            this.stop(true);
        } else {
            wwtlib.TourPlayer.$24 = true;
        }
        wwtlib.WWTControl.singleton.$27(true);
        wwtlib.TourPlayer.$24 = true;
        if (this.$23.get_tourStops().length > 0) {
            this.$25 = false;
            if (this.$23.get_currentTourstopIndex() === -1) {
                this.$23.set_currentTourStop(this.$23.get_tourStops()[0]);
            }
            if (this.$23.get_currentTourstopIndex() > 0) {
                this.$2C();
            }
            wwtlib.WWTControl.singleton.gotoTarget(this.$23.get_currentTourStop().get_target(), false, true, false);
        }
        this.$26 = Date.get_now();
        wwtlib.TourPlayer.$24 = true;
    },
    $2C: function() {
        if (!this.$23.get_currentTourStop().get_masterSlide()) {
            var $0 = this.$23.elapsedTimeSinceLastMaster(this.$23.get_currentTourstopIndex());
            if ($0 != null) {
                var $1 = $0.durration;
                this.$27 = $0.master;
                if (this.$27.get_musicTrack() != null) {
                    this.$27.get_musicTrack().play();
                    this.$27.get_musicTrack().seek($1);
                }
                if (this.$27.get_voiceTrack() != null) {
                    this.$27.get_voiceTrack().play();
                    this.$27.get_voiceTrack().seek($1);
                }
                var $enum1 = ss.IEnumerator.getEnumerator(this.$27.get_overlays());
                while ($enum1.moveNext()) {
                    var $2 = $enum1.current;
                    $2.play();
                    $2.seek($1);
                }
            }
        }
    },
    stop: function(noSwitchBackFullScreen) {
        if (wwtlib.TourPlayer.$2A && !noSwitchBackFullScreen) {}
        wwtlib.Settings.tourSettings = null;
        wwtlib.TourPlayer.$24 = false;
        if (this.$23.get_currentTourStop() != null) {
            if (this.$23.get_currentTourStop().get_musicTrack() != null) {
                this.$23.get_currentTourStop().get_musicTrack().stop();
            }
            if (this.$23.get_currentTourStop().get_voiceTrack() != null) {
                this.$23.get_currentTourStop().get_voiceTrack().stop();
            }
            var $enum1 = ss.IEnumerator.getEnumerator(this.$23.get_currentTourStop().get_overlays());
            while ($enum1.moveNext()) {
                var $0 = $enum1.current;
                $0.stop();
            }
        }
        if (this.$27 != null) {
            if (this.$27.get_musicTrack() != null) {
                this.$27.get_musicTrack().stop();
            }
            if (this.$27.get_voiceTrack() != null) {
                this.$27.get_voiceTrack().stop();
            }
            var $enum2 = ss.IEnumerator.getEnumerator(this.$27.get_overlays());
            while ($enum2.moveNext()) {
                var $1 = $enum2.current;
                $1.stop();
            }
        }
        wwtlib.WWTControl.singleton.$27(wwtlib.TourPlayer.noRestoreUIOnStop);
    },
    updateSlideStates: function() {
        var $0 = Date.get_now() - this.$26;
        if ($0 > this.$23.get_currentTourStop().get_duration() && wwtlib.TourPlayer.$24) {
            this.nextSlide();
        }
        $0 = Date.get_now() - this.$26;
        this.$23.get_currentTourStop().set_tweenPosition(($0 / this.$23.get_currentTourStop().get_duration()));
    },
    close: function() {
        if (this.$23 != null) {
            if (wwtlib.TourPlayer.get_playing()) {
                this.stop(wwtlib.TourPlayer.$2A);
            }
            this.$23 = null;
        }
    },
    mouseDown: function(sender, e) {
        var $0;
        $0 = this.pointToView(wwtlib.Vector2d.create(e.offsetX, e.offsetY));
        if (this.$23 == null || this.$23.get_currentTourStop() == null) {
            return false;
        }
        for (var $1 = this.$23.get_currentTourStop().get_overlays().length - 1; $1 >= 0; $1--) {
            if (this.$23.get_currentTourStop().get_overlays()[$1].hitTest($0)) {
                if (!String.isNullOrEmpty(this.$23.get_currentTourStop().get_overlays()[$1].get_url())) {
                    var $2 = this.$23.get_currentTourStop().get_overlays()[$1];
                    wwtlib._Util.$A($2.get_url(), true);
                    return true;
                }
                if (!String.isNullOrEmpty(this.$23.get_currentTourStop().get_overlays()[$1].get_linkID())) {
                    this.$2B.push(this.$23.get_currentTourstopIndex());
                    this.$2F(this.$23.get_tourStops()[this.$23.getTourStopIndexByID(this.$23.get_currentTourStop().get_overlays()[$1].get_linkID())]);
                    return true;
                }
            }
        }
        if (this.$1.get_state()) {
            return this.$C(wwtlib.Vector2d.create(e.offsetX, e.offsetY), true, true);
        } else {
            this.$1.set_targetState(true);
            this.$B = Date.get_now();
        }
        return false;
    },
    mouseUp: function(sender, e) {
        if (this.$6 || this.$7 || this.$5) {
            this.$6 = false;
            this.$7 = false;
            this.$5 = false;
            return true;
        }
        return false;
    },
    mouseMove: function(sender, e) {
        var $0;
        try {
            $0 = this.pointToView(wwtlib.Vector2d.create(e.offsetX, e.offsetY));
        } catch($1) {
            return false;
        }
        if (this.$23 == null || this.$23.get_currentTourStop() == null) {
            return false;
        }
        for (var $2 = this.$23.get_currentTourStop().get_overlays().length - 1; $2 >= 0; $2--) {
            if (this.$23.get_currentTourStop().get_overlays()[$2].hitTest($0) && (!String.isNullOrEmpty(this.$23.get_currentTourStop().get_overlays()[$2].get_url()) || !String.isNullOrEmpty(this.$23.get_currentTourStop().get_overlays()[$2].get_linkID()))) {
                return true;
            }
        }
        if (this.$1.get_state()) {
            return this.$C(wwtlib.Vector2d.create(e.offsetX, e.offsetY), false, false);
        }
        return false;
    },
    mouseClick: function(sender, e) {
        return false;
    },
    click: function(sender, e) {
        return false;
    },
    mouseDoubleClick: function(sender, e) {
        return false;
    },
    keyDown: function(sender, e) {
        switch (e.keyCode) {
        case 27:
            this.stop(wwtlib.TourPlayer.$2A);
            wwtlib.WWTControl.singleton.$28();
            return true;
        case 32:
            this.pauseTour();
            return true;
        case 39:
            this.$2D();
            return true;
        case 37:
            this.$2E();
            return true;
        case 35:
            if (this.$23.get_tourStops().length > 0) {
                this.$2F(this.$23.get_tourStops()[this.$23.get_tourStops().length - 1]);
            }
            return true;
        case 36:
            if (this.$23.get_tourStops().length > 0) {
                this.$2F(this.$23.get_tourStops()[0]);
            }
            return true;
        }
        return false;
    },
    $2D: function() {
        if ((this.$23.get_currentTourstopIndex()
            0) {
            this.$2F(this.$23.get_tourStops()[this.$23.get_currentTourstopIndex() + 1]);
        }
    },
    $2E: function() {
        if (this.$23.get_currentTourstopIndex() > 0) {
            this.$2F(this.$23.get_tourStops()[this.$23.get_currentTourstopIndex() - 1]);
        }
    },
    $2F: function($p0) {
        this.stop(true);
        this.$23.set_currentTourStop($p0);
        wwtlib.WWTControl.singleton.gotoTarget(this.$23.get_currentTourStop().get_target(), false, true, false);
        wwtlib.SpaceTimeController.set_now(this.$23.get_currentTourStop().get_startTime());
        wwtlib.SpaceTimeController.set_syncToClock(false);
        this.play();
    },
    pauseTour: function() {
        if (wwtlib.TourPlayer.$24) {
            this.stop(wwtlib.TourPlayer.$2A);
            wwtlib.WWTControl.singleton.$20();
        } else {
            this.play();
        }
    },
    keyUp: function(sender, e) {
        return false;
    },
    hover: function(pnt) {
        if (wwtlib.TourPlayer.$24) {
            return true;
        }
        return false;
    },
    pointToView: function(pnt) {
        var $0 = wwtlib.WWTControl.singleton.canvas.height;
        var $1 = wwtlib.WWTControl.singleton.canvas.width;
        var $2 = ($1 / $0) * 1116;
        var $3 = ((pnt.x) / ($1) * $2) - (($2 - 1920) / 2);
        var $4 = (pnt.y) / $0 * 1116;
        return wwtlib.Vector2d.create($3, $4);
    }
}
wwtlib.MasterTime = function(master, durration) {
    this.master = master;
    this.durration = durration;
}
wwtlib.MasterTime.prototype = {
    master: null,
    durration: 0
}
wwtlib.TourStop = function() {
    this.$3 = 0;
    this.$F = wwtlib.SpaceTimeController.get_now();
    this.$10 = wwtlib.SpaceTimeController.get_now();
    this.$11 = wwtlib.Settings.get_current().get_actualPlanetScale();
    this.$12 = wwtlib.Settings.get_current().get_locationAltitude();
    this.$13 = wwtlib.Settings.get_current().get_locationLat();
    this.$14 = wwtlib.Settings.get_current().get_locationLng();
    this.$15 = wwtlib.Settings.get_current().get_showClouds();
    this.$16 = wwtlib.Settings.get_current().get_showConstellationBoundries();
    this.$17 = wwtlib.Settings.get_current().get_showConstellationFigures();
    this.$18 = wwtlib.Settings.get_current().get_showConstellationSelection();
    this.$19 = wwtlib.Settings.get_current().get_showEcliptic();
    this.$1A = wwtlib.Settings.get_current().get_showElevationModel();
    this.$1B = wwtlib.Settings.get_current().get_showFieldOfView();
    this.$1C = wwtlib.Settings.get_current().get_showGrid();
    this.$1D = wwtlib.Settings.get_current().get_showHorizon();
    this.$1E = wwtlib.Settings.get_current().get_showHorizonPanorama();
    this.$1F = wwtlib.Settings.get_current().get_showMoonsAsPointSource();
    this.$20 = wwtlib.Settings.get_current().get_showSolarSystem();
    this.$21 = wwtlib.Settings.get_current().get_fovTelescope();
    this.$22 = wwtlib.Settings.get_current().get_fovEyepiece();
    this.$23 = wwtlib.Settings.get_current().get_fovCamera();
    this.$24 = wwtlib.Settings.get_current().get_localHorizonMode();
    this.$25 = wwtlib.Settings.get_current().get_solarSystemStars();
    this.$26 = wwtlib.Settings.get_current().get_solarSystemMilkyWay();
    this.$27 = wwtlib.Settings.get_current().get_solarSystemCosmos();
    this.$28 = wwtlib.Settings.get_current().get_solarSystemOrbits();
    this.$29 = wwtlib.Settings.get_current().get_solarSystemOverlays();
    this.$2A = wwtlib.Settings.get_current().get_solarSystemLighting();
    this.$2B = wwtlib.Settings.get_current().get_solarSystemScale();
    this.$2C = wwtlib.Settings.get_current().get_solarSystemMultiRes();
    this.$2F = [];
    this.id = wwtlib.Guid.newGuid().toString();
}
wwtlib.TourStop.$32 = function($p0, $p1) {
    var $0 = new wwtlib.TourStop();
    $0.$2 = $p0;
    $0.set_id($p1.attributes.getNamedItem('Id').nodeValue);
    $0.set_name($p1.attributes.getNamedItem('Name').nodeValue);
    $0.set_description($p1.attributes.getNamedItem('Description').nodeValue);
    $0.$2D = $p1.attributes.getNamedItem('Thumbnail').nodeValue;
    $0.$A = wwtlib._Util.$4($p1.attributes.getNamedItem('Duration').nodeValue);
    if ($p1.attributes.getNamedItem('Master') != null) {
        $0.$7 = Boolean.parse($p1.attributes.getNamedItem('Master').nodeValue);
    }
    if ($p1.attributes.getNamedItem('NextSlide') != null) {
        $0.$5 = $p1.attributes.getNamedItem('NextSlide').nodeValue;
    }
    $0.$6 = true;
    if ($p1.attributes.getNamedItem('FadeInOverlays') != null) {
        $0.$6 = Boolean.parse($p1.attributes.getNamedItem('FadeInOverlays').nodeValue);
    }
    if ($p1.attributes.getNamedItem('Transition') != null) {
        switch ($p1.attributes.getNamedItem('Transition').nodeValue) {
        case 'Slew':
            $0.$3 = 0;
            break;
        case 'Instant':
            $0.$3 = 1;
            break;
        case 'CrossFade':
            $0.$3 = 2;
            break;
        case 'FadeToBlack':
            $0.$3 = 3;
            break;
        default:
            break;
        }
    }
    if ($p1.attributes.getNamedItem('HasLocation') != null) {
        $0.$D = Boolean.parse($p1.attributes.getNamedItem('HasLocation').nodeValue);
    }
    if ($0.$D) {
        if ($p1.attributes.getNamedItem('LocationAltitude') != null) {
            $0.$12 = parseFloat($p1.attributes.getNamedItem('LocationAltitude').nodeValue);
        }
        if ($p1.attributes.getNamedItem('LocationLat') != null) {
            $0.$13 = parseFloat($p1.attributes.getNamedItem('LocationLat').nodeValue);
        }
        if ($p1.attributes.getNamedItem('LocationLng') != null) {
            $0.$14 = parseFloat($p1.attributes.getNamedItem('LocationLng').nodeValue);
        }
    }
    if ($p1.attributes.getNamedItem('HasTime') != null) {
        $0.$E = Boolean.parse($p1.attributes.getNamedItem('HasTime').nodeValue);
        if ($0.$E) {
            if ($p1.attributes.getNamedItem('StartTime') != null) {
                $0.$F = Date.parseDate($p1.attributes.getNamedItem('StartTime').nodeValue);
            }
            if ($p1.attributes.getNamedItem('EndTime') != null) {
                $0.$10 = Date.parseDate($p1.attributes.getNamedItem('EndTime').nodeValue);
            }
        }
    }
    if ($p1.attributes.getNamedItem('ActualPlanetScale') != null) {
        $0.$11 = Boolean.parse($p1.attributes.getNamedItem('ActualPlanetScale').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowClouds') != null) {
        $0.$15 = Boolean.parse($p1.attributes.getNamedItem('ShowClouds').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowConstellationBoundries') != null) {
        $0.$16 = Boolean.parse($p1.attributes.getNamedItem('ShowConstellationBoundries').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowConstellationFigures') != null) {
        $0.$17 = Boolean.parse($p1.attributes.getNamedItem('ShowConstellationFigures').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowConstellationSelection') != null) {
        $0.$18 = Boolean.parse($p1.attributes.getNamedItem('ShowConstellationSelection').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowEcliptic') != null) {
        $0.$19 = Boolean.parse($p1.attributes.getNamedItem('ShowEcliptic').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowElevationModel') != null) {
        $0.$1A = Boolean.parse($p1.attributes.getNamedItem('ShowElevationModel').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowFieldOfView') != null) {
        $0.$1B = Boolean.parse($p1.attributes.getNamedItem('ShowFieldOfView').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowGrid') != null) {
        $0.$1C = Boolean.parse($p1.attributes.getNamedItem('ShowGrid').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowHorizon') != null) {
        $0.$1D = Boolean.parse($p1.attributes.getNamedItem('ShowHorizon').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowHorizonPanorama') != null) {
        $0.$1E = Boolean.parse($p1.attributes.getNamedItem('ShowHorizonPanorama').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowMoonsAsPointSource') != null) {
        $0.$1F = Boolean.parse($p1.attributes.getNamedItem('ShowMoonsAsPointSource').nodeValue);
    }
    if ($p1.attributes.getNamedItem('ShowSolarSystem') != null) {
        $0.$20 = Boolean.parse($p1.attributes.getNamedItem('ShowSolarSystem').nodeValue);
    }
    if ($p1.attributes.getNamedItem('FovTelescope') != null) {
        $0.$21 = parseInt($p1.attributes.getNamedItem('FovTelescope').nodeValue);
    }
    if ($p1.attributes.getNamedItem('FovEyepiece') != null) {
        $0.$22 = parseInt($p1.attributes.getNamedItem('FovEyepiece').nodeValue);
    }
    if ($p1.attributes.getNamedItem('FovCamera') != null) {
        $0.$23 = parseInt($p1.attributes.getNamedItem('FovCamera').nodeValue);
    }
    if ($p1.attributes.getNamedItem('LocalHorizonMode') != null) {
        $0.$24 = Boolean.parse($p1.attributes.getNamedItem('LocalHorizonMode').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemStars') != null) {
        $0.$25 = Boolean.parse($p1.attributes.getNamedItem('SolarSystemStars').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemMilkyWay') != null) {
        $0.$26 = Boolean.parse($p1.attributes.getNamedItem('SolarSystemMilkyWay').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemCosmos') != null) {
        $0.$27 = Boolean.parse($p1.attributes.getNamedItem('SolarSystemCosmos').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemOrbits') != null) {
        $0.$28 = Boolean.parse($p1.attributes.getNamedItem('SolarSystemOrbits').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemOverlays') != null) {
        $0.$29 = Boolean.parse($p1.attributes.getNamedItem('SolarSystemOverlays').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemLighting') != null) {
        $0.$2A = Boolean.parse($p1.attributes.getNamedItem('SolarSystemLighting').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemScale') != null) {
        $0.$2B = parseInt($p1.attributes.getNamedItem('SolarSystemScale').nodeValue);
    }
    if ($p1.attributes.getNamedItem('SolarSystemMultiRes') != null) {
        $0.$2C = Boolean.parse($p1.attributes.getNamedItem('SolarSystemMultiRes').nodeValue);
    }
    var $1 = wwtlib._Util.$6($p1, 'Place');
    $0.$B = wwtlib.Place.$11($1);
    var $2 = wwtlib._Util.$6($p1, 'EndTarget');
    if ($2 != null) {
        $0.$C = wwtlib.Place.$11($2);
    }
    var $3 = wwtlib._Util.$6($p1, 'Overlays');
    var $enum1 = ss.IEnumerator.getEnumerator($3.childNodes);
    while ($enum1.moveNext()) {
        var $6 = $enum1.current;
        $0.addOverlay(wwtlib.Overlay.$14($0, $6));
    }
    var $4 = wwtlib._Util.$6($p1, 'MusicTrack');
    if ($4 != null) {
        $0.$30 = wwtlib.Overlay.$14($0, wwtlib._Util.$6($4, 'Overlay'));
    }
    var $5 = wwtlib._Util.$6($p1, 'VoiceTrack');
    if ($5 != null) {
        $0.$31 = wwtlib.Overlay.$14($0, wwtlib._Util.$6($5, 'Overlay'));
    }
    return $0;
}
wwtlib.TourStop.prototype = {
    $0: 0,
    get_tourStopType: function() {
        if (this.$B.get_backgroundImageset() != null) {
            return this.$B.get_backgroundImageset().get_dataSetType();
        } else {
            return this.$0;
        }
    },
    set_tourStopType: function(value) {
        if (this.$B.get_backgroundImageset() != null) {
            if (this.$B.get_backgroundImageset().get_dataSetType() !== value) {
                this.$B.set_backgroundImageset(null);
            }
        }
        this.$0 = value;
        return value;
    },
    $1: 0,
    get_tweenPosition: function() {
        return this.$1;
    },
    set_tweenPosition: function(value) {
        this.$1 = value;
        return value;
    },
    $2: null,
    get_owner: function() {
        return this.$2;
    },
    set_owner: function(value) {
        this.$2 = value;
        return value;
    },
    get_$4: function() {
        return this.$3;
    },
    set_$4: function($p0) {
        if (this.$3 !== $p0) {
            this.$3 = $p0;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return $p0;
    },
    $5: 'Next',
    get_nextSlide: function() {
        return this.$5;
    },
    set_nextSlide: function(value) {
        this.$5 = value;
        return value;
    },
    get_isLinked: function() {
        if (this.$5 == null || this.$5 === 'Next' || !this.$5) {
            return false;
        }
        return true;
    },
    $6: false,
    get_fadeInOverlays: function() {
        return this.$6;
    },
    set_fadeInOverlays: function(value) {
        this.$6 = value;
        return value;
    },
    $7: false,
    get_masterSlide: function() {
        return this.$7;
    },
    set_masterSlide: function(value) {
        if (this.$7 !== value) {
            this.$7 = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    id: null,
    get_id: function() {
        return this.id;
    },
    set_id: function(value) {
        this.id = value;
        if (this.$2 != null) {
            this.$2.set_tourDirty(true);
        }
        return value;
    },
    toString: function() {
        if (this.$B != null) {
            return this.get_target().get_name();
        } else {
            return this.$8;
        }
    },
    $8: null,
    get_description: function() {
        return this.$8;
    },
    set_description: function(value) {
        if (this.$8 !== value) {
            this.$8 = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    $9: null,
    get_name: function() {
        if (this.$B != null) {
            return this.$B.get_name();
        }
        return this.$9;
    },
    set_name: function(value) {
        if (this.$9 !== value) {
            this.$9 = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    $A: 10000,
    get_duration: function() {
        return this.$A;
    },
    set_duration: function(value) {
        if (this.$A !== value) {
            this.$A = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    $B: null,
    get_target: function() {
        return this.$B;
    },
    set_target: function(value) {
        if (this.$B !== value) {
            this.$B = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    $C: null,
    get_endTarget: function() {
        return this.$C;
    },
    set_endTarget: function(value) {
        if (this.$C !== value) {
            this.$C = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    $D: true,
    get_hasLocation: function() {
        return this.$E;
    },
    set_hasLocation: function(value) {
        if (this.$D !== value) {
            this.$D = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    $E: true,
    get_hasTime: function() {
        return this.$E;
    },
    set_hasTime: function(value) {
        if (this.$E !== value) {
            this.$E = this.$D = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    get_startTime: function() {
        return this.$F;
    },
    set_startTime: function(value) {
        this.$F = value;
        if (this.$F !== value) {
            this.$F = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    get_endTime: function() {
        return this.$10;
    },
    set_endTime: function(value) {
        if (this.$10 !== value) {
            this.$10 = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    captureSettings: function() {
        this.$F = wwtlib.SpaceTimeController.get_now();
        this.$11 = wwtlib.Settings.get_current().get_actualPlanetScale();
        this.$12 = wwtlib.Settings.get_current().get_locationAltitude();
        this.$13 = wwtlib.Settings.get_current().get_locationLat();
        this.$14 = wwtlib.Settings.get_current().get_locationLng();
        this.$15 = wwtlib.Settings.get_current().get_showClouds();
        this.$16 = wwtlib.Settings.get_current().get_showConstellationBoundries();
        this.$17 = wwtlib.Settings.get_current().get_showConstellationFigures();
        this.$18 = wwtlib.Settings.get_current().get_showConstellationSelection();
        this.$19 = wwtlib.Settings.get_current().get_showEcliptic();
        this.$1A = wwtlib.Settings.get_current().get_showElevationModel();
        this.$1B = wwtlib.Settings.get_current().get_showFieldOfView();
        this.$1C = wwtlib.Settings.get_current().get_showGrid();
        this.$1D = wwtlib.Settings.get_current().get_showHorizon();
        this.$1E = wwtlib.Settings.get_current().get_showHorizonPanorama();
        this.$1F = wwtlib.Settings.get_current().get_showMoonsAsPointSource();
        this.$20 = wwtlib.Settings.get_current().get_showSolarSystem();
        this.$21 = wwtlib.Settings.get_current().get_fovTelescope();
        this.$22 = wwtlib.Settings.get_current().get_fovEyepiece();
        this.$23 = wwtlib.Settings.get_current().get_fovCamera();
        this.$24 = wwtlib.Settings.get_current().get_localHorizonMode();
        this.$25 = wwtlib.Settings.get_current().get_solarSystemStars();
        this.$26 = wwtlib.Settings.get_current().get_solarSystemMilkyWay();
        this.$27 = wwtlib.Settings.get_current().get_solarSystemCosmos();
        this.$28 = wwtlib.Settings.get_current().get_solarSystemOrbits();
        this.$29 = wwtlib.Settings.get_current().get_solarSystemOverlays();
        this.$2A = wwtlib.Settings.get_current().get_solarSystemLighting();
        this.$2B = wwtlib.Settings.get_current().get_solarSystemScale();
        this.$2C = wwtlib.Settings.get_current().get_solarSystemMultiRes();
    },
    get_solarSystemStars: function() {
        return this.$25;
    },
    get_solarSystemMultiRes: function() {
        return this.$2C;
    },
    get_solarSystemMilkyWay: function() {
        return this.$26;
    },
    get_solarSystemCosmos: function() {
        return this.$27;
    },
    get_solarSystemOrbits: function() {
        return this.$28;
    },
    get_solarSystemOverlays: function() {
        return this.$29;
    },
    get_solarSystemLighting: function() {
        return this.$2A;
    },
    get_solarSystemScale: function() {
        return this.$2B;
    },
    get_actualPlanetScale: function() {
        return this.$11;
    },
    get_fovCamera: function() {
        return this.$23;
    },
    get_fovEyepiece: function() {
        return this.$22;
    },
    get_fovTelescope: function() {
        return this.$21;
    },
    get_locationAltitude: function() {
        if (this.$E) {
            return this.$12;
        } else {
            return wwtlib.Settings.get_current().get_locationAltitude();
        }
    },
    get_locationLat: function() {
        if (this.$E) {
            return this.$13;
        } else {
            return wwtlib.Settings.get_current().get_locationLat();
        }
    },
    get_locationLng: function() {
        if (this.$E) {
            return this.$14;
        } else {
            return wwtlib.Settings.get_current().get_locationLng();
        }
    },
    get_showClouds: function() {
        return this.$15;
    },
    get_showConstellationBoundries: function() {
        return this.$16;
    },
    get_showConstellationFigures: function() {
        return this.$17;
    },
    get_showConstellationSelection: function() {
        return this.$18;
    },
    get_showEcliptic: function() {
        return this.$19;
    },
    get_showElevationModel: function() {
        return this.$1A;
    },
    get_showFieldOfView: function() {
        return this.$1B;
    },
    get_showGrid: function() {
        return this.$1C;
    },
    get_showHorizon: function() {
        return this.$1D;
    },
    get_showHorizonPanorama: function() {
        return this.$1E;
    },
    get_showMoonsAsPointSource: function() {
        return this.$1F;
    },
    get_showSolarSystem: function() {
        return this.$20;
    },
    get_localHorizonMode: function() {
        return this.$24;
    },
    $2D: '',
    $2E: null,
    get_thumbnail: function() {
        if (this.$B != null && this.$2E == null) {
            return null;
        }
        return this.$2E;
    },
    set_thumbnail: function(value) {
        this.$2E = value;
        if (this.$2 != null) {
            this.$2.set_tourDirty(true);
        }
        return value;
    },
    get_overlays: function() {
        return this.$2F;
    },
    $30: null,
    get_musicTrack: function() {
        return this.$30;
    },
    set_musicTrack: function(value) {
        if (this.$30 !== value) {
            this.$30 = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    $31: null,
    get_voiceTrack: function() {
        return this.$31;
    },
    set_voiceTrack: function(value) {
        if (this.$31 !== value) {
            this.$31 = value;
            if (this.$2 != null) {
                this.$2.set_tourDirty(true);
            }
        }
        return value;
    },
    addOverlay: function(overlay) {
        if (overlay == null) {
            return;
        }
        overlay.set_owner(this);
        this.$2F.add(overlay);
        if (this.$2 != null) {
            this.$2.set_tourDirty(true);
        }
    },
    removeOverlay: function(overlay) {
        this.$2F.remove(overlay);
        if (this.$2 != null) {
            this.$2.set_tourDirty(true);
        }
    },
    cleanUp: function() {
        var $enum1 = ss.IEnumerator.getEnumerator(this.get_overlays());
        while ($enum1.moveNext()) {
            var $0 = $enum1.current;
            $0.cleanUp();
        }
        if (this.$31 != null) {
            this.$31.cleanUp();
        }
        if (this.$30 != null) {
            this.$30.cleanUp();
        }
    },
    sendToBack: function(target) {
        this.$2F.remove(target);
        this.$2F.insert(0, target);
        if (this.$2 != null) {
            this.$2.set_tourDirty(true);
        }
    },
    bringToFront: function(target) {
        this.$2F.remove(target);
        this.$2F.add(target);
        if (this.$2 != null) {
            this.$2.set_tourDirty(true);
        }
    },
    bringForward: function(target) {
        var $0 = this.$2F.indexOf(target);
        if ($00) {
            this.$2F.remove(target);
            this.$2F.insert($0 - 1, target);
        }
        if (this.$2 != null) {
            this.$2.set_tourDirty(true);
        }
    },
    getNextOverlay: function(current) {
        if (current == null) {
            if (this.$2F.length > 0) {
                return this.$2F[0];
            } else {
                return null;
            }
        }
        var $0 = this.$2F.indexOf(current);
        if ($00) {
            return this.$2F[0];
        } else {
            return null;
        }
    }
    var $0 = this.$2F.indexOf(current);
    if ($0 > 0) {
        return this.$2F[$0 - 1];
    } else {
        return this.$2F[this.$2F.length - 1];
    }
},
getOverlayById: function(id) {
    var $enum1 = ss.IEnumerator.getEnumerator(this.$2F);
    while ($enum1.moveNext()) {
        var $0 = $enum1.current;
        if ($0.id === id) {
            return $0;
        }
    }
    return null;
},
get_tourStopThumbnailFilename: function() {
    return String.format('{0}.thumb.png', this.id);
},
getNextDefaultName: function(baseName) {
    var $0 = 1;
    var $enum1 = ss.IEnumerator.getEnumerator(this.$2F);
    while ($enum1.moveNext()) {
        var $1 = $enum1.current;
        if ($1.get_name().startsWith(baseName)) {
            var $2 = 0;
            try {
                $2 = parseInt($1.get_name().substr(baseName.length));
            } catch($3) {}
            if ($2 >= $0) {
                $0 = $2 + 1;
            }
        }
    }
    return String.format('{0} {1}', baseName, $0);
}
}
wwtlib.wwtlib$2 = function() {}
wwtlib.wwtlib$2.$0 = function($p0) {
    var $0 = '';
    var $1 = '';
    var $enum1 = ss.IEnumerator.getEnumerator($p0);
    while ($enum1.moveNext()) {
        var $2 = $enum1.current;
        $0 += $1;
        $0 += $2;
        $1 = ';';
    }
    return $0;
}
wwtlib.VizLayer = function() {
    this.table = [];
    this.items = [];
}
wwtlib.VizLayer.prototype = {
    header: null,
    $0: null,
    $1: false,
    load: function(data) {
        var $0 = data.split('\r\n');
        this.$0 = document.createElement('img');
        this.$0.src = 'images/starProfile.png';
        this.$0.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
            this.$1 = true;
        }), false);
        var $1 = false;
        var $enum1 = ss.IEnumerator.getEnumerator($0);
        while ($enum1.moveNext()) {
            var $2 = $enum1.current;
            if ($1) {
                this.table.add($2.split('\t'));
            } else {
                this.header = $2.split('\t');
                $1 = true;
            }
        }
    },
    $2: 0,
    $3: 1,
    $4: 2,
    $5: 3,
    $6: 4,
    $7: null,
    $8: null,
    prepare: function() {
        this.$8 = new Array(this.table.length);
        this.$7 = new Array(this.table.length);
        var $0 = 0;
        var $enum1 = ss.IEnumerator.getEnumerator(this.table);
        while ($enum1.moveNext()) {
            var $1 = $enum1.current;
            var $2 = new wwtlib.DataItem();
            $2.eventTime = Date.parseDate($1[this.$2]);
            var $3 = (6371000 - parseFloat($1[this.$5]) * 1000) / 6371000;
            $2.location = wwtlib.Coordinates.geoTo3dRad(parseFloat($1[this.$3]), parseFloat($1[this.$4]) + 180, $3);
            $2.tranformed = new wwtlib.Vector3d();
            $2.size = Math.pow(2, parseFloat($1[this.$6])) / 50;
            this.$8[$0] = $2.location;
            this.$7[$0] = $2.tranformed;
            this.items.add($2);
            $0++;
        }
    },
    draw: function(renderContext) {
        if (!this.$1) {
            return;
        }
        var $0 = new Array(this.table.length);
        renderContext.device.save();
        renderContext.WVP.projectArrayToScreen(this.$8, this.$7);
        var $1 = renderContext.device;
        $1.globalAlpha = 0.4;
        var $2 = renderContext.width;
        var $3 = renderContext.height;
        var $4 = wwtlib.Vector3d.makeCopy(renderContext.get_viewPoint());
        var $5 = renderContext.get_fovScale() / 100;
        var $enum1 = ss.IEnumerator.getEnumerator(this.items);
        while ($enum1.moveNext()) {
            var $6 = $enum1.current;
            if ($6.tranformed.z < 1) {
                var $7 = $6.tranformed.x;
                var $8 = $6.tranformed.y;
                var $9 = 4 * $6.size / $5;
                var $A = $9 / 2;
                if ($7 > -$A && $7 < $2 + $A && $8 > -$A && $8 < $3 + $A) {
                    $1.drawImage(this.$0, $7 - $9 / 2, $8 - $9 / 2, $9, $9);
                }
            }
        }
        renderContext.device.restore();
    }
}
wwtlib.DataItem = function() {}
wwtlib.DataItem.prototype = {
    eventTime: null,
    location: null,
    tranformed: null,
    color: 0,
    size: 0,
    getColor: function() {
        return 'Red';
    }
}
wwtlib.WebFile = function(url) {
    this.$0 = url;
}
wwtlib.WebFile.prototype = {
    $0: null,
    $1: null,
    $2: 0,
    $3: null,
    $4: null,
    $5: null,
    send: function() {
        var $0 = navigator.appVersion;
        if ($0.indexOf('MSIE 8') > -1 || $0.indexOf('MSIE 9') > -1) {
            this.$9();
        } else {
            this.$A();
        }
        this.set_state(0);
    },
    onStateChange: null,
    get_message: function() {
        return this.$1;
    },
    get_state: function() {
        return this.$2;
    },
    set_state: function(value) {
        this.$2 = value;
        if (this.onStateChange != null) {
            this.onStateChange();
        }
        return value;
    },
    $6: function($p0) {
        this.$3 = $p0;
        this.set_state(1);
    },
    $7: function() {
        this.$1 = String.format('Error encountered loading {0}', this.$0);
        this.set_state(2);
    },
    $8: function() {
        this.$1 = String.format('Timeout encountered loading {0}', this.$0);
        this.set_state(2);
    },
    $9: function() {
        this.$4 = new XDomainRequest();
        this.$4.onload = ss.Delegate.create(this, function() {
            this.$6(this.$4.responseText);
        });
        this.$4.onTimeout = ss.Delegate.create(this, this.$7);
        this.$4.onError = ss.Delegate.create(this, this.$8);
        this.$4.open('get', this.$0);
        this.$4.send();
    },
    $A: function() {
        this.$5 = new XMLHttpRequest();
        try {
            this.$5.open('GET', this.$0);
            this.$5.onreadystatechange = ss.Delegate.create(this, function() {
                if (this.$5.readyState === 4) {
                    this.$6(this.$5.responseText);
                }
            });
            this.$5.send();
        } catch($0) {
            this.$1 = $0.message;
            this.set_state(2);
            throw $0;
        }
    },
    getText: function() {
        return this.$3;
    },
    getXml: function() {
        return ss.parseXml(this.$3);
    }
}
wwtlib._Wtml = function() {}
wwtlib._Wtml.$0 = function($p0, $p1) {
    var $0 = new wwtlib.Folder();
    $0.loadFromUrl($p0, function() {
        wwtlib._Wtml.$1($0);
        $p1();
    });
}
wwtlib._Wtml.$1 = function($p0) {
    var $enum1 = ss.IEnumerator.getEnumerator($p0.get_children());
    while ($enum1.moveNext()) {
        var $0 = $enum1.current;
        var $1 = null;
        if (Type.canCast($0, wwtlib.Imageset)) {
            $1 = $0;
            wwtlib.WWTControl.imageSets.add($1);
        }
        if (Type.canCast($0, wwtlib.Place)) {
            var $2 = $0;
            if ($2.get_studyImageset() != null) {
                wwtlib.WWTControl.imageSets.add($2.get_studyImageset());
            } else if ($2.get_backgroundImageset() != null) {
                wwtlib.WWTControl.imageSets.add($2.get_backgroundImageset());
            }
        }
    }
    if (!String.isNullOrEmpty(wwtlib.WWTControl.imageSetName)) {
        var $3 = wwtlib.WWTControl.imageSetName.toLowerCase();
        var $enum2 = ss.IEnumerator.getEnumerator(wwtlib.WWTControl.imageSets);
        while ($enum2.moveNext()) {
            var $4 = $enum2.current;
            if ($4.get_name().toLowerCase() === $3) {
                wwtlib.WWTControl.singleton.renderContext.set_backgroundImageset($4);
            }
        }
    }
}
wwtlib.WWTControl = function() {
    this.$0 = [];
    this.layers = [];
    this.$1F = 65536;
}
wwtlib.WWTControl.get_renderNeeded = function() {
    return wwtlib.WWTControl.$B;
}
wwtlib.WWTControl.set_renderNeeded = function(value) {
    wwtlib.WWTControl.$B = true;
    return value;
}
wwtlib.WWTControl.showExplorerUI = function() {
    if (wwtlib.WWTControl.singleton != null) {
        wwtlib.WWTControl.singleton.createExplorerUI();
    }
}
wwtlib.WWTControl.initControl = function(DivId) {
    if (wwtlib.WWTControl.singleton.renderContext.device == null) {
        wwtlib.WWTControl.scriptInterface = new wwtlib.ScriptInterface();
        wwtlib.WWTControl.scriptInterface.settings = wwtlib.Settings.get_current();
        var $0 = wwtlib.WWTControl.$1B(DivId);
        var $1 = $0.getContext('2d');
        wwtlib.WWTControl.singleton.renderContext.device = $1;
        wwtlib.WWTControl.singleton.canvas = $0;
        wwtlib.WWTControl.singleton.renderContext.width = $0.width;
        wwtlib.WWTControl.singleton.renderContext.height = $0.height;
        wwtlib.WWTControl.singleton.setup($0);
        wwtlib.WWTControl.singleton.renderContext.set_backgroundImageset(wwtlib.Imageset.create('DSS', 'http://cdn.worldwidetelescope.org/wwtweb/dss.aspx?q={1},{2},{3}', 2, 3, 3, 100, 0, 12, 256, 180, '.png', false, '', 0, 0, 0, false, 'http://www.worldwidetelescope.org/thumbnails/DSS.png', true, false, 0, 0, 0, '', '', '', '', 1, 'Sky'));
        if (wwtlib.WWTControl.startMode === 'earth') {
            wwtlib.WWTControl.singleton.renderContext.set_backgroundImageset(wwtlib.Imageset.create('Blue Marble', 'http://www.worldwidetelescope.org/wwtweb/tiles.aspx?q={1},{2},{3},bm200407', 0, 3, 3, 101, 0, 7, 256, 180, '.png', false, '', 0, 0, 0, false, 'http://www.worldwidetelescope.org/wwtweb/thumbnail.aspx?name=bm200407', true, false, 0, 0, 0, '', '', '', '', 6371000, 'Earth'));
        }
        if (wwtlib.WWTControl.startMode === 'bing') {
            wwtlib.WWTControl.singleton.renderContext.set_backgroundImageset(wwtlib.Imageset.create('Virtual Earth Aerial', 'http://a{0}.ortho.tiles.virtualearth.net/tiles/a{1}.jpeg?g=15', 0, 3, 0, 102, 1, 20, 256, 360, '.png', false, '0123', 0, 0, 0, false, 'http://www.worldwidetelescope.org/wwtweb/thumbnail.aspx?name=earth', true, false, 0, 0, 0, '', '', '', '', 6371000, 'Earth'));
        }
    }
    wwtlib.WWTControl.singleton.renderContext.viewCamera.lng += 0;
    wwtlib.WWTControl.singleton.render();
    return wwtlib.WWTControl.scriptInterface;
}
wwtlib.WWTControl.$1B = function($p0) {
    var $0 = null;
    var $1 = document.getElementById($p0);
    var $2 = $1.attributes.getNamedItem('style');
    $0 = document.createElement('canvas');
    $0.height = parseInt($1.style.height);
    $0.width = parseInt($1.style.width);
    $1.appendChild($0);
    return $0;
}
wwtlib.WWTControl.showFolderUI = function() {
    wwtlib.WWTControl.singleton.createExplorerUI();
}
wwtlib.WWTControl.go = function(mode, lat, lng, zoom) {
    if (mode != null && mode.length > 0) {
        wwtlib.WWTControl.startMode = mode;
    }
    if ( !! zoom) {
        wwtlib.WWTControl.startLat = lat;
        wwtlib.WWTControl.startLng = lng;
        wwtlib.WWTControl.startZoom = zoom * 6;
    }
}
wwtlib.WWTControl.setBackgroundImageName = function(name) {
    wwtlib.WWTControl.imageSetName = name;
}
wwtlib.WWTControl.setForegroundImageName = function(name) {
    wwtlib.WWTControl.imageSetName = name;
}
wwtlib.WWTControl.showLayers = function(show) {
    wwtlib.WWTControl.showDataLayers = show;
}
wwtlib.WWTControl.prototype = {
    renderContext: null,
    canvas: null,
    explorer: null,
    uiController: null,
    $1: function($p0) {
        this.$0.add($p0);
    },
    $2: function($p0) {
        this.$0.remove($p0);
    },
    $3: function() {
        this.$0.clear();
    },
    $4: null,
    $5: 0,
    $6: 360,
    $7: 10000000000000000,
    get_$8: function() {
        if (this.renderContext.get_backgroundImageset() != null && this.renderContext.get_backgroundImageset().get_dataSetType() === 4) {
            return this.$7;
        } else {
            return this.$6;
        }
    },
    $9: 0.001373291015625,
    $A: 0.0001,
    get_zoomMin: function() {
        if (this.renderContext.get_backgroundImageset() != null && this.renderContext.get_backgroundImageset().get_dataSetType() === 4) {
            return this.$A / 10000;
        } else {
            return this.$9;
        }
    },
    set_zoomMin: function(value) {
        this.$9 = value;
        return value;
    },
    constellation: 'UMA',
    $C: function() {},
    render: function() {
        var $0 = false;
        if (this.canvas.width !== parseInt(this.canvas.parentNode.style.width)) {
            this.canvas.width = parseInt(this.canvas.parentNode.style.width);
            $0 = true;
        }
        if (this.canvas.height !== parseInt(this.canvas.parentNode.style.height)) {
            this.canvas.height = parseInt(this.canvas.parentNode.style.height);
            $0 = true;
        }
        if ($0) {
            if (this.explorer != null) {
                this.explorer.refresh();
            }
        }
        wwtlib.RenderTriangle.width = this.renderContext.width = this.canvas.width;
        wwtlib.RenderTriangle.height = this.renderContext.height = this.canvas.height;
        wwtlib.Tile.tilesInView = 0;
        wwtlib.Tile.tilesTouched = 0;
        if (this.get_$21() != null) {
            wwtlib.SpaceTimeController.set_now(this.get_$21().get_currentDateTime());
            if (this.renderContext.space) {}
            if (this.get_$21() != null) {
                var $5 = this.get_$21().get_currentPosition();
                this.renderContext.viewCamera = this.renderContext.targetCamera = $5;
                if (this.get_$21().get_complete()) {
                    this.$1A(this.get_$21().get_currentPosition().get_RA(), this.get_$21().get_currentPosition().get_dec());
                    this.set_$21(null);
                    this.$C();
                }
            }
        } else {
            wwtlib.SpaceTimeController.updateClock();
            if (this.renderContext.space) {}
        }
        this.renderContext.device.save();
        this.renderContext.device.fillStyle = 'black';
        this.renderContext.device.fillRect(0, 0, this.renderContext.width, this.renderContext.height);
        this.renderContext.device.restore();
        if (!this.renderContext.get_backgroundImageset().get_dataSetType() || this.renderContext.get_backgroundImageset().get_dataSetType() === 1) {
            this.renderContext.$F(this.renderContext.width, this.renderContext.height);
        } else {
            this.renderContext.setupMatricesSpace3d(this.renderContext.width, this.renderContext.height);
        }
        this.renderContext.drawImageSet(this.renderContext.get_backgroundImageset(), 100);
        if (this.renderContext.get_foregroundImageset() != null) {
            if (this.renderContext.viewCamera.opacity !== 100) {
                if (this.$D.width !== this.renderContext.width || this.$D.height !== this.renderContext.height) {
                    this.$D.width = parseInt(this.renderContext.width);
                    this.$D.height = parseInt(this.renderContext.height);
                }
                var $6 = this.renderContext.device;
                this.$E.clearRect(0, 0, this.renderContext.width, this.renderContext.height);
                this.renderContext.device = this.$E;
                this.renderContext.drawImageSet(this.renderContext.get_foregroundImageset(), 100);
                this.renderContext.device = $6;
                this.renderContext.device.save();
                this.renderContext.device.globalAlpha = this.renderContext.viewCamera.opacity / 100;
                this.renderContext.device.drawImage(this.$D, 0, 0);
                this.renderContext.device.restore();
            } else {
                this.renderContext.drawImageSet(this.renderContext.get_foregroundImageset(), this.renderContext.viewCamera.opacity);
            }
        }
        if (this.renderContext.space) {
            this.constellation = wwtlib.Constellations.containment.findConstellationForPoint(this.renderContext.viewCamera.get_RA(), this.renderContext.viewCamera.get_dec());
            if (wwtlib.Settings.get_active().get_showConstellationFigures()) {
                if (wwtlib.WWTControl.constellationsFigures == null) {
                    wwtlib.WWTControl.constellationsFigures = wwtlib.Constellations.create('Constellations', 'http://www.worldwidetelescope.org/data/figures.txt', false, false, false);
                }
                wwtlib.WWTControl.constellationsFigures.draw(this.renderContext, false, 'UMA', false);
            }
            if (wwtlib.Settings.get_active().get_showConstellationBoundries()) {
                if (wwtlib.WWTControl.constellationsBoundries == null) {
                    wwtlib.WWTControl.constellationsBoundries = wwtlib.Constellations.create('Constellations', 'http://www.worldwidetelescope.org/data/constellations.txt', true, false, false);
                }
                wwtlib.WWTControl.constellationsBoundries.draw(this.renderContext, wwtlib.Settings.get_active().get_showConstellationSelection(), this.constellation, false);
            }
        }
        if (wwtlib.WWTControl.showDataLayers) {
            var $enum1 = ss.IEnumerator.getEnumerator(this.layers);
            while ($enum1.moveNext()) {
                var $7 = $enum1.current;
                $7.draw(this.renderContext);
            }
        }
        if (wwtlib.Settings.get_current().get_showCrosshairs()) {
            this.$2A(this.renderContext);
        }
        if (this.uiController != null) {
            this.uiController.render(this.renderContext);
        } else {
            var $8 = 0;
            var $enum2 = ss.IEnumerator.getEnumerator(this.$0);
            while ($enum2.moveNext()) {
                var $9 = $enum2.current;
                $9.draw(this.renderContext);
                $8++;
            }
        }
        var $1 = wwtlib.Tile.tilesInView;
        var $2 = wwtlib.Tile.tilesTouched;
        this.$5++;
        wwtlib.wwtlib$3.$10();
        wwtlib.wwtlib$3.$11();
        wwtlib.wwtlib$3.$6(this.renderContext);
        wwtlib.Tile.currentRenderGeneration++;
        var $3 = Date.get_now();
        var $4 = $3 - this.$4;
        if ($4 > 1000) {
            var $A = (this.$5 / $4) * 1000;
            var $B = (wwtlib.RenderTriangle.trianglesRendered / $4) * 100;
            var $C = parseInt((wwtlib.RenderTriangle.trianglesCulled / (wwtlib.RenderTriangle.trianglesCulled + wwtlib.RenderTriangle.trianglesRendered) * 100));
            this.$4 = $3;
            this.$5 = 0;
            wwtlib.RenderTriangle.trianglesRendered = 0;
            wwtlib.RenderTriangle.trianglesCulled = 0;
        }
        window.setTimeout(ss.Delegate.create(this, function() {
            this.render();
        }), 0);
    },
    move: function(x, y) {
        var $0 = this.renderContext.get_fovScale() / (3600);
        var $1 = $0 / Math.max(0.2, Math.cos(this.renderContext.viewCamera.lat / 180 * Math.PI));
        if (!this.renderContext.get_backgroundImageset().get_dataSetType() || this.renderContext.get_backgroundImageset().get_dataSetType() === 1) {
            $1 = $1 * 6.3;
            $0 = $0 * 6.3;
        }
        this.renderContext.viewCamera.lng -= x * $1;
        this.renderContext.viewCamera.lat += y * $0;
        if (this.renderContext.viewCamera.lat > 90) {
            this.renderContext.viewCamera.lat = 90;
        }
        if (this.renderContext.viewCamera.lat < -90) {
            this.renderContext.viewCamera.lat = -90;
        }
    },
    zoom: function(factor) {
        this.renderContext.viewCamera.zoom *= factor;
        if (this.renderContext.viewCamera.zoom > 360) {
            this.renderContext.viewCamera.zoom = 360;
        }
    },
    $D: null,
    $E: null,
    $F: null,
    setup: function(canvas) {
        canvas.addEventListener('dblclick', ss.Delegate.create(this, this.onDoubleClick), false);
        canvas.addEventListener('mousemove', ss.Delegate.create(this, this.onMouseMove), false);
        canvas.addEventListener('mouseup', ss.Delegate.create(this, this.onMouseUp), false);
        canvas.addEventListener('mousedown', ss.Delegate.create(this, this.onMouseDown), false);
        canvas.addEventListener('mousewheel', ss.Delegate.create(this, this.onMouseWheel), false);
        canvas.addEventListener('DOMMouseScroll', ss.Delegate.create(this, this.onMouseWheel), false);
        canvas.addEventListener('touchstart', ss.Delegate.create(this, this.onTouchStart), false);
        canvas.addEventListener('touchmove', ss.Delegate.create(this, this.onTouchMove), false);
        canvas.addEventListener('touchend', ss.Delegate.create(this, this.onTouchEnd), false);
        canvas.addEventListener('gesturechange', ss.Delegate.create(this, this.onGestureChange), false);
        canvas.addEventListener('gesturestart', ss.Delegate.create(this, this.onGestureStart), false);
        canvas.addEventListener('gestureend', ss.Delegate.create(this, this.onGestureEnd), false);
        document.body.addEventListener('keydown', ss.Delegate.create(this, this.onKeyDown), false);
        this.renderContext.viewCamera.lat = wwtlib.WWTControl.startLat;
        this.renderContext.viewCamera.lng = wwtlib.WWTControl.startLng;
        this.renderContext.viewCamera.zoom = wwtlib.WWTControl.startZoom;
        this.$D = document.createElement('canvas');
        this.$D.width = canvas.width;
        this.$D.height = canvas.height;
        this.$E = this.$D.getContext('2d');
        this.$F = new wwtlib.Folder();
        this.$F.loadFromUrl('http://www.worldwidetelescope.org/data/imagesets.xml', ss.Delegate.create(this, this.setupComplete));
    },
    setupComplete: function() {
        wwtlib._Wtml.$1(this.$F);
        wwtlib.WWTControl.scriptInterface.$1();
    },
    createExplorerUI: function() {
        if (this.explorer == null) {
            this.explorer = wwtlib.FolderBrowser.create();
            var $0 = document.getElementById('UI');
            $0.insertBefore(this.explorer.canvas);
            wwtlib.WWTControl.exploreRoot = new wwtlib.Folder();
            wwtlib.WWTControl.exploreRoot.loadFromUrl('http://www.worldwidetelescope.org/wwtweb/catalog.aspx?W=NewExploreRoot', ss.Delegate.create(this, function() {
                this.explorer.$20(wwtlib.WWTControl.exploreRoot.get_children());
                this.explorer.refresh();
            }));
        }
    },
    onKeyDown: function(e) {
        if (this.uiController != null) {
            this.uiController.keyDown(this, e);
        }
    },
    onDoubleClick: function(e) {
        wwtlib.WWTControl.showDataLayers = true;
    },
    onGestureStart: function(e) {
        this.$14 = false;
        this.$10 = this.renderContext.viewCamera.zoom;
    },
    $10: 1,
    onGestureChange: function(e) {
        var $0 = e;
        this.$14 = false;
        this.renderContext.viewCamera.zoom = Math.min(360, this.$10 * (1 / $0.scale));
    },
    onGestureEnd: function(e) {
        var $0 = e;
        this.$14 = false;
    },
    $11: function($p0, $p1, $p2, $p3) {
        if (this.$0 != null && this.$0.length > 0) {
            var $0 = 0;
            var $enum1 = ss.IEnumerator.getEnumerator(this.$0);
            while ($enum1.moveNext()) {
                var $1 = $enum1.current;
                if ($1.hitTest(this.renderContext, $p0, $p1, $p2, $p3)) {
                    wwtlib.WWTControl.scriptInterface.$B($p0, $p1, $1.get_id());
                    return false;
                }
                $0++;
            }
        }
        return false;
    },
    $12: function($p0, $p1, $p2) {
        try {
            wwtAnotationclicked($p0 * 15, $p1, $p2);;
        } catch($0) {}
    },
    onTouchStart: function(e) {
        var $0 = e;
        $0.preventDefault();
        this.$15 = $0.targetTouches[0].pageX;
        this.$16 = $0.targetTouches[0].pageY;
        if (this.uiController != null) {
            var $1 = new wwtlib.WWTElementEvent(this.$15, this.$16);
            if (this.uiController.mouseDown(this, $1)) {
                this.$14 = false;
                this.$13 = false;
                return;
            }
        }
        this.$14 = true;
    },
    $13: false,
    onTouchMove: function(e) {
        var $0 = e;
        $0.preventDefault();
        if (this.$14) {
            this.$13 = true;
            var $1 = $0.targetTouches[0].pageX - this.$15;
            var $2 = $0.targetTouches[0].pageY - this.$16;
            this.move($1, $2);
            this.$15 = $0.targetTouches[0].pageX;
            this.$16 = $0.targetTouches[0].pageY;
        }
    },
    onTouchEnd: function(e) {
        var $0 = e;
        $0.preventDefault();
        if (this.uiController != null) {
            var $1 = new wwtlib.WWTElementEvent(this.$15, this.$16);
            if (this.uiController.mouseUp(this, $1)) {
                this.$14 = false;
                this.$13 = false;
                return;
            }
        }
        this.$14 = false;
        this.$13 = false;
    },
    $14: false,
    $15: 0,
    $16: 0,
    onMouseDown: function(e) {
        if (this.uiController != null) {
            if (this.uiController.mouseDown(this, e)) {
                return;
            }
        }
        this.$14 = true;
        this.$15 = wwtlib.Mouse.offsetX(this.canvas, e);
        this.$16 = wwtlib.Mouse.offsetY(this.canvas, e);
    },
    onMouseMove: function(e) {
        if (this.$14) {
            this.$18 = true;
            if (e.ctrlKey) {
                this.$17(wwtlib.Mouse.offsetX(this.canvas, e) - this.$15, wwtlib.Mouse.offsetY(this.canvas, e) - this.$16);
            } else {
                this.move(wwtlib.Mouse.offsetX(this.canvas, e) - this.$15, wwtlib.Mouse.offsetY(this.canvas, e) - this.$16);
            }
            this.$15 = wwtlib.Mouse.offsetX(this.canvas, e);
            this.$16 = wwtlib.Mouse.offsetY(this.canvas, e);
        } else {
            if (this.uiController != null) {
                if (this.uiController.mouseMove(this, e)) {
                    return;
                }
            }
        }
    },
    $17: function($p0, $p1) {
        this.renderContext.viewCamera.rotation += $p0 * 0.001;
        this.renderContext.viewCamera.angle += $p1 * 0.001;
        if (this.renderContext.viewCamera.angle < -1.52) {
            this.renderContext.viewCamera.angle = -1.52;
        }
        if (this.renderContext.viewCamera.angle > 0) {
            this.renderContext.viewCamera.angle = 0;
        }
    },
    $18: false,
    onMouseUp: function(e) {
        if (this.uiController != null) {
            if (this.uiController.mouseUp(this, e)) {
                this.$14 = false;
                return;
            }
        }
        if (this.$14 && !this.$18) {
            var $0 = this.getCoordinatesForScreenPoint(wwtlib.Mouse.offsetX(this.canvas, e), wwtlib.Mouse.offsetY(this.canvas, e));
            if (!this.$11($0.x, $0.y, wwtlib.Mouse.offsetX(this.canvas, e), wwtlib.Mouse.offsetY(this.canvas, e))) {
                wwtlib.WWTControl.scriptInterface.$A($0.x, $0.y);
            }
        }
        this.$14 = false;
        this.$18 = false;
    },
    getCoordinatesForScreenPoint: function(x, y) {
        var $0;
        var $1;
        var $2;
        var $3 = wwtlib.Vector2d.create(x, y);
        $2 = this.transformPickPointToWorldSpace($3, this.renderContext.width, this.renderContext.height);
        $0 = wwtlib.Coordinates.cartesianToSphericalSky($2);
        return $0;
    },
    transformPickPointToWorldSpace: function(ptCursor, backBufferWidth, backBufferHeight) {
        var $0;
        var $1;
        var $2 = new wwtlib.Vector3d();
        $2.x = (((2 * ptCursor.x) / backBufferWidth) - 1) / this.renderContext.get_projection().get_m11();
        $2.y = -(((2 * ptCursor.y) / backBufferHeight) - 1) / this.renderContext.get_projection().get_m22();
        $2.z = 1;
        var $3 = wwtlib.Matrix3d.multiplyMatrix(this.renderContext.get_view(), this.renderContext.get_world());
        $1 = new wwtlib.Vector3d();
        $0 = new wwtlib.Vector3d();
        $1.x = $2.x * $3.get_m11() + $2.y * $3.get_m21() + $2.z * $3.get_m31();
        $1.y = $2.x * $3.get_m12() + $2.y * $3.get_m22() + $2.z * $3.get_m32();
        $1.z = $2.x * $3.get_m13() + $2.y * $3.get_m23() + $2.z * $3.get_m33();
        $1.normalize();
        $0.x = $3.get_offsetX();
        $0.y = $3.get_offsetY();
        $0.z = $3.get_offsetZ();
        $0.x += $1.x * this.renderContext.nearPlane;
        $0.y += $1.y * this.renderContext.nearPlane;
        $0.z += $1.z * this.renderContext.nearPlane;
        return $1;
    },
    $19: function($p0, $p1) {
        try {
            wwtClick($p0 * 15, $p1);;
        } catch($0) {}
    },
    $1A: function($p0, $p1) {
        try {
            wwtArrived($p0 * 15, $p1);;
        } catch($0) {}
    },
    onMouseWheel: function(e) {
        var $0 = e;
        var $1;
        if ( !! $0.detail) {
            $1 = $0.detail * -1;
        } else {
            $1 = $0.wheelDelta / 40;
        }
        if ($1 > 0) {
            this.zoom(0.9);
        } else {
            this.zoom(1.1);
        }
    },
    gotoRADecZoom: function(ra, dec, zoom, instant) {
        ra = wwtlib.DoubleUtilities.clamp(ra, 0, 24);
        dec = wwtlib.DoubleUtilities.clamp(dec, -90, 90);
        zoom = wwtlib.DoubleUtilities.clamp(zoom, this.get_zoomMin(), this.get_$8());
        this.$1C = false;
        this.$1D = null;
        this.gotoTargetFull(false, instant, wwtlib.CameraParameters.create(dec, wwtlib.WWTControl.singleton.renderContext.rAtoViewLng(ra), zoom, wwtlib.WWTControl.singleton.renderContext.viewCamera.rotation, wwtlib.WWTControl.singleton.renderContext.viewCamera.angle, wwtlib.WWTControl.singleton.renderContext.viewCamera.opacity), wwtlib.WWTControl.singleton.renderContext.get_foregroundImageset(), wwtlib.WWTControl.singleton.renderContext.get_backgroundImageset());
    },
    $1C: false,
    $1D: null,
    $1E: false,
    gotoTarget: function(place, noZoom, instant, trackObject) {
        this.$1C = false;
        this.$1D = null;
        var $0 = place.get_camParams();
        if (this.renderContext.get_backgroundImageset() != null && place.get_type() !== this.renderContext.get_backgroundImageset().get_dataSetType()) {
            this.renderContext.viewCamera = this.renderContext.targetCamera = place.get_camParams();
            this.renderContext.set_backgroundImageset(this.getDefaultImageset(place.get_type(), 3));
            instant = true;
        } else if (this.$1E && place.get_target() !== this.$1F) {
            this.renderContext.viewCamera = this.renderContext.targetCamera = place.get_camParams();
            this.$1F = place.get_target();
            instant = true;
        }
        if (place.get_classification() === 128) {
            $0.zoom = this.get_$8();
            this.gotoTargetFull(false, instant, $0, null, null);
        } else {
            this.$1F = place.get_target();
            this.gotoTargetFull(noZoom, instant, $0, place.get_studyImageset(), place.get_backgroundImageset());
            if (trackObject) {
                this.$1C = true;
                this.$1D = place;
            }
        }
    },
    gotoTargetFull: function(noZoom, instant, cameraParams, studyImageSet, backgroundImageSet) {
        wwtlib.WWTControl.set_renderNeeded(true);
        this.$1C = false;
        this.$1D = null;
        this.$23 = studyImageSet;
        this.$24 = backgroundImageSet;
        if (noZoom) {
            cameraParams.zoom = this.renderContext.viewCamera.zoom;
            cameraParams.angle = this.renderContext.viewCamera.angle;
            cameraParams.rotation = this.renderContext.viewCamera.rotation;
        } else {
            if (cameraParams.zoom === -1 || !cameraParams.zoom) {
                if (this.renderContext.space) {
                    cameraParams.zoom = 1.40625;
                } else {
                    cameraParams.zoom = 0.09;
                }
            }
        }
        if (instant || (Math.abs(this.renderContext.viewCamera.lat - cameraParams.lat) < 1E - 12 && Math.abs(this.renderContext.viewCamera.lng - cameraParams.lng) < 1E - 12 && Math.abs(this.renderContext.viewCamera.zoom - cameraParams.zoom) < 1E - 12)) {
            this.set_$21(null);
            this.renderContext.viewCamera = this.renderContext.targetCamera = cameraParams;
            this.$25();
            this.$22 = true;
        } else {
            this.set_$21(wwtlib.wwtlib$7.$A(this.renderContext.viewCamera, cameraParams));
            wwtlib.WWTControl.set_renderNeeded(true);
            this.get_$21().set_midpoint(ss.Delegate.create(this, this.$25));
        }
    },
    $20: function() {
        this.renderContext.viewCamera = this.renderContext.targetCamera;
        this.set_$21(null);
    },
    get_$21: function() {
        return this.renderContext.viewMover;
    },
    set_$21: function($p0) {
        this.renderContext.viewMover = $p0;
        wwtlib.WWTControl.set_renderNeeded(true);
        return $p0;
    },
    $22: false,
    fadeInImageSet: function(newImageSet) {
        if (this.renderContext.get_backgroundImageset() != null && newImageSet.get_dataSetType() !== this.renderContext.get_backgroundImageset().get_dataSetType()) {
            wwtlib.wwtlib$3.$A();
            wwtlib.wwtlib$3.$9();
        }
        this.renderContext.set_backgroundImageset(newImageSet);
    },
    $23: null,
    $24: null,
    $25: function() {
        if ((this.$23 != null && this.renderContext.get_foregroundImageset() == null) || (this.renderContext.get_foregroundImageset() != null && !this.renderContext.get_foregroundImageset().equals(this.$23))) {
            this.renderContext.set_foregroundImageset(this.$23);
        }
        if (this.renderContext.get_backgroundImageset() != null && (this.$24 != null && !this.renderContext.get_backgroundImageset().equals(this.$24))) {
            if (this.$24 != null && this.$24.get_generic()) {
                this.fadeInImageSet(this.$26(this.$24));
            } else {
                this.fadeInImageSet(this.$24);
            }
        }
    },
    getDefaultImageset: function(imageSetType, bandPass) {
        var $enum1 = ss.IEnumerator.getEnumerator(wwtlib.WWTControl.imageSets);
        while ($enum1.moveNext()) {
            var $0 = $enum1.current;
            if ($0.get_defaultSet() && $0.get_bandPass() === bandPass && $0.get_dataSetType() === imageSetType) {
                return $0;
            }
        }
        var $enum2 = ss.IEnumerator.getEnumerator(wwtlib.WWTControl.imageSets);
        while ($enum2.moveNext()) {
            var $1 = $enum2.current;
            if ($1.get_bandPass() === bandPass && $1.get_dataSetType() === imageSetType) {
                return $1;
            }
        }
        var $enum3 = ss.IEnumerator.getEnumerator(wwtlib.WWTControl.imageSets);
        while ($enum3.moveNext()) {
            var $2 = $enum3.current;
            if ($2.get_dataSetType() === imageSetType) {
                return $2;
            }
        }
        return wwtlib.WWTControl.imageSets[0];
    },
    $26: function($p0) {
        var $enum1 = ss.IEnumerator.getEnumerator(wwtlib.WWTControl.imageSets);
        while ($enum1.moveNext()) {
            var $0 = $enum1.current;
            if ($0.get_defaultSet() && $0.get_bandPass() === $p0.get_bandPass() && $0.get_dataSetType() === $p0.get_dataSetType()) {
                return $0;
            }
        }
        var $enum2 = ss.IEnumerator.getEnumerator(wwtlib.WWTControl.imageSets);
        while ($enum2.moveNext()) {
            var $1 = $enum2.current;
            if ($1.get_bandPass() === $p0.get_bandPass() && $1.get_dataSetType() === $p0.get_dataSetType()) {
                return $1;
            }
        }
        return wwtlib.WWTControl.imageSets[0];
    },
    $27: function($p0) {},
    $28: function() {},
    $29: null,
    playTour: function(url) {
        if (Type.canCast(this.uiController, wwtlib.TourPlayer)) {
            var $0 = this.uiController;
            $0.stop(false);
        }
        this.$29 = wwtlib.TourDocument.fromUrl(url, ss.Delegate.create(this, function() {
            var $1_0 = new wwtlib.TourPlayer();
            $1_0.set_tour(this.$29);
            this.$29.set_currentTourstopIndex( - 1);
            this.uiController = $1_0;
            $1_0.play();
        }));
    },
    playCurrentTour: function() {
        if (Type.canCast(this.uiController, wwtlib.TourPlayer)) {
            var $0 = this.uiController;
            $0.play();
        }
    },
    pauseCurrentTour: function() {
        if (Type.canCast(this.uiController, wwtlib.TourPlayer)) {
            var $0 = this.uiController;
            $0.pauseTour();
        }
    },
    stopCurrentTour: function() {
        if (Type.canCast(this.uiController, wwtlib.TourPlayer)) {
            var $0 = this.uiController;
            $0.stop(false);
        }
    },
    getImagesetByName: function(name) {
        var $enum1 = ss.IEnumerator.getEnumerator(wwtlib.WWTControl.imageSets);
        while ($enum1.moveNext()) {
            var $0 = $enum1.current;
            if ($0.get_name().toLowerCase().indexOf(name.toLowerCase()) > -1) {
                return $0;
            }
        }
        return null;
    },
    setBackgroundImageByName: function(name) {
        var $0 = this.getImagesetByName(name);
        if ($0 != null) {
            this.renderContext.set_backgroundImageset($0);
        }
    },
    setForegroundImageByName: function(name) {
        var $0 = this.getImagesetByName(name);
        if ($0 != null) {
            this.renderContext.set_foregroundImageset($0);
        }
    },
    $2A: function($p0) {
        var $0 = $p0.device;
        $0.save();
        $0.beginPath();
        $0.strokeStyle = wwtlib.Settings.get_current().get_crosshairsColor();
        $0.lineWidth = 2;
        var $1 = $p0.width / 2,
        $2 = $p0.height / 2;
        var $3 = 5;
        $0.moveTo($1, $2 + $3);
        $0.lineTo($1, $2 - $3);
        $0.moveTo($1 + $3, $2);
        $0.lineTo($1 - $3, $2);
        $0.stroke();
        $0.restore();
    }
}
wwtlib.WWTElementEvent = function(x, y) {
    this.offsetX = x;
    this.offsetY = y;
}
wwtlib.WWTElementEvent.prototype = {
    offsetX: 0,
    offsetY: 0
}
wwtlib.RenderContext = function() {
    this.$0 = new wwtlib.Vector3d();
    this.viewCamera = new wwtlib.CameraParameters();
    this.targetCamera = new wwtlib.CameraParameters();
    this.$11 = new Array(6);
    for (var $0 = 0; $0 < 6; $0++) {
        this.$11[$0] = new wwtlib.PlaneD(0, 0, 0, 0);
    }
}
wwtlib.RenderContext.create = function(device) {
    var $0 = new wwtlib.RenderContext();
    $0.device = device;
    $0.viewCamera.zoom = 700;
    $0.viewCamera.target = 65536;
    return $0;
}
wwtlib.RenderContext.$D = function($p0, $p1) {
    var $0 = 1;
    switch ($p0.get_projection()) {
    case 0:
        $0 = Math.pow(2, $p1);
        break;
    case 1:
        $0 = (Math.pow(2, $p1) * (180 / $p0.get_baseTileDegrees()));
        break;
    case 2:
        $0 = Math.pow(2, $p1);
        break;
    case 4:
        $0 = 1;
        break;
    default:
        $0 = Math.pow(2, $p1);
        break;
    }
    return $0;
}
wwtlib.RenderContext.$E = function($p0, $p1) {
    var $0 = 1;
    switch ($p0.get_projection()) {
    case 6:
    case 3:
        $0 = Math.pow(2, $p1);
        break;
    case 0:
        $0 = Math.pow(2, $p1) * parseInt(($p0.get_baseTileDegrees() / 360));
        break;
    case 1:
        $0 = Math.pow(2, $p1) * parseInt(($p0.get_baseTileDegrees() / 90));
        $0 = Math.pow(2, $p1) * parseInt((360 / $p0.get_baseTileDegrees()));
        break;
    case 5:
    case 2:
        if ($p0.get_widthFactor() === 1) {
            $0 = Math.pow(2, $p1) * 2;
        } else {
            $0 = Math.pow(2, $p1);
        }
        break;
    case 4:
        $0 = 1;
        break;
    default:
        $0 = Math.pow(2, $p1) * 2;
        break;
    }
    return $0;
}
wwtlib.RenderContext.prototype = {
    device: null,
    height: 0,
    width: 0,
    get_viewPoint: function() {
        return this.$0;
    },
    get_RA: function() {
        return ((((180 - (this.viewCamera.lng - 180)) / 15) % 24) + 48) % 24;
    },
    space: false,
    rAtoViewLng: function(ra) {
        return 180 - (ra / 24 * 360) - 180;
    },
    get_dec: function() {
        return this.viewCamera.lat;
    },
    $2: 0,
    get_fovAngle: function() {
        return this.$2;
    },
    $3: 0,
    get_fovScale: function() {
        return this.$3;
    },
    set_fovScale: function(value) {
        this.$3 = value;
        return value;
    },
    $4: null,
    get_view: function() {
        return this.$4;
    },
    set_view: function(value) {
        this.$4 = value;
        this.$10 = true;
        return value;
    },
    $5: null,
    get_viewBase: function() {
        return this.$5;
    },
    set_viewBase: function(value) {
        this.$5 = value;
        return value;
    },
    $6: null,
    get_projection: function() {
        return this.$6;
    },
    set_projection: function(value) {
        this.$6 = value;
        this.$10 = true;
        return value;
    },
    $7: null,
    get_world: function() {
        return this.$7;
    },
    set_world: function(value) {
        this.$7 = value;
        this.$10 = true;
        return value;
    },
    $8: null,
    get_worldBase: function() {
        return this.$8;
    },
    set_worldBase: function(value) {
        this.$8 = value;
        return value;
    },
    $9: null,
    get_worldBaseNonRotating: function() {
        return this.$9;
    },
    set_worldBaseNonRotating: function(value) {
        this.$9 = value;
        return value;
    },
    $A: 6378137,
    get_nominalRadius: function() {
        return this.$A;
    },
    set_nominalRadius: function(value) {
        this.$A = value;
        return value;
    },
    viewMover: null,
    onTarget: function(place) {
        return ((Math.abs(this.viewCamera.lat - this.targetCamera.lat) < 1E - 12 && Math.abs(this.viewCamera.lng - this.targetCamera.lng) < 1E - 12 && Math.abs(this.viewCamera.zoom - this.targetCamera.zoom) < 1E - 12) && this.viewMover == null);
    },
    setTexture: function(texture) {},
    $B: null,
    get_backgroundImageset: function() {
        return this.$B;
    },
    set_backgroundImageset: function(value) {
        this.$B = value;
        return value;
    },
    $C: null,
    get_foregroundImageset: function() {
        return this.$C;
    },
    set_foregroundImageset: function(value) {
        this.$C = value;
        return value;
    },
    drawImageSet: function(imageset, opacity) {
        var $0 = wwtlib.RenderContext.$E(imageset, imageset.get_baseLevel());
        var $1 = wwtlib.RenderContext.$D(imageset, imageset.get_baseLevel());
        for (var $2 = 0; $2 < $0; $2++) {
            for (var $3 = 0; $3 < $1; $3++) {
                var $4 = wwtlib.wwtlib$3.$2(imageset.get_baseLevel(), $2, $3, imageset, null);
                if ($4 != null) {
                    $4.draw3D(this, opacity);
                }
            }
        }
    },
    $F: function($p0, $p1) {
        this.space = false;
        wwtlib.RenderTriangle.cullInside = false;
        var $0 = wwtlib.Matrix3d.$1D(((this.viewCamera.lng - 90) / 180 * Math.PI));
        $0.$22(wwtlib.Matrix3d.$1E((( - this.viewCamera.lat) / 180 * Math.PI)));
        this.set_world($0);
        this.set_worldBase($0);
        this.$0 = wwtlib.Coordinates.geoTo3d(this.viewCamera.lat, this.viewCamera.lng);
        var $1 = 0;
        if (this.$B.get_isMandelbrot()) {
            $1 = (4 * (this.viewCamera.zoom / 180)) + 1E - 41;
        } else {
            $1 = (4 * (this.viewCamera.zoom / 180)) + 1E - 06;
        }
        this.$2 = (this.viewCamera.zoom / 343.774) / Math.PI * 180;
        this.$3 = (this.$2 / $p1) * 3600;
        var $2 = 0;
        var $3 = 1;
        var $4 = this.viewCamera.rotation;
        this.cameraPosition = wwtlib.Vector3d.create((Math.sin($4) * Math.sin(this.viewCamera.angle) * $1), (Math.cos($4) * Math.sin(this.viewCamera.angle) * $1), ( - $3 - (Math.cos(this.viewCamera.angle) * $1)));
        var $5 = wwtlib.Vector3d.create(0, 0, -$3);
        var $6 = this.cameraPosition.length();
        var $7 = wwtlib.Vector3d.create(Math.sin($4) * Math.cos(this.viewCamera.angle), Math.cos($4) * Math.cos(this.viewCamera.angle), Math.sin(this.viewCamera.angle));
        this.set_view(wwtlib.Matrix3d.lookAtLH(this.cameraPosition, $5, $7));
        this.set_viewBase(this.get_view());
        var $8 = Math.sqrt(($1 + 1) * ($1 + 1) - 1);
        $8 = Math.max(0.5, $8);
        var $9 = $1 * 0.05;
        $9 = $1 * 0.05;
        this.set_projection(wwtlib.Matrix3d.perspectiveFovLH((Math.PI / 4), $p0 / $p1, $9, $8));
        this.makeFrustum();
    },
    setupMatricesSpace3d: function(canvasWidth, canvasHeight) {
        this.space = true;
        wwtlib.RenderTriangle.cullInside = true;
        var $0 = wwtlib.Matrix3d.$1D( - (this.viewCamera.lng - 90) / 180 * Math.PI);
        $0.$22(wwtlib.Matrix3d.$1E( - this.viewCamera.lat / 180 * Math.PI));
        var $1 = -(this.viewCamera.rotation / 180 * Math.PI);
        this.$2 = (this.viewCamera.zoom / 343.774) / Math.PI * 180;
        this.$3 = (this.$2 / canvasHeight) * 3600;
        this.set_world($0);
        this.set_worldBase($0);
        this.$0 = wwtlib.Coordinates.raDecTo3dAu(this.get_RA(), this.get_dec(), 1);
        var $2 = this.viewCamera.zoom;
        var $3 = ($2 / 343.774) / Math.PI * 180;
        this.cameraPosition = wwtlib.Vector3d.create(0, 0, 0);
        this.set_view(wwtlib.Matrix3d.lookAtLH(this.cameraPosition, wwtlib.Vector3d.create(0, 0, -1), wwtlib.Vector3d.create(Math.sin($1), Math.cos($1), 0)));
        this.set_viewBase(this.get_view());
        var $4 = 0.1;
        this.nearPlane = 0.1;
        var $5 = wwtlib.Matrix3d.perspectiveFovLH($2 / 343.774, canvasWidth / canvasHeight, 0.1, -2);
        this.set_projection($5);
        this.makeFrustum();
    },
    nearPlane: 0,
    $10: true,
    get_frustum: function() {
        return this.$11;
    },
    cameraPosition: null,
    WVP: null,
    makeFrustum: function() {
        var $0 = wwtlib.Matrix3d.multiplyMatrix(wwtlib.Matrix3d.multiplyMatrix(this.get_world(), this.get_view()), this.get_projection());
        this.WVP = $0;
        var $1 = this.get_world();
        $1.invert();
        this.$11[0].a = $0.get_m14() + $0.get_m11();
        this.$11[0].b = $0.get_m24() + $0.get_m21();
        this.$11[0].c = $0.get_m34() + $0.get_m31();
        this.$11[0].d = $0.get_m44() + $0.get_m41();
        this.$11[1].a = $0.get_m14() - $0.get_m11();
        this.$11[1].b = $0.get_m24() - $0.get_m21();
        this.$11[1].c = $0.get_m34() - $0.get_m31();
        this.$11[1].d = $0.get_m44() - $0.get_m41();
        this.$11[2].a = $0.get_m14() - $0.get_m12();
        this.$11[2].b = $0.get_m24() - $0.get_m22();
        this.$11[2].c = $0.get_m34() - $0.get_m32();
        this.$11[2].d = $0.get_m44() - $0.get_m42();
        this.$11[3].a = $0.get_m14() + $0.get_m12();
        this.$11[3].b = $0.get_m24() + $0.get_m22();
        this.$11[3].c = $0.get_m34() + $0.get_m32();
        this.$11[3].d = $0.get_m44() + $0.get_m42();
        this.$11[4].a = $0.get_m13();
        this.$11[4].b = $0.get_m23();
        this.$11[4].c = $0.get_m33();
        this.$11[4].d = $0.get_m43();
        this.$11[5].a = $0.get_m14() - $0.get_m13();
        this.$11[5].b = $0.get_m24() - $0.get_m23();
        this.$11[5].c = $0.get_m34() - $0.get_m33();
        this.$11[5].d = $0.get_m44() - $0.get_m43();
        for (var $2 = 0; $2 < 6; $2++) {
            this.$11[$2].normalize();
        }
        this.$10 = false;
        this.WVP.scale(wwtlib.Vector3d.create(this.width / 2, -this.height / 2, 1));
        this.WVP.translate(wwtlib.Vector3d.create(this.width / 2, this.height / 2, 0));
    },
    $12: 'Blue'
}
wwtlib.RenderTriangle = function() {
    this.a = new wwtlib.PositionTexture();
    this.b = new wwtlib.PositionTexture();
    this.c = new wwtlib.PositionTexture();
    this.ta = new wwtlib.Vector3d();
    this.tb = new wwtlib.Vector3d();
    this.tc = new wwtlib.Vector3d();
}
wwtlib.RenderTriangle.create = function(a, b, c, img, level) {
    var $0 = new wwtlib.RenderTriangle();
    $0.a = a.copy();
    $0.b = b.copy();
    $0.c = c.copy();
    $0.$0 = img;
    $0.tileLevel = level;
    return $0;
}
wwtlib.RenderTriangle.$9 = function($p0, $p1, $p2, $p3) {
    var $0 = wwtlib.Vector2d.subtractVector($p1, $p0);
    var $1 = wwtlib.Vector2d.subtractVector($p2, $p0);
    $0.normalize();
    $1.normalize();
    var $2 = wwtlib.Vector2d.create($0.x + $1.x, $0.y + $1.y);
    $2.normalize();
    var $3 = wwtlib.Vector2d.create($0.x - $1.x, $0.y - $1.y);
    var $4 = $3.get_length() / 2;
    var $5 = Math.min(2, $p3 / $4);
    $2.extend($5);
    return wwtlib.Vector2d.create($p0.x - $2.x, $p0.y - $2.y);
}
wwtlib.RenderTriangle.$A = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $0 = $p2 - $p0;
    var $1 = $p3 - $p1;
    var $2 = $p4 - $p0;
    var $3 = $p5 - $p1;
    var $4 = Math.sqrt($0 * $0 + $1 * $1);
    if ( !! $4) {
        $0 /= $4;
        $1 /= $4;
    }
    $4 = Math.sqrt($2 * $2 + $3 * $3);
    if ( !! $4) {
        $2 /= $4;
        $3 /= $4;
    }
    var $5 = $0 + $2;
    var $6 = $1 + $3;
    $4 = Math.sqrt($5 * $5 + $6 * $6);
    if ( !! $4) {
        $5 /= $4;
        $6 /= $4;
    }
    var $7 = $0 - $2;
    var $8 = $1 - $3;
    $4 = Math.sqrt($7 * $7 + $8 * $8);
    var $9 = $4 / 2;
    var $A = Math.min(2, 0.6 / $9);
    $5 *= $A;
    $6 *= $A;
    return wwtlib.Vector2d.create($p0 - $5, $p1 - $6);
}
wwtlib.RenderTriangle.prototype = {
    $0: null,
    opacity: 1,
    tileLevel: 0,
    $7: function() {
        var $0 = wwtlib.Vector3d.subtractVectors(this.ta, this.tb);
        var $1 = wwtlib.Vector3d.subtractVectors(this.ta, this.tc);
        var $2 = wwtlib.Vector3d.cross($0, $1);
        $2.normalize();
        return $2.z >= 0;
    },
    draw: function(ctx, wvp) {
        wvp.$12(this.a.position, this.ta);
        wvp.$12(this.b.position, this.tb);
        wvp.$12(this.c.position, this.tc);
        if (this.$7() === wwtlib.RenderTriangle.cullInside) {
            wwtlib.RenderTriangle.trianglesCulled++;
            return;
        }
        this.$8(ctx, this.$0, this.ta.x, this.ta.y, this.tb.x, this.tb.y, this.tc.x, this.tc.y, this.a.tu, this.a.tv, this.b.tu, this.b.tv, this.c.tu, this.c.tv);
    },
    $8: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10, $p11, $p12, $p13) {
        if (!this.intersects(0, wwtlib.RenderTriangle.width, 0, wwtlib.RenderTriangle.height, $p2, $p3, $p4, $p5, $p6, $p7)) {
            return false;
        }
        var $0 = wwtlib.RenderTriangle.$A($p2, $p3, $p4, $p5, $p6, $p7);
        var $1 = wwtlib.RenderTriangle.$A($p4, $p5, $p2, $p3, $p6, $p7);
        var $2 = wwtlib.RenderTriangle.$A($p6, $p7, $p4, $p5, $p2, $p3);
        $p2 = $0.x;
        $p3 = $0.y;
        $p4 = $1.x;
        $p5 = $1.y;
        $p6 = $2.x;
        $p7 = $2.y;
        $p0.save();
        if (wwtlib.RenderTriangle.renderingOn) {
            $p0.globalAlpha = this.opacity;
            $p0.beginPath();
            $p0.moveTo($p2, $p3);
            $p0.lineTo($p4, $p5);
            $p0.lineTo($p6, $p7);
            $p0.closePath();
            $p0.clip();
        }
        var $3 = $p8 * ($p13 - $p11) - $p10 * $p13 + $p12 * $p11 + ($p10 - $p12) * $p9;
        if (!$3) {
            $p0.restore();
            return false;
        }
        var $4 = -($p9 * ($p6 - $p4) - $p11 * $p6 + $p13 * $p4 + ($p11 - $p13) * $p2) / $3;
        var $5 = ($p11 * $p7 + $p9 * ($p5 - $p7) - $p13 * $p5 + ($p13 - $p11) * $p3) / $3;
        var $6 = ($p8 * ($p6 - $p4) - $p10 * $p6 + $p12 * $p4 + ($p10 - $p12) * $p2) / $3;
        var $7 = -($p10 * $p7 + $p8 * ($p5 - $p7) - $p12 * $p5 + ($p12 - $p10) * $p3) / $3;
        var $8 = ($p8 * ($p13 * $p4 - $p11 * $p6) + $p9 * ($p10 * $p6 - $p12 * $p4) + ($p12 * $p11 - $p10 * $p13) * $p2) / $3;
        var $9 = ($p8 * ($p13 * $p5 - $p11 * $p7) + $p9 * ($p10 * $p7 - $p12 * $p5) + ($p12 * $p11 - $p10 * $p13) * $p3) / $3;
        $p0.transform($4, $5, $6, $7, $8, $9);
        if (wwtlib.RenderTriangle.renderingOn) {
            $p0.drawImage($p1, 0, 0);
        }
        $p0.restore();
        return true;
    },
    intersects: function(l, r, t, b, x0, y0, x1, y1, x2, y2) {
        if (x0 > l && x0t && y0l && x1t && y1l && x2t && y2$0) || (Math.abs(y0 - y1) > $0) || (Math.abs(x2 - x1) > $0) || (Math.abs(y2 - y1) > $0) || (Math.abs(x0 - x2) > $0) || (Math.abs(y0 - y2) > $0))) {
            return false;
        }
        return this.lineRectangleIntersect(l, r, t, b, x0, y0, x1, y1) || this.lineRectangleIntersect(l, r, t, b, x1, y1, x2, y2) || this.lineRectangleIntersect(l, r, t, b, x2, y2, x0, y0);
    },
    lineRectangleIntersect: function(l, r, t, b, x0, y0, x1, y1) {
        var $0;
        var $1;
        var $2;
        var $3;
        var $4;
        var $5;
        $4 = (y1 - y0) / (x1 - x0);
        $5 = y0 - ($4 * x0);
        if ($4 > 0) {
            $0 = ($4 * l + $5);
            $1 = ($4 * r + $5);
        } else {
            $0 = ($4 * r + $5);
            $1 = ($4 * l + $5);
        }
        if (y0$2) ? $0: $2;
        $7 = ($1 < $3) ? $1: $3;
        return ($6 < $7) && (!(($7b)));
    }
}
wwtlib.Settings = function() {
    this.$C = -122.0858;
}
wwtlib.Settings.get_current = function() {
    if (wwtlib.Settings.$0 == null) {
        wwtlib.Settings.$0 = new wwtlib.Settings();
    }
    return wwtlib.Settings.$0;
}
wwtlib.Settings.get_global = function() {
    if (wwtlib.Settings.$0 == null) {
        wwtlib.Settings.$0 = new wwtlib.Settings();
    }
    return wwtlib.Settings.$0;
}
wwtlib.Settings.get_active = function() {
    if (wwtlib.Settings.$0 == null) {
        wwtlib.Settings.$0 = new wwtlib.Settings();
    }
    if (wwtlib.Settings.tourSettings != null) {
        return wwtlib.Settings.tourSettings;
    }
    return wwtlib.Settings.$0;
}
wwtlib.Settings.prototype = {
    autoRepeatTour: false,
    $1: false,
    $2: 'blue',
    $3: 'yellow',
    $4: 'red',
    $5: true,
    $6: true,
    $7: true,
    $8: true,
    $9: 'white',
    $A: false,
    $B: 47.717,
    $D: 100,
    $E: false,
    $F: true,
    $10: 0,
    $11: 0,
    $12: 0,
    $13: false,
    $14: false,
    $15: true,
    $16: false,
    $17: true,
    $18: true,
    $19: true,
    $1A: true,
    $1B: true,
    $1C: true,
    $1D: true,
    $1E: true,
    $1F: true,
    $20: 1,
    get_constellationFigureColor: function() {
        return this.$4;
    },
    set_constellationFigureColor: function(value) {
        this.$4 = value;
        return value;
    },
    get_constellationBoundryColor: function() {
        return this.$2;
    },
    set_constellationBoundryColor: function(value) {
        this.$2 = value;
        return value;
    },
    get_constellationSelectionColor: function() {
        return this.$3;
    },
    set_constellationSelectionColor: function(value) {
        this.$3 = value;
        return value;
    },
    get_showCrosshairs: function() {
        return this.$8;
    },
    set_showCrosshairs: function(value) {
        this.$8 = value;
        return value;
    },
    get_crosshairsColor: function() {
        return this.$9;
    },
    set_crosshairsColor: function(value) {
        this.$9 = value;
        return value;
    },
    get_actualPlanetScale: function() {
        return this.$F;
    },
    get_fovCamera: function() {
        return this.$10;
    },
    get_fovEyepiece: function() {
        return this.$11;
    },
    get_fovTelescope: function() {
        return this.$12;
    },
    get_locationAltitude: function() {
        return this.$D;
    },
    set_locationAltitude: function(value) {
        this.$D = value;
        return value;
    },
    get_locationLat: function() {
        return this.$B;
    },
    set_locationLat: function(value) {
        this.$B = value;
        return value;
    },
    get_locationLng: function() {
        return this.$C;
    },
    set_locationLng: function(value) {
        this.$C = value;
        return value;
    },
    get_showClouds: function() {
        return this.$13;
    },
    get_showConstellationBoundries: function() {
        return this.$6;
    },
    set_showConstellationBoundries: function(value) {
        this.$6 = value;
        return value;
    },
    get_showConstellationFigures: function() {
        return this.$5;
    },
    set_showConstellationFigures: function(value) {
        this.$5 = value;
        return value;
    },
    get_showConstellationSelection: function() {
        return this.$7;
    },
    set_showConstellationSelection: function(value) {
        this.$7 = value;
        return value;
    },
    get_showEcliptic: function() {
        return this.$A;
    },
    set_showEcliptic: function(value) {
        this.$A = value;
        return value;
    },
    get_showElevationModel: function() {
        return false;
    },
    get_showFieldOfView: function() {
        return this.$E;
    },
    get_showGrid: function() {
        return this.$14;
    },
    get_showHorizon: function() {
        return this.$15;
    },
    get_showHorizonPanorama: function() {
        return this.$16;
    },
    get_showMoonsAsPointSource: function() {
        return this.$17;
    },
    get_showSolarSystem: function() {
        return this.$18;
    },
    get_localHorizonMode: function() {
        return this.$1;
    },
    get_solarSystemStars: function() {
        return this.$19;
    },
    get_solarSystemMilkyWay: function() {
        return this.$1A;
    },
    get_solarSystemCosmos: function() {
        return this.$1B;
    },
    get_solarSystemOrbits: function() {
        return this.$1C;
    },
    get_solarSystemOverlays: function() {
        return this.$1D;
    },
    get_solarSystemLighting: function() {
        return this.$1E;
    },
    get_solarSystemMultiRes: function() {
        return this.$1F;
    },
    get_solarSystemScale: function() {
        return this.$20;
    }
}
wwtlib.Tile = function() {
    this.$0 = new Array(4);
    this.children = [null, null, null, null];
    this.localCenter = new wwtlib.Vector3d();
    this.demSize = 33 * 33;
    this.$9 = new Array(4);
    for (var $0 = 0; $0 < 4; $0++) {
        this.$9[$0] = wwtlib.BlendState.create(false, 500);
    }
}
wwtlib.Tile.getFrustumList = function() {
    try {
        return wwtlib.Tile.frustumList;
    } catch($0) {
        return null;
    }
}
wwtlib.Tile.get_subDivisions = function() {
    return 32;
}
wwtlib.Tile.prototype = {
    level: 0,
    x: 0,
    y: 0,
    texture: null,
    readyToRender: false,
    inViewFrustum: true,
    topLeft: null,
    bottomRight: null,
    topRight: null,
    bottomLeft: null,
    isPointInTile: function(lat, lng) {
        return false;
    },
    parent: null,
    requestImage: function() {
        if (!this.downloading && !this.readyToRender) {
            this.downloading = true;
            this.texture = document.createElement('img');
            this.texture.src = this.get_URL();
            this.texture.addEventListener('load', ss.Delegate.create(this, function($p1_0) {
                this.downloading = false;
                this.readyToRender = true;
                this.requestPending = false;
                wwtlib.wwtlib$3.$8(this.get_key(), true);
            }), false);
            this.texture.addEventListener('error', ss.Delegate.create(this, function($p1_0) {
                this.downloading = false;
                this.readyToRender = false;
                this.errored = true;
                this.requestPending = false;
                wwtlib.wwtlib$3.$8(this.get_key(), true);
            }), false);
        }
    },
    draw3D: function(renderContext, opacity) {
        var $0 = renderContext.device;
        this.renderedGeneration = wwtlib.Tile.currentRenderGeneration;
        wwtlib.Tile.tilesTouched++;
        this.accessCount = wwtlib.wwtlib$3.$E++;
        if (this.errored) {
            return false;
        }
        var $1 = 2;
        this.inViewFrustum = true;
        if (!this.readyToRender) {
            wwtlib.wwtlib$3.$7(this);
            return false;
        }
        var $2 = false;
        var $3 = 0;
        var $4 = 0;
        if (this.dataset.get_mercator() || this.dataset.get_bottomsUp()) {
            $4 = 1;
        }
        var $5 = 0;
        var $6 = false;
        for (var $7 = 0; $7 < 2; $7++) {
            for (var $8 = 0; $8 < $1; $8++) {
                if (this.level - 1) {
                    if (!this.dataset.get_projection() && !String.isNullOrEmpty(this.dataset.get_quadTreeTileMap())) {
                        $0 = String.format(this.dataset.get_url(), this.getServerID(), this.getTileID());
                        if ($0.indexOf('virtualearth.net') > -1) {
                            $0 += '&n=z';
                        }
                        return $0;
                    } else {
                        return String.format(this.dataset.get_url(), this.dataset.get_imageSetID(), this.level, this.x, this.y);
                    }
                }
                $0 = $0.replaceAll('{X}', this.x.toString());
                $0 = $0.replaceAll('{Y}', this.y.toString());
                $0 = $0.replaceAll('{L}', this.level.toString());
                var $1 = 0;
                if ($0.indexOf('{S:0}') > -1) {
                    $1 = 0;
                    $0 = $0.replaceAll('{S:0}', '{S}');
                }
                if ($0.indexOf('{S:1}') > -1) {
                    $1 = 1;
                    $0 = $0.replaceAll('{S:1}', '{S}');
                }
                if ($0.indexOf('{S:2}') > -1) {
                    $1 = 2;
                    $0 = $0.replaceAll('{S:2}', '{S}');
                }
                if ($0.indexOf('{S:3}') > -1) {
                    $1 = 3;
                    $0 = $0.replaceAll('{S:3}', '{S}');
                }
                if ($0.indexOf('a{S}') > -1) {
                    $0 = $0.replaceAll('a{S}', 'r{S}');
                }
                if ($0.indexOf('h{S}') > -1) {
                    $0 = $0.replaceAll('h{S}', 'r{S}');
                }
                if ($0.indexOf('http://r{S}.ortho.tiles.virtualearth.net') > -1) {
                    $0 = $0.replaceAll('http://r{S}.ortho.tiles.virtualearth.net', 'http://ecn.t{S}.tiles.virtualearth.net');
                }
                var $2 = this.getTileID();
                var $3 = '';
                if (!$2.length) {
                    $3 = $1.toString();
                } else {
                    $3 = $2.substr($2.length - 1, 1);
                }
                $0 = $0.replaceAll('{Q}', $2);
                $0 = $0.replaceAll('{S}', $3);
                if ($0.indexOf('virtualearth.net') > -1) {
                    $0 += '&n=z';
                }
                return $0;
            },
            getServerID: function() {
                var $0 = (this.x & 1) + ((this.y & 1) << 1);
                return $0;
            },
            $7: null,
            getTileID: function() {
                if (this.$7 != null) {
                    return this.$7;
                }
                var $0 = this.level;
                var $1 = this.x;
                var $2 = this.y;
                if (this.dataset.get_projection() === 1) {
                    $0++;
                }
                var $3 = this.dataset.get_quadTreeTileMap();
                if (!String.isNullOrEmpty($3)) {
                    var $4 = new ss.StringBuilder();
                    for (var $5 = $0; $5 > 0;--$5) {
                        var $6 = 1 << ($5 - 1);
                        var $7 = 0;
                        if ( !! ($1 & $6)) {
                            $7 = 1;
                        }
                        if ( !! ($2 & $6)) {
                            $7 += 2;
                        }
                        $4.append($3.substr($7, 1));
                    }
                    this.$7 = $4.toString();
                    return this.$7;
                } else {
                    this.$7 = '0';
                    return this.$7;
                }
            },
            $8: 0,
            get_vertexCount: function() {
                return this.$8;
            },
            set_vertexCount: function(value) {
                this.$8 = value;
                return value;
            },
            $9: null
        }
        wwtlib.wwtlib$3 = function() {}
        wwtlib.wwtlib$3.$2 = function($p0, $p1, $p2, $p3, $p4) {
            var $0 = null;
            var $1 = wwtlib.Imageset.getTileKey($p3, $p0, $p1, $p2);
            if (!Object.keyExists(wwtlib.wwtlib$3.$1, $1)) {
                $0 = wwtlib.Imageset.getNewTile($p3, $p0, $p1, $p2, $p4);
                wwtlib.wwtlib$3.$1[$1] = $0;
            } else {
                $0 = wwtlib.wwtlib$3.$1[$1];
            }
            var $2 = 0;
            return $0;
        }
        wwtlib.wwtlib$3.$3 = function() {
            var $0 = [];
            var $1 = [];
            try {
                try {
                    var $enum1 = ss.IEnumerator.getEnumerator(Object.keys(wwtlib.wwtlib$3.$1));
                    while ($enum1.moveNext()) {
                        var $2 = $enum1.current;
                        var $3 = wwtlib.wwtlib$3.$1[$2];
                        if ($3.renderedGeneration < (wwtlib.Tile.currentRenderGeneration - 10) && !($3.requestPending || $3.downloading)) {
                            if ($3.readyToRender) {
                                $1.add($3);
                            } else {
                                $0.add($3);
                            }
                        }
                    }
                } catch($4) {}
                return $1.length;
            } catch($5) {
                return - 1;
            }
        }
        wwtlib.wwtlib$3.$6 = function($p0) {
            while (Object.getKeyCount(wwtlib.wwtlib$3.$0) > 0 && wwtlib.wwtlib$3.$5 > 0) {
                var $0 = 100000;
                var $1 = false;
                var $2 = null;
                var $3 = 1000;
                var $enum1 = ss.IEnumerator.getEnumerator(Object.keys(wwtlib.wwtlib$3.$0));
                while ($enum1.moveNext()) {
                    var $4 = $enum1.current;
                    var $5 = wwtlib.wwtlib$3.$0[$4];
                    if (!$5.requestPending && $5.inViewFrustum) {
                        var $6 = wwtlib.Vector3d.makeCopy($5.get_sphereCenter());
                        $6.$0($p0.get_world());
                        if ($p0.space) {
                            $6.subtract(wwtlib.Vector3d.create(0, 0, -1));
                        } else {
                            $6.subtract($p0.cameraPosition);
                        }
                        var $7 = Math.max(0, $6.length() - $5.get_sphereRadius());
                        var $8 = ($5.get_dataset().get_projection() === 2) || ($5.get_dataset().get_projection() === 5);
                        if ($7 < $0 && (!$1 || $8)) {
                            $0 = $7;
                            $2 = $5.get_key();
                            $3 = $5.level;
                            $1 = $8;
                        }
                    }
                }
                if ($2 != null) {
                    var $9 = wwtlib.wwtlib$3.$0[$2];
                    $9.requestPending = true;
                    wwtlib.wwtlib$3.$5--;
                    if (wwtlib.wwtlib$3.$5 < 0) {
                        wwtlib.wwtlib$3.$5 = 0;
                    }
                    $9.requestImage();
                } else {
                    return;
                }
            }
        }
        wwtlib.wwtlib$3.$7 = function($p0) {
            var $0;
            $0 = 256;
            if (!$p0.downloading && !$p0.readyToRender) {
                if (Object.keyExists(wwtlib.wwtlib$3.$0, $p0.get_key())) {
                    wwtlib.wwtlib$3.$0[$p0.get_key()].requestHits += $0;
                } else {
                    $p0.requestHits = $0;
                    wwtlib.wwtlib$3.$0[$p0.get_key()] = $p0;
                }
            }
            return true;
        }
        wwtlib.wwtlib$3.$8 = function($p0, $p1) {
            if ($p1) {
                var $0 = wwtlib.wwtlib$3.$0[$p0];
                $0.requestPending = false;
                delete wwtlib.wwtlib$3.$0[$0.get_key()];
                wwtlib.wwtlib$3.$5++;
            }
            delete wwtlib.wwtlib$3.$0[$p0];
        }
        wwtlib.wwtlib$3.$9 = function() {
            Object.clearKeys(wwtlib.wwtlib$3.$1);
        }
        wwtlib.wwtlib$3.$A = function() {
            Object.clearKeys(wwtlib.wwtlib$3.$0);
        }
        wwtlib.wwtlib$3.$10 = function() {
            if (Object.getKeyCount(wwtlib.wwtlib$3.$1)
                wwtlib.wwtlib$3.$D) {
                $1.sort(function($p1_0, $p1_1) {
                    return ($p1_1.accessCount < $p1_0.accessCount) ? 1: (($p1_1.accessCount === $p1_0.accessCount) ? 0: -1);
                });
                var $6 = $1.length - wwtlib.wwtlib$3.$D;
                var $enum3 = ss.IEnumerator.getEnumerator($1);
                while ($enum3.moveNext()) {
                    var $7 = $enum3.current;
                    if ($6 < 1) {
                        break;
                    }
                    $7.cleanUp(false);
                    $6--;
                }
            }
            if (Object.getKeyCount(wwtlib.wwtlib$3.$1)
                wwtlib.wwtlib$3.$C) {
                $0.sort(function($p1_0, $p1_1) {
                    return ($p1_1.accessCount < $p1_0.accessCount) ? 1: (($p1_1.accessCount === $p1_0.accessCount) ? 0: -1);
                });
                var $8 = $0.length - wwtlib.wwtlib$3.$C;
                if ($8 > 20) {
                    $8 = 20;
                }
                var $enum4 = ss.IEnumerator.getEnumerator($0);
                while ($enum4.moveNext()) {
                    var $9 = $enum4.current;
                    if ($8 < 1) {
                        break;
                    }
                    $9.cleanUp(true);
                    delete wwtlib.wwtlib$3.$1[$9.get_key()];
                    $8--;
                }
            }
        } catch($A) {} finally {}
        return;
    }
    wwtlib.wwtlib$3.$11 = function() {
        var $0 = [];
        var $enum1 = ss.IEnumerator.getEnumerator(Object.keys(wwtlib.wwtlib$3.$0));
        while ($enum1.moveNext()) {
            var $1 = $enum1.current;
            var $2 = wwtlib.wwtlib$3.$0[$1];
            if (!$2.requestPending) {
                $2.requestHits = $2.requestHits / 2;
                try {
                    if ($2.requestHits < 2) {
                        $0.add($2);
                    } else if (!$2.inViewFrustum) {
                        $0.add($2);
                    }
                } catch($3) {}
            }
        }
        var $enum3 = ss.IEnumerator.getEnumerator($0);
        while ($enum3.moveNext()) {
            var $4 = $enum3.current;
            delete wwtlib.wwtlib$3.$0[$4.get_key()];
        }
    }
    wwtlib.ToastTile = function() {
        wwtlib.ToastTile.initializeBase(this);
    }
    wwtlib.ToastTile.create = function(level, x, y, dataset, parent) {
        var $0 = new wwtlib.ToastTile();
        $0.parent = parent;
        $0.level = level;
        $0.x = x;
        $0.y = y;
        $0.dataset = dataset;
        $0.$A = !dataset.get_bottomsUp();
        $0.computeBoundingSphere();
        return $0;
    }
    wwtlib.ToastTile.prototype = {
        $A: true,
        bounds: null,
        backslash: false,
        $B: null,
        $C: null,
        demArray: null,
        computeBoundingSphere: function() {
            this.$E();
            this.topLeft = this.bounds[0 + 3 * 0].position;
            this.bottomRight = this.bounds[2 + 3 * 2].position;
            this.topRight = this.bounds[2 + 3 * 0].position;
            this.bottomLeft = this.bounds[0 + 3 * 2].position;
            this.calcSphere();
        },
        calculateFullSphere: function(list) {
            var $0 = wwtlib.ConvexHull.findEnclosingSphere(list);
            this.sphereCenter = $0.center;
            this.sphereRadius = $0.radius;
        },
        isPointInTile: function(lat, lng) {
            if (!this.level) {
                return true;
            }
            if (this.level === 1) {
                if ((lng >= 0 && lng <= 90) && (!this.x && this.y === 1)) {
                    return true;
                }
                if ((lng > 90 && lng <= 180) && (this.x === 1 && this.y === 1)) {
                    return true;
                }
                if ((lng < 0 && lng >= -90) && (!this.x && !this.y)) {
                    return true;
                }
                if ((lng < -90 && lng >= -180) && (this.x === 1 && !this.y)) {
                    return true;
                }
            }
            var $0 = wwtlib.Coordinates.geoTo3dDouble(lat, lng);
            var $1 = this.$D(this.topLeft, this.topRight, $0);
            var $2 = this.$D(this.topRight, this.bottomRight, $0);
            var $3 = this.$D(this.bottomRight, this.bottomLeft, $0);
            var $4 = this.$D(this.bottomLeft, this.topLeft, $0);
            if ($1 && $2 && $3 && $4) {
                return true;
            }
            return false;
        },
        $D: function($p0, $p1, $p2) {
            $p0.normalize();
            $p1.normalize();
            var $0 = wwtlib.Vector3d.cross($p0, $p1);
            var $1 = wwtlib.Vector3d.dot($0, $p2);
            return $1 > 0;
        },
        $E: function() {
            this.$B = [];
            this.$C = new Array(4);
            this.$C[0] = [];
            this.$C[1] = [];
            this.$C[2] = [];
            this.$C[3] = [];
            this.bounds = new Array(9);
            if (this.level > 0) {
                if (this.parent == null) {
                    this.parent = wwtlib.wwtlib$3.$2(this.level - 1, this.x / 2, this.y / 2, this.dataset, null);
                }
                var $0 = this.parent;
                var $1 = this.x % 2;
                var $2 = this.y % 2;
                if (this.level > 1) {
                    this.backslash = $0.backslash;
                } else {
                    this.backslash = ($1 === 1^$2 === 1) === 1;
                }
                this.bounds[0 + 3 * 0] = $0.bounds[$1 + 3 * $2].copy();
                this.bounds[1 + 3 * 0] = this.$F($0.bounds[$1 + 3 * $2], $0.bounds[$1 + 1 + 3 * $2]);
                this.bounds[2 + 3 * 0] = $0.bounds[$1 + 1 + 3 * $2].copy();
                this.bounds[0 + 3 * 1] = this.$F($0.bounds[$1 + 3 * $2], $0.bounds[$1 + 3 * ($2 + 1)]);
                if (this.backslash) {
                    this.bounds[1 + 3 * 1] = this.$F($0.bounds[$1 + 3 * $2], $0.bounds[$1 + 1 + 3 * ($2 + 1)]);
                } else {
                    this.bounds[1 + 3 * 1] = this.$F($0.bounds[$1 + 1 + 3 * $2], $0.bounds[$1 + 3 * ($2 + 1)]);
                }
                this.bounds[2 + 3 * 1] = this.$F($0.bounds[$1 + 1 + 3 * $2], $0.bounds[$1 + 1 + 3 * ($2 + 1)]);
                this.bounds[0 + 3 * 2] = $0.bounds[$1 + 3 * ($2 + 1)].copy();
                this.bounds[1 + 3 * 2] = this.$F($0.bounds[$1 + 3 * ($2 + 1)], $0.bounds[$1 + 1 + 3 * ($2 + 1)]);
                this.bounds[2 + 3 * 2] = $0.bounds[$1 + 1 + 3 * ($2 + 1)].copy();
                this.bounds[0 + 3 * 0].tu = 0 * 256;
                this.bounds[0 + 3 * 0].tv = 0 * 256;
                this.bounds[1 + 3 * 0].tu = 0.5 * 256;
                this.bounds[1 + 3 * 0].tv = 0 * 256;
                this.bounds[2 + 3 * 0].tu = 1 * 256;
                this.bounds[2 + 3 * 0].tv = 0 * 256;
                this.bounds[0 + 3 * 1].tu = 0 * 256;
                this.bounds[0 + 3 * 1].tv = 0.5 * 256;
                this.bounds[1 + 3 * 1].tu = 0.5 * 256;
                this.bounds[1 + 3 * 1].tv = 0.5 * 256;
                this.bounds[2 + 3 * 1].tu = 1 * 256;
                this.bounds[2 + 3 * 1].tv = 0.5 * 256;
                this.bounds[0 + 3 * 2].tu = 0 * 256;
                this.bounds[0 + 3 * 2].tv = 1 * 256;
                this.bounds[1 + 3 * 2].tu = 0.5 * 256;
                this.bounds[1 + 3 * 2].tv = 1 * 256;
                this.bounds[2 + 3 * 2].tu = 1 * 256;
                this.bounds[2 + 3 * 2].tv = 1 * 256;
                this.$B.add(this.bounds[0 + 3 * 0]);
                this.$B.add(this.bounds[1 + 3 * 0]);
                this.$B.add(this.bounds[2 + 3 * 0]);
                this.$B.add(this.bounds[0 + 3 * 1]);
                this.$B.add(this.bounds[1 + 3 * 1]);
                this.$B.add(this.bounds[2 + 3 * 1]);
                this.$B.add(this.bounds[0 + 3 * 2]);
                this.$B.add(this.bounds[1 + 3 * 2]);
                this.$B.add(this.bounds[2 + 3 * 2]);
                if (this.backslash) {
                    this.$C[0].add(wwtlib.wwtlib$4.$0(4, 1, 0));
                    this.$C[0].add(wwtlib.wwtlib$4.$0(3, 4, 0));
                    this.$C[1].add(wwtlib.wwtlib$4.$0(5, 2, 1));
                    this.$C[1].add(wwtlib.wwtlib$4.$0(4, 5, 1));
                    this.$C[2].add(wwtlib.wwtlib$4.$0(7, 4, 3));
                    this.$C[2].add(wwtlib.wwtlib$4.$0(6, 7, 3));
                    this.$C[3].add(wwtlib.wwtlib$4.$0(8, 5, 4));
                    this.$C[3].add(wwtlib.wwtlib$4.$0(7, 8, 4));
                } else {
                    this.$C[0].add(wwtlib.wwtlib$4.$0(3, 1, 0));
                    this.$C[0].add(wwtlib.wwtlib$4.$0(4, 1, 3));
                    this.$C[1].add(wwtlib.wwtlib$4.$0(4, 2, 1));
                    this.$C[1].add(wwtlib.wwtlib$4.$0(5, 2, 4));
                    this.$C[2].add(wwtlib.wwtlib$4.$0(6, 4, 3));
                    this.$C[2].add(wwtlib.wwtlib$4.$0(7, 4, 6));
                    this.$C[3].add(wwtlib.wwtlib$4.$0(7, 5, 4));
                    this.$C[3].add(wwtlib.wwtlib$4.$0(8, 5, 7));
                }
            } else {
                this.bounds[0 + 3 * 0] = wwtlib.PositionTexture.create(0, -1, 0, 0, 0);
                this.bounds[1 + 3 * 0] = wwtlib.PositionTexture.create(0, 0, 1, 0.5, 0);
                this.bounds[2 + 3 * 0] = wwtlib.PositionTexture.create(0, -1, 0, 1, 0);
                this.bounds[0 + 3 * 1] = wwtlib.PositionTexture.create( - 1, 0, 0, 0, 0.5);
                this.bounds[1 + 3 * 1] = wwtlib.PositionTexture.create(0, 1, 0, 0.5, 0.5);
                this.bounds[2 + 3 * 1] = wwtlib.PositionTexture.create(1, 0, 0, 1, 0.5);
                this.bounds[0 + 3 * 2] = wwtlib.PositionTexture.create(0, -1, 0, 0, 1);
                this.bounds[1 + 3 * 2] = wwtlib.PositionTexture.create(0, 0, -1, 0.5, 1);
                this.bounds[2 + 3 * 2] = wwtlib.PositionTexture.create(0, -1, 0, 1, 1);
                this.$B.add(this.bounds[0 + 3 * 0]);
                this.$B.add(this.bounds[1 + 3 * 0]);
                this.$B.add(this.bounds[2 + 3 * 0]);
                this.$B.add(this.bounds[0 + 3 * 1]);
                this.$B.add(this.bounds[1 + 3 * 1]);
                this.$B.add(this.bounds[2 + 3 * 1]);
                this.$B.add(this.bounds[0 + 3 * 2]);
                this.$B.add(this.bounds[1 + 3 * 2]);
                this.$B.add(this.bounds[2 + 3 * 2]);
                this.$C[0].add(wwtlib.wwtlib$4.$0(3, 1, 0));
                this.$C[0].add(wwtlib.wwtlib$4.$0(4, 1, 3));
                this.$C[1].add(wwtlib.wwtlib$4.$0(5, 2, 1));
                this.$C[1].add(wwtlib.wwtlib$4.$0(4, 5, 1));
                this.$C[2].add(wwtlib.wwtlib$4.$0(7, 4, 3));
                this.$C[2].add(wwtlib.wwtlib$4.$0(6, 7, 3));
                this.$C[3].add(wwtlib.wwtlib$4.$0(7, 5, 4));
                this.$C[3].add(wwtlib.wwtlib$4.$0(8, 5, 7));
            }
        },
        $F: function($p0, $p1) {
            var $0 = wwtlib.Vector3d.lerp($p0.position, $p1.position, 0.5);
            var $1 = wwtlib.Vector2d.lerp(wwtlib.Vector2d.create($p0.tu, $p0.tv), wwtlib.Vector2d.create($p1.tu, $p1.tv), 0.5);
            $0.normalize();
            return wwtlib.PositionTexture.createPos($0, $1.x, $1.y);
        },
        $10: 4,
        $11: false,
        createGeometry: function(renderContext) {
            wwtlib.ToastTile.callBaseMethod(this, 'createGeometry', [renderContext]);
            if (!this.$11) {
                if (!this.dataset.get_dataSetType() || this.dataset.get_dataSetType() === 1) {
                    this.$10 = Math.max(0, 4 - this.level);
                } else {
                    this.$10 = Math.max(0, 4 - this.level);
                }
                if (this.$B == null) {
                    this.$E();
                }
                for (var $0 = 0; $0 < 4; $0++) {
                    var $1 = this.$10;
                    while ($1-->1) {
                        var $2 = [];
                        var $enum1 = ss.IEnumerator.getEnumerator(this.$C[$0]);
                        while ($enum1.moveNext()) {
                            var $3 = $enum1.current;
                            $3.$1($2, this.$B);
                        }
                        this.$C[$0] = $2;
                    }
                }
                for (var $4 = 0; $4 < 4; $4++) {
                    this.$0[$4] = [];
                    var $enum2 = ss.IEnumerator.getEnumerator(this.$C[$4]);
                    while ($enum2.moveNext()) {
                        var $5 = $enum2.current;
                        var $6 = this.$B[$5.c];
                        var $7 = this.$B[$5.b];
                        var $8 = this.$B[$5.a];
                        this.$0[$4].add(wwtlib.RenderTriangle.create($6, $7, $8, this.texture, this.level));
                    }
                }
                this.$11 = true;
            }
            return true;
        },
        isTileBigEnough: function(renderContext) {
            var $0 = 0;
            if (!this.dataset.get_dataSetType()) {
                $0 = (1600 / Math.pow(2, this.level));
            } else {
                $0 = (3600 / Math.pow(2, this.level));
            }
            return (renderContext.get_fovScale() < $0);
        },
        cleanUp: function(removeFromParent) {
            wwtlib.ToastTile.callBaseMethod(this, 'cleanUp', [removeFromParent]);
            if (this.$B != null) {
                this.$B = null;
            }
            if (this.$C != null) {
                this.$C = null;
            }
            this.$11 = false;
        }
    }
    wwtlib.wwtlib$4 = function() {
        this.a = -1;
        this.b = -1;
        this.c = -1;
    }
    wwtlib.wwtlib$4.$0 = function($p0, $p1, $p2) {
        var $0 = new wwtlib.wwtlib$4();
        $0.a = $p0;
        $0.b = $p1;
        $0.c = $p2;
        return $0;
    }
    wwtlib.wwtlib$4.prototype = {
        a: 0,
        b: 0,
        c: 0,
        $1: function($p0, $p1) {
            var $0 = wwtlib.Vector3d.lerp($p1[this.b].position, $p1[this.c].position, 0.5);
            var $1 = wwtlib.Vector3d.lerp($p1[this.c].position, $p1[this.a].position, 0.5);
            var $2 = wwtlib.Vector3d.lerp($p1[this.a].position, $p1[this.b].position, 0.5);
            var $3 = wwtlib.Vector2d.lerp(wwtlib.Vector2d.create($p1[this.b].tu, $p1[this.b].tv), wwtlib.Vector2d.create($p1[this.c].tu, $p1[this.c].tv), 0.5);
            var $4 = wwtlib.Vector2d.lerp(wwtlib.Vector2d.create($p1[this.c].tu, $p1[this.c].tv), wwtlib.Vector2d.create($p1[this.a].tu, $p1[this.a].tv), 0.5);
            var $5 = wwtlib.Vector2d.lerp(wwtlib.Vector2d.create($p1[this.a].tu, $p1[this.a].tv), wwtlib.Vector2d.create($p1[this.b].tu, $p1[this.b].tv), 0.5);
            $0.normalize();
            $1.normalize();
            $2.normalize();
            var $6 = $p1.length;
            var $7 = $p1.length + 1;
            var $8 = $p1.length + 2;
            $p1.add(wwtlib.PositionTexture.createPos($0, $3.x / 256, $3.y / 256));
            $p1.add(wwtlib.PositionTexture.createPos($1, $4.x / 256, $4.y / 256));
            $p1.add(wwtlib.PositionTexture.createPos($2, $5.x / 256, $5.y / 256));
            $p0.add(wwtlib.wwtlib$4.$0(this.a, $8, $7));
            $p0.add(wwtlib.wwtlib$4.$0(this.b, $6, $8));
            $p0.add(wwtlib.wwtlib$4.$0(this.c, $7, $6));
            $p0.add(wwtlib.wwtlib$4.$0($6, $7, $8));
        }
    }
    wwtlib._Util = function() {}
    wwtlib._Util.$0 = function($p0) {
        var $0 = 0;
        if (!$p0.length) {
            return $0;
        }
        for (var $1 = 0; $1 < $p0.length; $1++) {
            var $2 = $p0.charCodeAt($1);
            $0 = (($0 << 5) - $0) + $2;
        }
        return $0;
    }
    wwtlib._Util.$1 = function($p0, $p1) {
        return Math.log($p0) / Math.log($p1);
    }
    wwtlib._Util.$2 = function($p0) {
        return '';
    }
    wwtlib._Util.$3 = function($p0) {
        if ($p0.toLowerCase().startsWith('http')) {
            return 'http://www.worldwidetelescope.org/webserviceproxy.aspx?targeturl=' + encodeURIComponent($p0);
        }
        return $p0;
    }
    wwtlib._Util.$4 = function($p0) {
        var $0 = 0;
        var $1 = $p0.split(':');
        if ($1.length === 3) {
            $0 += parseInt($1[0]) * 36000000;
            $0 += parseInt($1[1]) * 600000;
            $0 += parseInt((parseFloat($1[2]) * 1000));
        }
        return $0;
    }
    wwtlib._Util.$5 = function($p0, $p1) {
        return 'http://www.worldwidetelescope.org/GetTourFile.aspx?targeturl=' + encodeURIComponent($p0) + '&filename=' + $p1;
    }
    wwtlib._Util.$6 = function($p0, $p1) {
        var $0 = null;
        try {
            $0 = $p0.selectSingleNode($p1);
        } catch($1) {
            var $enum2 = ss.IEnumerator.getEnumerator($p0.childNodes);
            while ($enum2.moveNext()) {
                var $2 = $enum2.current;
                if ($2.nodeName === $p1) {
                    $0 = $2;
                    break;
                }
            }
        }
        return $0;
    }
    wwtlib._Util.$7 = function($p0) {
        if (String.isNullOrEmpty($p0.text)) {
            var $0 = $p0;
            return $0.textContent;
        } else {
            return $p0.text;
        }
    }
    wwtlib._Util.$8 = function($p0, $p1, $p2) {
        var $0 = [];
        var $1 = $p1.split(' ');
        var $2 = '';
        for (var $3 = 0; $3 < $1.length; $3++) {
            if (!String.isNullOrEmpty($1[$3])) {
                if (!$2 || $p0.measureText($2 + ' ' + $1[$3]).width < $p2) {
                    $2 += ' ' + $1[$3];
                } else {
                    $0.add($2);
                    $2 = $1[$3];
                }
            }
        }
        if ( !! $2) {
            $0.add($2);
        }
        return $0;
    }
    wwtlib._Util.$9 = function($p0) {
        $p0 = Math.max(0, Math.min($p0, 255));
        return '0123456789ABCDEF'.substr(($p0 - $p0 % 16) / 16, 1) + '0123456789ABCDEF'.substr($p0 % 16, 1);
    }
    wwtlib._Util.$A = function($p0, $p1) {}
    wwtlib.Rectangle = function() {}
    wwtlib.Rectangle.create = function(x, y, width, height) {
        var $0 = new wwtlib.Rectangle();
        $0.x = x;
        $0.y = y;
        $0.width = width;
        $0.height = height;
        return $0;
    }
    wwtlib.Rectangle.prototype = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        copy: function() {
            var $0 = new wwtlib.Rectangle();
            $0.x = this.x;
            $0.y = this.y;
            $0.width = this.width;
            $0.height = this.height;
            return $0;
        }
    }
    wwtlib.Guid = function() {
        this.$1 = wwtlib.Guid.$0++;
    }
    wwtlib.Guid.newGuid = function() {
        return new wwtlib.Guid();
    }
    wwtlib.Guid.prototype = {
        toString: function() {
            return this.$1.toString();
        }
    }
    wwtlib.Mouse = function() {}
    wwtlib.Mouse.offsetX = function(canvas, e) {
        var $0 = 0;
        var $1 = canvas;
        var $2 = e;
        if ($1.offsetParent != null) {
            do {
                $0 += $1.offsetLeft;
            }
            while (($1 = $1.offsetParent) != null);
        }
        return $2.pageX - $0;
    }
    wwtlib.Mouse.offsetY = function(canvas, e) {
        var $0 = 0;
        var $1 = canvas;
        var $2 = e;
        if ($1.offsetParent != null) {
            do {
                $0 += $1.offsetTop;
            }
            while (($1 = $1.offsetParent) != null);
        }
        return $2.pageY - $0;
    }
    wwtlib.Coordinates = function(ascention, declination) {
        this.$1 = ascention + (Math.PI * 80) % (Math.PI * 2);
        this.$2 = declination;
    }
    wwtlib.Coordinates.geoTo3d = function(lat, lng) {
        return wwtlib.Vector3d.create((Math.cos(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * 1), (Math.sin(lat * wwtlib.Coordinates.RC) * 1), (Math.sin(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * 1));
    }
    wwtlib.Coordinates.geoTo3dDouble = function(lat, lng) {
        return wwtlib.Vector3d.create(Math.cos(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * 1, Math.sin(lat * wwtlib.Coordinates.RC) * 1, Math.sin(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * 1);
    }
    wwtlib.Coordinates.geoTo3dDoubleRad = function(lat, lng, radius) {
        return wwtlib.Vector3d.create(Math.cos(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * radius, Math.sin(lat * wwtlib.Coordinates.RC) * radius, Math.sin(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * radius);
    }
    wwtlib.Coordinates.geoTo3dRad = function(lat, lng, radius) {
        return wwtlib.Vector3d.create((Math.cos(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * radius), (Math.sin(lat * wwtlib.Coordinates.RC) * radius), (Math.sin(lng * wwtlib.Coordinates.RC) * Math.cos(lat * wwtlib.Coordinates.RC) * radius));
    }
    wwtlib.Coordinates.raDecTo3d = function(ra, dec) {
        return wwtlib.Vector3d.create((Math.cos(ra * wwtlib.Coordinates.RCRA) * Math.cos(dec * wwtlib.Coordinates.RC) * 1), (Math.sin(dec * wwtlib.Coordinates.RC) * 1), (Math.sin(ra * wwtlib.Coordinates.RCRA) * Math.cos(dec * wwtlib.Coordinates.RC) * 1));
    }
    wwtlib.Coordinates.raDecTo3dAu = function(ra, dec, au) {
        return wwtlib.Vector3d.create((Math.cos(ra * wwtlib.Coordinates.RCRA) * Math.cos(dec * wwtlib.Coordinates.RC) * au), (Math.sin(dec * wwtlib.Coordinates.RC) * au), (Math.sin(ra * wwtlib.Coordinates.RCRA) * Math.cos(dec * wwtlib.Coordinates.RC) * au));
    }
    wwtlib.Coordinates.raDecTo3dMat = function(ra, dec, mat) {
        return wwtlib.Vector3d.$1(wwtlib.Vector3d.create((Math.cos(ra * wwtlib.Coordinates.RCRA) * Math.cos(dec * wwtlib.Coordinates.RC) * 1), (Math.sin(dec * wwtlib.Coordinates.RC) * 1), (Math.sin(ra * wwtlib.Coordinates.RCRA) * Math.cos(dec * wwtlib.Coordinates.RC) * 1)), mat);
    }
    wwtlib.Coordinates.raDecTo3dPointRad = function(point, radius) {
        point.set_dec( - point.get_dec());
        return wwtlib.Vector3d.create((Math.cos(point.get_RA() * wwtlib.Coordinates.RCRA) * Math.cos(point.get_dec() * wwtlib.Coordinates.RC) * radius), (Math.sin(point.get_dec() * wwtlib.Coordinates.RC) * radius), (Math.sin(point.get_RA() * wwtlib.Coordinates.RCRA) * Math.cos(point.get_dec() * wwtlib.Coordinates.RC) * radius));
    }
    wwtlib.Coordinates.sterographicTo3d = function(x, y, radius, standardLat, meridean, falseEasting, falseNorthing, scale, north) {
        var $0 = 90;
        var $1 = 0;
        x -= falseEasting;
        y -= falseNorthing;
        if ( !! x || !!y) {
            var $2 = (1 + Math.sin(Math.abs(standardLat) / 180 * Math.PI)) * 6371000 / scale;
            var $3 = $2 * $2;
            var $4 = 180 / Math.PI;
            if (!x) {
                $1 = (90 * y < 0) ? -1: 1;
            } else {
                $1 = Math.atan2(y, x) * $4;
            }
            var $5 = (x * x) + (y * y);
            $0 = ($3 - $5) / ($3 + $5);
            $0 = Math.asin($0) * $4;
            if (!north) {
                $0 = -$0;
                $1 = -$1;
                meridean = -meridean;
            }
        }
        return wwtlib.Coordinates.geoTo3dDoubleRad($0, 90 + $1 + meridean, radius);
    }
    wwtlib.Coordinates.cartesianToSpherical = function(vector) {
        var $0;
        var $1;
        var $2 = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
        var $3 = Math.sqrt(vector.x * vector.x + vector.z * vector.z);
        $1 = Math.asin(vector.y / $2);
        if (0vector.x) {
            $0 = Math.PI - Math.asin(vector.z / $3);
        } else {
            $0 = 0;
        }
        return new wwtlib.Coordinates($0, $1);
    }
    wwtlib.Coordinates.cartesianToSpherical2 = function(vector) {
        var $0 = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
        var $1 = Math.atan2(vector.z, vector.x);
        var $2 = Math.asin(vector.y / $0);
        return new wwtlib.Coordinates($1, $2);
    }
    wwtlib.Coordinates.cartesianToSphericalSky = function(vector) {
        var $0 = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
        var $1 = Math.atan2(vector.z, vector.x);
        var $2 = Math.asin(vector.y / $0);
        return wwtlib.Vector2d.create($1 / Math.PI * 12, $2 / Math.PI * 180);
    }
    wwtlib.Coordinates.cartesianToSpherical3 = function(vector) {
        var $0 = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
        var $1 = Math.atan2(vector.z, vector.x);
        var $2 = Math.asin(vector.y / $0);
        return new wwtlib.Coordinates($1, $2);
    }
    wwtlib.Coordinates.sign = function(target) {
        return (target < 0) ? -1: 1;
    }
    wwtlib.Coordinates.formatDMSSign = function(angle, sign) {
        try {
            angle += (wwtlib.Coordinates.sign(angle) * 0.0001388888888889);
            var $0 = parseInt(angle);
            var $1 = ((angle - parseInt(angle)) * 60);
            var $2 = (($1 - parseInt($1)) * 60);
            if (sign) {
                var $3 = (angle > 0) ? '+': '-';
                return String.format('{3}{0:00;00}:{1:00}:{2:00}', $0, Math.abs(parseInt($1)), Math.abs(parseInt($2)), $3);
            } else {
                return String.format('{0:00}:{1:00}:{2:00}', $0, Math.abs(parseInt($1)), Math.abs(parseInt($2)));
            }
        } catch($4) {
            return '';
        }
    }
    wwtlib.Coordinates.formatDMS = function(angle) {
        try {
            angle += (((angle < 0) ? -1: 1) * 0.0001388888888889);
            var $0 = Math.abs(parseInt(angle));
            var $1 = ((angle - parseInt(angle)) * 60);
            var $2 = (($1 - parseInt($1)) * 60);
            var $3 = (angle < 0) ? '-': '';
            return String.format('{3}{0:00}:{1:00}:{2:00}', Math.abs($0), Math.abs(parseInt($1)), Math.abs(parseInt($2)), $3);
        } catch($4) {
            return '';
        }
    }
    wwtlib.Coordinates.formatDMSWide = function(angle) {
        try {
            angle += (wwtlib.Coordinates.sign(angle) * 0.0001388888888889);
            var $0 = Math.abs(parseInt(angle));
            var $1 = ((angle - parseInt(angle)) * 60);
            var $2 = (($1 - parseInt($1)) * 60);
            var $3 = (angle < 0) ? '-': '';
            return String.format('{3}{0:00} : {1:00} : {2:00}', $0, Math.abs(parseInt($1)), Math.abs(parseInt($2)), $3);
        } catch($4) {
            return '';
        }
    }
    wwtlib.Coordinates.formatHMS = function(angle) {
        try {
            angle += (wwtlib.Coordinates.sign(angle) * 0.0001388888888889);
            var $0 = parseInt(angle);
            var $1 = ((angle - parseInt(angle)) * 60);
            var $2 = (($1 - parseInt($1)) * 60);
            return String.format('{0:00}h{1:00}m{2:00}s', $0, Math.abs(parseInt($1)), Math.abs(parseInt($2)));
        } catch($3) {
            return '';
        }
    }
    wwtlib.Coordinates.fromRaDec = function(ra, dec) {
        return new wwtlib.Coordinates((ra - 12) * 15 * wwtlib.Coordinates.RC, dec * wwtlib.Coordinates.RC);
    }
    wwtlib.Coordinates.fromLatLng = function(lat, lng) {
        return new wwtlib.Coordinates(lng * wwtlib.Coordinates.RC, lat * wwtlib.Coordinates.RC);
    }
    wwtlib.Coordinates.dmsToDegrees = function(Degrees, Minutes, Seconds) {
        return Degrees + Minutes / 60 + Seconds / 3600;
    }
    wwtlib.Coordinates.degreesToRadians = function(Degrees) {
        return Degrees * 0.0174532925199433;
    }
    wwtlib.Coordinates.radiansToDegrees = function(Radians) {
        return Radians * 57.2957795130823;
    }
    wwtlib.Coordinates.radiansToHours = function(Radians) {
        return Radians * 3.81971863420549;
    }
    wwtlib.Coordinates.hoursToRadians = function(Hours) {
        return Hours * 0.261799387799149;
    }
    wwtlib.Coordinates.hoursToDegrees = function(Hours) {
        return Hours * 15;
    }
    wwtlib.Coordinates.degreesToHours = function(Degrees) {
        return Degrees / 15;
    }
    wwtlib.Coordinates.PI = function() {
        return 3.14159265358979;
    }
    wwtlib.Coordinates.mapTo0To360Range = function(Degrees) {
        var $0 = Degrees;
        while ($0 < 0) {
            $0 += 360;
        }
        while ($0 > 360) {
            $0 -= 360;
        }
        return $0;
    }
    wwtlib.Coordinates.mapTo0To24Range = function(HourAngle) {
        var $0 = HourAngle;
        while ($0 < 0) {
            $0 += 24;
        }
        while ($0 > 24) {
            $0 -= 24;
        }
        return $0;
    }
    wwtlib.Coordinates.meanObliquityOfEcliptic = function(JD) {
        var $0 = (JD - 2451545) / 3652500;
        var $1 = $0 * $0;
        var $2 = $1 * $0;
        var $3 = $2 * $0;
        var $4 = $3 * $0;
        var $5 = $4 * $0;
        var $6 = $5 * $0;
        var $7 = $6 * $0;
        var $8 = $7 * $0;
        var $9 = $8 * $0;
        return wwtlib.Coordinates.dmsToDegrees(23, 26, 21.448) - wwtlib.Coordinates.dmsToDegrees(0, 0, 4680.93) * $0 - wwtlib.Coordinates.dmsToDegrees(0, 0, 1.55) * $1 + wwtlib.Coordinates.dmsToDegrees(0, 0, 1999.25) * $2 - wwtlib.Coordinates.dmsToDegrees(0, 0, 51.38) * $3 - wwtlib.Coordinates.dmsToDegrees(0, 0, 249.67) * $4 - wwtlib.Coordinates.dmsToDegrees(0, 0, 39.05) * $5 + wwtlib.Coordinates.dmsToDegrees(0, 0, 7.12) * $6 + wwtlib.Coordinates.dmsToDegrees(0, 0, 27.87) * $7 + wwtlib.Coordinates.dmsToDegrees(0, 0, 5.79) * $8 + wwtlib.Coordinates.dmsToDegrees(0, 0, 2.45) * $9;
    }
    wwtlib.Coordinates.prototype = {
        distance: function(pointB) {
            var $0 = this.get_lat();
            var $1 = this.get_lng() * Math.cos($0 * wwtlib.Coordinates.RC);
            var $2 = pointB.get_lat();
            var $3 = pointB.get_lng() * Math.cos($2 * wwtlib.Coordinates.RC);
            return Math.sqrt(($0 - $2) * ($0 - $2) + ($1 - $3) * ($1 - $3));
        },
        distance3d: function(pointB) {
            var $0 = wwtlib.Coordinates.geoTo3dDouble(pointB.get_lat(), pointB.get_lng());
            var $1 = wwtlib.Coordinates.geoTo3dDouble(this.get_lat(), this.get_lng());
            var $2 = wwtlib.Vector3d.subtractVectors($0, $1);
            return $2.length() / wwtlib.Coordinates.RC;
        },
        angle: function(pointB) {
            var $0 = this.get_lat();
            var $1 = this.get_lng() * Math.cos($0 * wwtlib.Coordinates.RC);
            var $2 = pointB.get_lat();
            var $3 = pointB.get_lng() * Math.cos($2 * wwtlib.Coordinates.RC);
            return Math.atan2(($2 - $0), ($3 - $1));
        },
        get_RA: function() {
            return (((this.$1 / Math.PI) * 12) + 12) % 24;
        },
        set_RA: function(value) {
            this.$1 = (value / 12) * Math.PI;
            return value;
        },
        get_dec: function() {
            return this.$2 / wwtlib.Coordinates.RC;
        },
        set_dec: function(value) {
            this.$2 = value * wwtlib.Coordinates.RC;
            return value;
        },
        get_lat: function() {
            return this.$2 / wwtlib.Coordinates.RC;
        },
        set_lat: function(value) {
            this.$2 = value * wwtlib.Coordinates.RC;
            return value;
        },
        get_lng: function() {
            var $0 = this.$1 / wwtlib.Coordinates.RC;
            if ($0 <= 180) {
                return $0;
            } else {
                return ( - 180 + (180 - $0));
            }
        },
        set_lng: function(value) {
            this.$1 = ((value * wwtlib.Coordinates.RC) + (Math.PI * 2) % (Math.PI * 2));
            return value;
        },
        get_alt: function() {
            return this.$2 / wwtlib.Coordinates.RC;
        },
        set_alt: function(value) {
            this.$2 = value * wwtlib.Coordinates.RC;
            return value;
        },
        get_az: function() {
            return this.$1 / wwtlib.Coordinates.RC;
        },
        set_az: function(value) {
            this.$1 = value * wwtlib.Coordinates.RC;
            return value;
        },
        $1: 0,
        $2: 0,
        toString: function() {
            return String.format('Lat: {0}, Lng: {1}', this.get_lat(), this.get_lng());
        }
    }
    wwtlib.PositionTexture = function() {}
    wwtlib.PositionTexture.createPos = function(pos, u, v) {
        var $0 = new wwtlib.PositionTexture();
        $0.tu = u * 256;
        $0.tv = v * 256;
        $0.position = pos;
        return $0;
    }
    wwtlib.PositionTexture.create = function(xvalue, yvalue, zvalue, u, v) {
        var $0 = new wwtlib.PositionTexture();
        $0.position = wwtlib.Vector3d.create(xvalue, yvalue, zvalue);
        $0.tu = u * 256;
        $0.tv = v * 256;
        return $0;
    }
    wwtlib.PositionTexture.prototype = {
        tu: 0,
        tv: 0,
        position: null,
        copy: function() {
            var $0 = new wwtlib.PositionTexture();
            $0.position = wwtlib.Vector3d.makeCopy(this.position);
            $0.tu = this.tu;
            $0.tv = this.tv;
            return $0;
        },
        toString: function() {
            return String.format('{0}, {1}, {2}, {3}, {4}', this.position.x, this.position.y, this.position.z, this.tu, this.tv);
        }
    }
    wwtlib.Vector3d = function() {}
    wwtlib.Vector3d.create = function(valueX, valueY, valueZ) {
        var $0 = new wwtlib.Vector3d();
        $0.x = valueX;
        $0.y = valueY;
        $0.z = valueZ;
        return $0;
    }
    wwtlib.Vector3d.makeCopy = function(value) {
        var $0 = new wwtlib.Vector3d();
        $0.x = value.x;
        $0.y = value.y;
        $0.z = value.z;
        return $0;
    }
    wwtlib.Vector3d.negate = function(vec) {
        return wwtlib.Vector3d.create( - vec.x, -vec.y, -vec.z);
    }
    wwtlib.Vector3d.midPoint = function(left, right) {
        var $0 = wwtlib.Vector3d.create((left.x + right.x) / 2, (left.y + right.y) / 2, (left.z + right.z) / 2);
        $0.normalize();
        return $0;
    }
    wwtlib.Vector3d.midPointByLength = function(left, right) {
        var $0 = wwtlib.Vector3d.create((left.x + right.x) / 2, (left.y + right.y) / 2, (left.z + right.z) / 2);
        $0.normalize();
        $0.multiply(left.length());
        return $0;
    }
    wwtlib.Vector3d.get_empty = function() {
        return wwtlib.Vector3d.create(0, 0, 0);
    }
    wwtlib.Vector3d.addVectors = function(left, right) {
        return wwtlib.Vector3d.create(left.x + right.x, left.y + right.y, left.z + right.z);
    }
    wwtlib.Vector3d.cross = function(left, right) {
        return wwtlib.Vector3d.create(left.y * right.z - left.z * right.y, left.z * right.x - left.x * right.z, left.x * right.y - left.y * right.x);
    }
    wwtlib.Vector3d.dot = function(left, right) {
        return left.x * right.x + left.y * right.y + left.z * right.z;
    }
    wwtlib.Vector3d.getLength = function(source) {
        return Math.sqrt(source.x * source.x + source.y * source.y + source.z * source.z);
    }
    wwtlib.Vector3d.getLengthSq = function(source) {
        return source.x * source.x + source.y * source.y + source.z * source.z;
    }
    wwtlib.Vector3d.lerp = function(left, right, interpolater) {
        return wwtlib.Vector3d.create(left.x * (1 - interpolater) + right.x * interpolater, left.y * (1 - interpolater) + right.y * interpolater, left.z * (1 - interpolater) + right.z * interpolater);
    }
    wwtlib.Vector3d.multiplyScalar = function(source, f) {
        var $0 = source.copy();
        $0.multiply(f);
        return $0;
    }
    wwtlib.Vector3d.scale = function(source, scalingFactor) {
        var $0 = source;
        $0.multiply(scalingFactor);
        return $0;
    }
    wwtlib.Vector3d.subtractVectors = function(left, right) {
        var $0 = left.copy();
        $0.subtract(right);
        return $0;
    }
    wwtlib.Vector3d.parse = function(data) {
        var $0 = new wwtlib.Vector3d();
        var $1 = data.split(',');
        if ($1.length === 3) {
            $0.x = parseFloat($1[0]);
            $0.y = parseFloat($1[1]);
            $0.z = parseFloat($1[2]);
        }
        return $0;
    }
    wwtlib.Vector3d.$1 = function($p0, $p1) {
        return $p1.transform($p0);
    }
    wwtlib.Vector3d.prototype = {
        x: 0,
        y: 0,
        z: 0,
        copy: function() {
            var $0 = new wwtlib.Vector3d();
            $0.x = this.x;
            $0.y = this.y;
            $0.z = this.z;
            return $0;
        },
        round: function() {
            this.x = parseInt((this.x * 65536)) / 65536;
            this.y = parseInt((this.y * 65536)) / 65536;
            this.z = parseInt((this.z * 65536)) / 65536;
        },
        add: function(source) {
            this.x += source.x;
            this.y += source.y;
            this.z += source.z;
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        },
        multiply: function(s) {
            this.x *= s;
            this.y *= s;
            this.z *= s;
        },
        normalize: function() {
            var $0 = this.length();
            if ( !! $0) {
                this.x /= $0;
                this.y /= $0;
                this.z /= $0;
            }
        },
        rotateX: function(radians) {
            var $0;
            var $1;
            $1 = this.y * Math.cos(radians) - this.z * Math.sin(radians);
            $0 = this.y * Math.sin(radians) + this.z * Math.cos(radians);
            this.z = $0;
            this.y = $1;
        },
        rotateZ: function(radians) {
            var $0;
            var $1;
            $0 = this.x * Math.cos(radians) - this.y * Math.sin(radians);
            $1 = this.x * Math.sin(radians) + this.y * Math.cos(radians);
            this.y = $1;
            this.x = $0;
        },
        rotateY: function(radians) {
            var $0;
            var $1;
            $0 = this.z * Math.cos(radians) - this.x * Math.sin(radians);
            $1 = this.z * Math.sin(radians) + this.x * Math.cos(radians);
            this.x = $1;
            this.z = $0;
        },
        subtract: function(source) {
            this.x -= source.x;
            this.y -= source.y;
            this.z -= source.z;
        },
        toString: function() {
            return String.format('{0}, {1}, {2}', this.x, this.y, this.z);
        },
        toSpherical: function() {
            var $0;
            var $1;
            var $2 = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            var $3 = Math.sqrt(this.x * this.x + this.z * this.z);
            $1 = Math.asin(this.y / $2);
            if (!$3) {
                $0 = 0;
            } else if (0 <= this.x) {
                $0 = Math.asin(this.z / $3);
            } else {
                $0 = Math.PI - Math.asin(this.z / $3);
            }
            return wwtlib.Vector2d.create((($0 + Math.PI) % (2 * Math.PI)), ($1 + (Math.PI / 2)));
        },
        toRaDec: function() {
            var $0 = this.toSpherical();
            $0.x = $0.x / Math.PI * 12;
            $0.y = ($0.y / Math.PI * 180) - 90;
            return $0;
        },
        distanceToLine: function(x1, x2) {
            var $0 = wwtlib.Vector3d.subtractVectors(x2, x1);
            var $1 = wwtlib.Vector3d.subtractVectors(x1, this);
            var $2 = wwtlib.Vector3d.cross($0, $1);
            var $3 = $2.length();
            var $4 = wwtlib.Vector3d.subtractVectors(x2, x1);
            var $5 = $4.length();
            return $3 / $5;
        },
        $0: function($p0) {
            var $0 = $p0.transform(this);
            this.x = $0.x;
            this.y = $0.y;
            this.z = $0.z;
        }
    }
    wwtlib.Vector2d = function() {}
    wwtlib.Vector2d.lerp = function(left, right, interpolater) {
        return wwtlib.Vector2d.create(left.x * (1 - interpolater) + right.x * interpolater, left.y * (1 - interpolater) + right.y * interpolater);
    }
    wwtlib.Vector2d.cartesianToSpherical2 = function(vector) {
        var $0 = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
        var $1 = Math.atan2(vector.z, vector.x);
        var $2 = Math.asin(vector.y / $0);
        return wwtlib.Vector2d.create($1 / Math.PI * 180, $2 / Math.PI * 180);
    }
    wwtlib.Vector2d.average3d = function(left, right) {
        var $0 = wwtlib.Coordinates.geoTo3dDouble(left.y, left.x);
        var $1 = wwtlib.Coordinates.geoTo3dDouble(right.y, right.x);
        var $2 = wwtlib.Vector3d.addVectors($0, $1);
        $2.multiply(0.5);
        $2.normalize();
        return wwtlib.Vector2d.cartesianToSpherical2($2);
    }
    wwtlib.Vector2d.subtract = function(vec) {
        return wwtlib.Vector2d.create( - vec.x, -vec.y);
    }
    wwtlib.Vector2d.create = function(x, y) {
        var $0 = new wwtlib.Vector2d();
        $0.x = x;
        $0.y = y;
        return $0;
    }
    wwtlib.Vector2d.subtractVector = function(left, right) {
        return wwtlib.Vector2d.create(left.x - right.x, left.y - right.y);
    }
    wwtlib.Vector2d.prototype = {
        x: 0,
        y: 0,
        distance3d: function(pointB) {
            var $0 = wwtlib.Coordinates.geoTo3dDouble(pointB.y, pointB.x);
            var $1 = wwtlib.Coordinates.geoTo3dDouble(this.y, this.x);
            var $2 = wwtlib.Vector3d.subtractVectors($0, $1);
            return $2.length() / Math.PI * 180;
        },
        get_length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        normalize: function() {
            var $0 = this.get_length();
            if ( !! $0) {
                this.x /= $0;
                this.y /= $0;
            }
        },
        extend: function(factor) {
            this.x = this.x * factor;
            this.y = this.y * factor;
        }
    }
    wwtlib.Matrix3d = function() {}
    wwtlib.Matrix3d.create = function(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, offsetX, offsetY, offsetZ, m44) {
        var $0 = new wwtlib.Matrix3d();
        $0.$0 = m11;
        $0.$1 = m12;
        $0.$2 = m13;
        $0.$3 = m14;
        $0.$4 = m21;
        $0.$5 = m22;
        $0.$6 = m23;
        $0.$7 = m24;
        $0.$8 = m31;
        $0.$9 = m32;
        $0.$A = m33;
        $0.$B = m34;
        $0.$C = offsetX;
        $0.$D = offsetY;
        $0.$E = offsetZ;
        $0.$F = m44;
        $0.$10 = true;
        return $0;
    }
    wwtlib.Matrix3d.get_identity = function() {
        var $0 = new wwtlib.Matrix3d();
        $0.set(wwtlib.Matrix3d.$11);
        return $0;
    }
    wwtlib.Matrix3d.multiplyMatrix = function(matrix1, matrix2) {
        if (matrix1.get_$1C()) {
            return matrix2;
        }
        if (matrix2.get_$1C()) {
            return matrix1;
        }
        return wwtlib.Matrix3d.create((((matrix1.$0 * matrix2.$0) + (matrix1.$1 * matrix2.$4)) + (matrix1.$2 * matrix2.$8)) + (matrix1.$3 * matrix2.$C), (((matrix1.$0 * matrix2.$1) + (matrix1.$1 * matrix2.$5)) + (matrix1.$2 * matrix2.$9)) + (matrix1.$3 * matrix2.$D), (((matrix1.$0 * matrix2.$2) + (matrix1.$1 * matrix2.$6)) + (matrix1.$2 * matrix2.$A)) + (matrix1.$3 * matrix2.$E), (((matrix1.$0 * matrix2.$3) + (matrix1.$1 * matrix2.$7)) + (matrix1.$2 * matrix2.$B)) + (matrix1.$3 * matrix2.$F), (((matrix1.$4 * matrix2.$0) + (matrix1.$5 * matrix2.$4)) + (matrix1.$6 * matrix2.$8)) + (matrix1.$7 * matrix2.$C), (((matrix1.$4 * matrix2.$1) + (matrix1.$5 * matrix2.$5)) + (matrix1.$6 * matrix2.$9)) + (matrix1.$7 * matrix2.$D), (((matrix1.$4 * matrix2.$2) + (matrix1.$5 * matrix2.$6)) + (matrix1.$6 * matrix2.$A)) + (matrix1.$7 * matrix2.$E), (((matrix1.$4 * matrix2.$3) + (matrix1.$5 * matrix2.$7)) + (matrix1.$6 * matrix2.$B)) + (matrix1.$7 * matrix2.$F), (((matrix1.$8 * matrix2.$0) + (matrix1.$9 * matrix2.$4)) + (matrix1.$A * matrix2.$8)) + (matrix1.$B * matrix2.$C), (((matrix1.$8 * matrix2.$1) + (matrix1.$9 * matrix2.$5)) + (matrix1.$A * matrix2.$9)) + (matrix1.$B * matrix2.$D), (((matrix1.$8 * matrix2.$2) + (matrix1.$9 * matrix2.$6)) + (matrix1.$A * matrix2.$A)) + (matrix1.$B * matrix2.$E), (((matrix1.$8 * matrix2.$3) + (matrix1.$9 * matrix2.$7)) + (matrix1.$A * matrix2.$B)) + (matrix1.$B * matrix2.$F), (((matrix1.$C * matrix2.$0) + (matrix1.$D * matrix2.$4)) + (matrix1.$E * matrix2.$8)) + (matrix1.$F * matrix2.$C), (((matrix1.$C * matrix2.$1) + (matrix1.$D * matrix2.$5)) + (matrix1.$E * matrix2.$9)) + (matrix1.$F * matrix2.$D), (((matrix1.$C * matrix2.$2) + (matrix1.$D * matrix2.$6)) + (matrix1.$E * matrix2.$A)) + (matrix1.$F * matrix2.$E), (((matrix1.$C * matrix2.$3) + (matrix1.$D * matrix2.$7)) + (matrix1.$E * matrix2.$B)) + (matrix1.$F * matrix2.$F));
    }
    wwtlib.Matrix3d.lookAtLH = function(cameraPosition, cameraTarget, cameraUpVector) {
        var $0 = wwtlib.Vector3d.subtractVectors(cameraTarget, cameraPosition);
        $0.normalize();
        var $1 = wwtlib.Vector3d.cross(cameraUpVector, $0);
        $1.normalize();
        var $2 = wwtlib.Vector3d.cross($0, $1);
        var $3 = wwtlib.Matrix3d.create($1.x, $2.x, $0.x, 0, $1.y, $2.y, $0.y, 0, $1.z, $2.z, $0.z, 0, -wwtlib.Vector3d.dot($1, cameraPosition), -wwtlib.Vector3d.dot($2, cameraPosition), -wwtlib.Vector3d.dot($0, cameraPosition), 1);
        return $3;
    }
    wwtlib.Matrix3d.$1B = function() {
        var $0 = wwtlib.Matrix3d.create(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        $0.set_$1C(true);
        return $0;
    }
    wwtlib.Matrix3d.equals = function(matrix1, matrix2) {
        if (matrix1.get_$1C() || matrix2.get_$1C()) {
            return (matrix1.get_isIdentity() === matrix2.get_isIdentity());
        }
        if ((((matrix1.get_m11() === matrix2.get_m11() && matrix1.get_m12() === matrix2.get_m12()) && (matrix1.get_m13() === matrix2.get_m13() && matrix1.get_m14() === matrix2.get_m14())) && ((matrix1.get_m21() === matrix2.get_m21() && matrix1.get_m22() === matrix2.get_m22()) && (matrix1.get_m23() === matrix2.get_m23() && matrix1.get_m24() === matrix2.get_m24()))) && (((matrix1.get_m31() === matrix2.get_m31() && matrix1.get_m32() === matrix2.get_m32()) && (matrix1.get_m33() === matrix2.get_m33() && matrix1.get_m34() === matrix2.get_m34())) && ((matrix1.get_offsetX() === matrix2.get_offsetX() && matrix1.get_offsetY() === matrix2.get_offsetY()) && matrix1.get_offsetZ() === matrix2.get_offsetZ()))) {
            return matrix1.get_m44() === matrix2.get_m44();
        }
        return false;
    }
    wwtlib.Matrix3d.fromMatrix2d = function(mat) {
        var $0 = wwtlib.Matrix3d.$1B();
        $0.set_m11(mat.m11);
        $0.set_m12(mat.m12);
        $0.set_m13(mat.m13);
        $0.set_m21(mat.m21);
        $0.set_m22(mat.m22);
        $0.set_m23(mat.m23);
        $0.set_m31(mat.m31);
        $0.set_m32(mat.m32);
        $0.set_m33(mat.m33);
        $0.$10 = true;
        return $0;
    }
    wwtlib.Matrix3d.$1D = function($p0) {
        var $0 = $p0;
        var $1 = wwtlib.Matrix3d.get_identity();
        $1.$0 = Math.cos($0);
        $1.$5 = 1;
        $1.$8 = Math.sin($0);
        $1.$2 = -Math.sin($0);
        $1.$A = Math.cos($0);
        $1.$10 = true;
        return $1;
    }
    wwtlib.Matrix3d.$1E = function($p0) {
        var $0 = $p0;
        var $1 = wwtlib.Matrix3d.get_identity();
        $1.$0 = 1;
        $1.$5 = Math.cos($0);
        $1.$9 = -Math.sin($0);
        $1.$6 = Math.sin($0);
        $1.$A = Math.cos($0);
        $1.$10 = true;
        return $1;
    }
    wwtlib.Matrix3d.$1F = function($p0) {
        var $0 = $p0;
        var $1 = wwtlib.Matrix3d.get_identity();
        $1.$0 = Math.cos($0);
        $1.$4 = -Math.sin($0);
        $1.$1 = Math.sin($0);
        $1.$5 = Math.cos($0);
        $1.$A = 1;
        $1.$10 = true;
        return $1;
    }
    wwtlib.Matrix3d.$20 = function($p0, $p1, $p2) {
        var $0 = wwtlib.Matrix3d.get_identity();
        $0.$0 = $p0;
        $0.$5 = $p1;
        $0.$A = $p2;
        $0.$10 = true;
        return $0;
    }
    wwtlib.Matrix3d.$21 = function($p0, $p1, $p2) {
        var $0 = wwtlib.Matrix3d.get_identity();
        $0.set_offsetX($p0);
        $0.set_offsetY($p1);
        $0.set_offsetZ($p2);
        $0.$10 = true;
        return $0;
    }
    wwtlib.Matrix3d.perspectiveFovLH = function(fieldOfViewY, aspectRatio, znearPlane, zfarPlane) {
        var $0 = 1 / Math.tan(fieldOfViewY / 2);
        var $1 = $0 / aspectRatio;
        return wwtlib.Matrix3d.create($1, 0, 0, 0, 0, $0, 0, 0, 0, 0, zfarPlane / (zfarPlane - znearPlane), 1, 0, 0, -znearPlane * zfarPlane / (zfarPlane - znearPlane), 0);
    }
    wwtlib.Matrix3d.perspectiveOffCenterLH = function(left, right, bottom, top, znearPlane, zfarPlane) {
        return wwtlib.Matrix3d.create(2 * znearPlane / (right - left), 0, 0, 0, 0, 2 * znearPlane / (top - bottom), 0, 0, (left + right) / (left - right), (top + bottom) / (bottom - top), zfarPlane / (zfarPlane - znearPlane), 1, 0, 0, znearPlane * zfarPlane / (znearPlane - zfarPlane), 0);
    }
    wwtlib.Matrix3d.invertMatrix = function(matrix3d) {
        var $0 = matrix3d;
        $0.invert();
        return $0;
    }
    wwtlib.Matrix3d.translation = function(vector3d) {
        return wwtlib.Matrix3d.$21(vector3d.x, vector3d.y, vector3d.z);
    }
    wwtlib.Matrix3d.getMapMatrix = function(center, fieldWidth, fieldHeight, rotation) {
        var $0 = 0;
        var $1 = 0;
        $0 = -((center.get_lng() + 180 - (fieldWidth / 2)) / 360);
        $1 = -(1 - ((center.get_lat() + 90 + (fieldHeight / 2)) / 180));
        var $2 = new wwtlib.Matrix2d();
        var $3 = 0;
        var $4 = 0;
        $3 = 360 / fieldWidth;
        $4 = 180 / fieldHeight;
        $2 = wwtlib.Matrix2d.multiply($2, wwtlib.Matrix2d.translation($0, $1));
        $2 = wwtlib.Matrix2d.multiply($2, wwtlib.Matrix2d.scaling($3, $4));
        if ( !! rotation) {
            $2 = wwtlib.Matrix2d.multiply($2, wwtlib.Matrix2d.translation( - 0.5, -0.5));
            $2 = wwtlib.Matrix2d.multiply($2, wwtlib.Matrix2d.rotation(rotation));
            $2 = wwtlib.Matrix2d.multiply($2, wwtlib.Matrix2d.translation(0.5, 0.5));
        }
        return wwtlib.Matrix3d.fromMatrix2d($2);
    }
    wwtlib.Matrix3d.prototype = {
        $0: 0,
        $1: 0,
        $2: 0,
        $3: 0,
        $4: 0,
        $5: 0,
        $6: 0,
        $7: 0,
        $8: 0,
        $9: 0,
        $A: 0,
        $B: 0,
        $C: 0,
        $D: 0,
        $E: 0,
        $F: 0,
        $10: false,
        setIdentity: function() {
            this.set(wwtlib.Matrix3d.$11);
        },
        set: function(mat) {
            this.$0 = mat.$0;
            this.$1 = mat.$1;
            this.$2 = mat.$2;
            this.$3 = mat.$3;
            this.$4 = mat.$4;
            this.$5 = mat.$5;
            this.$6 = mat.$6;
            this.$7 = mat.$7;
            this.$8 = mat.$8;
            this.$9 = mat.$9;
            this.$A = mat.$A;
            this.$B = mat.$B;
            this.$C = mat.$C;
            this.$D = mat.$D;
            this.$E = mat.$E;
            this.$F = mat.$F;
            this.$10 = true;
        },
        get_isIdentity: function() {
            if (this.get_$1C()) {
                return true;
            }
            if (((((this.$0 === 1) && (!this.$1)) && ((!this.$2) && (!this.$3))) && (((!this.$4) && (this.$5 === 1)) && ((!this.$6) && (!this.$7)))) && ((((!this.$8) && (!this.$9)) && ((this.$A === 1) && (!this.$B))) && (((!this.$C) && (!this.$D)) && ((!this.$E) && (this.$F === 1))))) {
                this.set_$1C(true);
                return true;
            }
            return false;
        },
        prepend: function(matrix) {
            this.set(wwtlib.Matrix3d.multiplyMatrix(matrix, this));
        },
        append: function(matrix) {
            this.$22(matrix);
        },
        scale: function(scale) {
            if (this.get_$1C()) {
                this.$13(scale);
            } else {
                this.$0 *= scale.x;
                this.$1 *= scale.y;
                this.$2 *= scale.z;
                this.$4 *= scale.x;
                this.$5 *= scale.y;
                this.$6 *= scale.z;
                this.$8 *= scale.x;
                this.$9 *= scale.y;
                this.$A *= scale.z;
                this.$C *= scale.x;
                this.$D *= scale.y;
                this.$E *= scale.z;
            }
        },
        scalePrepend: function(scale) {
            if (this.get_$1C()) {
                this.$13(scale);
            } else {
                this.$0 *= scale.x;
                this.$1 *= scale.x;
                this.$2 *= scale.x;
                this.$3 *= scale.x;
                this.$4 *= scale.y;
                this.$5 *= scale.y;
                this.$6 *= scale.y;
                this.$7 *= scale.y;
                this.$8 *= scale.z;
                this.$9 *= scale.z;
                this.$A *= scale.z;
                this.$B *= scale.z;
            }
        },
        scaleAt: function(scale, center) {
            if (this.get_$1C()) {
                this.$14(scale, center);
            } else {
                var $0 = this.$3 * center.x;
                this.$0 = $0 + (scale.x * (this.$0 - $0));
                $0 = this.$3 * center.y;
                this.$1 = $0 + (scale.y * (this.$1 - $0));
                $0 = this.$3 * center.z;
                this.$2 = $0 + (scale.z * (this.$2 - $0));
                $0 = this.$7 * center.x;
                this.$4 = $0 + (scale.x * (this.$4 - $0));
                $0 = this.$7 * center.y;
                this.$5 = $0 + (scale.y * (this.$5 - $0));
                $0 = this.$7 * center.z;
                this.$6 = $0 + (scale.z * (this.$6 - $0));
                $0 = this.$B * center.x;
                this.$8 = $0 + (scale.x * (this.$8 - $0));
                $0 = this.$B * center.y;
                this.$9 = $0 + (scale.y * (this.$9 - $0));
                $0 = this.$B * center.z;
                this.$A = $0 + (scale.z * (this.$A - $0));
                $0 = this.$F * center.x;
                this.$C = $0 + (scale.x * (this.$C - $0));
                $0 = this.$F * center.y;
                this.$D = $0 + (scale.y * (this.$D - $0));
                $0 = this.$F * center.z;
                this.$E = $0 + (scale.z * (this.$E - $0));
            }
        },
        scaleAtPrepend: function(scale, center) {
            if (this.get_$1C()) {
                this.$14(scale, center);
            } else {
                var $0 = center.x - (center.x * scale.x);
                var $1 = center.y - (center.y * scale.y);
                var $2 = center.z - (center.z * scale.z);
                this.$C += ((this.$0 * $0) + (this.$4 * $1)) + (this.$8 * $2);
                this.$D += ((this.$1 * $0) + (this.$5 * $1)) + (this.$9 * $2);
                this.$E += ((this.$2 * $0) + (this.$6 * $1)) + (this.$A * $2);
                this.$F += ((this.$3 * $0) + (this.$7 * $1)) + (this.$B * $2);
                this.$0 *= scale.x;
                this.$1 *= scale.x;
                this.$2 *= scale.x;
                this.$3 *= scale.x;
                this.$4 *= scale.y;
                this.$5 *= scale.y;
                this.$6 *= scale.y;
                this.$7 *= scale.y;
                this.$8 *= scale.z;
                this.$9 *= scale.z;
                this.$A *= scale.z;
                this.$B *= scale.z;
            }
        },
        translate: function(offset) {
            if (this.get_$1C()) {
                this.$15(offset);
            } else {
                this.$0 += this.$3 * offset.x;
                this.$1 += this.$3 * offset.y;
                this.$2 += this.$3 * offset.z;
                this.$4 += this.$7 * offset.x;
                this.$5 += this.$7 * offset.y;
                this.$6 += this.$7 * offset.z;
                this.$8 += this.$B * offset.x;
                this.$9 += this.$B * offset.y;
                this.$A += this.$B * offset.z;
                this.$C += this.$F * offset.x;
                this.$D += this.$F * offset.y;
                this.$E += this.$F * offset.z;
            }
        },
        translatePrepend: function(offset) {
            if (this.get_$1C()) {
                this.$15(offset);
            } else {
                this.$C += ((this.$0 * offset.x) + (this.$4 * offset.y)) + (this.$8 * offset.z);
                this.$D += ((this.$1 * offset.x) + (this.$5 * offset.y)) + (this.$9 * offset.z);
                this.$E += ((this.$2 * offset.x) + (this.$6 * offset.y)) + (this.$A * offset.z);
                this.$F += ((this.$3 * offset.x) + (this.$7 * offset.y)) + (this.$B * offset.z);
            }
        },
        transform: function(point) {
            var $0 = new wwtlib.Vector3d();
            if (!this.get_$1C()) {
                var $1 = point.x;
                var $2 = point.y;
                var $3 = point.z;
                $0.x = ((($1 * this.$0) + ($2 * this.$4)) + ($3 * this.$8)) + this.$C;
                $0.y = ((($1 * this.$1) + ($2 * this.$5)) + ($3 * this.$9)) + this.$D;
                $0.z = ((($1 * this.$2) + ($2 * this.$6)) + ($3 * this.$A)) + this.$E;
                if (!this.get_isAffine()) {
                    var $4 = ((($1 * this.$3) + ($2 * this.$7)) + ($3 * this.$B)) + this.$F;
                    $0.x /= $4;
                    $0.y /= $4;
                    $0.z /= $4;
                }
            }
            return $0;
        },
        $12: function($p0, $p1) {
            $p1.x = ((($p0.x * this.$0) + ($p0.y * this.$4)) + ($p0.z * this.$8)) + this.$C;
            $p1.y = ((($p0.x * this.$1) + ($p0.y * this.$5)) + ($p0.z * this.$9)) + this.$D;
            $p1.z = ((($p0.x * this.$2) + ($p0.y * this.$6)) + ($p0.z * this.$A)) + this.$E;
            var $0 = ((($p0.x * this.$3) + ($p0.y * this.$7)) + ($p0.z * this.$B)) + this.$F;
            $p1.x /= $0;
            $p1.y /= $0;
            $p1.z /= $0;
        },
        transformArray: function(points) {
            if (points != null) {
                for (var $0 = 0; $0$10.x) {
                    $10 = $17;
                }
                if ($17.y < $11.y) {
                    $11 = $17;
                }
                if ($17.y > $12.y) {
                    $12 = $17;
                }
                if ($17.z < $13.z) {
                    $13 = $17;
                }
                if ($17.z > $14.z) {
                    $14 = $17;
                }
            }
            $4 = $10.x - $F.x;
            $5 = $10.y - $F.y;
            $6 = $10.z - $F.z;
            $8 = $4 * $4 + $5 * $5 + $6 * $6;
            $4 = $12.x - $11.x;
            $5 = $12.y - $11.y;
            $6 = $12.z - $11.z;
            $9 = $4 * $4 + $5 * $5 + $6 * $6;
            $4 = $14.x - $13.x;
            $5 = $14.y - $13.y;
            $6 = $14.z - $13.z;
            $A = $4 * $4 + $5 * $5 + $6 * $6;
            $15 = $F;
            $16 = $10;
            $B = $8;
            if ($9 > $B) {
                $B = $9;
                $15 = $11;
                $16 = $12;
            }
            if ($A > $B) {
                $15 = $13;
                $16 = $14;
            }
            $0.x = ($15.x + $16.x) / 2;
            $0.y = ($15.y + $16.y) / 2;
            $0.z = ($15.z + $16.z) / 2;
            $4 = $16.x - $0.x;
            $5 = $16.y - $0.y;
            $6 = $16.z - $0.z;
            $7 = $4 * $4 + $5 * $5 + $6 * $6;
            $1 = Math.sqrt($7);
            for ($3 = 0; $3 < $2; $3++) {
                var $18 = list[$3];
                $4 = $18.x - $0.x;
                $5 = $18.y - $0.y;
                $6 = $18.z - $0.z;
                $D = $4 * $4 + $5 * $5 + $6 * $6;
                if ($D > $7) {
                    $C = Math.sqrt($D);
                    $1 = ($1 + $C) / 2;
                    $7 = $1 * $1;
                    $E = $C - $1;
                    $0.x = ($1 * $0.x + $E * $18.x) / $C;
                    $0.y = ($1 * $0.y + $E * $18.y) / $C;
                    $0.z = ($1 * $0.z + $E * $18.z) / $C;
                }
            }
            return wwtlib.SphereHull.$0($0, $1);
        }
        wwtlib.Class1 = function() {}
        wwtlib.Annotation.registerClass('wwtlib.Annotation');
        wwtlib.Circle.registerClass('wwtlib.Circle', wwtlib.Annotation);
        wwtlib.Poly.registerClass('wwtlib.Poly', wwtlib.Annotation);
        wwtlib.PolyLine.registerClass('wwtlib.PolyLine', wwtlib.Annotation);
        wwtlib.BlendState.registerClass('wwtlib.BlendState');
        wwtlib.CameraParameters.registerClass('wwtlib.CameraParameters');
        wwtlib.Color.registerClass('wwtlib.Color');
        wwtlib.Colors.registerClass('wwtlib.Colors');
        wwtlib.Constellations.registerClass('wwtlib.Constellations');
        wwtlib.Lineset.registerClass('wwtlib.Lineset');
        wwtlib.Linepoint.registerClass('wwtlib.Linepoint');
        wwtlib.Tile.registerClass('wwtlib.Tile');
        wwtlib.EquirectangularTile.registerClass('wwtlib.EquirectangularTile', wwtlib.Tile);
        wwtlib.Folder.registerClass('wwtlib.Folder', null, wwtlib.IThumbnail);
        wwtlib.FolderBrowser.registerClass('wwtlib.FolderBrowser');
        wwtlib.wwtlib$5.registerClass('wwtlib.wwtlib$5', null, wwtlib.IThumbnail);
        wwtlib.Imageset.registerClass('wwtlib.Imageset', null, wwtlib.IThumbnail);
        wwtlib.ViewMoverKenBurnsStyle.registerClass('wwtlib.ViewMoverKenBurnsStyle', null, wwtlib.IViewMover);
        wwtlib.wwtlib$7.registerClass('wwtlib.wwtlib$7', null, wwtlib.IViewMover);
        wwtlib.MercatorTile.registerClass('wwtlib.MercatorTile', wwtlib.Tile);
        wwtlib.Place.registerClass('wwtlib.Place', null, wwtlib.IThumbnail, wwtlib.IPlace);
        wwtlib.ScriptInterface.registerClass('wwtlib.ScriptInterface');
        wwtlib.ArrivedEventArgs.registerClass('wwtlib.ArrivedEventArgs', ss.EventArgs);
        wwtlib.AnnotationClickEventArgs.registerClass('wwtlib.AnnotationClickEventArgs', ss.EventArgs);
        wwtlib.CollectionLoadedEventArgs.registerClass('wwtlib.CollectionLoadedEventArgs', ss.EventArgs);
        wwtlib.SpaceTimeController.registerClass('wwtlib.SpaceTimeController');
        wwtlib.TangentTile.registerClass('wwtlib.TangentTile', wwtlib.Tile);
        wwtlib.Tour.registerClass('wwtlib.Tour', null, wwtlib.IThumbnail);
        wwtlib.Overlay.registerClass('wwtlib.Overlay');
        wwtlib.BitmapOverlay.registerClass('wwtlib.BitmapOverlay', wwtlib.Overlay);
        wwtlib.TextOverlay.registerClass('wwtlib.TextOverlay', wwtlib.Overlay);
        wwtlib.ShapeOverlay.registerClass('wwtlib.ShapeOverlay', wwtlib.Overlay);
        wwtlib.AudioOverlay.registerClass('wwtlib.AudioOverlay', wwtlib.Overlay);
        wwtlib.FlipbookOverlay.registerClass('wwtlib.FlipbookOverlay', wwtlib.Overlay);
        wwtlib.TextObject.registerClass('wwtlib.TextObject');
        wwtlib.TourDocument.registerClass('wwtlib.TourDocument');
        wwtlib.TourPlayer.registerClass('wwtlib.TourPlayer', null, wwtlib.IUiController);
        wwtlib.MasterTime.registerClass('wwtlib.MasterTime');
        wwtlib.TourStop.registerClass('wwtlib.TourStop', null, wwtlib.ISettings);
        wwtlib.wwtlib$2.registerClass('wwtlib.wwtlib$2');
        wwtlib.VizLayer.registerClass('wwtlib.VizLayer');
        wwtlib.DataItem.registerClass('wwtlib.DataItem');
        wwtlib.WebFile.registerClass('wwtlib.WebFile');
        wwtlib._Wtml.registerClass('wwtlib._Wtml');
        wwtlib.WWTControl.registerClass('wwtlib.WWTControl');
        wwtlib.WWTElementEvent.registerClass('wwtlib.WWTElementEvent');
        wwtlib.RenderContext.registerClass('wwtlib.RenderContext');
        wwtlib.RenderTriangle.registerClass('wwtlib.RenderTriangle');
        wwtlib.Settings.registerClass('wwtlib.Settings', null, wwtlib.ISettings);
        wwtlib.wwtlib$3.registerClass('wwtlib.wwtlib$3');
        wwtlib.ToastTile.registerClass('wwtlib.ToastTile', wwtlib.Tile);
        wwtlib.wwtlib$4.registerClass('wwtlib.wwtlib$4');
        wwtlib._Util.registerClass('wwtlib._Util');
        wwtlib.Rectangle.registerClass('wwtlib.Rectangle');
        wwtlib.Guid.registerClass('wwtlib.Guid');
        wwtlib.Mouse.registerClass('wwtlib.Mouse');
        wwtlib.Coordinates.registerClass('wwtlib.Coordinates');
        wwtlib.PositionTexture.registerClass('wwtlib.PositionTexture');
        wwtlib.Vector3d.registerClass('wwtlib.Vector3d');
        wwtlib.Vector2d.registerClass('wwtlib.Vector2d');
        wwtlib.Matrix3d.registerClass('wwtlib.Matrix3d');
        wwtlib.Matrix2d.registerClass('wwtlib.Matrix2d');
        wwtlib.DoubleUtilities.registerClass('wwtlib.DoubleUtilities');
        wwtlib.PlaneD.registerClass('wwtlib.PlaneD');
        wwtlib.Vector4d.registerClass('wwtlib.Vector4d');
        wwtlib.PositionNormalTexturedX2.registerClass('wwtlib.PositionNormalTexturedX2');
        wwtlib.SphereHull.registerClass('wwtlib.SphereHull');
        wwtlib.ConvexHull.registerClass('wwtlib.ConvexHull');
        wwtlib.Class1.registerClass('wwtlib.Class1');
        wwtlib.Constellations.$1 = null;
        wwtlib.Constellations.RC = 0.017453292519943;
        wwtlib.Constellations.containment = wwtlib.Constellations.create('Constellations', 'http://www.worldwidetelescope.org/data/constellations.txt', true, true, true);
        wwtlib.Constellations.$B = '';
        wwtlib.Constellations.selectedSegment = null;
        wwtlib.Constellations.boundries = null;
        wwtlib.Constellations.fullNames = null;
        wwtlib.Constellations.abbreviations = null;
        wwtlib.Constellations.constellationCentroids = null; (function() {
            var $0 = 'http://www.worldwidetelescope.org/data/constellationNames_RADEC_EN.txt';
            wwtlib.Constellations.$1 = new wwtlib.WebFile($0);
            wwtlib.Constellations.$1.onStateChange = wwtlib.Constellations.$C;
            wwtlib.Constellations.$1.send();
        })();
        wwtlib.FolderBrowser.$7 = false;
        wwtlib.FolderBrowser.$8 = false;
        wwtlib.FolderBrowser.$9 = 0;
        wwtlib.FolderBrowser.$A = null;
        wwtlib.FolderBrowser.$B = null;
        wwtlib.FolderBrowser.$C = null;
        wwtlib.FolderBrowser.$D = null;
        wwtlib.FolderBrowser.$E = null; (function() {})();
        wwtlib.SpaceTimeController.$0 = Date.get_now();
        wwtlib.SpaceTimeController.$1 = 0;
        wwtlib.SpaceTimeController.$2 = Date.get_now();
        wwtlib.SpaceTimeController.$3 = true;
        wwtlib.SpaceTimeController.$4 = 1;
        wwtlib.SpaceTimeController.$5 = null;
        wwtlib.SpaceTimeController.$6 = 0;
        wwtlib.Overlay.clipboardFormat = 'WorldWideTelescope.Overlay';
        wwtlib.Overlay.nextId = 11231;
        wwtlib.Overlay.RC = 3.1415927 / 180;
        wwtlib.TourPlayer.$24 = false;
        wwtlib.TourPlayer.$29 = null;
        wwtlib.TourPlayer.$2A = false;
        wwtlib.TourPlayer.noRestoreUIOnStop = false;
        wwtlib.TourStop.clipboardFormat = 'WorldWideTelescope.Slide';
        wwtlib.VizLayer.earthRadius = 6371000;
        wwtlib.WWTControl.singleton = null;
        wwtlib.WWTControl.imageSets = [];
        wwtlib.WWTControl.exploreRoot = new wwtlib.Folder();
        wwtlib.WWTControl.startLat = 0;
        wwtlib.WWTControl.startLng = 0;
        wwtlib.WWTControl.startZoom = 360;
        wwtlib.WWTControl.startMode = 'Sky';
        wwtlib.WWTControl.imageSetName = '';
        wwtlib.WWTControl.showDataLayers = false;
        wwtlib.WWTControl.$B = false;
        wwtlib.WWTControl.constellationsFigures = null;
        wwtlib.WWTControl.constellationsBoundries = null;
        wwtlib.WWTControl.scriptInterface = null; (function() {
            wwtlib.WWTControl.singleton = new wwtlib.WWTControl();
            wwtlib.WWTControl.singleton.renderContext = new wwtlib.RenderContext();
        })();
        wwtlib.RenderTriangle.width = 1024;
        wwtlib.RenderTriangle.height = 768;
        wwtlib.RenderTriangle.$2 = -0.5;
        wwtlib.RenderTriangle.trianglesRendered = 0;
        wwtlib.RenderTriangle.trianglesCulled = 0;
        wwtlib.RenderTriangle.renderingOn = true;
        wwtlib.RenderTriangle.$6 = 1;
        wwtlib.RenderTriangle.cullInside = true;
        wwtlib.RenderTriangle.hw = 0;
        wwtlib.RenderTriangle.qw = 0;
        wwtlib.RenderTriangle.hh = 0;
        wwtlib.RenderTriangle.qh = 0;
        wwtlib.Settings.$0 = null;
        wwtlib.Settings.tourSettings = null;
        wwtlib.Tile.currentRenderGeneration = 0;
        wwtlib.Tile.tilesInView = 0;
        wwtlib.Tile.trianglesRendered = 0;
        wwtlib.Tile.tilesTouched = 0;
        wwtlib.Tile.frustumList = null;
        wwtlib.Tile.maxLevel = 20;
        wwtlib.Tile.meshComplexity = 50;
        wwtlib.Tile.imageQuality = 50;
        wwtlib.Tile.lastDeepestLevel = 0;
        wwtlib.Tile.deepestLevel = 0;
        wwtlib.Tile.RC = (3.1415927 / 180);
        wwtlib.wwtlib$3.$0 = {};
        wwtlib.wwtlib$3.$1 = {};
        wwtlib.wwtlib$3.$5 = 8;
        wwtlib.wwtlib$3.$B = 0;
        wwtlib.wwtlib$3.$C = 800;
        wwtlib.wwtlib$3.$D = 200;
        wwtlib.wwtlib$3.$E = 0;
        wwtlib.wwtlib$3.$F = 0;
        wwtlib.Guid.$0 = 11232;
        wwtlib.Coordinates.RC = (3.1415927 / 180);
        wwtlib.Coordinates.RCRA = (3.1415927 / 12);
        wwtlib.Coordinates.radius = 1;
        wwtlib.Matrix3d.$11 = null; (function() {
            wwtlib.Matrix3d.$11 = wwtlib.Matrix3d.$1B();
        })();
    })();
    // This script was generated using Script# v0.7.4.0
