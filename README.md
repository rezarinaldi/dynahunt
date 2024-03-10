# 👓 DynaHunt

### Environment Variables

- DATABASE_URL
- AWSS3_ACCESS_KEY
- AWSS3_SECRET_KEY
- JWT_SECRET

### How to use it:

1. Clone this repo or use as template

```
git clone git@github.com:rezarinaldi/dynahunt.git
```

2. Install dependencies

```bash
npm install
```

3. Create .env file and add environment variables

```bash
cp .env.example .env
```

4. Do prisma migration

```bash
npm run db:migrate
```

5. Run the development server:

```bash
npm run dev
```

6. Open http://localhost:3000 with your browser to see the result.
