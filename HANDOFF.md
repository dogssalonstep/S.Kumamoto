HANDOFF — S.Kumamoto Living Brand Version 1.0
1. Project identity
This project is the Living Brand site for 隈本聡子 / DOG SALON STEP.
The purpose is not simply to explain a service or list a biography. The site should communicate the person's attitude toward dogs and owners so that a first-time visitor can feel reassurance and trust.
The original hearing sheet explicitly frames the project as a search for the person's character, gaze toward dogs, consideration for owners, and small daily decisions rather than a title/service introduction.
2. Person and brand understanding
The hearing sheet identifies the desired visitor response as:
「この人なら愛犬を任せられる」と思ってもらえる安心感・信頼。
The following impressions are intentionally avoided:
華やかすぎる
営業的
堅い
かわいらしすぎる
The hearing sheet describes the person's characteristics as:
粘り強い
責任感が強い
生真面目
A particularly important point is that responsibility is both a strength and something that can lead her to push herself too hard.
3. Core attitude toward dogs
The hearing answers establish these behaviors:
First contact is given enough time.
Fear and tension are not denied.
Excessive eye contact or unnecessary touching is avoided.
A calm voice is used.
The dog is allowed to decide when to approach.
Small changes are watched carefully.
Time is prioritized when necessary.
When an owner's request is not good for the dog, the reason is explained rather than simply obeying.
When uncertain, she researches, consults others, and reconsiders.
These are the behavioral foundations behind the site's copy.
4. Brand atmosphere
The hearing sheet gives these sensory references:
Morning natural light
Wood
White
Deep green
Quiet sound
It also says to avoid a dark overall impression; black/dark colors are acceptable only as accents.
5. Copy decisions already approved
Hero
「先へ進むために、急がない。」
No occupational title is placed as the hero's main message.
Section copy
01 PACE
「犬には、犬の歩幅がある。」
02 FIRST CONTACT
「怖がる気持ちを、否定しない。」
03 TRUST
「近づいてくるまで、待つ。」
04 NOTICE
「小さな変化を、見逃さない。」
05 EXPLAIN
「説明する時間を、惜しまない。」
06 THINK
「考えることを、止めない。」
The exact punctuation and line breaks above are part of the approved Version 1 presentation.
6. Photo roles in the current HTML
The current `index.html` references these image files:
Section	Image
Hero	`hero-sea-ginji.jpg`
01 PACE	`pace-distance.jpg`
02 FIRST CONTACT	`first-contact.jpg`
03 TRUST	`trust-mel.jpg`
04 NOTICE	`notice-skin.jpg`
05 EXPLAIN	`explain.jpg`
06 THINK	`think-material.jpg`
07 JOURNEY	`journey-bench.jpg`
08 FUTURE	`future-eye-line.jpg`
Epilogue	`epilogue-mountain.jpg`
09 CONTACT	`contact-entrance.jpg`
LINE	`line-qr.png`
Do not casually replace these images in Version 2. Their roles were selected as part of the narrative.
7. Public information
Address: 〒887-0022 宮崎県日南市上平野町2丁目13-10
Hours: 9:00〜19:00
Closed: 毎週水曜日 または 不定休
Phone: 070-9100-4138
Official site: https://dog-salon-step.com/
Booking methods: Phone and official LINE
8. Current technical baseline
Verified current `index.html` references:
```html
<link rel="stylesheet" href="./site-v11.css">
<script src="./script-v6.js" defer></script>
```
The page also contains:
responsive layouts
fixed 「保存」 button
save modal
skip link
semantic section headings
lazy-loaded content images
`fetchpriority="high"` on the hero image
GitHub Pages support files
The current CSS explicitly contains `overflow-x: hidden` on `html` and `body`, but this should not be treated as the solution to future layout problems. If horizontal overflow returns, find the actual overflowing element first.
9. Version 1 boundary
Version 1 is finished.
Do not use Version 2 to make random cosmetic changes. Any future work should answer a specific problem or improve a measurable aspect of the experience.
10. Things explicitly not to expose
The hearing sheet says the site should not include:
-人物
-家族
-過去
This means personal-life material and past-history content should not be added simply to make the profile richer.
11. Recommended restart procedure
When a new AI agent takes over:
Give it `README.md`, `HANDOFF.md`, and `VERSION2_BACKLOG.md`.
Give it the GitHub repository.
Ask it to inspect the current `main` branch before editing.
State that Version 1 is frozen.
Require a proposal before any Version 2 implementation.
Keep Version 1 recoverable through a Git tag/release named `v1.0.0`.
12. Suggested handoff prompt
Use this as the starting prompt with another AI:
> This is the S.Kumamoto Living Brand project.
>
> Read `README.md`, `HANDOFF.md`, and `VERSION2_BACKLOG.md` first.
>
> Version 1.0.0 is the frozen baseline. Do not overwrite or reinterpret established copy, photo roles, or brand direction without explicit approval.
>
> Before making Version 2 changes, inspect the current GitHub repository and explain what you would change, why, and what existing behavior must remain unchanged.
>
> Treat the project's central idea as:
> 「先へ進むために、急がない。」
>
> The goal is to evolve the site without losing the quiet sense of reassurance, trust, and respect for each dog's pace.
