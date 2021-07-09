$(document).ready(function () {
  let image = [
    {
      imgUrl: "../images/img_1.jpg",
    },
    {
      imgUrl: "../images/img_2.jpg",
    },
    {
      imgUrl: "../images/img_3.jpg",
    },
    {
      imgUrl: "../images/img_4.jpg",
    },
    {
      imgUrl: "../images/img_5.jpg",
    },
  ];

  image.forEach((img) => {
    $(".images")
      .append(`<div class="col-6 col-md-6 col-lg-3" data-aos="fade-up">
                <a
                  href="${img.imgUrl}"
                  class="d-block photo-item"
                  data-fancybox="gallery"
                >
                  <img src="${img.imgUrl}" alt="Image" class="img-fluid" />
                  <div class="photo-text-more">
                    <span class="icon icon-search"></span>
                  </div>
                </a>
              </div>`);
  });
});
