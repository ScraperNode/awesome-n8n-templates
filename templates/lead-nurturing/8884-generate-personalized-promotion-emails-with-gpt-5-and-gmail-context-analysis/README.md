# 💬 Generate personalized promotion emails with GPT-5 and Gmail context analysis

> ⚡ **109 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description:

This sophisticated workflow automates personalized email campaigns for musicians and band managers. The system processes contact databases, analyzes previous Gmail conversation history, and uses AI to generate contextually appropriate emails tailored to different contact categories (venues, festivals, media, playlists).

**Key Features:**
- **Multi-category support**: Bookers, festivals, media, playlist curators
- **Conversation context analysis**: Maintains relationship history from Gmail
- **AI-powered personalization**: Custom prompts for each contact type
- **Multi-language support**: Localized content and prompts
- **Gmail integration**: Automatic draft creation with signatures
- **Bulk processing**: Handle hundreds of contacts efficiently

## Use Cases:
- Album/single promotion campaigns
- Tour booking automation
- Festival submission management
- Playlist pitching campaigns
- Media outreach automation
- Venue relationship management

## Perfect For:
- Independent musicians and bands
- Music managers and booking agents
- Record labels with multiple artists
- PR agencies in music industry
- Festival organizers (for artist outreach)

## Required Setup:

### 1. Credentials & APIs:
- **Gmail OAuth2** (read messages + create drafts permissions)
- **Google Sheets API** (for AutomatizationHelper configuration)
- **OpenAI API** or compatible LLM (for content generation)

### 2. Required Files:
- **Contact Database** (CSV): Your venue/media/festival contacts
- **AutomatizationHelper** (Google Sheets): Campaign configuration, prompts, links

### 3. Example Data:
📁 **[Download Example Files](https://drive.google.com/drive/folders/1U4BCBVJ_ODMwRbcCDMmBG6ebX89I0kpV?usp=drive_link)**

The folder contains:
- Sample contact database (CSV)
- AutomatizationHelper template (CSV + Google Sheets)
- Detailed setup instructions (README)

## Data Structure:

### Contact Database Fields:
- `venue_name` - Organization name
- `category` - booker/festival/media/playlisting  
- `email_1` - Primary email (required)
- `email_2` - Secondary email (optional, for CC)
- `active` - active/inactive (for filtering)
- `language` - EN/DE/etc. (for localization)

### AutomatizationHelper Fields:
- `LANGUAGE` - Language code
- `CATEGORY` - Contact type
- `LATEST_SINGLE` - Spotify/Apple Music link
- `LATEST_VIDEO` - YouTube/Vimeo link
- `EPK` - Electronic Press Kit URL
- `SIGNATURE` - HTML email signature
- `PROMPT` - AI prompt for this category
- `SUBJECT` - Email subject template

## Setup Instructions:

### Step 1: Prepare Your Data
1. Download example files from the Google Drive folder
2. Replace sample data with your real contacts and band information
3. Customize AI prompts for your communication style
4. Update signature with your contact details

### Step 2: Configure APIs
1. Set up Gmail OAuth2 credentials in n8n
2. Configure Google Sheets API access
3. Add OpenAI API key for content generation

### Step 3: Import & Configure Workflow
1. Import the workflow JSON
2. Connect your credentials to respective nodes
3. Update Google Sheets URL in AutomatizationHelper node
4. Test with a small contact sample first

### Step 4: Customize & Run
1. Adjust AI prompts in AutomatizationHelper for your style
2. Update contact categories as needed
3. Run workflow - drafts will be created in Gmail for review

## Tips:
- **Start small**: Test with 5-10 contacts first
- **Review drafts**: Always review AI-generated content before sending
- **Update regularly**: Keep your AutomatizationHelper current with latest releases
- **Monitor responses**: Track which prompts work best for different categories
- **Language mixing**: You can have contacts in multiple languages

## Important Notes:
- Emails are created as **Gmail drafts** - manual review recommended
- Respects Gmail API rate limits automatically
- Conversation history analysis works best with existing email threads
- HTML signatures are automatically added (Gmail API limitation workaround)
- Handles multiple languages simultaneously
- Maintains conversation context across campaigns
- Generates unique content for each contact

---

## Template Author:

**Questions or need help with setup?**

 **Email:** [xciklv@gmail.com](mailto:xciklv@gmail.com)  
 **LinkedIn:** [https://www.linkedin.com/in/vaclavcikl/](https://www.linkedin.com/in/vaclavcikl/)

## 🔗 Nodes Used

Google Sheets, Gmail, Filter, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
