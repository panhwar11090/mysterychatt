"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/secure-json-parse";
exports.ids = ["vendor-chunks/secure-json-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/secure-json-parse/index.js":
/*!*************************************************!*\
  !*** ./node_modules/secure-json-parse/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\nconst hasBuffer = typeof Buffer !== 'undefined'\nconst suspectProtoRx = /\"(?:_|\\\\u005[Ff])(?:_|\\\\u005[Ff])(?:p|\\\\u0070)(?:r|\\\\u0072)(?:o|\\\\u006[Ff])(?:t|\\\\u0074)(?:o|\\\\u006[Ff])(?:_|\\\\u005[Ff])(?:_|\\\\u005[Ff])\"\\s*:/\nconst suspectConstructorRx = /\"(?:c|\\\\u0063)(?:o|\\\\u006[Ff])(?:n|\\\\u006[Ee])(?:s|\\\\u0073)(?:t|\\\\u0074)(?:r|\\\\u0072)(?:u|\\\\u0075)(?:c|\\\\u0063)(?:t|\\\\u0074)(?:o|\\\\u006[Ff])(?:r|\\\\u0072)\"\\s*:/\n\nfunction _parse (text, reviver, options) {\n  // Normalize arguments\n  if (options == null) {\n    if (reviver !== null && typeof reviver === 'object') {\n      options = reviver\n      reviver = undefined\n    }\n  }\n\n  if (hasBuffer && Buffer.isBuffer(text)) {\n    text = text.toString()\n  }\n\n  // BOM checker\n  if (text && text.charCodeAt(0) === 0xFEFF) {\n    text = text.slice(1)\n  }\n\n  // Parse normally, allowing exceptions\n  const obj = JSON.parse(text, reviver)\n\n  // Ignore null and non-objects\n  if (obj === null || typeof obj !== 'object') {\n    return obj\n  }\n\n  const protoAction = (options && options.protoAction) || 'error'\n  const constructorAction = (options && options.constructorAction) || 'error'\n\n  // options: 'error' (default) / 'remove' / 'ignore'\n  if (protoAction === 'ignore' && constructorAction === 'ignore') {\n    return obj\n  }\n\n  if (protoAction !== 'ignore' && constructorAction !== 'ignore') {\n    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {\n      return obj\n    }\n  } else if (protoAction !== 'ignore' && constructorAction === 'ignore') {\n    if (suspectProtoRx.test(text) === false) {\n      return obj\n    }\n  } else {\n    if (suspectConstructorRx.test(text) === false) {\n      return obj\n    }\n  }\n\n  // Scan result for proto keys\n  return filter(obj, { protoAction, constructorAction, safe: options && options.safe })\n}\n\nfunction filter (obj, { protoAction = 'error', constructorAction = 'error', safe } = {}) {\n  let next = [obj]\n\n  while (next.length) {\n    const nodes = next\n    next = []\n\n    for (const node of nodes) {\n      if (protoAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, '__proto__')) { // Avoid calling node.hasOwnProperty directly\n        if (safe === true) {\n          return null\n        } else if (protoAction === 'error') {\n          throw new SyntaxError('Object contains forbidden prototype property')\n        }\n\n        delete node.__proto__ // eslint-disable-line no-proto\n      }\n\n      if (constructorAction !== 'ignore' &&\n          Object.prototype.hasOwnProperty.call(node, 'constructor') &&\n          Object.prototype.hasOwnProperty.call(node.constructor, 'prototype')) { // Avoid calling node.hasOwnProperty directly\n        if (safe === true) {\n          return null\n        } else if (constructorAction === 'error') {\n          throw new SyntaxError('Object contains forbidden prototype property')\n        }\n\n        delete node.constructor\n      }\n\n      for (const key in node) {\n        const value = node[key]\n        if (value && typeof value === 'object') {\n          next.push(value)\n        }\n      }\n    }\n  }\n  return obj\n}\n\nfunction parse (text, reviver, options) {\n  const stackTraceLimit = Error.stackTraceLimit\n  Error.stackTraceLimit = 0\n  try {\n    return _parse(text, reviver, options)\n  } finally {\n    Error.stackTraceLimit = stackTraceLimit\n  }\n}\n\nfunction safeParse (text, reviver) {\n  const stackTraceLimit = Error.stackTraceLimit\n  Error.stackTraceLimit = 0\n  try {\n    return _parse(text, reviver, { safe: true })\n  } catch (_e) {\n    return null\n  } finally {\n    Error.stackTraceLimit = stackTraceLimit\n  }\n}\n\nmodule.exports = parse\nmodule.exports[\"default\"] = parse\nmodule.exports.parse = parse\nmodule.exports.safeParse = safeParse\nmodule.exports.scan = filter\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2VjdXJlLWpzb24tcGFyc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsK0RBQStEO0FBQ3RGOztBQUVBLHdCQUF3QiwyREFBMkQsSUFBSTtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpR0FBaUc7QUFDakc7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0cnljaGF0YXBwLy4vbm9kZV9tb2R1bGVzL3NlY3VyZS1qc29uLXBhcnNlL2luZGV4LmpzPzY3M2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGhhc0J1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnXG5jb25zdCBzdXNwZWN0UHJvdG9SeCA9IC9cIig/Ol98XFxcXHUwMDVbRmZdKSg/Ol98XFxcXHUwMDVbRmZdKSg/OnB8XFxcXHUwMDcwKSg/OnJ8XFxcXHUwMDcyKSg/Om98XFxcXHUwMDZbRmZdKSg/OnR8XFxcXHUwMDc0KSg/Om98XFxcXHUwMDZbRmZdKSg/Ol98XFxcXHUwMDVbRmZdKSg/Ol98XFxcXHUwMDVbRmZdKVwiXFxzKjovXG5jb25zdCBzdXNwZWN0Q29uc3RydWN0b3JSeCA9IC9cIig/OmN8XFxcXHUwMDYzKSg/Om98XFxcXHUwMDZbRmZdKSg/Om58XFxcXHUwMDZbRWVdKSg/OnN8XFxcXHUwMDczKSg/OnR8XFxcXHUwMDc0KSg/OnJ8XFxcXHUwMDcyKSg/OnV8XFxcXHUwMDc1KSg/OmN8XFxcXHUwMDYzKSg/OnR8XFxcXHUwMDc0KSg/Om98XFxcXHUwMDZbRmZdKSg/OnJ8XFxcXHUwMDcyKVwiXFxzKjovXG5cbmZ1bmN0aW9uIF9wYXJzZSAodGV4dCwgcmV2aXZlciwgb3B0aW9ucykge1xuICAvLyBOb3JtYWxpemUgYXJndW1lbnRzXG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBpZiAocmV2aXZlciAhPT0gbnVsbCAmJiB0eXBlb2YgcmV2aXZlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSByZXZpdmVyXG4gICAgICByZXZpdmVyID0gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0J1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIodGV4dCkpIHtcbiAgICB0ZXh0ID0gdGV4dC50b1N0cmluZygpXG4gIH1cblxuICAvLyBCT00gY2hlY2tlclxuICBpZiAodGV4dCAmJiB0ZXh0LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIHRleHQgPSB0ZXh0LnNsaWNlKDEpXG4gIH1cblxuICAvLyBQYXJzZSBub3JtYWxseSwgYWxsb3dpbmcgZXhjZXB0aW9uc1xuICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRleHQsIHJldml2ZXIpXG5cbiAgLy8gSWdub3JlIG51bGwgYW5kIG5vbi1vYmplY3RzXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBjb25zdCBwcm90b0FjdGlvbiA9IChvcHRpb25zICYmIG9wdGlvbnMucHJvdG9BY3Rpb24pIHx8ICdlcnJvcidcbiAgY29uc3QgY29uc3RydWN0b3JBY3Rpb24gPSAob3B0aW9ucyAmJiBvcHRpb25zLmNvbnN0cnVjdG9yQWN0aW9uKSB8fCAnZXJyb3InXG5cbiAgLy8gb3B0aW9uczogJ2Vycm9yJyAoZGVmYXVsdCkgLyAncmVtb3ZlJyAvICdpZ25vcmUnXG4gIGlmIChwcm90b0FjdGlvbiA9PT0gJ2lnbm9yZScgJiYgY29uc3RydWN0b3JBY3Rpb24gPT09ICdpZ25vcmUnKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgaWYgKHByb3RvQWN0aW9uICE9PSAnaWdub3JlJyAmJiBjb25zdHJ1Y3RvckFjdGlvbiAhPT0gJ2lnbm9yZScpIHtcbiAgICBpZiAoc3VzcGVjdFByb3RvUngudGVzdCh0ZXh0KSA9PT0gZmFsc2UgJiYgc3VzcGVjdENvbnN0cnVjdG9yUngudGVzdCh0ZXh0KSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvdG9BY3Rpb24gIT09ICdpZ25vcmUnICYmIGNvbnN0cnVjdG9yQWN0aW9uID09PSAnaWdub3JlJykge1xuICAgIGlmIChzdXNwZWN0UHJvdG9SeC50ZXN0KHRleHQpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoc3VzcGVjdENvbnN0cnVjdG9yUngudGVzdCh0ZXh0KSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH1cblxuICAvLyBTY2FuIHJlc3VsdCBmb3IgcHJvdG8ga2V5c1xuICByZXR1cm4gZmlsdGVyKG9iaiwgeyBwcm90b0FjdGlvbiwgY29uc3RydWN0b3JBY3Rpb24sIHNhZmU6IG9wdGlvbnMgJiYgb3B0aW9ucy5zYWZlIH0pXG59XG5cbmZ1bmN0aW9uIGZpbHRlciAob2JqLCB7IHByb3RvQWN0aW9uID0gJ2Vycm9yJywgY29uc3RydWN0b3JBY3Rpb24gPSAnZXJyb3InLCBzYWZlIH0gPSB7fSkge1xuICBsZXQgbmV4dCA9IFtvYmpdXG5cbiAgd2hpbGUgKG5leHQubGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBuZXh0XG4gICAgbmV4dCA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgIGlmIChwcm90b0FjdGlvbiAhPT0gJ2lnbm9yZScgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsICdfX3Byb3RvX18nKSkgeyAvLyBBdm9pZCBjYWxsaW5nIG5vZGUuaGFzT3duUHJvcGVydHkgZGlyZWN0bHlcbiAgICAgICAgaWYgKHNhZmUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHByb3RvQWN0aW9uID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdPYmplY3QgY29udGFpbnMgZm9yYmlkZGVuIHByb3RvdHlwZSBwcm9wZXJ0eScpXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgbm9kZS5fX3Byb3RvX18gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uc3RydWN0b3JBY3Rpb24gIT09ICdpZ25vcmUnICYmXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsICdjb25zdHJ1Y3RvcicpICYmXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUuY29uc3RydWN0b3IsICdwcm90b3R5cGUnKSkgeyAvLyBBdm9pZCBjYWxsaW5nIG5vZGUuaGFzT3duUHJvcGVydHkgZGlyZWN0bHlcbiAgICAgICAgaWYgKHNhZmUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yQWN0aW9uID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdPYmplY3QgY29udGFpbnMgZm9yYmlkZGVuIHByb3RvdHlwZSBwcm9wZXJ0eScpXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgbm9kZS5jb25zdHJ1Y3RvclxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBub2RlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZVtrZXldXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbmV4dC5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gcGFyc2UgKHRleHQsIHJldml2ZXIsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0XG4gIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IDBcbiAgdHJ5IHtcbiAgICByZXR1cm4gX3BhcnNlKHRleHQsIHJldml2ZXIsIG9wdGlvbnMpXG4gIH0gZmluYWxseSB7XG4gICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gc3RhY2tUcmFjZUxpbWl0XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZVBhcnNlICh0ZXh0LCByZXZpdmVyKSB7XG4gIGNvbnN0IHN0YWNrVHJhY2VMaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdFxuICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSAwXG4gIHRyeSB7XG4gICAgcmV0dXJuIF9wYXJzZSh0ZXh0LCByZXZpdmVyLCB7IHNhZmU6IHRydWUgfSlcbiAgfSBjYXRjaCAoX2UpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGZpbmFsbHkge1xuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IHN0YWNrVHJhY2VMaW1pdFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuc2FmZVBhcnNlID0gc2FmZVBhcnNlXG5tb2R1bGUuZXhwb3J0cy5zY2FuID0gZmlsdGVyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/secure-json-parse/index.js\n");

/***/ })

};
;