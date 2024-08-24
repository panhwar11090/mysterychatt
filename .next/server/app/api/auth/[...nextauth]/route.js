"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cmystrychatapp%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cmystrychatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cmystrychatapp%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cmystrychatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_mystrychatapp_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"E:\\\\mystrychatapp\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_mystrychatapp_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDbXlzdHJ5Y2hhdGFwcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RSUzQSU1Q215c3RyeWNoYXRhcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0cnljaGF0YXBwLz8wMjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXG15c3RyeWNoYXRhcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXG15c3RyeWNoYXRhcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cmystrychatapp%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cmystrychatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_dbConnects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/dbConnects */ \"(rsc)/./src/lib/dbConnects.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                console.log(\"try se pehle\", credentials);\n                await (0,_lib_dbConnects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                console.log(\"db conncet k bad\", credentials);\n                try {\n                    const user = await _model_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                        $or: [\n                            {\n                                email: credentials.identifier\n                            },\n                            {\n                                username: credentials.identifier\n                            }\n                        ]\n                    });\n                    console.log(\"ye user he\", user);\n                    if (!user) {\n                        throw new Error(\"No User found with this email and username\");\n                    }\n                    if (!user.isVerified) {\n                        throw new Error(\"No user found with this email\");\n                    }\n                    const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.password);\n                    if (isPasswordCorrect) {\n                        return user;\n                    } else {\n                        throw new Error(\"Incorrect Password\");\n                    }\n                } catch (err) {\n                    throw new Error(err);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token._id = user._id?.toString();\n                token.isVerified = user.isVerified;\n                token.isAcceptingMessages = user.isAcceptingMessages;\n                token.username = user.username;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id?.toString();\n                session.user.isVerified = token.isVerified;\n                session.user.isAcceptingMessages = token.isAcceptingMessages;\n                session.user.username = token.username;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDOEI7QUFDVztBQUNKO0FBRTZCO0FBRzNELE1BQU1JLGNBQThCO0lBQ3ZDQyxXQUFVO1FBQ05GLDJFQUFtQkEsQ0FBQztZQUNoQkcsSUFBRztZQUNIQyxNQUFLO1lBQ0xDLGFBQVk7Z0JBQ1JDLE9BQU07b0JBQUNDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU07Z0JBQ25DQyxVQUFTO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFVO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBZTtnQkFDM0JNLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZVA7Z0JBQzNCLE1BQU1QLDJEQUFTQTtnQkFDZmEsUUFBUUMsR0FBRyxDQUFDLG9CQUFtQlA7Z0JBQy9CLElBQUk7b0JBQ0EsTUFBTVEsT0FBTyxNQUFNZCxtREFBU0EsQ0FBQ2UsT0FBTyxDQUFDO3dCQUNqQ0MsS0FBSTs0QkFDQTtnQ0FBQ1QsT0FBT0QsWUFBWVcsVUFBVTs0QkFBQTs0QkFDOUI7Z0NBQUNDLFVBQVNaLFlBQVlXLFVBQVU7NEJBQUE7eUJBQ25DO29CQUNMO29CQUNBTCxRQUFRQyxHQUFHLENBQUMsY0FBYUM7b0JBQ3pCLElBQUcsQ0FBQ0EsTUFBSzt3QkFDTCxNQUFNLElBQUlLLE1BQU07b0JBQ3BCO29CQUVBLElBQUcsQ0FBQ0wsS0FBS00sVUFBVSxFQUFDO3dCQUNoQixNQUFNLElBQUlELE1BQU07b0JBQ3BCO29CQUVBLE1BQU1FLG9CQUFvQixNQUFNdkIsdURBQWMsQ0FDMUNRLFlBQVlJLFFBQVEsRUFDcEJJLEtBQUtKLFFBQVE7b0JBRWpCLElBQUdXLG1CQUFrQjt3QkFDakIsT0FBT1A7b0JBQ1gsT0FBSzt3QkFDRCxNQUFNLElBQUlLLE1BQU07b0JBQ3BCO2dCQUVKLEVBQUUsT0FBT0ksS0FBUztvQkFDZCxNQUFNLElBQUlKLE1BQU1JO2dCQUNwQjtZQUNKO1FBQ0o7S0FDSDtJQUNEQyxXQUFVO1FBQ04sTUFBTUMsS0FBSyxFQUFDQyxLQUFLLEVBQUVaLElBQUksRUFBQztZQUNwQixJQUFHQSxNQUFLO2dCQUNKWSxNQUFNQyxHQUFHLEdBQUdiLEtBQUthLEdBQUcsRUFBRUM7Z0JBQ3RCRixNQUFNTixVQUFVLEdBQUdOLEtBQUtNLFVBQVU7Z0JBQ2xDTSxNQUFNRyxtQkFBbUIsR0FBR2YsS0FBS2UsbUJBQW1CO2dCQUNwREgsTUFBTVIsUUFBUSxHQUFHSixLQUFLSSxRQUFRO1lBQ2xDO1lBQ0EsT0FBT1E7UUFDWDtRQUVBLE1BQU1JLFNBQVEsRUFBQ0EsT0FBTyxFQUFFSixLQUFLLEVBQUM7WUFDMUIsSUFBR0EsT0FBTTtnQkFDTEksUUFBUWhCLElBQUksQ0FBQ2EsR0FBRyxHQUFHRCxNQUFNQyxHQUFHLEVBQUVDO2dCQUM5QkUsUUFBUWhCLElBQUksQ0FBQ00sVUFBVSxHQUFHTSxNQUFNTixVQUFVO2dCQUMxQ1UsUUFBUWhCLElBQUksQ0FBQ2UsbUJBQW1CLEdBQUVILE1BQU1HLG1CQUFtQjtnQkFDM0RDLFFBQVFoQixJQUFJLENBQUNJLFFBQVEsR0FBR1EsTUFBTVIsUUFBUTtZQUMxQztZQUNBLE9BQU9ZO1FBQ1g7SUFDSjtJQUNBQyxPQUFNO1FBQ0ZDLFFBQU87SUFDWDtJQUNBRixTQUFRO1FBQ0pHLFVBQVM7SUFDYjtJQUVBQyxRQUFPQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFFdEMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RyeWNoYXRhcHAvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cz9hMmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL2RiQ29ubmVjdHNcIjtcclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiQC9tb2RlbC9Vc2VyXCI7XHJcbmltcG9ydCB7IGFueSB9IGZyb20gXCJ6b2RcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucz0ge1xyXG4gICAgcHJvdmlkZXJzOltcclxuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgICAgICAgaWQ6J2NyZWRlbnRpYWxzJyxcclxuICAgICAgICAgICAgbmFtZTonQ3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczp7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDp7bGFiZWw6IFwiZW1haWxcIiwgdHlwZTogXCJ0ZXh0XCJ9LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6eyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczphbnkpOlByb21pc2U8YW55PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnkgc2UgcGVobGUnLGNyZWRlbnRpYWxzKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGIgY29ubmNldCBrIGJhZCcsY3JlZGVudGlhbHMpXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRvcjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1haWw6IGNyZWRlbnRpYWxzLmlkZW50aWZpZXJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJuYW1lOmNyZWRlbnRpYWxzLmlkZW50aWZpZXJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZSB1c2VyIGhlJyx1c2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF1c2VyKXsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsIGFuZCB1c2VybmFtZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighdXNlci5pc1ZlcmlmaWVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNQYXNzd29yZENvcnJlY3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgUGFzc3dvcmQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnI6YW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pIFxyXG4gICAgXSxcclxuICAgIGNhbGxiYWNrczp7XHJcbiAgICAgICAgYXN5bmMgand0ICh7dG9rZW4sIHVzZXJ9KXtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5faWQgPSB1c2VyLl9pZD8udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRva2VuLmlzVmVyaWZpZWQgPSB1c2VyLmlzVmVyaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi5pc0FjY2VwdGluZ01lc3NhZ2VzID0gdXNlci5pc0FjY2VwdGluZ01lc3NhZ2VzO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4udXNlcm5hbWUgPSB1c2VyLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyBzZXNzaW9uKHtzZXNzaW9uLCB0b2tlbn0pe1xyXG4gICAgICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuX2lkID0gdG9rZW4uX2lkPy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlzVmVyaWZpZWQgPSB0b2tlbi5pc1ZlcmlmaWVkO1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlzQWNjZXB0aW5nTWVzc2FnZXMgPXRva2VuLmlzQWNjZXB0aW5nTWVzc2FnZXM7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSB0b2tlbi51c2VybmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZXM6e1xyXG4gICAgICAgIHNpZ25JbjonL3NpZ24taW4nXHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbjp7XHJcbiAgICAgICAgc3RyYXRlZ3k6XCJqd3RcIlxyXG4gICAgfSxcclxuXHJcbiAgICBzZWNyZXQ6cHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG5cclxufSJdLCJuYW1lcyI6WyJiY3J5cHQiLCJkYkNvbm5lY3QiLCJVc2VyTW9kZWwiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImZpbmRPbmUiLCIkb3IiLCJpZGVudGlmaWVyIiwidXNlcm5hbWUiLCJFcnJvciIsImlzVmVyaWZpZWQiLCJpc1Bhc3N3b3JkQ29ycmVjdCIsImNvbXBhcmUiLCJlcnIiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsIl9pZCIsInRvU3RyaW5nIiwiaXNBY2NlcHRpbmdNZXNzYWdlcyIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_options__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNFO0FBRXhDLE1BQU1FLFVBQVVGLDBEQUFRQSxDQUFDQyxpREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RyeWNoYXRhcHAvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuXHJcbmV4cG9ydCB7aGFuZGxlciBhcyBHRVQgLCBoYW5kbGVyIGFzIFBPU1QgfTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnects.ts":
/*!*******************************!*\
  !*** ./src/lib/dbConnects.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    // check if we have connection to the database or if its currently connecting\n    if (connection.isConnected) {\n        console.log(\"Already connected to the database\");\n        return;\n    }\n    try {\n        // Atempt to connect to the database\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI || \"\");\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"database connected succesfully\");\n    } catch (error) {\n        console.log(\"Database connection failed\", error);\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBTWhDLE1BQU1DLGFBQStCLENBQUM7QUFFdEMsZUFBZUM7SUFDWCw2RUFBNkU7SUFDN0UsSUFBR0QsV0FBV0UsV0FBVyxFQUFDO1FBQ3RCQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNKO0lBRUEsSUFBSTtRQUNBLG9DQUFvQztRQUNwQyxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSTtRQUU3RFQsV0FBV0UsV0FBVyxHQUFHRyxHQUFHSyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO1FBQ3JEUixRQUFRQyxHQUFHLENBQUM7SUFFaEIsRUFBRSxPQUFPUSxPQUFPO1FBQ1pULFFBQVFDLEdBQUcsQ0FBQyw4QkFBNkJRO1FBQ3pDTCxRQUFRTSxJQUFJLENBQUM7SUFDakI7QUFDSjtBQUVBLGlFQUFlWixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlzdHJ5Y2hhdGFwcC8uL3NyYy9saWIvZGJDb25uZWN0cy50cz8yZTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgQ29ubmVjdGlvbk9iamVjdCA9IHtcclxuICAgIGlzQ29ubmVjdGVkPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBjb25uZWN0aW9uOiBDb25uZWN0aW9uT2JqZWN0ID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSBvciBpZiBpdHMgY3VycmVudGx5IGNvbm5lY3RpbmdcclxuICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBBdGVtcHQgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2VcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhYmFzZSBjb25uZWN0ZWQgc3VjY2VzZnVsbHknKVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQnLGVycm9yKVxyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJlcnJvciIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnects.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/Message.ts":
/*!******************************!*\
  !*** ./src/model/Message.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MessageSchema: () => (/* binding */ MessageSchema),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now\n    }\n});\n// Check if the model is already registered\nconst MessageModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Message || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Message\", MessageSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageModel);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvTWVzc2FnZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9EO0FBT3BELE1BQU1DLGdCQUFrQyxJQUFJRCx3REFBZSxDQUFDO0lBQ3hERyxTQUFRO1FBQ0pDLE1BQUtDO1FBQ0xDLFVBQVM7SUFDYjtJQUNBQyxXQUFVO1FBQ05ILE1BQUtJO1FBQ0xGLFVBQVM7UUFDVEcsU0FBUUQsS0FBS0UsR0FBRztJQUNwQjtBQUNKO0FBR0EsMkNBQTJDO0FBQzNDLE1BQU1DLGVBQWVYLHdEQUFlLENBQUNhLE9BQU8sSUFBSWIscURBQWMsQ0FBVSxXQUFXQztBQUVuRixpRUFBZVUsWUFBWUEsRUFBQztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlzdHJ5Y2hhdGFwcC8uL3NyYy9tb2RlbC9NZXNzYWdlLnRzPzRhMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7U2NoZW1hLCBEb2N1bWVudH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2UgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgICBjb250ZW50IDpzdHJpbmc7XHJcbiAgICBjcmVhdGVkQXQgOiBEYXRlO1xyXG59XHJcblxyXG5jb25zdCBNZXNzYWdlU2NoZW1hIDogU2NoZW1hPE1lc3NhZ2U+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZEF0OntcclxuICAgICAgICB0eXBlOkRhdGUsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OkRhdGUubm93LFxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBDaGVjayBpZiB0aGUgbW9kZWwgaXMgYWxyZWFkeSByZWdpc3RlcmVkXHJcbmNvbnN0IE1lc3NhZ2VNb2RlbCA9IG1vbmdvb3NlLm1vZGVscy5NZXNzYWdlIHx8IG1vbmdvb3NlLm1vZGVsPE1lc3NhZ2U+KCdNZXNzYWdlJywgTWVzc2FnZVNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlTW9kZWw7XHJcbmV4cG9ydCB7IE1lc3NhZ2VTY2hlbWEgfTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNZXNzYWdlU2NoZW1hIiwiU2NoZW1hIiwiY29udGVudCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiTWVzc2FnZU1vZGVsIiwibW9kZWxzIiwiTWVzc2FnZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/model/Message.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/User.ts":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ \"(rsc)/./src/model/Message.ts\");\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        trim: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /.+\\@.+\\..+/,\n            \"Please use a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"Verify Code is required\"\n        ]\n    },\n    verifyCodeExpiry: {\n        type: Date,\n        required: [\n            true,\n            \"Verify Code Expiry is required\"\n        ]\n    },\n    isAcceptMessages: {\n        type: Boolean,\n        default: true\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    messages: [\n        _Message__WEBPACK_IMPORTED_MODULE_1__.MessageSchema\n    ]\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ0Q7QUFjbEQsTUFBTUUsYUFBNEIsSUFBSUYsd0RBQWUsQ0FBQztJQUNsREksVUFBUztRQUNMQyxNQUFLQztRQUNMQyxVQUFTO1lBQUM7WUFBSztTQUF1QjtRQUN0Q0MsTUFBSztRQUNMQyxRQUFPO0lBQ1g7SUFDQUMsT0FBTTtRQUNGTCxNQUFLQztRQUNMQyxVQUFTO1lBQUM7WUFBTTtTQUFvQjtRQUNwQ0UsUUFBTztRQUNQRSxPQUFPO1lBQUM7WUFBYztTQUFtQztJQUM3RDtJQUNBQyxVQUFTO1FBQ0xQLE1BQUtDO1FBQ0xDLFVBQVM7WUFBQztZQUFLO1NBQXVCO0lBQzFDO0lBQ0FNLFlBQVc7UUFDUFIsTUFBS0M7UUFDTEMsVUFBVTtZQUFDO1lBQU07U0FBMEI7SUFDL0M7SUFDQU8sa0JBQWlCO1FBQ2JULE1BQU1VO1FBQ05SLFVBQVU7WUFBQztZQUFNO1NBQWlDO0lBQ3REO0lBQ0FTLGtCQUFrQjtRQUNkWCxNQUFNWTtRQUNOQyxTQUFTO0lBQ2I7SUFDQUMsWUFBVztRQUNQZCxNQUFLWTtRQUNMQyxTQUFRO0lBQ1o7SUFDQUUsVUFBVTtRQUFDbkIsbURBQWFBO0tBQUM7QUFFN0I7QUFFQSxNQUFNb0IsWUFBWSx3REFBZ0IsQ0FBQ0UsSUFBSSxJQUE2QnZCLHFEQUFjLENBQU8sUUFBUUU7QUFFakcsaUVBQWVtQixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlzdHJ5Y2hhdGFwcC8uL3NyYy9tb2RlbC9Vc2VyLnRzP2E2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLHtTY2hlbWEsIERvY3VtZW50fSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSxNZXNzYWdlU2NoZW1hIH0gZnJvbSBcIi4vTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBib29sZWFuIH0gZnJvbSBcInpvZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIGV4dGVuZHMgRG9jdW1lbnR7XHJcbiAgICB1c2VybmFtZTpzdHJpbmcsXHJcbiAgICBlbWFpbDpzdHJpbmcsXHJcbiAgICBwYXNzd29yZDpzdHJpbmcsXHJcbiAgICB2ZXJpZnlDb2RlOnN0cmluZyxcclxuICAgIHZlcmlmeUNvZGVFeHBpcnk6RGF0ZSxcclxuICAgIGlzVmVyaWZpZWQ6Ym9vbGVhbixcclxuICAgIGlzQWNjZXB0TWVzc2FnZXM6Ym9vbGVhbixcclxuICAgIG1lc3NhZ2VzOk1lc3NhZ2VbXTtcclxufVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA6IFNjaGVtYTxVc2VyPiA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOlt0cnVlLFwiVXNlcm5hbWUgaXMgcmVxdWlyZWRcIl0sXHJcbiAgICAgICAgdHJpbTp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOlt0cnVlLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCJdLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIG1hdGNoOiBbLy4rXFxALitcXC4uKy8sICdQbGVhc2UgdXNlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSxcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCJdXHJcbiAgICB9LFxyXG4gICAgdmVyaWZ5Q29kZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnVmVyaWZ5IENvZGUgaXMgcmVxdWlyZWQnXSxcclxuICAgIH0sXHJcbiAgICB2ZXJpZnlDb2RlRXhwaXJ5OntcclxuICAgICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1ZlcmlmeSBDb2RlIEV4cGlyeSBpcyByZXF1aXJlZCddLFxyXG4gICAgfSxcclxuICAgIGlzQWNjZXB0TWVzc2FnZXM6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaXNWZXJpZmllZDp7XHJcbiAgICAgICAgdHlwZTpCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6ZmFsc2VcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczogW01lc3NhZ2VTY2hlbWFdLFxyXG4gICAgXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlck1vZGVsID0gKG1vbmdvb3NlLm1vZGVscy5Vc2VyIGFzIG1vbmdvb3NlLk1vZGVsPFVzZXI+KSB8fCBtb25nb29zZS5tb2RlbDxVc2VyPignVXNlcicsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1lc3NhZ2VTY2hlbWEiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwidW5pcXVlIiwiZW1haWwiLCJtYXRjaCIsInBhc3N3b3JkIiwidmVyaWZ5Q29kZSIsInZlcmlmeUNvZGVFeHBpcnkiLCJEYXRlIiwiaXNBY2NlcHRNZXNzYWdlcyIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaXNWZXJpZmllZCIsIm1lc3NhZ2VzIiwiVXNlck1vZGVsIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@opentelemetry","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cmystrychatapp%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cmystrychatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();