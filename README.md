dExtend (Deep Extend)

This simple module allows you to merge any objects. It can be useful when your application have a lot of separate
config files you want to compile in the same project (Great example is Magento xml configs)

Installation
------------

dExtend is available trought npm tool

**npm install dextend**


Example
-------

var d = require('dextend');

var obj1 = {
    'this': 'is_sparta',
    'sparta': {
        'is': 'here',
        'and': 'here'
    }
}

var obj2 = {
    'this': 'is_dextend',
    'sparta': 'is not here'
}

var final = d.extend(obj1, obj2);
console.log(final);
