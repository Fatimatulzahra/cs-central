# CS Central (CampusLink)

CS Central is a full‑stack web application that helps Computer Science students at Fisk University discover and RSVP to events, submit ideas, and explore curated resources. It uses a React + Tailwind frontend and a Node/Express backend with MongoDB.

## Features
- Responsive React frontend built with Tailwind CSS
- Events listing with RSVP support
- Resource cards with modal details
- Idea submission modal (sends email to admin)
- Dark mode toggle (class-based Tailwind dark mode)
- Mobile-friendly navigation with hamburger menu

## Tech Stack
- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Email: SendGrid (for confirmations and idea submissions)

## Project Structure
```
cs-central/
 frontend/     # React app (Vite)
    ── src/
    ── public/
    ── ...
 backend/      # Express API
    ── server.js
    ── models/
    ── routes/
    ── utils/
```

## Quick Start
Prerequisites: Node.js (>=16), npm

1. Clone the repository

```bash
git clone https://github.com/Fatimatulzahra/cs-central.git
cd cs-central
```

2. Install and run the frontend

```powershell
cd frontend
npm install
npm run dev
```

3. Install and run the backend

```powershell
cd backend
npm install
npm start
```

4. Environment variables (create `backend/.env`)

```
MONGO_URI=your-mongodb-uri
SENDGRID_API_KEY=your-sendgrid-key
EMAIL_FROM=your-sender-email
PORT=5000
```

## Dark Mode
The project uses Tailwind's class-based dark mode. The Navbar toggle adds/removes the `dark` class on the document root so the UI switches between themes.

## RSVP & Email
- RSVPs are persisted to MongoDB.
- The backend sends confirmation emails through SendGrid and can optionally attach an `.ics` calendar file.

## Development Tips
- If Tailwind classes don't appear, ensure `src/index.css` includes the Tailwind directives and `postcss.config.cjs` exists. Run the Vite dev server (frontend) to see live updates.
- Use a hard refresh after changing global CSS (`Ctrl+Shift+R`).

## Future Improvements
- Admin dashboard for creating and managing events
- Authentication for event organizers
- File uploads for event flyers
- Comments or discussion threads on events

## Contributing
Contributions, bug reports and feature requests are welcome. Please open an issue or submit a pull request.

## License
This repository is provided for educational and development purposes at Fisk University.

## Author
Fatimah Badmos — Computer Science @ Fisk University
