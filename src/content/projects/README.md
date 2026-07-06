# Adding a new project

1. Create a new file here, e.g. `my-project.ts`, copying the shape of an existing one (see `busmate-lk.ts`).
2. Add its real screenshot to `public/projects/my-project.jpg` (any image extension works, just match the `previewImage` path).
3. Import it in `index.ts` and add it to the `projects` array in the position you want it displayed.

`Projects.tsx` automatically features the first three entries and lists the rest under "More work on GitHub" — reorder the array to change what's featured.