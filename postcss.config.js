module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    // "postcss-px-to-viewport": {
    //   unitToConvert: "px", // 要转换的单位
    //   viewportWidth: 430, // 设计稿宽度
    //   unitPrecision: 5, // 单位转换后保留的精度
    //   propList: ["*"], // 指定转换那些属性，* 表示全部
    //   viewportUnit: "rem", // 希望使用的视口单位
    //   fontViewportUnit: "rem", // 字体使用的视口单位
    //   selectorBlackList: [], // 忽略转换的选择器
    //   minPixelValue: 1, // 最小的转换数值
    //   mediaQuery: false, // 是否在媒体查询中也转换px
    //   replace: true, // 是否直接更换属性值
    //   exclude: [], // 排除的文件或目录
    //   include: [], // 包含的文件或目录
    // },
    "postcss-pxtorem": {
      rootValue: 32,
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ["*"], // 指定转换那些属性，* 表示全部
      selectorBlackList: [], // 忽略转换的选择器
      minPixelValue: 0, // 最小的转换数值
      mediaQuery: false, // 是否在媒体查询中也转换px
      replace: true, // 是否直接更换属性值
      exclude: [], // 排除的文件或目录
      include: [], // 包含的文件或目录
    },
  },
};
