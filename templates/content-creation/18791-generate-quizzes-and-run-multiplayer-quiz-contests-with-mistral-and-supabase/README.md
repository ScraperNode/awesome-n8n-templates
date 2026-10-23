# 🎬 Generate quizzes and run multiplayer quiz contests with Mistral and Supabase

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow powers MindArena’s quiz features by generating and retrieving quizzes in Supabase, managing multiplayer contest rooms via a single webhook, and producing personalized quiz-performance feedback using Mistral Cloud.

## How it works
1. Receives a POST request to `/webhook/generate-quiz`, sends the topic, difficulty, and question count to Mistral Cloud to generate multiple-choice questions, and stores the quiz and questions in Supabase before returning the `quiz_id`.
2. Receives a request to `/webhook/get-quiz`, fetches the quiz and its questions from Supabase by `quiz_id`, and returns a combined JSON payload to the client.
3. Receives a POST request to `/webhook/ai-feedback`, sends the submitted quiz performance data to Mistral Cloud via an AI Agent to generate structured tutoring feedback.
4. Parses the AI output into `overall_performance`, `strengths`, `areas_to_improve`, and `practical_suggestion`, falling back to default feedback when the AI returns invalid JSON.
5. Receives a POST request to `/webhook/arena-management`, routes by `action`, and uses Supabase to create rooms (including generating quiz questions), join rooms, start contests, fetch contest questions, submit scored results, and return a ranked leaderboard.

## Setup
1. Add a Supabase API credential and ensure your Supabase project has the required tables (at minimum: `quizzes`, `questions`, `rooms`, `room_players`, and `contest_results`).
2. Add a Mistral Cloud API credential for the Mistral chat model used for quiz generation and performance feedback.
3. Deploy the workflow and configure your frontend to call the webhook endpoints (`/webhook/generate-quiz`, `/webhook/get-quiz`, `/webhook/ai-feedback`, and `/webhook/arena-management`) with the expected JSON fields such as `quiz_id`, `action`, and room/answer payloads.
4. For the arena flow, generate a quiz first (or pass a valid `quiz_id`) before calling `startContest`, and ensure `createRoom` includes valid `max_players` (2–10) and `number_of_questions`.

## Additional info
Need Help or Customization?

Digital Biz Tech can help tailor this workflow to your business.

We offer free setup support, including credential configuration and deployment.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)

Developer:JESWIN MADONA M
LinkedIn: [https://www.linkedin.com/in/jeswinmadona/](https://www.linkedin.com/in/jeswinmadona)

You can also DM us on LinkedIn for any help or customization.

## 🔗 Nodes Used

Webhook, Supabase, AI Agent, Basic LLM Chain, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
