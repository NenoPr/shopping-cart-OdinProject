import uniqid from "uniqid";

const AllProducts = {
  clothes: [
    {
      productType: "Clothes",
      productName: "Hu Tao Hoodie",
      productPrice: 24.99,
      productLocationUrl: "images/clothes/clothes_hu_tao_hoodie_black.jpg",
      productImages: [
        "images/clothes/clothes_hu_tao_hoodie_black.jpg",
        "images/clothes/clothes_hu_tao_hoodie_white.jpg",
        "images/clothes/clothes_hu_tao_hoodie_blue.jpg",
      ],
      productColors: [
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/clothes_hu_tao_hoodie_black.jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/clothes_hu_tao_hoodie_white.jpg",
        },
        {
          color: "blue",
          icon: "🔵",
          image: "images/clothes/clothes_hu_tao_hoodie_blue.jpg",
        },
      ],
      id: uniqid(),
      reviews: [
        {
          name: "Zhongli",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et error qui dignissimos inventore, optio aperiam voluptas, dolorum, impedit possimus aliquid vitae eum facilis laudantium quasi illo ea nihil ipsa?",
        },
        {
          name: "Qi Qi",
          stars: "⭐",
          text: "I didnt order this i dont want it",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellendus magni quasi, error nobis odio eos. Distinctio porro inventore magnam vitae quisquam adipisci? Quaerat consequuntur cum eum ut quibusdam dignissimos distinctio fugiat, temporibus aliquam nulla.",
        },
      ],
    },
    {
      productType: "Clothes",
      productName: "Zhongli Hoodie",
      productPrice: 29.99,
      productLocationUrl: "images/clothes/zhonglie_hoodie_yellow.jpg",
      productImages: [
        "images/clothes/zhonglie_hoodie_yellow.jpg",
        "images/clothes/zhonglie_hoodie_red.jpg",
        "images/clothes/zhonglie_hoodie_white.jpg",
        "images/clothes/zhonglie_hoodie_black.jpg",
      ],
      productColors: [
        {
          color: "yellow",
          icon: "🟡",
          image: "images/clothes/zhonglie_hoodie_yellow.jpg",
        },
        {
          color: "red",
          icon: "🔴",
          image: "images/clothes/zhonglie_hoodie_red.jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/zhonglie_hoodie_white.jpg",
        },
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/zhonglie_hoodie_black.jpg",
        },
      ],
      reviews: [
        {
          name: "Zhongli",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et error qui dignissimos inventore, optio aperiam voluptas, dolorum, impedit possimus aliquid vitae eum facilis laudantium quasi illo ea nihil ipsa?",
        },
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellendus magni quasi, error nobis odio eos. Distinctio porro inventore magnam vitae quisquam adipisci? Quaerat consequuntur cum eum ut quibusdam dignissimos distinctio fugiat, temporibus aliquam nulla.",
        },
      ],
      id: uniqid(),
    },
    {
      productType: "Clothes",
      productName: "Klee Shirt",
      productPrice: 14.99,
      productLocationUrl: "images/clothes/t_shirt_klee_black.jpg",
      productImages: [
        "images/clothes/t_shirt_klee_black.jpg",
        "images/clothes/t_shirt_klee_white.jpg",
      ],
      productColors: [
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/t_shirt_klee_black.jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/t_shirt_klee_white.jpg",
        },
      ],
      id: uniqid(),
      reviews: [
        {
          name: "Jean",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et error qui dignissimos inventore, optio aperiam voluptas, dolorum, impedit possimus aliquid vitae eum facilis laudantium quasi illo ea nihil ipsa?",
        },
        {
          name: "Lisa",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos sed officia assumenda, at recusandae?",
        },
        {
          name: "Kaeya",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellendus magni quasi, error nobis odio eos. Distinctio porro inventore magnam vitae quisquam adipisci? Quaerat consequuntur cum eum ut quibusdam dignissimos distinctio fugiat, temporibus aliquam nulla.",
        },
      ],
    },
    {
      productType: "Clothes",
      productName: "Paimon Hoodie",
      productPrice: 14.99,
      productLocationUrl: "images/clothes/paimon_hodie2_white.jpg",
      productImages: [
        "images/clothes/paimon_hodie2_white.jpg",
        "images/clothes/paimon_hodie2_black.jpg",
        "images/clothes/paimon_hodie2_yellow.jpg",
      ],
      productColors: [
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/paimon_hodie2_white.jpg",
        },
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/paimon_hodie2_black.jpg",
        },
        {
          color: "yellow",
          icon: "🟡",
          image: "images/clothes/paimon_hodie2_yellow.jpg",
        },
      ],
      reviews: [
        {
          name: "Paimon",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et error qui dignissimos inventore, optio aperiam voluptas, dolorum, impedit possimus aliquid vitae eum facilis laudantium quasi illo ea nihil ipsa?",
        },
        {
          name: "Daimon",
          stars: "⭐⭐⭐",
          text: "",
        },
      ],

      id: uniqid(),
    },
    {
      productType: "Clothes",
      productName: "Paimon's Emergency Food",
      productPrice: 14.99,
      productLocationUrl: "images/clothes/paimon_hoodie_white.jpg",
      productImages: [
        "images/clothes/paimon_hoodie_white.jpg",
        "images/clothes/paimon_hoodie_red.jpg",
        "images/clothes/paimon_hoodie_green.jpg",
        "images/clothes/paimon_hoodie_blue.jpg",
      ],
      productColors: [
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/paimon_hoodie_white.jpg",
        },
        {
          color: "red",
          icon: "🔴",
          image: "images/clothes/paimon_hoodie_red.jpg",
        },
        {
          color: "green",
          icon: "🟢",
          image: "images/clothes/paimon_hoodie_green.jpg",
        },
        {
          color: "blue",
          icon: "🔵",
          image: "images/clothes/paimon_hoodie_blue.jpg",
        },
      ],
      reviews: [
        {
          name: "Not Emergency Food!!",
          stars: "⭐",
          text: "Not Emergency Food!!! What do you think Paimon is?!?!? Not tasty at all!!!",
        },
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos sed officia assumenda, at recusandae?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellendus magni quasi, error nobis odio eos. Distinctio porro inventore magnam vitae quisquam adipisci? Quaerat consequuntur cum eum ut quibusdam dignissimos distinctio fugiat, temporibus aliquam nulla.",
        },
        {
          name: "Daimon",
          stars: "⭐⭐⭐⭐⭐",
          text: "",
        },
      ],
      id: uniqid(),
    },
    {
      productType: "Clothes",
      productName: "Hu Taos Little Helper",
      productPrice: 14.99,
      productLocationUrl: "images/clothes/hu_taos_ghost_hoodie_blue.jpg",
      productImages: [
        "images/clothes/hu_taos_ghost_hoodie_blue.jpg",
        "images/clothes/hu_taos_ghost_hoodie_red.jpg",
        "images/clothes/hu_taos_ghost_hoodie_white.jpg",
      ],
      productColors: [
        {
          color: "blue",
          icon: "🔵",
          image: "images/clothes/hu_taos_ghost_hoodie_blue.jpg",
        },
        {
          color: "red",
          icon: "🔴",
          image: "images/clothes/hu_taos_ghost_hoodie_red.jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/hu_taos_ghost_hoodie_white.jpg",
        },
      ],
      reviews: [
        {
          name: "Hu Tao",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos sed officia assumenda, at recusandae?",
        },
      ],

      id: uniqid(),
    },
    {
      productType: "Clothes",
      productName: "Hu Tao Light Hoodie",
      productPrice: 14.99,
      productLocationUrl: "images/clothes/hu_tao_hoodie_2_red.jpg",
      productImages: [
        "images/clothes/hu_tao_hoodie_2_red.jpg",
        "images/clothes/hu_tao_hoodie_2_blue.jpg",
        "images/clothes/hu_tao_hoodie_2_white.jpg",
        "images/clothes/hu_tao_hoodie_2_black.jpg",
      ],
      productColors: [
        {
          color: "red",
          icon: "🔴",
          image: "images/clothes/hu_tao_hoodie_2_red.jpg",
        },
        {
          color: "blue",
          icon: "🔵",
          image: "images/clothes/hu_tao_hoodie_2_blue.jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/hu_tao_hoodie_2_white.jpg",
        },
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/hu_tao_hoodie_2_black.jpg",
        },
      ],
      reviews: [
        {
          name: "Zhongli",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellendus magni quasi, error nobis odio eos. Distinctio porro inventore magnam vitae quisquam adipisci? Quaerat consequuntur cum eum ut quibusdam dignissimos distinctio fugiat, temporibus aliquam nulla.",
        },
        {
          name: "Qi Qi",
          stars: "⭐",
          text: "please stop sending",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellendus magni quasi, error nobis odio eos. Distinctio porro inventore magnam vitae quisquam adipisci? Quaerat consequuntur cum eum ut quibusdam dignissimos distinctio fugiat, temporibus aliquam nulla.",
        },
      ],

      id: uniqid(),
    },
    {
      productType: "Clothes",
      productName: "Ganyu Hoodie",
      productPrice: 14.99,
      productLocationUrl: "images/clothes/ganyu_hoodie_black.jpg",
      productImages: [
        "images/clothes/ganyu_hoodie_black.jpg",
        "images/clothes/ganyu_hoodie_blue.jpg",
        "images/clothes/ganyu_hoodie_white.jpg",
      ],
      productColors: [
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/ganyu_hoodie_black.jpg",
        },
        {
          color: "blue",
          icon: "🔵",
          image: "images/clothes/ganyu_hoodie_blue.jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/ganyu_hoodie_white.jpg",
        },
      ],
      reviews: [
        {
          name: "Keqing",
          stars: "⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et error qui dignissimos inventore, optio aperiam voluptas, dolorum, impedit possimus aliquid vitae eum facilis laudantium quasi illo ea nihil ipsa?",
        },
        {
          name: "Ningguang",
          stars: "⭐⭐⭐⭐",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos sed officia assumenda, at recusandae?",
        },
        {
          name: "Qi Qi",
          stars: "⭐⭐⭐⭐⭐",
          text: "i orderd this tankhs",
        },
        {
          name: "Shenhe",
          stars: "⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repellendus magni quasi, error nobis odio eos. Distinctio porro inventore magnam vitae quisquam adipisci? Quaerat consequuntur cum eum ut quibusdam dignissimos distinctio fugiat, temporibus aliquam nulla.",
        },
      ],
      id: uniqid(),
    },
    {
      productType: "Clothes",
      productName: "Hu Tao's Hoodie",
      productPrice: 14.99,
      productLocationUrl: "images/clothes/hu_tao_hoodie3_yellow.jpg",
      productImages: [
        "images/clothes/hu_tao_hoodie3_yellow.jpg",
        "images/clothes/hu_tao_hoodie_3_white.jpg",
        "images/clothes/hu_tao_hoodie_3_black.jpg",
      ],
      productColors: [
        {
          color: "yellow",
          icon: "🟡",
          image: "images/clothes/hu_tao_hoodie3_yellow..jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/hu_tao_hoodie_3_white.jpg",
        },
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/hu_tao_hoodie_3_black.jpg",
        },
      ],
      reviews: [
        {
          name: "Zhongli",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos sed officia assumenda, at recusandae?",
        },
        {
          name: "Qi Qi",
          stars: "⭐",
          text: "no",
        },
      ],
      id: uniqid(),
    },
    {
      productType: "Clothes",
      productName: "Qi Qi Shirt",
      productPrice: 19.99,
      productLocationUrl: "images/clothes/qi_qi_shirt_blue.jpg",
      productImages: [
        "images/clothes/qi_qi_shirt_blue.jpg",
        "images/clothes/qi_qi_shirt_white.jpg",
        "images/clothes/qi_qi_shirt_black.jpg",
      ],
      productColors: [
        {
          color: "blue",
          icon: "🔵",
          image: "images/clothes/qi_qi_shirt_blue.jpg",
        },
        {
          color: "white",
          icon: "⚪",
          image: "images/clothes/qi_qi_shirt_white.jpg",
        },
        {
          color: "black",
          icon: "⚫",
          image: "images/clothes/qi_qi_shirt_black.jpg",
        },
      ],
      reviews: [
        {
          name: "Hu Tao",
          stars: "⭐⭐⭐⭐⭐",
          text: "Thanks. This'll bury quietly! 😊",
        },
        {
          name: "Dr. Baizhu",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quo libero hic consectetur tenetur minus nobis exercitationem alias voluptas fugiat! Magni animi ipsa quas earum ullam ipsam delectus accusamus facere?",
        },
      ],

      id: uniqid(),
    },
  ],

  figures: [
    {
      productType: "Figure",
      productName: "Ningguang's Throne",
      productPrice: 89.99,
      productLocationUrl: "images/figures/ningguang_figure_img1.jpg",
      id: uniqid(),
      productImages: [
        "images/figures/ningguang_figure_img1.jpg",
        "images/figures/ningguang_figure_img3.jpg",
        "images/figures/ningguang_figure_img4.jpg",
        "images/figures/ningguang_figure_img2.jpg",
        "images/figures/ningguang_figure_img5.jpg",
      ],
      reviews: [
        {
          name: "Keqing",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos sed officia assumenda, at recusandae?",
        },
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Ganyu",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      productType: "Figure",
      productName: "Barbara's Show",
      productPrice: 69.99,
      productLocationUrl: "images/figures/barbara_figure_img1.jpg",
      productImages: [
        "images/figures/barbara_figure_img1.jpg",
        "images/figures/barbara_figure_img2.jpg",
        "images/figures/barbara_figure_img3.jpg",
        "images/figures/barbara_figure_img4.jpg",
        "images/figures/barbara_figure_img5.jpg",
      ],
      id: uniqid(),
      reviews: [
        {
          name: "Barbara Fan Club",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quos sed officia assumenda, at recusandae?",
        },
        {
          name: "Jean",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      productType: "Figure",
      productName: "Lumine's Journey",
      productPrice: 39.99,
      productLocationUrl: "images/figures/lumine_figure_img1.jpg",
      id: uniqid(),
      productImages: [
        "images/figures/lumine_figure_img1.jpg",
        "images/figures/lumine_figure_img2.jpg",
        "images/figures/lumine_figure_img3.jpg",
        "images/figures/lumine_figure_img4.jpg",
        "images/figures/lumine_figure_img5.jpg",
      ],
      reviews: [
        {
          name: "Tartaglia",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          name: "Zhongli",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Xiao",
          stars: "⭐⭐⭐⭐⭐",
          text: "",
        },
      ],
    },

    {
      productType: "Figure",
      productName: "Venti's Harp",
      productPrice: 69.99,
      productLocationUrl: "images/figures/venti_figure_img1.jpg",
      id: uniqid(),
      productImages: [
        "images/figures/venti_figure_img1.jpg",
        "images/figures/venti_figure_img2.jpg",
        "images/figures/venti_figure_img3.jpg",
        "images/figures/venti_figure_img4.jpg",
      ],
      reviews: [
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },

        {
          name: "Fischl",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Just a normal Crow",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },

    {
      productType: "Figure",
      productName: "Klee's Arsenal",
      productPrice: 59.99,
      productLocationUrl: "images/figures/klee_figure_img1.jpg",
      id: uniqid(),
      productImages: [
        "images/figures/klee_figure_img1.jpg",
        "images/figures/klee_figure_img2.jpg",
        "images/figures/klee_figure_img3.jpg",
        "images/figures/klee_figure_img4.jpg",
      ],
      reviews: [
        {
          name: "Jean",
          stars: "⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Lisa",
          stars: "⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Kaeya",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
    },
  ],
  mousePads: [
    {
      productType: "Mouse Pad",
      productName: "Raiden Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/raiden_mousepad.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Sara",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },

        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Yae Miko",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Mouse Pad",
      productName: "Mona Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/mona_mousepad.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Just a normal Crow",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Fischl",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },

    {
      productType: "Mouse Pad",
      productName: "Diluc Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/diluc_mousepad.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          name: "Jean",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Kaeya",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Mouse Pad",
      productName: "Mona's Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/mona_mousepad2.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Just a normal Crow",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. oluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
      ],
    },

    {
      productType: "Mouse Pad",
      productName: "Raiden's Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/raiden_mousepad2.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Sara",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Yae Miko",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      productType: "Mouse Pad",
      productName: "Eula Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/eula_mousepad.jpg",
      id: uniqid(),
    },
    {
      productType: "Mouse Pad",
      productName: "Fischl Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/fischl_mousepad.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Fischl",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Retainer",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Mouse Pad",
      productName: "Jean Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/jean_mousepad.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Barbara",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Diluc",
          stars: "⭐⭐⭐⭐⭐",
          text: "Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat?",
        },
        {
          name: "Lisa",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Mouse Pad",
      productName: "Mona Special Edition Mouse Pad",
      productPrice: 29.49,
      productLocationUrl: "images/mousepads/mona_mousepad3.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Just a normal Crow",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
  ],

  posters: [
    {
      productType: "Poster",
      productName: "Ganyu Light Show",
      productPrice: 22.99,
      productLocationUrl: "./images/posters/ganyu_lightshow.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Qi Qi",
          stars: "⭐⭐⭐⭐⭐",
          text: "does it come with milk",
        },
      ],
    },
    {
      productType: "Poster",
      productName: "Mona's Inquiry",
      productPrice: 24.49,
      productLocationUrl: "images/posters/mona_ready.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Just a normal Crow",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Poster",
      productName: "Ningguang's Confidence",
      productPrice: 22.99,
      productLocationUrl: "images/posters/ningguang_pose.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Keqing",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Poster",
      productName: "Venti's Harp",
      productPrice: 29.99,
      productLocationUrl: "images/posters/venti_poster_harp.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Poster",
      productName: "Liyue Trouble",
      productPrice: 24.49,
      productLocationUrl: "images/posters/liyue_characters.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Zhongli",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Ningguang",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Poster",
      productName: "Noelle's Battle",
      productPrice: 22.49,
      productLocationUrl: "images/posters/noelle_battle.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Jean",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Poster",
      productName: "Barbara's Wish",
      productPrice: 22.49,
      productLocationUrl: "images/posters/barbara_height_compare.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Lumine",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Aether",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Jean",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Rosaria",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
      ],
    },
    {
      productType: "Poster",
      productName: "Sisters Beach Day",
      productPrice: 22.49,
      productLocationUrl: "images/posters/barbara_jean_sea.jpg",
      id: uniqid(),
      reviews: [
        {
          name: "Jean",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Barbara",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? Voluptate, eius. In reprehenderit, minima similique atque voluptas sit laboriosam velit eos?",
        },
        {
          name: "Barbara",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolore quas atque nemo minima earum maxime. Deleniti, repellat? ",
        },
        {
          name: "Barbara",
          stars: "⭐⭐⭐⭐⭐",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        }
      ],
    },
  ],

  stickers: [
    {
      productType: "Stickers",
      productName: "Zhongli",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/zhongli_sticker_1.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Amber",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/amber_sticker_1.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Tartaglia",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/childe_sticker_1.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Genshin Impact Logo",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/keqing_sticker_1.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Diluc",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/diluc_sticker_1.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Hu Tao",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/hu_tao_sticker_2.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Fischl",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/fischl_sticker_1.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Sucrose",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/sucrose_sticker_2.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Ganyu",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/ganyu_sticker_1.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Mona",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/mona_sticker_2.png",
      id: uniqid(),
    },
    {
      productType: "Stickers",
      productName: "Qi Qi",
      productPrice: 9.99,
      productLocationUrl: "images/stickers/qiqi_sticker_1.png",
      id: uniqid(),
    },
  ],
};

export default AllProducts;
