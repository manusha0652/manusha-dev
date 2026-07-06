# Adding or updating a skill category

1. Edit an existing file (e.g. `databases.ts`) to tweak that category's skills, or create a new file here for a new category, copying the shape of an existing one.
2. Import it in `index.ts` and add it to the `skillCategories` array in the position you want it displayed.

`level` (0-100) isn't currently rendered visually — skills show as plain tags — but is kept for a future proficiency-bar view.