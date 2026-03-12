# 🎬 AI content creation and auto WordPress publishing with Pexels API image workflow

> ⚡ **19,231 views** · 🎬 [Content Creation & Video](../)

## Description

### AI powered content creation and WordPress publishing workflow

**Summary**

This workflow automates the entire process of blog content creation, from idea generation and article writing using Google Gemini, to sourcing images from Pexels and publishing directly to your WordPress site. It uses Google Sheets as a central hub for managing content ideas and tracking their status, all orchestrated through interactive n8n forms.

**Key features**

*   **AI driven content:** Leverages Google Gemini for generating:
    *   Full blog articles based on prompts.
    *   Relevant keywords for image searching.
    *   New blog topic ideas.
*   **Automated image sourcing:** Searches Pexels for suitable images based on AI generated keywords and downloads them.
*   **WordPress integration:**
    *   Creates new posts with AI generated title and content.
    *   Uploads sourced images to the WordPress media library.
    *   Sets the uploaded image as the featured image for the post.
*   **Google Sheets management:**
    *   Fetches content ideas (prompts) marked as "not generated".
    *   Updates the sheet after a post is generated with the post ID, title, and generation date.
    *   Adds newly AI generated blog topic ideas to the sheet.
*   **Interactive forms:**
    *   Main trigger form to choose between generating content or adding new ideas.
    *   Forms to input topics for idea generation.
    *   Confirmation forms at the end of processes.
*   **Structured output parsing:** Ensures AI responses for topic generation are correctly formatted as JSON.

**How it works**

The workflow is initiated via an n8n `Form Trigger: Select Action`, allowing the user to choose one of two main paths:

**1. Generate content path:**
    *   **Fetch idea:** The `Fetch unprocessed ideas` (Google Sheets) node retrieves a row from your sheet where the "Generated" column is "no".
    *   **Set prompt:** The `Set prompt` node prepares the topic from the sheet for the AI.
    *   **Generate article:** The `Generate article AI` (Langchain Agent with Google Gemini) node takes the prompt and writes a full article.
    *   **Generate image keyword:** The `Generate image keyword AI` (Langchain Agent with Google Gemini) node creates a concise search term based on the article topic.
    *   **Search image:** The `Search Pexels image` (HTTP Request) node uses the generated keyword to find a relevant image via the Pexels API.
    *   **Create WordPress post:** The `Create WordPress post` node publishes the AI generated article and initial image metadata to your WordPress site.
    *   **Download and upload image:** The `Download Pexels image` (HTTP Request) node fetches the actual image file, and the `Upload image` (HTTP Request) node uploads it to your WordPress media library.
    *   **Set featured image:** The `Set featured image` (HTTP Request) node links the uploaded image as the featured image for the newly created post.
    *   **Update sheet:** The `Update Google Sheet` node marks the idea as "yes" in your Google Sheet and adds the WordPress post ID and title.
    *   **Confirmation:** A `Form: End post generation` node displays a completion message.

**2. Add ideas path:**
    *   **Input topic:** The `Form: Enter topic for ideas` node prompts the user to enter a general subject.
    *   **Generate topics:** The `Generate blog topics AI` (Langchain Agent with Google Gemini and Structured Output Parser) node generates five SEO friendly blog topic ideas based on the user's input, formatted as JSON.
    *   **Process topics:** The `Split topics` node separates the generated list of topics into individual items.
    *   **Add to sheet:** For each topic, the `Add ideas to sheet` (Google Sheets) node appends it as a new row, marked with "Generated: no".
    *   **Loop or end:** The `Form: Add more topics?` node asks the user if they want to generate more ideas or end the process.
        *   If "NEXT", it loops back to the `Form: Enter topic for ideas`.
        *   If "END", a `Form: End idea generation` node displays a completion message with the list of added topics.

**Nodes used**

*   Form Trigger
*   If
*   Google Sheets
*   Set
*   Langchain Agent (with Google Gemini Chat Model)
*   Structured Output Parser (Langchain)
*   HTTP Request (for Pexels API and WordPress Media/Post updates)
*   WordPress
*   Split Out
*   Form (for user interaction and completion messages)
*   Sticky Note (for instructions within the workflow)

**Setup instructions**

1.  **Credentials:**
    *   **Google Sheets:** Configure your Google Sheets OAuth2 credentials in the `Fetch unprocessed ideas`, `Update Google Sheet`, and `Add ideas to sheet` nodes.
    *   **WordPress:** Configure your WordPress API credentials in the `Create WordPress post`, `Upload image`, and `Set featured image` nodes.
    *   **Google Gemini:** Configure your Google Gemini (PaLM) API key in the `Gemini model for article`, `Gemini model for image keyword`, and `Gemini model for topics` nodes.
2.  **API keys and URLs:**
    *   **Pexels:** In the `Search Pexels image` node, replace `&lt;YOUR_PEXELS_API_KEY&gt;` in the `Authorization` header with your actual Pexels API key.
    *   **WordPress URL:** In the `Upload image` and `Set featured image` nodes, replace `&lt;YOUR_WORDPRESS_URL&gt;` in the URL field with your WordPress site's domain (e.g., `yourblog.com`).
3.  **Google Sheet configuration:**
    *   Ensure your Google Sheet (specified by `Document ID` in Google Sheets nodes) has a sheet named `Sheet1` (or update the `Sheet Name` parameter).
    *   The sheet should have at least the following columns: `Prompt` (for the blog idea/topic), `Generated` (to track status, e.g., "no" or "yes"), `row_number` (automatically populated by n8n when reading), `Date`, `Title` (for the final WordPress post title), `Post ID`.
4.  **Activate the workflow.** The `Form Trigger: Select Action` will provide a webhook URL to initiate the process.

**Customization ideas**

*   Modify the AI prompts in the Langchain Agent nodes for different tones, styles, or content structures.
*   Change the Google Gemini models used for different cost/performance balances.
*   Integrate other image sources instead of or in addition to Pexels.
*   Add steps for social media sharing after a post is published.
*   Extend the Google Sheet to track more metrics like word count or target keywords.
*   Implement more sophisticated error handling.

**Use cases**

*   Automating blog content generation for personal or company blogs.
*   Streamlining content marketing efforts.
*   Quickly populating new websites with initial content.
*   Assisting SEO agencies in creating draft content for clients.
*   Helping solo bloggers maintain a consistent publishing schedule.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Wordpress, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
