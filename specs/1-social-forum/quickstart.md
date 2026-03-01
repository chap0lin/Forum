
# Quickstart: Forum-Based Closed Social Network

**Feature**: `social-forum`
**Prerequisites**: Node.js 22+, `sqlite3`.

## Setup

1. **Install Dependencies**:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. **Setup Env**:
   - `backend/.env`: Add `MERCADOPAGO_ACCESS_TOKEN=TEST-xxxxx`
   - `backend/.env`: Ensure `DB_CLIENT=sqlite3`
3. **Run Migrations**:
   ```bash
   cd backend && npx knex migrate:latest
   cd backend && npx knex seed:run
   ```

## Running the App

1. **Start Backend**:
   ```bash
   cd backend && npm run dev
   ```
2. **Start Frontend**:
   ```bash
   cd frontend && npm run dev
   ```

## Key Flows to Verify

1. **Signup via Invite**:
   - Navigate to `http://localhost:5173/invite/test-token-123` (Seed creates this).
   - Fill form, click pay.
   - Verify mock payment redirects and activates account.

2. **Forum Posting**:
   - Login as Member.
   - Go to `/forum`.
   - Reply to "Welcome" topic.

3. **Coordinator Dashboard**:
   - Login as Coordinator.
   - Go to `/dashboard`.
   - Verify linked members table.

## Testing

1. **Run Backend Tests**:
   ```bash
   cd backend && npm test
   ```
