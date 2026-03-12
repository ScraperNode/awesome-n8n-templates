# 📊 Reddit Sentiment Analysis for Apple WWDC25 with Gemini AI and Google Sheets

> ⚡ **751 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates sentiment analysis of Reddit posts related to Apple's WWDC25 event. It extracts data, categorizes posts, analyzes sentiment of comments, and updates a Google Sheet with the results. 


### Preliquisites
1. Bright Data Account: You need a Bright Data account to scrape Reddit data. Ensure you have the correct permissions to use their API. https://brightdata.com/
2. Google Sheets API Credentials: Enable the Google Sheets API in your Google Cloud project and create credentials (OAuth 2.0 Client IDs).
3. Google Gemini API Credentials: You need a Gemini API key to run the sentiment analysis. Ensure you have the correct permissions to use their API. https://ai.google.dev/". You can use any other models of choice

### Setup


1. **Import the Workflow:** Import the provided JSON workflow into your n8n instance.",
2. **Configure Bright Data Credentials:**,
In the 'scrap reddit' and the 'get status' nodes, in Header Parameters find the Authorization field, replace `Bearer 1234` with your Bright Data API key. Apply this to every node that utilizes your Bright Data API Key.,
3. **Set up the Google Sheets API credentials**,
       - In the 'Append Sentiments' node, set up the Google Sheets API by connecting your Google Sheets account through oAuth 2 credentials. ",
4. **Configure the Google Gemini Credential ID**,
     - In the ' Sentiment Analysis per comment' node, set up the Google Gemini API by connecting your Google AI account through the API credentials. ,
5. **Configure Additional Parameters:**,
    - In the 'scrap reddit' node, modify the JSON body to adjust the search term, date, or sort method.,
   - In the 'Wait' node, alter the 'Amount' to adjust the polling interval for scraping status, it is set to 15 seconds by default.,
   - In the 'Text Classifier' node, customize the categories and descriptions to suit the sentiment analysis needs. Review categories such as 'WWDC events' to ensure relevancy.,
   - In the 'Sentiment Analysis per comment' node, modify the system prompt template to improve context.
   
### customization_options

1. Bright Data API parameters to adjust scraping behavior.
2. Wait node duration to optimize polling.
3. Text Classifier categories and descriptions.
4. Sentiment Analysis system prompt. 


### Use Case Examples

- **Brand Monitoring:** Track public sentiment towards Apple during and after the WWDC25 event.
- **Product Feedback Analysis:** Gather insights into user reactions to new product announcements.
- **Competitive Analysis:** Compare sentiment towards Apple's announcements versus competitors.
- **Event Impact Assessment:** Measure the overall impact of the WWDC25 event on various aspects of Apple's business.
       
### Target_audiences: 
- Marketing professionals in the tech industry,
- Brand managers,
- Product managers,
- Market research analysts,
- Social media managers

### Troubleshooting: 
1. Workflow fails to start.
Check that all necessary credentials (Bright Data and Google Sheets API) are correctly configured and that the Bright Data API key is valid.
2. Data scraping fails.
Verify the Bright Data API key, ensure the dataset ID is correct, and inspect the Bright Data dashboard for any issues with the scraping job.
3. Sentiment analysis is inaccurate.
Refine the categories and descriptions in the 'Text Classifier' node. Check that you have the correct Google Gemini API key, as the original is a placeholder.
4. Google Sheets are not updating.
Ensure the Google Sheets API credentials have the necessary permissions to write to the specified spreadsheet and sheet. Check API usage limits.
5. Workflow does not produce the correct output.
Check the data connections, by clicking the connections, and looking at which data is being produced. Check all formulas for errors.

Happy productivity!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Google Gemini Chat Model, Text Classifier, Sentiment Analysis

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
