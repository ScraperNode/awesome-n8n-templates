# 🎬 Generate videos with AI, ElevenLabs,PIAPI Shotstack/Creatomate & post to Youtube

> ⚡ **4,714 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Auto-Generate Long Videos with AI, ElevenLabs,PIAPI,Shotstack/Creatomate & Post to Youtube
![Youtube.png](fileId:1443)
## Overview
This n8n automation workflow automates the creation, scripting, production, and posting of YouTube videos. It leverages AI (OpenAI), image generation (PIAPI), video rendering (Shotstack), and platform integrations (Airtable, Google Sheets, YouTube) to streamline the process.  
## Target Audience
- **Content creators, video producers, and YouTubers** seeking to automate video content creation.
- **Digital marketing teams** managing video campaigns for travel or history niches.
- **Users familiar with n8n, Airtable, Google Sheets, YouTube, and API integrations**.

## Problem Solved
Manually managing YouTube video production, from ideation to posting, is time-consuming and prone to errors. This workflow addresses:
- **Content Sourcing**: Generates video ideas using AI based on "domain of choice".
- **Content Formatting**: Automatically creates detailed scripts and scene structures.
- **Visual Production**: Produces high-quality images and renders videos with minimal manual input.
- **Multi-Platform Integration**: Publishes to YouTube with status tracking in Airtable and Google Sheets.
- **Status Tracking**: Monitors progress (Generated, Scripted, Produced, Published) across platforms.
## Prerequisites
Before setting up, ensure you have:
1. An n8n instance (self-hosted or cloud)
2. API credentials for:
   - OpenAI (for idea generation)
   - PIAPI.ai (for image and video generation)
   - ElevenLabs (for audio generation)
   - Shotstack (for video rendering)
   - Creatomate (for video rendering)
   - Airtable & Google Sheets and Drive (for storage and tracking)
   - Gmail (for notifications)
   - YouTube API (for posting to YouTube)

## How the Automation Works (Step by Step)
1. **Trigger (Schedule Trigger)**  
   - Initiates the workflow daily 
   - Connects to "Generate Idea"

2. **Generate Idea**  
   - Uses OpenAI to create a unique 4-minute video idea with a title, description, keywords, scene structure, and intrigue note
   - Checks Airtable "Ideas" table via `searchAirtable` to avoid duplicates
   - Connects to "Parse Ideas"

3. **Parse Ideas**  
   - Extracts title, description, and notes from the OpenAI output using JavaScript
   - Connects to "Add Ideas"

4. **Add Ideas**  
   - Stores the initial idea in Google Sheets "Ideas" sheet with fields like "Idea", "Description", and "Progress" (set to "Generated")
   - Connects to "Store in Airtable"

5. **Store in Airtable**  
   - Saves the idea to Airtable "Ideas" table with mapped fields and `typecast` enabled
   - Connects to "Generate Script"

6. **Generate Script**  
   - Creates a 500-600 word script with 8-10 scenes using OpenAI, based on the latest "Generated" idea
   - Uses `Structured Output Parser` to format output
   - Connects to "Parse Script Output"

7. **Parse Script Output**  
   - Formats the script into readable text and JSON, extracting scenes and closing question
   - Connects to "Store Script"

8. **Store Script**  
   - Saves the script to Google Sheets "Production" sheet with "Script", "Scenes", and "Status" (set to "Scripted")
   - Connects to "Store Script in Airtable"

9. **Store Script in Airtable**  
   - Saves the script to Airtable "Production" table with mapped fields and `typecast` enabled
   - Connects to "Updated Idea to Scripted"

10. **Updated Idea to Scripted**  
    - Updates the idea status to "Scripted" in Google Sheets "Ideas" sheet
    - Connects to "Update Status Ideas Table"

11. **Update Status Ideas Table**  
    - Updates the idea status to "Scripted" in Airtable "Ideas" table, matching by "Idea ID"
    - Connects to "Extract Scenes"

12. **Extract Scenes**  
    - Parses scene data from Airtable "Production" table for image generation
    - Connects to "Text-to-Image"

13. **Text-to-Image**  
    - Generates images for each scene using PIAPI
    - Connects to "Wait for 4 Min"

14. **Wait for 4 Min**  
    - Waits 3 minutes to allow image generation to complete
    - Connects to  "Get Images" 

15. **Trigger (Schedule Trigger1)**  
    - Initiates the posting process daily 
    - Connects to "Search for Latest Ready Video"

16. **Search for Latest Ready Video**  
    - Searches Airtable "Production" table for the latest video with "Status" = "Ready"
    - Connects to "If Ready?"

17. **If Ready?**  
    - Checks if a video is ready (condition: `Status contains Ready`)
    - If true, connects to "Download Video" and "Update Production Table"

18. **Download Video**  
    - Downloads the video file using the `VideoURL` from Airtable
    - Connects to "Post YouTube"

19. **Post YouTube**  
    - Uploads the video to YouTube with title and description, using YouTube OAuth2
20. **Update Production Table**  
    - Updates the "Production" sheet in Google Sheets, setting "Status" to "Published" and matching by "Production ID"
## Additional Nodes and Processes
- **OpenAI Chat Model**: Powers "Generate Idea" and "Generate Script" with `GPT`
- **Structured Output Parser**: Ensures proper JSON output for scripts
- **Get Images**: Retrieves generated images 
- **Extract Narration**: Prepares narration for voice generation
- **Voice Generation**: Generates voiceovers 
- **Generate Music Prompt**: Creates music prompts using OpenAI
- **Text-to-Music**: Generates music 
- **Build Shotstack Timeline**: Constructs video timeline 
- **ShotStack Render Video**: Renders the final video 
- **Poll Rendered Videos**: Checks video rendering status 
- **Final Video**: Updates Airtable "Production" with final video details
- **Final Video Update**: Updates Google Sheets "Production" with video URL
- **Music Urls**: Adds music URLs to the process 

## Setup Requirements
Before starting, ensure you have the following

1  **n8n Instance**
   - A self-hosted or cloud-based n8n instance to run the workflow
   
2  **API Credentials**
   - **OpenAI**: API key 
   - **Airtable**: Personal Access Token (e.g, "Airtable Personal Access Token 
   - **Google Sheets**: OAuth2 credentials 
   - **PIAPI**: HTTP Header Auth key 
   - **YouTube**: OAuth2 credentials
3  **Airtable Configuration**
   - Base: "Youtube Videos" 
   - Tables:
     - "Ideas"  
     - "Production" 
   - Share with the Airtable token

4  **Google Sheets Configuration**
   - Document: "Youtube Videos" 
   - Sheets:
     - "Ideas" 
     - "Production" 
   - Share with the Google Sheets credential email

5.  **Shotstack Configuration** (Assumed)
   - API key and endpoint for video rendering (not specified in JSON)

## Setup Instructions
1.  **Import the Workflow**
   - Import the provided JSON file into your n8n instance

2.  **Configure Credentials**
   - Add OpenAI, Airtable, Google Sheets, PIAPI, and YouTube credentials in n8n’s credential manager

3.  **Set Up Airtable**
   - Create or update the "Ideas" and "Production" tables with the specified fields
   - Ensure proper permissions with the Airtable token

4.  **Configure Google Sheets**
   - Create or update the "Ideas" and "Production" sheets with the specified columns
   - Share the document with the Google Sheets credential email

5.  **Schedule Triggers**
   - Set "Schedule Trigger" to trigger

6.  **Test the Workflow**
   - Run manually to verify each node’s functionality
   - Check Airtable, Google Sheets, and YouTube for updates
   - Ensure PIAPI image generation completes (wait 4 minutes)

7.  **Monitor and Adjust**
   - Monitor API rate limits (e.g, PIAPI, YouTube)
   - Adjust wait times if image or video generation delays occur
   - Verify connections for unlinked nodes 

## Benefits
- **Efficiency**: Automates the entire process from idea to posting
- **Scalability**: Handles daily video production
- **Quality**: Ensures cinematic scripts and visuals
- **Tracking**: Provides detailed progress monitoring

## Notes
- **Rate Limits**: Be aware of PIAPI (150,000 units per task) and YouTube API limits
- **Timing**: Adjust wait nodes (e.g, "Wait for 4 Min") based on API response times

## Conclusion and Suggestions to Improve the Automation

### Conclusion
This workflow streamlines YouTube video production, making it ideal for busy content creators, video producers, and marketing teams. Customize it by adding more platforms, adjusting wait delays for image/video generation, or enhancing notifications for status updates. Share your feedback in the n8n community to help others benefit from this automation.

### Suggestions to Improve

- **Customization**: Adjust prompts, timings, and API parameters based on your needs
- **Expand "Text-to-Music**" with multiple music styles or integrate a royalty-free music API for variety.
- **Improve Video Rendering**: Optimize "Build Shotstack Timeline" and "ShotStack Render Video" with predefined templates to reduce rendering time.
- **Add Analytics Tracking**: Include a node to fetch YouTube Analytics post-upload for performance monitoring.
- **Error Handling**: Add error-catching nodes (e.g., "If" nodes) to retry failed image or video generations.
- **Notification System**: Incorporate email or Slack notifications for key milestones (e.g., script completion, video upload).

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Google Drive, Gmail, YouTube

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
