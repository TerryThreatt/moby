class Adapter {
    constructor() {
        this.BASE_URL = 'http://localhost:5500/';
        this.BACKEND_URL = 'http://localhost:3000/api/v1';
        this.ALLBOOKS_URL = `${BACKEND_URL}/books`
        this.ALLREVIEWS_URL = `${BACKEND_URL}/reviews`
    }

}