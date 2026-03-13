# 📈 Blockchain monitor with ScrapeGraphAI risk detection, instant alerts and Slack

> ⚡ **632 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Smart Blockchain Monitor with ScrapeGraphAI Risk Detection and Instant Alerts

## 🎯 Target Audience
- Cryptocurrency traders and investors
- DeFi protocol managers and developers
- Blockchain security analysts
- Financial compliance officers
- Crypto fund managers and institutions
- Risk management teams
- Blockchain developers monitoring smart contracts
- Digital asset custodians

## 🚀 Problem Statement
Manual blockchain monitoring is time-consuming and prone to missing critical events, often leading to delayed responses to high-value transactions, security threats, or unusual network activity. This template solves the challenge of real-time blockchain surveillance by automatically detecting, analyzing, and alerting on significant blockchain events using AI-powered intelligence and instant notifications.

## 🔧 How it Works

This workflow automatically monitors blockchain activity in real-time, uses ScrapeGraphAI to intelligently extract transaction data from explorer pages, performs sophisticated risk analysis, and instantly alerts your team about significant events across multiple blockchains.

### Key Components

1. **Blockchain Webhook** - Real-time trigger that activates when new blocks are detected
2. **Data Normalizer** - Standardizes blockchain data across different networks
3. **ScrapeGraphAI Extractor** - AI-powered transaction data extraction from blockchain explorers
4. **Risk Analyzer** - Advanced risk scoring based on transaction patterns and values
5. **Smart Filter** - Intelligently routes only significant events for alerts
6. **Slack Alert System** - Instant formatted notifications to your team

## 📊 Risk Analysis Specifications

The template performs comprehensive risk analysis with the following parameters:

| Risk Factor | Threshold | Score Impact | Description |
|-------------|-----------|--------------|-------------|
| **High-Value Transactions** | &gt;$10,000 USD | +15 per transaction | Individual transactions exceeding threshold |
| **Block Volume** | &gt;$1M USD | +20 points | Total block transaction volume |
| **Block Volume** | &gt;$100K USD | +10 points | Moderate block transaction volume |
| **Failure Rate** | &gt;10% | +15 points | Percentage of failed transactions in block |
| **Multiple High-Value** | &gt;3 transactions | Alert trigger | Multiple large transactions in single block |
| **Critical Failure Rate** | &gt;20% | Alert trigger | Extremely high failure rate indicator |

**Risk Levels:**
- **High Risk**: Score ≥ 50 (Immediate alerts)
- **Medium Risk**: Score ≥ 25 (Standard alerts)
- **Low Risk**: Score &lt; 25 (No alerts)

## 🌐 Supported Blockchains

| Blockchain | Explorer | Native Support | Transaction Detection |
|------------|----------|----------------|----------------------|
| **Ethereum** | Etherscan | ✅ Full | High-value, DeFi, NFT |
| **Bitcoin** | Blockchair | ✅ Full | Large transfers, institutional |
| **Binance Smart Chain** | BscScan | ✅ Full | DeFi, high-frequency trading |
| **Polygon** | PolygonScan | ✅ Full | Layer 2 activity monitoring |

## 🛠️ Setup Instructions

**Estimated setup time: 15-20 minutes**

### Prerequisites
- n8n instance with community nodes enabled
- ScrapeGraphAI API account and credentials
- Slack workspace with webhook or bot token
- Blockchain data source (Moralis, Alchemy, or direct node access)
- Basic understanding of blockchain explorers

### Step-by-Step Configuration

#### 1. Install Community Nodes
```bash
# Install required community nodes
npm install n8n-nodes-scrapegraphai
```

#### 2. Configure ScrapeGraphAI Credentials
- Navigate to Credentials in your n8n instance
- Add new ScrapeGraphAI API credentials
- Enter your API key from ScrapeGraphAI dashboard
- Test the connection to ensure proper functionality

#### 3. Set up Slack Integration
- Add Slack OAuth2 or webhook credentials
- Configure your target channel for blockchain alerts
- Test message delivery to ensure notifications work
- Customize alert formatting preferences

#### 4. Configure Blockchain Webhook
- Set up the webhook endpoint for blockchain data
- Configure your blockchain data provider (Moralis, Alchemy, etc.)
- Ensure webhook payload includes block number and blockchain identifier
- Test webhook connectivity with sample data

#### 5. Customize Risk Parameters
- Adjust high-value transaction threshold (default: $10,000)
- Modify risk scoring weights based on your needs
- Configure blockchain-specific risk factors
- Set failure rate thresholds for your use case

#### 6. Test and Validate
- Send test blockchain data to trigger the workflow
- Verify ScrapeGraphAI extraction accuracy
- Check risk scoring calculations
- Confirm Slack alerts are properly formatted and delivered

## 🔄 Workflow Customization Options

### Modify Risk Analysis
- Adjust high-value transaction thresholds per blockchain
- Add custom risk factors (contract interactions, specific addresses)
- Implement whitelist/blacklist address filtering
- Configure time-based risk adjustments

### Extend Blockchain Support
- Add support for additional blockchains (Solana, Cardano, etc.)
- Customize explorer URL patterns
- Implement chain-specific transaction analysis
- Add specialized DeFi protocol monitoring

### Enhance Alert System
- Add email notifications alongside Slack
- Implement severity-based alert routing
- Create custom alert templates
- Add alert escalation rules

### Advanced Analytics
- Add transaction pattern recognition
- Implement anomaly detection algorithms
- Create blockchain activity dashboards
- Add historical trend analysis

## 📈 Use Cases

- **Crypto Trading**: Monitor large market movements and whale activity
- **DeFi Security**: Track protocol interactions and unusual contract activity
- **Compliance Monitoring**: Detect suspicious transaction patterns
- **Institutional Custody**: Alert on high-value transfers and security events
- **Smart Contract Monitoring**: Track contract interactions and state changes
- **Market Intelligence**: Analyze blockchain activity for trading insights

## 🚨 Important Notes

- Respect ScrapeGraphAI API rate limits and terms of service
- Implement appropriate delays to avoid overwhelming blockchain explorers
- Keep your API credentials secure and rotate them regularly
- Monitor API usage to manage costs effectively
- Consider blockchain explorer rate limits for high-frequency monitoring
- Ensure compliance with relevant financial regulations
- Regularly update risk parameters based on market conditions

## 🔧 Troubleshooting

**Common Issues:**
- ScrapeGraphAI extraction errors: Check API key and account status
- Webhook trigger failures: Verify webhook URL and payload format
- Slack notification failures: Check bot permissions and channel access
- False positive alerts: Adjust risk scoring thresholds
- Missing transaction data: Verify blockchain explorer accessibility
- Rate limit errors: Implement delays and monitor API usage

**Support Resources:**
- ScrapeGraphAI documentation and API reference
- n8n community forums for workflow assistance
- Blockchain explorer API documentation
- Slack API documentation for advanced configurations
- Cryptocurrency compliance and regulatory guidelines

## 🔗 Nodes Used

Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
