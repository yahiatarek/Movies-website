export class API {
  constructor() {
    this.Tabs = document.getElementsByTagName("a");
    this.url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3t1r4KtxuDU8H6Ll8dahBqBfg41m2OxL81LGgKETbnFs4X7iALIBewS8Y`";
    this.contactUs = document.getElementById("contactUs");
    this.moviesRow = document.getElementById("moviesRow");
    this.Tabs[5].addEventListener("click", this.contactInfo.bind(this));
    this.APIfetch();
  }

  contactInfo() {
    let contactDis = $(this.contactUs).offset().top;
    $("html, body").animate({ scrollTop: contactDis }, 1000);
  }
  async APIfetch() {
    let apiResponse = await fetch(this.url);
    let data = await apiResponse.json();
    let array = data.results;
    console.log(array);
    let temp = ``;
    for (let i = 0; i < array.length; i++) {
      temp += `    <div
        class="itemImg  overflow-hidden col-md-4 my-2 position-relative"
      >
      <div class="myCol w-100 overflow-hidden position-relative">
        <img class="w-100" src="https://image.tmdb.org/t/p/w500/${array[i].poster_path}" alt="" />
        <div
          class="overlayDiv px-md-2 py-md-5 text-center position-absolute"
        >
          <h4>${array[i].original_title}</h4>
          <p>
            ${array[i].overview}
          </p>
          <p>${array[i].vote_average}</p>
          <p> ${array[i].release_date}</p>
          </div>
        </div>
      </div>`;
    }
    this.moviesRow.innerHTML = temp;
  }
}
