# 🔬 Transform voice notes into business reviews with Groq Whisper & GPT-5 to Google Slides

> ⚡ **98 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 🎙️ Voice-to-Slides: Business Review Kickstarter for Customer Success

This workflow helps Customer Success Managers brain dump their client knowledge via voice notes and kickstart business review preparation by auto-generating a structured Google Slides draft in their official slide deck template.

## Who's it for

CSMs and Account Managers who want to capture meeting insights quickly via voice and get a **head start** on business review prep, not a finished presentation, but a solid first draft to build from.

## What it does (and doesn't do)

✅ **It DOES**:
- Transcribe your (potentially unstructured) voice notes accurately
- Organize your thoughts into Value Realized / Recommendations / Next Steps
- Create a Google Slides file in your official template
- Pre-populate placeholders with structured content

❌ **It DOESN'T**:
- Generate a client-ready presentation
- Add charts, metrics, or data visualizations
- Write polished, final copy
- Replace the actual work of crafting your business review

**Think of it as**: A smart assistant that turns your brain dump into a structured starting point, not a finished product.

## How it works

1. **Brain dump via voice** - Speak freely to your Telegram bot about your client: wins, challenges, recommendations, next steps (no need to be perfectly organized)
2. **AI transcription** - Groq Whisper converts audio to text
3. **Security check** - Scans for sensitive data (PII, confidential info) and alerts if found
4. **Content structuring** - AI categorizes your rambling into three sections
5. **Review & approve** - You receive an email with extracted content to validate and add client details
6. **Template generation** - Creates a Google Slides from your template in the client's Drive folder
7. **First draft ready** - Slides are populated with placeholders filled: now you refine, add data, polish

## Set up steps

**Setup time: ~20 minutes**

1. **Create Telegram bot** via [@BotFather](https://t.me/botfather)
2. **Prepare your own Google Slides template** with placeholders:
   - `value_realized_placeholder`
   - `recommendations_placeholder`  
   - `next_steps_placeholder`
3. **Connect credentials**: Telegram, Groq, OpenAI, Gmail, Google Drive, Google Slides
4. **Update template ID** in "Copy template to customer Folder" node
5. **Set your company name** in "Set CSM's company name" node
6. Add **your email** in all "human in the loop" nodes

## Requirements

* Telegram account
* Groq API key (Whisper transcription)
* OpenAI API key
* Google Workspace (Gmail, Drive, Slides)
* Google Slides template with required placeholders
* Client Google Drive folders (shared access)

## Cost breakdown

For a typical 3-5 minute voice note:

- **Transcription (Groq Whisper)**: Free
- **AI Processing (GPT-5-nano + GPT-5-mini)**: ~$0.005

💰 **Bottom line**: Half a cent per business review. You could run 200+ business reviews for $1.

*The workflow uses cost-effective models (GPT-5-nano for security checks, GPT-5-mini for content extraction) to keep costs negligible while maintaining quality.*

*Note: Costs may vary based on voice note length and verbosity. Prices based on GPT-5-Nano and GPT-5-Mini pricing as of Nov 2025.*

## 💡 Pro tips

* **Be mindful of the guardrail**: It's designed to catch sensitive info (full names + company + financials), but it can sometimes be overzealous. If you find it blocking legitimate content, consider:
  - Adjusting the confidence threshold (currently 0.7) to be less strict
  - Removing the guardrail entirely if you're experienced and know what to avoid
  - Reviewing the "Sensitive information" custom prompt to fine-tune detection rules

* **Structure your thoughts loosely**: While speaking, try to mentally organize around Value Realization → Recommendations → Next Steps. It's totally fine if things mix or overlap, the AI will reorganize, but having this structure in mind helps you cover everything.

* **Record with your tools open**: This is key! Have your previous BRs, CS platform, analytics dashboards, or CRM open while recording. Reference specific metrics, feature adoption rates, and data points directly from your systems. The AI can't look up data for you, feed it the good stuff.

* **Don't overthink it**: Your first recording will probably feel awkward. That's normal. The AI is surprisingly good at cleaning up "umms," tangents, and unstructured rambling. Just brain dump.

* **Keep it under 5 minutes**: Better transcription accuracy, faster processing, and cheaper API costs. If you have more to say, split into multiple voice notes.

* **Review the email summary carefully**: The AI extracts content well but loses the nuance and context you have. Use the email review step to catch misinterpretations before they hit the slides.

## What to do after the workflow runs

1. Open the generated slides in the client's folder
2. Refine the AI-generated text (add nuance, fix tone)
3. Add charts, screenshots, data visualizations
4. Polish formatting and visual hierarchy

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Gmail, Google Slides

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
