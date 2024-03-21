import fs from "fs";
import csv from "csv-parser";
import xlsx from "xlsx";

// Custom file upload middleware
const invoiceImportMiddleware = async(req: any, res: any, next: any) => {
  // const jsonArray = await parseCSV(req.file!.path);
  const jsonArray = parseXLSX(req.file!.path);
  req.convertedData = jsonArray; // Attach jsonDataArray to the request for later use
  next();
};

// Function to parse CSV file
const parseCSV = async (filePath: string) => {
  return new Promise((resolve, reject) => {
    const jsonArray: any = [];
    const fileStream = fs.createReadStream(filePath);

    fileStream
      .pipe(csv())
      .on("data", (data: any) => jsonArray.push(data))
      .on("end", () => {
        resolve(jsonArray);
        fileStream.close();
      })
      .on("error", (error: any) => reject(error));
  });
};

// Function to parse XLSX file
const parseXLSX = (filePath: string) => {
  const workbook = xlsx.readFile(filePath);
  const sheetNames = workbook.SheetNames;

  const sheetData: Record<string, any[]> = {};

  sheetNames.forEach((sheetName) => {
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    sheetData[sheetName] = data;
  });

  return sheetData;
};

export default invoiceImportMiddleware;
