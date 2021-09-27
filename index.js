var count = 0;
var Data;
function printList(data, index) {
  $("ul").html("");
  for (let i = index; i < index + 10; i++) {
    let imgSrc = data[i].image.url;
    $("ul").append(`<li class="list-item-${i} list-item"></li>`);
    $(`.list-item-${i}`).html(
      `<img src="${imgSrc}" class="img"/><div class="details"> <div class="dog-name">${data[i].name}</div><div class="dog-breed">${data[i].breed_group}</div><div class="dog-origin">${data[i].origin}</div><div class="dog-life">${data[i].life_span}</div><div class="dog-temp">${data[i].temperament}</div></div>`
    );
  }
}
function handleClick() {
  $.ajax({
    url: "https://api.TheDogAPI.com/v1/breeds",
    method: "get",
    Headers: { "x-api-key": "c4b816f3-95a0-4dc1-ba6f-ae1d075f8460" },
    success: function (data) {
      Data = data;
      printList(data, 0);
    },
  });
}

$(document).ready(handleClick());

$("#next").click(() => {
  count = count + 10;
  if (count > 160) count = 0;
  printList(Data, count);
});
$("#prev").click(() => {
  count = count - 10;
  if (count < 0) count = 160;
  printList(Data, count);
});
