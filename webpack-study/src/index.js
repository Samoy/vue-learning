import $ from 'jquery';
//使用import导入css样式表
import './css/index.css';
import './css/index.less';
import './css/index.scss';

$(function () {
  $("li:odd").css('backgroundColor', 'red');
  $("li:even").css('backgroundColor', function () {
    return "#" + 'D97634';
  })
});

//在webpack中，默认只能处理一部分es6的新语法，处理不了一些高级语法
class Person {
  static info = {name: 'Samoy', age: 27};
}

console.log(Person.info);
