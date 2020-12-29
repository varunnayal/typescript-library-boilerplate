# Make Library

## Env Vars

In order to build library specify following Env Vars:

- `NAME`: Name of the library. This is is used to prepare

  - Package name: `@buddy-git/${NAME}`
  - Repository URL: `https://github.com/Buddy-Git/${NAME}`
- `DESC`: A short of the library for `package.json`.
- `AUTHOR`: Library author. Better to be in format like: `Varun Nayal(varun.nayal@sliceit.com)`
- `VERSIONS`: CSV of NodeJS major versions the library is available on. Only LTS version are used.

  - Default value: `12`.
  - Available versions: `10`, `12`, `14`, and `16`.

## Command

```sh
NAME=sms-svc \
DESC="Library to send sms" \
AUTHOR="Deepanshu Garg (deepanshu.garg@sliceit.com)" \
VERSIONS="12,14" \
./make-library
```

This does the following:

- Updates `package.json`
- Re-installs dev dependencies to the latest one
- Clears out `src/index.ts` and `test/index.ts` files
