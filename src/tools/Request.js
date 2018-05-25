//用于http请求
import axios from 'axios'
import qs from 'qs'
import {Loading} from 'element-ui';


var instance = axios.create({
  timeout: 5000,
});

instance.interceptors.request.use(function (config) {
  onRequestChangeListener(1);
  return config;
}, function (error) {
  onRequestChangeListener(1);
  // Do something with request error
  return Promise.reject(error);
});

//添加一个返回拦截器
instance.interceptors.response.use(function (response) {
  //对返回的数据进行一些处理
  onRequestChangeListener(-1);
  return response;
}, function (error) {
  //对返回的错误进行一些处理
  onRequestChangeListener(-1);
  return Promise.reject(error);
});

var currRequest = 0;
var delayTime = 250;
var loadingOps = {
  // background: "#fff",
  text: "加载中...",
  lock: true,
  customClass: "customLoadingBg"
};
let loadingInstance = null;

function openLoading() {
  if (currRequest > 0) {
    loadingInstance = Loading.service(loadingOps);
  }
}

function closeLoading() {
  if (currRequest <= 0) {
    if (null != loadingInstance)
      loadingInstance.close();
    loadingInstance = null;
  }
}

function onRequestChangeListener(count) {
  currRequest += count;
  if (count > 0) {
    setTimeout(() => {
      openLoading();
    }, delayTime);

  } else {
    closeLoading();
    setTimeout(() => {
      closeLoading();
    }, delayTime);
  }
}

function Request({url, method, params, headers}) {
  if (!method) method = "get";
  var isUrlParams = "get" == method.toLowerCase() || "delete" == method.toLowerCase();
  var data = null;
  if (!isUrlParams) {
    data = params;
    params = null;
  }
  headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', ...headers};
  if (data && !headers['Content-Type'].indexOf("json") > -1) {
    data = qs.stringify(data);
  }
  return instance({
    method: method,
    url: url,
    params,
    data,
    headers
  });
}

export default Request;
