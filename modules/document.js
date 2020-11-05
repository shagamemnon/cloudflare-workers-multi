class Document {
  constructor(author) {
    this.author = author
  }

  async updateVersion(request) {
    if (this.author === request.headers.get('username')) {
      return fetch('https://personalization-uniformdev.mars.com', {
        method: 'PUT',
        body: request.body,
        headers: {
          'Authorization': '12345'
        }
      })
    }
  }
}

module.exports = Document