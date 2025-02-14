export interface Configuration extends AuthenticationParameters {
  srcPath: string;
  portalPath: string;
  assets: {
    [assetName: string]: string;
  };
}

export interface AuthenticationParameters {
  environmentUrl: string;
  credentials: {
    clientId: string;
    clientSecret: string;
    authority: string;
    tenantId: string;
  };
}

export interface Asset {
  entityLogicalName: AssetEntityLogicalName;
  id: string;
  contentAttribute: string;
  contentFilePath: string;
  portalName: string;
}

export type AssetEntityLogicalName =
  | "adx_entityform"
  | "adx_webfile"
  | "adx_webformstep";

export interface BasicForm {
  adx_entityformid: string;
}

export interface AdvancedFormStep {
  adx_webformstepid: string;
}
