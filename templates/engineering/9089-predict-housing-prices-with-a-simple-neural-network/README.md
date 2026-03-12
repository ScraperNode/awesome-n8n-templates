# ⚒️ Predict housing prices with a simple neural network

> ⚡ **402 views** · ⚒️ [Engineering](../)

## Description

# Predict Housing Prices with a Neural Network

This n8n template demonstrates how a simple Multi-Layer Perceptron (MLP) neural network can predict housing prices. The prediction is based on four key features, processed through a three-layer model.

### Input Layer
Receives the initial data via a webhook that accepts four query parameters.

### Hidden Layer
Composed of two neurons. Each neuron calculates a weighted sum of the inputs, adds a bias, and applies the ReLU activation function.

### Output Layer
Contains one neuron that calculates the weighted sum of the hidden layer's outputs, adds its bias, and returns the final price prediction.

## Setup
This template works out-of-the-box and requires no special configuration or prerequisites. Just import the workflow to get started.

## How to Use
Trigger this workflow by sending a GET request to the webhook endpoint. Include the house features as query parameters in the URL.

Endpoint: `/webhook/regression/house/price`

### Query Parameters
- `square_feet`: The total square footage of the house.
- `number_rooms`: The total number of rooms.
- `age_in_years`: The age of the house in years.
- `distance_to_city_in_km`: The distance to the nearest city center in kilometers.

### Example
Here’s an example curl request for a 1,500 sq ft, 3-room house that is 10 years old and 5 km from the city.

#### Request

```
curl "https://your-n8n-instance.com/webhook/regression/house/price?square_feet=1500&number_rooms=3&age_in_years=10&distance_to_city_in_km=5"
```

### Response

```
JSON

{
    "price": 53095.832123960805
}
```

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
