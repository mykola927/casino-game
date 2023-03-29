window.onload = function () {
  //card array
  var card_array1 = [
    [
      [7, 2, 0],
      [8, 3, 4],
      [2, 8, 7],
    ],
    [
      [2, 3, 1],
      [5, 8, 5],
      [3, 1, 2],
    ],
    [
      [1, 2, 1],
      [3, 7, 3],
      [4, 6, 7],
    ],
    [
      [4, 6, 3],
      [2, 1, 2],
      [8, 6, 4],
    ],
    [
      [7, 8, 2],
      [8, 6, 4],
      [2, 1, 0],
    ],
    [
      [8, 5, 1],
      [4, 3, 4],
      [2, 6, 2],
    ],
    [
      [6, 1, 8],
      [2, 3, 6],
      [5, 2, 1],
    ],
    [
      [7, 6, 2],
      [1, 5, 4],
      [2, 5, 1],
    ],
    [
      [7, 3, 2],
      [4, 8, 1],
      [1, 2, 7],
    ],
    [
      [1, 3, 1],
      [2, 3, 5],
      [2, 5, 7],
    ],
  ];
  var card_array2 = [
    [
      [0, 4, 6],
      [1, 2, 3],
      [0, 3, 1],
    ],
    [
      [2, 4, 7],
      [1, 6, 1],
      [0, 3, 4],
    ],
    [
      [3, 4, 7],
      [6, 8, 0],
      [0, 3, 4],
    ],
    [
      [6, 4, 7],
      [1, 8, 0],
      [0, 3, 4],
    ],
    [
      [2, 4, 7],
      [2, 7, 0],
      [0, 3, 4],
    ],
    [
      [2, 4, 7],
      [2, 6, 0],
      [0, 3, 5],
    ],
    [
      [2, 4, 7],
      [1, 8, 8],
      [3, 4, 6],
    ],
    [
      [2, 5, 7],
      [1, 6, 1],
      [0, 2, 5],
    ],
    [
      [1, 2, 7],
      [2, 5, 0],
      [1, 3, 4],
    ],
    [
      [2, 6, 7],
      [2, 4, 1],
      [0, 8, 4],
    ],
  ];
  var card_array3 = [
    [
      [1, 2, 1],
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [3, 2, 1],
      [2, 2, 3],
      [1, 7, 8],
    ],
    [
      [3, 2, 1],
      [7, 3, 3],
      [8, 2, 6],
    ],
    [
      [8, 2, 5],
      [5, 2, 3],
      [4, 5, 6],
    ],
    [
      [7, 2, 6],
      [3, 7, 2],
      [1, 7, 6],
    ],
    [
      [8, 1, 8],
      [2, 8, 2],
      [1, 5, 6],
    ],
    [
      [3, 4, 2],
      [2, 4, 3],
      [1, 7, 3],
    ],
    [
      [7, 2, 8],
      [0, 7, 1],
      [4, 3, 7],
    ],
    [
      [1, 8, 1],
      [5, 2, 3],
      [0, 1, 6],
    ],
    [
      [1, 0, 3],
      [2, 0, 2],
      [4, 0, 1],
    ],
  ];

  var result = [0, 0, 0];
  var card_number = 3;
  var card_width = 170;
  var card_height = 170;
  var current_array = [
    [0, 2, 1],
    [3, 4, 3],
    [6, 8, 6],
  ];
  var global_i = 0;
  var global_j = 0;
  var global_k = 0;
  var global_m = 0;
  var appearCardSetInterval = null;
  var blurCardInterval = null;
  var winCardInterval = null;
  var multiInterval = null;
  var current_currency = 0;
  var current_card = 1;
  var current_num = 0;
  var price = [1, 5, 10, 15, 20, 25, 30, 40, 50];
  var success_flag = false;
  //Game object
  var Game = new Game();
  Game.initial();

  function Game() {
    this.initial = function () {
      var random = getRandomInt(card_array1.length);
      current_array = card_array1[random];
      cardInitial();
      controlpanelInitial();
    };
  }

  function cardInitial() {
    $(".betting_card").html("");
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        $(".betting_card").append(
          "<div id='card-" +
            i +
            "-" +
            j +
            "' class='card ' style='top: " +
            i * card_height +
            "px; left: " +
            j * card_width +
            "px'><img src='./sprites/symbol_" +
            current_array[i][j] +
            "/symbol_" +
            current_array[i][j] +
            "_0.png' class='full'></div>"
        );
      }
    }
    $(".card").append("<div class='effect'></div>");
    for (var i = 0; i < 54; i++) {
      if (i == 0) {
        $(".effect").append(
          "<img src='./sprites/silver_scratch/silver_scratch_" +
            i +
            ".png' class='full show' />"
        );
      } else {
        $(".effect").append(
          "<img src='./sprites/silver_scratch/silver_scratch_" +
            i +
            ".png' class='full hidden' />"
        );
      }
    }
    $(".card").append("<div class='background_square'></div>");
    for (var i = 0; i < 25; i++) {
      if (i == 0) {
        $(".background_square").append(
          "<img src='./sprites/win_frame_anim/win_frame_anim_" +
            i +
            ".png' class='full show' />"
        );
      } else {
        $(".background_square").append(
          "<img src='./sprites/win_frame_anim/win_frame_anim_" +
            i +
            ".png' class='full hidden' />"
        );
      }
    }
  }

  function controlpanelInitial() {
    $(".start_panel").html("");
    $(".card_panel").html("");
    $(".winning_panel").html("");
    $(".start_panel").append(
      "<img src='./sprites/but_generic.png' /><p class='text-position'>QUICK<br>SCRATCH</p>"
    );
    $(".winning_panel").append(
      "<img src='./sprites/gui_bg.png' /><div class='text-position'><p>WINNINGS</p><p>$<span id='winning'>0</span>.00</p></div>"
    );
    $(".card_panel").append(
      "<img src='./sprites/gui_bg.png' /><div class='text-position'><p>CARDS</p><p><span id='card_number'>1</span>/" +
        card_number +
        "</p></div>"
    );
  }

  $(".card").click(async function () {
    var id = $(this).attr("id");
    if (id.split("-").length == 3 && appearCardSetInterval == null) {
      $(this).attr("id", id + "-1");
      var i = id.split("-")[1];
      var j = id.split("-")[2];
      await appearCard(this, current_array[i][j]);
      await validate();
      current_num++;
      if (current_num == 9) {
        if (success_flag == false) {
          setTimeout(noWinModal, 2000);
        } else {
          setTimeout(successModal, 2000);
        }
      }
    }
  });

  function noWinModal() {
    clearInterval(blurCardInterval);
    $(".card .background_square img").removeClass("show").addClass("hidden");
    $(".card .background_square img:first-child")
      .removeClass("hidden")
      .addClass("show");
    $(".modal").removeClass("hidden");
    $(".modal .error").removeClass("hidden").addClass("show");
  }

  function successModal() {}

  async function appearCard(obj) {
    appearCardSetInterval = await setInterval(appearCardEffect, 30, obj);
  }
  function appearCardEffect(obj) {
    global_i++;
    $(obj.childNodes[1].childNodes[global_i - 1])
      .removeClass("show")
      .addClass("hidden");
    $(obj.childNodes[1].childNodes[global_i])
      .removeClass("hidden")
      .addClass("show");

    if (global_i == 53) {
      global_i = 0;
      clearInterval(appearCardSetInterval);
      appearCardSetInterval = null;
    }
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  $(".start_panel").click(function () {
    var total_ids = [];
    $(".card").each(function () {
      var id = $(this).attr("id");
      if (id.split("-").length == 3) {
        total_ids.push(id);
      }
    });
    if (multiInterval == null) {
      multiInterval = setInterval(multiOpen, 30, total_ids);
    }
  });

  function multiOpen(ids) {
    global_m++;
    ids.map((index) => {
      $("#" + index + " .effect img")
        .addClass("hidden")
        .removeClass("show");
      $("#" + index + " .effect img:nth-child(" + global_m + ")")
        .removeClass("hidden")
        .addClass("show");
    });

    if (global_m == 54) {
      global_m=0
      ids.map((index) => {
        $("#" + index).attr("id", index + "-1");
      });
      clearInterval(multiInterval);
      multiInterval=null;
      validate();
      current_num = 0;
      if (success_flag == false) {
        setTimeout(noWinModal, 2000);
      } else {
        setTimeout(successModal, 2000);
      }
    }
  }

  async function validate() {
    var validate_array = [];
    $(".card").each(function () {
      var id = $(this).attr("id");
      if (id.split("-").length == 4) {
        var array = [];
        array[0] = this;
        array[1] = current_array[id.split("-")[1]][id.split("-")[2]];
        array[2] = id;
        validate_array.push(array);
      }
    });
    twoblurEffect(validate_array);
  }

  function twoblurEffect(validate) {
    var result_ids = [];
    var total_ids = [];
    for (var i = 0; i < validate.length; i++) {
      var num = [];
      num.push(i);
      for (var j = i; j < validate.length; j++) {
        if (i !== j) {
          if (validate[i][1] == validate[j][1]) {
            num.push(j);
          }
        }
      }
      if (num.length == 2) {
        for (var k = 0; k < num.length; k++) {
          result_ids.push(validate[num[k]][2]);
        }
      }
      if (num.length == 3) {
        for (var k = 0; k < num.length; k++) {
          total_ids.push(validate[num[k]][2]);
        }
      }
    }
    clearInterval(blurCardInterval);
    if (total_ids.length == 0) {
      blurCardInterval = setInterval(blurCardEffect, 100, result_ids);
    } else {
      success_flag=true
      completeCard(total_ids);
    }
  }

  function blurCardEffect(result_ids) {
    global_j++;
    result_ids.map((id) => {
      $("#" + id + " .background_square img")
        .removeClass("show")
        .addClass("hidden");
      $("#" + id + " .background_square img:nth-child(" + global_j + ")")
        .removeClass("hidden")
        .addClass("show");
    });
    if (global_j == 24) {
      global_j = 0;
    }
  }

  async function completeCard(total_ids) {
    $(".card").each(function () {
      var id = $(this).attr("id");
      if (id.split("-").length == 4) {
        $(this.childNodes[2].childNodes).removeClass("show").addClass("hidden");
        $(this.childNodes[2].childNodes[0])
          .removeClass("hidden")
          .addClass("show");
      }
    });
    await total_ids.map((index) => {
      $("#" + index).addClass("shake");
    });
    $(".card").each(async function () {
      var id = $(this).attr("id");
      if (id.split("-").length == 3) {
        $(this.childNodes[1].childNodes).removeClass("show").addClass("hidden");
        $(this).attr("id", id + "-1");
      }
    });
    setTimeout(finishCard, 3000, total_ids);
  }
 
  function finishCard(total_ids) {
    total_ids.map((index) => {
      $("#" + index).removeClass("shake");
    });
    $(".modal").removeClass("hidden");
    $(".modal .error").addClass("hidden").removeClass("show")
    $(".modal .success").removeClass("hidden").addClass("show");
    var result_value =
      current_array[total_ids[0].split("-")[1]][total_ids[0].split("-")[2]];
    $(".modal .success .success_img").html("");
    $(".modal .success .success_effect").html("");
    for (var i = 0; i < 25; i++) {
      $(".modal .success .success_img").append(
        "<img class='full hidden' src='./sprites/symbol_" +
          result_value +
          "/symbol_" +
          result_value +
          "_" +
          i +
          ".png'>"
      );
    }
    for (var i = 0; i < 25; i++) {
      $(".modal .success .success_effect").append(
        "<img class='full hidden' src='./sprites/win_frame_anim/win_frame_anim_" +
          i +
          ".png'>"
      );
    }
    current_currency += price[result_value];
    $(".modal .success .success_value").html("");
    $(".modal .success .success_btn").html("");
    $(".modal .success .success_value").append(
      "<img class='full' src='./sprites/win_amount_bg.png'/><p>$" +
        price[result_value] +
        ".00<p>"
    );
    $(".modal .success .success_btn").append(
      "<img class='full' src='./sprites/but_generic_small.png' /><p>PACK<br>COMPLETE</p>"
    );
    winCardInterval = setInterval(winCard, 50);
  }
  function winCard() {
    global_k++;
    $(".modal .success .success_img img")
      .addClass("hidden")
      .removeClass("show");
    $(".modal .success .success_img img:nth-child(" + global_k + ")")
      .removeClass("hidden")
      .addClass("show");
    $(".modal .success .success_effect img")
      .addClass("hidden")
      .removeClass("show");
    $(".modal .success .success_effect img:nth-child(" + global_k + ")")
      .removeClass("hidden")
      .addClass("show");
    if (global_k == 24) {
      global_k = 0;
    }
  }
  $(".modal .success .success_btn").click(function () {
    current_card++;
    clearInterval(winCardInterval);
    if (current_card == 4) {
      $(".error").removeClass("show").addClass("hidden");
      $(".success").removeClass("show").addClass("hidden");
      $(".gameover").removeClass("hidden").addClass("show");
      $(".modal .gameover #result_price").text(current_currency);
      changeCurrentCurrency(current_currency);
    } else {
      $(".modal").addClass("hidden");
      $(".success").removeClass("show").addClass("hidden");
      nextcardInitial();
      changeCardNumber(current_card);
      changeCurrentCurrency(current_currency);
    }
  });
  $(".next").click(function () {
    appearCardSetInterval = null;
    current_card++;
    if (current_card == 4) {
      $(".error").removeClass("show").addClass("hidden");
      $(".success").removeClass("show").addClass("hidden");
      $(".gameover").removeClass("hidden").addClass("show");
      $(".modal .gameover #result_price").text(current_currency);
    } else {
      $(".modal").addClass("hidden");
      $(".error").removeClass("show").addClass("hidden");
      $(".success").removeClass("show").addClass("hidden");
      nextcardInitial();
      changeCardNumber(current_card);
      changeCurrentCurrency(current_currency);
    }
  });

  function changeCardNumber(num) {
    $("#card_number").text(num);
  }
  function changeCurrentCurrency(currency) {
    $("#winning").text(currency);
  }
  function nextcardInitial() {
    $(".card").removeClass("shake");
    if (current_card == 1) {
      current_array = card_array1[getRandomInt(card_array1.length)];
    } else if (current_card == 2) {
      current_array = card_array2[getRandomInt(card_array2.length)];
    } else if (current_card == 3) {
      current_array = card_array3[getRandomInt(card_array3.length)];
    }
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        $("#card-" + i + "-" + j + "-1 > img").attr(
          "src",
          "./sprites/symbol_" +
            current_array[i][j] +
            "/symbol_" +
            current_array[i][j] +
            "_0.png"
        );
        $("#card-" + i + "-" + j + "-1 .effect img:first-child")
          .removeClass("hidden")
          .addClass("show");
        $("#card-" + i + "-" + j + "-1").attr("id", "card-" + i + "-" + j);
      }
    }
    current_num = 0;
    success_flag=false
  }
  $(".exit").click(function () {
    $(".modal").addClass("hidden");
    $(".gameover").removeClass("show").addClass("hidden");
    location.reload();
  });
};
