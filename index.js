const splash = async () => {
  const TOKEN = "";

  const resp = await fetch(
    `https://api.unsplash.com/search/photos?query=technology&client_id=${TOKEN}`
  );
  const j = await resp.json();

  j.results.forEach(x => {
    const i = new Image();
    i.onload = () => {
      const tag = document.createElement("img");
      tag.src = x.urls.small;

      document.body.appendChild(tag);
    };
    i.src = x.urls.small;
  });
};

splash(); // !
