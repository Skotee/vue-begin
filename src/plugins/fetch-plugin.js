const createAuthTokenPlugin = (instance, options) => store => {
    store.subscribe((mutation) => {
        if (mutation.type == options.setTokenMutationType) {
            if (mutation.payload) {
                instance.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
            } else {
                instance.defaults.headers.common['Authorization'] = ""
            }
        }
    })
}

export default createAuthTokenPlugin;