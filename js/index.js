"use strict";
const gameHeading = document.querySelector(".game__heading"),
  playerScore = document.querySelector(".game__ui-player-score"),
  cpuScore = document.querySelector(".game__ui-cpu-score"),
  playerIcon = document.querySelector(".game__ui-icon-0"),
  cpuIcon = document.querySelector(".game__ui-icon-1"),
  cpuNameEl = document.querySelector(".game__ui-cpu-name"),
  gameButtonsContainer = document.querySelector(".game__buttons"),
  gameButtons = document.querySelectorAll(".game__buttons-btn"),
  choices = ["Rock", "Paper", "Scissors"],
  cpuPlayerNames = ["Bob", "Emma", "Steve", "Lauren", "Alex", "Kate"],
  choicesIcons = [
    '<svg class="game__ui-icon-fist" width="60" height="64" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M25.8361 0.599609L4.26514 7.24086L0.323242 22.0401L6.72865 19.1804L8.13561 18.5531L8.47252 20.0564L9.65172 25.3291L10.5149 29.174L7.58374 26.542L5.46523 24.6384L1.66241 28.9973L20.6181 47.3254L21.9194 41.8418L22.9342 37.5463L24.3367 41.7325L31.7111 63.7791L53.265 60.2334L59.4305 32.8843L48.0343 12.8423L25.8361 0.599609ZM18.0618 7.32104L14.3135 12.699L13.8755 22.5962L10.2117 10.6101L18.0618 7.32104ZM20.4665 19.909L35.7118 40.8313L49.8496 45.3966L35.3792 45.2829L20.4665 28.0329V19.9092V19.909ZM5.68853 42.0063L24.5726 62.6423L23.8229 53.7646L5.68853 42.0063Z" fill="#4F4F4F"/>\n</svg>\n',
    '<svg class="game__ui-icon-fist" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M41 0.125C43.2 0.124877 45.3169 0.965435 46.9175 2.47469C48.5181 3.98395 49.4816 6.04781 49.6106 8.244L49.625 8.75V37.5H51.7813C53.6414 37.5 55.1738 38.9145 55.3578 40.7258L55.375 41.0938V46.125C55.3751 48.325 54.5346 50.4419 53.0253 52.0425C51.5161 53.6431 49.4522 54.6066 47.256 54.7356L46.75 54.75H18C15.8 54.7501 13.6831 53.9096 12.0825 52.4003C10.4819 50.8911 9.51844 48.8272 9.38938 46.631L9.375 46.125V17.375H4.34375C3.45406 17.3754 2.59584 17.0458 1.93517 16.4499C1.27451 15.854 0.858354 15.0343 0.76725 14.1493L0.75 13.7813V8.75C0.749877 6.55002 1.59043 4.43315 3.09969 2.8325C4.60895 1.23186 6.67281 0.268441 8.869 0.139375L9.375 0.125H41ZM49.625 43.25H23.75V46.125C23.75 47.1313 23.5775 48.1001 23.2613 49H46.75C47.5125 49 48.2438 48.6971 48.7829 48.1579C49.3221 47.6188 49.625 46.8875 49.625 46.125V43.25ZM29.5 26H23.75C23.0172 26.0008 22.3124 26.2814 21.7796 26.7844C21.2467 27.2875 20.9261 27.975 20.8831 28.7065C20.8402 29.438 21.0782 30.1583 21.5485 30.7203C22.0188 31.2822 22.686 31.6433 23.4136 31.7299L23.75 31.75H29.5C30.2328 31.7492 30.9376 31.4686 31.4704 30.9656C32.0033 30.4625 32.3239 29.775 32.3669 29.0435C32.4098 28.312 32.1718 27.5917 31.7015 27.0297C31.2312 26.4678 30.564 26.1067 29.8364 26.0201L29.5 26ZM35.25 14.5H23.75C22.9875 14.5 22.2562 14.8029 21.7171 15.3421C21.1779 15.8812 20.875 16.6125 20.875 17.375C20.875 18.1375 21.1779 18.8688 21.7171 19.4079C22.2562 19.9471 22.9875 20.25 23.75 20.25H35.25C36.0125 20.25 36.7438 19.9471 37.2829 19.4079C37.8221 18.8688 38.125 18.1375 38.125 17.375C38.125 16.6125 37.8221 15.8812 37.2829 15.3421C36.7438 14.8029 36.0125 14.5 35.25 14.5ZM9.375 5.875C8.6125 5.875 7.88124 6.1779 7.34207 6.71707C6.8029 7.25624 6.5 7.9875 6.5 8.75V11.625H9.375V5.875Z" fill="#4F4F4F"/>\n</svg>\n',
    '<svg class="game__ui-icon-fist" width="55" height="63" viewBox="0 0 55 63" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M45.2443 11.7169C46.3369 10.1556 46.7648 8.22421 46.4337 6.3475C46.1027 4.47078 45.0399 2.80235 43.4791 1.70904L42.3003 0.883911L27.5056 22.0152L12.708 0.883911L11.5292 1.70904C9.96881 2.80279 8.90661 4.47143 8.57613 6.34812C8.24565 8.2248 8.67393 10.1559 9.76683 11.7169L22.2415 29.5333L17.0665 36.922C14.16 35.9919 11.0183 36.1191 8.1965 37.2811C5.37474 38.4432 3.05459 40.5653 1.64606 43.2725C0.237543 45.9797 -0.168671 49.0977 0.499208 52.0754C1.16709 55.0531 2.86606 57.6988 5.29589 59.5451C7.72572 61.3913 10.73 62.3193 13.7778 62.1648C16.8255 62.0104 19.7206 60.7836 21.9514 58.7012C24.1821 56.6188 25.605 53.8148 25.9685 50.7849C26.3319 47.7549 25.6127 44.694 23.9377 42.143L27.5027 37.0543L31.0677 42.1373C29.3914 44.6872 28.6704 47.7476 29.0321 50.7776C29.3938 53.8077 30.815 56.6123 33.0444 58.696C35.2738 60.7797 38.1679 62.0083 41.2155 62.1646C44.263 62.321 47.2678 61.3951 49.6987 59.5505C52.1297 57.706 53.8304 55.0615 54.5003 52.0844C55.1702 49.1073 54.7663 45.9892 53.3598 43.2811C51.9533 40.573 49.6348 38.4492 46.814 37.2851C43.9933 36.1209 40.8518 35.9913 37.9447 36.9192L32.7697 29.5333L45.2443 11.7169ZM8.81233 49.25C8.81233 48.6837 8.92388 48.1229 9.1406 47.5997C9.35733 47.0765 9.67498 46.6011 10.0754 46.2006C10.4759 45.8002 10.9513 45.4825 11.4745 45.2658C11.9977 45.0491 12.5585 44.9375 13.1248 44.9375C13.6912 44.9375 14.2519 45.0491 14.7752 45.2658C15.2984 45.4825 15.7738 45.8002 16.1742 46.2006C16.5747 46.6011 16.8923 47.0765 17.1091 47.5997C17.3258 48.1229 17.4373 48.6837 17.4373 49.25C17.4373 50.3938 16.983 51.4907 16.1742 52.2994C15.3655 53.1082 14.2686 53.5625 13.1248 53.5625C11.9811 53.5625 10.8842 53.1082 10.0754 52.2994C9.26668 51.4907 8.81233 50.3938 8.81233 49.25ZM37.5623 49.25C37.5623 48.1063 38.0167 47.0094 38.8254 46.2006C39.6342 45.3919 40.7311 44.9375 41.8748 44.9375C43.0186 44.9375 44.1155 45.3919 44.9242 46.2006C45.733 47.0094 46.1873 48.1063 46.1873 49.25C46.1873 50.3938 45.733 51.4907 44.9242 52.2994C44.1155 53.1082 43.0186 53.5625 41.8748 53.5625C40.7311 53.5625 39.6342 53.1082 38.8254 52.2994C38.0167 51.4907 37.5623 50.3938 37.5623 49.25Z" fill="#4F4F4F"/>\n</svg>\n',
  ],
  randomCpuName = () =>
    cpuPlayerNames[Math.floor(Math.random() * cpuPlayerNames.length)],
  cpuName = cpuPlayerNames[Math.floor(Math.random() * cpuPlayerNames.length)];
cpuNameEl.innerText = `${cpuName}'s`;
const makeChoice = () => choices[Math.floor(Math.random() * choices.length)],
  updateUI = (e, s) => {
    (playerIcon.innerHTML = choicesIcons[choices.findIndex((s) => s === e)]),
      (cpuIcon.innerHTML = choicesIcons[choices.findIndex((e) => e === s)]);
  },
  hideUI = (e = !0) => {
    e &&
      (gameHeading.classList.add("hide"),
      playerIcon.classList.add("scale-down"),
      cpuIcon.classList.add("scale-down"),
      gameButtons.forEach((e) => (e.disabled = !0))),
      e ||
        (gameHeading.classList.remove("hide"),
        playerIcon.classList.remove("scale-down"),
        cpuIcon.classList.remove("scale-down"),
        gameButtons.forEach((e) => (e.disabled = !1)));
  },
  updateScores = (e, s, a, c = !1) => {
    if (!c) {
      let c = +s.innerText;
      return (
        ++c,
        (s.innerText = c.toString()),
        s.classList.add("move"),
        setTimeout(() => {
          s.classList.remove("move");
        }, 600),
        void (e.innerHTML = `${a}`)
      );
    }
    e.innerHTML = `${a}`;
  },
  gameResult = (e, s) => {
    "Rock" === e &&
      "Scissors" === s &&
      updateScores(
        gameHeading,
        playerScore,
        '<span class="red-text">You Win</span>: Rock beats Scissors'
      ),
      "Paper" === e &&
        "Rock" === s &&
        updateScores(
          gameHeading,
          playerScore,
          '<span class="red-text">You Win</span>: Paper beats Rock'
        ),
      "Scissors" === e &&
        "Paper" === s &&
        updateScores(
          gameHeading,
          playerScore,
          '<span class="red-text">You Win</span>: Scissors beats Paper'
        ),
      "Rock" === s &&
        "Scissors" === e &&
        updateScores(
          gameHeading,
          cpuScore,
          `<span class="blue-text">${cpuName} Wins</span>: Rock beats Scissors`
        ),
      "Paper" === s &&
        "Rock" === e &&
        updateScores(
          gameHeading,
          cpuScore,
          `<span class="blue-text">${cpuName} Wins</span>: Paper beats Rock`
        ),
      "Scissors" === s &&
        "Paper" === e &&
        updateScores(
          gameHeading,
          cpuScore,
          `<span class="blue-text">${cpuName} Wins</span>: Scissors beats Paper`
        ),
      "Rock" === e &&
        "Rock" === s &&
        updateScores(
          gameHeading,
          cpuScore,
          '<span class="green-text">Draw</span>: Both players chose Rock',
          !0
        ),
      "Paper" === e &&
        "Paper" === s &&
        updateScores(
          gameHeading,
          cpuScore,
          '<span class="green-text">Draw</span>: Both players chose Paper',
          !0
        ),
      "Scissors" === e &&
        "Scissors" === s &&
        updateScores(
          gameHeading,
          cpuScore,
          '<span class="green-text">Draw</span>: Both players chose Scissors',
          !0
        );
  };
gameButtonsContainer.addEventListener("click", (e) => {
  var s, a;
  const c =
      null ===
        (a =
          null === (s = e.target.closest("button")) || void 0 === s
            ? void 0
            : s.dataset) || void 0 === a
        ? void 0
        : a.choice,
    o = choices[Math.floor(Math.random() * choices.length)];
  c &&
    (hideUI(),
    setTimeout(() => {
      updateUI(c, o), gameResult(c, o), hideUI(!1);
    }, 1500));
});
