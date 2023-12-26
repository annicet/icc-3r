import { type CivilStatus } from './CivilStatus'
import { type Gender } from './Gender'

export interface Member {
  lastName: string

  firstName: string

  phoneNumber: string

  gender: Gender

  whatsappPhoneNumber: string

  email?: string

  civilStatus?: CivilStatus

  isBornAgain?: boolean

  wantsToBeBornAgain?: boolean

  hasLocalChruch?: boolean

  wantsToJoinIcc?: boolean

  wantsToBeCalledByALeader?: boolean

  wantsToJoinFI?: boolean

  wantsToRegisterToBDR?: boolean

  wantsIEBIInfos?: boolean

  wantsBDRInfos?: boolean

  wantsFIInfos?: boolean

  wantsMJIInfos?: boolean

  wantsEventInfos?: boolean

  address: string

  ageRange: string

  city: string

  comments: string

  country: string

  invitedBy: string

  postalCode: string
}
