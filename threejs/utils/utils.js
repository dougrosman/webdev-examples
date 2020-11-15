ethereum.autoRefreshOnNetworkChange = false;

let home = `<a id="home" href=".." style="position: fixed; top: 0; left: 0; color: white; background: black; padding: 4px;">Back</a>`

$('body').append(home);

let props = {
  "font-family": "Arial",
  "font-size": ".7rem",
  "padding": ".5em",
  "text-decoration": "none",
  "cursor": "pointer"
}

$('#home').css(props);

$('.continue').after(`<span class="arrow"> → </span>`)

$('#learning a').attr("target", "_blank");