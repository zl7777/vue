//抛出
let myName = "zl6666";
let myAge = 22;
let myfn = function() {
    return "我是" + myName + "！今年" + myAge + "岁了"
}
export {
    myName as name,
    myAge as age,
    myfn as fn
}