# Moody Journal

Daily journal, with AI-powered mood analyzer.

Source: [Build an AI-Powered Fullstack Next.js App, v3](https://frontendmasters.com/courses/fullstack-app-next-v3/)

Instructor: Scott Moss from Frontend Masters

> Let's learn Next.js best practices from the pros. They can give some good insights based on their experiences.

## Dev Logs

1. Haven't write the logs for a long while. Was busy with work. Losing motivation to code lately. I tried to commit once a day (or not), but honestly most of it were just stupid commits (updating readme, delete unused file, etc). I'm not feeling productive at all...

2. Anyways, I've done the prisma setup. Haven't heard the term "migration" after a long while. Last time I used it was when writing migration in Laravel.

3. Btw, look at this [db helper util](https://github.com/mirza-sync/moody-journal/blob/main/utils/db.ts), and compare it to [this one](https://fullstack-v2-instructions.vercel.app/lessons/db/helper) from v2 tutorial. The former is more compact, but I think the latter one was easier to understand. It reminds me of the singleton pattern. The graphql connecter helper also instantiated in a similar way iirc.

4. Creating the api feels weird... Writing the endpoint, then write the backend code. But then I realized I'm doing frontend & backend together, then things starts to make sense. There's no need to jump between repos and less context switching since everything is Typescript. Next.js rocks.

5. Prisma doesn't work on client component. So how do I get the data type of what's returned from prisma and pass the type to the props so that I'll have type checking in my client component? It turns out that based on the `@prisma/client` the was generated, I can just import the types that exist in the schema. Cool.

6. Encountered some overflow issues today. First, the width of dashboard layout is `100vw`. So when overflow-y happen, a the browser will show a vertical scroll bar as usual. However, the vertical scroll bar width is not subtracted from the 100vw. Hence a horizontal scroll bar appeared! So annoying. [Smashing Magazine has a good article discussing this issue](https://www.smashingmagazine.com/2023/12/new-css-viewport-units-not-solve-classic-scrollbar-problem/). Second, when the content of the page exceed the browser height, a vertical scroll bar will appear so that user able to scroll down. However, since I set the height of the layout to be `100vh`, the content overflowed outside of the layout div. I tried to set html's and body's height to 100%. It works at first, but when I snap the Chrome Dev Tools on the left side, the issue happens again. Weird... Solution: set `overflow: hidden` on html. Then add `overflow-y: auto` on layout's main element. Refer commit [776ae52](776ae52951916c3fb30b4ce0e10e4b27bf37ad11)
