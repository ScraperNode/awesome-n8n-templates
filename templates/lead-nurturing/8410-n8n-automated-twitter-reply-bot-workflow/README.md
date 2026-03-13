# 💬 N8N automated Twitter reply bot workflow

> ⚡ **1,425 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

**N8N Automated Twitter Reply Bot Workflow**
============================================

**For latest version, check**: [dziura.online/automation](https://dziura.online/automation)

Latest [documentation can be find here](https://docs.google.com/document/d/13okk16lkUOgpbeahMcdmd7BuWkAp_Lx6kQ8BwScbqZk/edit?usp=sharing)

**You must have Apify community node installed before pasting the JSON to your workflow.** 

**Overview**
------------

This n8n workflow creates an intelligent Twitter/X reply bot that automatically scrapes tweets based on keywords or communities, analyzes them using AI, generates contextually appropriate replies, and posts them while avoiding duplicates. The bot operates on a schedule with intelligent timing and retry mechanisms.

**Key Features**
----------------

*   **Automated tweet scraping** from Twitter/X using Apify actors
    
*   **AI-powered reply generation** using LLM (Large Language Model)
    
*   **Duplicate prevention** via MongoDB storage
    
*   **Smart scheduling** with timezone awareness and natural posting patterns
    
*   **Retry mechanism** with failure tracking
    
*   **Telegram notifications** for status updates
    
*   **Manual trigger** option via Telegram command
    

**Required Credentials & Setup**
--------------------------------

### **1\. Telegram Bot**

*   Create a bot via [@BotFather](https://t.me/BotFather) on Telegram
    
*   Get your Telegram chat ID to receive status messages
    
*   **Credential needed**: Telegram account (Bot token)
    

### **2\. MongoDB Database**

*   Set up a MongoDB database to store replied tweets and prevent duplicates
    
*   Create a collection (default name: collection\_name)
    
*   **Credential needed**: MongoDB account (Connection string)
    
*   **Tutorial**: [MongoDB Connection Guide](https://youtu.be/gB76VdlpX7Y?si=bw_LHLTkXEk8LFO0)
    

### **3\. Apify Account**

*   Sign up at [Apify.com](https://apify.com/)
    
*   **Primary actors used**:
    
    *   **Search Actor**: [api-ninja/x-twitter-advanced-search](https://apify.com/api-ninja/x-twitter-advanced-search) - For keyword-based tweet scraping (ID: 0oVSlMlAX47R2EyoP)
        
    *   **Community Actor**: [api-ninja/x-twitter-community-search-post-scraper](https://apify.com/api-ninja/x-twitter-community-search-post-scraper) - For community-based tweet scraping (ID: upbwCMnBATzmzcaNu)
        
*   **Credential needed**: Apify account (API token)
    

### **4\. OpenRouter (LLM Provider)**

*   Sign up at [OpenRouter.ai](https://openrouter.ai/)
    
*   Used for AI-powered tweet analysis and reply generation
    
*   **Model used**: x-ai/grok-3 (configurable)
    
*   **Credential needed**: OpenRouter account (API key)
    

### **5\. Twitter/X API**

*   Set up developer account at [developer.x.com](https://developer.x.com/)
    
*   **Note**: Free tier limited to ~17 posts per day
    
*   **Credential needed**: X account (OAuth2 credentials)
    

**Workflow Components**
-----------------------

### **Trigger Nodes**

#### **1\. Schedule Trigger**

*   **Purpose**: Runs automatically every 20 minutes
    
*   **Smart timing**: Only active between 7 AM - 11:59 PM (configurable timezone)
    
*   **Randomization**: Built-in probability control (~28% execution chance) to mimic natural posting patterns
    

#### **2\. Manual Trigger**

*   **Purpose**: Manual execution for testing
    

#### **3\. Telegram Trigger**

*   **Purpose**: Manual execution via /reply command in Telegram
    
*   **Usage**: Send /reply to your bot to trigger the workflow manually
    

### **Data Processing Flow**

#### **1\. MongoDB Query (Find documents)**

*   **Purpose**: Retrieves previously replied tweet IDs to avoid duplicates
    
*   **Collection**: collection\_name (configure to match your setup)
    
*   **Projection**: Only fetches tweet\_id field for efficiency
    

#### **2\. Data Aggregation (Aggregate1)**

*   **Purpose**: Consolidates tweet IDs into a single array for filtering
    

#### **3\. Keyword/Community Selection (Keyword/Community List)**

*   **Purpose**: Defines search terms and communities
    
*   **Configuration**: Edit the JSON to include your keywords and Twitter community IDs
    

**Format**:{

  "keyword\_community\_list": \[

    "SaaS",

    "Entrepreneur", 

    "1488663855127535616"  // Community ID (19-digit number)

  \],

  "failure": 0

}

#### **4\. Random Selection (Randomized community, keyword)**

*   **Purpose**: Randomly selects one item from the list to ensure variety
    

#### **5\. Routing Logic (If4)**

*   **Purpose**: Determines whether to use Community search or Keyword search
    
*   **Logic**: Uses regex to detect 19-digit community IDs vs keywords
    

### **Tweet Scraping (Apify Actors)**

#### **Community Search Actor**

*   **Actor**: api-ninja/x-twitter-community-search-post-scraper
    
*   **Purpose**: Scrapes tweets from specific Twitter communities
    

**Configuration**:{

  "communityIds": \["COMMUNITY\_ID"\],

  "numberOfTweets": 40

}

#### **Search Actor**

*   **Actor**: api-ninja/x-twitter-advanced-search
    
*   **Purpose**: Scrapes tweets based on keywords
    

**Configuration**:{

  "contentLanguage": "en",

  "engagementMinLikes": 10,

  "engagementMinReplies": 5,

  "numberOfTweets": 20,

  "query": "KEYWORD",

  "timeWithinTime": "2d",

  "tweetTypes": \["original"\],

  "usersBlueVerifiedOnly": true

}

### **Filtering System (Community filter)**

The workflow applies multiple filters to ensure high-quality replies:

*   **Text length**: &gt;60 characters (substantial content)
    
*   **Follower count**: &gt;100 followers (audience reach)
    
*   **Engagement**: &gt;10 likes, &gt;3 replies (proven engagement)
    
*   **Language**: English only
    
*   **Views**: &gt;100 views (visibility)
    
*   **Duplicate check**: Not previously replied to
    
*   **Recency**: Within 2 days (configurable in actor settings)
    

### **AI-Powered Reply Generation**

#### **LLM Chain (Basic LLM Chain)**

*   **Purpose**: Analyzes filtered tweets and generates contextually appropriate replies
    
*   **Model**: Grok-3 via OpenRouter (configurable)
    
*   **Features**:
    
    *   Engagement potential scoring
        
    *   User authority analysis
        
    *   Timing optimization
        
    *   Multiple reply styles (witty, informative, supportive, etc.)
        
    *   &lt;100 character limit for optimal engagement
        

#### **Output Parser (Structured Output Parser)**

*   **Purpose**: Ensures consistent JSON output format
    

**Schema**:{

  "selected\_tweet\_id": "tweet\_id\_here",

  "screen\_name": "author\_screen\_name", 

  "reply": "generated\_reply\_here"

}

### **Posting & Notification System**

#### **Twitter Posting (Create Tweet)**

*   **Purpose**: Posts the generated reply as a Twitter response
    
*   **Error handling**: Catches API limitations and rate limits
    

#### **Status Notifications**

*   **Success**: Notifies via Telegram with tweet link and reply text
    
*   **Failure**: Notifies about API limitations or errors
    
*   **Format**: HTML-formatted messages with clickable links
    

#### **Database Storage (Insert documents)**

*   **Purpose**: Saves successful replies to prevent future duplicates
    
*   **Fields stored**: tweet\_id, screen\_name, reply, tweet\_url, timestamp
    

### **Retry Mechanism**

The workflow includes intelligent retry logic:

#### **Failure Counter (If5, Increment Failure Counter1)**

*   **Logic**: If no suitable tweets found, increment failure counter
    
*   **Retry limit**: Maximum 3 retries with different random keywords
    
*   **Wait time**: 3-second delay between retries
    

#### **Final Failure Notification**

*   **Trigger**: After 4 failed attempts
    
*   **Action**: Sends Telegram notification about unsuccessful search
    
*   **Recovery**: Manual retry available via /reply command
    

**Configuration Guide**
-----------------------

### **Essential Settings to Modify**

1.  **MongoDB Collection Name**: Update collection\_name in MongoDB nodes
    
2.  **Telegram Chat ID**: Replace 11111111111 with your actual chat ID
    
3.  **Keywords/Communities**: Edit the list in Keyword/Community List node
    
4.  **Timezone**: Update timezone in Code node (currently set to Europe/Kyiv)
    
5.  **Actor Selection**: Enable only one actor (Community OR Search) based on your needs
    

### **Filter Customization**

Adjust filters in Community filter node based on your requirements:

*   Minimum engagement thresholds
    
*   Text length requirements
    
*   Time windows
    
*   Language preferences
    

### **LLM Customization**

Modify the AI prompt in Basic LLM Chain to:

*   Change reply style and tone
    
*   Adjust engagement criteria
    
*   Modify scoring algorithms
    
*   Set different character limits
    

**Usage Tips**
--------------

1.  **Start small**: Begin with a few high-quality keywords/communities
    
2.  **Monitor performance**: Use Telegram notifications to track success rates
    
3.  **Adjust filters**: Fine-tune based on the quality of generated replies
    
4.  **Respect limits**: Twitter's free tier allows ~17 posts/day
    
5.  **Test manually**: Use /reply command for testing before scheduling
    

**Troubleshooting**
-------------------

### **Common Issues**

1.  **No tweets found**: Adjust filter criteria or check keywords
    
2.  **API rate limits**: Reduce posting frequency or upgrade Twitter API plan
    
3.  **MongoDB connection**: Verify connection string and collection name
    
4.  **Apify quota**: Monitor Apify usage limits
    
5.  **LLM failures**: Check OpenRouter credits and model availability
    

### **Best Practices**

*   Monitor your bot's replies for quality and appropriateness
    
*   Regularly update keywords to stay relevant
    
*   Keep an eye on engagement metrics
    
*   Adjust timing based on your audience's activity patterns
    
*   Maintain a balanced posting frequency to avoid appearing spammy
    

**Documentation Links**
-----------------------

*   **Full Documentation**: [Google Doc Guide](https://docs.google.com/document/d/13okk16lkUOgpbeahMcdmd7BuWkAp_Lx6kQ8BwScbqZk/edit?usp=sharing)
    
*   **Latest Version**: [dziura.online/automation](https://dziura.online/automation)
    
*   **MongoDB Setup Tutorial**: [YouTube Guide](https://youtu.be/gB76VdlpX7Y?si=bw_LHLTkXEk8LFO0)
    

This workflow provides a comprehensive solution for automated, intelligent Twitter engagement while maintaining quality and avoiding spam-like behavior.

## 🔗 Nodes Used

Telegram, Telegram Trigger, MongoDB, Execute Sub-workflow, X (Formerly Twitter), Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
