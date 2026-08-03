# MJ's Burger Joint — Image Generation Prompts

Every prompt below is self-contained — paste any single one into Midjourney, DALL-E, Flux, Firefly, or Ideogram without needing the others. Prompts are numbered by website section and mapped to their exact HTML slot.

---

## House style

MJ's is a fun, energetic burger foodtruck brand based in the US. The photography should feel alive — real service, real crowds, real food. Not stock, not staged, not corporate. Think festival energy meets craft burger precision. American outdoor food culture, not European.

| Rule | Why it matters |
|---|---|
| Natural light preferred | Available light or warm tungsten. No flash rings or studio setups. |
| Real surfaces | Steel counters, butcher paper, wooden boards. No seamless backdrops. |
| Nothing arranged | Burgers sit where they landed. Fries fall where they fell. |
| Eye level to 3/4 | No aerial flat-lays. Straight-on or slight angle. |
| Warm grade | Grade toward deep navy-blue shadows + warm orange-red highlights. |
| Documentary energy | It should look caught in motion, not posed for a catalog. |
| American context | US-style food trucks, American festival crowds, American outdoor scenery. No European signage, license plates, or architecture. |

**Global negative prompt** — append to every generation:

```
no flash photography, no ring light, no studio lighting, no seamless backdrop,
no aerial flatlay, no top-down, no stock photo styling, no plastic food gloss,
no artificial steam, no scattered garnish, no herbs sprinkled for effect,
no oversaturation, no HDR, no teal-orange grade, no watermark, no text overlay,
no hands with wrong fingers, no logos, no lens flare, no white plate,
no European architecture, no European license plates, no pizza, no pasta,
no Italian food, no salad
```

**Brand palette to reference:** Ink Blue (deep navy) `#1B2A4E`, Bone Cream (warm off-white) `#F1ECDE`, Ember (warm orange-red) `#D44A2A`, near-black `#0F0F0F`.

---

## 00 · LOGO / WORDMARK
**Slot:** navbar, footer, preloader, favicon. **Format:** SVG preferred, or transparent PNG at 800x200 minimum.

> Design a bold wordmark logo for "MJ's Burger Joint". The typography should
> use a heavy, condensed sans-serif with slight retro diner energy — think
> hand-painted signage on a food truck. The apostrophe in "MJ's" should feel
> like a brush stroke. "BURGER JOINT" sits below or beside "MJ's" in a smaller
> weight. Color: bone cream (#F1ECDE) on transparent background, plus a deep
> navy (#1B2A4E) variant and an ember orange-red (#D44A2A) variant. No
> illustrations, no burger icons, no clip art — just strong type. The logo
> should work at 40px tall in a navbar and at 200px tall on a truck panel.
> Supply as vector/SVG with clean paths.

**Filename:** `logo-cream.svg`, `logo-navy.svg`, `logo-ember.svg`

---

## 01 · HERO — Crew at the truck (desktop)
**Slot:** `hero-img_img hide-mobile` — the main hero image, visible on desktop/tablet. **Ratio:** 16:9 landscape, minimum 2800px wide. **Currently shows:** Pizza Amici crew behind their counter — this is the #1 most visible image on the entire site.

```
Documentary photograph of four young diverse cooks standing behind the open
serving window of a navy blue food truck at golden hour, shot from slightly
below at eye level. They wear deep navy aprons over casual streetwear — one is
mid-laugh handing a wrapped burger to an outstretched hand in the foreground,
another is assembling an order, one is working the flat-top grill with sparks
of oil, and one is calling out an order number. Warm string lights are strung
across the top of the service window. An "ORDER HERE" chalkboard sign is
partially visible above. The truck exterior is painted deep navy blue with a
warm cream stripe. Golden hour sun backlights the scene from behind the truck.
Shot on 35mm at f/2, shallow depth of field, natural film grain. Colour graded
with deep navy shadows and warm orange-red highlights on skin and food. The
energy is fun, loud, busy — a Friday night rush. American outdoor festival
setting, grass and trees soft in the background.
```

**Filename:** `hero-crew-desktop.avif`

---

## 01M · HERO — Crew at the truck (mobile)
**Slot:** `hero-img_img show-mobile` — mobile-only hero. **Ratio:** 4:5 portrait, minimum 1000px wide. **Currently shows:** Same Pizza Amici crew, tighter crop.

```
Documentary photograph of two young cooks framed tight in the serving window
of a navy blue food truck, shot straight-on at eye level in portrait
orientation. One is grinning while handing a foil-wrapped burger forward, the
other is visible behind working the grill with a steel press in hand. Warm
tungsten light from inside the truck, string lights above casting a warm glow.
The serving counter has bone cream butcher paper and a small chalkboard menu
visible at the edge. Shot on 50mm at f/2, shallow depth, natural grain. Deep
navy shadows, warm orange-red on skin highlights. Energetic, welcoming, the
moment of the handoff. Tight vertical composition with the window frame
creating a natural border. American food truck design.
```

**Filename:** `hero-crew-mobile.avif`

---

## 02 · HERO VIDEO POSTER
**Slot:** `bunny-bg__placeholder` — the video section background/poster image. **Ratio:** 16:9 landscape, 1920×1080 minimum. **Currently shows:** a pizza-related placeholder.

```
Documentary photograph of a navy blue food truck parked at a bustling American
summer music festival, shot wide in 16:9 landscape. The truck is center-left
with its service window open, warm light spilling out, a visible grill and
steam inside. A diverse queue of 8-10 young people stretches along the right
side, some on phones, some chatting, two already eating burgers. Festival stage
lighting and fairy lights glow soft in the background. Late golden hour, long
warm shadows on the grass. Shot on 24mm at f/4, deep depth of field to keep
foreground and background legible. Natural grain. Deep navy tones in the
shadows, warm orange-red in the highlights. Wide, cinematic, atmospheric. This
image sits behind a play button, so the composition should feel like a film
still — a story about to unfold.
```

**Filename:** `video-poster.avif`

---

## 03 · INTRO — Friends eating together
**Slot:** `photo-pic-00` — intro section photo showing a group enjoying the food. **Ratio:** ~4:3 landscape, 800px wide. **Currently shows:** "Group of five young people enjoying burger slices in front of a food stall."

```
Documentary photograph of a group of five diverse young friends standing
together in front of a food truck, laughing and eating. Two are holding
Nashville hot chicken burgers with visible red-glazed chicken and brioche buns,
one is dipping a tender into sauce, one is sipping from a thick milkshake cup,
and one is mid-bite with sauce on their fingers. They're casually dressed in
summer clothes — tank tops, shorts, sunglasses pushed up on foreheads. The navy
blue food truck is soft in the background with string lights and a warm glow.
Shot at eye level, 35mm, f/2.8, natural grain. Golden hour. The group fills
most of the frame. Fun, social, authentic — a friend group at a festival, not
models posing. American outdoor setting.
```

**Filename:** `intro-friends.avif`

---

## 04 · FOOD HERO — The Nashville Hot
**Slot:** `burger-brown` — the floating product shot of the signature burger. **Ratio:** ~1:1 or 4:5, transparent-background-friendly composition on a dark/navy surface. **Currently shows:** a pizza/burger with cayenne glaze (appears multiple times).

```
Documentary food photograph of a single Nashville hot chicken burger on a
scratched dark steel surface, shot straight-on at counter height with a very
slightly elevated 10-degree angle. The chicken thigh is thick and craggy with a
deep cayenne-red and mahogany glaze, glistening with hot oil. It sits on a soft
toasted brioche bun — the bottom bun has a visible butter-toast sear. Melted
pickles and a slick of house sauce peek out from the edges. A few drops of hot
sauce have dripped onto the bone cream butcher paper underneath. One corner of
the bun is slightly lifted showing the cross-section. Available warm light from
one direction — left side — creating a dramatic shadow on the right. Shot on
85mm at f/2.8, extremely shallow depth of field with the front edge of the bun
tack-sharp and the back falling soft. Natural film grain. Deep navy shadows,
warm ember highlights on the glaze. Bold, appetizing, the hero product shot.
No garnish, no side items, no hands — just the burger on paper on steel.
```

**Filename:** `food-nashville.avif`

---

## 05 · FOOD — The Smash Chicken
**Slot:** hero carousel or menu card, may also fill stack-card slots. **Ratio:** 16:9 landscape, 1200px+ wide.

```
Documentary food photograph of a double smash chicken burger on a scratched
steel counter, shot in 3/4 view from slightly above. Two thin lacy-edged
smashed chicken patties — each with a dark golden caramelized crust and
crispy irregular edges — with a slice of melted American cheese draped over
each patty. The cheese is half-melted, pulling slightly. Soft glossy brioche
bun slightly compressed from the stack. Pickled jalapeno slices and shredded
iceberg lettuce visible between the patties. A smear of special sauce on the
top bun. The burger sits on crumpled bone cream butcher paper on a dark steel
counter. Available warm kitchen light from the left, honest shadows to the
right. Shot on 50mm at f/2.8, natural grain. Deep navy shadows, warm ember
orange on the crust edges. Energetic, messy, delicious — the kind of burger
photo that makes you hungry. No hands, no utensils.
```

**Filename:** `food-smash.avif`

---

## 06 · FOOD — Burger + Tenders combo plate
**Slot:** `burger-tenders_img` — the combo plate image in the menu section. **Ratio:** ~3:2 landscape, 800px+. **Currently shows:** PIZZA + PASTA (this MUST be replaced — it's the most obviously wrong image on the site).

```
Documentary food photograph showing a split composition: on the left half, a
Nashville hot chicken burger cut in half revealing the cross-section — craggy
red-glazed chicken, melted pickles, brioche bun, sauce dripping. On the right
half, a generous pile of golden fried chicken tenders with craggy breading,
a small ramekin of bright orange dipping sauce between them. Both sit on bone
cream butcher paper on a dark navy surface. A few thick-cut seasoned fries
scattered casually between the two items. Available warm light from overhead,
casting soft shadows. Shot at slight angle, 35mm, f/4, natural grain. The
composition should feel like "the full MJ's experience" — burger AND tenders
in one generous spread. Deep navy shadows, warm orange-red highlights. Abundant,
generous, not precious.
```

**Filename:** `food-combo.avif`

---

## 07 · FOOD — Tenders basket
**Slot:** menu card / tenders detail. **Ratio:** 1:1 square, 800px.

```
Documentary photograph of a red-and-white checkered paper-lined basket of
golden fried chicken tenders on a scratched steel counter, shot straight-on
at counter height. Five thick tenders with craggy golden-brown breading, each
one slightly different in size and shape. A small ramekin of bright ember
orange-red dipping sauce sits to the right. A generous pile of thick-cut
seasoned fries with visible flaky salt and paprika fills the left side of the
basket. Bone cream butcher paper underneath with grease spots. Available warm
light from one side. 50mm, f/2.8, natural grain. The tenders are piled
casually — they sit how they were tossed in, not arranged. One tender is
broken showing the juicy white interior. Generous, abundant, real. Deep navy
shadows, warm ember highlights on the breading.
```

**Filename:** `food-tenders.avif`

---

## 08 · FOOD — Oreo smoothie
**Slot:** menu card / drinks section. **Ratio:** 4:5 portrait, 600px+ wide.

```
Documentary photograph of a tall frosted clear plastic cup of cookies-and-cream
Oreo milkshake, shot straight-on at counter height on a bone cream surface.
The shake is thick and creamy — pale grey-white with dark Oreo cookie speckles
swirled throughout. Whipped cream is piled high on top with crushed dark Oreo
cookie pieces and a drizzle of chocolate sauce. A navy blue paper straw sticks
out at a slight angle. Heavy condensation droplets on the outside of the cup.
Available window light from the left casting a soft shadow to the right.
50mm, f/2.8, natural grain. The background is soft and warm — a blurred food
truck counter. One whole Oreo cookie leans against the base of the cup. The
straw has a slight bend. Inviting, indulgent, fun — a hot day's reward. Deep
navy tones in the shadow side, warm cream highlights.
```

**Filename:** `food-smoothie.avif`

---

## 09 · FOOD — Fries close-up
**Slot:** menu card / sides. **Ratio:** 1:1 square, 800px.

```
Documentary photograph of a paper cone of thick-cut seasoned fries standing
upright in a wire holder on a scratched steel counter, shot straight-on at
counter height. The fries are hand-cut and uneven — some golden, some with
darker crispy edges, some shorter stubs. Visible flaky salt crystals and red
paprika seasoning. A small steel ramekin of garlic aioli with a swirl sits
beside the cone. The paper cone is bone cream with a slight grease
translucency at the bottom. Available warm side light from the left. 50mm,
f/2.8, natural grain. Background is a soft blur of a busy food truck counter.
Casual, honest, exactly as served — no garnish, no herbs, no parsley. Just
fries, salt, and sauce. Deep navy shadows, warm highlights on the golden fries.
```

**Filename:** `food-fries.avif`

---

## 10 · THE TRUCK — Crowd shot (wide)
**Slot:** hero background, events page hero, truck section. **Ratio:** 16:9 landscape, 2400px+.

```
Documentary photograph of a busy navy blue burger food truck at a large
American summer music festival, shot wide at golden hour. The truck is
positioned in the left third, its serving window open with warm light and
steam spilling out. A queue of 15+ diverse young people stretches along the
front — some checking phones, couples chatting, a kid on shoulders pointing.
To the right, people sit on the grass eating burgers from paper wraps. String
lights and festival banners are strung overhead. An American flag or festival
banner is visible in the far background. The truck exterior is deep navy blue
with warm cream lettering (not readable). Golden hour sun creates long
shadows across the grass. Shot on 24mm at f/4, deep depth of field. Natural
grain. Wide, atmospheric, the golden hour magic. Fun, social, buzzing energy —
the highlight of the festival. No European elements.
```

**Filename:** `truck-crowd-wide.avif`

---

## 11 · THE TRUCK — Service window close-up
**Slot:** foodtruck detail card, truck cards. **Ratio:** 3:2 landscape, 1200px+.

```
Documentary photograph looking into a burger food truck service window from
the customer's perspective, shot at eye level. A smiling young cook in a deep
navy apron with rolled sleeves hands a foil-wrapped burger forward with both
hands — their fingers are slightly greasy. Behind them, another cook works a
flat-top griddle with a steel smash press, sparks of oil visible. The
interior is warm — stainless steel surfaces, a paper order ticket rail, squeeze
bottles of sauce. Warm tungsten light from inside contrasts with the cooler
outdoor light. The counter ledge has crumpled bone cream butcher paper and a
small chalkboard showing today's specials. Shot on 50mm at f/2, shallow depth
with the hands and burger sharp and the background grill soft. Natural grain.
Warm, inviting, personal — the handoff moment where the food meets the
customer. Deep navy in the outdoor shadows, warm ember highlights inside.
```

**Filename:** `truck-window.avif`

---

## 12 · TRUCK CARD — "The Big MJ" exterior
**Slot:** `food truck-card_image` for The Big MJ truck card. **Ratio:** ~1:1 square crop-friendly, 1500px+. **Currently shows:** Pizza Amici truck exterior photo. The site has 5 named truck cards, each needing a distinct exterior shot.

```
Documentary photograph of a large navy blue food truck parked at an American
outdoor event, shot from a 3/4 front angle at eye level. The truck is a full-
size step van (box truck style) with a wide fold-down service window open on
the side. The exterior is painted deep navy blue with warm cream pinstripe
details. Warm string lights run along the roof edge. The service window reveals
a bright warm interior with stainless steel equipment. A small queue of 3-4
people stands at the window. Late afternoon warm light, soft shadows on
pavement. Shot on 35mm, f/2.8, natural grain. The truck dominates the frame —
it's the hero. A banner or A-frame sign is visible near the queue. American
parking lot or park setting with trees in the background. Proud, impressive,
the flagship truck.
```

**Filename:** `truck-big-mj.avif`

---

## 13 · TRUCK CARD — "The Nashville" exterior
**Slot:** `food truck-card_image` for The Nashville truck card. **Ratio:** ~1:1 crop-friendly, 1500px+.

```
Documentary photograph of a medium-sized navy blue food truck (Sprinter van
conversion style) parked at a corporate office courtyard, shot from a 3/4
front angle. The truck has a fold-out service window on the passenger side with
warm light inside. A red-and-white checkered awning extends from above the
window. The exterior is deep navy blue with a warm cream accent stripe and an
ember orange-red detail on the bumper. Two office workers in business casual
stand at the window holding burgers. Midday natural light, clean shadows.
Shot on 35mm, f/2.8, natural grain. The truck is compact and sharp — built
for corporate catering. A small "NASHVILLE HOT" text on the awning (blurred).
American office park setting with glass buildings in soft background. Efficient,
professional, still fun.
```

**Filename:** `truck-nashville.avif`

---

## 14 · TRUCK CARD — "The Double Wide" exterior
**Slot:** `food truck-card_image` for The Double Wide truck card. **Ratio:** ~1:1 crop-friendly, 1500px+.

```
Documentary photograph of two connected navy blue food truck trailers parked
side by side at a large outdoor music festival, creating a double-wide serving
station. Both trailers have open service windows facing the same direction
with warm light inside. The left trailer has a grill station, the right has
an assembly and drinks station — visible through the windows. String lights
connect the two trailers overhead. A crowd of festival-goers surrounds the
setup. Shot from slightly back to capture the full double-width, 24mm, f/4.
Golden hour light. The setup is impressive in scale — this is the big rig for
major events. Deep navy blue with cream and ember accent details. American
festival grounds with a stage or ferris wheel soft in the background. Natural
grain. Wide, impressive, festival-scale.
```

**Filename:** `truck-double-wide.avif`

---

## 15 · TRUCK CARD — "The Lil' Smash" exterior
**Slot:** `food truck-card_image` for The Lil' Smash truck card. **Ratio:** ~1:1 crop-friendly, 1500px+. **Currently shows:** the old "Il Bambino" small truck.

```
Documentary photograph of a small compact navy blue food cart (think Piaggio
Ape or small tow-behind trailer style) parked on a brick sidewalk in front of
a brewery or taproom, shot from a 3/4 angle at eye level. The cart is
charmingly small — a mini version of the big trucks, painted the same deep
navy blue with cream details. It has a tiny fold-up counter and a single
flat-top griddle visible inside. Two smash burgers are sizzling on the griddle.
A bartender from the brewery is reaching for a burger at the window. Warm late
afternoon light. Shot on 50mm, f/2.8, natural grain. The cart's small size is
the charm — it's adorable but serious about the food. A chalkboard A-frame
sign stands beside it. American small-town brewery setting. Cute, scrappy,
personal.
```

**Filename:** `truck-lil-smash.avif`

---

## 16 · TRUCK CARD — "The Party Rig" exterior
**Slot:** `food truck-card_image` for the 5th truck (currently "Lo Spettacolo" — needs renaming). **Ratio:** ~1:1 crop-friendly, 1500px+.

```
Documentary photograph of a large open-sided navy blue food truck with a
retractable glass wall fully open, revealing a full commercial kitchen inside,
parked at an elegant outdoor wedding reception. The truck doubles as a
showpiece — guests can watch the cooking. Inside, two cooks work in clean navy
aprons under warm pendant lights. The truck exterior has deep navy paint with
gold-cream pinstripe details and a warm ember-red accent line. A few wedding
guests in cocktail attire stand nearby holding burgers on small plates.
Fairy lights and draped fabric are visible in the background. Shot at dusk,
blue hour — the warm truck interior glows against the deepening sky. 35mm,
f/2, natural grain. Elegant but still fun — upscale catering without losing
the food truck soul. American outdoor venue setting.
```

**Filename:** `truck-party-rig.avif`

---

## 17 · TRUCK DETAIL IMAGES (×3 per truck)
**Slot:** `food truck-card_media-img` — each truck card has 3-4 detail/interior shots that show in a mini gallery. **Ratio:** ~3:2 landscape, 800px+. **Currently shows:** old Pizza Amici truck interiors.

> For each of the 5 trucks, generate 3 interior/detail shots. Use the same
> truck style as its exterior (prompts 12–16) but focus on:
>
> **Detail A — The kitchen in action:** Close-up of the cook working the
> flat-top griddle inside the truck. Steam, oil sizzle, steel press smashing
> a chicken patty. Tight frame, 50mm, f/2. Warm tungsten light.
>
> **Detail B — The food assembly:** Hands assembling a burger on the counter —
> laying chicken on the bun, adding pickles, drizzling sauce. Shot from above
> the counter looking down at an angle. The order ticket rail is visible.
> Available kitchen light.
>
> **Detail C — The crowd interaction:** Shot from inside the truck looking OUT
> through the service window at the queue of customers. The counter is in the
> foreground with wrapped burgers ready for handoff. Faces of excited customers
> are visible through the window. Interior warm light, exterior natural light.

**Filenames per truck:**
```
truck-big-mj-detail-a.avif, truck-big-mj-detail-b.avif, truck-big-mj-detail-c.avif
truck-nashville-detail-a.avif, truck-nashville-detail-b.avif, truck-nashville-detail-c.avif
truck-double-wide-detail-a.avif, truck-double-wide-detail-b.avif, truck-double-wide-detail-c.avif
truck-lil-smash-detail-a.avif, truck-lil-smash-detail-b.avif, truck-lil-smash-detail-c.avif
truck-party-rig-detail-a.avif, truck-party-rig-detail-b.avif, truck-party-rig-detail-c.avif
```

---

## 18 · THE KITCHEN — Smash action
**Slot:** how-it-works / process step, steps section. **Ratio:** 1:1 square, 800px+.

```
Documentary photograph of hands pressing a chicken patty onto a screaming hot
flat-top griddle with a heavy round steel smash press, shot from the side at
counter height. The patty is being pressed flat — oil is sizzling outward in a
ring, the edges are just starting to lace and crisp with golden-brown color
developing. The cook's forearm is visible with a rolled navy sleeve and a
flour-dusted navy apron tie. A digital thermometer probe sits at the edge of
the frame. Behind the press, two other patties at different stages — one
raw-pink, one fully golden and ready to flip. Available kitchen light from
overhead, warm and slightly harsh, creating strong shadows. 35mm, f/2.8,
natural grain. Deep navy in the shadows, warm ember orange-red in the sizzle
highlights and the developing crust. Real working kitchen, fast and loud —
action shot with motion implied in the sizzle spray.
```

**Filename:** `kitchen-smash.avif`

---

## 19 · THE KITCHEN — Sauce station
**Slot:** process step detail or "how it works" secondary. **Ratio:** 1:1 square, 800px.

```
Documentary photograph of a sauce station inside a food truck kitchen. Five
squeeze bottles on a steel shelf — bright red hot sauce, creamy white house
mayo, yellow mustard, green pickle relish, and an orange-red signature sauce.
A cook's hand is drizzling the bright orange-red signature sauce in a zigzag
across a freshly assembled Nashville hot chicken burger on the counter below.
The burger is nearly complete — chicken, pickles, slaw visible under the
sauce stream. Available overhead warm light. Close-up from the side, 50mm
macro, f/4, natural grain. The squeeze bottles are slightly messy — drips
down the sides, labels with fingerprints. A roll of paper towels and a stack
of to-go containers visible at the edge. Real working conditions, mid-rush.
Deep navy shadows, the sauce line catches the light as a bright ember streak.
```

**Filename:** `kitchen-sauce.avif`

---

## 20 · USP / BENEFITS — Lifestyle photo 1
**Slot:** `usp-pic-01` in the "Our benefits" section. **Ratio:** ~3:2 landscape, 800px. **Currently shows:** "Burger on a car hood with people socializing near a food truck."

```
Documentary photograph of a Nashville hot chicken burger sitting on a bone
cream paper plate resting on the hood of a pickup truck, with a blurred scene
of people socializing near a navy blue food truck in the background. The burger
is in the foreground left third, slightly out of focus on the near edge and
sharp in the middle. Behind it, 4-5 people are leaning against the truck
chatting and laughing, holding drinks and food. Late golden hour, warm long
shadows. Shot at waist level on the truck hood, 35mm, f/2, shallow depth.
Natural grain. The feeling is "I set my burger down for a second to take it all
in" — casual, social, the good life. American tailgate/outdoor gathering
energy. Deep navy in the shadows, warm ember on the burger and skin highlights.
```

**Filename:** `usp-lifestyle-1.avif`

---

## 21 · USP / BENEFITS — Lifestyle photo 2
**Slot:** `usp-pic-02` in the "Our benefits" section. **Ratio:** ~3:2 landscape, 800px. **Currently shows:** "Two women sharing a pepperoni pizza slice" (pizza reference — MUST replace).

```
Documentary photograph of two young women wearing sunglasses, laughing together
while sharing a Nashville hot chicken burger — one is holding the burger out
and the other is leaning in for a bite. They're standing in front of a navy
blue food truck with string lights and the warm glow of the service window
behind them. Both are casually dressed in summer festival clothes. One has
sauce on her fingers. Shot at eye level, 50mm, f/2, shallow depth with the
truck soft in the background. Natural grain, golden hour warmth. Fun, social,
genuine friendship moment. Not posed — caught mid-laugh. American outdoor
setting, grass underfoot. Deep navy in the truck and background, warm ember
and golden highlights on skin and food.
```

**Filename:** `usp-lifestyle-2.avif`

---

## 22 · CROWD — First bite reaction
**Slot:** testimonials / social proof / reviews section. **Ratio:** 4:5 portrait, 800px+.

```
Documentary photograph of a young person taking a huge first bite of a
Nashville hot chicken burger at an outdoor festival, shot from slightly to the
side at chest height. Their eyes are wide with excited surprise, the red-glazed
chicken is pulling away from the bun in a satisfying stretch, hot sauce is on
their fingers. They're wearing a festival wristband, a casual t-shirt, and
have a paper food tray balanced in their other hand with fries. The crowd is
soft bokeh behind them — fairy lights and warm colors. Available golden hour
light on their face. 50mm, f/2, shallow depth, natural grain. Deep navy
shadows, warm ember and golden tones on the food, skin, and lights. Genuine
reaction — not posed, not looking at camera. Fun and alive. The "first bite
face" moment that everyone posts on Instagram.
```

**Filename:** `crowd-firstbite.avif`

---

## 23 · CROWD — Festival wide scene
**Slot:** events section background, festival-events page hero. **Ratio:** 16:9 landscape, 2400px+.

```
Documentary photograph of a large American summer music festival scene at
golden hour. In the mid-ground, a navy blue burger food truck is parked with
its window open and a visible queue. In the foreground, people sit on the grass
in small groups eating burgers — paper trays, cups, casual picnic energy. To
the right, a couple walks by holding burger wraps. String lights and festival
banners are strung above. A stage structure or ferris wheel is visible in the
far background, soft. The sky is warm golden pink with the sun low. Long
shadows across the grass. Shot at eye level, 24mm wide angle, f/4, deep depth
of field. Natural grain. The truck is identifiable but not centered — it's
part of the scene, not the only subject. Wide, atmospheric, the golden hour
festival life. No European elements, no soccer flags, no EU-style festival
structures.
```

**Filename:** `crowd-festival.avif`

---

## 24 · TEAM — Kitchen crew (group)
**Slot:** `work-at` team section, or about page. **Ratio:** 3:2 landscape, 1200px+. **Currently shows:** individual Pizza Amici staff portraits.

```
Documentary photograph of three young diverse cooks behind a burger food truck
counter during service, laughing together while working. They wear deep navy
aprons over casual streetwear — one is mid-flip with a spatula on the griddle,
one is squeezing sauce onto an assembled burger with focused concentration,
one is wiping their forehead with the back of their hand while grinning at the
camera. The truck interior is warm with stainless steel surfaces, order tickets
on a rail, and squeeze bottles visible. Shot from outside looking in through
the service window, 35mm, f/2, natural grain. Warm tungsten light inside,
slightly cooler light outside on their faces. Energetic, young, having fun
while working hard. Real team, not models — some tattoos, messy aprons, flour
on sleeves. The kind of crew you'd want to work with.
```

**Filename:** `team-crew.avif`

---

## 25 · TEAM — Individual portraits (×3)
**Slot:** `work-at-1`, `work-at-2`, `work-at-3` — three individual team member photos in the careers section. **Ratio:** 4:5 portrait, 800px. **Currently shows:** Pizza Amici staff in striped shirts.

> Generate three individual portraits with the same lighting and tone:
>
> **25A — The grill master:** Young person in a deep navy apron and backwards
> cap, caught mid-action pressing a smash press onto the griddle. Shot from
> waist up, they're looking down at the grill with intense focus. Warm kitchen
> light, steam rising. 50mm, f/2. A slight grin on their face.
>
> **25B — The assembler:** Young person in a navy apron carefully placing
> pickles onto a burger at the assembly station. Shot from waist up, they're
> using tongs with precision. A row of to-go containers is visible behind
> them. Available kitchen light, warm. 50mm, f/2. Concentrated but relaxed.
>
> **25C — The window runner:** Young person in a navy apron leaning forward
> through the service window handing a paper bag to a customer (customer not
> fully visible). Shot from outside, they're smiling wide. The warm interior
> glows behind them. 50mm, f/2. Friendly, energetic.

**Filenames:** `team-portrait-1.avif`, `team-portrait-2.avif`, `team-portrait-3.avif`

---

## 26 · TEAM — Background (wide)
**Slot:** `work-at_bg` — the full-width background image behind the careers section. **Ratio:** 16:9 landscape, 1920px. **Currently shows:** "Young male chef sprinkling seasoning on a burger."

```
Documentary photograph of the interior of a food truck kitchen during morning
prep — before the rush. A cook is seasoning a row of raw chicken breasts laid
out on a steel sheet pan, their hand mid-sprinkle with spice dust catching the
light. The counter has mise en place: bowls of pickle brine, stacked brioche
buns, bottles of sauce, a cutting board with sliced onions. Available warm
morning light streaming in through the service window (which is still closed).
The scene is calm and organized — the quiet before the storm. Shot wide on
24mm at f/4, deep depth of field so all the prep details are readable. Natural
grain. Deep navy tones throughout, warm golden light from the window. The image
will be behind text, so keep the center relatively clean and let detail
concentrate at the edges.
```

**Filename:** `team-bg-prep.avif`

---

## 27 · FOOTER — Table spread
**Slot:** `photo-card-img` — the contact/footer section photo. **Ratio:** ~3:2 landscape, 800px. **Currently shows:** "Table with red-white checkered tablecloth with pepperoni pizza, beer bottles, and food."

```
Documentary photograph of a casual outdoor table spread after a food truck
catering event. A long wooden picnic table with bone cream butcher paper as a
runner, scattered with: half-eaten Nashville hot chicken burgers in paper
wraps, a basket of fries, a few ramekins of sauce, cans of craft beer and
soda, a milkshake cup with a navy straw, crumpled napkins, and a few hands
reaching in for fries. The table is messy and lived-in — the aftermath of a
great meal. One person's forearm with a festival wristband reaches in from the
right. The background is soft — string lights and the glow of the navy truck.
Shot from slightly above the table at 35mm, f/2.8, natural grain. Warm golden
light. This is the "gather round the table" moment. Social, communal, the
good mess. Not a flat-lay — shot at an angle showing depth.
```

**Filename:** `footer-table.avif`

---

## 28 · TEAM — Prep moment
**Slot:** about / story section secondary. **Ratio:** 1:1 square, 800px.

```
Documentary photograph of hands slicing brioche buns on a wooden cutting board
in morning light inside the food truck kitchen. A stack of six golden brioche
buns sits to the left, one is being cut with a serrated bread knife — the
blade is mid-stroke with a few crumbs in the air. Behind, in soft focus, a
glass bowl of bright green pickle brine with floating pickle slices, and a
steel hotel pan of raw chicken pieces marinating in a red-orange spice rub.
Available window light from the service window, warm and directional. 50mm,
f/2.8, natural grain. The hands are slightly flour-dusted, wearing no gloves.
A rolled navy apron sleeve is visible at the wrist. Quiet prep moment before
the rush — craft and care. Deep navy tones, warm golden light on the bread.
```

**Filename:** `team-prep.avif`

---

## 29 · TEXTURE — Butcher paper background
**Slot:** section backgrounds, overlays, card backgrounds. **Ratio:** 16:9 or tileable, 2400px+.

```
Flat overhead scan of uncoated bone cream (warm off-white, similar to #F1ECDE)
butcher paper stock at close range, filling the entire frame. Visible paper
fibre texture, a subtle fold crease running diagonally, and one small grease
translucency spot near one edge. Evenly lit with soft diffused light from
above — no directional shadows, no vignette, no drop shadow. The color is
warm and consistent across the frame. High resolution, neutral. Suitable as a
repeating background texture at 50% opacity. No text, no patterns, no marks,
no food, no objects — just paper texture.
```

**Filename:** `texture-paper.jpg`

---

## 30 · SOCIAL / OG SHARE
**Slot:** Open Graph meta image (`og:image`). **Ratio:** 1.91:1 exactly (1200×630px). **Currently shows:** `pizza-amici-og.jpg`.

```
Documentary food photograph of a Nashville hot chicken burger on a scratched
dark steel surface, positioned in the right third of a wide 1200x630
horizontal frame. The left two-thirds is clean negative space — a deep navy
blue (#1B2A4E) surface falling into darkness, suitable for white text overlay
in post-production. The burger is well-lit from the left with warm directional
light — craggy red cayenne chicken, melted pickles peeking out, toasted
brioche bun with visible butter-sear marks. A few scattered fry pieces and a
sauce drip trail lead from the burger toward center frame. Available warm
light only, single direction from the upper left. 50mm, f/2.8, natural grain.
Bold, appetizing, social-media-ready composition with generous empty space for
the brand name. Deep navy shadows, ember warmth on the chicken.
```

**Filename:** `og-share.jpg`

---

## 31 · CLIENT LOGOS (placeholder set)
**Slot:** logo marquee — the scrolling row of client/partner logos. **Format:** SVG or transparent PNG, white monochrome, ~200×80px each. **Currently shows:** Calvin Klein, Porsche, BMW, Lamborghini, Tommy Hilfiger, etc. (European luxury brands — wrong for an American food truck).

> Create 12 simple white monochrome placeholder logo marks on transparent
> backgrounds. The placeholder names should feel like realistic US-based
> clients for a food truck caterer:
>
> 1. **"Bonnaroo"** — music festival (wavy retro type)
> 2. **"SXSW"** — tech/music festival (blocky geometric)
> 3. **"Lollapalooza"** — music festival (playful rounded)
> 4. **"Austin FC"** — sports team (shield shape)
> 5. **"Whole Foods"** — grocery/corporate (clean organic shape)
> 6. **"Red Bull"** — energy brand (angular dynamic)
> 7. **"WeWork"** — office/corporate (minimal modern)
> 8. **"Spotify"** — tech company (circle + waves)
> 9. **"Nashville SC"** — sports team (crest shape)
> 10. **"ACL Fest"** — music festival (star + type)
> 11. **"Google"** — tech corporate (simple wordmark)
> 12. **"Coachella"** — music festival (art deco type)
>
> Keep them minimal — simple geometric marks that suggest the brand without
> copying actual logos. White (#FFFFFF) only, no gradients, no detail.
> These are placeholders until real client logos come in.

**Filenames:** `logo-client-01.svg` through `logo-client-12.svg`

---

## 32 · STACK CARDS (gallery)
**Slot:** `stack-cards__card-image` — 6 stacking card images that animate on scroll in the intro section. **Ratio:** ~3:4 portrait, 600px+ wide. **Currently shows:** placeholder SVGs.

> Generate 6 varied documentary photos showing different aspects of the MJ's
> experience, each with portrait orientation:
>
> **32A:** Close-up of hands breaking a Nashville hot burger in half — the
> cross-section revealing the craggy red chicken, melted cheese, pickles. Sauce
> dripping. 50mm, f/2. Warm kitchen light.
>
> **32B:** A cook pressing a smash press onto the griddle — shot from above at
> 45 degrees showing the circular press, the sizzling patty, oil spray.
> Available kitchen light.
>
> **32C:** A milkshake being poured from a blender into a clear cup — the
> thick cream stream, Oreo chunks visible. 50mm, f/2.8. Clean background.
>
> **32D:** An overhead view of an assembled order on a tray — burger, fries,
> sauce ramekin, drink — on bone cream paper. 35mm, f/4. (This is the ONE
> exception to the no-overhead rule — it's a tray shot, not a flat-lay.)
>
> **32E:** String lights on the truck at dusk — the warm glow of the service
> window, soft bokeh lights, a silhouette of a cook inside. 50mm, f/1.8.
> Atmospheric, moody.
>
> **32F:** Close-up of chicken tenders being dropped into a fryer basket —
> golden oil, bubbles, the raw tenders mid-drop. 50mm macro, f/4. Action
> moment. Warm kitchen light.

**Filenames:** `stack-a.avif` through `stack-f.avif`

---

## Generation notes

**Consistency across the set.** Generate prompt 04 (Nashville hero food shot) first. Once you have a frame whose colour grade, grain, and warmth you like, feed it back as a style reference for all subsequent food shots (05–09). Then generate prompt 01 (crew hero) and use that as the style reference for all people/crowd/truck shots (10–28). The set must look like one photographer over one weekend, not thirty stock images from different shoots.

**Resolution.** Generate at the largest size your tool offers, then downscale. Hero images (01, 01M, 02, 10, 23) want ≥2400px on the long edge. Menu items and details can be 800–1200px.

**Format.** Save as `.avif` for web delivery (best compression). Use `.jpg` only for OG share (social platforms don't universally support AVIF) and texture (needs to tile seamlessly). SVG for logos and client marks.

**What to reject.** If it looks like a McDonald's ad, it's wrong. If it looks like a Michelin-star plating, it's also wrong. Test: would a lifestyle magazine run this as event coverage? If it looks corporate, sterile, lit by more than one source, or arranged on a white plate — regenerate.

**The vibe to hit:** Fun, young, energetic, real. Not gourmet pretentious. Not fast food cheap. The sweet spot is "that cool food truck everyone posts about on Instagram."

**American context:** Every outdoor shot should feel like the American South / Southwest — think Nashville, Austin, LA. No European architecture, no cobblestones, no terraces, no European license plates or signage.

**Where these land.** Expected filenames in `mjs-burger/images/`:

```
logo-cream.svg               (00)
logo-navy.svg                (00)
logo-ember.svg               (00)
hero-crew-desktop.avif       (01)
hero-crew-mobile.avif        (01M)
video-poster.avif            (02)
intro-friends.avif           (03)
food-nashville.avif          (04)
food-smash.avif              (05)
food-combo.avif              (06)
food-tenders.avif            (07)
food-smoothie.avif           (08)
food-fries.avif              (09)
truck-crowd-wide.avif        (10)
truck-window.avif            (11)
truck-big-mj.avif            (12)
truck-nashville.avif         (13)
truck-double-wide.avif       (14)
truck-lil-smash.avif         (15)
truck-party-rig.avif         (16)
truck-*-detail-[a,b,c].avif  (17, ×15 images)
kitchen-smash.avif           (18)
kitchen-sauce.avif           (19)
usp-lifestyle-1.avif         (20)
usp-lifestyle-2.avif         (21)
crowd-firstbite.avif         (22)
crowd-festival.avif          (23)
team-crew.avif               (24)
team-portrait-1.avif         (25A)
team-portrait-2.avif         (25B)
team-portrait-3.avif         (25C)
team-bg-prep.avif            (26)
footer-table.avif            (27)
team-prep.avif               (28)
texture-paper.jpg            (29)
og-share.jpg                 (30)
logo-client-01..12.svg       (31, ×12)
stack-a..f.avif              (32, ×6)
```

**Total: ~58 images + 15 logo SVGs = ~73 assets**

**Priority order for generation:**
1. **P0 (ship blockers):** Logo (00), Hero crew desktop (01), Food Nashville (04), Food combo (06 — currently shows pizza!), OG share (30)
2. **P1 (high visibility):** Hero crew mobile (01M), Food smash (05), Truck crowd (10), USP lifestyle 1+2 (20, 21), Team portraits (25A-C)
3. **P2 (section fills):** Video poster (02), Intro friends (03), Food tenders/smoothie/fries (07-09), Truck window (11), Stack cards (32)
4. **P3 (truck cards):** Individual truck exteriors (12-16) + detail images (17)
5. **P4 (background/support):** Kitchen shots (18-19), Crowd scenes (22-23), Team crew/bg (24, 26), Footer table (27), Prep moment (28), Texture (29), Client logos (31)

Drop the images in `mjs-burger/images/` with these filenames and then run the HTML replacement script to update `src` attributes.
