# 🎬 Generate AI videos from Telegram messages with Nano Banana & Veo-3

> ⚡ **2,772 views** · 🎬 [Content Creation & Video](../)

## Description

**How to use the provided n8n workflow (step‑by‑step), what matters, what it’s good for, and costs per run.**

---

## What this workflow does (in simple terms)
1) You write (or speak) your idea **in Telegram**.
2) The workflow builds two short prompts:
   - **Image prompt** → generates **one thumbnail** via **KIE.ai – Nano Banana (Gemini 2.5 Flash Image)**.
   - **Video prompt** → starts a **Veo‑3** (KIE.ai) video job **using the thumbnail as init image**.
3) You receive the **thumbnail first**, then the **short video** back in Telegram once rendering completes.

**Typical output**: 1 PNG thumbnail + 1 short MP4 video (e.g., 8–12 s, 9:16).

---

## Why this is useful
- **Rapid ideation**: Turn a quick text/voice idea into a ready‑to‑post thumbnail + matching short video.
- **Consistent look**: The video uses the thumbnail as **init image**, keeping colors, objects and mood consistent.
- **One chat = full pipeline**: Everything happens directly inside Telegram—no context switches.
- **Agency‑ready**: Collect ideas from clients/team chats, and deliver outputs quickly.

---

## What you need before importing
1) **KIE.ai account & API key**
   - Sign up/in at KIE.ai, go to **Dashboard → API / Keys**.
   - Copy your **KIE_API_KEY** (keep it private).

2) **Telegram Bot (BotFather)**
   - In Telegram, open **@BotFather** → command **/newbot**.
   - Choose a **name** and a unique **username** (must end with `bot`).
   - Copy your **Bot Token** (keep it private).

3) **Your Telegram Chat ID (browser method)**
   - Send any message to your bot so you have a active chat
   - Open Telegram web and the chat with the bot
   - Find the chatid in the URL



---

## Import & minimal configuration (n8n)
1) **Import** the provided workflow JSON in n8n.
2) Create **Credentials**:
   - **Telegram API**: paste your **Bot Token**.
   - **HTTP (KIE.ai)**: usually you’ll pass `Authorization: Bearer {{ $env.KIE_API_KEY }}` directly in the HTTP Request node headers, or make a generic HTTP credential that injects the header.
3) **Replace hardcoded values** in the template:
   - **Chat ID**: use an **Expression** like `{{$json.message.chat.id}}` from the Telegram Trigger (prefer dynamic over hardcoded IDs).
   - **Authorization headers**: **never** in query params—always in **Headers**.
   - **Content‑Type** spelling: `Content-Type` (no typos).
 `


---

## How to run it (basic flow)
1) **Start** the workflow (activate trigger).
2) Send a message to your bot, e.g.  
   `glass hourglass on a black mirror floor, minimal, elegant`
3) The bot replies with the **thumbnail (PNG)**, then the **Veo‑3 video (MP4)**.

If you send a **voice message**, the flow will **download & transcribe** it first, then proceed as above.

---

## Pricing (rule of thumb)
- **Image (Nano Banana via KIE.ai):** ~ **$0.02–$0.04** per image (plan‑dependent).
- **Video (Veo‑3 via KIE.ai):**
  - **Fast**: ~ **$0.40** per 8 seconds (~$0.05/s)
  - **Quality**: ~ **$2.00** per 8 seconds (~$0.25/s)

**Typical run (1 image + 8 s Fast video)** ≈ **$0.42–$0.44**.

&gt; These are indicative values. Check your KIE.ai dashboard for the latest pricing/quotas.

---

## Why KIE.ai over the “classic” Google API?
- **Cheaper in practice** for short video clips and image gen in this pipeline.
- **One vendor** for both image & video (same auth, similar responses) = less integration hassle.
- **Quick start**: Playground/tasks/status endpoints are n8n‑friendly for polling workflows.

---

## Security & reliability tips
- **Never hardcode** API keys or Chat IDs into nodes—use **Credentials** or **Environment variables**.
- Add **IF + error paths** after each HTTP node:
  - If status != 200 → Send friendly Telegram message (“Please try again”) + log to admin.
- If you use **callback URLs** for video completion, ensure the URL is **publicly reachable** (n8n Webhook URL). Otherwise, stick to **polling**.
- For **rate limits**, add a **Wait** node and limit **concurrency** in workflow settings.
- Keep **aspect & duration** consistent across prompt + API calls to avoid unexpected crops.



---

## Advanced: voice input (optional)
- The template supports **voice** via a Switch → Download → Transcribe (Whisper/OpenAI).  
- Ensure your **OpenAI credential** is set and your n8n instance can fetch the audio file from Telegram.

---

## Example prompt patterns (keep it short & generic)
- **Thumbnail prompt**: “Minimal, elegant, surreal [OBJECT], clean composition, 9:16”
- **Video prompt**: “Cinematic [OBJECT]. slow camera move, elegant reflections, minimal & surreal mood, 9:16, 8–12s.”

You can later replace the simple prompt builder with a dedicated LLM step or a fixed style guide for your brand.

---

## Final notes
- This template focuses on a **solid, reliable pipeline** first. You can always refine prompts later.
- Start with **Veo‑3 Fast** to keep iteration costs low; switch to **Quality** for final renders.
- Consider saving outputs (S3/Drive) and logging prompts/URLs to a sheet for audit & analytics.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
