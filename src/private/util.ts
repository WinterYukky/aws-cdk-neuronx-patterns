import { Size } from "aws-cdk-lib";
import { CompileOptions, Parameters, QuantDtype } from "../model";

export function calcTpDegree(
  parameters: Parameters,
  compileOptions: CompileOptions,
) {
  // case of float16
  const bytesPerParamete = 16 / 8;
  // memory = bytes per parameter * number of parameters
  let memory = Size.gibibytes(bytesPerParamete * parameters.toBilion());
  switch (compileOptions.quantDtype) {
    case QuantDtype.S8:
      memory = Size.gibibytes(Math.floor(memory.toGibibytes() * 0.7));
      break;
  }
  if (compileOptions.nPositions && compileOptions.nPositions < 4096) {
    memory = Size.gibibytes(
      memory.toGibibytes() -
        Math.floor((compileOptions.nPositions! / 4096) * 0.1),
    );
  }
  const neronxCoreMemory = Size.gibibytes(16);
  const minimum = Math.ceil(
    memory.toGibibytes() / neronxCoreMemory.toGibibytes(),
  );

  const tpDegrees = [1, 2, 4, 8, 24];
  for (const tpDegree of tpDegrees) {
    if (minimum <= tpDegree) {
      return tpDegree;
    }
  }
  throw new Error(
    "This model is too large, I can not support this model current version.",
  );
}
