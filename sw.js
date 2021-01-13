// initial service worker
self.addEventListener('install', evt => {
    console.log('service worker has been installed')
})

// activate event 
self.addEventListener('activate', avt => {
    console.log('service worker has been activated')
}); 

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt)
})