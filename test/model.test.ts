import { Model, Parameters } from "../src";

describe("Model.fromHuggingFace", () => {
  it("When the number of parameters is included in the model ID, the number of parameters should be inferred", () => {
    const model = Model.fromHuggingFace("example/example-7b-chat");
    expect(model.options.parameters).toStrictEqual(Parameters.billion(7));
  });
  it("When the number of parameters is not included in the model ID, an error should be thrown", () => {
    const when = () => Model.fromHuggingFace("example/example-chat");
    expect(when).toThrow(
      "The number of parameters cannot be inferred from the model ID. Set optional parameters.",
    );
  });
  it("When the number of parameters is set as an option, it should be set as is", () => {
    const model = Model.fromHuggingFace("example/no1b-chat", {
      parameters: Parameters.billion(7),
    });
    expect(model.options.parameters).toStrictEqual(Parameters.billion(7));
  });
});
