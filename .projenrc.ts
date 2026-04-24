import { ReleasableCommits, awscdk } from "projen";
import { GithubCredentials } from "projen/lib/github";
import { JobPermission } from "projen/lib/github/workflows-model";
const cdkVersion = "2.240.0";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "WinterYukky",
  authorAddress: "49480575+WinterYukky@users.noreply.github.com",
  cdkVersion,
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.9.0",
  name: "aws-cdk-neuronx-patterns",
  projenrcTs: true,
  repositoryUrl: "https://github.com/WinterYukky/aws-cdk-neuronx-patterns.git",
  projenCredentials: GithubCredentials.fromApp(),
  npmProvenance: true,
  npmTrustedPublishing: true,
  keywords: ["neuronx"],
  prettier: true,
  eslintOptions: {
    dirs: ["src", "test"],
    prettier: true,
  },
  deps: [
    `@aws-cdk/aws-sagemaker-alpha@${cdkVersion}-alpha.0`,
    "@cdklabs/deploy-time-build",
    "aws-cdk-lambdaless-custom-resource",
  ] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    `@aws-cdk/aws-sagemaker-alpha@${cdkVersion}-alpha.0`,
    "@aws-cdk/lambda-layer-kubectl-v34",
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
  autoApproveOptions: {
    allowedUsernames: ["winteryukky-projen-bot[bot]"],
    label: "auto-upgrade",
  },
  autoMerge: false,
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

const autoApproveWorkflow = project.github?.tryFindWorkflow("auto-approve");
const approveJob = autoApproveWorkflow?.getJob("approve");
if (approveJob && "steps" in approveJob) {
  autoApproveWorkflow?.updateJob("approve", {
    ...approveJob,
    permissions: {
      pullRequests: JobPermission.WRITE,
      contents: JobPermission.WRITE,
    },
    steps: [
      ...(approveJob.steps ?? []),
      {
        name: "Enable auto-merge",
        env: {
          GH_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
        },
        run: 'gh pr merge --squash --auto "${{ github.event.pull_request.number }}" --repo "${{ github.repository }}"',
      },
    ],
  });
}

// Copy non-TS assets (e.g. vendored IAM policy JSONs) into the compiled
// `lib/` output so runtime `fs.readFileSync` calls can locate them.
project.compileTask.exec(
  `node -e "require('fs').cpSync('src', 'lib', { recursive: true, filter: (p) => /(?:\\\\/|^)[^.]+$|\\\\.json$/.test(p) })"`,
);

project.synth();
