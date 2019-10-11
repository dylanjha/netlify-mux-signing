const Mux = require('@mux/mux-node');
const token = Mux.JWT.sign('some-playback-id');

console.log('debug', process.env.MUX_SIGNING_KEY);
console.log('debug', process.env.MUX_PRIVATE_KEY);

exports.handler = function(event, context, callback) {
  console.log('event', event, 'context', context);
  const token = Mux.JWT.sign('jqi1UtiO3gccQ019UcYjGJTLO9Ee00TLMY');
  console.log('token', token);
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}
