# 🎬 Detect, Analyze and Humanize 🕵️‍♂️🔎 AI-generated text using Rephrasy

> ⚡ **549 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow is designed to **analyze and humanize AI-generated text automatically** using Rephrasy AI.

The workflow then sends this text to an AI detection service to evaluate how “AI-like” it is. The text is broken down into individual sentences, and each sentence is scored based on its likelihood of being AI-generated.

Using a conditional logic step, the workflow identifies sentences with a high AI probability (score &gt; 50). Only those sentences are sent to a humanization API, which rewrites them in a more natural, human-like style. Meanwhile, sentences that are already considered human are left unchanged.

Finally, all processed sentences are recombined into a single output text.

👉 In short, the workflow:

* Detects AI-generated content
* Filters only the parts that need improvement
* Rewrites them to sound more human
* Reassembles the final optimized text

---

### Key Benefits

#### 1. ✅ Selective Humanization

Instead of rewriting the entire text, the workflow only modifies sentences that are likely AI-generated.
This preserves natural content and reduces unnecessary changes.

#### 2. ✅ Cost Optimization

By processing only flagged sentences through the humanizer API, it minimizes API usage and costs.

#### 3. ✅ Improved Text Quality

The final output sounds more natural and less robotic, improving readability and engagement.

#### 4. ✅ Sentence-Level Precision

The workflow analyzes text at a granular level, allowing highly targeted improvements rather than bulk rewriting.

#### 5. ✅ Automation & Scalability

Once set up, the process is fully automated and can handle large volumes of text without manual intervention.

#### 6. ✅ Multi-language Support

The workflow supports multiple languages (even though the humanization step is set to English), making it adaptable to different use cases.

#### 7. ✅ Maintain Structure & Meaning

Since only specific sentences are modified, the original structure and intent of the text remain intact.

---

### How it works
This workflow is designed to process a block of text, detect which sentences are likely AI-generated, and rewrite only those sentences to sound more human-like.
1.  **Trigger and Input:** The workflow starts manually. A "Set text" node allows the user to define the text to be processed (stored in the `text` field).
2.  **AI Detection:** The text is sent to the **Rephrasy AI Detector** API. The API returns an overall AI score and a breakdown (`sentences`) with individual scores for each sentence.
3.  **Data Parsing:** A "Code" node transforms the API's sentence data into a structured array, tagging each sentence as "ai" (if the score &gt; 50) or "human".
4.  **Splitting and Looping:** The "Split Out" node separates the sentences into individual items. The "Loop Over Items" node then iterates over each sentence to decide if it needs processing.
5.  **Conditional Humanization:** For each sentence, the "&gt; 50?" node (IF condition) checks the AI score. If the score is greater than 50 (indicating AI), the workflow routes the sentence to the **AI Humanizer** node to be rewritten. If the score is 50 or less (human), the sentence is passed through unchanged.
6.  **Reassembly:** Once the loop finishes, the "Aggregate Text" node collects all the sentences (both the rewritten AI sentences and the original human sentences) and reassembles them into a single, final text output.

---

### Set up steps
To get this workflow running, you need to configure the connections to the Rephrasy API and define the input text.

1.  **Configure Credentials:**
    *   The workflow uses two nodes: **AI Detector** and **AI Humanizer**.
    *   Both require an **HTTP Bearer Auth** credential. You must create a credential in n8n named "Rephrasy" (or update the node settings to match your credential's name) and populate it with your valid Rephrasy API key.

2.  **Set Input Text:**
    *   Locate the **Set text** node.
    *   Modify the `text` assignment value. Currently, it contains a placeholder (`XXX`). Replace this with the text you wish to humanize, or configure it to reference data from a previous trigger (e.g., from a webhook or form).

3.  **Review Language Settings:**
    *   In the **AI Humanizer** node, check the `language` parameter inside the JSON body. It is currently set to `"English"`. Ensure this matches the language of the text you are processing.

4.  **Activate Workflow:**
    *   Once the credentials are set and the input text is defined, toggle the workflow from **Inactive** to **Active** (or simply execute it manually using the "Execute Workflow" button if no trigger is needed).

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
