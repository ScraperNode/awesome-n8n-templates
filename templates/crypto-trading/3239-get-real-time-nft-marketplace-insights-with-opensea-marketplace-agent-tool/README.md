# 📈 Get real-time NFT Marketplace insights with OpenSea Marketplace Agent Tool

> ⚡ **1,224 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Track NFT listings, offers, orders, and trait-based pricing in real time!** This workflow integrates **OpenSea API**, **AI-powered analytics (GPT-4o-mini)**, and **n8n automation** to provide instant insights into NFT trading activity. Ideal for **NFT traders, collectors, and investors** looking to **monitor the market and identify profitable opportunities**.  

## **How It Works**  
1. A **user submits a query** about NFT listings, offers, or order history.  
2. The **OpenSea Marketplace Agent** determines the correct API tool:  
   - Retrieve **active NFT listings** for a collection.  
   - Fetch **valid offers** for individual NFTs or entire collections.  
   - Identify the **cheapest NFT listings** by collection or token ID.  
   - Track the **highest offer** made for a single NFT.  
   - Access **detailed order history** for a transaction.  
3. The **OpenSea API** *(requires API key)* is queried to fetch real-time data.  
4. **The AI engine processes and structures the response**, making it easy to interpret.  
5. The **NFT marketplace insights are delivered via Telegram, Slack, or stored in a database**.  

## **What You Can Do with This Agent**  
🔹 **Find the Best NFT Listings** → Retrieve the **cheapest available listings** in any collection.  
🔹 **Track Offers on NFTs** → See **all active offers**, including highest bids.  
🔹 **Analyze Collection-Wide Market Data** → Compare **listings, offers, and sales activity**.  
🔹 **Retrieve Order Details** → Search by **order hash** to check **buyer, seller, and transaction status**.  
🔹 **Fetch NFT Trait-Based Offers** → Identify **rare traits that receive premium bids**.  
🔹 **Monitor Multi-Chain Listings** → Works across **Ethereum, Polygon (Matic), Arbitrum, Optimism, and more**.  

## **Example Queries You Can Use**  
✅ _"Show me the 10 cheapest listings for Bored Ape Yacht Club."_  
✅ _"Find the highest bid for CryptoPunk #1234."_  
✅ _"Track all open offers for Azuki NFTs."_  
✅ _"Retrieve details for this OpenSea order: 0x123abc... on Ethereum."_  
✅ _"List all NFTs for sale in the 'CloneX' collection."_  

## **Available API Tools & Endpoints**  
1️⃣ **Get All Listings by Collection** → `/api/v2/listings/collection/{collection_slug}/all` _(Fetches active listings for a collection)_  
2️⃣ **Get All Offers by Collection** → `/api/v2/offers/collection/{collection_slug}/all` _(Retrieves all offers for a collection)_  
3️⃣ **Get Best Listing by NFT** → `/api/v2/listings/collection/{collection_slug}/nfts/{identifier}/best` _(Finds the lowest-priced NFT listing)_  
4️⃣ **Get Best Listings by Collection** → `/api/v2/listings/collection/{collection_slug}/best` _(Fetches the cheapest listings per collection)_  
5️⃣ **Get Best Offer by NFT** → `/api/v2/offers/collection/{collection_slug}/nfts/{identifier}/best` _(Retrieves the highest offer for an NFT)_  
6️⃣ **Get Collection Offers** → `/api/v2/offers/collection/{collection_slug}` _(Shows collection-wide offers)_  
7️⃣ **Get Item Offers** → `/api/v2/orders/{chain}/{protocol}/offers` _(Fetches active item-specific offers)_  
8️⃣ **Get Listings by Chain & Protocol** → `/api/v2/orders/{chain}/{protocol}/listings` _(Retrieves active listings across blockchains)_  
9️⃣ **Get Order Details by Hash** → `/api/v2/orders/chain/{chain}/protocol/{protocol_address}/{order_hash}` _(Checks order status using an order hash)_  
🔟 **Get Trait-Based Offers** → `/api/v2/offers/collection/{collection_slug}/traits` _(Fetches offers for specific NFT traits)_  

## **Set Up Steps**  
1. **Get an OpenSea API Key**  
   - Sign up at [OpenSea API](https://docs.opensea.io/reference/api-keys) and request an API key.  
2. **Configure API Credentials in n8n**  
   - Add your OpenSea API key under **HTTP Header Authentication**.  
3. **Connect the Workflow to Telegram, Slack, or Database (Optional)**  
   - Use **n8n integrations** to send alerts to **Telegram, Slack, or save results to Google Sheets, Notion, etc.**  
4. **Deploy and Test**  
   - Send a query (e.g., `"Get the best listing for BAYC #5678"`) and receive instant insights!  

**Stay ahead of the NFT market—gain powerful insights with AI-powered OpenSea analytics!**

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
