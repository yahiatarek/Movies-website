export class Inputs {
  constructor() {
    this.alerts = document.getElementsByClassName("alert");
    this.inputs = document.getElementsByTagName("input");
    this.moviesRow = document.getElementById("moviesRow");
    this.inputs[0].addEventListener("keyup", this.searchByWord.bind(this));
    this.inputs[2].addEventListener("focus", this.validname.bind(this));
    this.inputs[5].addEventListener("focus", this.validemail.bind(this));
    this.inputs[6].addEventListener("focus", this.validage.bind(this));
    this.inputs[4].addEventListener("focus", this.validPassword.bind(this));
    this.inputs[3].addEventListener("focus", this.validPhoneNo.bind(this));
  }
  validname() {
    let nameInput = this.inputs[2];
    $(nameInput).next().fadeIn(300);
    let regex = /[A-Z][a-z]{1,}/;
    nameInput.addEventListener("keyup", function () {
      let nameValue = $(nameInput).val();
      if (regex.test(nameValue)) {
        if (nameValue == "") {
          $(nameInput).next().fadeIn(300);
        } else {
          $(nameInput).next().fadeOut(300);
        }
      } else {
        $(nameInput).next().fadeIn(300);
      }
    });
  }
  validemail() {
    let emailInput = this.inputs[5];
    $(emailInput).next().fadeIn(300);
    let regex = /[a-z{1,}(.)?_?$?1-9]{1,}@[a-z]{1,9}(.)[a-z]{1,3}$/;
    emailInput.addEventListener("keyup", function () {
      let emailValue = $(emailInput).val();
      if (regex.test(emailValue)) {
        if (emailValue == "") {
          $(emailInput).next().fadeIn(300);
        } else {
          $(emailInput).next().fadeOut(300);
        }
      } else {
        $(emailInput).next().fadeIn(300);
      }
    });
  }
  validage() {
    let ageInput = this.inputs[6];
    $(ageInput).next().fadeIn(300);
    let regex = /^[1-9][1-9]$/;
    ageInput.addEventListener("keyup", function () {
      let ageValue = $(ageInput).val();
      if (regex.test(ageValue)) {
        if (ageValue == "") {
          $(ageInput).next().fadeIn(300);
        } else {
          $(ageInput).next().fadeOut(300);
        }
      } else {
        $(ageInput).next().fadeIn(300);
      }
    });
  }
  validPassword() {
    let passwordInput = this.inputs[4];
    $(passwordInput).next().fadeIn(300);
    let regex = /^[a-zA-Z1-9]{8,}$/;
    passwordInput.addEventListener("keyup", function () {
      let passwordValue = $(passwordInput).val();
      if (regex.test(passwordValue)) {
        if (passwordValue == "") {
          $(passwordInput).next().fadeIn(300);
        } else {
          $(passwordInput).next().fadeOut(300);
        }
      } else {
        $(passwordInput).next().fadeIn(300);
      }
    });
    this.inputs[7].addEventListener("focus", this.validRePassword.bind(this));
  }
  validRePassword() {
    let RepasswordInput = this.inputs[7];
    let passwordInput = $(this.inputs[4]);
    $(RepasswordInput).next().fadeIn(300);
    let regex = /^[a-zA-Z1-9]{8,}$/;
    RepasswordInput.addEventListener("keyup", function () {
      let RepasswordValue = $(RepasswordInput).val();
      let passwordValue = $(passwordInput).val();
      if (
        regex.test(RepasswordValue) == true &&
        passwordValue == RepasswordValue
      ) {
        $(RepasswordInput).next().fadeOut(300);
      }
      if (
        regex.test(RepasswordValue) == false ||
        passwordValue != RepasswordValue
      ) {
        $(RepasswordInput).next().fadeIn(300);
      }
    });
  }
  validPhoneNo() {
    let phoneInput = this.inputs[3];
    $(phoneInput).next().fadeIn(300);
    let regex = /^(002)?01[0125][0-9]{8}$/;
    phoneInput.addEventListener("keyup", function () {
      let phoneValue = $(phoneInput).val();
      if (regex.test(phoneValue)) {
        if (phoneValue == "") {
          $(phoneInput).next().fadeIn(300);
        } else {
          $(phoneInput).next().fadeOut(300);
        }
      } else {
        $(phoneInput).next().fadeIn(300);
      }
    });
  }

  searchByWord() {
    let searchValue = $(this.inputs[0]).val();
    let url =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=60bc0e67d49785e92c2d84f0d8b114ab";
    this.display(url, searchValue);
  }
  async display(url, searchValue) {
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
    }
    this.moviesRow.innerHTML = temp;
  }
}
