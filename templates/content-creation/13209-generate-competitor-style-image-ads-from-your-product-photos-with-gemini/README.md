# 🎬 Generate competitor-style image ads from your product photos with Gemini

> ⚡ **273 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Image Ad Cloner AI Agent 

This n8n workflow automates “cloning” a competitor ad style and re-generating it using your product image. A user uploads your product image and provides a competitor ad URL via a form trigger; the workflow downloads both images, converts them to inline/base64 parts, builds a detailed generation prompt, sends the request to a generative-vision model (Gemini-style endpoints), waits for the result, converts the output back to a file and returns it. Use-cases: rapid ad iteration, creative A/B variants, and scaled ad re-skins.

---

# How it works (step-by-step)
1. `form_trigger` — user submits: competitor image URL, their product file, and optional changes.  
2. `convert_product_image_to_base64` — converts uploaded product file to base64 inline data.  
3. `download_image` — fetches the competitor ad image from the provided URL.  
4. `convert_ad_image_to_base64` — converts downloaded competitor image to base64 inline data.  
5. `build_prompt` — assembles a careful prompt (handles partial text, labels, placements, CTA swaps, additional changes).  
6. `generate_ad_image_prompt` → `generate_ad_image` — two HTTP Request nodes call generative endpoints (first to prepare prompt/content and then flash-image generation). These include inline image data and model-specific parameters.  
7. `Wait` — allows async generation to complete (workflow uses a wait/webhook pattern).  
8. `set_result` → `get_image` — extract image result, convert binary to file for downstream use (download or return to the requester).  
9. `Sticky Note` — visual diagram / docs inside workflow.  

---

## Quick Setup Guide
👉 [Demo & Setup Video](https://drive.google.com/file/d/1PLFPHSXQ-DaNAKeBQv7G9SzaXT0c3hRt/view?usp=sharing)
👉 [Course](https://www.udemy.com/course/n8n-automation-mastery-build-ai-powered-enterprise-ready/?referralCode=2EAE71591D3BEB80F2CC)

---

# Nodes of interest
- `form_trigger` (n8n-nodes-base.formTrigger) — entry point; validates inputs.  
- `convert_product_image_to_base64` & `convert_ad_image_to_base64` (extractFromFile) — convert uploaded/downloaded binaries to inline/base64 data for the model.  
- `download_image` (httpRequest) — fetches competitor image URL. Add robust URL validation.  
- `build_prompt` (set) — builds the natural-language prompt that instructs the model how to replace branding, packaging, and CTAs.  
- `generate_ad_image_prompt` & `generate_ad_image` (httpRequest) — POST to generative APIs (examples use Gemini endpoints). Have retry/backoff settings.  
- `Wait` — used to allow model generation to complete before extracting results.  
- `set_result` / `get_image` / `convertToFile` — assemble the final binary file to deliver to the user.

---

# What you’ll need (credentials & permissions)
- n8n account with Workflow active toggle & webhook exposure (or self-hosted endpoint).  
- HTTP credential(s) for your generative model provider:
  - **Header auth** credential for any required custom headers (`httpHeaderAuth`).  
  - **Bearer token** credential for the model API (`httpBearerAuth`).  
  - (Optional) Generic HTTP auth if using proxies or intermediate APIs.  
- Storage (optional): S3 or other if you want to persist generated images.  
- (Recommended) An OCR or moderation service API key if you plan to detect/remove copyrighted logos or PII.  
- Ensure your hosting domain allows outbound HTTPS to the model endpoints and that webhook URLs are reachable.

---

# Recommended settings & best practices
- **Input validation**: enforce allowed mime types (jpg, png, webp), max file size (e.g., 5–10 MB), and sanitize competitor URL domain whitelist.  
- **Retries & backoff**: use `retryOnFail` and `waitBetweenTries` for `httpRequest` nodes (example uses `retryOnFail: true` and `waitBetweenTries: 5000`). Limit retries to avoid abuse.  
- **Rate limits & quotas**: guard calls to the model API with rate-limiting / queueing to avoid hitting provider quotas.  
- **Ethics & copyright check**: run OCR/logo-detect and flag requests that attempt to reproduce trademarked content; require human approval before creating ads that replicate competitor branding.  
- **Partial-text handling**: include logic in the prompt (and optionally OCR pre-check) to identify fragment text on packaging and replace it correctly with your brand text.  
- **Binary handling**: always set and preserve correct `mime_type` in inline data (png/jpeg) to avoid corrupt outputs.  
- **Webhooks & timeouts**: set a sensible Wait time and webhook timeout; provide progress/error messages back to the requester.  
- **Logging & monitoring**: capture model responses and node errors to troubleshoot prompt issues and image artifacts. Obfuscate tokens in logs.  
- **Security**: store API keys in n8n credentials (never as plain text in Set nodes). Use least privilege.

---

# Customization ideas
- Add an **OCR node** (e.g., Tesseract or cloud OCR) prior to `build_prompt` to detect and list text to replace automatically.  
- Add a **logo mask** step to blur or remove competitor logos before feeding to the generator.  
- Generate **multiple variants** per request (different CTAs, color palettes) and save them for A/B testing.  
- Add human-in-the-loop: store generated images in a review queue and send approval emails/webhooks before final download.  
- Integrate **analytics**: tag generated ads and push metadata (prompt, model used, timestamp) to a database for later analysis.  
- Replace Gemini endpoints with other providers or allow a **model selector** UI option.  
- Add automatic compliance moderation filters and a “safe mode” toggle that refuses disallowed transformations.

---

# Tags 
image-ad-cloner, n8n, gemini, generative-ai, image-editing, ad-cloning, automation, form-trigger, viral

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
