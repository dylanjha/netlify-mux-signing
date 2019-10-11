# Netlify create mux signed urls

This app uses [Netlify functions](https://www.netlify.com/docs/functions/) to create one
Netlify endpoint `POST /functions/sign_playback_id`

# Example (dev)

1. Run netlify dev in one tab

> netlify dev

You should see a local dev server running

2. In a separate tab, use the netlify cli to call the function

>  netlify functions:invoke sign_playback_id --payload '{"playbackId":"<example-playback-id>"}' --no-identity

# Deploy

1. Build using `netlify-lambda`

> netlify-lambda build ./functions`

This will look in the ./functions directory and build all the endpoints into `./.netlify/.functions`.

2. Deploy to production

> netlify deploy --prod

This willd eploy the functions to netlify so they are publicly accessible.

3. Request the endpoint from your netlify application after it is deployed

```
curl --request POST \
  --url https://url-signing-example.netlify.com/.netlify/functions/sign_playback_id \
  --header 'content-type: application/json' \
  --data '{"playbackId": "<mux-playback-id>"}'
```
