// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background: #efefef;\n}\n.bear {\n  height: 100%;\n}\n.skin,\n.skin .face,\n.skin .ear,\n.skin .brow,\n.skin .eye,\n.skin .mouth,\n.skin .mouth:before,\n.skin .mouth:after,\n.skin .cheek,\n.skin .pocket,\n.skin .size,\n.skin .point,\n.skin .body {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n.skin {\n  top: 0;\n  bottom: 0;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.skin {\n  width: 300px;\n  height: 420px;\n  font-size: 100px;\n  z-index: 1;\n}\n.skin .head {\n  position: relative;\n  z-index: 2;\n}\n.skin .face {\n  background: #000;\n  height: 1.2em;\n  width: 1.52em;\n  top: 0;\n  border-radius: 50% 50% 0 0/ 60% 60% 0 0;\n  margin-top: 0.2em;\n}\n.skin .ear {\n  width: 2em;\n  margin-top: 0.2em;\n}\n.skin .ear::before,\n.skin .ear::after {\n  content: \"\";\n  position: absolute;\n  width: 0.28em;\n  height: 0.28em;\n  background: pink;\n  box-shadow: 0 0 0 0.05em #000 inset;\n  border-radius: 50%;\n}\n.skin .ear::before {\n  margin-left: 0.27em;\n  left: 0;\n}\n.skin .ear::after {\n  margin-right: 0.27em;\n  right: 0;\n}\n.skin .brow {\n  width: 1em;\n  margin-top: 0.32em;\n}\n.skin .brow::before,\n.skin .brow::after {\n  content: \"\";\n  position: absolute;\n  width: 0.15em;\n  height: 0.15em;\n  border-top: 0.03em solid #fff;\n  border-radius: 0.15em 0.15em 0 0;\n}\n.bear .brow::before {\n  margin-left: 0.1em;\n  left: 0;\n}\n.bear .brow::after {\n  margin-right: 0.1em;\n  right: 0;\n}\n.skin .eye {\n  width: 0.26em;\n  height: 0.26em;\n  margin-top: 0.46em;\n  box-shadow: -0.33em 0 0 #fff, 0.33em 0 0 #fff;\n  border-radius: 50%;\n}\n.skin .eye::before,\n.skin .eye::after{\n    content: \"\";\n    position: absolute;\nwidth: 0.05em;\nheight: 0.1em;\nborder-radius: 50%;\nbackground: #000;\ntop: 0.09em;\n}\n.bear .eye::before{\n    left: -0.20em;\n}\n.bear .eye::after{\n    right: -0.20em;\n}\n.skin .mouth{\n    width: 0.7em;\n    margin-top: 0.67em;\n    height: 0.57em;\n    background-color: #fff;\n    border-radius: 70%;\n}\n.skin .mouth:before {\n  content: \"\";\n  margin-top: 0.01em;\n  width: 0.2em;\n  height: 0.2em;\n  background: #000;\n  border-radius: 40% 100% 40% 70%;\n  transform: rotate(-45deg);\n}\n.skin .mouth:after {\n  content: \"\";\n  margin-top: 0.26em;\n  width: 0.6em;\n  height: 0.16em;\n  background: #000;\n  border-radius: 50%;\n}\n.skin .cheek {\n  width: 0.35em;\n  height: 0.35em;\n  margin-top: 0.71em;\n  box-shadow: -0.64em 0 0 #fc2e30, 0.64em 0 0 #fc2e30;\n  border-radius: 50%;\n}\n.skin .body {\n     position: absolute;\n  z-index: 2;\n  width: 2em;\n  height: 2.2em;\n  background: #000;\n  margin-top: 1.3em;\n  border-radius: 50% 50% 30% 30%;\n}\n.skin .pocket{\n    border: 3px solid #1985EB;\n    content: \"\";\nwidth: 70px;\nheight: 60px;\nbackground: rgb(9, 129, 228);\nmargin-top: 1em;\nborder-radius: 0 0 50% 50%/ 0 0 50% 50%;\n}\n.skin .size{\n    height: auto;\n    font-size: 3px;\n    color: yellow;\n    text-align: center;\n    display: none;\n}\n.pocket:hover .size{\n    display: block;\n}\n.skin .point{\n    background: yellowgreen;\n    width: 18px;\n    height: 18px;\n    text-align: center;\n    bottom: 3px;\n    display: block;\n}\n.point::before, .point::after{\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 18px;\n    width: 18px;\n    background: yellowgreen;\n}\n.point::before{\n    -webkit-transform: rotate(30deg);\n    -moz-transform: rotate(30deg);\n    -ms-transform: rotate(30deg);\n    -o-transform: rotate(30deg);\n\n}\n.point::after{\n    -webkit-transform: rotate(60deg);\n    -moz-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    -o-transform: rotate(60deg);\n}\n.pocket:hover .point{\n    display: none;\n}\n.skin .arm {\n  position: relative;\n  margin-top: -0.2em;\n}\n.skin .arm:before,\n.skin .arm:after {\n  content: \"\";\n  position: absolute;\n  width: 0.5em;\n  height: 2em;\n  border-radius: 40% 0 50% 50%/50% 0 30% 30%;\n  background: #000;\n}\n.skin .arm:before {\n  transform: rotate(16deg);\n  left: -0.04em;\n}\n.skin .arm:after {\n  transform: rotateZ(-16deg) rotateY(180deg);\n  right: -0.04em;\n}\n.skin .leg {\n  position: absolute;\n  width: 100%;\n  margin-top: 1.9em;\n}\n.skin .leg:before,\n.skin .leg:after {\n  content: \"\";\n  position: absolute;\n  width: 0.45em;\n  height: 1em;\n  background: #000;\n  border-radius: 30% 50% 40% 40%/ 50% 50% 40% 40%;\n}\n.skin .leg:before {\n  left: 0.05em;\n  transform: rotate(-5deg);\n}\n.skin .leg:after {\n  right: 0.05em;\n  transform: rotateZ(5deg) rotateY(180deg);\n}\n.skin .foot {\n  position: absolute;\n  margin-top: 0.65em;\n  width: 100%;\n}\n.skin .foot:before,\n.skin .foot:after {\n  content: \"\";\n  position: absolute;\n  width: 0.3em;\n  height: 0.35em;\n  border-radius: 49% 20%;\n  background: #000;\n}\n.skin .foot:before {\n  left: 0.1em;\n  transform: rotate(3deg);\n}\n.skin .foot:after {\n  right: 0.1em;\n  transform: rotateZ(-3deg) rotateY(180deg);\n}\n.skin .leg-fix {\n  position: absolute;\n  width: 100%;\n}\n.skin .leg-fix:before,\n.skin .leg-fix:after {\n  content: \"\";\n  position: absolute;\n  background: -webkit-radial-gradient(\n    100% 100%,\n    farthest-side,\n    transparent 80%,\n    #000 80%\n  );\n  width: 0.2em;\n  height: 0.2em;\n  margin-top: 0.46em;\n}\n.skin .leg-fix:before {\n  left: 0.47em;\n}\n.skin .leg-fix:after {\n  right: 0.47em;\n  transform: rotateY(180deg);\n}\n.skin .brow {\n  animation: brow 8s linear infinite;\n}\n@keyframes brow {\n  0% {\n    transform: translate(0, 0);\n  }\n  10% {\n    transform: translate(0, 0);\n  }\n  12% {\n    transform: translate(0, -0.05em);\n  }\n  14% {\n    transform: translate(0, 0);\n  }\n  16% {\n    transform: translate(0, -0.05em);\n  }\n  18% {\n    transform: translate(0, 0);\n  }\n  42% {\n    transform: translate(0, 0);\n  }\n  44% {\n    transform: translate(0, -0.05em);\n  }\n  46% {\n    transform: translate(0, 0);\n  }\n  48% {\n    transform: translate(0, -0.05em);\n  }\n  50% {\n    transform: translate(0, 0);\n  }\n  70% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n.skin .mouth:after {\n  animation: mouth 6s linear infinite;\n}\n@keyframes mouth {\n  0% {\n    width: 0.5em;\n  }\n  10% {\n    width: 0.2em;\n  }\n  60% {\n    width: 0.2em;\n  }\n  70% {\n    width: 0.5em;\n  }\n  100% {\n    width: 0.5em;\n  }\n}\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.b62f6dd6.js.map