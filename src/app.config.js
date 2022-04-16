let subpackages = [
  {
    root: 'demo',
    pages: [
      'pages/actionsheet/index',
      'pages/avatar/index',
      'pages/cell/index',
      'pages/datepicker/index',
      'pages/grid/index',
      'pages/navbar/index',
      'pages/uploader/index',
      'pages/overlay/index',
      'pages/tabbar/index',
    ]
  }
];

export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
})
