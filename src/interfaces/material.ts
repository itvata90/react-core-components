export interface MaterialList {
  digital: number;
  analogueStandard: number;
  analogueOPX: number;
  combo: number;
  batteryBackup: string;
  COT: number;
  FourWireEM: number;
  installation: string;
  IPTrunkLicenses: number;
  CCISoverIPNetworkingTrunks: number;
  twoChannel: number;
  tenChannel: number;
  twentyChannel: number;
  thirtyChannel: number;
  extenalMOHIsolator: boolean;
  memoryExpansionFourGB: boolean;
  additionalPortLicense: number;
  expansionTwoUChassis: number;
  NECBXSBC: string;
}

export const initMaterialList: MaterialList = {
  digital: 0,
  analogueStandard: 0,
  analogueOPX: 0,
  combo: 0,
  batteryBackup: 'none',
  COT: 0,
  FourWireEM: 0,
  installation: 'none',
  IPTrunkLicenses: 0,
  CCISoverIPNetworkingTrunks: 0,
  twoChannel: 0,
  tenChannel: 0,
  twentyChannel: 0,
  thirtyChannel: 0,
  extenalMOHIsolator: false,
  memoryExpansionFourGB: false,
  additionalPortLicense: 0,
  expansionTwoUChassis: 0,
  NECBXSBC: 'yes',
};

export interface Material {
  materialId: string;
  materialName: string | number;
  createAt?: string;
  materialOption?: string | number | boolean;
}
