# PLURQuest website

Static, Cloudflare Pages-ready site.

## Deploy
1. Push this folder to a GitHub repository.
2. In Cloudflare: Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: None.
4. Build command: leave blank.
5. Build output directory: `/` (repository root).
6. Add `plurquest.com` and `www.plurquest.com` as custom domains.
7. Configure `raveclaw.com` as a Cloudflare redirect to `https://plurquest.com`.

## Booking form
The v1 form creates a pre-addressed email to `booking@plurquest.com`.
Once domain email is configured, replace this with a Pages Function or form service if desired.

## Pages
- `/` Landing page
- `/booking/` Sponsorship / Booking
- `/info/` What We Do
- `/projects/` Projects
- `/projects/rave-claw/` Rave Claw Machine
- `/about/` Who We Are
- `/schedule/` Where We're At
