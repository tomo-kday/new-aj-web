# how to run docker

`pnpm i`

`pnpm dev`

`pnpm run build`

`docker build -t new-aj-web .`

`docker run -p 3000:3000 new-aj-web`

# how to run without docker

`pnpm i`

`pnpm dev`

# temporary entry point (landing page)

there will be no landing page as nextjs will be only served in plan page.
`http://localhost:3000/publish/plan/40081`

# Commit rules

I have set up strict commit rules to enforce consistent and meaningful commit messages. It helps teams maintain a clear and organized history of code changes, making it easier to understand the purpose and context of each commit. [See more details here](https://chat.openai.com/share/61c15277-9251-41e6-9028-47d819ab533d)

## Example

`type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")`

`$ git commit -m "feat: add header"`

[Better Understand how you can use these common types. Courtesy of ChatGPT](https://chat.openai.com/share/61c15277-9251-41e6-9028-47d819ab533d)

[![System diagram](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc830f324-b1f4-449b-aade-ea20448d3e66%2FUntitled.png?table=block&id=8ca03863-cf9d-4545-bd56-c32abba3e584&spaceId=ab8fac5d-069d-4ae5-b053-ead8f0dfa22f&width=2000&userId=05d25a94-f0e2-4fd2-a4a6-ce3f3871e2e1&cache=v2)]
