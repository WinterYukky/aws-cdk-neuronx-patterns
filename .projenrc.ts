import { ReleasableCommits, awscdk } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";
const cdkVersion = "2.200.1";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "WinterYukky",
  authorAddress: "49480575+WinterYukky@users.noreply.github.com",
  cdkVersion,
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.9.0",
  name: "aws-cdk-neuronx-patterns",
  projenrcTs: true,
  repositoryUrl: "https://github.com/WinterYukky/aws-cdk-neuronx-patterns.git",
  keywords: ["neuronx"],
  prettier: true,
  eslintOptions: {
    dirs: ["src", "test"],
    prettier: true,
  },
  deps: [
    `@aws-cdk/aws-sagemaker-alpha@${cdkVersion}-alpha.0`,
  ] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    `@aws-cdk/integ-runner`,
    `@aws-cdk/integ-tests-alpha`,
    `@aws-cdk/aws-sagemaker-alpha@${cdkVersion}-alpha.0`,
    "@types/aws-lambda",
    "@types/cfn-response",
    "@aws-sdk/client-batch",
    "@aws-sdk/client-lambda",
    "esbuild",
  ],
  peerDeps: [`@aws-cdk/aws-sagemaker-alpha@${cdkVersion}-alpha.0`],
  gitignore: ["src/**/index.js", ".amazonq"],
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
      contributorStatementOptions: {
        exemptLabels: ["auto-upgrade"],
      },
    },
  },
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-upgrade"],
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
project.eslint?.addRules({
  "import/order": "off",
});

project.projectBuild.compileTask.prependExec(
  "esbuild index.ts --bundle --outdir=./ --platform=node --external:@aws-sdk/*",
  {
    cwd: "src/base/neuronx-compiler/private/await-compile-job",
  },
);
project.projectBuild.compileTask.prependExec(
  "esbuild index.ts --bundle --outdir=./ --platform=node --external:@aws-sdk/*",
  {
    cwd: "src/base/neuronx/private/neuronx-ami",
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
const integWorkflow = project.github?.addWorkflow("integ-test-workflow");
integWorkflow?.on({
  pullRequest: {
    types: ["opened", "synchronize"],
  },
  push: {
    branches: ["main"],
  },
});
integWorkflow?.addJob("integ-test", {
  runsOn: ["ubuntu-latest"],
  permissions: {
    contents: JobPermission.READ,
  },
  steps: [
    {
      name: "Checkout",
      uses: "actions/checkout@v4",
    },
    {
      name: "Setup Node.js",
      uses: "actions/setup-node@v5",
      with: {
        "node-version": "18",
      },
    },
    {
      name: "Install Dependencies",
      run: "yarn install --frozen-lockfile",
    },
    {
      name: "Run Integration Tests",
      run: "yarn integ",
    },
  ],
});
project.synth();
