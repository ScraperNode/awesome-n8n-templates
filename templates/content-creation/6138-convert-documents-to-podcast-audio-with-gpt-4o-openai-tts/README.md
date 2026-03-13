# 🎬 Convert documents to podcast audio with GPT-4o & OpenAI TTS

> ⚡ **117 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## What it does
This n8n workflow delivers a comprehensive, automated solution for transforming written content into dynamic, multi-speaker podcast audio. It automatically detects new documents in Google Drive, leverages advanced AI to craft a detailed podcast script, generates individual audio segments for each speaker, uploads these segments to a dedicated file storage, seamlessly concatenates them into a full episode, and finally, saves the completed audio back into Google Drive. This end-to-end pipeline significantly streamlines your content-to-audio production process.


## How it works
The workflow is a powerful orchestration of AI and automation, designed to take your raw document and deliver a polished audio product.

#### 1. Document Ingestion & Text Extraction 📄➡️💬
Your journey begins when you simply place a document in a designated Google Drive folder.

#### 2. AI-Powered Script Generation 🧠✍️
With the text extracted, the workflow hands it over to an AI scriptwriter.

#### 3. Dynamic Audio Generation & Storage 🗣️💾
Once the script is ready, each piece of dialogue is brought to life with distinct voices.

#### 4. Generate Podcast 🔗🎧📂
Finally, all the individual audio pieces are assembled into one complete podcast episode.


## How to set it up (~15 Minutes)

Getting this workflow running requires a few key configurations and external service dependencies.

#### Google Drive Account Setup:

1. Create Google Drive Folder: Designate a specific Google Drive folder (e.g., "AIAGENTDEMO") that will serve as both the input (where you drop source documents) and output (where the final podcast audio lands). Make note of its ID or name.

2. n8n Google Drive Credential: In your n8n instance, add a new Google Drive OAuth2 API credential. Give it a clear name (e.g., "My Google Drive Account") and authenticate it with your Google account, ensuring it has the necessary permissions for the designated folder.

#### OpenAI API Key Setup:

1. Obtain OpenAI API Key: Log in to your OpenAI account and generate a new API key.

2. n8n OpenAI Credential: Within n8n, create a new OpenAI API credential. Name it appropriately (e.g., "My OpenAI Key for TTS & LLM") and paste your API key. This single credential will be used by both the AI scriptwriter (OpenAI Chat Model) and the audio generation (Generate audio files) nodes.

#### External API Services (Self-Hosted/Provided):

1. MongoDB File Storage API: Ensure a file storage API is fully operational and accessible from your n8n instance. This API must accept POST requests with filename and Base64 file_data in the body, returning a file_id upon successful upload.

2. Audio Concatenation API: Verify that your audio concatenation service is live and reachable. This API should expect a POST request with an audio_urls array in the request body and provide the concatenated audio file in return.

## How you could enhance it ✨

This workflow offers numerous avenues for advanced customization and expansion:

1. Flexible Document Ingestion: Expand the Google Drive Trigger to monitor multiple folders or integrate with other cloud storage services (like Dropbox, OneDrive) or even local file systems. Broaden the Extract from File node's capabilities (or add pre-processing) to handle a wider range of document types beyond just PDFs, such as Word documents, markdown files, or even raw text.

2. Expanded Speaker & Voice Control: Move beyond simple "host" and "guest" roles. Define an arbitrary number of speakers (e.g., "Narrator," "Expert A," "Interviewer B") and assign unique, distinct voices to each. This could involve a lookup table within n8n to map speaker roles to specific voice IDs from your TTS provider, allowing for granular control over more speakers and diverse voices.

3. Multilingual Podcast Production: Implement language detection services (e.g., Google Cloud Language API) to automatically identify the language of your input document. This detected language can then be passed to the OpenAI TTS node (if supported) to enable the generation of podcast audio in multiple languages, broadening your audience reach.

4. Dynamic LLM Prompting: Add parameters to the initial trigger or an earlier node to allow users to configure aspects of the podcast, such as desired length, specific tone, or a list of key discussion points, all of which can dynamically adjust the LLM's prompt.

5. Alternative Text-to-Speech Engines: Easily swap out OpenAI's TTS with other leading providers like Google Cloud Text-to-Speech, AWS Polly, or ElevenLabs by simply changing the Generate audio files node and its associated credentials.

6. Versatile File Storage: Replace the current MongoDB file storage with your preferred cloud storage solution, such as AWS S3 or Google Cloud Storage, by utilizing dedicated n8n nodes for those services.

7. Advanced Audio Post-Processing: Introduce more sophisticated audio post-production steps directly within the workflow. This could include adding intros/outros, integrating background music, applying sound effects, or performing volume normalization before the final concatenation.

8. Notification and Reporting: Implement robust error handling (e.g., retries for failed API calls) and add notification systems (e.g., email, Slack, Discord messages) to alert you to workflow completions, successes, or failures, including links to the generated podcast file.

9. Direct Playback Integration: After the final audio is concatenated and uploaded, consider integrating with a media player or a sharing platform to immediately provide a public link for easy listening and distribution.

10. Direct Publishing to Podcast Sites: Integrate with podcast hosting platforms that offer API access (e.g., Podbean, Libsyn, Captivate, Transistor). This would involve adding an HTTP Request node after the Upload file step to publish the newly generated podcast episode directly to your chosen podcast host via their API, including episode metadata (title, description, artwork). This bypasses manual uploads and pushes your content to all major podcast directories (Apple Podcasts, Spotify, Google Podcasts, etc.) that your hosting platform distributes to.#

## Getting Assistance & More Resources
Need assistance setting this up, adapting it to a unique use case, or exploring more advanced customizations? Don't hesitate to reach out! You can contact me directly at **nanabrownsnr@gmail.com**. Also, feel free to check out my **[YouTube Channel](https://www.youtube.com/@InnovationAndAutomation)** where I discuss other n8n templates, as well as Innovation and automation solutions.

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Drive Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
