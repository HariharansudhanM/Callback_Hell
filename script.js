//Callback hell

"use strict";

const display = () => {
  setTimeout(function changeCountdown() {
    document.querySelector(".textArea").textContent = "9";
    (function () {
      setTimeout(function changeCountdown() {
        document.querySelector(".textArea").textContent = "8";

        (function () {
          setTimeout(function changeCountdown() {
            document.querySelector(".textArea").textContent = "7";

            (function () {
              setTimeout(function changeCountdown() {
                document.querySelector(".textArea").textContent = "6";

                (function () {
                  setTimeout(function changeCountdown() {
                    document.querySelector(".textArea").textContent = "5";

                    (function () {
                      setTimeout(function changeCountdown() {
                        document.querySelector(".textArea").textContent = "4";

                        (function () {
                          setTimeout(function changeCountdown() {
                            document.querySelector(".textArea").textContent =
                              "3";

                            (function () {
                              setTimeout(function changeCountdown() {
                                document.querySelector(
                                  ".textArea"
                                ).textContent = "2";

                                (function () {
                                  setTimeout(function changeCountdown() {
                                    document.querySelector(
                                      ".textArea"
                                    ).textContent = "1";

                                    (function () {
                                      setTimeout(
                                        function changeCountdown() {
                                          document.querySelector(
                                            ".textArea"
                                          ).textContent =
                                            "Happy Independence day";
                                          return;
                                        },

                                        1000
                                      );
                                    })();
                                  }, 1000);
                                })();
                              }, 1000);
                            })();
                          }, 1000);
                        })();
                      }, 1000);
                    })();
                  }, 1000);
                })();
              }, 1000);
            })();
          }, 1000);
        })();
      }, 1000);
    })();
  }, 1000);
};

document.querySelector(".trigger").addEventListener("click", display);
