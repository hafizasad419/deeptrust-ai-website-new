# Error Handling Guide for Frontend Team

## Overview

This guide provides comprehensive information about error handling for the DeepTrust AI Lead Management API. The backend now returns precise, user-friendly error messages that can be displayed directly to users or used to provide contextual feedback.

## Error Response Structure

All error responses follow this consistent JSON structure:

```json
{
  "success": false,
  "message": "Human-readable error message",
  "data": {
    "errorType": "ERROR_TYPE_CONSTANT",
    "field": "fieldName (optional)"
  }
}
```

### Response Fields

- **success**: Always `false` for errors
- **message**: User-friendly error message that can be displayed directly to users
- **data.errorType**: Machine-readable error type constant for programmatic handling
- **data.field**: (Optional) The specific field that caused the error (e.g., "email", "phone")

## HTTP Status Codes

| Status Code | Meaning | When It Occurs |
|-------------|---------|----------------|
| 400 | Bad Request | Invalid input data, validation errors |
| 401 | Unauthorized | Invalid GHL credentials (backend configuration issue) |
| 403 | Forbidden | Insufficient permissions in GHL |
| 404 | Not Found | Resource not found in GHL |
| 409 | Conflict | Duplicate entry (email/phone already exists) |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unexpected server errors |
| 503 | Service Unavailable | GHL connection issues |

## Error Types

### 1. DUPLICATE_ENTRY (409 Conflict)

**When it occurs**: A contact with the same email or phone number already exists in the system.

**Example Response**:
```json
{
  "success": false,
  "message": "A contact with this email address already exists in the system",
  "data": {
    "errorType": "DUPLICATE_ENTRY",
    "field": "email"
  }
}
```

**Frontend Handling**:
```javascript
if (error.response?.status === 409 && error.response?.data?.data?.errorType === 'DUPLICATE_ENTRY') {
  // Show user-friendly message
  showError(error.response.data.message);
  
  // Optionally highlight the specific field
  const field = error.response.data.data.field; // "email" or "phone"
  highlightField(field);
}
```

**Recommended User Message**: Display the message from the API directly, as it's user-friendly.

---

### 2. VALIDATION_ERROR (400 Bad Request)

**When it occurs**: Invalid input data (e.g., invalid email format, missing required fields).

**Example Response**:
```json
{
  "success": false,
  "message": "Invalid email provided. Please check your input and try again",
  "data": {
    "errorType": "VALIDATION_ERROR",
    "field": "email"
  }
}
```

**Frontend Handling**:
```javascript
if (error.response?.status === 400 && error.response?.data?.data?.errorType === 'VALIDATION_ERROR') {
  showError(error.response.data.message);
  
  // Highlight the invalid field
  const field = error.response.data.data.field;
  if (field) {
    highlightInvalidField(field);
  }
}
```

**Recommended User Message**: Display the message from the API and highlight the problematic field.

---

### 3. CONNECTION_ERROR (503 Service Unavailable)

**When it occurs**: Unable to connect to Go High Level service.

**Example Response**:
```json
{
  "success": false,
  "message": "Unable to connect to Go High Level service",
  "data": {
    "errorType": "CONNECTION_ERROR"
  }
}
```

**Frontend Handling**:
```javascript
if (error.response?.status === 503 && error.response?.data?.data?.errorType === 'CONNECTION_ERROR') {
  showError("We're experiencing connectivity issues. Please try again in a moment.");
}
```

**Recommended User Message**: "We're experiencing connectivity issues. Please try again in a moment."

---

### 4. CONFIGURATION_ERROR (500 Internal Server Error)

**When it occurs**: Server configuration issue (missing API keys, location ID, etc.).

**Example Response**:
```json
{
  "success": false,
  "message": "Go High Level location ID not configured",
  "data": {
    "errorType": "CONFIGURATION_ERROR"
  }
}
```

**Frontend Handling**:
```javascript
if (error.response?.data?.data?.errorType === 'CONFIGURATION_ERROR') {
  showError("We're experiencing technical difficulties. Our team has been notified.");
  // Optionally log to error tracking service
  logToErrorTracking(error);
}
```

**Recommended User Message**: "We're experiencing technical difficulties. Please try again later or contact support."

---

### 5. GHL_API_ERROR (Various Status Codes)

**When it occurs**: Go High Level API returns an error.

**Example Response**:
```json
{
  "success": false,
  "message": "Go High Level service is temporarily unavailable",
  "data": {
    "errorType": "GHL_API_ERROR"
  }
}
```

**Frontend Handling**:
```javascript
if (error.response?.data?.data?.errorType === 'GHL_API_ERROR') {
  showError(error.response.data.message);
}
```

**Recommended User Message**: Display the message from the API.

---

### 6. UNEXPECTED_ERROR (500 Internal Server Error)

**When it occurs**: An unexpected error that doesn't fit other categories.

**Example Response**:
```json
{
  "success": false,
  "message": "An unexpected error occurred while creating the lead",
  "data": {
    "errorType": "UNEXPECTED_ERROR"
  }
}
```

**Frontend Handling**:
```javascript
if (error.response?.data?.data?.errorType === 'UNEXPECTED_ERROR') {
  showError("Something went wrong. Please try again or contact support if the issue persists.");
  // Log to error tracking
  logToErrorTracking(error);
}
```

**Recommended User Message**: "Something went wrong. Please try again or contact support if the issue persists."

---

## Complete Frontend Implementation Example

### React/TypeScript Example

```typescript
import axios, { AxiosError } from 'axios';

interface ApiErrorResponse {
  success: false;
  message: string;
  data: {
    errorType: string;
    field?: string;
  };
}

async function createLead(leadData: LeadData) {
  try {
    const response = await axios.post('/api/leads/create', leadData);
    return response.data;
  } catch (error) {
    handleLeadError(error as AxiosError<ApiErrorResponse>);
  }
}

function handleLeadError(error: AxiosError<ApiErrorResponse>) {
  if (!error.response) {
    // Network error
    showNotification('Network error. Please check your connection.', 'error');
    return;
  }

  const { status, data } = error.response;
  const errorType = data?.data?.errorType;
  const message = data?.message;
  const field = data?.data?.field;

  switch (errorType) {
    case 'DUPLICATE_ENTRY':
      showNotification(message, 'warning');
      if (field) highlightField(field);
      break;

    case 'VALIDATION_ERROR':
      showNotification(message, 'error');
      if (field) highlightField(field);
      break;

    case 'CONNECTION_ERROR':
      showNotification(
        "We're experiencing connectivity issues. Please try again in a moment.",
        'error'
      );
      break;

    case 'CONFIGURATION_ERROR':
      showNotification(
        "We're experiencing technical difficulties. Our team has been notified.",
        'error'
      );
      logToErrorTracking(error);
      break;

    case 'GHL_API_ERROR':
      showNotification(message || 'Service temporarily unavailable', 'error');
      break;

    case 'UNEXPECTED_ERROR':
    default:
      showNotification(
        'Something went wrong. Please try again or contact support.',
        'error'
      );
      logToErrorTracking(error);
      break;
  }
}

function showNotification(message: string, type: 'error' | 'warning' | 'success') {
  // Your notification implementation
  console.log(`[${type}] ${message}`);
}

function highlightField(fieldName: string) {
  // Your field highlighting implementation
  const field = document.querySelector(`[name="${fieldName}"]`);
  field?.classList.add('error');
}

function logToErrorTracking(error: any) {
  // Your error tracking implementation (e.g., Sentry, LogRocket)
  console.error('Unexpected error:', error);
}
```

### Vanilla JavaScript Example

```javascript
async function createLead(leadData) {
  try {
    const response = await fetch('/api/leads/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });

    const data = await response.json();

    if (!response.ok) {
      handleLeadError(response.status, data);
      return;
    }

    return data;
  } catch (error) {
    showError('Network error. Please check your connection.');
  }
}

function handleLeadError(status, data) {
  const errorType = data?.data?.errorType;
  const message = data?.message;
  const field = data?.data?.field;

  // Handle duplicate entries
  if (status === 409 && errorType === 'DUPLICATE_ENTRY') {
    showError(message);
    if (field) highlightField(field);
    return;
  }

  // Handle validation errors
  if (status === 400 && errorType === 'VALIDATION_ERROR') {
    showError(message);
    if (field) highlightField(field);
    return;
  }

  // Handle connection errors
  if (status === 503 && errorType === 'CONNECTION_ERROR') {
    showError("We're experiencing connectivity issues. Please try again in a moment.");
    return;
  }

  // Handle configuration errors
  if (errorType === 'CONFIGURATION_ERROR') {
    showError("We're experiencing technical difficulties. Please try again later.");
    return;
  }

  // Handle GHL API errors
  if (errorType === 'GHL_API_ERROR') {
    showError(message || 'Service temporarily unavailable');
    return;
  }

  // Default error handling
  showError('Something went wrong. Please try again or contact support.');
}

function showError(message) {
  // Your error display implementation
  alert(message);
}

function highlightField(fieldName) {
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (field) {
    field.classList.add('error');
    field.focus();
  }
}
```

## Referral-Specific Error Handling

For the `/api/leads/refer` endpoint, individual referral failures are included in the success response:

```json
{
  "success": true,
  "message": "Successfully referred 2 friends! Refer 1 more friend to unlock VIP status!",
  "data": {
    "referrals": [
      {
        "friendId": "abc123",
        "friendName": "John Doe",
        "friendEmail": "john@example.com",
        "status": "success"
      },
      {
        "friendName": "Jane Smith",
        "friendEmail": "jane@example.com",
        "status": "failed",
        "error": "A contact with this email address already exists in the system",
        "errorType": "DUPLICATE_ENTRY"
      }
    ],
    "totalReferrals": 2,
    "successfulReferrals": 1,
    "vipStatusGranted": false
  }
}
```

**Frontend Handling**:
```javascript
function handleReferralResponse(response) {
  const { referrals, successfulReferrals, totalReferrals } = response.data;
  
  // Show overall success message
  showNotification(response.message, 'success');
  
  // Show individual failures
  const failed = referrals.filter(r => r.status === 'failed');
  if (failed.length > 0) {
    failed.forEach(referral => {
      showWarning(`${referral.friendName}: ${referral.error}`);
    });
  }
}
```

## Best Practices

1. **Always check the `errorType`** for programmatic handling rather than relying solely on status codes
2. **Display the `message` field** directly to users - it's designed to be user-friendly
3. **Use the `field` property** to highlight specific form fields that caused errors
4. **Log unexpected errors** to your error tracking service for monitoring
5. **Provide retry options** for connection errors and temporary failures
6. **Show loading states** to prevent duplicate submissions
7. **Validate on the frontend** before sending to reduce validation errors

## Testing Error Scenarios

To test different error scenarios in development:

1. **Duplicate Entry**: Try creating a lead with an email that already exists
2. **Validation Error**: Send invalid email format or missing required fields
3. **Connection Error**: Temporarily disable backend GHL connection
4. **Rate Limiting**: Send many requests rapidly (if rate limiting is implemented)

## Questions or Issues?

If you encounter any error types not covered in this guide or need clarification on handling specific scenarios, please contact the backend team.

---

**Last Updated**: December 2025
**Backend Version**: 1.0.0

