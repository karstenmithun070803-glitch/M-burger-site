/**
 * MJ's Burger Joint — Runtime text override.
 * Replaces Dutch text injected by the Webflow IX2 interaction engine
 * that can't be changed through static HTML replacement.
 */
(function () {
  var MAP = {
    "Hoe het werkt": "How it works",
    "Onze food truck boeken?": "Book our food truck?",
    "Onze food truck boeken": "Book our food truck",
    "Op google": "on Google",
    "Op Google": "on Google",
    "Bekijk onze trucks": "View our trucks",
    "Bekijk alle succesverhalen": "View all success stories",
    "Meer weten?": "Want to know more?",
    "Bekijk menu": "View menu",
    "Neem contact op": "Get in touch",
    "Verstuur": "Send",
    "Verzenden": "Send",
    "Terug": "Back",
    "Volgende": "Next",
    "Vorige": "Previous",
    "Lees meer": "Read more",
    "Schrijf je in": "Sign up",
    "Boek nu": "Book now",
    "Offerte aanvragen": "Request a quote",
    "Vraag offerte aan": "Request a quote",
    "Bekijk": "View",
    "Bordenvol ervaring": "Plates full of experience",
    "Wij geven rust": "We bring peace of mind",
    "Volledig ontzorgd": "Stress-free service",
    "Notitie": "Notice",
    "Accepteer": "Accept",
    "Inspiratie": "Inspiration",
    "Delizioso": "Delicious",
    "op locatie": "on location",
    "Verjaardag": "Birthday",
    "van 't jaar": "of the Year",
    "Music Cityqon": "Music City Eats",
    "Setup op location": "Setup on location",
    "crisante bodem": "crispy base",
    "Festivalsfeer": "Festival atmosphere",
    "Trucks huren": "Hire trucks",
    "Il Bambino": "The Lil' Smash",
    "Il Capo Due": "The Big MJ",
    "Il Capo Uno": "The Nashville",
    "Il Lungo": "The Double Wide",
    "Onze voordelen": "Our benefits",
    "Stap": "Step",
    "Bekijk de trucks": "View the trucks",
    "Meer over": "More about",
    "onze trucks": "our trucks",
    "Onze trucks": "Our trucks",
    "Waarom Tenders-MJ's?": "Why MJ's Tenders?",
    "Deze klanten gingen u al voor:": "Trusted by brands like:",
    "Deze klanten gingen u al voor": "Trusted by brands like",
    "Bekijk het menu": "View the menu",
    "Boek een foodtruck": "Book a truck",
    "Boek een food truck": "Book a truck",
    "De pasta foodtrucks": "The smash chicken trucks",
    "De Pasta Foodtrucks": "The Smash Chicken Trucks",
    "De tenders foodtrucks": "The smash chicken trucks",
    "De smash-chickens": "The Smash Chicken Trucks",
    "De smash chicken trucks": "The Smash Chicken Trucks",
    "Lo Spettacolo": "The Showstopper",
    "Il Piccolo": "The Compact",
    "score op Google!": "score on Google!",
    "op Google!": "on Google!",
    "smash-chickens": "smash chicken trucks",

    // Nashville Hot page headings
    "Wat maakt ons uniek?": "What makes us unique?",
    "Traditional perfectie": "Traditional perfection",
    "Ongekende Capaciteit: De Fastest van the US": "Unmatched Capacity: The Fastest in the US",
    "Ongekende Capaciteit": "Unmatched Capacity",
    "De Fastest van the US": "The Fastest in the US",
    "American experience": "American Experience",
    "Ervaring": "Experience",
    "Ontzorging": "Stress-Free Service",
    "De trucks": "The Trucks",
    "View our nashville-hots here and request a no-obligation quote": "View our Nashville Hot trucks here and request a no-obligation quote",

    // Nashville Hot menu items
    "Burger Margherita": "The Classic Smash",
    "Burger Salame Piccante": "The Spicy Nashville",
    "Burger Tonno": "The Smoky Catch",
    "Burger Parma": "The Parma Stack",
    "Burger Piccante": "The Fire Cracker",
    "Burger Vegetariana": "The Garden Smash",
    "Nashville deeg, San Marzano tomaat, house-made spice blend, basilicum en oregano": "Smashed beef patty, American cheese, house-made spice blend, lettuce, pickles, and special sauce",
    "Nashville deeg, San Marzano tomaat, house-made spice blend, spianata romana (pikante salami)": "Smashed beef patty, pepper jack cheese, Nashville hot sauce, spicy salami, and jalapeños",
    "Nashville deeg, San Marzano tomaat, house-made spice blend, tonijn, rode ui, basilicum en olijfolie": "Smashed beef patty, cheddar cheese, caramelized onion, basil aioli, and olive oil drizzle",
    "Nashville deeg, San Marzano tomaat, house-made spice blend, cherry tomaat, pepertje, basilicum en oregano": "Smashed beef patty, American cheese, cherry tomato, chili pepper, basil, and oregano mayo",
    "Nashville deeg, San Marzano tomaat, house-made spice blend, ui, courgette, paprika, knoflook, olijfolie uit Perugia en oregano": "Smashed veggie patty, grilled zucchini, roasted bell pepper, garlic aioli, arugula, and oregano",

    // Smash Chicken page
    "Mensen eten met hun ogen": "People eat with their eyes",
    "leent zich perfect voor": "lends itself perfectly to",
    "hoe de saus ter plekke in de pan wordt opgeschud": "the sauce being tossed right there in the pan",
    "Het grote voordeel van een smash-chicken?": "The great thing about smash chicken?",
    "Het is de ultieme allemansvriend, zonder dat het saai wordt": "It's the ultimate crowd-pleaser, without ever getting boring",
    "Van een chique event tot een informeel festival of een wedding in de late uurtjes: een goede tenders gaat er altijd in": "From an upscale event to a casual festival or a late-night wedding: great smash chicken always hits the spot",
    "Het is vullend, energierijk en brings comfort": "It's filling, energizing, and brings comfort",
    "Omdat niemand ooit 'nee' tegand tenders zei": "Because nobody ever said 'no' to tenders",
    "op elke location": "at every location",
    "vangen de drukste momenten effortlessly": "handle the busiest moments effortlessly",
    "finid": "finish",
    "Tenders met basilicum-pesto": "Tenders with basil pesto",
    "romige saus van": "creamy sauce of",
    "zwarte peper en citroen": "black pepper and lemon",
    "Tenders met romige saus van ricotta, zwarte peper en citroen": "Tenders with creamy ricotta sauce, black pepper, and lemon",
    "Tenders met": "Tenders with",
    "Geen lange lineen": "No long lines",
    "ensureor een": "ensure a",
    "de tenders in een": "the tenders in",
    "tot zakelijke events voor organisaties als": "to corporate events for brands like",
    "is ideaal for": "is ideal for",
    "edrijfscatering": "corporate catering",
    "Eastpop tot": "Eastpop to",
    "en ING": "and ING",
    "saltare in padella": "tossed in the pan",
    "Het horen sissen van de ingredients en het live zien raspen vnd the cheese on a steaming plate turns the catering into a true American experience!": "Hearing the ingredients sizzle and seeing the cheese grated live over a steaming plate turns the catering into a true American experience!",

    // Cookie banner
    "Vereist": "Required",
    "Weiger alle": "Reject all",
    "Accepteer alle": "Accept all",
    "Instellingen": "Settings",
    "Weigeren": "Decline",
    "Weiger": "Reject",
    "Ingediend op": "Submitted on",
    "Aan": "On",
    "Uit": "Off",

    // Nashville Hot Parma Stack description
    "Nashville deeg, San Marzano tomaat, house-made spice blend, prosciutto, house-made truffle sauce, parmesan cheese, and arugula": "Nashville dough, San Marzano tomato, house-made spice blend, prosciutto, house-made truffle sauce, parmesan cheese, and arugula",

    // Mixed Dutch fragments
    " ook!": " too!",
    "nashville-hotten": "Nashville Hot trucks",
    "nashville-hots": "Nashville Hot trucks",
    "nashville-hot": "Nashville Hot truck",
    "Bring met our": "Bring our",
    "Afteroop": "Afterward",
    "outletodig": "outlet —",
    "complicatede": "complicated",
    "Maarrrr": "But",
    "namelijk": "in fact",
    "basilicum": "basil",
    "pikante": "spicy",
    "rode ui": "red onion",
    "olijfolie": "olive oil",
    "en oregano": "and oregano",
    "Nashville deeg": "Nashville dough",
    "San Marzano tomaat": "San Marzano tomato",
  };

  function replaceText(node) {
    if (node.nodeType === 3) {
      var t = node.textContent;
      for (var nl in MAP) {
        if (t.indexOf(nl) !== -1) {
          node.textContent = t.replace(nl, MAP[nl]);
          t = node.textContent;
        }
      }
    } else if (node.nodeType === 1 && node.childNodes) {
      for (var i = 0; i < node.childNodes.length; i++) {
        replaceText(node.childNodes[i]);
      }
    }
  }

  var INNER_HTML_MAP = {
    'Hire a Nashville Hot truck <span class="alt-o">o</span>p l<span class="alt-o">o</span>catie':
      'Hire a Nashville H<span class="alt-o">o</span>t truck <span class="alt-o">o</span>n location',
    '<span class="alt-o">O</span>nze <span>food truck</span> b<span class="alt-o">o</span>eken?':
      'B<span class="alt-o">oo</span>k <span>our food truck</span>?',
    'H<span class="alt-o">o</span>e het werkt':
      'H<span class="alt-o">o</span>w it works',
    '<span class="alt-o">Op</span> google':
      '<span class="alt-o">o</span>n Google',
    'Best Food Truck van \'t jaar • Music City<span class="alt-q">q</span>on 2024':
      'Best F<span class="alt-o">oo</span>d Truck of the Year • Music City Eats 2024',
    '<span class="alt-o">Setup</span> <span class="alt-o">op</span> location':
      '<span class="alt-o">Setup</span> <span class="alt-o">o</span>n location',
    '<span class="alt-o">De</span> smash chicken trucks':
      'The Smash Chicken Trucks',
    '<span class="alt-o">De</span> smash-chickens':
      'The Smash Chicken Trucks',
    '<span class="alt-o">De</span> trucks':
      'The Trucks',
  };

  function replaceInnerHTML(root) {
    var els = root.querySelectorAll("h1, h2, h3, h4, p, span, div, a");
    for (var i = 0; i < els.length; i++) {
      var html = els[i].innerHTML;
      for (var old in INNER_HTML_MAP) {
        if (html.indexOf(old) !== -1) {
          els[i].innerHTML = html.replace(old, INNER_HTML_MAP[old]);
        }
      }
    }
  }

  function fixNavLinks() {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href.indexOf(' ') !== -1) {
        a.setAttribute('href', href.replace(/ /g, ''));
      }
    });
  }

  var PARAGRAPH_REPLACE = [
    {
      match: "Mensen eten met hun ogen",
      replacement: "People eat with their eyes. Smash chicken lends itself perfectly to 'live cooking', and that is exactly the entertainment your guests will be talking about. Watch as the chicken hits the griddle, the cayenne-dusted coating sizzles and crisps, and the cheese is melted right there in front of you. Hearing the sizzle and seeing the toppings layered live over a steaming smash chicken turns the catering into a true American experience!"
    },
    {
      match: "Het grote voordeel van een smash-chicken",
      replacement: "The great thing about smash chicken? It's the ultimate crowd-pleaser, without ever getting boring. From an upscale corporate event to a casual festival or a late-night wedding: great smash chicken always hits the spot. It's filling, energizing, and brings comfort."
    },
    {
      match: "professionalism op elke location",
      replacement: "We know exactly what it takes for a successful American catering. With years of experience at weddings and large corporate events, we bring calm and professionalism at every location. We handle the logistics, manage the busiest moments effortlessly, and always serve with a smile. You don't have to worry about setup or planning; we handle it from start to finish."
    },
    {
      match: "Tenders met romige saus van ricotta, zwarte peper en citroen",
      replacement: "Tenders with creamy ricotta sauce, black pepper, and lemon"
    },
    {
      match: "From our smash-chicken",
      replacement: "From our smash chicken trucks we cook traditional tenders on wheels. The fact that we can make up to 600 fresh tenders per hour doesn't mean we compromise on quality at all. We cook our fresh tenders together with delicious American sauces and fresh vegetables in giant pans. We serve the tenders in beautiful eco-friendly disposable bowls topped with fresh arugula and authentic parmesan cheese. Our quality, high capacity, and stunning trucks ensure a unique experience that will be unforgettable for both the visitors and you."
    },
    {
      match: "Met 600 fresh tenders",
      replacement: "With 600 fresh tenders per hour from a single food truck, long lines are a thing of the past. But... we can dial it down to a relaxed, social pace too."
    },
    {
      match: "We have extensive experience at events",
      replacement: "We have extensive experience at events that vary widely, from festivals like Awakenings and Eastpop to corporate events for brands like Porsche and ING. This allows us to perfectly tailor our menu to any type of event. Our Tenders Pesto alla Genovese is ideal for large crowds, while our catering favorite Tenders ai Gamberi fits perfectly at luxury corporate catering."
    },
    // Nashville Hot page - section_hero-card paragraphs
    {
      match: "In our nashville-hot draait alles om de traditie",
      replacement: "At MJ's, everything revolves around tradition. Our burgers are exactly as they're meant to be: a paper-thin, crispy smashed patty with a golden crust. This crust develops on our blazing hot griddle, creating those satisfying char marks that add crunch and flavor. We work exclusively with the best American beef, house-made spice blend, and fresh toppings. You taste our passion in every bite!"
    },
    {
      match: "Deze rand krijgt in our blazing hot ovens",
      replacement: "This crust develops on our blazing hot griddle, creating those typical char marks that add crispiness. We work exclusively with premium American beef, house-made spice blend, and fresh toppings. You taste our passion in every bite!"
    },
    {
      match: "Organiseer je een grootschalig event",
      replacement: "Organizing a large-scale event? No worries about hungry guests or long lines. We combine artisan quality with festival speed and are known for our incredible cooking capacity. Thanks to three large flat-top griddles in our trucks, we crank out up to 480 smash burgers per hour — without compromising on quality."
    },
    {
      match: "De nashville-hots zijn luxe afgewerkt met marmer",
      replacement: "Our trucks are finished with warm ambient lighting and authentic American details that immediately set the right mood. Think vintage neon signs, rustic wood accents, and checkered patterns that evoke a classic Nashville diner. The burger truck stands out with its signature signage and cozy lights, while the tenders truck creates a unique atmosphere with its retro cinema-style lighting. We aim to create an experience visitors will talk about long after!"
    },
    {
      match: "Een hiring a nashville-hot is not complicated",
      replacement: "Hiring a Nashville Hot truck is not complicated at all. We only need one standard power outlet — no three-phase power or complicated connections. We bring everything we need: the truck, all kitchen equipment, servingware, and our crew. Afterward, we leave everything neat and clean."
    },
    // Complete American Experience section
    {
      match: "bruschetta, and salads, with optional house-made gelato for dessert",
      replacement: "loaded fries, mac & cheese bites, and coleslaw, with optional house-made Oreo smoothies for dessert. We also offer a full drinks service with beer, craft sodas, and a homemade lemonade bar. From a quick street-food setup to a full catering spread."
    },
    {
      match: "wijn, fris en een homemade lemonade bar",
      replacement: "craft sodas, and a homemade lemonade bar"
    },
    {
      match: "Van aperitivo tot uitgebreid diner",
      replacement: "From a quick bite to a full spread"
    },
    // Nashville Hot hiring paragraph
    {
      match: "Bring met our nashville-hot a true showstopper",
      replacement: "Bring a true showstopper to your party location with our Nashville Hot truck. It's a real eye-catcher and very photogenic too!"
    },
    {
      match: "very photogenic ook",
      replacement: "very photogenic too"
    },
    {
      match: "We have experience both as public caterer at events like Pinkpop",
      replacement: "We have extensive experience both as a public caterer at major events like Coachella, SXSW, and NASCAR, but also as a corporate caterer for clients like Google, Nike, Adidas, and Amazon. Thanks to this experience we adapt effortlessly to the size and theme of the event."
    },
    {
      match: "but but also as corporate caterer for clients like IKEA",
      replacement: "but also as a corporate caterer for clients like Google"
    },
  ];

  function replaceParagraphs(root) {
    var els = root.querySelectorAll('p, .paragraph-xs, .paragraph-s, .paragraph-m, .paragraph-regular, h3.paragraph-regular, .card-content p, .text-block, div.paragraph, .hero-card_text, .text-media_text');
    for (var i = 0; i < els.length; i++) {
      var text = els[i].textContent;
      for (var j = 0; j < PARAGRAPH_REPLACE.length; j++) {
        if (text.indexOf(PARAGRAPH_REPLACE[j].match) !== -1) {
          els[i].textContent = PARAGRAPH_REPLACE[j].replacement;
          break;
        }
      }
    }
  }

  var IMAGE_MAP = {
    "69c114090b44329eccf8f14f_home-hero": "/images/hero-crew-desktop.webp",
    "69c151728348a1b5b04e7997": "/images/hero-crew-mobile.webp",
    "69c525ff8c03d11f63c2d0b2_home-hero-video-placeholder": "/images/video-poster.webp",
    "69c15c4891e56aa172d0b80d_photo-pic-00": "/images/intro-friends.webp",
    "69c129552e588bf938ee6174_burger-brown": "/images/food-nashville.webp",
    "69c15c48cf4ee223bcf99c48_photo-pic-03": "/images/truck-window.webp",
    "69c15c48d0f34e2547a19f3c_photo-pic-02": "/images/crowd-firstbite.webp",
    "69c15c48d75ab1aad20a5841_photo-pic-01": "/images/usp-lifestyle-2.webp",
    "69f47649f57141726c740f27_IMG_6508": "/images/truck-lil-smash.webp",
    "69f47773e971448f1eca4d45_IMG_6615": "/images/truck-big-mj.webp",
    "69f478c81042af0091950e58": "/images/truck-nashville.webp",
    "69f48017bcf50266a010ae77_dscf3209": "/images/truck-double-wide.webp",
    "6a1f0962b198f9c52d12b5d8_IMG_6605": "/images/truck-party-rig.webp",
    "6a1eb5c17cfd1becf1b68c71": "/images/truck-party-rig.webp",
    "69c2dc021d69e19dbadd5911_steps-burger": "/images/food-nashville.webp",
    "69c2d7da2794fc4a2fa136ce_usp-pic-01": "/images/usp-lifestyle-1.webp",
    "69c2d7da16f3344605ecff92_usp-pic-02": "/images/usp-lifestyle-2.webp",
    "69c681348974d614be72f126": "/images/team-crew.webp",
    "69c2e3e9a86b560c0f75502c_burger-tenders": "/images/food-combo.webp",
    "69c50dc7905ad7577dd7a8e6_work-at-1": "/images/team-portrait-1.webp",
    "69c50dd1dafb7e91bdd8e4ac_work-at-2": "/images/team-portrait-2.webp",
    "69c50ddb559ecceab9d851f3": "/images/team-portrait-3.webp",
    "69c507cac491acb42003d40c_work-at-bg": "/images/team-bg-prep.webp",
    "69bd1d4f3b9450b69cce5ba0_photo-card-img": "/images/footer-table.webp",
    "69f4834a58f3ca07cad26d92": "/images/truck-crowd-wide.webp",
    "69c68aaf6cbcee4970d3bbb9_burger-bg-img": "/images/crowd-festival.webp",
    "69c67684f6f867b55fbb8059_burger-menu-bg": "/images/intro-friends.webp",
    "6a219d073e97d1871ab7a1f1_A47BE42C": "/images/usp-lifestyle-2.webp",
    "6a2ac188633293356c235bdb_IMG_6505": "/images/truck-window.webp",
    "6a219ccf0a6729c3983008c3_IMG_9376": "/images/crowd-firstbite.webp",
    "6a219cd235cd026471ec56b7_IMG_6617": "/images/truck-big-mj.webp",
    "69c65f0a26e4ef1c6b5b3a73": "/images/food-nashville.webp",
    "69c65f1723b8485e44e35f04": "/images/food-smash.webp",
    "69c65f24d5a1fa9cce16fb02": "/images/food-combo.webp",
    "69c65f3366d2145d0c88a8a9": "/images/food-fries.webp",
    "6a218f59204f062030dfa6e4_A47BE42C": "/images/kitchen-smash.webp",
    "6a218f794a32d2812ad3769d_DE639D44": "/images/kitchen-sauce.webp",
    "6a2832ae2ddef4d7f87c4a36_IMG_8087": "/images/truck-crowd-wide.webp",
    "69c69db5925a6e2dd3895ad2": "/images/footer-table.webp",
    "69c69cec8d42a5809d7ac60c_img-fw": "/images/crowd-festival.webp",
    "69cce8d12679cd92c490ca32_usps-bg": "/images/crowd-festival.webp",
    "69c6822a74719cdcbd3380e2_hero-tenders": "/images/team-crew.webp",
    "69c682ddb613aa6a3e34357c_hero-tenders-1": "/images/crowd-firstbite.webp",
    "69c682dd930b0f54560cfcf4_hero-tenders-2": "/images/kitchen-sauce.webp",
    "69c68356003cca73e533ee2b": "/images/food-tenders.webp",
    "6a283a85707f7c272ea964de_IMG_6608": "/images/truck-window.webp",
    "6a218d3bfb6d03c6cae5e0b5_IMG_2407": "/images/kitchen-sauce.webp",
    "6a283a8718052e4f831ccde5_IMG_6634": "/images/truck-crowd-wide.webp",
    "6a283a877461d7896e1cef5c_IMG_6627": "/images/food-tenders.webp",
    "69c68431618d9c20acd39bec": "/images/food-tenders.webp",
    "69c6843e35c4d251089e7cb2": "/images/food-fries.webp",
    "69c6844b1299a85adf475a7b": "/images/food-smoothie.webp",
    "69c68457bf8f4a7ba2b98b63": "/images/kitchen-smash.webp",
    "69d3b5af69034c39c3e590e1": "/images/og-share.webp",
    "69d3b5af98d5f1043b3c9900": "/images/og-share.webp",
    "pizza-amici-logo-light": "/images/logo-navy.webp",
    "pasta-amici-logo": "/images/logo-navy.webp",
    "tenders-mj": "/images/logo-navy.webp",
    // Timeline / Our Story images
    "6a331e119b9376aa2b143202_IMG_0416": "/images/team-crew.webp",
    "6a331e69ecbbddfe3faa57a4_IMG_5756": "/images/crowd-festival.webp",
    "6a331ff10643c9c943e7af58_IMG_7749": "/images/truck-big-mj.webp",
    "6a1f0c3a3c6027e06fca8c08_IMG_2407": "/images/kitchen-sauce.webp",
    "6a33ad17bef6ad857361f081_IMG_6615": "/images/truck-nashville.webp",
    "69ce6f60ee7efe05e8f33b41_timeline-photo": "/images/truck-lil-smash.webp",
    // Team flick cards
    "6EAD86EE": "/images/team-portrait-1.webp",
    "IMG_6513": "/images/team-portrait-2.webp",
    "DE639D44": "/images/kitchen-sauce.webp",
    "DCB2A4B2": "/images/team-portrait-3.webp",
    "5B0AF44D": "/images/team-portrait-1.webp",
    "lemar-bavelaar": "/images/team-portrait-2.webp",
    "04B7713A": "/images/team-portrait-3.webp",
    "F0CA9DAD": "/images/team-portrait-1.webp",
    "A47BE42C": "/images/usp-lifestyle-2.webp",
    "IMG_0958": "/images/team-portrait-2.webp",
    // Truck card gallery/shuffle images
    "69f4764b77dee79e670767aa": "/images/truck-window.webp",
    "69f4772b956c382785ec6d55": "/images/crowd-firstbite.webp",
    "69f477a895bf29814d5482f8": "/images/kitchen-smash.webp",
    "69f477f48f8ca616b1ef80af": "/images/truck-crowd-wide.webp",
    "69c2868d1302c6d14cfd5827": "/images/crowd-festival.webp",
    "69c2868d5a37f04827e01805": "/images/usp-lifestyle-1.webp",
    "69c2868d52a6b6b428247550": "/images/team-crew.webp",
    "69f4801c216ae90f19387c13": "/images/truck-crowd-wide.webp",
    "69f4806ae577db420b7aaf46": "/images/kitchen-sauce.webp",
    "6a1f0bbb37dd062d7937e113": "/images/food-tenders.webp",
    "6a1f0be88cceb21dcf99554d": "/images/crowd-firstbite.webp",
    "6a1eb6a16a9537eacda74995": "/images/truck-crowd-wide.webp",
    "6a1eb6ee81de1d56566d42c3": "/images/food-combo.webp",
    "6a1eb818bc4eec9f5fa17ac1": "/images/crowd-festival.webp",
    // Contact page
    "69c7f032436a8e0705c0082b": "/images/food-smash.webp",
    "69c7f22b5336d64a458aba96": "/images/usp-lifestyle-1.webp",
    // Our Story page
    "69ce5959e3b31a9b223d90f8": "/images/hero-crew-desktop.webp",
    "69ce6601e845041b9160e459": "/images/usp-lifestyle-2.webp",
    "69c69791959bb813dd4735d2": "/images/kitchen-smash.webp",
    "69cfb8c72d8472cf4a7d150c": "/images/food-nashville.webp",
    "69cfb939a3a29392a4d01c54": "/images/food-smash.webp",
    "6a3322629e095aecd3e503d8": "/images/usp-lifestyle-1.webp",
    "6a33ad429f44bac8b75765d1": "/images/truck-party-rig.webp",
    // Reviews page
    "69ccdeb9f63e436fbe65f1e2": "/images/truck-crowd-wide.webp",
    "69cce04a4ee4e37100366464": "/images/crowd-festival.webp",
    "69cce0334415350ab5c40a0c": "/images/team-crew.webp",
    // OG share images
    "69d3b740ed5ba7cb72907571": "/images/og-share.webp",
    "69d3b6304260d88a4c4d8df3": "/images/og-share.webp",
    // Festivals & Events page
    "6a2185122b355e2d21983f2b_IMG_8185": "/images/crowd-festival.webp",
    "6a218de24f4cbf93ea8101e1_IMG_7748": "/images/truck-big-mj.webp",
    "6a2834f769dd04821ed97df4_IMG_8184": "/images/kitchen-sauce.webp",
    "69c80f1b9f0f9db4136d61d4_book-photo-3": "/images/usp-lifestyle-1.webp",
    "6a2adfb5a5f232d3996477ff_IMG_8364": "/images/team-crew.webp",
    "6a2adf4b0fac73400b2b2850_IMG_8088": "/images/crowd-firstbite.webp",
    // Corporate Events page
    "69ce4f0601a38f46b9a769d0_img-fw": "/images/kitchen-smash.webp",
    "6a2199f58b1d2f8b68521f4c": "/images/crowd-festival.webp",
    "69c2d7dadb58bfac681714a2": "/images/usp-lifestyle-2.webp",
    "6a21a10615798acd84076370": "/images/truck-party-rig.webp",
    "6a2bfbdc521876c8dd2978af": "/images/kitchen-smash.webp",
    "69d3b6def05a8498ffe41036": "/images/og-share.webp",
  };

  function replaceImages() {
    var imgs = document.querySelectorAll('img[src], img[srcset], source[srcset]');
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i];
      var src = el.getAttribute('src') || '';
      var srcset = el.getAttribute('srcset') || '';
      for (var key in IMAGE_MAP) {
        if (src.indexOf(key) !== -1) {
          el.setAttribute('src', IMAGE_MAP[key]);
          if (srcset) el.removeAttribute('srcset');
          break;
        }
        if (srcset.indexOf(key) !== -1) {
          el.setAttribute('srcset', IMAGE_MAP[key]);
          break;
        }
      }
    }
    var metas = document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"]');
    for (var j = 0; j < metas.length; j++) {
      var content = metas[j].getAttribute('content') || '';
      for (var mk in IMAGE_MAP) {
        if (content.indexOf(mk) !== -1) {
          metas[j].setAttribute('content', window.location.origin + IMAGE_MAP[mk]);
          break;
        }
      }
    }
  }

  function replaceLogos() {
    var navLogo = document.querySelector('a.nav-logo svg, .nav-logo svg');
    if (navLogo && !navLogo.dataset.replaced) {
      var img = document.createElement('img');
      img.src = '/images/logo-navy.webp';
      img.alt = "MJ's Burger Joint";
      img.style.cssText = 'height:100%;width:auto;max-height:32px;object-fit:contain;';
      navLogo.parentNode.replaceChild(img, navLogo);
      img.dataset.replaced = '1';
    }
    var footerLogo = document.querySelector('a.footer-logo svg, .footer-logo svg');
    if (footerLogo && !footerLogo.dataset.replaced) {
      var fImg = document.createElement('img');
      fImg.src = '/images/logo-cream.webp';
      fImg.alt = "MJ's Burger Joint";
      fImg.style.cssText = 'width:100%;height:auto;max-width:220px;object-fit:contain;';
      footerLogo.parentNode.replaceChild(fImg, footerLogo);
      fImg.dataset.replaced = '1';
    }
    var loaderLogo = document.querySelector('.loader__logo-item svg, .loader__logo-wrap svg');
    if (loaderLogo && !loaderLogo.dataset.replaced) {
      var lImg = document.createElement('img');
      lImg.src = '/images/logo-navy.webp';
      lImg.alt = "MJ's Burger Joint";
      lImg.className = loaderLogo.className.baseVal || '';
      lImg.style.cssText = 'width:100%;height:auto;max-width:300px;object-fit:contain;';
      loaderLogo.parentNode.replaceChild(lImg, loaderLogo);
      lImg.dataset.replaced = '1';
    }
    var cardLogos = document.querySelectorAll('.card-content-logo');
    for (var i = 0; i < cardLogos.length; i++) {
      var cl = cardLogos[i];
      if (cl.tagName === 'IMG' && cl.src.indexOf('/images/logo-') === -1) {
        cl.setAttribute('src', '/images/logo-navy.webp');
        cl.removeAttribute('srcset');
        cl.style.cssText = 'max-width:200px !important;max-height:80px !important;width:auto !important;height:auto !important;object-fit:contain !important;';
      }
    }
  }

  function killHeroVideo() {
    var video = document.querySelector('.bunny-bg__video');
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.style.display = 'none';
    }
    var bunnyBg = document.querySelector('[data-bunny-background-init]');
    if (bunnyBg) {
      bunnyBg.removeAttribute('data-player-src');
      bunnyBg.setAttribute('data-player-status', 'idle');
      bunnyBg.setAttribute('data-player-activated', 'false');
    }
    var placeholder = document.querySelector('.bunny-bg__placeholder');
    if (placeholder) {
      placeholder.style.opacity = '1';
      placeholder.style.visibility = 'visible';
    }
  }

  function fixStackCardImages() {
    var placeholderUrl = 'placeholder.60f9b1840c.svg';
    var replacements = [
      '/images/food-nashville.png',
      '/images/food-smash.png',
      '/images/food-combo.png',
      '/images/food-fries.png',
      '/images/food-tenders.png',
      '/images/food-smoothie.png'
    ];
    var cards = document.querySelectorAll('.stack-cards__card-image');
    for (var i = 0; i < cards.length; i++) {
      var src = cards[i].getAttribute('src') || '';
      if (src.indexOf(placeholderUrl) !== -1 || src.indexOf('placeholder') !== -1) {
        cards[i].setAttribute('src', replacements[i % replacements.length]);
        cards[i].removeAttribute('srcset');
      }
    }
  }

  function fixModalContent() {
    var modal = document.querySelector('.modal');
    if (!modal) return;
    var fields = modal.querySelectorAll('[data-modal-field]');
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i].getAttribute('data-modal-field');
      if (field === 'per-uur') fields[i].closest('.truck-card_detail-label') && (fields[i].textContent = fields[i].textContent);
      if (field === 'afmeting') {
        var label = fields[i].closest('.truck-card_detail');
        if (label) {
          var labelEl = label.querySelector('.truck-card_detail-label');
          if (labelEl && labelEl.textContent.indexOf('afmeting') !== -1) labelEl.textContent = 'Dimensions';
        }
      }
      if (field === 'stroom') {
        var slabel = fields[i].closest('.truck-card_detail');
        if (slabel) {
          var slabelEl = slabel.querySelector('.truck-card_detail-label');
          if (slabelEl && slabelEl.textContent.indexOf('stroom') !== -1) slabelEl.textContent = 'Power';
        }
      }
    }
  }

  function fixDutchAlts() {
    var imgs = document.querySelectorAll('img[alt]');
    var altMap = [
      { match: 'burgersozen en broodjes', replace: 'burger sauces and bread rolls' },
      { match: 'tafelkleed', replace: 'tablecloth' },
      { match: 'drankjes', replace: 'drinks' },
      { match: 'Groep jonge mensen geniet buiten', replace: 'Group of young people enjoying food outdoors' },
      { match: 'Drie jonge mensen in een levendige', replace: 'Three young people in a lively setting' },
      { match: 'Medewerkers in striped shirts', replace: 'Staff in striped shirts' },
      { match: 'rood zitkussen', replace: 'red cushion' },
      { match: 'Drie vrienden lachen', replace: 'Three friends laughing' },
      { match: 'ajdens een togetherkomst', replace: 'during a get-together' },
      { match: 'gestreepte shirts en denim schorten', replace: 'striped shirts and denim aprons' },
      { match: 'Vrouw met krullend haar', replace: 'Woman with curly hair eating a bowl outdoors' },
      { match: 'zwarte handschoen', replace: 'black glove' },
      { match: 'geraspte kaas', replace: 'grated cheese' },
      { match: 'Bord met spaghetti', replace: 'Plate of tenders' },
      { match: 'Chef strooit kruiden', replace: 'Chef sprinkles herbs on food' },
      { match: 'menu bord met Margherita', replace: 'menu board showing burger varieties' },
    ];
    for (var i = 0; i < imgs.length; i++) {
      var alt = imgs[i].getAttribute('alt') || '';
      for (var j = 0; j < altMap.length; j++) {
        if (alt.indexOf(altMap[j].match) !== -1) {
          imgs[i].setAttribute('alt', altMap[j].replace);
        }
      }
    }
  }

  var observer;
  function startObserver() {
    if (observer) observer.observe(document.body || document.documentElement, {
      childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'srcset'],
    });
  }

  function replaceDataSrcImages() {
    var imgs = document.querySelectorAll('.foodtruck-card_media-img[data-src]');
    for (var i = 0; i < imgs.length; i++) {
      var dataSrc = imgs[i].getAttribute('data-src');
      if (dataSrc) {
        for (var key in IMAGE_MAP) {
          if (dataSrc.indexOf(key) !== -1) {
            imgs[i].setAttribute('data-src', IMAGE_MAP[key]);
            break;
          }
        }
      }
      var dataSrcset = imgs[i].getAttribute('data-srcset');
      if (dataSrcset) {
        for (var key2 in IMAGE_MAP) {
          if (dataSrcset.indexOf(key2) !== -1) {
            imgs[i].setAttribute('data-srcset', IMAGE_MAP[key2]);
            break;
          }
        }
      }
    }
  }

  function neutralizeFooterLinks() {
    var socials = document.querySelectorAll('a.social');
    for (var i = 0; i < socials.length; i++) {
      socials[i].removeAttribute('href');
      socials[i].removeAttribute('target');
      socials[i].style.cursor = 'default';
      socials[i].addEventListener('click', function(e) { e.preventDefault(); });
    }
    var addressLinks = document.querySelectorAll('a.footer-link.is-address');
    for (var j = 0; j < addressLinks.length; j++) {
      addressLinks[j].removeAttribute('href');
      addressLinks[j].removeAttribute('target');
      addressLinks[j].style.cursor = 'default';
      addressLinks[j].addEventListener('click', function(e) { e.preventDefault(); });
    }
    var footerNavLinks = document.querySelectorAll('.footer-links_list a');
    var hideTexts = ['Hire Our Truck', 'Cities & Tours'];
    for (var k = 0; k < footerNavLinks.length; k++) {
      var linkText = footerNavLinks[k].textContent.trim();
      for (var h = 0; h < hideTexts.length; h++) {
        if (linkText === hideTexts[h]) {
          footerNavLinks[k].style.display = 'none';
          break;
        }
      }
    }
  }

  function fixStepsBurgerClass() {
    var stepsBurger = document.querySelector('.steps-burger');
    if (stepsBurger && !stepsBurger.classList.contains('steps-pizza')) {
      stepsBurger.classList.add('steps-pizza');
    }
  }

  function fixNavDropdown() {
    if (window.innerWidth < 768) return;
    var toggles = document.querySelectorAll('[data-dropdown-toggle]');
    toggles.forEach(function (t) {
      if (t._desktopInit) return;
      var n = t.nextElementSibling;
      if (!n || !n.classList.contains('nav-dropdown')) return;
      t._desktopInit = true;
      t.addEventListener('mouseenter', function () {
        t.dataset.dropdownToggle = 'open';
        t.setAttribute('aria-expanded', 'true');
        n.setAttribute('aria-hidden', 'false');
      });
      n.addEventListener('mouseleave', function () {
        t.dataset.dropdownToggle = 'closed';
        t.setAttribute('aria-expanded', 'false');
        n.setAttribute('aria-hidden', 'true');
      });
      t.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = t.dataset.dropdownToggle === 'open';
        t.dataset.dropdownToggle = isOpen ? 'closed' : 'open';
        t.setAttribute('aria-expanded', String(!isOpen));
        n.setAttribute('aria-hidden', String(isOpen));
      });
    });
  }

  function fixMarquee() {
    try {
      if (typeof gsap === 'undefined') return;
      var section = document.querySelector('.section_marquee');
      if (!section) return;
      var container = section.querySelector('.marquee-container');
      if (!container) return;
      if (container._mjsMarquee) return;
      var cards = container.querySelectorAll('.marquee-card');
      if (!cards.length) return;
      var gap = parseFloat(getComputedStyle(container).columnGap) || 0;
      if (!container.style.paddingRight) container.style.paddingRight = gap + 'px';
      container.offsetWidth;
      var halfWidth = container.clientWidth / 2;
      if (halfWidth <= 0) return;
      container._mjsMarquee = true;
      gsap.killTweensOf(container);
      var wrap = gsap.utils.wrap(-halfWidth, 0);
      var pos = 0;
      gsap.ticker.add(function (time, delta) {
        pos -= delta / 10;
        gsap.set(container, { x: wrap(pos) });
      });
    } catch (e) {
      console.error('[MJS] fixMarquee error:', e);
    }
  }

  function run() {
    if (observer) observer.disconnect();
    replaceParagraphs(document.body);
    replaceText(document.body);
    replaceInnerHTML(document.body);
    replaceImages();
    replaceDataSrcImages();
    replaceLogos();
    fixNavLinks();
    killHeroVideo();
    fixStackCardImages();
    fixModalContent();
    fixDutchAlts();
    fixStepsBurgerClass();
    neutralizeFooterLinks();
    startObserver();
  }

  // --- FIX 1: Add w-mod-ix3 immediately ---
  // The homepage Webflow JS adds w-mod-ix3 when IX3 interactions initialize,
  // but subpages have no IX3 data, so the class never gets added.
  // Without it, the CSS rule html.w-mod-js:not(.w-mod-ix3) hides
  // [data-animate="card"] elements permanently.
  document.documentElement.classList.add('w-mod-ix3');

  // --- FIX 2: Run replacements on DOMContentLoaded + on window load ---
  // Replaces the three arbitrary setTimeout(run, 500/1500/3000) calls.
  // First pass catches static DOM; second pass catches late-injected content.
  function init() {
    run();
    // Dismiss the loader if it exists (homepage only)
    var loader = document.querySelector('.loader');
    if (loader && getComputedStyle(loader).display !== 'none') {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(function () {
        loader.style.display = 'none';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }, 500);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // --- FIX 3: Recalculate ScrollTrigger positions after layout stabilizes ---
  // Images loading cause layout shifts that make ScrollTrigger positions wrong
  // (e.g. footer triggers fire at negative scroll values).
  // Also add mjs-content-ready here instead of an arbitrary 6s timeout.
  window.addEventListener("load", function () {
    try { run(); } catch (e) { console.error('[MJS] run() error on load:', e); }
    document.documentElement.classList.add('mjs-content-ready');
    if (typeof ScrollTrigger !== 'undefined') {
      try { ScrollTrigger.refresh(); } catch (e) { console.error('[MJS] ScrollTrigger.refresh error:', e); }
    }
    fixMarquee();
    fixNavDropdown();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      });
    }
  });

  // Fallback: if window load hasn't fired after 8s, force content-ready
  setTimeout(function () {
    if (!document.documentElement.classList.contains('mjs-content-ready')) {
      document.documentElement.classList.add('mjs-content-ready');
      try { run(); } catch (e) { console.error('[MJS] run() error on fallback:', e); }
      if (typeof ScrollTrigger !== 'undefined') {
        try { ScrollTrigger.refresh(); } catch (e) { /* ignore */ }
      }
      fixMarquee();
      fixNavDropdown();
    }
  }, 8000);

  // --- FIX 4: rebuildStepsAnimation REMOVED ---
  // The Odyn bundle's ye() function already creates the steps scroll-pin
  // animation. Our rebuildStepsAnimation() was creating DUPLICATE
  // ScrollTrigger pin instances, causing unpredictable behavior.

  observer = new MutationObserver(function (mutations) {
    var hasImages = false;
    var hasText = false;
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (n) {
        if (n.nodeType === 1) {
          replaceText(n);
          replaceParagraphs(n);
          hasText = true;
          if (n.tagName === 'IMG' || n.querySelector('img')) hasImages = true;
        }
      });
      if (m.type === 'attributes' && (m.attributeName === 'src' || m.attributeName === 'srcset')) hasImages = true;
    });
    if (hasImages) {
      replaceImages();
      fixStackCardImages();
    }
    if (hasText) replaceLogos();
  });
  startObserver();
})();
