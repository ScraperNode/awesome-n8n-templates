# 🎬 Create multi-speaker podcasts with Google Sheets, ElevenLabs v3, and Drive

> ⚡ **1,136 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the creation of realistic **Multi-speaker podcasts** using **ElevenLabsv3 API** by reading a script from Google Sheets and saving the final MP3 file to Google Drive.

1. **Data Source** – Dialogue scripts are stored in a **Google Sheet**. Each row contains:

   * Speaker name (optional)
   * Voice ID (from ElevenLabs)
   * Text to be spoken

2. **Data Preparation** – The workflow transforms the spreadsheet content into the proper JSON format required by the ElevenLabs API.

3. **Podcast Generation** – ElevenLabs’ **Eleven v3 model** converts the prepared text into expressive, natural-sounding dialogue. It supports not only speech but also **non-verbal cues and audio effects** (e.g., *\[laughs], \[whispers], \[clapping]*).

4. **File Storage** – The generated audio file is automatically **uploaded to Google Drive**, organized by timestamped filenames.

---

### Key Advantages

* **Seamless Automation** – From dialogue writing to final audio upload, everything runs automatically in one workflow.
* **Multi-Speaker Support** – Easily assign different voices to multiple characters for dynamic conversations.
* **Expressive & Realistic Output** – Supports emotions, speech styles, and ambient effects, making podcasts more immersive.
* **Flexible Content Input** – Scripts can be collaboratively written and edited in Google Sheets, with no technical knowledge required.
* **Scalable & Reusable** – Can generate multiple podcast episodes in seconds, ideal for content creators, educators, or businesses.
* **Cloud Integration** – Final audio files are securely stored in Google Drive, ready to be shared or published.

---

### **How It Works**

The workflow processes a structured script from a spreadsheet and uses AI to generate a realistic conversation.

1.  **Manual Trigger:** The workflow is started manually by a user clicking "Execute workflow" in n8n.
2.  **Get Dialogue:** The "Get dialogue" node fetches the podcast script data from a specified Google Sheet. The sheet should contain columns for Speaker (optional), Voice ID, and the dialogue Input/Text.
3.  **Prepare Dialogue:** The "Code" node transforms the raw sheet data into the precise JSON format required by the ElevenLabs API. It creates an array of objects where each object contains the `text` and the corresponding `voice_id` for each line of dialogue.
4.  **Generate Podcast:** The "HTTP Request" node sends a `POST` request to the ElevenLabs Text-to-Dialogue API endpoint (`/v1/text-to-dialogue`). It sends the transformed dialogue array in the request body, instructing the API to generate a single audio file with a conversation between the specified voices.
5.  **Upload File:** The "Upload file" node takes the audio file response from ElevenLabs and saves it to a designated folder in Google Drive..

---

### **Set Up Steps**

To use this workflow, you must complete the following configuration steps:

1.  **Prepare the Google Sheet:**
    *   **Clone the Template:** Duplicate the [provided Google Sheet template](https://docs.goo# Header 1gle.com/spreadsheets/d/1eB8iUQmhj3xJMpGam_slCS0ivtgTUpbcWAqeutG_HM8/edit?usp=sharing) into your own Google Drive.
    *   **Fill the Script:**
        *   **Column A (Speaker):** Optional. Add speaker names for your reference (e.g., "Host", "Guest").
        *   **Column B (Voice ID):** **Mandatory.** Enter the unique Voice ID for each line from ElevenLabs.
        *   **Column C (Input):** **Mandatory.** Write the dialogue text for each speaker. You can use [non-speech audio events] like `[laughs]` or `[whispers]` to add expression.

2.  **Configure ElevenLabs API Credentials:**
    * Login or create FREE account on [Elevenlabs](https://try.elevenlabs.io/ahkbf00hocnu)
	*   Edit the "Generate podcast" node's credentials.
    *   Create an `HTTP Header Auth` credential named "ElevenLabs API".
    *   Set the **Name** to `xi-api-key` and the **Value** to your actual ElevenLabs API key.

3.  **Configure Google Services:**
    *   **Google Sheets:** Ensure the "Get dialogue" node has valid OAuth credentials and that the `documentId` points to **your copy** of the script sheet.
    *   **Google Drive:** Ensure the "Upload file" node has valid OAuth credentials and that the `folderId` points to the correct Google Drive folder where you want the audio files saved.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
