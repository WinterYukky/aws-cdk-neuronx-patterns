# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadBalancedNeuronxService <a name="ApplicationLoadBalancedNeuronxService" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.Initializer"></a>

```typescript
import { ApplicationLoadBalancedNeuronxService } from 'aws-cdk-neuronx-patterns'

new ApplicationLoadBalancedNeuronxService(scope: Construct, id: string, props: ApplicationLoadBalancedNeuronxServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps">ApplicationLoadBalancedNeuronxServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps">ApplicationLoadBalancedNeuronxServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.isConstruct"></a>

```typescript
import { ApplicationLoadBalancedNeuronxService } from 'aws-cdk-neuronx-patterns'

ApplicationLoadBalancedNeuronxService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that hosts the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.listener">listener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener</code> | The listener for the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | The Application Load Balancer for the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.targetGroup">targetGroup</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationTargetGroup</code> | The target group for the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | Certificate Manager certificate to associate with the load balancer. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.internalDesiredCount">internalDesiredCount</a></code> | <code>number</code> | The desired number of instantiations of the task definition to keep running on the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.redirectListener">redirectListener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener</code> | The redirect listener for the service if redirectHTTP is enabled. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2Service</code> | The EC2 service in this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2TaskDefinition</code> | The EC2 Task Definition in this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The cluster that hosts the service.

---

##### `listener`<sup>Required</sup> <a name="listener" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.listener"></a>

```typescript
public readonly listener: ApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener

The listener for the service.

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The Application Load Balancer for the service.

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.targetGroup"></a>

```typescript
public readonly targetGroup: ApplicationTargetGroup;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationTargetGroup

The target group for the service.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

Certificate Manager certificate to associate with the load balancer.

---

##### `internalDesiredCount`<sup>Optional</sup> <a name="internalDesiredCount" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.internalDesiredCount"></a>

```typescript
public readonly internalDesiredCount: number;
```

- *Type:* number

The desired number of instantiations of the task definition to keep running on the service.

The default is 1 for all new services and uses the existing services desired count
when updating an existing service if one is not provided.

---

##### `redirectListener`<sup>Optional</sup> <a name="redirectListener" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.redirectListener"></a>

```typescript
public readonly redirectListener: ApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener

The redirect listener for the service if redirectHTTP is enabled.

---

##### `service`<sup>Required</sup> <a name="service" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.service"></a>

```typescript
public readonly service: Ec2Service;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service

The EC2 service in this construct.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxService.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: Ec2TaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2TaskDefinition

The EC2 Task Definition in this construct.

---


### ApplicationLoadBalancedVllmNxDInferenceService <a name="ApplicationLoadBalancedVllmNxDInferenceService" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService"></a>

ApplicationLoadBalancedVllmNxDInferenceService is a wrapper of ApplicationLoadBalancedNeuronxServiceBase.

It provides a simple way to deploy vLLM on NxD Inference.

*Example*

```typescript
const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-7b-chat"),
});
const compiledModel = compiler.compile();
const taskDefinition = new VllmNxdInferenceTaskDefinition(
  this,
  "TaskDefinition",
  {
    vpc,
    compiledModel,
  },
);
new ApplicationLoadBalancedVllmNxDInferenceService(this, "Service", {
  taskDefinition,
});
```


#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.Initializer"></a>

```typescript
import { ApplicationLoadBalancedVllmNxDInferenceService } from 'aws-cdk-neuronx-patterns'

new ApplicationLoadBalancedVllmNxDInferenceService(scope: Construct, id: string, props: ApplicationLoadBalancedVllmNxDInferenceServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps">ApplicationLoadBalancedVllmNxDInferenceServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps">ApplicationLoadBalancedVllmNxDInferenceServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.isConstruct"></a>

```typescript
import { ApplicationLoadBalancedVllmNxDInferenceService } from 'aws-cdk-neuronx-patterns'

ApplicationLoadBalancedVllmNxDInferenceService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.listener">listener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2Service</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.targetGroup">targetGroup</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationTargetGroup</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2TaskDefinition</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `listener`<sup>Required</sup> <a name="listener" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.listener"></a>

```typescript
public readonly listener: ApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationListener

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

---

##### `service`<sup>Required</sup> <a name="service" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.service"></a>

```typescript
public readonly service: Ec2Service;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2Service

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.targetGroup"></a>

```typescript
public readonly targetGroup: ApplicationTargetGroup;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationTargetGroup

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceService.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: Ec2TaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2TaskDefinition

---


### NeuronOptimizedMachineImage <a name="NeuronOptimizedMachineImage" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage"></a>

- *Implements:* aws-cdk-lib.aws_ec2.IMachineImage

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.Initializer"></a>

```typescript
import { NeuronOptimizedMachineImage } from 'aws-cdk-neuronx-patterns'

new NeuronOptimizedMachineImage(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.getImage">getImage</a></code> | Return the image to use in the given context. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `getImage` <a name="getImage" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.getImage"></a>

```typescript
public getImage(_scope: Construct): MachineImageConfig
```

Return the image to use in the given context.

###### `_scope`<sup>Required</sup> <a name="_scope" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.getImage.parameter._scope"></a>

- *Type:* constructs.Construct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.isConstruct"></a>

```typescript
import { NeuronOptimizedMachineImage } from 'aws-cdk-neuronx-patterns'

NeuronOptimizedMachineImage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.property.size">size</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |

---

##### `size`<sup>Required</sup> <a name="size" id="aws-cdk-neuronx-patterns.NeuronOptimizedMachineImage.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* aws-cdk-lib.Size

---

### NeuronxBatch <a name="NeuronxBatch" id="aws-cdk-neuronx-patterns.NeuronxBatch"></a>

Neuronx batch construct.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronxBatch.Initializer"></a>

```typescript
import { NeuronxBatch } from 'aws-cdk-neuronx-patterns'

new NeuronxBatch(scope: Construct, id: string, props: NeuronxBatchProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps">NeuronxBatchProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxBatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxBatch.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxBatch.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps">NeuronxBatchProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronxBatch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.NeuronxBatch.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.NeuronxBatch.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.NeuronxBatch.isConstruct"></a>

```typescript
import { NeuronxBatch } from 'aws-cdk-neuronx-patterns'

NeuronxBatch.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.NeuronxBatch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.property.computeEnvironment">computeEnvironment</a></code> | <code>aws-cdk-lib.aws_batch.ManagedEc2EcsComputeEnvironment</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatch.property.jobDefinition">jobDefinition</a></code> | <code>aws-cdk-lib.aws_batch.EcsJobDefinition</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronxBatch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `computeEnvironment`<sup>Required</sup> <a name="computeEnvironment" id="aws-cdk-neuronx-patterns.NeuronxBatch.property.computeEnvironment"></a>

```typescript
public readonly computeEnvironment: ManagedEc2EcsComputeEnvironment;
```

- *Type:* aws-cdk-lib.aws_batch.ManagedEc2EcsComputeEnvironment

---

##### `jobDefinition`<sup>Required</sup> <a name="jobDefinition" id="aws-cdk-neuronx-patterns.NeuronxBatch.property.jobDefinition"></a>

```typescript
public readonly jobDefinition: EcsJobDefinition;
```

- *Type:* aws-cdk-lib.aws_batch.EcsJobDefinition

---


### NeuronxBatchComputeEnvironment <a name="NeuronxBatchComputeEnvironment" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment"></a>

- *Implements:* aws-cdk-lib.aws_batch.IComputeEnvironment

Neuronx batch construct.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.Initializer"></a>

```typescript
import { NeuronxBatchComputeEnvironment } from 'aws-cdk-neuronx-patterns'

new NeuronxBatchComputeEnvironment(scope: Construct, id: string, props: NeuronxBatchComputeEnvironmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps">NeuronxBatchComputeEnvironmentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps">NeuronxBatchComputeEnvironmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.isConstruct"></a>

```typescript
import { NeuronxBatchComputeEnvironment } from 'aws-cdk-neuronx-patterns'

NeuronxBatchComputeEnvironment.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.computeEnvironmentArn">computeEnvironmentArn</a></code> | <code>string</code> | The ARN of this compute environment. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>string</code> | The name of the ComputeEnvironment. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.computeEnvironmentRef">computeEnvironmentRef</a></code> | <code>aws-cdk-lib.interfaces.aws_batch.ComputeEnvironmentReference</code> | A reference to a ComputeEnvironment resource. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.enabled">enabled</a></code> | <code>boolean</code> | Whether or not this ComputeEnvironment can accept jobs from a Queue. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.instanceRole">instanceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.serviceRole">serviceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role Batch uses to perform actions on your behalf in your account, such as provision instances to run your jobs. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `computeEnvironmentArn`<sup>Required</sup> <a name="computeEnvironmentArn" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.computeEnvironmentArn"></a>

```typescript
public readonly computeEnvironmentArn: string;
```

- *Type:* string

The ARN of this compute environment.

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="computeEnvironmentName" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.computeEnvironmentName"></a>

```typescript
public readonly computeEnvironmentName: string;
```

- *Type:* string

The name of the ComputeEnvironment.

---

##### `computeEnvironmentRef`<sup>Required</sup> <a name="computeEnvironmentRef" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.computeEnvironmentRef"></a>

```typescript
public readonly computeEnvironmentRef: ComputeEnvironmentReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_batch.ComputeEnvironmentReference

A reference to a ComputeEnvironment resource.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Whether or not this ComputeEnvironment can accept jobs from a Queue.

Enabled ComputeEnvironments can accept jobs from a Queue and
can scale instances up or down.
Disabled ComputeEnvironments cannot accept jobs from a Queue or
scale instances up or down.

If you change a ComputeEnvironment from enabled to disabled while it is executing jobs,
Jobs in the `STARTED` or `RUNNING` states will not
be interrupted. As jobs complete, the ComputeEnvironment will scale instances down to `minvCpus`.

To ensure you aren't billed for unused capacity, set `minvCpus` to `0`.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `instanceRole`<sup>Required</sup> <a name="instanceRole" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.instanceRole"></a>

```typescript
public readonly instanceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironment.property.serviceRole"></a>

```typescript
public readonly serviceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role Batch uses to perform actions on your behalf in your account, such as provision instances to run your jobs.

---


### NeuronxBatchEcsJobDefinition <a name="NeuronxBatchEcsJobDefinition" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition"></a>

- *Implements:* aws-cdk-lib.aws_batch.IJobDefinition

Neuronx batch construct.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.Initializer"></a>

```typescript
import { NeuronxBatchEcsJobDefinition } from 'aws-cdk-neuronx-patterns'

new NeuronxBatchEcsJobDefinition(scope: Construct, id: string, props: NeuronxBatchEcsJobDefinitionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps">NeuronxBatchEcsJobDefinitionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps">NeuronxBatchEcsJobDefinitionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.addRetryStrategy">addRetryStrategy</a></code> | Add a RetryStrategy to this JobDefinition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.grantSubmitJob">grantSubmitJob</a></code> | Grants the `batch:submitJob` permission to the identity on both this job definition and the `queue`. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addRetryStrategy` <a name="addRetryStrategy" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.addRetryStrategy"></a>

```typescript
public addRetryStrategy(strategy: RetryStrategy): void
```

Add a RetryStrategy to this JobDefinition.

###### `strategy`<sup>Required</sup> <a name="strategy" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.addRetryStrategy.parameter.strategy"></a>

- *Type:* aws-cdk-lib.aws_batch.RetryStrategy

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grantSubmitJob` <a name="grantSubmitJob" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.grantSubmitJob"></a>

```typescript
public grantSubmitJob(identity: IGrantable, queue: IJobQueue): void
```

Grants the `batch:submitJob` permission to the identity on both this job definition and the `queue`.

###### `identity`<sup>Required</sup> <a name="identity" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.grantSubmitJob.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `queue`<sup>Required</sup> <a name="queue" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.grantSubmitJob.parameter.queue"></a>

- *Type:* aws-cdk-lib.aws_batch.IJobQueue

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.isConstruct"></a>

```typescript
import { NeuronxBatchEcsJobDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxBatchEcsJobDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.jobDefinitionArn">jobDefinitionArn</a></code> | <code>string</code> | The ARN of this job definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | The name of this job definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.jobDefinitionRef">jobDefinitionRef</a></code> | <code>aws-cdk-lib.interfaces.aws_batch.JobDefinitionReference</code> | A reference to a JobDefinition resource. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.retryStrategies">retryStrategies</a></code> | <code>aws-cdk-lib.aws_batch.RetryStrategy[]</code> | Defines the retry behavior for this job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | The default parameters passed to the container These parameters can be referenced in the `command` that you give to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The number of times to retry a job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.schedulingPriority">schedulingPriority</a></code> | <code>number</code> | The priority of this Job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout time for jobs that are submitted with this job definition. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `jobDefinitionArn`<sup>Required</sup> <a name="jobDefinitionArn" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.jobDefinitionArn"></a>

```typescript
public readonly jobDefinitionArn: string;
```

- *Type:* string

The ARN of this job definition.

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

The name of this job definition.

---

##### `jobDefinitionRef`<sup>Required</sup> <a name="jobDefinitionRef" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.jobDefinitionRef"></a>

```typescript
public readonly jobDefinitionRef: JobDefinitionReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_batch.JobDefinitionReference

A reference to a JobDefinition resource.

---

##### `retryStrategies`<sup>Required</sup> <a name="retryStrategies" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.retryStrategies"></a>

```typescript
public readonly retryStrategies: RetryStrategy[];
```

- *Type:* aws-cdk-lib.aws_batch.RetryStrategy[]

Defines the retry behavior for this job.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The default parameters passed to the container These parameters can be referenced in the `command` that you give to the container.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

The number of times to retry a job.

The job is retried on failure the same number of attempts as the value.

---

##### `schedulingPriority`<sup>Optional</sup> <a name="schedulingPriority" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.schedulingPriority"></a>

```typescript
public readonly schedulingPriority: number;
```

- *Type:* number

The priority of this Job.

Only used in Fairshare Scheduling
to decide which job to run first when there are multiple jobs
with the same share identifier.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinition.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout time for jobs that are submitted with this job definition.

After the amount of time you specify passes,
Batch terminates your jobs if they aren't finished.

---


### NeuronxCompiler <a name="NeuronxCompiler" id="aws-cdk-neuronx-patterns.NeuronxCompiler"></a>

Neuronx compiler construct.

Compile the model to work with Inferentia2 and Trainium1 and upload it to an S3 bucket.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronxCompiler.Initializer"></a>

```typescript
import { NeuronxCompiler } from 'aws-cdk-neuronx-patterns'

new NeuronxCompiler(scope: Construct, id: string, props: NeuronxCompilerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps">NeuronxCompilerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxCompiler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxCompiler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxCompiler.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps">NeuronxCompilerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.compile">compile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronxCompiler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.NeuronxCompiler.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.NeuronxCompiler.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `compile` <a name="compile" id="aws-cdk-neuronx-patterns.NeuronxCompiler.compile"></a>

```typescript
public compile(): NeuronxCompiledModel
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.NeuronxCompiler.isConstruct"></a>

```typescript
import { NeuronxCompiler } from 'aws-cdk-neuronx-patterns'

NeuronxCompiler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.NeuronxCompiler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronxCompiler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NeuronxTaskDefinition <a name="NeuronxTaskDefinition" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition"></a>

- *Implements:* <a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition">INeuronxTaskDefinition</a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.Initializer"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

new NeuronxTaskDefinition(scope: Construct, id: string, props: NeuronxTaskDefinitionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps">NeuronxTaskDefinitionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps">NeuronxTaskDefinitionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainer">addContainer</a></code> | Tasks running in AWSVPC networking mode requires an additional environment variable for the region to be sourced. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addExtension">addExtension</a></code> | Adds the specified extension to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addFirelensLogRouter">addFirelensLogRouter</a></code> | Adds a firelens log router to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addInferenceAccelerator">addInferenceAccelerator</a></code> | Adds an inference accelerator to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addPlacementConstraint">addPlacementConstraint</a></code> | Adds the specified placement constraint to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addToExecutionRolePolicy">addToExecutionRolePolicy</a></code> | Adds a policy statement to the task execution IAM role. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addToTaskRolePolicy">addToTaskRolePolicy</a></code> | Adds a policy statement to the task IAM role. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addVolume">addVolume</a></code> | Adds a volume to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.findContainer">findContainer</a></code> | Returns the container that match the provided containerName. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.findPortMappingByName">findPortMappingByName</a></code> | Determine the existing port mapping for the provided name. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.grantRun">grantRun</a></code> | Grants permissions to run this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.obtainExecutionRole">obtainExecutionRole</a></code> | Creates the task execution IAM role if it doesn't already exist. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainerWithDefault">addContainerWithDefault</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addContainer` <a name="addContainer" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainer"></a>

```typescript
public addContainer(id: string, props: ContainerDefinitionOptions): ContainerDefinition
```

Tasks running in AWSVPC networking mode requires an additional environment variable for the region to be sourced.

This override adds in the additional environment variable as required

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainer.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinitionOptions

---

##### `addExtension` <a name="addExtension" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addExtension"></a>

```typescript
public addExtension(extension: ITaskDefinitionExtension): void
```

Adds the specified extension to the task definition.

Extension can be used to apply a packaged modification to
a task definition.

###### `extension`<sup>Required</sup> <a name="extension" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addExtension.parameter.extension"></a>

- *Type:* aws-cdk-lib.aws_ecs.ITaskDefinitionExtension

---

##### `addFirelensLogRouter` <a name="addFirelensLogRouter" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addFirelensLogRouter"></a>

```typescript
public addFirelensLogRouter(id: string, props: FirelensLogRouterDefinitionOptions): FirelensLogRouter
```

Adds a firelens log router to the task definition.

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addFirelensLogRouter.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addFirelensLogRouter.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.FirelensLogRouterDefinitionOptions

---

##### ~~`addInferenceAccelerator`~~ <a name="addInferenceAccelerator" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addInferenceAccelerator"></a>

```typescript
public addInferenceAccelerator(inferenceAccelerator: InferenceAccelerator): void
```

Adds an inference accelerator to the task definition.

###### `inferenceAccelerator`<sup>Required</sup> <a name="inferenceAccelerator" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addInferenceAccelerator.parameter.inferenceAccelerator"></a>

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator

---

##### `addPlacementConstraint` <a name="addPlacementConstraint" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addPlacementConstraint"></a>

```typescript
public addPlacementConstraint(constraint: PlacementConstraint): void
```

Adds the specified placement constraint to the task definition.

###### `constraint`<sup>Required</sup> <a name="constraint" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addPlacementConstraint.parameter.constraint"></a>

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint

---

##### `addToExecutionRolePolicy` <a name="addToExecutionRolePolicy" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addToExecutionRolePolicy"></a>

```typescript
public addToExecutionRolePolicy(statement: PolicyStatement): void
```

Adds a policy statement to the task execution IAM role.

###### `statement`<sup>Required</sup> <a name="statement" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addToExecutionRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToTaskRolePolicy` <a name="addToTaskRolePolicy" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addToTaskRolePolicy"></a>

```typescript
public addToTaskRolePolicy(statement: PolicyStatement): void
```

Adds a policy statement to the task IAM role.

###### `statement`<sup>Required</sup> <a name="statement" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addToTaskRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addVolume` <a name="addVolume" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addVolume"></a>

```typescript
public addVolume(volume: Volume): void
```

Adds a volume to the task definition.

###### `volume`<sup>Required</sup> <a name="volume" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addVolume.parameter.volume"></a>

- *Type:* aws-cdk-lib.aws_ecs.Volume

---

##### `findContainer` <a name="findContainer" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.findContainer"></a>

```typescript
public findContainer(containerName: string): ContainerDefinition
```

Returns the container that match the provided containerName.

###### `containerName`<sup>Required</sup> <a name="containerName" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.findContainer.parameter.containerName"></a>

- *Type:* string

---

##### `findPortMappingByName` <a name="findPortMappingByName" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.findPortMappingByName"></a>

```typescript
public findPortMappingByName(name: string): PortMapping
```

Determine the existing port mapping for the provided name.

###### `name`<sup>Required</sup> <a name="name" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.findPortMappingByName.parameter.name"></a>

- *Type:* string

: port mapping name.

---

##### `grantRun` <a name="grantRun" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.grantRun"></a>

```typescript
public grantRun(grantee: IGrantable): Grant
```

Grants permissions to run this task definition.

This will grant the following permissions:

  - ecs:RunTask
  - iam:PassRole

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.grantRun.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

Principal to grant consume rights to.

---

##### `obtainExecutionRole` <a name="obtainExecutionRole" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.obtainExecutionRole"></a>

```typescript
public obtainExecutionRole(): IRole
```

Creates the task execution IAM role if it doesn't already exist.

##### `addContainerWithDefault` <a name="addContainerWithDefault" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainerWithDefault"></a>

```typescript
public addContainerWithDefault(id: string, props: ContainerDefinitionOptions): ContainerDefinition
```

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainerWithDefault.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.addContainerWithDefault.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinitionOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionArn">fromTaskDefinitionArn</a></code> | Imports a task definition from the specified task definition ARN. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionAttributes">fromTaskDefinitionAttributes</a></code> | Create a task definition from a task definition reference. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionArn">fromEc2TaskDefinitionArn</a></code> | Imports a task definition from the specified task definition ARN. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionAttributes">fromEc2TaskDefinitionAttributes</a></code> | Imports an existing Ec2 task definition from its attributes. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isConstruct"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxTaskDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isOwnedResource"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxTaskDefinition.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isResource"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxTaskDefinition.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromTaskDefinitionArn` <a name="fromTaskDefinitionArn" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionArn"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxTaskDefinition.fromTaskDefinitionArn(scope: Construct, id: string, taskDefinitionArn: string)
```

Imports a task definition from the specified task definition ARN.

The task will have a compatibility of EC2+Fargate.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionArn.parameter.id"></a>

- *Type:* string

---

###### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionArn.parameter.taskDefinitionArn"></a>

- *Type:* string

---

##### `fromTaskDefinitionAttributes` <a name="fromTaskDefinitionAttributes" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionAttributes"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxTaskDefinition.fromTaskDefinitionAttributes(scope: Construct, id: string, attrs: TaskDefinitionAttributes)
```

Create a task definition from a task definition reference.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromTaskDefinitionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionAttributes

---

##### `fromEc2TaskDefinitionArn` <a name="fromEc2TaskDefinitionArn" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionArn"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxTaskDefinition.fromEc2TaskDefinitionArn(scope: Construct, id: string, ec2TaskDefinitionArn: string)
```

Imports a task definition from the specified task definition ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionArn.parameter.id"></a>

- *Type:* string

---

###### `ec2TaskDefinitionArn`<sup>Required</sup> <a name="ec2TaskDefinitionArn" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionArn.parameter.ec2TaskDefinitionArn"></a>

- *Type:* string

---

##### `fromEc2TaskDefinitionAttributes` <a name="fromEc2TaskDefinitionAttributes" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionAttributes"></a>

```typescript
import { NeuronxTaskDefinition } from 'aws-cdk-neuronx-patterns'

NeuronxTaskDefinition.fromEc2TaskDefinitionAttributes(scope: Construct, id: string, attrs: Ec2TaskDefinitionAttributes)
```

Imports an existing Ec2 task definition from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.fromEc2TaskDefinitionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2TaskDefinitionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.compatibility">compatibility</a></code> | <code>aws-cdk-lib.aws_ecs.Compatibility</code> | The task launch type compatibility requirement. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code>aws-cdk-lib.aws_ecs.InferenceAccelerator[]</code> | Public getter method to access list of inference accelerators attached to the instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isEc2Compatible">isEc2Compatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on an EC2 cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isExternalCompatible">isExternalCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a ECS anywhere cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isFargateCompatible">isFargateCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a Fargate cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isManagedInstancesCompatible">isManagedInstancesCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on Managed Instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.networkMode">networkMode</a></code> | <code>aws-cdk-lib.aws_ecs.NetworkMode</code> | The networking mode to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.taskDefinitionRef">taskDefinitionRef</a></code> | <code>aws-cdk-lib.interfaces.aws_ecs.TaskDefinitionReference</code> | A reference to this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.ephemeralStorageGiB">ephemeralStorageGiB</a></code> | <code>number</code> | The amount (in GiB) of ephemeral storage to be allocated to the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role for this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.pidMode">pidMode</a></code> | <code>aws-cdk-lib.aws_ecs.PidMode</code> | The process namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.referencesSecretJsonField">referencesSecretJsonField</a></code> | <code>boolean</code> | Whether this task definition has at least a container that references a specific JSON field of a secret stored in Secrets Manager. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.defaultContainer">defaultContainer</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | Default container for this task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.compiledModel">compiledModel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.tasksPerInstance">tasksPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.compatibility"></a>

```typescript
public readonly compatibility: Compatibility;
```

- *Type:* aws-cdk-lib.aws_ecs.Compatibility

The task launch type compatibility requirement.

---

##### `family`<sup>Required</sup> <a name="family" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="inferenceAccelerators" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: InferenceAccelerator[];
```

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator[]

Public getter method to access list of inference accelerators attached to the instance.

---

##### `isEc2Compatible`<sup>Required</sup> <a name="isEc2Compatible" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isEc2Compatible"></a>

```typescript
public readonly isEc2Compatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on an EC2 cluster.

---

##### `isExternalCompatible`<sup>Required</sup> <a name="isExternalCompatible" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isExternalCompatible"></a>

```typescript
public readonly isExternalCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a ECS anywhere cluster.

---

##### `isFargateCompatible`<sup>Required</sup> <a name="isFargateCompatible" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isFargateCompatible"></a>

```typescript
public readonly isFargateCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a Fargate cluster.

---

##### `isManagedInstancesCompatible`<sup>Required</sup> <a name="isManagedInstancesCompatible" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.isManagedInstancesCompatible"></a>

```typescript
public readonly isManagedInstancesCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on Managed Instances.

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.networkMode"></a>

```typescript
public readonly networkMode: NetworkMode;
```

- *Type:* aws-cdk-lib.aws_ecs.NetworkMode

The networking mode to use for the containers in the task.

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the task definition.

---

##### `taskDefinitionRef`<sup>Required</sup> <a name="taskDefinitionRef" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.taskDefinitionRef"></a>

```typescript
public readonly taskDefinitionRef: TaskDefinitionReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_ecs.TaskDefinitionReference

A reference to this task definition.

---

##### `taskRole`<sup>Required</sup> <a name="taskRole" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `ephemeralStorageGiB`<sup>Optional</sup> <a name="ephemeralStorageGiB" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.ephemeralStorageGiB"></a>

```typescript
public readonly ephemeralStorageGiB: number;
```

- *Type:* number

The amount (in GiB) of ephemeral storage to be allocated to the task.

Only supported in Fargate platform version 1.4.0 or later.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role for this task definition.

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.pidMode"></a>

```typescript
public readonly pidMode: PidMode;
```

- *Type:* aws-cdk-lib.aws_ecs.PidMode

The process namespace to use for the containers in the task.

Only supported for tasks that are hosted on AWS Fargate if the tasks
are using platform version 1.4.0 or later (Linux). Not supported in
Windows containers. If pidMode is specified for a Fargate task,
then runtimePlatform.operatingSystemFamily must also be specified.  For more
information, see [Task Definition Parameters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_definition_pidmode).

---

##### `referencesSecretJsonField`<sup>Optional</sup> <a name="referencesSecretJsonField" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.referencesSecretJsonField"></a>

```typescript
public readonly referencesSecretJsonField: boolean;
```

- *Type:* boolean

Whether this task definition has at least a container that references a specific JSON field of a secret stored in Secrets Manager.

---

##### `defaultContainer`<sup>Optional</sup> <a name="defaultContainer" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.defaultContainer"></a>

```typescript
public readonly defaultContainer: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

Default container for this task.

Load balancers will send traffic to this container. The first
essential container that is added to this task will become the default
container.

---

##### `compiledModel`<sup>Required</sup> <a name="compiledModel" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.compiledModel"></a>

```typescript
public readonly compiledModel: NeuronxCompiledModel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a>

---

##### `neuronxInstanceType`<sup>Required</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

---

##### `tasksPerInstance`<sup>Required</sup> <a name="tasksPerInstance" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.tasksPerInstance"></a>

```typescript
public readonly tasksPerInstance: number;
```

- *Type:* number

---

##### `tensorParallelSize`<sup>Required</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinition.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### VllmNxdInferenceCompiler <a name="VllmNxdInferenceCompiler" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler"></a>

Neuronx compiler construct for vLLM on NxD Inference.

Compile the model to work with Neuronx instance and upload it to an S3 bucket.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.Initializer"></a>

```typescript
import { VllmNxdInferenceCompiler } from 'aws-cdk-neuronx-patterns'

new VllmNxdInferenceCompiler(scope: Construct, id: string, props: VllmNxdInferenceCompileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps">VllmNxdInferenceCompileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps">VllmNxdInferenceCompileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.compile">compile</a></code> | Compile the model and return the compiled model. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `compile` <a name="compile" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.compile"></a>

```typescript
public compile(): VllmNxdInferenceCompiledModel
```

Compile the model and return the compiled model.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.isConstruct"></a>

```typescript
import { VllmNxdInferenceCompiler } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceCompiler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### VllmNxdInferenceTaskDefinition <a name="VllmNxdInferenceTaskDefinition" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition"></a>

Task definition for VllmNxdInference.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.Initializer"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

new VllmNxdInferenceTaskDefinition(scope: Construct, id: string, props: VllmNxdInferenceTaskDefinitionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps">VllmNxdInferenceTaskDefinitionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps">VllmNxdInferenceTaskDefinitionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainer">addContainer</a></code> | Tasks running in AWSVPC networking mode requires an additional environment variable for the region to be sourced. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addExtension">addExtension</a></code> | Adds the specified extension to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addFirelensLogRouter">addFirelensLogRouter</a></code> | Adds a firelens log router to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addInferenceAccelerator">addInferenceAccelerator</a></code> | Adds an inference accelerator to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addPlacementConstraint">addPlacementConstraint</a></code> | Adds the specified placement constraint to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addToExecutionRolePolicy">addToExecutionRolePolicy</a></code> | Adds a policy statement to the task execution IAM role. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addToTaskRolePolicy">addToTaskRolePolicy</a></code> | Adds a policy statement to the task IAM role. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addVolume">addVolume</a></code> | Adds a volume to the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.findContainer">findContainer</a></code> | Returns the container that match the provided containerName. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.findPortMappingByName">findPortMappingByName</a></code> | Determine the existing port mapping for the provided name. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.grantRun">grantRun</a></code> | Grants permissions to run this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.obtainExecutionRole">obtainExecutionRole</a></code> | Creates the task execution IAM role if it doesn't already exist. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainerWithDefault">addContainerWithDefault</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addContainer` <a name="addContainer" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainer"></a>

```typescript
public addContainer(id: string, props: ContainerDefinitionOptions): ContainerDefinition
```

Tasks running in AWSVPC networking mode requires an additional environment variable for the region to be sourced.

This override adds in the additional environment variable as required

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainer.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinitionOptions

---

##### `addExtension` <a name="addExtension" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addExtension"></a>

```typescript
public addExtension(extension: ITaskDefinitionExtension): void
```

Adds the specified extension to the task definition.

Extension can be used to apply a packaged modification to
a task definition.

###### `extension`<sup>Required</sup> <a name="extension" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addExtension.parameter.extension"></a>

- *Type:* aws-cdk-lib.aws_ecs.ITaskDefinitionExtension

---

##### `addFirelensLogRouter` <a name="addFirelensLogRouter" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addFirelensLogRouter"></a>

```typescript
public addFirelensLogRouter(id: string, props: FirelensLogRouterDefinitionOptions): FirelensLogRouter
```

Adds a firelens log router to the task definition.

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addFirelensLogRouter.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addFirelensLogRouter.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.FirelensLogRouterDefinitionOptions

---

##### ~~`addInferenceAccelerator`~~ <a name="addInferenceAccelerator" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addInferenceAccelerator"></a>

```typescript
public addInferenceAccelerator(inferenceAccelerator: InferenceAccelerator): void
```

Adds an inference accelerator to the task definition.

###### `inferenceAccelerator`<sup>Required</sup> <a name="inferenceAccelerator" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addInferenceAccelerator.parameter.inferenceAccelerator"></a>

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator

---

##### `addPlacementConstraint` <a name="addPlacementConstraint" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addPlacementConstraint"></a>

```typescript
public addPlacementConstraint(constraint: PlacementConstraint): void
```

Adds the specified placement constraint to the task definition.

###### `constraint`<sup>Required</sup> <a name="constraint" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addPlacementConstraint.parameter.constraint"></a>

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint

---

##### `addToExecutionRolePolicy` <a name="addToExecutionRolePolicy" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addToExecutionRolePolicy"></a>

```typescript
public addToExecutionRolePolicy(statement: PolicyStatement): void
```

Adds a policy statement to the task execution IAM role.

###### `statement`<sup>Required</sup> <a name="statement" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addToExecutionRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToTaskRolePolicy` <a name="addToTaskRolePolicy" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addToTaskRolePolicy"></a>

```typescript
public addToTaskRolePolicy(statement: PolicyStatement): void
```

Adds a policy statement to the task IAM role.

###### `statement`<sup>Required</sup> <a name="statement" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addToTaskRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addVolume` <a name="addVolume" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addVolume"></a>

```typescript
public addVolume(volume: Volume): void
```

Adds a volume to the task definition.

###### `volume`<sup>Required</sup> <a name="volume" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addVolume.parameter.volume"></a>

- *Type:* aws-cdk-lib.aws_ecs.Volume

---

##### `findContainer` <a name="findContainer" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.findContainer"></a>

```typescript
public findContainer(containerName: string): ContainerDefinition
```

Returns the container that match the provided containerName.

###### `containerName`<sup>Required</sup> <a name="containerName" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.findContainer.parameter.containerName"></a>

- *Type:* string

---

##### `findPortMappingByName` <a name="findPortMappingByName" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.findPortMappingByName"></a>

```typescript
public findPortMappingByName(name: string): PortMapping
```

Determine the existing port mapping for the provided name.

###### `name`<sup>Required</sup> <a name="name" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.findPortMappingByName.parameter.name"></a>

- *Type:* string

: port mapping name.

---

##### `grantRun` <a name="grantRun" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.grantRun"></a>

```typescript
public grantRun(grantee: IGrantable): Grant
```

Grants permissions to run this task definition.

This will grant the following permissions:

  - ecs:RunTask
  - iam:PassRole

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.grantRun.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

Principal to grant consume rights to.

---

##### `obtainExecutionRole` <a name="obtainExecutionRole" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.obtainExecutionRole"></a>

```typescript
public obtainExecutionRole(): IRole
```

Creates the task execution IAM role if it doesn't already exist.

##### `addContainerWithDefault` <a name="addContainerWithDefault" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainerWithDefault"></a>

```typescript
public addContainerWithDefault(id: string, props: ContainerDefinitionOptions): ContainerDefinition
```

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainerWithDefault.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.addContainerWithDefault.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinitionOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionArn">fromTaskDefinitionArn</a></code> | Imports a task definition from the specified task definition ARN. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionAttributes">fromTaskDefinitionAttributes</a></code> | Create a task definition from a task definition reference. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionArn">fromEc2TaskDefinitionArn</a></code> | Imports a task definition from the specified task definition ARN. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionAttributes">fromEc2TaskDefinitionAttributes</a></code> | Imports an existing Ec2 task definition from its attributes. |

---

##### `isConstruct` <a name="isConstruct" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isConstruct"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceTaskDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isOwnedResource"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceTaskDefinition.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isResource"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceTaskDefinition.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromTaskDefinitionArn` <a name="fromTaskDefinitionArn" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionArn"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceTaskDefinition.fromTaskDefinitionArn(scope: Construct, id: string, taskDefinitionArn: string)
```

Imports a task definition from the specified task definition ARN.

The task will have a compatibility of EC2+Fargate.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionArn.parameter.id"></a>

- *Type:* string

---

###### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionArn.parameter.taskDefinitionArn"></a>

- *Type:* string

---

##### `fromTaskDefinitionAttributes` <a name="fromTaskDefinitionAttributes" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionAttributes"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceTaskDefinition.fromTaskDefinitionAttributes(scope: Construct, id: string, attrs: TaskDefinitionAttributes)
```

Create a task definition from a task definition reference.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromTaskDefinitionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.TaskDefinitionAttributes

---

##### `fromEc2TaskDefinitionArn` <a name="fromEc2TaskDefinitionArn" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionArn"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionArn(scope: Construct, id: string, ec2TaskDefinitionArn: string)
```

Imports a task definition from the specified task definition ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionArn.parameter.id"></a>

- *Type:* string

---

###### `ec2TaskDefinitionArn`<sup>Required</sup> <a name="ec2TaskDefinitionArn" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionArn.parameter.ec2TaskDefinitionArn"></a>

- *Type:* string

---

##### `fromEc2TaskDefinitionAttributes` <a name="fromEc2TaskDefinitionAttributes" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionAttributes"></a>

```typescript
import { VllmNxdInferenceTaskDefinition } from 'aws-cdk-neuronx-patterns'

VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionAttributes(scope: Construct, id: string, attrs: Ec2TaskDefinitionAttributes)
```

Imports an existing Ec2 task definition from its attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.fromEc2TaskDefinitionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ecs.Ec2TaskDefinitionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.compatibility">compatibility</a></code> | <code>aws-cdk-lib.aws_ecs.Compatibility</code> | The task launch type compatibility requirement. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code>aws-cdk-lib.aws_ecs.InferenceAccelerator[]</code> | Public getter method to access list of inference accelerators attached to the instance. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isEc2Compatible">isEc2Compatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on an EC2 cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isExternalCompatible">isExternalCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a ECS anywhere cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isFargateCompatible">isFargateCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a Fargate cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isManagedInstancesCompatible">isManagedInstancesCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on Managed Instances. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.networkMode">networkMode</a></code> | <code>aws-cdk-lib.aws_ecs.NetworkMode</code> | The networking mode to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.taskDefinitionRef">taskDefinitionRef</a></code> | <code>aws-cdk-lib.interfaces.aws_ecs.TaskDefinitionReference</code> | A reference to this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.ephemeralStorageGiB">ephemeralStorageGiB</a></code> | <code>number</code> | The amount (in GiB) of ephemeral storage to be allocated to the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role for this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.pidMode">pidMode</a></code> | <code>aws-cdk-lib.aws_ecs.PidMode</code> | The process namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.referencesSecretJsonField">referencesSecretJsonField</a></code> | <code>boolean</code> | Whether this task definition has at least a container that references a specific JSON field of a secret stored in Secrets Manager. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.defaultContainer">defaultContainer</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerDefinition</code> | Default container for this task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.compiledModel">compiledModel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.tasksPerInstance">tasksPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.compatibility"></a>

```typescript
public readonly compatibility: Compatibility;
```

- *Type:* aws-cdk-lib.aws_ecs.Compatibility

The task launch type compatibility requirement.

---

##### `family`<sup>Required</sup> <a name="family" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="inferenceAccelerators" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: InferenceAccelerator[];
```

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator[]

Public getter method to access list of inference accelerators attached to the instance.

---

##### `isEc2Compatible`<sup>Required</sup> <a name="isEc2Compatible" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isEc2Compatible"></a>

```typescript
public readonly isEc2Compatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on an EC2 cluster.

---

##### `isExternalCompatible`<sup>Required</sup> <a name="isExternalCompatible" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isExternalCompatible"></a>

```typescript
public readonly isExternalCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a ECS anywhere cluster.

---

##### `isFargateCompatible`<sup>Required</sup> <a name="isFargateCompatible" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isFargateCompatible"></a>

```typescript
public readonly isFargateCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a Fargate cluster.

---

##### `isManagedInstancesCompatible`<sup>Required</sup> <a name="isManagedInstancesCompatible" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.isManagedInstancesCompatible"></a>

```typescript
public readonly isManagedInstancesCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on Managed Instances.

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.networkMode"></a>

```typescript
public readonly networkMode: NetworkMode;
```

- *Type:* aws-cdk-lib.aws_ecs.NetworkMode

The networking mode to use for the containers in the task.

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the task definition.

---

##### `taskDefinitionRef`<sup>Required</sup> <a name="taskDefinitionRef" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.taskDefinitionRef"></a>

```typescript
public readonly taskDefinitionRef: TaskDefinitionReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_ecs.TaskDefinitionReference

A reference to this task definition.

---

##### `taskRole`<sup>Required</sup> <a name="taskRole" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `ephemeralStorageGiB`<sup>Optional</sup> <a name="ephemeralStorageGiB" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.ephemeralStorageGiB"></a>

```typescript
public readonly ephemeralStorageGiB: number;
```

- *Type:* number

The amount (in GiB) of ephemeral storage to be allocated to the task.

Only supported in Fargate platform version 1.4.0 or later.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role for this task definition.

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.pidMode"></a>

```typescript
public readonly pidMode: PidMode;
```

- *Type:* aws-cdk-lib.aws_ecs.PidMode

The process namespace to use for the containers in the task.

Only supported for tasks that are hosted on AWS Fargate if the tasks
are using platform version 1.4.0 or later (Linux). Not supported in
Windows containers. If pidMode is specified for a Fargate task,
then runtimePlatform.operatingSystemFamily must also be specified.  For more
information, see [Task Definition Parameters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_definition_pidmode).

---

##### `referencesSecretJsonField`<sup>Optional</sup> <a name="referencesSecretJsonField" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.referencesSecretJsonField"></a>

```typescript
public readonly referencesSecretJsonField: boolean;
```

- *Type:* boolean

Whether this task definition has at least a container that references a specific JSON field of a secret stored in Secrets Manager.

---

##### `defaultContainer`<sup>Optional</sup> <a name="defaultContainer" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.defaultContainer"></a>

```typescript
public readonly defaultContainer: ContainerDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerDefinition

Default container for this task.

Load balancers will send traffic to this container. The first
essential container that is added to this task will become the default
container.

---

##### `compiledModel`<sup>Required</sup> <a name="compiledModel" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.compiledModel"></a>

```typescript
public readonly compiledModel: NeuronxCompiledModel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a>

---

##### `neuronxInstanceType`<sup>Required</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

---

##### `tasksPerInstance`<sup>Required</sup> <a name="tasksPerInstance" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.tasksPerInstance"></a>

```typescript
public readonly tasksPerInstance: number;
```

- *Type:* number

---

##### `tensorParallelSize`<sup>Required</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadBalancedNeuronxServiceProps <a name="ApplicationLoadBalancedNeuronxServiceProps" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.Initializer"></a>

```typescript
import { ApplicationLoadBalancedNeuronxServiceProps } from 'aws-cdk-neuronx-patterns'

const applicationLoadBalancedNeuronxServiceProps: ApplicationLoadBalancedNeuronxServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.capacityProviderStrategies">capacityProviderStrategies</a></code> | <code>aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]</code> | A list of Capacity Provider strategies used to place a service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | Certificate Manager certificate to associate with the load balancer. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>aws-cdk-lib.aws_ecs.DeploymentCircuitBreaker</code> | Whether to enable the deployment circuit breaker. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.cloudMapOptions">cloudMapOptions</a></code> | <code>aws-cdk-lib.aws_ecs.CloudMapOptions</code> | The options for configuring an Amazon ECS service to use service discovery. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The name of the cluster that hosts the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.deploymentController">deploymentController</a></code> | <code>aws-cdk-lib.aws_ecs.DeploymentController</code> | Specifies which deployment controller to use for the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | The desired number of instantiations of the task definition to keep running on the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.domainName">domainName</a></code> | <code>string</code> | The domain name for the service, e.g. "api.example.com.". |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.domainZone">domainZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route53 hosted zone for the domain, e.g. "example.com.". |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.enableECSManagedTags">enableECSManagedTags</a></code> | <code>boolean</code> | Specifies whether to enable Amazon ECS managed tags for the tasks within the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether ECS Exec should be enabled. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>aws-cdk-lib.Duration</code> | The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.idleTimeout">idleTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The load balancer idle timeout, in seconds. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.ipAddressType">ipAddressType</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType</code> | The type of IP address to use. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.listenerPort">listenerPort</a></code> | <code>number</code> | Listener port of the application load balancer that will serve traffic to the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | The application load balancer that will serve traffic to the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | Name of the load balancer. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.maxHealthyPercent">maxHealthyPercent</a></code> | <code>number</code> | The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.minHealthyPercent">minHealthyPercent</a></code> | <code>number</code> | The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.openListener">openListener</a></code> | <code>boolean</code> | Determines whether or not the Security Group for the Load Balancer's Listener will be open to all traffic by default. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.propagateTags">propagateTags</a></code> | <code>aws-cdk-lib.aws_ecs.PropagatedTagSource</code> | Specifies whether to propagate the tags from the task definition or the service to the tasks in the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.protocol">protocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.protocolVersion">protocolVersion</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion</code> | The protocol version to use. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.publicLoadBalancer">publicLoadBalancer</a></code> | <code>boolean</code> | Determines whether the Load Balancer will be internet-facing. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.recordType">recordType</a></code> | <code>aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedServiceRecordType</code> | Specifies whether the Route53 record should be a CNAME, an A record using the Alias feature or no record at all. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.redirectHTTP">redirectHTTP</a></code> | <code>boolean</code> | Specifies whether the load balancer should redirect traffic on port 80 to the {@link listenerPort} to support HTTP->HTTPS redirects. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.sslPolicy">sslPolicy</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.SslPolicy</code> | The security policy that defines which ciphers and protocols are supported by the ALB Listener. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.targetProtocol">targetProtocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol</code> | The protocol for connections from the load balancer to the ECS tasks. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.taskImageOptions">taskImageOptions</a></code> | <code>aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedTaskImageOptions</code> | The properties required to create a new task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.cpu">cpu</a></code> | <code>number</code> | The number of cpu units used by the task. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.memoryLimitMiB">memoryLimitMiB</a></code> | <code>number</code> | The hard limit (in MiB) of memory to present to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.memoryReservationMiB">memoryReservationMiB</a></code> | <code>number</code> | The soft limit (in MiB) of memory to reserve for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.placementConstraints">placementConstraints</a></code> | <code>aws-cdk-lib.aws_ecs.PlacementConstraint[]</code> | The placement constraints to use for tasks in the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.placementStrategies">placementStrategies</a></code> | <code>aws-cdk-lib.aws_ecs.PlacementStrategy[]</code> | The placement strategies to use for tasks in the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2TaskDefinition</code> | The task definition to use for tasks in the service. TaskDefinition or TaskImageOptions must be specified, but not both.. |

---

##### `capacityProviderStrategies`<sup>Optional</sup> <a name="capacityProviderStrategies" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.capacityProviderStrategies"></a>

```typescript
public readonly capacityProviderStrategies: CapacityProviderStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]
- *Default:* undefined

A list of Capacity Provider strategies used to place a service.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* No certificate associated with the load balancer, if using the HTTP protocol. For HTTPS, a DNS-validated certificate will be created for the load balancer's specified domain name if a domain name and domain zone are specified.

Certificate Manager certificate to associate with the load balancer.

Setting this option will set the load balancer protocol to HTTPS.

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: DeploymentCircuitBreaker;
```

- *Type:* aws-cdk-lib.aws_ecs.DeploymentCircuitBreaker
- *Default:* disabled

Whether to enable the deployment circuit breaker.

If this property is defined, circuit breaker will be implicitly
enabled.

---

##### `cloudMapOptions`<sup>Optional</sup> <a name="cloudMapOptions" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.cloudMapOptions"></a>

```typescript
public readonly cloudMapOptions: CloudMapOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.CloudMapOptions
- *Default:* AWS Cloud Map service discovery is not enabled.

The options for configuring an Amazon ECS service to use service discovery.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* create a new cluster; if both cluster and vpc are omitted, a new VPC will be created for you.

The name of the cluster that hosts the service.

If a cluster is specified, the vpc construct should be omitted. Alternatively, you can omit both cluster and vpc.

---

##### `deploymentController`<sup>Optional</sup> <a name="deploymentController" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.deploymentController"></a>

```typescript
public readonly deploymentController: DeploymentController;
```

- *Type:* aws-cdk-lib.aws_ecs.DeploymentController
- *Default:* Rolling update (ECS)

Specifies which deployment controller to use for the service.

For more information, see
[Amazon ECS Deployment Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html)

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number
- *Default:* The default is 1 for all new services and uses the existing service's desired count when updating an existing service.

The desired number of instantiations of the task definition to keep running on the service.

The minimum value is 1

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string
- *Default:* No domain name.

The domain name for the service, e.g. "api.example.com.".

---

##### `domainZone`<sup>Optional</sup> <a name="domainZone" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.domainZone"></a>

```typescript
public readonly domainZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone
- *Default:* No Route53 hosted domain zone.

The Route53 hosted zone for the domain, e.g. "example.com.".

---

##### `enableECSManagedTags`<sup>Optional</sup> <a name="enableECSManagedTags" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.enableECSManagedTags"></a>

```typescript
public readonly enableECSManagedTags: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether to enable Amazon ECS managed tags for the tasks within the service.

For more information, see
[Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html)

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether ECS Exec should be enabled.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* defaults to 60 seconds if at least one load balancer is in-use and it is not already set

The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* CloudFormation sets idle timeout to 60 seconds

The load balancer idle timeout, in seconds.

Can be between 1 and 4000 seconds

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType
- *Default:* IpAddressType.IPV4

The type of IP address to use.

---

##### `listenerPort`<sup>Optional</sup> <a name="listenerPort" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number
- *Default:* The default listener port is determined from the protocol (port 80 for HTTP, port 443 for HTTPS). A domain name and zone must be also be specified if using HTTPS.

Listener port of the application load balancer that will serve traffic to the service.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer
- *Default:* a new load balancer will be created.

The application load balancer that will serve traffic to the service.

The VPC attribute of a load balancer must be specified for it to be used
to create a new service with this pattern.

[disable-awslint:ref-via-interface]

---

##### `loadBalancerName`<sup>Optional</sup> <a name="loadBalancerName" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string
- *Default:* Automatically generated name.

Name of the load balancer.

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="maxHealthyPercent" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.maxHealthyPercent"></a>

```typescript
public readonly maxHealthyPercent: number;
```

- *Type:* number
- *Default:* 100 if daemon, otherwise 200

The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment.

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="minHealthyPercent" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.minHealthyPercent"></a>

```typescript
public readonly minHealthyPercent: number;
```

- *Type:* number
- *Default:* 0 if daemon, otherwise 50

The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment.

---

##### `openListener`<sup>Optional</sup> <a name="openListener" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.openListener"></a>

```typescript
public readonly openListener: boolean;
```

- *Type:* boolean
- *Default:* true -- The security group allows ingress from all IP addresses.

Determines whether or not the Security Group for the Load Balancer's Listener will be open to all traffic by default.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.propagateTags"></a>

```typescript
public readonly propagateTags: PropagatedTagSource;
```

- *Type:* aws-cdk-lib.aws_ecs.PropagatedTagSource
- *Default:* none

Specifies whether to propagate the tags from the task definition or the service to the tasks in the service.

Tags can only be propagated to the tasks within the service during service creation.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.protocol"></a>

```typescript
public readonly protocol: ApplicationProtocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol
- *Default:* HTTP. If a certificate is specified, the protocol will be set by default to HTTPS.

The protocol for connections from clients to the load balancer.

The load balancer port is determined from the protocol (port 80 for
HTTP, port 443 for HTTPS).  If HTTPS, either a certificate or domain
name and domain zone must also be specified.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: ApplicationProtocolVersion;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion
- *Default:* ApplicationProtocolVersion.HTTP1

The protocol version to use.

---

##### `publicLoadBalancer`<sup>Optional</sup> <a name="publicLoadBalancer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.publicLoadBalancer"></a>

```typescript
public readonly publicLoadBalancer: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether the Load Balancer will be internet-facing.

---

##### `recordType`<sup>Optional</sup> <a name="recordType" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.recordType"></a>

```typescript
public readonly recordType: ApplicationLoadBalancedServiceRecordType;
```

- *Type:* aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedServiceRecordType
- *Default:* ApplicationLoadBalancedServiceRecordType.ALIAS

Specifies whether the Route53 record should be a CNAME, an A record using the Alias feature or no record at all.

This is useful if you need to work with DNS systems that do not support alias records.

---

##### `redirectHTTP`<sup>Optional</sup> <a name="redirectHTTP" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.redirectHTTP"></a>

```typescript
public readonly redirectHTTP: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the load balancer should redirect traffic on port 80 to the {@link listenerPort} to support HTTP->HTTPS redirects.

This is only valid if the protocol of the ALB is HTTPS.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string
- *Default:* CloudFormation-generated name.

The name of the service.

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: SslPolicy;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.SslPolicy
- *Default:* The recommended elastic load balancing security policy

The security policy that defines which ciphers and protocols are supported by the ALB Listener.

---

##### `targetProtocol`<sup>Optional</sup> <a name="targetProtocol" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.targetProtocol"></a>

```typescript
public readonly targetProtocol: ApplicationProtocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol
- *Default:* HTTP.

The protocol for connections from the load balancer to the ECS tasks.

The default target port is determined from the protocol (port 80 for
HTTP, port 443 for HTTPS).

---

##### `taskImageOptions`<sup>Optional</sup> <a name="taskImageOptions" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.taskImageOptions"></a>

```typescript
public readonly taskImageOptions: ApplicationLoadBalancedTaskImageOptions;
```

- *Type:* aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedTaskImageOptions
- *Default:* none

The properties required to create a new task definition.

TaskDefinition or TaskImageOptions must be specified, but not both.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* uses the VPC defined in the cluster or creates a new VPC.

The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed.

If a vpc is specified, the cluster construct should be omitted. Alternatively, you can omit both vpc and cluster.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number
- *Default:* none

The number of cpu units used by the task.

Valid values, which determines your range of valid values for the memory parameter:

256 (.25 vCPU) - Available memory values: 0.5GB, 1GB, 2GB

512 (.5 vCPU) - Available memory values: 1GB, 2GB, 3GB, 4GB

1024 (1 vCPU) - Available memory values: 2GB, 3GB, 4GB, 5GB, 6GB, 7GB, 8GB

2048 (2 vCPU) - Available memory values: Between 4GB and 16GB in 1GB increments

4096 (4 vCPU) - Available memory values: Between 8GB and 30GB in 1GB increments

This default is set in the underlying FargateTaskDefinition construct.

---

##### `memoryLimitMiB`<sup>Optional</sup> <a name="memoryLimitMiB" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.memoryLimitMiB"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* number
- *Default:* No memory limit.

The hard limit (in MiB) of memory to present to the container.

If your container attempts to exceed the allocated memory, the container
is terminated.

At least one of memoryLimitMiB and memoryReservationMiB is required.

---

##### `memoryReservationMiB`<sup>Optional</sup> <a name="memoryReservationMiB" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.memoryReservationMiB"></a>

```typescript
public readonly memoryReservationMiB: number;
```

- *Type:* number
- *Default:* No memory reserved.

The soft limit (in MiB) of memory to reserve for the container.

When system memory is under contention, Docker attempts to keep the
container memory within the limit. If the container requires more memory,
it can consume up to the value specified by the Memory property or all of
the available memory on the container instance—whichever comes first.

At least one of memoryLimitMiB and memoryReservationMiB is required.

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: PlacementConstraint[];
```

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint[]
- *Default:* No constraints.

The placement constraints to use for tasks in the service.

For more information, see
[Amazon ECS Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html).

---

##### `placementStrategies`<sup>Optional</sup> <a name="placementStrategies" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.placementStrategies"></a>

```typescript
public readonly placementStrategies: PlacementStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.PlacementStrategy[]
- *Default:* No strategies.

The placement strategies to use for tasks in the service.

For more information, see
[Amazon ECS Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html).

---

##### `taskDefinition`<sup>Optional</sup> <a name="taskDefinition" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedNeuronxServiceProps.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: Ec2TaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2TaskDefinition
- *Default:* none

The task definition to use for tasks in the service. TaskDefinition or TaskImageOptions must be specified, but not both..

[disable-awslint:ref-via-interface]

---

### ApplicationLoadBalancedVllmNxDInferenceServiceProps <a name="ApplicationLoadBalancedVllmNxDInferenceServiceProps" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps"></a>

Props for ApplicationLoadBalancedVllmNxDInferenceService.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.Initializer"></a>

```typescript
import { ApplicationLoadBalancedVllmNxDInferenceServiceProps } from 'aws-cdk-neuronx-patterns'

const applicationLoadBalancedVllmNxDInferenceServiceProps: ApplicationLoadBalancedVllmNxDInferenceServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.capacityProviderStrategies">capacityProviderStrategies</a></code> | <code>aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]</code> | A list of Capacity Provider strategies used to place a service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | Certificate Manager certificate to associate with the load balancer. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.circuitBreaker">circuitBreaker</a></code> | <code>aws-cdk-lib.aws_ecs.DeploymentCircuitBreaker</code> | Whether to enable the deployment circuit breaker. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.cloudMapOptions">cloudMapOptions</a></code> | <code>aws-cdk-lib.aws_ecs.CloudMapOptions</code> | The options for configuring an Amazon ECS service to use service discovery. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The name of the cluster that hosts the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.deploymentController">deploymentController</a></code> | <code>aws-cdk-lib.aws_ecs.DeploymentController</code> | Specifies which deployment controller to use for the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | The desired number of instantiations of the task definition to keep running on the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.domainName">domainName</a></code> | <code>string</code> | The domain name for the service, e.g. "api.example.com.". |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.domainZone">domainZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route53 hosted zone for the domain, e.g. "example.com.". |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.enableECSManagedTags">enableECSManagedTags</a></code> | <code>boolean</code> | Specifies whether to enable Amazon ECS managed tags for the tasks within the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether ECS Exec should be enabled. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>aws-cdk-lib.Duration</code> | The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.idleTimeout">idleTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The load balancer idle timeout, in seconds. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.ipAddressType">ipAddressType</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType</code> | The type of IP address to use. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.listenerPort">listenerPort</a></code> | <code>number</code> | Listener port of the application load balancer that will serve traffic to the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | The application load balancer that will serve traffic to the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | Name of the load balancer. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.maxHealthyPercent">maxHealthyPercent</a></code> | <code>number</code> | The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.minHealthyPercent">minHealthyPercent</a></code> | <code>number</code> | The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.openListener">openListener</a></code> | <code>boolean</code> | Determines whether or not the Security Group for the Load Balancer's Listener will be open to all traffic by default. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.propagateTags">propagateTags</a></code> | <code>aws-cdk-lib.aws_ecs.PropagatedTagSource</code> | Specifies whether to propagate the tags from the task definition or the service to the tasks in the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.protocol">protocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.protocolVersion">protocolVersion</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion</code> | The protocol version to use. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.publicLoadBalancer">publicLoadBalancer</a></code> | <code>boolean</code> | Determines whether the Load Balancer will be internet-facing. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.recordType">recordType</a></code> | <code>aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedServiceRecordType</code> | Specifies whether the Route53 record should be a CNAME, an A record using the Alias feature or no record at all. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.redirectHTTP">redirectHTTP</a></code> | <code>boolean</code> | Specifies whether the load balancer should redirect traffic on port 80 to the {@link listenerPort} to support HTTP->HTTPS redirects. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.sslPolicy">sslPolicy</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.SslPolicy</code> | The security policy that defines which ciphers and protocols are supported by the ALB Listener. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.targetProtocol">targetProtocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol</code> | The protocol for connections from the load balancer to the ECS tasks. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.taskImageOptions">taskImageOptions</a></code> | <code>aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedTaskImageOptions</code> | The properties required to create a new task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.cpu">cpu</a></code> | <code>number</code> | The number of cpu units used by the task. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.memoryLimitMiB">memoryLimitMiB</a></code> | <code>number</code> | The hard limit (in MiB) of memory to present to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.memoryReservationMiB">memoryReservationMiB</a></code> | <code>number</code> | The soft limit (in MiB) of memory to reserve for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.placementConstraints">placementConstraints</a></code> | <code>aws-cdk-lib.aws_ecs.PlacementConstraint[]</code> | The placement constraints to use for tasks in the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.placementStrategies">placementStrategies</a></code> | <code>aws-cdk-lib.aws_ecs.PlacementStrategy[]</code> | The placement strategies to use for tasks in the service. |
| <code><a href="#aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.Ec2TaskDefinition</code> | The task definition to use for tasks in the service. TaskDefinition or TaskImageOptions must be specified, but not both.. |

---

##### `capacityProviderStrategies`<sup>Optional</sup> <a name="capacityProviderStrategies" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.capacityProviderStrategies"></a>

```typescript
public readonly capacityProviderStrategies: CapacityProviderStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.CapacityProviderStrategy[]
- *Default:* undefined

A list of Capacity Provider strategies used to place a service.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* No certificate associated with the load balancer, if using the HTTP protocol. For HTTPS, a DNS-validated certificate will be created for the load balancer's specified domain name if a domain name and domain zone are specified.

Certificate Manager certificate to associate with the load balancer.

Setting this option will set the load balancer protocol to HTTPS.

---

##### `circuitBreaker`<sup>Optional</sup> <a name="circuitBreaker" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.circuitBreaker"></a>

```typescript
public readonly circuitBreaker: DeploymentCircuitBreaker;
```

- *Type:* aws-cdk-lib.aws_ecs.DeploymentCircuitBreaker
- *Default:* disabled

Whether to enable the deployment circuit breaker.

If this property is defined, circuit breaker will be implicitly
enabled.

---

##### `cloudMapOptions`<sup>Optional</sup> <a name="cloudMapOptions" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.cloudMapOptions"></a>

```typescript
public readonly cloudMapOptions: CloudMapOptions;
```

- *Type:* aws-cdk-lib.aws_ecs.CloudMapOptions
- *Default:* AWS Cloud Map service discovery is not enabled.

The options for configuring an Amazon ECS service to use service discovery.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* create a new cluster; if both cluster and vpc are omitted, a new VPC will be created for you.

The name of the cluster that hosts the service.

If a cluster is specified, the vpc construct should be omitted. Alternatively, you can omit both cluster and vpc.

---

##### `deploymentController`<sup>Optional</sup> <a name="deploymentController" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.deploymentController"></a>

```typescript
public readonly deploymentController: DeploymentController;
```

- *Type:* aws-cdk-lib.aws_ecs.DeploymentController
- *Default:* Rolling update (ECS)

Specifies which deployment controller to use for the service.

For more information, see
[Amazon ECS Deployment Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html)

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number
- *Default:* The default is 1 for all new services and uses the existing service's desired count when updating an existing service.

The desired number of instantiations of the task definition to keep running on the service.

The minimum value is 1

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string
- *Default:* No domain name.

The domain name for the service, e.g. "api.example.com.".

---

##### `domainZone`<sup>Optional</sup> <a name="domainZone" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.domainZone"></a>

```typescript
public readonly domainZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone
- *Default:* No Route53 hosted domain zone.

The Route53 hosted zone for the domain, e.g. "example.com.".

---

##### `enableECSManagedTags`<sup>Optional</sup> <a name="enableECSManagedTags" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.enableECSManagedTags"></a>

```typescript
public readonly enableECSManagedTags: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether to enable Amazon ECS managed tags for the tasks within the service.

For more information, see
[Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html)

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether ECS Exec should be enabled.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* defaults to 60 seconds if at least one load balancer is in-use and it is not already set

The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* CloudFormation sets idle timeout to 60 seconds

The load balancer idle timeout, in seconds.

Can be between 1 and 4000 seconds

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType
- *Default:* IpAddressType.IPV4

The type of IP address to use.

---

##### `listenerPort`<sup>Optional</sup> <a name="listenerPort" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number
- *Default:* The default listener port is determined from the protocol (port 80 for HTTP, port 443 for HTTPS). A domain name and zone must be also be specified if using HTTPS.

Listener port of the application load balancer that will serve traffic to the service.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer
- *Default:* a new load balancer will be created.

The application load balancer that will serve traffic to the service.

The VPC attribute of a load balancer must be specified for it to be used
to create a new service with this pattern.

[disable-awslint:ref-via-interface]

---

##### `loadBalancerName`<sup>Optional</sup> <a name="loadBalancerName" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string
- *Default:* Automatically generated name.

Name of the load balancer.

---

##### `maxHealthyPercent`<sup>Optional</sup> <a name="maxHealthyPercent" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.maxHealthyPercent"></a>

```typescript
public readonly maxHealthyPercent: number;
```

- *Type:* number
- *Default:* 100 if daemon, otherwise 200

The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment.

---

##### `minHealthyPercent`<sup>Optional</sup> <a name="minHealthyPercent" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.minHealthyPercent"></a>

```typescript
public readonly minHealthyPercent: number;
```

- *Type:* number
- *Default:* 0 if daemon, otherwise 50

The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment.

---

##### `openListener`<sup>Optional</sup> <a name="openListener" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.openListener"></a>

```typescript
public readonly openListener: boolean;
```

- *Type:* boolean
- *Default:* true -- The security group allows ingress from all IP addresses.

Determines whether or not the Security Group for the Load Balancer's Listener will be open to all traffic by default.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.propagateTags"></a>

```typescript
public readonly propagateTags: PropagatedTagSource;
```

- *Type:* aws-cdk-lib.aws_ecs.PropagatedTagSource
- *Default:* none

Specifies whether to propagate the tags from the task definition or the service to the tasks in the service.

Tags can only be propagated to the tasks within the service during service creation.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.protocol"></a>

```typescript
public readonly protocol: ApplicationProtocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol
- *Default:* HTTP. If a certificate is specified, the protocol will be set by default to HTTPS.

The protocol for connections from clients to the load balancer.

The load balancer port is determined from the protocol (port 80 for
HTTP, port 443 for HTTPS).  If HTTPS, either a certificate or domain
name and domain zone must also be specified.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: ApplicationProtocolVersion;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion
- *Default:* ApplicationProtocolVersion.HTTP1

The protocol version to use.

---

##### `publicLoadBalancer`<sup>Optional</sup> <a name="publicLoadBalancer" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.publicLoadBalancer"></a>

```typescript
public readonly publicLoadBalancer: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether the Load Balancer will be internet-facing.

---

##### `recordType`<sup>Optional</sup> <a name="recordType" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.recordType"></a>

```typescript
public readonly recordType: ApplicationLoadBalancedServiceRecordType;
```

- *Type:* aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedServiceRecordType
- *Default:* ApplicationLoadBalancedServiceRecordType.ALIAS

Specifies whether the Route53 record should be a CNAME, an A record using the Alias feature or no record at all.

This is useful if you need to work with DNS systems that do not support alias records.

---

##### `redirectHTTP`<sup>Optional</sup> <a name="redirectHTTP" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.redirectHTTP"></a>

```typescript
public readonly redirectHTTP: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the load balancer should redirect traffic on port 80 to the {@link listenerPort} to support HTTP->HTTPS redirects.

This is only valid if the protocol of the ALB is HTTPS.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string
- *Default:* CloudFormation-generated name.

The name of the service.

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: SslPolicy;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.SslPolicy
- *Default:* The recommended elastic load balancing security policy

The security policy that defines which ciphers and protocols are supported by the ALB Listener.

---

##### `targetProtocol`<sup>Optional</sup> <a name="targetProtocol" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.targetProtocol"></a>

```typescript
public readonly targetProtocol: ApplicationProtocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol
- *Default:* HTTP.

The protocol for connections from the load balancer to the ECS tasks.

The default target port is determined from the protocol (port 80 for
HTTP, port 443 for HTTPS).

---

##### `taskImageOptions`<sup>Optional</sup> <a name="taskImageOptions" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.taskImageOptions"></a>

```typescript
public readonly taskImageOptions: ApplicationLoadBalancedTaskImageOptions;
```

- *Type:* aws-cdk-lib.aws_ecs_patterns.ApplicationLoadBalancedTaskImageOptions
- *Default:* none

The properties required to create a new task definition.

TaskDefinition or TaskImageOptions must be specified, but not both.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* uses the VPC defined in the cluster or creates a new VPC.

The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed.

If a vpc is specified, the cluster construct should be omitted. Alternatively, you can omit both vpc and cluster.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number
- *Default:* none

The number of cpu units used by the task.

Valid values, which determines your range of valid values for the memory parameter:

256 (.25 vCPU) - Available memory values: 0.5GB, 1GB, 2GB

512 (.5 vCPU) - Available memory values: 1GB, 2GB, 3GB, 4GB

1024 (1 vCPU) - Available memory values: 2GB, 3GB, 4GB, 5GB, 6GB, 7GB, 8GB

2048 (2 vCPU) - Available memory values: Between 4GB and 16GB in 1GB increments

4096 (4 vCPU) - Available memory values: Between 8GB and 30GB in 1GB increments

This default is set in the underlying FargateTaskDefinition construct.

---

##### `memoryLimitMiB`<sup>Optional</sup> <a name="memoryLimitMiB" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.memoryLimitMiB"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* number
- *Default:* No memory limit.

The hard limit (in MiB) of memory to present to the container.

If your container attempts to exceed the allocated memory, the container
is terminated.

At least one of memoryLimitMiB and memoryReservationMiB is required.

---

##### `memoryReservationMiB`<sup>Optional</sup> <a name="memoryReservationMiB" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.memoryReservationMiB"></a>

```typescript
public readonly memoryReservationMiB: number;
```

- *Type:* number
- *Default:* No memory reserved.

The soft limit (in MiB) of memory to reserve for the container.

When system memory is under contention, Docker attempts to keep the
container memory within the limit. If the container requires more memory,
it can consume up to the value specified by the Memory property or all of
the available memory on the container instance—whichever comes first.

At least one of memoryLimitMiB and memoryReservationMiB is required.

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: PlacementConstraint[];
```

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint[]
- *Default:* No constraints.

The placement constraints to use for tasks in the service.

For more information, see
[Amazon ECS Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html).

---

##### `placementStrategies`<sup>Optional</sup> <a name="placementStrategies" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.placementStrategies"></a>

```typescript
public readonly placementStrategies: PlacementStrategy[];
```

- *Type:* aws-cdk-lib.aws_ecs.PlacementStrategy[]
- *Default:* No strategies.

The placement strategies to use for tasks in the service.

For more information, see
[Amazon ECS Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html).

---

##### `taskDefinition`<sup>Optional</sup> <a name="taskDefinition" id="aws-cdk-neuronx-patterns.ApplicationLoadBalancedVllmNxDInferenceServiceProps.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: Ec2TaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.Ec2TaskDefinition
- *Default:* none

The task definition to use for tasks in the service. TaskDefinition or TaskImageOptions must be specified, but not both..

[disable-awslint:ref-via-interface]

---

### ModelConfig <a name="ModelConfig" id="aws-cdk-neuronx-patterns.ModelConfig"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.ModelConfig.Initializer"></a>

```typescript
import { ModelConfig } from 'aws-cdk-neuronx-patterns'

const modelConfig: ModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ModelConfig.property.attentionHeads">attentionHeads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ModelConfig.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ModelConfig.property.layers">layers</a></code> | <code>number</code> | *No description.* |

---

##### `attentionHeads`<sup>Required</sup> <a name="attentionHeads" id="aws-cdk-neuronx-patterns.ModelConfig.property.attentionHeads"></a>

```typescript
public readonly attentionHeads: number;
```

- *Type:* number

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="aws-cdk-neuronx-patterns.ModelConfig.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `layers`<sup>Required</sup> <a name="layers" id="aws-cdk-neuronx-patterns.ModelConfig.property.layers"></a>

```typescript
public readonly layers: number;
```

- *Type:* number

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
| <code><a href="#aws-cdk-neuronx-patterns.ModelOptions.property.config">config</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ModelConfig">ModelConfig</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ModelOptions.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.ModelOptions.property.parameters"></a>

```typescript
public readonly parameters: Parameters;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Parameters">Parameters</a>

---

##### `config`<sup>Optional</sup> <a name="config" id="aws-cdk-neuronx-patterns.ModelOptions.property.config"></a>

```typescript
public readonly config: ModelConfig;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelConfig">ModelConfig</a>

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="aws-cdk-neuronx-patterns.ModelOptions.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

### NeuronxBatchComputeEnvironmentProps <a name="NeuronxBatchComputeEnvironmentProps" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps"></a>

Props of NeuronxBatch.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.Initializer"></a>

```typescript
import { NeuronxBatchComputeEnvironmentProps } from 'aws-cdk-neuronx-patterns'

const neuronxBatchComputeEnvironmentProps: NeuronxBatchComputeEnvironmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>string</code> | The name of the ComputeEnvironment. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.enabled">enabled</a></code> | <code>boolean</code> | Whether or not this ComputeEnvironment can accept jobs from a Queue. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.serviceRole">serviceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role Batch uses to perform actions on your behalf in your account, such as provision instances to run your jobs. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC in which this Compute Environment will launch Instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.maxvCpus">maxvCpus</a></code> | <code>number</code> | The maximum vCpus this `ManagedComputeEnvironment` can scale up to. Each vCPU is equivalent to 1024 CPU shares. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.replaceComputeEnvironment">replaceComputeEnvironment</a></code> | <code>boolean</code> | Specifies whether this Compute Environment is replaced if an update is made that requires replacing its instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The security groups this Compute Environment will launch instances in. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.spot">spot</a></code> | <code>boolean</code> | Whether or not to use spot instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.terminateOnUpdate">terminateOnUpdate</a></code> | <code>boolean</code> | Whether or not any running jobs will be immediately terminated when an infrastructure update occurs. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.updateTimeout">updateTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Only meaningful if `terminateOnUpdate` is `false`. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.updateToLatestImageVersion">updateToLatestImageVersion</a></code> | <code>boolean</code> | Whether or not the AMI is updated to the latest one supported by Batch when an infrastructure update occurs. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The VPC Subnets this Compute Environment will launch instances in. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.allocationStrategy">allocationStrategy</a></code> | <code>aws-cdk-lib.aws_batch.AllocationStrategy</code> | The allocation strategy to use if not enough instances of the best fitting instance type can be allocated. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.defaultInstanceClasses">defaultInstanceClasses</a></code> | <code>aws-cdk-lib.aws_batch.DefaultInstanceClass[]</code> | Use batch's default instance types. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.images">images</a></code> | <code>aws-cdk-lib.aws_batch.EcsMachineImage[]</code> | Configure which AMIs this Compute Environment can launch. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.instanceClasses">instanceClasses</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceClass[]</code> | The instance classes that this Compute Environment can launch. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.instanceRole">instanceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution Role that instances launched by this Compute Environment will use. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.instanceTypes">instanceTypes</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType[]</code> | The instance types that this Compute Environment can launch. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.launchTemplate">launchTemplate</a></code> | <code>aws-cdk-lib.aws_ec2.ILaunchTemplate</code> | The Launch Template that this Compute Environment will use to provision EC2 Instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.minvCpus">minvCpus</a></code> | <code>number</code> | The minimum vCPUs that an environment should maintain, even if the compute environment is DISABLED. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.placementGroup">placementGroup</a></code> | <code>aws-cdk-lib.interfaces.aws_ec2.IPlacementGroupRef</code> | The EC2 placement group to associate with your compute resources. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.spotBidPercentage">spotBidPercentage</a></code> | <code>number</code> | The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.spotFleetRole">spotFleetRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The service-linked role that Spot Fleet needs to launch instances on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.useOptimalInstanceClasses">useOptimalInstanceClasses</a></code> | <code>boolean</code> | Whether or not to use batch's optimal instance type. |

---

##### `computeEnvironmentName`<sup>Optional</sup> <a name="computeEnvironmentName" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.computeEnvironmentName"></a>

```typescript
public readonly computeEnvironmentName: string;
```

- *Type:* string
- *Default:* generated by CloudFormation

The name of the ComputeEnvironment.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Whether or not this ComputeEnvironment can accept jobs from a Queue.

Enabled ComputeEnvironments can accept jobs from a Queue and
can scale instances up or down.
Disabled ComputeEnvironments cannot accept jobs from a Queue or
scale instances up or down.

If you change a ComputeEnvironment from enabled to disabled while it is executing jobs,
Jobs in the `STARTED` or `RUNNING` states will not
be interrupted. As jobs complete, the ComputeEnvironment will scale instances down to `minvCpus`.

To ensure you aren't billed for unused capacity, set `minvCpus` to `0`.

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.serviceRole"></a>

```typescript
public readonly serviceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a serviceRole will be created for managed CEs, none for unmanaged CEs

The role Batch uses to perform actions on your behalf in your account, such as provision instances to run your jobs.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC in which this Compute Environment will launch Instances.

---

##### `maxvCpus`<sup>Optional</sup> <a name="maxvCpus" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.maxvCpus"></a>

```typescript
public readonly maxvCpus: number;
```

- *Type:* number
- *Default:* 256

The maximum vCpus this `ManagedComputeEnvironment` can scale up to. Each vCPU is equivalent to 1024 CPU shares.

*Note*: if this Compute Environment uses EC2 resources (not Fargate) with either `AllocationStrategy.BEST_FIT_PROGRESSIVE` or
`AllocationStrategy.SPOT_CAPACITY_OPTIMIZED`, or `AllocationStrategy.BEST_FIT` with Spot instances,
The scheduler may exceed this number by at most one of the instances specified in `instanceTypes`
or `instanceClasses`.

---

##### `replaceComputeEnvironment`<sup>Optional</sup> <a name="replaceComputeEnvironment" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.replaceComputeEnvironment"></a>

```typescript
public readonly replaceComputeEnvironment: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether this Compute Environment is replaced if an update is made that requires replacing its instances.

To enable more properties to be updated,
set this property to `false`. When changing the value of this property to false,
do not change any other properties at the same time.
If other properties are changed at the same time,
and the change needs to be rolled back but it can't,
it's possible for the stack to go into the UPDATE_ROLLBACK_FAILED state.
You can't update a stack that is in the UPDATE_ROLLBACK_FAILED state.
However, if you can continue to roll it back,
you can return the stack to its original settings and then try to update it again.

The properties which require a replacement of the Compute Environment are:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html)

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* new security groups will be created

The security groups this Compute Environment will launch instances in.

---

##### `spot`<sup>Optional</sup> <a name="spot" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not to use spot instances.

Spot instances are less expensive EC2 instances that can be
reclaimed by EC2 at any time; your job will be given two minutes
of notice before reclamation.

---

##### `terminateOnUpdate`<sup>Optional</sup> <a name="terminateOnUpdate" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.terminateOnUpdate"></a>

```typescript
public readonly terminateOnUpdate: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not any running jobs will be immediately terminated when an infrastructure update occurs.

If this is enabled, any terminated jobs may be retried, depending on the job's
retry policy.

> [https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html)

---

##### `updateTimeout`<sup>Optional</sup> <a name="updateTimeout" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.updateTimeout"></a>

```typescript
public readonly updateTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 30 minutes

Only meaningful if `terminateOnUpdate` is `false`.

If so,
when an infrastructure update is triggered, any running jobs
will be allowed to run until `updateTimeout` has expired.

> [https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html)

---

##### `updateToLatestImageVersion`<sup>Optional</sup> <a name="updateToLatestImageVersion" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.updateToLatestImageVersion"></a>

```typescript
public readonly updateToLatestImageVersion: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not the AMI is updated to the latest one supported by Batch when an infrastructure update occurs.

If you specify a specific AMI, this property will be ignored.

Note: the CDK will never set this value by default, `false` will set by CFN.
This is to avoid a deployment failure that occurs when this value is set.

> [https://github.com/aws/aws-cdk/issues/27054](https://github.com/aws/aws-cdk/issues/27054)

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* new subnets will be created

The VPC Subnets this Compute Environment will launch instances in.

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: AllocationStrategy;
```

- *Type:* aws-cdk-lib.aws_batch.AllocationStrategy
- *Default:* `BEST_FIT_PROGRESSIVE` if not using Spot instances, `SPOT_PRICE_CAPACITY_OPTIMIZED` if using Spot instances.

The allocation strategy to use if not enough instances of the best fitting instance type can be allocated.

---

##### `defaultInstanceClasses`<sup>Optional</sup> <a name="defaultInstanceClasses" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.defaultInstanceClasses"></a>

```typescript
public readonly defaultInstanceClasses: DefaultInstanceClass[];
```

- *Type:* aws-cdk-lib.aws_batch.DefaultInstanceClass[]
- *Default:* choose from instanceTypes and instanceClasses

Use batch's default instance types.

A simpler way to choose up-to-date instance classes based on region
instead of specifying exact instance classes.

> [https://docs.aws.amazon.com/batch/latest/userguide/instance-type-compute-table.html](https://docs.aws.amazon.com/batch/latest/userguide/instance-type-compute-table.html)

---

##### `images`<sup>Optional</sup> <a name="images" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.images"></a>

```typescript
public readonly images: EcsMachineImage[];
```

- *Type:* aws-cdk-lib.aws_batch.EcsMachineImage[]
- *Default:* ECS_AL2 for non-GPU instances, ECS_AL2_NVIDIA for GPU instances

Configure which AMIs this Compute Environment can launch.

If you specify this property with only `image` specified, then the
`imageType` will default to `ECS_AL2`. *If your image needs GPU resources,
specify `ECS_AL2_NVIDIA`; otherwise, the instances will not be able to properly
join the ComputeEnvironment*.

---

##### `instanceClasses`<sup>Optional</sup> <a name="instanceClasses" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.instanceClasses"></a>

```typescript
public readonly instanceClasses: InstanceClass[];
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceClass[]
- *Default:* the instances Batch considers will be used (currently C4, M4, and R4)

The instance classes that this Compute Environment can launch.

Which one is chosen depends on the `AllocationStrategy` used.
Batch will automatically choose the instance size.

---

##### `instanceRole`<sup>Optional</sup> <a name="instanceRole" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.instanceRole"></a>

```typescript
public readonly instanceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a role will be created

The execution Role that instances launched by this Compute Environment will use.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: InstanceType[];
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType[]
- *Default:* the instances Batch considers will be used (currently C4, M4, and R4)

The instance types that this Compute Environment can launch.

Which one is chosen depends on the `AllocationStrategy` used.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: ILaunchTemplate;
```

- *Type:* aws-cdk-lib.aws_ec2.ILaunchTemplate
- *Default:* no launch template

The Launch Template that this Compute Environment will use to provision EC2 Instances.

*Note*: if `securityGroups` is specified on both your
launch template and this Compute Environment, **the
`securityGroup`s on the Compute Environment override the
ones on the launch template.

---

##### `minvCpus`<sup>Optional</sup> <a name="minvCpus" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.minvCpus"></a>

```typescript
public readonly minvCpus: number;
```

- *Type:* number
- *Default:* 0

The minimum vCPUs that an environment should maintain, even if the compute environment is DISABLED.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.placementGroup"></a>

```typescript
public readonly placementGroup: IPlacementGroupRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_ec2.IPlacementGroupRef
- *Default:* no placement group

The EC2 placement group to associate with your compute resources.

If you intend to submit multi-node parallel jobs to this Compute Environment,
you should consider creating a cluster placement group and associate it with your compute resources.
This keeps your multi-node parallel job on a logical grouping of instances
within a single Availability Zone with high network flow potential.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)

---

##### `spotBidPercentage`<sup>Optional</sup> <a name="spotBidPercentage" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.spotBidPercentage"></a>

```typescript
public readonly spotBidPercentage: number;
```

- *Type:* number
- *Default:* 100%

The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched.

For example, if your maximum percentage is 20%, the Spot price must be
less than 20% of the current On-Demand price for that Instance.
You always pay the lowest market price and never more than your maximum percentage.
For most use cases, Batch recommends leaving this field empty.

Implies `spot == true` if set

---

##### `spotFleetRole`<sup>Optional</sup> <a name="spotFleetRole" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.spotFleetRole"></a>

```typescript
public readonly spotFleetRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created

The service-linked role that Spot Fleet needs to launch instances on your behalf.

> [https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html](https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html)

---

##### `useOptimalInstanceClasses`<sup>Optional</sup> <a name="useOptimalInstanceClasses" id="aws-cdk-neuronx-patterns.NeuronxBatchComputeEnvironmentProps.property.useOptimalInstanceClasses"></a>

```typescript
public readonly useOptimalInstanceClasses: boolean;
```

- *Type:* boolean
- *Default:* true

Whether or not to use batch's optimal instance type.

The optimal instance type is equivalent to adding the
C4, M4, and R4 instance classes. You can specify other instance classes
(of the same architecture) in addition to the optimal instance classes.

---

### NeuronxBatchEcsJobDefinitionProps <a name="NeuronxBatchEcsJobDefinitionProps" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps"></a>

Props of NeuronxBatch.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.Initializer"></a>

```typescript
import { NeuronxBatchEcsJobDefinitionProps } from 'aws-cdk-neuronx-patterns'

const neuronxBatchEcsJobDefinitionProps: NeuronxBatchEcsJobDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.cpu">cpu</a></code> | <code>number</code> | The number of vCPUs reserved for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | The image that this container will run. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.memory">memory</a></code> | <code>aws-cdk-lib.Size</code> | The memory hard limit present to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.command">command</a></code> | <code>string[]</code> | The command that's passed to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Determines whether execute command functionality is turned on for this task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to a container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by Amazon ECS container and AWS Fargate agents to make AWS API calls on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.jobRole">jobRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role that the container can assume. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.linuxParameters">linuxParameters</a></code> | <code>aws-cdk-lib.aws_batch.LinuxParameters</code> | Linux-specific modifications that are applied to the container, such as details for device mappings. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.logging">logging</a></code> | <code>aws-cdk-lib.aws_ecs.LogDriver</code> | The loging configuration for this Job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.readonlyRootFilesystem">readonlyRootFilesystem</a></code> | <code>boolean</code> | Gives the container readonly access to its root filesystem. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.secrets">secrets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_batch.Secret}</code> | A map from environment variable names to the secrets for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.user">user</a></code> | <code>string</code> | The user name to use inside the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.volumes">volumes</a></code> | <code>aws-cdk-lib.aws_batch.EcsVolume[]</code> | The volumes to mount to this container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.gpu">gpu</a></code> | <code>number</code> | The number of physical GPUs to reserve for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.privileged">privileged</a></code> | <code>boolean</code> | When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user). |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.ulimits">ulimits</a></code> | <code>aws-cdk-lib.aws_batch.Ulimit[]</code> | Limits to set for the user this docker container will run as. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | The name of this job definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | The default parameters passed to the container These parameters can be referenced in the `command` that you give to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The number of times to retry a job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.retryStrategies">retryStrategies</a></code> | <code>aws-cdk-lib.aws_batch.RetryStrategy[]</code> | Defines the retry behavior for this job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.schedulingPriority">schedulingPriority</a></code> | <code>number</code> | The priority of this Job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout time for jobs that are submitted with this job definition. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | *No description.* |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

The number of vCPUs reserved for the container.

Each vCPU is equivalent to 1,024 CPU shares.
For containers running on EC2 resources, you must specify at least one vCPU.

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

The image that this container will run.

---

##### `memory`<sup>Required</sup> <a name="memory" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.memory"></a>

```typescript
public readonly memory: Size;
```

- *Type:* aws-cdk-lib.Size

The memory hard limit present to the container.

If your container attempts to exceed the memory specified, the container is terminated.
You must specify at least 4 MiB of memory for a job.

---

##### `command`<sup>Optional</sup> <a name="command" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]
- *Default:* no command

The command that's passed to the container.

> [https://docs.docker.com/engine/reference/builder/#cmd](https://docs.docker.com/engine/reference/builder/#cmd)

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* undefined - AWS Batch default is false

Determines whether execute command functionality is turned on for this task.

If true, execute command functionality is turned on all the containers in the task.

This allows you to use ECS Exec to access containers interactively.
When enabled, a job role with required SSM permissions will be created automatically if no job role is provided.
If a job role is alreadyprovided, the required permissions will be added to it.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `environment`<sup>Optional</sup> <a name="environment" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables

The environment variables to pass to a container.

Cannot start with `AWS_BATCH`.
We don't recommend using plaintext environment variables for sensitive information, such as credential data.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a Role will be created

The role used by Amazon ECS container and AWS Fargate agents to make AWS API calls on your behalf.

> [https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html)

---

##### `jobRole`<sup>Optional</sup> <a name="jobRole" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.jobRole"></a>

```typescript
public readonly jobRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* no job role

The role that the container can assume.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)

---

##### `linuxParameters`<sup>Optional</sup> <a name="linuxParameters" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.linuxParameters"></a>

```typescript
public readonly linuxParameters: LinuxParameters;
```

- *Type:* aws-cdk-lib.aws_batch.LinuxParameters
- *Default:* none

Linux-specific modifications that are applied to the container, such as details for device mappings.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.logging"></a>

```typescript
public readonly logging: LogDriver;
```

- *Type:* aws-cdk-lib.aws_ecs.LogDriver
- *Default:* the log configuration of the Docker daemon

The loging configuration for this Job.

---

##### `readonlyRootFilesystem`<sup>Optional</sup> <a name="readonlyRootFilesystem" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.readonlyRootFilesystem"></a>

```typescript
public readonly readonlyRootFilesystem: boolean;
```

- *Type:* boolean
- *Default:* false

Gives the container readonly access to its root filesystem.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: Secret};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_batch.Secret}
- *Default:* no secrets

A map from environment variable names to the secrets for the container.

Allows your job definitions
to reference the secret by the environment variable name defined in this property.

> [https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html)

---

##### `user`<sup>Optional</sup> <a name="user" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string
- *Default:* no user

The user name to use inside the container.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.volumes"></a>

```typescript
public readonly volumes: EcsVolume[];
```

- *Type:* aws-cdk-lib.aws_batch.EcsVolume[]
- *Default:* no volumes

The volumes to mount to this container.

Automatically added to the job definition.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.gpu"></a>

```typescript
public readonly gpu: number;
```

- *Type:* number
- *Default:* no gpus

The number of physical GPUs to reserve for the container.

Make sure that the number of GPUs reserved for all containers in a job doesn't exceed
the number of available GPUs on the compute resource that the job is launched on.

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.privileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* boolean
- *Default:* false

When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user).

---

##### `ulimits`<sup>Optional</sup> <a name="ulimits" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.ulimits"></a>

```typescript
public readonly ulimits: Ulimit[];
```

- *Type:* aws-cdk-lib.aws_batch.Ulimit[]
- *Default:* no ulimits

Limits to set for the user this docker container will run as.

---

##### `jobDefinitionName`<sup>Optional</sup> <a name="jobDefinitionName" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string
- *Default:* generated by CloudFormation

The name of this job definition.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* none

The default parameters passed to the container These parameters can be referenced in the `command` that you give to the container.

> [https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html#parameters](https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html#parameters)

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 1

The number of times to retry a job.

The job is retried on failure the same number of attempts as the value.

---

##### `retryStrategies`<sup>Optional</sup> <a name="retryStrategies" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.retryStrategies"></a>

```typescript
public readonly retryStrategies: RetryStrategy[];
```

- *Type:* aws-cdk-lib.aws_batch.RetryStrategy[]
- *Default:* no `RetryStrategy`

Defines the retry behavior for this job.

---

##### `schedulingPriority`<sup>Optional</sup> <a name="schedulingPriority" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.schedulingPriority"></a>

```typescript
public readonly schedulingPriority: number;
```

- *Type:* number
- *Default:* none

The priority of this Job.

Only used in Fairshare Scheduling
to decide which job to run first when there are multiple jobs
with the same share identifier.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no timeout

The timeout time for jobs that are submitted with this job definition.

After the amount of time you specify passes,
Batch terminates your jobs if they aren't finished.

---

##### `neuronxInstanceType`<sup>Required</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.NeuronxBatchEcsJobDefinitionProps.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

---

### NeuronxBatchProps <a name="NeuronxBatchProps" id="aws-cdk-neuronx-patterns.NeuronxBatchProps"></a>

Props of NeuronxBatch.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.Initializer"></a>

```typescript
import { NeuronxBatchProps } from 'aws-cdk-neuronx-patterns'

const neuronxBatchProps: NeuronxBatchProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.cpu">cpu</a></code> | <code>number</code> | The number of vCPUs reserved for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | The image that this container will run. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.memory">memory</a></code> | <code>aws-cdk-lib.Size</code> | The memory hard limit present to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.command">command</a></code> | <code>string[]</code> | The command that's passed to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Determines whether execute command functionality is turned on for this task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to a container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by Amazon ECS container and AWS Fargate agents to make AWS API calls on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.jobRole">jobRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role that the container can assume. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.linuxParameters">linuxParameters</a></code> | <code>aws-cdk-lib.aws_batch.LinuxParameters</code> | Linux-specific modifications that are applied to the container, such as details for device mappings. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.logging">logging</a></code> | <code>aws-cdk-lib.aws_ecs.LogDriver</code> | The loging configuration for this Job. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.readonlyRootFilesystem">readonlyRootFilesystem</a></code> | <code>boolean</code> | Gives the container readonly access to its root filesystem. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.secrets">secrets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_batch.Secret}</code> | A map from environment variable names to the secrets for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.user">user</a></code> | <code>string</code> | The user name to use inside the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.volumes">volumes</a></code> | <code>aws-cdk-lib.aws_batch.EcsVolume[]</code> | The volumes to mount to this container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.gpu">gpu</a></code> | <code>number</code> | The number of physical GPUs to reserve for the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.privileged">privileged</a></code> | <code>boolean</code> | When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user). |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.ulimits">ulimits</a></code> | <code>aws-cdk-lib.aws_batch.Ulimit[]</code> | Limits to set for the user this docker container will run as. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | The instance type of worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.volumeSize">volumeSize</a></code> | <code>aws-cdk-lib.Size</code> | The root volume of worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC in which this will launch worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.spot">spot</a></code> | <code>boolean</code> | Whether or not to use spot instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxBatchProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The VPC Subnets this Compute Environment will launch instances in. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

The number of vCPUs reserved for the container.

Each vCPU is equivalent to 1,024 CPU shares.
For containers running on EC2 resources, you must specify at least one vCPU.

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

The image that this container will run.

---

##### `memory`<sup>Required</sup> <a name="memory" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.memory"></a>

```typescript
public readonly memory: Size;
```

- *Type:* aws-cdk-lib.Size

The memory hard limit present to the container.

If your container attempts to exceed the memory specified, the container is terminated.
You must specify at least 4 MiB of memory for a job.

---

##### `command`<sup>Optional</sup> <a name="command" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]
- *Default:* no command

The command that's passed to the container.

> [https://docs.docker.com/engine/reference/builder/#cmd](https://docs.docker.com/engine/reference/builder/#cmd)

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* undefined - AWS Batch default is false

Determines whether execute command functionality is turned on for this task.

If true, execute command functionality is turned on all the containers in the task.

This allows you to use ECS Exec to access containers interactively.
When enabled, a job role with required SSM permissions will be created automatically if no job role is provided.
If a job role is alreadyprovided, the required permissions will be added to it.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html)

---

##### `environment`<sup>Optional</sup> <a name="environment" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables

The environment variables to pass to a container.

Cannot start with `AWS_BATCH`.
We don't recommend using plaintext environment variables for sensitive information, such as credential data.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a Role will be created

The role used by Amazon ECS container and AWS Fargate agents to make AWS API calls on your behalf.

> [https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html)

---

##### `jobRole`<sup>Optional</sup> <a name="jobRole" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.jobRole"></a>

```typescript
public readonly jobRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* no job role

The role that the container can assume.

> [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)

---

##### `linuxParameters`<sup>Optional</sup> <a name="linuxParameters" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.linuxParameters"></a>

```typescript
public readonly linuxParameters: LinuxParameters;
```

- *Type:* aws-cdk-lib.aws_batch.LinuxParameters
- *Default:* none

Linux-specific modifications that are applied to the container, such as details for device mappings.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.logging"></a>

```typescript
public readonly logging: LogDriver;
```

- *Type:* aws-cdk-lib.aws_ecs.LogDriver
- *Default:* the log configuration of the Docker daemon

The loging configuration for this Job.

---

##### `readonlyRootFilesystem`<sup>Optional</sup> <a name="readonlyRootFilesystem" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.readonlyRootFilesystem"></a>

```typescript
public readonly readonlyRootFilesystem: boolean;
```

- *Type:* boolean
- *Default:* false

Gives the container readonly access to its root filesystem.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: Secret};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_batch.Secret}
- *Default:* no secrets

A map from environment variable names to the secrets for the container.

Allows your job definitions
to reference the secret by the environment variable name defined in this property.

> [https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html)

---

##### `user`<sup>Optional</sup> <a name="user" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string
- *Default:* no user

The user name to use inside the container.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.volumes"></a>

```typescript
public readonly volumes: EcsVolume[];
```

- *Type:* aws-cdk-lib.aws_batch.EcsVolume[]
- *Default:* no volumes

The volumes to mount to this container.

Automatically added to the job definition.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.gpu"></a>

```typescript
public readonly gpu: number;
```

- *Type:* number
- *Default:* no gpus

The number of physical GPUs to reserve for the container.

Make sure that the number of GPUs reserved for all containers in a job doesn't exceed
the number of available GPUs on the compute resource that the job is launched on.

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.privileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* boolean
- *Default:* false

When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user).

---

##### `ulimits`<sup>Optional</sup> <a name="ulimits" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.ulimits"></a>

```typescript
public readonly ulimits: Ulimit[];
```

- *Type:* aws-cdk-lib.aws_batch.Ulimit[]
- *Default:* no ulimits

Limits to set for the user this docker container will run as.

---

##### `neuronxInstanceType`<sup>Required</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

The instance type of worker instance.

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.volumeSize"></a>

```typescript
public readonly volumeSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* N bilion parameters * 5GiB EBS

The root volume of worker instance.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC in which this will launch worker instance.

---

##### `spot`<sup>Optional</sup> <a name="spot" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not to use spot instances.

Spot instances are less expensive EC2 instances that can be reclaimed by EC2 at any time;
your job will be given two minutes of notice before reclamation.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="aws-cdk-neuronx-patterns.NeuronxBatchProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* new subnets will be created

The VPC Subnets this Compute Environment will launch instances in.

---

### NeuronxCompiledModel <a name="NeuronxCompiledModel" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel.Initializer"></a>

```typescript
import { NeuronxCompiledModel } from 'aws-cdk-neuronx-patterns'

const neuronxCompiledModel: NeuronxCompiledModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket to upload compiled artifacts. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.compileTimeInstanceType">compileTimeInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.modelName">modelName</a></code> | <code>string</code> | The model name. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | S3 prefix that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.s3Uri">s3Uri</a></code> | <code>string</code> | S3 URL that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.weightSize">weightSize</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket to upload compiled artifacts.

---

##### `compileTimeInstanceType`<sup>Required</sup> <a name="compileTimeInstanceType" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.compileTimeInstanceType"></a>

```typescript
public readonly compileTimeInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The model name.

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

S3 prefix that compiled artifact uploaded.

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

S3 URL that compiled artifact uploaded.

---

##### `weightSize`<sup>Required</sup> <a name="weightSize" id="aws-cdk-neuronx-patterns.NeuronxCompiledModel.property.weightSize"></a>

```typescript
public readonly weightSize: Size;
```

- *Type:* aws-cdk-lib.Size

---

### NeuronxCompilerProps <a name="NeuronxCompilerProps" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps"></a>

Props of NeuronxCompiler.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.Initializer"></a>

```typescript
import { NeuronxCompilerProps } from 'aws-cdk-neuronx-patterns'

const neuronxCompilerProps: NeuronxCompilerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.artifactS3Prefix">artifactS3Prefix</a></code> | <code>string</code> | S3 Prefix that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket to upload compiled artifacts. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.image">image</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage">INeuronxContainerImage</a></code> | An image of the container where the compile job is executed. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.model">model</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Model">Model</a></code> | The model to be compiled. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | The instance type of compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC in which this will launch compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.secrets">secrets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_batch.Secret}</code> | Secrets to pass to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.spot">spot</a></code> | <code>boolean</code> | Whether or not to use spot instances. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.volumeSize">volumeSize</a></code> | <code>aws-cdk-lib.Size</code> | The root volume of worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The VPC Subnets this Compute Environment will launch instances in. |

---

##### `artifactS3Prefix`<sup>Required</sup> <a name="artifactS3Prefix" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.artifactS3Prefix"></a>

```typescript
public readonly artifactS3Prefix: string;
```

- *Type:* string

S3 Prefix that compiled artifact uploaded.

This property is not depends on compile job finish.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket to upload compiled artifacts.

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.image"></a>

```typescript
public readonly image: INeuronxContainerImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage">INeuronxContainerImage</a>

An image of the container where the compile job is executed.

---

##### `model`<sup>Required</sup> <a name="model" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.model"></a>

```typescript
public readonly model: Model;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Model">Model</a>

The model to be compiled.

---

##### `neuronxInstanceType`<sup>Required</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

The instance type of compile worker instance.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC in which this will launch compile worker instance.

---

##### `command`<sup>Optional</sup> <a name="command" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

The environment variables to pass to the container.

This is only applicable when using container runtime.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: Secret};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_batch.Secret}

Secrets to pass to the container.

---

##### `spot`<sup>Optional</sup> <a name="spot" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not to use spot instances.

Spot instances are less expensive EC2 instances that can be reclaimed by EC2 at any time; your job will be given two minutes of notice before reclamation.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.volumeSize"></a>

```typescript
public readonly volumeSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* N bilion parameters * 5GiB EBS

The root volume of worker instance.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="aws-cdk-neuronx-patterns.NeuronxCompilerProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* new subnets will be created

The VPC Subnets this Compute Environment will launch instances in.

---

### NeuronxTaskDefinitionProps <a name="NeuronxTaskDefinitionProps" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.Initializer"></a>

```typescript
import { NeuronxTaskDefinitionProps } from 'aws-cdk-neuronx-patterns'

const neuronxTaskDefinitionProps: NeuronxTaskDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.enableFaultInjection">enableFaultInjection</a></code> | <code>boolean</code> | Enables fault injection and allows for fault injection requests to be accepted from the task's containers. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.proxyConfiguration">proxyConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ProxyConfiguration</code> | The configuration details for the App Mesh proxy. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.volumes">volumes</a></code> | <code>aws-cdk-lib.aws_ecs.Volume[]</code> | The list of volume definitions for the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code>aws-cdk-lib.aws_ecs.InferenceAccelerator[]</code> | The inference accelerators to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.ipcMode">ipcMode</a></code> | <code>aws-cdk-lib.aws_ecs.IpcMode</code> | The IPC resource namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.networkMode">networkMode</a></code> | <code>aws-cdk-lib.aws_ecs.NetworkMode</code> | The Docker networking mode to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.pidMode">pidMode</a></code> | <code>aws-cdk-lib.aws_ecs.PidMode</code> | The process namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.placementConstraints">placementConstraints</a></code> | <code>aws-cdk-lib.aws_ecs.PlacementConstraint[]</code> | An array of placement constraint objects to use for the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | The instance type of compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | The number of tensor parallel size. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.compiledModel">compiledModel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a></code> | The model to be compiled. |

---

##### `enableFaultInjection`<sup>Optional</sup> <a name="enableFaultInjection" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.enableFaultInjection"></a>

```typescript
public readonly enableFaultInjection: boolean;
```

- *Type:* boolean
- *Default:* undefined - ECS default setting is false

Enables fault injection and allows for fault injection requests to be accepted from the task's containers.

Fault injection only works with tasks using the {@link NetworkMode.AWS_VPC} or {@link NetworkMode.HOST} network modes.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* An execution role will be automatically created if you use ECR images in your task definition.

The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf.

The role will be used to retrieve container images from ECR and create CloudWatch log groups.

---

##### `family`<sup>Optional</sup> <a name="family" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string
- *Default:* Automatically generated name.

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `proxyConfiguration`<sup>Optional</sup> <a name="proxyConfiguration" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.proxyConfiguration"></a>

```typescript
public readonly proxyConfiguration: ProxyConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ProxyConfiguration
- *Default:* No proxy configuration.

The configuration details for the App Mesh proxy.

---

##### `taskRole`<sup>Optional</sup> <a name="taskRole" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A task role is automatically created for you.

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.volumes"></a>

```typescript
public readonly volumes: Volume[];
```

- *Type:* aws-cdk-lib.aws_ecs.Volume[]
- *Default:* No volumes are passed to the Docker daemon on a container instance.

The list of volume definitions for the task.

For more information, see
[Task Definition Parameter Volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide//task_definition_parameters.html#volumes).

---

##### `inferenceAccelerators`<sup>Optional</sup> <a name="inferenceAccelerators" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: InferenceAccelerator[];
```

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator[]
- *Default:* No inference accelerators.

The inference accelerators to use for the containers in the task.

Not supported in Fargate.

---

##### `ipcMode`<sup>Optional</sup> <a name="ipcMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.ipcMode"></a>

```typescript
public readonly ipcMode: IpcMode;
```

- *Type:* aws-cdk-lib.aws_ecs.IpcMode
- *Default:* IpcMode used by the task is not specified

The IPC resource namespace to use for the containers in the task.

Not supported in Fargate and Windows containers.

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.networkMode"></a>

```typescript
public readonly networkMode: NetworkMode;
```

- *Type:* aws-cdk-lib.aws_ecs.NetworkMode
- *Default:* NetworkMode.BRIDGE for EC2 tasks, AWS_VPC for Fargate tasks.

The Docker networking mode to use for the containers in the task.

The valid values are NONE, BRIDGE, AWS_VPC, and HOST.

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.pidMode"></a>

```typescript
public readonly pidMode: PidMode;
```

- *Type:* aws-cdk-lib.aws_ecs.PidMode
- *Default:* PidMode used by the task is not specified

The process namespace to use for the containers in the task.

Not supported in Windows containers.

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: PlacementConstraint[];
```

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint[]
- *Default:* No placement constraints.

An array of placement constraint objects to use for the task.

You can
specify a maximum of 10 constraints per task (this limit includes
constraints in the task definition and those specified at run time).

---

##### `neuronxInstanceType`<sup>Optional</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

The instance type of compile worker instance.

---

##### `tensorParallelSize`<sup>Optional</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number
- *Default:* 1

The number of tensor parallel size.

---

##### `compiledModel`<sup>Required</sup> <a name="compiledModel" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionProps.property.compiledModel"></a>

```typescript
public readonly compiledModel: NeuronxCompiledModel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a>

The model to be compiled.

---

### NeuronxTaskDefinitionPropsBase <a name="NeuronxTaskDefinitionPropsBase" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.Initializer"></a>

```typescript
import { NeuronxTaskDefinitionPropsBase } from 'aws-cdk-neuronx-patterns'

const neuronxTaskDefinitionPropsBase: NeuronxTaskDefinitionPropsBase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.enableFaultInjection">enableFaultInjection</a></code> | <code>boolean</code> | Enables fault injection and allows for fault injection requests to be accepted from the task's containers. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.proxyConfiguration">proxyConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ProxyConfiguration</code> | The configuration details for the App Mesh proxy. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.volumes">volumes</a></code> | <code>aws-cdk-lib.aws_ecs.Volume[]</code> | The list of volume definitions for the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code>aws-cdk-lib.aws_ecs.InferenceAccelerator[]</code> | The inference accelerators to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.ipcMode">ipcMode</a></code> | <code>aws-cdk-lib.aws_ecs.IpcMode</code> | The IPC resource namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.networkMode">networkMode</a></code> | <code>aws-cdk-lib.aws_ecs.NetworkMode</code> | The Docker networking mode to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.pidMode">pidMode</a></code> | <code>aws-cdk-lib.aws_ecs.PidMode</code> | The process namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.placementConstraints">placementConstraints</a></code> | <code>aws-cdk-lib.aws_ecs.PlacementConstraint[]</code> | An array of placement constraint objects to use for the task. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | The instance type of compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | The number of tensor parallel size. |

---

##### `enableFaultInjection`<sup>Optional</sup> <a name="enableFaultInjection" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.enableFaultInjection"></a>

```typescript
public readonly enableFaultInjection: boolean;
```

- *Type:* boolean
- *Default:* undefined - ECS default setting is false

Enables fault injection and allows for fault injection requests to be accepted from the task's containers.

Fault injection only works with tasks using the {@link NetworkMode.AWS_VPC} or {@link NetworkMode.HOST} network modes.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* An execution role will be automatically created if you use ECR images in your task definition.

The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf.

The role will be used to retrieve container images from ECR and create CloudWatch log groups.

---

##### `family`<sup>Optional</sup> <a name="family" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string
- *Default:* Automatically generated name.

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `proxyConfiguration`<sup>Optional</sup> <a name="proxyConfiguration" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.proxyConfiguration"></a>

```typescript
public readonly proxyConfiguration: ProxyConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ProxyConfiguration
- *Default:* No proxy configuration.

The configuration details for the App Mesh proxy.

---

##### `taskRole`<sup>Optional</sup> <a name="taskRole" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A task role is automatically created for you.

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.volumes"></a>

```typescript
public readonly volumes: Volume[];
```

- *Type:* aws-cdk-lib.aws_ecs.Volume[]
- *Default:* No volumes are passed to the Docker daemon on a container instance.

The list of volume definitions for the task.

For more information, see
[Task Definition Parameter Volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide//task_definition_parameters.html#volumes).

---

##### `inferenceAccelerators`<sup>Optional</sup> <a name="inferenceAccelerators" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: InferenceAccelerator[];
```

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator[]
- *Default:* No inference accelerators.

The inference accelerators to use for the containers in the task.

Not supported in Fargate.

---

##### `ipcMode`<sup>Optional</sup> <a name="ipcMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.ipcMode"></a>

```typescript
public readonly ipcMode: IpcMode;
```

- *Type:* aws-cdk-lib.aws_ecs.IpcMode
- *Default:* IpcMode used by the task is not specified

The IPC resource namespace to use for the containers in the task.

Not supported in Fargate and Windows containers.

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.networkMode"></a>

```typescript
public readonly networkMode: NetworkMode;
```

- *Type:* aws-cdk-lib.aws_ecs.NetworkMode
- *Default:* NetworkMode.BRIDGE for EC2 tasks, AWS_VPC for Fargate tasks.

The Docker networking mode to use for the containers in the task.

The valid values are NONE, BRIDGE, AWS_VPC, and HOST.

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.pidMode"></a>

```typescript
public readonly pidMode: PidMode;
```

- *Type:* aws-cdk-lib.aws_ecs.PidMode
- *Default:* PidMode used by the task is not specified

The process namespace to use for the containers in the task.

Not supported in Windows containers.

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: PlacementConstraint[];
```

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint[]
- *Default:* No placement constraints.

An array of placement constraint objects to use for the task.

You can
specify a maximum of 10 constraints per task (this limit includes
constraints in the task definition and those specified at run time).

---

##### `neuronxInstanceType`<sup>Optional</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

The instance type of compile worker instance.

---

##### `tensorParallelSize`<sup>Optional</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.NeuronxTaskDefinitionPropsBase.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number
- *Default:* 1

The number of tensor parallel size.

---

### VllmCacheConfig <a name="VllmCacheConfig" id="aws-cdk-neuronx-patterns.VllmCacheConfig"></a>

Configuration for the KV cache.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmCacheConfig.Initializer"></a>

```typescript
import { VllmCacheConfig } from 'aws-cdk-neuronx-patterns'

const vllmCacheConfig: VllmCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.blockSize">blockSize</a></code> | <code><a href="#aws-cdk-neuronx-patterns.BlockSize">BlockSize</a></code> | Size of a contiguous cache block in number of tokens. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.calculateKvScales">calculateKvScales</a></code> | <code>boolean</code> | This enables dynamic calculation of k_scale and v_scale when kv_cache_dtype is fp8. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.cpuOffloadGb">cpuOffloadGb</a></code> | <code>number</code> | The space in GiB to offload to CPU, per GPU. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.enablePrefixCaching">enablePrefixCaching</a></code> | <code>boolean</code> | Whether to enable prefix caching. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.gpuMemoryUtilization">gpuMemoryUtilization</a></code> | <code>number</code> | The fraction of GPU memory to be used for the model executor, which can range from 0 to 1. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.kvCacheDtype">kvCacheDtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.KvCacheDtype">KvCacheDtype</a></code> | Data type for kv cache storage. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.numGpuBlocksOverride">numGpuBlocksOverride</a></code> | <code>number</code> | Number of GPU blocks to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.prefixCachingHashAlgo">prefixCachingHashAlgo</a></code> | <code><a href="#aws-cdk-neuronx-patterns.PrefixCachingHashAlgo">PrefixCachingHashAlgo</a></code> | Set the hash algorithm for prefix caching. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmCacheConfig.property.swapSpace">swapSpace</a></code> | <code>number</code> | Size of the CPU swap space per GPU (in GiB). |

---

##### `blockSize`<sup>Optional</sup> <a name="blockSize" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.blockSize"></a>

```typescript
public readonly blockSize: BlockSize;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.BlockSize">BlockSize</a>

Size of a contiguous cache block in number of tokens.

This is ignored on neuron devices and set to –max-model-len. On CUDA devices, only block sizes up to 32 are supported.
On HPU devices, block size defaults to 128.

---

##### `calculateKvScales`<sup>Optional</sup> <a name="calculateKvScales" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.calculateKvScales"></a>

```typescript
public readonly calculateKvScales: boolean;
```

- *Type:* boolean
- *Default:* false

This enables dynamic calculation of k_scale and v_scale when kv_cache_dtype is fp8.

If False, the scales will be loaded from the model checkpoint if available. Otherwise, the scales will default to 1.0.

---

##### `cpuOffloadGb`<sup>Optional</sup> <a name="cpuOffloadGb" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.cpuOffloadGb"></a>

```typescript
public readonly cpuOffloadGb: number;
```

- *Type:* number
- *Default:* 0

The space in GiB to offload to CPU, per GPU.

Default is 0, which means no offloading. Intuitively,
this argument can be seen as a virtual way to increase the GPU memory size.
For example, if you have one 24 GB GPU and set this to 10, virtually you can think of it as a 34 GB GPU.
Then you can load a 13B model with BF16 weight, which requires at least 26GB GPU memory.

Note that this requires fast CPU-GPU interconnect,
as part of the model is loaded from CPU memory to GPU memory on the fly in each model forward pass.

---

##### `enablePrefixCaching`<sup>Optional</sup> <a name="enablePrefixCaching" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.enablePrefixCaching"></a>

```typescript
public readonly enablePrefixCaching: boolean;
```

- *Type:* boolean

Whether to enable prefix caching.

Disabled by default for V0. Enabled by default for V1.

---

##### `gpuMemoryUtilization`<sup>Optional</sup> <a name="gpuMemoryUtilization" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.gpuMemoryUtilization"></a>

```typescript
public readonly gpuMemoryUtilization: number;
```

- *Type:* number
- *Default:* 0.9

The fraction of GPU memory to be used for the model executor, which can range from 0 to 1.

For example, a value of 0.5 would imply 50% GPU memory utilization.
If unspecified, will use the default value of 0.9. This is a per-instance limit,
and only applies to the current vLLM instance.
It does not matter if you have another vLLM instance running on the same GPU. For example,
if you have two vLLM instances running on the same GPU, you can set the GPU memory utilization to 0.5 for each instance.

---

##### `kvCacheDtype`<sup>Optional</sup> <a name="kvCacheDtype" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.kvCacheDtype"></a>

```typescript
public readonly kvCacheDtype: KvCacheDtype;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.KvCacheDtype">KvCacheDtype</a>
- *Default:* KvCacheDtype.AUTO

Data type for kv cache storage.

If “auto”, will use model data type.
CUDA 11.8+ supports fp8 (=fp8_e4m3) and fp8_e5m2. ROCm (AMD GPU) supports fp8 (=fp8_e4m3).

---

##### `numGpuBlocksOverride`<sup>Optional</sup> <a name="numGpuBlocksOverride" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.numGpuBlocksOverride"></a>

```typescript
public readonly numGpuBlocksOverride: number;
```

- *Type:* number

Number of GPU blocks to use.

This overrides the profiled num_gpu_blocks if specified.
Does nothing if None. Used for testing preemption.

---

##### `prefixCachingHashAlgo`<sup>Optional</sup> <a name="prefixCachingHashAlgo" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.prefixCachingHashAlgo"></a>

```typescript
public readonly prefixCachingHashAlgo: PrefixCachingHashAlgo;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.PrefixCachingHashAlgo">PrefixCachingHashAlgo</a>
- *Default:* PrefixCachingHashAlgo.BUILTIN

Set the hash algorithm for prefix caching.

---

##### `swapSpace`<sup>Optional</sup> <a name="swapSpace" id="aws-cdk-neuronx-patterns.VllmCacheConfig.property.swapSpace"></a>

```typescript
public readonly swapSpace: number;
```

- *Type:* number
- *Default:* 4

Size of the CPU swap space per GPU (in GiB).

---

### VllmDecodingConfig <a name="VllmDecodingConfig" id="aws-cdk-neuronx-patterns.VllmDecodingConfig"></a>

Dataclass which contains the decoding strategy of the engine.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmDecodingConfig.Initializer"></a>

```typescript
import { VllmDecodingConfig } from 'aws-cdk-neuronx-patterns'

const vllmDecodingConfig: VllmDecodingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmDecodingConfig.property.guidedDecodingBackend">guidedDecodingBackend</a></code> | <code><a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend">GuidedDecodingBackend</a></code> | Which engine will be used for guided decoding (JSON schema / regex etc) by default. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmDecodingConfig.property.reasoningParser">reasoningParser</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ReasoningParser">ReasoningParser</a></code> | Select the reasoning parser depending on the model that you’re using. |

---

##### `guidedDecodingBackend`<sup>Optional</sup> <a name="guidedDecodingBackend" id="aws-cdk-neuronx-patterns.VllmDecodingConfig.property.guidedDecodingBackend"></a>

```typescript
public readonly guidedDecodingBackend: GuidedDecodingBackend;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend">GuidedDecodingBackend</a>
- *Default:* GuidedDecodingBackend.AUTO

Which engine will be used for guided decoding (JSON schema / regex etc) by default.

With “auto”, we will make opinionated choices based on request contents and what the backend libraries currently support,
so the behavior is subject to change in each release.

---

##### `reasoningParser`<sup>Optional</sup> <a name="reasoningParser" id="aws-cdk-neuronx-patterns.VllmDecodingConfig.property.reasoningParser"></a>

```typescript
public readonly reasoningParser: ReasoningParser;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ReasoningParser">ReasoningParser</a>

Select the reasoning parser depending on the model that you’re using.

This is used to parse the reasoning content into OpenAI API format. Required for –enable-reasoning.

---

### VllmDeviceConfig <a name="VllmDeviceConfig" id="aws-cdk-neuronx-patterns.VllmDeviceConfig"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmDeviceConfig.Initializer"></a>

```typescript
import { VllmDeviceConfig } from 'aws-cdk-neuronx-patterns'

const vllmDeviceConfig: VllmDeviceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmDeviceConfig.property.device">device</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Device">Device</a></code> | Device type for vLLM execution. |

---

##### `device`<sup>Optional</sup> <a name="device" id="aws-cdk-neuronx-patterns.VllmDeviceConfig.property.device"></a>

```typescript
public readonly device: Device;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Device">Device</a>
- *Default:* Device.AUTO

Device type for vLLM execution.

---

### VllmEngineArguments <a name="VllmEngineArguments" id="aws-cdk-neuronx-patterns.VllmEngineArguments"></a>

Interface for vLLM server command line arguments.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmEngineArguments.Initializer"></a>

```typescript
import { VllmEngineArguments } from 'aws-cdk-neuronx-patterns'

const vllmEngineArguments: VllmEngineArguments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.additionalConfig">additionalConfig</a></code> | <code>{[ key: string ]: any}</code> | Additional config for specified platform. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowCredentials">allowCredentials</a></code> | <code>boolean</code> | Allow credentials. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Allowed headers. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedLocalMediaPath">allowedLocalMediaPath</a></code> | <code>string</code> | Allowing API requests to read local images or videos from directories specified by the server file system. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Allowed methods. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Allowed origins. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.apiKey">apiKey</a></code> | <code>string</code> | If provided, the server will require this key to be presented in the header. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.chatTemplate">chatTemplate</a></code> | <code>string</code> | The file path to the chat template, or the template in single-line form for the specified model. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.chatTemplateContentFormat">chatTemplateContentFormat</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ChatTemplateContentFormat">ChatTemplateContentFormat</a></code> | The format to render message content within a chat template. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.codeRevision">codeRevision</a></code> | <code>string</code> | The specific revision to use for the model code on Hugging Face Hub. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.collectDetailedTraces">collectDetailedTraces</a></code> | <code>string</code> | Valid choices are model,worker,all. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.compilationConfig">compilationConfig</a></code> | <code>{[ key: string ]: any}</code> | torch.compile configuration for the model. When it is a number (0, 1, 2, 3), it will be interpreted as the optimization level. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.configFormat">configFormat</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ConfigFormat">ConfigFormat</a></code> | The format of the model config to load. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableAsyncOutputProc">disableAsyncOutputProc</a></code> | <code>boolean</code> | Disable async output processing. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableCascadeAttn">disableCascadeAttn</a></code> | <code>boolean</code> | Disable cascade attention for V1. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableFastApiDocs">disableFastApiDocs</a></code> | <code>boolean</code> | Disable FastAPI's OpenAPI schema, Swagger UI, and ReDoc endpoint. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableFrontendMultiprocessing">disableFrontendMultiprocessing</a></code> | <code>boolean</code> | If specified, will run the OpenAI frontend server in the same process as the model serving engine. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableLogRequests">disableLogRequests</a></code> | <code>boolean</code> | Disable logging requests. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableLogStats">disableLogStats</a></code> | <code>boolean</code> | Disable logging statistics. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableMmPreprocessorCache">disableMmPreprocessorCache</a></code> | <code>boolean</code> | If true, then disables caching of the multi-modal preprocessor/mapper. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableSlidingWindow">disableSlidingWindow</a></code> | <code>boolean</code> | Disables sliding window, capping to sliding window size. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableUvicornAccessLog">disableUvicornAccessLog</a></code> | <code>boolean</code> | Disable uvicorn access log. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.dtype">dtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.DataType">DataType</a></code> | Data type for model weights and activations. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableAutoToolChoice">enableAutoToolChoice</a></code> | <code>boolean</code> | Enable auto tool choice for supported models. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enablePromptTokensDetails">enablePromptTokensDetails</a></code> | <code>boolean</code> | Enable prompt_tokens_details in usage. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableReasoning">enableReasoning</a></code> | <code>boolean</code> | Enable reasoning_content for the model. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableRequestIdHeaders">enableRequestIdHeaders</a></code> | <code>boolean</code> | If specified, API server will add X-Request-Id header to responses. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableServerLoadTracking">enableServerLoadTracking</a></code> | <code>boolean</code> | Enable tracking server_load_metrics in the app state. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableSleepMode">enableSleepMode</a></code> | <code>boolean</code> | Enable sleep mode for the engine. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableSslRefresh">enableSslRefresh</a></code> | <code>boolean</code> | Refresh SSL Context when SSL certificate files change. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enforceEager">enforceEager</a></code> | <code>boolean</code> | Always use eager-mode PyTorch. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.generationConfig">generationConfig</a></code> | <code>string</code> | The folder path to the generation config. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.hfConfigPath">hfConfigPath</a></code> | <code>string</code> | Name or path of the huggingface config to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.hfOverrides">hfOverrides</a></code> | <code>{[ key: string ]: any}</code> | Extra arguments for the HuggingFace config. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.hfToken">hfToken</a></code> | <code>aws-cdk-lib.aws_batch.Secret</code> | The token to use as HTTP bearer authorization for remote files. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.host">host</a></code> | <code>string</code> | Host name. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | The pattern(s) to ignore when loading the model.Default to original/**\/* to avoid repeated loading of llama’s checkpoints. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.kvTransferConfig">kvTransferConfig</a></code> | <code>{[ key: string ]: any}</code> | Configurations for distributed KV cache transfer in object. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.logitsProcessorPattern">logitsProcessorPattern</a></code> | <code>string</code> | Optional regex pattern specifying valid logits processor qualified names that can be passed with the logits_processors extra completion argument. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.loraModules">loraModules</a></code> | <code>{[ key: string ]: any}</code> | LoRA module configurations. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLogLen">maxLogLen</a></code> | <code>number</code> | Max number of prompt characters or prompt ID numbers in log. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLogprobs">maxLogprobs</a></code> | <code>number</code> | Max number of log probs to return logprobs is specified in SamplingParams. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxModelLen">maxModelLen</a></code> | <code>number</code> | Model context length. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxSeqLenToCapture">maxSeqLenToCapture</a></code> | <code>number</code> | Maximum sequence length covered by CUDA graphs. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.middleware">middleware</a></code> | <code>string[]</code> | Additional ASGI middleware to apply to the app. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.mmProcessorKwargs">mmProcessorKwargs</a></code> | <code>{[ key: string ]: any}</code> | Overrides for the multimodal input mapping/processing, e.g., image processor. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.model">model</a></code> | <code>string</code> | Name or path of the huggingface model to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.modelImpl">modelImpl</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ModelImpl">ModelImpl</a></code> | Which implementation of the model to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.otlpTracesEndpoint">otlpTracesEndpoint</a></code> | <code>string</code> | Target URL to which OpenTelemetry traces will be sent. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.overrideGenerationConfig">overrideGenerationConfig</a></code> | <code>{[ key: string ]: any}</code> | Overrides or sets generation config. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.overrideNeuronConfig">overrideNeuronConfig</a></code> | <code>{[ key: string ]: any}</code> | Override or set neuron device configuration. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.overridePoolerConfig">overridePoolerConfig</a></code> | <code>{[ key: string ]: any}</code> | Override or set the pooling method for pooling models. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.port">port</a></code> | <code>number</code> | Port number. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.promptAdapters">promptAdapters</a></code> | <code>string[]</code> | Prompt adapter configurations in the format name=path. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.qloraAdapterNameOrPath">qloraAdapterNameOrPath</a></code> | <code>string</code> | Name or path of the QLoRA adapter. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.quantization">quantization</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Quantization">Quantization</a></code> | Method used to quantize the weights. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.responseRole">responseRole</a></code> | <code>string</code> | The role name to return if `request.add_generation_prompt=true`. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.returnTokensAsTokenIds">returnTokensAsTokenIds</a></code> | <code>boolean</code> | When `--max-logprobs` is specified, represents single tokens as strings of the form 'token_id:{token_id}' so that tokens that are not JSON-encodable can be identified.. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.revision">revision</a></code> | <code>string</code> | The specific model version to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.rootPath">rootPath</a></code> | <code>string</code> | FastAPI root_path when app is behind a path based routing proxy. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.ropeScaling">ropeScaling</a></code> | <code>{[ key: string ]: any}</code> | RoPE scaling configuration in JSON format. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.ropeTheta">ropeTheta</a></code> | <code>number</code> | RoPE theta. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.schedulerCls">schedulerCls</a></code> | <code>string</code> | The scheduler class to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.seed">seed</a></code> | <code>number</code> | Random seed for operations. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.servedModelName">servedModelName</a></code> | <code>string[]</code> | The model name(s) used in the API. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.showHiddenMetricsForVersion">showHiddenMetricsForVersion</a></code> | <code>string</code> | Enable deprecated Prometheus metrics that have been hidden since the specified version. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.skipTokenizerInit">skipTokenizerInit</a></code> | <code>boolean</code> | Skip initialization of tokenizer and detokenizer. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslCaCerts">sslCaCerts</a></code> | <code>string</code> | The CA certificates file. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslCertfile">sslCertfile</a></code> | <code>string</code> | The file path to the SSL cert file. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslCertReqs">sslCertReqs</a></code> | <code>number</code> | Whether client certificate is required (see stdlib ssl module's). |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslKeyfile">sslKeyfile</a></code> | <code>string</code> | The file path to the SSL key file. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.task">task</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmTask">VllmTask</a></code> | The task to use the model for. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.tokenizer">tokenizer</a></code> | <code>string</code> | Name or path of the huggingface tokenizer to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.tokenizerMode">tokenizerMode</a></code> | <code><a href="#aws-cdk-neuronx-patterns.TokenizerMode">TokenizerMode</a></code> | The tokenizer mode. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.tokenizerRevision">tokenizerRevision</a></code> | <code>string</code> | Revision of the huggingface tokenizer to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.toolCallParser">toolCallParser</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser">ToolCallParser</a></code> | Select the tool call parser depending on the model that you’re using. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.toolParserPlugin">toolParserPlugin</a></code> | <code>string</code> | Specify the tool parser plugin. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.trustRemoteCode">trustRemoteCode</a></code> | <code>boolean</code> | Trust remote code from huggingface. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.useV2BlockManager">useV2BlockManager</a></code> | <code>boolean</code> | Block manager v1 has been removed and SelfAttnBlockSpaceManager (i.e. block manager v2) is now the default. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.uvicornLogLevel">uvicornLogLevel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel">UvicornLogLevel</a></code> | Log level for uvicorn. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.workerCls">workerCls</a></code> | <code>string</code> | The worker class to use for distributed execution. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.workerExtensionCls">workerExtensionCls</a></code> | <code>string</code> | The worker extension class. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.downloadDir">downloadDir</a></code> | <code>string</code> | Directory to download and load the weights, default to the default cache directory of Hugging Face. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.loadFormat">loadFormat</a></code> | <code><a href="#aws-cdk-neuronx-patterns.LoadFormat">LoadFormat</a></code> | The format of the model weights to load: - “auto” will try to load the weights in the safetensors format and fall back to the pytorch bin format if safetensors format is not available. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.modelLoaderExtraConfig">modelLoaderExtraConfig</a></code> | <code>{[ key: string ]: any}</code> | Extra config for model loader. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.useTqdmOnLoad">useTqdmOnLoad</a></code> | <code>boolean</code> | Whether to enable tqdm for showing progress bar when loading model weights. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.guidedDecodingBackend">guidedDecodingBackend</a></code> | <code><a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend">GuidedDecodingBackend</a></code> | Which engine will be used for guided decoding (JSON schema / regex etc) by default. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.reasoningParser">reasoningParser</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ReasoningParser">ReasoningParser</a></code> | Select the reasoning parser depending on the model that you’re using. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.dataParallelSize">dataParallelSize</a></code> | <code>number</code> | Number of data parallel groups. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableCustomAllReduce">disableCustomAllReduce</a></code> | <code>boolean</code> | Disable the custom all-reduce kernel and fall back to NCCL. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.distributedExecutorBackend">distributedExecutorBackend</a></code> | <code><a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend">DistributedExecutorBackend</a></code> | Backend to use for distributed model workers, either “ray” or “mp” (multiprocessing). |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableExpertParallel">enableExpertParallel</a></code> | <code>boolean</code> | Use expert parallelism instead of tensor parallelism for MoE layers. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxParallelLoadingWorkers">maxParallelLoadingWorkers</a></code> | <code>number</code> | Maximum number of parallal loading workers when loading model sequentially in multiple batches. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.pipelineParallelSize">pipelineParallelSize</a></code> | <code>number</code> | Number of pipeline parallel groups. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.rayWorkersUseNsight">rayWorkersUseNsight</a></code> | <code>boolean</code> | Whether to profile Ray workers with nsight. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | Number of tensor parallel groups. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.blockSize">blockSize</a></code> | <code><a href="#aws-cdk-neuronx-patterns.BlockSize">BlockSize</a></code> | Size of a contiguous cache block in number of tokens. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.calculateKvScales">calculateKvScales</a></code> | <code>boolean</code> | This enables dynamic calculation of k_scale and v_scale when kv_cache_dtype is fp8. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.cpuOffloadGb">cpuOffloadGb</a></code> | <code>number</code> | The space in GiB to offload to CPU, per GPU. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enablePrefixCaching">enablePrefixCaching</a></code> | <code>boolean</code> | Whether to enable prefix caching. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.gpuMemoryUtilization">gpuMemoryUtilization</a></code> | <code>number</code> | The fraction of GPU memory to be used for the model executor, which can range from 0 to 1. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.kvCacheDtype">kvCacheDtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.KvCacheDtype">KvCacheDtype</a></code> | Data type for kv cache storage. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.numGpuBlocksOverride">numGpuBlocksOverride</a></code> | <code>number</code> | Number of GPU blocks to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.prefixCachingHashAlgo">prefixCachingHashAlgo</a></code> | <code><a href="#aws-cdk-neuronx-patterns.PrefixCachingHashAlgo">PrefixCachingHashAlgo</a></code> | Set the hash algorithm for prefix caching. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.swapSpace">swapSpace</a></code> | <code>number</code> | Size of the CPU swap space per GPU (in GiB). |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.limitMmPerPrompt">limitMmPerPrompt</a></code> | <code>{[ key: string ]: any}</code> | The maximum number of input items allowed per prompt for each modality. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableLora">enableLora</a></code> | <code>boolean</code> | If True, enable handling of LoRA adapters. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableLoraBias">enableLoraBias</a></code> | <code>boolean</code> | If True, enable bias for LoRA adapters. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.fullyShardedLoras">fullyShardedLoras</a></code> | <code>boolean</code> | By default, only half of the LoRA computation is sharded with tensor parallelism. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.longLoraScalingFactors">longLoraScalingFactors</a></code> | <code>number</code> | Specify multiple scaling factors (which can be different from base model scaling factorsee eg. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.loraDtype">loraDtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.LoraDtype">LoraDtype</a></code> | Data type for LoRA. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.loraExtraVocabSize">loraExtraVocabSize</a></code> | <code>number</code> | Maximum size of extra vocabulary that can be present in a LoRA adapter (added to the base model vocabulary). |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxCpuLoras">maxCpuLoras</a></code> | <code>number</code> | Maximum number of LoRAs to store in CPU memory. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLoraRank">maxLoraRank</a></code> | <code>number</code> | Max LoRA rank. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLoras">maxLoras</a></code> | <code>number</code> | Max number of LoRAs in a single batch. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enablePromptAdapter">enablePromptAdapter</a></code> | <code>boolean</code> | If True, enable handling of PromptAdapters. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxPromptAdapters">maxPromptAdapters</a></code> | <code>number</code> | Max number of PromptAdapters in a batch. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxPromptAdapterToken">maxPromptAdapterToken</a></code> | <code>number</code> | Max number of PromptAdapters tokens. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.device">device</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Device">Device</a></code> | Device type for vLLM execution. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.speculativeConfig">speculativeConfig</a></code> | <code>{[ key: string ]: any}</code> | The configurations for speculative decoding. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableChunkedMmInput">disableChunkedMmInput</a></code> | <code>boolean</code> | If set to true and chunked prefill is enabled, we do not want to partially schedule a multimodal item. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableChunkedPrefill">enableChunkedPrefill</a></code> | <code>boolean</code> | If True, prefill requests can be chunked based on the remaining max_num_batched_tokens. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.longPrefillTokenThreshold">longPrefillTokenThreshold</a></code> | <code>number</code> | For chunked prefill, a request is considered long if the prompt is longer than this number of tokens. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLongPartialPrefills">maxLongPartialPrefills</a></code> | <code>number</code> | For chunked prefill, the maximum number of prompts longer than long_prefill_token_threshold that will be prefilled concurrently. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxNumBatchedTokens">maxNumBatchedTokens</a></code> | <code>number</code> | Maximum number of tokens to be processed in a single iteration. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxNumPartialPrefills">maxNumPartialPrefills</a></code> | <code>number</code> | For chunked prefill, the maximum number of sequences that can be partially prefilled concurrently. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxNumSeqs">maxNumSeqs</a></code> | <code>number</code> | Maximum number of sequences to be processed in a single iteration. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.multiStepStreamOutputs">multiStepStreamOutputs</a></code> | <code>boolean</code> | If False, then multi-step will stream outputs at the end of all steps. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.numLookaheadSlots">numLookaheadSlots</a></code> | <code>number</code> | The number of slots to allocate per sequence per step, beyond the known token ids. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.numSchedulerSteps">numSchedulerSteps</a></code> | <code>number</code> | Maximum number of forward steps per scheduler call. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.preemptionMode">preemptionMode</a></code> | <code><a href="#aws-cdk-neuronx-patterns.PreemptionMode">PreemptionMode</a></code> | Whether to perform preemption by swapping or recomputation. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.schedulerDelayFactor">schedulerDelayFactor</a></code> | <code>number</code> | Apply a delay (of delay factor multiplied by previous prompt latency) before scheduling next prompt. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments.property.schedulingPolicy">schedulingPolicy</a></code> | <code><a href="#aws-cdk-neuronx-patterns.SchedulingPolicy">SchedulingPolicy</a></code> | The scheduling policy to use: - “fcfs” means first come first served, i.e. requests are handled in order of arrival. - “priority” means requests are handled based on given priority (lower value means earlier handling) and time of arrival deciding any ties). |

---

##### `additionalConfig`<sup>Optional</sup> <a name="additionalConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.additionalConfig"></a>

```typescript
public readonly additionalConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Additional config for specified platform.

Different platforms may support different configs.
Make sure the configs are valid for the platform you are using.
The input format is like ‘{“config_key”:”config_value”}’

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean;
```

- *Type:* boolean
- *Default:* false

Allow credentials.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]
- *Default:* ['*']

Allowed headers.

---

##### `allowedLocalMediaPath`<sup>Optional</sup> <a name="allowedLocalMediaPath" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedLocalMediaPath"></a>

```typescript
public readonly allowedLocalMediaPath: string;
```

- *Type:* string

Allowing API requests to read local images or videos from directories specified by the server file system.

This is a security risk. Should only be enabled in trusted environments.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]
- *Default:* ['*']

Allowed methods.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]
- *Default:* ['*']

Allowed origins.

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

If provided, the server will require this key to be presented in the header.

---

##### `chatTemplate`<sup>Optional</sup> <a name="chatTemplate" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.chatTemplate"></a>

```typescript
public readonly chatTemplate: string;
```

- *Type:* string

The file path to the chat template, or the template in single-line form for the specified model.

---

##### `chatTemplateContentFormat`<sup>Optional</sup> <a name="chatTemplateContentFormat" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.chatTemplateContentFormat"></a>

```typescript
public readonly chatTemplateContentFormat: ChatTemplateContentFormat;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ChatTemplateContentFormat">ChatTemplateContentFormat</a>
- *Default:* ChatTemplateContentFormat.AUTO

The format to render message content within a chat template.

“string” will render the content as a string.
  - Example: `"Hello World"`
- “openai” will render the content as a list of dictionaries, similar to OpenAI schema.
  - Example: `[{"type": "text", "text": "Hello world!"}]`

---

##### `codeRevision`<sup>Optional</sup> <a name="codeRevision" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.codeRevision"></a>

```typescript
public readonly codeRevision: string;
```

- *Type:* string

The specific revision to use for the model code on Hugging Face Hub.

It can be a branch name, a tag name, or a commit id. If unspecified, will use the default version.

---

##### `collectDetailedTraces`<sup>Optional</sup> <a name="collectDetailedTraces" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.collectDetailedTraces"></a>

```typescript
public readonly collectDetailedTraces: string;
```

- *Type:* string

Valid choices are model,worker,all.

It makes sense to set this only if --otlp-traces-endpoint is set.
If set, it will collect detailed traces for the specified modules.
This involves use of possibly costly and or blocking operations and hence might have a performance impact.

---

##### `compilationConfig`<sup>Optional</sup> <a name="compilationConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.compilationConfig"></a>

```typescript
public readonly compilationConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

torch.compile configuration for the model. When it is a number (0, 1, 2, 3), it will be interpreted as the optimization level.

NOTE: level 0 is the default level without any optimization.
level 1 and 2 are for internal testing only. level 3 is the recommended level for production.
To specify the full compilation config, use a JSON string,
e.g. `{"level": 3, "cudagraph_capture_sizes": [1, 2, 4, 8]}` Following the convention of traditional compilers,
using -O without space is also supported. -O3 is equivalent to -O 3.

---

##### `configFormat`<sup>Optional</sup> <a name="configFormat" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.configFormat"></a>

```typescript
public readonly configFormat: ConfigFormat;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ConfigFormat">ConfigFormat</a>
- *Default:* ConfigFormat.AUTO

The format of the model config to load.

---

##### `disableAsyncOutputProc`<sup>Optional</sup> <a name="disableAsyncOutputProc" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableAsyncOutputProc"></a>

```typescript
public readonly disableAsyncOutputProc: boolean;
```

- *Type:* boolean
- *Default:* false

Disable async output processing.

This may result in lower performance.

---

##### `disableCascadeAttn`<sup>Optional</sup> <a name="disableCascadeAttn" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableCascadeAttn"></a>

```typescript
public readonly disableCascadeAttn: boolean;
```

- *Type:* boolean
- *Default:* false

Disable cascade attention for V1.

---

##### `disableFastApiDocs`<sup>Optional</sup> <a name="disableFastApiDocs" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableFastApiDocs"></a>

```typescript
public readonly disableFastApiDocs: boolean;
```

- *Type:* boolean
- *Default:* false

Disable FastAPI's OpenAPI schema, Swagger UI, and ReDoc endpoint.

---

##### `disableFrontendMultiprocessing`<sup>Optional</sup> <a name="disableFrontendMultiprocessing" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableFrontendMultiprocessing"></a>

```typescript
public readonly disableFrontendMultiprocessing: boolean;
```

- *Type:* boolean
- *Default:* false

If specified, will run the OpenAI frontend server in the same process as the model serving engine.

---

##### `disableLogRequests`<sup>Optional</sup> <a name="disableLogRequests" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableLogRequests"></a>

```typescript
public readonly disableLogRequests: boolean;
```

- *Type:* boolean
- *Default:* false

Disable logging requests.

---

##### `disableLogStats`<sup>Optional</sup> <a name="disableLogStats" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableLogStats"></a>

```typescript
public readonly disableLogStats: boolean;
```

- *Type:* boolean
- *Default:* false

Disable logging statistics.

---

##### `disableMmPreprocessorCache`<sup>Optional</sup> <a name="disableMmPreprocessorCache" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableMmPreprocessorCache"></a>

```typescript
public readonly disableMmPreprocessorCache: boolean;
```

- *Type:* boolean
- *Default:* false

If true, then disables caching of the multi-modal preprocessor/mapper.

(not recommended)

---

##### `disableSlidingWindow`<sup>Optional</sup> <a name="disableSlidingWindow" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableSlidingWindow"></a>

```typescript
public readonly disableSlidingWindow: boolean;
```

- *Type:* boolean
- *Default:* false

Disables sliding window, capping to sliding window size.

---

##### `disableUvicornAccessLog`<sup>Optional</sup> <a name="disableUvicornAccessLog" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableUvicornAccessLog"></a>

```typescript
public readonly disableUvicornAccessLog: boolean;
```

- *Type:* boolean
- *Default:* false

Disable uvicorn access log.

---

##### `dtype`<sup>Optional</sup> <a name="dtype" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.dtype"></a>

```typescript
public readonly dtype: DataType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.DataType">DataType</a>
- *Default:* DataType.AUTO

Data type for model weights and activations.

---

##### `enableAutoToolChoice`<sup>Optional</sup> <a name="enableAutoToolChoice" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableAutoToolChoice"></a>

```typescript
public readonly enableAutoToolChoice: boolean;
```

- *Type:* boolean
- *Default:* false

Enable auto tool choice for supported models.

Use `--tool-call-parser` to specify which parser to use.

---

##### `enablePromptTokensDetails`<sup>Optional</sup> <a name="enablePromptTokensDetails" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enablePromptTokensDetails"></a>

```typescript
public readonly enablePromptTokensDetails: boolean;
```

- *Type:* boolean
- *Default:* false

Enable prompt_tokens_details in usage.

---

##### `enableReasoning`<sup>Optional</sup> <a name="enableReasoning" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableReasoning"></a>

```typescript
public readonly enableReasoning: boolean;
```

- *Type:* boolean
- *Default:* false

Enable reasoning_content for the model.

---

##### `enableRequestIdHeaders`<sup>Optional</sup> <a name="enableRequestIdHeaders" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableRequestIdHeaders"></a>

```typescript
public readonly enableRequestIdHeaders: boolean;
```

- *Type:* boolean
- *Default:* false

If specified, API server will add X-Request-Id header to responses.

Caution: this hurts performance at high QPS.

---

##### `enableServerLoadTracking`<sup>Optional</sup> <a name="enableServerLoadTracking" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableServerLoadTracking"></a>

```typescript
public readonly enableServerLoadTracking: boolean;
```

- *Type:* boolean
- *Default:* false

Enable tracking server_load_metrics in the app state.

---

##### `enableSleepMode`<sup>Optional</sup> <a name="enableSleepMode" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableSleepMode"></a>

```typescript
public readonly enableSleepMode: boolean;
```

- *Type:* boolean
- *Default:* false

Enable sleep mode for the engine.

(only cuda platform is supported)

---

##### `enableSslRefresh`<sup>Optional</sup> <a name="enableSslRefresh" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableSslRefresh"></a>

```typescript
public readonly enableSslRefresh: boolean;
```

- *Type:* boolean
- *Default:* false

Refresh SSL Context when SSL certificate files change.

---

##### `enforceEager`<sup>Optional</sup> <a name="enforceEager" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enforceEager"></a>

```typescript
public readonly enforceEager: boolean;
```

- *Type:* boolean
- *Default:* false

Always use eager-mode PyTorch.

If False, will use eager mode and CUDA graph in hybrid for maximal performance and flexibility.

---

##### `generationConfig`<sup>Optional</sup> <a name="generationConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.generationConfig"></a>

```typescript
public readonly generationConfig: string;
```

- *Type:* string
- *Default:* "auto"

The folder path to the generation config.

Defaults to ‘auto’,
the generation config will be loaded from model path. If set to ‘vllm’,
no generation config is loaded, vLLM defaults will be used.
If set to a folder path, the generation config will be loaded from the specified folder path.
If max_new_tokens is specified in generation config,
then it sets a server-wide limit on the number of output tokens for all requests.

---

##### `hfConfigPath`<sup>Optional</sup> <a name="hfConfigPath" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.hfConfigPath"></a>

```typescript
public readonly hfConfigPath: string;
```

- *Type:* string

Name or path of the huggingface config to use.

If unspecified, model name or path will be used.

---

##### `hfOverrides`<sup>Optional</sup> <a name="hfOverrides" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.hfOverrides"></a>

```typescript
public readonly hfOverrides: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Extra arguments for the HuggingFace config.

This should be a object that will be parsed into a dictionary.

---

##### `hfToken`<sup>Optional</sup> <a name="hfToken" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.hfToken"></a>

```typescript
public readonly hfToken: Secret;
```

- *Type:* aws-cdk-lib.aws_batch.Secret

The token to use as HTTP bearer authorization for remote files.

If provided, the Secret will be passed as HF_TOKEN secret to compile environment.

---

##### `host`<sup>Optional</sup> <a name="host" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host name.

---

##### `ignorePatterns`<sup>Optional</sup> <a name="ignorePatterns" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]
- *Default:* []

The pattern(s) to ignore when loading the model.Default to original/**\/* to avoid repeated loading of llama’s checkpoints.

---

##### `kvTransferConfig`<sup>Optional</sup> <a name="kvTransferConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.kvTransferConfig"></a>

```typescript
public readonly kvTransferConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Configurations for distributed KV cache transfer in object.

---

##### `logitsProcessorPattern`<sup>Optional</sup> <a name="logitsProcessorPattern" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.logitsProcessorPattern"></a>

```typescript
public readonly logitsProcessorPattern: string;
```

- *Type:* string

Optional regex pattern specifying valid logits processor qualified names that can be passed with the logits_processors extra completion argument.

Defaults to None, which allows no processors.

---

##### `loraModules`<sup>Optional</sup> <a name="loraModules" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.loraModules"></a>

```typescript
public readonly loraModules: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

LoRA module configurations.

---

*Example*

```typescript
{"name": "name", "path": "lora_path", "base_model_name": "id"}
```


##### `maxLogLen`<sup>Optional</sup> <a name="maxLogLen" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLogLen"></a>

```typescript
public readonly maxLogLen: number;
```

- *Type:* number

Max number of prompt characters or prompt ID numbers in log.

---

##### `maxLogprobs`<sup>Optional</sup> <a name="maxLogprobs" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLogprobs"></a>

```typescript
public readonly maxLogprobs: number;
```

- *Type:* number
- *Default:* 20

Max number of log probs to return logprobs is specified in SamplingParams.

---

##### `maxModelLen`<sup>Optional</sup> <a name="maxModelLen" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxModelLen"></a>

```typescript
public readonly maxModelLen: number;
```

- *Type:* number

Model context length.

---

##### `maxSeqLenToCapture`<sup>Optional</sup> <a name="maxSeqLenToCapture" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxSeqLenToCapture"></a>

```typescript
public readonly maxSeqLenToCapture: number;
```

- *Type:* number
- *Default:* 8192

Maximum sequence length covered by CUDA graphs.

When a sequence has context length larger than this, we fall back to eager mode.
Additionally for encoder-decoder models, if the sequence length of the encoder input is larger than this,
we fall back to the eager mode.

---

##### `middleware`<sup>Optional</sup> <a name="middleware" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.middleware"></a>

```typescript
public readonly middleware: string[];
```

- *Type:* string[]
- *Default:* []

Additional ASGI middleware to apply to the app.

We accept multiple –middleware arguments. The value should be an import path.
If a function is provided, vLLM will add it to the server using `@app.middleware('http')`.
If a class is provided, vLLM will add it to the server using `app.add_middleware()`.

---

##### `mmProcessorKwargs`<sup>Optional</sup> <a name="mmProcessorKwargs" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.mmProcessorKwargs"></a>

```typescript
public readonly mmProcessorKwargs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Overrides for the multimodal input mapping/processing, e.g., image processor.

---

*Example*

```typescript
{"num_crops": 4}
```


##### `model`<sup>Optional</sup> <a name="model" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string
- *Default:* "facebook/opt-125m"

Name or path of the huggingface model to use.

---

##### `modelImpl`<sup>Optional</sup> <a name="modelImpl" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.modelImpl"></a>

```typescript
public readonly modelImpl: ModelImpl;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelImpl">ModelImpl</a>
- *Default:* ModelImpl.AUTO

Which implementation of the model to use.

---

##### `otlpTracesEndpoint`<sup>Optional</sup> <a name="otlpTracesEndpoint" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.otlpTracesEndpoint"></a>

```typescript
public readonly otlpTracesEndpoint: string;
```

- *Type:* string

Target URL to which OpenTelemetry traces will be sent.

---

##### `overrideGenerationConfig`<sup>Optional</sup> <a name="overrideGenerationConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.overrideGenerationConfig"></a>

```typescript
public readonly overrideGenerationConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Overrides or sets generation config.

If used with –generation-config=auto, the override parameters will be merged with the default config from the model.
If generation-config is None, only the override parameters are used.

---

*Example*

```typescript
{"temperature": 0.5}
```


##### `overrideNeuronConfig`<sup>Optional</sup> <a name="overrideNeuronConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.overrideNeuronConfig"></a>

```typescript
public readonly overrideNeuronConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Override or set neuron device configuration.

---

*Example*

```typescript
{"cast_logits_dtype": "bloat16"}
```


##### `overridePoolerConfig`<sup>Optional</sup> <a name="overridePoolerConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.overridePoolerConfig"></a>

```typescript
public readonly overridePoolerConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Override or set the pooling method for pooling models.

---

*Example*

```typescript
{"pooling_type": "mean", "normalize": false}
```


##### `port`<sup>Optional</sup> <a name="port" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 8000

Port number.

---

##### `promptAdapters`<sup>Optional</sup> <a name="promptAdapters" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.promptAdapters"></a>

```typescript
public readonly promptAdapters: string[];
```

- *Type:* string[]

Prompt adapter configurations in the format name=path.

Multiple adapters can be specified.

---

##### `qloraAdapterNameOrPath`<sup>Optional</sup> <a name="qloraAdapterNameOrPath" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.qloraAdapterNameOrPath"></a>

```typescript
public readonly qloraAdapterNameOrPath: string;
```

- *Type:* string

Name or path of the QLoRA adapter.

---

##### `quantization`<sup>Optional</sup> <a name="quantization" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.quantization"></a>

```typescript
public readonly quantization: Quantization;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Quantization">Quantization</a>

Method used to quantize the weights.

If None, we first check the quantization_config attribute in the model config file.
If that is None, we assume the model weights are not quantized and use dtype to determine the data type of the weights.

---

##### `responseRole`<sup>Optional</sup> <a name="responseRole" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.responseRole"></a>

```typescript
public readonly responseRole: string;
```

- *Type:* string
- *Default:* "assistant"

The role name to return if `request.add_generation_prompt=true`.

---

##### `returnTokensAsTokenIds`<sup>Optional</sup> <a name="returnTokensAsTokenIds" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.returnTokensAsTokenIds"></a>

```typescript
public readonly returnTokensAsTokenIds: boolean;
```

- *Type:* boolean
- *Default:* false

When `--max-logprobs` is specified, represents single tokens as strings of the form 'token_id:{token_id}' so that tokens that are not JSON-encodable can be identified..

---

##### `revision`<sup>Optional</sup> <a name="revision" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

The specific model version to use.

It can be a branch name, a tag name, or a commit id.
If unspecified, will use the default version.

---

##### `rootPath`<sup>Optional</sup> <a name="rootPath" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

FastAPI root_path when app is behind a path based routing proxy.

---

##### `ropeScaling`<sup>Optional</sup> <a name="ropeScaling" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.ropeScaling"></a>

```typescript
public readonly ropeScaling: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

RoPE scaling configuration in JSON format.

---

*Example*

```typescript
{"rope_type":"dynamic","factor":2.0}
```


##### `ropeTheta`<sup>Optional</sup> <a name="ropeTheta" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.ropeTheta"></a>

```typescript
public readonly ropeTheta: number;
```

- *Type:* number

RoPE theta.

Use with rope_scaling.
In some cases, changing the RoPE theta improves the performance of the scaled model.

---

##### `schedulerCls`<sup>Optional</sup> <a name="schedulerCls" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.schedulerCls"></a>

```typescript
public readonly schedulerCls: string;
```

- *Type:* string
- *Default:* "vllm.core.scheduler.Scheduler"

The scheduler class to use.

---

##### `seed`<sup>Optional</sup> <a name="seed" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.seed"></a>

```typescript
public readonly seed: number;
```

- *Type:* number

Random seed for operations.

---

##### `servedModelName`<sup>Optional</sup> <a name="servedModelName" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.servedModelName"></a>

```typescript
public readonly servedModelName: string[];
```

- *Type:* string[]

The model name(s) used in the API.

If multiple names are provided, the server will respond to any of the provided names.
The model name in the model field of a response will be the first name in this list.
If not specified, the model name will be the same as the `--model` argument.
Noted that this name(s) will also be used in model_name tag content of prometheus metrics,
if multiple names provided, metrics tag will take the first one.

---

##### `showHiddenMetricsForVersion`<sup>Optional</sup> <a name="showHiddenMetricsForVersion" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.showHiddenMetricsForVersion"></a>

```typescript
public readonly showHiddenMetricsForVersion: string;
```

- *Type:* string

Enable deprecated Prometheus metrics that have been hidden since the specified version.

For example, if a previously deprecated metric has been hidden since the v0.7.0 release,
you use –show-hidden-metrics-for-version=0.7 as a temporary escape hatch while you migrate to new metrics.
The metric is likely to be removed completely in an upcoming release.

---

##### `skipTokenizerInit`<sup>Optional</sup> <a name="skipTokenizerInit" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.skipTokenizerInit"></a>

```typescript
public readonly skipTokenizerInit: boolean;
```

- *Type:* boolean
- *Default:* false

Skip initialization of tokenizer and detokenizer.

Expects valid prompt_token_ids and None for prompt from the input.
The generated output will contain token ids.

---

##### `sslCaCerts`<sup>Optional</sup> <a name="sslCaCerts" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslCaCerts"></a>

```typescript
public readonly sslCaCerts: string;
```

- *Type:* string

The CA certificates file.

---

##### `sslCertfile`<sup>Optional</sup> <a name="sslCertfile" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslCertfile"></a>

```typescript
public readonly sslCertfile: string;
```

- *Type:* string

The file path to the SSL cert file.

---

##### `sslCertReqs`<sup>Optional</sup> <a name="sslCertReqs" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslCertReqs"></a>

```typescript
public readonly sslCertReqs: number;
```

- *Type:* number
- *Default:* 0

Whether client certificate is required (see stdlib ssl module's).

---

##### `sslKeyfile`<sup>Optional</sup> <a name="sslKeyfile" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.sslKeyfile"></a>

```typescript
public readonly sslKeyfile: string;
```

- *Type:* string

The file path to the SSL key file.

---

##### `task`<sup>Optional</sup> <a name="task" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.task"></a>

```typescript
public readonly task: VllmTask;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmTask">VllmTask</a>
- *Default:* VllmTask.AUTO

The task to use the model for.

Each vLLM instance only supports one task, even if the same model can be used for multiple tasks.
When the model only supports one task, "auto" can be used to select it; otherwise,
you must specify explicitly which task to use.

---

##### `tokenizer`<sup>Optional</sup> <a name="tokenizer" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.tokenizer"></a>

```typescript
public readonly tokenizer: string;
```

- *Type:* string

Name or path of the huggingface tokenizer to use.

If unspecified, model name or path will be used.

---

##### `tokenizerMode`<sup>Optional</sup> <a name="tokenizerMode" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.tokenizerMode"></a>

```typescript
public readonly tokenizerMode: TokenizerMode;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.TokenizerMode">TokenizerMode</a>
- *Default:* TokenizerMode.AUTO

The tokenizer mode.

---

##### `tokenizerRevision`<sup>Optional</sup> <a name="tokenizerRevision" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.tokenizerRevision"></a>

```typescript
public readonly tokenizerRevision: string;
```

- *Type:* string

Revision of the huggingface tokenizer to use.

It can be a branch name, a tag name, or a commit id. If unspecified, will use the default version.

---

##### `toolCallParser`<sup>Optional</sup> <a name="toolCallParser" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.toolCallParser"></a>

```typescript
public readonly toolCallParser: ToolCallParser;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ToolCallParser">ToolCallParser</a>

Select the tool call parser depending on the model that you’re using.

This is used to parse the model-generated tool call into OpenAI API format.

Required for `--enable-auto-tool-choice`.

---

##### `toolParserPlugin`<sup>Optional</sup> <a name="toolParserPlugin" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.toolParserPlugin"></a>

```typescript
public readonly toolParserPlugin: string;
```

- *Type:* string
- *Default:* ""

Specify the tool parser plugin.

---

##### `trustRemoteCode`<sup>Optional</sup> <a name="trustRemoteCode" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.trustRemoteCode"></a>

```typescript
public readonly trustRemoteCode: boolean;
```

- *Type:* boolean
- *Default:* false

Trust remote code from huggingface.

---

##### ~~`useV2BlockManager`~~<sup>Optional</sup> <a name="useV2BlockManager" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.useV2BlockManager"></a>

- *Deprecated:* Setting this flag to True or False has no effect on vLLM behavior.

```typescript
public readonly useV2BlockManager: boolean;
```

- *Type:* boolean
- *Default:* true

Block manager v1 has been removed and SelfAttnBlockSpaceManager (i.e. block manager v2) is now the default.

---

##### `uvicornLogLevel`<sup>Optional</sup> <a name="uvicornLogLevel" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.uvicornLogLevel"></a>

```typescript
public readonly uvicornLogLevel: UvicornLogLevel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.UvicornLogLevel">UvicornLogLevel</a>
- *Default:* UvicornLogLevel.INFO

Log level for uvicorn.

---

##### `workerCls`<sup>Optional</sup> <a name="workerCls" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.workerCls"></a>

```typescript
public readonly workerCls: string;
```

- *Type:* string
- *Default:* "auto"

The worker class to use for distributed execution.

---

##### `workerExtensionCls`<sup>Optional</sup> <a name="workerExtensionCls" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.workerExtensionCls"></a>

```typescript
public readonly workerExtensionCls: string;
```

- *Type:* string
- *Default:* ""

The worker extension class.

---

##### `downloadDir`<sup>Optional</sup> <a name="downloadDir" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.downloadDir"></a>

```typescript
public readonly downloadDir: string;
```

- *Type:* string

Directory to download and load the weights, default to the default cache directory of Hugging Face.

---

##### `loadFormat`<sup>Optional</sup> <a name="loadFormat" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.loadFormat"></a>

```typescript
public readonly loadFormat: LoadFormat;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.LoadFormat">LoadFormat</a>
- *Default:* LoadFormat.AUTO

The format of the model weights to load: - “auto” will try to load the weights in the safetensors format and fall back to the pytorch bin format if safetensors format is not available.

“pt” will load the weights in the pytorch bin format.
- “safetensors” will load the weights in the safetensors format.
- “npcache” will load the weights in pytorch format and store a numpy cache to speed up the loading.
- “dummy” will initialize the weights with random values, which is mainly for profiling.
- “tensorizer” will use CoreWeave’s tensorizer library for fast weight loading. See the Tensorize vLLM Model script in the Examples section for more information.
- “runai_streamer” will load the Safetensors weights using Run:ai Model Streamer.
- “bitsandbytes” will load the weights using bitsandbytes quantization.
- “sharded_state” will load weights from pre-sharded checkpoint files, supporting efficient loading of tensor-parallel models.
- “gguf” will load weights from GGUF format files (details specified in ggml-org/ggml).
- “mistral” will load weights from consolidated safetensors files used by Mistral models.

---

##### `modelLoaderExtraConfig`<sup>Optional</sup> <a name="modelLoaderExtraConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.modelLoaderExtraConfig"></a>

```typescript
public readonly modelLoaderExtraConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* {}

Extra config for model loader.

This will be passed to the model loader corresponding to the chosen load_format.
This should be a object that will be parsed into a dictionary.

---

##### `useTqdmOnLoad`<sup>Optional</sup> <a name="useTqdmOnLoad" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.useTqdmOnLoad"></a>

```typescript
public readonly useTqdmOnLoad: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to enable tqdm for showing progress bar when loading model weights.

---

##### `guidedDecodingBackend`<sup>Optional</sup> <a name="guidedDecodingBackend" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.guidedDecodingBackend"></a>

```typescript
public readonly guidedDecodingBackend: GuidedDecodingBackend;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend">GuidedDecodingBackend</a>
- *Default:* GuidedDecodingBackend.AUTO

Which engine will be used for guided decoding (JSON schema / regex etc) by default.

With “auto”, we will make opinionated choices based on request contents and what the backend libraries currently support,
so the behavior is subject to change in each release.

---

##### `reasoningParser`<sup>Optional</sup> <a name="reasoningParser" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.reasoningParser"></a>

```typescript
public readonly reasoningParser: ReasoningParser;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ReasoningParser">ReasoningParser</a>

Select the reasoning parser depending on the model that you’re using.

This is used to parse the reasoning content into OpenAI API format. Required for –enable-reasoning.

---

##### `dataParallelSize`<sup>Optional</sup> <a name="dataParallelSize" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.dataParallelSize"></a>

```typescript
public readonly dataParallelSize: number;
```

- *Type:* number
- *Default:* 1

Number of data parallel groups.

MoE layers will be sharded according to the product of the tensor parallel size and data parallel size.

---

##### `disableCustomAllReduce`<sup>Optional</sup> <a name="disableCustomAllReduce" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableCustomAllReduce"></a>

```typescript
public readonly disableCustomAllReduce: boolean;
```

- *Type:* boolean
- *Default:* false

Disable the custom all-reduce kernel and fall back to NCCL.

---

##### `distributedExecutorBackend`<sup>Optional</sup> <a name="distributedExecutorBackend" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.distributedExecutorBackend"></a>

```typescript
public readonly distributedExecutorBackend: DistributedExecutorBackend;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend">DistributedExecutorBackend</a>

Backend to use for distributed model workers, either “ray” or “mp” (multiprocessing).

If the product of pipeline_parallel_size and tensor_parallel_size is less than or equal to the number of GPUs available,
“mp” will be used to keep processing on a single host. Otherwise, this will default to “ray” if Ray is installed and fail otherwise.
Note that tpu and hpu only support Ray for distributed inference.

---

##### `enableExpertParallel`<sup>Optional</sup> <a name="enableExpertParallel" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableExpertParallel"></a>

```typescript
public readonly enableExpertParallel: boolean;
```

- *Type:* boolean
- *Default:* false

Use expert parallelism instead of tensor parallelism for MoE layers.

---

##### `maxParallelLoadingWorkers`<sup>Optional</sup> <a name="maxParallelLoadingWorkers" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxParallelLoadingWorkers"></a>

```typescript
public readonly maxParallelLoadingWorkers: number;
```

- *Type:* number

Maximum number of parallal loading workers when loading model sequentially in multiple batches.

To avoid RAM OOM when using tensor parallel and large models.

---

##### `pipelineParallelSize`<sup>Optional</sup> <a name="pipelineParallelSize" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.pipelineParallelSize"></a>

```typescript
public readonly pipelineParallelSize: number;
```

- *Type:* number
- *Default:* 1

Number of pipeline parallel groups.

---

##### `rayWorkersUseNsight`<sup>Optional</sup> <a name="rayWorkersUseNsight" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.rayWorkersUseNsight"></a>

```typescript
public readonly rayWorkersUseNsight: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to profile Ray workers with nsight.

> [https://docs.ray.io/en/latest/ray-observability/user-guides/profiling.html#profiling-nsight-profiler](https://docs.ray.io/en/latest/ray-observability/user-guides/profiling.html#profiling-nsight-profiler)

---

##### `tensorParallelSize`<sup>Optional</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number
- *Default:* 1

Number of tensor parallel groups.

---

##### `blockSize`<sup>Optional</sup> <a name="blockSize" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.blockSize"></a>

```typescript
public readonly blockSize: BlockSize;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.BlockSize">BlockSize</a>

Size of a contiguous cache block in number of tokens.

This is ignored on neuron devices and set to –max-model-len. On CUDA devices, only block sizes up to 32 are supported.
On HPU devices, block size defaults to 128.

---

##### `calculateKvScales`<sup>Optional</sup> <a name="calculateKvScales" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.calculateKvScales"></a>

```typescript
public readonly calculateKvScales: boolean;
```

- *Type:* boolean
- *Default:* false

This enables dynamic calculation of k_scale and v_scale when kv_cache_dtype is fp8.

If False, the scales will be loaded from the model checkpoint if available. Otherwise, the scales will default to 1.0.

---

##### `cpuOffloadGb`<sup>Optional</sup> <a name="cpuOffloadGb" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.cpuOffloadGb"></a>

```typescript
public readonly cpuOffloadGb: number;
```

- *Type:* number
- *Default:* 0

The space in GiB to offload to CPU, per GPU.

Default is 0, which means no offloading. Intuitively,
this argument can be seen as a virtual way to increase the GPU memory size.
For example, if you have one 24 GB GPU and set this to 10, virtually you can think of it as a 34 GB GPU.
Then you can load a 13B model with BF16 weight, which requires at least 26GB GPU memory.

Note that this requires fast CPU-GPU interconnect,
as part of the model is loaded from CPU memory to GPU memory on the fly in each model forward pass.

---

##### `enablePrefixCaching`<sup>Optional</sup> <a name="enablePrefixCaching" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enablePrefixCaching"></a>

```typescript
public readonly enablePrefixCaching: boolean;
```

- *Type:* boolean

Whether to enable prefix caching.

Disabled by default for V0. Enabled by default for V1.

---

##### `gpuMemoryUtilization`<sup>Optional</sup> <a name="gpuMemoryUtilization" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.gpuMemoryUtilization"></a>

```typescript
public readonly gpuMemoryUtilization: number;
```

- *Type:* number
- *Default:* 0.9

The fraction of GPU memory to be used for the model executor, which can range from 0 to 1.

For example, a value of 0.5 would imply 50% GPU memory utilization.
If unspecified, will use the default value of 0.9. This is a per-instance limit,
and only applies to the current vLLM instance.
It does not matter if you have another vLLM instance running on the same GPU. For example,
if you have two vLLM instances running on the same GPU, you can set the GPU memory utilization to 0.5 for each instance.

---

##### `kvCacheDtype`<sup>Optional</sup> <a name="kvCacheDtype" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.kvCacheDtype"></a>

```typescript
public readonly kvCacheDtype: KvCacheDtype;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.KvCacheDtype">KvCacheDtype</a>
- *Default:* KvCacheDtype.AUTO

Data type for kv cache storage.

If “auto”, will use model data type.
CUDA 11.8+ supports fp8 (=fp8_e4m3) and fp8_e5m2. ROCm (AMD GPU) supports fp8 (=fp8_e4m3).

---

##### `numGpuBlocksOverride`<sup>Optional</sup> <a name="numGpuBlocksOverride" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.numGpuBlocksOverride"></a>

```typescript
public readonly numGpuBlocksOverride: number;
```

- *Type:* number

Number of GPU blocks to use.

This overrides the profiled num_gpu_blocks if specified.
Does nothing if None. Used for testing preemption.

---

##### `prefixCachingHashAlgo`<sup>Optional</sup> <a name="prefixCachingHashAlgo" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.prefixCachingHashAlgo"></a>

```typescript
public readonly prefixCachingHashAlgo: PrefixCachingHashAlgo;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.PrefixCachingHashAlgo">PrefixCachingHashAlgo</a>
- *Default:* PrefixCachingHashAlgo.BUILTIN

Set the hash algorithm for prefix caching.

---

##### `swapSpace`<sup>Optional</sup> <a name="swapSpace" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.swapSpace"></a>

```typescript
public readonly swapSpace: number;
```

- *Type:* number
- *Default:* 4

Size of the CPU swap space per GPU (in GiB).

---

##### `limitMmPerPrompt`<sup>Optional</sup> <a name="limitMmPerPrompt" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.limitMmPerPrompt"></a>

```typescript
public readonly limitMmPerPrompt: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* {}

The maximum number of input items allowed per prompt for each modality.

This should be a object that will be parsed into a dictionary. Defaults to 1 (V0) or 999 (V1) for each modality.

---

##### `enableLora`<sup>Optional</sup> <a name="enableLora" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableLora"></a>

```typescript
public readonly enableLora: boolean;
```

- *Type:* boolean
- *Default:* false

If True, enable handling of LoRA adapters.

---

##### `enableLoraBias`<sup>Optional</sup> <a name="enableLoraBias" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableLoraBias"></a>

```typescript
public readonly enableLoraBias: boolean;
```

- *Type:* boolean
- *Default:* false

If True, enable bias for LoRA adapters.

---

##### `fullyShardedLoras`<sup>Optional</sup> <a name="fullyShardedLoras" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.fullyShardedLoras"></a>

```typescript
public readonly fullyShardedLoras: boolean;
```

- *Type:* boolean
- *Default:* false

By default, only half of the LoRA computation is sharded with tensor parallelism.

Enabling this will use the fully sharded layers.
At high sequence length, max rank or tensor parallel size, this is likely faster.

---

##### `longLoraScalingFactors`<sup>Optional</sup> <a name="longLoraScalingFactors" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.longLoraScalingFactors"></a>

```typescript
public readonly longLoraScalingFactors: number;
```

- *Type:* number

Specify multiple scaling factors (which can be different from base model scaling factorsee eg.

Long LoRA)
to allow for multiple LoRA adapters trained with those scaling factors to be used at the same time.
If not specified, only adapters trained with the base model scaling factor are allowed.

---

##### `loraDtype`<sup>Optional</sup> <a name="loraDtype" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.loraDtype"></a>

```typescript
public readonly loraDtype: LoraDtype;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.LoraDtype">LoraDtype</a>
- *Default:* LoraDtype.AUTO

Data type for LoRA.

If auto, will default to base model dtype.

---

##### `loraExtraVocabSize`<sup>Optional</sup> <a name="loraExtraVocabSize" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.loraExtraVocabSize"></a>

```typescript
public readonly loraExtraVocabSize: number;
```

- *Type:* number
- *Default:* 256

Maximum size of extra vocabulary that can be present in a LoRA adapter (added to the base model vocabulary).

---

##### `maxCpuLoras`<sup>Optional</sup> <a name="maxCpuLoras" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxCpuLoras"></a>

```typescript
public readonly maxCpuLoras: number;
```

- *Type:* number

Maximum number of LoRAs to store in CPU memory.

Must be >= than max_loras.

---

##### `maxLoraRank`<sup>Optional</sup> <a name="maxLoraRank" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLoraRank"></a>

```typescript
public readonly maxLoraRank: number;
```

- *Type:* number
- *Default:* 16

Max LoRA rank.

---

##### `maxLoras`<sup>Optional</sup> <a name="maxLoras" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLoras"></a>

```typescript
public readonly maxLoras: number;
```

- *Type:* number
- *Default:* 1

Max number of LoRAs in a single batch.

---

##### `enablePromptAdapter`<sup>Optional</sup> <a name="enablePromptAdapter" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enablePromptAdapter"></a>

```typescript
public readonly enablePromptAdapter: boolean;
```

- *Type:* boolean
- *Default:* false

If True, enable handling of PromptAdapters.

---

##### `maxPromptAdapters`<sup>Optional</sup> <a name="maxPromptAdapters" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxPromptAdapters"></a>

```typescript
public readonly maxPromptAdapters: number;
```

- *Type:* number
- *Default:* 1

Max number of PromptAdapters in a batch.

---

##### `maxPromptAdapterToken`<sup>Optional</sup> <a name="maxPromptAdapterToken" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxPromptAdapterToken"></a>

```typescript
public readonly maxPromptAdapterToken: number;
```

- *Type:* number
- *Default:* 0

Max number of PromptAdapters tokens.

---

##### `device`<sup>Optional</sup> <a name="device" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.device"></a>

```typescript
public readonly device: Device;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Device">Device</a>
- *Default:* Device.AUTO

Device type for vLLM execution.

---

##### `speculativeConfig`<sup>Optional</sup> <a name="speculativeConfig" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.speculativeConfig"></a>

```typescript
public readonly speculativeConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The configurations for speculative decoding.

Should be a object.

---

##### `disableChunkedMmInput`<sup>Optional</sup> <a name="disableChunkedMmInput" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.disableChunkedMmInput"></a>

```typescript
public readonly disableChunkedMmInput: boolean;
```

- *Type:* boolean
- *Default:* false

If set to true and chunked prefill is enabled, we do not want to partially schedule a multimodal item.

Only used in V1 This ensures that if a request has a mixed prompt (like text tokens TTTT followed by image tokens IIIIIIIIII)
where only some image tokens can be scheduled (like TTTTIIIII, leaving IIIII),
it will be scheduled as TTTT in one step and IIIIIIIIII in the next.

---

##### `enableChunkedPrefill`<sup>Optional</sup> <a name="enableChunkedPrefill" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.enableChunkedPrefill"></a>

```typescript
public readonly enableChunkedPrefill: boolean;
```

- *Type:* boolean

If True, prefill requests can be chunked based on the remaining max_num_batched_tokens.

---

##### `longPrefillTokenThreshold`<sup>Optional</sup> <a name="longPrefillTokenThreshold" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.longPrefillTokenThreshold"></a>

```typescript
public readonly longPrefillTokenThreshold: number;
```

- *Type:* number
- *Default:* 0

For chunked prefill, a request is considered long if the prompt is longer than this number of tokens.

---

##### `maxLongPartialPrefills`<sup>Optional</sup> <a name="maxLongPartialPrefills" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxLongPartialPrefills"></a>

```typescript
public readonly maxLongPartialPrefills: number;
```

- *Type:* number
- *Default:* 1

For chunked prefill, the maximum number of prompts longer than long_prefill_token_threshold that will be prefilled concurrently.

Setting this less than max_num_partial_prefills will allow shorter prompts to jump the queue in front of longer prompts in some cases, improving latency.

---

##### `maxNumBatchedTokens`<sup>Optional</sup> <a name="maxNumBatchedTokens" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxNumBatchedTokens"></a>

```typescript
public readonly maxNumBatchedTokens: number;
```

- *Type:* number

Maximum number of tokens to be processed in a single iteration.

This config has no static default. If left unspecified by the user, it will be set in EngineArgs.create_engine_config based on the usage context.

---

##### `maxNumPartialPrefills`<sup>Optional</sup> <a name="maxNumPartialPrefills" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxNumPartialPrefills"></a>

```typescript
public readonly maxNumPartialPrefills: number;
```

- *Type:* number
- *Default:* 1

For chunked prefill, the maximum number of sequences that can be partially prefilled concurrently.

---

##### `maxNumSeqs`<sup>Optional</sup> <a name="maxNumSeqs" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.maxNumSeqs"></a>

```typescript
public readonly maxNumSeqs: number;
```

- *Type:* number

Maximum number of sequences to be processed in a single iteration.

This config has no static default. If left unspecified by the user, it will be set in EngineArgs.create_engine_config based on the usage context.

---

##### `multiStepStreamOutputs`<sup>Optional</sup> <a name="multiStepStreamOutputs" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.multiStepStreamOutputs"></a>

```typescript
public readonly multiStepStreamOutputs: boolean;
```

- *Type:* boolean
- *Default:* true

If False, then multi-step will stream outputs at the end of all steps.

---

##### `numLookaheadSlots`<sup>Optional</sup> <a name="numLookaheadSlots" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.numLookaheadSlots"></a>

```typescript
public readonly numLookaheadSlots: number;
```

- *Type:* number
- *Default:* 0

The number of slots to allocate per sequence per step, beyond the known token ids.

This is used in speculative decoding to store KV activations of tokens
which may or may not be accepted.

NOTE: This will be replaced by speculative config in the future; it is present to enable correctness tests until then.

---

##### `numSchedulerSteps`<sup>Optional</sup> <a name="numSchedulerSteps" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.numSchedulerSteps"></a>

```typescript
public readonly numSchedulerSteps: number;
```

- *Type:* number
- *Default:* 1

Maximum number of forward steps per scheduler call.

---

##### `preemptionMode`<sup>Optional</sup> <a name="preemptionMode" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.preemptionMode"></a>

```typescript
public readonly preemptionMode: PreemptionMode;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.PreemptionMode">PreemptionMode</a>

Whether to perform preemption by swapping or recomputation.

If not specified, we determine the mode as follows:
We use recomputation by default since it incurs lower overhead than swapping.
However, when the sequence group has multiple sequences (e.g., beam search),
recomputation is not currently supported. In such a case, we use swapping instead.

---

##### `schedulerDelayFactor`<sup>Optional</sup> <a name="schedulerDelayFactor" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.schedulerDelayFactor"></a>

```typescript
public readonly schedulerDelayFactor: number;
```

- *Type:* number
- *Default:* 0.0

Apply a delay (of delay factor multiplied by previous prompt latency) before scheduling next prompt.

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="aws-cdk-neuronx-patterns.VllmEngineArguments.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: SchedulingPolicy;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.SchedulingPolicy">SchedulingPolicy</a>
- *Default:* SchedulingPolicy.FCFS

The scheduling policy to use: - “fcfs” means first come first served, i.e. requests are handled in order of arrival. - “priority” means requests are handled based on given priority (lower value means earlier handling) and time of arrival deciding any ties).

---

### VllmLoadConfig <a name="VllmLoadConfig" id="aws-cdk-neuronx-patterns.VllmLoadConfig"></a>

Configuration for loading the model weights.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmLoadConfig.Initializer"></a>

```typescript
import { VllmLoadConfig } from 'aws-cdk-neuronx-patterns'

const vllmLoadConfig: VllmLoadConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoadConfig.property.downloadDir">downloadDir</a></code> | <code>string</code> | Directory to download and load the weights, default to the default cache directory of Hugging Face. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoadConfig.property.loadFormat">loadFormat</a></code> | <code><a href="#aws-cdk-neuronx-patterns.LoadFormat">LoadFormat</a></code> | The format of the model weights to load: - “auto” will try to load the weights in the safetensors format and fall back to the pytorch bin format if safetensors format is not available. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoadConfig.property.modelLoaderExtraConfig">modelLoaderExtraConfig</a></code> | <code>{[ key: string ]: any}</code> | Extra config for model loader. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoadConfig.property.useTqdmOnLoad">useTqdmOnLoad</a></code> | <code>boolean</code> | Whether to enable tqdm for showing progress bar when loading model weights. |

---

##### `downloadDir`<sup>Optional</sup> <a name="downloadDir" id="aws-cdk-neuronx-patterns.VllmLoadConfig.property.downloadDir"></a>

```typescript
public readonly downloadDir: string;
```

- *Type:* string

Directory to download and load the weights, default to the default cache directory of Hugging Face.

---

##### `loadFormat`<sup>Optional</sup> <a name="loadFormat" id="aws-cdk-neuronx-patterns.VllmLoadConfig.property.loadFormat"></a>

```typescript
public readonly loadFormat: LoadFormat;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.LoadFormat">LoadFormat</a>
- *Default:* LoadFormat.AUTO

The format of the model weights to load: - “auto” will try to load the weights in the safetensors format and fall back to the pytorch bin format if safetensors format is not available.

“pt” will load the weights in the pytorch bin format.
- “safetensors” will load the weights in the safetensors format.
- “npcache” will load the weights in pytorch format and store a numpy cache to speed up the loading.
- “dummy” will initialize the weights with random values, which is mainly for profiling.
- “tensorizer” will use CoreWeave’s tensorizer library for fast weight loading. See the Tensorize vLLM Model script in the Examples section for more information.
- “runai_streamer” will load the Safetensors weights using Run:ai Model Streamer.
- “bitsandbytes” will load the weights using bitsandbytes quantization.
- “sharded_state” will load weights from pre-sharded checkpoint files, supporting efficient loading of tensor-parallel models.
- “gguf” will load weights from GGUF format files (details specified in ggml-org/ggml).
- “mistral” will load weights from consolidated safetensors files used by Mistral models.

---

##### `modelLoaderExtraConfig`<sup>Optional</sup> <a name="modelLoaderExtraConfig" id="aws-cdk-neuronx-patterns.VllmLoadConfig.property.modelLoaderExtraConfig"></a>

```typescript
public readonly modelLoaderExtraConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* {}

Extra config for model loader.

This will be passed to the model loader corresponding to the chosen load_format.
This should be a object that will be parsed into a dictionary.

---

##### `useTqdmOnLoad`<sup>Optional</sup> <a name="useTqdmOnLoad" id="aws-cdk-neuronx-patterns.VllmLoadConfig.property.useTqdmOnLoad"></a>

```typescript
public readonly useTqdmOnLoad: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to enable tqdm for showing progress bar when loading model weights.

---

### VllmLoraConfig <a name="VllmLoraConfig" id="aws-cdk-neuronx-patterns.VllmLoraConfig"></a>

Configuration for LoRA.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmLoraConfig.Initializer"></a>

```typescript
import { VllmLoraConfig } from 'aws-cdk-neuronx-patterns'

const vllmLoraConfig: VllmLoraConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.enableLora">enableLora</a></code> | <code>boolean</code> | If True, enable handling of LoRA adapters. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.enableLoraBias">enableLoraBias</a></code> | <code>boolean</code> | If True, enable bias for LoRA adapters. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.fullyShardedLoras">fullyShardedLoras</a></code> | <code>boolean</code> | By default, only half of the LoRA computation is sharded with tensor parallelism. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.longLoraScalingFactors">longLoraScalingFactors</a></code> | <code>number</code> | Specify multiple scaling factors (which can be different from base model scaling factorsee eg. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.loraDtype">loraDtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.LoraDtype">LoraDtype</a></code> | Data type for LoRA. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.loraExtraVocabSize">loraExtraVocabSize</a></code> | <code>number</code> | Maximum size of extra vocabulary that can be present in a LoRA adapter (added to the base model vocabulary). |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.maxCpuLoras">maxCpuLoras</a></code> | <code>number</code> | Maximum number of LoRAs to store in CPU memory. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.maxLoraRank">maxLoraRank</a></code> | <code>number</code> | Max LoRA rank. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmLoraConfig.property.maxLoras">maxLoras</a></code> | <code>number</code> | Max number of LoRAs in a single batch. |

---

##### `enableLora`<sup>Optional</sup> <a name="enableLora" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.enableLora"></a>

```typescript
public readonly enableLora: boolean;
```

- *Type:* boolean
- *Default:* false

If True, enable handling of LoRA adapters.

---

##### `enableLoraBias`<sup>Optional</sup> <a name="enableLoraBias" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.enableLoraBias"></a>

```typescript
public readonly enableLoraBias: boolean;
```

- *Type:* boolean
- *Default:* false

If True, enable bias for LoRA adapters.

---

##### `fullyShardedLoras`<sup>Optional</sup> <a name="fullyShardedLoras" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.fullyShardedLoras"></a>

```typescript
public readonly fullyShardedLoras: boolean;
```

- *Type:* boolean
- *Default:* false

By default, only half of the LoRA computation is sharded with tensor parallelism.

Enabling this will use the fully sharded layers.
At high sequence length, max rank or tensor parallel size, this is likely faster.

---

##### `longLoraScalingFactors`<sup>Optional</sup> <a name="longLoraScalingFactors" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.longLoraScalingFactors"></a>

```typescript
public readonly longLoraScalingFactors: number;
```

- *Type:* number

Specify multiple scaling factors (which can be different from base model scaling factorsee eg.

Long LoRA)
to allow for multiple LoRA adapters trained with those scaling factors to be used at the same time.
If not specified, only adapters trained with the base model scaling factor are allowed.

---

##### `loraDtype`<sup>Optional</sup> <a name="loraDtype" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.loraDtype"></a>

```typescript
public readonly loraDtype: LoraDtype;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.LoraDtype">LoraDtype</a>
- *Default:* LoraDtype.AUTO

Data type for LoRA.

If auto, will default to base model dtype.

---

##### `loraExtraVocabSize`<sup>Optional</sup> <a name="loraExtraVocabSize" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.loraExtraVocabSize"></a>

```typescript
public readonly loraExtraVocabSize: number;
```

- *Type:* number
- *Default:* 256

Maximum size of extra vocabulary that can be present in a LoRA adapter (added to the base model vocabulary).

---

##### `maxCpuLoras`<sup>Optional</sup> <a name="maxCpuLoras" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.maxCpuLoras"></a>

```typescript
public readonly maxCpuLoras: number;
```

- *Type:* number

Maximum number of LoRAs to store in CPU memory.

Must be >= than max_loras.

---

##### `maxLoraRank`<sup>Optional</sup> <a name="maxLoraRank" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.maxLoraRank"></a>

```typescript
public readonly maxLoraRank: number;
```

- *Type:* number
- *Default:* 16

Max LoRA rank.

---

##### `maxLoras`<sup>Optional</sup> <a name="maxLoras" id="aws-cdk-neuronx-patterns.VllmLoraConfig.property.maxLoras"></a>

```typescript
public readonly maxLoras: number;
```

- *Type:* number
- *Default:* 1

Max number of LoRAs in a single batch.

---

### VllmMultiModalConfig <a name="VllmMultiModalConfig" id="aws-cdk-neuronx-patterns.VllmMultiModalConfig"></a>

Controls the behavior of multimodal models.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmMultiModalConfig.Initializer"></a>

```typescript
import { VllmMultiModalConfig } from 'aws-cdk-neuronx-patterns'

const vllmMultiModalConfig: VllmMultiModalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmMultiModalConfig.property.limitMmPerPrompt">limitMmPerPrompt</a></code> | <code>{[ key: string ]: any}</code> | The maximum number of input items allowed per prompt for each modality. |

---

##### `limitMmPerPrompt`<sup>Optional</sup> <a name="limitMmPerPrompt" id="aws-cdk-neuronx-patterns.VllmMultiModalConfig.property.limitMmPerPrompt"></a>

```typescript
public readonly limitMmPerPrompt: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* {}

The maximum number of input items allowed per prompt for each modality.

This should be a object that will be parsed into a dictionary. Defaults to 1 (V0) or 999 (V1) for each modality.

---

### VllmNamedArguments <a name="VllmNamedArguments" id="aws-cdk-neuronx-patterns.VllmNamedArguments"></a>

VllmNamedArguments.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmNamedArguments.Initializer"></a>

```typescript
import { VllmNamedArguments } from 'aws-cdk-neuronx-patterns'

const vllmNamedArguments: VllmNamedArguments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.additionalConfig">additionalConfig</a></code> | <code>{[ key: string ]: any}</code> | Additional config for specified platform. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowCredentials">allowCredentials</a></code> | <code>boolean</code> | Allow credentials. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Allowed headers. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedLocalMediaPath">allowedLocalMediaPath</a></code> | <code>string</code> | Allowing API requests to read local images or videos from directories specified by the server file system. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Allowed methods. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Allowed origins. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.apiKey">apiKey</a></code> | <code>string</code> | If provided, the server will require this key to be presented in the header. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.chatTemplate">chatTemplate</a></code> | <code>string</code> | The file path to the chat template, or the template in single-line form for the specified model. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.chatTemplateContentFormat">chatTemplateContentFormat</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ChatTemplateContentFormat">ChatTemplateContentFormat</a></code> | The format to render message content within a chat template. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.codeRevision">codeRevision</a></code> | <code>string</code> | The specific revision to use for the model code on Hugging Face Hub. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.collectDetailedTraces">collectDetailedTraces</a></code> | <code>string</code> | Valid choices are model,worker,all. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.compilationConfig">compilationConfig</a></code> | <code>{[ key: string ]: any}</code> | torch.compile configuration for the model. When it is a number (0, 1, 2, 3), it will be interpreted as the optimization level. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.configFormat">configFormat</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ConfigFormat">ConfigFormat</a></code> | The format of the model config to load. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableAsyncOutputProc">disableAsyncOutputProc</a></code> | <code>boolean</code> | Disable async output processing. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableCascadeAttn">disableCascadeAttn</a></code> | <code>boolean</code> | Disable cascade attention for V1. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableFastApiDocs">disableFastApiDocs</a></code> | <code>boolean</code> | Disable FastAPI's OpenAPI schema, Swagger UI, and ReDoc endpoint. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableFrontendMultiprocessing">disableFrontendMultiprocessing</a></code> | <code>boolean</code> | If specified, will run the OpenAI frontend server in the same process as the model serving engine. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableLogRequests">disableLogRequests</a></code> | <code>boolean</code> | Disable logging requests. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableLogStats">disableLogStats</a></code> | <code>boolean</code> | Disable logging statistics. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableMmPreprocessorCache">disableMmPreprocessorCache</a></code> | <code>boolean</code> | If true, then disables caching of the multi-modal preprocessor/mapper. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableSlidingWindow">disableSlidingWindow</a></code> | <code>boolean</code> | Disables sliding window, capping to sliding window size. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableUvicornAccessLog">disableUvicornAccessLog</a></code> | <code>boolean</code> | Disable uvicorn access log. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.dtype">dtype</a></code> | <code><a href="#aws-cdk-neuronx-patterns.DataType">DataType</a></code> | Data type for model weights and activations. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableAutoToolChoice">enableAutoToolChoice</a></code> | <code>boolean</code> | Enable auto tool choice for supported models. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enablePromptTokensDetails">enablePromptTokensDetails</a></code> | <code>boolean</code> | Enable prompt_tokens_details in usage. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableReasoning">enableReasoning</a></code> | <code>boolean</code> | Enable reasoning_content for the model. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableRequestIdHeaders">enableRequestIdHeaders</a></code> | <code>boolean</code> | If specified, API server will add X-Request-Id header to responses. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableServerLoadTracking">enableServerLoadTracking</a></code> | <code>boolean</code> | Enable tracking server_load_metrics in the app state. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableSleepMode">enableSleepMode</a></code> | <code>boolean</code> | Enable sleep mode for the engine. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableSslRefresh">enableSslRefresh</a></code> | <code>boolean</code> | Refresh SSL Context when SSL certificate files change. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.enforceEager">enforceEager</a></code> | <code>boolean</code> | Always use eager-mode PyTorch. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.generationConfig">generationConfig</a></code> | <code>string</code> | The folder path to the generation config. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.hfConfigPath">hfConfigPath</a></code> | <code>string</code> | Name or path of the huggingface config to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.hfOverrides">hfOverrides</a></code> | <code>{[ key: string ]: any}</code> | Extra arguments for the HuggingFace config. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.hfToken">hfToken</a></code> | <code>aws-cdk-lib.aws_batch.Secret</code> | The token to use as HTTP bearer authorization for remote files. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.host">host</a></code> | <code>string</code> | Host name. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | The pattern(s) to ignore when loading the model.Default to original/**\/* to avoid repeated loading of llama’s checkpoints. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.kvTransferConfig">kvTransferConfig</a></code> | <code>{[ key: string ]: any}</code> | Configurations for distributed KV cache transfer in object. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.logitsProcessorPattern">logitsProcessorPattern</a></code> | <code>string</code> | Optional regex pattern specifying valid logits processor qualified names that can be passed with the logits_processors extra completion argument. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.loraModules">loraModules</a></code> | <code>{[ key: string ]: any}</code> | LoRA module configurations. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxLogLen">maxLogLen</a></code> | <code>number</code> | Max number of prompt characters or prompt ID numbers in log. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxLogprobs">maxLogprobs</a></code> | <code>number</code> | Max number of log probs to return logprobs is specified in SamplingParams. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxModelLen">maxModelLen</a></code> | <code>number</code> | Model context length. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxSeqLenToCapture">maxSeqLenToCapture</a></code> | <code>number</code> | Maximum sequence length covered by CUDA graphs. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.middleware">middleware</a></code> | <code>string[]</code> | Additional ASGI middleware to apply to the app. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.mmProcessorKwargs">mmProcessorKwargs</a></code> | <code>{[ key: string ]: any}</code> | Overrides for the multimodal input mapping/processing, e.g., image processor. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.model">model</a></code> | <code>string</code> | Name or path of the huggingface model to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.modelImpl">modelImpl</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ModelImpl">ModelImpl</a></code> | Which implementation of the model to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.otlpTracesEndpoint">otlpTracesEndpoint</a></code> | <code>string</code> | Target URL to which OpenTelemetry traces will be sent. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.overrideGenerationConfig">overrideGenerationConfig</a></code> | <code>{[ key: string ]: any}</code> | Overrides or sets generation config. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.overrideNeuronConfig">overrideNeuronConfig</a></code> | <code>{[ key: string ]: any}</code> | Override or set neuron device configuration. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.overridePoolerConfig">overridePoolerConfig</a></code> | <code>{[ key: string ]: any}</code> | Override or set the pooling method for pooling models. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.port">port</a></code> | <code>number</code> | Port number. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.promptAdapters">promptAdapters</a></code> | <code>string[]</code> | Prompt adapter configurations in the format name=path. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.qloraAdapterNameOrPath">qloraAdapterNameOrPath</a></code> | <code>string</code> | Name or path of the QLoRA adapter. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.quantization">quantization</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Quantization">Quantization</a></code> | Method used to quantize the weights. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.responseRole">responseRole</a></code> | <code>string</code> | The role name to return if `request.add_generation_prompt=true`. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.returnTokensAsTokenIds">returnTokensAsTokenIds</a></code> | <code>boolean</code> | When `--max-logprobs` is specified, represents single tokens as strings of the form 'token_id:{token_id}' so that tokens that are not JSON-encodable can be identified.. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.revision">revision</a></code> | <code>string</code> | The specific model version to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.rootPath">rootPath</a></code> | <code>string</code> | FastAPI root_path when app is behind a path based routing proxy. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.ropeScaling">ropeScaling</a></code> | <code>{[ key: string ]: any}</code> | RoPE scaling configuration in JSON format. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.ropeTheta">ropeTheta</a></code> | <code>number</code> | RoPE theta. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.schedulerCls">schedulerCls</a></code> | <code>string</code> | The scheduler class to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.seed">seed</a></code> | <code>number</code> | Random seed for operations. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.servedModelName">servedModelName</a></code> | <code>string[]</code> | The model name(s) used in the API. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.showHiddenMetricsForVersion">showHiddenMetricsForVersion</a></code> | <code>string</code> | Enable deprecated Prometheus metrics that have been hidden since the specified version. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.skipTokenizerInit">skipTokenizerInit</a></code> | <code>boolean</code> | Skip initialization of tokenizer and detokenizer. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslCaCerts">sslCaCerts</a></code> | <code>string</code> | The CA certificates file. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslCertfile">sslCertfile</a></code> | <code>string</code> | The file path to the SSL cert file. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslCertReqs">sslCertReqs</a></code> | <code>number</code> | Whether client certificate is required (see stdlib ssl module's). |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslKeyfile">sslKeyfile</a></code> | <code>string</code> | The file path to the SSL key file. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.task">task</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmTask">VllmTask</a></code> | The task to use the model for. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.tokenizer">tokenizer</a></code> | <code>string</code> | Name or path of the huggingface tokenizer to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.tokenizerMode">tokenizerMode</a></code> | <code><a href="#aws-cdk-neuronx-patterns.TokenizerMode">TokenizerMode</a></code> | The tokenizer mode. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.tokenizerRevision">tokenizerRevision</a></code> | <code>string</code> | Revision of the huggingface tokenizer to use. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.toolCallParser">toolCallParser</a></code> | <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser">ToolCallParser</a></code> | Select the tool call parser depending on the model that you’re using. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.toolParserPlugin">toolParserPlugin</a></code> | <code>string</code> | Specify the tool parser plugin. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.trustRemoteCode">trustRemoteCode</a></code> | <code>boolean</code> | Trust remote code from huggingface. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.useV2BlockManager">useV2BlockManager</a></code> | <code>boolean</code> | Block manager v1 has been removed and SelfAttnBlockSpaceManager (i.e. block manager v2) is now the default. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.uvicornLogLevel">uvicornLogLevel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel">UvicornLogLevel</a></code> | Log level for uvicorn. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.workerCls">workerCls</a></code> | <code>string</code> | The worker class to use for distributed execution. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNamedArguments.property.workerExtensionCls">workerExtensionCls</a></code> | <code>string</code> | The worker extension class. |

---

##### `additionalConfig`<sup>Optional</sup> <a name="additionalConfig" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.additionalConfig"></a>

```typescript
public readonly additionalConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Additional config for specified platform.

Different platforms may support different configs.
Make sure the configs are valid for the platform you are using.
The input format is like ‘{“config_key”:”config_value”}’

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean;
```

- *Type:* boolean
- *Default:* false

Allow credentials.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]
- *Default:* ['*']

Allowed headers.

---

##### `allowedLocalMediaPath`<sup>Optional</sup> <a name="allowedLocalMediaPath" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedLocalMediaPath"></a>

```typescript
public readonly allowedLocalMediaPath: string;
```

- *Type:* string

Allowing API requests to read local images or videos from directories specified by the server file system.

This is a security risk. Should only be enabled in trusted environments.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]
- *Default:* ['*']

Allowed methods.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]
- *Default:* ['*']

Allowed origins.

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

If provided, the server will require this key to be presented in the header.

---

##### `chatTemplate`<sup>Optional</sup> <a name="chatTemplate" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.chatTemplate"></a>

```typescript
public readonly chatTemplate: string;
```

- *Type:* string

The file path to the chat template, or the template in single-line form for the specified model.

---

##### `chatTemplateContentFormat`<sup>Optional</sup> <a name="chatTemplateContentFormat" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.chatTemplateContentFormat"></a>

```typescript
public readonly chatTemplateContentFormat: ChatTemplateContentFormat;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ChatTemplateContentFormat">ChatTemplateContentFormat</a>
- *Default:* ChatTemplateContentFormat.AUTO

The format to render message content within a chat template.

“string” will render the content as a string.
  - Example: `"Hello World"`
- “openai” will render the content as a list of dictionaries, similar to OpenAI schema.
  - Example: `[{"type": "text", "text": "Hello world!"}]`

---

##### `codeRevision`<sup>Optional</sup> <a name="codeRevision" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.codeRevision"></a>

```typescript
public readonly codeRevision: string;
```

- *Type:* string

The specific revision to use for the model code on Hugging Face Hub.

It can be a branch name, a tag name, or a commit id. If unspecified, will use the default version.

---

##### `collectDetailedTraces`<sup>Optional</sup> <a name="collectDetailedTraces" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.collectDetailedTraces"></a>

```typescript
public readonly collectDetailedTraces: string;
```

- *Type:* string

Valid choices are model,worker,all.

It makes sense to set this only if --otlp-traces-endpoint is set.
If set, it will collect detailed traces for the specified modules.
This involves use of possibly costly and or blocking operations and hence might have a performance impact.

---

##### `compilationConfig`<sup>Optional</sup> <a name="compilationConfig" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.compilationConfig"></a>

```typescript
public readonly compilationConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

torch.compile configuration for the model. When it is a number (0, 1, 2, 3), it will be interpreted as the optimization level.

NOTE: level 0 is the default level without any optimization.
level 1 and 2 are for internal testing only. level 3 is the recommended level for production.
To specify the full compilation config, use a JSON string,
e.g. `{"level": 3, "cudagraph_capture_sizes": [1, 2, 4, 8]}` Following the convention of traditional compilers,
using -O without space is also supported. -O3 is equivalent to -O 3.

---

##### `configFormat`<sup>Optional</sup> <a name="configFormat" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.configFormat"></a>

```typescript
public readonly configFormat: ConfigFormat;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ConfigFormat">ConfigFormat</a>
- *Default:* ConfigFormat.AUTO

The format of the model config to load.

---

##### `disableAsyncOutputProc`<sup>Optional</sup> <a name="disableAsyncOutputProc" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableAsyncOutputProc"></a>

```typescript
public readonly disableAsyncOutputProc: boolean;
```

- *Type:* boolean
- *Default:* false

Disable async output processing.

This may result in lower performance.

---

##### `disableCascadeAttn`<sup>Optional</sup> <a name="disableCascadeAttn" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableCascadeAttn"></a>

```typescript
public readonly disableCascadeAttn: boolean;
```

- *Type:* boolean
- *Default:* false

Disable cascade attention for V1.

---

##### `disableFastApiDocs`<sup>Optional</sup> <a name="disableFastApiDocs" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableFastApiDocs"></a>

```typescript
public readonly disableFastApiDocs: boolean;
```

- *Type:* boolean
- *Default:* false

Disable FastAPI's OpenAPI schema, Swagger UI, and ReDoc endpoint.

---

##### `disableFrontendMultiprocessing`<sup>Optional</sup> <a name="disableFrontendMultiprocessing" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableFrontendMultiprocessing"></a>

```typescript
public readonly disableFrontendMultiprocessing: boolean;
```

- *Type:* boolean
- *Default:* false

If specified, will run the OpenAI frontend server in the same process as the model serving engine.

---

##### `disableLogRequests`<sup>Optional</sup> <a name="disableLogRequests" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableLogRequests"></a>

```typescript
public readonly disableLogRequests: boolean;
```

- *Type:* boolean
- *Default:* false

Disable logging requests.

---

##### `disableLogStats`<sup>Optional</sup> <a name="disableLogStats" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableLogStats"></a>

```typescript
public readonly disableLogStats: boolean;
```

- *Type:* boolean
- *Default:* false

Disable logging statistics.

---

##### `disableMmPreprocessorCache`<sup>Optional</sup> <a name="disableMmPreprocessorCache" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableMmPreprocessorCache"></a>

```typescript
public readonly disableMmPreprocessorCache: boolean;
```

- *Type:* boolean
- *Default:* false

If true, then disables caching of the multi-modal preprocessor/mapper.

(not recommended)

---

##### `disableSlidingWindow`<sup>Optional</sup> <a name="disableSlidingWindow" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableSlidingWindow"></a>

```typescript
public readonly disableSlidingWindow: boolean;
```

- *Type:* boolean
- *Default:* false

Disables sliding window, capping to sliding window size.

---

##### `disableUvicornAccessLog`<sup>Optional</sup> <a name="disableUvicornAccessLog" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.disableUvicornAccessLog"></a>

```typescript
public readonly disableUvicornAccessLog: boolean;
```

- *Type:* boolean
- *Default:* false

Disable uvicorn access log.

---

##### `dtype`<sup>Optional</sup> <a name="dtype" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.dtype"></a>

```typescript
public readonly dtype: DataType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.DataType">DataType</a>
- *Default:* DataType.AUTO

Data type for model weights and activations.

---

##### `enableAutoToolChoice`<sup>Optional</sup> <a name="enableAutoToolChoice" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableAutoToolChoice"></a>

```typescript
public readonly enableAutoToolChoice: boolean;
```

- *Type:* boolean
- *Default:* false

Enable auto tool choice for supported models.

Use `--tool-call-parser` to specify which parser to use.

---

##### `enablePromptTokensDetails`<sup>Optional</sup> <a name="enablePromptTokensDetails" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enablePromptTokensDetails"></a>

```typescript
public readonly enablePromptTokensDetails: boolean;
```

- *Type:* boolean
- *Default:* false

Enable prompt_tokens_details in usage.

---

##### `enableReasoning`<sup>Optional</sup> <a name="enableReasoning" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableReasoning"></a>

```typescript
public readonly enableReasoning: boolean;
```

- *Type:* boolean
- *Default:* false

Enable reasoning_content for the model.

---

##### `enableRequestIdHeaders`<sup>Optional</sup> <a name="enableRequestIdHeaders" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableRequestIdHeaders"></a>

```typescript
public readonly enableRequestIdHeaders: boolean;
```

- *Type:* boolean
- *Default:* false

If specified, API server will add X-Request-Id header to responses.

Caution: this hurts performance at high QPS.

---

##### `enableServerLoadTracking`<sup>Optional</sup> <a name="enableServerLoadTracking" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableServerLoadTracking"></a>

```typescript
public readonly enableServerLoadTracking: boolean;
```

- *Type:* boolean
- *Default:* false

Enable tracking server_load_metrics in the app state.

---

##### `enableSleepMode`<sup>Optional</sup> <a name="enableSleepMode" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableSleepMode"></a>

```typescript
public readonly enableSleepMode: boolean;
```

- *Type:* boolean
- *Default:* false

Enable sleep mode for the engine.

(only cuda platform is supported)

---

##### `enableSslRefresh`<sup>Optional</sup> <a name="enableSslRefresh" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enableSslRefresh"></a>

```typescript
public readonly enableSslRefresh: boolean;
```

- *Type:* boolean
- *Default:* false

Refresh SSL Context when SSL certificate files change.

---

##### `enforceEager`<sup>Optional</sup> <a name="enforceEager" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.enforceEager"></a>

```typescript
public readonly enforceEager: boolean;
```

- *Type:* boolean
- *Default:* false

Always use eager-mode PyTorch.

If False, will use eager mode and CUDA graph in hybrid for maximal performance and flexibility.

---

##### `generationConfig`<sup>Optional</sup> <a name="generationConfig" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.generationConfig"></a>

```typescript
public readonly generationConfig: string;
```

- *Type:* string
- *Default:* "auto"

The folder path to the generation config.

Defaults to ‘auto’,
the generation config will be loaded from model path. If set to ‘vllm’,
no generation config is loaded, vLLM defaults will be used.
If set to a folder path, the generation config will be loaded from the specified folder path.
If max_new_tokens is specified in generation config,
then it sets a server-wide limit on the number of output tokens for all requests.

---

##### `hfConfigPath`<sup>Optional</sup> <a name="hfConfigPath" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.hfConfigPath"></a>

```typescript
public readonly hfConfigPath: string;
```

- *Type:* string

Name or path of the huggingface config to use.

If unspecified, model name or path will be used.

---

##### `hfOverrides`<sup>Optional</sup> <a name="hfOverrides" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.hfOverrides"></a>

```typescript
public readonly hfOverrides: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Extra arguments for the HuggingFace config.

This should be a object that will be parsed into a dictionary.

---

##### `hfToken`<sup>Optional</sup> <a name="hfToken" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.hfToken"></a>

```typescript
public readonly hfToken: Secret;
```

- *Type:* aws-cdk-lib.aws_batch.Secret

The token to use as HTTP bearer authorization for remote files.

If provided, the Secret will be passed as HF_TOKEN secret to compile environment.

---

##### `host`<sup>Optional</sup> <a name="host" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host name.

---

##### `ignorePatterns`<sup>Optional</sup> <a name="ignorePatterns" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]
- *Default:* []

The pattern(s) to ignore when loading the model.Default to original/**\/* to avoid repeated loading of llama’s checkpoints.

---

##### `kvTransferConfig`<sup>Optional</sup> <a name="kvTransferConfig" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.kvTransferConfig"></a>

```typescript
public readonly kvTransferConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Configurations for distributed KV cache transfer in object.

---

##### `logitsProcessorPattern`<sup>Optional</sup> <a name="logitsProcessorPattern" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.logitsProcessorPattern"></a>

```typescript
public readonly logitsProcessorPattern: string;
```

- *Type:* string

Optional regex pattern specifying valid logits processor qualified names that can be passed with the logits_processors extra completion argument.

Defaults to None, which allows no processors.

---

##### `loraModules`<sup>Optional</sup> <a name="loraModules" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.loraModules"></a>

```typescript
public readonly loraModules: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

LoRA module configurations.

---

*Example*

```typescript
{"name": "name", "path": "lora_path", "base_model_name": "id"}
```


##### `maxLogLen`<sup>Optional</sup> <a name="maxLogLen" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxLogLen"></a>

```typescript
public readonly maxLogLen: number;
```

- *Type:* number

Max number of prompt characters or prompt ID numbers in log.

---

##### `maxLogprobs`<sup>Optional</sup> <a name="maxLogprobs" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxLogprobs"></a>

```typescript
public readonly maxLogprobs: number;
```

- *Type:* number
- *Default:* 20

Max number of log probs to return logprobs is specified in SamplingParams.

---

##### `maxModelLen`<sup>Optional</sup> <a name="maxModelLen" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxModelLen"></a>

```typescript
public readonly maxModelLen: number;
```

- *Type:* number

Model context length.

---

##### `maxSeqLenToCapture`<sup>Optional</sup> <a name="maxSeqLenToCapture" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.maxSeqLenToCapture"></a>

```typescript
public readonly maxSeqLenToCapture: number;
```

- *Type:* number
- *Default:* 8192

Maximum sequence length covered by CUDA graphs.

When a sequence has context length larger than this, we fall back to eager mode.
Additionally for encoder-decoder models, if the sequence length of the encoder input is larger than this,
we fall back to the eager mode.

---

##### `middleware`<sup>Optional</sup> <a name="middleware" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.middleware"></a>

```typescript
public readonly middleware: string[];
```

- *Type:* string[]
- *Default:* []

Additional ASGI middleware to apply to the app.

We accept multiple –middleware arguments. The value should be an import path.
If a function is provided, vLLM will add it to the server using `@app.middleware('http')`.
If a class is provided, vLLM will add it to the server using `app.add_middleware()`.

---

##### `mmProcessorKwargs`<sup>Optional</sup> <a name="mmProcessorKwargs" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.mmProcessorKwargs"></a>

```typescript
public readonly mmProcessorKwargs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Overrides for the multimodal input mapping/processing, e.g., image processor.

---

*Example*

```typescript
{"num_crops": 4}
```


##### `model`<sup>Optional</sup> <a name="model" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string
- *Default:* "facebook/opt-125m"

Name or path of the huggingface model to use.

---

##### `modelImpl`<sup>Optional</sup> <a name="modelImpl" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.modelImpl"></a>

```typescript
public readonly modelImpl: ModelImpl;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelImpl">ModelImpl</a>
- *Default:* ModelImpl.AUTO

Which implementation of the model to use.

---

##### `otlpTracesEndpoint`<sup>Optional</sup> <a name="otlpTracesEndpoint" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.otlpTracesEndpoint"></a>

```typescript
public readonly otlpTracesEndpoint: string;
```

- *Type:* string

Target URL to which OpenTelemetry traces will be sent.

---

##### `overrideGenerationConfig`<sup>Optional</sup> <a name="overrideGenerationConfig" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.overrideGenerationConfig"></a>

```typescript
public readonly overrideGenerationConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Overrides or sets generation config.

If used with –generation-config=auto, the override parameters will be merged with the default config from the model.
If generation-config is None, only the override parameters are used.

---

*Example*

```typescript
{"temperature": 0.5}
```


##### `overrideNeuronConfig`<sup>Optional</sup> <a name="overrideNeuronConfig" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.overrideNeuronConfig"></a>

```typescript
public readonly overrideNeuronConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Override or set neuron device configuration.

---

*Example*

```typescript
{"cast_logits_dtype": "bloat16"}
```


##### `overridePoolerConfig`<sup>Optional</sup> <a name="overridePoolerConfig" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.overridePoolerConfig"></a>

```typescript
public readonly overridePoolerConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Override or set the pooling method for pooling models.

---

*Example*

```typescript
{"pooling_type": "mean", "normalize": false}
```


##### `port`<sup>Optional</sup> <a name="port" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 8000

Port number.

---

##### `promptAdapters`<sup>Optional</sup> <a name="promptAdapters" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.promptAdapters"></a>

```typescript
public readonly promptAdapters: string[];
```

- *Type:* string[]

Prompt adapter configurations in the format name=path.

Multiple adapters can be specified.

---

##### `qloraAdapterNameOrPath`<sup>Optional</sup> <a name="qloraAdapterNameOrPath" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.qloraAdapterNameOrPath"></a>

```typescript
public readonly qloraAdapterNameOrPath: string;
```

- *Type:* string

Name or path of the QLoRA adapter.

---

##### `quantization`<sup>Optional</sup> <a name="quantization" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.quantization"></a>

```typescript
public readonly quantization: Quantization;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Quantization">Quantization</a>

Method used to quantize the weights.

If None, we first check the quantization_config attribute in the model config file.
If that is None, we assume the model weights are not quantized and use dtype to determine the data type of the weights.

---

##### `responseRole`<sup>Optional</sup> <a name="responseRole" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.responseRole"></a>

```typescript
public readonly responseRole: string;
```

- *Type:* string
- *Default:* "assistant"

The role name to return if `request.add_generation_prompt=true`.

---

##### `returnTokensAsTokenIds`<sup>Optional</sup> <a name="returnTokensAsTokenIds" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.returnTokensAsTokenIds"></a>

```typescript
public readonly returnTokensAsTokenIds: boolean;
```

- *Type:* boolean
- *Default:* false

When `--max-logprobs` is specified, represents single tokens as strings of the form 'token_id:{token_id}' so that tokens that are not JSON-encodable can be identified..

---

##### `revision`<sup>Optional</sup> <a name="revision" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

The specific model version to use.

It can be a branch name, a tag name, or a commit id.
If unspecified, will use the default version.

---

##### `rootPath`<sup>Optional</sup> <a name="rootPath" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

FastAPI root_path when app is behind a path based routing proxy.

---

##### `ropeScaling`<sup>Optional</sup> <a name="ropeScaling" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.ropeScaling"></a>

```typescript
public readonly ropeScaling: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

RoPE scaling configuration in JSON format.

---

*Example*

```typescript
{"rope_type":"dynamic","factor":2.0}
```


##### `ropeTheta`<sup>Optional</sup> <a name="ropeTheta" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.ropeTheta"></a>

```typescript
public readonly ropeTheta: number;
```

- *Type:* number

RoPE theta.

Use with rope_scaling.
In some cases, changing the RoPE theta improves the performance of the scaled model.

---

##### `schedulerCls`<sup>Optional</sup> <a name="schedulerCls" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.schedulerCls"></a>

```typescript
public readonly schedulerCls: string;
```

- *Type:* string
- *Default:* "vllm.core.scheduler.Scheduler"

The scheduler class to use.

---

##### `seed`<sup>Optional</sup> <a name="seed" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.seed"></a>

```typescript
public readonly seed: number;
```

- *Type:* number

Random seed for operations.

---

##### `servedModelName`<sup>Optional</sup> <a name="servedModelName" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.servedModelName"></a>

```typescript
public readonly servedModelName: string[];
```

- *Type:* string[]

The model name(s) used in the API.

If multiple names are provided, the server will respond to any of the provided names.
The model name in the model field of a response will be the first name in this list.
If not specified, the model name will be the same as the `--model` argument.
Noted that this name(s) will also be used in model_name tag content of prometheus metrics,
if multiple names provided, metrics tag will take the first one.

---

##### `showHiddenMetricsForVersion`<sup>Optional</sup> <a name="showHiddenMetricsForVersion" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.showHiddenMetricsForVersion"></a>

```typescript
public readonly showHiddenMetricsForVersion: string;
```

- *Type:* string

Enable deprecated Prometheus metrics that have been hidden since the specified version.

For example, if a previously deprecated metric has been hidden since the v0.7.0 release,
you use –show-hidden-metrics-for-version=0.7 as a temporary escape hatch while you migrate to new metrics.
The metric is likely to be removed completely in an upcoming release.

---

##### `skipTokenizerInit`<sup>Optional</sup> <a name="skipTokenizerInit" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.skipTokenizerInit"></a>

```typescript
public readonly skipTokenizerInit: boolean;
```

- *Type:* boolean
- *Default:* false

Skip initialization of tokenizer and detokenizer.

Expects valid prompt_token_ids and None for prompt from the input.
The generated output will contain token ids.

---

##### `sslCaCerts`<sup>Optional</sup> <a name="sslCaCerts" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslCaCerts"></a>

```typescript
public readonly sslCaCerts: string;
```

- *Type:* string

The CA certificates file.

---

##### `sslCertfile`<sup>Optional</sup> <a name="sslCertfile" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslCertfile"></a>

```typescript
public readonly sslCertfile: string;
```

- *Type:* string

The file path to the SSL cert file.

---

##### `sslCertReqs`<sup>Optional</sup> <a name="sslCertReqs" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslCertReqs"></a>

```typescript
public readonly sslCertReqs: number;
```

- *Type:* number
- *Default:* 0

Whether client certificate is required (see stdlib ssl module's).

---

##### `sslKeyfile`<sup>Optional</sup> <a name="sslKeyfile" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.sslKeyfile"></a>

```typescript
public readonly sslKeyfile: string;
```

- *Type:* string

The file path to the SSL key file.

---

##### `task`<sup>Optional</sup> <a name="task" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.task"></a>

```typescript
public readonly task: VllmTask;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmTask">VllmTask</a>
- *Default:* VllmTask.AUTO

The task to use the model for.

Each vLLM instance only supports one task, even if the same model can be used for multiple tasks.
When the model only supports one task, "auto" can be used to select it; otherwise,
you must specify explicitly which task to use.

---

##### `tokenizer`<sup>Optional</sup> <a name="tokenizer" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.tokenizer"></a>

```typescript
public readonly tokenizer: string;
```

- *Type:* string

Name or path of the huggingface tokenizer to use.

If unspecified, model name or path will be used.

---

##### `tokenizerMode`<sup>Optional</sup> <a name="tokenizerMode" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.tokenizerMode"></a>

```typescript
public readonly tokenizerMode: TokenizerMode;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.TokenizerMode">TokenizerMode</a>
- *Default:* TokenizerMode.AUTO

The tokenizer mode.

---

##### `tokenizerRevision`<sup>Optional</sup> <a name="tokenizerRevision" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.tokenizerRevision"></a>

```typescript
public readonly tokenizerRevision: string;
```

- *Type:* string

Revision of the huggingface tokenizer to use.

It can be a branch name, a tag name, or a commit id. If unspecified, will use the default version.

---

##### `toolCallParser`<sup>Optional</sup> <a name="toolCallParser" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.toolCallParser"></a>

```typescript
public readonly toolCallParser: ToolCallParser;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.ToolCallParser">ToolCallParser</a>

Select the tool call parser depending on the model that you’re using.

This is used to parse the model-generated tool call into OpenAI API format.

Required for `--enable-auto-tool-choice`.

---

##### `toolParserPlugin`<sup>Optional</sup> <a name="toolParserPlugin" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.toolParserPlugin"></a>

```typescript
public readonly toolParserPlugin: string;
```

- *Type:* string
- *Default:* ""

Specify the tool parser plugin.

---

##### `trustRemoteCode`<sup>Optional</sup> <a name="trustRemoteCode" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.trustRemoteCode"></a>

```typescript
public readonly trustRemoteCode: boolean;
```

- *Type:* boolean
- *Default:* false

Trust remote code from huggingface.

---

##### ~~`useV2BlockManager`~~<sup>Optional</sup> <a name="useV2BlockManager" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.useV2BlockManager"></a>

- *Deprecated:* Setting this flag to True or False has no effect on vLLM behavior.

```typescript
public readonly useV2BlockManager: boolean;
```

- *Type:* boolean
- *Default:* true

Block manager v1 has been removed and SelfAttnBlockSpaceManager (i.e. block manager v2) is now the default.

---

##### `uvicornLogLevel`<sup>Optional</sup> <a name="uvicornLogLevel" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.uvicornLogLevel"></a>

```typescript
public readonly uvicornLogLevel: UvicornLogLevel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.UvicornLogLevel">UvicornLogLevel</a>
- *Default:* UvicornLogLevel.INFO

Log level for uvicorn.

---

##### `workerCls`<sup>Optional</sup> <a name="workerCls" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.workerCls"></a>

```typescript
public readonly workerCls: string;
```

- *Type:* string
- *Default:* "auto"

The worker class to use for distributed execution.

---

##### `workerExtensionCls`<sup>Optional</sup> <a name="workerExtensionCls" id="aws-cdk-neuronx-patterns.VllmNamedArguments.property.workerExtensionCls"></a>

```typescript
public readonly workerExtensionCls: string;
```

- *Type:* string
- *Default:* ""

The worker extension class.

---

### VllmNxdInferenceCompiledModel <a name="VllmNxdInferenceCompiledModel" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel"></a>

The model compiled by Neuronx compiler.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.Initializer"></a>

```typescript
import { VllmNxdInferenceCompiledModel } from 'aws-cdk-neuronx-patterns'

const vllmNxdInferenceCompiledModel: VllmNxdInferenceCompiledModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket to upload compiled artifacts. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.compileTimeInstanceType">compileTimeInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.modelName">modelName</a></code> | <code>string</code> | The model name. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | S3 prefix that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.s3Uri">s3Uri</a></code> | <code>string</code> | S3 URL that compiled artifact uploaded. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.weightSize">weightSize</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.vllmArgs">vllmArgs</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments">VllmEngineArguments</a></code> | Passed to the vllm engine at compile time. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket to upload compiled artifacts.

---

##### `compileTimeInstanceType`<sup>Required</sup> <a name="compileTimeInstanceType" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.compileTimeInstanceType"></a>

```typescript
public readonly compileTimeInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The model name.

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

S3 prefix that compiled artifact uploaded.

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

S3 URL that compiled artifact uploaded.

---

##### `weightSize`<sup>Required</sup> <a name="weightSize" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.weightSize"></a>

```typescript
public readonly weightSize: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `vllmArgs`<sup>Required</sup> <a name="vllmArgs" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel.property.vllmArgs"></a>

```typescript
public readonly vllmArgs: VllmEngineArguments;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmEngineArguments">VllmEngineArguments</a>

Passed to the vllm engine at compile time.

---

### VllmNxdInferenceCompileProps <a name="VllmNxdInferenceCompileProps" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps"></a>

Props of VllmNxdInferenceCompiler.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.Initializer"></a>

```typescript
import { VllmNxdInferenceCompileProps } from 'aws-cdk-neuronx-patterns'

const vllmNxdInferenceCompileProps: VllmNxdInferenceCompileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket to upload compiled artifacts. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.model">model</a></code> | <code><a href="#aws-cdk-neuronx-patterns.Model">Model</a></code> | The model to be compiled. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC in which this will launch compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.image">image</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage">INeuronxContainerImage</a></code> | An image of the container where the compile job is executed. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | The instance type of compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.spot">spot</a></code> | <code>boolean</code> | Whether or not to use spot instances. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.vllmArgs">vllmArgs</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArguments">VllmEngineArguments</a></code> | The arguments to pass to the vllm engine. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.volumeSize">volumeSize</a></code> | <code>aws-cdk-lib.Size</code> | The root volume of worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The VPC Subnets this Compute Environment will launch instances in. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket to upload compiled artifacts.

---

##### `model`<sup>Required</sup> <a name="model" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.model"></a>

```typescript
public readonly model: Model;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.Model">Model</a>

The model to be compiled.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC in which this will launch compile worker instance.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

The environment variables to pass to the container.

This is only applicable when using container runtime.

---

##### `image`<sup>Optional</sup> <a name="image" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.image"></a>

```typescript
public readonly image: INeuronxContainerImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage">INeuronxContainerImage</a>
- *Default:* latest image

An image of the container where the compile job is executed.

---

##### `neuronxInstanceType`<sup>Optional</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

The instance type of compile worker instance.

---

##### `spot`<sup>Optional</sup> <a name="spot" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.spot"></a>

```typescript
public readonly spot: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not to use spot instances.

Spot instances are less expensive EC2 instances that can be reclaimed by EC2 at any time; your job will be given two minutes of notice before reclamation.

---

##### `vllmArgs`<sup>Optional</sup> <a name="vllmArgs" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.vllmArgs"></a>

```typescript
public readonly vllmArgs: VllmEngineArguments;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmEngineArguments">VllmEngineArguments</a>
- *Default:* no specific values. use default values.

The arguments to pass to the vllm engine.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.volumeSize"></a>

```typescript
public readonly volumeSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* N bilion parameters * 5GiB EBS

The root volume of worker instance.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* new subnets will be created

The VPC Subnets this Compute Environment will launch instances in.

---

### VllmNxdInferenceImageOptions <a name="VllmNxdInferenceImageOptions" id="aws-cdk-neuronx-patterns.VllmNxdInferenceImageOptions"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmNxdInferenceImageOptions.Initializer"></a>

```typescript
import { VllmNxdInferenceImageOptions } from 'aws-cdk-neuronx-patterns'

const vllmNxdInferenceImageOptions: VllmNxdInferenceImageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceImageOptions.property.vllmGitBranch">vllmGitBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceImageOptions.property.vllmGitCommitHash">vllmGitCommitHash</a></code> | <code>string</code> | *No description.* |

---

##### `vllmGitBranch`<sup>Optional</sup> <a name="vllmGitBranch" id="aws-cdk-neuronx-patterns.VllmNxdInferenceImageOptions.property.vllmGitBranch"></a>

```typescript
public readonly vllmGitBranch: string;
```

- *Type:* string

---

##### `vllmGitCommitHash`<sup>Optional</sup> <a name="vllmGitCommitHash" id="aws-cdk-neuronx-patterns.VllmNxdInferenceImageOptions.property.vllmGitCommitHash"></a>

```typescript
public readonly vllmGitCommitHash: string;
```

- *Type:* string

---

### VllmNxdInferenceTaskDefinitionProps <a name="VllmNxdInferenceTaskDefinitionProps" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps"></a>

Task definition for VllmNxdInference.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.Initializer"></a>

```typescript
import { VllmNxdInferenceTaskDefinitionProps } from 'aws-cdk-neuronx-patterns'

const vllmNxdInferenceTaskDefinitionProps: VllmNxdInferenceTaskDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.enableFaultInjection">enableFaultInjection</a></code> | <code>boolean</code> | Enables fault injection and allows for fault injection requests to be accepted from the task's containers. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.proxyConfiguration">proxyConfiguration</a></code> | <code>aws-cdk-lib.aws_ecs.ProxyConfiguration</code> | The configuration details for the App Mesh proxy. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.volumes">volumes</a></code> | <code>aws-cdk-lib.aws_ecs.Volume[]</code> | The list of volume definitions for the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code>aws-cdk-lib.aws_ecs.InferenceAccelerator[]</code> | The inference accelerators to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.ipcMode">ipcMode</a></code> | <code>aws-cdk-lib.aws_ecs.IpcMode</code> | The IPC resource namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.networkMode">networkMode</a></code> | <code>aws-cdk-lib.aws_ecs.NetworkMode</code> | The Docker networking mode to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.pidMode">pidMode</a></code> | <code>aws-cdk-lib.aws_ecs.PidMode</code> | The process namespace to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.placementConstraints">placementConstraints</a></code> | <code>aws-cdk-lib.aws_ecs.PlacementConstraint[]</code> | An array of placement constraint objects to use for the task. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | The instance type of compile worker instance. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | The number of tensor parallel size. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.compiledModel">compiledModel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel">VllmNxdInferenceCompiledModel</a></code> | The model to be compiled. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to the container. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.image">image</a></code> | <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase">VllmNxdInferenceEcsImageBase</a></code> | The image to be used for the container. |

---

##### `enableFaultInjection`<sup>Optional</sup> <a name="enableFaultInjection" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.enableFaultInjection"></a>

```typescript
public readonly enableFaultInjection: boolean;
```

- *Type:* boolean
- *Default:* undefined - ECS default setting is false

Enables fault injection and allows for fault injection requests to be accepted from the task's containers.

Fault injection only works with tasks using the {@link NetworkMode.AWS_VPC} or {@link NetworkMode.HOST} network modes.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* An execution role will be automatically created if you use ECR images in your task definition.

The name of the IAM task execution role that grants the ECS agent permission to call AWS APIs on your behalf.

The role will be used to retrieve container images from ECR and create CloudWatch log groups.

---

##### `family`<sup>Optional</sup> <a name="family" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string
- *Default:* Automatically generated name.

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `proxyConfiguration`<sup>Optional</sup> <a name="proxyConfiguration" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.proxyConfiguration"></a>

```typescript
public readonly proxyConfiguration: ProxyConfiguration;
```

- *Type:* aws-cdk-lib.aws_ecs.ProxyConfiguration
- *Default:* No proxy configuration.

The configuration details for the App Mesh proxy.

---

##### `taskRole`<sup>Optional</sup> <a name="taskRole" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A task role is automatically created for you.

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.volumes"></a>

```typescript
public readonly volumes: Volume[];
```

- *Type:* aws-cdk-lib.aws_ecs.Volume[]
- *Default:* No volumes are passed to the Docker daemon on a container instance.

The list of volume definitions for the task.

For more information, see
[Task Definition Parameter Volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide//task_definition_parameters.html#volumes).

---

##### `inferenceAccelerators`<sup>Optional</sup> <a name="inferenceAccelerators" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: InferenceAccelerator[];
```

- *Type:* aws-cdk-lib.aws_ecs.InferenceAccelerator[]
- *Default:* No inference accelerators.

The inference accelerators to use for the containers in the task.

Not supported in Fargate.

---

##### `ipcMode`<sup>Optional</sup> <a name="ipcMode" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.ipcMode"></a>

```typescript
public readonly ipcMode: IpcMode;
```

- *Type:* aws-cdk-lib.aws_ecs.IpcMode
- *Default:* IpcMode used by the task is not specified

The IPC resource namespace to use for the containers in the task.

Not supported in Fargate and Windows containers.

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.networkMode"></a>

```typescript
public readonly networkMode: NetworkMode;
```

- *Type:* aws-cdk-lib.aws_ecs.NetworkMode
- *Default:* NetworkMode.BRIDGE for EC2 tasks, AWS_VPC for Fargate tasks.

The Docker networking mode to use for the containers in the task.

The valid values are NONE, BRIDGE, AWS_VPC, and HOST.

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.pidMode"></a>

```typescript
public readonly pidMode: PidMode;
```

- *Type:* aws-cdk-lib.aws_ecs.PidMode
- *Default:* PidMode used by the task is not specified

The process namespace to use for the containers in the task.

Not supported in Windows containers.

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: PlacementConstraint[];
```

- *Type:* aws-cdk-lib.aws_ecs.PlacementConstraint[]
- *Default:* No placement constraints.

An array of placement constraint objects to use for the task.

You can
specify a maximum of 10 constraints per task (this limit includes
constraints in the task definition and those specified at run time).

---

##### `neuronxInstanceType`<sup>Optional</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

The instance type of compile worker instance.

---

##### `tensorParallelSize`<sup>Optional</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number
- *Default:* 1

The number of tensor parallel size.

---

##### `compiledModel`<sup>Required</sup> <a name="compiledModel" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.compiledModel"></a>

```typescript
public readonly compiledModel: VllmNxdInferenceCompiledModel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompiledModel">VllmNxdInferenceCompiledModel</a>

The model to be compiled.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

The environment variables to pass to the container.

This is only applicable when using container runtime.

---

##### `image`<sup>Optional</sup> <a name="image" id="aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinitionProps.property.image"></a>

```typescript
public readonly image: VllmNxdInferenceEcsImageBase;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase">VllmNxdInferenceEcsImageBase</a>
- *Default:* latest VllmNxdInferenceImage

The image to be used for the container.

---

### VllmParallelConfig <a name="VllmParallelConfig" id="aws-cdk-neuronx-patterns.VllmParallelConfig"></a>

Configuration for the distributed execution.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmParallelConfig.Initializer"></a>

```typescript
import { VllmParallelConfig } from 'aws-cdk-neuronx-patterns'

const vllmParallelConfig: VllmParallelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.dataParallelSize">dataParallelSize</a></code> | <code>number</code> | Number of data parallel groups. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.disableCustomAllReduce">disableCustomAllReduce</a></code> | <code>boolean</code> | Disable the custom all-reduce kernel and fall back to NCCL. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.distributedExecutorBackend">distributedExecutorBackend</a></code> | <code><a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend">DistributedExecutorBackend</a></code> | Backend to use for distributed model workers, either “ray” or “mp” (multiprocessing). |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.enableExpertParallel">enableExpertParallel</a></code> | <code>boolean</code> | Use expert parallelism instead of tensor parallelism for MoE layers. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.maxParallelLoadingWorkers">maxParallelLoadingWorkers</a></code> | <code>number</code> | Maximum number of parallal loading workers when loading model sequentially in multiple batches. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.pipelineParallelSize">pipelineParallelSize</a></code> | <code>number</code> | Number of pipeline parallel groups. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.rayWorkersUseNsight">rayWorkersUseNsight</a></code> | <code>boolean</code> | Whether to profile Ray workers with nsight. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmParallelConfig.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | Number of tensor parallel groups. |

---

##### `dataParallelSize`<sup>Optional</sup> <a name="dataParallelSize" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.dataParallelSize"></a>

```typescript
public readonly dataParallelSize: number;
```

- *Type:* number
- *Default:* 1

Number of data parallel groups.

MoE layers will be sharded according to the product of the tensor parallel size and data parallel size.

---

##### `disableCustomAllReduce`<sup>Optional</sup> <a name="disableCustomAllReduce" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.disableCustomAllReduce"></a>

```typescript
public readonly disableCustomAllReduce: boolean;
```

- *Type:* boolean
- *Default:* false

Disable the custom all-reduce kernel and fall back to NCCL.

---

##### `distributedExecutorBackend`<sup>Optional</sup> <a name="distributedExecutorBackend" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.distributedExecutorBackend"></a>

```typescript
public readonly distributedExecutorBackend: DistributedExecutorBackend;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend">DistributedExecutorBackend</a>

Backend to use for distributed model workers, either “ray” or “mp” (multiprocessing).

If the product of pipeline_parallel_size and tensor_parallel_size is less than or equal to the number of GPUs available,
“mp” will be used to keep processing on a single host. Otherwise, this will default to “ray” if Ray is installed and fail otherwise.
Note that tpu and hpu only support Ray for distributed inference.

---

##### `enableExpertParallel`<sup>Optional</sup> <a name="enableExpertParallel" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.enableExpertParallel"></a>

```typescript
public readonly enableExpertParallel: boolean;
```

- *Type:* boolean
- *Default:* false

Use expert parallelism instead of tensor parallelism for MoE layers.

---

##### `maxParallelLoadingWorkers`<sup>Optional</sup> <a name="maxParallelLoadingWorkers" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.maxParallelLoadingWorkers"></a>

```typescript
public readonly maxParallelLoadingWorkers: number;
```

- *Type:* number

Maximum number of parallal loading workers when loading model sequentially in multiple batches.

To avoid RAM OOM when using tensor parallel and large models.

---

##### `pipelineParallelSize`<sup>Optional</sup> <a name="pipelineParallelSize" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.pipelineParallelSize"></a>

```typescript
public readonly pipelineParallelSize: number;
```

- *Type:* number
- *Default:* 1

Number of pipeline parallel groups.

---

##### `rayWorkersUseNsight`<sup>Optional</sup> <a name="rayWorkersUseNsight" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.rayWorkersUseNsight"></a>

```typescript
public readonly rayWorkersUseNsight: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to profile Ray workers with nsight.

> [https://docs.ray.io/en/latest/ray-observability/user-guides/profiling.html#profiling-nsight-profiler](https://docs.ray.io/en/latest/ray-observability/user-guides/profiling.html#profiling-nsight-profiler)

---

##### `tensorParallelSize`<sup>Optional</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.VllmParallelConfig.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number
- *Default:* 1

Number of tensor parallel groups.

---

### VllmPromptAdapterConfig <a name="VllmPromptAdapterConfig" id="aws-cdk-neuronx-patterns.VllmPromptAdapterConfig"></a>

Configuration for PromptAdapters.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmPromptAdapterConfig.Initializer"></a>

```typescript
import { VllmPromptAdapterConfig } from 'aws-cdk-neuronx-patterns'

const vllmPromptAdapterConfig: VllmPromptAdapterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmPromptAdapterConfig.property.enablePromptAdapter">enablePromptAdapter</a></code> | <code>boolean</code> | If True, enable handling of PromptAdapters. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmPromptAdapterConfig.property.maxPromptAdapters">maxPromptAdapters</a></code> | <code>number</code> | Max number of PromptAdapters in a batch. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmPromptAdapterConfig.property.maxPromptAdapterToken">maxPromptAdapterToken</a></code> | <code>number</code> | Max number of PromptAdapters tokens. |

---

##### `enablePromptAdapter`<sup>Optional</sup> <a name="enablePromptAdapter" id="aws-cdk-neuronx-patterns.VllmPromptAdapterConfig.property.enablePromptAdapter"></a>

```typescript
public readonly enablePromptAdapter: boolean;
```

- *Type:* boolean
- *Default:* false

If True, enable handling of PromptAdapters.

---

##### `maxPromptAdapters`<sup>Optional</sup> <a name="maxPromptAdapters" id="aws-cdk-neuronx-patterns.VllmPromptAdapterConfig.property.maxPromptAdapters"></a>

```typescript
public readonly maxPromptAdapters: number;
```

- *Type:* number
- *Default:* 1

Max number of PromptAdapters in a batch.

---

##### `maxPromptAdapterToken`<sup>Optional</sup> <a name="maxPromptAdapterToken" id="aws-cdk-neuronx-patterns.VllmPromptAdapterConfig.property.maxPromptAdapterToken"></a>

```typescript
public readonly maxPromptAdapterToken: number;
```

- *Type:* number
- *Default:* 0

Max number of PromptAdapters tokens.

---

### VllmSchedulerConfig <a name="VllmSchedulerConfig" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.Initializer"></a>

```typescript
import { VllmSchedulerConfig } from 'aws-cdk-neuronx-patterns'

const vllmSchedulerConfig: VllmSchedulerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.disableChunkedMmInput">disableChunkedMmInput</a></code> | <code>boolean</code> | If set to true and chunked prefill is enabled, we do not want to partially schedule a multimodal item. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.enableChunkedPrefill">enableChunkedPrefill</a></code> | <code>boolean</code> | If True, prefill requests can be chunked based on the remaining max_num_batched_tokens. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.longPrefillTokenThreshold">longPrefillTokenThreshold</a></code> | <code>number</code> | For chunked prefill, a request is considered long if the prompt is longer than this number of tokens. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxLongPartialPrefills">maxLongPartialPrefills</a></code> | <code>number</code> | For chunked prefill, the maximum number of prompts longer than long_prefill_token_threshold that will be prefilled concurrently. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxNumBatchedTokens">maxNumBatchedTokens</a></code> | <code>number</code> | Maximum number of tokens to be processed in a single iteration. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxNumPartialPrefills">maxNumPartialPrefills</a></code> | <code>number</code> | For chunked prefill, the maximum number of sequences that can be partially prefilled concurrently. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxNumSeqs">maxNumSeqs</a></code> | <code>number</code> | Maximum number of sequences to be processed in a single iteration. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.multiStepStreamOutputs">multiStepStreamOutputs</a></code> | <code>boolean</code> | If False, then multi-step will stream outputs at the end of all steps. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.numLookaheadSlots">numLookaheadSlots</a></code> | <code>number</code> | The number of slots to allocate per sequence per step, beyond the known token ids. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.numSchedulerSteps">numSchedulerSteps</a></code> | <code>number</code> | Maximum number of forward steps per scheduler call. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.preemptionMode">preemptionMode</a></code> | <code><a href="#aws-cdk-neuronx-patterns.PreemptionMode">PreemptionMode</a></code> | Whether to perform preemption by swapping or recomputation. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.schedulerDelayFactor">schedulerDelayFactor</a></code> | <code>number</code> | Apply a delay (of delay factor multiplied by previous prompt latency) before scheduling next prompt. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.schedulingPolicy">schedulingPolicy</a></code> | <code><a href="#aws-cdk-neuronx-patterns.SchedulingPolicy">SchedulingPolicy</a></code> | The scheduling policy to use: - “fcfs” means first come first served, i.e. requests are handled in order of arrival. - “priority” means requests are handled based on given priority (lower value means earlier handling) and time of arrival deciding any ties). |

---

##### `disableChunkedMmInput`<sup>Optional</sup> <a name="disableChunkedMmInput" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.disableChunkedMmInput"></a>

```typescript
public readonly disableChunkedMmInput: boolean;
```

- *Type:* boolean
- *Default:* false

If set to true and chunked prefill is enabled, we do not want to partially schedule a multimodal item.

Only used in V1 This ensures that if a request has a mixed prompt (like text tokens TTTT followed by image tokens IIIIIIIIII)
where only some image tokens can be scheduled (like TTTTIIIII, leaving IIIII),
it will be scheduled as TTTT in one step and IIIIIIIIII in the next.

---

##### `enableChunkedPrefill`<sup>Optional</sup> <a name="enableChunkedPrefill" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.enableChunkedPrefill"></a>

```typescript
public readonly enableChunkedPrefill: boolean;
```

- *Type:* boolean

If True, prefill requests can be chunked based on the remaining max_num_batched_tokens.

---

##### `longPrefillTokenThreshold`<sup>Optional</sup> <a name="longPrefillTokenThreshold" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.longPrefillTokenThreshold"></a>

```typescript
public readonly longPrefillTokenThreshold: number;
```

- *Type:* number
- *Default:* 0

For chunked prefill, a request is considered long if the prompt is longer than this number of tokens.

---

##### `maxLongPartialPrefills`<sup>Optional</sup> <a name="maxLongPartialPrefills" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxLongPartialPrefills"></a>

```typescript
public readonly maxLongPartialPrefills: number;
```

- *Type:* number
- *Default:* 1

For chunked prefill, the maximum number of prompts longer than long_prefill_token_threshold that will be prefilled concurrently.

Setting this less than max_num_partial_prefills will allow shorter prompts to jump the queue in front of longer prompts in some cases, improving latency.

---

##### `maxNumBatchedTokens`<sup>Optional</sup> <a name="maxNumBatchedTokens" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxNumBatchedTokens"></a>

```typescript
public readonly maxNumBatchedTokens: number;
```

- *Type:* number

Maximum number of tokens to be processed in a single iteration.

This config has no static default. If left unspecified by the user, it will be set in EngineArgs.create_engine_config based on the usage context.

---

##### `maxNumPartialPrefills`<sup>Optional</sup> <a name="maxNumPartialPrefills" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxNumPartialPrefills"></a>

```typescript
public readonly maxNumPartialPrefills: number;
```

- *Type:* number
- *Default:* 1

For chunked prefill, the maximum number of sequences that can be partially prefilled concurrently.

---

##### `maxNumSeqs`<sup>Optional</sup> <a name="maxNumSeqs" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.maxNumSeqs"></a>

```typescript
public readonly maxNumSeqs: number;
```

- *Type:* number

Maximum number of sequences to be processed in a single iteration.

This config has no static default. If left unspecified by the user, it will be set in EngineArgs.create_engine_config based on the usage context.

---

##### `multiStepStreamOutputs`<sup>Optional</sup> <a name="multiStepStreamOutputs" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.multiStepStreamOutputs"></a>

```typescript
public readonly multiStepStreamOutputs: boolean;
```

- *Type:* boolean
- *Default:* true

If False, then multi-step will stream outputs at the end of all steps.

---

##### `numLookaheadSlots`<sup>Optional</sup> <a name="numLookaheadSlots" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.numLookaheadSlots"></a>

```typescript
public readonly numLookaheadSlots: number;
```

- *Type:* number
- *Default:* 0

The number of slots to allocate per sequence per step, beyond the known token ids.

This is used in speculative decoding to store KV activations of tokens
which may or may not be accepted.

NOTE: This will be replaced by speculative config in the future; it is present to enable correctness tests until then.

---

##### `numSchedulerSteps`<sup>Optional</sup> <a name="numSchedulerSteps" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.numSchedulerSteps"></a>

```typescript
public readonly numSchedulerSteps: number;
```

- *Type:* number
- *Default:* 1

Maximum number of forward steps per scheduler call.

---

##### `preemptionMode`<sup>Optional</sup> <a name="preemptionMode" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.preemptionMode"></a>

```typescript
public readonly preemptionMode: PreemptionMode;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.PreemptionMode">PreemptionMode</a>

Whether to perform preemption by swapping or recomputation.

If not specified, we determine the mode as follows:
We use recomputation by default since it incurs lower overhead than swapping.
However, when the sequence group has multiple sequences (e.g., beam search),
recomputation is not currently supported. In such a case, we use swapping instead.

---

##### `schedulerDelayFactor`<sup>Optional</sup> <a name="schedulerDelayFactor" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.schedulerDelayFactor"></a>

```typescript
public readonly schedulerDelayFactor: number;
```

- *Type:* number
- *Default:* 0.0

Apply a delay (of delay factor multiplied by previous prompt latency) before scheduling next prompt.

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="aws-cdk-neuronx-patterns.VllmSchedulerConfig.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: SchedulingPolicy;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.SchedulingPolicy">SchedulingPolicy</a>
- *Default:* SchedulingPolicy.FCFS

The scheduling policy to use: - “fcfs” means first come first served, i.e. requests are handled in order of arrival. - “priority” means requests are handled based on given priority (lower value means earlier handling) and time of arrival deciding any ties).

---

### VllmSpeculativeConfig <a name="VllmSpeculativeConfig" id="aws-cdk-neuronx-patterns.VllmSpeculativeConfig"></a>

Configuration for speculative decoding.

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-patterns.VllmSpeculativeConfig.Initializer"></a>

```typescript
import { VllmSpeculativeConfig } from 'aws-cdk-neuronx-patterns'

const vllmSpeculativeConfig: VllmSpeculativeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmSpeculativeConfig.property.speculativeConfig">speculativeConfig</a></code> | <code>{[ key: string ]: any}</code> | The configurations for speculative decoding. |

---

##### `speculativeConfig`<sup>Optional</sup> <a name="speculativeConfig" id="aws-cdk-neuronx-patterns.VllmSpeculativeConfig.property.speculativeConfig"></a>

```typescript
public readonly speculativeConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The configurations for speculative decoding.

Should be a object.

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

Model.fromBucket(bucket: IBucket, prefix: string, options?: ModelOptions)
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

###### `options`<sup>Optional</sup> <a name="options" id="aws-cdk-neuronx-patterns.Model.fromBucket.parameter.options"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.ModelOptions">ModelOptions</a>

model basic information.

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

model basic information.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Model.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
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

##### `modelName`<sup>Required</sup> <a name="modelName" id="aws-cdk-neuronx-patterns.Model.property.modelName"></a>

```typescript
public readonly modelName: string;
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

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.Initializer"></a>

```typescript
import { NeuronxInstanceType } from 'aws-cdk-neuronx-patterns'

new NeuronxInstanceType()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_24XLARGE">INF2_24XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | inf2.24xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_48XLARGE">INF2_48XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | inf2.48xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_8XLARGE">INF2_8XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | inf2.8xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_XLARGE">INF2_XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | inf2.xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_2XLARGE">TRN1_2XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | trn1.2xlarge. |
| <code><a href="#aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_32XLARGE">TRN1_32XLARGE</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | trn1.32xlarge. |

---

##### `INF2_24XLARGE`<sup>Required</sup> <a name="INF2_24XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_24XLARGE"></a>

```typescript
public readonly INF2_24XLARGE: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

inf2.24xlarge.

---

##### `INF2_48XLARGE`<sup>Required</sup> <a name="INF2_48XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_48XLARGE"></a>

```typescript
public readonly INF2_48XLARGE: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

inf2.48xlarge.

---

##### `INF2_8XLARGE`<sup>Required</sup> <a name="INF2_8XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_8XLARGE"></a>

```typescript
public readonly INF2_8XLARGE: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

inf2.8xlarge.

---

##### `INF2_XLARGE`<sup>Required</sup> <a name="INF2_XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.INF2_XLARGE"></a>

```typescript
public readonly INF2_XLARGE: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

inf2.xlarge.

---

##### `TRN1_2XLARGE`<sup>Required</sup> <a name="TRN1_2XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_2XLARGE"></a>

```typescript
public readonly TRN1_2XLARGE: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

trn1.2xlarge.

---

##### `TRN1_32XLARGE`<sup>Required</sup> <a name="TRN1_32XLARGE" id="aws-cdk-neuronx-patterns.NeuronxInstanceType.property.TRN1_32XLARGE"></a>

```typescript
public readonly TRN1_32XLARGE: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

trn1.32xlarge.

---

### Parameters <a name="Parameters" id="aws-cdk-neuronx-patterns.Parameters"></a>

Represents the amount of parameters.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Parameters.toBillion">toBillion</a></code> | Return this number of parameters as billion. |
| <code><a href="#aws-cdk-neuronx-patterns.Parameters.toMillion">toMillion</a></code> | Return this number of parameters as million. |
| <code><a href="#aws-cdk-neuronx-patterns.Parameters.weightSize">weightSize</a></code> | *No description.* |

---

##### `toBillion` <a name="toBillion" id="aws-cdk-neuronx-patterns.Parameters.toBillion"></a>

```typescript
public toBillion(): number
```

Return this number of parameters as billion.

##### `toMillion` <a name="toMillion" id="aws-cdk-neuronx-patterns.Parameters.toMillion"></a>

```typescript
public toMillion(): number
```

Return this number of parameters as million.

##### `weightSize` <a name="weightSize" id="aws-cdk-neuronx-patterns.Parameters.weightSize"></a>

```typescript
public weightSize(): Size
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Parameters.billion">billion</a></code> | Create a Parameters representing an amount billion. |
| <code><a href="#aws-cdk-neuronx-patterns.Parameters.million">million</a></code> | Create a Parameters representing an amount million. |

---

##### `billion` <a name="billion" id="aws-cdk-neuronx-patterns.Parameters.billion"></a>

```typescript
import { Parameters } from 'aws-cdk-neuronx-patterns'

Parameters.billion(parameters: number)
```

Create a Parameters representing an amount billion.

###### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.Parameters.billion.parameter.parameters"></a>

- *Type:* number

number of parameters billionX.

---

##### `million` <a name="million" id="aws-cdk-neuronx-patterns.Parameters.million"></a>

```typescript
import { Parameters } from 'aws-cdk-neuronx-patterns'

Parameters.million(parameters: number)
```

Create a Parameters representing an amount million.

###### `parameters`<sup>Required</sup> <a name="parameters" id="aws-cdk-neuronx-patterns.Parameters.million.parameter.parameters"></a>

- *Type:* number

number of parameters millionX.

---



### PytorchInferenceNeuronxImage <a name="PytorchInferenceNeuronxImage" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.Initializer"></a>

```typescript
import { PytorchInferenceNeuronxImage } from 'aws-cdk-neuronx-patterns'

new PytorchInferenceNeuronxImage()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.fromNeuronSdkVersion">fromNeuronSdkVersion</a></code> | *No description.* |

---

##### `fromNeuronSdkVersion` <a name="fromNeuronSdkVersion" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.fromNeuronSdkVersion"></a>

```typescript
import { PytorchInferenceNeuronxImage } from 'aws-cdk-neuronx-patterns'

PytorchInferenceNeuronxImage.fromNeuronSdkVersion(neuronSdkVersion: string, pythonVersion: string, pytorchVersion: string, ubuntuVersion: string)
```

###### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.fromNeuronSdkVersion.parameter.neuronSdkVersion"></a>

- *Type:* string

---

###### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.fromNeuronSdkVersion.parameter.pythonVersion"></a>

- *Type:* string

---

###### `pytorchVersion`<sup>Required</sup> <a name="pytorchVersion" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.fromNeuronSdkVersion.parameter.pytorchVersion"></a>

- *Type:* string

---

###### `ubuntuVersion`<sup>Required</sup> <a name="ubuntuVersion" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.fromNeuronSdkVersion.parameter.ubuntuVersion"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.LATEST">LATEST</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Latest Neuron SDK. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_18_0">SDK_2_18_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.18.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_18_1">SDK_2_18_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.18.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_18_2">SDK_2_18_2</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.18.2. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_19_0">SDK_2_19_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.19.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_19_1">SDK_2_19_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.19.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_0">SDK_2_20_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_1">SDK_2_20_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_2">SDK_2_20_2</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.2. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_2_PYTORCH_1_13_1">SDK_2_20_2_PYTORCH_1_13_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.2 (PyTorch 1.13.1). |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_2_PYTORCH_2_1_2">SDK_2_20_2_PYTORCH_2_1_2</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.2 (PyTorch 2.1.2). |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_21_0">SDK_2_21_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.21.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_21_1">SDK_2_21_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.21.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_22_0">SDK_2_22_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.22.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_23_0">SDK_2_23_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.23.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_24_0">SDK_2_24_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.24.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_25_0">SDK_2_25_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.25.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_26_1">SDK_2_26_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.26.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_27_1">SDK_2_27_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.27.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_28_0">SDK_2_28_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.28.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.size">size</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `LATEST`<sup>Required</sup> <a name="LATEST" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.LATEST"></a>

```typescript
public readonly LATEST: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Latest Neuron SDK.

---

##### `SDK_2_18_0`<sup>Required</sup> <a name="SDK_2_18_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_18_0"></a>

```typescript
public readonly SDK_2_18_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.18.0.

---

##### `SDK_2_18_1`<sup>Required</sup> <a name="SDK_2_18_1" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_18_1"></a>

```typescript
public readonly SDK_2_18_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.18.1.

---

##### `SDK_2_18_2`<sup>Required</sup> <a name="SDK_2_18_2" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_18_2"></a>

```typescript
public readonly SDK_2_18_2: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.18.2.

---

##### `SDK_2_19_0`<sup>Required</sup> <a name="SDK_2_19_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_19_0"></a>

```typescript
public readonly SDK_2_19_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.19.0.

---

##### `SDK_2_19_1`<sup>Required</sup> <a name="SDK_2_19_1" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_19_1"></a>

```typescript
public readonly SDK_2_19_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.19.1.

---

##### `SDK_2_20_0`<sup>Required</sup> <a name="SDK_2_20_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_0"></a>

```typescript
public readonly SDK_2_20_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.0.

---

##### `SDK_2_20_1`<sup>Required</sup> <a name="SDK_2_20_1" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_1"></a>

```typescript
public readonly SDK_2_20_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.1.

---

##### `SDK_2_20_2`<sup>Required</sup> <a name="SDK_2_20_2" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_2"></a>

```typescript
public readonly SDK_2_20_2: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.2.

---

##### `SDK_2_20_2_PYTORCH_1_13_1`<sup>Required</sup> <a name="SDK_2_20_2_PYTORCH_1_13_1" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_2_PYTORCH_1_13_1"></a>

```typescript
public readonly SDK_2_20_2_PYTORCH_1_13_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.2 (PyTorch 1.13.1).

---

##### `SDK_2_20_2_PYTORCH_2_1_2`<sup>Required</sup> <a name="SDK_2_20_2_PYTORCH_2_1_2" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_20_2_PYTORCH_2_1_2"></a>

```typescript
public readonly SDK_2_20_2_PYTORCH_2_1_2: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.2 (PyTorch 2.1.2).

---

##### `SDK_2_21_0`<sup>Required</sup> <a name="SDK_2_21_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_21_0"></a>

```typescript
public readonly SDK_2_21_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.21.0.

---

##### `SDK_2_21_1`<sup>Required</sup> <a name="SDK_2_21_1" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_21_1"></a>

```typescript
public readonly SDK_2_21_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.21.1.

---

##### `SDK_2_22_0`<sup>Required</sup> <a name="SDK_2_22_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_22_0"></a>

```typescript
public readonly SDK_2_22_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.22.0.

---

##### `SDK_2_23_0`<sup>Required</sup> <a name="SDK_2_23_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_23_0"></a>

```typescript
public readonly SDK_2_23_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.23.0.

---

##### `SDK_2_24_0`<sup>Required</sup> <a name="SDK_2_24_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_24_0"></a>

```typescript
public readonly SDK_2_24_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.24.0.

---

##### `SDK_2_25_0`<sup>Required</sup> <a name="SDK_2_25_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_25_0"></a>

```typescript
public readonly SDK_2_25_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.25.0.

---

##### `SDK_2_26_1`<sup>Required</sup> <a name="SDK_2_26_1" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_26_1"></a>

```typescript
public readonly SDK_2_26_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.26.1.

---

##### `SDK_2_27_1`<sup>Required</sup> <a name="SDK_2_27_1" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_27_1"></a>

```typescript
public readonly SDK_2_27_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.27.1.

---

##### `SDK_2_28_0`<sup>Required</sup> <a name="SDK_2_28_0" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.SDK_2_28_0"></a>

```typescript
public readonly SDK_2_28_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.28.0.

---

##### `size`<sup>Required</sup> <a name="size" id="aws-cdk-neuronx-patterns.PytorchInferenceNeuronxImage.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* aws-cdk-lib.Size

---

### PytorchTrainingNeuronxImage <a name="PytorchTrainingNeuronxImage" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.Initializer"></a>

```typescript
import { PytorchTrainingNeuronxImage } from 'aws-cdk-neuronx-patterns'

new PytorchTrainingNeuronxImage()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.fromNeuronSdkVersion">fromNeuronSdkVersion</a></code> | *No description.* |

---

##### `fromNeuronSdkVersion` <a name="fromNeuronSdkVersion" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.fromNeuronSdkVersion"></a>

```typescript
import { PytorchTrainingNeuronxImage } from 'aws-cdk-neuronx-patterns'

PytorchTrainingNeuronxImage.fromNeuronSdkVersion(neuronSdkVersion: string, pythonVersion: string, pytorchVersion: string, ubuntuVersion: string)
```

###### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.fromNeuronSdkVersion.parameter.neuronSdkVersion"></a>

- *Type:* string

---

###### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.fromNeuronSdkVersion.parameter.pythonVersion"></a>

- *Type:* string

---

###### `pytorchVersion`<sup>Required</sup> <a name="pytorchVersion" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.fromNeuronSdkVersion.parameter.pytorchVersion"></a>

- *Type:* string

---

###### `ubuntuVersion`<sup>Required</sup> <a name="ubuntuVersion" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.fromNeuronSdkVersion.parameter.ubuntuVersion"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.LATEST">LATEST</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Latest Neuron SDK. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_18_0">SDK_2_18_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.18.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_18_1">SDK_2_18_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.18.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_18_2">SDK_2_18_2</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.18.2. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_19_0">SDK_2_19_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.19.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_19_1">SDK_2_19_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.19.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_20_0">SDK_2_20_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_20_1">SDK_2_20_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_20_2">SDK_2_20_2</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.20.2. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_21_0">SDK_2_21_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.21.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_21_1">SDK_2_21_1</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.21.1. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_22_0">SDK_2_22_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.22.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_23_0">SDK_2_23_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.23.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_24_0">SDK_2_24_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a></code> | Neuron SDK 2.24.0. |
| <code><a href="#aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.size">size</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `LATEST`<sup>Required</sup> <a name="LATEST" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.LATEST"></a>

```typescript
public readonly LATEST: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Latest Neuron SDK.

---

##### `SDK_2_18_0`<sup>Required</sup> <a name="SDK_2_18_0" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_18_0"></a>

```typescript
public readonly SDK_2_18_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.18.0.

---

##### `SDK_2_18_1`<sup>Required</sup> <a name="SDK_2_18_1" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_18_1"></a>

```typescript
public readonly SDK_2_18_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.18.1.

---

##### `SDK_2_18_2`<sup>Required</sup> <a name="SDK_2_18_2" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_18_2"></a>

```typescript
public readonly SDK_2_18_2: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.18.2.

---

##### `SDK_2_19_0`<sup>Required</sup> <a name="SDK_2_19_0" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_19_0"></a>

```typescript
public readonly SDK_2_19_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.19.0.

---

##### `SDK_2_19_1`<sup>Required</sup> <a name="SDK_2_19_1" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_19_1"></a>

```typescript
public readonly SDK_2_19_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.19.1.

---

##### `SDK_2_20_0`<sup>Required</sup> <a name="SDK_2_20_0" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_20_0"></a>

```typescript
public readonly SDK_2_20_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.0.

---

##### `SDK_2_20_1`<sup>Required</sup> <a name="SDK_2_20_1" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_20_1"></a>

```typescript
public readonly SDK_2_20_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.1.

---

##### `SDK_2_20_2`<sup>Required</sup> <a name="SDK_2_20_2" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_20_2"></a>

```typescript
public readonly SDK_2_20_2: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.20.2.

---

##### `SDK_2_21_0`<sup>Required</sup> <a name="SDK_2_21_0" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_21_0"></a>

```typescript
public readonly SDK_2_21_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.21.0.

---

##### `SDK_2_21_1`<sup>Required</sup> <a name="SDK_2_21_1" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_21_1"></a>

```typescript
public readonly SDK_2_21_1: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.21.1.

---

##### `SDK_2_22_0`<sup>Required</sup> <a name="SDK_2_22_0" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_22_0"></a>

```typescript
public readonly SDK_2_22_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.22.0.

---

##### `SDK_2_23_0`<sup>Required</sup> <a name="SDK_2_23_0" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_23_0"></a>

```typescript
public readonly SDK_2_23_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.23.0.

---

##### `SDK_2_24_0`<sup>Required</sup> <a name="SDK_2_24_0" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.SDK_2_24_0"></a>

```typescript
public readonly SDK_2_24_0: INeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

Neuron SDK 2.24.0.

---

##### `size`<sup>Required</sup> <a name="size" id="aws-cdk-neuronx-patterns.PytorchTrainingNeuronxImage.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* aws-cdk-lib.Size

---

### Trainium1Chips <a name="Trainium1Chips" id="aws-cdk-neuronx-patterns.Trainium1Chips"></a>

- *Implements:* <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.Trainium1Chips.Initializer"></a>

```typescript
import { Trainium1Chips } from 'aws-cdk-neuronx-patterns'

new Trainium1Chips(chips: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Trainium1Chips.Initializer.parameter.chips">chips</a></code> | <code>number</code> | *No description.* |

---

##### `chips`<sup>Required</sup> <a name="chips" id="aws-cdk-neuronx-patterns.Trainium1Chips.Initializer.parameter.chips"></a>

- *Type:* number

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Trainium1Chips.property.acceleratorMemory">acceleratorMemory</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Trainium1Chips.property.chips">chips</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Trainium1Chips.property.neuronxCores">neuronxCores</a></code> | <code>number</code> | *No description.* |

---

##### `acceleratorMemory`<sup>Required</sup> <a name="acceleratorMemory" id="aws-cdk-neuronx-patterns.Trainium1Chips.property.acceleratorMemory"></a>

```typescript
public readonly acceleratorMemory: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `chips`<sup>Required</sup> <a name="chips" id="aws-cdk-neuronx-patterns.Trainium1Chips.property.chips"></a>

```typescript
public readonly chips: number;
```

- *Type:* number

---

##### `neuronxCores`<sup>Required</sup> <a name="neuronxCores" id="aws-cdk-neuronx-patterns.Trainium1Chips.property.neuronxCores"></a>

```typescript
public readonly neuronxCores: number;
```

- *Type:* number

---


### VllmEngineArgumentsParser <a name="VllmEngineArgumentsParser" id="aws-cdk-neuronx-patterns.VllmEngineArgumentsParser"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.VllmEngineArgumentsParser.Initializer"></a>

```typescript
import { VllmEngineArgumentsParser } from 'aws-cdk-neuronx-patterns'

new VllmEngineArgumentsParser()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArgumentsParser.cli">cli</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmEngineArgumentsParser.config">config</a></code> | Convert vLLM engine arguments (camel case) to config (kebab case). |

---

##### `cli` <a name="cli" id="aws-cdk-neuronx-patterns.VllmEngineArgumentsParser.cli"></a>

```typescript
import { VllmEngineArgumentsParser } from 'aws-cdk-neuronx-patterns'

VllmEngineArgumentsParser.cli(args: VllmEngineArguments)
```

###### `args`<sup>Required</sup> <a name="args" id="aws-cdk-neuronx-patterns.VllmEngineArgumentsParser.cli.parameter.args"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmEngineArguments">VllmEngineArguments</a>

---

##### `config` <a name="config" id="aws-cdk-neuronx-patterns.VllmEngineArgumentsParser.config"></a>

```typescript
import { VllmEngineArgumentsParser } from 'aws-cdk-neuronx-patterns'

VllmEngineArgumentsParser.config(args: VllmEngineArguments)
```

Convert vLLM engine arguments (camel case) to config (kebab case).

> [https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html#configuration-file](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html#configuration-file)

###### `args`<sup>Required</sup> <a name="args" id="aws-cdk-neuronx-patterns.VllmEngineArgumentsParser.config.parameter.args"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.VllmEngineArguments">VllmEngineArguments</a>

vLLM engine arguments.

---



### VllmInferenceNeuronxImage <a name="VllmInferenceNeuronxImage" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.Initializer"></a>

```typescript
import { VllmInferenceNeuronxImage } from 'aws-cdk-neuronx-patterns'

new VllmInferenceNeuronxImage()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.fromNeuronSdkVersion">fromNeuronSdkVersion</a></code> | *No description.* |

---

##### `fromNeuronSdkVersion` <a name="fromNeuronSdkVersion" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.fromNeuronSdkVersion"></a>

```typescript
import { VllmInferenceNeuronxImage } from 'aws-cdk-neuronx-patterns'

VllmInferenceNeuronxImage.fromNeuronSdkVersion(neuronSdkVersion: string, vllmVersion: string, pythonVersion: string, ubuntuVersion: string)
```

###### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.fromNeuronSdkVersion.parameter.neuronSdkVersion"></a>

- *Type:* string

---

###### `vllmVersion`<sup>Required</sup> <a name="vllmVersion" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.fromNeuronSdkVersion.parameter.vllmVersion"></a>

- *Type:* string

---

###### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.fromNeuronSdkVersion.parameter.pythonVersion"></a>

- *Type:* string

---

###### `ubuntuVersion`<sup>Required</sup> <a name="ubuntuVersion" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.fromNeuronSdkVersion.parameter.ubuntuVersion"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.property.LATEST">LATEST</a></code> | <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a></code> | Latest Neuron SDK. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.property.SDK_2_26_0">SDK_2_26_0</a></code> | <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a></code> | Neuron SDK 2.26.0 with vLLM 0.9.1. |

---

##### `LATEST`<sup>Required</sup> <a name="LATEST" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.property.LATEST"></a>

```typescript
public readonly LATEST: IVllmInferenceNeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a>

Latest Neuron SDK.

---

##### `SDK_2_26_0`<sup>Required</sup> <a name="SDK_2_26_0" id="aws-cdk-neuronx-patterns.VllmInferenceNeuronxImage.property.SDK_2_26_0"></a>

```typescript
public readonly SDK_2_26_0: IVllmInferenceNeuronxImage;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a>

Neuron SDK 2.26.0 with vLLM 0.9.1.

---

### VllmNxdInferenceCompileImage <a name="VllmNxdInferenceCompileImage" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage"></a>

Compile runtime container image for vLLM NxD Inference.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.Initializer"></a>

```typescript
import { VllmNxdInferenceCompileImage } from 'aws-cdk-neuronx-patterns'

new VllmNxdInferenceCompileImage(scope: Construct, id: string, vllmInferenceNeuronxImage?: IVllmInferenceNeuronxImage)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.Initializer.parameter.vllmInferenceNeuronxImage">vllmInferenceNeuronxImage</a></code> | <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `vllmInferenceNeuronxImage`<sup>Optional</sup> <a name="vllmInferenceNeuronxImage" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.Initializer.parameter.vllmInferenceNeuronxImage"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | The container image. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.property.neuronSdkVersion">neuronSdkVersion</a></code> | <code>string</code> | The neuronx SDK version. |

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

The container image.

---

##### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage.property.neuronSdkVersion"></a>

```typescript
public readonly neuronSdkVersion: string;
```

- *Type:* string

The neuronx SDK version.

---


### VllmNxdInferenceEcsImage <a name="VllmNxdInferenceEcsImage" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage"></a>

Inference ECS container image for vLLM on NxD Inference.

This image uses the official AWS Neuron Deep Learning Containers which come with vLLM pre-installed.

*Example*

```typescript
new VllmNxdInferenceEcsImage(VllmInferenceNeuronxImage.LATEST)
```


#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage.Initializer"></a>

```typescript
import { VllmNxdInferenceEcsImage } from 'aws-cdk-neuronx-patterns'

new VllmNxdInferenceEcsImage(vllmInferenceNeuronxImage?: IVllmInferenceNeuronxImage)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage.Initializer.parameter.vllmInferenceNeuronxImage">vllmInferenceNeuronxImage</a></code> | <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a></code> | *No description.* |

---

##### `vllmInferenceNeuronxImage`<sup>Optional</sup> <a name="vllmInferenceNeuronxImage" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage.Initializer.parameter.vllmInferenceNeuronxImage"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | The container image. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage.property.neuronSdkVersion">neuronSdkVersion</a></code> | <code>string</code> | The neuronx SDK version. |

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

The container image.

---

##### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage.property.neuronSdkVersion"></a>

```typescript
public readonly neuronSdkVersion: string;
```

- *Type:* string

The neuronx SDK version.

---


### VllmNxdInferenceEcsImageBase <a name="VllmNxdInferenceEcsImageBase" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase"></a>

- *Implements:* <a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage">INeuronxContainerImage</a>

Base class for VllmNxdInferenceImage.

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase.Initializer"></a>

```typescript
import { VllmNxdInferenceEcsImageBase } from 'aws-cdk-neuronx-patterns'

new VllmNxdInferenceEcsImageBase(neuronxImage: IVllmInferenceNeuronxImage)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase.Initializer.parameter.neuronxImage">neuronxImage</a></code> | <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a></code> | *No description.* |

---

##### `neuronxImage`<sup>Required</sup> <a name="neuronxImage" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase.Initializer.parameter.neuronxImage"></a>

- *Type:* <a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | The container image. |
| <code><a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase.property.neuronSdkVersion">neuronSdkVersion</a></code> | <code>string</code> | The neuronx SDK version. |

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

The container image.

---

##### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase.property.neuronSdkVersion"></a>

```typescript
public readonly neuronSdkVersion: string;
```

- *Type:* string

The neuronx SDK version.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAcceleratorChips <a name="IAcceleratorChips" id="aws-cdk-neuronx-patterns.IAcceleratorChips"></a>

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.Inferentia2Chips">Inferentia2Chips</a>, <a href="#aws-cdk-neuronx-patterns.Trainium1Chips">Trainium1Chips</a>, <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>


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

### INeuronxContainerImage <a name="INeuronxContainerImage" id="aws-cdk-neuronx-patterns.INeuronxContainerImage"></a>

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceCompileImage">VllmNxdInferenceCompileImage</a>, <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImage">VllmNxdInferenceEcsImage</a>, <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceEcsImageBase">VllmNxdInferenceEcsImageBase</a>, <a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage">INeuronxContainerImage</a>

Compile runtime.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | An image of the container where the compile job is executed. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxContainerImage.property.neuronSdkVersion">neuronSdkVersion</a></code> | <code>string</code> | Neuronx version included in container image. |

---

##### `image`<sup>Required</sup> <a name="image" id="aws-cdk-neuronx-patterns.INeuronxContainerImage.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage

An image of the container where the compile job is executed.

---

##### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.INeuronxContainerImage.property.neuronSdkVersion"></a>

```typescript
public readonly neuronSdkVersion: string;
```

- *Type:* string

Neuronx version included in container image.

---

### INeuronxImage <a name="INeuronxImage" id="aws-cdk-neuronx-patterns.INeuronxImage"></a>

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>, <a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxImage.property.neuronSdkVersion">neuronSdkVersion</a></code> | <code>string</code> | *No description.* |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="aws-cdk-neuronx-patterns.INeuronxImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageTag`<sup>Required</sup> <a name="imageTag" id="aws-cdk-neuronx-patterns.INeuronxImage.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.INeuronxImage.property.neuronSdkVersion"></a>

```typescript
public readonly neuronSdkVersion: string;
```

- *Type:* string

---

### INeuronxInstanceType <a name="INeuronxInstanceType" id="aws-cdk-neuronx-patterns.INeuronxInstanceType"></a>

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType.property.acceleratorChips">acceleratorChips</a></code> | <code><a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType.property.memory">memory</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType.property.supportedTensorParallelism">supportedTensorParallelism</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType.property.vCpu">vCpu</a></code> | <code>number</code> | *No description.* |

---

##### `acceleratorChips`<sup>Required</sup> <a name="acceleratorChips" id="aws-cdk-neuronx-patterns.INeuronxInstanceType.property.acceleratorChips"></a>

```typescript
public readonly acceleratorChips: IAcceleratorChips;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.IAcceleratorChips">IAcceleratorChips</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="aws-cdk-neuronx-patterns.INeuronxInstanceType.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `memory`<sup>Required</sup> <a name="memory" id="aws-cdk-neuronx-patterns.INeuronxInstanceType.property.memory"></a>

```typescript
public readonly memory: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `supportedTensorParallelism`<sup>Required</sup> <a name="supportedTensorParallelism" id="aws-cdk-neuronx-patterns.INeuronxInstanceType.property.supportedTensorParallelism"></a>

```typescript
public readonly supportedTensorParallelism: number[];
```

- *Type:* number[]

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="aws-cdk-neuronx-patterns.INeuronxInstanceType.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

---

### INeuronxTaskDefinition <a name="INeuronxTaskDefinition" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition"></a>

- *Extends:* aws-cdk-lib.aws_ecs.IEc2TaskDefinition

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.NeuronxTaskDefinition">NeuronxTaskDefinition</a>, <a href="#aws-cdk-neuronx-patterns.VllmNxdInferenceTaskDefinition">VllmNxdInferenceTaskDefinition</a>, <a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition">INeuronxTaskDefinition</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.taskDefinitionRef">taskDefinitionRef</a></code> | <code>aws-cdk-lib.interfaces.aws_ecs.TaskDefinitionReference</code> | A reference to a TaskDefinition resource. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.compatibility">compatibility</a></code> | <code>aws-cdk-lib.aws_ecs.Compatibility</code> | What launch types this task definition should be compatible with. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isEc2Compatible">isEc2Compatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on an EC2 cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isExternalCompatible">isExternalCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a ECS Anywhere cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isFargateCompatible">isFargateCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on a Fargate cluster. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isManagedInstancesCompatible">isManagedInstancesCompatible</a></code> | <code>boolean</code> | Return true if the task definition can be run on Managed Instances. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.networkMode">networkMode</a></code> | <code>aws-cdk-lib.aws_ecs.NetworkMode</code> | The networking mode to use for the containers in the task. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | ARN of this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role for this task definition. |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.compiledModel">compiledModel</a></code> | <code><a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.neuronxInstanceType">neuronxInstanceType</a></code> | <code><a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.tasksPerInstance">tasksPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.tensorParallelSize">tensorParallelSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `taskDefinitionRef`<sup>Required</sup> <a name="taskDefinitionRef" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.taskDefinitionRef"></a>

```typescript
public readonly taskDefinitionRef: TaskDefinitionReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_ecs.TaskDefinitionReference

A reference to a TaskDefinition resource.

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.compatibility"></a>

```typescript
public readonly compatibility: Compatibility;
```

- *Type:* aws-cdk-lib.aws_ecs.Compatibility

What launch types this task definition should be compatible with.

---

##### `isEc2Compatible`<sup>Required</sup> <a name="isEc2Compatible" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isEc2Compatible"></a>

```typescript
public readonly isEc2Compatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on an EC2 cluster.

---

##### `isExternalCompatible`<sup>Required</sup> <a name="isExternalCompatible" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isExternalCompatible"></a>

```typescript
public readonly isExternalCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a ECS Anywhere cluster.

---

##### `isFargateCompatible`<sup>Required</sup> <a name="isFargateCompatible" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isFargateCompatible"></a>

```typescript
public readonly isFargateCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on a Fargate cluster.

---

##### `isManagedInstancesCompatible`<sup>Required</sup> <a name="isManagedInstancesCompatible" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.isManagedInstancesCompatible"></a>

```typescript
public readonly isManagedInstancesCompatible: boolean;
```

- *Type:* boolean

Return true if the task definition can be run on Managed Instances.

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.networkMode"></a>

```typescript
public readonly networkMode: NetworkMode;
```

- *Type:* aws-cdk-lib.aws_ecs.NetworkMode

The networking mode to use for the containers in the task.

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

ARN of this task definition.

---

##### `taskRole`<sup>Required</sup> <a name="taskRole" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role for this task definition.

---

##### `compiledModel`<sup>Required</sup> <a name="compiledModel" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.compiledModel"></a>

```typescript
public readonly compiledModel: NeuronxCompiledModel;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.NeuronxCompiledModel">NeuronxCompiledModel</a>

---

##### `neuronxInstanceType`<sup>Required</sup> <a name="neuronxInstanceType" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.neuronxInstanceType"></a>

```typescript
public readonly neuronxInstanceType: INeuronxInstanceType;
```

- *Type:* <a href="#aws-cdk-neuronx-patterns.INeuronxInstanceType">INeuronxInstanceType</a>

---

##### `tasksPerInstance`<sup>Required</sup> <a name="tasksPerInstance" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.tasksPerInstance"></a>

```typescript
public readonly tasksPerInstance: number;
```

- *Type:* number

---

##### `tensorParallelSize`<sup>Required</sup> <a name="tensorParallelSize" id="aws-cdk-neuronx-patterns.INeuronxTaskDefinition.property.tensorParallelSize"></a>

```typescript
public readonly tensorParallelSize: number;
```

- *Type:* number

---

### IVllmInferenceNeuronxImage <a name="IVllmInferenceNeuronxImage" id="aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage"></a>

- *Extends:* <a href="#aws-cdk-neuronx-patterns.INeuronxImage">INeuronxImage</a>

- *Implemented By:* <a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage">IVllmInferenceNeuronxImage</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.neuronSdkVersion">neuronSdkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.vllmVersion">vllmVersion</a></code> | <code>string</code> | *No description.* |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageTag`<sup>Required</sup> <a name="imageTag" id="aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `neuronSdkVersion`<sup>Required</sup> <a name="neuronSdkVersion" id="aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.neuronSdkVersion"></a>

```typescript
public readonly neuronSdkVersion: string;
```

- *Type:* string

---

##### `vllmVersion`<sup>Required</sup> <a name="vllmVersion" id="aws-cdk-neuronx-patterns.IVllmInferenceNeuronxImage.property.vllmVersion"></a>

```typescript
public readonly vllmVersion: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### BlockSize <a name="BlockSize" id="aws-cdk-neuronx-patterns.BlockSize"></a>

Cache block size options in number of tokens.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.BlockSize.SIZE_8">SIZE_8</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.BlockSize.SIZE_16">SIZE_16</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.BlockSize.SIZE_32">SIZE_32</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.BlockSize.SIZE_64">SIZE_64</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.BlockSize.SIZE_128">SIZE_128</a></code> | *No description.* |

---

##### `SIZE_8` <a name="SIZE_8" id="aws-cdk-neuronx-patterns.BlockSize.SIZE_8"></a>

---


##### `SIZE_16` <a name="SIZE_16" id="aws-cdk-neuronx-patterns.BlockSize.SIZE_16"></a>

---


##### `SIZE_32` <a name="SIZE_32" id="aws-cdk-neuronx-patterns.BlockSize.SIZE_32"></a>

---


##### `SIZE_64` <a name="SIZE_64" id="aws-cdk-neuronx-patterns.BlockSize.SIZE_64"></a>

---


##### `SIZE_128` <a name="SIZE_128" id="aws-cdk-neuronx-patterns.BlockSize.SIZE_128"></a>

---


### ChatTemplateContentFormat <a name="ChatTemplateContentFormat" id="aws-cdk-neuronx-patterns.ChatTemplateContentFormat"></a>

Format options for rendering message content within a chat template.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ChatTemplateContentFormat.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ChatTemplateContentFormat.STRING">STRING</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ChatTemplateContentFormat.OPENAI">OPENAI</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.ChatTemplateContentFormat.AUTO"></a>

---


##### `STRING` <a name="STRING" id="aws-cdk-neuronx-patterns.ChatTemplateContentFormat.STRING"></a>

---


##### `OPENAI` <a name="OPENAI" id="aws-cdk-neuronx-patterns.ChatTemplateContentFormat.OPENAI"></a>

---


### ConfigFormat <a name="ConfigFormat" id="aws-cdk-neuronx-patterns.ConfigFormat"></a>

Model config format options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ConfigFormat.AUTO">AUTO</a></code> | “auto” will try to load the config in hf format if available else it will try to load in mistral format. |
| <code><a href="#aws-cdk-neuronx-patterns.ConfigFormat.HF">HF</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ConfigFormat.MISTRAL">MISTRAL</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.ConfigFormat.AUTO"></a>

“auto” will try to load the config in hf format if available else it will try to load in mistral format.

---


##### `HF` <a name="HF" id="aws-cdk-neuronx-patterns.ConfigFormat.HF"></a>

---


##### `MISTRAL` <a name="MISTRAL" id="aws-cdk-neuronx-patterns.ConfigFormat.MISTRAL"></a>

---


### DataType <a name="DataType" id="aws-cdk-neuronx-patterns.DataType"></a>

Data types for model weights and activations.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.DataType.AUTO">AUTO</a></code> | “auto” will use FP16 precision for FP32 and FP16 models, and BF16 precision for BF16 models. |
| <code><a href="#aws-cdk-neuronx-patterns.DataType.HALF">HALF</a></code> | “half” for FP16. |
| <code><a href="#aws-cdk-neuronx-patterns.DataType.FLOAT16">FLOAT16</a></code> | “float16” is the same as “half”. |
| <code><a href="#aws-cdk-neuronx-patterns.DataType.BFLOAT16">BFLOAT16</a></code> | “bfloat16” for a balance between precision and range. |
| <code><a href="#aws-cdk-neuronx-patterns.DataType.FLOAT">FLOAT</a></code> | “float” is shorthand for FP32 precision. |
| <code><a href="#aws-cdk-neuronx-patterns.DataType.FLOAT32">FLOAT32</a></code> | “float32” for FP32 precision. |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.DataType.AUTO"></a>

“auto” will use FP16 precision for FP32 and FP16 models, and BF16 precision for BF16 models.

---


##### `HALF` <a name="HALF" id="aws-cdk-neuronx-patterns.DataType.HALF"></a>

“half” for FP16.

Recommended for AWQ quantization.

---


##### `FLOAT16` <a name="FLOAT16" id="aws-cdk-neuronx-patterns.DataType.FLOAT16"></a>

“float16” is the same as “half”.

---


##### `BFLOAT16` <a name="BFLOAT16" id="aws-cdk-neuronx-patterns.DataType.BFLOAT16"></a>

“bfloat16” for a balance between precision and range.

---


##### `FLOAT` <a name="FLOAT" id="aws-cdk-neuronx-patterns.DataType.FLOAT"></a>

“float” is shorthand for FP32 precision.

---


##### `FLOAT32` <a name="FLOAT32" id="aws-cdk-neuronx-patterns.DataType.FLOAT32"></a>

“float32” for FP32 precision.

---


### DataTypeBits <a name="DataTypeBits" id="aws-cdk-neuronx-patterns.DataTypeBits"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.DataTypeBits.BF16_OR_FP16">BF16_OR_FP16</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.DataTypeBits.FP8_OR_INT8">FP8_OR_INT8</a></code> | *No description.* |

---

##### `BF16_OR_FP16` <a name="BF16_OR_FP16" id="aws-cdk-neuronx-patterns.DataTypeBits.BF16_OR_FP16"></a>

---


##### `FP8_OR_INT8` <a name="FP8_OR_INT8" id="aws-cdk-neuronx-patterns.DataTypeBits.FP8_OR_INT8"></a>

---


### Device <a name="Device" id="aws-cdk-neuronx-patterns.Device"></a>

Device type options for vLLM execution.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Device.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Device.CUDA">CUDA</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Device.NEURON">NEURON</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Device.CPU">CPU</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Device.TPU">TPU</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Device.XPU">XPU</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Device.HPU">HPU</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.Device.AUTO"></a>

---


##### `CUDA` <a name="CUDA" id="aws-cdk-neuronx-patterns.Device.CUDA"></a>

---


##### `NEURON` <a name="NEURON" id="aws-cdk-neuronx-patterns.Device.NEURON"></a>

---


##### `CPU` <a name="CPU" id="aws-cdk-neuronx-patterns.Device.CPU"></a>

---


##### `TPU` <a name="TPU" id="aws-cdk-neuronx-patterns.Device.TPU"></a>

---


##### `XPU` <a name="XPU" id="aws-cdk-neuronx-patterns.Device.XPU"></a>

---


##### `HPU` <a name="HPU" id="aws-cdk-neuronx-patterns.Device.HPU"></a>

---


### DistributedExecutorBackend <a name="DistributedExecutorBackend" id="aws-cdk-neuronx-patterns.DistributedExecutorBackend"></a>

Distributed execution backend options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend.RAY">RAY</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend.MP">MP</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend.UNI">UNI</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.DistributedExecutorBackend.EXTERNAL_LAUNCHER">EXTERNAL_LAUNCHER</a></code> | *No description.* |

---

##### `RAY` <a name="RAY" id="aws-cdk-neuronx-patterns.DistributedExecutorBackend.RAY"></a>

---


##### `MP` <a name="MP" id="aws-cdk-neuronx-patterns.DistributedExecutorBackend.MP"></a>

---


##### `UNI` <a name="UNI" id="aws-cdk-neuronx-patterns.DistributedExecutorBackend.UNI"></a>

---


##### `EXTERNAL_LAUNCHER` <a name="EXTERNAL_LAUNCHER" id="aws-cdk-neuronx-patterns.DistributedExecutorBackend.EXTERNAL_LAUNCHER"></a>

---


### GenerationConfig <a name="GenerationConfig" id="aws-cdk-neuronx-patterns.GenerationConfig"></a>

The folder path to the generation config.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.GenerationConfig.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.GenerationConfig.VLLM">VLLM</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.GenerationConfig.AUTO"></a>

---


##### `VLLM` <a name="VLLM" id="aws-cdk-neuronx-patterns.GenerationConfig.VLLM"></a>

---


### GuidedDecodingBackend <a name="GuidedDecodingBackend" id="aws-cdk-neuronx-patterns.GuidedDecodingBackend"></a>

Available guided decoding backends.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend.OUTLINES">OUTLINES</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend.LM_FORMAT_ENFORCER">LM_FORMAT_ENFORCER</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.GuidedDecodingBackend.XGRAMMAR">XGRAMMAR</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.GuidedDecodingBackend.AUTO"></a>

---


##### `OUTLINES` <a name="OUTLINES" id="aws-cdk-neuronx-patterns.GuidedDecodingBackend.OUTLINES"></a>

---


##### `LM_FORMAT_ENFORCER` <a name="LM_FORMAT_ENFORCER" id="aws-cdk-neuronx-patterns.GuidedDecodingBackend.LM_FORMAT_ENFORCER"></a>

---


##### `XGRAMMAR` <a name="XGRAMMAR" id="aws-cdk-neuronx-patterns.GuidedDecodingBackend.XGRAMMAR"></a>

---


### KvCacheDtype <a name="KvCacheDtype" id="aws-cdk-neuronx-patterns.KvCacheDtype"></a>

KV cache data type options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.KvCacheDtype.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.KvCacheDtype.FP8">FP8</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.KvCacheDtype.FP8_E4M3">FP8_E4M3</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.KvCacheDtype.FP8_E5M2">FP8_E5M2</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.KvCacheDtype.AUTO"></a>

---


##### `FP8` <a name="FP8" id="aws-cdk-neuronx-patterns.KvCacheDtype.FP8"></a>

---


##### `FP8_E4M3` <a name="FP8_E4M3" id="aws-cdk-neuronx-patterns.KvCacheDtype.FP8_E4M3"></a>

---


##### `FP8_E5M2` <a name="FP8_E5M2" id="aws-cdk-neuronx-patterns.KvCacheDtype.FP8_E5M2"></a>

---


### LoadFormat <a name="LoadFormat" id="aws-cdk-neuronx-patterns.LoadFormat"></a>

Available model weight loading formats.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.PT">PT</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.SAFETENSORS">SAFETENSORS</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.NPCACHE">NPCACHE</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.DUMMY">DUMMY</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.TENSORIZER">TENSORIZER</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.SHARDED_STATE">SHARDED_STATE</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.GGUF">GGUF</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.BITSANDBYTES">BITSANDBYTES</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.MISTRAL">MISTRAL</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.RUNAI_STREAMER">RUNAI_STREAMER</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoadFormat.FASTSAFETENSORS">FASTSAFETENSORS</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.LoadFormat.AUTO"></a>

---


##### `PT` <a name="PT" id="aws-cdk-neuronx-patterns.LoadFormat.PT"></a>

---


##### `SAFETENSORS` <a name="SAFETENSORS" id="aws-cdk-neuronx-patterns.LoadFormat.SAFETENSORS"></a>

---


##### `NPCACHE` <a name="NPCACHE" id="aws-cdk-neuronx-patterns.LoadFormat.NPCACHE"></a>

---


##### `DUMMY` <a name="DUMMY" id="aws-cdk-neuronx-patterns.LoadFormat.DUMMY"></a>

---


##### `TENSORIZER` <a name="TENSORIZER" id="aws-cdk-neuronx-patterns.LoadFormat.TENSORIZER"></a>

---


##### `SHARDED_STATE` <a name="SHARDED_STATE" id="aws-cdk-neuronx-patterns.LoadFormat.SHARDED_STATE"></a>

---


##### `GGUF` <a name="GGUF" id="aws-cdk-neuronx-patterns.LoadFormat.GGUF"></a>

---


##### `BITSANDBYTES` <a name="BITSANDBYTES" id="aws-cdk-neuronx-patterns.LoadFormat.BITSANDBYTES"></a>

---


##### `MISTRAL` <a name="MISTRAL" id="aws-cdk-neuronx-patterns.LoadFormat.MISTRAL"></a>

---


##### `RUNAI_STREAMER` <a name="RUNAI_STREAMER" id="aws-cdk-neuronx-patterns.LoadFormat.RUNAI_STREAMER"></a>

---


##### `FASTSAFETENSORS` <a name="FASTSAFETENSORS" id="aws-cdk-neuronx-patterns.LoadFormat.FASTSAFETENSORS"></a>

---


### LoraDtype <a name="LoraDtype" id="aws-cdk-neuronx-patterns.LoraDtype"></a>

LoRA data type options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.LoraDtype.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoraDtype.FLOAT16">FLOAT16</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.LoraDtype.BFLOAT16">BFLOAT16</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.LoraDtype.AUTO"></a>

---


##### `FLOAT16` <a name="FLOAT16" id="aws-cdk-neuronx-patterns.LoraDtype.FLOAT16"></a>

---


##### `BFLOAT16` <a name="BFLOAT16" id="aws-cdk-neuronx-patterns.LoraDtype.BFLOAT16"></a>

---


### ModelImpl <a name="ModelImpl" id="aws-cdk-neuronx-patterns.ModelImpl"></a>

Model implementation options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ModelImpl.AUTO">AUTO</a></code> | “auto” will try to use the vLLM implementation if it exists and fall back to the Transformers implementation if no vLLM implementation is available. |
| <code><a href="#aws-cdk-neuronx-patterns.ModelImpl.VLLM">VLLM</a></code> | “vllm” will use the vLLM model implementation. |
| <code><a href="#aws-cdk-neuronx-patterns.ModelImpl.TRANSFORMERS">TRANSFORMERS</a></code> | “transformers” will use the Transformers model implementation. |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.ModelImpl.AUTO"></a>

“auto” will try to use the vLLM implementation if it exists and fall back to the Transformers implementation if no vLLM implementation is available.

---


##### `VLLM` <a name="VLLM" id="aws-cdk-neuronx-patterns.ModelImpl.VLLM"></a>

“vllm” will use the vLLM model implementation.

---


##### `TRANSFORMERS` <a name="TRANSFORMERS" id="aws-cdk-neuronx-patterns.ModelImpl.TRANSFORMERS"></a>

“transformers” will use the Transformers model implementation.

---


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


### PreemptionMode <a name="PreemptionMode" id="aws-cdk-neuronx-patterns.PreemptionMode"></a>

Preemption mode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.PreemptionMode.RECOMPUTE">RECOMPUTE</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.PreemptionMode.SWAP">SWAP</a></code> | *No description.* |

---

##### `RECOMPUTE` <a name="RECOMPUTE" id="aws-cdk-neuronx-patterns.PreemptionMode.RECOMPUTE"></a>

---


##### `SWAP` <a name="SWAP" id="aws-cdk-neuronx-patterns.PreemptionMode.SWAP"></a>

---


### PrefixCachingHashAlgo <a name="PrefixCachingHashAlgo" id="aws-cdk-neuronx-patterns.PrefixCachingHashAlgo"></a>

Hash algorithm options for prefix caching.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.PrefixCachingHashAlgo.BUILTIN">BUILTIN</a></code> | “builtin” is Python’s built-in hash. |
| <code><a href="#aws-cdk-neuronx-patterns.PrefixCachingHashAlgo.SHA256">SHA256</a></code> | “sha256” is collision resistant but with certain overheads. |

---

##### `BUILTIN` <a name="BUILTIN" id="aws-cdk-neuronx-patterns.PrefixCachingHashAlgo.BUILTIN"></a>

“builtin” is Python’s built-in hash.

---


##### `SHA256` <a name="SHA256" id="aws-cdk-neuronx-patterns.PrefixCachingHashAlgo.SHA256"></a>

“sha256” is collision resistant but with certain overheads.

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


### Quantization <a name="Quantization" id="aws-cdk-neuronx-patterns.Quantization"></a>

Quantization methods.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.AQLM">AQLM</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.AWQ">AWQ</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.DEEPSPEEDFP">DEEPSPEEDFP</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.TPU_INT8">TPU_INT8</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.FP8">FP8</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.PTPC_FP8">PTPC_FP8</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.FBGEMM_FP8">FBGEMM_FP8</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.MODELOPT">MODELOPT</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.NVFP4">NVFP4</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.MARLIN">MARLIN</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.GGUF">GGUF</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.GPTQ_MARLIN_24">GPTQ_MARLIN_24</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.GPTQ_MARLIN">GPTQ_MARLIN</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.AWQ_MARLIN">AWQ_MARLIN</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.GPTQ">GPTQ</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.COMPRESSED_TENSORS">COMPRESSED_TENSORS</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.BITSANDBYTES">BITSANDBYTES</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.QQQ">QQQ</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.HQQ">HQQ</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.EXPERTS_INT8">EXPERTS_INT8</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.NEURON_QUANT">NEURON_QUANT</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.IPEX">IPEX</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.QUARK">QUARK</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.MOE_WNA16">MOE_WNA16</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.TORCHAO">TORCHAO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.Quantization.NONE">NONE</a></code> | *No description.* |

---

##### `AQLM` <a name="AQLM" id="aws-cdk-neuronx-patterns.Quantization.AQLM"></a>

---


##### `AWQ` <a name="AWQ" id="aws-cdk-neuronx-patterns.Quantization.AWQ"></a>

---


##### `DEEPSPEEDFP` <a name="DEEPSPEEDFP" id="aws-cdk-neuronx-patterns.Quantization.DEEPSPEEDFP"></a>

---


##### `TPU_INT8` <a name="TPU_INT8" id="aws-cdk-neuronx-patterns.Quantization.TPU_INT8"></a>

---


##### `FP8` <a name="FP8" id="aws-cdk-neuronx-patterns.Quantization.FP8"></a>

---


##### `PTPC_FP8` <a name="PTPC_FP8" id="aws-cdk-neuronx-patterns.Quantization.PTPC_FP8"></a>

---


##### `FBGEMM_FP8` <a name="FBGEMM_FP8" id="aws-cdk-neuronx-patterns.Quantization.FBGEMM_FP8"></a>

---


##### `MODELOPT` <a name="MODELOPT" id="aws-cdk-neuronx-patterns.Quantization.MODELOPT"></a>

---


##### `NVFP4` <a name="NVFP4" id="aws-cdk-neuronx-patterns.Quantization.NVFP4"></a>

---


##### `MARLIN` <a name="MARLIN" id="aws-cdk-neuronx-patterns.Quantization.MARLIN"></a>

---


##### `GGUF` <a name="GGUF" id="aws-cdk-neuronx-patterns.Quantization.GGUF"></a>

---


##### `GPTQ_MARLIN_24` <a name="GPTQ_MARLIN_24" id="aws-cdk-neuronx-patterns.Quantization.GPTQ_MARLIN_24"></a>

---


##### `GPTQ_MARLIN` <a name="GPTQ_MARLIN" id="aws-cdk-neuronx-patterns.Quantization.GPTQ_MARLIN"></a>

---


##### `AWQ_MARLIN` <a name="AWQ_MARLIN" id="aws-cdk-neuronx-patterns.Quantization.AWQ_MARLIN"></a>

---


##### `GPTQ` <a name="GPTQ" id="aws-cdk-neuronx-patterns.Quantization.GPTQ"></a>

---


##### `COMPRESSED_TENSORS` <a name="COMPRESSED_TENSORS" id="aws-cdk-neuronx-patterns.Quantization.COMPRESSED_TENSORS"></a>

---


##### `BITSANDBYTES` <a name="BITSANDBYTES" id="aws-cdk-neuronx-patterns.Quantization.BITSANDBYTES"></a>

---


##### `QQQ` <a name="QQQ" id="aws-cdk-neuronx-patterns.Quantization.QQQ"></a>

---


##### `HQQ` <a name="HQQ" id="aws-cdk-neuronx-patterns.Quantization.HQQ"></a>

---


##### `EXPERTS_INT8` <a name="EXPERTS_INT8" id="aws-cdk-neuronx-patterns.Quantization.EXPERTS_INT8"></a>

---


##### `NEURON_QUANT` <a name="NEURON_QUANT" id="aws-cdk-neuronx-patterns.Quantization.NEURON_QUANT"></a>

---


##### `IPEX` <a name="IPEX" id="aws-cdk-neuronx-patterns.Quantization.IPEX"></a>

---


##### `QUARK` <a name="QUARK" id="aws-cdk-neuronx-patterns.Quantization.QUARK"></a>

---


##### `MOE_WNA16` <a name="MOE_WNA16" id="aws-cdk-neuronx-patterns.Quantization.MOE_WNA16"></a>

---


##### `TORCHAO` <a name="TORCHAO" id="aws-cdk-neuronx-patterns.Quantization.TORCHAO"></a>

---


##### `NONE` <a name="NONE" id="aws-cdk-neuronx-patterns.Quantization.NONE"></a>

---


### ReasoningParser <a name="ReasoningParser" id="aws-cdk-neuronx-patterns.ReasoningParser"></a>

Available reasoning parsers.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ReasoningParser.DEEPSEEK_R1">DEEPSEEK_R1</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ReasoningParser.GRANITE">GRANITE</a></code> | *No description.* |

---

##### `DEEPSEEK_R1` <a name="DEEPSEEK_R1" id="aws-cdk-neuronx-patterns.ReasoningParser.DEEPSEEK_R1"></a>

---


##### `GRANITE` <a name="GRANITE" id="aws-cdk-neuronx-patterns.ReasoningParser.GRANITE"></a>

---


### SchedulingPolicy <a name="SchedulingPolicy" id="aws-cdk-neuronx-patterns.SchedulingPolicy"></a>

Scheduling policy options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.SchedulingPolicy.FCFS">FCFS</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.SchedulingPolicy.PRIORITY">PRIORITY</a></code> | *No description.* |

---

##### `FCFS` <a name="FCFS" id="aws-cdk-neuronx-patterns.SchedulingPolicy.FCFS"></a>

---


##### `PRIORITY` <a name="PRIORITY" id="aws-cdk-neuronx-patterns.SchedulingPolicy.PRIORITY"></a>

---


### TokenizerMode <a name="TokenizerMode" id="aws-cdk-neuronx-patterns.TokenizerMode"></a>

Tokenizer mode options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TokenizerMode.AUTO">AUTO</a></code> | “auto” will use the fast tokenizer if available. |
| <code><a href="#aws-cdk-neuronx-patterns.TokenizerMode.SLOW">SLOW</a></code> | “slow” will always use the slow tokenizer. |
| <code><a href="#aws-cdk-neuronx-patterns.TokenizerMode.MISTRAL">MISTRAL</a></code> | “mistral” will always use the mistral_common tokenizer. |
| <code><a href="#aws-cdk-neuronx-patterns.TokenizerMode.CUSTOM">CUSTOM</a></code> | “custom” will use –tokenizer to select the preregistered tokenizer. |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.TokenizerMode.AUTO"></a>

“auto” will use the fast tokenizer if available.

---


##### `SLOW` <a name="SLOW" id="aws-cdk-neuronx-patterns.TokenizerMode.SLOW"></a>

“slow” will always use the slow tokenizer.

---


##### `MISTRAL` <a name="MISTRAL" id="aws-cdk-neuronx-patterns.TokenizerMode.MISTRAL"></a>

“mistral” will always use the mistral_common tokenizer.

---


##### `CUSTOM` <a name="CUSTOM" id="aws-cdk-neuronx-patterns.TokenizerMode.CUSTOM"></a>

“custom” will use –tokenizer to select the preregistered tokenizer.

---


### TokenizerPoolType <a name="TokenizerPoolType" id="aws-cdk-neuronx-patterns.TokenizerPoolType"></a>

Tokenizer pool type options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.TokenizerPoolType.RAY">RAY</a></code> | *No description.* |

---

##### `RAY` <a name="RAY" id="aws-cdk-neuronx-patterns.TokenizerPoolType.RAY"></a>

---


### ToolCallParser <a name="ToolCallParser" id="aws-cdk-neuronx-patterns.ToolCallParser"></a>

Tool call parser options.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.GRANITE_20B_FC">GRANITE_20B_FC</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.GRANITE">GRANITE</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.HERMES">HERMES</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.INTERNLM">INTERNLM</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.JAMBA">JAMBA</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.LLAMA3_JSON">LLAMA3_JSON</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.MISTRAL">MISTRAL</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.PHI4_MINI_JSON">PHI4_MINI_JSON</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.ToolCallParser.PYTHONIC">PYTHONIC</a></code> | *No description.* |

---

##### `GRANITE_20B_FC` <a name="GRANITE_20B_FC" id="aws-cdk-neuronx-patterns.ToolCallParser.GRANITE_20B_FC"></a>

---


##### `GRANITE` <a name="GRANITE" id="aws-cdk-neuronx-patterns.ToolCallParser.GRANITE"></a>

---


##### `HERMES` <a name="HERMES" id="aws-cdk-neuronx-patterns.ToolCallParser.HERMES"></a>

---


##### `INTERNLM` <a name="INTERNLM" id="aws-cdk-neuronx-patterns.ToolCallParser.INTERNLM"></a>

---


##### `JAMBA` <a name="JAMBA" id="aws-cdk-neuronx-patterns.ToolCallParser.JAMBA"></a>

---


##### `LLAMA3_JSON` <a name="LLAMA3_JSON" id="aws-cdk-neuronx-patterns.ToolCallParser.LLAMA3_JSON"></a>

---


##### `MISTRAL` <a name="MISTRAL" id="aws-cdk-neuronx-patterns.ToolCallParser.MISTRAL"></a>

---


##### `PHI4_MINI_JSON` <a name="PHI4_MINI_JSON" id="aws-cdk-neuronx-patterns.ToolCallParser.PHI4_MINI_JSON"></a>

---


##### `PYTHONIC` <a name="PYTHONIC" id="aws-cdk-neuronx-patterns.ToolCallParser.PYTHONIC"></a>

---


### UvicornLogLevel <a name="UvicornLogLevel" id="aws-cdk-neuronx-patterns.UvicornLogLevel"></a>

Log level options for Uvicorn.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel.WARNING">WARNING</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel.CRITICAL">CRITICAL</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.UvicornLogLevel.TRACE">TRACE</a></code> | *No description.* |

---

##### `DEBUG` <a name="DEBUG" id="aws-cdk-neuronx-patterns.UvicornLogLevel.DEBUG"></a>

---


##### `INFO` <a name="INFO" id="aws-cdk-neuronx-patterns.UvicornLogLevel.INFO"></a>

---


##### `WARNING` <a name="WARNING" id="aws-cdk-neuronx-patterns.UvicornLogLevel.WARNING"></a>

---


##### `ERROR` <a name="ERROR" id="aws-cdk-neuronx-patterns.UvicornLogLevel.ERROR"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="aws-cdk-neuronx-patterns.UvicornLogLevel.CRITICAL"></a>

---


##### `TRACE` <a name="TRACE" id="aws-cdk-neuronx-patterns.UvicornLogLevel.TRACE"></a>

---


### VllmTask <a name="VllmTask" id="aws-cdk-neuronx-patterns.VllmTask"></a>

Task options for model usage.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.GENERATE">GENERATE</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.EMBEDDING">EMBEDDING</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.EMBED">EMBED</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.CLASSIFY">CLASSIFY</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.SCORE">SCORE</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.REWARD">REWARD</a></code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-patterns.VllmTask.TRANSCRIPTION">TRANSCRIPTION</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="aws-cdk-neuronx-patterns.VllmTask.AUTO"></a>

---


##### `GENERATE` <a name="GENERATE" id="aws-cdk-neuronx-patterns.VllmTask.GENERATE"></a>

---


##### `EMBEDDING` <a name="EMBEDDING" id="aws-cdk-neuronx-patterns.VllmTask.EMBEDDING"></a>

---


##### `EMBED` <a name="EMBED" id="aws-cdk-neuronx-patterns.VllmTask.EMBED"></a>

---


##### `CLASSIFY` <a name="CLASSIFY" id="aws-cdk-neuronx-patterns.VllmTask.CLASSIFY"></a>

---


##### `SCORE` <a name="SCORE" id="aws-cdk-neuronx-patterns.VllmTask.SCORE"></a>

---


##### `REWARD` <a name="REWARD" id="aws-cdk-neuronx-patterns.VllmTask.REWARD"></a>

---


##### `TRANSCRIPTION` <a name="TRANSCRIPTION" id="aws-cdk-neuronx-patterns.VllmTask.TRANSCRIPTION"></a>

---

