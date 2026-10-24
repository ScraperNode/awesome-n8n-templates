# 📋 Optimize delivery routes for carriers from Google Sheets using Google Maps

> ⚡ **123 views** · 📋 [Project Management](../)

## Description

This workflow automates the process of converting delivery addresses into geographic coordinates and **optimizes delivery routes for each carrier** using Google Maps.

Finally, the workflow outputs an optimized circular route that starts and ends at the base location.

This workflow is particularly useful for:

* Logistics companies
* Courier services
* Delivery businesses
* Field service operations
* Fleet management teams

It enables **faster route planning, improves delivery efficiency**, and provides a low-code automation solution that integrates directly with existing operational spreadsheets.



---

### Key Advantages

#### 1. ✅ Automated Address Geocoding

The workflow automatically converts delivery addresses into precise GPS coordinates using Google Maps APIs, eliminating manual data entry and reducing human errors.

#### 2. ✅ Delivery Route Optimization

By calculating the most efficient delivery order, the workflow helps drivers reduce travel time, fuel consumption, and operational costs.

#### 3. ✅ Seamless Google Sheets Integration

All delivery data is managed directly inside Google Sheets, making the system easy to use for logistics teams without requiring additional software.

#### 4. ✅ Carrier-Based Delivery Grouping

Deliveries are automatically grouped by carrier, allowing each driver or logistics operator to receive a dedicated optimized route.

### 5. ✅ Real-Time Data Processing

The workflow dynamically processes only the deliveries scheduled for the current day, ensuring routes are always updated and relevant.

#### 6. ✅ Scalable and Flexible

The solution can easily scale to handle larger delivery volumes and can be adapted for different logistics operations, territories, or business models.

#### 7. ✅ Reduced Operational Costs

Optimized routes reduce unnecessary mileage, helping companies lower fuel expenses, vehicle wear, and delivery times.

#### 8. ✅ Intelligent Distance Calculation

The workflow uses Google Routes API for accurate driving distances and includes fallback logic to ensure continuity even if API responses fail.

#### 9. ✅ Fully Automated Workflow

Once configured, the entire process runs automatically with minimal manual intervention, improving productivity and operational reliability.

#### 10. ✅ Easy Customization

The workflow can be customized to support:

* Multiple warehouses
* Dynamic starting points
* Additional delivery constraints
* Traffic-aware routing
* Advanced optimization strategies

---


### **How it works**

1. **Manual trigger**  
   The workflow starts manually by clicking "Execute workflow".

2. **Fetch today’s deliveries**  
   - Reads from a Google Sheet.  
   - Filters rows where `DATE DELIVERY` equals today’s date.

3. **Geocode each delivery address**  
   - Loops through each delivery row.  
   - Calls the **Google Maps Places API (textsearch)** to get latitude and longitude.  
   - Updates the sheet’s `LANG` and `LONG` columns.  
   - Marks `DONE = "x"` to avoid reprocessing.

4. **Get start address location**  
   - A fixed start address (e.g., warehouse) is geocoded once.  
   - Stores `START ADDRESS`, `START LAT`, `START LNG`.

5. **Filter already processed deliveries**  
   - Reads the sheet again, filtering for today’s date **and** `DONE = "x"`.  
   - These are fully geocoded deliveries ready for routing.

6. **Group deliveries by carrier**  
   - Groups all delivery rows by `NAME CARRIER`.

7. **Optimize route for each carrier**  
   - Runs a **custom JavaScript** routing algorithm:  
     - Uses **Google Routes API** for real driving distances.  
     - Implements a **nearest neighbor** heuristic + **2-opt optimization**.  
     - Computes a circular route starting/ending at the warehouse.  
   - Outputs an ordered list of stops including the warehouse as start and end.

8. **Return optimized route**  
   - The final route is returned as structured JSON.  
   - Can be further used for writing back to Sheets or displaying.

---

### **Set up steps**

1. **Google Sheets setup**  
   - Create a Google Sheet with columns:  
     `row_number`, `NAME CARRIER`, `DATE DELIVERY`, `ADDRESS`, `LANG`, `LONG`, `DONE`.  
   - Clone the [example sheet](https://docs.google.com/spreadsheets/d/1iQHlKJOfAI_9OeKaemW21n82IEbMVsvuaQqSLIKw2n8/edit?usp=sharing).  
   - Note the `documentId` from the sheet’s URL.

2. **Google Sheets OAuth2 credentials**  
   - In n8n, add a **Google Sheets OAuth2 API** credential.  
   - Use the same email that owns/edits the sheet.

3. **Google Maps API credentials**  
   - Enable **Places API** and **Routes API** in Google Cloud Console.  
   - Create an **API key** with no restrictions or restrict it to the required APIs.  
   - In n8n, add an **HTTP Query Auth** credential:  
     - Key: `key`  
     - Value: your Google Maps API key.

4. **Update workflow configuration**  
   - In the **Google Sheets** nodes (`Get date delivery`, `Update Lat and Lng`, `Get addresses`), replace the `documentId` with your own sheet ID.  
   - Ensure the sheet name (`Foglio1` or `gid=0`) matches.

5. **Set start address**  
   - In the **Start address** node (`n8n-nodes-base.set`), edit the `START ADDRESS` assignment to your warehouse/starting location.

6. **Adjust wait time**  
   - The **Wait** node is set to 10 seconds to respect Google Maps API rate limits. Adjust if needed.

7. **Run the workflow**  
   - Click **"When clicking ‘Execute workflow’"** button in n8n.  
   - The workflow geocodes new addresses, updates the sheet, and outputs an optimized route per carrier.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
