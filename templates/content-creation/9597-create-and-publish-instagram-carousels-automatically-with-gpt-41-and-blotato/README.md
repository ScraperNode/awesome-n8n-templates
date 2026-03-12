# 🎬 Create and publish Instagram carousels automatically with GPT-4.1 and Blotato

> ⚡ **336 views** · 🎬 [Content Creation & Video](../)

## Description

# Automated Instagram Carousel Post (Blotato + GPT-4.1)

This workflow is an **end-to-end solution for automating the creation and publishing of highly engaging Instagram Carousel content** on a recurring schedule. It leverages the intelligence of an **AI Agent (GPT-4.1)** for idea generation and sharp copywriting, combined with the visual rendering capabilities of **Blotato**, all orchestrated by the **n8n** automation platform. The core objective is to drastically cut content production time, enabling creators and marketing teams to consistently generate high-impact, *scroll-stopping* educational or inspirational content without manual intervention.

---

## How It Works

The workflow executes in five automated phases:

### 1. Trigger and Idea Generation
The workflow starts with the **Schedule Trigger** node, running at your specified time interval (e.g., daily). It takes the initial subject from the **Topic** node and feeds it to the **Topic1** AI Agent. This agent is specifically prompted to create a **short, viral hook/title** (max. 6 words) in the style of confident, tactical copywriters (like Alex Hormozi), maximizing the content's initial draw.

### 2. Content Creation and Output Structuring
The viral hook is then passed to the **AI Agent Carousel Maker**. This agent uses the **GPT-4.1** model, following strict system instructions, to generate all necessary content elements in a structured JSON format:
* Punchy, concise text for each Carousel slide.
* A long, detailed **Instagram Caption** with explanations and a CTA.
* A short final title for internal reference.

### 3. Visual Rendering (Blotato Tool)
The slide text output is sent to the **Simple tweet cards monocolor (Blotato Tool)** node. Blotato acts as a graphic generation API, rendering the text onto a chosen template to create a series of Carousel images (using the 4:5 aspect ratio). This replaces the need for manual design work in tools like Canva.

### 4. Status Check and Retry Mechanism
Visual rendering takes time, so the workflow pauses:
* The **Wait** node holds the execution for **3 minutes**.
* The **Get carousel** node retrieves the image generation status using the ID provided by the previous Blotato node.
* The **If carousel ready** node checks if the status is `done`. If not, the flow is routed back to the **Wait** node, implementing a built-in simple retry mechanism until the visuals are complete.

### 5. Final Posting
Once the status is confirmed as `done`, the workflow proceeds to the final step:
* The **Instagram [BLOTATO]** node uses the media URLs retrieved from Blotato and the long caption from the AI Agent to automatically publish the entire Carousel post (multiple images plus text) to your linked Instagram account.

---

## Set Up Steps

To successfully activate and personalize this n8n workflow, follow these steps:

### Step 1: Import and Connect Credentials

1.  **Import Workflow**: Import the provided JSON file (`Automated Instagram Carousel Post with Blotato + Gpt 4.1.json`) into your n8n instance.
2.  **OpenAI Credentials**: Ensure you have valid **OpenAI API** credentials connected to the **OpenAI Chat Model** node.
3.  **Blotato Credentials**: Ensure your valid **Blotato API** credentials are connected to all three Blotato-related nodes (`Simple tweet cards monocolor`, `Get carousel`, and `Instagram [BLOTATO]`).

### Step 2: Configure Workflow Inputs

1.  **Set Topic**: Open the **Topic** node. Change the default initial topic expression **`=Top ai tools for finance`** to any general subject matter you want your Carousels to cover.
2.  **Set Schedule**: Open the **Schedule Trigger** node and configure the **`Rule`** to define how often you want the content to be created and posted (e.g., set it to run `Every Day` at a specific time).

### Step 3: Personalize Content and Visuals

1.  **Customize AI Persona**: Open the **AI Agent Carousel Maker** node. Review and modify the long **`System Message`** to refine the AI's output:
    * Adjust the `# ROLE` and `# STYLE` sections to match your brand's voice (e.g., change the Alex Hormozi style to a more formal, academic tone if needed).
    * Do **not** change the structure defined in `# OUTPUT` as this JSON format is essential for downstream nodes.
2.  **Personalize Visuals**: Open the **Simple tweet cards monocolor (Blotato Tool)** node.
    * Under **`templateInputs`**, customize fields like **`authorName`**, **`handle`**, and **`profileImage`** URLs to ensure the generated visuals are consistent with your personal or brand identity.

### Step 4: Final Posting Setup

1.  **Select Instagram Account**: Open the **Instagram [BLOTATO]** node.
    * In the **`accountId`** parameter, use the dropdown list to select the specific Instagram account that is connected via your Blotato service.
2.  **Activate**: Once all steps are complete, save the workflow and toggle the main switch to **Active** to allow the Schedule Trigger to begin running the automation.

## 🔗 Nodes Used

Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
