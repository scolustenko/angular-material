export default class restService {
  constructor ($http) {
    this.uri = 'https://api.flickr.com/services/rest/?';
    this.queryMethod = 'flickr.photos.search';
    this.apiKey = '7fbc4d0fd04492d32fa9a2f718c6293e';
    this.$http = $http;
  };

  prepareSrc(img) {
    // console.log(`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`);
    return `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
  }

  getRandomInt() {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }

  getPhotos (keyword) {
    let randomPage = this.getRandomInt();
    return this.$http.get(`${this.uri}method=${this.queryMethod}&api_key=${this.apiKey}&text=${keyword}&page=${randomPage}&per_page=1&format=json&nojsoncallback=1`)
  }
}