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
})({"HEkX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // THIS FILE IS AUTO GENERATED!
// This is a base64 version of the Universal Web Debug API:
// https://github.com/Offirmo/offirmo-monorepo/tree/master/2-advanced/universal-debug-api-browser
// bundled in a single file through this local file:
// ../src/injected-libs/universal-debug-api-from-webext.ts

var lib = 'cGFyY2VsUmVxdWlyZT1mdW5jdGlvbihlLHIsdCxuKXt2YXIgaSxvPSJmdW5jdGlvbiI9PXR5cGVvZiBwYXJjZWxSZXF1aXJlJiZwYXJjZWxSZXF1aXJlLHU9ImZ1bmN0aW9uIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7ZnVuY3Rpb24gZih0LG4pe2lmKCFyW3RdKXtpZighZVt0XSl7dmFyIGk9ImZ1bmN0aW9uIj09dHlwZW9mIHBhcmNlbFJlcXVpcmUmJnBhcmNlbFJlcXVpcmU7aWYoIW4mJmkpcmV0dXJuIGkodCwhMCk7aWYobylyZXR1cm4gbyh0LCEwKTtpZih1JiYic3RyaW5nIj09dHlwZW9mIHQpcmV0dXJuIHUodCk7dmFyIGM9bmV3IEVycm9yKCJDYW5ub3QgZmluZCBtb2R1bGUgJyIrdCsiJyIpO3Rocm93IGMuY29kZT0iTU9EVUxFX05PVF9GT1VORCIsY31wLnJlc29sdmU9ZnVuY3Rpb24ocil7cmV0dXJuIGVbdF1bMV1bcl18fHJ9LHAuY2FjaGU9e307dmFyIGw9clt0XT1uZXcgZi5Nb2R1bGUodCk7ZVt0XVswXS5jYWxsKGwuZXhwb3J0cyxwLGwsbC5leHBvcnRzLHRoaXMpfXJldHVybiByW3RdLmV4cG9ydHM7ZnVuY3Rpb24gcChlKXtyZXR1cm4gZihwLnJlc29sdmUoZSkpfX1mLmlzUGFyY2VsUmVxdWlyZT0hMCxmLk1vZHVsZT1mdW5jdGlvbihlKXt0aGlzLmlkPWUsdGhpcy5idW5kbGU9Zix0aGlzLmV4cG9ydHM9e319LGYubW9kdWxlcz1lLGYuY2FjaGU9cixmLnBhcmVudD1vLGYucmVnaXN0ZXI9ZnVuY3Rpb24ocix0KXtlW3JdPVtmdW5jdGlvbihlLHIpe3IuZXhwb3J0cz10fSx7fV19O2Zvcih2YXIgYz0wO2M8dC5sZW5ndGg7YysrKXRyeXtmKHRbY10pfWNhdGNoKGUpe2l8fChpPWUpfWlmKHQubGVuZ3RoKXt2YXIgbD1mKHRbdC5sZW5ndGgtMV0pOyJvYmplY3QiPT10eXBlb2YgZXhwb3J0cyYmInVuZGVmaW5lZCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bDoiZnVuY3Rpb24iPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBsfSk6biYmKHRoaXNbbl09bCl9aWYocGFyY2VsUmVxdWlyZT1mLGkpdGhyb3cgaTtyZXR1cm4gZn0oeyJZelB1IjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykgewp2YXIgZ2xvYmFsID0gYXJndW1lbnRzWzNdOwp2YXIgZT1hcmd1bWVudHNbM107T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pO3ZhciBvPXt9O2Z1bmN0aW9uIGkoKXtyZXR1cm4idW5kZWZpbmVkIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp2b2lkIDAhPT1lP2U6InVuZGVmaW5lZCIhPXR5cGVvZiBzZWxmP3NlbGY6InVuZGVmaW5lZCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PXRoaXM/dGhpczpvfWV4cG9ydHMuZ2V0R2xvYmFsVGhpcz1pOwp9LHt9XSwiUXJXZCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO2Z1bmN0aW9uIGUoZSl7dmFyIHQscj0hMTtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIG49W10sbz0wO288YXJndW1lbnRzLmxlbmd0aDtvKyspbltvXT1hcmd1bWVudHNbb107cmV0dXJuIHJ8fCh0PWUuYXBwbHkodm9pZCAwLG4pLHI9ITApLHR9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KSxleHBvcnRzLnRpbnlfc2luZ2xldG9uPWUsZXhwb3J0cy5kZWZhdWx0PWU7Cn0se31dLCJ5Wmd0IjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykgewoidXNlIHN0cmljdCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pLGV4cG9ydHMuREVGQVVMVF9MT0dfTEVWRUw9ImVycm9yIixleHBvcnRzLkRFRkFVTFRfTE9HR0VSX0tFWT0iIjsKfSx7fV0sIkZDTUUiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7CiJ1c2Ugc3RyaWN0IjtmdW5jdGlvbiBlKGUpe2Zvcih2YXIgciBpbiBlKWV4cG9ydHMuaGFzT3duUHJvcGVydHkocil8fChleHBvcnRzW3JdPWVbcl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KSxleHBvcnRzLkxJQj0iQG9mZmlybW8vcHJhY3RpY2FsLWxvZ2dlci1jb3JlIixleHBvcnRzLkxPR19MRVZFTF9UT19JTlRFR0VSPXtmYXRhbDoxLGVtZXJnOjIsYWxlcnQ6MTAsY3JpdDoyMCxlcnJvcjozMCx3YXJuaW5nOjQwLHdhcm46NDAsbm90aWNlOjQ1LGluZm86NTAsdmVyYm9zZTo3MCxsb2c6ODAsZGVidWc6ODEsdHJhY2U6OTAsc2lsbHk6MTAwfSxleHBvcnRzLkFMTF9MT0dfTEVWRUxTPU9iamVjdC5rZXlzKGV4cG9ydHMuTE9HX0xFVkVMX1RPX0lOVEVHRVIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZX0pLnNvcnQoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZXhwb3J0cy5MT0dfTEVWRUxfVE9fSU5URUdFUltlXS1leHBvcnRzLkxPR19MRVZFTF9UT19JTlRFR0VSW3JdfSksZXhwb3J0cy5MT0dfTEVWRUxfVE9fSFVNQU49ZXhwb3J0cy5BTExfTE9HX0xFVkVMUy5yZWR1Y2UoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZVtyXT17ZW06ImVtZXJnZW5jeSIsd2E6Indhcm4ifVtyLnNsaWNlKDAsMSldfHxyLGV9LHt9KSxlKHJlcXVpcmUoIi4vY29uc3RzLWJhc2UiKSk7Cn0seyIuL2NvbnN0cy1iYXNlIjoieVpndCJ9XSwiR3FRTiI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO3ZhciBlPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKGU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciByLG89MSx0PWFyZ3VtZW50cy5sZW5ndGg7bzx0O28rKylmb3IodmFyIG4gaW4gcj1hcmd1bWVudHNbb10pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJihlW25dPXJbbl0pO3JldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiByKGUpe3ZhciByLG8sdDtyZXR1cm4hISgobnVsbD09PShyPWUpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLm5hbWUpJiYobnVsbD09PShvPWUpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLm1lc3NhZ2UpJiYobnVsbD09PSh0PWUpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnN0YWNrKSl9ZnVuY3Rpb24gbyhvKXt2YXIgdCxuPVtdLHM9e30saT12b2lkIDA7QXJyYXkuZnJvbShvKS5mb3JFYWNoKGZ1bmN0aW9uKG8pe28mJihyKG8pP2l8fChpPW8pOighaSYmcihvLmVycikmJihpPW8uZXJyKSwib2JqZWN0IiE9dHlwZW9mIG8/bi5wdXNoKFN0cmluZyhvKSk6cz1lKGUoe30scyksbykpKX0pLCJzdHJpbmciIT10eXBlb2Ygcy5tZXNzYWdlfHxuLmxlbmd0aHx8KG4ucHVzaChzLm1lc3NhZ2UpLGRlbGV0ZSBzLm1lc3NhZ2UpO3ZhciBhPW4uam9pbigiICIpfHwobnVsbD09PSh0PWkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lm1lc3NhZ2UpfHwiKG5vIG1lc3NhZ2UpIjtyZXR1cm4gaT9zLmVycj1pOmRlbGV0ZSBzLmVycixbYSxzXX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywiX19lc01vZHVsZSIse3ZhbHVlOiEwfSksZXhwb3J0cy5sb29rc0xpa2VBbkVycm9yPXIsZXhwb3J0cy5ub3JtYWxpemVBcmd1bWVudHM9bzsKfSx7fV0sIklnUk8iOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7CiJ1c2Ugc3RyaWN0Ijt2YXIgZT10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihlPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgcix0PTEsbj1hcmd1bWVudHMubGVuZ3RoO3Q8bjt0KyspZm9yKHZhciBvIGluIHI9YXJndW1lbnRzW3RdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLG8pJiYoZVtvXT1yW29dKTtyZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0scj10aGlzJiZ0aGlzLl9fcmVzdHx8ZnVuY3Rpb24oZSxyKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmci5pbmRleE9mKG4pPDAmJih0W25dPWVbbl0pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxuLmxlbmd0aDtvKyspci5pbmRleE9mKG5bb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLG5bb10pJiYodFtuW29dXT1lW25bb11dKX1yZXR1cm4gdH07T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pO3ZhciB0PXJlcXVpcmUoIi4vY29uc3RzIiksbj1yZXF1aXJlKCIuL25vcm1hbGl6ZS1hcmdzIik7ZnVuY3Rpb24gbyhlKXtpZighdC5BTExfTE9HX0xFVkVMUy5pbmNsdWRlcyhlKSl0aHJvdyBuZXcgRXJyb3IoIlsiK3QuTElCKyddIE5vdCBhIHZhbGlkIGxvZyBsZXZlbDogIicrZSsnIiEnKX1mdW5jdGlvbiBpKGksbCl7dmFyIHU9dm9pZCAwPT09aT97fTppLGE9dS5uYW1lLHM9dm9pZCAwPT09YT90LkRFRkFVTFRfTE9HR0VSX0tFWTphLGM9dS5zdWdnZXN0ZWRMZXZlbCxmPXZvaWQgMD09PWM/dC5ERUZBVUxUX0xPR19MRVZFTDpjLHY9dS5mb3JjZWRMZXZlbCxMPXUuY29tbW9uRGV0YWlscyxwPXZvaWQgMD09PUw/e306TDt2b2lkIDA9PT1sJiYobD1jb25zb2xlLmxvZyk7dmFyIG09e25hbWU6cyxsZXZlbDp2fHxmLGNvbW1vbkRldGFpbHM6ZSh7fSxwKSxvdXRwdXRGbjpsfSxFPTEwMCxPPXQuQUxMX0xPR19MRVZFTFMucmVkdWNlKGZ1bmN0aW9uKGksbCl7cmV0dXJuIGlbbF09ZnVuY3Rpb24oaSx1KXtpZihmdW5jdGlvbihlKXtyZXR1cm4gbyhlKSx0LkxPR19MRVZFTF9UT19JTlRFR0VSW2VdPD1FfShsKSl7dmFyIGE9bi5ub3JtYWxpemVBcmd1bWVudHMoYXJndW1lbnRzKSxjPWFbMF0sZj1hWzFdO20ub3V0cHV0Rm4oZnVuY3Rpb24odCxuLG8pe3ZhciBpPW8uZXJyLGw9cihvLFsiZXJyIl0pLHU9e2xldmVsOnQsbmFtZTpzLG1zZzpuLHRpbWU6K25ldyBEYXRlLGRldGFpbHM6ZShlKHt9LG0uY29tbW9uRGV0YWlscyksbCl9O3JldHVybiBpJiYodS5lcnI9aSksdX0obCxjLGYpKX19LGl9LHtzZXRMZXZlbDpkLGdldExldmVsOl8sYWRkQ29tbW9uRGV0YWlsczpmdW5jdGlvbihyKXtpZihyLmVycil0aHJvdyBuZXcgRXJyb3IoIlsiK3QuTElCKyddIENhblwndCBzZXQgcmVzZXJ2ZWQgcHJvcGVydHkgImVyciIhJyk7bS5jb21tb25EZXRhaWxzPWUoZSh7fSxtLmNvbW1vbkRldGFpbHMpLHIpfSxncm91cDpmdW5jdGlvbigpe30sZ3JvdXBDb2xsYXBzZWQ6ZnVuY3Rpb24oKXt9LGdyb3VwRW5kOmZ1bmN0aW9uKCl7fX0pO2Z1bmN0aW9uIGQoZSl7byhlKSxtLmxldmVsPWUsRT10LkxPR19MRVZFTF9UT19JTlRFR0VSW2VdfWZ1bmN0aW9uIF8oKXtyZXR1cm4gbS5sZXZlbH1yZXR1cm4gZChfKCkpLE99ZXhwb3J0cy5jaGVja0xldmVsPW8sZXhwb3J0cy5jcmVhdGU9aTsKfSx7Ii4vY29uc3RzIjoiRkNNRSIsIi4vbm9ybWFsaXplLWFyZ3MiOiJHcVFOIn1dLCJCdGlCIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykgewoidXNlIHN0cmljdCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pOwp9LHt9XSwicUFITSI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO2Z1bmN0aW9uIGUoZSl7Zm9yKHZhciByIGluIGUpZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShyKXx8KGV4cG9ydHNbcl09ZVtyXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pO3ZhciByPXJlcXVpcmUoIi4vY29yZSIpO2V4cG9ydHMuY3JlYXRlTG9nZ2VyPXIuY3JlYXRlLGUocmVxdWlyZSgiQG9mZmlybW8vcHJhY3RpY2FsLWxvZ2dlci10eXBlcyIpKTt2YXIgTD1yZXF1aXJlKCIuL2NvbnN0cyIpO2V4cG9ydHMuQUxMX0xPR19MRVZFTFM9TC5BTExfTE9HX0xFVkVMUyxleHBvcnRzLkxPR19MRVZFTF9UT19JTlRFR0VSPUwuTE9HX0xFVkVMX1RPX0lOVEVHRVIsZXhwb3J0cy5MT0dfTEVWRUxfVE9fSFVNQU49TC5MT0dfTEVWRUxfVE9fSFVNQU4sZXhwb3J0cy5ERUZBVUxUX0xPR19MRVZFTD1MLkRFRkFVTFRfTE9HX0xFVkVMLGV4cG9ydHMuREVGQVVMVF9MT0dHRVJfS0VZPUwuREVGQVVMVF9MT0dHRVJfS0VZO3ZhciBFPXJlcXVpcmUoIi4vY29yZSIpO2V4cG9ydHMuY2hlY2tMZXZlbD1FLmNoZWNrTGV2ZWwsZShyZXF1aXJlKCIuL25vcm1hbGl6ZS1hcmdzIikpOwp9LHsiLi9jb3JlIjoiSWdSTyIsIkBvZmZpcm1vL3ByYWN0aWNhbC1sb2dnZXItdHlwZXMiOiJCdGlCIiwiLi9jb25zdHMiOiJGQ01FIiwiLi9ub3JtYWxpemUtYXJncyI6IkdxUU4ifV0sIkl0T2giOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7CiJ1c2Ugc3RyaWN0IjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywiX19lc01vZHVsZSIse3ZhbHVlOiEwfSk7dmFyIHI9cmVxdWlyZSgiQG9mZmlybW8vcHJhY3RpY2FsLWxvZ2dlci1jb3JlIik7ZXhwb3J0cy5MRVZFTF9UT19DT05TT0xFX01FVEhPRD17ZmF0YWw6ImVycm9yIixlbWVyZzoiZXJyb3IiLGFsZXJ0OiJlcnJvciIsY3JpdDoiZXJyb3IiLGVycm9yOiJlcnJvciIsd2FybmluZzoid2FybiIsd2Fybjoid2FybiIsbm90aWNlOiJpbmZvIixpbmZvOiJpbmZvIix2ZXJib3NlOiJpbmZvIixsb2c6ImxvZyIsZGVidWc6ImRlYnVnIix0cmFjZToiZGVidWciLHNpbGx5OiJkZWJ1ZyJ9O3ZhciBlPTU7ZnVuY3Rpb24gbyhvKXt2YXIgaT1yLkxPR19MRVZFTF9UT19IVU1BTltvXTtyZXR1cm4gaT0oaSsiICAgICAgICAgIikuc2xpY2UoMCxlKX1leHBvcnRzLnRvX3VuaWZvcm1fbGV2ZWw9bzsKfSx7IkBvZmZpcm1vL3ByYWN0aWNhbC1sb2dnZXItY29yZSI6InFBSE0ifV0sImZnNzQiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7CiJ1c2Ugc3RyaWN0Ijt2YXIgcj10aGlzJiZ0aGlzLl9fc3ByZWFkQXJyYXlzfHxmdW5jdGlvbigpe2Zvcih2YXIgcj0wLG89MCxlPWFyZ3VtZW50cy5sZW5ndGg7bzxlO28rKylyKz1hcmd1bWVudHNbb10ubGVuZ3RoO3ZhciB0PUFycmF5KHIpLG49MDtmb3Iobz0wO288ZTtvKyspZm9yKHZhciBhPWFyZ3VtZW50c1tvXSxzPTAsbD1hLmxlbmd0aDtzPGw7cysrLG4rKyl0W25dPWFbc107cmV0dXJuIHR9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgbz0iZm9udC1mYW1pbHk6ICIrWyItYXBwbGUtc3lzdGVtIiwiQmxpbmtNYWNTeXN0ZW1Gb250Iiwibm90byIsInJvYm90byIsInNhbnMtc2VyaWYiXS5qb2luKCIsICIpO2V4cG9ydHMuRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTD1vO3ZhciBlPSJmb250LWZhbWlseTogIitbJyJGaXJhIENvZGUiJywiTWVubG8iLCJDb25zb2xhcyIsIm1vbm9zcGFjZSJdLmpvaW4oIiwgIik7ZXhwb3J0cy5GT05UX0ZBTUlMWV9CRVRURVJfTU9OT1NQQUNFPWU7dmFyIHQ9e2ZhdGFsOiIiLGVtZXJnOiIiLGFsZXJ0OiIiLGNyaXQ6IiIsZXJyb3I6IiIsd2FybmluZzoiIix3YXJuOiIiLG5vdGljZToiY29sb3I6ICM2NTlBRDIiLGluZm86ImNvbG9yOiAjNjU5QUQyIix2ZXJib3NlOiJjb2xvcjogIzY1OUFEMiIsbG9nOiIiLGRlYnVnOiJjb2xvcjogIzlBQTJBQSIsdHJhY2U6ImNvbG9yOiAjOUFBMkFBIixzaWxseToiY29sb3I6ICM5QUEyQUEifTtmdW5jdGlvbiBuKG8sZSl7Zm9yKHZhciB0PVtdLG49MjtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0yXT1hcmd1bWVudHNbbl07dmFyIGE9b1swXSxzPW8uc2xpY2UoMSk7cmV0dXJuIHIoW2ErIiVjIitlXSxzLFt0LmpvaW4oIjsiKSsiOyJdKX1leHBvcnRzLkxFVkVMX1RPX0NPTE9SX1NUWUxFPXQsZXhwb3J0cy5hZGRfc3R5bGVkX3N0cmluZz1uOwp9LHt9XSwiYTcwaSI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgXz1yZXF1aXJlKCIuLi9jb21tb24iKSxPPXJlcXVpcmUoIi4vY29tbW9uIik7ZnVuY3Rpb24gZShfKXtyZXR1cm4iZXJyb3IiPT09X312YXIgTD0iZm9udC1zaXplOiAxMHB4IjtleHBvcnRzLnNpbms9ZnVuY3Rpb24oVCl7dmFyIHQ9VC5sZXZlbCxFPVQubmFtZSxyPVQubXNnLHM9VC5lcnIsbj1ULmRldGFpbHMsZD1fLkxFVkVMX1RPX0NPTlNPTEVfTUVUSE9EW3RdLGk9Y29uc29sZVtkXSxSPVsiIl07ZShkKXx8KFI9Ty5hZGRfc3R5bGVkX3N0cmluZyhSLCLilrciLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbdF0sImZvbnQtc2l6ZTogOHB4IixPLkZPTlRfRkFNSUxZX0JFVFRFUl9QUk9QT1JUSU9OQUwsIm1hcmdpbi1sZWZ0OiAuMzVlbSIsIm1hcmdpbi1yaWdodDogLjVlbSIpKSxSPU8uYWRkX3N0eWxlZF9zdHJpbmcoUiwiWyIsTy5MRVZFTF9UT19DT0xPUl9TVFlMRVt0XSxMLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCksUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsXy50b191bmlmb3JtX2xldmVsKHQpLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbdF0sTCxPLkZPTlRfRkFNSUxZX0JFVFRFUl9NT05PU1BBQ0UpLFI9Ty5hZGRfc3R5bGVkX3N0cmluZyhSLCJdICIsTy5MRVZFTF9UT19DT0xPUl9TVFlMRVt0XSxMLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCksUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsIiIsImZvbnQtc2l6ZTogdW5zZXQiKSxFJiYoUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsRSsiIOKAuiAiLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbdF0sTy5GT05UX0ZBTUlMWV9CRVRURVJfUFJPUE9SVElPTkFMKSk7dmFyIG89Uj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIscixPLkxFVkVMX1RPX0NPTE9SX1NUWUxFW3RdLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCk7T2JqZWN0LmtleXMobikubGVuZ3RoJiZvLnB1c2gobikscyYmby5wdXNoKHMpLGkuYXBwbHkodm9pZCAwLG8pfSxleHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5zaW5rOwp9LHsiLi4vY29tbW9uIjoiSXRPaCIsIi4vY29tbW9uIjoiZmc3NCJ9XSwiWFUzbyI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgXz1yZXF1aXJlKCIuLi9jb21tb24iKSxPPXJlcXVpcmUoIi4vY29tbW9uIik7ZnVuY3Rpb24gZShfKXtyZXR1cm4iZXJyb3IiPT09X3x8Indhcm4iPT09X312YXIgTD0iZm9udC1zaXplOiA4cHgiLHQ9ImZvbnQtc2l6ZTogMTFweCI7ZXhwb3J0cy5zaW5rPWZ1bmN0aW9uKFQpe3ZhciBFPVQubGV2ZWwscj1ULm5hbWUscz1ULm1zZyxuPVQuZXJyLGQ9VC5kZXRhaWxzLGk9Xy5MRVZFTF9UT19DT05TT0xFX01FVEhPRFtFXSxvPWNvbnNvbGVbaV0sUj1bIiJdO2UoaSl8fChSPU8uYWRkX3N0eWxlZF9zdHJpbmcoUiwi4pa3IixPLkxFVkVMX1RPX0NPTE9SX1NUWUxFW0VdLCJmb250LXNpemU6IDhweCIsTy5GT05UX0ZBTUlMWV9CRVRURVJfUFJPUE9SVElPTkFMLCJtYXJnaW4tbGVmdDogLjFlbSIsIm1hcmdpbi1yaWdodDogLjJlbSIpKSxSPU8uYWRkX3N0eWxlZF9zdHJpbmcoUiwiWyIsTy5MRVZFTF9UT19DT0xPUl9TVFlMRVtFXSxMLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCksUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsXy50b191bmlmb3JtX2xldmVsKEUpLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbRV0sTCxPLkZPTlRfRkFNSUxZX0JFVFRFUl9NT05PU1BBQ0UpLFI9Ty5hZGRfc3R5bGVkX3N0cmluZyhSLCJdICIsTy5MRVZFTF9UT19DT0xPUl9TVFlMRVtFXSxMLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCksUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsIiIsImZvbnQtc2l6ZTogdW5zZXQiKSxyJiYoUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIscisiIOKAuiAiLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbRV0sTy5GT05UX0ZBTUlMWV9CRVRURVJfUFJPUE9SVElPTkFMLHQpKTt2YXIgYT1SPU8uYWRkX3N0eWxlZF9zdHJpbmcoUixzLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbRV0sTy5GT05UX0ZBTUlMWV9CRVRURVJfUFJPUE9SVElPTkFMLHQpO09iamVjdC5rZXlzKGQpLmxlbmd0aCYmYS5wdXNoKGQpLG4mJmEucHVzaChuKSxvLmFwcGx5KHZvaWQgMCxhKX0sZXhwb3J0cy5kZWZhdWx0PWV4cG9ydHMuc2luazsKfSx7Ii4uL2NvbW1vbiI6Ikl0T2giLCIuL2NvbW1vbiI6ImZnNzQifV0sInlTcTIiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7CiJ1c2Ugc3RyaWN0IjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywiX19lc01vZHVsZSIse3ZhbHVlOiEwfSk7dmFyIF89cmVxdWlyZSgiLi4vY29tbW9uIiksTz1yZXF1aXJlKCIuL2NvbW1vbiIpO2Z1bmN0aW9uIGUoXyxPKXtyZXR1cm4gT3x8ImVycm9yIj09PV99dmFyIEw9ImZvbnQtc2l6ZTogOXB4IjtleHBvcnRzLnNpbms9ZnVuY3Rpb24oVCl7dmFyIHQ9VC5sZXZlbCxFPVQubmFtZSxyPVQubXNnLHM9VC5lcnIsbj1ULmRldGFpbHMsZD1fLkxFVkVMX1RPX0NPTlNPTEVfTUVUSE9EW3RdLGk9Y29uc29sZVtkXSxSPVsiIl07ZShkLG4pfHwoUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsIuKWtyIsTy5MRVZFTF9UT19DT0xPUl9TVFlMRVt0XSwiZm9udC1zaXplOiAxMHB4IixPLkZPTlRfRkFNSUxZX0JFVFRFUl9QUk9QT1JUSU9OQUwsIm1hcmdpbi1sZWZ0OiAuMTVlbSIsIm1hcmdpbi1yaWdodDogLjRlbSIpKSxSPU8uYWRkX3N0eWxlZF9zdHJpbmcoUiwiWyIsTy5MRVZFTF9UT19DT0xPUl9TVFlMRVt0XSxMLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCksUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsXy50b191bmlmb3JtX2xldmVsKHQpLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbdF0sTCxPLkZPTlRfRkFNSUxZX0JFVFRFUl9NT05PU1BBQ0UpLFI9Ty5hZGRfc3R5bGVkX3N0cmluZyhSLCJdICIsTy5MRVZFTF9UT19DT0xPUl9TVFlMRVt0XSxMLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCksUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsIiIsImZvbnQtc2l6ZTogdW5zZXQiKSxFJiYoUj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIsRSsiIOKAuiAiLE8uTEVWRUxfVE9fQ09MT1JfU1RZTEVbdF0sTy5GT05UX0ZBTUlMWV9CRVRURVJfUFJPUE9SVElPTkFMKSk7dmFyIG89Uj1PLmFkZF9zdHlsZWRfc3RyaW5nKFIscixPLkxFVkVMX1RPX0NPTE9SX1NUWUxFW3RdLE8uRk9OVF9GQU1JTFlfQkVUVEVSX1BST1BPUlRJT05BTCk7T2JqZWN0LmtleXMobikubGVuZ3RoJiZvLnB1c2gobikscyYmby5wdXNoKHMpLGkuYXBwbHkodm9pZCAwLG8pfSxleHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5zaW5rOwp9LHsiLi4vY29tbW9uIjoiSXRPaCIsIi4vY29tbW9uIjoiZmc3NCJ9XSwiZWJVaSI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgZT1yZXF1aXJlKCIuL2NvbW1vbiIpO2Z1bmN0aW9uIHIocil7cmV0dXJuIHZvaWQgMD09PXImJihyPXt9KSxmdW5jdGlvbihyKXt2YXIgbz1yLmxldmVsLHQ9ci5uYW1lLHM9ci5tc2csdT1yLmVycixsPXIuZGV0YWlscyxuPWUuTEVWRUxfVE9fQ09OU09MRV9NRVRIT0Rbb10saT1jb25zb2xlW25dLHA9WyJbIixlLnRvX3VuaWZvcm1fbGV2ZWwobyksIl0gIl07dCYmcC5wdXNoKHQrIiDigLogIikscC5wdXNoKHMpO3ZhciBhPXA7T2JqZWN0LmtleXMobCkubGVuZ3RoJiZhLnB1c2gobCksdSYmYS5wdXNoKHUpLGkuYXBwbHkodm9pZCAwLGEpfX1leHBvcnRzLmRlZmF1bHQ9cjsKfSx7Ii4vY29tbW9uIjoiSXRPaCJ9XSwianRLNyI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO3ZhciBlPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgcj1lKHJlcXVpcmUoIi4vYWR2YW5jZWQvZmlyZWZveCIpKSx0PWUocmVxdWlyZSgiLi9hZHZhbmNlZC9jaHJvbWl1bSIpKSxpPWUocmVxdWlyZSgiLi9hZHZhbmNlZC9zYWZhcmkiKSksdT1lKHJlcXVpcmUoIi4vbm8tY3NzIikpO2Z1bmN0aW9uIGEoKXt0cnl7aWYod2luZG93Lkluc3RhbGxUcmlnZ2VyKXJldHVybiJmaXJlZm94IjtpZih3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKXJldHVybiJzYWZhcmkiO2lmKHdpbmRvdy5jaHJvbWUpcmV0dXJuImNocm9taXVtIn1jYXRjaChlKXt9cmV0dXJuIm90aGVyIn1mdW5jdGlvbiBuKGUpe2lmKHZvaWQgMD09PWUmJihlPXt9KSwhMT09PWUudXNlQ3NzKXJldHVybiB1LmRlZmF1bHQoZSk7c3dpdGNoKGUuZXhwbGljaXRCcm93c2VyfHxhKCkpe2Nhc2UiZmlyZWZveCI6cmV0dXJuIHIuZGVmYXVsdDtjYXNlInNhZmFyaSI6cmV0dXJuIGkuZGVmYXVsdDtjYXNlImNocm9taXVtIjpyZXR1cm4gdC5kZWZhdWx0O2RlZmF1bHQ6cmV0dXJuIHUuZGVmYXVsdChlKX19ZXhwb3J0cy5jcmVhdGU9bjsKfSx7Ii4vYWR2YW5jZWQvZmlyZWZveCI6ImE3MGkiLCIuL2FkdmFuY2VkL2Nocm9taXVtIjoiWFUzbyIsIi4vYWR2YW5jZWQvc2FmYXJpIjoieVNxMiIsIi4vbm8tY3NzIjoiZWJVaSJ9XSwiUXF6eiI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgbz1bImRlYnVnIiwibG9nIiwiaW5mbyIsIndhcm4iLCJlcnJvciIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCJdLGU9ITE7ZnVuY3Rpb24gbChsKXt2YXIgcj12b2lkIDA9PT1sP3t9Omwsbj1yLnVuY29sbGFwc2VfbGV2ZWwscD12b2lkIDA9PT1uPyJ3YXJuIjpuLHQ9ci5sYXp5LHU9dm9pZCAwPT09dHx8dCxhPXIub3JpZ2luYWxfY29uc29sZSxkPXZvaWQgMD09PWE/Y29uc29sZTphO2UmJmNvbnNvbGUubG9nKCJpbnN0YWxsIix7dW5jb2xsYXBzZV9sZXZlbDpwLGxhenk6dX0pO3ZhciBnPVtdLGk9ITEscz17fTtmdW5jdGlvbiBmKCl7Zm9yKHZhciBvPVtdLGw9MDtsPGFyZ3VtZW50cy5sZW5ndGg7bCsrKW9bbF09YXJndW1lbnRzW2xdO2UmJnMubG9nKCI+Pj4gYmVmb3JlIGdyb3VwRW5kIix7bGF6eTp1LGRlcHRoOmcubGVuZ3RofSwnIicrb1swXSsnIicpO3ZhciByPWcucG9wKCk7ciYmci5pc19lZmZlY3RpdmUmJihpPSEwLHMuZ3JvdXBFbmQuYXBwbHkocyxvKSxpPSExKSxlJiZzLmxvZygiPDw8IGFmdGVyIGdyb3VwRW5kIix7bGF6eTp1LGRlcHRoOmcubGVuZ3RofSl9ZnVuY3Rpb24gYyhvLGwpe2Zvcih2YXIgcj1bXSxuPTI7bjxhcmd1bWVudHMubGVuZ3RoO24rKylyW24tMl09YXJndW1lbnRzW25dO2lmKGkpcmV0dXJuIG8uYXBwbHkodm9pZCAwLHIpO2lmKGUmJm8oIj4+PiBiZWZvcmUgb3V0cHV0Iix7ZGVwdGg6Zy5sZW5ndGh9LCciJytyWzBdKyciJyksZy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3ZhciBuPXIuaXNfZWZmZWN0aXZlLHA9ci5pc19kZXBsb3llZCx0PXIucGFyYW1zO258fChlJiZvKCItLS0gbGF6eSBjYWxsIiksbHx8cD8oaT0hMCxzLmdyb3VwLmFwcGx5KHMsdCksaT0hMSxyLmlzX2RlcGxveWVkPSEwKTooaT0hMCxzLmdyb3VwQ29sbGFwc2VkLmFwcGx5KHMsdCksaT0hMSxyLmlzX2RlcGxveWVkPSExKSxyLmlzX2VmZmVjdGl2ZT0hMCl9KSxlJiZvKCItLS0gb3V0cHV0IiksbClmb3IodmFyIHA9Zy5maW5kSW5kZXgoZnVuY3Rpb24obyl7cmV0dXJuIW8uaXNfZGVwbG95ZWR9KTtwPj0wJiZnLmxlbmd0aCYmZy5sZW5ndGg+cDspZigpLHMuZGVidWcoIihmb3JjZWQgYnJlYWsgb3V0IG9mIGdyb3VwIOKGkSBkdWUgdG8gZXJyb3IpIik7ZSYmbygiLS0tIG91dHB1dCIpLG8uYXBwbHkodm9pZCAwLHIpLGUmJm8oIjw8PGFmdGVyIG91dHB1dCIse2RlcHRoOmcubGVuZ3RofSl9by5mb3JFYWNoKGZ1bmN0aW9uKG8pe3Nbb109ZFtvXX0pLGNvbnNvbGUuZ3JvdXA9ZnVuY3Rpb24oKXtmb3IodmFyIG89W10sbD0wO2w8YXJndW1lbnRzLmxlbmd0aDtsKyspb1tsXT1hcmd1bWVudHNbbF07ZSYmcy5sb2coIj4+PiBiZWZvcmUgZ3JvdXAiLHtsYXp5OnUsZGVwdGg6Zy5sZW5ndGh9LCciJytvWzBdKyciJyksZy5wdXNoKHtwYXJhbXM6byxpc19kZXBsb3llZDohMCxpc19lZmZlY3RpdmU6IXV9KSx1fHwoaT0hMCxzLmdyb3VwLmFwcGx5KHMsbyksaT0hMSksZSYmcy5sb2coIjw8PCBhZnRlciBncm91cCIse2RlcHRoOmcubGVuZ3RofSl9LGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ9ZnVuY3Rpb24oKXtmb3IodmFyIG89W10sbD0wO2w8YXJndW1lbnRzLmxlbmd0aDtsKyspb1tsXT1hcmd1bWVudHNbbF07ZSYmcy5sb2coIj4+PiBiZWZvcmUgZ3JvdXBDb2xsYXBzZWQiLHtsYXp5OnUsZGVwdGg6Zy5sZW5ndGh9LCciJytvWzBdKyciJyksZy5wdXNoKHtwYXJhbXM6byxpc19kZXBsb3llZDohMSxpc19lZmZlY3RpdmU6IXV9KSx1fHwoaT0hMCxzLmdyb3VwQ29sbGFwc2VkLmFwcGx5KHMsbyksaT0hMSksZSYmcy5sb2coImFmdGVyIGdyb3VwQ29sbGFwc2VkIix7ZGVwdGg6Zy5sZW5ndGh9KX0sY29uc29sZS5ncm91cEVuZD1mLGNvbnNvbGUuZGVidWc9Yy5iaW5kKG51bGwscy5kZWJ1ZywhMSksY29uc29sZS5sb2c9Yy5iaW5kKG51bGwscy5sb2csITEpLGNvbnNvbGUuaW5mbz1jLmJpbmQobnVsbCxzLmluZm8sITEpLGNvbnNvbGUud2Fybj1jLmJpbmQobnVsbCxzLndhcm4sIndhcm4iPT09cCksY29uc29sZS5lcnJvcj1jLmJpbmQobnVsbCxzLmVycm9yLCEwKX1leHBvcnRzLmltcHJvdmVfY29uc29sZV9ncm91cHM9bCxleHBvcnRzLmRlZmF1bHQ9bDsKfSx7fV0sIlFHUGYiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7CiJ1c2Ugc3RyaWN0Ijt2YXIgcj10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihyPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHIpe2Zvcih2YXIgZSxvPTEsdD1hcmd1bWVudHMubGVuZ3RoO288dDtvKyspZm9yKHZhciBpIGluIGU9YXJndW1lbnRzW29dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiYocltpXT1lW2ldKTtyZXR1cm4gcn0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07ZnVuY3Rpb24gZShyKXtmb3IodmFyIGUgaW4gcilleHBvcnRzLmhhc093blByb3BlcnR5KGUpfHwoZXhwb3J0c1tlXT1yW2VdKX12YXIgbz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24ocil7cmV0dXJuIHImJnIuX19lc01vZHVsZT9yOntkZWZhdWx0OnJ9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywiX19lc01vZHVsZSIse3ZhbHVlOiEwfSk7dmFyIHQ9byhyZXF1aXJlKCJAb2ZmaXJtby90aW55LXNpbmdsZXRvbiIpKSxpPXJlcXVpcmUoIkBvZmZpcm1vL3ByYWN0aWNhbC1sb2dnZXItY29yZSIpLG49cmVxdWlyZSgiLi9zaW5rcyIpLHM9byhyZXF1aXJlKCIuL2JldHRlci1jb25zb2xlLWdyb3Vwcy9wcmFjdGljYWwtbG9nZ2VyIikpLHU9Y29uc29sZSxhPXQuZGVmYXVsdChmdW5jdGlvbihyKXtyJiZzLmRlZmF1bHQoKX0pO2Z1bmN0aW9uIHAoZSl7dmFyIG8sdDt2b2lkIDA9PT1lJiYoZT17fSksYSghMSE9PShudWxsPT09KG89ZS5zaW5rT3B0aW9ucyl8fHZvaWQgMD09PW8/dm9pZCAwOm8uYmV0dGVyR3JvdXBzKSk7dmFyIHM9KG51bGw9PT0odD1lLnNpbmtPcHRpb25zKXx8dm9pZCAwPT09dD92b2lkIDA6dC5zaW5rKXx8bi5jcmVhdGUoZS5zaW5rT3B0aW9ucykscD11Lmdyb3VwLGw9dS5ncm91cENvbGxhcHNlZCxjPXUuZ3JvdXBFbmQ7cmV0dXJuIHIocih7fSxpLmNyZWF0ZUxvZ2dlcihlLHMpKSx7Z3JvdXA6cCxncm91cENvbGxhcHNlZDpsLGdyb3VwRW5kOmN9KX1leHBvcnRzLmNyZWF0ZUxvZ2dlcj1wLGUocmVxdWlyZSgiQG9mZmlybW8vcHJhY3RpY2FsLWxvZ2dlci10eXBlcyIpKTt2YXIgbD1yZXF1aXJlKCJAb2ZmaXJtby9wcmFjdGljYWwtbG9nZ2VyLWNvcmUiKTtleHBvcnRzLkRFRkFVTFRfTE9HX0xFVkVMPWwuREVGQVVMVF9MT0dfTEVWRUwsZXhwb3J0cy5ERUZBVUxUX0xPR0dFUl9LRVk9bC5ERUZBVUxUX0xPR0dFUl9LRVk7Cn0seyJAb2ZmaXJtby90aW55LXNpbmdsZXRvbiI6IlFyV2QiLCJAb2ZmaXJtby9wcmFjdGljYWwtbG9nZ2VyLWNvcmUiOiJxQUhNIiwiLi9zaW5rcyI6Imp0SzciLCIuL2JldHRlci1jb25zb2xlLWdyb3Vwcy9wcmFjdGljYWwtbG9nZ2VyIjoiUXF6eiIsIkBvZmZpcm1vL3ByYWN0aWNhbC1sb2dnZXItdHlwZXMiOiJCdGlCIn1dLCJvdGU3IjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykgewoidXNlIHN0cmljdCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pLGV4cG9ydHMuTFNfUk9PVD0i8J+boFVEQSI7Cn0se31dLCJMeWpoIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykgewoidXNlIHN0cmljdCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIl9fZXNNb2R1bGUiLHt2YWx1ZTohMH0pO3ZhciBlPXJlcXVpcmUoIi4uL2NvbnN0cyIpLHI9cmVxdWlyZSgiLi4vY29uc3RzIik7ZnVuY3Rpb24gdChlKXtyZXR1cm4ibG9nZ2VyLiIrKGV8fCJkZWZhdWx0IikrIi5sb2dMZXZlbCJ9ZnVuY3Rpb24gbyhyKXtyZXR1cm4gZS5MU19ST09UKyIub3ZlcnJpZGUuIityfWV4cG9ydHMuTFNfUk9PVD1yLkxTX1JPT1QsZXhwb3J0cy5nZXRPdmVycmlkZUtleUZvckxvZ2dlcj10LGV4cG9ydHMuZ2V0TFNLZXlGb3JPdmVycmlkZT1vOwp9LHsiLi4vY29uc3RzIjoib3RlNyJ9XSwiZlJ0SyI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO3ZhciBlPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKGU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciByLHQ9MSxvPWFyZ3VtZW50cy5sZW5ndGg7dDxvO3QrKylmb3IodmFyIG4gaW4gcj1hcmd1bWVudHNbdF0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJihlW25dPXJbbl0pO3JldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywiX19lc01vZHVsZSIse3ZhbHVlOiEwfSk7dmFyIHI9cmVxdWlyZSgiQG9mZmlybW8vcHJhY3RpY2FsLWxvZ2dlci1icm93c2VyIiksdD1yZXF1aXJlKCIuL2tleXMiKSxvPXQuTFNfUk9PVDtmdW5jdGlvbiBuKCl7dmFyIG4sYT17fSxpPXt9LHY9e30sdT17fSxjPShuPW8sci5jcmVhdGVMb2dnZXIoe25hbWU6bixzdWdnZXN0ZWRMZXZlbDoiZmF0YWwifSkpO2Z1bmN0aW9uIGwoZSl7dHJ5e3ZhciByPXQuZ2V0TFNLZXlGb3JPdmVycmlkZShlKTtyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocil9Y2F0Y2gobyl7cmV0dXJuIGMud2Fybign8J+UtCBlcnJvciByZWFkaW5nIExTIGZvciBvdmVycmlkZSAiJytlKyciIScse2VycjpvfSksbnVsbH19dmFyIGc9bCgiX1VXREFfaW50ZXJuYWwiKTtmdW5jdGlvbiBzKGUscil7dHJ5e3ZhciB0PWZ1bmN0aW9uKGUpe2lmKCF1W2VdKXt1W2VdPXtpc09uOiExLHZhbHVlOnZvaWQgMH07dmFyIHI9bChlKTtpZihyKXRyeXt1W2VdLmlzT249ITA7dmFyIHQ9InVuZGVmaW5lZCI9PT1yP3ZvaWQgMDpKU09OLnBhcnNlKHIpO3VbZV0udmFsdWU9dCxjLmxvZygnIPCflLUgb3ZlcnJpZGVuICInK2UrJyInLHt2YWx1ZTp0fSl9Y2F0Y2gobyl7Yy53YXJuKCfwn5S0IGZhaWxlZCB0byBvdmVycmlkZSAiJytlKyciIScse2JhZFZhbHVlOnIsZXJyOm99KX19cmV0dXJuIHVbZV19KGUpO2lmKHQuaXNPbilyZXR1cm4gdC52YWx1ZX1jYXRjaChvKXtjLmVycm9yKCJvdmVycmlkZUhvb2soKTogZXJyb3IgcmV0cmlldmluZyBvdmVycmlkZSEiLHtrZXk6ZSxlcnI6b30pfXJldHVybiByfXJldHVybiBnJiZjLnNldExldmVsKGcpLHtnZXRMb2dnZXI6ZnVuY3Rpb24obyl7dm9pZCAwPT09byYmKG89e30pO3ZhciBuPW8ubmFtZXx8ci5ERUZBVUxUX0xPR0dFUl9LRVk7aWYoIWFbbl0pe3RyeXt2YXIgaT10LmdldE92ZXJyaWRlS2V5Rm9yTG9nZ2VyKG4pOyFvLmZvcmNlZExldmVsJiZsKGkpJiYobz1lKGUoe30sbykse2ZvcmNlZExldmVsOnMoaSxvLnN1Z2dlc3RlZExldmVsfHxyLkRFRkFVTFRfTE9HX0xFVkVMKX0pKX1jYXRjaCh2KXtjLmVycm9yKCJnZXRMb2dnZXIoKTogZXJyb3Igb3ZlcnJpZGluZyB0aGUgbGV2ZWwhIix7bmFtZTpuLGVycjp2fSl9YVtuXT1yLmNyZWF0ZUxvZ2dlcihvKX1yZXR1cm4gYVtuXX0sZXhwb3NlSW50ZXJuYWw6ZnVuY3Rpb24oZSxyKXt0cnl7dmFyIHQ9ZS5zcGxpdCgiLiIpLG49dC5sZW5ndGgtMSxhPXY7dC5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7YVtlXT1hW2VdfHwodD09PW4/cjp7fSksYT1hW2VdfSl9Y2F0Y2goaSl7Yy5lcnJvcigiWyIrbysiXSBleHBvc2VJbnRlcm5hbCgpOiBlcnJvciBleHBvc2luZyEiLHtwYXRoOmUsZXJyOml9KX19LG92ZXJyaWRlSG9vazpzLGFkZERlYnVnQ29tbWFuZDpmdW5jdGlvbihlLHIpe2lbZV09cn0sXzp7ZXhwb3NlZDp2LG92ZXJyaWRlczp1fX19ZXhwb3J0cy5kZWZhdWx0PW47Cn0seyJAb2ZmaXJtby9wcmFjdGljYWwtbG9nZ2VyLWJyb3dzZXIiOiJRR1BmIiwiLi9rZXlzIjoiTHlqaCJ9XSwiYjhENCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KTt2YXIgZT1yZXF1aXJlKCJAb2ZmaXJtby9wcmFjdGljYWwtbG9nZ2VyLXR5cGVzIik7ZXhwb3J0cy5Mb2dnZXI9ZS5Mb2dnZXIsZXhwb3J0cy5Mb2dnZXJDcmVhdGlvblBhcmFtcz1lLkxvZ2dlckNyZWF0aW9uUGFyYW1zOwp9LHsiQG9mZmlybW8vcHJhY3RpY2FsLWxvZ2dlci10eXBlcyI6IkJ0aUIifV0sInRXNUsiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7CiJ1c2Ugc3RyaWN0IjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywiX19lc01vZHVsZSIse3ZhbHVlOiEwfSk7dmFyIGU9cmVxdWlyZSgiLi92MSIpO2V4cG9ydHMuRGVidWdBcGlWMT1lLkRlYnVnQXBpO3ZhciByPXJlcXVpcmUoIkBvZmZpcm1vL3ByYWN0aWNhbC1sb2dnZXItdHlwZXMiKTtleHBvcnRzLkxvZ2dlcj1yLkxvZ2dlcixleHBvcnRzLkxvZ2dlckNyZWF0aW9uUGFyYW1zPXIuTG9nZ2VyQ3JlYXRpb25QYXJhbXM7Cn0seyIuL3YxIjoiYjhENCIsIkBvZmZpcm1vL3ByYWN0aWNhbC1sb2dnZXItdHlwZXMiOiJCdGlCIn1dLCJWanU5IjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykgewoidXNlIHN0cmljdCI7ZnVuY3Rpb24gZShlKXtmb3IodmFyIHIgaW4gZSlleHBvcnRzLmhhc093blByb3BlcnR5KHIpfHwoZXhwb3J0c1tyXT1lW3JdKX12YXIgcj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywiX19lc01vZHVsZSIse3ZhbHVlOiEwfSk7dmFyIG89cmVxdWlyZSgiQG9mZmlybW8vZ2xvYmFsdGhpcy1wb255ZmlsbCIpLHQ9cihyZXF1aXJlKCIuL3YxIikpO2V4cG9ydHMuY3JlYXRlVjE9dC5kZWZhdWx0O3ZhciBhPW8uZ2V0R2xvYmFsVGhpcygpO2V4cG9ydHMuZ2xvYmFsVGhpcz1hLGEuX2RlYnVnPWEuX2RlYnVnfHx7fTt2YXIgaT1hLl9kZWJ1ZztpLnYxPWkudjF8fHQuZGVmYXVsdCgpO3ZhciBzPWkudjEsdT1zLmdldExvZ2dlcixkPXMuZXhwb3NlSW50ZXJuYWwsbD1zLm92ZXJyaWRlSG9vayxuPXMuYWRkRGVidWdDb21tYW5kO2V4cG9ydHMuZ2V0TG9nZ2VyPXUsZXhwb3J0cy5leHBvc2VJbnRlcm5hbD1kLGV4cG9ydHMub3ZlcnJpZGVIb29rPWwsZXhwb3J0cy5hZGREZWJ1Z0NvbW1hbmQ9bixlKHJlcXVpcmUoIkBvZmZpcm1vL3VuaXZlcnNhbC1kZWJ1Zy1hcGktaW50ZXJmYWNlIikpOwp9LHsiQG9mZmlybW8vZ2xvYmFsdGhpcy1wb255ZmlsbCI6Ill6UHUiLCIuL3YxIjoiZlJ0SyIsIkBvZmZpcm1vL3VuaXZlcnNhbC1kZWJ1Zy1hcGktaW50ZXJmYWNlIjoidFc1SyJ9XSwieklTeiI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHsKInVzZSBzdHJpY3QiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCJfX2VzTW9kdWxlIix7dmFsdWU6ITB9KSxyZXF1aXJlKCJAb2ZmaXJtby91bml2ZXJzYWwtZGVidWctYXBpLWJyb3dzZXIiKTsKfSx7IkBvZmZpcm1vL3VuaXZlcnNhbC1kZWJ1Zy1hcGktYnJvd3NlciI6IlZqdTkifV19LHt9LFsieklTeiJdLCBudWxsKQ==';
exports.default = lib;
},{}]},{},["HEkX"], null)
//# sourceMappingURL=/content-scripts/lib-to-inject-1.js.map