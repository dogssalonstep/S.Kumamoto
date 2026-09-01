# VERSION2_BACKLOG — S.Kumamoto

Version 2 is **not scheduled yet**.

This document is a list of candidates, not permission to implement them.

## Priority A — Verify before redesign

### A-01. Full responsive audit

Check at minimum:

- iPhone 12 Pro-class viewport
- narrow smartphones
- tablet
- common desktop widths
- very wide desktop

Pay particular attention to:

- horizontal overflow
- text clipping
- unexpected line breaks
- image cropping
- fixed save button overlap
- contact/LINE area
- shop information
- footer

The Version 1 process already encountered horizontal-overflow and desktop text-clipping problems, so Version 2 should test these systematically rather than relying on visual inspection at one width.

### A-02. Accessibility audit

Review:

- heading hierarchy
- link/button names
- keyboard focus
- color contrast
- skip link behavior
- image alternative text
- modal focus management
- reduced-motion behavior

Do not change the visual language merely to satisfy a checklist; preserve the quiet design while improving actual usability.

### A-03. Performance audit

Measure before changing.

Potential areas:

- image dimensions and compression
- lazy loading
- hero image loading
- CSS size
- JavaScript size
- unnecessary assets
- cumulative layout shift

Do not optimize by visibly degrading image quality.

## Priority B — Experience improvements

### B-01. Strengthen the transition between sections

The narrative is already coherent. Version 2 could examine whether the transitions between sections feel intentional enough, especially between:

- 06 THINK → 07 JOURNEY
- 08 FUTURE → EPILOGUE
- EPILOGUE → 09 CONTACT

The objective is not to add decoration. It is to make the emotional progression easier to feel.

### B-02. Reconsider desktop image/text proportions

Version 1 required several desktop adjustments because some text was clipped while large images occupied too much visual space.

Version 2 can explore a more robust grid system so that text remains comfortable at intermediate desktop widths.

### B-03. Review practical-information UX

The current site includes:

- address
- hours
- closed days
- official site
- phone
- LINE

Possible future improvements:

- tap-to-call behavior on mobile
- clearer LINE action on mobile
- optional map access
- clearer distinction between official site and reservation/contact

Only implement changes that genuinely reduce friction.

## Priority C — Content evolution

### C-01. Deepen the “3 years ahead” idea

The hearing sheet says the desired future is to show owners a vision for their dog's life three years ahead and indicate what can be done now.

Version 1 introduces this idea. Version 2 could deepen it if there is enough authentic material.

Do not invent claims or examples that were not provided by the owner.

### C-02. Add new material only when it is real

Potential source material:

- new photographs
- new observations from actual work
- owner-approved episodes
- updated business information

The project should continue to favor lived experience over generic pet-salon marketing language.

## Priority D — Repository maintenance

### D-01. Keep the root compact

Version 1 accumulated several historical CSS/ZIP files during iteration. Before Version 2, distinguish:

- active production files
- historical snapshots
- documentation
- archives

Do not delete historical files blindly. First confirm whether Git history or a release/tag already preserves them.

### D-02. Establish a clean release workflow

Recommended future structure:

```text
main
  = stable published version

version-2
  = development

v1.0.0
  = frozen Version 1 baseline
```

Future releases should use semantic version tags such as `v2.0.0` when the next major version is actually completed.

## Explicit non-goals for Version 2

Do not:

- turn the site into a conventional service/price-list site without discussion
- add excessive animations
- add generic marketing slogans
- make the design more colorful merely to make it “pop”
- add biography/personal history that the owner did not approve
- replace the quiet tone with sales language
- change the core idea 「先へ進むために、急がない。」 without a deliberate brand-level review

## Definition of success for Version 2

A successful Version 2 should be measurably better than Version 1 in usability, robustness, accessibility, performance, or narrative clarity **without losing the character that made Version 1 work**.
