fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const layoutContainer = document.querySelector(".layout-container");

    let postsPerPage = 4;
    let currentPosts = data.slice(0, postsPerPage);

    function generatePostCard(post) {
      const card = document.createElement("div");
      card.classList.add("post-card");

      const image = document.createElement("img");
      image.src = post.image;
      image.alt = post.caption;
      image.classList.add("post-image");

      const caption = document.createElement("p");
      caption.textContent = post.caption;
      caption.classList.add("post-caption");

      const name = document.createElement("p");
      name.textContent = post.name;
      name.classList.add("post-name");

      const date = document.createElement("p");
      date.textContent = post.date;
      date.classList.add("post-date");

      card.appendChild(image);
      card.appendChild(caption);
      card.appendChild(name);
      card.appendChild(date);

      return card;
    }

    function generateFeed() {
      layoutContainer.innerHTML = "";

      currentPosts.forEach((post) => {
        const card = generatePostCard(post);
        layoutContainer.appendChild(card);
      });
    }

    generateFeed();

    function handleLoadMore() {
      postsPerPage += 4;

      currentPosts = data.slice(0, postsPerPage);

      generateFeed();

      if (currentPosts.length >= data.length) {
        loadMoreButton.style.display = "none";
      }

      const lastPostCard = layoutContainer.lastChild;
      const lastPostCardOffsetTop = lastPostCard.offsetTop;
      const scrollPosition = lastPostCardOffsetTop - window.innerHeight + lastPostCard.offsetHeight;

      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }

    const loadMoreButton = document.querySelector("#load-more");

    loadMoreButton.addEventListener("click", handleLoadMore);

    function handleImageLightbox(event) {
      if (event.target.classList.contains("post-image")) {
        const imageSrc = event.target.src;

        const overlay = document.createElement("div");
        overlay.classList.add("lightbox-overlay");

        const modal = document.createElement("div");
        modal.classList.add("lightbox-modal");

        const image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "Enlarged image";
        image.classList.add("lightbox-image");

        const closeBtn = document.createElement("span");
        closeBtn.classList.add("lightbox-close");
        closeBtn.innerHTML = "&times;";

        modal.appendChild(image);
        modal.appendChild(closeBtn);

        overlay.appendChild(modal);

        document.body.appendChild(overlay);

        function closeModal() {
          overlay.remove();
        }

        closeBtn.addEventListener("click", closeModal);

        overlay.addEventListener("click", function (event) {
          if (event.target === overlay) {
            closeModal();
          }
        });
      }
    }

    layoutContainer.addEventListener("click", handleImageLightbox);
  })
  .catch((error) => console.log(error));

function handleThemeToggle(event) {
  const isChecked = event.target.checked;
  const body = document.querySelector("body");

  if (isChecked) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
}

const themeSwitch = document.querySelector(".switch input");

themeSwitch.addEventListener("change", handleThemeToggle);
