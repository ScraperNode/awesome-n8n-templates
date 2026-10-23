# 🔬 Create onboarding video quizzes using WayinVideo, GPT-4o-mini and Google Sheets

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description

Paste any onboarding video URL into a simple form and the workflow handles everything automatically. It transcribes the video, sends the full transcript to an AI that writes the exact number of quiz questions you requested, and saves the complete quiz directly to your Google Sheet. Built for HR teams, L&D managers, and anyone who creates employee training content at scale.

---

## What This Workflow Does

- **Accepts video input via form** — Collects the video URL, department topic, and desired question count from a clean, shareable web form
- **Transcribes the video automatically** — Sends the video to WayinVideo and receives a clean, timestamped transcript with speaker labels
- **Polls until transcription is ready** — Waits 45 seconds then keeps checking until the transcript is fully complete before moving forward
- **Generates accurate MCQ questions** — An AI agent reads the full transcript and creates exactly the number of questions requested, each with four options and a correct answer
- **Anchors every question to the transcript** — Each question includes a speaker reference and timestamp so you can verify answers directly in the video
- **Saves the quiz to Google Sheets** — Appends all questions, metadata, and generation timestamp to your Quiz Bank tab automatically

---

## Setup Requirements

### Tools you'll need

- Active n8n instance (self-hosted or n8n Cloud)
- WayinVideo account + API key (for video transcription)
- OpenAI API key (GPT-4o-mini for quiz generation)
- Google Sheets with OAuth2 access (for saving the quiz)

**Estimated Setup Time: 10–15 minutes**

---

## Step-by-Step Setup

1. **Get your WayinVideo API key** — Log in to your WayinVideo account, go to API settings, and copy your API key.

2. **Add your WayinVideo key to Node 2** — Open the **2. WayinVideo — Submit Transcript** node. In the Authorization header, replace `YOUR_WAYINVIDEO_API_KEY` with your actual key.

3. **Add your WayinVideo key to Node 4** — Open the **4. WayinVideo — Get Transcript** node. Replace `YOUR_WAYINVIDEO_API_KEY` again in the Authorization header.

   &gt; ⚠️ Your WayinVideo API key appears in **two nodes** — replace it in both **2. WayinVideo — Submit Transcript** AND **4. WayinVideo — Get Transcript** or the workflow will fail.

4. **Add your OpenAI API key** — Open the **OpenAI — Chat Model** node and connect your OpenAI API credentials. If you haven't added them yet, go to n8n Settings → Credentials → New → OpenAI.

5. **Fix the IF node condition** — Open the **5. If — Transcript Status Check** node. Set the left value to `{{ $json.data.status }}` and the right value to `SUCCEEDED`. This tells the workflow to move forward only when transcription is complete.

   &gt; ⚠️ This step is critical. Without this condition, the workflow will loop forever and never generate your quiz.

6. **Create your Google Sheet** — Create a new Google Sheet with a tab named exactly **Quiz Bank**. Add these column headers in row 1: `Department`, `Video URL`, `Total Questions`, `Quiz Questions`, `Generated On`.

7. **Connect Google Sheets** — Open the **7. Google Sheets — Save Quiz Bank** node. Connect your Google Sheets OAuth2 credentials.

8. **Add your Sheet ID** — In the same node, replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID. Find it in your Google Sheet URL — it's the long string between `/d/` and `/edit`.

9. **Activate the workflow** — Toggle the workflow ON. Open the form URL and run a test with a short video to confirm everything works end to end.

---

## How It Works (Step by Step)

**Step 1 — Form Trigger: Collect Video Details**
The workflow starts when someone submits the web form. They enter the onboarding video URL, their department or topic name, and how many questions they want. This is the only manual step — everything after this is fully automatic.

**Step 2 — HTTP Request: Submit Video to WayinVideo**
The workflow sends the video URL to the WayinVideo API to start the transcription job. WayinVideo processes the video and returns a unique transcription ID that the workflow uses to track progress.

**Step 3 — Wait: Pause for 45 Seconds**
The workflow pauses for 45 seconds to give WayinVideo time to process the video before checking whether it's ready. For longer videos, you can increase this wait time.

**Step 4 — HTTP Request: Fetch the Transcript**
Using the transcription ID from Step 2, the workflow calls WayinVideo again to retrieve the results. The response includes the full transcript with speaker names, timestamps, and spoken text for each segment.

**Step 5 — IF Check: Is the Transcript Ready?**
The workflow checks whether the transcription status equals `SUCCEEDED`. If yes, it moves forward to quiz generation. If no, it loops back to the 45-second wait and tries again. This polling loop repeats automatically until the transcript is fully ready.

**Step 6 — AI Agent: Generate the Quiz**
The full transcript is passed to GPT-4o-mini with a detailed prompt. The AI reads only the transcript — no outside knowledge — and generates exactly the number of MCQ questions requested. Each question has four options, one correct answer, and a reference to the speaker and approximate timestamp in the video.

**Step 7 — Google Sheets: Save the Quiz**
The completed quiz, along with the department name, video URL, question count, and generation timestamp, is appended as a new row in your Quiz Bank tab. The quiz is ready to review, share, or export.

---

## Key Features

✅ **Exact question count** — The AI always generates exactly the number of questions you requested — no more, no less
✅ **Transcript-only questions** — Every question is based strictly on what was said in the video, with no general knowledge mixed in
✅ **Speaker + timestamp references** — Each answer includes a citation so trainers can verify answers directly in the video
✅ **Automatic polling loop** — The workflow retries until transcription is complete, so you never have to check manually
✅ **Simple form interface** — Anyone on your team can use it — no n8n knowledge required
✅ **Centralised quiz bank** — All quizzes are saved to one Google Sheet, organised by department and date
✅ **Swap the AI model** — Easily upgrade to a stronger model for more complex training content

---

## Customisation Options

**Increase the wait time for long videos** — Open the **3. Wait — 45 Seconds** node and increase the wait duration if your training videos are longer than 15–20 minutes.

**Upgrade to a stronger AI model** — In the **OpenAI — Chat Model** node, replace `gpt-4o-mini` with `gpt-4o` for higher-quality questions on dense or technical content.

**Change the quiz language** — Edit the system prompt in the **6. AI — Generate MCQ Quiz** node to request questions in any language. Also update the `target_lang` parameter in the **2. WayinVideo — Submit Transcript** node to match.

**Add a difficulty level to the form** — Add a new field to the **1. Form — Video URL + Topic** node (e.g. Easy / Medium / Hard) and reference it in the AI prompt to adjust question complexity.

**Send the quiz by email** — Add a Gmail or Outlook node after **7. Google Sheets — Save Quiz Bank** to automatically email the completed quiz to the requester or their manager.

**Add a Slack notification** — Insert a Slack node at the end to post a message to a team channel whenever a new quiz is saved, including the department name and question count.

---

## Troubleshooting

**Workflow loops forever and never generates questions:**
- Open **5. If — Transcript Status Check** and confirm the condition is set: left value `{{ $json.data.status }}` equals `SUCCEEDED`
- Without this condition, the workflow will always take the false path and loop indefinitely

**Transcription fails or returns an error:**
- Check that your WayinVideo API key is correct in **both** nodes 2 and 4
- Make sure the video URL is publicly accessible — private or region-restricted videos will fail
- Try increasing the wait time in **3. Wait — 45 Seconds** for longer videos

**Quiz not saving to Google Sheets:**
- Verify your Google Sheets OAuth2 credentials are connected in **7. Google Sheets — Save Quiz Bank**
- Confirm the Sheet ID is correct — use only the ID string, not the full URL
- Check that the tab is named exactly **Quiz Bank** (case-sensitive)

**AI generates the wrong number of questions:**
- The prompt already instructs the AI firmly on question count — if this happens, open **6. AI — Generate MCQ Quiz** and add an extra line to the prompt: `You must generate exactly [N] questions. Stop at exactly [N].`
- Consider upgrading to `gpt-4o` for stricter instruction-following

**Form not collecting responses:**
- Make sure the workflow is toggled ON (activated) before sharing the form URL
- Test mode and production mode use different URLs in n8n

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
