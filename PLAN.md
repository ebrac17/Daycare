# Daycare Hunt — Project Plan

A mobile-friendly web app that helps parents keep track of the daycares they're
considering: waitlist status, follow-up reminders, and costs.

## The tools, in plain English

| Tool | What it is | Analogy |
|------|------------|---------|
| **Next.js** | The framework we write the app in. It turns our code into the web pages you see and click on. | The building's blueprint and construction crew. |
| **Supabase** | An online database plus login system. It stores every daycare you add and makes sure only *you* can see your list. | A secure filing cabinet in the cloud with a lock on it. |
| **Vercel** | A hosting service. It puts the app on the internet at a real web address so you can open it on your phone. | The plot of land and street address where the building lives. |
| **Git / GitHub** | Git saves "snapshots" (commits) of the code so we can always go back. GitHub stores those snapshots online. | "Track changes" + a backup drive for code. |
| **Node.js / npm** | Node runs JavaScript on your computer; npm installs the building blocks Next.js needs. | The power tools the crew needs to work. |
| **Tailwind CSS** | A styling toolkit (comes with Next.js setup) that makes it easy to look good on phones. | Paint and furniture. |

## Accounts to create (all have free tiers)

- [ ] **GitHub** — github.com (you already have one: the `ebrac17/daycare` repo)
- [ ] **Supabase** — supabase.com → "Start your project" → sign in with GitHub
- [ ] **Vercel** — vercel.com → "Sign up" → "Continue with GitHub" (Hobby plan)

## Things to install on your computer

- [ ] **Node.js (LTS version, 20 or newer)** — nodejs.org → download the "LTS" installer
- [ ] **Git** — git-scm.com/downloads (Macs: open Terminal and type `git --version`; it will offer to install it)
- [ ] **VS Code** (optional, recommended for viewing files) — code.visualstudio.com

## Milestones

Each milestone is small, ends with something you can see working, and gets its own Git commit.

### Phase 0 — Setup
- [x] 0.1 Write this plan
- [x] 0.2 Create the Next.js project (TypeScript + Tailwind)
- [x] 0.3 Simple "Daycare Hunt" home page that looks good on a phone
- [ ] 0.4 You run it on your own computer and see it at http://localhost:3000

### Phase 1 — Screens with fake data (no database yet)
- [ ] 1.1 Daycare list page showing a few sample daycares
- [ ] 1.2 Daycare detail page (address, contact, notes)
- [ ] 1.3 "Add daycare" form (saves only in the browser for now)
- [ ] 1.4 Waitlist status badge (Researching / Toured / Applied / Waitlisted / Offered / Enrolled / Declined)
- [ ] 1.5 Cost fields (monthly tuition, registration fee, deposit) + monthly-cost comparison

### Phase 2 — Supabase (real, saved data)
- [ ] 2.1 Create Supabase project; add keys to a private `.env.local` file
- [ ] 2.2 Create `daycares` table
- [ ] 2.3 Show daycares from the database
- [ ] 2.4 Add / edit / delete daycares in the database
- [ ] 2.5 Sign in with email (magic link)
- [ ] 2.6 Row-level security: each parent sees only their own daycares

### Phase 3 — Reminders
- [ ] 3.1 `reminders` table (daycare, date, note, done)
- [ ] 3.2 Add a follow-up reminder on a daycare ("Call to check waitlist position")
- [ ] 3.3 "Upcoming" view on the home page: overdue, today, this week
- [ ] 3.4 Mark reminder done
- [ ] 3.5 (Optional) Email reminders

### Phase 4 — Go live on Vercel
- [ ] 4.1 Connect GitHub repo to Vercel
- [ ] 4.2 Add Supabase keys to Vercel's environment variables
- [ ] 4.3 Open the live URL on your phone; "Add to Home Screen"

### Phase 5 — Polish
- [ ] 5.1 Empty states and friendly error messages
- [ ] 5.2 Sort / filter by status or cost
- [ ] 5.3 App icon and name for the home screen
