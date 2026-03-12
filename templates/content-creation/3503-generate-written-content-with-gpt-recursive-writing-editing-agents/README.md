# 🎬 Generate written content with GPT Recursive Writing & Editing agents

> ⚡ **1,487 views** · 🎬 [Content Creation & Video](../)

## Description

# Who is this for?
Content creators, writers, and automation enthusiasts experimenting with recursive AI workflows for content generation and refinement. Ideal for those exploring AI agents that collaborate in cycles of writing and editing.

# What problem does this solve?
This template introduces a fully automated, recursive writing‑editing loop using multi‑agent collaboration. A “Writing Agent” generates content based on an input topic. An “Editing Agent” reviews it, suggests improvements, and determines whether the work is complete. The loop continues until the editor is satisfied—allowing for high‑quality, iterative AI‑assisted writing with minimal human input.

# How it works
This template is a foundational setup to help you build custom recursive writing workflows:

1. **Trigger**: Activated by an n8n chat message containing a topic. You can customize this to work with webhooks, forms, or other input sources.  
2. **Edit Handler**: A code node checks for previous edits and sets a default empty string if none are found.  
3. **Writing Agent**: Generates a blurb based on the topic and any edits. Customize the prompt in this node by editing the user/system instructions to fit your tone, domain, or style preferences.  
4. **Editing Agent**: Suggests specific edits and outputs a structured JSON object:

   ```json
   {
     "status": "incomplete",
     "edits": "Replace passive voice with active voice in the second sentence. Clarify the main idea in the opening line."
   }
   ```

   You can adjust the JSON format or editing criteria in the prompt field. Customize the prompt in this node by editing the user/system instructions to fit your tone, domain, or style preferences.   
5. **Recursive Loop**: If the status is “incomplete,” the edits are passed back to the Writing Agent, which revises the blurb.  
6. **Completion**: Once the Editing Agent outputs a status of “complete,” the workflow ends, and the final blurb is returned to the n8n chat.

# Setup Steps

1. **Import the Template** into your n8n workspace.  
2. **Configure API Credentials**: Link your OpenAI API key (or your preferred LLM like Claude or Gemini) in the credentials section.  
3. **Customize the Prompts** (Optional but recommended):  
   - In the **Writing Agent**, you can instruct it to mimic a specific tone, format, or genre.  
   - In the **Editing Agent**, specify your editing standards (e.g., concise, persuasive, technical).  
   - Modify the JSON output structure in the **Structured Output Parser** node if needed.  
4. **Test and Iterate**: Run a test by sending a topic via the chat trigger and observe the loop behavior.

# Example Output
**Input Topic**: “The future of remote work”  
**Final Blurb**: “Remote work is here to stay. As companies embrace flexible setups, productivity and employee satisfaction are reaching new highs. The challenge now is to build culture and collaboration tools that keep up.”

This template offers a powerful starting point for recursive AI writing. Expand it with additional agents, tone shifts, formatting layers, or sentiment analysis as needed.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
