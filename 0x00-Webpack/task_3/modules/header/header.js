import $ from 'jquery';
import './header.css';

console.log('Init header');

$(document).ready(function() {
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
});
