let valeurInitial = 13;
let valeur = valeurInitial;

const like = document.querySelector(".like");
const likeCount = document.querySelector(".like-nombre");

like.addEventListener("click", () => {
    if (valeur === valeurInitial) {
        valeur = valeur + 1;
        like.style.backgroundColor = "red";
        like.style.color = "white";
        likeCount.style.color = "red"
    } else {
        valeur = valeur - 1;
        like.style.backgroundColor = "";
        like.style.color = "";
        likeCount.style.color = "black"
    }
    likeCount.textContent = valeur;
});


let nombreComment = 0;
const commentNumer = document.querySelector(".comment-nombre");

const commentBtn = document.querySelector(".comment");
const modal = document.getElementById("modalComment");
const sendBtn = document.getElementById("sendComment");
const modalInput = document.getElementById("modalInput");
const commentSection = document.querySelector(".commentaire-section");

commentBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

sendBtn.addEventListener("click", () => {
    if (modalInput.value.trim() === "") return;

    nombreComment++;
    commentNumer.textContent = nombreComment;

    const comtext = document.createElement("div");
    comtext.classList.add("comtext");
    comtext.textContent = modalInput.value;
    commentSection.appendChild(comtext);

    modalInput.value = "";
    modal.style.display = "none";
});
