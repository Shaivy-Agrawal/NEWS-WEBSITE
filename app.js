function contentChange(num) {
  btn_num = num;
  var states = [
    {
      c1_author: "- Yang Xi",
      c1_p: "India sees a drop in covid cases since COVAXIN",
      c2_p: "MET GALA is just round the corner. Check out Versace's latest collections.",
      c3_h2: "1 WEEK Autumn Sale starts on 10th September!",
      c3_video: "pictures/c1_vid.mp4",
      c3_p: "HURRY UP! Buy Now only from H&M",
      c4_p: "United Kingdom Begins Large-Scale Carbon Removal Trials",
      c4_h2: "ENVIRONMENT SAVIOUR",
      c4_author: "- Andrew Garfield",
      c5_h2: "The Return of NEW YORK FASHION WEEK",
      c5_p: "This week, everyone will be talking about New York Fashion Week, the industry’s uncertain autumn benefits.",
      c5_author: "- Diana Pearl",
      c6_h2: "INDIAN FASHION",
      c6_p: "Avantra will unveil mid-size stores with a value-oriented offerings of items such as kurti and sari...",
      c6_author: "- Zoe Suen",
      c1_imag: "pictures/corona.jpg",
      c2_imag: "pictures/gala.jpg",
      c6_imag: "pictures/indian_fash.jpg"
    },
    {
      c1_author: "- Ah Lam",
      c1_p: "Realme Pad has a 10.4-inch display with 82.5% screen-to-body ratio.",
      c2_p: "“Dune” tells the story of Paul Atreides, a brilliant and gifted young man, who must travel...",
      c3_h2: "BE WOWED MILLIONS OF TIMES OVER.",
      c3_video: "pictures/tv.mp4",
      c3_p: "Coming soon-the new SELF-LIT OLED TV. BOOK NOW!",
      c4_p: "28% of 138,000 assessed species now face extinction: Conservation body",
      c4_h2: "SAVE EARTH, CONSERVE",
      c4_author: "- Kate Turner",
      c5_h2: "LOREM NEWS",
      c5_p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla, a vitae sapiente exercitationem ab.",
      c5_author: "- Don Mash",
      c6_h2: "HELLO MARS",
      c6_p: "Explore Stunning 360-Degree Panoramic Views of Mars in New NASA Video",
      c6_author: "- Zoe Suen",
      c1_imag: "pictures/realme.jpg",
      c2_imag: "pictures/cinema.jpg",
      c6_imag: "pictures/mars.jpg"
    },
    {
      c1_author: "- Shaivy Agrawal",
      c1_p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      c2_p: "'On The Loose' has been the most heard song of August 2021. Here is Niall Horan's funny reaction to this.",
      c3_h2: "Tired of expensive essentials?",
      c3_video: "pictures/grocery.mp4",
      c3_p: "50% OFF on GROCERIES now in CHOTA BAZAR",
      c4_p: "Wonderful initiative taken by young leaders to plant trees in an orchard.",
      c4_h2: "YOUNG SAVIOURS",
      c4_author: "- John Doe",
      c5_h2: "WORLD NEWS",
      c5_p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla, a vitae sapiente exercitationem ab.",
      c5_author: "- Hanna Cash",
      c6_h2: "BACK TO SCHOOL?",
      c6_p: "Health experts’ body calls for reopening all schools",
      c6_author: "- Abhishek Gupta",
      c1_imag: "pictures/text.jpg",
      c2_imag: "pictures/niall.jpg",
      c6_imag: "pictures/school.jpg"
    }, 
    {
      c1_author: "- Jade Smith",
      c1_p: "Corona defeated by India. Cases reduced by 1L.",
      c2_p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, excepturi voluptatibus.",
      c3_h2: "SOMETHING NEW FOR FOOD LOVERS!",
      c3_video: "pictures/food.mp4",
      c3_p: "Unveiling the first aesthetic restaurant complete with finger licking cuisines!",
      c4_p: "Covid has highlighted the need for the West to loosen its grip on global health resources, write Mishal Khan and Renzo Guinto",
      c4_h2: "GLOBAL HEALTH",
      c4_author: "- Ronald Gosling",
      c5_h2: "HEALTHY FOOD HABITS",
      c5_p: "Mindful Eating Practices For Children: 5 Tips To Inhibit Healthy Food Habit In Kids. Helping children develop their own mindfulness practice proves to be beneficial and can be applied to many areas of life",
      c5_author: "- William Black",
      c6_h2: "SOAPS AND BLUES",
      c6_p: "Scientists say that BLUE is the safest color for soap. Is that true?",
      c6_author: "- Megan Hope",
      c1_imag: "pictures/corona_free.jpg",
      c2_imag: "pictures/aesthetic.jpg",
      c6_imag: "pictures/blue.jpg"
    },
    {
      c1_author: "- Luna Lupin",
      c1_p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit!",
      c2_p: "Happy birthday Colin! Get a glimpse of the wonderful birthday bash and decorations of star Colin Creevey!",
      c3_h2: "EXCITED FOR THE NEW MALL?!",
      c3_video: "pictures/mall.mp4",
      c3_p: "Launching the all new Mega BTMall on 11th september!",
      c4_p: "India’s electrical sector is dominated by foreign players such as LG and Samsung; rapid changes to dynamics of the sector could now have benefits.",
      c4_h2: "PROFIT ZONE",
      c4_author: "- Kshitij Bhargava",
      c5_h2: "TIME EXPRESS",
      c5_p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, fugit! Molestiae enim eum suscipit libero laudantium optio, recusandae ad illum.",
      c5_author: "- Dean Thomas",
      c6_h2: "UNUSUAL SIGHTINGS",
      c6_p: "A monkey stole a bag containing 4L rupees outside of a registry office in UP. He then ran away.",
      c6_author: "- Shaivy Agrawal",
      c1_imag: "pictures/pic.jpg",
      c2_imag: "pictures/bday.jpg",
      c6_imag: "pictures/monkey.jpg"
    }
  ];
  var c1_author_e = document.getElementById("c1-author")
  var c1_p_e = document.getElementById("c1-p")
  var c2_p_e = document.getElementById("c2-p")
  var c3_h2_e = document.getElementById("c3-h2")
  var c3_video_e = document.getElementById("c3-video")
  var c3_p_e = document.getElementById("c3-p")
  var c4_p_e = document.getElementById("c4-p")
  var c4_h2_e = document.getElementById("c4-h2")
  var c4_author_e = document.getElementById("c4-author")
  var c5_h2_e = document.getElementById("c5-h2")
  var c5_p_e = document.getElementById("c5-p")
  var c5_author_e = document.getElementById("c5-author")
  var c6_h2_e = document.getElementById("c6-h2")
  var c6_p_e = document.getElementById("c6-p")
  var c6_author_e = document.getElementById("c6-author")
  var c1_imag_e = document.getElementById("c1-imag")
  var c2_imag_e = document.getElementById("c2-imag")
  var c6_imag_e = document.getElementById("c6-imag")

  c1_author_e.innerHTML = states[num].c1_author;
  c1_p_e.innerHTML = states[num].c1_p;
  c2_p_e.innerHTML = states[num].c2_p;
  c3_h2_e.innerHTML = states[num].c3_h2;
  c3_video_e.src = states[num].c3_video;
  c3_p_e.innerHTML = states[num].c3_p;
  c4_p_e.innerHTML = states[num].c4_p;
  c4_h2_e.innerHTML = states[num].c4_h2;
  c4_author_e.innerHTML = states[num].c4_author;
  c5_h2_e.innerHTML = states[num].c5_h2;
  c5_p_e.innerHTML = states[num].c5_p;
  c5_author_e.innerHTML = states[num].c5_author;
  c6_h2_e.innerHTML = states[num].c6_h2;
  c6_p_e.innerHTML = states[num].c6_p;
  c6_author_e.innerHTML = states[num].c6_author;
  c1_imag_e.style.background = "url(" + states[num].c1_imag + ") no-repeat center center/cover";
  c2_imag_e.style.background = "url(" + states[num].c2_imag + ") no-repeat center center/cover";
  c6_imag_e.style.background = "url(" + states[num].c6_imag + ") no-repeat center center/cover";
  c3_video_e.load();
}

var btn_num = -1