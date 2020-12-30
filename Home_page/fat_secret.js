function display_handler(event) {
  var ele1 = document.getElementById("disp_feeds");
  var ele2 = document.getElementById("disp_calendar");
  var ele3 = document.getElementById("disp_food");
  var ele4 = document.getElementById("disp_exercise");
  var ele5 = document.getElementById("disp_weight_history");
  var ele6 = document.getElementById("disp_journal");
  var ele7 = document.getElementById("disp_groups");
  var ele8 = document.getElementById("disp_challenges");
  var ele9 = document.getElementById("disp_forum_posts");
  var ele10 = document.getElementById("disp_following");
  var ele11 = document.getElementById("disp_cook_book");

  ele1.style.visibility = "hidden";
  ele2.style.visibility = "hidden";
  ele3.style.visibility = "hidden";
  ele4.style.visibility = "hidden";
  ele5.style.visibility = "hidden";
  ele6.style.visibility = "hidden";
  ele7.style.visibility = "hidden";
  ele8.style.visibility = "hidden";
  ele9.style.visibility = "hidden";
  ele10.style.visibility = "hidden";
  ele11.style.visibility = "hidden";

  var button = event.target;
  if (button.id == "feeds") {
    ele1.style.visibility = "visible";
  }
  if (button.id == "calendar") {
    ele2.style.visibility = "visible";
  }
  if (button.id == "food") {
    ele3.style.visibility = "visible";
  }
  if (button.id == "exercise") {
    ele4.style.visibility = "visible";
  }
  if (button.id == "weight_history") {
    ele5.style.visibility = "visible";
  }
  if (button.id == "journal") {
    ele6.style.visibility = "visible";
  }
  if (button.id == "groups") {
    ele7.style.visibility = "visible";
  }
  if (button.id == "challenges") {
    ele8.style.visibility = "visible";
  }
  if (button.id == "forum_posts") {
    ele9.style.visibility = "visible";
  }
  if (button.id == "following") {
    ele10.style.visibility = "visible";
  }
  if (button.id == "cook_book") {
    ele11.style.visibility = "visible";
  }
}

var topics = document.querySelectorAll(".fm1_items");
for (var i = 0; i < topics.length; i++) {
  topics[i].addEventListener("click", display_handler);
}

// Feeds

class post_feeds {
  constructor(
    profile_pic = "profile_pic.jpg",
    name = "Uditanshu Kumar",
    post_details,
    post_image,
    feed_id
  ) {
    this.name = name;
    this.profile_pic = profile_pic;
    this.post_details = post_details;
    this.post_image = post_image;
    this.feed_id = feed_id;
    this.flag_likes = 0;
    this.add_data_to_parent();
    this.activate_features();
  }

  //Return Element...START

  post_element = () => {
    var element = "";
    element += ` <div class="df_post">
                    <div class="df_post_1">
                      <div class="df_post_11">
                        <img src="${this.profile_pic}" height="60px" width="60px" />
                      </div>
                      <div class="df_post_12">
                        <br />
                        <a href="#" id="df_post_12_view_short_profile_${this.feed_id}">${this.name}</a>
                        <div class="df_post_12_short_profile" id="df_post_12_short_profile_${this.feed_id}" style="visibility: hidden">
                          <div class="df_post_12_short_profile_1">
                          <div><img src="${this.profile_pic}" /></div>
                          <div>
                            ${this.name}<br />
                            <br />
                            <span>Lost so far: 3.0</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Still to go: 8.5</span>
                          </div>
                        </div>
                        <div class="df_post_12_short_profile_2">
                          <button class="df_post_12_short_profile_21">
                            Follow +
                          </button>
                          <button class="df_post_12_short_profile_22">
                            View Member profile +
                          </button>
                        </div>
                      </div>
                      <br /><br />
                      ${this.post_details}
                      </div>
                    </div>
                    <div class="df_post_2">
                      <img src="${this.post_image}"/>
                    </div>
                    <div class="df_post_3">3 days ago</div>
                    <div class="df_post_4">
                      <div class="df_post_41">
                        <div class="df_post_41_comments">
                          <span id="df_post_41_comments_${this.feed_id}">1</span> comments
                        </div>
                        <div class="df_post_41_supporter1">
                          <img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png"/>
                          <span id="df_post_41_supporter1_${this.feed_id}">26</span> supporters
                        </div>
                        <button class="df_post_41_supporter2" id="df_post_41_supporter2_${this.feed_id}">
                          <img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png" id="df_post_41_supporter21_${this.feed_id}"/>
                          support
                        </button>
                      </div>
                      <div class="df_post_42">
                          <div class="df_post_42_read_comment" id="df_post_42_read_comment_${this.feed_id}">
                            <div class="df_post_42_read_comment_1">
                              <div>
                                <img src="${this.profile_pic}" />
                              </div>
                              <div>
                                <span>${this.name}</span><br />
                                <span
                                  >jvsjdbsabdhasbdhbsajdbsjabdsakndksandkkdjbksabd
                                  jhbdhbdhvsjdbsabdhasbdhbsajdbsjabd jhbdhbdh</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="df_post_42_insert_comment">
                            <img src="${this.profile_pic}" alt="profile_pic" />
                            <input
                              type="text"
                              placeholder="Write Comment"
                              id="df_post_42_insert_comment_1_${this.feed_id}"
                            />
                          </div>
                          <div class="df_post_42_post_comment">
                          <button
                            class="df_post_42_post_comment_button_1"
                            id="df_post_42_post_comment_button_1_${this.feed_id}"
                          >
                            Post Comment
                          </button>
                          <button
                            class="df_post_42_post_comment_button_2"
                            id="df_post_42_post_comment_button_2_${this.feed_id}"
                          >
                            Cancel
                          </button>
                          </div>
                        </div>
                      </div>
                
                      `;
    return element;
  };

  // short profile functions...START
  short_profile = () => {
    var element = document.getElementById(
      `df_post_12_view_short_profile_${this.feed_id}`
    );

    element.addEventListener("mouseover", () => {
      document.getElementById(
        `df_post_12_short_profile_${this.feed_id}`
      ).style.visibility = "visible";
    });

    element.addEventListener("mouseout", () => {
      document.getElementById(
        `df_post_12_short_profile_${this.feed_id}`
      ).style.visibility = "hidden";
    });
  };

  // short profile functions....END

  // Add and remove comments ....START

  add_comments_handler2 = () => {
    var element2 = document.getElementById(
      `df_post_42_insert_comment_1_${this.feed_id}`
    );
    element2.value = "";
  };

  add_comments_handler1 = () => {
    var element2 = document.getElementById(
      `df_post_42_insert_comment_1_${this.feed_id}`
    );
    var comment = element2.value;
    var element3 = document.getElementById(
      `df_post_42_read_comment_${this.feed_id}`
    );
    var result_element = `<div class="df_post_42_read_comment_1">
                          <div>
                            <img src="${this.profile_pic}" />
                          </div>
                          <div>
                            <span>${this.name}</span><br />
                            <span
                              >${comment}</span
                            >
                          </div>
                        </div>`;
    element3.innerHTML += result_element;

    element2.value = "";

    var element4 = document.getElementById(
      `df_post_41_comments_${this.feed_id}`
    );
    element4.innerHTML = Number(element4.innerHTML) + 1;
  };

  add_comments = () => {
    var element1 = document.getElementById(
      `df_post_42_post_comment_button_1_${this.feed_id}`
    );
    element1.addEventListener("click", this.add_comments_handler1);

    var element4 = document.getElementById(
      `df_post_42_post_comment_button_2_${this.feed_id}`
    );
    element4.addEventListener("click", this.add_comments_handler2);
  };
  // Add and remove comments ....END

  //Add likes ....START
  add_likes_helper = () => {
    var element1 = document.getElementById(
      `df_post_41_supporter1_${this.feed_id}`
    );
    var element2 = document.getElementById(
      `df_post_41_supporter21_${this.feed_id}`
    );
    if (this.flag_likes == 0) {
      element1.innerHTML = Number(element1.innerHTML) + 1;
      this.flag_likes = 1;
      element2.style.backgroundColor = "red";
    } else if (this.flag_likes == 1) {
      element1.innerHTML = Number(element1.innerHTML) - 1;
      this.flag_likes = 0;
      element2.style.backgroundColor = "grey";
    }
  };

  add_likes = () => {
    var element2 = document.getElementById(
      `df_post_41_supporter2_${this.feed_id}`
    );
    element2.addEventListener("click", this.add_likes_helper);
  };

  add_data_to_parent = () => {
    var post_box = document.getElementById("disp_feeds");
    post_box.innerHTML += this.post_element();
  };

  //Add likes...END

  activate_features = () => {
    document.getElementById("feeds").addEventListener("click", () => {
      this.short_profile();
      this.add_likes();
      this.add_comments();
    });
  };
}

class display_feeds {
  constructor() {
    this.count = 1;
    this.post_container = {};
    this.calling_feeds1();
  }

  calling_feeds1 = () => {
    const feeds_arr = [
      {
        profile_pic: "profile_pic.jpg",
        name: "uditanshu",
        post1: "jashjasbjbsaashhjase dwhjbdqwhjdjqw",
        post2:
          "https://m.ftscrt.com/food/d14ea67b-d60c-4a31-902d-df8390af6654_fs2.jpg",
      },
      {
        profile_pic: "profile_pic.jpg",
        name: "rahul",
        post1: "jbfbdfefberferbrfbrfb",
        post2:
          "https://m.ftscrt.com/food/d14ea67b-d60c-4a31-902d-df8390af6654_fs2.jpg",
      },
    ];

    for (let i = 0; i < feeds_arr.length; i++) {
      this.post_container[this.count] = new post_feeds(
        feeds_arr[i]["profile_pic"],
        feeds_arr[i]["name"],
        feeds_arr[i]["post1"],
        feeds_arr[i]["post2"],
        this.count
      );
      this.count += 1;
    }
    console.log(this.post_container);
  };
}

var fat_secret_feeds_container = new display_feeds();
