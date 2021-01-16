export class SideBar {
  constructor() {
    this.openIcon = document.getElementById("openIcon");
    this.linkInSideBar = document.getElementById("linkInSideBar");
    this.sidebarWidth = $(this.linkInSideBar).innerWidth();
    this.sideBar = document.getElementById("sideBar");
    this.openIcon.addEventListener("click", this.openNavBar.bind(this));
    this.closeSideBarIfOpen();
  }

  closeSideBarIfOpen() {
    $(this.sideBar).css("left", `-${this.sidebarWidth}px`);
  }
  openNavBar() {
    if ($(this.openIcon).html().includes("fa-times")) {
      $(this.sideBar).animate({ left: `-${this.sidebarWidth}px` }, 1000);
      $(this.openIcon).html('<i class="fa fa-align-justify"></i>');
      $(".fading").animate({ top: "500px", opacity: "0" }, 500);
    } else {
      $(this.sideBar).animate({ left: "0px" }, 1000, function () {
        $(".item-1").animate(
          {
            top: "0px",
            opacity: "1",
          },
          1100
        );
        $(".item-2").animate(
          {
            top: "0px",
            opacity: "1",
          },
          1200
        );
        $(".item-3").animate(
          {
            top: "0px",
            opacity: "1",
          },
          1300
        );
        $(".item-4").animate(
          {
            top: "0px",
            opacity: "1",
          },
          1400
        );
        $(".item-5").animate(
          {
            top: "0px",
            opacity: "1",
          },
          1500
        );
        $(".item-6").animate(
          {
            top: "0px",
            opacity: "1",
          },
          1600
        );
      });
      $(this.openIcon).html('<i class="fa fa-align-justify fa-times"></i>');
    }
  }
}
