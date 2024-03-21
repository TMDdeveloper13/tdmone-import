import { SerialNumber } from '../database/models';
class SerialNumberService {
	constructor() {

	}

	public generateSerialNumber = async (type: any, code: any) => {
		const data: any = await SerialNumber.findOne({ where: { code: code } });
		if (data) {
			let serialNum = data.lastNumber + 1;
			await SerialNumber.update({ lastNumber: serialNum }, {
				where: {
					id: data.id,
				}
			});
			let paddedNumber = String(serialNum).padStart(5, '0');
			return `${type}${data.financialYear}${paddedNumber}`;
		} else {
			return false
		}
	}
}


let serialNumberService = new SerialNumberService();

export default serialNumberService;