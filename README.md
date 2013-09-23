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

#License
Copyright (c) 2013 Vladyslav Millier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
