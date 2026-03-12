# 🎬 Turn BBC News articles into podcasts using Hugging Face and Google Gemini

> ⚡ **5,365 views** · 🎬 [Content Creation & Video](../)

## Description

# Turn BBC News Articles into Podcasts using Hugging Face and Google Gemini

Effortlessly transform BBC news articles into engaging podcasts with this automated n8n workflow.

## Who is this for?

This template is perfect for:

* **Content creators** who want to quickly produce podcasts from current events.
* **Students** looking for an efficient way to create audio content for projects or assignments.
* **Individuals** interested in generating their own podcasts without technical expertise.

## Setup Information

1. **Install n8n:** If you haven't already, download and install n8n from [n8n.io](https://n8n.io/).
2. **Import the Workflow:** Copy the JSON code for this workflow and import it into your n8n instance.
3. **Configure Credentials:**
    * **Gemini API:** Set up your Gemini API credentials in the workflow's LLM nodes.
    * **Hugging Face Token:** Obtain an access token from Hugging Face and add it to the HTTP Request node for the text-to-speech model.
4. **Customize (Optional):**
    * **Filtering Criteria:** Adjust the News Classifier node to fine-tune the selection of news articles based on your preferences.
    * **Output Options:** Modify the workflow to save the generated audio file to a cloud storage service or publish it to a podcast hosting platform.

## Prerequisites

* An active n8n instance.
* Basic understanding of n8n workflows (no coding required).
* API credentials for Gemini and a Hugging Face account with an access token.

## What problem does it solve?

This workflow eliminates the manual effort involved in creating podcasts from news articles. It automates the entire process, from fetching and filtering news to generating the final audio file.

## What are the benefits?

* **Time-saving:** Create podcasts in minutes, not hours.
* **Easy to use:** No coding or technical skills required.
* **Customizable:** Adapt the workflow to your specific needs and preferences.
* **Cost-effective:** Leverage free or low-cost services like Gemini and Hugging Face.

## How does it work?

1. The workflow fetches news articles from the BBC website.
2. It filters articles based on their suitability for a podcast.
3. It extracts the full content of the selected articles.
4. It uses Gemini LLM to create a podcast script.
5. It converts the script to speech using Hugging Face's text-to-speech model.
6. The final podcast audio is ready for use.

## Nodes in the Workflow

1. **Fetch BBC News Page:** Retrieves the main BBC News page.
2. **News Classifier:** Categorizes news articles using Gemini LLM.
3. **Fetch BBC News Detail:** Extracts detailed content from suitable articles.
4. **Basic Podcast LLM Chain:** Generates a podcast script using Gemini LLM.
5. **HTTP Request:** Converts the script to speech using Hugging Face.

## Add Story

I'm excited to share this workflow with the n8n community and help content creators and students easily produce engaging podcasts!

## Additional Tips

* Explore the n8n documentation and community resources for more advanced customization options.
* Experiment with different filtering criteria and LLM prompts to achieve your desired podcast style.

## 🔗 Nodes Used

HTTP Request, Filter, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
