# 📱 Create AI-generated meta ad campaigns from product URLs with OpenAI & Firecrawl

> ⚡ **161 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# AI-Powered Meta Ads Builder (Facebook & Instagram)

Turn any product page into ready-to-run Meta ads—fast, consistent, and client-friendly.

* **Category:** Marketing Automation / Ads / AI
* **Price:** **\$25** (one-time)
* **Integrations:** Meta (Facebook & Instagram), OpenAI, Firecrawl, n8n
* **Output:** Campaign → Ad Sets → Creatives → 1:1 Images (**created in PAUSED status**)

---

## Description

This template takes a **product URL** and produces **publish-ready Meta ads** without the busywork. Your client fills a clean form; the workflow scrapes product data, writes a creative brief, generates ad-set variations, produces 1:1 images with OpenAI, and builds Campaign → Ad Set(s) → Ad(s) in **PAUSED** for review.

**Perfect for:** agencies, performance marketers, founders who need repeatable creative and less manual setup.

**Highlights**

* Form-based intake (client-friendly)
* Schema-clean product extraction (no made-up facts)
* Vision cues for on-brand visuals
* Platform-safe 1:1 images and copy lengths
* Auto placements by default (or customize)
* Creates assets in **PAUSED** so you stay in control

---

## What’s inside

* **Form Trigger**: “AI Ad Creation”
* **Firecrawl**: scrape product content + images
* **OpenAI (LLM + Vision)**: clean JSON + aesthetic/emotion cues
* **Creative Brief Builder**: merges product facts with tone/goals
* **Campaign JSON Generator**: campaign + ad\_sets as strict schema
* **OpenAI Images**: 1:1 creatives (1024×1024 by default)
* **Meta Graph API**: upload assets, create creatives, campaign, ad sets, and ads (**PAUSED**)
* **Split / Batch / Wait / If / Set / Merge**: stable, scalable processing

---

## How it works

```
Form → Firecrawl scrape → Product JSON (LLM) → Vision style cues → Creative brief
→ Campaign JSON (LLM) → Split into ad sets → For each ad set:
→ Generate image → Upload to Meta → Create Creative → Create Campaign → Create Ad Set → Create Ad (PAUSED)
```

---

## What changed in this version

* 🔐 **No hardcoded API keys** — all auth uses **n8n Credentials**
* 📌 **PinData removed** — the template ships clean (no sample data)
* 🧩 Clean placeholders for IDs/links in “Configuration Meta Ads” (`your_ad_account_id`, etc.)

---

## Requirements

* **OpenAI** credential (Chat + Images)
* **Facebook Graph API** credential (with `ads_management` permissions)
* **Firecrawl** credential (API key)
* Your **Ad Account ID**, **Facebook Page ID**, **Pixel ID**, **Destination URL**

---

## Quick setup (5 steps)

1. **Import** the JSON in n8n.
2. Create **Credentials** for OpenAI, Facebook Graph API, Firecrawl.
3. Open **“Configuration Meta Ads”** node and set:

   * `ad_account_id`, `facebook_page_id`, `pixel_id`, `website_link`
4. Open the **Form Trigger** URL and submit a **real product URL**.
5. In **Ads Manager**, review campaign/ad sets/ads (they’re **PAUSED**), then enable.

---

## Inputs (Form)

* Product URL *(required)*
* Campaign Type *(Launch, Seasonal, Awareness, Retargeting, LTO)*
* Target Platform *(Facebook, Instagram)*
* Number Of Variation *(integer)*
* Target Audience
* Key Message / Offer
* Emotional Tone *(multi-select: Joy, Trust, Fear, Surprise, Sadness, Disgust, Anger)*

---

## Outputs

* **Creative Brief** (concise, platform-aware)
* **Campaign JSON** with:

  * Ad sets (audience, placements, schedule/budget placeholders)
  * Creative (primary\_text, headline, description, CTA, UTM defaults, reference image)
  * AdConcept (imageName, prompt, emotional hook, 1:1 safe zones)
* **Meta assets created**: uploads → creatives → campaign → ad set(s) → ad(s) (**PAUSED**)

---

## Sticky notes (mandatory)

&gt; **Credentials**
&gt;
&gt; * Use **OpenAI**, **Facebook Graph API**, and **Firecrawl** credentials in n8n.
&gt; * ⚠️ **No hardcoded keys** anywhere (HTTP node or otherwise).

&gt; **Form Testing**
&gt;
&gt; * Use a **real product URL** with at least one image.
&gt; * Start with **1–2** variations; scale after review.
&gt; * If scraping fails, verify Firecrawl key and the site’s policies.

&gt; **Meta Upload**
&gt;
&gt; * Set `ad_account_id`, `facebook_page_id`, `pixel_id`, `website_link`.
&gt; * If uploads fail, check account permissions and app scopes.

&gt; **OpenAI Images**
&gt;
&gt; * Default: **1:1, 1024×1024**.
&gt; * You can change size in the Images node (keep FB/IG safe zones).
&gt; * Prompts should avoid policy-sensitive claims.

&gt; **Safety & Review**
&gt;
&gt; * Everything is created **PAUSED**.
&gt; * Review copy, claims, and targeting for compliance.
&gt; * Enable after quality checks.

---

## Security & compliance

* Secrets live in **n8n Credentials** or environment variables—never in nodes.
* Follow **Meta ad policies** (no restricted claims, no before/after, etc.).
* Product facts only; unknown fields remain `null`/empty arrays.

---

## Performance tips

* Start with **auto placements**; test Feed/Reels later if needed.
* Keep primary text **125–200 chars**; headline short (testimonial-style in quotes).
* Use the best product image as **reference**.
* Scale carefully: tune **Batch** and **Wait** for your throughput.

---

## FAQ

**Does it publish automatically?**
No. Ads are created **PAUSED** for review.

**Instagram-only campaigns?**
Yes. Set placements to IG (or keep auto and let Meta optimize).

**Thin product pages?**
Extractor returns `null` for missing fields; the brief adapts without inventing data.

**Bring my own audiences?**
Swap the generated audience block for your saved audiences or static lists.

**Change image model/size?**
Yes—edit the OpenAI Images node (model/size). Keep 1:1 for FB/IG.

## 🔗 Nodes Used

Function, HTTP Request, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
