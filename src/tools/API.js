import Request from './Request.js'

var baseURL = "http://localhost:" + resolvePort()
console.log(baseURL)
function resolvePort() {
  var search = window.location.search;
  if (search && search.length > 0) {
    if (search.startsWith("?"))
      search = search.substring(1);
  }
  var params = {};
  search.split("&").forEach((e, i) => {
    var kv = e.split("=");
    if (kv && kv.length == 2) {
      params[kv[0]] = kv[1];
    }
  });
  if (params.port) {
    return params.port;
  }
  return "8081";
}

export function test(params) {
  return Request({
    url: baseURL + "/DB/queryColumns",
    params,
    method: "post"
  });
}
