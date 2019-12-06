//字母+数字，字母+特殊字符，数字+特殊字符
export const PASSWORDPATTERN = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{6,20}$/;
export const PINPATTERN = /[\d]{6}/;
export const languages = ['C/C++' ,'java','python' ,'javascript','default'];

