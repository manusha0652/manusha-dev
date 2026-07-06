# Adding a new learning topic

1. Create a new subfolder here, e.g. `mobile-dev/index.ts`, copying the shape of an existing topic (see `ai-ml/index.ts`).
2. Add the icon key it should use to `iconMap` in both `src/components/LearningCards.tsx` and `src/pages/LearningTopicPage.tsx` if it needs a new icon.
3. Import it in `index.ts` and add it to the `learningTopics` array in the position you want it displayed.

Each topic gets its own page automatically at `/learning/<slug>` via `LearningTopicPage.tsx`.
