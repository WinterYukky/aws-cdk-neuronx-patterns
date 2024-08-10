# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeuronxCompile <a name="NeuronxCompile" id="aws-cdk-neuronx-patterns.NeuronxCompile"></a>

Neuronx compile construct.

Compile the model to work with Inferentia2 and Trainium1 and upload it to an S3 bucket.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronxCompile.Initializer"></a>

```typescript
import { NeuronxCompile } from 'aws-cdk-neuronx-patterns'

new NeuronxCompile(scope: Construct, id: string, props: NeuronxCompileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps">NeuronxCompileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxCompile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxCompile.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxCompile.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps">NeuronxCompileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronxCompile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-neuronx-patterns.NeuronxCompile.isConstruct"></a>

```typescript
import { NeuronxCompile } from 'aws-cdk-neuronx-patterns'

NeuronxCompile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.NeuronxCompile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Bucket">compiledArtifactS3Bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Prefix">compiledArtifactS3Prefix</a></code> | <code>string</code> | S3 Prefix that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Url">compiledArtifactS3Url</a></code> | <code>string</code> | S3 URL that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.nPositions">nPositions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.optLevel">optLevel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.OptLevel">OptLevel</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.parameters">parameters</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.tpDegree">tpDegree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.quantDtype">quantDtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.QuantDtype">QuantDtype</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `compiledArtifactS3Bucket`<sup>Required</sup> <a name="compiledArtifactS3Bucket" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Bucket"></a>

```typescript
public readonly compiledArtifactS3Bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `compiledArtifactS3Prefix`<sup>Required</sup> <a name="compiledArtifactS3Prefix" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Prefix"></a>

```typescript
public readonly compiledArtifactS3Prefix: string;
```

- *Type:* string

S3 Prefix that compiled artifact uploaded.

---

##### `compiledArtifactS3Url`<sup>Required</sup> <a name="compiledArtifactS3Url" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Url"></a>

```typescript
public readonly compiledArtifactS3Url: string;
```

- *Type:* string

S3 URL that compiled artifact uploaded.

---

##### `nPositions`<sup>Required</sup> <a name="nPositions" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.nPositions"></a>

```typescript
public readonly nPositions: number;
```

- *Type:* number

---

##### `optLevel`<sup>Required</sup> <a name="optLevel" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.optLevel"></a>

```typescript
public readonly optLevel: OptLevel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.OptLevel">OptLevel</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.parameters"></a>

```typescript
public readonly parameters: Parameters;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a>

---

##### `tpDegree`<sup>Required</sup> <a name="tpDegree" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.tpDegree"></a>

```typescript
public readonly tpDegree: number;
```

- *Type:* number

---

##### `quantDtype`<sup>Optional</sup> <a name="quantDtype" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.quantDtype"></a>

```typescript
public readonly quantDtype: QuantDtype;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.QuantDtype">QuantDtype</a>

---


### TransformersNeuronxSageMakerRealtimeInferenceEndpoint <a name="TransformersNeuronxSageMakerRealtimeInferenceEndpoint" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.Initializer"></a>

```typescript
import { TransformersNeuronxSageMakerRealtimeInferenceEndpoint } from 'aws-cdk-neuronx-patterns'

new TransformersNeuronxSageMakerRealtimeInferenceEndpoint(scope: Construct, id: string, props: TransformersNeuronxSageMakerRealtimeInferenceEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps">TransformersNeuronxSageMakerRealtimeInferenceEndpointProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps">TransformersNeuronxSageMakerRealtimeInferenceEndpointProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.grantInvoke">grantInvoke</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `grantInvoke` <a name="grantInvoke" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.isConstruct"></a>

```typescript
import { TransformersNeuronxSageMakerRealtimeInferenceEndpoint } from 'aws-cdk-neuronx-patterns'

TransformersNeuronxSageMakerRealtimeInferenceEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.property.endpointArn">endpointArn</a></code> | <code>string</code> | The ARN of the endpoint. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | The name of the endpoint. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

The ARN of the endpoint.

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The name of the endpoint.

---


## Structs <a name="Structs" id="Structs"></a>

### BucketCompiledModelOptions <a name="BucketCompiledModelOptions" id="aws-cdk-neuronx-patterns.BucketCompiledModelOptions"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.BucketCompiledModelOptions.Initializer"></a>

```typescript
import { BucketCompiledModelOptions } from 'aws-cdk-neuronx-patterns'

const bucketCompiledModelOptions: BucketCompiledModelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.code">code</a></code> | <code>aws-cdk-lib.aws_s3_deployment.ISource</code> | Code used for inference. |
| <code><a href="#aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.compiledArtifactPath">compiledArtifactPath</a></code> | <code>string</code> | The path where compiled artifacts (i.e. xxx.neff) are stored. |
| <code><a href="#aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.compileOptions">compileOptions</a></code> | <code><a href="#aws-cdk-neuronx-patterns.CompileOptions">CompileOptions</a></code> | Neuronx compile options. |
| <code><a href="#aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.modelIdOrPath">modelIdOrPath</a></code> | <code>string</code> | Model ID or saved path. |
| <code><a href="#aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.parameters">parameters</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a></code> | The number of parameters of model. |

---

##### `code`<sup>Optional</sup> <a name="code" id="aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.code"></a>

```typescript
public readonly code: ISource;
```

- *Type:* aws-cdk-lib.aws_s3_deployment.ISource
- *Default:* using the predefined code

Code used for inference.

---

##### `compiledArtifactPath`<sup>Optional</sup> <a name="compiledArtifactPath" id="aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.compiledArtifactPath"></a>

```typescript
public readonly compiledArtifactPath: string;
```

- *Type:* string
- *Default:* "./compiled"

The path where compiled artifacts (i.e. xxx.neff) are stored.

---

##### `compileOptions`<sup>Optional</sup> <a name="compileOptions" id="aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.compileOptions"></a>

```typescript
public readonly compileOptions: CompileOptions;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.CompileOptions">CompileOptions</a>
- *Default:* Each properties are set default.

Neuronx compile options.

---

##### `modelIdOrPath`<sup>Optional</sup> <a name="modelIdOrPath" id="aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.modelIdOrPath"></a>

```typescript
public readonly modelIdOrPath: string;
```

- *Type:* string
- *Default:* "./model"

Model ID or saved path.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.BucketCompiledModelOptions.property.parameters"></a>

```typescript
public readonly parameters: Parameters;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a>

The number of parameters of model.

---

### CompiledModelOptions <a name="CompiledModelOptions" id="aws-cdk-neuronx-patterns.CompiledModelOptions"></a>

Precompiled model options.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.CompiledModelOptions.Initializer"></a>

```typescript
import { CompiledModelOptions } from 'aws-cdk-neuronx-patterns'

const compiledModelOptions: CompiledModelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.CompiledModelOptions.property.code">code</a></code> | <code>aws-cdk-lib.aws_s3_deployment.ISource</code> | Code used for inference. |
| <code><a href="#aws-cdk-neuronx-patterns.CompiledModelOptions.property.compiledArtifactPath">compiledArtifactPath</a></code> | <code>string</code> | The path where compiled artifacts (i.e. xxx.neff) are stored. |
| <code><a href="#aws-cdk-neuronx-patterns.CompiledModelOptions.property.compileOptions">compileOptions</a></code> | <code><a href="#aws-cdk-neuronx-patterns.CompileOptions">CompileOptions</a></code> | Neuronx compile options. |
| <code><a href="#aws-cdk-neuronx-patterns.CompiledModelOptions.property.modelIdOrPath">modelIdOrPath</a></code> | <code>string</code> | Model ID or saved path. |

---

##### `code`<sup>Optional</sup> <a name="code" id="aws-cdk-neuronx-patterns.CompiledModelOptions.property.code"></a>

```typescript
public readonly code: ISource;
```

- *Type:* aws-cdk-lib.aws_s3_deployment.ISource
- *Default:* using the predefined code

Code used for inference.

---

##### `compiledArtifactPath`<sup>Optional</sup> <a name="compiledArtifactPath" id="aws-cdk-neuronx-patterns.CompiledModelOptions.property.compiledArtifactPath"></a>

```typescript
public readonly compiledArtifactPath: string;
```

- *Type:* string
- *Default:* "./compiled"

The path where compiled artifacts (i.e. xxx.neff) are stored.

---

##### `compileOptions`<sup>Optional</sup> <a name="compileOptions" id="aws-cdk-neuronx-patterns.CompiledModelOptions.property.compileOptions"></a>

```typescript
public readonly compileOptions: CompileOptions;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.CompileOptions">CompileOptions</a>
- *Default:* Each properties are set default.

Neuronx compile options.

---

##### `modelIdOrPath`<sup>Optional</sup> <a name="modelIdOrPath" id="aws-cdk-neuronx-patterns.CompiledModelOptions.property.modelIdOrPath"></a>

```typescript
public readonly modelIdOrPath: string;
```

- *Type:* string
- *Default:* "./model"

Model ID or saved path.

---

### CompileOptions <a name="CompileOptions" id="aws-cdk-neuronx-patterns.CompileOptions"></a>

Compile options.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.CompileOptions.Initializer"></a>

```typescript
import { CompileOptions } from 'aws-cdk-neuronx-patterns'

const compileOptions: CompileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.CompileOptions.property.nPositions">nPositions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.CompileOptions.property.optLevel">optLevel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.OptLevel">OptLevel</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.CompileOptions.property.quantDtype">quantDtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.QuantDtype">QuantDtype</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.CompileOptions.property.tpDegree">tpDegree</a></code> | <code>number</code> | *No description.* |

---

##### `nPositions`<sup>Optional</sup> <a name="nPositions" id="aws-cdk-neuronx-patterns.CompileOptions.property.nPositions"></a>

```typescript
public readonly nPositions: number;
```

- *Type:* number
- *Default:* 4096

---

##### `optLevel`<sup>Optional</sup> <a name="optLevel" id="aws-cdk-neuronx-patterns.CompileOptions.property.optLevel"></a>

```typescript
public readonly optLevel: OptLevel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.OptLevel">OptLevel</a>
- *Default:* OptLevel.BEST_BALANCE

---

##### `quantDtype`<sup>Optional</sup> <a name="quantDtype" id="aws-cdk-neuronx-patterns.CompileOptions.property.quantDtype"></a>

```typescript
public readonly quantDtype: QuantDtype;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.QuantDtype">QuantDtype</a>
- *Default:* No quant

---

##### `tpDegree`<sup>Optional</sup> <a name="tpDegree" id="aws-cdk-neuronx-patterns.CompileOptions.property.tpDegree"></a>

```typescript
public readonly tpDegree: number;
```

- *Type:* number
- *Default:* calc from parameters and quantDtype

---

### CompileRuntime <a name="CompileRuntime" id="aws-cdk-neuronx-patterns.CompileRuntime"></a>

Compile runtime.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.CompileRuntime.Initializer"></a>

```typescript
import { CompileRuntime } from 'aws-cdk-neuronx-patterns'

const compileRuntime: CompileRuntime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.CompileRuntime.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | An image of the container where the compile job is executed. |
| <code><a href="#aws-cdk-neuronx-patterns.CompileRuntime.property.neuronxVersion">neuronxVersion</a></code> | <code>string</code> | Neuronx version included in container image. |

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.CompileRuntime.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

An image of the container where the compile job is executed.

---

##### `neuronxVersion`<sup>Required</sup> <a name="neuronxVersion" id="aws-cdk-neuronx-patterns.CompileRuntime.property.neuronxVersion"></a>

```typescript
public readonly neuronxVersion: string;
```

- *Type:* string

Neuronx version included in container image.

---

### ModelOptions <a name="ModelOptions" id="aws-cdk-neuronx-patterns.ModelOptions"></a>

Compile target model basic infromation.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.ModelOptions.Initializer"></a>

```typescript
import { ModelOptions } from 'aws-cdk-neuronx-patterns'

const modelOptions: ModelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ModelOptions.property.parameters">parameters</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a></code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.ModelOptions.property.parameters"></a>

```typescript
public readonly parameters: Parameters;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a>

---

### NeuronxCompileProps <a name="NeuronxCompileProps" id="aws-cdk-neuronx-patterns.NeuronxCompileProps"></a>

Props of NeuronxCompile.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.Initializer"></a>

```typescript
import { NeuronxCompileProps } from 'aws-cdk-neuronx-patterns'

const neuronxCompileProps: NeuronxCompileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket to upload compiled artifacts. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.model">model</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Model">Model</a></code> | The model to be compiled. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC in which this will launch compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.compileOptions">compileOptions</a></code> | <code><a href="#aws-cdk-neuronx-patterns.CompileOptions">CompileOptions</a></code> | Neuronx compile options. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.instanceType">instanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | The instance type of compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.runtime">runtime</a></code> | <code><a href="#aws-cdk-neuronx-patterns.CompileRuntime">CompileRuntime</a></code> | Compile runtime. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.spot">spot</a></code> | <code>boolean</code> | Whether or not to use spot instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.volumeSize">volumeSize</a></code> | <code>aws-cdk-lib.Size</code> | The root volume of worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompileProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The VPC Subnets this Compute Environment will launch instances in. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket to upload compiled artifacts.

---

##### `model`<sup>Required</sup> <a name="model" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.model"></a>

```typescript
public readonly model: Model;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Model">Model</a>

The model to be compiled.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC in which this will launch compile worker instance.

---

##### `compileOptions`<sup>Optional</sup> <a name="compileOptions" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.compileOptions"></a>

```typescript
public readonly compileOptions: CompileOptions;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.CompileOptions">CompileOptions</a>
- *Default:* Each properties are set default.

Neuronx compile options.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.instanceType"></a>

```typescript
public readonly instanceType: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>

The instance type of compile worker instance.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.runtime"></a>

```typescript
public readonly runtime: CompileRuntime;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.CompileRuntime">CompileRuntime</a>
- *Default:* { neuronxSdkVersion: "2.19.0", image: ContainerImage.fromRegistry("public.ecr.aws/neuron/pytorch-training-neuronx:2.1.2-neuronx-py310-sdk2.19.0-ubuntu20.04")}

Compile runtime.

---

##### `spot`<sup>Optional</sup> <a name="spot" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not to use spot instances.

Spot instances are less expensive EC2 instances that can be reclaimed by EC2 at any time; your job will be given two minutes of notice before reclamation.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.volumeSize"></a>

```typescript
public readonly volumeSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* N bilion parameters * 5GiB EBS

The root volume of worker instance.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="aws-cdk-neuronx-patterns.NeuronxCompileProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* new subnets will be created

The VPC Subnets this Compute Environment will launch instances in.

---

### TransformersNeuronxSageMakerRealtimeInferenceEndpointProps <a name="TransformersNeuronxSageMakerRealtimeInferenceEndpointProps" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.Initializer"></a>

```typescript
import { TransformersNeuronxSageMakerRealtimeInferenceEndpointProps } from 'aws-cdk-neuronx-patterns'

const transformersNeuronxSageMakerRealtimeInferenceEndpointProps: TransformersNeuronxSageMakerRealtimeInferenceEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.modelData">modelData</a></code> | <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData">TransformersNeuronxSageMakerInferenceModelData</a></code> | Model data for SageMaker inference. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.containerStartupHealthCheckTimeout">containerStartupHealthCheckTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout value, for your inference container to pass health check by SageMaker Hosting. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | A map of environment variables to pass into the container. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.image">image</a></code> | <code>@aws-cdk/aws-sagemaker-alpha.ContainerImage</code> | An image of the container where the inference job is executed. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.instanceType">instanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | The instance type of compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.modelDataDownloadTimeout">modelDataDownloadTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout value, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant. |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.volumeSize">volumeSize</a></code> | <code>aws-cdk-lib.Size</code> | The size, of the ML storage volume attached to individual inference instance associated with the production variant. |

---

##### `modelData`<sup>Required</sup> <a name="modelData" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.modelData"></a>

```typescript
public readonly modelData: TransformersNeuronxSageMakerInferenceModelData;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData">TransformersNeuronxSageMakerInferenceModelData</a>

Model data for SageMaker inference.

The model data requires at least compiled artifacts.

---

##### `containerStartupHealthCheckTimeout`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeout" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.containerStartupHealthCheckTimeout"></a>

```typescript
public readonly containerStartupHealthCheckTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60 seconds, when set the `modelDataDownloadTimeout` then use same value (max 60 minutes)

The timeout value, for your inference container to pass health check by SageMaker Hosting.

> [https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests)

---

##### `environment`<sup>Optional</sup> <a name="environment" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* Only the predefined environment variables required to use Neuronx have been set.

A map of environment variables to pass into the container.

---

##### `image`<sup>Optional</sup> <a name="image" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* @aws-cdk/aws-sagemaker-alpha.ContainerImage

An image of the container where the inference job is executed.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.instanceType"></a>

```typescript
public readonly instanceType: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>
- *Default:* It is determined automatically according to the number of model parameters and compilation options.

The instance type of compile worker instance.

---

##### `modelDataDownloadTimeout`<sup>Optional</sup> <a name="modelDataDownloadTimeout" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.modelDataDownloadTimeout"></a>

```typescript
public readonly modelDataDownloadTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 60 seconds, when `volumeSize` larger than 30GB then 1GB x 15 seconds (max 60 minutes)

The timeout value, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpointProps.property.volumeSize"></a>

```typescript
public readonly volumeSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 3 GB per billion parameter (Max 512 GB)

The size, of the ML storage volume attached to individual inference instance associated with the production variant.

Currently only Amazon EBS gp2 storage volumes are supported.

> [https://aws.amazon.com/jp/releasenotes/host-instance-storage-volumes-table](https://aws.amazon.com/jp/releasenotes/host-instance-storage-volumes-table)

---

## Classes <a name="Classes" id="Classes"></a>

### Inferentia2Chips <a name="Inferentia2Chips" id="aws-cdk-neuronx-patterns.Inferentia2Chips"></a>

- *Implements:* <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.Inferentia2Chips.Initializer"></a>

```typescript
import { Inferentia2Chips } from 'aws-cdk-neuronx-patterns'

new Inferentia2Chips(chips: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Inferentia2Chips.Initializer.parameter.chips">chips</a></code> | <code>number</code> | *No description.* |

---

##### `chips`<sup>Required</sup> <a name="chips" id="aws-cdk-neuronx-patterns.Inferentia2Chips.Initializer.parameter.chips"></a>

- *Type:* number

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Inferentia2Chips.property.acceleratorMemory">acceleratorMemory</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Inferentia2Chips.property.chips">chips</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Inferentia2Chips.property.neuronxCores">neuronxCores</a></code> | <code>number</code> | *No description.* |

---

##### `acceleratorMemory`<sup>Required</sup> <a name="acceleratorMemory" id="aws-cdk-neuronx-patterns.Inferentia2Chips.property.acceleratorMemory"></a>

```typescript
public readonly acceleratorMemory: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `chips`<sup>Required</sup> <a name="chips" id="aws-cdk-neuronx-patterns.Inferentia2Chips.property.chips"></a>

```typescript
public readonly chips: number;
```

- *Type:* number

---

##### `neuronxCores`<sup>Required</sup> <a name="neuronxCores" id="aws-cdk-neuronx-patterns.Inferentia2Chips.property.neuronxCores"></a>

```typescript
public readonly neuronxCores: number;
```

- *Type:* number

---


### Model <a name="Model" id="aws-cdk-neuronx-patterns.Model"></a>

Compile target model.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Model.fromBucket">fromBucket</a></code> | model informations at S3 Bucket. |
| <code><a href="#aws-cdk-neuronx-patterns.Model.fromHuggingFace">fromHuggingFace</a></code> | model informations at HuggingFace. |

---

##### `fromBucket` <a name="fromBucket" id="aws-cdk-neuronx-patterns.Model.fromBucket"></a>

```typescript
import { Model } from 'aws-cdk-neuronx-patterns'

Model.fromBucket(bucket: IBucket, prefix: string, options: ModelOptions)
```

model informations at S3 Bucket.

###### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.Model.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

Model stored S3 Bucket.

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="aws-cdk-neuronx-patterns.Model.fromBucket.parameter.prefix"></a>

- *Type:* string

Model stored objects prefix.

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-neuronx-patterns.Model.fromBucket.parameter.options"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelOptions">ModelOptions</a>

model basic infromation.

---

##### `fromHuggingFace` <a name="fromHuggingFace" id="aws-cdk-neuronx-patterns.Model.fromHuggingFace"></a>

```typescript
import { Model } from 'aws-cdk-neuronx-patterns'

Model.fromHuggingFace(modelId: string, options?: ModelOptions)
```

model informations at HuggingFace.

###### `modelId`<sup>Required</sup> <a name="modelId" id="aws-cdk-neuronx-patterns.Model.fromHuggingFace.parameter.modelId"></a>

- *Type:* string

model id on the HuggingFace.

---

###### `options`<sup>Optional</sup> <a name="options" id="aws-cdk-neuronx-patterns.Model.fromHuggingFace.parameter.options"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelOptions">ModelOptions</a>

model basic infromation.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.options">options</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ModelOptions">ModelOptions</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="aws-cdk-neuronx-patterns.Model.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="aws-cdk-neuronx-patterns.Model.property.options"></a>

```typescript
public readonly options: ModelOptions;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelOptions">ModelOptions</a>

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.Model.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="aws-cdk-neuronx-patterns.Model.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---


### NeuronxInstanceType <a name="NeuronxInstanceType" id="aws-cdk-neuronx-patterns.NeuronxInstanceType"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.toString">toString</a></code> | Return the instance type as a string. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.toString"></a>

```typescript
public toString(): string
```

Return the instance type as a string.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.acceleratorChips">acceleratorChips</a></code> | <code><a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.memory">memory</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.vCpu">vCpu</a></code> | <code>number</code> | *No description.* |

---

##### `acceleratorChips`<sup>Required</sup> <a name="acceleratorChips" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.acceleratorChips"></a>

```typescript
public readonly acceleratorChips: IAcceleratorChips;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `memory`<sup>Required</sup> <a name="memory" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.memory"></a>

```typescript
public readonly memory: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_24XLARGE">INF2_24XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | ml.inf2.24xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_48XLARGE">INF2_48XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | ml.inf2.48xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_8XLARGE">INF2_8XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | ml.inf2.8xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_XLARGE">INF2_XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | ml.inf2.xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_2XLARGE">TRN1_2XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | ml.trn1.2xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_32XLARGE">TRN1_32XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a></code> | ml.trn1.32xlarge. |

---

##### `INF2_24XLARGE`<sup>Required</sup> <a name="INF2_24XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_24XLARGE"></a>

```typescript
public readonly INF2_24XLARGE: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>

ml.inf2.24xlarge.

---

##### `INF2_48XLARGE`<sup>Required</sup> <a name="INF2_48XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_48XLARGE"></a>

```typescript
public readonly INF2_48XLARGE: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>

ml.inf2.48xlarge.

---

##### `INF2_8XLARGE`<sup>Required</sup> <a name="INF2_8XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_8XLARGE"></a>

```typescript
public readonly INF2_8XLARGE: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>

ml.inf2.8xlarge.

---

##### `INF2_XLARGE`<sup>Required</sup> <a name="INF2_XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_XLARGE"></a>

```typescript
public readonly INF2_XLARGE: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>

ml.inf2.xlarge.

---

##### `TRN1_2XLARGE`<sup>Required</sup> <a name="TRN1_2XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_2XLARGE"></a>

```typescript
public readonly TRN1_2XLARGE: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>

ml.trn1.2xlarge.

---

##### `TRN1_32XLARGE`<sup>Required</sup> <a name="TRN1_32XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_32XLARGE"></a>

```typescript
public readonly TRN1_32XLARGE: NeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType">NeuronxInstanceType</a>

ml.trn1.32xlarge.

---

### Parameters <a name="Parameters" id="aws-cdk-neuronx-patterns.Parameters"></a>

Represents the amount of parameters.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Parameters.toBilion">toBilion</a></code> | Return this number of parameters as bilion. |

---

##### `toBilion` <a name="toBilion" id="aws-cdk-neuronx-patterns.Parameters.toBilion"></a>

```typescript
public toBilion(): number
```

Return this number of parameters as bilion.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Parameters.billion">billion</a></code> | Create a Parameters representing an amount bilion. |

---

##### `billion` <a name="billion" id="aws-cdk-neuronx-patterns.Parameters.billion"></a>

```typescript
import { Parameters } from 'aws-cdk-neuronx-patterns'

Parameters.billion(parameters: number)
```

Create a Parameters representing an amount bilion.

###### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.Parameters.billion.parameter.parameters"></a>

- *Type:* number

number of parameters bilionX.

---



### TrainiumChips <a name="TrainiumChips" id="aws-cdk-neuronx-patterns.TrainiumChips"></a>

- *Implements:* <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.TrainiumChips.Initializer"></a>

```typescript
import { TrainiumChips } from 'aws-cdk-neuronx-patterns'

new TrainiumChips(chips: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TrainiumChips.Initializer.parameter.chips">chips</a></code> | <code>number</code> | *No description.* |

---

##### `chips`<sup>Required</sup> <a name="chips" id="aws-cdk-neuronx-patterns.TrainiumChips.Initializer.parameter.chips"></a>

- *Type:* number

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TrainiumChips.property.acceleratorMemory">acceleratorMemory</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TrainiumChips.property.chips">chips</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TrainiumChips.property.neuronxCores">neuronxCores</a></code> | <code>number</code> | *No description.* |

---

##### `acceleratorMemory`<sup>Required</sup> <a name="acceleratorMemory" id="aws-cdk-neuronx-patterns.TrainiumChips.property.acceleratorMemory"></a>

```typescript
public readonly acceleratorMemory: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `chips`<sup>Required</sup> <a name="chips" id="aws-cdk-neuronx-patterns.TrainiumChips.property.chips"></a>

```typescript
public readonly chips: number;
```

- *Type:* number

---

##### `neuronxCores`<sup>Required</sup> <a name="neuronxCores" id="aws-cdk-neuronx-patterns.TrainiumChips.property.neuronxCores"></a>

```typescript
public readonly neuronxCores: number;
```

- *Type:* number

---


### TransformersNeuronxSageMakerInferenceModelData <a name="TransformersNeuronxSageMakerInferenceModelData" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.bind"></a>

```typescript
public bind(scope: Construct, model: IModel): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.bind.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `model`<sup>Required</sup> <a name="model" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.bind.parameter.model"></a>

- *Type:* @aws-cdk/aws-sagemaker-alpha.IModel

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromBucket">fromBucket</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile">fromNeuronxCompile</a></code> | *No description.* |

---

##### `fromBucket` <a name="fromBucket" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromBucket"></a>

```typescript
import { TransformersNeuronxSageMakerInferenceModelData } from 'aws-cdk-neuronx-patterns'

TransformersNeuronxSageMakerInferenceModelData.fromBucket(bucket: IBucket, prefix: string, options: BucketCompiledModelOptions)
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromBucket.parameter.prefix"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromBucket.parameter.options"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.BucketCompiledModelOptions">BucketCompiledModelOptions</a>

---

##### `fromNeuronxCompile` <a name="fromNeuronxCompile" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile"></a>

```typescript
import { TransformersNeuronxSageMakerInferenceModelData } from 'aws-cdk-neuronx-patterns'

TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile(compile: NeuronxCompile, code?: ISource)
```

###### `compile`<sup>Required</sup> <a name="compile" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile.parameter.compile"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxCompile">NeuronxCompile</a>

---

###### `code`<sup>Optional</sup> <a name="code" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile.parameter.code"></a>

- *Type:* aws-cdk-lib.aws_s3_deployment.ISource

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.code">code</a></code> | <code>aws-cdk-lib.aws_s3_deployment.ISource</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.compiledArtifactS3Prefix">compiledArtifactS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.nPositions">nPositions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.optLevel">optLevel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.OptLevel">OptLevel</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.parameters">parameters</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.tpDegree">tpDegree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.compiledArtifactPath">compiledArtifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.modelIdOrPath">modelIdOrPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.quantDtype">quantDtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.QuantDtype">QuantDtype</a></code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `code`<sup>Required</sup> <a name="code" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.code"></a>

```typescript
public readonly code: ISource;
```

- *Type:* aws-cdk-lib.aws_s3_deployment.ISource

---

##### `compiledArtifactS3Prefix`<sup>Required</sup> <a name="compiledArtifactS3Prefix" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.compiledArtifactS3Prefix"></a>

```typescript
public readonly compiledArtifactS3Prefix: string;
```

- *Type:* string

---

##### `nPositions`<sup>Required</sup> <a name="nPositions" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.nPositions"></a>

```typescript
public readonly nPositions: number;
```

- *Type:* number

---

##### `optLevel`<sup>Required</sup> <a name="optLevel" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.optLevel"></a>

```typescript
public readonly optLevel: OptLevel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.OptLevel">OptLevel</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.parameters"></a>

```typescript
public readonly parameters: Parameters;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a>

---

##### `tpDegree`<sup>Required</sup> <a name="tpDegree" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.tpDegree"></a>

```typescript
public readonly tpDegree: number;
```

- *Type:* number

---

##### `compiledArtifactPath`<sup>Optional</sup> <a name="compiledArtifactPath" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.compiledArtifactPath"></a>

```typescript
public readonly compiledArtifactPath: string;
```

- *Type:* string

---

##### `modelIdOrPath`<sup>Optional</sup> <a name="modelIdOrPath" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.modelIdOrPath"></a>

```typescript
public readonly modelIdOrPath: string;
```

- *Type:* string

---

##### `quantDtype`<sup>Optional</sup> <a name="quantDtype" id="aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerInferenceModelData.property.quantDtype"></a>

```typescript
public readonly quantDtype: QuantDtype;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.QuantDtype">QuantDtype</a>

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAcceleratorChips <a name="IAcceleratorChips" id="aws-cdk-neuronx-patterns.IAcceleratorChips"></a>

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.Inferentia2Chips">Inferentia2Chips</a>, <a href="#aws-cdk-neuronx-patterns.TrainiumChips">TrainiumChips</a>, <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.IAcceleratorChips.property.acceleratorMemory">acceleratorMemory</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.IAcceleratorChips.property.chips">chips</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.IAcceleratorChips.property.neuronxCores">neuronxCores</a></code> | <code>number</code> | *No description.* |

---

##### `acceleratorMemory`<sup>Required</sup> <a name="acceleratorMemory" id="aws-cdk-neuronx-patterns.IAcceleratorChips.property.acceleratorMemory"></a>

```typescript
public readonly acceleratorMemory: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `chips`<sup>Required</sup> <a name="chips" id="aws-cdk-neuronx-patterns.IAcceleratorChips.property.chips"></a>

```typescript
public readonly chips: number;
```

- *Type:* number

---

##### `neuronxCores`<sup>Required</sup> <a name="neuronxCores" id="aws-cdk-neuronx-patterns.IAcceleratorChips.property.neuronxCores"></a>

```typescript
public readonly neuronxCores: number;
```

- *Type:* number

---

## Enums <a name="Enums" id="Enums"></a>

### OptLevel <a name="OptLevel" id="aws-cdk-neuronx-patterns.OptLevel"></a>

Optimization level.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.OptLevel.MINIMIZING_COMPILE_TIME">MINIMIZING_COMPILE_TIME</a></code> | enables the core performance optimizations in the compiler, while also minimizing compile time. |
| <code><a href="#aws-cdk-neuronx-patterns.OptLevel.BEST_BALANCE">BEST_BALANCE</a></code> | provides the best balance between model performance and compile time. |
| <code><a href="#aws-cdk-neuronx-patterns.OptLevel.MODEL_EXECUTION_PERFORMANCE">MODEL_EXECUTION_PERFORMANCE</a></code> | may provide additional model execution performance but may incur longer compile times and higher host memory usage during model compilation. |

---

##### `MINIMIZING_COMPILE_TIME` <a name="MINIMIZING_COMPILE_TIME" id="aws-cdk-neuronx-patterns.OptLevel.MINIMIZING_COMPILE_TIME"></a>

enables the core performance optimizations in the compiler, while also minimizing compile time.

---


##### `BEST_BALANCE` <a name="BEST_BALANCE" id="aws-cdk-neuronx-patterns.OptLevel.BEST_BALANCE"></a>

provides the best balance between model performance and compile time.

---


##### `MODEL_EXECUTION_PERFORMANCE` <a name="MODEL_EXECUTION_PERFORMANCE" id="aws-cdk-neuronx-patterns.OptLevel.MODEL_EXECUTION_PERFORMANCE"></a>

may provide additional model execution performance but may incur longer compile times and higher host memory usage during model compilation.

---


### QuantDtype <a name="QuantDtype" id="aws-cdk-neuronx-patterns.QuantDtype"></a>

Quant data type.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.QuantDtype.S8">S8</a></code> | int8 weight storage. |

---

##### `S8` <a name="S8" id="aws-cdk-neuronx-patterns.QuantDtype.S8"></a>

int8 weight storage.

---

