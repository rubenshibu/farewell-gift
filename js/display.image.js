$(document).ready(function () {
  let image = [
    {
      imgUrl: "Tech Talk - 2",
    },
  ];

  events.forEach((event) => {
    $(".event-cards")
      .append(`<div class="card border-dark mb-3 rounded event-card" >
    <div class="row no-gutters">
      <div class="col-md-4">
      <a class="venobox" href="${event.image}"><img src="${event.image}" alt="image alt" class="card-img card-img-class "/></a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${event.eventName}</h5>
          <p class="card-text my-0"><small class="text-muted">${event.eventDate} </small></p>
          <p class="card-text">${event.report}</p>
        </div>
      </div>
    </div>
  </div>`);
  });
});
