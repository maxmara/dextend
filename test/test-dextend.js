var dextend = require('../lib/dextend');
var _ = require('underscore');

exports['basic-object-extend'] = function (test) {
	test.deepEqual(dextend({}, {}), {});
	test.deepEqual(dextend({ 0: 'x' }, {}), { 0: 'x' });// prepend
	test.deepEqual(dextend({}, { 0: 'x' }), { 0: 'x' });// append
	test.deepEqual(dextend({ 0: 'x' }, { 0: 'y' }), { 0: 'y' });// overwriting
	test.deepEqual(dextend({ 0: 'x' }, { 1: 'y' }), { 0: 'x', 1: 'y' });// mergeing
	test.done();
};

exports['deep-object-extend'] = function (test) {
	test.deepEqual(dextend({ 0: {} }, {}), { 0: {} });
	test.deepEqual(dextend({}, { 0: {} }), { 0: {} });
	test.deepEqual(dextend({ 0: { 0: 'x' } }, { 0: { 0: 'y' } }), { 0: { 0: 'y' } });
	test.deepEqual(dextend({ 0: { 0: 'x', 1: 'y' } }, { 0: { 0: 'y' } }), { 0: { 0: 'y', 1: 'y' } });
	test.deepEqual(dextend({ 0: { 0: 'x', 1: { 0: 'x', 1: 'y' }, 2: 'z' } }, { 0: { 0: 'y', 1: { 0: 'y' }} }), { 0: { 0: 'y', 1: { 0: 'y', 1: 'y' }, 2: 'z'} });
	test.deepEqual(dextend({ 0: { 0: 'x' } }, { 0: { 1: 'y' } }), { 0: { 0: 'x', 1: 'y'} });
	test.deepEqual(dextend({ 0: { 0: 'x' } }, { 1: { 0: 'y' } }), _.extend({ 0: { 0: 'x' } }, { 1: { 0: 'y' } }));// should behave as underscore extend
	test.done();
};

exports['append-array'] = function (test) {
	test.deepEqual(dextend({}, []), {});
	test.deepEqual(dextend({}, ['x']), { 0: 'x' });
	test.deepEqual(dextend({ 0: 'x' }, ['y']), { 0: 'y' });
	test.deepEqual(dextend({ 0: 'x' }, ['y', 'z']), _.extend({ 0: 'x' }, ['y', 'z']));// should behave as underscore extend
	test.done();
};

exports['prepend-array'] = function (test) {
	test.deepEqual(dextend([], {}), []);
	test.deepEqual(dextend(['x'], {}), ['x']);
	test.deepEqual(dextend(['x', 'y'], { 0: 'z' }), _.extend(['x', 'y'], { 0: 'z' }));// should behave as underscore extend
	test.done();
};

exports['extend-arrays'] = function (test) {
	test.deepEqual(dextend([], []), []);
	test.deepEqual(dextend(['x'], []), ['x']);
	test.deepEqual(dextend(['x', 'y'], ['z']), _.extend(['x', 'y'], ['z']));// should behave as underscore extend
	test.deepEqual(dextend(['x'], ['y', 'z']), _.extend(['x'], ['y', 'z']));// should behave as underscore extend
	test.deepEqual(dextend(['x', 'y'], ['y', 'z']), _.extend(['x', 'y'], ['y', 'z']));// should behave as underscore extend
	test.done();
};