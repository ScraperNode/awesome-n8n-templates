# 🎬 Build and review product video storyboards with forms and manual Cicadas handoff

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a product video brief via n8n Forms, validates the inputs, generates a three-shot storyboard and prompt pack using fixed rules, and shows an approval page with copyable prompts for manual use in Cicadas.

## How it works
1. Receives a product video brief submission through an n8n Form with details like appearance, audience, benefit, context, CTA, format, duration, and style.
2. Validates required fields, character limits, and allowed dropdown selections, then builds a three-shot storyboard (hook, product detail, closing) with planned edit timings and structured prompts.
3. If the brief is invalid, returns a completion page that lists validation errors and instructs the user to revise and resubmit.
4. If the brief is valid, shows a review form that displays the full storyboard and asks the user to approve the draft or request revisions.
5. When approved, renders a final handoff page with per-shot copyable prompts, a full Markdown handoff pack, and a link to open Cicadas for manual generation.
6. When not approved, shows a message that the brief needs revision and stops without creating any external requests.

## Setup
1. Import the workflow into your n8n instance and test the form flow with non-sensitive sample product information.
2. Publish the workflow and use the Form Trigger production URL for the “Product video brief” form wherever you collect briefs.
3. Optionally configure access control for the form in your n8n environment if the brief intake should be restricted.
4. Ensure you have a Cicadas account available for the manual generation step, since the workflow does not send data to Cicadas or use an API key.

## Requirements
- An n8n instance with Form Trigger, Form, Code and If nodes (tested with n8n 2.43.5). Use product facts and claims that you are authorized to share.

## Customization
- Adjust the fixed shot rules, prompt wording and form options in the Code nodes to match your production process. The 15, 20 and 30 second options describe a planned edited video, not guaranteed generator clip lengths.

## Additional info
Manual handoff: open [Cicadas](https://cicadas.ai/) and copy the approved prompts yourself. This workflow uses fixed JavaScript rules; it does not call an AI model, send data to Cicadas, generate a video, download media or assemble clips. Manually review every product claim and visual restriction before generation. Video generation may require paid credits, and n8n hosting may have separate costs. No API credentials are required by this workflow. Avoid sensitive product information in public forms.

## 🔗 Nodes Used

n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
