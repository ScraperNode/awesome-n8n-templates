# 📊 Automatic weekly digital PR stories suggestions with Reddit and Anthropic

> ⚡ **3,529 views** · 📊 [Market Research & Insights](../)

## Description

## Introduction
The "Automatic Weekly Digital PR Stories Suggestions" workflow is a sophisticated automated system designed to identify trending news stories on Reddit, analyze public sentiment through comment analysis, extract key information from source articles, and generate strategic angles for potential digital PR campaigns. 

This workflow leverages the power of social media trends, natural language processing, and AI-driven analysis to deliver curated, sentiment-analyzed news opportunities for PR professionals.

Operating on a weekly schedule, the workflow searches Reddit for posts related to specified topics, filters them based on engagement metrics, and performs a deep analysis of both the content and public reaction. 

It then generates comprehensive reports that include story opportunities, audience insights, and strategic recommendations. These reports are automatically compiled, stored in Google Drive, and shared with team members via Mattermost for immediate collaboration.

This workflow solves the time-consuming process of manually monitoring social media for trending stories, analyzing public sentiment, and identifying PR opportunities. 

By automating these tasks, PR professionals can focus on strategy development and execution rather than spending hours on research and analysis.

## Who is this for?
This workflow is designed for digital PR professionals, content marketers, communications teams, and media relations specialists who need to stay on top of trending stories and public sentiment to develop timely and effective PR campaigns. It's particularly valuable for:

- PR agencies managing multiple clients across different industries
- In-house PR teams needing to identify media opportunities quickly
- Content marketers looking for trending topics to create timely content
- Communications professionals monitoring public perception of industry news

Users should have basic familiarity with n8n workflows and the PR strategy development process. While technical knowledge of the integrated APIs is not required to use the workflow, some understanding of Reddit, sentiment analysis, and PR campaign development would be beneficial for interpreting and acting on the generated reports.

## What problem is this workflow solving?
Digital PR professionals face several challenges that this workflow addresses:

1. **Information Overload**: Manually monitoring social media platforms for trending stories is time-consuming and often results in missed opportunities.

2. **Sentiment Analysis Complexity**: Understanding public perception of news stories requires reading through hundreds of comments and identifying patterns, which is labor-intensive and subjective.

3. **Content Extraction**: Visiting multiple news sources to read and analyze articles takes significant time.

4. **Strategic Angle Development**: Identifying unique PR angles that leverage trending stories and public sentiment requires synthesizing large amounts of information.

5. **Team Collaboration**: Sharing findings and insights with team members in a structured format can be cumbersome.

By automating these processes, the workflow enables PR professionals to quickly identify trending stories with PR potential, understand public sentiment, and develop strategic angles based on comprehensive analysis, all while maintaining a structured approach to team collaboration.

## What this workflow does
### Overview
The workflow automatically identifies trending posts on Reddit related to specified topics, analyzes both the content of linked articles and public sentiment from comments, and generates comprehensive PR strategy reports. These reports include story opportunities, audience insights, and strategic recommendations based on the analysis. The final reports are compiled, stored in Google Drive, and shared with team members via Mattermost.

### Process
1. **Topic Selection and Reddit Search**:
   - The workflow starts with a list of topics specified in the "Set Data" node
   - It searches Reddit for posts related to these topics
   - Posts are filtered based on upvotes and other criteria to focus on trending content

2. **Comment Analysis**:
   - For each post, the workflow retrieves comments
   - It extracts the top 30 comments based on score
   - Using Claude AI, it analyzes the comments to understand:
     - Overall sentiment
     - Dominant narratives
     - Audience insights
     - PR implications

3. **Content Analysis**:
   - The workflow extracts the content of the linked article using Jina AI
   - It analyzes the content to identify:
     - Core story elements
     - Technical aspects
     - Narrative opportunities
     - Viral elements

4. **PR Strategy Development**:
   - Based on the combined analysis of comments and content, the workflow generates:
     - First-mover story opportunities
     - Trend-amplifier story ideas
     - Priority rankings
     - Execution roadmap
     - Strategic recommendations

5. **Report Generation and Distribution**:
   - The workflow compiles comprehensive reports for each post
   - Reports are converted to text files
   - All files are compressed into a ZIP archive
   - The archive is uploaded to Google Drive
   - A link to the archive is shared with team members via Mattermost

## Setup
To set up this workflow, follow these steps:

1. **Import the Workflow**:
   - Download the workflow JSON file
   - Import it into your n8n instance

2. **Configure API Credentials**:
   - Reddit: Add a new credential "Reddit OAuth2 API" by following the guide at https://docs.n8n.io/integrations/builtin/credentials/reddit/
   - Anthropic: Add a new credential "Anthropic Account" by following the guide at https://docs.n8n.io/integrations/builtin/credentials/anthropic/
   - Google Drive: Add a new credential "Google Drive OAuth2 API" by following the guide at https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/

3. **Configure the "Set Data" Node**:
   - Set your interested topics (one per line)
   - Add your Jina API key (obtain from https://jina.ai/api-dashboard/key-manager)

4. **Configure the Mattermost Node**:
   - Update your Mattermost instance URL
   - Set your Webhook ID and Channel
   - Follow the guide at https://developers.mattermost.com/integrate/webhooks/incoming/ for webhook setup

5. **Adjust the Schedule (Optional)**:
   - The workflow is set to run every Monday at 6am
   - Modify the "Schedule Trigger" node if you need a different schedule

6. **Test the Workflow**:
   - Run the workflow manually to ensure all connections are working properly
   - Check the output to verify the reports are being generated correctly

## How to customize this workflow to your needs
This workflow can be customized in several ways to better suit your specific requirements:

1. **Topic Selection**:
   - Modify the topics in the "Set Data" node to focus on industries or subjects relevant to your PR strategy
   - Add multiple topics to cover different client interests or market segments

2. **Filtering Criteria**:
   - Adjust the "Upvotes Requirement Filtering" node to change the minimum upvotes threshold
   - Modify the filtering conditions to include or exclude certain types of posts

3. **Analysis Parameters**:
   - Customize the prompts in the "Comments Analysis," "News Analysis," and "Stories Report" nodes to focus on specific aspects of the content or comments
   - Adjust the temperature settings in the Anthropic Chat Model nodes to control the creativity of the AI responses

4. **Report Format**:
   - Modify the "Set Final Report" node to change the structure or content of the final reports
   - Add or remove sections based on your specific reporting needs

5. **Distribution Method**:
   - Replace or supplement the Mattermost notification with email notifications, Slack messages, or other communication channels
   - Add additional storage options beyond Google Drive

6. **Schedule Frequency**:
   - Change the "Schedule Trigger" node to run the workflow more or less frequently
   - Set up multiple triggers for different topics or clients

7. **Integration with Other Systems**:
   - Add nodes to integrate with your CRM, content management system, or project management tools
   - Create connections to automatically populate content calendars or task management systems

## 🔗 Nodes Used

HTTP Request, Google Drive, Reddit, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
