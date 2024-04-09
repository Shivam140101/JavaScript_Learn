function test(callback) {
    callback()
}

test(() => {
    console.log("t 1");
    test(() => {
        console.log("t 2");
        test(() => {
            console.log("t 3");
            test(() => {
                console.log("t 4");
            })
        })
    })
})