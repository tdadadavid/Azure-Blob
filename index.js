import pptxgen from "pptxgenjs";
import { containerClient } from "./blob.js";

const pptx = new pptxgen();

async function slide() {
  const slide = pptx.addSlide();

  slide.addText("This is a test slide", {
    x: 100,
    y: 100,
    w: 10,
    bold: false,
    italic: true,
    fontSize: 36,
    fill: { color: "F1F1F1" },
    align: "center",
  });

  const presentationFile = await pptx.write({
    outputType: "STREAM",
    compression: true,
  });

  return presentationFile;
}

async function upload() {
  const presentationFileBuffer = await slide();
  const blockBlobClient = containerClient.getBlockBlobClient(`test_${Math.random()}.pptx`)
  const response = await blockBlobClient.uploadData(presentationFileBuffer);
  console.log(response);
}

upload()
  