const Mux = require('@mux/mux-node')

const signPlaybackId = function (playbackId) {
  return Mux.JWT.sign(playbackId, {
    keyId: process.env.MUX_SIGNING_KEY,
    keySecret: process.env.MUX_PRIVATE_KEY
  })
}

module.exports = {
  signPlaybackId
};
