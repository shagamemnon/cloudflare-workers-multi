var Document = require('./modules/document')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  let doc = new Document({ author: 'frank' })
  console.log(doc)
  if (doc.updateVersion().status == 200) {
    return new Response('Sucesss. Progress saved', {
      headers: { 'content-type': 'text/plain' },
    })
  }
}
