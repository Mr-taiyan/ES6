Promise.resolve(1)
.then(x => x + 1)
.then(x => {throw new Error('My Error')})
.catch(() => 1)
.then(x => x + 1)
.then(console.log)
.catch(console.error);