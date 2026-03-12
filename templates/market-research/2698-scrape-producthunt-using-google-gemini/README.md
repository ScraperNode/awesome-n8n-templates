# 📊 Scrape ProductHunt using Google Gemini

> ⚡ **1,382 views** · 📊 [Market Research & Insights](../)

## Description

**Workflow Description: Product Data Extractor**

This workflow automates the extraction of product data from Product Hunt by combining webhook interactions, HTML processing, AI-based data analysis, and structured output formatting. It is designed to handle incoming requests dynamically and return detailed JSON responses for further usage.

### **Overview**

The workflow processes a product name submitted through a webhook. It fetches the corresponding Product Hunt page, extracts and analyzes inline scripts, and structures the data into a well-defined JSON format using AI tools. The final JSON response is returned to the client through the webhook.

### **Workflow Steps**

#### 1. **Webhook Listener**

- **Node:** Receive Product Request
- **Function:** Captures incoming requests containing the product name to process.
- **Details:** Accepts HTTP requests and extracts the `product` parameter from the query string, such as `&lt;custom_webhook_url&gt;/?product=epigram`.

#### 2. **Fetch Product HTML**

- **Node:** Fetch Product HTML
- **Function:** Sends an HTTP request to retrieve the HTML content of the specified Product Hunt page.
- **Details:** Constructs a dynamic URL using the product name and fetches the page data.

#### 3. **Extract Inline Scripts**

- **Node:** Extract Inline Scripts
- **Function:** Parses the HTML content to extract inline scripts located within the `&lt;head&gt;` section.
- **Details:** Excludes scripts containing `src` attributes and validates the presence of inline scripts.

#### 4. **Process Data with LLM**

- **Node:** Process Script with LLM
- **Function:** Analyzes the extracted scripts using a language model to identify key product data.
- **Details:** Processes the script to derive structured and meaningful insights.

#### 5. **Refine Data with Google Gemini**

- **Node:** Analyze Script with Google Gemini
- **Function:** Leverages Google Gemini AI for enhanced analysis of script data.
- **Details:** Ensures the extracted data is precise and enriched.

#### 6. **Format Product Data to JSON**

- **Node:** Format Product Data to JSON
- **Function:** Structures the processed data into a clean JSON format.
- **Details:** Defines a schema to ensure all relevant fields are included in the output.

#### 7. **Send JSON Response to Client**

- **Node:** Send JSON Response to Client
- **Function:** Returns the final structured JSON response to the client.
- **Details:** Sends the response back via the same webhook that initiated the request. For example, `&lt;custom_webhook_url&gt;`.

### **Key Features**

- **Versatile Use Cases:** This workflow can be used to gather Product Hunt data for creating blog posts or as a tool for AI agents to research products efficiently.
- **Dynamic Processing:** Adapts to various product names through dynamic URL construction.
- **AI Integration:** Utilizes the Gemini 1.5 8B AI model, offering reduced latency and minimal or no cost depending on the use case.
- **Selector Independence:** Functions even if Product Hunt's DOM structure changes, as it does not rely on direct DOM selectors.
- **Reliable Data Output:** A low temperature setting (0) and a precisely defined JSON schema ensure accurate and real data extraction.
- **Dynamic Processing:** Adapts to various product names through dynamic URL construction.
- **AI Integration:** Utilizes advanced language models for data extraction and refinement.
- **Structured Output:** Ensures the output JSON adheres to a predefined schema for consistency.
- **Error Handling:** Includes validations to handle missing or malformed data gracefully.

### **Customization Options**

### **Limitations**
- **Dependency on Product Hunt:** Significant changes to the way Product Hunt loads data on its pages might require modifications to the workflow.
- **Adaptability:** Even if changes occur, the workflow can be updated to maintain functionality due to its reliance on AI and not direct DOM selectors.


- Modify the webhook path to suit your application.
- Adjust the prompt for the language model to include additional fields.
- Extend the JSON schema to capture more data fields as needed.

### **Expected Output**

**Performance Metrics**
- **Response Time:** Typically ~6 seconds per product.
- **Accuracy:** Data extracted with &gt;95% precision due to the pre-defined JSON schema.


A JSON object containing detailed information about the specified product. Below is an example of a complete response for the product `Epigram`:

```json
{
  "id": "861675",
  "slug": "epigram",
  "followersCount": 181,
  "name": "Epigram",
  "tagline": "Open-Source, Free, and AI-Powered News in Short",
  "reviewsRating": 0,
  "logoUuid": "735c2528-554c-467c-9dcf-745ee4b8bbdd.png",
  "postsCount": 1,
  "websiteUrl": "https://epigram.news",
  "websiteDomain": "epigram.news",
  "metaTitle": "Epigram - Open-source, free, and ai-powered news in short",
  "postName": "Epigram",
  "postTagline": "Open-source, free, and ai-powered news in short",
  "dailyRank": "3",
  "description": "An open-source, AI-powered news app for busy people. Stay updated with bite-sized news, real-time updates, and in-depth analysis. Experience balanced, trustworthy reporting tailored for fast-paced lifestyles in a sleek, user-friendly interface.",
  "pricingType": "free",
  "userName": "Fazle Rahman",
  "userHeadline": "Co-founder & CEO, Hashnode",
  "userUsername": "fazlerocks",
  "userAvatarUrl": "https://ph-avatars.imgix.net/129147/f84e1796-548b-4d6f-9dcf-745ee4b8bbdd.jpeg",
  "makerName1": "Fazle Rahman",
  "makerHeadline1": "Co-founder & CEO, Hashnode",
  "makerUsername1": "fazlerocks",
  "makerAvatarUrl1": "https://ph-avatars.imgix.net/129147/f84e1796-548b-4d6f-9dcf-745ee4b8bbdd.jpeg",
  "makerName2": "Sandeep Panda",
  "makerHeadline2": "Co-Founder @ Hashnode",
  "makerUsername2": "sandeepg33k",
  "makerAvatarUrl2": "https://ph-avatars.imgix.net/101872/80b0b618-a540-4110-a6d1-74df39675ad0.jpeg",
  "primaryLinkUrl": "https://epigram.news/",
  "media1OriginalHeight": 1080,
  "media1OriginalWidth": 1440,
  "media1ImageUuid": "ac426fd1-3854-4734-b43d-34a5e06347ea.gif",
  "media1MediaType": "video",
  "media1MetadataUrl": "https://www.loom.com/share/b1a48a9b3cac4ba89ce772a3fbcc2847?sid=75efc771-25fa-4ac0-bb1b-5e38fc447deb",
  "media1VideoId": "b1a48a9b3cac4ba89ce772a3fbcc2847",
  "media2OriginalHeight": 630,
  "media2OriginalWidth": 1200,
  "media2ImageUuid": "8521a6bd-7640-487b-abd6-29b9f65fee32",
  "media2MediaType": "image",
  "media2MetadataUrl": null,
  "launchState": "featured",
  "thumbnailImageUuid": "735c2528-554c-467c-9dcf-745ee4b8bbdd.png",
  "link1StoreName": "Website",
  "link1WebsiteName": "epigram.news",
  "link2StoreName": "Github",
  "link2WebsiteName": "github.com",
  "latestScore": 233,
  "launchDayScore": 233,
  "userId": "129147",
  "topic1": "News",
  "topic2": "Open Source",
  "topic3": "Artificial Intelligence",
  "weeklyRank": "24",
  "commentsCount": 20,
  "postUrl": "https://www.producthunt.com/posts/epigram"
}
```

### **Target Audience**

This workflow is ideal for developers, marketers, and data analysts seeking to automate the extraction and structuring of product data from Product Hunt for analytics, reporting, or integration with other tools.

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
