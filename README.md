# Directory Management System

You are tasked with building a **Directory Management System** for local businesses using **.NET Core (Backend API)** and **Angular/ReactJS (Frontend)**. The system will allow users to manage business listings, search for businesses, and view paginated results. Additionally, the system should focus on providing a user-friendly experience through well-designed interfaces for **CRUD operations** and **search functionalities**.

---

## 📌 Submission Process

To ensure a streamlined and professional submission of your project, please follow the steps below:

1. **Set up a public GitHub repository** for your project.
2. **Structure the repository folders** in a neat manner.
3. **Include a `README.md` file** at the root of your repository that includes:
   - Any extra steps/configurations to run your project locally.
   - Unique solutions or optimizations you implemented.
   - Libraries or techniques used for enhancing performance or user experience.
   - Challenges faced and how you resolved them.
4. **Exclude the `node_modules` folder** while pushing code to GitHub.
5. **Submit the repository link**.

---

## 📌 Project Requirements

### 1️⃣ Business Listing Management (CRUD Operations) - **40%**
Admins should be able to manage business listings with the following features:

#### ✅ Create a Business Listing
- A button labeled **“Add New Business”** should open a modal/popup form with the following fields:
  - **Business Name** (Required)
  - **Category** (Dropdown with predefined categories from the `Categories` table)
  - **Street Address** (Multi-line text area)
  - **City**
  - **State**
  - **Zip Code**
  - **Phone Number** (Required, validated for Indian phone number format)
  - **Website** (Optional, validated for URL format)
  - **Rating**
- **Save button** to submit the form.
- **Validation messages** for incorrect inputs.

#### ✅ Read (View) Business Listings
- Display business listings in a **table** with columns:
  - Name | Category | Street Address | State/Zip | Contact Number | Website | Rating
- Include action buttons for **Edit** and **Delete**.
- Default sorting by **Business Name**.

#### ✅ Update a Business Listing
- Clicking **Edit** opens a **popup/modal form** prepopulated with details.
- The admin can update any field and **click Save Changes**.
- Show a **success message** or validation errors.

#### ✅ Delete a Business Listing
- Clicking **Delete** opens a **confirmation dialog**.
- If confirmed, **delete the record** and remove it from the table.
- Show a **toast/success message**: *“Business deleted successfully.”*

---

### 2️⃣ Search Functionality - **20%**
- Implement a **search bar** that searches in:
  - **Business Name**
  - **City**

---

### 3️⃣ Pagination - **20%**
- **Show 10 records per page** by default.
- **Pagination controls** at the bottom:
  - Previous | Next | Page Numbers
- Display total records and current page info:
  - *“Showing 1-10 of 25 records”*

---

### 4️⃣ Bonus Features - **10%**
- **Customizable records per page.**
- **Fully responsive UI** for all screen sizes.
- **Error handling** with toast notifications.
- **Sorting functionality**:
  - Click column headers to sort **Business Name** and **City**.
  - Toggle sorting between **ascending/descending**.
  - Visual indicator (e.g., **↑ / ↓** icons).

---

## 📝 Coding Standards - **10%**

### ✅ Naming Conventions

#### **Namespaces**
- **Format:** `ProjectName.ModuleName`
- **Example:**
  ```csharp
  namespace AcmeInc.Data
