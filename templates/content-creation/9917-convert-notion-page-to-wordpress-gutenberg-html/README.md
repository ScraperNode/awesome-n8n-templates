# 🎬 Convert Notion page to WordPress (Gutenberg) HTML

> ⚡ **235 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow fetches the complete content of a specific Notion page and converts all its blocks into a single HTML string compatible with the **WordPress Gutenberg block editor**.

It's designed to be used as a **sub-workflow**. You can call it from a parent workflow (e.g., "when a Notion page is updated") by passing it a `notion_url`. It returns a single item containing the complete, ready-to-use HTML for a WordPress post body.

-----

### Key Features

  * **Full Page Conversion:** Fetches all blocks from a page, including nested blocks (like content inside columns or toggles).
  * **Rich Text Support:** Correctly parses and converts rich text annotations, including **bold**, *italic*, \&lt;u\&gt;underline\&lt;/u\&gt;, \&lt;s\&gt;strikethrough\&lt;/s\&gt;, and [links](https://n8n.io).
  * **Gutenberg-Compatible:** Wraps content in the appropriate Gutenberg HTML comments (e.g., ` ,  `, \`\`) so WordPress recognizes them as blocks.
  * **Handles Complex Layouts:** Includes specific logic to correctly rebuild Notion's **column and column\_list** blocks into a responsive Gutenberg-friendly format.
  * **Supports Various Blocks:** Converts paragraphs, all heading types (H1, H2, H3), bulleted and numbered lists, images, videos (YouTube/Vimeo), embeds, code blocks, and dividers.

-----

### How It Works

1.  **Input:** The workflow is triggered by an **Execute Workflow** node, which expects a `notion_url` in the input data. (A manual trigger with a sample URL is included for testing).
2.  **Fetch Data:** It first gets the Notion page specified by the URL and then uses a second Notion node to fetch all child blocks recursively (`fetchNestedBlocks: true`).
3.  **Process Rich Text:** A **Code** node (`decode paragraphs`) iterates over text-based blocks (paragraphs, lists) and uses a helper function to convert the Notion `annotations` array into standard HTML tags (e.g., `<strong>`, `<em>`, `<a>`).
4.  **Convert Blocks:** A second **Code** node (`decode blocks`) uses a large `switch` statement to map each Notion block `type` to its corresponding Gutenberg HTML structure.
5.  **Rebuild Columns:** A crucial **Code** node (`column&column_list`) runs *once* on all blocks. It finds all `column` blocks, then finds their children, and finally wraps them inside their parent `column_list` block. This is essential for correctly handling nested layouts.
6.  **Filter & Aggregate:** The workflow filters out all nested blocks, keeping only the **top-level** ones (since the nested content is now *inside* its parent, like the column block). It then aggregates all the generated HTML snippets into a single array.
7.  **Final Output:** A final **Set** node joins the array of HTML blocks with newline characters, producing a single text string in a field named `wp`. This string can be directly used in the "Content" field of a **WordPress** node in your parent workflow.

-----

### Setup

1.  **Notion Credentials:** You must configure your Notion credentials in the two **Notion** nodes:
      * `Get a database page`
      * `Get many child blocks`
2.  **Trigger:** To use this, call it from another workflow using an **Execute Workflow** node. Pass the URL of the Notion page you want to convert in the `notion_url` field.

## 🔗 Nodes Used

Notion, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
