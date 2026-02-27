import { DependencyType, ReleasableCommits, awscdk } from "projen";
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
    `@aws-cdk/integ-tests-alpha@${cdkVersion}-alpha.0`,
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
  experimentalIntegRunner: true,
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

// Override integ-runner and integ-tests-alpha versions added by experimentalIntegRunner
// to match the cdkVersion, since latest versions may have incompatible decorators
project.deps.removeDependency("@aws-cdk/integ-runner", DependencyType.DEVENV);
project.deps.removeDependency(
  "@aws-cdk/integ-tests-alpha",
  DependencyType.DEVENV,
);
project.deps.addDependency(
  `@aws-cdk/integ-runner@latest`,
  DependencyType.DEVENV,
);
project.deps.addDependency(
  `@aws-cdk/integ-tests-alpha@${cdkVersion}-alpha.0`,
  DependencyType.DEVENV,
);

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
project.synth();
