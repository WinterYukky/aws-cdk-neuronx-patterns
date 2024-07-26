import { ReleasableCommits, awscdk } from "projen";
const cdkVersion = "2.149.0";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "WinterYukky",
  authorAddress: "49480575+WinterYukky@users.noreply.github.com",
  cdkVersion,
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.4.0",
  name: "aws-cdk-neuronx-patterns",
  projenrcTs: true,
  repositoryUrl: "https://github.com/WinterYukky/aws-cdk-neuronx-patterns.git",
  keywords: ["neuronx"],
  prettier: true,
  eslintOptions: {
    dirs: ["src", "test"],
    prettier: true,
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    `@aws-cdk/integ-runner@${cdkVersion}-alpha.0`,
    `@aws-cdk/integ-tests-alpha@${cdkVersion}-alpha.0`,
    `@aws-cdk/aws-sagemaker-alpha@${cdkVersion}-alpha.0`,
    "@types/aws-lambda",
    "@aws-sdk/client-batch",
    "esbuild",
  ],
  gitignore: [
    "src/private/await-compile-job/index.js",
    "src/private/neuronx-ami/index.js",
  ],
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: [
          "feat",
          "fix",
          "chore",
          "ci",
          "docs",
          "style",
          "refactor",
          "test",
          "revert",
          "Revert",
        ],
      },
      contributorStatement:
        "_By submitting this pull request, I confirm that my contribution is made under the terms of the Apache-2.0 license_",
    },
  },
  releasableCommits: ReleasableCommits.ofType([
    "feat",
    "fix",
    "revert",
    "Revert",
  ]),
  // packageName: undefined,  /* The "name" in package.json. */
});
project.projectBuild.compileTask.prependExec(
  "esbuild index.ts --bundle --outdir=./ --platform=node --external:@aws-sdk/*",
  {
    cwd: "src/private/await-compile-job",
  },
);
project.projectBuild.compileTask.prependExec(
  "esbuild index.ts --bundle --outdir=./ --platform=node --external:@aws-sdk/*",
  {
    cwd: "src/private/neuronx-ami",
  },
);
project.addTask("integ", {
  exec: "integ-runner",
  description: "Run integration tests",
  receiveArgs: true,
});

project.addTask("integ:update", {
  exec: "integ-runner --update-on-failed",
  description: "Run integration tests and update on any failed tests",
  receiveArgs: true,
});
project.synth();
