if (!$("#field-ticker").length && $("#header").length) {
  $("#header").before(
    '<div id="field-ticker">本週鮮採・番茄、玉米、青花椰剛到</div>'
  );
}

$(function () {
  var nodes = document.querySelectorAll("small");
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].querySelector(".cp-order-thumb")) continue;
    var text = nodes[i].textContent || "";
    var at = text.indexOf("data:image/");
    if (at < 0) continue;
    var label = text.slice(0, at);
    var src = text.slice(at).replace(/\s+/g, "");
    nodes[i].textContent = label;
    var img = document.createElement("img");
    img.className = "cp-order-thumb";
    img.alt = "";
    img.src = src;
    nodes[i].appendChild(img);
  }

  var pid = document.getElementById("product_id");
  if (!pid || pid.value !== "10") return;
  document.body.classList.add("cp-mug-product");
  if (document.getElementById("cp-order-note") || !document.getElementById("option-2")) return;
  var note = document.createElement("p");
  note.id = "cp-order-note";
  note.innerHTML = '這杯要先看預覽再下單。<a href="/pages/custompreview">前往客製預覽</a>';
  document.getElementById("option-2").parentNode.insertBefore(note, document.getElementById("option-2"));
});
