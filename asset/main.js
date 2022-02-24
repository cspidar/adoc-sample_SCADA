document.addEventListener("DOMContentLoaded", function () {
  // // UI 버튼
  // const targetMenu = document.querySelector("body");
  // const uiMenu = document.createElement("div");
  // uiMenu.className = "uiMenu";
  // uiMenu.setAttribute("onclick", "this.classList.toggle('open')");
  // targetMenu.appendChild(uiMenu);

  // const targetButton = document.querySelector(".uiMenu");

  // const uiButtonToc = document.createElement("div");
  // uiButtonToc.innerHTML = "목차";
  // uiButtonToc.className = "uiButton toc";
  // uiButtonToc.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   const toc = document.querySelector("#toc");
  //   const body = document.querySelector("body");
  //   if (body.classList.contains("toc2")) {
  //     body.classList.remove("toc2");
  //     body.classList.remove("toc-left");
  //     toc.style.display = "none";
  //   } else {
  //     body.classList.add("toc2");
  //     body.classList.add("toc-left");
  //     toc.style.display = "block";
  //   }
  // });
  // targetButton.appendChild(uiButtonToc);

  // const uiButtonPdf = document.createElement("div");
  // uiButtonPdf.addEventListener("click", function (e) {
  //   window.onbeforeprint = function () {
  //     // window.PagedPolyfill.preview();
  //   };

  //   window.print();

  //   window.onafterprint = function () {};
  // });

  // uiButtonPdf.innerHTML = "PDF";
  // uiButtonPdf.className = "uiButton pdf";
  // targetButton.appendChild(uiButtonPdf);

  //

  // 요소 조절
  // h1
  const h1 = document.querySelector("h1");
  let title = h1.innerText.split(": ");
  h1.innerHTML = `<span class="titleMain">${title[0]}</span> <span class="titleSub">${title[1]}</span>`;
  // console.log(title);

  // logo & button
  const logo = document.querySelector("#toctitle");
  logo.outerHTML =
    "<div id = logo > <div class=logoBox> <img class=logo src=images/icons/Logo.svg /> </div> <div class=buttonBox> <img class=testButton1 src=images/icons/menu.svg /> </div> </div>";

  // TOC h2
  const toc = document.querySelectorAll(".sectlevel1 > li > a");
  for (let h2 of toc) {
    let h2Li = h2.innerHTML;
    if (!isNaN(h2Li[0])) h2.className = "tocH2";
  }

  // TOC img
  const tocImg = document.querySelectorAll(".sectlevel2 img");
  for (let img of tocImg) {
    img.className = "tocImg";
  }

  // first admonition
  const firstWarning = document.querySelector(
    ".admonitionblock.warning td.content"
  );
  firstWarning.style = "width: 34rem";
  const firstCaution = document.querySelector(
    ".admonitionblock.caution td.content"
  );
  firstCaution.style = "width: 34rem";
  const firstNote = document.querySelector(".admonitionblock.note td.content");
  firstNote.style = "width: 34rem";
  const firstTip = document.querySelector(".admonitionblock.tip td.content");
  firstTip.style = "width: 34rem";
  const firstImportant = document.querySelector(
    ".admonitionblock.important td.content"
  );
  firstImportant.style = "width: 34rem";
});
