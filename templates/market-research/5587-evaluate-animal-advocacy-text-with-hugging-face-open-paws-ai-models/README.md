# 📊 Evaluate animal advocacy text with Hugging Face Open Paws AI models

> ⚡ **449 views** · 📊 [Market Research & Insights](../)

## Description

This sub-workflow uses two custom Hugging Face regression models from Open Paws to evaluate and predict the real-world performance and advocacy alignment of text content. It’s designed to support animal advocacy organizations in optimizing their messaging across platforms like social media, email campaigns, and more.

### 🛠️ What It Does

* Sends input text to two deployed Hugging Face endpoints:

  * **Predicted Performance Model** – Estimates real-world content success (e.g., engagement, shares, opens) based on patterns from real online data.
  * **Advocate Preference Model** – Predicts how well the content will resonate with animal advocates (emotional impact, relevance, rationality, etc.)
* Outputs structured scores for both models
* Can be integrated into larger workflows for automated content review, filtering, or revision

### 📊 About the Models

* **Text Performance Prediction Model**
  Trained on real-world data from **30+ animal advocacy organizations**, this model predicts actual online performance of content—including social media, email marketing, and other outreach channels.

* **Advocate Preference Prediction Model**
  Trained on ratings from animal advocates to evaluate how well a piece of text aligns with advocacy goals and values.

Model Repositories:

* [`open-paws/text_performance_prediction_longform`](https://huggingface.co/open-paws/text_performance_prediction_longform)
* [`open-paws/animal_advocate_preference_prediction_longform`](https://huggingface.co/open-paws/animal_advocate_preference_prediction_longform)

&gt; 📌 You must deploy each model as an **inference endpoint** on Hugging Face. Click **"Deploy"** on each model’s repo, then add the **endpoint URL** and your **Hugging Face access token** using n8n credentials.

---

### 📦 Use Cases

* Advocacy content review before publishing
* Automated scoring of outreach messages
* Filtering or flagging content with low predicted impact
* A/B testing support for message optimization

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
