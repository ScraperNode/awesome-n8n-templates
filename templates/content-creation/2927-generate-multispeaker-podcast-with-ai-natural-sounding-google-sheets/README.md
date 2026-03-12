# 🎬 Generate multispeaker podcast 🎙️ with AI natural-sounding 🤖🧠 & Google Sheets

> ⚡ **2,066 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the generation of multi-speaker podcasts using AI-powered text-to-speech technology. It starts by retrieving a podcast script from a Google Sheets document, where each speaker’s lines are clearly defined. The workflow then processes the script, generates a natural-sounding audio file with different voices for each speaker, and stores the final audio file in Google Drive.

The workflow is designed to save time and resources by automating the podcast production process, making it ideal for content creators, marketers, and businesses that need to produce high-quality audio content regularly.


### **How It Works**
1. **Triggering the Workflow**:
   - The workflow starts with the **When clicking ‘Test workflow’** node, which can be triggered manually to begin the process.

2. **Data Retrieval**:
   - The **Get Podcast text** node retrieves data from a Google Sheets document containing the podcast script. The document includes columns for the speaker's name and the corresponding text.

3. **Data Aggregation**:
   - The **Get all rows** node aggregates the data from the Google Sheets document, combining the speaker names and their respective text into a single dataset.

4. **Text Formatting**:
   - The **Full Podcast Text** node processes the aggregated data, formatting it into a single string where each speaker's text is prefixed with their name.

5. **Audio Generation**:
   - The **Create Audio** node sends a request to the API to generate a multi-speaker podcast audio file. The request includes the formatted text and specifies the voices for each speaker.
When you register for the API service you will get 1$ for free. For continuous work add API credits to your account.

6. **Status Check**:
   - The **Get status** node checks the status of the audio generation request. If the status is "COMPLETED", the workflow proceeds; otherwise, it waits again.

7. **Audio Retrieval**:
   - The **Get Url Audio** node retrieves the URL of the generated audio file.
   - The **Get File Audio** node downloads the audio file from the provided URL.

8. **Audio Storage**:
   - The **Upload Audio** node uploads the generated audio file to a specified Google Drive folder for storage.

---

### **Key Features**
- **Multi-Speaker Support**: Generates podcasts with different voices for each speaker, creating a more dynamic and engaging listening experience.
- **Google Sheets Integration**: Retrieves podcast scripts from a Google Sheets document, making it easy to manage and update content.
- **AI-Powered Text-to-Speech**: Uses advanced AI models to generate natural-sounding audio from text.
- **Automated Audio Generation**: Streamlines the process of creating podcast audio files, reducing the need for manual recording and editing.
- **Google Drive Storage**: Automatically uploads the generated audio files to Google Drive for easy access and sharing.

This workflow is ideal for businesses and content creators looking to automate the production of multi-speaker podcasts. It leverages AI to handle the complex task of generating natural-sounding audio, allowing users to focus on creating compelling content.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
