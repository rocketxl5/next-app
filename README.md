This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Universal Content Engine + Admin Panel

## ✅ Phase 1 — Database (The CMS Core)

We do **ONE schema upgrade** and this turns into a CMS engine.

We are adding:

**Core tables**

* `Content` → everything: product, blog, gallery, api…
* `Category`
* `Tag`
* `ContentTag`
* `Media`

Your CMS now becomes:

> “A generic, type-based content engine”

This is the most scalable way possible.

### Your next Prisma section will look like this:

```prisma
model Content {
  id         String   @id @default(cuid())
  title      String
  slug       String   @unique
  body       Json?
  type       String   // product | blog | gallery | api | page
  status     String   @default("draft")
  price      Float?
  metadata   Json?

  user       User     @relation(fields: [userId], references: [id])
  userId     String

  category   Category? @relation(fields: [categoryId], references: [id])
  categoryId String?

  tags   ContentTag[]
  media  Media[]

  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```

(Add the others too later when you're ready, I’ll guide you)

After this step:

```bash
yarn prisma migrate dev -n add_content_core
yarn prisma generate
```

That turns your project into a **CMS backend**.

---

## ✅ Phase 2 — API layer (Headless-ready)

Then we build minimal **API routes** (no UI yet):

| Route                      | Purpose                       |
| -------------------------- | ----------------------------- |
| `POST /api/content`        | Create content (admin/editor) |
| `GET /api/content`         | List content                  |
| `GET /api/content/[slug]`  | Public read                   |
| `PATCH /api/content/[id]`  | Update                        |
| `DELETE /api/content/[id]` | Delete                        |
| `GET /api/me`              | Current user                  |
| `GET /api/admin/users`     | Admin only                    |

These routes will use:

* ✅ your Prisma client
* ✅ your auth middleware
* ✅ your `requireRole(...)` helper

At this point your platform = **Headless CMS**.

You can connect:

* Any frontend
* Any mobile app
* Any third-party service

This is *ULTRA valuable*.

---

## ✅ Phase 3 — Dashboard (Admin + Editor)

Once API is solid:

```
/dashboard
  /content
  /media
  /users
  /settings
```

Roles:

| Role        | Access              |
| ----------- | ------------------- |
| USER        | none / profile only |
| EDITOR      | dashboard/content   |
| ADMIN       | everything          |
| SUPER_ADMIN | everything + system |

This will be:

* Table of contents
* Add/Edit forms
* Image upload (later)
* Publish/draft logic

No fancy design.
**Simple + powerful.**

---

## ✅ Phase 4 — Public site

Only once backend is perfect we do:

```
/blog
/products
/gallery
/content/[slug]
```

Powered entirely from Content model.

Your system can now be:

* Ecommerce site ✅
* Blog ✅
* Portfolio ✅
* Photo collection ✅
* Digital downloads ✅
* Courses ✅
* API service ✅

**All from same base.**

This is rare and valuable.

---

## ✅ Phase 5 — Monetization ready

Later, when you want:

* Stripe
* Paywall
* Premium content
* Subscriptions
* Multi-tenant sites

Your base already supports all of it.

That’s why you’re building a **template**, not a project.

---

## So now: VERY important question

Before I generate anything, choose the next exact step:

**What do you want me to generate for you next?**

1. 📄 Full Prisma schema for CMS v1
2. 🧠 Database design diagram + explanation
3. 🔐 Role & permission system code
4. 🛠 Content CRUD API routes
5. 🧩 All of the above in correct order

Just reply with a number.
Then we go step-by-step, clean and professional.




