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
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Prefix">compiledArtifactS3Prefix</a></code> | <code>string</code> | S3 Prefix that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompile.property.compiledArtifactS3Url">compiledArtifactS3Url</a></code> | <code>string</code> | S3 URL that compiled artifact uploaded. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronxCompile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

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


## Structs <a name="Structs" id="Structs"></a>

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
- *Default:* 4092

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
| <code><a href="#aws-cdk-neuronx-patterns.Model.fromHuggingFace">fromHuggingFace</a></code> | model informations at HuggingFace. |

---

##### `fromHuggingFace` <a name="fromHuggingFace" id="aws-cdk-neuronx-patterns.Model.fromHuggingFace"></a>

```typescript
import { Model } from 'aws-cdk-neuronx-patterns'

Model.fromHuggingFace(modelId: string, options: ModelOptions)
```

model informations at HuggingFace.

###### `modelId`<sup>Required</sup> <a name="modelId" id="aws-cdk-neuronx-patterns.Model.fromHuggingFace.parameter.modelId"></a>

- *Type:* string

model id on the HuggingFace.

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-neuronx-patterns.Model.fromHuggingFace.parameter.options"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelOptions">ModelOptions</a>

model basic infromation.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.options">options</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ModelOptions">ModelOptions</a></code> | *No description.* |

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



## Protocols <a name="Protocols" id="Protocols"></a>

### IAcceleratorChips <a name="IAcceleratorChips" id="aws-cdk-neuronx-patterns.IAcceleratorChips"></a>

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.Inferentia2Chips">Inferentia2Chips</a>, <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>


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

