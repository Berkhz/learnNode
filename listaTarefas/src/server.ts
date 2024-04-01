import app from './app'

function main() {
    app.listen(27017, 'localhost', () => {
        console.log('Server running at port 27017')
    })
}

main()