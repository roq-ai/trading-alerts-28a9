interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Analyst'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Trader', 'Analyst'],
  tenantName: 'Business',
  applicationName: 'Trading Alerts',
  addOns: ['notifications'],
};
