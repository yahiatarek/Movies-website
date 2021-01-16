import { SideBar } from "./SideBar.js";
new SideBar();
import { API } from "./API.js";
new API();
import { Inputs } from "./input.js";
new Inputs();
let searchInput = document.getElementById("searchByCategory");
let allLinks = document.getElementsByTagName("a");
let moviesRow = document.getElementById("moviesRow");
let generator = "";
function urlGenerator() {
  $("#now_playing").addClass("active");
  for (let i = 0; i < allLinks.length; i++) {
    $(allLinks[i]).click(async function () {
      $(this).siblings("a").removeClass("active");
      $(this).addClass("active");
      generator = this.id;
      if (generator != "") {
        let url = `https://api.themoviedb.org/3/movie/${generator}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3t1r4KtxuDU8H6Ll8dahBqBfg41m2OxL81LGgKETbnFs4X7iALIBewS8Y`;
        let apiResponse = await fetch(url);
        let data = await apiResponse.json();
        let array = data.results;
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
        moviesRow.innerHTML = temp;
      }
    });
  }
}
urlGenerator();

function search() {
  $(searchInput).keyup(async function () {
    let generator = $(".active").attr("id");
    let searchValue = $(searchInput).val();

    if (generator != "") {
      let url = `https://api.themoviedb.org/3/movie/${generator}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3t1r4KtxuDU8H6Ll8dahBqBfg41m2OxL81LGgKETbnFs4X7iALIBewS8Y`;
      let apiResponse = await fetch(url);
      let data = await apiResponse.json();
      let array = data.results;
      let temp = ``;
      for (let i = 0; i < array.length; i++) {
        let original = array[i].original_title.toLowerCase();
        if (original.includes(searchValue.toLowerCase())) {
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
        moviesRow.innerHTML = temp;
      }
    }
  });
}
search();
