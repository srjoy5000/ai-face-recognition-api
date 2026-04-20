# Face Detector App API

> REST API backend for the [AI Face Recognition](https://github.com/srjoy5000/ai-face-recognition) app — handles authentication, user profiles, and MediaPipe face-detection calls.

## Live Demo

[https://srjoy5000.github.io/ai-face-recognition/](https://srjoy5000.github.io/ai-face-recognition/)

---

## Tech Stack

| Category     | Tools & Technologies                                                                                                                                                                                                |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Backend**  | ![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white) |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)                                                                                                   |

---

## Quick Start

### Prerequisites

- Node.js v18+
- PostgreSQL database (local or hosted, e.g. Supabase / Render)

### Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/srjoy5000/ai-face-recognition-api
   cd ai-face-recognition-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables** — create a `.env` file:

   ```
   DATABASE_PORT=
   DATABASE_URL=            # full connection string (takes precedence if set)
   DATABASE_HOST=
   DATABASE_PORT=
   DATABASE_USER=
   DATABASE_PW=
   DATABASE_DB=
   ```

4. **Apply database migrations** (via Supabase CLI or dashboard) using the SQL files in `supabase/migrations/`.

5. **Start the server:**
   ```bash
   npm start
   ```

---

## API Endpoints

| Method | Path           | Description                        |
| ------ | -------------- | ---------------------------------- |
| GET    | `/`            | Health check                       |
| POST   | `/signin`      | Authenticate a user                |
| POST   | `/register`    | Register a new user                |
| GET    | `/profile/:id` | Get user profile                   |
| PUT    | `/image`       | Increment user's image entry count |
| POST   | `/imageurl`    | Detect faces via Clarifai API      |

---

**Developed by [srjoy5000](https://github.com/srjoy5000)**
