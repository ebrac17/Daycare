# Daycare Hunt

A mobile-friendly web app that helps parents track daycares they're considering,
waitlist status, follow-up reminders, and costs.

Built with **Next.js** (the app), **Supabase** (database + login), and **Vercel** (hosting).
See [PLAN.md](./PLAN.md) for the full plan and milestone checklist.

## Run it on your computer

You need **Node.js 20 or newer** (nodejs.org, "LTS" download) and **Git** installed.

1. Open the **Terminal** app (Mac: Cmd+Space, type "Terminal". Windows: Start menu, type "PowerShell").
2. Download the code (first time only):
   ```
   git clone https://github.com/ebrac17/daycare.git
   cd daycare
   git checkout claude/daycare-hunt-setup-dmchp9
   ```
3. Install the building blocks (first time, and whenever `package.json` changes):
   ```
   npm install
   ```
4. Start the app:
   ```
   npm run dev
   ```
5. Open your web browser and go to **http://localhost:3000**

To stop the app, click on the Terminal window and press **Ctrl + C**.
Next time, you only need to `cd daycare` and run `npm run dev`.
