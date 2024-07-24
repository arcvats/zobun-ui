import * as esbuild from "esbuild";
import * as tsup from "tsup";
import { globSync } from "glob";

async function build(path) {
  const file = `${path}/src/index.ts`;
  const dist = `${path}/dist`;

  const esbuildConfig = {
    entryPoints: [file],
    outdir: dist,
    bundle: true,
    sourcemap: true,
    target: "es2022",
    format: "cjs",
    packages: "external",
    external: ["@zobun-ui/*"],
    //minify: true,
  };

  await esbuild.build(esbuildConfig);
  console.info(`Built ${path}/dist/index.js`);
  await esbuild.build({
    ...esbuildConfig,
    format: "esm",
    outExtension: { ".js": ".mjs" },
  });
  console.info(`Built ${path}/dist/index.mjs`);

  // Build types with tsup (since its not supported by esbuild)
  await tsup.build({
    entryPoints: [file],
    outDir: dist,
    format: ["cjs", "esm"],
    dts: { only: true },
    silent: true,
    external: [/@zobun-ui\/.+/],
  });

  console.info(`Built ${path}/dist/index.d.ts`);
}

// Build all packages
// We could have used tsconfig paths/aliases but it might not have all the paths
export function buildAll() {
  console.info("Building all packages");
  build("packages/components/atoms");
  build("packages/components/molecules");
  // utils and organisms are built in isolation with only peer dependencies
  // since organisms are complex and might have circular dependencies
  globSync("packages/utils/*").forEach(build);
  globSync("packages/components/organisms/*").forEach(build);
}

export function buildOne(path) {
  build(path);
}

buildAll();
