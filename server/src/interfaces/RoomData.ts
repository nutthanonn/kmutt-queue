export interface MicrosoftProfile {
  "@odata.context": string;
  businessPhones: string[];
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
  id: string;
}

export interface RoomData {
  roomId: string;
  data: {
    queue: number;
    user: MicrosoftProfile;
  }[];
}
