# Adding a new learning topic

1. Create a new subfolder here, e.g. `mobile-dev/index.ts`, copying the shape of an existing topic (see `ai-ml/index.ts`).
2. Add the icon key it should use to `iconMap` in both `src/components/LearningCards.tsx` and `src/pages/LearningTopicPage.tsx` if it needs a new icon.
3. Import it in `index.ts` and add it to the `learningTopics` array in the position you want it displayed.

Each topic gets its own page automatically at `/learning/<slug>` via `LearningTopicPage.tsx`.

## Adding images / completed labs to a topic

If a topic has hands-on labs, screenshots, or diagrams to show (see `aws-cloud/index.ts` for a full example):

1. Put the image files under `public/learning/<slug>/`, e.g. `public/learning/aws-cloud/cloud-first-steps.png`. Certificates go in the same folder as a PDF.
2. Add an `achievements` array to the topic, one entry per lab/module: `{ title, image, description, certificateLink? }`. `image` and `certificateLink` are root-relative paths into the folder from step 1.
3. `LearningTopicPage.tsx` renders `achievements` automatically as an image gallery — no page changes needed.
