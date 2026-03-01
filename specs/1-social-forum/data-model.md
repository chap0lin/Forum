
# Data Model: Forum-Based Closed Social Network

**Feature**: `social-forum`
**Date**: 2026-01-27
**Spec**: [spec.md](../../spec.md)

## Decisions

- **Schema**: Using Knex migrations.
- **Timestamp**: `created_at`, `updated_at` on all tables.
- **Normalization**: User subscription status tracked in `subscriptions` table. `user` table holds core identity.

## Entities

### 1. User (`users`)

Core entity representing a registered platform user (Admin, Coordinator, Member).

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| email | TEXT | Unique, Required |
| password | TEXT | Hashed |
| role | TEXT | 'admin', 'coordinator', 'member' |
| linked_coordinator_id | INTEGER | FK -> users.id (Nullable if Admin/Coordinator) |
| profile_picture | TEXT | URL |
| about_me | TEXT | Rich text content |
| created_at | DATETIME | |
| updated_at | DATETIME | |

### 2. Invitation (`invitations`)

Used for closed signup flow. Linkable to a coordinator.

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| token | TEXT | Unique, Required (UUID or random string) |
| create_by_id | INTEGER | FK -> users.id |
| is_revoked | BOOLEAN | Default false |
| created_at | DATETIME | |

### 3. Subscription (`subscriptions`)

Tracks payment status and history.

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| user_id | INTEGER | FK -> users.id |
| status | TEXT | 'active', 'past_due', 'cancelled' |
| external_subscription_id | TEXT | MercadoPago ID |
| start_date | DATETIME | |
| last_payment_date | DATETIME | |
| created_at | DATETIME | |
| updated_at | DATETIME | |

### 4. Page (`pages`)

Static and Institutional pages (e.g., 'estatuto', 'sp', 'rj').

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| slug | TEXT | Unique (e.g., 'estatuto', 'sp') |
| title | TEXT | Display title |
| content | TEXT | Rich text content |
| last_edited_by | INTEGER | FK -> users.id |
| created_at | DATETIME | |
| updated_at | DATETIME | |

### 5. Topic (`topics`)

Forum discussion threads.

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| title | TEXT | Required |
| content | TEXT | Rich text (Initial post content) |
| author_id | INTEGER | FK -> users.id |
| is_locked | BOOLEAN | Default false |
| created_at | DATETIME | |
| updated_at | DATETIME | |

### 6. Post (`posts`)

Replies to topics (and nested replies).

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| topic_id | INTEGER | FK -> topics.id |
| author_id | INTEGER | FK -> users.id |
| content | TEXT | Rich text |
| parent_post_id | INTEGER | FK -> posts.id (Nullable for top-level replies) |
| created_at | DATETIME | |
| updated_at | DATETIME | |

### 7. Message (`messages`)

Direct messages between users.

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| sender_id | INTEGER | FK -> users.id |
| receiver_id | INTEGER | FK -> users.id |
| content | TEXT | Plain text |
| is_read | BOOLEAN | Default false |
| created_at | DATETIME | |

### 8. PayoutRecord (`payout_records`)

Historical record of finalized monthly payouts.

| Field | Type | Description |
|---|---|---|
| id | INTEGER | PK |
| coordinator_id | INTEGER | FK -> users.id |
| month_year | TEXT | 'YYYY-MM' |
| total_amount | DECIMAL | Calculated amount |
| status | TEXT | 'pending', 'paid' |
| created_at | DATETIME | |
