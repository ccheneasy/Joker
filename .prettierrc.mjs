export default {
  // 一行代码的最大字符数，默认：80
  printWidth: 120,
  // 在所有代码语句的末尾添加分号。
  semi: false,
  // 箭头函数仅有一个参数时，参数是否添加括号
  arrowParens: "avoid",
  // 指定添加尾后逗号的方式。 选项：none - 无尾后逗号。es5 - 在 ES5 中有效的尾后逗号（如对象与数组等）。all - 尽可能添加尾后逗号（如函数的参数列表）。
  trailingComma: "none",
  // 会把多行的 HTML (包括 HTML、JSX、Vue 和 Angular) 元素的 > 放在最后一个属性的末尾，而不是另起一行（自闭合标签不受该选项控制）。
  bracketSameLine: true,

  // 默认属性
  // 三元表达式格式，默认：false
  // true - 使用奇怪的三元组，在条件后面加上问号。
  // false - 保留三元组的默认行为；将问号与结果保持在同一行。
  experimentalTernaries: false,
  // 操作符位置，默认：end
  // "start" - 当二进制表达式换行时，在新行的开头打印运算符。
  // "end" - 默认行为；当二进制表达式换行时，在前一行的末尾打印运算符。
  experimentalOperatorPosition: "end",
  // 每个缩进级别的空格数，默认：2
  tabWidth: 2,
  // 用制表符而不是空格缩进行，默认：false
  useTabs: false,
  // 使用单引号而不是双引号，默认：false
  singleQuote: false,
  // 对象的属性引号，默认：as-needed
  // "as-needed" - 仅在需要时在对象属性周围添加引号。
  // "consistent" - 如果一个对象中至少有一个属性需要引号，请引用所有属性。
  // "preserve" - 尊重对象属性中引号的输入使用。
  quoteProps: "as-needed",
  // jsx使用单引号而不是双引号，默认：false
  jsxSingleQuote: false,
  // 括号空格，默认：true
  bracketSpacing: true,
  // 对象格式化，默认：preserve
  // "preserve" - 如果在左括号和第一个属性之间有换行符，则保留为多行。
  // "collapse" - 尽可能适合单行。
  objectWrap: "preserve",
  // 格式化文件范围，默认：0-Infinity
  rangeStart: 0,
  rangeEnd: Infinity,
  // 格式化注释，默认：false
  requirePragma: false,
  // 插入编译指示，默认：false
  insertPragma: false,
  // 文章换行,默认情况下会对你的markdown文件换行进行format会控制在printwidth以内，默认：preserve
  // "always" - 如果散文超出打印宽度，则将其换行.
  // "never" - 将每一段散文拆成一行。
  // "preserve" - 什么都不做，让散文保持原样。
  proseWrap: "preserve",
  // HTML 空白敏感度，默认：css
  // "css"-遵守CSS display属性的默认值。对于与strict相同处理的 Handlebars。
  // "strict"-所有标签周围的空白（或缺少空白）被认为是重要的。
  // "ignore"-所有标签周围的空格（或缺少空格）被认为是无关紧要的。
  htmlWhitespaceSensitivity: "css",
  // Vue 文件脚本和样式标签缩进，默认：false
  // false-不要在 Vue 文件中缩进脚本和样式标签。
  // true-在 Vue 文件中缩进脚本和样式标签。
  vueIndentScriptAndStyle: false,
  // 行结束，"<lf|crlf|cr|auto>"。默认：lf
  // "lf"-仅换行(\n)在Linux和macOS以及git repos中很常见。
  // "crlf"-回车+换行字符(\r\n)，在Windows上很常见。
  // "cr"-仅回车字符 (\r)，很少使用。
  // "auto"-维护现有的行结尾（一个文件中的混合值通过查看第一行之后使用的内容来规范化）
  endOfLine: "lf",
  // 嵌入式语言格式化，默认：auto
  // "auto"-如果Prettier可以自动识别嵌入代码，则格式化嵌入代码。
  // "off"-永远不要自动格式化嵌入代码。
  embeddedLanguageFormatting: "auto",
  // 每行单个属性，默认：false
  // false-不要强制每行使用一个属性
  // true-每行强制执行单个属性
  singleAttributePerLine: false
}
