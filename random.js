const xhr = new XMLHttpRequest()
console.log(xhr)
let fetch = document.getElementById('fetch')
let fetchSingle = document.getElementById('fetchSingle')
let post = document.getElementById('post')
let put = document.getElementById('put')
let del = document.getElementById('delete')

fetch.addEventListener('click', () => {
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

  xhr.onload = function () {
    console.log(typeof this.response)
    const obj = JSON.parse(this.response)
    let html = ''
    for (let i = 0; i < obj.length; i++) {
      html += `<ul>
    
      <li>ID:-${obj[i].id}</li>
      <li>Title:-${obj[i].title}</li>
      <li>Content:-${obj[i].body}</li>
      </ul>
      <hr>
      `
    }
    console.log(html)
    document.getElementById('data').innerHTML = html
  }
  xhr.onprogress = function () {
    console.log('Wait Fetching Data')
  }
  xhr.send()
})

fetchSingle.addEventListener('click', () => {
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true)

  xhr.onload = function () {
    const obj = JSON.parse(this.response)
    let html = ''
    html += `<ul>
    
      <li>ID:-${obj['id']}</li>
      <li>Title:-${obj['title']}</li>
      <li>Content:-${obj['body']}</li>
      </ul>
      <hr>
      `
    console.log(html)
    document.getElementById('data').innerHTML = html
  }
  xhr.onprogress = function () {
    console.log('Wait Fetching Data')
  }
  xhr.send()
})

post.addEventListener('click', () => {
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true)
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  const body = JSON.stringify({
    title: 'Hello',
    body: 'This is Testing',
    userId: 2
  })
  xhr.onload = function () {
    console.log(this.response)
    let html = ''
    let obj = JSON.parse(this.response)

    html = `<ul>
    <li>Title:${obj.title}</li>
    <li>Body:${obj.body}</li>
    <li>UserId:${obj.userId}</li>
    <li>ID:${obj.id}</li>
    </ul>`
    document.getElementById('data').innerHTML = html
    console.log(obj)
  }
  xhr.send(body)
})

put.addEventListener('click', () => {
  xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/21', true)
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  const body = JSON.stringify({
    title: 'Hello',
    body: 'This is Testing',
    userId: 2
  })
  xhr.onload = function () {
    console.log(this.response)
    let html = ''
    let obj = JSON.parse(this.response)
    if (xhr.status == 404) console.log('404dd')

    html = `<ul>
    <li>Title:${obj.title}</li>
    <li>Body:${obj.body}</li>
    <li>UserId:${obj.userId}</li>
    <li>ID:${obj.id}</li>
    </ul>`
    document.getElementById('data').innerHTML = html
    console.log(obj)
  }
  xhr.send(body)
})

del.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true)
  xhr.onload = function () {
    if (xhr.readyState == 4) {
      console.log(xhr.response)
    }
  }
  xhr.onprogress = function () {
    console.log('Delete waiting')
  }
  xhr.send()
})
