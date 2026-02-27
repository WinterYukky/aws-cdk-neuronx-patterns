import { type CdkCustomResourceHandler } from "aws-lambda";

export const onEvent: CdkCustomResourceHandler = async (event) => {
  console.log(event);
  const image = JSON.parse(event.ResourceProperties.image);
  console.log(image);
  return {
    Data: image,
  };
};
