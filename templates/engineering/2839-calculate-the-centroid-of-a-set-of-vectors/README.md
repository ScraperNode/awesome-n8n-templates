# ⚒️ Calculate the centroid of a set of vectors

> ⚡ **637 views** · ⚒️ [Engineering](../)

## Description

# n8n Workflow: Calculate the Centroid of a Set of Vectors

## Overview
This workflow receives an array of vectors in JSON format, validates that all vectors have the same dimensions, and computes the centroid. It is designed to be reusable across different projects.

## Workflow Structure
### Nodes and Their Functions:
1. **Receive Vectors (Webhook)**: Accepts a GET request containing an array of vectors in the `vectors` parameter.
   - **Expected Input:** `vectors` parameter in JSON format.
   - **Example Request:** `/webhook/centroid?vectors=[[2,3,4],[4,5,6],[6,7,8]]`
   - **Output:** Passes the received data to the next node.

2. **Extract & Parse Vectors (Set Node)**: Converts the input string into a proper JSON array for processing.
   - **Ensures `vectors` is a valid array.**
   - **If the parameter is missing, it may generate an error.**
   - **Expected Output Example:**
   ```json
   {
     "vectors": [[2,3,4],[4,5,6],[6,7,8]]
   }
   ```

3. **Validate & Compute Centroid (Code Node)**: Validates vector dimensions and calculates the centroid.
   - **Validation:** Ensures all vectors have the same number of dimensions.
   - **Computation:** Averages each dimension to determine the centroid.
   - **If validation fails:** Returns an error message indicating inconsistent dimensions.
   - **Successful Output Example:**
   ```json
   {
     "centroid": [4,5,6]
   }
   ```
   - **Error Output Example:**
   ```json
   {
     "error": "Vectors have inconsistent dimensions."
   }
   ```

4. **Return Centroid Response (Respond to Webhook Node)**: Sends the final response back to the client.
   - **If the computation is successful**, it returns the centroid.
   - **If an error occurs**, it returns a descriptive error message.
   - **Example Response:**
   ```json
   {
     "centroid": [4, 5, 6]
   }
   ```

## Inputs
- JSON array of vectors, where each vector is an array of numerical values.

### Example Input
```json
{
  "vectors": [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
}
```

## Setup Guide
1. **Create a new workflow in n8n**.
2. **Add a Webhook node** (`Receive Vectors`) to receive JSON input.
3. **Add a Set node** (`Extract & Parse Vectors`) to extract and convert the data.
4. **Add a Code node** (`Validate & Compute Centroid`) to:
   - Validate dimensions.
   - Compute the centroid.
5. **Add a Respond to Webhook node** (`Return Centroid Response`) to return the result.

### Function Node Script Example
```javascript
const input = items[0].json;
const vectors = input.vectors;

if (!Array.isArray(vectors) || vectors.length === 0) {
  return [{ json: { error: "Invalid input: Expected an array of vectors." } }];
}

const dimension = vectors[0].length;
if (!vectors.every(v =&gt; v.length === dimension)) {
  return [{ json: { error: "Vectors have inconsistent dimensions." } }];
}

const centroid = new Array(dimension).fill(0);
vectors.forEach(vector =&gt; {
  vector.forEach((val, index) =&gt; {
    centroid[index] += val;
  });
});

for (let i = 0; i &lt; dimension; i++) {
  centroid[i] /= vectors.length;
}

return [{ json: { centroid } }];
```

## Testing
- Use a tool like Postman or the n8n UI to send sample inputs and verify the responses.
- Modify the input vectors to test different scenarios.

This workflow provides a simple yet flexible solution for vector centroid computation, ensuring validation and reliability.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
